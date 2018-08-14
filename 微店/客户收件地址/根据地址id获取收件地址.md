根据地址id获取收件地址
=======

**url**: service/customer/queryCustomerDeliverAddressById
**method** : get  
**权限** : customer  
**调用方** : Web

### 请求参数

|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| addressId| int | Y        | 收件地址id必填  	                                                       |

### 请求示例
http://localhost:3334/service/customer/queryCustomerDeliverAddressById

### 返回值示例 (接口返回值示例)

```json
{
    "data":{
        "address":{
                "cityImpId":142999,
                "cityName":"dongc",
                "countryImpId":721,
                "countryName":"中国",
                "createTime":1483067015000,
                "customerId":10000000,
                "deliverName":"china",
                "deliverPhone":"13989898989",
                "deliverPostcode":"",
                "detailAddress":"lksjfdlaf",
                "id":1,
                "isDefault":0,
                "isDelete":0,
                "provinceImpId":4008,
                "provinceName":"beijing"
            }
    },
    "message":"成功",
    "status":100
}
```