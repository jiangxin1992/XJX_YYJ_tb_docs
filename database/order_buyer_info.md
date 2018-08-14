订单与买家的关联关系

### 重要字段

1. id : order_info表中的buyer_id即是引用了该字段
2. buyer_id: 真正的买家id(引用的是buyer表中的buyer_id)
3. order_id: 引用的order_info的id字段

### desc

```
+--------------------------+---------------+------+-----+-------------------+-------+
| Field                    | Type          | Null | Key | Default           | Extra |
+--------------------------+---------------+------+-----+-------------------+-------+
| id                       | int(11)       | NO   | PRI | NULL              |       |
| buyer_id                 | int(11)       | YES  |     | NULL              |       |
| name                     | varchar(100)  | YES  |     | NULL              |       |
| found_year               | varchar(4)    | YES  |     | NULL              |       |
| logo_path                | varchar(100)  | YES  |     | NULL              |       |
| buyer_files              | varchar(5000) | YES  |     | NULL              |       |
| business_card            | varchar(500)  | YES  |     | NULL              |       |
| contact_name             | varchar(500)  | YES  |     | NULL              |       |
| contact_email            | varchar(100)  | YES  |     | NULL              |       |
| contact_phone            | varchar(20)   | YES  |     | NULL              |       |
| price_min                | float         | YES  |     | NULL              |       |
| price_max                | float         | YES  |     | NULL              |       |
| business_brands          | varchar(500)  | YES  |     | NULL              |       |
| defaul_billing_address   | int(11)       | YES  |     | NULL              |       |
| default_shipping_address | int(11)       | YES  |     | NULL              |       |
| note                     | varchar(2000) | YES  |     | NULL              |       |
| create_id                | int(11)       | YES  |     | NULL              |       |
| modify_id                | int(11)       | YES  |     | NULL              |       |
| create_time              | timestamp     | YES  |     | CURRENT_TIMESTAMP |       |
| modify_time              | timestamp     | YES  |     | NULL              |       |
| status                   | int(2)        | YES  |     | NULL              |       |
| order_id                 | bigint(20)    | YES  |     | NULL              |       |
+--------------------------+---------------+------+-----+-------------------+-------+
```