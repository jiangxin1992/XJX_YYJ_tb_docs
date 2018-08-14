获取sr子账号权限列表
===========

- **url**: /service/showroom/auth/list
- **method** : get
- **权限** : showroom主账号及子账号
- **调用方** : Web

### 请求参数

|  名称  |  类型  | 是否必填 |        说明        |
|--------|--------|----------|--------------------|
| userId | number | Y        | showroom子账号的id |

### 返回字段说明

|   名称  |  类型  |     说明     |
|---------|--------|--------------|
| id      | number | 权限id       |
| name    | string | 权限名称     |
| checked | bool   | 是否有此权限 |



### 返回值示例

```json
{
        "data":{
                "result":[
                        {
                                "checked":false,
                                "id":1,
                                "name":"品牌操作权限"
                        },
                        {
                                "checked":false,
                                "id":2,
                                "name":"品牌报表查看权限"
                        },
                        {
                                "checked":false,
                                "id":3,
                                "name":"showroom报表查看权限"
                        },
                        {
                                "checked":true,
                                "id":4,
                                "name":"所有订单查看权限"
                        }
                ]
        },
        "message":"成功",
        "status":100
}
```

```
isShowRoomLogin 1
localStorage.setItem('sr_brandOperation',_getIdByVal(1,result))
localStorage.setItem('sr_brandRepView',_getIdByVal(2,result))
localStorage.setItem('sr_SHRepView',_getIdByVal(3,result))  功能已好
localStorage.setItem('sr_allOrderView',_getIdByVal(4,result))


```