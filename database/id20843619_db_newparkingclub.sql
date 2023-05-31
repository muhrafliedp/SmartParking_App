-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 31, 2023 at 11:20 PM
-- Server version: 10.5.20-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id20843619_db_newparkingclub`
--

-- --------------------------------------------------------

--
-- Table structure for table `AreaParkir`
--

CREATE TABLE `AreaParkir` (
  `id_parking_lot` int(11) NOT NULL,
  `parking_area` varchar(50) NOT NULL,
  `max_park_slot` int(11) NOT NULL,
  `current_park_slot` int(11) DEFAULT 0,
  `predict_park_slot` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `AreaParkir`
--

INSERT INTO `AreaParkir` (`id_parking_lot`, `parking_area`, `max_park_slot`, `current_park_slot`, `predict_park_slot`) VALUES
(1, 'Parkir Timur Seni Rupa', 27, 21, 19);

-- --------------------------------------------------------

--
-- Table structure for table `FilePeta`
--

CREATE TABLE `FilePeta` (
  `map_id` int(11) NOT NULL,
  `lokasi_slot` varchar(10) NOT NULL,
  `file_map` longtext DEFAULT NULL,
  `file_text` longtext DEFAULT NULL,
  `map_type` varchar(5) NOT NULL,
  `gambar_map` varchar(50) DEFAULT NULL,
  `filled_slot` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `FilePeta`
--

INSERT INTO `FilePeta` (`map_id`, `lokasi_slot`, `file_map`, `file_text`, `map_type`, `gambar_map`, `filled_slot`) VALUES
(1, 'G1', 'oo NN       NN       NN       NN oo \r\noo    G1 G1 .. H1 H1    I1 I1    oo \r\noo    G1 G1 .. H1 H1    I1 I1    oo \r\noo    G1 G1 .. H1 H1    I1 I1    oo \r\noo NN       ..       NN       NN oo \r\noo    D1 D1 .. E1 E1    F1 F1    oo \r\noo    D1 D1 .. E1 E1    F1 F1    oo \r\noo    D1 D1 .. E1 E1    F1 F1    oo \r\noo NN       ..       NN       NN oo \r\noo    A1 A1 .. B1 B1    C1 C1    oo \r\noo    A1 A1 .. B1 B1    C1 C1    oo \r\noo    A1 A1 .. B1 B1    C1 C1    oo \r\noo NN       .. .. .. .. .. .. .. oo \r\noo    oo oo oo oo oo oo oo oo .. oo \r\noo    oo oo oo oo oo oo oo oo .. oo \r\noo OT oo oo oo oo oo oo oo oo .. oo \r\n', '1. Maju 3 meter.\r\n2. Belok ke kiri dan maju 6 meter.\r\n3. Belok ke kanan dan maju 11 meter.\r\n4. Belok ke kiri, anda sudah sampai di slot parkir anda', 'IN', 'Map-IN-G1-1.png', 1),
(2, 'G1', 'oo NN       NN       NN       NN oo \r\noo    G1 G1 .. H1 H1    I1 I1    oo \r\noo    G1 G1 .. H1 H1    I1 I1    oo \r\noo    G1 G1 .. H1 H1    I1 I1    oo \r\noo .. .. .. ..       NN       NN oo \r\noo .. D1 D1    E1 E1    F1 F1    oo \r\noo .. D1 D1    E1 E1    F1 F1    oo \r\noo .. D1 D1    E1 E1    F1 F1    oo \r\noo ..       NN       NN       NN oo \r\noo .. A1 A1    B1 B1    C1 C1    oo \r\noo .. A1 A1    B1 B1    C1 C1    oo \r\noo .. A1 A1    B1 B1    C1 C1    oo \r\noo ..       NN       NN       NN oo \r\noo .. oo oo oo oo oo oo oo oo    oo \r\noo .. oo oo oo oo oo oo oo oo    oo \r\noo .. oo oo oo oo oo oo oo oo IN oo \r\n', '1. Belok ke kanan setelah keluar dari slot parkir\r\n2. Maju 3 meter.\r\n3. Belok ke kanan dan maju 3 meter.\r\n4. Belok ke kiri dan maju 11 meter.\r\n', 'OUT', 'Map-OUT-G1-1.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `KameraKeluar`
--

CREATE TABLE `KameraKeluar` (
  `vehicle_number` varchar(15) DEFAULT NULL,
  `leave_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `KameraKeluar`
--

INSERT INTO `KameraKeluar` (`vehicle_number`, `leave_time`) VALUES
('AD 6468 AMC', '2023-05-31 16:00:00'),
('AD 6468 AMC', '2023-05-31 16:00:00'),
('AD 1763 CQ,', '2023-05-31 23:35:03'),
('AD 1763 CQ', '2023-05-31 23:50:04');

-- --------------------------------------------------------

--
-- Table structure for table `KameraMasuk`
--

CREATE TABLE `KameraMasuk` (
  `vehicle_number` varchar(15) DEFAULT NULL,
  `enter_time` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `KameraMasuk`
--

INSERT INTO `KameraMasuk` (`vehicle_number`, `enter_time`) VALUES
('AD 6468 AMC', '2023-05-31 13:49:12'),
('AD 1763 CQ', '2023-05-31 21:59:00'),
('AD 1763 CQ', '2023-05-31 22:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `LokasiParkir`
--

CREATE TABLE `LokasiParkir` (
  `id` int(6) UNSIGNED NOT NULL,
  `detect_slot1_status` varchar(10) DEFAULT NULL,
  `detect_slot2_status` varchar(10) DEFAULT NULL,
  `detect_slot3_status` varchar(10) DEFAULT NULL,
  `reading_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `LokasiParkir`
--

INSERT INTO `LokasiParkir` (`id`, `detect_slot1_status`, `detect_slot2_status`, `detect_slot3_status`, `reading_time`) VALUES
(1, '0', '0', '1', '2023-05-31 14:23:39'),
(2, '0', '0', '0', '2023-05-31 14:23:46'),
(3, '0', '0', '0', '2023-05-31 14:23:53'),
(4, '0', '0', '0', '2023-05-31 14:24:00'),
(5, '0', '0', '0', '2023-05-31 14:24:08'),
(6, '0', '0', '0', '2023-05-31 14:24:15'),
(7, '1', '1', '0', '2023-05-31 14:24:23'),
(8, '0', '0', '0', '2023-05-31 14:24:30'),
(9, '0', '1', '0', '2023-05-31 14:24:38'),
(10, '0', '0', '1', '2023-05-31 14:24:45'),
(11, '0', '0', '0', '2023-05-31 14:24:52'),
(12, '0', '1', '0', '2023-05-31 14:25:00'),
(13, '0', '0', '0', '2023-05-31 14:25:07'),
(14, '0', '0', '0', '2023-05-31 14:25:15'),
(15, '0', '0', '0', '2023-05-31 14:25:22'),
(16, '0', '0', '0', '2023-05-31 14:25:30'),
(17, '0', '0', '0', '2023-05-31 14:25:37'),
(18, '0', '0', '0', '2023-05-31 14:25:46'),
(19, '0', '0', '0', '2023-05-31 14:25:54'),
(20, '0', '0', '0', '2023-05-31 14:26:02'),
(21, '0', '0', '0', '2023-05-31 14:26:09'),
(22, '0', '0', '0', '2023-05-31 14:26:17'),
(23, '0', '0', '0', '2023-05-31 14:26:25'),
(24, '0', '0', '0', '2023-05-31 14:26:33'),
(25, '0', '0', '0', '2023-05-31 14:26:40'),
(26, '0', '0', '0', '2023-05-31 14:26:50'),
(27, '1', '0', '1', '2023-05-31 14:26:57'),
(28, '0', '0', '0', '2023-05-31 14:27:05'),
(29, '0', '0', '0', '2023-05-31 14:27:13'),
(30, '0', '0', '0', '2023-05-31 14:27:21'),
(31, '0', '0', '0', '2023-05-31 14:27:28'),
(32, '0', '0', '0', '2023-05-31 14:27:36'),
(33, '0', '0', '0', '2023-05-31 14:27:44'),
(34, '0', '0', '0', '2023-05-31 14:28:10'),
(35, '0', '0', '0', '2023-05-31 14:28:17'),
(36, '0', '0', '0', '2023-05-31 14:28:24'),
(37, '0', '0', '0', '2023-05-31 14:28:31'),
(38, '0', '0', '0', '2023-05-31 14:28:39'),
(39, '1', '0', '0', '2023-05-31 14:28:46'),
(40, '0', '0', '0', '2023-05-31 14:28:55'),
(41, '0', '0', '0', '2023-05-31 14:29:02'),
(42, '0', '0', '0', '2023-05-31 14:29:08'),
(43, '1', '1', '1', '2023-05-31 14:31:25'),
(44, '1', '1', '1', '2023-05-31 14:31:32'),
(45, '0', '1', '1', '2023-05-31 14:32:44'),
(46, '0', '1', '1', '2023-05-31 14:32:51'),
(47, '1', '1', '1', '2023-05-31 14:32:58'),
(48, '0', '1', '1', '2023-05-31 14:33:06'),
(49, '1', '1', '1', '2023-05-31 14:33:15'),
(50, '0', '1', '1', '2023-05-31 14:33:25'),
(51, '1', '1', '1', '2023-05-31 14:33:32'),
(52, '0', '1', '1', '2023-05-31 14:33:39'),
(53, '0', '1', '1', '2023-05-31 14:33:47'),
(54, '0', '1', '0', '2023-05-31 14:33:55'),
(55, '0', '1', '0', '2023-05-31 14:34:02'),
(56, '1', '1', '1', '2023-05-31 14:34:10'),
(57, '0', '1', '1', '2023-05-31 14:34:17'),
(58, '0', '1', '0', '2023-05-31 14:34:24'),
(59, '1', '1', '1', '2023-05-31 14:34:32'),
(60, '0', '1', '0', '2023-05-31 14:34:39'),
(61, '0', '1', '0', '2023-05-31 14:34:47'),
(62, '0', '1', '0', '2023-05-31 14:34:55'),
(63, '0', '1', '1', '2023-05-31 14:35:03'),
(64, '1', '1', '0', '2023-05-31 14:35:11'),
(65, '0', '1', '1', '2023-05-31 14:35:19'),
(66, '0', '1', '1', '2023-05-31 14:35:27'),
(67, '0', '1', '0', '2023-05-31 14:35:45'),
(68, '0', '1', '0', '2023-05-31 14:35:53'),
(69, '0', '1', '0', '2023-05-31 14:36:01'),
(70, '0', '1', '0', '2023-05-31 14:36:08'),
(71, '0', '1', '0', '2023-05-31 14:36:16'),
(72, '0', '1', '0', '2023-05-31 14:36:24'),
(73, '0', '1', '0', '2023-05-31 14:36:31'),
(74, '0', '1', '0', '2023-05-31 14:36:38'),
(75, '0', '1', '1', '2023-05-31 14:36:49'),
(76, '1', '1', '1', '2023-05-31 14:36:57'),
(77, '1', '1', '0', '2023-05-31 14:37:05'),
(78, '1', '1', '1', '2023-05-31 14:37:13'),
(79, '0', '0', '0', '2023-05-31 14:37:20'),
(80, '0', '1', '0', '2023-05-31 14:37:28'),
(81, '0', '1', '0', '2023-05-31 14:37:36'),
(82, '1', '0', '0', '2023-05-31 14:37:44'),
(83, '0', '1', '0', '2023-05-31 14:39:13'),
(84, '0', '1', '1', '2023-05-31 14:39:21'),
(85, '0', '0', '0', '2023-05-31 14:39:29'),
(86, '0', '1', '0', '2023-05-31 14:39:36'),
(87, '0', '1', '1', '2023-05-31 14:39:47'),
(88, '0', '1', '1', '2023-05-31 14:39:54'),
(89, '0', '0', '0', '2023-05-31 14:40:02'),
(90, '0', '1', '1', '2023-05-31 14:57:58'),
(91, '0', '1', '1', '2023-05-31 14:58:07'),
(92, '0', '1', '1', '2023-05-31 14:58:16'),
(93, '0', '1', '1', '2023-05-31 14:58:25'),
(94, '0', '1', '1', '2023-05-31 14:58:34'),
(95, '0', '1', '1', '2023-05-31 14:58:45'),
(96, '1', '1', '1', '2023-05-31 15:02:12'),
(97, '1', '1', '1', '2023-05-31 15:02:22'),
(98, '1', '1', '1', '2023-05-31 15:02:32'),
(99, '1', '1', '1', '2023-05-31 15:05:53'),
(100, '1', '1', '1', '2023-05-31 15:06:03'),
(101, '1', '1', '1', '2023-05-31 15:06:13'),
(102, '1', '1', '1', '2023-05-31 15:06:24'),
(103, '0', '1', '1', '2023-05-31 17:33:27'),
(104, '0', '1', '1', '2023-05-31 17:33:36'),
(105, '0', '1', '1', '2023-05-31 17:33:45'),
(106, '1', '1', '1', '2023-05-31 17:33:56'),
(107, '1', '1', '1', '2023-05-31 17:34:05'),
(108, '1', '1', '1', '2023-05-31 17:34:14'),
(109, '0', '1', '1', '2023-05-31 17:37:18'),
(110, '0', '1', '1', '2023-05-31 17:37:27'),
(111, '0', '1', '1', '2023-05-31 17:38:51'),
(112, '0', '1', '1', '2023-05-31 17:39:00'),
(113, '0', '1', '0', '2023-05-31 17:55:33'),
(114, '0', '1', '0', '2023-05-31 17:55:41'),
(115, '0', '1', '0', '2023-05-31 17:55:48'),
(116, '0', '1', '0', '2023-05-31 17:55:58'),
(117, '0', '1', '0', '2023-05-31 17:56:06'),
(118, '0', '0', '0', '2023-05-31 17:56:13'),
(119, '1', '0', '0', '2023-05-31 17:56:23'),
(120, '0', '0', '0', '2023-05-31 17:56:30'),
(121, '0', '1', '0', '2023-05-31 17:56:38'),
(122, '0', '1', '1', '2023-05-31 17:56:45'),
(123, '0', '0', '1', '2023-05-31 17:56:53'),
(124, '0', '0', '0', '2023-05-31 17:57:00'),
(125, '1', '0', '0', '2023-05-31 17:57:07'),
(126, '0', '0', '0', '2023-05-31 17:57:15'),
(127, '0', '0', '0', '2023-05-31 17:57:22'),
(128, '1', '0', '0', '2023-05-31 17:57:30');

-- --------------------------------------------------------

--
-- Table structure for table `ParkirPengguna`
--

CREATE TABLE `ParkirPengguna` (
  `tanggal` date NOT NULL,
  `vehicle_number` varchar(15) NOT NULL,
  `masuk_jadwal` time NOT NULL,
  `enter_time` time NOT NULL,
  `masuk_prediksi` time DEFAULT NULL,
  `keluar_jadwal` time NOT NULL,
  `leave_time` time NOT NULL,
  `keluar_prediksi` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ParkirPengguna`
--

INSERT INTO `ParkirPengguna` (`tanggal`, `vehicle_number`, `masuk_jadwal`, `enter_time`, `masuk_prediksi`, `keluar_jadwal`, `leave_time`, `keluar_prediksi`) VALUES
('2023-01-16', 'AD 1234 BC', '09:45:00', '22:08:36', NULL, '15:15:00', '23:35:03', NULL),
('2023-01-17', 'AD 1234 BC', '10:45:00', '10:45:00', NULL, '16:15:00', '23:35:03', NULL),
('2023-01-17', 'AD 1234 BC', '10:45:00', '10:45:00', NULL, '16:15:00', '16:15:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `vehicle_number` varchar(15) NOT NULL,
  `bill` varchar(20) NOT NULL,
  `status_payment` varchar(10) NOT NULL,
  `payment_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Payment`
--

INSERT INTO `Payment` (`vehicle_number`, `bill`, `status_payment`, `payment_time`) VALUES
('AB 1234 AR', '2000', '1', '2023-05-30 10:12:11'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:19:31'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:20:46'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:21:31'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:22:40'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:34:32'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:35:00'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:35:20'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:42:55'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:43:11'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:44:47'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:45:07'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:45:33'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:45:53'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:46:41'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:47:06'),
('AD 1763 CQ', '2000', '0', '2023-05-31 22:47:26'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:47:50'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:48:12'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:49:13'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:49:59'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:50:27'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:51:19'),
('AD 1763 CQ', '2000', '1', '2023-05-31 22:51:48');

-- --------------------------------------------------------

--
-- Table structure for table `Pengguna`
--

CREATE TABLE `Pengguna` (
  `id_number` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `civitas_type` varchar(20) NOT NULL DEFAULT 'Mahasiswa',
  `vehicle_number` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Pengguna`
--

INSERT INTO `Pengguna` (`id_number`, `username`, `password`, `civitas_type`, `vehicle_number`) VALUES
(18218218, 'Oneclub', 'demopass', 'Mahasiswa', 'AD 6468 AMC'),
(18219035, 'Raflie', 'password123', 'Mahasiswa', 'B 1234 RK');

-- --------------------------------------------------------

--
-- Table structure for table `RiwayatParkir`
--

CREATE TABLE `RiwayatParkir` (
  `id_park_history` int(11) NOT NULL,
  `enter_time` datetime DEFAULT NULL,
  `leave_time` datetime DEFAULT NULL,
  `parking_lot` varchar(20) NOT NULL,
  `fee_bill` int(11) DEFAULT 2000,
  `vehicle_number` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SlotParkir`
--

CREATE TABLE `SlotParkir` (
  `id` int(6) UNSIGNED NOT NULL,
  `slot` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SlotParkir`
--

INSERT INTO `SlotParkir` (`id`, `slot`) VALUES
(1, '27'),
(2, '26'),
(3, '25'),
(4, '24'),
(5, '23'),
(6, '22'),
(7, '21'),
(8, '21'),
(9, '20'),
(10, '19'),
(11, '18'),
(12, '17'),
(13, '17'),
(14, '17'),
(15, '17'),
(16, '17'),
(17, '16'),
(18, '16'),
(19, '0'),
(20, '0'),
(21, '0'),
(22, '0'),
(23, '0'),
(24, '0'),
(25, '0'),
(26, '0'),
(27, '0'),
(28, '0'),
(29, '0'),
(30, '0'),
(31, '0'),
(32, '0'),
(33, '0'),
(34, '0'),
(35, '0'),
(36, '0'),
(37, '0'),
(38, '0'),
(39, '0'),
(40, '0'),
(41, '0'),
(42, '0'),
(43, '0'),
(44, '0'),
(45, '0'),
(46, '0'),
(47, '0'),
(48, '0'),
(49, '27'),
(50, '27'),
(51, '27'),
(52, '26'),
(53, '26'),
(54, '25'),
(55, '24'),
(56, '25'),
(57, '26'),
(58, '27'),
(59, '28'),
(60, '29'),
(61, '30'),
(62, '31'),
(63, '32'),
(64, '33'),
(65, '34'),
(66, '35'),
(67, '36'),
(68, '37'),
(69, '37'),
(70, '38'),
(71, '39'),
(72, '0'),
(73, '1'),
(74, '2'),
(75, '3'),
(76, '4'),
(77, '5'),
(78, '6'),
(79, '7'),
(80, '8'),
(81, '9'),
(82, '10'),
(83, '11'),
(84, '11'),
(85, '12'),
(86, '13'),
(87, '14'),
(88, '14'),
(89, '14'),
(90, '14'),
(91, '14'),
(92, '14'),
(93, '14'),
(94, '14'),
(95, '14'),
(96, '14'),
(97, '14'),
(98, '14'),
(99, '14'),
(100, '14'),
(101, '14'),
(102, '14'),
(103, '14'),
(104, '14'),
(105, '14'),
(106, '14'),
(107, '14'),
(108, '14'),
(109, '14'),
(110, '14'),
(111, '14'),
(112, '14'),
(113, '14'),
(114, '14'),
(115, '14'),
(116, '14'),
(117, '14'),
(118, '14'),
(119, '14'),
(120, '14'),
(121, '14'),
(122, '14'),
(123, '14'),
(124, '14'),
(125, '14'),
(126, '14'),
(127, '14'),
(128, '14'),
(129, '14'),
(130, '14'),
(131, '15'),
(132, '16'),
(133, '17'),
(134, '18'),
(135, '19'),
(136, '19'),
(137, '20'),
(138, '21'),
(139, '22'),
(140, '22'),
(141, '23'),
(142, '24'),
(143, '25'),
(144, '26'),
(145, '27'),
(146, '28'),
(147, '29'),
(148, '30'),
(149, '31'),
(150, '32'),
(151, '33'),
(152, '34'),
(153, '35'),
(154, '36'),
(155, '37'),
(156, '38'),
(157, '39'),
(158, '39'),
(159, '40'),
(160, '41'),
(161, '42'),
(162, '43'),
(163, '43'),
(164, '44'),
(165, '44'),
(166, '45'),
(167, '45'),
(168, '45'),
(169, '45'),
(170, '45'),
(171, '45'),
(172, '45'),
(173, '46'),
(174, '47'),
(175, '48'),
(176, '49'),
(177, '50'),
(178, '51'),
(179, '52'),
(180, '52'),
(181, '51'),
(182, '0'),
(183, '0'),
(184, '0'),
(185, '0'),
(186, '27'),
(187, '27'),
(188, '26'),
(189, '26'),
(190, '26'),
(191, '25'),
(192, '24'),
(193, '24'),
(194, '23'),
(195, '23'),
(196, '22'),
(197, '22'),
(198, '22'),
(199, '21');

--
-- Triggers `SlotParkir`
--
DELIMITER $$
CREATE TRIGGER `update_current_park_slot` AFTER INSERT ON `SlotParkir` FOR EACH ROW BEGIN
    DECLARE currentSlot INT;

    -- Mendapatkan nilai kolom slot dari baris terakhir dalam tabel SlotParkir
    SELECT slot INTO currentSlot FROM SlotParkir ORDER BY id DESC LIMIT 1;

    -- Mengupdate nilai kolom current_park_slot dalam tabel AreaParkir
    UPDATE AreaParkir SET current_park_slot = currentSlot;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `StatusParkir`
--

CREATE TABLE `StatusParkir` (
  `id_slot` int(11) NOT NULL,
  `vehicle_number` varchar(15) NOT NULL,
  `status_kerapian` int(11) DEFAULT NULL,
  `readingtime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `StatusParkir`
--

INSERT INTO `StatusParkir` (`id_slot`, `vehicle_number`, `status_kerapian`, `readingtime`) VALUES
(1, 'AD 6468 AMC', 0, '2023-05-31 14:00:00'),
(2, 'AD 6468 AMC', 0, '2023-05-31 14:10:00'),
(3, 'AD 6468 AMC', 0, '2023-05-31 14:15:00'),
(1, 'AD 6468 AMC', 0, '2023-05-31 14:15:00'),
(1, 'AD 6468 AMC', 0, '2023-05-31 14:20:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AreaParkir`
--
ALTER TABLE `AreaParkir`
  ADD PRIMARY KEY (`id_parking_lot`);

--
-- Indexes for table `FilePeta`
--
ALTER TABLE `FilePeta`
  ADD PRIMARY KEY (`map_id`);

--
-- Indexes for table `LokasiParkir`
--
ALTER TABLE `LokasiParkir`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Pengguna`
--
ALTER TABLE `Pengguna`
  ADD PRIMARY KEY (`id_number`);

--
-- Indexes for table `RiwayatParkir`
--
ALTER TABLE `RiwayatParkir`
  ADD PRIMARY KEY (`id_park_history`);

--
-- Indexes for table `SlotParkir`
--
ALTER TABLE `SlotParkir`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AreaParkir`
--
ALTER TABLE `AreaParkir`
  MODIFY `id_parking_lot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `FilePeta`
--
ALTER TABLE `FilePeta`
  MODIFY `map_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `LokasiParkir`
--
ALTER TABLE `LokasiParkir`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `RiwayatParkir`
--
ALTER TABLE `RiwayatParkir`
  MODIFY `id_park_history` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SlotParkir`
--
ALTER TABLE `SlotParkir`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
