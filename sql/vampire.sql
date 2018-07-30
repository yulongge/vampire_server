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

