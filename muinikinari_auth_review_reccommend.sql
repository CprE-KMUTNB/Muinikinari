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
-- Table structure for table `review_reccommend`
--

DROP TABLE IF EXISTS `review_reccommend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_reccommend` (
  `Reccommendid` int NOT NULL AUTO_INCREMENT,
  `ReccommendMenu` varchar(1000) NOT NULL,
  `ReccommendPic` varchar(1000) NOT NULL,
  PRIMARY KEY (`Reccommendid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_reccommend`
--

LOCK TABLES `review_reccommend` WRITE;
/*!40000 ALTER TABLE `review_reccommend` DISABLE KEYS */;
INSERT INTO `review_reccommend` VALUES (9,'Momo paradise','https://www.mo-mo-paradiseth.com/upload_file/restaurant/standard_pic_1.jpg'),(10,'grilled chicken','https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/chicken-&-other-poultry-dishes/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87_header.jpg'),(15,'poached egg','https://images.aws.nestle.recipes/resized/12f17c7de982b57fdf3e4c9091cd3b29_steamed-egg-with-minced-pork_944_531.jpeg'),(16,'steamed rice topped with chicken','https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg'),(18,'Tom Yum Kung','https://food.mthai.com/app/uploads/2016/10/Tomyum.jpg'),(19,'Moo ping','https://img.wongnai.com/p/1920x0/2021/10/19/df3a74ac131143a0b69bbc43eee8884e.jpg');
/*!40000 ALTER TABLE `review_reccommend` ENABLE KEYS */;
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
