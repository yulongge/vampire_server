create database vampire;
use vampire;

-- 全局配置表
create table if not exists config (
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(100) NOT NULL,
	primary key (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into config (title)
	values ("vampire");

-- user表
create table if not exists user (
	id INT NOT NULL AUTO_INCREMENT,
	user_name varchar(100) NOT NULL,
	pic varchar(100),
	sex varchar(40),
	age INT(10),
	openId varchar(100),
	iphone varchar(20),
	email varchar(20),
	role INT(10),
	login_time DATE,
	primary key (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 插入user数据
insert into user (user_name, pic, sex, age, openId, iphone, email, role, login_time)
	values ('GYL', '', '男', 30, '234353453454', '17701389735', 'gaiyulong@gmail.com', 1, '2018-07-27');

-- 首页数据

create table if not exists mp_tool (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	url varchar(100) NOT NULL,
	desc varchar(200),
	icon varchar(100),
	primary key (id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into mp_tool(name, url, desc, icon) values
	('吃', 'pages/eat/eat', '决定吃什么', ''),
	('计算器', 'pages/eat/eat', '人生如何来计算，计算的奥秘来自于❤️', ''),
	('Wifi', 'pages/eat/eat', '有我在，连接你我，共享毕生', ''),
	('拍照', 'pages/eat/eat', '无所不用其极的拍下去...', ''),
	('发布', 'pages/eat/eat', '发生什么，由你来', ''),
	('图片处理', 'pages/eat/eat', '是什么样? 由你决定', ''),
	('彩蛋', 'pages/eat/eat', '生活总是让我们措手不及，无法预知', ''),
	('影视', 'pages/eat/eat', '守护的初心，等待慢慢觉醒', ''),
	('歌曲', 'pages/eat/eat', '让初心跟你到绝境', ''),
	('六合之外', 'pages/eat/eat', '六合之外, 圣人不言', ''),
	('四海八荒', 'pages/eat/eat', '陪你走遍四海八荒', '');
