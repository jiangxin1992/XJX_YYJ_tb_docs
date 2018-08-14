order_payment_node.md
#### 订单查询记录
#### 注释
1. id 
2. order_code 订单编号
3. owner_role 该条记录归属者的身份
4. percent 百分比
5. amount 价格（单位为元）
6. note 备注      
7. pay_status 0:未支付 1:支付成功 2:支付失败   
8. out_trade_no 该条记录创建者的用户id    
9. create_id 该条记录创建者的用户id   
10. create_time 创建时间    
11. modify_time 更新时间   
12. pay_type 支付类型 

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id  | bigint(20)   | NO   | PRI |     |       |
| order_code | varchar(50) | NO  |     |     |       |
| owner_role | int(11) | NO  |     |     |       |
| percent   | bigint(20)   | NO   |   |     |       |
| amount   | decimal(10)   | NO   |   |     |       |
| note     | varchar（1000） | YES   |   |     |       |
| pay_type | int(2) | NO  |     |     |       |
| pay_status | int(2) | YES  |     |     |       |
| out_trade_no  | varchar(60) | NO  |     |     |     |
| create_id    | int（11） | NO  |     |     |       |
| create_time   | timestamp  | NO   |   |     |       |
| modify_time | timestamp  | NO   |   |     |       |
+-------------+---------------+------+-----+---------+-------+
```