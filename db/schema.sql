USE burgers_db;

DROP TABLE IF EXISTS `burgers`;

CREATE TABLE burgers(

ID INT NOT NULL AUTO_INCREMENT,
burger_name varchar(50)NOT NULL,
devoured BOOLEAN DEFAULT TRUE,
PRIMARY KEY (id)
);

SELECT*FROM burgers;