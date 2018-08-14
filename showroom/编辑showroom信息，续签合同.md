修改showroom信息，续签合同
=======

**url**: /__/showroom/modify
**method** : post  
**权限** : admin 
**调用方** : Web

### 请求参数

|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| id       | int | Y        | id  	                                                       |
| logo       | String | N        | logo   	                                                       |
| name       | String | N        | 名称   	                                                       |
| manager     | String    | N        | 主理人名称                                                          |
| managerPhone     | String    | N        | 主理人电话                                                 |
| contractStartTime     | date    | N        | 合同开始时间                                           |
| contractEndTime     | date    | N        | 合同结束时间                                              |

### 请求示例
http://localhost:3334/service/showroom/modify.do?id=4&name=yej
### 返回值示例 (接口返回值示例)

```json
{ "data":1, "message":"成功", "status":100 }
```