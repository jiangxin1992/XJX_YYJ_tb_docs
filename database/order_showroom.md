order_showroom.md
### 订单与showroom用户的关联关系


1. id  
2. order_code	订单号
3. showroom_user_id	showroom主账号id	
4. user_id	用户id. 可能是showroom主账号id，也可能是子账号id	
5. user_type 用户类型，showroom或showroom子账号类型
6. cur_type	币种	utf8

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id          | bigint(11)    | NO   | PRI |     |       |
| order_code  | varchar(50)   | YES  |     |     |       |
| showroom_user_id | int(11)  | YES  |     |     |       |
| user_id     | int(11)       | YES  |     |     |       |
| user_type   | int(11)       | YES  |     |     |       |
| cur_type    | varchar（11)  | YES  |     |     |       |
+-------------+---------------+------+-----+---------+-------+
```