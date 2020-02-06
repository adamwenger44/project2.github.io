CREATE DATABASE whats_cooking_db;
use whats_cooking_db;

CREATE TABLE fridge(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,

);

CREATE TABLE item (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id INT NOT NULL AUTO_INCREMENT,
  food_name VARCHAR(30) NOT NULL,
  type_id INT NOT NULL,
  PRIMARY KEY (id)
);
