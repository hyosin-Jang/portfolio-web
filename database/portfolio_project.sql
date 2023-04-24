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
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `fk_project_thumb_url` varchar(255) DEFAULT NULL,
  `view` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`project_id`),
  KEY `project_thumb_url_idx` (`fk_project_thumb_url`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'대학생을 위한 밥약속 잡는 서비스, 밥약','2023-01-15','2023-04-20','밥약을 통해 대학생들의 교류를 활성화시키기 위한 목적으로 밥약속 잡는 서비스 밥약의 유저 관리 기능을 개발하였습니다.','https://babyak-front-fgf6hu9va-babyak.vercel.app/',NULL,161),(2,'토도원','2022-07-01','2022-12-30','글로벌 ICT 인턴십으로 Enuma에서 SWE Intern으로 근무하며, Vue.js로 토도원 홈페이지의 커리큘럼 페이지를 개발하였습니다.','https://todo-one.com/curriculum',NULL,74),(3,'신촌연합 IT 개발동아리, CEOS','2023-03-06','2023-04-14','CEOS 프론트엔드 파트로 활동하며 3주치 과제를 진행하였습니다.','https://github.com/hyosin-Jang/react-messenger-17th',NULL,80),(4,'코딩 맞춤 학습 보조 서비스, cowithme','2022-06-26','2022-06-28','SW중심대학해커톤에 프론트엔드 개발자로 참여하며, 코딩 학습 도우미 서비스를 개발해 최우수상을 수상하였습니다.','https://github.com/Joint-Hackathon-for-SWUniv-2022',NULL,32),(5,'AI와 RPA를 이용한 얼굴 유사도 매칭 서비스, FEDI','2022-02-01','2022-04-30','졸업 프로젝트로 프론트엔드와 RPA를 구현하며, Google Solution Challenge top 50과 졸업프로젝트 대상을 수상하였습니다.','https://github.com/skguma/Fedi-SolutionChallenge',NULL,49),(6,'키워드 기반 개발 채용공고 검색 서비스, JOB-ARCHIVE','2021-07-01','2021-09-01','워크넷 채용공고 API를 이용해 개발 채용 공고를 모아볼 수 있는 서비스를 개발하였습니다.','https://github.com/ewha-webstudy/job-archive',NULL,6),(7,'문다, 클래스 수요조사용 응원 펀드레이징 웹사이트','2021-09-10','2021-10-10','대학생 창업팀 문다로 활동하며, 클래스 수요조사를 위한 웹사이트를 풀스택으로 개발하였습니다.','https://github.com/hyosin-Jang/moonda-funding',NULL,8),(8,'일기 감정분석 노래 추천 웹서비스, MoodMaker','2021-07-01','2021-09-01','AI 양재 허브에서 실무 개발자 양성 과정을 수료하며, 일기를 쓰면 감정을 분석해 노래를 추천해주는 서비스를 만들었습니다.','https://github.com/hyosin-Jang/MoodMaker',NULL,8);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
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
