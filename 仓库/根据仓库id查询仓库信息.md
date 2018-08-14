根据仓库id查询仓库信息.md
=======================================================

**url**:/service/warehouse/queryWarehouse
**method** : get 
**权限** : RETAILER  
**调用方** : Web

### 请求参数
|    名称   | 类型 | 是否必填 |           说明           |
|-----------|------|----------|--------------------------|
| id      | int  | Y     | 仓库id                  |



### 返回值示例 (接口返回值示例)

```json
{
    data: {
            address: "无可奈何花落去"
            buyerId: 206
            createTime: 1528711114000
            id: 7
            modifyTime: 1528711114000
            name: "无可奈何花落去"
            phone: "13564349234"
            receiver: "sfds"
            status: "1"
            visible: 0
        }
    -
    message: "成功"
    status: 100
}