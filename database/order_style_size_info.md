order_style_size_info.md
### 订单款式尺寸信息
1. id	
2. style_id	款式id
3. size_value	尺码值			
4. standard_id	标准ID
5. status	0，正常，1，删除	
6. order_id	

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id          | bigint(20)   | NO    | PRI |      |       |
| style_id    | bigint(20)   | YES   |     |      |       |
| size_value  | varchar(20)  | YES   |     |      |       |
| standard_id | bigint(20)   | NO    |     |      |       | 
| status      | int(2)       | NO    |     |      |       |
| order_id    | bigint (11)  | YES   |     |         |       |
+-------------+---------------+------+-----+---------+-------+
```
















