var express = require('express');
var router = express.Router();


const verifyUser = (req, res, next) => {
  try {
    const user_id = res.locals.enc.decrypt(req.param('t'));
    req.user_id = user_id;
  } catch (e) {
    console.warn('Unverified User.');

    res.status(403);
    res.json({
      status: 403,
      message: "You must have a valid token to access this page."
    });

    return;
  }

  next();
}

/* GET users listing. */
 router.get('/', verifyUser, function(req, res, next) {
    const connection = res.locals.connection;
    connection.query('SELECT * from user_details', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
 });
});
router.get('/organisation',verifyUser, function(req,res,next){
  const connection = res.locals.connection;
  connection.query("SELECT * from social_organization order by Organization_type", function(error,results,fields){
    if(error) throw error;
    res.json(results);
  })
})

router.get('/org', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  connection.query("SELECT DISTINCT Organization_type as type, count(*) as number from social_organization group by Organization_type;", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
});
});

//router for oldhome
router.get('/oldhome', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  connection.query("SELECT * from social_organization where Organization_Type='Old Home'", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
  });
});
router.get('/oldhome/don', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  connection.query("SELECT s.Organization_name as name,s.Organization_type as type,sum(Amount) as amount from social_organization s inner join donation d on s.Organization_id=d.Organization_id group by Organization_name", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
});
});

//router from drug rehab
router.get('/drugrehab', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  connection.query("SELECT * from social_organization where Organization_Type like 'Drug%'", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
});
});
//router from child welfare
router.get('/child', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  connection.query("SELECT * from social_organization where Organization_Type='Child Welfare'", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
  });
});
//router from women empowerment
router.get('/women', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  connection.query("SELECT * from social_organization where Organization_Type='Women Empowerment'", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
  });
});

//victim
router.get('/victim', verifyUser, function(req, res, next) {
  const connection = res.locals.connection;
  const sql = "SELECT v.name as vn,v.age as va,v.Financial_Status as vf,s.Organization_name as name,s.Organization_type as type from social_organization s inner join victim v on s.Organization_id=v.Organization_id group by Organization_name";
connection.query(sql, function (error, results, fields) {
 if (error) throw error;
 res.json(results);
});
});
//deleting users
router.post('/delete', function(req, res, next) {
  res.locals.connection.query("Delete from user_details WHERE id=?",[req.body.id], 
  function (error, results, fields) {
      if(error) throw error;
      res.json(results);
  });
});
router.post('/deleteOeg', function(req, res, next) {
  res.locals.connection.query("Delete from social_organization WHERE id=?",[req.body.id], 
  function (error, results, fields) {
      if(error) throw error;
      res.json(results);
  });
});
//editing users
router.post('/edit', function(req, res, next) {
  res.locals.connection.query("UPDATE user_details SET name='"+req.body.name+"',email='"+req.body.email+"' where id="+req.body.id+"", 
  function (error, results, fields) {
      if(error) throw error;
      res.json(results);
  });
});
router.post('/orgedit', function(req, res, next) {
  res.locals.connection.query("UPDATE social_organization SET Organization_name='"+req.body.name+"',Organization_Type='"+req.body.type+"' where Organization_id="+req.body.id+"", 
  function (error, results, fields) {
      if(error) throw error;
      res.json(results);
  });
});

//Create new entry into registry
router.post('/new', function(req, res, next) {
  res.locals.connection.query("insert into user_details(id,name,email,password) values ('','"+req.body.name+"','"+req.body.email+"','"+req.body.password+"')", 
  function (error, results, fields) {
      if(error) throw error;
      res.json(results);
  });
});
router.post('/comment', function(req, res, next) {
  res.locals.connection.query("insert into contact(id,name,email,phone,message) values ('','"+req.body.name+"','"+req.body.email+"','"+req.body.phone+"'+'"+req.body.message+"')", 
  function (error, results, fields) {
      if(error) throw error;
      res.json(results);
  });
});

router.get('/check', function(req, res, next) {
  const email = req.query.e+"";
  const password = req.query.p+"";
  console.log('tomato', req.query);
  console.log('potato', req.param('e'));
  console.log(req.param('p'));
  console.log(email+" "+password);
  res.locals.connection.query("SELECT * FROM user_details WHERE email = ?",[email], 
  function (error, results, fields) {
      if(error) throw error;
      else{
        if(results.length >0){
          if(results[0].password == password){
            res.json({
              "code":200,
              "success":"login sucessfull",
              token: res.locals.enc.encrypt(`${results[0].id}-${(new Date()).getTime()}-${Math.random()}`),
              flag: true,
              name: results[0].name+"",
              email: results[0].email+""
            });
            // if(results[0].id===1){
            //   window.localStorage.setItem('adminFlag',true);
            // }
            //console.log("USER LOGGED IN " +email+" "+password);
            
          }
          else{
            res.json({
              "code":204,
              "success":"Email and password does not match",
              flag: null,
              token: null
            });
            //console.log("Login Failed");
          }
        }
      }
      // res.json(results);
  });
});



router.post('/donate',function(req, res, next) {
  const name = req.body.donName;
  const email = req.body.donEmail;
  const orgName = req.body.name;
  const amount = req.body.amount;
  let donId = null;
  let orgId = null;
  res.locals.connection.query("insert into donor(Donor_id,Name,Email) values ('','"+name+"','"+email+"');", 
  function (error, results, fields) {
      if(error) throw error;
      else {
        console.log(results);
        console.log('org id: ',orgId,'donId ', donId, 'amount ', amount, 'name ',name,'email ', email);
        res.locals.connection.query("Select Donor_id as don_id from donor where Name='"+name+"';", 
        function (error, results, fields) {
            if(error) throw error;
            else{
              donId = results[results.length-1].don_id;
              console.log(results);
              console.log('IN DONATE org id: ',orgId,'donId ', donId, 'amount ', amount, 'name ',name,'email ', email);
              res.locals.connection.query("Select Organization_id as di from social_organization where Organization_Name='"+orgName+"';", 
              function (error, results, fields) {
                  if(error) throw error;
                  else{
                    orgId = results[0].di;
                    console.log(results);
                    console.log('IN DONATE1 org id: ',orgId,'donId ', donId, 'amount ', amount, 'name ',name,'email ', email);
                    res.locals.connection.query("insert into donation(Organization_id,Donor_id,Amount) values ("+orgId+","+donId+","+amount+");", 
                    function (error, results, fields) {
                        if(error) throw error;
                        res.json(results);
                        console.log(results);
                        console.log('IN DONATE 2 org id: ',orgId,'donId ', donId, 'amount ', amount, 'name ',name,'email ', email);
                    });
                  }
                  
              });
            }
            
        });
      }
      //res.json({donor_id: results[0].di});
      
      
  });
  
});


//Search
router.get('/search', function(req, res, next) {
  const sqlQ = "%"+req.query.q+"%";
  res.locals.connection.query("SELECT * FROM social_organization WHERE Organization_name like ? OR  Organization_type like ?",[sqlQ,sqlQ],
  function (error, results, fields) {
      if(error) throw error;
      else{
        res.json(results);
      }
  });
});

module.exports = router;
