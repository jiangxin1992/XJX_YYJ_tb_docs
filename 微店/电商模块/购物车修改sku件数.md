购物车修改sku件数
=======

**url**: /service/h5/cart/item
**method** : post
**权限** : customer  
**调用方** : Web

### 请求参数
    
|    名称    |  类型  | 是否必填 |       说明      |
|------------|--------|----------|-----------------|
| cartItemId | number | Y        | 购物车商品id    |
| amount     | number | Y        | 件数，不能小于1 |


### 返回值

```json
{
  "data": null,
  "message": "成功",
  "status": 100
}
```