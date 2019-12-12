-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Dec 12, 2019 at 06:15 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test1`
--

-- --------------------------------------------------------

--
-- Table structure for table `dependent`
--

DROP TABLE IF EXISTS `dependent`;
CREATE TABLE IF NOT EXISTS `dependent` (
  `D_SSN` int(255) NOT NULL AUTO_INCREMENT,
  `V_SSN` int(255) UNSIGNED NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Contact` varchar(255) NOT NULL,
  PRIMARY KEY (`D_SSN`,`V_SSN`),
  KEY `V_SSN` (`V_SSN`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dependent`
--

INSERT INTO `dependent` (`D_SSN`, `V_SSN`, `Name`, `Contact`) VALUES
(1, 3, 'Jawaril', '0159674151'),
(2, 3, 'Shoummo', '0695252236'),
(3, 2, 'Yousuf', '018569522'),
(4, 4, 'Ali Islam', '02656541'),
(5, 1, 'Halima Banu', '01856936524');

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
CREATE TABLE IF NOT EXISTS `donation` (
  `Organization_id` int(255) UNSIGNED NOT NULL,
  `Donor_Id` int(255) UNSIGNED NOT NULL,
  `Amount` int(255) UNSIGNED NOT NULL,
  PRIMARY KEY (`Organization_id`,`Donor_Id`),
  KEY `Donor_Id` (`Donor_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`Organization_id`, `Donor_Id`, `Amount`) VALUES
(1, 1, 350000),
(3, 2, 250000),
(5, 5, 60000),
(7, 8, 2000000),
(8, 6, 50000),
(11, 7, 200000),
(13, 21, 12000),
(14, 10, 200000),
(17, 4, 650000),
(19, 11, 500000),
(21, 22, 121212),
(21, 23, 10000);

-- --------------------------------------------------------

--
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
CREATE TABLE IF NOT EXISTS `donor` (
  `Donor_Id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Donor_Type` varchar(255) NOT NULL,
  `National_id` varchar(255) NOT NULL,
  `TIN _no.` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Phone_no` varchar(20) NOT NULL,
  `Email` varchar(255) NOT NULL,
  PRIMARY KEY (`Donor_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donor`
--

INSERT INTO `donor` (`Donor_Id`, `Name`, `Donor_Type`, `National_id`, `TIN _no.`, `Address`, `Phone_no`, `Email`) VALUES
(1, 'Nafis Mostafa', '', '951546125632', '', 'Shabagh Dhaka', '01842546165', 'nafismostafa22@gmail.com'),
(2, 'Shagor', 'Person', '516542212', '', 'Dhanmondi', '56985213652', 'xyz@gmail.com'),
(3, 'SKF', 'Organization', '', '885H6H', 'Gazipur', '9856241', 'skf@gmail.com'),
(4, 'Malajos Tech and Co', 'Organization', '', 'G55G55', 'Park Street Adelaide', '115698215', 'Malajos@tech.org'),
(5, 'Kawsar', 'Person', '88952163', '', 'Uttara-16', '0135689742', 'wow@gmail.com'),
(6, 'Chagol', 'Person', '5454812', '', 'Koshakhana', '01842546160', 'marakhai@gmail.com'),
(7, 'Samia Corporation Limited', 'Organization', '', '5H89H6U', 'Faridpur', '0169896587', 'absc@gmail.com'),
(8, 'Bill Gates', 'Person', '897256125126', '', 'Jackson heights New York', '987654321', 'iamrich@gmail.com'),
(9, 'Mark Zuckerbrg', 'Person', '1234567899', '', 'London, Uk', '963852741', 'facebook@gmail.com'),
(10, 'Shakib Al Hasan', 'person', '122334856963', '', 'Gulshan-2', '15975315975', 'shakibalhasan@gmail.com'),
(11, 'Incepta Pharmaceuticals', 'Organizaiton', '', '8965PP5L', 'Dhaka', '11225544896', 'incepta@outlook.com'),
(21, 'Icecream', '', '', '', '', '', 'ic@ic.com'),
(22, 'Arnisha', '', '', '', '', '', 'ar@ar.com'),
(23, 'Arnisha', '', '', '', '', '', 'ar@ar.com');

-- --------------------------------------------------------

--
-- Table structure for table `fund`
--

DROP TABLE IF EXISTS `fund`;
CREATE TABLE IF NOT EXISTS `fund` (
  `Organization_id` int(255) UNSIGNED NOT NULL,
  `Total Fund` int(255) NOT NULL,
  `Expenditure` int(255) NOT NULL,
  KEY `Organization_id` (`Organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fund`
--

INSERT INTO `fund` (`Organization_id`, `Total Fund`, `Expenditure`) VALUES
(10, 558621, 555000),
(4, 10252653, 9995021),
(6, 5564251, 500000),
(9, 1265222, 964211),
(17, 10000000, 9900000),
(7, 963852, 856321),
(1, 500000, 450000),
(3, 850000, 834000),
(13, 1200000, 1150630),
(12, 1586500, 1496852);

-- --------------------------------------------------------

--
-- Table structure for table `social_organization`
--

DROP TABLE IF EXISTS `social_organization`;
CREATE TABLE IF NOT EXISTS `social_organization` (
  `Organization_id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Organization_name` varchar(255) NOT NULL,
  `Start_Date` date NOT NULL,
  `Organization_type` varchar(255) NOT NULL,
  `Ownership` varchar(255) NOT NULL DEFAULT '"Private"',
  `Involvement_type` varchar(255) NOT NULL DEFAULT '"National"',
  PRIMARY KEY (`Organization_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `social_organization`
--

INSERT INTO `social_organization` (`Organization_id`, `Organization_name`, `Start_Date`, `Organization_type`, `Ownership`, `Involvement_type`) VALUES
(1, 'Shesh Thikana', '2002-05-17', 'Old Home', 'Private', 'National'),
(3, 'Astanaa', '2006-12-06', 'Old Home', 'Public', 'National'),
(4, 'Amrai', '2015-02-21', 'Women Empowerment', 'Private', 'Private'),
(5, 'Nari Shongstha', '2011-06-23', 'Women Empowerment', 'Public', 'National'),
(6, 'Jia Orphanage', '2004-01-15', 'Child Welfare', 'Private', 'National'),
(7, 'Salimullah Atim Khana', '1915-05-22', 'Child Welfare', 'Public', 'National'),
(8, 'Amar Home', '2009-07-18', 'Drug Rehabilitation', 'Private', 'National'),
(9, 'Golden Life Drug Addiction Treatment centre', '2013-11-02', 'Drug Rehabilitation', 'Private', 'National'),
(10, 'Addiction Intensive Care', '2012-05-24', 'Drug Rehabilitation', 'Private', 'National'),
(11, 'Community-health Rehabilitation Education and Awareness ', '2008-01-29', 'Drug Rehabilitation', 'Private', 'National'),
(12, 'Green Life Drug Addiction Rehabilitation Centre', '2003-06-19', 'Drug Rehabilitation', 'Private', 'National'),
(13, 'Apon Nibash', '2001-03-26', 'Old Home', 'Private', 'National'),
(14, 'Subarta Trust', '2014-09-25', 'Old Home', 'Private', 'National'),
(15, 'Probin Nibash BD', '2007-02-26', 'Old Home', 'Public', 'National'),
(16, 'UNICEF Bangladesh', '1948-06-28', 'Child Welfare', 'Public', 'International'),
(17, 'BRAC', '1972-03-25', 'Child Welfare', 'Private', 'International'),
(18, 'Manusher Jonno Foundation', '2015-04-22', 'Child Welfare', 'Private', 'National'),
(19, 'Nari Uddog Kendro', '2010-10-10', 'Women Empowerment', 'Private', 'National'),
(20, 'Apon Basha', '2016-11-09', 'Women Empowerment', 'Private', 'National'),
(21, 'WPHF', '1991-05-17', 'Women Empowerment', 'Public', 'International');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
CREATE TABLE IF NOT EXISTS `user_details` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MEMORY AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `name`, `email`, `password`) VALUES
(1, 'Icecream', 'ic@ic.com', '1111'),
(2, 'Arnishaa', 'ar@ar.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `victim`
--

DROP TABLE IF EXISTS `victim`;
CREATE TABLE IF NOT EXISTS `victim` (
  `V_SSN` int(255) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Age` int(3) NOT NULL,
  `Sex` varchar(10) NOT NULL,
  `Financial_Status` varchar(30) NOT NULL,
  `Description` text NOT NULL,
  `Blood_group` varchar(5) NOT NULL,
  `Organization_id` int(255) UNSIGNED NOT NULL,
  PRIMARY KEY (`V_SSN`) USING BTREE,
  KEY `Organization_id` (`Organization_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `victim`
--

INSERT INTO `victim` (`V_SSN`, `Name`, `Age`, `Sex`, `Financial_Status`, `Description`, `Blood_group`, `Organization_id`) VALUES
(1, 'Rabeya Banu', 65, 'Female', 'Very Poor', '', 'B+', 3),
(2, 'Shobuz Miya', 35, 'Male', 'Middle Class', '', 'A+', 11),
(3, 'Somoy Subandhu', 22, 'Male', 'Rich', '', 'B+', 8),
(4, 'Md Robiul Islam', 70, 'Male', 'Poor', '', 'O+', 1),
(5, 'Khadija Islam', 25, 'Female', 'Middle Class', '', 'A-', 5),
(6, 'Nabiha Mridha', 20, 'Female', 'Rich', 'Over abusing drugs for the past ten years.', 'AB-', 8),
(7, 'Radhita Anika', 21, 'Female', 'Very Poor', '', 'B+', 12),
(8, 'John', 35, 'Male', 'Poor', '', 'O-', 9),
(9, 'Nazifa Sayeera', 21, 'Female', 'Very Poor', 'Raped and lost her memory due to trauma', 'A+', 5),
(10, 'Jamal Khan', 70, 'Male', 'Poor', '', 'AB+', 15),
(11, 'Sayeera Khan', 58, 'Female', 'Very Poor', '', 'B+', 15),
(12, 'Salma Khatun', 8, 'Female', 'Poor', '', 'A+', 7),
(13, 'Kamal Haider', 9, 'Male', 'Very Poor', '', 'B+', 7);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dependent`
--
ALTER TABLE `dependent`
  ADD CONSTRAINT `dependent_ibfk_1` FOREIGN KEY (`V_SSN`) REFERENCES `victim` (`V_SSN`);

--
-- Constraints for table `donation`
--
ALTER TABLE `donation`
  ADD CONSTRAINT `donation_ibfk_1` FOREIGN KEY (`Organization_id`) REFERENCES `social_organization` (`Organization_id`),
  ADD CONSTRAINT `donation_ibfk_2` FOREIGN KEY (`Donor_Id`) REFERENCES `donor` (`Donor_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `fund`
--
ALTER TABLE `fund`
  ADD CONSTRAINT `fund_ibfk_1` FOREIGN KEY (`Organization_id`) REFERENCES `social_organization` (`Organization_id`);

--
-- Constraints for table `victim`
--
ALTER TABLE `victim`
  ADD CONSTRAINT `victim_ibfk_1` FOREIGN KEY (`Organization_id`) REFERENCES `social_organization` (`Organization_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
