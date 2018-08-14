showroom生成买手账号
=======

**url**: /service/showroom/createTempBuyer
**method** : post  
**权限** : SHOWROOM
**调用方** : Web

### 请求参数

|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| email       | string | Y        | 邮箱  	                                                       |
| buyerName       | string | Y        | 买手名称  	                                                       |
| buyerPhone       | string | Y        | 买手手机号码  	                                                       |
| shopName       | string | Y        | 店铺名称  	                                                       |
### 请求示例
http://localhost:8090/service/showroom/createTempBuyer
### 返回值示例 (接口返回值示例)
```json
{
    "message": "成功",
    "status": 100
}
```