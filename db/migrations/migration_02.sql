\c hbi_db;

DROP TABLE zipcodes;

CREATE TABLE IF NOT EXISTS zipcodes(
   zip_code  INTEGER  NOT NULL PRIMARY KEY 
  ,latitude  NUMERIC(10,6)
  ,longitude NUMERIC(11,6)
  ,city      VARCHAR(26) NOT NULL
  ,state     VARCHAR(2) NOT NULL
  ,county    VARCHAR(25)
);