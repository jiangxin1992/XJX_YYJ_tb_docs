存放设计师下 订单、季节、发货方式、下单场合等的配置

该表存的是json数据，并不合适。后期可能会转移到MongoDB中去

### desc

```
+--------------+----------------+------+-----+---------+-------+
| Field        | Type           | Null | Key | Default | Extra |
+--------------+----------------+------+-----+---------+-------+
| designer_id  | int(11)        | NO   | PRI | NULL    |       |
| config_type  | int(11)        | NO   | PRI | NULL    |       |
| config_value | varchar(10240) | YES  |     | NULL    |       |
+--------------+----------------+------+-----+---------+-------+
```