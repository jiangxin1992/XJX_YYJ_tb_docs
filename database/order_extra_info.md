order_extra_info.md
#####订单的额外信息

### 注释
1. create_type 创建用户的类型
2. is_closed_by_buyer 定义是否是被买家所关闭
3. is_closed_by_designer 定义是否是被设计师所关闭
4. is_address_touched_by_buyer 买家方面是否已修改过订单地址 
5. order_code 订单
6. close_request_from_usr_type 交易关闭请求来自哪一方
7. close_request_time 交易关闭请求发生的时间
8. is_agree_close_request 对方是否同意关闭请求
9. is_auto_closed 交易是否为自动关闭
10. designer_close_time 设计师方面交易关闭的时间
11. buyer_close_time 买手方面关闭交易的时间 
12. is_auto_receive 是否为自动收货
13. receive_time 收货时间

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| order_code  | varchar(50)   | NO   | PRI | NULL    |       |
| create_type | int(11) | YES  |     | NULL    |       |
| is_closed_by_buyer   | tinyint(1)   | YES   |   | NULL    |       |
| is_closed_by_designer   | tinyint(1)   | YES   |   | NULL    |       |
| is_address_touched_by_buyer | tinyint(1)   | YES   |    | NULL    |       |
| close_request_from_usr_type | int(11) | YES  |     | NULL    |       |
| close_request_time       | timestamp | YES  |     | NULL    |     |
| is_agree_close_request    | tinyint(1) | YES  |     | NULL    |       |
| is_auto_closed     | tinyint (1) | YES  |     | 0    |       |
| designer_close_time      | timestamp (100) | YES  |     | 0    |       |
| buyer_close_time        | timestamp (45) | YES  |     | 0    |       |
| is_auto_receive       | tinyint (1) | YES  |     | NULL    |       |
| receive_time       | timestamp | NO  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+













