获取jsapiSignature
=======

**url**: /service/pay/jsapiSignature  
**method** : post  
**权限** : all  
**调用方** : Web  

### 请求示例
http://localhost:8080/service/wx/jsapiSignature?state=1YEJ130&url=http://mp.weixin.qq.com?params=value
### 请求参数

|     名称    |  类型  | 是否必填 |             说明                                    |
|-------------|--------|----------|------------------------------------------------     |
| state      | String | Y        | 微信授权后所带参数，参数通过字符串YEJ分割，前一部分为用户类型，后一部分为用户ID|
| url      | String | Y        | 当前网页的URL，不包含#及其后面部分|


### 返回值示例 (接口返回值示例)

```json
{
  "data": {
    "appid": "wx538862158e3e051e",
    "noncestr": "8vTTunnvvWHUB4ZQ",
    "signature": "57c826d9a6a88d957d878e1c720e1810f59d45eb",
    "timestamp": 1486379796,
    "url": "http://mp.weixin.qq.com?params=value"
  },
  "message": "成功",
  "status": 100
}
```