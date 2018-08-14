order_style_color_info.md
### 订单状态修改日志

1. id
2. name	
3. designer_id	
4. style_id		
5. style_code		款式编号			
6. color						
7. materials		材质成分		
8. trade_price	批发价	
9. retail_price			零售价	
10. order_id		
11. color_id	


### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id          | bigint(20)    | NO   | PRI |     |       |
| name        | varchar(50)   | YES  |     |     |       |
| designer_id | bigint(20)    | YES  |     |     |       |
| style_id    | int(11)       | YES  |     |     |       |
| style_code  | varchar(50)   | YES  |     |     |       |
| color       | varchar (500) | YES  |     |     |       |
| materials   | varchar(200)  | YES  |     |     |       |
| trade_price | decimal(7)    | YES  |     |     |       |
| retail_price | decimal(7))  | YES  |     |     |       |
| order_id     | bigint(20)   | YES  |     |     |       |
| color_id     | bigint(20))  | YES  |     |     |       |
+-------------+---------------+------+-----+---------+-------+
```