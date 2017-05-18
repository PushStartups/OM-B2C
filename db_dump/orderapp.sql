-- phpMyAdmin SQL Dump
-- version 4.0.10.19
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 18, 2017 at 08:30 AM
-- Server version: 5.5.54
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `orderapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE IF NOT EXISTS `restaurants` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `name_en` varchar(255) NOT NULL,
  `name_he` varchar(255) NOT NULL,
  `coming_soon` int(11) DEFAULT '0',
  `contact` varchar(255) NOT NULL,
  `min_amount` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `hide` int(11) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `description_en` text NOT NULL,
  `description_he` text NOT NULL,
  `address_en` varchar(255) NOT NULL,
  `address_he` varchar(255) NOT NULL,
  `hechsher_en` varchar(255) NOT NULL,
  `hechsher_he` varchar(255) NOT NULL,
  `sort` int(11) DEFAULT '0',
  `pickup_hide` smallint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=100004 ;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name_en`, `name_he`, `coming_soon`, `contact`, `min_amount`, `city_id`, `hide`, `logo`, `description_en`, `description_he`, `address_en`, `address_he`, `hechsher_en`, `hechsher_he`, `sort`, `pickup_hide`) VALUES
(1, 'Angus', 'אנגוס', 0, '97225609533', 50, 1, 0, '/m/en/img/angos_logo.png', 'Angus is an entrecote bar located in the heart of Bet Shemesh. \nWe have a large selection of fresh, excellent quality chicken and meat dishes. Choose from: chicken tortilla, chicken sandwiches, entrecote sandwiches, duck breast sandwiches, decadent salads, a variety of side dishes and more. That''s not all - try our delicious business options!', 'מסעדת אנגוס אנטריקוט בר הכשרה בבית-שמש ידועה בתפריט העשיר והמפתה שלה, הכולל מבחר נתחי בשר ועוף טריים ואיכותיים. לבחירתכם: טורטייה במילוי פרגית ועוף, כריכים מעולים עם שלל מילויים (אנטריקוט, חזה אווז ופרגית), סלטים מפנקים, מגוון תוספות ועוד. זה לא הכול – נסו את העסקיות המשתלמות של אנגוס!', 'Yitzhak Rabin Road 5, Beit Shemesh', 'דרך יצחק רבין 5,בית שמש', 'Rabbanut Bet Shemesh', 'רבנות בית שמש', 2, 0),
(2, 'Meshulashim', 'פיצה משולשים', 0, '97225609532', 50, 1, 0, '/m/en/img/meshulashim_logo.png', 'The best pizza in Bet Shemesh. We only use fresh products in our classic dishes. It''s the type of place Bet Shemesh has been yearning for. Try one of the creative ones such as our spicy pizza or go classic with our margarita pizza. Either way, you gotta get a pizza here!', 'הפיצריה כשרה ומגישה מבחר של מנות כגון פיצות, פסטות ברטבים עשירים, סלטים מירקות טריים הנחתכים במקום, בורקסים בטעמים וכן גם טוסטים. ניתן להזמין את הפיצות הטעימות של משולשים גם ללא גלוטן.', '\nSderot Yigal Allon 6, Beit Shemesh', 'שד'' יגאל אלון 6, קניון שער העיר, בית שמש', 'Mehadrin Rav Landau', 'כשר למהדרין הרב לנדא ', 3, 0),
(3, 'Bandora', 'בנדורה', 0, '972772200051', 50, 1, 0, '/m/en/img/bandora_logo.png', 'Bandora is known for its high-quality meats. Our traditional charcoal grill gives the shawarma a unique flavor and aroma; flavors reminiscent of homecooked meals made in distant villages in Turkey, Jordan, Syria and Egypt.', 'בנדורה היא שילוב מנצח של בשר שווארמה איכותי, אשר שוכב על גחלים וניצלה בצורה מסורתית, המעניק לבשר השווארמה טעמים וארומה ייחודיים, טעמים המגיעים אלנו מהכפרים הרחוקים של תורכיה, ירדן, סוריה ומצרים.', 'Sderot Yigal Allon 6, Canion Shaarei Ha''Ir, Beit Shemesh', 'שד'' יגאל אלון 6, קניון שער העיר, בית שמש', 'Badatz Beit Yosef', 'בד"ץ בית יוסף', 1, 0),
(4, 'Roza', 'רוזה', 0, '97225609527', 50, 1, 0, '/m/en/img/roza_logo.png', 'Restaurant serving you a meat menu that includes sandwiches, different types of meat, salads, pastas, burgers, children''s meals & more', 'מסעדה המגיש לכם מנות בשריות אשר כוללות סנדוויצ''ים  ,סוגים שונים של בשרים, סלטים , פסטות, המבורגרים , ארוחות ילדים ועוד', 'Canion Big Fashion Sderot Yigal Allon 3,  Beit Shemesh', 'קניון ביג פאשן, יגאל אלון 3', 'Mehadrin Harav Mutzafi', ' בד"ץ הרב מוצפי', 4, 0),
(5, 'Japan Japan', 'ג''אפן ג''אפן', 0, '97225609531', 50, 1, 0, '/m/en/img/japan_logo.png', 'JapanJapan serves Pan-Asian style food, specifically dishes from Japan, China and Thailand, with influences of Eastern Asian cuisine. JapanJapan carries a varied menu where you can enjoy over 80 dishes. You can choose from 15 types each of meat and chicken dishes, not to mention a varied selection of noodles and a huge sushi menu.', 'המנות של ג’אפן ג’אפן הן בסגנון פאן-אסייתי. הקו הקולינרי המוביל של הרשת הוא יפן-סין-תאילנד. אך עם זאת, תוכלו למצוא בתפריט גם השפעות ממדינות נוספות במזרח אסיה. לרשת ג’אפן ג’אפן תפריט מגוון בו תוכלו להינות מכ-80 מנות שונות. תוכלו לבחור מבין כ-15 סוגי מנות בשרים וכ-15 סוגי מנות עוף. להנאתכם, הרשת מציעה גם מבחר מנות נודלס ותפריט סושי עם מבחר עצום.', 'Sderot Yigal Allon 3,  Beit Shemesh', 'קניון ביג פאשן, יגאל אלון 3', 'Mehadrin Beit Yosef', 'בד"ץ בית יוסף', 5, 0),
(6, 'OSHI OSHI', 'אושי אושי', 0, '972772201290', 70, 2, 0, '/m/en/img/oshi_logo.jpg', 'OSHI OSHI prides itself in its huge selection of high quality and creative sushi.  Along with its extensive sushi menu, the restaurant offers a large range of starters, soups and a selection of delicious stir-fries.  All of these high quality dishes are provided speedily and at competitive prices. ', 'אושי אושי מתמחה בהכנת סושי איכותי, אותנטי, מגוון ויצירתי. מטרת הרשת היא להביא לקהל הרחב את איכות מוצרינו, במקצועיות, בזריזות ובמחיר השווה לכל נפש. הרשת פזורה ברחבי הארץ בקניונים ובסביבתם לנוחות לקוחותינו. הרשת כמו כן גם מבצעת שירות משלוחים מסניפיה.', 'Lev Reut Commercial Center, Reut', ' מרכז מסחרי לב <br> רעות', 'Badatz Beit Yosef', 'כשר מהדרין בד''''ץ בית יוסף', 1, 0),
(7, 'Greg Cafe', 'קפה גרג', 0, '97225609534', 50, 1, 0, '/m/en/img/greg_logo.jpg', 'Greg Cafe, located in Big Fashion mall, has made a name for itself as THE place for high quality dairy food and excellent coffee.  With a very extensive food and drinks menu, Greg caters for all tastes. The cafe prides itself in offering a large vegan menu, full of healthy, tasty options.  There are also different fish and pasta dishes, along with breakfasts, sandwiches and the most decadent salads you''ll ever have. Their takeaway service is as top notch as their eat in experience; you won''t be disappointed. ', 'קפה גרג יצר לעצמו מוניטין בתור בית קפה המגיש אוכל חלבי איכותי וקפה מצויין. לקפה גרג תפריט עשיר מאוד שבמרכזו ארוחת בוקר טעימה, עשירה ומפנקת. הרשת לא קופאת על שמריה לרגע, ומקפידה לחדש, להתחדש ולרגש את קהל לקוחותיה ע"י השקת תפריט חדש, מגוון ואקלקטי מדי שנה, המשלב ארוחות מכל העולם וממטבחים מגוונים ביניהם מטבח איטלקי, אסייתי, אמריקאי, בלקני, שוויצרי, מקסיקני, ספרדי וכמובן - ישראלי. כמו כן, בית הקפה מציע מנות טבעוניות בריאות וטעימות. ', 'Big Fashion Mall, Yigal Alon 1, Beit Shemesh', 'קניון ביג פאשן, יגאל אלון 1, בית שמש', 'Badatz Beit Yosef', 'בדץ בית יוסף', 6, 0),
(8, 'Grill 443', 'גריל 443', 0, '97225609535', 50, 2, 0, '/m/en/img/grill443_logo.png', 'People come from far and wide to eat at the charcoal grilled, expertly chosen meats in Grill 443.  Now you can enjoy their amazing quality at home. There is a large selection of options, including two budget-friendly family meals.  Choose from an abundance of home style dishes, a dozen types of salad, accompanied by laffa straight from the taboun. ', '"""מסעדה מקומית אהובה עם בשרים ושיפודים נבחרים על גריל הפחמים, המדהימים בטעמם האיכותי.\r\n\r\nבצד תוכלו להזמין כמה סוגי סלטים טריים, חומוס הבית עם גרגירים חמים ונעימים לחיך, וקבב הבית הידוע בטעמו.\r\n\r\nבמקום שפע מאכלים ביתיים, לאפות היישר מהטבון. \r\n\r\nארוחות עסקיות ניתן להזמין בכל יום ובכל שעות היום, ואוכל מוכן לשבת לקחת הביתה."""', '443 - on road 443, beside the Sonol gas station at Shilat junction', 'צומת שילת (ת. דלק סונול), מודיעין', 'Rabbanut.    Meat is Chalak, chicken is rabbanut mehadrin', 'רבנות.  העוף מהדרין, והבשר חלק', 3, 0),
(9, 'Pizza Cheese', 'פיצה צ׳יז', 0, '', 50, 2, 0, '/m/en/img/pc_logo.png', 'Not just budget-friendly pizzas, pastas and salads from your friendly local pizzeria. With this being Israel, there''s also jachnun and malawach to choose from, in addition to ziva and garlic bread. Delicious!', '\n                                    פיצה מעולה עם כל התוספות, מבחר פסטות וסלטים, שירות נהדר ומחיר כמו שאין בשום מקום. מה עוד צריך?!                                ', 'Marlaz Center, Emek Dotan 66, Modiin', 'מרכז קניות מרלז, עמק דותן 66, מודיעין', 'Badatz Beit Yosef', 'כשר מהדרין בד''''ץ בית יוסף', 2, 0),
(10, 'Crispy Sandwich', 'קריספי סנדוויץ''', 0, '', 50, 2, 0, '/m/en/img/cs_logo.png', 'Beat the crowds at the mall and have your Crispy Sandwich delivered. The fast food place formerly known as 360 degree Schwarma & Friends provides a very reasonably priced menu of baguettes, laffot, plates and salads of your favorite meat dishes. Choose from schwarma, marinated chicken breast, homemade kebabs and a host of other tasty choices. Don''t forget to upgrade your meal to enjoy our yummy sides and drinks!', '"תפריט קריספי במגשית\nהמנות מוגשות עם צ''יפס, באגט/ לאפה, סלטים וממרחים לבחירה. \nסלטים לבחירה: חומוס, חריף, כרוב סגול במיונז, חסה, עבגניות, מלפפון, סלט עגבניות חריף, כרוב לבן, בצל מטוגן, חצילים מטוגנים, זיתים שחורים, פטרוזיליה. \nממרחים לבחירה: טחינה, קטשופ, עמבה, רוטב שום, רוטב אלף האיים, פסטו, ברביקיו, צ''ילי מתוק, צ''ילי חריף, מיונז."', 'Canion Azrieli, Modiin', 'קניון עזריאלי, מודיעין', 'Rabbanut Modiin', 'רבנות מודיעין', 31, 0),
(11, 'Ken LePizza', 'כן לפיצה', 0, '', 50, 2, 1, '/m/en/img/ken_logo.jpg', 'Ken Lepizza is your friendly, local pizzeria, using only high quality ingredients.  The dough is made fresh daily on the premises and only 100% cheese is used, but they are still very competitively priced.  On the menu are the ubiquitous pizzas, along with spaghetti and calzone and because we''re not in Italy, they offer malawach and jachnun and other filling dairy dishes and salads. ', 'כן לפיצה היא פיצריה כשרה למהדרין במודיעין-מכבים-רעות, הנחשבת לאחת הטובות בעיר. הפיצות שלנו עשויות מבצק דק במיוחד הנאפה במקום, ולצד זה גבינה צהובה אמיתית, תוספות עשירות ועוד. אצלנו תולו למצוא גם לחמים, מאפים, סלטים וקינוחים, ההופכים את החוויה הקולינרית למלאה אפילו יותר.  המחירים שלנו נוחים, כאשר באפשרותכם ליהנות ממבצעים משתלמים במיוחד.', 'Kaiser Center, Emek Zevulun 24, Modiin', 'קייזר סנטר, עמק זבולון 24 <br> מודיעין', 'Badatz Beit Yosef', 'כשר מהדרין בד''''ץ בית יוסף', 32, 0),
(12, 'Aroma', 'ארומה', 0, '', 50, 1, 0, '/m/en/img/aroma_logo.png', 'Simply the best coffee in town. Coupled with food freshly prepared as you wait. Sandwiches, salads, breakfasts, pastries. If you don''t like coffee, there''s plent of other drinks, hot and cold, on offer. Now you can have this deliciousness delivered to your home. ', 'פשוט הקפה הטוב ביותר בעיר, יחד עם אוכל מוכן טרי במקום. סנדוויצ''ים, סלטים, ארוחות בוקר, מאפים. אם אתם לא אוהבים קפה, ישנו מגוון רחב של משקאות אחרים, חמים וקרים. כעט תכלו לקבל כל זאת ישירות לביתכם. ', 'Big Center, Yigal Allon 5, Beit Shemesh', '  מרכז ביג, יגאל אלון 5, בית שמש', 'KOSHER MEHADRIN', 'כשר למהדרין', 10, 0),
(13, 'Pinati', 'פינתי', 0, '', 50, 1, 0, '/m/en/img/pinati_logo.png', 'Pinati is where the locals go when they want reasonably priced food, made according to the Mediterranean palate. Their speciality is humous, which can be ordered with a selection of accompaniments. Along with this, you can order their main courses, salads and soups - you won''t be disappointed!', '"החומוס של פינתי הוא שם דבר, אבל פינתי היא לא רק חומוס. \nתוכלו לקפוץ לפינתי ולהזכר במטבח של אמא – ארוחה מבושלת, ממטבח נקי, \nמוגשת לכם במהירות ומתאימה לכל מי שמחפש ארוחה משביעה וכשרה במחיר סביר.\nהאוכל שלנו מוכן מדי יום כבר יותר משלושים שנה. בכל אחד מהסניפים שלנו אנחנו \nמכינים אוכל ממוצרים טריים עבור לקוחותינו.\nלא צריך ללבוש חליפה, ואין צורך לתכנן. אנחנו מחכים לכם כאן, כמו תמיד, \nואכשיו מביאים את האוכל במשלוח אליכם – חם, ביתי, וטעים טעים – האוכל של פינתי."', 'Yigal Allon 24, Northern Industrial Area, Beit Shemesh', 'יגאל אלון 24, אזור תעשייה, בית שמש', 'Badatz Beit Yosef', 'בד''''ץ בית יוסף', 9, 0),
(14, 'Pizzaland', 'פיצה לנד', 0, '97225609526', 50, 1, 0, '/m/en/img/pizzaland_logo.png', 'Pizzaland is your local neighborhood pizzeria, which prides iself on serving only the very best.  With a selection of sizes and toppings, they have the dish to suit all pizza lovers.  What can be better than a slice of piping hot, fresh pizza?', ' הפיצריה הטובה ביותר ברמת בית שמש הגיעה לorderapp!  הזמינו פיצות חמות וטריות - בתאבון!', 'Nachal Katlav, RBS A', 'נחל קטלב 4, רמת בית שמש א', 'Badatz Eida Chareidis', 'בד''''ץ העדה החרדית ירושלים', 8, 0),
(15, '110 Burger', '110 בורגר', 0, '', 75, 1, 0, '/m/en/img/110_burger_logo.png', '110 Burger is new, revolutionary and groundbreaking brand in the fast food industry, the next generation of fast food. With a fast, affordable, quality menu, 110 Burger offers speed, fresh meat and vegetables and vegetarian-friendly menu options. The restaurant uses state-of-the-art, exclusive equipment for fast, precise, simple and clean operation. The roasting method in the new machinery preserves the juiciness of the product, which adheres to the standard of gourmet restaurants.', '110 בורגר הוא מותג חדש, מהפכני ופורץ דרך בענף המזון המהיר, הדור הבא של ה-Fast Food בישראל. 110 בורגר נוסדה במגמה להציב סטנדרטים חדשים בתחום המזון המהיר. מוצר יום-יומי, מהיר, בעל מחיר נגיש, תו איכות מוכח ותפיסה מודרנית חדשנית.110 בורגר מציגה יתרונות ברורים, כמו מהירות, שימוש בבשר בקר טרי ובירקות טריים והתייחסות לצמחוניים בתפריט. המסעדה משתמשת במיכון חדיש ובלעדי לרשת אשר מאפשר תפעול מהיר, מדוייק, פשוט ונקי. שיטת הצלייה במיכון החדש שומרת על עסיסיות המוצר ועל עמידתו בסטדנרט של מסעדות גורמה. ', 'Canion Shaarei Hair, Yigal Allon 6, Beit Shemesh', 'יגאל אלון 6, בית שמש', 'Badatz Beit Yosef', ' בד״צ בית יוסף', 7, 0),
(16, 'Atza Sushi Bar', 'אצה סושי בר', 0, '', 50, 1, 0, '/m/en/img/atza_logo.png', 'Atza serves Pan-Asian style food, with influences of Eastern Asian cuisine and a varied menu where you can enjoy dozens of delicious dishes. You can choose from meat, chicken, fish and tofu dishes, not to mention a huge sushi menu.', 'המנות של אצה הן בסגנון פאן-אסייתי.  אך עם זאת, תוכלו למצוא בתפריט גם השפעות ממדינות נוספות במזרח אסיה. לרשת אצה תפריט מגוון בו תוכלו להינות  ממנות שונות. תוכלו לבחור מבין כסוגי מנות בשרים וסוגי מנות עוף, בקר, דגים וטופו. להנאתכם, הרשת מציעה גם מבחר מנות נודלס ותפריט סושי עם מבחר עצום.', 'Big Center, Yigal Allon 1, Beit Shemesh', '  מרכז ביג, יגאל אלון 1, בית שמש', 'Badatz Beit Yosef', ' בד״צ בית יוסף', 11, 1),
(17, 'GRILL BURGER', 'גריל בורגר', 0, '', 50, 1, 0, '/m/en/img/grill_burger_logo.png', 'Grill Burger is rightly the most popular burger restaurant in the Rama, with great food at the best prices. Now you can enjoy their delicious food at home. Choose from a varied menu of burgers and seasoned meats in baguettes, whole wheat rolls or ciabattas with your favorite toppings. Don''t forget to order sides of fries and other extras! For the health conscious, there is a selection of fresh salads with and without meat or chicken. ', 'גריל בורגר, מסעדת המבורגרים הממוקמת בבית שמש, במסעדה תפריט בשרי עשיר. גריל בורגר מסעדה כשרה בהשגחת הרבנות ובהשגחת הרב ראובן. שירות מקצועי, אוכל טרי נקי וטעים!', '2 Nahal Tse''elim Ave, Ramat Beit Shemesh ', 'נחל צאלים 2 רמת בית שמש', 'Badatz Rav Rubin', 'בד"ץ רב רובין', 12, 0),
(18, 'Baguette Hapaamon', 'באגט הפעמון', 0, '02-587-5559', 50, 1, 0, '/m/en/img/baguette.png', 'High quality sausages, amazing hot dogs, amazing omelettes, fried chicken, real schnitzel, Jerusalem mixed grill, classic shakshuka, house patties, excellent chicken breast, tuna, salads and the list goes on.The magic behind the fine sandwiches of Baguette HaPaamon is fresh and varied ingredients. Each sandwich is lovingly prepared according to the customer''s order and you choose the salads and sauces according to your taste.  Along with rich and colorful baguettes, the Baguette HaPaamon restaurant menu includes snacks and salads too. In short, when you order a Baguette HaPaamon meal, you will have a culinary experience (as befits an original Jerusalem kitchen).', 'נקניקים איכותיים, נקניקיות מדהימות, חביתה משגעת, פרגיות מדליקות, שניצל אמיתי, מעורב ירושלמי, שקשוקה קלאסית, קציצות הבית, חזה עוף מעולה, טונה, סלטים והרשימה נמשכת.  הקסם שמאחורי הכריכים המדויקים של באגט הפעמון הוא טריות ומגוון. כל כריך מוכן באהבה בהתאם להזמנת הלקוח ואתם בוחרים את הסלטים והרטבים לפי טעמכם.לצד באגטים עשירים וססגוניים יש למסעדת באגט הפעמון תפריט משלוחים בו תמצאו גם נשנושים וסלטים בכמה שילובים. בקיצור, כשאתם מארגנים ממסעדת באגט הפעמון משלוחים לבית או למשרד צפויה לכם חוויה קולינארית איכותית (כיאה למטבח ירושלמי מקורי).', 'Big Fashion Mall, Yigal Allon 3, Beit Shemesh', 'קניון ביג פאשן, יגאל אלון 3  בית שמש', 'Rabbanut Beit Shemesh, meat has Badatz Beit Yosef certification ', 'רבנות בית שמש , (בשר של בד''''ץ בית יוסף)', 13, 0),
(19, 'Sashimi', 'סשימי בית שמש', 0, '', 50, 1, 0, '/m/en/img/sashimi.png', 'Making sushi is an artform. To create the perfect roll takes patience, skill but most importantly love. Without the love and passion, all you have are the ingredients -Chef Yossi', 'הכנת סושי זוהי אומנות. כדי ליצור את הרול המושלם יש צורך בסובלנות ובכישורים מיוחדים אך החשוב מכל הוא אהבה. ללא תשוקה ואהבה להכנת הרוליים מה שנשאר לך זה רק המצרכיים." -השף יוסי', 'Yitzchak Rabin 19 Bet Shemesh', 'דרך יצחק רבין 19, בית שמש', 'Agudat Yisrael', 'אגודת ישראל', 14, 0),
(20, 'kapao', 'קפאו', 0, '', 50, 1, 0, '/m/en/img/kapao.png', 'The tastiest Thai food with an amazing range of dishes to suit every palate. And the prices are very reasonable!', 'אוכל טעים ביותר. מגוון מנות תאילנדיות מדהימות. טעים ביותר . ומחירים נוחים', 'Canion Shaarei Hair, Yigal Allon 6, Beit Shemesh', 'יגאל אלון 6, בית שמש', 'Badatz Beit Yosef', ' בד״צ בית יוסף', 15, 0),
(21, 'rebar', 'rebar', 0, '', 50, 1, 0, '/m/en/img/rebar.png', '"Rebar''s health principles are:\r\nNatural ingredients, made meticulously \r\nLow fat, low sodium and no food coloring\r\nRich in vitamins and minerals\r\nAdjusted to personal taste\r\nA rich and varied flavors and colors\r\nUnique nutritional supplements in the menu\r\nCombining optimal components\r\nPrepared in a clean and sanitary environment\r\nPreparation processes that preserve the values of the elements\r\nDrinks to suit your body and mind"', '"עקרונות הבריאות של rebar: \r\nחומרי גלם טבעיים, מובחרים ומוקפדים \r\nדל שומן, דל נתרן וללא צבעי מאכל \r\nעשיר בויטמינים ומינרלים \r\nמותאם לטעם אישי \r\nעשיר ומגוון בטעמים וצבעים \r\nתפריט תוספי תזונה ייחודי \r\nשילוב מרכיבים מיטבי \r\nהכנה בסביבה נקייה והגיינית \r\nתהליכי הכנה המשמרים את ערכי המרכיבים \r\nמשקאות המותאמים לצורכי הגוף והנפש"', 'Big Fashion Mall, Yigal Allon 1, Beit Shemesh', 'קניון ביג פאשן, יגאל אלון 1, בית שמש', 'Chatam Sofer ', 'חתם סופר', 16, 0),
(22, 'Pizza Or', 'פיצה אור', 0, '', 50, 1, 0, '/m/en/img/pizza_or.png', 'The pizzeria in the center of town now delivers through OrderApp! The prices are very reasonable and they have everything you need if you''re in the mood for a quick and easy dairy meal.  Not just pizza, but also toasts, filled baguettes, salads and borekas. Bon appetit!', '"פיצה אור בית שמש\r\nאצלנו בפיצה אור תקבלו פיצה איכותית טרייה וטעימה \r\nמחומרים איכותיים ושלל תוספות\r\nניתן להנות גם מבורקס תורכי, טוסטים סלטים ועוד...\r\nאז למה אתם מחכים?"', 'Rechov Hashiva 2, Beit Shemesh', 'רח השבעה 2, בית שמש', 'Rabbanut Beit Shemesh ', 'רבנות בית שמש   ', 22, 0),
(23, 'Schnitzel Jordi', 'שניצל ג''ורדי', 0, '', 50, 1, 0, '/m/en/img/jordi_logo.png', 'One bite of any of our sandwiches will convince you that we aren''t your average schnitzel joint. Anything you want, we got it! You just have to make one simple decision - do you want it in a sandwhich or on a plate?', '"השניצל שלנו מקבל יחס אישי, ואתם מרגישים אותו בבגט שנאפה כאן במקום...\r\nהריח והטעם בשניצל ג''ורדי זה סיפור אהבה בבגט. שניצל ג''ורדי, בול מה שהייתי צריך!\r\nנשאר רק לבחור - בצלחת או בכריך \r\nמחכים לכם..."', '', 'שד'' יגאל אלון 6,בית שמש', 'Badatz Beit Yosef', 'בדץ בית יוסף', 25, 0),
(24, 'Pizza & Falafel', 'פיצה ופלאפל', 1, '', 50, 1, 1, '/m/en/img/p_f.png', 'Pinat HaSova is a Felafel and Pizza place conveniently located in the commercial area of Ramat Beit Shemesh A. They produce delicious, fresh pizza and felafel daily, and offer a wide range of salads.', 'פינת השובע היא מסעדה של פלאפל ושווארמה הממוקמת באיזור המסחרי של רמת בית שמש א''. מכינים פיצות טעימות וטריות ופאלפאל משגע כל יום. כמו כן הם מציעים גם מגוון רחב של סלטים.', '', '', 'Badatz Eida Chareidis', 'בדץ עדה חרידית', 17, 0),
(25, 'Katzefet', 'קצפת', 0, '', 50, 1, 0, '/m/en/img/ktzft.png', 'Indulge your sweet tooth with Katzefet''s amazing desserts. Choose from classic premium ice creams or healthy gourmet frozen yoghurts or sorbets, with real fruit and no sugar. If you''re feeling decadent, then order Belgian waffles or French crepes, washed down with milkshakes, fruit shakes or a selection of hot drinks.', '"גלידריית קצפת מספקת לונה פארק של טעמים!\r\nאצלנו תוכלו להנות ממבחר גדול של גלידות שמנת,\r\nסורבה גורמה, גלידות פרווה וללא סוכר.\r\nאנו מתמחים בהכנת מגוון גלידות יוגורט משובחות\r\nובמבחר טעמים היחודיים לנו.\r\nבנוסף תוכלו להנות משייקים על בסיס פירות או גלידה,\r\nואייסים העשויים מחומרי גלם איכותיים ובמבחר טעמים .\r\nכמו כן ברשת מוגשים קינוחים חמים וופל בלגי, קרפ צרפתי."', 'Canion Shaarei Hair, Yigal Allon 6, Beit Shemesh', 'קניון שער העיר, רח'' יגעל אלון 6, בית שמש', 'Mehadrin, Chatam Sofer, Bnei Brak. All ice cream products are Badatz Eida Charedit', 'מהדרין - חתם סופר, ובהכשר הבד"ץ העדה החרדית על כל מגוון הגלידות החלביות.', 23, 0),
(26, 'Haturki', 'הטורקי', 0, '', 50, 1, 0, '/m/en/img/haturki.png', 'You can judge from the aroma that rises from the pot that the food is going to be delicious. Haturk''s owners and staff are warm and know how to pamper their customers. Sometimes it is the spice that makes a good meal excellent and here, it''s no exception. Well seasoned meats are a house speciality and there''s a good selection of these, along with all the sides and breads that you''d expect from a top-notch grill restaurant . Highly recommended.', 'הריחות המעולים שיעלו מין הסירים לא פחות חשוב מהאוכל הוא מי מעומד מאחוריו. האנשים בטורקי הם חמים וכאלה שיודעים לפנק מכל הלב. ( לפעמים זה התבלין שהופך ארוחה טובה למצוינת) . הזמנות מהטורקי מומלץ בחום.', 'Sonol Gas Station, Eshtaol', 'תחנת דלת סונול, אשתאול', 'Mehadrin Matei Yehuda, with Chalak Meat', 'כשל למהדרין רבנות מטי יהודה', 26, 0),
(27, 'Pizza Shemesh', 'פיצה שמש', 0, '', 50, 1, 0, '/m/en/img/pizza_shemesh.png', 'The cheapest pizza in town! If you''re on a budget but don''t want to compromise on quality ingredients,  then order from Pizza Shemesh.  They''ve made a commitment to bring their customers just that. To prove their point, they offer a family pie that contains 100% Terra Yellow cheese from only 19.90 NIS.  And remember - delicious doesn''t always mean expensive!', '"פיצה שמש בית שמש חרטה על דגלה להביא ללקוחותיה את המחיר הטוב ביותר עבור מגש פיצה ללא התפשרות על איכות החומרים \r\nאנו מציעים מגש משפחתית הכולל 100 אחוז גבינה צהובה של ״טרה״ החל מ19.90 ש״ח בלבד.\r\nותמיד תזכרו - אין יותר טעים יש יותר יקר !"', 'Derech Rabin 15, Beit Shemesh', 'דרל רבין 15, בית שמשמ', 'Badatz Beit Yosef', ' בד״צ בית יוסף', 27, 0),
(28, 'Menfis', 'מנפיס', 1, '', 50, 2, 0, '/m/en/img/menfis.png', '', '', '443 - on road 443, beside the Sonol gas station at Shilat junction', 'צומת שילת (ת. דלק סונול), מודיעין', 'Hamoatza Ezorit Chevel Modiin', 'המועצה אזורית חבל מודיעין', 33, 0),
(29, 'Bagel Cafe ', 'בייגל קפה', 1, '', 50, 2, 0, '/m/en/img/begal_cafe.png', '', '', '', '', 'Mehadrin Rabbanut Modiin', 'מהדרין רבנות מודיעין', 34, 0),
(30, 'Cafe In', 'קפה אין', 0, '', 50, 2, 0, '/m/en/img/cafe_in.png', '', '', 'Merkaz Lev Ha''Emek, Emek HaEla 80, Modiin', 'מרכז לב העמק, עמק האלה 80, מודיעין', 'Mehadrin Rabbanut Modiin', 'מהדרין רבנות מודיעין', 35, 0),
(32, 'Greg Cafe', 'קפה גרג', 0, '97225609534', 50, 2, 0, '/m/en/img/greg_logo.jpg', 'Greg Cafe is the place for high quality dairy food and excellent coffee.  With a very extensive food and drinks menu, Greg caters for all tastes. The cafe prides itself in offering a large vegan menu, full of healthy, tasty options.  There are also different fish and pasta dishes, along with breakfasts, sandwiches and the most decadent salads you''ll ever have. Their takeaway service is as top notch as their eat in experience; you won''t be disappointed. ', 'התפריט עשיר ומגוון הכולל: ארוחות בוקר, פסטות, פיצות, דגים, טוסטים, סלטים ועוד.', 'Hamelachot 5, Yishpro Center, Modiin', 'שד'' המלאכות 5, מרכז ישפרו, מודיעין', 'Badatz Beit Yosef', 'בדץ בית יוסף', 40, 0),
(33, 'Kampai Street Wok', 'קמפאי סטריט ווק', 0, '', 50, 2, 0, '/m/en/img/kampai.png', '"Kampai (""Cheers"" in Japanese) has set a new standard in Pan Asian cuisine. With a wide menu including sushi, wok stirfries, Asian grill and more.\r\nThe menu combines food with culinary fusion, with no flavor enhancers or preservatives. Kampai Street Wok prides itself on its accurate balance of flavors, colors and health."', '"קמפאי (""לחיים"" ביפנית) הציבה סטנדרט חדש של המטבח פאן אסייתי תוס. תפריט רחב רחב הכולל סושי, מנותק ווק, גריל אסייתי ועוד.\r\nתפריט של קמפאי סטריט ווקל משלב אוכל עם פיוז''ן קולינרי'', ללא מחזקי טעם או חומרים משמרים.\r\nקמפאי סטריט ווק מפיץ את בשורת המטבח עם איזון מדויק של טעמים, צבעים ובריאות.\r\n"', 'Hamelachot 22, Yishpro Center, Modiin', 'Hamelachot 22, Yishpro Center, Modiin', 'Rabbanut Modiin', 'רבנות מודיעין', 37, 0),
(34, 'Haburganim - Buchman', 'הבורגנים', 1, '', 50, 2, 0, '/m/en/img/haburganim.png', 'Haburganim is the most special kosher burger place. Enjoy a unique culinary experience, including hand-made small burgers made with special care in a range of flavors that will make you want to try each one and keep on eating!  Our fries are made with a secret recipe and we have a host of other finger-licking dishes, all available for home delivery or pick up.', '"הבורגנים – מסעדת המבורגרים כשרה הכי מיוחדת שאי פעם תפגשו!\r\nתוכלו ליהנות מחוויה קולינארית שונה וייחודית, הכוללת המבורגרים קטנים הנעשים בעבודת יד ובהשקעה רבה ומגיעים במגוון טעמים שפשוט יתחשק לכם לטעום את כולם ולהמשיך לנגוס בהם עוד ועוד... צ''יפס בטעם סודי וממכר ללקק את האצבעות... ועוד שפע של מנות ייחודיות אחרות. !\r\n את כל המנות הנפלאות תוכלו לקבל עד לביתכם באמצעות שירות המשלוחים"', 'Moriah Center, Leah Imenu 2, Modiin', 'מרכז מוריה, לאה אימנו 2, מודיעין', 'Rabbanut Modiin', 'רבנות מודיעין', 38, 0),
(35, 'Mike Burger', 'מייק בורגר', 1, '', 50, 2, 0, '/m/en/img/mike_burger.png', '"Not just burgers...\r\nWe also have chicken breast, schwarma, chicken, kebabs and entrecote carpaccio. So if you wake up in the morning with a strong desire for a dish that is not a hamburger, there is no doubt that you will find something good to eat here. Our planchas are always ready to receive the finest meats in their new home - a hot baguette, a rolled tortilla, or a plate full of goodness. And like any self-respecting menu, there are decadent and filling desserts."', '"לא רק המבורגר\r\nיש לנו גם חזה עוף, שווארמה, פרגית, קבב וקרפצ’יו אנטריקוט. כך שאם קמתם בבוקר עם חשק עז למנה שהיא לא המבורגר, אין ספק שתמצאו אצלנו משהו טוב לאכול. הפלנצ’ה שלנו מוכנה תמיד לקבלת הבשרים המשובחים בביתם החדש – בגט חם, טורטייה מגולגלת או צלחת מלאה כל טוב. וכמו בכל תפריט שמכבד את עצמו, ישנם קינוחים שיסגרו לכם את הפינה סופית.."', 'Modiin Center, Tze''elon 21, Modiin', 'צאלון 21 , מודיעין סנטר', 'Mehadrin Beit Yosef', 'מהדרין בית יוסף', 39, 0),
(36, 'Que Riko', 'קה-ריקו', 1, '', 50, 2, 0, '/m/en/img/que_riko.png', 'At Pizzeria Que Rico, we have a wide range of products which can be delivered to your home from pizzas, pastas, salads, salads, pastries to our sweet corner where you''ll find Belgian waffles and Dutch pancakes with a range of delicious sauces, high quality ice cream, milkshakes and refreshing fruit shakes.', '"ב”פיצה קה-ריקו” תמצאו מגוון רחב של מוצרים במשלוח עד אליכם הביתה או במקום, החל מפיצות, פסטות, סלטים, מלווחים, זיוות ועד לפינת המתוקים שלנו ששם תמצאו וופל בלגי ופנקייק הולנדי עם מגוון של רטבים טעימים, גלידות איכותיות, מילקשייק ופרישייק מרעננים\r\n"', 'Merzaz Lev HaEmek, Emek HaElah 80, Modiin', 'עמק האלה 80, מרכז "לב העמק", מודיעין', 'Mehadrin Badatz Beit Yosef', 'מהדרין בד''''ץ יוסף', 36, 0),
(37, 'SHALOM FELAFEL', 'שלום פלאפל', 0, '544798732', 50, 1, 0, '/m/en/img/shalom-falafel.png', 'When you do something well, you stick to it. Shalom Felafel serves up only the freshest, tastiest felafel and omelettes, which you can supplement with fries and a drink. Simple and easy!', 'שלום פלאפל מגיש רק את הפלאפל הטעים והחביתות הטריים ביותר, שאפשר להוסיף עם צ''יפס ומשקה. פשוט וקל!', 'Shimshon Junction Gas Station, opposite Eshtaol', 'מתחם תחנת דלק שמשון, אשטעול', 'Rabbanut Matei Yehuda', 'מטה יהודה', 37, 0),
(38, 'Allegria', 'אלגריה', 1, '0777503730', 50, 1, 0, '/m/en/img/cs-logo.png', 'Allegria restaurant excels in grilled meats of every type, but they all have something in common: they are fresh and delicious. The chef has created a varied and creative menu of meat and fish which are roasted on an authentic charcoal grill. Every portion comes with house salads, which are freshly prepared daily. ', '"מסעדת אלגריה יש בשרים על האש שמשאירים טעם של עוד. אנו מעניקים את כל הטוב שבעולם – בשרים משובחים, טריים והכי חשוב – טעימים. הכול זאת, לצד מגוון רחב של תוספות וסלטים מושלמים.\r\nשף המסעדה שלנו, מאיר בן הרוש, הצליח ליצור תפריט מגוון ומדהים של שלל מנות בשרים ודגים אשר נצלים על גריל פחמים אותנטי. כל מנה מוגשת ליד סלטי הבית, שמדי יום ביומו מוכנים במקום על ידי צוות הטבחים שלנו.\r\n"', 'Canion Naimi, Derech Rabin 2, Beit Shemesh', 'קניון נעימי, דרך רבין 2, בית שמש', 'Badatz Beit Yosef', 'בד''''ץ בית יוסף', 40, 0),
(39, 'Le''echol Etzel Julie', 'לאכול אצל ג''ולי', 1, '053-755-2019', 50, 1, 0, '/m/en/img/cs-logo.png', 'Genuine Moroccan food, cooked with love by Julie, who is the sister of the famous TV chef, Jackie Azoulai.  Julie cooks from the heart and serves up richly flavored meat, fish and vegetable dishes which are now available for delivery to you.', '"\r\nארוחות צהריים  כל יום החל מ11:30 בבוקר.\r\nאוכל ביתי, מרוקאי.\r\nאוכל מוכן לשבת כל יום שישי החל מ8:30 בבוקר.\r\nכל סוגי הבשרים, עופות תוספות ממולאים, סלטים ביתיים פרנות מרוקאיות ועוד."', 'Derech Rabin 17, Beit Shemesh', 'דרך רבין 17, בית שמש ', 'Mehadrin Machpud', 'מחפוד - מהדרין ', 41, 0),
(40, 'Mesubin', 'מסובין', 1, '991-1778', 50, 1, 0, '/m/en/img/cs-logo.png', 'Deluxe meat restaurant whose specialization is in its quality steaks is now available on Orderapp.  Choose from meat and chicken on skewers, burgers, steaks and the amazing taboon casseroles. All this, with a Rav Rubin Hechsher.', 'מסעדת בשרי דלוקס אשר ההתמחות הוא בסטייקים איכותו זמינה כעת על Orderapp. בחרו מתוך בשר ועוף על שיפודים, המבורגרים, סטייקים ותבשילי טבון מדהימים. כל זה, עם הכשר של רב רובין.', 'Paz Gas Station, Yigal Allon 2, Beit Shemesh', 'תחמת דלת פז, יגאל אלון 2, בית שמש', 'Mehadrin Rav Rubin', 'מהדרין - רב רובין', 42, 0),
(41, 'GANIR', 'גניר', 0, '', 50, 1, 0, '/m/en/img/ganir_logo.png', 'Meat restaurant situated in the Har-Tuv industrial zone and has a family atmosphere. ', 'מסעדת גניר שוכנת באיזור תעשייה הר-טוב. אווירה ביתית ואוכל ביתי מעולה', '2 Hahar, Har Tuv Industrial Zone	', '	2 ההר, אזור תעשייה הר-טוב\n', 'Rabbanut Matei Yehuda', 'רבנות מטה יהודה', 38, 0),
(99999, 'ex', 'ex', 0, '', 0, 1, 1, '', '', '', '', '', '', '', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
