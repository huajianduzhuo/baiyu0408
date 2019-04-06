use baiyu0408;
-- Create the table in the specified schema
CREATE TABLE if NOT exists baiyu0408.words
(
  words_id INT AUTO_INCREMENT PRIMARY KEY, -- primary key column
  wb_name varchar(50) NOT NULL,
  words varchar(255) NOT NULL,
  province varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  computer_id varchar(50) NOT NULL,
  create_time timestamp NOT NULL,
  status_code INT NOT NULL
  -- specify more columns here
);
GO