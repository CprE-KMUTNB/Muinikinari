CREATE DATABASE  IF NOT EXISTS `muinikinari_auth` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `muinikinari_auth`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: muinikinari_auth
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `random_menu_restaurant`
--

DROP TABLE IF EXISTS `random_menu_restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `random_menu_restaurant` (
  `Restaurantid` int NOT NULL,
  `RestaurantName` varchar(500) NOT NULL,
  `Menuid` int NOT NULL,
  `RestaurantSeat` int NOT NULL,
  PRIMARY KEY (`Restaurantid`,`Menuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `random_menu_restaurant`
--

LOCK TABLES `random_menu_restaurant` WRITE;
/*!40000 ALTER TABLE `random_menu_restaurant` DISABLE KEYS */;
INSERT INTO `random_menu_restaurant` VALUES (1,'ป้ายุ่งตามสั่ง',3,6),(2,'ข้าวต้มรุ่งเรือง',1,20),(3,'สะเลเต',6,100),(4,'ข้าวผัดกุ้งลุงกะป้า',2,5),(5,'แซ่บซู้ด',4,10),(6,'ทิพสมัย',7,4),(7,'แซ่บอีหลี',8,8),(8,'ปลาบ้านๆ',5,15),(9,'ยำยำ',9,7),(10,'พิซซ่าฮัท',10,25),(11,'สุขใจ',11,5),(12,'ป้ายุ่งตามสั่ง',12,5),(14,'แซ่บอีหลี',13,15),(15,'สุขใจ',14,30),(16,'สุขใจ',15,4),(17,'ป้ายุ่งตามสั่ง',16,5),(18,'สุขใจ',17,20),(19,'แซ่บอีหลี',18,7),(20,'สุขใจ',19,8),(21,'สะเลเต',20,9),(22,'ป้ายุ่งตามสั่ง',21,40),(23,'แซ่บอีหลี',22,5),(24,'สะเลเต',23,6),(25,'แซ่บอีหลี',24,4),(26,'ป้ายุ่งตามสั่ง',25,5),(27,'สวัสดี',26,10),(28,'สวัสดี',27,11),(29,'แซ่บอีหลี',28,5),(30,'สวัสดี',29,6),(31,'ป้ายุ่งตามสั่ง',30,8),(32,'สวัสดี',31,9),(33,'สวัสดี',32,7),(34,'สุขใจ',33,6),(35,'ป้ายุ่งตามสั่ง',34,7),(36,'แซ่บอีหลี',35,6),(37,'สวัสดี',36,4),(38,'แซ่บอีหลี',37,5),(39,'สะเลเต',38,3),(40,'ป้ายุ่งตามสั่ง',39,7),(41,'สุขใจ',40,8),(42,'สุขใจ',41,9),(43,'สุขใจ',42,5);
/*!40000 ALTER TABLE `random_menu_restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-28 14:13:21
