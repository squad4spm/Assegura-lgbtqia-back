-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: assegura
-- ------------------------------------------------------
-- Server version	5.7.31

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
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) DEFAULT NULL,
  `dataNascimento` varchar(20) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `senha` varchar(150) NOT NULL,
  `endereco` varchar(20) DEFAULT NULL,
  `complemento` varchar(20) DEFAULT NULL,
  `cidade` varchar(20) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `cep` varchar(20) DEFAULT NULL,
  `imagem` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'assegura','lgbtqia',NULL,'teste@teste.com',NULL,'827ccb0eea8a706c4c34a16891f84e7b',NULL,NULL,'São Paulo','SP',NULL,NULL),(2,'teste um',NULL,NULL,'teste1@teste.com',NULL,'$2y$10$s4J1EDNY1kKHh9Ez4xr64ek8NSKFRpG5cgAF5uTn2W4A5417CQ2SC',NULL,NULL,NULL,NULL,NULL,NULL),(3,'teste','','','teste2@teste.com','','$2y$10$ag4xOIY1TcuvY/NzK8RILuPLRu.yrH4oZQcSdUhQaBZEmeOY47m0O','','','','','',''),(4,'teste','tres','17/01/2021','teste3@teste.com','voluntario','$2y$10$Vvlm8XF7Gas4uLev/X685.niP5c46LkHDkL1yY7TPNp1p.rWdKLpS','rua a','casa 1','SÃ£o Paulo','SP','07130000','teste.png'),(5,'teste','quatro','30/01/1995','teste4@teste.com','VoluntÃ¡rio','$2y$10$RaRXtq25EFevZ/U4v6uBx.b4mS7Thr5h.NNF6Jx4M5r8hl2Ix2.6G','rua a 123','apartamento 5b','Guarulhos','SÃ£o Paulo','07134-060',''),(6,'teste','quatro','','teste5@teste.com','Parceiro','$2y$10$QaU84rmLG/DWf8q9RXGsGOTIprl/6JRVGIpF.xYJq8PjOp/kQmqvG','rua a 123','apartamento 5b','','SÃ£o Paulo','07134-060',''),(7,'testador','seis','30/01/1995','teste6@teste.com','VoluntÃ¡rio','$2y$10$1iIP825CHKO3G6K/Bdk5veNluWyvnLLO.UQB5Ggl0VII8yYyG3Eae','rua a 123','apartamento 5b','Guarulhos','SÃ£o Paulo','07134-060',''),(8,'testador7','sete','30/01/1995','teste7@teste.com','VoluntÃ¡rio','$2y$10$BAMPh5JSfh4QJbJRH.DTXOHYajmbNuIih0TeS1.IjmtrDuMvnu4Jq','rua a 123','apartamento 5b','Guarulhos','','07134-060',''),(9,'teste','oito','30/01/1995','teste8@teste.com','Voluntário','$2y$10$Z853N70r1SXx3.upust5cOvJwTrXGNKnmLRl3QxHEk6bnknCY6RyC','rua a 123','apartamento 5b','Guarulhos','São Paulo','07134-060','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-18 12:56:37
