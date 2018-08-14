判断买手店的niospace权限
=======

**url**: service/v2/buyer/checkNiospacePermission
**method** : GET  
**权限** : RETAILER
**调用方** : Web

### 请求示例
http://localhost:3334/service/v2/buyer/checkNiospacePermission

### 返回值示例 (接口返回值示例，0表示未开通，1表示开通中，2表示已开通)

```json
{
    "data":{
        "hygl":2,
        "wd":0
    },
    "message":"成功",
    "status":100
}
```