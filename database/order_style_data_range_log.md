order_style_data_range_log.md
### 订单下款式的波段快照

1. id	int	11	
2. name	varchar	45	
3. start		
4. end	datetime	
5. series_id	bigint	10	
6. order_id	varchar	45	
7. style_id	bigint	10	

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id          | int(11)       | NO   | PRI |       |       |
| name        | varchar(45)   | YES  |     |       |       |
| start       | datetime      | YES  |     |       |       |
| end         | datetime      | YES  |     |       |       |
| series_id   | bigint(10)    | YES  |     |       |       |
| order_id    | varchar(45)   | YES  |     |       |       |
| style_id    | bigint(10))   | YES  |     |       |       |
+-------------+---------------+------+-----+---------+-------+
```