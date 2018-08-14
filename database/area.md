地区表，包含有国、省、市3级数据；部分国家没有省的，省的记录为null.

我们系统中x引用的是imp_id和parent_imp_id.

### desc

```
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| id            | int(10)     | NO   | PRI | NULL    | auto_increment |
| imp_id        | int(10)     | YES  |     | NULL    |                |
| code          | varchar(30) | YES  |     | NULL    |                |
| name          | varchar(80) | YES  |     | NULL    |                |
| eng_name      | varchar(80) | YES  |     | NULL    |                |
| parent_id     | int(10)     | YES  |     | NULL    |                |
| parent_imp_id | int(10)     | YES  |     | NULL    |                |
| level         | int(1)      | YES  |     | NULL    |                |
| create_time   | timestamp   | YES  |     | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+

```