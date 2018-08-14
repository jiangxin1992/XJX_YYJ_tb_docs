order_info.md
##### 订单信息

#### 有两个触发器 
1. order_info_after_insert  
2. order_info_AFTER_UPDATE

#### 注释
1. id	此id用作订单不同版本的快照对应
2. order_code 订单号，此号码为订单的唯一标示	
3. share_code 分享码uuid			order_info_after_insert  order_info_AFTER_UPDATE
4. delivery_approach		运送方式		
5. pay_approach		付款方式			
6. occasion		下单场合			
7. order_description 订单备注			
8. buyer_id	买家信息记录id			
9. buyer_name	手店买名称（冗余字段）			
10. designer_id	设计师 id	
11. designer_name	计师设名称（冗余字段）			
12. salesman_id	销售人员id，可以是 desinger id	
13. salesman_name 售销人员名称（冗余字段）			
14. total_price	原总价	
15. final_total_price		折后总价	
16. status	订单状态 废弃的字段	
17. designer_order_status	设计师看到的订单状态,这里的初始状态是 协商中	
18. buyer_order_status 买家看到的订单状态，这里的初始状态是 协商中	
19. report_status 无效字段 1
20. status_description	订单状态文字描述	
21. order_create_time 订单创建时间	
22. create_time	CURRENT_TIMESTAMP	此条记录创建时间	
23. tax_rate		税率	
24. discount	打折	
25. currency_type 币种
26. stock_enabled	

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id  | bigint(20)   | NO   | PRI | NULL    |       |
| order_code | varchar(50) | YES  |     | NULL    |       |
| share_code   | varchar(100)   | YES   |    | NULL    |       |
| delivery_approach   | varchar(500)   | YES   |    | NULL    |       |
| pay_approach | varchar(500) | YES   |    | NULL    |       |
| occasion | varchar(500) | YES  |     | NULL    |       |
| order_description  | varchar(500) | YES  |     | NULL    |     |
| buyer_id    | int(11) | NO  |     | NULL    |       |
| buyer_name     | varchar (100) | YES  |     | 0    |       |
| designer_id      | int(11)  | NO  |     | 0    |       |
| designer_name        | varchar (100) | YES  |     | 0    |       |
| salesman_id       | int (11) | YES  |     | NULL    |       |
| salesman_name       |  varchar (100)| NO  |     | NULL    |       |
| total_price  | double   | NO   |    | NULL    |       |
| final_total_price | double| NO  |     | NULL    |       |
| status   | int(11)   | NO   |    | NULL    |       |
| designer_order_status   | int(11)   | YES   |    | NULL    |       |
| buyer_order_status | int(11)   | YES   |    | NULL    |       |
| report_status | int(11) | YES  |     | NULL    |       |
| status_description  | varchar (100) | YES  |     | NULL    |     |
| order_create_time    | timestamp | YES  |     | NULL    |       |
| create_time     | timestamp (1) | YES  |     | 0    |       |
| tax_rate      | int (11) | YES  |     | 0    |       |
| discount        | int (11) | YES  |     | 0    |       |
| currency_type       | int (2) | YES  |     | NULL    |       |
| stock_enabled       | tinyint（4） | YES  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
```