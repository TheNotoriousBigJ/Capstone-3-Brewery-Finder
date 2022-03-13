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



INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Alvarado Street Brewery','426 Alvarado St, Monterey, CA 93940', 'https://www.porchdrinking.com/wp-content/uploads/2016/09/alvarado-street-2.jpg', 'https://asb.beer/','831-655-2337',' info@asb.beer','In an alternate reality, John Steinbeck would be having beers with Madeline Martha Mackenzie at Alvarado Street Brewery. The Nobel Prize-winning giant of American letters would probably be more inclined to share a drink with a blue collar everyman than Resse Witherspoon’s upper-class elite helicopter parent from Big Little Lies, even though they both call Monterey home. But one thing they could agree upon is a Mai Tai, and I don’t mean the tropical cocktail but the single-hop and single-malt tropical Mai Tai P.A. from here. Over recent years it’s racked up more GABF medals than just about any other IPA in the last decade. The downtrodden working man and a wealthy alpha female can find common ground over world-class social lubricants at any of three Alvarado Street Brewery locations in the county.','11:30 AM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','1');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Bissell Bros','38 Resurgam Pl, Portland, ME 04102', 'https://craftpeak-cooler-images.imgix.net/craftpeak/Bissell-Brothers.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=34de085511be051bc7f3e024ae524c45', 'https://bissellbrothers.com/','207-808-8258','support@bissellbrothers.com','Bissell Brothers was founded in 2013 with a mission to change people''s perceptions of what beer and the beer experience can be, while always staying dedicated to our home state of Maine. There is an energy that emanates from this company which drives us to get a little better each day. We continue to push the boundaries of what these beverages can be and what they mean to our customers.','12:00 PM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','2');

INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Bell''s Brewery, Inc','8938 Krum Ave, Galesburg, MI 49053', 'https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2011/03/Bells-brewery.jpg', 'https://bellsbeer.com/','269-382-2338','info@bellsbrew.com','100% Family owned and Independent, Bells has been creating unique and inspired craft beer in Michigan since 1985','11:00 AM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');

INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Energy City Brewing','917 FIRST STREET, BATAVIA, ILLINOIS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBFm8EJ1Hv4jBaDhsSMINiIHCaqaDMo1EBRQ&usqp=CAU', 'https://www.energycitybrewing.com/','630-488-5611','info@energycitybrewing.com','More than 40 miles west of Chicago, Energy City has been steadily making a national name for itself since opening its doors as a one-barrel brewery in 2017. From those humble roots, former home brewer David Files and his wife and brewery co-owner, Heidi Files, have had to grow to keep up with intense demand for the brewery’s hazy double IPAs, smoothie hard seltzers, and Bistro line of food-flavored berliner weisses','12:00 PM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','2');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('D. G. Yuengling and Son Inc','310 Mill Creek Ave, Pottsville, PA 17901', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WNTFi1z7KWnj7n5vBX2SDqmsZ-Xt7VMklg&usqp=CAU', 'https://www.yuengling.com/our-brewery/','570-622-0153','info@yuengling.com','The story of Yuengling is the story of the American Spirit. It’s a tale of shared dreams, individual tenacity and an unwavering dedication to standards of quality. Like many American stories it starts amid the dreams of countless young immigrants looking for opportunity and emerges from the strength and will of one family determined to build their legacy in a new country. The story of America’s Oldest Brewery began when David G. Yuengling arrived from Wuerttemberg Germany to settle in the sleepy, coal-mining town of Pottsville, Pennsylvania.','12:00 PM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');

INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Green Bench Brewing Co','1133 Baum Ave N, St. Petersburg, FL 33705', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgY2hgi7aExwzfRA-8V0CCb-EBj9s7AQaqw&usqp=CAU', 'https://www.greenbenchbrewing.com/','727-800-9836',' support@greenbenchbrewing.com ','Already kicking ass with its world class Sunshine IPA since 2013, Green Bench’s brewing genius Khris Johnson runs this space with a beautiful courtyard separating the original headquarters, which now boasts a state-of-the-art tap room, barrel-aging space, additional foeders, and the ability to increase production three-times the former rate. This swanky addition to the family is christened Webb’s Cellar Room, and its Peach Alice sour was arguably one of our most favorite in that style','12:00 PM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Wicked Weed Brewing','91 Biltmore Ave, Asheville, NC 28801', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEl7PT5avuXAM3M3wWlizgOlHPlo88cm-jQ&usqp=CAU', 'https://www.greenbenchbrewing.com/our-beers','828-575-9599','info@wickedweedbrewing.com','Wicked Weed was imagined, created, and brought to life by the Dickinsons and the Guthys; two families that have been lifelong friends, each bringing a unique skill to the collective ownership team.','11:00 AM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Hudson Valley Brewing','7 E Main St, Beacon, NY 12508', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_g_dougdfIzg5z8wb2OjSnAwPs4auGhmSw&usqp=CAU', 'https://hudsonvalleybrewery.com/','845-218-9156','contact@hvbrewery.com','The amount of good things to happen to Beacon in the past half decade have practically made it synonymous with “quick weekend day trip out of New York City.” These days, along with a pilgrimage to the Dia:Beacon, stopping by Hudson Valley Brewing stands squarely atop the list of things to visit there once you get off the Metro-North','11:00 AM to 10:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Tree House Brewing','129 Sturbridge Rd, Charlton, MA 01507', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAh5358VZbt7UHtwTbtqb11V_V1vVvM9vuA&usqp=CAU', 'https://treehousebrew.com/','413-523-2367','info@treehousebrewing.com','Tree House Brewing Company began in a small red barn in Brimfield, Massachusetts. Since day one our goal has been to present you with reliably delightful beer that can contribute positively to life’s precious moments, and serve them in a cheerful, communal environment. Having grown from a five-gallon Coleman cooler brewhouse to a state-of-the-art 60 BBL, German-engineered brewhouse, Tree House, an independent brewer-owned brewery, is driven by the same people with the same energy and the same intent to bring you joy as it was ten years ago','11:00 AM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');
INSERT INTO breweries (name,address, image, websiteUrl,phone,email,description,hoursOfOperation,daysOfOperation,user_id) VALUES ('Modern Times Beer','3725 Greenwood St, San Diego, CA 92110', 'https://hensley.com/wp-content/uploads/2016/10/post-modern-times-beer.jpg', 'http://www.moderntimesbeer.com/','619-546-9694','info@moderntimesbeer.com','Modern Times was a utopian community built on Long Island in 1850 by a bunch of wild-eyed wingnuts who thought they could demonstrate to the world what a more perfect society might look like. They bartered, lived without a state, sometimes ignored the conventions of marriage (although probably not in the super hot way you’re imagining), and generally experimented with creating a less exploitative, more pleasurable world. Naturally, the whole thing eventually imploded when legit nut jobs from New York City found ','11:00 AM to 8:00 PM','Monday Tuesday Wednesday Thursday, Friday, Saturday, Sunday','3');


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
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Black & Tan', 'https://www.yuengling.com/wp-content/uploads/17_Yueng_BT_Malts_Above.jpg', ' Black & Tan combines 60% of our popular Dark Brewed Porter and 40% of our Premium Beer to create a brew that is rich and dark in color with hints of caramel and coffee from the dark roasted malts.', 'Roasted Ale', '4.6%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Yuengling Raging Eagle', 'https://www.yuengling.com/wp-content/uploads/Yueng_RE_Mango_BrandPage.jpg', 'Raging Eagle Mango Beer is a Pils made with natural mango flavor for a refreshing taste', 'Pils', '6%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Golden Pilsner', 'https://www.yuengling.com/wp-content/uploads/Photo-Apr-06-3-55-53-PM.jpg', 'Golden Pilsner is the perfect balance of hop and malt character for crisp and smooth thirst quenching refreshment', 'Pilsner', '4.7%', 5);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Lord Chesterfield Ale', 'https://www.yuengling.com/wp-content/uploads/17_Yueng_Ale_Book-1.jpg', 'Its distinct robust flavor is derived from a delicate combination of sweet maltiness and lingering herbal bitterness', 'Ale', '5.4%', 5);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Sunshine City IPA', 'https://images.squarespace-cdn.com/content/v1/5b916d21372b968e2957bdbc/1554839382168-4WCZ6NGF4N6V2SYI77XL/IMG_6839.jpg?format=1000w', 'we double dry hop this beer with equal parts Mosaic, Citra, and Azacca hops, for an intensely tropical profile reminiscent of tangerine, nectar, papaya, peach, kiwi, and pineapple', 'IPA', '6.8%', 6);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Postcard Pilsner', 'https://images.squarespace-cdn.com/content/v1/5b916d21372b968e2957bdbc/1554839305353-KJF813F16ERUA6YLDLRI/IMG_6825.jpg?format=1000w', 'Postcard Pils is brewed with a touch of flaked maize and US grown Mount Hood hops', 'Pils', '4.7%', 6);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Kulture Tings', 'https://images.squarespace-cdn.com/content/v1/5b916d21372b968e2957bdbc/1615275832319-FH98PWCGWDRTULH15BQS/IMG_2752.jpg?format=1000w', 'A traditional German Pilsner brewed with imported German Barke Pilsner malt and Tettnang hops, we executed a precise single deception mash process that resulted in a wonderfully rich cracker and grain aroma/flavor', 'German Pilsner', '5.1%', 6);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Alice Blend 3', 'https://images.squarespace-cdn.com/content/v1/5b916d21372b968e2957bdbc/1615276007837-PDA3BRUYTE3YPP0SY7CI/IMG_2779.jpg?format=1000w', 'This beer is packed with peach and citric tangerine aromas, spicy wood tannin, white grape skin flavors, rich minerality, and a medium acidity', 'Fruited Ale', '6.6%', 6);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Festbier', 'https://images.squarespace-cdn.com/content/v1/5b916d21372b968e2957bdbc/1615274779375-HVZUYHLEUPSQA0KC7K0N/IMG_2749.jpg?format=1000w', 'Brewed with imported German Pilsner, Vienna, and Munich malts, Festbier’s clean and moderately strong malty flavor was developed entirely from a traditional double decoction process and natural carbonation, resulting in an authentic German-inspired celebratory lager.', 'Lager', '5.8%', 6);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Coastal Love', 'https://craftpeak-cooler-images.imgix.net/wicked-weed-brewing/Coastal_Web-1.png?auto=compress%2Cformat&ixlib=php-1.2.1&s=6833a54003736a4938d144a750aad0fa', 'The second beer to hit distribution in our Beers that Build series, a portion of the proceeds for this juicy IPA are donated to hurricane relief efforts in the Southeast.', 'Hazy IPA', '6.3%', 7);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Astronomical', 'https://craftpeak-cooler-images.imgix.net/wicked-weed-brewing/HazyAstronomical.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&s=6c2b1a70155183098ebc8a33dc1c885f', 'A big bang of brightness gives birth to an entirely new flavor universe. Layers of Calypso complexity streak across the night sky. This is Astronomical, an IPA that screams from the cosmos into the future.', 'Hazy IPA', '7.7%', 7);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Freak of Nature', 'https://craftpeak-cooler-images.imgix.net/wicked-weed-brewing/Freak_Web.png?auto=compress%2Cformat&ixlib=php-1.2.1&s=3c7203da8aeabb6859c2f5647986a59d', ' A delicately crafted, and crushable ale designed for fresh and immediate consumption', 'Double IPA', '8.5%', 7);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Fresh pressed', 'https://craftpeak-cooler-images.imgix.net/wicked-weed-brewing/FreshPressedSizeforWeb.png?auto=compress%2Cformat&ixlib=php-1.2.1&s=4f4b646ac9ec4acb25e7f00221e7fb3a', 'Fresh pressed is a medium-bodied wheat ale that is hazy straw colored in nature. It is beautifully balanced with juicy and tropical fruit flavors. It’s brewed with mango, pineapple, and guava', 'Wheat Ale', '5.2%', 7);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Appalachia', 'https://craftpeak-cooler-images.imgix.net/wicked-weed-brewing/AppalachiaSizedforWeb.png?auto=compress%2Cformat&ixlib=php-1.2.1&s=1a9899c275c9e89b6defda106adcd743', 'This easy-drinking session IPA boasts huge hop flavor and aroma from Amarillo, Citra, Mosaic, and Motueka hops, with low bitterness and low ABV', 'IPA', '4.7%', 7);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('AMULET', 'https://images.squarespace-cdn.com/content/v1/55dbd518e4b054fd5fb51449/1646771173170-QPYIJG95EST08TQK0SM7/Product_Page_Anniversary_Amulet.jpg?format=2500w', 'Sour DIPA Anniversary edition of the classic brewed with wheat & oat, milk sugar, Citra & Azacca hops and an incredible amount of blueberry & hibiscus', 'DIPA', '8%', 8);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('THE TERRITORY', 'https://images.squarespace-cdn.com/content/v1/55dbd518e4b054fd5fb51449/1646147822870-BLT9FON1ICEYUEZ347QC/Product_Page_The_Territory.jpg?format=2500w', ' Sour IPA with wheat & oat, milk sugar, rhubarb, lemon & elderberry; hopped w/ Mosaic & Azacca', 'IPA', '7%', 8);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('EVERYDAY SPIRITS', 'https://images.squarespace-cdn.com/content/v1/55dbd518e4b054fd5fb51449/1644940859890-B0I006Q0WS4K2M130RKY/Product_Page_Everyday_Spirits_I.jpg?format=2500w', ' Sour DIPA w/ raw wheat, flaked & malted oat, milk sugar, strawberry, peach & vanilla; hopped w/ Citra, Strata & Galaxy', 'DIPA', '8%', 8);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('GOOD OLD NEON', 'https://images.squarespace-cdn.com/content/v1/55dbd518e4b054fd5fb51449/1644428109733-LDMWKU3PY4U8KZEAQC4G/Product_Page_Good_Old_Neon.jpg?format=2500w', 'Sour Farmhouse IPA hopped with Citra & Azacca.', 'IPA', '6%', 8);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('ULTRASPHERE','https://images.squarespace-cdn.com/content/v1/55dbd518e4b054fd5fb51449/1646771248131-50D7DWH9G1VO0G1MQ6BC/Product_Page_Anniversary_Ultrasphere.jpg?format=2500w', 'Sour DIPA Anniversary edition of the classic brewed with wheat & oat, milk sugar, Citra & Azacca hops and an incredible amount of raspberry & vanilla','DIPA', '8%', 8);



INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Double Shot', 'https://assets.cardfree.com/5uNU2EJo8o/menu-item-images/menu-item-image-itemDetails-bGoG0UQH1mlX.jpg', 'Pouring like chocolate syrup in the glass, it carries flavors and aromas of white marshmallow, chocolate candy, and caramel with a smooth and pleasing texture', 'Stout', '8%', 9);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('King Julius', 'https://assets.cardfree.com/5uNU2EJo8o/menu-item-images/menu-item-image-itemDetails-2Sksk9joRJMI.jpg', 'Its vivid citrus aromas give way to flavors of orange creamsicle, mango smoothie, and a bounty of fresh tropical fruit', 'Double IPA', '8.2%', 9);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('The Reverend', 'https://assets.cardfree.com/5uNU2EJo8o/menu-item-images/menu-item-image-itemDetails-cLiHGVTZqtHj.jpg', 'Pouring a jet black color in the glass with an attractive off-white head, it carries notes of silky smooth dark chocolate, brown sugar, and roasted malts balanced by an appropriate bitterness', 'Oatmeal Robust Porte', '7.2%', 9);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('Doubleganger', 'https://assets.cardfree.com/5uNU2EJo8o/menu-item-images/menu-item-image-itemDetails-ZseeMlvPP5eO.jpg', 'The mouthfeel is viscous and coating with flavors of overripe mango, dank citrus, and rich tropical fruit balanced by a sharp, pleasant finish', 'Double IPA', '8.2%', 9);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES (' Idle Mind', 'https://assets.cardfree.com/5uNU2EJo8o/menu-item-images/menu-item-image-itemDetails-do0hwSquH8rT.jpg', 'Pouring a golden amber color in the glass, it carries notes of caramel, biscuit, and honey sweetness balanced by sturdy noble hops', 'Vienna Lager', '5%', 9);


INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('SPARKLE WOLF', 'http://www.moderntimesbeer.com/sites/default/files/beer/SparkleWolf-Mockup.png', 'This magical marriage of complexity and crushability is a West Coast bouquet of bright tropical fruit and berry flavors, accented by lovely aromas of pineapple, pear, watermelon, and stone fruit.', 'IPA', '6.7%', 10);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('SHARK SADDLE', 'http://www.moderntimesbeer.com/sites/default/files/beer/SharkSaddle-Mockup.jpg', 'This stunningly delicious hazy IPA features an abundance of El Dorado, Cashmere, Centennial, and Sultana hops, yielding a profile of bright, assertive pineapple, melon, and lemon lime that’s both complex and incredibly refreshing', 'Hazy IPA', '6.20%', 10);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('TELEPORTATION SWEATER', 'http://www.moderntimesbeer.com/sites/default/files/beer/TeleportationSweater-Mockup.jpg', 'Passion fruit and tangerine are abundant in this stellar hazy hop bomb', 'Hazy India Pale Ale', '6.50%', 10);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('ORDERVILLE', 'http://www.moderntimesbeer.com/sites/default/files/beer/orderville_0.jpg', 'Orderville is an aggressive, fragrant IPA that blends the fruit-forward character of Mosaic hops with resinous stickiness from a mélange of dank hops', 'IPA', '7.20%', 10);
INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES ('DINGO MAGIC', 'http://www.moderntimesbeer.com/sites/default/files/beer/DingoMagic_Front.jpg', 'Delightful barrage of bright citrus, guava, peach, and sundry tropical radness, all coming together to form a liquid palanquin upon which to gently deliver your tastebuds into the loving arms of the flavor gods', 'Hazy IPA', '6.20%', 10);

INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (1, 1, 1, 'Tastes like water mixed with more water with a water chaser');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (2, 1, 4, 'Excellent Brew, hopefully they keep making this!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (3, 1, 5, 'This is my new favorite');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (4, 1, 3, 'Mediocre beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (5, 1, 5, 'Its on fire!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (6, 1, 5, 'This is one of the most unique beers I have had, it tastes great too');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (7, 1, 2, 'Not my style');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (8, 1, 5, 'I like it a lot');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (9, 1, 3, 'It was not the worst, but definitely not the best');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (10, 1, 5, 'Tastes like water mixed with more water with a water chaser');

INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (11, 1, 5, 'Tastes like water mixed with more water with a water chaser');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (12, 1, 4, 'Excellent Brew, hopefully they keep making this!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (13, 1, 5, 'This is my new favorite');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (14, 1, 3, 'Mediocre beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (15, 1, 5, 'Its on fire!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (16, 1, 5, 'This is one of the most unique beers I have had, it tastes great too');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (17, 1, 2, 'Not my style');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (18, 1, 3, 'I like it a lot');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (19, 1, 5, 'It was not the worst, but definitely not the best');

INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (20, 1, 5, 'Tastes like water mixed with more water with a water chaser');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (21, 1, 4, 'Excellent Brew, hopefully they keep making this!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (22, 1, 5, 'This is my new favorite');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (23, 1, 3, 'Mediocre beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (24, 1, 5, 'Its on fire!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (25, 1, 5, 'This is one of the most unique beers I have had, it tastes great too');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (26, 1, 2, 'Not my style');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (27, 1, 5, 'I like it a lot');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (28, 1, 3, 'It was not the worst, but definitely not the best');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (29, 1, 3, 'Okay-ish beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (30, 1, 1, 'Tastes like water mixed with more water with a water chaser');


INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (31, 1, 5, 'Excellent Brew, hopefully they keep making this!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (32, 1, 5, 'This is my new favorite');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (33, 1, 3, 'Mediocre beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (34, 1, 5, 'Its on fire!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (35, 1, 3, 'Not my style');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (36, 1, 5, 'This is one of the most unique beers I have had, it tastes great too');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (37, 1, 5, 'Love the quality of beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (38, 1, 4, 'I like it a lot');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (39, 1, 3, 'It was not the worst, but definitely not the best');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (40, 1, 2, 'Okay-ish beer');

INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (41, 1, 5, 'Excellent Brew, hopefully they keep making this!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (42, 1, 5, 'This is my new favorite');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (43, 1, 3, 'Mediocre beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (44, 1, 5, 'Its on fire!');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (45, 1, 2, 'Not my style');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (46, 1, 5, 'Love the quality of beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (47, 1, 5, 'I like it a lot');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (48, 1, 3, 'It was not the worst, but definitely not the best');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (49, 1, 3, 'Okay-ish beer');
INSERT INTO reviews (beer_id, user_id, rating, review) VALUES (50, 1, 1, 'This beer sucks');


COMMIT TRANSACTION;
