showroom查询已创建的买手账号列表
=======
**url**: /service/showroom/queryTempBuyer  
**method** : get  
**权限** : SHOWROOM
**调用方** : Web

### 请求参数

无

### 请求示例
http://localhost:8090/service/showroom/queryTempBuyer
### 返回值示例 (接口返回值示例)
```json
{
    "data": [
        {
            "addressDetail": "",
            "businessBrands": "",
            "buyerFiles": "",
            "buyerId": 660,
            "city": "",
            "cityId": null,
            "contactEmail": "lianping_200@163.com",
            "contactName": "sdsd",
            "contactPhone": "13332322323",
            "createId": 17,
            "createTime": 1505901319000,
            "defaulBillingAddress": null,
            "defaultShippingAddress": null,
            "foundYear": "",
            "id": 204,
            "introduction": "",
            "isHidden": null,
            "legalPersonFiles": "",
            "logoPath": "",
            "modifyId": null,
            "modifyTime": 1505901319000,
            "name": "临时买手_660_17",
            "nation": "",
            "nationId": null,
            "note": "",
            "priceMax": null,
            "priceMin": null,
            "province": "",
            "provinceId": null,
            "statisticsTagId": null,
            "status": 1,
            "storeFiles": "",
            "street": "",
            "town": "",
            "webUrl": "",
            "wechatNumber": "",
            "zipCode": ""
        }
    ],
    "message": "成功",
    "status": 100
}
```