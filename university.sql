-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2022 a las 04:57:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `university`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitors`
--

CREATE TABLE `monitors` (
  `id` int(11) NOT NULL,
  `names` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `last_names` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `academy_program` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `semester` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `user` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `monitors`
--

INSERT INTO `monitors` (`id`, `names`, `last_names`, `academy_program`, `semester`, `dni`, `email`, `phone`, `user`, `password`) VALUES
(5, 'Admin', 'Master', 'Administración', 10, 0, 'admin@correo.com', '9999999999', 'admin', '$2b$10$i01haYUmak2zkK6aYBEwCu5ThX.FULM33tW.d6P44h98HPvGoNBe.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `monitors`
--
ALTER TABLE `monitors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_index` (`user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `monitors`
--
ALTER TABLE `monitors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
