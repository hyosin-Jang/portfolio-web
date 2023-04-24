-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `fk_project_id` int NOT NULL,
  `name` varchar(32) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `project_id_idx` (`fk_project_id`),
  CONSTRAINT `fk_project_id` FOREIGN KEY (`fk_project_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (2,3,'ㄴㄴ','ㄴㄴ','2023-04-22 14:38:44','22'),(3,5,'삭제테스트','삭제테스트','2023-04-22 14:41:46','ㄴㄴss'),(4,1,'ss','ssss','2023-04-22 14:47:14','ssss'),(5,1,'효신테스트','우와 잘보고 갑니다~~~','2023-04-22 14:49:15','ssss'),(6,1,'스크롤텟트ㅡ','ss','2023-04-22 14:51:02','ss'),(32,5,'ss','ss','2023-04-22 21:54:54','ss'),(33,3,'효신','GG','2023-04-22 22:28:41','GG'),(34,4,'효신','효신아화이팅!!','2023-04-22 22:31:18','111'),(35,4,'ㅎㅎ','ㅎㅎ','2023-04-22 22:31:22','ㅎㅎ'),(36,4,'ㄴㄴ','ㄴㄴ','2023-04-22 22:31:26','ㄴs'),(37,4,'ㅎㅎㅎ','gggggg','2023-04-22 22:31:30','gggg'),(38,4,'asdfa','sdfsafsa','2023-04-22 22:31:34','asfsda'),(40,3,'ss','ss','2023-04-22 22:32:44','ss'),(41,1,'효효','ㄴㄴ','2023-04-23 07:02:41','ss'),(42,1,'ss','ss','2023-04-23 07:19:46','ss'),(43,1,'dfdfs','sfsfsdf','2023-04-23 07:19:49','sfsdf'),(44,1,'ssss','ssssss','2023-04-23 07:19:54','ssss'),(45,2,'gkgkgkg','gg','2023-04-23 07:20:03','gg'),(46,2,'ss','ss','2023-04-23 07:20:06','ss'),(47,2,'ss','ss','2023-04-23 07:20:08','ss'),(48,2,'ss','ssss','2023-04-23 07:20:10','ss'),(49,2,'sss','ssss','2023-04-23 07:20:12','ss'),(50,2,'하하','ㄴㄴㄴㄴ','2023-04-23 07:20:17','ㄴㄴ'),(53,3,'효신','1111','2023-04-23 18:20:27','1234'),(54,1,'효신테스트','222','2023-04-23 18:45:05','ㅎkgkgkg'),(55,5,'sss','ssfa가나다ㅏ아아아아아아아아아아ㅏ아아아ㅏ아ㅏ아아ㅏ아아아아아아아아ㅏ아아아아아아아아아ㅏ아아ㅏ아아아아아아ㅏㅏ아아앙','2023-04-23 18:58:45','22'),(56,1,'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ','222','2023-04-23 19:02:10','ddddddddddddddd'),(57,8,'ss','sss','2023-04-23 22:35:38','sss'),(58,8,'ss','sss','2023-04-23 22:35:42','sss'),(59,8,'ss','ss','2023-04-23 22:35:45','ss'),(60,8,'sfs','ssf','2023-04-23 22:35:48','sfs'),(63,3,'세오스','11','2023-04-24 02:00:03','11');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-24 11:01:19
