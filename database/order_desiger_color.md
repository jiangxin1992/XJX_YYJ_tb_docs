order_desiger_color.md

订单设计师颜色

#### 注释

1. id 主键
2. designer_id 设计师id
3. order_id 订单id
4. created 创建时间 
5. modified 修改时间
6. name 颜色名字
7. value 颜色值
8. description 描述
9. status 状态
10. style_id 款式id
11. style_modified 款式修改时间 

### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id                | int(11)   | NO   | PRI | NULL    |       |
| designer_id| int(11) | NO  |     | NULL    |       |
| order_id | int(11) | NO  |     | NULL    |       |
| created       | datetime | NO  |     | NULL    |     |
| modified          | datetime | YES  |     | NULL    |       |
| name            | varchar (45) | NO  |     | 0    |       |
| value            | varchar (100) | NO  |     | 0    |       |
| status            | varchar (45) | NO  |     | 0    |       |
| style_id       | datetime | NO  |     | NULL    |       |
| style_modified       | datetime | NO  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
```








