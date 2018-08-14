enum_order_status.md

### 订单状态

### 注释

1. id 主键
2. name 状态名称
3. code 状态code
4. legal_to 可以进入的后续状态id，多个逗号分隔
5. modifiable 是否可更改
6. is_final 是否可作为结束状态
7. note 备注说明

### desc

```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id  | int(11)               | NO   | PRI |     |       |
| name| varchar(50)           | NO   |     |     |       |
| code| varchar(20)           | NO   |     |     |       |
| legal_to  | varchar (11)    | NO   |     |null |       |
| modifiable | tinyint (4)    | YES  |     |     |       |
| is_final   | tinyint (4)    | NO   |     |        |       |
| note       | varchar (500)  | NO   |     |     |       |
+-------------+---------------+------+-----+---------+-------+
```


