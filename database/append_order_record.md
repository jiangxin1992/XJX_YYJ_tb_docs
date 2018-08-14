append_order_record.md

追单记录信息


### 注释

1. id 主键
2. original_order_code 原始订单的code
3. append_order_code 追加订单的code
4. designer_id 设计师id
5. buyer_id 买手id
6. status 追单的状态 0：预建订单 1：已建订单
7. create_time 创建时间
8. modify_time 修改时间

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id                | int(11)   | NO   | PRI | NULL    |       |
| original_order_code| varchar(50) | NO  |     | NULL    |       |
| append_order_code | varchar(50) | NO  |     | NULL    |       |
| designer_id       | int (11)| NO  |     | NULL    |     |
| buyer_id          | int (11) | YES  |     | NULL    |       |
| status            | int (2) | NO  |     | 0    |       |
| create_time       | datetime | NO  |     | NULL    |       |
| modify_time 		| datetime | NO  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
```
