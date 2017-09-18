-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 18, 2017 at 08:44 PM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shecDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Activity`
--

CREATE TABLE IF NOT EXISTS `Activity` (
  `idActivity` int(11) NOT NULL AUTO_INCREMENT,
  `Event_idEvent` int(11) NOT NULL,
  `startTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `endTime` datetime NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idActivity`,`Event_idEvent`),
  KEY `fk_Activity_Event1_idx` (`Event_idEvent`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `Activity`
--

INSERT INTO `Activity` (`idActivity`, `Event_idEvent`, `startTime`, `endTime`, `name`, `description`) VALUES
(1, 1, '2017-09-18 00:00:00', '2017-09-08 00:00:00', 'hi', 'hi'),
(3, 1, '2017-09-13 04:00:00', '2017-09-08 04:00:00', 'tactualizado wue', 'hi'),
(4, 2, '2017-09-07 00:00:00', '2017-09-15 00:00:00', 'jj', 'jj');

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE IF NOT EXISTS `Admin` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `rol` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `Company_idCompany` int(11) NOT NULL,
  PRIMARY KEY (`idAdmin`,`Company_idCompany`),
  KEY `fk_Admin_Company1_idx` (`Company_idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Company`
--

CREATE TABLE IF NOT EXISTS `Company` (
  `idCompany` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Contact`
--

CREATE TABLE IF NOT EXISTS `Contact` (
  `idContact` int(11) NOT NULL AUTO_INCREMENT,
  `linkedIn` varchar(45) DEFAULT NULL,
  `facebook` varchar(45) DEFAULT NULL,
  `googleP` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  `Company_idCompany` int(11) NOT NULL,
  PRIMARY KEY (`idContact`,`Company_idCompany`),
  KEY `fk_Contact_Company1_idx` (`Company_idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Event`
--

CREATE TABLE IF NOT EXISTS `Event` (
  `idEvent` int(11) NOT NULL AUTO_INCREMENT,
  `nameEvent` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `Initiative_idInitiative` int(11) NOT NULL,
  `location` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `imagUrl` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`idEvent`,`Initiative_idInitiative`),
  KEY `fk_Event_Initiative1_idx` (`Initiative_idInitiative`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `Event`
--

INSERT INTO `Event` (`idEvent`, `nameEvent`, `description`, `status`, `startDate`, `endDate`, `Initiative_idInitiative`, `location`, `email`, `imagUrl`) VALUES
(1, 'Event1', 'events', 1, '2017-09-06 04:12:00', '2017-09-13 10:09:00', 1, 'dc', 'dc', ''),
(2, 'Event2', 'event2', 1, '2017-09-22 00:00:00', '2017-09-30 00:00:00', 2, 'ad', 'asdasdas', '');

-- --------------------------------------------------------

--
-- Table structure for table `EventPhone`
--

CREATE TABLE IF NOT EXISTS `EventPhone` (
  `idEventPhone` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(45) NOT NULL,
  `Event_idEvent` int(11) NOT NULL,
  PRIMARY KEY (`idEventPhone`),
  KEY `fk_EventPhone_Event1_idx` (`Event_idEvent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Event_has_Admin`
--

CREATE TABLE IF NOT EXISTS `Event_has_Admin` (
  `Event_idEvent` int(11) NOT NULL,
  `Admin_idAdmin` int(11) NOT NULL,
  PRIMARY KEY (`Event_idEvent`,`Admin_idAdmin`),
  KEY `fk_Event_has_Admin_Admin1_idx` (`Admin_idAdmin`),
  KEY `fk_Event_has_Admin_Event1_idx` (`Event_idEvent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Event_has_Speaker`
--

CREATE TABLE IF NOT EXISTS `Event_has_Speaker` (
  `Event_idEvent` int(11) NOT NULL,
  `Speaker_idSpeaker` int(11) NOT NULL,
  PRIMARY KEY (`Event_idEvent`,`Speaker_idSpeaker`),
  KEY `fk_Event_has_Speaker_Speaker1_idx` (`Speaker_idSpeaker`),
  KEY `fk_Event_has_Speaker_Event_idx` (`Event_idEvent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Event_has_Speaker`
--

INSERT INTO `Event_has_Speaker` (`Event_idEvent`, `Speaker_idSpeaker`) VALUES
(1, 2),
(2, 4),
(1, 5),
(2, 5),
(1, 7),
(1, 9),
(1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `Initiative`
--

CREATE TABLE IF NOT EXISTS `Initiative` (
  `idInitiative` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `Description` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  PRIMARY KEY (`idInitiative`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `image_UNIQUE` (`image`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `Initiative`
--

INSERT INTO `Initiative` (`idInitiative`, `name`, `Description`, `image`) VALUES
(1, 'SHEC', 'SHEC', 'SHEC'),
(2, 'Innovation', 'inno', 'asdasdas');

-- --------------------------------------------------------

--
-- Table structure for table `Point`
--

CREATE TABLE IF NOT EXISTS `Point` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Activity_idActivity` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`Activity_idActivity`),
  KEY `fk_Point_Activity1_idx` (`Activity_idActivity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Speaker`
--

CREATE TABLE IF NOT EXISTS `Speaker` (
  `idSpeaker` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `title` varchar(300) NOT NULL,
  `bio` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`idSpeaker`),
  KEY `idSpeaker` (`idSpeaker`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `Speaker`
--

INSERT INTO `Speaker` (`idSpeaker`, `name`, `title`, `bio`) VALUES
(2, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(4, 'Saqeqeqwem', 'Student', 'stemconnector'),
(5, 'Saqeqeqwem', 'Student', 'stemconnector'),
(6, 'Saqeqeqwem', 'Student', 'stemconnector'),
(7, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(8, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(9, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(10, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(11, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(12, 'llalsdasdadasdadadasd', 'Student', 'stemconnector'),
(13, 'llalsdasdadasdadadasd', 'Student', 'stemconnector');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Activity`
--
ALTER TABLE `Activity`
  ADD CONSTRAINT `fk_Activity_Event1` FOREIGN KEY (`Event_idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Admin`
--
ALTER TABLE `Admin`
  ADD CONSTRAINT `fk_Admin_Company1` FOREIGN KEY (`Company_idCompany`) REFERENCES `Company` (`idCompany`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Contact`
--
ALTER TABLE `Contact`
  ADD CONSTRAINT `fk_Contact_Company1` FOREIGN KEY (`Company_idCompany`) REFERENCES `Company` (`idCompany`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Event`
--
ALTER TABLE `Event`
  ADD CONSTRAINT `fk_Event_Initiative1` FOREIGN KEY (`Initiative_idInitiative`) REFERENCES `Initiative` (`idInitiative`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `EventPhone`
--
ALTER TABLE `EventPhone`
  ADD CONSTRAINT `fk_EventPhone_Event1` FOREIGN KEY (`Event_idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Event_has_Admin`
--
ALTER TABLE `Event_has_Admin`
  ADD CONSTRAINT `fk_Event_has_Admin_Event1` FOREIGN KEY (`Event_idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Event_has_Admin_Admin1` FOREIGN KEY (`Admin_idAdmin`) REFERENCES `Admin` (`idAdmin`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Event_has_Speaker`
--
ALTER TABLE `Event_has_Speaker`
  ADD CONSTRAINT `fk_Event_has_Speaker_Event` FOREIGN KEY (`Event_idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Event_has_Speaker_Speaker1` FOREIGN KEY (`Speaker_idSpeaker`) REFERENCES `Speaker` (`idSpeaker`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Point`
--
ALTER TABLE `Point`
  ADD CONSTRAINT `fk_Point_Activity1` FOREIGN KEY (`Activity_idActivity`) REFERENCES `Activity` (`idActivity`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
