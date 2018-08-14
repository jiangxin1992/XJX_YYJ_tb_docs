新增showroom
=======

**url**: /__/showroom/add
**method** : post  
**权限** : admin 
**调用方** : Web

### 请求参数

|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| logo       | String | Y        | logo   	                                                       |
| name       | String | Y        | 名称   	                                                       |
| manager     | String    | Y        | 主理人名称                                                          |
| managerPhone     | String    | Y        | 主理人电话                                                 |
| email     | String    | Y        | 登录邮箱                                               |
| contractStartTime     | date    | Y        | 合同开始时间                                           |
| contractEndTime     | date    | Y        | 合同结束时间                                              |
| type     | String    | Y        | major代表主账号，sub代表子账号                                                 |
| majorId     | int    | N        | 主账号id（新增子账号时必填）                                                 |

### 请求示例
http://localhost:3334/service/showroom/add.do?logo=''&name=''&manager=''......
### 返回值示例 (接口返回值示例)

```json
{ "data":1, "message":"成功", "status":100 }
```