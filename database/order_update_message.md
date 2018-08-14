order_update_message.md

### 订单操作记录

1. id	PRI NO Null
2. create_id	操作人id	
3. create_type	操作人类型
4. create_name	操作人姓名
5. designer_id	设计师id	
6. new_order_id	修改后订单id	
7. old_order_id	修改前订单id	
8. order_code	订单号	No Null
9. operate_type 操作类型 0->新建订单 1->修改订单  2->取消订单  3->更新订单状态（标记签合同等） 4->恢复订单  5->删除订单
10. create_time	操作时间	
11. message	记录消息			
12. status  记录状态（预留字段）