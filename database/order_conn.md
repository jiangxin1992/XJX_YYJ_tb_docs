订单与买家关联表。

注意买家的订单查询语句如下:

```
SELECT max(oi.id) AS id FROM order_conn oc
   LEFT JOIN order_info oi ON oc.order_code = oi.order_code
   WHERE -- oc.buyer_id = '89' AND 
   oc.status = 1
   GROUP BY oi.order_code;
```

### desc

```
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| order_code  | varchar(50) | NO   | PRI | NULL    |       |
| designer_id | int(11)     | NO   | PRI | NULL    |       |
| buyer_id    | int(11)     | NO   | PRI | NULL    |       |
| create_time | timestamp   | YES  |     | NULL    |       |
| modify_time | timestamp   | YES  |     | NULL    |       |
| pattern     | int(11)     | YES  |     | NULL    |       |
| status      | int(11)     | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
```

### 疑惑

该表与order_buyer_info功能有部分重复。后者更强调的是未入驻的买手信息.