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
    image varchar(200),
    websiteUrl varchar(500) NOT NULL,
    phone varchar(15),
    email varchar(30),
    description varchar(2000) NOT NULL,
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
	description varchar(2000),
	abv varchar(15),
	beer_type varchar(30) NOT NULL,
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
INSERT INTO users (username,password_hash,role) VALUES ('brewsclues','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_BREWER');


INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Alvarado Street Brewery','426 Alvarado St', 'https://www.porchdrinking.com/wp-content/uploads/2016/09/alvarado-street-2.jpg', 'https://asb.beer/','831-655-2337',' info@asb.beer','In an alternate reality, John Steinbeck would be having beers with Madeline Martha Mackenzie at Alvarado Street Brewery. The Nobel Prize-winning giant of American letters would probably be more inclined to share a drink with a blue collar everyman than Resse Witherspoon’s upper-class elite helicopter parent from Big Little Lies, even though they both call Monterey home. But one thing they could agree upon is a Mai Tai, and I don’t mean the tropical cocktail but the single-hop and single-malt tropical Mai Tai P.A. from here. Over recent years it’s racked up more GABF medals than just about any other IPA in the last decade. The downtrodden working man and a wealthy alpha female can find common ground over world-class social lubricants at any of three Alvarado Street Brewery locations in the county.','11:30 AM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Monday','1');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Bissell Bros','38 Resurgam Place', 'https://craftpeak-cooler-images.imgix.net/craftpeak/Bissell-Brothers.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=34de085511be051bc7f3e024ae524c45', 'https://bissellbrothers.com/','207-808-8258','support@bissellbrothers.com','Bissell Brothers was founded in 2013 with a mission to change people''s perceptions of what beer and the beer experience can be, while always staying dedicated to our home state of Maine. There is an energy that emanates from this company which drives us to get a little better each day. We continue to push the boundaries of what these beverages can be and what they mean to our customers.','12:00 PM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Monday','2');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Bell''s Brewery, Inc','8938 Krum Ave, Galesburg, MI 49053', 'https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2011/03/Bells-brewery.jpg', 'https://bellsbeer.com/','269-382-2338','info@bellsbrew.com','100% Family owned and Independent, Bells has been creating unique and inspired craft beer in Michigan since 1985','11:00 AM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Monday','3');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Energy City Brewing','917 FIRST STREET, BATAVIA, ILLINOIS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFm8EJ1Hv4jBaDhsSMINiIHCaqaDMo1EBRQ&usqp=CAU', 'https://www.energycitybrewing.com/','630-488-5611','info@energycitybrewing.com','More than 40 miles west of Chicago, Energy City has been steadily making a national name for itself since opening its doors as a one-barrel brewery in 2017. From those humble roots, former home brewer David Files and his wife and brewery co-owner, Heidi Files, have had to grow to keep up with intense demand for the brewery’s hazy double IPAs, smoothie hard seltzers, and Bistro line of food-flavored berliner weisses','12:00 PM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Monday','4');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('D. G. Yuengling and Son Inc','310 Mill Creek Ave, Pottsville, PA 17901', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WNTFi1z7KWnj7n5vBX2SDqmsZ-Xt7VMklg&usqp=CAU', 'https://www.yuengling.com/our-brewery/','570-622-0153','info@yuengling.com','The story of Yuengling is the story of the American Spirit. It’s a tale of shared dreams, individual tenacity and an unwavering dedication to standards of quality. Like many American stories it starts amid the dreams of countless young immigrants looking for opportunity and emerges from the strength and will of one family determined to build their legacy in a new country. The story of America’s Oldest Brewery began when David G. Yuengling arrived from Wuerttemberg Germany to settle in the sleepy, coal-mining town of Pottsville, Pennsylvania.','12:00 PM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Monday','5');


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Mai Tai P.A', 'https://cdn.shopify.com/s/files/1/0523/7388/1029/products/MaiTai-16ozCan-HiResMock.jpg?v=1646420681', 'Tropical IPA brewed with 100% Mosaic hops, lending intensely dank aromas of passion fruit, guava, and lychee. Finishes dry, in true West Coast-style fashion.', 'Tropical IPA', '6.5%', 1);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('PILS', 'https://cdn.shopify.com/s/files/1/0523/7388/1029/products/peninsula.jpg?v=1643996386', 'German-style Pilsner brewed with floor malted German Pilsner malt, Tettnang & Mittelfruh whole cone hops, and fermented with legendary Augustiner yeast. Spunded & horizontally lagered for six weeks. Elegant presentation, gorgeous Noble-hop aromatics, and finishes crisp with an assertive, yet refined bitterness.', 'German-style Pilsner', '5.2%', 1);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Monterey Beer', 'https://cdn.shopify.com/s/files/1/0523/7388/1029/products/monterey-white.jpg?v=1612807745', 'Resurrected from 1934, the local lager of the Monterey Peninsula and Salinas Valley. Crisp, clean and perfect for any occasion!', 'American Lager ', '4.5%', 1);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('LAND & SEA XPA', 'https://cdn.shopify.com/s/files/1/0523/7388/1029/products/landsea.jpg?v=1645810749', 'Land & Sea packed with juicy, tropical Nelson Sauvin hops and a crisp, refreshing finish.', 'Nelson Extra Pale Ale', '5%', 1);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('PENINSULA PILSNER', 'https://cdn.shopify.com/s/files/1/0523/7388/1029/products/peninsula.jpg?v=1643996386', 'German-style Pilsner brewed with floor malted German Pilsner malt, Tettnang & Mittelfruh whole cone hops, and fermented with legendary Augustiner yeast.', 'German-style Pilsner', '5.2%', 1);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Lagerbier', 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A7422.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=cc8ca4074a7ac510839731446499c370', 'Brewed and cold-conditioned to harmonize a comforting malt character with the zestiness of Sterling and Lemondrop hops', 'Kellerbier', '5.3%', 2);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Precept', 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A9106.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=ffa69c1674a2065df7d7678c22c50abf', 'Our faithful take on German-style pilsner. Maine pils malt base, hopped with Saaz and Mittelfruh, and horizontally lagered for over a month', 'Pilsner', '5.6%', 2);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('All Together', 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/IMG_5314-scaled.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=4c93068aa385d959d1452b407b1d3af7', 'Our version of a worldwide collaboration led by Other Half Brewing Company to raise money for those in the hospitality industry whose livelihoods have been affected by the pandemic', 'IPA', '6.5%', 2);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('LUX', 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/Lux-square.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=e40cab20a5f3f6414078359741f7022b', 'Our pale ale hopped exclusively with Mosaic and brewed with rye. A tropical escape to a sunnier state of mind', 'Mosaic Pale Ale', '5.1%', 2);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Nothing Gold', 'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A5735.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=2bab1a5190c9fafe82301a9ba5017e67', 'Mindfully hopped with Citra, Amarillo, Sultana, & Ekuanot', 'Double IPA', '8.2%', 2);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Bourbon Barrel Aged Expedition', 'https://cdn.shopify.com/s/files/1/0462/2214/7747/products/IMG_2410_480x480.jpg?v=1605553893', 'This 12 month barrel-aged version of our award-winning Expedition Stout thirsts for travel, but is perfectly content to sit in your cellar, maturing, until you are ready', 'Stout', '13.5%', 3);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Double Kveik', 'https://cdn.shopify.com/s/files/1/0462/2214/7747/products/Bells-Brewery-Double-Kveik-IPA_2_480x480.jpg?v=1644258339', 'The beer boasts intense tropical fruit notes with a balances bitterness ', 'IPA', '8%', 3);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Malletizer', 'https://cdn.shopify.com/s/files/1/0462/2214/7747/products/MalletizerLabel_480x480.jpg?v=1645901005', 'Malletizer is an India Pale Ale brewed with Buddhas hand ', 'IPA', '6%', 3);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Consecrator Doppelbock', 'https://cdn.shopify.com/s/files/1/0462/2214/7747/products/Bells_Consecrator_24pk_btls_480x480.jpg?v=1613491786', ' Hints of caramel and molasses can be found in its smooth, malty finish', 'Lager', '10.5%', 3);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('No Yeah ', 'https://cdn.shopify.com/s/files/1/0462/2214/7747/products/No_Yeah6PackCanImage_480x480.jpg?v=1610816264', 'Easy drinking beer that’s bright and fun', 'Golden Ale', '4.5%', 3);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Bâtisserie Mint Chocolate Chip ', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p278_i2_w2880.jpeg?width=640', 'This imperial milk stout has soft warm chocolate and cool mint that dances on your tongue like your favorite ice cream dessert', 'Stout', '10%', 4);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Cosmic Nunchucks', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p277_i1_w1044.png?width=640', 'This Pink Boots Collaboration Beer is a highly crushable pale ale with rich citrus and tropical fruit flavor that pays homage to this year''s host brewery, Church Street', 'Pale Ale', '5.3%', 4);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Concord Crush', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p260_i1_w1291.jpeg?width=640', 'Vibrant aroma of grape jelly and luscious Citra hops. Soft earthy notes of supple grape skin and leathery stems', 'Fruited Ale', '6%', 4);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Bâtisserie Neapolitan', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p274_i3_w2880.jpeg?width=640', 'Warm chocolate, smooth vanilla and luscious strawberries all come alive in this creamy milk stout', 'Milk stout', '10%', 4);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Aloha Sunrise', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p166_i5_w7971.jpeg?width=640', 'This heavily fruited IPA is absolutely loaded with pineapples and oranges', 'Fruited IPA', '6.5%', 4);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Traditional Lager', 'https://www.yuengling.com/wp-content/uploads/yuengling_lager-bottlecap.jpg', 'Famous for its rich amber color and medium-bodied flavor with roasted caramel malt for a subtle sweetness and a combination of cluster and cascade hops', 'Lager', '4.5%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Black & Tan', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p166_i5_w7971.jpeg?width=640', 'This heavily fruited IPA is absolutely loaded with pineapples and oranges', 'Fruited IPA', '6.5%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Aloha Sunrise', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p166_i5_w7971.jpeg?width=640', 'This heavily fruited IPA is absolutely loaded with pineapples and oranges', 'Fruited IPA', '6.5%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Aloha Sunrise', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p166_i5_w7971.jpeg?width=640', 'This heavily fruited IPA is absolutely loaded with pineapples and oranges', 'Fruited IPA', '6.5%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Aloha Sunrise', 'https://shop.energycitybrewing.com/uploads/1/3/1/3/131347917/s252563634221096492_p166_i5_w7971.jpeg?width=640', 'This heavily fruited IPA is absolutely loaded with pineapples and oranges', 'Fruited IPA', '6.5%', 5);






INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (1, 1, 5, 'Tastes like water mixed with more water with a water chaser');


COMMIT TRANSACTION;
