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
-- Table structure for table `users_user`
--

DROP TABLE IF EXISTS `users_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user`
--

LOCK TABLES `users_user` WRITE;
/*!40000 ALTER TABLE `users_user` DISABLE KEYS */;
INSERT INTO `users_user` VALUES (1,NULL,0,'a','aa',0,1,'2022-10-18 14:30:56.541695','a','a@a.com','a'),(2,NULL,0,'b','bb',0,1,'2022-10-18 14:55:56.800787','b','b@b.com','pbkdf2_sha256$390000$0AakXcIku9isDbc4WwtAdG$B+/Tv7mLy2FYolDtqkev+lR7fxmb6V85NNpDwN7IF5E='),(3,NULL,0,'c','cc',0,1,'2022-10-18 15:04:34.066066','c','c@c.com','pbkdf2_sha256$390000$7paW4YXxT5naC8qhqTB5jC$XX0nGCxQyLEV9aq3IpP6MHnYqpBwJVo5zz60rJjJmT8='),(4,NULL,0,'d','dd',0,1,'2022-10-19 12:33:32.749243','amp','amp@amp.com','pbkdf2_sha256$390000$1fCnXFSCONNUYS4Zp6KlLw$Sy/B5sgS5wTOqC5ELGuPoR8PLPYtsrGQjfX4V8JVW7A='),(5,NULL,0,'mark','tuan',0,1,'2022-10-19 13:33:32.810290','mtuan','mark@tuan.com','pbkdf2_sha256$390000$5cjot0njwM3eesJ4CP7dZi$y2TjERa6xF72NLaIGy+ZgLtXNz3VxhpuTWSdYK6OOJw='),(6,NULL,0,'bamy','bam',0,1,'2022-10-19 14:01:36.966696','bum','bam@bam.com','pbkdf2_sha256$390000$nUlLFRVyJVJmDoo5jfIihk$rCyW3lRJr5T51Dw8HLrezme+BkT3DtA7Rv8GKRGgUVo='),(7,NULL,0,'Thanyapat','Julamid',0,1,'2022-10-19 14:10:00.432370','Preme','preme@preme.com','pbkdf2_sha256$390000$MjDGmnHAgm3ppGVaiWTq5f$RtWRkK0gF9JVtRSRd6G17nwkgwhcanUyr1q8nKoOJYc='),(8,NULL,0,'Jackson','Wang',0,1,'2022-11-02 14:11:44.637903','Jackky','Jackson@Wang.com','pbkdf2_sha256$390000$VvsiYEOULn5YmoPWx21d0Q$eVqprMIg7uBSHycEqnj27WkZ6/TDPFH6jkQZda6rSIk='),(9,NULL,0,'ss','aa',0,1,'2022-11-25 11:37:28.955057','sa','ss@gmail.com','pbkdf2_sha256$390000$2vSGWcZqWbij7m6a80ED3N$MqxP58l59fUzxk+0RQlW96olx7stcidmw9HOvFp9aHk='),(10,NULL,0,'Pongsak','Keeratiwintakorn',0,1,'2022-11-27 14:43:23.168903','pong','pong.sak@gmail.com','pbkdf2_sha256$390000$Or0eiyVkkvdmsGyEy4SXZP$65PMZQbZo7pfYWDo2LdGa3SBJ736WeGk4gsZ4PlMMNU=');
/*!40000 ALTER TABLE `users_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-28 14:13:22
