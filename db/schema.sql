DROP DATABASE IF EXISTS whats_cooking_db;

CREATE DATABASE whats_cooking_db;

USE whats_cooking_db;

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