CREATE OR ALTER PROCEDURE searchProduct(@prodname Varchar(255))
AS 
BEGIN 
SELECT * FROM product WHERE prodname = @prodname
END