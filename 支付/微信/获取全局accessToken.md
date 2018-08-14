获取全局accessToken
=======

**url**: /service/pay/accessToken  
**method** : post  
**权限** : all  
**调用方** : Web  

### 请求示例
http://localhost:8080/service/wx/accessToken?state=1YEJ130
### 请求参数

|     名称    |  类型  | 是否必填 |             说明                                    |
|-------------|--------|----------|------------------------------------------------     |
| state      | String | Y        | 微信授权后所带参数，参数通过字符串YEJ分割，前一部分为用户类型，后一部分为用户ID|


### 返回值示例 (接口返回值示例)

```json
{
  "data": "VeFF4AwOr2YkevWtTYlilgli2W_x-Gn0depCE75YCPT7cSlBr2XPE8deja9oBTRnvreRiqKrpzT9JBHGstsvSQnaEF9xxlN6-SXL3WQEmEF-iKKs5olEFjHxVWk2UCpMIRVjAIACLP",
  "message": "成功",
  "status": 100
}
```