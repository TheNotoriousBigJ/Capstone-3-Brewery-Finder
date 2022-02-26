BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP TABLE IF EXISTS breweries;
DROP SEQUENCE IF EXISTS seq_brewery_id;
DROP TABLE IF EXISTS beers;
DROP SEQUENCE IF EXISTS seq_beer_id;
DROP TABLE IF EXISTS reviews;
DROP SEQUENCE IF EXISTS seq_review_id;

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

CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE breweries (
	id int DEFAULT nextval('seq_brewery_id'::regclass) NOT NULL,
	name varchar(50) NOT NULL,
    street varchar(50),
    city varchar(50),
    state varchar(15),
    postalCode varchar(15),
    country varchar(50),
    websiteUrl varchar(100) NOT NULL,
    phone varchar(15),
    description varchar(500) NOT NULL,
    user_id int,
	CONSTRAINT PK_brewery_id PRIMARY KEY (id),
	CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE beers (
	id int DEFAULT nextval('seq_beer_id'::regclass) NOT NULL,
	brewery_id int NOT NULL,
	image varchar(200) NOT NULL,
	description varchar(500),
	abv varchar(5),
	type varchar(15) NOT NULL,
	CONSTRAINT PK_beer_id PRIMARY KEY (id),
	CONSTRAINT FK_brewery_id FOREIGN KEY (brewery_id) REFERENCES breweries (id)
);

CREATE TABLE reviews (
	id int DEFAULT nextval('seq_review_id'::regclass) NOT NULL,
	user_id int NOT NULL,
	beer_id int NOT NULL,
	review text,
	rating int NOT NULL,
	CONSTRAINT PK_review_id PRIMARY KEY (id),
	CONSTRAINT FK_user_review FOREIGN KEY (user_id) REFERENCES users (user_id),
	CONSTRAINT FK_beer_review FOREIGN KEY (beer_id) REFERENCES beers (id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');


COMMIT TRANSACTION;
