order_status_log.md
### 订单状态修改日志


1. id
2. order_code 订单编号			
3. owner_role	用户角色，0，设计师，1，买手店	
4. pre_status	前一状态	
5. crt_status	当前状态	
6. create_time记录创建时间	
7. create_id	记录创建人id	
8. create_type	记录创建人用户类型，0，设计师，1，买手店
9. reject_reason	拒绝原因	


### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id          | bigint(11)    | NO   | PRI |     |       |
| order_code  | varchar(50)   | YES  |     |     |       |
| pre_status  | int(11)       | YES  |     |     |       |
| owner_role  | int(11)       | YES  |     |     |       |
| crt_status  | int(11)       | YES  |     |     |       |
| create_time | timestamp| YES  |   | CURRENT_TIMESTAMP |       |
| create_id   | int(11)       | YES  |     |     |       |
| create_type | int(11)       | YES  |     |     |       |
| reject_reason | varchar（400)  | YES  |     |     |       |
+-------------+---------------+------+-----+---------+-------+
```