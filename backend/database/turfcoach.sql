-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2023 at 06:47 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Create the turfcoach database
CREATE DATABASE IF NOT EXISTS turfcoach;

-- Switch to the turfcoach database
USE turfcoach;
-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `datetime` varchar(100) NOT NULL,
  `pitchId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `user`, `type`, `datetime`, `pitchId`) VALUES
(14, 'John', 'Mowing', '2023-05-18T23:27:57', '1'),
(15, 'Tom', 'Fertilisation', '2023-05-17T23:27:57', '2'),
(23, 'John', 'Mowing', '2023-05-19T00:05:49', '1'),
(24, 'Tom', 'Fertilisation', '2023-05-18T00:05:49', '2'),
(25, 'Tony', 'Irrigation', '2023-05-17T00:05:49', '3'),
(26, 'John', 'Aeration', '2023-05-16T00:05:49', '1'),
(27, 'Tom', 'Mowing', '2023-05-15T00:05:49', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
