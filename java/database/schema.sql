BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;
DROP SEQUENCE IF EXISTS seq_user_id CASCADE;
DROP TABLE IF EXISTS breweries CASCADE;
DROP SEQUENCE IF EXISTS seq_brewery_id CASCADE;
DROP TABLE IF EXISTS beers CASCADE;
DROP SEQUENCE IF EXISTS seq_beer_id CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP SEQUENCE IF EXISTS seq_review_id CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP SEQUENCE IF EXISTS seq_role_id CASCADE;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_brewery_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_beer_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_review_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE SEQUENCE seq_role_id
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;

CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE roles (
    role_id int DEFAULT nextval('seq_role_id'::regclass) NOT NULL,
    roleName varchar(10) NOT NULL,
    user_id int,
    CONSTRAINT PK_role_id PRIMARY KEY (role_id),
    CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE breweries (
	brewery_id int DEFAULT nextval('seq_brewery_id'::regclass) NOT NULL,
	name varchar(50) NOT NULL,
    address varchar(100),
    image varchar(50),
    websiteUrl varchar(500) NOT NULL,
    phone varchar(15),
    email varchar(30),
    description varchar(500) NOT NULL,
    hoursOfOperation varchar(20),
    daysOfOperation varchar(70),
    user_id int,
	CONSTRAINT PK_brewery_id PRIMARY KEY (brewery_id),
	CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE beers (
	beer_id int DEFAULT nextval('seq_beer_id'::regclass) NOT NULL,
	name varchar(50) NOT NULL,
	brewery_id int NOT NULL,
	image varchar(200) NOT NULL,
	description varchar(500),
	abv varchar(5),
	beer_type varchar(15) NOT NULL,
	CONSTRAINT PK_beer_id PRIMARY KEY (beer_id),
	CONSTRAINT FK_brewery_id FOREIGN KEY (brewery_id) REFERENCES breweries (brewery_id)
);

CREATE TABLE reviews (
	review_id int DEFAULT nextval('seq_review_id'::regclass) NOT NULL,
	user_id int NOT NULL,
	beer_id int NOT NULL,
	review text,
	rating int NOT NULL,
	CONSTRAINT PK_review_id PRIMARY KEY (review_id),
	CONSTRAINT FK_user_review FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT FK_beer_review FOREIGN KEY (beer_id) REFERENCES beers (beer_id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');

INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Dummy','123 Fake St', 'img.png', 'thisurl.com','924-867-5309','thisemail@gmail.com','We are a brewery','12:00 PM to 2:00 AM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Monday','1');
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('coors', 'img.url', 'grossest beer ever', 'lager', '5%', 1);
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (1, 1, 5, 'Tastes like water mixed with more water with a water chaser');


COMMIT TRANSACTION;
