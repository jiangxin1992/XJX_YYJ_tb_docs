order_style_info.md
### 订单款式信息

1. id
2. designer_id		设计师id	
3. series_id	系列id	
4. name	 款式名称			
5. category	 款式类别			
6. style_code	自填款式号码		
7. region	 地理区域，如 中国杭州		
8. description	款式备注		
9. order_amount_min		最小订货量	
10. materials		材料说明
11. trade_price			批发价	
12. retail_price			零售价
13. size_cat_name		所用尺码类别名称（可自定义）	
14. album_img			封面图片	
15. note	
16. cur_type	0：人民币 1：欧元 2：英镑 3：美元	
17. create_id	
18. modify_id	
19. create_time		
20. modify_time		
21. status	0， 正常，1，删除	
22. order_id	
23. date_range_id	每款起订量

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id  | bigint(20)   | NO   | PRI | NULL    |       |
| designer_id | int(11) | YES  |     | NULL    |       |
| series_id   | bigint(20)   | YES   |    | NULL    |       |
| name        | varchar(100)   | YES   |    | NULL    |       |
| category    | varchar(100) | YES   |    | NULL    |       |
| style_code  | varchar(50) | YES  |     | NULL    |       |
| region        | varchar(50) | YES  |     | NULL    |     |
| description    | varchar(1000) | YES  |     | NULL    |       |
| order_amount_min  | int (11) | YES  |     | 0    |       |
| materials      | varchar(500)  | YES  |     | 0    |       |
| trade_price    | float | YES  |     | 0    |       |
| retail_price   | float | YES  |     | NULL    |       |
| size_cat_name  |  varchar (100)| YES  |     | NULL    |       |
| album_img   | varchar(80)   | YES   |    | NULL    |       |
| note        | varchar(2000)| YES  |     | NULL    |       |
| cur_type    | int(2)   | YES   |    | NULL    |       |
| create_id   | int(11)   | YES   |    | NULL    |       |
| modify_id   | int(11)   | YES   |    | NULL    |       |
| create_time | timestamp | YES  |     | NULL    |       |
| modify_time | timestamp | YES  |     | NULL    |     |
| status      | int(2) | YES  |     | NULL    |       |
| order_id    | bigint (11) | NO  |     | 0    |       |
| date_range_id | int (11) | YES  |     | 0    |       |
+-------------+---------------+------+-----+---------+-------+
```