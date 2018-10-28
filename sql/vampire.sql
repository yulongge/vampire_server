create database vampire;

-- 小程序表

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

-- 文章数据 article

create table if not exists mp_article (
	id INT NOT NULL AUTO_INCREMENT,
	a_title varchar(100) NOT NULL,
	a_url varchar(100) NOT NULL,
	a_path varchar(100) NOT NULL,
	a_desc varchar(100),
	a_icon varchar(100),
	primary key (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into mp_article(a_title, a_url, a_desc, a_icon) values
	('人间不值得', 'pages/article_detail/article_detail', '人间不值得，何苦来一遭', 'https://geyulong.tech/images/mp/article/article1.png'),
	('胖瘦理论', 'pages/article_detail/article_detail', '无法掌控自己胖瘦的人，怎么掌控自己的人生', 'https://geyulong.tech/images/mp/article/article2.png'),
	('Wifi', 'pages/article_detail/article_detail', '有我在，连接你我，共享毕生', 'https://geyulong.tech/images/mp/article/article3.png'),
	('时光机', 'pages/article_detail/article_detail', '未来可期，也可欺。。。', 'https://geyulong.tech/images/mp/article/article4.png'),
	('神', 'pages/article_detail/article_detail', '发生什么，由你来, 可笑', 'https://geyulong.tech/images/mp/article/article5.png'),
	('人佛', 'pages/article_detail/article_detail', '天地悠然而起，江河悠然而落', 'https://geyulong.tech/images/mp/article/article6.png'),
	('彩蛋', 'pages/article_detail/article_detail', '生活总是让我们措手不及，无法预知', 'https://geyulong.tech/images/mp/article/article7.png'),
	('影视', 'pages/article_detail/article_detail', '守护的初心，等待慢慢觉醒', 'https://geyulong.tech/images/mp/article/article1.png'),
	('歌曲', 'pages/article_detail/article_detail', '让初心跟你到绝境', 'https://geyulong.tech/images/mp/article/article2.png'),
	('六合之外', 'pages/article_detail/article_detail', '六合之外, 圣人不言，您是圣人吗', 'https://geyulong.tech/images/mp/article/article3.png'),
	('四海八荒', 'pages/article_detail/article_detail', '陪你走遍四海八荒，也不是不可能，没意思啊，丫的', 'https://geyulong.tech/images/mp/article/article4.png');

alter table mp_article add a_path varchar(100) not NULL;
alter table mp_article add a_create_time varchar(100) not NULL;

truncate table mp_article

-- 工具

create table if not exists mp_tool (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	t_url varchar(100) NOT NULL,
	t_desc varchar(100),
	t_icon varchar(100),
	primary key (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into mp_tool(name, t_url, t_desc, t_icon) values
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

-- 导航栏数据

create table if not exists mp_nav (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	path varchar(100),
	icon varchar(100),
	primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into mp_nav (name, path, icon) values
	('首页', 'pages/index/index', ''),
	('工具', 'pages/tools/tools', ''),
	('我的', 'pages/mine/mine', '');


-- 后台管理表

create table if not exists server_nav (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	path varchar(100),
	icon varchar(100),
	nav_id INT(10),
	parent_id INT(10),
	primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into server_nav (name, path, icon, nav_id, parent_id) values
	('用户', '/admin/user', '/admin/upload/images/user.svg', '1', ''),
	('文章', '/admin/article', '/admin/upload/images/blog.svg', '2', '');

insert into server_nav (name, path, icon, nav_id, parent_id) values
	('导航列表', '/admin/nav', 'https://geyulong.tech/admin/upload/images/nav.svg', '3', ''),
	('工具列表', '/admin/tool', 'https://geyulong.tech/admin/upload/images/tool.svg', '4', '');

update server_nav set name="文章列表", icon="https://geyulong.tech/admin/upload/images/blog.svg" where id=2;
update server_nav set  icon="https://geyulong.tech/admin/upload/images/nav.svg" where id=3;
update server_nav set  icon="https://geyulong.tech/admin/upload/images/tool.svg" where id=4;