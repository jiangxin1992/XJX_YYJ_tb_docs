order_style_img_info.md
### 订单下的颜色图片


1. id	bigint	20	
2. color_id	bigint	20	颜色名称	
3. style_id	bigint	20	
4. designer_id	int	11	
5. path	varchar	500	图片地址
6. order_id	bigint	20	


### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id          | bigint(20)    | NO   | PRI |     |       |
| designer_id | int(11)       | YES  |     |     |       |
| style_id    | bigint(20)    | YES  |     |     |       |
| path        | varchar(500)  | YES  |     |     |       |
| order_id    | bigint(20)    | YES  |     |     |       |
| color_id    | bigint(20))   | YES  |     |     |       |
+-------------+---------------+------+-----+---------+-------+
```