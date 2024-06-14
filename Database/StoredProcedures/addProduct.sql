CREATE OR ALTER PROCEDURE addProduct(
    @id Varchar(255),
    @prodname Varchar(255),
    @proddescription Varchar (255),
    @prodprice INT
)
AS
BEGIN 
INSERT INTO product VALUES(@id,@prodname,@proddescription,@prodprice)
END