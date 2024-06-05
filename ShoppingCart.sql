--create database ShoppingCartDb

--create table tblProducts(
--ID int Identity(1,1) Primary Key,
--Name varchar(100),
--Image varchar(100),
--ActualPrice decimal(18,2),
--DiscountedPrice decimal(18,2))


--create table Cart(
--ID int Identity(1,1) Primary Key,
--ProductID int)


--insert into tblProducts values
--('Red shoes', 'd5.jpg', 115.00, 60.00),
--('Watch', 'd1.jpg', 195.00, 95.00),
--('Jeans', 'd8.jpg', 95.00, 40.00),
--('Smartphone', 'd4.jpg', 195.00, 95.00),
--('Shirt', 'd7.jpg', 95.00, 40.00),
--('Sneakers', 'd2.jpg', 65.00, 25.00),
--('Iron', 'd3.jpg', 95.00, 50.00),
--('Sunglasses', 'd6.jpg', 84.00, 36.00)


use ShoppingCartDb

select P.ID, P.Name, P.Image, P.ActualPrice, P.DiscountedPrice from Cart C
INNER JOIN tblProducts P
ON C.ProductID = P.Id;

--delete from Cart where ProductID = 6



select * from tblProducts
select * from Cart

--drop table tblProducts