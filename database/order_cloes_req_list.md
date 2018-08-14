order_cloes_req_list.md


订单关闭请求列表

#### 注释

1. order_code 订单编号
2. user_type 用户类型	
3. last_trans_status 发起关闭订单请求之前的状态	
4. create_time  记录创建时间


### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| order_code| varchar(50) | NO  |     | NULL    |       |
| append_order_code | int(11) | NO  |     | NULL    |       |
| last_trans_status       | int (11)| NO  |     | NULL    |     |
| create_time       | timestamp | NO  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
```
