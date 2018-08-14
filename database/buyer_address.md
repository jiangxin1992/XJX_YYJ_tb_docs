买家收件地址列表

### desc

```
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| id             | int(11)      | NO   | PRI | NULL    | auto_increment |
| address_id     | int(11)      | YES  | UNI | NULL    |                |
| buyer_id       | int(11)      | YES  |     | NULL    |                |
| province       | varchar(50)  | YES  |     | NULL    |                |
| city           | varchar(50)  | YES  |     | NULL    |                |
| town           | varchar(50)  | YES  |     | NULL    |                |
| street         | varchar(50)  | YES  |     | NULL    |                |
| zip_code       | int(11)      | YES  |     | NULL    |                |
| detail_address | varchar(200) | YES  |     | NULL    |                |
| receiver_name  | varchar(20)  | YES  |     | NULL    |                |
| receiver_phone | varchar(20)  | YES  |     | NULL    |                |
| status         | int(2)       | YES  |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+
```