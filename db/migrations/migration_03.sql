\c hbi_db;

DROP TABLE favlisting;

CREATE TABLE IF NOT EXISTS favlisting (
   UnparsedAddress
  ,CountyOrParish VARCHAR(15)
  ,PostalCode INT(5)
  ,ListAgentFullName VARCHAR(26)
  ,ListAgentPreferredPhone     
  ,ListOfficeName
  ,BedroomsPossible
  ,BathroomsTotalInteger
  ,LivingArea
  ,YearBuilt
  ,media
  ,comments
  ,seenstatus
  ,user_id PRIMARY KEY
);