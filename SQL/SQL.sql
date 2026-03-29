/*
SQLyog Community v13.3.1 (64 bit)
MySQL - 8.0.35 : Database - bs-academy
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bs-academy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `bs-academy`;

/*Table structure for table `bs_quickcontact` */

DROP TABLE IF EXISTS `bs_quickcontact`;

CREATE TABLE `bs_quickcontact` (
  `qc_id` int NOT NULL AUTO_INCREMENT,
  `qc_datetime` datetime DEFAULT NULL,
  `qc_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `qc_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `qc_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `qc_status` enum('N','Y') CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL,
  PRIMARY KEY (`qc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

/*Data for the table `bs_quickcontact` */

insert  into `bs_quickcontact`(`qc_id`,`qc_datetime`,`qc_name`,`qc_phone`,`qc_field`,`qc_status`) values 
(1,'2024-06-18 11:35:02','테스트2','010-2323-2323','수학','Y'),
(2,'2024-06-18 13:58:11','테스트','010-2323-2323','12312321','Y'),
(3,'2024-06-18 13:58:11','테스트22','010-2323-2323','4학년 중급','Y');

/*Table structure for table `wb_attach` */

DROP TABLE IF EXISTS `wb_attach`;

CREATE TABLE `wb_attach` (
  `att_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `att_target_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'ETC',
  `att_target` int unsigned NOT NULL DEFAULT '0' COMMENT '파일이 소속된 문서 PK',
  `att_sort` int unsigned NOT NULL DEFAULT '0' COMMENT '이미지 정렬 순서',
  `att_is_image` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '이미지 인지 여부',
  `att_origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '원본 파일명',
  `att_filepath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '실제 업로드된 파일 경로',
  `att_downloads` int unsigned NOT NULL DEFAULT '0' COMMENT '해당 파일 다운로드 수',
  `att_ext` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '파일 확장자',
  `att_filesize` int unsigned NOT NULL DEFAULT '0' COMMENT '파일 크기 kb',
  `att_width` smallint unsigned NOT NULL DEFAULT '0' COMMENT '이미지일경우 너비',
  `att_height` smallint unsigned NOT NULL DEFAULT '0' COMMENT '이미지일경우 높이',
  `reg_user` int unsigned NOT NULL DEFAULT '0' COMMENT '등록자 PK',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '등록시간',
  `att_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`att_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2402 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_attach` */

insert  into `wb_attach`(`att_idx`,`att_target_type`,`att_target`,`att_sort`,`att_is_image`,`att_origin`,`att_filepath`,`att_downloads`,`att_ext`,`att_filesize`,`att_width`,`att_height`,`reg_user`,`reg_datetime`,`att_status`) values 
(2228,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/48a50d5ba6d79eb7fe69bbcfbd7da133sesUx.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2229,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/a4e65a685598bd5d4d7e8bbeb438fb25nqs0d.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2230,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/a24a934822814aa9e3b61b39cd5aba0aPy0Ew.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2231,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/b813277764b1a80791b42ac8e4f51f14jBWu2.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2232,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/0f4781d36bcff0a516553a867e7af15c9pdxe.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2233,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/65dbd1211a95807a91f00fd192a9583fDjbHv.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2234,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/64863b500b994f97722dd121370aa5b4OrO3u.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2235,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/30baab11332a7dd78efb1dc8319eda45p1Aer.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2236,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/64db603a107c4b21de6ed0d6b5617500oGiae.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2237,'NOTICE',685,0,'N','pic_05_3840x.jpg','/data/files/notice/d42abe441e733b95737ace2f683e717bSvphT.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2238,'PRODUCTS',685,0,'Y','pic_05_3840x.jpg','/data/files/notice/d42abe441e733b95737ace2f683e717bSvphT.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2239,'PRODUCTS',685,0,'N','main-bg.jpg','/data/files/products/dcd15d73003c3d7e7ded62547449aaa44LR00.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2240,'PRODUCTS',688,0,'Y','main-bg.jpg','/data/files/products/4220eba19e3da8bcb13d2ac12806e032SNmx8.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2241,'PRODUCTS',692,0,'Y','main-bg.jpg','/data/files/products/e37c9547688db192038d24176954c400iCPbm.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2242,'PRODUCTS',693,0,'Y','tmp.webp','/data/files/products/9678d1f730ec52a31780d1c1b155763bkREaT.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2243,'PRODUCTS',696,0,'N','tmp.webp','/data/files/products/95549b7b8e931892afcc8ad2d1c8ec39ZnXJg.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2244,'ETC',0,0,'Y','pic_04_3840x.jpg','/data/files/faq/cab9a8f19cea903a4e144adc1e4882f3ZxM2J.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2245,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/c8ec269748cb3db9d91719be2b35fd53X9vsg.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2246,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/0319df020a0d73ff07fce2a998569decXxuNV.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2247,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/0f2897dc4247672bf08fa60b21f429cfvRCc9.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2248,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/dc0e827e9cfabfad117055735cf50e12XZhyP.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2249,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/f0e1262d2755c6ee4ffce3e2c7b00c2egZUai.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2250,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/cbde043ef9c71661bb9822f9cbd041b4tELgq.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2251,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/db2f5a6885028d8004e2036e8c732489K2ZjM.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2252,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/79b1dcfd61c9b1e4342f4b7024a6b42c111kG.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2253,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/28c59c5691801ba41e1d1e273e34d8b2g7m5y.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2254,'NOTICE',37,0,'Y','pic_04_3840x.jpg','/data/files/notice/577426b83d4d87226d279b767c406efba4OrH.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2255,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/c12ab266eaba74079341520dced482cfxmm0i.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2256,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/c83a367330c4a07e436a0e3999151683KKtTF.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2257,'NOTICE',33,0,'Y','pic_05_3840x.jpg','/data/files/notice/39e6691838e6366cfd835c39057ba2bdp8YrK.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2258,'NOTICE',15,0,'Y','pic_04_3840x.jpg','/data/files/notice/441c942b0f2c7727e4733c67cbae1a08vlc3F.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2259,'NOTICE',38,0,'Y','pic_04_3840x.jpg','/data/files/notice/e576d59dce86980192268852266c4ef3jbE3r.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2260,'NOTICE',39,0,'Y','pic_04_3840x.jpg','/data/files/notice/6839a4285aa04e3b24a7e0ec4a8da46eBcLDC.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2261,'NOTICE',40,0,'Y','pic_04_3840x.jpg','/data/files/notice/f1fb03b24ddce3b0a767fdb688740f52vNVdB.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2262,'NOTICE',43,0,'Y','pic_04_3840x.jpg','/data/files/notice/5226c920099dfacf1d63e1aa733d7be1C23X9.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2263,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/d917f0bc242ddf84c030c628dacce354rtHt2.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2264,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/5a115302d3d895810f3c5cd2080cd2906N83f.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2265,'NOTICE',45,0,'Y','Frame 208.jpg','/data/files/notice/71bed37c51add8ea6b4e66813fae0d8e7dxLX.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2266,'NOTICE',45,0,'Y','pic_04_3840x.jpg','/data/files/notice/4e528675646391a0d2060568e4639deeLBYRt.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2267,'NOTICE',45,0,'Y','pic_04_3840x.jpg','/data/files/notice/b39122551323ae8c1ca72b053e00d6467eIJ2.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2268,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/0c478cdeeb5d0432cd2a75e31f8eb46aFN65K.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2269,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/57a3d6043619ae571cad879fb061734eVa2p2.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2270,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/6dffe2a51af0556b061a577806ef74e2ghAZl.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2271,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/a34699e050991943a3f85012637c4d41JgOS1.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2272,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/1ff1d4c5dd95ef75439068a5b8570925Gs6Mx.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2273,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/0c0cbaa332edc7af78d79bc21a4c1c42WIbcP.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2274,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/96e26703a8ccc2e397e96ff227efdf97cNWjK.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2275,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/b32a926fdc6841386d3104c67e984a26ooDnm.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2276,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/0671a6bb269710609224681cf579af06uOGQC.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2277,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/01f7b764ccd8d1a9794304a4462f5f3blCz06.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2278,'PRODUCTS',0,0,'Y','pic_04_3840x.jpg','/data/files/products/a0299c374317f0b4cedca891e52d05f9o54KI.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2279,'NOTICE',33,0,'Y','pic_04_3840x.jpg','/data/files/notice/1ff49426b43a8aebcef7a0ea0eb9d7cfiy6vP.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2280,'NOTICE',46,0,'Y','pic_05_3840x.jpg','/data/files/notice/9c2ae7f129c5f412ab6d45eb48ac42665Uqf5.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2281,'NOTICE',47,0,'Y','pic_05_3840x.jpg','/data/files/notice/5c8de8b790070dd7fdb3b3723557024e5NYFV.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2282,'NOTICE',48,0,'Y','pic_05_3840x.jpg','/data/files/notice/25c13236cbd20d88ee6c2c682a00f6c90ztvl.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2283,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/1aab5a3c5f10ca1b1c2de541545e08damjGxw.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2284,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/baefbf54939aff54ee9ebf61c661d450ORuI7.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2285,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/617da0fbf83ec453c93333bdb73828c6BeTkj.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2286,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/65529318e4fadf63d6d6e3d12af9fe48flmNK.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2287,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/5fa51ad1677f887e7a1208ef1180e950LPk53.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2288,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/a7b2e8318b81b425da8eb8464cf451b32A3ze.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2289,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/5d6d1983386086d15b4a4ac3e93eb96bKQ0sz.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2290,'PC_NOTICE',0,0,'Y','pic_05_3840x.jpg','/data/files/notice_desktop/ad5a42ccd8e9d832ee2b0ebfc51ebe228KAYX.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2291,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/0011b5d0abce843e1ff1cd1e2a23680c6rHGx.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2292,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/cd6a31209de37e55aed9b5228315b98bkHbCw.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2293,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/452ff44410a66bea4eced3a09bc152f1Bv4mo.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2294,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/f0e14f5e19f190fac2447de5485492d347EqQ.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2295,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/c381c823d73ee2fb8ec6d7ef1715c56bDmmmS.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2296,'PC_NOTICE',0,0,'Y','pic_05_3840x.jpg','/data/files/notice_desktop/31e93b7629d9f13f9d82d82d531a0a9afKTUD.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2297,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/fa859bad6b4e45d506d0b8d7d257f7c8C3lYv.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2298,'PC_NOTICE',0,0,'Y','pic_05_3840x.jpg','/data/files/notice_desktop/022a227a48b571f7d97efdf01c4c2049kVxwL.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2299,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/526b252fee357ac1086581fafc67c721DIGRx.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2300,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/d8d9a724682c6c000ca4485c7955fac7EEiX7.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2301,'PC_NOTICE',0,0,'Y','pic_05_3840x.jpg','/data/files/notice_desktop/5c20309083361483d27b27893e57f659bEYFY.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2302,'INQUIRY',0,0,'Y','temp_popup.webp','/data/files/inquiry/7034fe10d1ba30a36c130e7883a3c7e8TbAwV.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2303,'INQUIRY',0,0,'Y','temp_popup.webp','/data/files/inquiry/ad6db09ada2a3550a57aad42928b9853OawRI.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2304,'INQUIRY',0,0,'Y','temp_popup.webp','/data/files/inquiry/4c6d6131ae7b7434eca6989771a2c1cftgCSx.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2305,'INQUIRY',0,0,'Y','temp_popup.webp','/data/files/inquiry/995de4416b82dcc54558a96cf87eed846BuaH.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2306,'INQUIRY',0,0,'Y','temp_popup.webp','/data/files/inquiry/4703eba6006e834b0ef310c55bee0e5dFoXs2.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2307,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/204460b46c794130b65994615e688fc3mQE00.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2308,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/a84f07bc7fd5e89b82f3e727e70df506V7wM7.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2309,'PRODUCTS',696,0,'N','temp_popup.webp','/data/files/products/03a09812832fce2b2c1742ac358d6042qBSXm.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2310,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/f3b420a8d2b18a3bbf8e09fd94204d53uP0eb.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2311,'PRODUCTS',0,0,'N','lap.png','/data/files/products/90416101097eb09a23fdc2f197c0357cucdxv.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2312,'PRODUCTS',696,0,'N','temp_popup.webp','/data/files/products/6c37b8374adbf8b9acf11f54ebffc4aao0xcI.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2313,'PRODUCTS',696,0,'N','lap.png','/data/files/products/a62950786d3402a760b6c048a40a0249A4Fdr.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2314,'PRODUCTS',0,0,'Y','lap.png','/data/files/products/f1aed4ddd39f8c7611a81c953b37309arSW5d.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2315,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/944855038fac0956d7007b6dd12b6b12Hdmd4.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2316,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/958b34d064622cda416678d8ece231a5Laspq.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2317,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/0722b6eac1d8e592ca8cbc0728e1c978wlTQs.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2318,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/14667be73fcf1329b6ac54f5905fe27cM4CpH.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2319,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/87aecbc64542791abc7d5a7c541ec163xhvRW.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2320,'PRODUCTS',0,0,'Y','temp_popup.webp','/data/files/products/aa28367b1a54635e45235133cca780f4IaHeI.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2321,'PRODUCTS',0,0,'N','lap.png','/data/files/products/193753d163f675c4efe65ed63a633e42a1Gpo.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2322,'PRODUCTS',0,0,'N','temp_popup.webp','/data/files/products/468f8922ccba4462d355cdbda0fbf76cBN6Sy.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2323,'PC_NOTICE',0,0,'Y','temp_popup.webp','/data/files/notice_desktop/ffd90b999122de1489c606c38ebd28927mVnV.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2324,'PC_NOTICE',0,0,'Y','temp_popup.webp','/data/files/notice_desktop/2c1a20fa9483febd4f54d65da9086dca7zACZ.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2325,'PC_NOTICE',0,0,'Y','temp_popup.webp','/data/files/notice_desktop/4484a45fbed57aa898108e99b04e5aa2If4kD.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2326,'PC_NOTICE',0,0,'Y','chat.png','/data/files/notice_desktop/07037634f8af5ac2c3358c98a7153e898lAz4.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2327,'PC_NOTICE',0,0,'Y','temp_popup.webp','/data/files/notice_desktop/4b23bcfe2aec1b51f7542ef07ac89d91kIHDP.webp',0,'webp',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2328,'PRODUCTS',0,0,'N','pic_05_3840x.jpg','/data/files/products/a5236de399140d95db892ca828df78ba9MXCp.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2329,'PRODUCTS',702,0,'Y','pic_04_3840x.jpg','/data/files/products/ec48d343a6ec59af1bf2493d79675bf6b5iop.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2330,'PRODUCTS',702,0,'N','pic_05_3840x.jpg','/data/files/products/591c89afc33b351ca61111b81a3d50f9pgW2K.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2331,'PRODUCTS',702,0,'N','Frame 208.jpg','/data/files/products/53d4eb41885f1ac264a6ea77d302b37b7F0FO.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2332,'PRODUCTS',0,0,'N','Frame 208.jpg','/data/files/products/bff0cc61ca371bd40dfe2b67ea258d78HufNr.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2333,'PRODUCTS',702,0,'N','pic_04_3840x.jpg','/data/files/products/823bb980d040de93b1ca711530712dcdaGiAn.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2334,'PRODUCTS',702,0,'Y','pic_05_3840x.jpg','/data/files/products/2947cb368863ef562f1432f79fe92892pblHt.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2335,'PRODUCTS',0,0,'Y','pic_04_3840x.jpg','/data/files/products/99c2e9ea449522edc220a7886505c18bnTU8r.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2336,'PRODUCTS',704,0,'Y','pic_04_3840x.jpg','/data/files/products/b295173646eac72cb2fe26fb2cd236e8g0mdL.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2337,'PRODUCTS',0,0,'Y','pic_04_3840x.jpg','/data/files/products/01c4f03e2074d2365a9d953dbcf1fbae9is9u.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2338,'PRODUCTS',702,0,'Y','pic_04_3840x.jpg','/data/files/products/860edc03e1273ee224eaef9516a4b5adeXmFE.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2339,'PRODUCTS',0,0,'Y','Frame 208.jpg','/data/files/products/c0e4722731280cd55bc128d89be25751u6GVS.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2340,'PRODUCTS',704,0,'Y','Frame 208.jpg','/data/files/products/0fa4c42f0e283148ce6b2841020b1452ynNkF.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2341,'INQUIRY',0,0,'Y','Frame 208.jpg','/data/files/inquiry/5bcd845e8f45aca935f2db37e1fd2509RaSy8.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2342,'PRODUCTS',0,0,'Y','Frame 208.jpg','/data/files/products/0c2ed2342abf6674ea6e2bf73aa668d3Z9yNT.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2343,'PRODUCTS',0,0,'N','pic_04_3840x.jpg','/data/files/products/106b34459e76bd38d9133fda001ed84b9USVX.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2344,'PRODUCTS',696,0,'N','pic_05_3840x.jpg','/data/files/products/c026a12c3cc8bd69bf278d81b52c5d93LIvuf.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2345,'PRODUCTS',696,0,'N','pic_04_3840x.jpg','/data/files/products/1b78deb7997b8bd992d5e8ff6246cd5awtEWa.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2346,'PC_NOTICE',0,0,'Y','pic_04_3840x.jpg','/data/files/notice_desktop/39c8605dc697e11b5838da9fc4cc75d0S6Fwj.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2347,'PC_NOTICE',0,0,'Y','pic_05_3840x.jpg','/data/files/notice_desktop/f7ec4350c1b255cbc47fe6d514be91e5JMBtr.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2348,'INQUIRY',0,0,'Y','pic_04_3840x.jpg','/data/files/inquiry/f3cefb4a59c9bba706c1079a0063f7b2zXCPa.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2349,'ETC',0,0,'Y','pic_04_3840x.jpg','/data/files/faq/4b5f90961522910eb30a2b644dde567axT8pO.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2350,'INQUIRY',0,0,'Y','pic_04_3840x.jpg','/data/files/inquiry/80b82d2795707a4275677f00be0c76ecAVvdU.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2351,'INQUIRY',0,0,'Y','pic_05_3840x.jpg','/data/files/inquiry/613ceb6bf79a5db244aad9d27366e687CLeUC.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2352,'INQUIRY',0,0,'Y','pic_05_3840x.jpg','/data/files/inquiry/e0f5e8db1bb8226662283b2e4f68a207vDjcV.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2353,'PRODUCTS',696,0,'Y','eufy_CCTV_Photo.jpg','/data/files/products/1706415fdc703297db220ab101162abfx2xwy.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2354,'PRODUCTS',0,0,'Y','áá³áá³ááµá«áá£áº 2024-05-09 áá©áá® 2.47.22.png','/data/files/products/1372364b040355470ba6cf3431f9eaa6Oo5Rj.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2355,'INQUIRY',0,0,'Y','pic_04_3840x.jpg','/data/files/inquiry/7ff8c3cca5758a4a4c0c63a7eafa92ecb6HhG.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2356,'INQUIRY',0,0,'Y','pic_04_3840x.jpg','/data/files/inquiry/9e81a5651f19ebc28556317819beb6b3jEn7l.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2357,'INQUIRY',0,0,'Y','pic_04_3840x.jpg','/data/files/inquiry/f17e2262ad8b1fdd98ba2cac1572e604hMrvq.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2358,'INQUIRY',0,0,'Y','pic_04_3840x.jpg','/data/files/inquiry/029c65568dfd3221d531dd679e9968f54E6PR.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2359,'INQUIRY',0,0,'Y','Frame 208.jpg','/data/files/inquiry/dbfc93825af38a690796d84a3745f423t8Fog.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2360,'INQUIRY',0,0,'Y','1 (1).jpg','/data/files/inquiry/1f68fd7b3fc34b0bc2bfd6274e4862c5uzS6a.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2361,'PC_NOTICE',0,0,'Y','3.jpg','/data/files/notice_desktop/8ff4bf1aabcad3056bd05f20cf63c77ahivny.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2362,'PC_NOTICE',0,0,'Y','eufy_CCTV_Photo (1).jpg','/data/files/notice_desktop/6923b494db5298c5654daf93908fb36eE3OsU.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2363,'PC_NOTICE',0,0,'Y','cctv.png','/data/files/notice_desktop/4dc141596e60817cc80ba8da39b35c7eM9EbA.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2364,'PC_NOTICE',0,0,'Y','Group 121.jpg','/data/files/notice_desktop/292f28df8c269296146fdf92f8ad511cUHrC3.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2365,'INQUIRY',0,0,'Y','Group 121.jpg','/data/files/inquiry/736da5cd2cd39d8d285868233f3159a4pj2fF.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2366,'INQUIRY',0,0,'Y','1.png','/data/files/inquiry/aaa204e16bf63bf59f41f04747a28c29Rjz8J.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2367,'INQUIRY',0,0,'Y','2.png','/data/files/inquiry/f25f5989867030475520ec39a67bdee3dOVl1.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2368,'NOTICE',91,0,'Y','pexels-magda-ehlers-pexels-1337382.jpg','/data/files/notice/86e599676470c93185125e37b67101fbVf7li.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2369,'NOTICE',91,0,'Y','pexels-teona-swift-6913721.jpg','/data/files/notice/62ced47bb9d36d2e832baa7bb71d722dZycFm.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2370,'NOTICE',91,0,'Y','pexels-teona-swift-6913721.jpg','/data/files/notice/4fa1e19699f626fc3876e3b7ccf44833udC1t.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2371,'NOTICE',91,0,'Y','pexels-teona-swift-6913721.jpg','/data/files/notice/8ef8c572f90a0d65ca6e290bc076ffd6y94JR.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2372,'NOTICE',91,0,'Y','pexels-cottonbro-5077039.jpg','/data/files/notice/db2e68455e3ac28ebc54a0033429037apvbEI.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2373,'NOTICE',91,0,'Y','pexels-karina-kungla-706120564-18186418.jpg','/data/files/notice/645d788ae006d107352b3aac1986f16eOTjfL.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2374,'NOTICE',91,0,'Y','pexels-teona-swift-6913721.jpg','/data/files/notice/2b1798f6ff140192e2c67b64dbdbaf53TL9ke.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2375,'NOTICE',91,0,'Y','pexels-karina-kungla-706120564-18186306.jpg','/data/files/notice/0607cec57349d20e324b46dcf08da9b69hqkR.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2376,'NOTICE',91,0,'Y','pexels-cottonbro-5077039.jpg','/data/files/notice/645a847996eaa2d15fb484d8af8186f0U0kfT.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2377,'NOTICE',92,0,'Y','pexels-teona-swift-6913721.jpg','/data/files/notice/b47666c575b0323a8e689f2e0a406472j43XR.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2378,'NOTICE',92,0,'Y','pexels-cqf-avocat-188397-613508.jpg','/data/files/notice/3664e2eca8a2f559959db3447b8f321fVG9Xi.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2379,'ETC',0,0,'Y','zzoa_73319_one_Asian_students_diligently_studying_in_a_well-lit_d312b4f8-ae42-4eb8-8818-32b68b1ce693 2.png','/data/files/notice/60fdb2fc5e4a39e045487269ac237c53e5ayG.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2380,'ETC',0,0,'Y','pexels-karina-kungla-706120564-18186306.jpg','/data/files/notice/4a528b17f45546d69955b8ba66d4853dZEtB2.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2381,'NOTICE',98,0,'Y','pexels-wildan-arifin-2644311-15242361.jpg','/data/files/notice/e663379390b000470d17be39fd518775ecnH0.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2382,'ETC',0,0,'Y','pexels-magda-ehlers-pexels-1337382.jpg','/data/files/notice/5bae81a941b47db5cd1e2c185c90d8c5kMlmc.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2383,'NOTICE',101,0,'Y','pexels-apasaric-325185.jpg','/data/files/notice/19c20a75689faa020089d421ba671710xAbXL.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2384,'ETC',0,0,'Y','pexels-wildan-arifin-2644311-15242361.jpg','/data/files/notice/51b50b813e543dae847dc1a103763602dirZn.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2385,'NOTICE',99,0,'Y','pexels-karina-kungla-706120564-18186418.jpg','/data/files/notice/3277e18c39b16d264f19b743981b81fbW982X.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2386,'ETC',0,0,'Y','zzoa_73319_Korean_Late_Teenage_Students_Walking_and_Laughing_Si_4f91ceb3-6f9f-46c4-86e1-5c03a4a46c89 2.png','/data/files/notice/4ec73a4176bf1960ba2e57f5a40df69cHavOO.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2387,'NOTICE',100,0,'Y','pexels-cottonbro-5082579.jpg','/data/files/notice/b41dc8a68d48d3d8b3fb94fbbda430b6gQpeB.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2388,'ETC',0,0,'Y','small-img.png','/data/files/notice/744a732891d7ed8e50d6b40b631bd942gIrZS.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2389,'NOTICE',102,0,'Y','big-2.png','/data/files/notice/a36f2b891b6f05476351825744696d68SWt7P.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2390,'NOTICE',102,0,'Y','Frame 1171279528.png','/data/files/notice/dafae519458bf639554a33f28a20fa8fJ3BhO.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2391,'ETC',0,0,'Y','image 41.png','/data/files/notice/6f9ea81fc17fbdd3181d2a1643204339zHGvV.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2392,'NOTICE',103,0,'Y','mobile-back-1.png','/data/files/notice/f33e0cc5b260eb5f69a3071d0b036993Ul0pq.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2393,'ETC',0,0,'Y','zzoa_73319_Korean_Late_Teenage_Students_Walking_and_Laughing_Si_4f91ceb3-6f9f-46c4-86e1-5c03a4a46c89 2.png','/data/files/notice/d3ed85c9cbf3f21a854fba2a92649a9cdcpZF.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2394,'NOTICE',104,0,'Y','Rectangle 45.png','/data/files/notice/45fc40e8397700804c923137a20012a1SWu5o.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2395,'ETC',0,0,'Y','Rectangle 111.png','/data/files/notice/b72d8267457bb5d664bd7a224c41cd43AHjKi.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2396,'NOTICE',105,0,'Y','Rectangle 111.png','/data/files/notice/100787ff6424d3443cea830deb1af00f8bEMK.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2397,'ETC',0,0,'Y','pexels-timea-kadar-860778-2215609.jpg','/data/files/notice/34ecbd278d266fb53e0121f1f5ccdefeTlrRi.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2398,'NOTICE',106,0,'Y','4.png','/data/files/notice/a83e0c76bba64d4a9eddf7442bf0edb3BNj6W.png',0,'png',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2399,'ETC',0,0,'Y','pexels-magda-ehlers-pexels-1337382.jpg','/data/files/notice/0a2fdd52bb26f2efd89b4443b65254ccmwy9c.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2400,'ETC',0,0,'Y','pexels-moose-photos-170195-1037992.jpg','/data/files/notice/1545157175d3ee5b0475d68ccbcb413domTld.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y'),
(2401,'NOTICE',107,0,'Y','pexels-karina-kungla-706120564-18186306.jpg','/data/files/notice/1fc92b226b506ba155f6de9716f13d91TxVzC.jpg',0,'jpg',0,0,0,0,'0000-00-00 00:00:00','Y');

/*Table structure for table `wb_banner` */

DROP TABLE IF EXISTS `wb_banner`;

CREATE TABLE `wb_banner` (
  `ban_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `bng_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_filepath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_link_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `ban_link_url` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_link_type` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `ban_status` enum('Y','H','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `ban_sort` int unsigned NOT NULL DEFAULT '0',
  `ban_timer_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `ban_timer_start` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ban_timer_end` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ban_ext1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_ext2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_ext3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_ext4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ban_ext5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`ban_idx`),
  KEY `bng_key` (`bng_key`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_banner` */

/*Table structure for table `wb_banner_group` */

DROP TABLE IF EXISTS `wb_banner_group`;

CREATE TABLE `wb_banner_group` (
  `bng_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `bng_sort` int unsigned NOT NULL DEFAULT '0',
  `bng_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_width` smallint NOT NULL DEFAULT '0',
  `bng_height` smallint NOT NULL DEFAULT '0',
  `bng_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `bng_ext1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_ext2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_ext3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_ext4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_ext5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bng_ext1_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `bng_ext2_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `bng_ext3_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `bng_ext4_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `bng_ext5_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`bng_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_banner_group` */

/*Table structure for table `wb_basic` */

DROP TABLE IF EXISTS `wb_basic`;

CREATE TABLE `wb_basic` (
  `idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `writer` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '작성자명',
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '글 제목',
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '글 내용',
  `status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '글 상태(Y:공개 / N:삭제)',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '글 작성일시',
  `exp_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '글 삭제일시',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_basic` */

/*Table structure for table `wb_board` */

DROP TABLE IF EXISTS `wb_board`;

CREATE TABLE `wb_board` (
  `brd_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_type` enum('list','gallery','webzine') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'list',
  `brd_title` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_l` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_l_m` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_v` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_v_m` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_w` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_w_m` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_c` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_skin_c_m` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_lv_list` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_lv_read` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_lv_write` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_lv_reply` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_lv_comment` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_lv_download` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_use_anonymous` enum('Y','N','A') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `brd_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_use_category` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `brd_use_secret` enum('Y','N','A') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `brd_use_reply` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `brd_use_comment` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `brd_display_time` enum('sns','basic','full') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'sns',
  `brd_count_post` int unsigned NOT NULL DEFAULT '0',
  `brd_page_limit` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `brd_page_rows` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_page_rows_m` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_fixed_num` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_fixed_num_m` tinyint unsigned NOT NULL DEFAULT '0',
  `brd_point_write` int unsigned NOT NULL DEFAULT '0',
  `brd_point_write_flag` tinyint NOT NULL DEFAULT '1',
  `brd_point_read` int unsigned NOT NULL DEFAULT '0',
  `brd_point_read_flag` tinyint NOT NULL DEFAULT '-1',
  `brd_point_comment` int unsigned NOT NULL DEFAULT '0',
  `brd_point_comment_flag` tinyint NOT NULL DEFAULT '1',
  `brd_point_download` int unsigned NOT NULL DEFAULT '0',
  `brd_point_download_flag` tinyint NOT NULL DEFAULT '-1',
  `brd_point_reply` int unsigned NOT NULL DEFAULT '0',
  `brd_point_reply_flag` tinyint NOT NULL DEFAULT '1',
  `brd_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `brd_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `brd_blind_nickname` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`brd_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_board` */

/*Table structure for table `wb_board_comment` */

DROP TABLE IF EXISTS `wb_board_comment`;

CREATE TABLE `wb_board_comment` (
  `cmt_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `cmt_num` int unsigned NOT NULL DEFAULT '0',
  `cmt_parent` int unsigned NOT NULL DEFAULT '0',
  `cmt_reply` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `post_idx` int unsigned NOT NULL DEFAULT '0',
  `cmt_nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `cmt_password` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cmt_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cmt_ip` int unsigned NOT NULL DEFAULT '0',
  `cmt_status` enum('Y','N','B') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `cmt_mobile` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`cmt_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_board_comment` */

/*Table structure for table `wb_board_post` */

DROP TABLE IF EXISTS `wb_board_post`;

CREATE TABLE `wb_board_post` (
  `post_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `post_num` int unsigned NOT NULL DEFAULT '0',
  `post_parent` int unsigned NOT NULL DEFAULT '0',
  `post_reply` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `brd_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `post_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '카테고리',
  `post_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `post_thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '썸네일 파일',
  `post_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `post_status` enum('Y','N','B') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `post_nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `post_password` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `post_count_comment` int unsigned NOT NULL DEFAULT '0',
  `post_recent_comment` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_secret` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `post_notice` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `post_hit` int unsigned NOT NULL DEFAULT '0',
  `post_mobile` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `post_ip` int unsigned NOT NULL DEFAULT '0',
  `post_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `post_ext1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext5` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext6` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext7` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext8` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `post_ext9` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`post_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_board_post` */

/*Table structure for table `wb_config` */

DROP TABLE IF EXISTS `wb_config`;

CREATE TABLE `wb_config` (
  `cfg_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cfg_value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`cfg_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_config` */

insert  into `wb_config`(`cfg_key`,`cfg_value`) values 
('accept_languages','ko'),
('agreement_privacy','<p>개인정보 취급방침을 입력해주세요2233</p>'),
('agreement_site','<p>사이트 이용약관을 입력해주세요2233</p>'),
('allow_host','www.youtube.com\nwww.youtube-nocookie.com\nmaps.google.co.kr\nmaps.google.com\nflvs.daum.net\nplayer.vimeo.com\nsbsplayer.sbs.co.kr\nserviceapi.rmcnmv.naver.com\nserviceapi.nmv.naver.com\nwww.mgoon.com\nvideofarm.daum.net\nplayer.sbs.co.kr\nsbsplayer.sbs.co.kr\nwww.tagstory.com\nplay.tagstory.com\nflvr.pandora.tv'),
('channel_facebook',''),
('channel_instagram',''),
('channel_itunes',''),
('channel_naver_blog',''),
('channel_naver_cafe',''),
('channel_naver_pholar',''),
('channel_naver_post',''),
('channel_naver_storefarm',''),
('channel_playstore',''),
('channel_type','Person'),
('company_address','회사주소'),
('company_biznum','사업자등록번호'),
('company_ceo','대표자명'),
('company_fax',''),
('company_name','사업자명'),
('company_privacy_email','info@test.com'),
('company_privacy_name','개인정보 관리책임자'),
('company_shopnum','통신판매업 신고번호'),
('company_tel','회사번호'),
('default_language','ko'),
('deny_id','admin,administrator,webmaster,sysop,manager,root,su,guest,super'),
('deny_ip',''),
('deny_nickname','admin,administrator,관리자,운영자,어드민,주인장,webmaster,웹마스터,sysop,시삽,시샵,manager,매니저,메니저,root,루트,su,guest,방문객'),
('deny_word','18아,18놈,18새끼,18년,18뇬,18노,18것,18넘,개년,개놈,개뇬,개새,개색끼,개세끼,개세이,개쉐이,개쉑,개쉽,개시키,개자식,개좆,게색기,게색끼,광뇬,뇬,눈깔,뉘미럴,니귀미,니기미,니미,도촬,되질래,뒈져라,뒈진다,디져라,디진다,디질래,병쉰,병신,뻐큐,뻑큐,뽁큐,삐리넷,새꺄,쉬발,쉬밸,쉬팔,쉽알,스패킹,스팽,시벌,시부랄,시부럴,시부리,시불,시브랄,시팍,시팔,시펄,실밸,십8,십쌔,십창,싶알,쌉년,썅놈,쌔끼,쌩쑈,썅,써벌,썩을년,쎄꺄,쎄엑,쓰바,쓰발,쓰벌,쓰팔,씨8,씨댕,씨바,씨발,씨뱅,씨봉알,씨부랄,씨부럴,씨부렁,씨부리,씨불,씨브랄,씨빠,씨빨,씨뽀랄,씨팍,씨팔,씨펄,씹,아가리,아갈이,엄창,접년,잡놈,재랄,저주글,조까,조빠,조쟁이,조지냐,조진다,조질래,존나,존니,좀물,좁년,좃,좆,좇,쥐랄,쥐롤,쥬디,지랄,지럴,지롤,지미랄,쫍빱,凸,퍽큐,뻑큐,빠큐,ㅅㅂㄹㅁ'),
('email_send_address','email@address.com'),
('extra_tag_meta',''),
('extra_tag_script',''),
('google_recaptcha_secret_key',''),
('google_recaptcha_site_key',''),
('icode_userid',''),
('icode_userpw',''),
('point_member_login','0'),
('point_member_register','0'),
('point_name','포인트'),
('point_use','N'),
('shop_bank_account',''),
('shop_bank_use','Y'),
('shop_card_pay_use','Y'),
('shop_delivery_company','우체국'),
('shop_delivery_cost','[{\"price\":20000, \"sc_cost\":4000},{\"price\":30000, \"sc_cost\":3000},{\"price\":50000,\"sc_cost\":2000}]'),
('shop_delivery_info','상품 배송 안내를 입력해주세요'),
('shop_delivery_type','차등'),
('shop_hp_pay_use','Y'),
('shop_iche_use','Y'),
('shop_inicis_mid',''),
('shop_kakaopay_use','N'),
('shop_kcp_site_code',''),
('shop_nc_k_accessKey',''),
('shop_nc_k_accessSecret',''),
('shop_nc_k_plusFriend',''),
('shop_nc_k_sid',''),
('shop_nc_s_callback',''),
('shop_nc_s_sid',''),
('shop_pay_test','N'),
('shop_pg_service','kcp'),
('shop_refund_info','교환/반품안내를 입력해주세요'),
('shop_sms_bank_info','N'),
('shop_sms_bank_info_c',''),
('shop_sms_bank_info_cc','안녕하세요 #{주문자}님,\r\n입금계좌 안내드립니다.\r\n감사합니다.\r\n\r\n- 주문번호: #{주문번호}\r\n- 주문상품: #{주문상품}\r\n- 계좌번호: #{계좌번호}\r\n- 금액: #{주문금액}원\r\n'),
('shop_sms_delivery','N'),
('shop_sms_delivery_button','Y'),
('shop_sms_delivery_c',''),
('shop_sms_delivery_cc','안녕하세요 #{주문자}님\r\n\r\n주문하신 상품이 발송처리 되었습니다.\r\n\r\n- 주문번호: #{주문번호}\r\n- 주문상품: #{주문상품}\r\n- 택배사 : #{택배사}\r\n- 운송장번호: #{운송장번호}'),
('shop_sms_order_complete','N'),
('shop_sms_order_complete_c',''),
('shop_sms_order_complete_cc','안녕하세요 #{주문자}님,\r\n소중한 주문이 접수완료되었습니다.\r\n\r\n- 주문번호: #{주문번호}\r\n- 주문상품: #{주문상품}\r\n- 금액: #{주문금액}원\r\n'),
('shop_sms_pay_complete','N'),
('shop_sms_pay_complete_c',''),
('shop_sms_pay_complete_cc','안녕하세요 #{주문자}님\r\n\r\n주문하신 상품의 입금확인 되었습니다.\r\n감사합니다.\r\n\r\n- 주문번호: #{주문번호}\r\n- 주문상품: #{주문상품}'),
('shop_sms_type','SMS'),
('shop_use_global_naverpay','N'),
('shop_use_samsungpay','N'),
('shop_vbank_use','Y'),
('site_meta_description','이곳에 사이트의 요약 설명을 입력하세요.'),
('site_meta_image',''),
('site_meta_keywords','휘파람소프트,휘파람보드'),
('site_subtitle','휘파람이 절로 나오는 홈페이지'),
('site_title','휘파람 보드'),
('skin_members','basic'),
('skin_members_m','basic'),
('skin_shop','basic'),
('skin_shop_list','basic'),
('skin_shop_list_m','basic'),
('skin_shop_m','basic'),
('sms_send_phone',''),
('social_facebook_appid',''),
('social_facebook_appsecret',''),
('social_facebook_use','N'),
('social_google_clientid',''),
('social_google_clientsecret',''),
('social_google_use','N'),
('social_kakao_clientid',''),
('social_kakao_use','N'),
('social_naver_clientid',''),
('social_naver_clientsecret',''),
('social_naver_use','N'),
('statics_updated','0'),
('use_localize','Y');

/*Table structure for table `wb_consult` */

DROP TABLE IF EXISTS `wb_consult`;

CREATE TABLE `wb_consult` (
  `cst_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '상담신청 PK',
  `cst_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `cst_step` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '답변대기' COMMENT '단계: 답변대기,답변완료',
  `cst_regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '상담신청 시간',
  `mem_idx` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '신청자 mem_idx',
  `cst_phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '신청자 연락처',
  `cst_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '신청자 이메일',
  `cst_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '문의 제목',
  `cst_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '신청 내용 상세',
  `cst_memo_count` int unsigned NOT NULL DEFAULT '0' COMMENT '상담신청 메모 등록 수',
  `cst_ext1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext6` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext7` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext8` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `cst_ext9` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  PRIMARY KEY (`cst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_consult` */

/*Table structure for table `wb_consult_answer` */

DROP TABLE IF EXISTS `wb_consult_answer`;

CREATE TABLE `wb_consult_answer` (
  `csa_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '답변 PK',
  `csa_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `cst_id` int unsigned NOT NULL DEFAULT '0' COMMENT '상담신청자 PK',
  `csa_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '상담답변 내용',
  `reg_user` int unsigned NOT NULL DEFAULT '0' COMMENT '등록자',
  `reg_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록시간',
  `upd_user` int unsigned NOT NULL DEFAULT '0' COMMENT '수정자',
  `upd_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정시간',
  PRIMARY KEY (`csa_id`),
  KEY `cst_id` (`cst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_consult_answer` */

/*Table structure for table `wb_contact` */

DROP TABLE IF EXISTS `wb_contact`;

CREATE TABLE `wb_contact` (
  `con_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '상담신청 PK',
  `con_state` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `con_step` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '단계:신청,처리중,답변완료',
  `reg_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '상담신청 시간',
  `con_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '신청자 성명',
  `con_phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '신청자 연락처',
  `con_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '신청자 이메일',
  `con_memo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '신청 내용 상세',
  `cst_ip` int unsigned NOT NULL DEFAULT '0' COMMENT '신청자 IP',
  `con_ext1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext6` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext7` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext8` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `con_ext9` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`con_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_contact` */

/*Table structure for table `wb_coupon` */

DROP TABLE IF EXISTS `wb_coupon`;

CREATE TABLE `wb_coupon` (
  `cou_id` int NOT NULL AUTO_INCREMENT COMMENT '쿠폰 아이디',
  `cou_type` enum('all','start') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'all' COMMENT '쿠폰 타입',
  `cou_exp_month` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '-' COMMENT '만료 개월수',
  `cou_disc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '쿠폰 할인율/액',
  `cou_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '쿠폰 이름',
  `cou_minprice` int NOT NULL DEFAULT '0' COMMENT '최소 가격',
  `cou_maxprice` int NOT NULL DEFAULT '0' COMMENT '최대 가격',
  `cou_status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'R' COMMENT '상태',
  `cou_count` int NOT NULL DEFAULT '0' COMMENT '사용 쿠폰 수',
  `cou_limit` int NOT NULL DEFAULT '1' COMMENT '쿠폰 상한',
  `cou_regtime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '생성 일시',
  `cou_updtime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정 일시',
  `cou_exptime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '종료 일시',
  PRIMARY KEY (`cou_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_coupon` */

/*Table structure for table `wb_faq` */

DROP TABLE IF EXISTS `wb_faq`;

CREATE TABLE `wb_faq` (
  `faq_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `fac_idx` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `faq_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `faq_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `faq_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `sort` int unsigned NOT NULL DEFAULT '0',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`faq_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_faq` */

/*Table structure for table `wb_faq_category` */

DROP TABLE IF EXISTS `wb_faq_category`;

CREATE TABLE `wb_faq_category` (
  `fac_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `fac_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fac_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `fac_count` int unsigned NOT NULL DEFAULT '0',
  `sort` int unsigned NOT NULL DEFAULT '0',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`fac_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_faq_category` */

/*Table structure for table `wb_history` */

DROP TABLE IF EXISTS `wb_history`;

CREATE TABLE `wb_history` (
  `his_idx` int NOT NULL AUTO_INCREMENT COMMENT '연혁 PK',
  `his_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `his_year` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '년도',
  `his_month` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '월',
  `his_content` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '내용',
  `reg_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `reg_user` int unsigned NOT NULL,
  `upd_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_user` int unsigned NOT NULL,
  PRIMARY KEY (`his_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_history` */

/*Table structure for table `wb_inquiry` */

DROP TABLE IF EXISTS `wb_inquiry`;

CREATE TABLE `wb_inquiry` (
  `cst_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '상담신청 PK',
  `cst_status` enum('Y','N') NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `cst_step` varchar(20) NOT NULL DEFAULT '답변대기' COMMENT '단계: 답변대기,답변완료',
  `cat_id` int NOT NULL DEFAULT '1',
  `cst_regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '상담신청 시간',
  `mem_idx` int NOT NULL DEFAULT '0' COMMENT '신청자 mem_idx',
  `cst_phone` varchar(50) NOT NULL DEFAULT '' COMMENT '신청자 연락처',
  `cst_email` varchar(50) NOT NULL DEFAULT '' COMMENT '신청자 이메일',
  `cst_title` varchar(255) NOT NULL DEFAULT '' COMMENT '문의 제목',
  `cst_content` text NOT NULL COMMENT '신청 내용 상세',
  `cst_memo_count` int unsigned NOT NULL DEFAULT '0' COMMENT '상담신청 메모 등록 수',
  `cst_ext1` varchar(255) DEFAULT '',
  `cst_ext2` varchar(255) DEFAULT '',
  `cst_ext3` varchar(255) DEFAULT '',
  `cst_ext4` varchar(255) DEFAULT '',
  `cst_ext5` varchar(255) DEFAULT '',
  `cst_ext6` varchar(255) DEFAULT '',
  `cst_ext7` varchar(255) DEFAULT '',
  `cst_ext8` varchar(255) DEFAULT '',
  `cst_ext9` varchar(255) DEFAULT '',
  PRIMARY KEY (`cst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb3;

/*Data for the table `wb_inquiry` */

/*Table structure for table `wb_inquiry_answer` */

DROP TABLE IF EXISTS `wb_inquiry_answer`;

CREATE TABLE `wb_inquiry_answer` (
  `csa_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '답변 PK',
  `csa_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `cst_id` int unsigned NOT NULL DEFAULT '0' COMMENT '상담신청 PK',
  `csa_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '상담답변 내용',
  `reg_user` int unsigned NOT NULL DEFAULT '0' COMMENT '등록자',
  `reg_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록시간',
  `upd_user` int unsigned NOT NULL DEFAULT '0' COMMENT '수정자',
  `upd_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '수정시간',
  PRIMARY KEY (`csa_id`),
  KEY `cst_id` (`cst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_inquiry_answer` */

/*Table structure for table `wb_inquiry_category` */

DROP TABLE IF EXISTS `wb_inquiry_category`;

CREATE TABLE `wb_inquiry_category` (
  `cat_id` int unsigned NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_inquiry_category` */

/*Table structure for table `wb_localize` */

DROP TABLE IF EXISTS `wb_localize`;

CREATE TABLE `wb_localize` (
  `loc_key` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `loc_value_ko` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `loc_value_en` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `loc_value_ja` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `loc_value_zh-hans` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `loc_value_zh-hant` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`loc_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_localize` */

insert  into `wb_localize`(`loc_key`,`loc_value_ko`,`loc_value_en`,`loc_value_ja`,`loc_value_zh-hans`,`loc_value_zh-hant`) values 
('게시판/comment/content_required','댓글 내용을 입력하세요.','Please enter your comment.','コメントの内容を入力してください。','请输入您的评论。','請輸入您的評論。'),
('게시판/comment/form_content','댓글 내용.','Comments.','コメントの内容。','评论细节。','評論細節。'),
('게시판/comment/nickname_required','작성자 닉네임을 입력하세요.','Please enter author nickname.','著者ニックネームを入力してください。','请输入您的作者昵称。','請輸入您的作者暱稱。'),
('게시판/comment/password_required','댓글 비밀번호를 입력하세요.','Please enter post password.','コメントパスワードを入力してください。','请输入您的评论密码','請輸入您的評論密碼'),
('게시판/form/mem_nickname','작성자 닉네임','Author Nickname','投稿者ニックネーム','作者昵称','作者暱稱'),
('게시판/form/password','비밀번호','Password of the post','パスワード','密码','密碼'),
('게시판/form/post_content','게시글 내용','Contents of the post','投稿内容','帖子的内容','帖子的內容'),
('게시판/form/post_title','게시글 제목','Title of the post','スレッドタイトル','帖子的标题','帖子的標題'),
('게시판/latest/not_exist_skin','지정한 스킨이 존재하지 않습니다.','The specified skin does not exist.','指定されたスキンが存在しません。','指定的外观不存在。','指定的外觀不存在。'),
('게시판/latest/not_set_board','게시판이 설정되지 않았습니다.','The Board is not set.','掲示板が設定されていません。','公告板未设置。','公告板未設置。'),
('게시판/latest/not_set_skin','스킨이 설정되지 않았습니다.','The Skin is not set.','スキンが設定されていません。','皮肤尚未设置。','皮膚尚未設置。'),
('게시판/msg/cannot_delete_guest_comment','비회원이 작성한 댓글은 관리자만 삭제가능합니다.','Only comments made by nonmembers can be deleted by the administrator.','非会員が作成したコメントは、管理者だけが削除できます。','只有非成员发表的评论才能被管理员删除。','只有非成員發表的評論才能被管理員刪除。'),
('게시판/msg/cant_delete_because_child','답글이 달린 게시물을 삭제할수 없습니다.','You can not delete posts with replies.','返信が付いた記事を削除することができません。','您无法删除包含回复的帖子。','您無法刪除包含回复的帖子。'),
('게시판/msg/comment_delete_success','댓글을 삭제하였습니다.','Your comment has been deleted.','コメントを削除しました。','您的评论已被删除。','您的評論已被刪除。'),
('게시판/msg/comment_failed','댓글 작성에 실패하였습니다.','Failed to comment.','コメントの作成に失敗しました。','无法发表评论','無法發表評論'),
('게시판/msg/comment_modify_success','댓글 정보를 수정하였습니다.','We have modified your comment.','コメント情報を修正しました。','我们修改了您的评论信息。','我們修改了您的評論信息。'),
('게시판/msg/comment_modify_unauthorize','해당 댓글을 수정할 권한이 없습니다.','You do not have permission to edit this comment.','このコメントを変更する権限がありません。','您无权编辑此评论。','您無權編輯此評論。'),
('게시판/msg/comment_success','새로운 댓글을 작성하였습니다.','You have created a new comment.','新しいコメントを作成しました。','您已创建新评论。','您已創建新評論。'),
('게시판/msg/comment_unauthorize','해당 게시판에서 댓글을 작성할 권한이 없습니다.','You do not have permission to comment on this board.','この掲示板でコメントを作成する権限がありません。','您无权评论此主板。','您無權評論此主板。'),
('게시판/msg/delete_failed','게시글 삭제에 실패하였습니다.','Failed to delete post.','スレッドの削除に失敗しました。','无法删除帖子。','無法刪除帖子。'),
('게시판/msg/delete_success','게시글 삭제에 성공하였습니다.','The post was deleted successfully.','スレッドの削除に成功しました。','该帖子已成功删除。','該帖子已成功刪除。'),
('게시판/msg/download_unauthorize','해당 첨부파일을 다운로드할 권한이 없습니다.','You do not have permission to download the attachment.','添付ファイルをダウンロードする権限がありません。','您无权下载附件。','您無權下載附件。'),
('게시판/msg/invalid_access','잘못된 접근입니다.','Invalid request.','不適切なアプローチです。','错误的方法。','錯誤的方法。'),
('게시판/msg/invalid_attach_file','존재하지 않는 파일이거나 삭제된 파일입니다.','A file that does not exist or has been deleted.','存在しないファイルであるか、削除されたファイルです。','一个不存在或已被删除的文件。','一個不存在或已被刪除的文件。'),
('게시판/msg/invalid_comment','존재하지 않는 댓글이거나 이미 삭제된 댓글입니다.','This comment does not exist or has been deleted.','存在しないコメントまたは既に削除されたコメントです。','此评论不存在或已被删除。','此評論不存在或已被刪除。'),
('게시판/msg/invalid_password','비밀번호가 맞지 않습니다.','The password is incorrect.','パスワードが一致しません。','密码不正确。','密碼不正確。'),
('게시판/msg/invalid_post','존재하지 않는 게시물이거나 이미 삭제된 게시물입니다.','This post does not exist or is already deleted.','存在しない記事であるか、既に削除された記事です。','这篇文章不存在或已被删除。','這篇文章不存在或已被刪除。'),
('게시판/msg/list_unauthorize','해당 게시판에 접근할수있는 권한이 없습니다.','You do not have permission to access on this board.','この掲示板にアクセスできる権限がありません。','您无权访问此主板。','您無權訪問此主板。'),
('게시판/msg/modify_failed','게시글 수정에 실패하였습니다.','Post edit failed.','スレッドの修正に失敗しました。','发布编辑失败。','發布編輯失敗。'),
('게시판/msg/modify_require_login','글을 수정이나 삭제하려면 로그인이 필요합니다.','Login is required to edit or delete posts.','文を修正や削除するには、ログインが必要です。','需要登录才能编辑或删除帖子。','需要登錄才能編輯或刪除帖子。'),
('게시판/msg/modify_unauthorize','해당 글의 수정이나 삭제할 권한이 없습니다.','You do not have permission to edit or delete this post.','この記事を編集や削除する権限がありません。','您无权修改或删除此信息。','您無權修改或刪除此信息。'),
('게시판/msg/not_exist','존재하지 않는 게시판입니다.','Invalid Board','存在しない掲示板です。','它不存在。','它不存在。'),
('게시판/msg/read_unauthorize','해당 글을 읽을 권한이 없습니다.','You do not have permission to read this post.','この記事を読んで権限がありません。','您无权阅读此文章。','您無權閱讀此文章。'),
('게시판/msg/recaptcha_failed','스팸등록 방지 인증에 실패하였습니다.올바른 경로로 글을 작성해주세요','Spam registration prevention verification failed.Please fill in the correct path.','スパム登録対策認証に失敗しました。正しいパスに文を入力してください','垃圾邮件注册预防认证失败，请填写正确的路径','垃圾郵件註冊預防認證失敗，請填寫正確的路徑'),
('게시판/msg/reply_unauthorize','해당 게시판에서 답글을 달 권한이 없습니다.','You do not have permission to reply from this board.','この掲示板で返信を月権限がありません。','您无权回复此董事会。','您無權回复此董事會。'),
('게시판/msg/write_failed','게시글 등록에 실패하였습니다.','Post registration failed.','スレッドの登録に失敗しました。','帖子注册失败。','帖子註冊失敗。'),
('게시판/msg/write_success','게시글 등록에 성공하였습니다.','You have successfully registered your post.','スレッドの登録に成功しました。','你的帖子成功了。','你的帖子成功了。'),
('게시판/msg/write_unauthorize','해당 게시판에 글을 작성할 수 있는 권한이 없습니다.','You do not have permission to write on this board.','この掲示板に文を作成する権限がありません。','您无权在此主板上撰写。','您無權在此主板上撰寫。'),
('공통/msg/invalid_access','잘못된 접근입니다.','Invalid Access.','不適切なアプローチです。','错误的方法。','錯誤的方法。'),
('공통/msg/login_required','로그인이 필요한 페이지입니다.','This page requires login.','ログインが必要なページです。','此页面需要登录。','此頁面需要登錄。'),
('공통/msg/server_error','서버 오류가 발생하였습니다.','A server error has occurred.','サーバーエラーが発生しました。','发生服务器错误。','發生服務器錯誤。'),
('공통/search/search_more','검색 결과 더보기','More search result','検索結果見る','更多结果','更多結果'),
('공통/search/search_placeholder','검색어를 입력하세요','Search value...','検索用語を入力してください','输入您的搜索字词','輸入您的搜索字詞'),
('공통/search/search_result','검색 결과','Search result','検索結果','搜索结果','搜索結果'),
('공통/search/search_submit','검색','Search','検索','取回','取回'),
('공통/search/search_total','통합 검색 결과','Total Result','統合検索結果','统一的搜索结果','統一的搜索結果'),
('공통/search/search_txt_empty','검색어를 입력하세요','Search value is empty','検索用語を入力してください','输入您的搜索字词','輸入您的搜索字詞'),
('공통/time/days_ago','일 전','days ago','日前','天前','天前'),
('공통/time/hour_ago','시간 전','hour ago','時間前','小时前','小時前'),
('공통/time/minute_ago','분 전','minutes ago','分前','分钟前','分鐘前'),
('공통/time/second_ago','초 전','seconds ago','秒前','秒前','秒前'),
('팝업/button/close','닫기','Close','閉じる','关闭','關閉'),
('팝업/button/close_with_cookie','오늘 하루 열지 않기','Do not open today','今日一日の間に開かない','今天不要打开','今天不要打開'),
('회원/button/link_social','연동하기','Link','連動する','互通','互通'),
('회원/info/activation','휴면계정 활성화','Activate account','休眠アカウントの有効化','激活睡眠帐户','激活睡眠帳戶'),
('회원/info/change_photo','회원 아이콘 변경','Change Member Photo','会員のアイコンを変更','更改成员图标','更改成員圖標'),
('회원/info/email','이메일','E-mail','メール','电子邮件','電子郵件'),
('회원/info/gender','성별','Gender','性別','性别','性別'),
('회원/info/gender_female','여성','Female','女性','女子','女子'),
('회원/info/gender_male','남성','Male','男性','男性','男性'),
('회원/info/gender_unknown','알수없음','Unknown','不明','不明','不明'),
('회원/info/logcount','로그인 횟수','Sign-in count','ログイン回数','登录数','登錄數'),
('회원/info/login_keep','로그인 유지','Keep Sign in.','ログインを維持','保持登录状态','保持登錄狀態'),
('회원/info/modify','회원정보 수정','Edit Info','会員情報の変更','编辑会员资讯','編輯會員資訊'),
('회원/info/new_password','새 비밀번호','New Password','新しいパスワード','新密码','新密碼'),
('회원/info/new_password_confirm','새 비밀번호 확인','New Password Confirm','新しいパスワードの確認','确认新密码','確認新密碼'),
('회원/info/nickname','닉네임','Nickname','ニックネーム','绰号','綽號'),
('회원/info/old_password','기존 비밀번호','Current Password','既存のパスワード','现有密码','現有密碼'),
('회원/info/password','비밀번호','Password','パスワード','密码','密碼'),
('회원/info/password_change','비밀번호 변경','Change Password','パスワードの変更','更改密码','更改密碼'),
('회원/info/phone','연락처','Phone','コンタクト','往来','往來'),
('회원/info/photo','회원 아이콘','Member Photo','会員アイコン','会员图标','會員圖標'),
('회원/info/point','포인트','Point','ポイント','点','點'),
('회원/info/profile','회원정보','Profile','会員情報','会员信息','會員信息'),
('회원/info/recv_email','이메일 수신여부','Receive E-mail','電子メールを受信するかどうか','是否接收电子邮件','是否接收電子郵件'),
('회원/info/recv_sms','SMS 수신여부','Receive SMS','SMS受信するかどうか','是否收到短信','是否收到短信'),
('회원/info/regtime','가입일자','Sign-up Date','登録年月日','加入日期','加入日期'),
('회원/info/social','소셜 정보','Social Info','ソーシャル情報','社交信息','社交信息'),
('회원/info/userid','아이디','Username','ユーザ名','用户名','用戶名'),
('회원/info/withdrawals','회원 탈퇴','Withdrawals','会員脱退','退出会员','退出會員'),
('회원/join/agreement_required','이용약관에 동의를 하셔야 합니다.','You must accept the Terms and Conditions.','利用規約に同意をする必要があります。','您必须同意条款和条件。','您必須同意條款和條件。'),
('회원/join/no_valid_email_address','올바른 형식의 이메일주소가 아닙니다.','It is not a valid email address.','正しい形式の電子メールアドレスがありません。','这不是有效的电子邮件地址。','這不是有效的電子郵件地址。'),
('회원/join/success','회원가입이 완료되었습니다.','Sign up is complete.','会員登録が完了しました。','您的订阅已完成。','您的訂閱已完成。'),
('회원/join/user_email_required','사용하실 E-mail를 입력하셔야 합니다.','Please enter your email.','使用することがE-mailを入力してください。','请输入您的电子邮件地址。','請輸入您的電子郵件地址。'),
('회원/join/user_id_already_exists','이미 존재하는 아이디 입니다.','The ID that already exists.','既に存在しているユーザ名です。','这是一个现有的ID。','這是一個現有的ID。'),
('회원/join/user_id_available','사용가능한 ID 입니다.','The ID is available.','使用可能なIDです。','可用的ID。','可用的ID。'),
('회원/join/user_id_contains_deny_word','아이디에 사용불가능한 단어가 포함되어 있습니다.','ID contains denied words.','IDに使用できない単語が含まれています。','该ID包含不可用的单词。','該ID包含不可用的單詞。'),
('회원/join/user_id_required','사용하실 ID를 입력하셔야 합니다.','You must enter your ID.','使用することがIDを入力する必要があります。','你必须输入你的ID。','你必須輸入你的ID。'),
('회원/join/user_nickname_already_exists','이미 존재하는 닉네임 입니다.','The Nickname that already exists.','既に存在しているニックネームです。','这个昵称已经存在。','這個暱稱已經存在。'),
('회원/join/user_nickname_contains_deny_word','닉네임에 사용불가능한 단어가 포함되어 있습니다.','Nickname contains denied words.','ニックネームに使用できない単語が含まれています。','你的昵称包含不可用的单词。','你的暱稱包含不可用的單詞。'),
('회원/join/user_nickname_max_length','사용자 닉네임은 최대 20자까지 설정 가능합니다.','Nickname can be up to 20 digits.','ユーザーニックネームは最大20文字まで設定可能です。','用户昵称最多可以设置20个字符。','用戶暱稱最多可以設置20個字符。'),
('회원/join/user_nickname_min_length','사용자 닉네임은 최소 2자 이상 설정 가능합니다.','Nickname must be at least 2 digits.','ユーザーニックネームは、少なくとも2文字以上に設定可能です。','用户昵称可以设置为至少2个字符。','用戶暱稱可以設置為至少2個字符。'),
('회원/join/user_nickname_required','사용자 닉네임을 입력하셔야 합니다.','You need to enter your nickname.','ユーザーのニックネームを入力してください。','你需要输入你的昵称。','你需要輸入你的暱稱。'),
('회원/join/user_password_confirm_required','비밀번호를 확인해주세요.','Please check your password.','パスワードを確認してください。','请检查您的密码。','請檢查您的密碼。'),
('회원/join/user_password_diffrerent','비밀번호와 비밀번호 확인이 서로 다릅니다.','Password and password verification are different.','パスワードとパスワードの確認が異なります。','密码和密码验证是不同的。','密碼和密碼驗證是不同的。'),
('회원/join/user_password_max_length','비밀번호는 최대 20자리까지 가능합니다.','Passwords can be up to 20 digits.','パスワードは、最大20桁のまで可能です。','密码可以长达20位数字。','密碼可以長達20位數字。'),
('회원/join/user_password_min_length','비밀번호는 최소 6자리이상을 설정하셔야 합니다.','Password must be at least 6 digits.','パスワードは少なくとも6桁以上を設定する必要があります。','密码必须至少有6位数字。','密碼必須至少有6位數字。'),
('회원/join/user_password_required','비밀번호를 입력하셔야 합니다.','You must enter your password.','パスワードを入力する必要があります。','您必须输入您的密码。','您必須輸入您的密碼。'),
('회원/join/user_password_same','비밀번호와 비밀번호 확인이 서로 같습니다.','Password and password confirm are the same.','パスワードとパスワードの確認が同じです。','密码和密码验证是相同的。','密碼和密碼驗證是相同的。'),
('회원/join/user_password_suitable','비밀번호로 적합합니다.','Suitable as a password.','パスワードで適しています。','适合作为密码。','適合作為密碼。'),
('회원/login/already','이미 로그인 상태입니다.','You are already signed in.','すでにログイン状態です。','您已经登录。','您已經登錄。'),
('회원/login/only','로그인한 사용자만 접근할 수 있습니다.','Only sign-in users can access.','ログインしたユーザーだけがアクセスすることができます。','只有登录的用户才能访问。','只有登錄的用戶才能訪問。'),
('회원/login/password_required','로그인 비밀번호를 입력하셔야 합니다.','You must enter your login password.','ログインパスワードを入力する必要があります。','您必须输入您的登录密码。','您必須輸入您的登錄密碼。'),
('회원/login/success','로그인이 완료되었습니다.','Sign in is complete.','ログインが完了しました。','您的登录已完成。','您的登錄已完成。'),
('회원/login/userid_required','로그인 아이디를 입력하셔야 합니다.','You must enter your login ID.','ログインIDを入力してください。','您必须输入您的登录ID。','您必須輸入您的登錄ID。'),
('회원/login/user_denied','해당 사용자는 접근이 거부된 사용자입니다.','This user is a denied user.','そのユーザーはアクセスが拒否されたユーザーです。','此用户是被拒绝的用户。','此用戶是被拒絕的用戶。'),
('회원/login/user_not_exist','존재하지 않는 사용자이거나, 잘못된 비밀번호 입니다.','The user does not exist or is an incorrect password.','存在しないユーザーであるか、誤ったパスワードです。','该用户不存在或者是无效的密码。','該用戶不存在或者是無效的密碼。'),
('회원/msg/activation_info','회원님의 계정은 현재 장기간 미사용상태로 휴면계정으로 전환된 상태입니다. [휴면상태 해제]버튼을 클릭하여 계정을 활성화 하십시오','Your account is currently in a long-term unused state and has been transitioned to a dormant account. Click the [Activation] button to activate your account','会員のアカウントは、現在の長期間未使用の状態で休眠アカウントに変換されています。【休眠状態を解除]ボタンをクリックして、アカウントを有効にしてください。','您的帐户目前处于长期未使用状态，并已转换为休眠帐户。 点击[禁用睡眠]按钮激活您的帐户。','您的帳戶目前處於長期未使用狀態，並已轉換為休眠帳戶。 點擊[禁用睡眠]按鈕激活您的帳戶。'),
('회원/msg/change_photo_required','업로드할 이미지를 선택하세요.','Please select an image to upload.','アップロードする画像を選択します。','请选择一张图片上传','請選擇一張圖片上傳'),
('회원/msg/change_photo_success','회원 아이콘 변경을 완료하였습니다.','You have completed changing your photo.','会員のアイコンの変更を完了しました。','您已完成更改您的会员资格图标。','您已完成更改您的會員資格圖標。'),
('회원/msg/modify_success','회원정보가 변경되었습니다.','Your Profile has changed.','会員情報を変更しました。','您的会员资格已更改。','您的會員資格已更改。'),
('회원/msg/password_change_success','비밀번호 변경이 완료되었습니다. 새 비밀번호로 다시 로그인하시기 바립니다.','Your password change is complete. Please login again with your new password.','パスワードの変更が完了しました。新しいパスワードで再度ログインしてバーます。','您的密码更改已完成。 请使用您的新密码重新登录。','您的密碼更改已完成。 請使用您的新密碼重新登錄。'),
('회원/msg/withdrawals_info_message','회원탈퇴를 진행하기 위해서 현재 비밀번호를 입력해주세요.','Please enter your current password to proceed with membership withdrawal.','会員脱退を実行するために現在のパスワードを入力してください。','请输入您当前的密码以取消订阅。','請輸入您當前的密碼以取消訂閱。'),
('회원/msg/withdrawals_procced','회원탈퇴를 진행하시겠습니까?','Do you want to continue?','会員脱退を続行しますか？','你确定要取消订阅吗？','你確定要取消訂閱嗎？'),
('회원/msg/withdrawals_success','회원탈퇴가 완료되었습니다.','Member withdrawal is complete.','退会が完了しました。','会员退出已完成。','會員退出已完成。'),
('회원/outlogin/not_exist_skin','로그인 스킨을 불러올수 없습니다.','Outlogin Skin load failed.','ログインスキンを読み込むことができません。','无法加载登录皮肤。','無法加載登錄皮膚。'),
('회원/outlogin/not_set_skin','로그인 스킨이 지정되지 않았습니다.','Outlogin Skin is not set.','ログインスキンが指定されていません。','登录皮肤没有指定。','登錄皮膚沒有指定。'),
('회원/point/not_enough','필요한 포인트가 충분하지 않습니다.','Not enough point.','必要なポイントがありません。','没有足够的分数是必要的。','沒有足夠的分數是必要的。'),
('회원/register','회원가입','Sign Up','会員登録','报名','報名'),
('회원/signin','로그인','Sign In','ログイン','注册','註冊'),
('회원/signout','로그아웃','Sign out','ログアウト','退出','退出'),
('회원/social/already','해당 소셜계정의 이메일 또는, 소셜계정으로 등록된 계정이 이미 있습니다.','You already have an email with this social account or an account with a social account.','このソーシャルアカウントの電子メールまたは、ソーシャルアカウントに登録されたアカウントが既にあります。','您已经拥有包含此社交帐户的电子邮件或具有社交帐户的帐户。','您已經擁有包含此社交帳戶的電子郵件或具有社交帳戶的帳戶。'),
('회원/social/already_another','해당 소셜 계정은 이미 다른 아이디와 연동 되어 있습니다.','This social account is already associated with another ID.','このソーシャルアカウントは、既に他のIDと連動しています。','此社交帐户已与另一个ID关联。','此社交帳戶已與另一個ID關聯。'),
('회원/social/already_email','해당 소셜계정의 이메일 주소로 이미 등록된 계정이 있습니다.','You already have an account with an email address for this social account.','このソーシャルアカウントのメールアドレスで既に登録されたアカウントがあります。','您已经拥有一个包含此社交帐户的电子邮件地址的帐户。','您已經擁有一個包含此社交帳戶的電子郵件地址的帳戶。'),
('회원/social/already_linked','이미 연결된 소셜 계정입니다.','This is a linked social account already.','既に接続されたソーシャルアカウントです。','这是一个关联的社交帐户。','這是一個關聯的社交帳戶。'),
('회원/social/failed','소셜 로그인에 실패하였습니다.','Social sign-in failed.','ソーシャルログインに失敗しました。','社交登录失败。','社交登錄失敗。'),
('회원/social/not_set','소셜 로그인 기능이 설정되어 있지 않습니다. 해당 기능을 사용할 수 없습니다.','Social configuration is not set.','ソーシャルログイン機能が設定されていません。この機能を使用することができません。','社交登录未打开。 此功能不可用。','社交登錄未打開。 此功能不可用。'),
('회원/social/success_link','소셜 계정 연결에 성공하였습니다.','Your social accounts have been successfully linked.','ソーシャルアカウントの接続に成功しました。','您的社交帐户已成功关联。','您的社交帳戶已成功關聯。'),
('회원/status/activate_complete','휴면 상태 해제가 완료되었습니다.','Activation Complete.','休眠状態解除が完了しました。','睡眠状态已经释放。','睡眠狀態已經釋放。'),
('회원/status/d','로그인 금지','Banned','ログインを禁止','不要签字','不要簽字'),
('회원/status/h','휴면','inActive','休眠','休眠','休眠'),
('회원/status/n','탈퇴','withdraw','脱退','分裂国家','分裂國家'),
('회원/status/not_dormant','휴면 상태의 회원이 아닙니다.','You are not a dormant member.','休眠状態のメンバーがありません。','你不是一个休眠会员。','你不是一個休眠會員。'),
('회원/status/y','정상','Normal','通常','顶','頂');

/*Table structure for table `wb_member` */

DROP TABLE IF EXISTS `wb_member`;

CREATE TABLE `wb_member` (
  `mem_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mem_status` enum('Y','N','D','H') NOT NULL DEFAULT 'Y',
  `mem_userid` varchar(50) NOT NULL DEFAULT '',
  `mem_password` char(64) NOT NULL,
  `mem_nickname` varchar(20) NOT NULL DEFAULT '',
  `mem_email` varchar(50) NOT NULL DEFAULT '',
  `mem_phone` varchar(15) NOT NULL DEFAULT '',
  `mem_auth` tinyint unsigned NOT NULL DEFAULT '1' COMMENT '멤버 권한',
  `lev_idx` int NOT NULL DEFAULT '1' COMMENT '멤버 등급(1~4)',
  `mem_gender` enum('M','F','U') DEFAULT 'U',
  `mem_verfy_email` enum('Y','N') DEFAULT 'N',
  `mem_point` int unsigned NOT NULL DEFAULT '0',
  `mem_recv_email` enum('Y','N') DEFAULT 'N',
  `mem_recv_sms` enum('Y','N') DEFAULT 'N',
  `mem_regtime` datetime NOT NULL,
  `mem_regip` int unsigned NOT NULL DEFAULT '0',
  `mem_logtime` datetime NOT NULL COMMENT '가장 최근 로그인 시각',
  `mem_logip` int unsigned NOT NULL DEFAULT '0',
  `mem_logcount` int unsigned NOT NULL DEFAULT '0',
  `mem_photo` varchar(255) NOT NULL DEFAULT '',
  `mem_leavetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mem_bantime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mem_htime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mem_leaveMemo` varchar(150) NOT NULL DEFAULT '',
  `mem_birth` datetime DEFAULT NULL,
  PRIMARY KEY (`mem_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=1080 DEFAULT CHARSET=utf8mb3;

/*Data for the table `wb_member` */

insert  into `wb_member`(`mem_idx`,`mem_status`,`mem_userid`,`mem_password`,`mem_nickname`,`mem_email`,`mem_phone`,`mem_auth`,`lev_idx`,`mem_gender`,`mem_verfy_email`,`mem_point`,`mem_recv_email`,`mem_recv_sms`,`mem_regtime`,`mem_regip`,`mem_logtime`,`mem_logip`,`mem_logcount`,`mem_photo`,`mem_leavetime`,`mem_bantime`,`mem_htime`,`mem_leaveMemo`,`mem_birth`) values 
(4,'Y','user1@gmail.com','94ad42ff4c128b043feb5c31e5aa51e7d8193e5392b60a79fd42d1a48ee0b8ab','관리자','user1@gmail.com','01011111111',10,1,'U','N',0,'Y','N','2023-09-04 13:19:34',2130706433,'2024-09-20 06:07:26',0,0,'','2024-02-02 16:17:07','2023-09-04 13:19:34','2023-09-04 13:19:34','서비스 불만, 기타, 기타: 기타이유','2024-03-07 09:00:00');

/*Table structure for table `wb_member_auth` */

DROP TABLE IF EXISTS `wb_member_auth`;

CREATE TABLE `wb_member_auth` (
  `ath_idx` int NOT NULL,
  `ath_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `ath_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`ath_idx`,`ath_type`,`ath_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_auth` */

/*Table structure for table `wb_member_auth_num` */

DROP TABLE IF EXISTS `wb_member_auth_num`;

CREATE TABLE `wb_member_auth_num` (
  `auth_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT '인증번호 PK',
  `auth_value` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '인증번호 6자리',
  `mem_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '인증 요청한 회원의 전화번호',
  `reg_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '인증번호 등록일',
  `ttl` timestamp NOT NULL DEFAULT ((now() + interval 3 minute)) COMMENT '인증번호 유효 시간',
  PRIMARY KEY (`auth_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_auth_num` */

/*Table structure for table `wb_member_autologin` */

DROP TABLE IF EXISTS `wb_member_autologin`;

CREATE TABLE `wb_member_autologin` (
  `aul_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mem_idx` int unsigned NOT NULL DEFAULT '0',
  `aul_key` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `aul_ip` int unsigned NOT NULL DEFAULT '0',
  `aul_regtime` datetime NOT NULL,
  PRIMARY KEY (`aul_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_autologin` */

/*Table structure for table `wb_member_coupon` */

DROP TABLE IF EXISTS `wb_member_coupon`;

CREATE TABLE `wb_member_coupon` (
  `serial_num` int NOT NULL AUTO_INCREMENT COMMENT '쿠폰 등록번호',
  `cou_id` int DEFAULT NULL COMMENT '쿠폰 id',
  `mem_idx` int DEFAULT NULL COMMENT '회원 id',
  `reg_datatime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록시각',
  `exp_datetime` datetime NOT NULL DEFAULT '9999-12-31 23:59:59' COMMENT '만료 시각',
  `cou_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '쿠폰 상태',
  `del_memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '쿠폰 삭제 사유',
  `use_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '멤버가 사용한 일자&시각',
  PRIMARY KEY (`serial_num`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_coupon` */

/*Table structure for table `wb_member_dealer` */

DROP TABLE IF EXISTS `wb_member_dealer`;

CREATE TABLE `wb_member_dealer` (
  `dealer_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `mem_idx` int NOT NULL COMMENT 'mem_idx 값',
  `dealer_imp_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '종사원증 번호',
  `dealer_corp_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '상사명',
  `dealer_corp_add1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '상사주소(1)',
  `dealer_corp_add2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '상사주소(2 - 상세)',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '등록일자',
  `exp_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '탈퇴이자',
  PRIMARY KEY (`dealer_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_dealer` */

/*Table structure for table `wb_member_level` */

DROP TABLE IF EXISTS `wb_member_level`;

CREATE TABLE `wb_member_level` (
  `lev_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `lev_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '사용자가 볼 레벨 이름',
  `lev_check` int NOT NULL DEFAULT '0' COMMENT '등급 기준 구매횟수',
  `lev_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '등급 상태',
  `lev_discount` int NOT NULL DEFAULT '0' COMMENT '등급 별 할인율 (%)',
  PRIMARY KEY (`lev_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_level` */

/*Table structure for table `wb_member_log` */

DROP TABLE IF EXISTS `wb_member_log`;

CREATE TABLE `wb_member_log` (
  `mlg_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mem_idx` int unsigned NOT NULL DEFAULT '0',
  `mlg_ip` int unsigned NOT NULL DEFAULT '0',
  `mlg_regtime` datetime NOT NULL,
  `mlg_browser` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mlg_version` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mlg_platform` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mlg_is_mobile` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `mlg_mobile` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`mlg_idx`),
  KEY `mem_idx` (`mem_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_log` */

/*Table structure for table `wb_member_point` */

DROP TABLE IF EXISTS `wb_member_point`;

CREATE TABLE `wb_member_point` (
  `mpo_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mem_idx` int unsigned NOT NULL DEFAULT '0',
  `mpo_flag` tinyint NOT NULL DEFAULT '1',
  `mpo_value` int unsigned NOT NULL DEFAULT '0',
  `mpo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `target_type` enum('NONE','POST_READ','POST_WRITE','POST_LIKE','POST_ATTACH_DOWNLOAD','CMT_WRITE','CMT_LIKE','TODAY_LOGIN','JOIN') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'NONE',
  `target_idx` int unsigned NOT NULL DEFAULT '0',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`mpo_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_point` */

/*Table structure for table `wb_member_social` */

DROP TABLE IF EXISTS `wb_member_social`;

CREATE TABLE `wb_member_social` (
  `soc_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `soc_provider` enum('facebook','google','naver','kakao') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'naver',
  `soc_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mem_idx` int unsigned NOT NULL DEFAULT '0',
  `soc_profile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `soc_gender` enum('M','F','U') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'U',
  `soc_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `soc_regtime` datetime NOT NULL,
  `soc_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`soc_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_member_social` */

/*Table structure for table `wb_menu` */

DROP TABLE IF EXISTS `wb_menu`;

CREATE TABLE `wb_menu` (
  `mnu_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mnu_parent` int unsigned NOT NULL DEFAULT '0',
  `mnu_order` int unsigned NOT NULL DEFAULT '0',
  `mnu_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mnu_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mnu_newtab` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `mnu_desktop` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `mnu_mobile` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `mnu_active_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`mnu_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_menu` */

/*Table structure for table `wb_notice` */

DROP TABLE IF EXISTS `wb_notice`;

CREATE TABLE `wb_notice` (
  `not_id` int NOT NULL AUTO_INCREMENT COMMENT '공지 번호',
  `not_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '공지 글 제목',
  `not_subtitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '공지 글 부제',
  `not_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '공지 글 내용',
  `not_datetime` date NOT NULL DEFAULT '0000-00-00' COMMENT '등록 시각',
  `not_status` enum('Y','N','H','T') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'T' COMMENT '상태 Y:등록,N:삭제,T:임시,H:숨김',
  `thumb_filepath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`not_id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_notice` */

insert  into `wb_notice`(`not_id`,`not_title`,`not_subtitle`,`not_content`,`not_datetime`,`not_status`,`thumb_filepath`) values 
(15,'test1','sub Text1','<p><img src=\"https://api.helfu.kr/v1/files/images/notice/401fd43c-31b9-43b6-83cf-963996e8b031.jpg\"><img src=\"https://api.helfu.kr/v1/files/images/notice/8776bf0c-07ed-493c-a703-fbaf41ba918e.jpg\"></p>','2024-04-11','N',NULL),
(16,'테스트 타이틀','테스테 서브타이틀','<p>내용임닷</p>','2024-04-15','Y','https://banseokapi.2spsample4.shop/v1/data/files/notice/d42abe441e733b95737ace2f683e717bSvphT.jpg'),
(17,'','','','2024-04-30','T',NULL),
(18,'','','','2024-04-30','T',NULL),
(19,'','','','2024-04-30','T',NULL),
(20,'','','','2024-04-30','T',NULL),
(21,'','','','2024-04-30','T',NULL),
(22,'','','','2024-04-30','T',NULL),
(23,'','','','2024-04-30','T',NULL),
(24,'','','','2024-04-30','T',NULL),
(25,'','','','2024-04-30','T',NULL),
(26,'','','','2024-04-30','T',NULL),
(27,'','','','2024-04-30','T',NULL),
(28,'','','','2024-04-30','T',NULL),
(29,'','','','2024-04-30','T',NULL),
(30,'','','','2024-04-30','T',NULL),
(31,'','','','2024-04-30','T',NULL),
(32,'','','','2024-04-30','T',NULL),
(33,'ㅇㅇㅇㅇㅇ','ㅇㅇㅇㅇ222','<p>ㅇㅇㅇㅇㅇㅇ222</p>','2024-04-30','N','https://banseokapi.2spsample4.shop/v1/data/files/notice/64db603a107c4b21de6ed0d6b5617500oGiae.jpg'),
(34,'','','','2024-04-30','T',NULL),
(35,'','','','2024-04-30','T',NULL),
(36,'','','','2024-05-06','T',NULL),
(37,'','','','2024-05-07','T',NULL),
(38,'','','','2024-05-07','T',NULL),
(39,'','','','2024-05-07','T',NULL),
(40,'','','','2024-05-07','T',NULL),
(41,'','','','2024-05-07','T',NULL),
(42,'','','','2024-05-07','T',NULL),
(43,'','','','2024-05-07','T',NULL),
(44,'','','','2024-05-07','T',NULL),
(45,'','','','2024-05-07','T',NULL),
(46,'','','','2024-05-07','T',NULL),
(47,'','','','2024-05-07','T',NULL),
(48,'','','','2024-05-07','T',NULL),
(49,'','','','2024-05-07','T',NULL),
(50,'','','','2024-05-07','T',NULL),
(51,'','','','2024-05-07','T',NULL),
(52,'','','','2024-05-07','T',NULL),
(53,'','','','2024-05-07','T',NULL),
(54,'','','','2024-05-07','T',NULL),
(55,'','','','2024-05-07','T',NULL),
(56,'','','','2024-05-07','T',NULL),
(57,'','','','2024-05-07','T',NULL),
(58,'','','','2024-05-07','T',NULL),
(59,'','','','2024-05-07','T',NULL),
(60,'','','','2024-05-07','T',NULL),
(61,'','','','2024-05-07','T',NULL),
(62,'','','','2024-05-07','T',NULL),
(63,'','','','2024-05-07','T',NULL),
(64,'','','','2024-05-07','T',NULL),
(65,'','','','2024-05-07','T',NULL),
(66,'','','','2024-05-07','T',NULL),
(67,'','','','2024-05-07','T',NULL),
(68,'','','','2024-05-07','T',NULL),
(69,'','','','2024-05-07','T',NULL),
(70,'','','','2024-05-07','T',NULL),
(71,'','','','2024-05-07','T',NULL),
(72,'','','','2024-05-07','T',NULL),
(73,'','','','2024-05-07','N',NULL),
(74,'','','','2024-05-07','T',NULL),
(75,'','','','2024-05-07','T',NULL),
(76,'','','','2024-05-07','T',NULL),
(77,'','','','2024-05-07','T',NULL),
(78,'','','','2024-05-07','T',NULL),
(79,'','','','2024-05-07','T',NULL),
(80,' ',' ',' ','2024-06-17','N',NULL),
(81,' ',' ',' ','2024-06-17','N',NULL),
(82,' ',' ',' ','2024-06-17','N',NULL),
(83,' ',' ',' ','2024-06-17','N',NULL),
(84,' ',' ',' ','2024-06-17','N',NULL),
(85,' ',' ',' ','2024-06-17','N',NULL),
(86,' ',' ',' ','2024-06-17','N',NULL),
(87,' ',' ',' ','2024-06-17','N',NULL),
(88,' ',' ',' ','2024-06-17','N',NULL),
(89,' ',' ',' ','2024-06-17','N',NULL),
(90,' ',' ',' ','2024-06-17','N',NULL),
(91,' 테스트',' 테스트입니다','<p><br></p>','2024-06-17','N','{\"att_idx\":2369,\"att_filepath\":\"http://localhost:8019/v1/data/files/notice/62ced47bb9d36d2e832baa7bb71d722dZycFm.jpg\"}'),
(92,' 테스트333',' 333','<p><img src=\"http://localhost:8019/v1/data/files/notice/60fdb2fc5e4a39e045487269ac237c53e5ayG.png\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/3664e2eca8a2f559959db3447b8f321fVG9Xi.jpg'),
(93,' ',' ',' ','2024-06-17','N',NULL),
(94,' ',' ',' ','2024-06-17','N',NULL),
(95,' ',' ',' ','2024-06-17','N',NULL),
(96,' ',' ',' ','2024-06-17','N',NULL),
(97,' ',' ',' ','2024-06-17','N',NULL),
(98,' 테스트',' 테스트입니다','<p><img src=\"http://localhost:8019/v1/data/files/notice/4a528b17f45546d69955b8ba66d4853dZEtB2.jpg\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/e663379390b000470d17be39fd518775ecnH0.jpg'),
(99,' 테스트33355',' 55','<p>55<img src=\"http://localhost:8019/v1/data/files/notice/51b50b813e543dae847dc1a103763602dirZn.jpg\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/3277e18c39b16d264f19b743981b81fbW982X.jpg'),
(100,' 테스트888',' 88','<p>88<img src=\"http://localhost:8019/v1/data/files/notice/4ec73a4176bf1960ba2e57f5a40df69cHavOO.png\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/b41dc8a68d48d3d8b3fb94fbbda430b6gQpeB.jpg'),
(101,' 테스트444',' 테스트입니다','<p>44<img src=\"http://localhost:8019/v1/data/files/notice/5bae81a941b47db5cd1e2c185c90d8c5kMlmc.jpg\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/19c20a75689faa020089d421ba671710xAbXL.jpg'),
(102,' 테스트',' 테스트입니다','<p><img src=\"http://localhost:8019/v1/data/files/notice/744a732891d7ed8e50d6b40b631bd942gIrZS.png\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/dafae519458bf639554a33f28a20fa8fJ3BhO.png'),
(103,' 테스트333',' 333','<p>333<img src=\"http://localhost:8019/v1/data/files/notice/6f9ea81fc17fbdd3181d2a1643204339zHGvV.png\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/f33e0cc5b260eb5f69a3071d0b036993Ul0pq.png'),
(104,' 테스트',' 테스트입니다','<p><img src=\"http://localhost:8019/v1/data/files/notice/d3ed85c9cbf3f21a854fba2a92649a9cdcpZF.png\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/45fc40e8397700804c923137a20012a1SWu5o.png'),
(105,' 테스트888',' 88','<p><img src=\"http://localhost:8019/v1/data/files/notice/b72d8267457bb5d664bd7a224c41cd43AHjKi.png\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/100787ff6424d3443cea830deb1af00f8bEMK.png'),
(106,' 테스트',' 88','<p><img src=\"https://bs-academy.2spsample4.shop/v1/data/files/notice/0a2fdd52bb26f2efd89b4443b65254ccmwy9c.jpg\"></p>','2024-06-17','N','http://localhost:8019/v1/data/files/notice/a83e0c76bba64d4a9eddf7442bf0edb3BNj6W.png'),
(107,' 테스트',' 88','<p><img src=\"https://bs-academy.2spsample4.shop/v1/data/files/notice/1545157175d3ee5b0475d68ccbcb413domTld.jpg\"></p>','2024-06-18','Y','https://bs-academy.2spsample4.shop/v1/data/files/notice/1fc92b226b506ba155f6de9716f13d91TxVzC.jpg'),
(108,' ',' ',' ','2024-06-18','N',NULL);

/*Table structure for table `wb_notice_desktop` */

DROP TABLE IF EXISTS `wb_notice_desktop`;

CREATE TABLE `wb_notice_desktop` (
  `tip_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `tip_status` enum('Y','N','H') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `tip_type` enum('MAIN','ALL') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'ALL',
  `tip_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `tip_sub_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `tip_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ox_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `ox_answer` enum('O','X') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'O',
  `ox_comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '',
  `thumb_filepath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `cou_id` int DEFAULT '0',
  `reg_user` int NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`tip_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_notice_desktop` */

insert  into `wb_notice_desktop`(`tip_idx`,`tip_status`,`tip_type`,`tip_title`,`tip_sub_title`,`tip_content`,`ox_content`,`ox_answer`,`ox_comment`,`thumb_filepath`,`cou_id`,`reg_user`,`reg_date`) values 
(172,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-07 22:54:47'),
(173,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-07 22:54:47'),
(174,'N','ALL','테스트 ','테스트','<p><img src=\"https://banseokapi.2spsample4.shop/v1/data/files/notice_desktop/8ff4bf1aabcad3056bd05f20cf63c77ahivny.jpg\"></p><p>팁 콘텐트</p><p>팁 콘텐트</p><p>팁 콘텐트</p>','','O','','',0,4,'2024-05-07 22:54:47'),
(175,'N','ALL','제목22','부제목23','<p>123</p>','','O','','',0,4,'2024-05-08 10:17:14'),
(176,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(177,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(178,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(179,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(180,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(181,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(182,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(183,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(184,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(185,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(186,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 10:17:14'),
(187,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 16:40:21'),
(188,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 16:40:21'),
(189,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 16:40:21'),
(190,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 16:40:21'),
(191,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 16:40:21'),
(192,'Y','ALL','2024년 봄 시즌 이벤트','봄 시즌 캠 베스트! 인기 제품 포토리뷰 이벤트','<p><img src=\"https://banseokapi.2spsample4.shop/v1/data/files/notice_desktop/6923b494db5298c5654daf93908fb36eE3OsU.jpg\"></p><p><br></p>','','O','','https://banseokapi.2spsample4.shop/v1/data/files/notice_desktop/292f28df8c269296146fdf92f8ad511cUHrC3.jpg',0,4,'2024-05-08 17:01:22'),
(193,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 21:22:23'),
(194,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 21:22:23'),
(195,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-08 21:22:23'),
(196,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-09 17:29:17'),
(197,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-09 17:29:17'),
(198,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-09 17:29:17'),
(199,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-09 17:29:17'),
(200,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-09 17:29:17'),
(201,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-28 21:18:06'),
(202,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-05-28 21:18:06'),
(203,'H','ALL','제목','부제목','팁 콘텐트','','O','','',0,4,'2024-06-18 13:58:11');

/*Table structure for table `wb_partner_contact` */

DROP TABLE IF EXISTS `wb_partner_contact`;

CREATE TABLE `wb_partner_contact` (
  `cont_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `cont_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `cont_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `company_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `user_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `cont_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `cont_mail` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `cont_text` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `super_memo` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `consult_status` enum('상담 대기','진행 중','상담 종료') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '상담 대기',
  `reg_user` int NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`cont_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_partner_contact` */

/*Table structure for table `wb_popup` */

DROP TABLE IF EXISTS `wb_popup`;

CREATE TABLE `wb_popup` (
  `pop_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `pop_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pop_width` smallint unsigned NOT NULL DEFAULT '0',
  `pop_height` smallint unsigned NOT NULL DEFAULT '0',
  `pop_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pop_status` enum('Y','H','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `pop_start` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `pop_type` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y',
  `pop_end` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`pop_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_popup` */

/*Table structure for table `wb_products` */

DROP TABLE IF EXISTS `wb_products`;

CREATE TABLE `wb_products` (
  `prd_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `prd_status` enum('Y','H','N','T') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제 H:숨김 T:임시등록상태',
  `prd_sell_status` enum('Y','O','D') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 O:품절 D:일시판매중지',
  `cat_id` int unsigned NOT NULL DEFAULT '0' COMMENT '분류 PK',
  `prd_sort` smallint NOT NULL DEFAULT '0' COMMENT '출력 순서',
  `prd_type` enum('H','C') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'H' COMMENT '상품 유형 (H:현물 / C:컨텐츠)',
  `prd_hit` int NOT NULL DEFAULT '0' COMMENT '상품 클릭 수',
  `prd_is_best` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT 'BEST 상품',
  `prd_is_hit` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '히트 상품',
  `prd_is_new` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '최신 상품',
  `prd_is_sale` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '할인 상품',
  `prd_is_recommend` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '추천 상품',
  `prd_sell_count` int NOT NULL DEFAULT '0' COMMENT '상품 판매 개수',
  `prd_use_options` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '필수 선택 옵션 사용여부',
  `prd_wish_count` int NOT NULL DEFAULT '0' COMMENT '찜한 목록에 담긴 개수',
  `prd_review_count` int NOT NULL DEFAULT '0' COMMENT '상품 리뷰 개수',
  `prd_review_average` decimal(2,1) NOT NULL DEFAULT '0.0' COMMENT '상품 리뷰 평균 점수',
  `prd_price` int NOT NULL DEFAULT '0' COMMENT '상품 가격',
  `prd_cust_price` int NOT NULL DEFAULT '0' COMMENT '시중 가격',
  `prd_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '상품명',
  `prd_maker` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '제조원',
  `prd_origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '원산지',
  `prd_brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '브랜드',
  `prd_model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '모델명',
  `prd_summary` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '상품에 대한 간단한 설명',
  `prd_thumbnail` int unsigned DEFAULT '0' COMMENT '상품 대표이미지 ID',
  `prd_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '상품 상세 설명',
  `prd_mobile_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '모바일용 상품 상세 설명',
  `prd_stock_qty` int NOT NULL DEFAULT '0' COMMENT '재고 수량',
  `prd_noti_qty` int NOT NULL DEFAULT '0' COMMENT '재고 통보 수량',
  `prd_buy_min_qty` int NOT NULL DEFAULT '0' COMMENT '최소 구매 수량',
  `prd_buy_max_qty` int NOT NULL DEFAULT '0' COMMENT '최대 구매 수량',
  `prd_extra_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `prd_item_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '전자상거래 명시를 위한 상품군',
  `prd_item_options` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '아이템 옵션',
  `prd_sc_type` enum('','무료','조건부무료','유료','수량별') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송비 유형',
  `prd_sc_method` enum('','선불','착불','사용자선택') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '선불' COMMENT '배송비 결제',
  `prd_sc_price` int NOT NULL DEFAULT '0' COMMENT '기본배송비',
  `prd_sc_minimum` int unsigned NOT NULL DEFAULT '0' COMMENT '배송비 상세조건 주문금액',
  `prd_sc_qty` int unsigned NOT NULL DEFAULT '0' COMMENT '배송시 상세조건 수량',
  `reg_user` int NOT NULL DEFAULT '0' COMMENT '상품을 올린 회원 PK',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '상품을 입력 시간',
  `upd_user` int NOT NULL DEFAULT '0' COMMENT '상품을 수정한 회원 PK',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '상품 최종 수정 시간',
  `prd_extra_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 1',
  `prd_extra_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 2',
  `prd_extra_3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 3',
  `prd_extra_4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 4',
  `prd_extra_5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 5',
  `prd_extra_6` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 6',
  `prd_extra_7` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 7',
  `prd_extra_8` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 8',
  `prd_extra_9` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 9',
  `prd_extra_10` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '여분필드 내용 10',
  PRIMARY KEY (`prd_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=706 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products` */

/*Table structure for table `wb_products_category` */

DROP TABLE IF EXISTS `wb_products_category`;

CREATE TABLE `wb_products_category` (
  `cat_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `cat_parent_id` int unsigned NOT NULL DEFAULT '0' COMMENT '상위 카테고리 PK',
  `cat_status` enum('Y','N','H') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제 H:숨김',
  `cat_sort` smallint unsigned NOT NULL DEFAULT '0',
  `cat_skin` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'PC의 스킨 파일',
  `cat_skin_m` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '모바일의 스킨 파일',
  `cat_use_paging` enum('Y','N','T') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '페이징 사용여부 T:쇼핑몰설정 기본 사용',
  `cat_page_rows` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '한번에 표시할 아이템 수',
  `cat_product_count` int unsigned NOT NULL DEFAULT '0' COMMENT '등록된 상품 수',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cat_depth` int NOT NULL DEFAULT '0' COMMENT '1,2,3',
  `cat_title` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '카테고리 이름',
  `icon_filepath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_category` */

/*Table structure for table `wb_products_display` */

DROP TABLE IF EXISTS `wb_products_display`;

CREATE TABLE `wb_products_display` (
  `dsp_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `dsp_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `dsp_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '진열장 표시 여부',
  `dsp_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '진열장 명',
  `dsp_skin` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '진열장 스킨',
  `dsp_skin_m` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '모바일 진열장 스킨',
  `reg_user` int unsigned NOT NULL DEFAULT '0' COMMENT '생성한 회원 PK',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '최초 입력 시간',
  `upd_user` int unsigned NOT NULL DEFAULT '0' COMMENT '수정한 회원 PK',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정한 시간',
  PRIMARY KEY (`dsp_idx`),
  KEY `dsp_key` (`dsp_key`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_display` */

/*Table structure for table `wb_products_display_items` */

DROP TABLE IF EXISTS `wb_products_display_items`;

CREATE TABLE `wb_products_display_items` (
  `dspi_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `dspi_sort` smallint unsigned NOT NULL DEFAULT '0' COMMENT '진열장 출력 순서',
  `dsp_idx` int unsigned NOT NULL COMMENT '진열장 PK',
  `prd_idx` int unsigned NOT NULL COMMENT '상품 PK',
  `reg_user` int unsigned NOT NULL DEFAULT '0' COMMENT '생성한 회원 PK',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '최초 입력 시간',
  PRIMARY KEY (`dspi_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_display_items` */

/*Table structure for table `wb_products_options` */

DROP TABLE IF EXISTS `wb_products_options`;

CREATE TABLE `wb_products_options` (
  `opt_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `prd_idx` int NOT NULL DEFAULT '0' COMMENT '상품 PK',
  `opt_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '정렬 순서',
  `opt_subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `opt_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '옵션 출력 여부',
  `opt_type` enum('detail','addition') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'detail' COMMENT '옵션 유형',
  `opt_add_price` int NOT NULL DEFAULT '0' COMMENT '옵션 금액',
  `opt_stock_qty` int unsigned NOT NULL DEFAULT '0' COMMENT '현재 재고',
  `opt_noti_qty` int unsigned NOT NULL DEFAULT '0' COMMENT '알림 재고',
  PRIMARY KEY (`opt_idx`),
  KEY `prd_idx` (`prd_idx`),
  KEY `opt_code` (`opt_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1242 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_options` */

/*Table structure for table `wb_products_qna` */

DROP TABLE IF EXISTS `wb_products_qna`;

CREATE TABLE `wb_products_qna` (
  `qa_idx` int NOT NULL AUTO_INCREMENT,
  `prd_idx` int NOT NULL DEFAULT '0' COMMENT '상품 PK',
  `mem_idx` int NOT NULL DEFAULT '0' COMMENT '회원 PK',
  `qa_status` enum('Y','N','H') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT '문의 출력 여부',
  `qa_secret` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '비밀글 여부',
  `qa_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '내용',
  `qa_is_answer` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N',
  `qa_a_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '답변',
  `qa_a_mem_idx` int NOT NULL DEFAULT '0' COMMENT '답변한 회원 PK',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '질문 작성 일시',
  `qa_a_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '답변 일시',
  PRIMARY KEY (`qa_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_qna` */

/*Table structure for table `wb_products_review` */

DROP TABLE IF EXISTS `wb_products_review`;

CREATE TABLE `wb_products_review` (
  `rev_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `od_id` bigint unsigned NOT NULL DEFAULT '0' COMMENT '주문번호',
  `prd_idx` int NOT NULL DEFAULT '0' COMMENT '상품 PK',
  `mem_idx` int NOT NULL DEFAULT '0' COMMENT '회원 PK',
  `rev_status` enum('Y','H','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'H' COMMENT '리뷰 출력 여부',
  `rev_score` decimal(2,1) NOT NULL DEFAULT '0.0' COMMENT '평점',
  `rev_best` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '베스트 리뷰 여부 확인',
  `rev_photo` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '포토리뷰 여부 확인',
  `rev_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '리뷰 작성 내용',
  `reg_user` int NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '생성 일시',
  `upd_user` int NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정 일시',
  PRIMARY KEY (`rev_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_review` */

/*Table structure for table `wb_products_wish` */

DROP TABLE IF EXISTS `wb_products_wish`;

CREATE TABLE `wb_products_wish` (
  `wish_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `prd_idx` int unsigned NOT NULL,
  `mem_idx` int unsigned NOT NULL,
  `wish_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`wish_idx`,`prd_idx`,`mem_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=664 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_products_wish` */

/*Table structure for table `wb_qna` */

DROP TABLE IF EXISTS `wb_qna`;

CREATE TABLE `wb_qna` (
  `qna_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'Q&A PK',
  `qna_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Y' COMMENT 'N: 삭제됨',
  `qnc_idx` int unsigned NOT NULL DEFAULT '0' COMMENT 'Q&A 카테고리 PK',
  `qna_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'Q&A 제목',
  `qna_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '작성자 이름',
  `qna_phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '연락처',
  `qna_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'E-mail',
  `qna_password` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `qna_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '작성내용',
  `reg_user` int unsigned NOT NULL DEFAULT '0' COMMENT '회원이 작성한경우 PK',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `qna_ans_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '답변 등록 여부',
  `qna_ans_user` int unsigned NOT NULL DEFAULT '0' COMMENT '답변자 PK',
  `qna_ans_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '답변 시간',
  `qna_ans_upd_user` int unsigned NOT NULL DEFAULT '0' COMMENT '답변 수정자 PK',
  `qna_ans_upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '답변 수정 시간',
  `qna_ans_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '답변 내용',
  PRIMARY KEY (`qna_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_qna` */

/*Table structure for table `wb_qna_category` */

DROP TABLE IF EXISTS `wb_qna_category`;

CREATE TABLE `wb_qna_category` (
  `qnc_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `qnc_status` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `qnc_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `sort` int unsigned NOT NULL DEFAULT '0',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`qnc_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_qna_category` */

/*Table structure for table `wb_record_medicheck` */

DROP TABLE IF EXISTS `wb_record_medicheck`;

CREATE TABLE `wb_record_medicheck` (
  `chk_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `mem_idx` int NOT NULL COMMENT '사용자 PK',
  `record_type` enum('CLINIC','CHECK','MEDIC') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '건강기록 종류',
  `health_record` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '건강기록 받은 데이터',
  `mem_memo` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '사용자 등록 메모',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '(조회)등록일자',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정일자(사용자 메모 등록)',
  PRIMARY KEY (`chk_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_record_medicheck` */

/*Table structure for table `wb_search` */

DROP TABLE IF EXISTS `wb_search`;

CREATE TABLE `wb_search` (
  `sea_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `sea_query` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `sea_regtime` datetime NOT NULL,
  PRIMARY KEY (`sea_idx`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_search` */

/*Table structure for table `wb_shop_cart` */

DROP TABLE IF EXISTS `wb_shop_cart`;

CREATE TABLE `wb_shop_cart` (
  `cart_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '장바구니 PK',
  `od_id` char(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문번호',
  `customer_uid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'customer UID = billing Key',
  `mem_idx` int unsigned NOT NULL DEFAULT '0' COMMENT '회원 PK',
  `prd_idx` int unsigned NOT NULL DEFAULT '0' COMMENT '상품 번호',
  `cart_status` enum('구매대기','입금대기','입금완료','상품준비중','주문취소','환불','반품','교환','배송중','배송완료','장바구니삭제') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '구매대기',
  `cart_direct` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '바로구매 여부',
  `cart_select` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '결제전 SELECT 여부',
  `cart_use_stock` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '재고 사용',
  `prd_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '상품 이름',
  `prd_price` int NOT NULL DEFAULT '0' COMMENT '상품 원본 가격',
  `cart_price` int NOT NULL DEFAULT '0' COMMENT '판매가격',
  `cart_point` int NOT NULL DEFAULT '0' COMMENT '포인트 사용 금액',
  `cart_point_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '포인트 결제 사용',
  `cart_coupon` int NOT NULL DEFAULT '0' COMMENT '쿠폰 사용 금액',
  `cart_coupon_use` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '쿠폰 사용',
  `cart_qty` int NOT NULL DEFAULT '0' COMMENT '수량',
  `opt_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '선택옵션명',
  `opt_subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `opt_type` enum('detail','addition','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '필수옵션/추강보션',
  `opt_price` int NOT NULL DEFAULT '0' COMMENT '옵션 금액',
  `cart_option` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '상품명 또는 옵션명',
  `cart_sc_type` enum('무료','조건부무료','유료','수량별','차등','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송비유형',
  `cart_sc_method` enum('','선불','착불') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송비결제',
  `cart_sc_price` int NOT NULL DEFAULT '0' COMMENT '기본 배송비',
  `cart_sc_minimum` int NOT NULL DEFAULT '0' COMMENT '배송비 상세조건 주문금액',
  `cart_sc_qty` int NOT NULL DEFAULT '0' COMMENT '배송비 상세조건 수량',
  `cart_regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '장바구니 입력시간',
  `cart_select_time` datetime DEFAULT NULL COMMENT '주문서 작성 시간',
  `cart_ip` int unsigned NOT NULL DEFAULT '0',
  `cart_history` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `cart_send_cost` tinyint unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`cart_id`),
  KEY `od_id` (`od_id`),
  KEY `cart_status` (`cart_status`)
) ENGINE=InnoDB AUTO_INCREMENT=439 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_shop_cart` */

/*Table structure for table `wb_shop_order` */

DROP TABLE IF EXISTS `wb_shop_order`;

CREATE TABLE `wb_shop_order` (
  `od_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'order PK',
  `od_id` bigint unsigned NOT NULL COMMENT '주문번호',
  `mem_idx` int unsigned NOT NULL DEFAULT '0' COMMENT '주문자 PK',
  `imp_uid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '포트원 결제 PK',
  `customer_uid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '빌링키 있는 경우 저장',
  `payment_type` enum('normal','sub') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'normal' COMMENT '결제타입(일반/구독)',
  `od_status` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문 상태',
  `od_settle_case` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '결제 수단',
  `od_receipt_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '주문완료 시간',
  `od_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '주문번호 생성시간',
  `od_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자',
  `od_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자 Email',
  `od_tel` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자 전화번호',
  `od_hp` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자 휴대폰',
  `od_zonecode` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자 우편번호',
  `od_addr1` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자 주소1',
  `od_addr2` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문자 주소2',
  `od_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문 상품 요약',
  `od_memo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '주문시 요청 메모',
  `od_cart_count` int NOT NULL DEFAULT '0' COMMENT '주문 상품 수',
  `od_cart_price` int NOT NULL DEFAULT '0' COMMENT '주문 상품 금액',
  `od_send_cost` int NOT NULL DEFAULT '0' COMMENT '배송비',
  `od_receipt_price` int NOT NULL DEFAULT '0' COMMENT '총 주문 금액',
  `od_cancel_price` int NOT NULL DEFAULT '0' COMMENT '취소 금액',
  `od_refund_price` int NOT NULL DEFAULT '0' COMMENT '환불 금액',
  `od_misu` int NOT NULL DEFAULT '0' COMMENT '미수금',
  `od_shop_memo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '관리자용 메모',
  `vbank_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '(가상계좌)입금 계좌번호',
  `vbank_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '(가상계좌)입금 은행명',
  `vbank_holder` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '(가상계좌)예금주',
  `od_test` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '테스트 결제 여부',
  `od_mobile` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '모바일 결제 여부',
  `od_pg` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'PG사',
  `od_delivery_company` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송사',
  `od_delivery_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '운송장번호',
  `od_ip` int unsigned NOT NULL DEFAULT '0' COMMENT '주문자 IP',
  `od_oc_send` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '주문완료 안내 발송여부',
  `od_ip_send` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '입금계좌 안내 발송여부',
  `od_ic_send` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '입금확인 안내 발송여부',
  `od_sc_send` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '발송완료 안내 발송여부',
  `od_oc_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '주문완료 안내 발송시간',
  `od_ip_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '입금계좌 안내 발송시간',
  `od_ic_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '입금확인 안내 발송시간',
  `od_sc_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '발송완료 안내 발송시간',
  PRIMARY KEY (`od_idx`,`od_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_shop_order` */

/*Table structure for table `wb_shop_order_address` */

DROP TABLE IF EXISTS `wb_shop_order_address`;

CREATE TABLE `wb_shop_order_address` (
  `ad_id` int NOT NULL AUTO_INCREMENT,
  `mem_idx` int unsigned NOT NULL DEFAULT '0',
  `ad_subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송지 이름',
  `ad_default` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '기본주소지 여부',
  `ad_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송받는 사람',
  `ad_tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송지 핸드폰',
  `ad_hp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송지 전화번호',
  `ad_zonecode` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송지 우편번호',
  `ad_addr1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송지 주소',
  `ad_addr2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '배송지 상세주소',
  PRIMARY KEY (`ad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_shop_order_address` */

/*Table structure for table `wb_shop_subscribe` */

DROP TABLE IF EXISTS `wb_shop_subscribe`;

CREATE TABLE `wb_shop_subscribe` (
  `sub_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `prd_idxs` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '[]' COMMENT '연관된 prd_idx의 배열',
  `od_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '구매 od_id',
  `customer_uid` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '빌링키와 매핑',
  `od_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '주문 명',
  `mem_idx` int NOT NULL COMMENT '구독자 mem_idx',
  `mem_nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '구독자 nickname',
  `first_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '첫 결제일',
  `sub_months` int NOT NULL COMMENT '정기 구독 신청 기간',
  `pay_account` int NOT NULL DEFAULT '0' COMMENT '실제 결제 횟수',
  `sub_status` enum('구독중','구독종료','구독취소') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '구독중' COMMENT '구독 상태',
  `cancel_memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '취소 사유',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '등록일',
  `exp_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '종료일',
  PRIMARY KEY (`sub_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_shop_subscribe` */

/*Table structure for table `wb_sitemap` */

DROP TABLE IF EXISTS `wb_sitemap`;

CREATE TABLE `wb_sitemap` (
  `sit_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `sit_loc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `sit_priority` decimal(1,1) NOT NULL DEFAULT '0.5',
  `sit_changefreq` enum('daily','weekly','monthly') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'daily',
  `sit_memo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `reg_user` int unsigned NOT NULL DEFAULT '0',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `upd_user` int unsigned NOT NULL DEFAULT '0',
  `upd_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`sit_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_sitemap` */

/*Table structure for table `wb_sms_log` */

DROP TABLE IF EXISTS `wb_sms_log`;

CREATE TABLE `wb_sms_log` (
  `sml_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT '문자발송로그 PK',
  `sml_regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '발송시간',
  `sml_type` enum('SMS','KAKAO','','LMS') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '구분',
  `sml_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '받는사람 번호',
  `sml_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '보낸내용',
  `sml_code` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '카카오알림톡일경우 템플릿코드',
  `sml_result` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '전송결과',
  `sml_message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '전송결과 메시지',
  PRIMARY KEY (`sml_idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_sms_log` */

/*Table structure for table `wb_statics` */

DROP TABLE IF EXISTS `wb_statics`;

CREATE TABLE `wb_statics` (
  `sta_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `sta_ip` int unsigned NOT NULL DEFAULT '0' COMMENT 'IP주소',
  `sta_regtime` datetime NOT NULL COMMENT '로그 시각',
  `sta_browser` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '브라우저',
  `sta_version` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '버전',
  `sta_is_mobile` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '모바일여부',
  `sta_mobile` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '모바일 OS',
  `sta_platform` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'OS',
  `sta_referrer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '리퍼러',
  `sta_referrer_host` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '리퍼러 호스트',
  `sta_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '유입 키워드',
  PRIMARY KEY (`sta_idx`),
  KEY `sta_ip` (`sta_ip`)
) ENGINE=MyISAM AUTO_INCREMENT=2457 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_statics` */

insert  into `wb_statics`(`sta_idx`,`sta_ip`,`sta_regtime`,`sta_browser`,`sta_version`,`sta_is_mobile`,`sta_mobile`,`sta_platform`,`sta_referrer`,`sta_referrer_host`,`sta_keyword`) values 
(2430,2130706433,'2024-04-22 22:21:27','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2431,2130706433,'2024-04-23 13:40:04','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2432,2130706433,'2024-04-30 16:49:27','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2433,2130706433,'2024-05-06 08:50:53','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2434,2130706433,'2024-05-07 09:18:13','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2435,2130706433,'2024-05-08 08:29:49','Chrome','124.0.0.0','N','','OS X','','',''),
(2436,2130706433,'2024-05-09 09:51:54','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2437,2130706433,'2024-05-10 17:50:36','Chrome','118.0.0.0','N','','OS X','','',''),
(2438,2130706433,'2024-05-13 18:22:20','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2439,2130706433,'2024-05-14 10:42:41','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2440,2130706433,'2024-05-16 13:39:55','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2441,2130706433,'2024-05-17 16:37:43','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2442,2130706433,'2024-05-21 10:32:00','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2443,2130706433,'2024-05-23 15:47:28','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2444,2130706433,'2024-05-24 10:35:39','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2445,2130706433,'2024-05-27 14:24:38','Chrome','125.0.0.0','N','','Windows 10.0','','',''),
(2446,2130706433,'2024-05-28 16:38:44','Chrome','125.0.0.0','N','','Windows 10.0','','',''),
(2447,2130706433,'2024-05-30 11:51:22','Chrome','125.0.0.0','N','','Windows 10.0','','',''),
(2448,2130706433,'2024-05-31 11:50:34','Chrome','125.0.0.0','N','','Windows 10.0','','',''),
(2449,2130706433,'2024-06-03 10:24:49','Chrome','125.0.0.0','N','','Windows 10.0','','',''),
(2450,2130706433,'2024-06-04 09:32:32','Chrome','125.0.0.0','N','','Windows 10.0','','',''),
(2451,2130706433,'2024-06-05 11:19:32','Chrome','124.0.0.0','N','','Windows 10.0','','',''),
(2452,2130706433,'2024-06-17 13:31:22','Chrome','126.0.0.0','N','','Windows 10.0','','',''),
(2453,2130706433,'2024-06-18 11:36:42','Chrome','126.0.0.0','N','','Windows 10.0','','',''),
(2454,2130706433,'2024-06-21 17:01:43','Edge','126.0.0.0','N','','Windows 10.0','','',''),
(2455,2130706433,'2024-07-24 17:04:29','Chrome','126.0.0.0','N','','Windows 10.0','','',''),
(2456,2130706433,'2024-09-20 15:07:26','Chrome','129.0.0.0','N','','Windows 10.0','','','');

/*Table structure for table `wb_survey_answer` */

DROP TABLE IF EXISTS `wb_survey_answer`;

CREATE TABLE `wb_survey_answer` (
  `ans_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `quest_idx` int NOT NULL COMMENT '설문조사 질문 PK',
  `answer_array` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT 'true인 답이 될 수 있는 key들의 배열(answer_1~answer_8)',
  `rec_multi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[]' COMMENT '[TRUE]추천 멀티팩',
  `rec_each` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[]' COMMENT '[TRUE]추천 단일상품',
  `rec_nut` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[]' COMMENT '[TRUE]추천 영양소',
  `rec_no_multi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[]' COMMENT '[FALSE]추천 멀티팩',
  `rec_no_each` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[]' COMMENT '[FALSE]추천 단일상품',
  `rec_no_nut` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '[]' COMMENT '[FALSE]추천 영양소',
  PRIMARY KEY (`ans_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_answer` */

/*Table structure for table `wb_survey_choices` */

DROP TABLE IF EXISTS `wb_survey_choices`;

CREATE TABLE `wb_survey_choices` (
  `choice_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `quest_idx` int NOT NULL,
  `choice_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`choice_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=8105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_choices` */

/*Table structure for table `wb_survey_concerns` */

DROP TABLE IF EXISTS `wb_survey_concerns`;

CREATE TABLE `wb_survey_concerns` (
  `con_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `quest_idx` int NOT NULL COMMENT '질문 PK',
  `hash_text` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '해시 텍스트',
  PRIMARY KEY (`con_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_concerns` */

/*Table structure for table `wb_survey_pill` */

DROP TABLE IF EXISTS `wb_survey_pill`;

CREATE TABLE `wb_survey_pill` (
  `pill_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `pill_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '제품명',
  `day_intake` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '1일 권장 섭취량',
  `pill_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '약품 정보',
  `pill_color` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '색상',
  `pill_img_before` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '클릭 전 이미지',
  `pill_img_after` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '클릭 후 이미지',
  PRIMARY KEY (`pill_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_pill` */

/*Table structure for table `wb_survey_quest` */

DROP TABLE IF EXISTS `wb_survey_quest`;

CREATE TABLE `wb_survey_quest` (
  `quest_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `cat_idx` enum('기본정보','대사증후군/가족력','생활습관','건강 관심사') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '부모 질문의 PK 값',
  `check_allergy` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '알러지 유무 확인',
  `check_sex` enum('MALE','FEMALE','BOTH') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'BOTH' COMMENT '성별 확인',
  `check_age` enum('ADULT','YOUTH','BOTH') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'BOTH' COMMENT '연령대(성인/청소년)확인',
  `ban_under_10` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'N' COMMENT '만 10세 미만 확인',
  `quest_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '질문 내용',
  `hint_text` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '주관식 예시',
  `notice_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `quest_type` enum('주관식','객관식') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '객관식' COMMENT '주관식||객관식',
  `choiceArray` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '선택지 배열',
  `sort_adult` int NOT NULL DEFAULT '0' COMMENT '성인일 때 정렬 순서',
  `sort_youth` int NOT NULL DEFAULT '0' COMMENT '청소년일 때 정렬 순서',
  PRIMARY KEY (`quest_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_quest` */

/*Table structure for table `wb_survey_recommend` */

DROP TABLE IF EXISTS `wb_survey_recommend`;

CREATE TABLE `wb_survey_recommend` (
  `rec_idx` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK',
  `rec_type` enum('MULTI','EACH','NUT') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '멀티팩/단일팩/영양소',
  `rec_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '이름',
  `nut_content_short` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '[영양소] 메인포인트 문구',
  `rec_content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '설명 내용',
  `nut_hash_array` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '[영양소] 해시태그',
  `pill_idx_array` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '관련 알약 정보 idx',
  `check_adult` enum('ADULT','YOUTH','BOTH') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'BOTH',
  `check_sex` enum('MALE','FEMALE','BOTH') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'BOTH',
  `contain_eachs` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '멀티팩의 경우 포함하고 있는 단일팩의 rec_idx 배열로 입력',
  `prd_idx` int DEFAULT NULL COMMENT '상품 번호',
  PRIMARY KEY (`rec_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_recommend` */

/*Table structure for table `wb_survey_result` */

DROP TABLE IF EXISTS `wb_survey_result`;

CREATE TABLE `wb_survey_result` (
  `result_idx` int unsigned NOT NULL AUTO_INCREMENT,
  `mem_idx` int NOT NULL,
  `mem_nickName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mem_sex` enum('MALE','FEMALE') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mem_birth` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mem_age` int NOT NULL COMMENT '만 나이',
  `habit_index` enum('위험','보통','양호') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '생활습관 지수',
  `bmi_index` float NOT NULL COMMENT 'BMI 지수',
  `bmi_stage` enum('저체중','정상','과체중','비만') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'BMI 단계',
  `bmi_comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'BMI 별 안내',
  `interest_array` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '설문조사에서 선택한 관심사(배열)',
  `rec_multis` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '추천 멀티팩(배열)',
  `rec_eachs` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '추천 단일상품(배열)',
  `rec_nuts` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '추천 영양소(배열)',
  `reg_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`result_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_survey_result` */

/*Table structure for table `wb_calendar` */

DROP TABLE IF EXISTS `wb_calendar`;

CREATE TABLE `wb_calendar` (
  `cal_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '일정 PK',
  `cal_status` enum('Y','N') NOT NULL DEFAULT 'Y' COMMENT 'Y:정상 N:삭제',
  `cal_branch` varchar(50) NOT NULL COMMENT '지점: gamil, main, self-study',
  `cal_date` date NOT NULL COMMENT '일정 날짜',
  `cal_title` varchar(255) NOT NULL COMMENT '일정 제목',
  `cal_content` text COMMENT '특이사항 상세 내용',
  `cal_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cal_updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cal_id`),
  KEY `idx_date` (`cal_date`),
  KEY `idx_branch` (`cal_branch`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

/*Data for the table `wb_calendar` */

/*Table structure for table `wb_uniqid` */

DROP TABLE IF EXISTS `wb_uniqid`;

CREATE TABLE `wb_uniqid` (
  `uq_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uq_ip` int unsigned NOT NULL,
  PRIMARY KEY (`uq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wb_uniqid` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
