-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 04, 2017 at 12:26 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--
CREATE Database IF NOT EXISTS `mydb`;
use `mydb`; 

-- --------------------------------------------------------

--
-- Table structure for table `Activity`
--

CREATE TABLE `Activity` (
  `idActivity` int(11) NOT NULL,
  `Event_idEvent` int(11) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `idAdmin` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `rol` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `Company_idCompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Company`
--

CREATE TABLE `Company` (
  `idCompany` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Contact`
--

CREATE TABLE `Contact` (
  `idContact` int(11) NOT NULL,
  `linkedIn` varchar(45) DEFAULT NULL,
  `facebook` varchar(45) DEFAULT NULL,
  `googleP` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  `Company_idCompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Event`
--

CREATE TABLE `Event` (
  `idEvent` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `startDate` varchar(45) NOT NULL,
  `endDate` varchar(45) NOT NULL,
  `idInitiative` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Event`
--

INSERT INTO `Event` (`idEvent`, `name`, `description`, `status`, `startDate`, `endDate`, `idInitiative`) VALUES
(1, 'primero', 'sd', 1, 'ooo', 'oo', 1),
(2, 'segundo', 'as', 0, 'aa', 'aa', 2),
(3, 'tercero', 'd', 1, 'asasd', 'sdasd', 3),
(4, 'zojhasdo', 'ajod', 0, 'jsda', 'ajsd', 4),
(5, 'adfas', 'asd', 1, 'sda', '22', 5),
(6, 'primero', 'sd', 1, 'ooo', 'oo', 1),
(7, 'segundo', 'as', 0, 'aa', 'aa', 2),
(8, 'tercero', 'd', 1, 'asasd', 'sdasd', 3),
(9, 'zojhasdo', 'ajod', 0, 'jsda', 'ajsd', 4),
(10, 'adfas', 'asd', 1, 'sda', '22', 5);

-- --------------------------------------------------------

--
-- Table structure for table `EventInfo`
--

CREATE TABLE `EventInfo` (
  `Id` int(11) NOT NULL,
  `Event_idEvent` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `Location` varchar(45) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `EventPhone`
--

CREATE TABLE `EventPhone` (
  `idEventPhone` int(11) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `EventInfo_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Event_has_Admin`
--

CREATE TABLE `Event_has_Admin` (
  `Event_idEvent` int(11) NOT NULL,
  `Admin_idAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Event_has_Speaker`
--

CREATE TABLE `Event_has_Speaker` (
  `Event_idEvent` int(11) NOT NULL,
  `Speaker_idSpeaker` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Initiative`
--

CREATE TABLE `Initiative` (
  `idInitiative` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(500) NOT NULL,
  `imageUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Initiative`
--

INSERT INTO `Initiative` (`idInitiative`, `name`, `description`, `imageUrl`) VALUES
(1, 'STEM Food & Ag council', 'is a membership group, coordinated by STEMconnector, with the goal of engaging the next generation in STEM careers in food and agriculture', 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAUZAAAAJDY1YjY1YTAwLTg3N2EtNDUyOC1iMDhjLTM2ZGExODcyMzczOQ.jpg'),
(2, 'The STEM Innovation Task Force (SITF)', 'is a thought leadership and action council comprised of more than 30 private sector and education leaders focused on collaborative approaches to address the STEM talent shortfall gap.', 'https://epuq3mo14u-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/SITF-logo.jpg'),
(3, 'Million Women Mentors', 'illion Women Mentors is a national movement with the goal of providing one million Science, Technology, Engineering, and Math (STEM) mentoring relationships to girls and women, helping them to choose, persist and succeed in STEM programs and careers. ', 'http://www.npower.org/UploadedImages/Womens-Initiative/MWM-Logo-2013.jpg'),
(4, 'The Higher Education Council (SHEC)', 'is a leadership forum of public and private colleges and corporations intently focused on STEM education and careers.', 'http://ww1.prweb.com/prfiles/2015/11/05/13835756/Higher%20Education%20Council-logo.jpg'),
(5, 'The Global STEM Talent Summit Initiative', 'was designed as an employer led three-year Strategic Roadmap to deliver short, mid and long-term STEM Talent development strategies from implementation, execution and impact. In addition, the Summit offers deep dive discussions and perspectives on future STEM 2.0 capabilities required for STEM talent to be highly successful in careers pathways.', 'https://epuq3mo14u-flywheel.netdna-ssl.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-24-at-11.46.35-AM-e1493120394727.png');

-- --------------------------------------------------------

--
-- Table structure for table `Point`
--

CREATE TABLE `Point` (
  `id` int(11) NOT NULL,
  `Activity_idActivity` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Speaker`
--

CREATE TABLE `Speaker` (
  `idSpeaker` int(11) NOT NULL,
  `Contact_idContact` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Activity`
--
ALTER TABLE `Activity`
  ADD PRIMARY KEY (`idActivity`,`Event_idEvent`),
  ADD KEY `fk_Activity_Event1_idx` (`Event_idEvent`);

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`idAdmin`,`Company_idCompany`),
  ADD KEY `fk_Admin_Company1_idx` (`Company_idCompany`);

--
-- Indexes for table `Company`
--
ALTER TABLE `Company`
  ADD PRIMARY KEY (`idCompany`);

--
-- Indexes for table `Contact`
--
ALTER TABLE `Contact`
  ADD PRIMARY KEY (`idContact`,`Company_idCompany`),
  ADD KEY `fk_Contact_Company1_idx` (`Company_idCompany`);

--
-- Indexes for table `Event`
--
ALTER TABLE `Event`
  ADD PRIMARY KEY (`idEvent`,`idInitiative`),
  ADD KEY `fk_Event_Initiative1_idx` (`idInitiative`);

--
-- Indexes for table `EventInfo`
--
ALTER TABLE `EventInfo`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fk_InfoEvent_Event1_idx` (`Event_idEvent`);

--
-- Indexes for table `EventPhone`
--
ALTER TABLE `EventPhone`
  ADD PRIMARY KEY (`idEventPhone`,`EventInfo_Id`),
  ADD KEY `fk_EventPhone_EventInfo1_idx` (`EventInfo_Id`);

--
-- Indexes for table `Event_has_Admin`
--
ALTER TABLE `Event_has_Admin`
  ADD PRIMARY KEY (`Event_idEvent`,`Admin_idAdmin`),
  ADD KEY `fk_Event_has_Admin_Admin1_idx` (`Admin_idAdmin`),
  ADD KEY `fk_Event_has_Admin_Event1_idx` (`Event_idEvent`);

--
-- Indexes for table `Event_has_Speaker`
--
ALTER TABLE `Event_has_Speaker`
  ADD PRIMARY KEY (`Event_idEvent`,`Speaker_idSpeaker`),
  ADD KEY `fk_Event_has_Speaker_Speaker1_idx` (`Speaker_idSpeaker`),
  ADD KEY `fk_Event_has_Speaker_Event_idx` (`Event_idEvent`);

--
-- Indexes for table `Initiative`
--
ALTER TABLE `Initiative`
  ADD PRIMARY KEY (`idInitiative`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`),
  ADD UNIQUE KEY `image_UNIQUE` (`imageUrl`);

--
-- Indexes for table `Point`
--
ALTER TABLE `Point`
  ADD PRIMARY KEY (`id`,`Activity_idActivity`),
  ADD KEY `fk_Point_Activity1_idx` (`Activity_idActivity`);

--
-- Indexes for table `Speaker`
--
ALTER TABLE `Speaker`
  ADD PRIMARY KEY (`idSpeaker`,`Contact_idContact`),
  ADD KEY `fk_Speaker_Contact1_idx` (`Contact_idContact`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Activity`
--
ALTER TABLE `Activity`
  MODIFY `idActivity` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Company`
--
ALTER TABLE `Company`
  MODIFY `idCompany` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Contact`
--
ALTER TABLE `Contact`
  MODIFY `idContact` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Event`
--
ALTER TABLE `Event`
  MODIFY `idEvent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `EventInfo`
--
ALTER TABLE `EventInfo`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `EventPhone`
--
ALTER TABLE `EventPhone`
  MODIFY `idEventPhone` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Initiative`
--
ALTER TABLE `Initiative`
  MODIFY `idInitiative` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `Point`
--
ALTER TABLE `Point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Speaker`
--
ALTER TABLE `Speaker`
  MODIFY `idSpeaker` int(11) NOT NULL AUTO_INCREMENT;
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
  ADD CONSTRAINT `fk_Event_Initiative1` FOREIGN KEY (`idInitiative`) REFERENCES `Initiative` (`idInitiative`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `EventInfo`
--
ALTER TABLE `EventInfo`
  ADD CONSTRAINT `fk_InfoEvent_Event1` FOREIGN KEY (`Event_idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `EventPhone`
--
ALTER TABLE `EventPhone`
  ADD CONSTRAINT `fk_EventPhone_EventInfo1` FOREIGN KEY (`EventInfo_Id`) REFERENCES `EventInfo` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `Event_has_Admin`
--
ALTER TABLE `Event_has_Admin`
  ADD CONSTRAINT `fk_Event_has_Admin_Admin1` FOREIGN KEY (`Admin_idAdmin`) REFERENCES `Admin` (`idAdmin`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Event_has_Admin_Event1` FOREIGN KEY (`Event_idEvent`) REFERENCES `Event` (`idEvent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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

--
-- Constraints for table `Speaker`
--
ALTER TABLE `Speaker`
  ADD CONSTRAINT `fk_Speaker_Contact1` FOREIGN KEY (`Contact_idContact`) REFERENCES `Contact` (`idContact`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
