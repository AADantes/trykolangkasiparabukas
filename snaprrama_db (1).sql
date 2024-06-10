-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2024 at 04:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snaprrama_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `commissions`
--

CREATE TABLE `commissions` (
  `comissionID` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `potentialpayment` int(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `acceptedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `commissions`
--

INSERT INTO `commissions` (`comissionID`, `username`, `title`, `content`, `potentialpayment`, `status`, `acceptedBy`) VALUES
(1, 'asdf', 'fasdf', 'asdfasdfsadfasdf sadfasdfdsafadsfsadfa sdf asd fasdffsadf sadf sadf sadf', 2000000, 'Accepted', 'allan2'),
(2, 'allan', 'asdf', 'asdffasdfsadf', 0, 'pending', NULL),
(3, 'allan', 'This is a proper Title', 'This is a proper content for asking services for commission. Checking for output in database. ', 0, 'pending', NULL),
(4, 'allan', 'Trying Again', 'Test Content', 0, 'pending', NULL),
(5, 'allan', 'try ', 'tryyy', 0, 'pending', NULL),
(6, 'allan', 'try again by allan', 'try again', 0, 'pending', NULL),
(7, 'allan2', 'd12d21d21', '12d12d21d21d', 0, 'pending', NULL),
(8, '', 'qwerwqerqwe', 'qwerqwrqwerwqer', 12345, 'pending', NULL),
(9, 'allan2', 'asdf', 'f123f213f213f', 12345, 'pending', NULL),
(10, 'allan2', 'try sadf', 'asdffqwef try ', 124555, 'pending', NULL),
(11, 'allan2', 'SADF again', 'again andagain', 55555, 'pending', NULL),
(12, 'allan2', 'gasdgsadg', 'asgasdgasdg', 12333, 'pending', NULL),
(13, 'allan2', 'try try try try', 'trytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytrytry', 4444, 'pending', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `UserScoreID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstcategory` int(11) NOT NULL,
  `secondcategory` int(11) NOT NULL,
  `thirdcategory` int(11) NOT NULL,
  `totalscore` int(11) NOT NULL,
  `comments` mediumtext DEFAULT NULL,
  `ratedBy` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` mediumtext DEFAULT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `username`, `password`, `bio`, `email`) VALUES
(1, 'allan', 'password', '', 'allanpassword@email.com'),
(2, 'allan2', 'password2', NULL, 'allanpassword2@email.com'),
(3, 'allan23', 'password23', NULL, 'allanpassword23@email.com'),
(4, 'allan23', 'password23', NULL, 'allanpassword23@email.com'),
(5, 'allan23', 'password23', NULL, 'allanpassword23@email.com'),
(6, 'allan234', 'password234', '', 'allanpassword234@email.com'),
(7, 'asd', 'dqwd', NULL, 'qfwwqf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commissions`
--
ALTER TABLE `commissions`
  ADD PRIMARY KEY (`comissionID`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`UserScoreID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commissions`
--
ALTER TABLE `commissions`
  MODIFY `comissionID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `UserScoreID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
