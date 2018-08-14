项目中的一些配置参数.

字段: name / value / description

### 常用的name

1. category_index_start: 类目索引的开始值
2. category_index_end: 类目索引的结束值
3. buyer_id_batch_index: 买手id seed

### desc

```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| name        | varchar(50)   | NO   | PRI | NULL    |       |
| value       | varchar(5000) | YES  |     | NULL    |       |
| description | varchar(5000) | YES  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
```