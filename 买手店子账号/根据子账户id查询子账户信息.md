根据子账户id查询子账户信息.md
=======================================================

**url**:/service/buyerSubaccount/queryBuyerSubaccount
**method** : get 
**权限** : RETAILER  
**调用方** : Web

### 请求参数
|    名称   | 类型 | 是否必填 |           说明           |
|-----------|------|----------|--------------------------|
| id      | int  | Y     | 子账户id                  |



### 返回值示例 (接口返回值示例)

```json
{
    data: {
        bos: [3]
			0:  {
			warehouseId: 6
			warehouseName: "fsf"
			}-
			1:  {
			warehouseId: 7
			warehouseName: "无可奈何花落去"
			}-
			2:  {
			warehouseId: 9
			warehouseName: "ym专用仓"
			}-
			-
			email: "32767a367@qq.com"
			id: 2
			name: "王五"
			password: "$2a$10$o2CWBQnMH0sQEgg7.zrpEuVgb43oyFpx4/Tu5e1/3dXjU0SU6jygm"
			position: 10
			subaccountWarehouseBoList: [1]
			0:  6
			-
			}
    }
    -
    message: "成功"
    status: 100
}
```