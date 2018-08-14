sku_stock.md
### sku库存

### uniqueIndex (`style_id`, `color_id`, `size_id`)

### 注释
1. id	bigint	20	PRI
2. style_id	bigint	20	款式id	not null
3. color_id	bigint	20	标准颜色id	bot bull 
4. size_id	bigint	20	标准尺码id	not null
5. stock	int	11	库存数	
6. freeze_stock	int	11	冻结数	