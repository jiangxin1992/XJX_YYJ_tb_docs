order_item.md
#### 子订单
### 触发器
1. order_item_after_insert 
#### 注释
1. id  
2. order_id  订单id，订单记录版本号标识 
3. designer_id 
4. series_id 
5. style_id   
6. style_modify_time 款式修改时间，快照以此为时间为准建立  
7. color_id    
8. size_id 
9. original_price  
10. final_price   
11. supply_start_time 所处系列可以开始送货日期（这里是冗余字段，供存储过程往系列表中复制） 
12. supply_end_time 所处系列截止送货日期（这里是冗余字段，供存储过程往系列表中复制）
13. produce_status  是否已进入生产单  0-未进入 1-已进入生产单  
14. remark      款式描述  
15. status   (无效字段) 
16. amount  数量   
17. stock_enabled
### desc
```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
+-------------+---------------+------+-----+---------+-------+
| id  | bigint(20)   | NO   | PRI | NULL    |       |
| order_id | bigint(20) | YES  |     | NULL    |       |
| designer_id | int(10) | YES  |     | NULL    |       |
| series_id   | bigint(20)   | YES   |   | NULL    |       |
| style_id   | bigint(20)   | YES   |   | NULL    |       |
| style_modify_time | timestamp | YES   |  | NULL    |       |
| color_id | bigint(20) | YES  |     | NULL    |       |
| size_id  | bigint(20) | YES  |     | NULL    |     |
| original_price    | double | YES  |     | NULL    |       |
| final_price     | double | YES  |     | 0    |       |
| supply_start_time   | timestamp  | YES   |  | NULL    |       |
| supply_end_time | timestamp  | YES   |  | NULL    |       |
| produce_status | int(11) | YES  |     | NULL    |       |
| remark  | varchar (500) | YES  |     | NULL    |     |
| status    | int(11) | YES  |     | NULL    |       |
| amount     | int (11) | YES  |     | 0    |       |
| stock_enabled      | tinyint (4) | NO  |     | 0    |       |
+-------------+---------------+------+-----+---------+-------+
```