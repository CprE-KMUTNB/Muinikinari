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
-- Table structure for table `random_menu_menu`
--

DROP TABLE IF EXISTS `random_menu_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `random_menu_menu` (
  `Menuid` int NOT NULL AUTO_INCREMENT,
  `MenuName` varchar(500) NOT NULL,
  `MenuPrice` int NOT NULL,
  `MenuPic` varchar(500) DEFAULT NULL,
  `MenuType` varchar(500) NOT NULL,
  PRIMARY KEY (`Menuid`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `random_menu_menu`
--

LOCK TABLES `random_menu_menu` WRITE;
/*!40000 ALTER TABLE `random_menu_menu` DISABLE KEYS */;
INSERT INTO `random_menu_menu` VALUES (1,'stir-fried-morning-glory',50,'picfood\\stir-fried-morning-glory.jpg','normal'),(2,'Shrimp-fried-rice',50,'picfood\\Shrimp-fried-rice.jpg','normal'),(3,'stir-fried-pork-and-basil-and-a-fried-egg',50,'picfood\\stir-fried-pork-and-basil-and-a-fried-egg.jpg','normal'),(4,'tom-yum-goong',100,'picfood\\tom-yum-goong.jpg','normal'),(5,'Giant-Seaperch-in-Thai-lime-soup',200,'picfood\\Giant-Seaperch-in-Thai-lime-soup.jpg','normal'),(6,'Grilled-River-Prawn',200,'picfood\\Grilled-River-Prawn.jpg','normal'),(7,'Padthai',100,'picfood\\padthai.jpg','normal'),(8,'somtum',50,'picfood\\somtum.jpg','normal'),(9,'vermicelli-salad',100,'picfood\\vermicelli-salad.jpg','normal'),(10,'pizza',200,'picfood\\pizza.jpg','normal'),(11,'Suki',50,'picfood\\Suki.jpg','normal'),(12,'Scrambled-Eggs-with-Tomato',50,'picfood\\Scrambled-Eggs-with-Tomato.jpg','veget'),(13,'Vegetarian-Cellophane-Noodles-with-Mushrooms',100,'picfood\\Vegetarian-Cellophane-Noodles-with-Mushrooms.jpg','veget'),(14,'Stir-fried-preserved-mustard-green-with-egg',50,'picfood\\Stir-fried-preserved-mustard-green-with-egg.JPG','veget'),(15,'Stir-fried-Pumpkin-wit- Eggs',50,'picfood\\Stir-fried-Pumpkin-with-Eggs.jpg','veget'),(16,'Omurice',100,'picfood\\Omurice.png','veget'),(17,'Egg-Tofu-Stir-Fry',100,'picfood\\Egg-Tofu-Stir-Fry.jpg','veget'),(18,'Grilled-Mushroom-Curry',200,'picfood\\Grilled-Mushroom-Curry.jpg','veget'),(19,'Vegan-Tofu-Rice-Noodle',100,'picfood\\Vegan-Tofu-Rice-Noodle.jpg','veget'),(20,'Egg-Tofu-Wrapped-in-Seaweed',200,'picfood\\Egg-Tofu-Wrapped-in-Seaweed.jpg','veget'),(21,'Sticky-Gravy-Crispy-Tofu',200,'picfood\\Sticky-Gravy-Crispy-Tofu.jpg','veget'),(22,'Thai Suki Yaki Soup',50,'picfood\\Thai-Suki-Yaki-Soup.jpg','diet'),(23,'Tuna Corn Salad',50,'picfood\\Tuna-Corn-Salad.jpg','diet'),(24,'Salmon Salad',200,'picfood\\Salmon-Salad.jpg','diet'),(25,'Egg white porridge',50,'picfood\\Egg-white-porridge.jpg','diet'),(26,'Kimbap',100,'picfood\\Kimbap.jpg','diet'),(27,'Blood tofu soup',100,'picfood\\blood-tofu-soup.jpg','diet'),(28,'Salmon Steak',200,'picfood\\Salmon-Steak.jpg','diet'),(29,'Spicy Glass Noodle Salad',100,'picfood\\Spicy-Glass-Noodle-Salad.jpg','diet'),(30,'Tom Yum Goong Clear Soup',200,'picfood\\Tom-Yum-Goong-Clear-Soup.jpg','diet'),(31,'Spicy minced pork salad',50,'picfood\\Spicy-minced-pork-salad.jpg','diet'),(32,'Stir-fried Beef with Oyster Sauce',50,'picfood\\Stir-fried-Beef-with-Oyster-Sauce.jpg','carnivore'),(33,'Beef Panang Curry',50,'picfood\\Beef-Panang-Curry.jpg','carnivore'),(34,'Oxtail Soup',200,'picfood\\Oxtail-Soup.jpeg','carnivore'),(35,'Braised beef',100,'picfood\\brasai-beef.jpg','carnivore'),(36,'Spicy Beef Soup',200,'picfood\\Spicy-Beef-Soup.jpg','carnivore'),(37,'Spicy Raw Beef Salad',200,'picfood\\Spicy-Raw-Beef-Salad.jpg','carnivore'),(38,'Beef steak',200,'picfood\\Beef-steak.jpg','carnivore'),(39,'Grilled Beef Brisket',100,'picfood\\Grilled-Beef-Brisket.jpg','carnivore'),(40,'Braised Pork',50,'picfood\\Braised-Pork.jpg','carnivore'),(41,'Braised Chicken in Fish Sauce',100,'picfood\\Braised-Chicken-in-Fish-Sauce.jpg','carnivore');
/*!40000 ALTER TABLE `random_menu_menu` ENABLE KEYS */;
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
