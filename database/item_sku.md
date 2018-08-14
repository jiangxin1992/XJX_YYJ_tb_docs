item_sku.md
### 商品尺码规格

## sku_code_unique_idx（`sku_code`） unique

### 触发器
1. after_item_sku_insert

### 注释
1. id	bigint	20	PRI 
2. sku_code	varchar	45	sku编号	not null
3. item_id	bigint	20	商品id	not null
4. item_color_id	bi###gint	20	item_color表的id	not null
5. color_memo	varchar	45	颜色描述	
6. color_val	varchar	500	颜色值	not null
7. size_memo	varchar	45	尺码描述	
8. size_val	varchar	45 尺码值	not null
9. memo	varchar	90	规格说明		
1o. price	decimal	10 原价	not null
11. discount_price	decimal	10	折后价	not null
12. stock	int	11	库存	not null
13. status	varchar	15 VALID正常，DELETED，删除 