买手(零售商)表

### desc

1. `is_hidden`: 是否隐藏，此值为1时表示品牌搜索不到该用户；此值为null(注意是null不是0!!!)时，品牌可以搜到

```
+--------------------------+---------------+------+-----+-------------------+----------------+
| Field                    | Type          | Null | Key | Default           | Extra          |
+--------------------------+---------------+------+-----+-------------------+----------------+
| id                       | int(11)       | NO   | PRI | NULL              | auto_increment |
| buyer_id                 | int(11)       | YES  | UNI | NULL              |                |
| name                     | varchar(100)  | YES  | UNI | NULL              |                |
| found_year               | varchar(4)    | YES  |     | NULL              |                |
| logo_path                | varchar(100)  | YES  |     | NULL              |                |
| buyer_files              | varchar(500)  | YES  |     | NULL              |                |
| legal_person_files       | varchar(500)  | YES  |     | NULL              |                |
| store_files              | varchar(5000) | YES  |     | NULL              |                |
| contact_name             | varchar(500)  | YES  |     | NULL              |                |
| contact_email            | varchar(100)  | YES  | MUL | NULL              |                |
| contact_phone            | varchar(25)   | YES  |     | NULL              |                |
| price_min                | float         | YES  |     | NULL              |                |
| price_max                | float         | YES  |     | NULL              |                |
| business_brands          | varchar(500)  | YES  |     | NULL              |                |
| defaul_billing_address   | int(11)       | YES  |     | NULL              |                |
| default_shipping_address | int(11)       | YES  |     | NULL              |                |
| note                     | varchar(2000) | YES  |     | NULL              |                |
| create_id                | int(11)       | YES  |     | NULL              |                |
| modify_id                | int(11)       | YES  |     | NULL              |                |
| create_time              | timestamp     | YES  |     | CURRENT_TIMESTAMP |                |
| modify_time              | timestamp     | YES  |     | NULL              |                |
| province                 | varchar(255)  | YES  |     | NULL              |                |
| city                     | varchar(255)  | YES  |     | NULL              |                |
| town                     | varchar(50)   | YES  |     | NULL              |                |
| street                   | varchar(50)   | YES  |     | NULL              |                |
| address_detail           | varchar(200)  | YES  |     | NULL              |                |
| zip_code                 | varchar(20)   | YES  |     | NULL              |                |
| introduction             | varchar(5000) | YES  |     | NULL              |                |
| wechat_number            | varchar(255)  | YES  |     | NULL              |                |
| web_url                  | varchar(255)  | YES  |     | NULL              |                |
| is_hidden                | tinyint(1)    | YES  |     | NULL              |                |
| status                   | int(2)        | YES  |     | NULL              |                |
| nation                   | varchar(45)   | YES  |     | 中国              |                |
| nation_id                | int(11)       | YES  |     | 721               |                |
| province_id              | int(11)       | YES  |     | NULL              |                |
| city_id                  | int(11)       | YES  |     | NULL              |                |
+--------------------------+---------------+------+-----+-------------------+----------------+
```