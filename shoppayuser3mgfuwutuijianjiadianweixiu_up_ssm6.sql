/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2025-04-17 18:48:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wct_address
-- ----------------------------
DROP TABLE IF EXISTS `wct_address`;
CREATE TABLE `wct_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_address
-- ----------------------------
INSERT INTO `wct_address` VALUES ('39', '小王 15123395995 39-2-3', '75');

-- ----------------------------
-- Table structure for wct_bill
-- ----------------------------
DROP TABLE IF EXISTS `wct_bill`;
CREATE TABLE `wct_bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gids` varchar(100) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL,
  `uid` varchar(100) DEFAULT NULL,
  `shop` varchar(100) DEFAULT NULL,
  `ndate` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `gnames` varchar(500) DEFAULT NULL,
  `sid` varchar(10) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  `statecn` varchar(50) DEFAULT NULL,
  `pnote` varchar(255) DEFAULT NULL,
  `pf` varchar(255) DEFAULT NULL,
  `gcounts` varchar(255) DEFAULT NULL,
  `ydate` varchar(255) DEFAULT NULL,
  `tc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_bill
-- ----------------------------
INSERT INTO `wct_bill` VALUES ('124', '53', 'user1', '75', '王师傅', '2025-04-06 12:06:04', '100', '空调维修*1', '76', '', '小王 15123395995 39-2-3', '', '已完成', '', '', '1', '2025-04-17', '');
INSERT INTO `wct_bill` VALUES ('125', '53', 'user1', '75', '王师傅', '2025-04-06 12:16:37', '100', '空调维修*1', '76', '', '小王 15123395995 39-2-3', '', '已验收', '非常不错', '5', '1', '2025-04-17', '');
INSERT INTO `wct_bill` VALUES ('126', '54', 'user1', '75', '王师傅', '2025-04-17 12:20:39', '100', '电视维修*1', '76', '', '小王 15123395995 39-2-3', '', '已验收', '不错', '5', '1', '2025-04-17', '');

-- ----------------------------
-- Table structure for wct_good
-- ----------------------------
DROP TABLE IF EXISTS `wct_good`;
CREATE TABLE `wct_good` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gname` varchar(100) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `note` varchar(2000) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `typeid` varchar(10) DEFAULT NULL,
  `sid` varchar(10) DEFAULT NULL,
  `shop` varchar(50) DEFAULT NULL,
  `mcount` varchar(50) DEFAULT NULL,
  `btype` varchar(255) DEFAULT NULL,
  `statecn` varchar(255) DEFAULT NULL,
  `ctypeid` int(11) DEFAULT NULL,
  `ctype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_good
-- ----------------------------
INSERT INTO `wct_good` VALUES ('52', '洗衣机上门维修', '200', '<p>详细的服务介绍说明</p><p><img src=\"upload/63090bbc-c9e6-4e31-9211-cc7e26f0252a.jpg\" style=\"max-width:100%;\"/></p><p>图文详情介绍维修服务</p>', '洗衣机维修', 'd3fc1042-23c1-4e64-bd25-04c7524454da.jpg', '53', '76', '王师傅', '', '1', '上架中', null, '');
INSERT INTO `wct_good` VALUES ('53', '空调维修', '100', '<p>空调安装上门维修</p><p><img src=\"upload/0acce387-9685-4d6b-8ba6-f4847eb68dce.jpg\" style=\"max-width:100%;\"/></p>', '空调', 'd33dbcd5-92f8-497e-ad90-1a58952af3f7.jpg', '52', '76', '王师傅', '0', '1', '上架中', null, '');
INSERT INTO `wct_good` VALUES ('54', '电视维修', '100', '<p>电视上门维修</p>', '电视维修', '3fe551b3-793f-4a63-9471-e57384c5f4dd.jpg', '49', '76', '王师傅', '0', '1', '上架中', null, '');
INSERT INTO `wct_good` VALUES ('55', '空调维修', '198', '<p>详细的服务说明</p><p><img src=\"upload/7b9c7f13-9377-4944-bafa-bec501564b56.jpg\" style=\"max-width:100%;\"/></p><p><img src=\"upload/6a004d55-5091-4278-bc68-01419987cc9a.jpg\" style=\"max-width:100%;\"/></p>', '空调', 'ed3bcff6-15e8-4529-8398-a830bdec7364.jpg', '52', '77', 'fuwu2', '0', '1', '上架中', null, '');
INSERT INTO `wct_good` VALUES ('56', '冰箱上门维修', '200', '<p>图文说明</p>', '冰箱', '99615e4a-bbfd-413c-b877-2ab5c4ac83f4.jpg', '51', '76', '王师傅', '', '1', '待审核', null, '');

-- ----------------------------
-- Table structure for wct_huihua
-- ----------------------------
DROP TABLE IF EXISTS `wct_huihua`;
CREATE TABLE `wct_huihua` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '发送者id',
  `fid` int(11) DEFAULT NULL COMMENT '接收者id',
  `qid` int(11) DEFAULT NULL COMMENT '群id',
  `type` int(11) DEFAULT NULL COMMENT '类型',
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT '发送者名称',
  `fusername` varchar(50) DEFAULT NULL COMMENT '接收者名称',
  `attach` varchar(200) DEFAULT NULL,
  `attachname` varchar(200) DEFAULT NULL COMMENT '附件名称',
  `img` varchar(200) DEFAULT NULL COMMENT '图片',
  `qtitle` varchar(255) DEFAULT NULL,
  `msgtype` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_huihua
-- ----------------------------
INSERT INTO `wct_huihua` VALUES ('5', '75', '76', null, '1', '<div style=\"display: flex;align-items: center;word-wrap:break-word;\">可以咨询聊天</div>', '2025-04-17 12:19:11', 'user1', '王师傅', '', '', '0557d78e-7ce9-4a1c-bfdc-8c0d3f5e8565.jpg', '', '1');
INSERT INTO `wct_huihua` VALUES ('6', '76', '75', null, '1', '<div style=\"display: flex;align-items: center;word-wrap:break-word;\">可以咨询聊天</div>', '2025-04-17 12:19:11', '王师傅', 'user1', '', '', 'fa2676af-46eb-4ef2-8ab5-8247e2e85189.jpeg', '', '1');

-- ----------------------------
-- Table structure for wct_message
-- ----------------------------
DROP TABLE IF EXISTS `wct_message`;
CREATE TABLE `wct_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  `fid` int(11) DEFAULT NULL COMMENT '朋友id',
  `qid` int(11) DEFAULT NULL COMMENT '群id',
  `type` varchar(11) DEFAULT NULL COMMENT '消息类型',
  `zan` int(11) DEFAULT '0',
  `note` varchar(5000) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT '发送者名称',
  `fusername` varchar(50) DEFAULT NULL COMMENT '朋友名称',
  `attach` varchar(200) DEFAULT NULL COMMENT '附件文件',
  `attachname` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL COMMENT '图片',
  `qtitle` varchar(255) DEFAULT NULL,
  `msgtype` int(10) DEFAULT NULL,
  `fimg` varchar(255) DEFAULT NULL,
  `alength` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_message
-- ----------------------------
INSERT INTO `wct_message` VALUES ('17', '75', '76', null, 'text', null, '<div style=\"display: flex;align-items: center;word-wrap:break-word;\">咨询维修工</div>', '2025-04-06 12:13:32', 'user1', '王师傅', '', '', 'fa2676af-46eb-4ef2-8ab5-8247e2e85189.jpeg', '', '1', '0557d78e-7ce9-4a1c-bfdc-8c0d3f5e8565.jpg', '');
INSERT INTO `wct_message` VALUES ('18', '75', '76', null, 'text', null, '<div style=\"display: flex;align-items: center;word-wrap:break-word;\">聊好过后,提交</div>', '2025-04-06 12:13:38', 'user1', '王师傅', '', '', 'fa2676af-46eb-4ef2-8ab5-8247e2e85189.jpeg', '', '1', '0557d78e-7ce9-4a1c-bfdc-8c0d3f5e8565.jpg', '');
INSERT INTO `wct_message` VALUES ('19', '75', '76', null, 'text', null, '<div style=\"display: flex;align-items: center;word-wrap:break-word;\">可以咨询聊天</div>', '2025-04-17 12:19:10', 'user1', '王师傅', '', '', 'fa2676af-46eb-4ef2-8ab5-8247e2e85189.jpeg', '', '1', '0557d78e-7ce9-4a1c-bfdc-8c0d3f5e8565.jpg', '');

-- ----------------------------
-- Table structure for wct_notice
-- ----------------------------
DROP TABLE IF EXISTS `wct_notice`;
CREATE TABLE `wct_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_notice
-- ----------------------------
INSERT INTO `wct_notice` VALUES ('25', '测试广告资讯', '<p>这里自己发布一些图文</p><p><img src=\"upload/4f76c4cd-8728-4c0c-800d-3dd48231bf9e.jpg\" style=\"max-width:100%;\"/></p>', '2025-04-06 12:10:02', '1', 'c1835c9e-7e76-445a-b3fb-b295e821f862.jpg');
INSERT INTO `wct_notice` VALUES ('26', '软件使用说明', '<p>这里自己图文编辑</p>', '2025-04-06 12:10:25', '2', 'c36d11b1-9ff6-408c-bab3-ab729d2a294a.jpg');
INSERT INTO `wct_notice` VALUES ('27', '测试资讯公告', '<p>这里图文编辑详情</p><p><br/></p>', '2025-04-17 12:17:05', '1', '95c97092-f3f2-45fc-ba65-f411c9e5093b.jpg');

-- ----------------------------
-- Table structure for wct_posts
-- ----------------------------
DROP TABLE IF EXISTS `wct_posts`;
CREATE TABLE `wct_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_posts
-- ----------------------------
INSERT INTO `wct_posts` VALUES ('49', '测试交流发帖', '<p>详细的交流反馈内容</p>', '75', 'user1', '2025-04-06 12:14:40', '', '1');

-- ----------------------------
-- Table structure for wct_replay
-- ----------------------------
DROP TABLE IF EXISTS `wct_replay`;
CREATE TABLE `wct_replay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(10) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_replay
-- ----------------------------
INSERT INTO `wct_replay` VALUES ('44', '53', '非常不错', '75', 'user1', '2025-04-06 12:16:37', '1');
INSERT INTO `wct_replay` VALUES ('45', '49', '回复交流讨论', '1', 'admin', '2025-04-17 12:17:30', '3');
INSERT INTO `wct_replay` VALUES ('46', '49', '多大的', '75', 'user1', '2025-04-17 12:19:52', '3');
INSERT INTO `wct_replay` VALUES ('47', '54', '不错', '75', 'user1', '2025-04-17 12:20:39', '1');

-- ----------------------------
-- Table structure for wct_type
-- ----------------------------
DROP TABLE IF EXISTS `wct_type`;
CREATE TABLE `wct_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_type
-- ----------------------------
INSERT INTO `wct_type` VALUES ('49', '电视维修');
INSERT INTO `wct_type` VALUES ('50', '电脑维修');
INSERT INTO `wct_type` VALUES ('51', '冰箱');
INSERT INTO `wct_type` VALUES ('52', '空调');
INSERT INTO `wct_type` VALUES ('53', '洗衣机维修');

-- ----------------------------
-- Table structure for wct_type2
-- ----------------------------
DROP TABLE IF EXISTS `wct_type2`;
CREATE TABLE `wct_type2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `pid` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_type2
-- ----------------------------

-- ----------------------------
-- Table structure for wct_user
-- ----------------------------
DROP TABLE IF EXISTS `wct_user`;
CREATE TABLE `wct_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `passwd` varchar(50) DEFAULT NULL,
  `roletype` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `statecn` varchar(50) DEFAULT NULL,
  `favs` varchar(200) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `openid` varchar(200) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `idcard` varchar(255) DEFAULT NULL,
  `zgzs` varchar(255) DEFAULT NULL,
  `note` varchar(5000) DEFAULT NULL,
  `jn` varchar(255) DEFAULT NULL,
  `jk` varchar(255) DEFAULT NULL,
  `jsdz` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wct_user
-- ----------------------------
INSERT INTO `wct_user` VALUES ('1', 'admin', 'admin', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('75', 'user1', '111111', '2', '', '15123385885', '男', 'fa2676af-46eb-4ef2-8ab5-8247e2e85189.jpeg', '', '53,54', '900', '', '', '', '', '', '', '', '');
INSERT INTO `wct_user` VALUES ('76', '王师傅', '111111', '3', '', '15123385885', '男', '0557d78e-7ce9-4a1c-bfdc-8c0d3f5e8565.jpg', '通过', '', '270', '', '王师傅', '545645234523463245', '3455324534', '<p>详细的服务人员说明</p><p><br/></p>', '家电维修小能手', '健康', '');
INSERT INTO `wct_user` VALUES ('77', 'fuwu2', '111111', '3', '', '15123395995', '男', '760fc8a6-6d1d-4851-9b85-0efeed43f5f4.jpg', '通过', '', null, '', '李师傅', '5346234523452345', '46345345345', '<p>详细的服务人员的介绍信息</p><p><img src=\"upload/6eac7124-58fc-4945-832e-ed35a4f9c6f5.jpg\" style=\"max-width:100%;\"/></p><p><img src=\"upload/423446de-ac6c-4701-984d-1be5872e5f6c.jpg\" style=\"max-width:100%;\"/></p>', '各种家电维修', '健康', '');

-- ----------------------------
-- Table structure for wct_youhuiquan
-- ----------------------------
DROP TABLE IF EXISTS `wct_youhuiquan`;
CREATE TABLE `wct_youhuiquan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `typeid` int(11) DEFAULT NULL,
  `ndate` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `statecn` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_youhuiquan
-- ----------------------------
INSERT INTO `wct_youhuiquan` VALUES ('50', '20', null, '1', '2025-04-06 12:04:17', '', '', null, '平台优惠券');
INSERT INTO `wct_youhuiquan` VALUES ('51', '20', '75', '2', '2025-04-06 12:04:17', 'user1', '正常', '50', '平台优惠券');
INSERT INTO `wct_youhuiquan` VALUES ('52', '10', null, '1', '2025-04-17 12:17:22', '', '', null, '平台优惠券');
INSERT INTO `wct_youhuiquan` VALUES ('53', '10', '75', '2', '2025-04-17 12:17:22', 'user1', '正常', '52', '平台优惠券');
