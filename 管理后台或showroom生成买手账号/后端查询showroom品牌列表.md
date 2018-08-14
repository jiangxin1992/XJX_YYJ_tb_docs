查询showroom品牌列表
=======
**url**: /__/showroom/queryShowroomBrandAgents
**method** : get  
**权限** : ADMIN
**调用方** : Web

### 请求参数
|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| status     | string    | Y        |         AGREE：品牌已同意代理状态                                      
|

### 请求示例
http://localhost:8090/__/showroom/queryShowroomBrandAgents?status=AGREE

### 返回说明

isSet=1表示已设置

### 返回值示例 (接口返回值示例)
```json
{
    "data": {
        "total": 10,
        "succ": 10,
        "brandList": [
            {
                "brandId": 163,
                "brandName": "Elpizo",
                "designerId": 98,
                "designerName": "clement",
                "email": "cao.yu@yunejian.com",
                "id": 73,
                "isSet": 1,
                "logo": "https://scdn.ycosystem.com/ufile/20170915/8fb8293b9943498081f077f317337e31",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 165,
                "brandName": "Jordan,Jordan",
                "designerId": 114,
                "designerName": "刘天琪",
                "email": "464121150@qq.com",
                "id": 6,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20160712/83d3ecb0abdf474abc41eba49c81a13c",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 168,
                "brandName": "L.Chan",
                "designerId": 131,
                "designerName": "海蜇皮",
                "email": "vince28slim@163.com",
                "id": 64,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20170908/90881a436f4143c1b4dcfa9c52f82c82",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 200,
                "brandName": "Haiyan设计师",
                "designerId": 167,
                "designerName": "王 海燕",
                "email": "wang.haiyan@ycofoundation.com",
                "id": 37,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20160422/98fecc1941144583bf678bb0250f033c",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 204,
                "brandName": "catshit°C",
                "designerId": 171,
                "designerName": "红糖CC",
                "email": "nature.walker@outlook.com",
                "id": 71,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20160422/ab9a6a8c2f834d558a94ce60d769c7c6",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 224,
                "brandName": "jellyFish",
                "designerId": 248,
                "designerName": "Victory",
                "email": "jellyfish93@sohu.com",
                "id": 70,
                "isSet": 0,
                "logo": "",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 255,
                "brandName": "留白",
                "designerId": 310,
                "designerName": "陈先生",
                "email": "jellyfish.code@outlook.com",
                "id": 62,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20170724/ba72856b4fd243bf9d6484140863810f",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 262,
                "brandName": "禾",
                "designerId": 327,
                "designerName": "小木",
                "email": "new_brand_Td@163.com",
                "id": 66,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20170329/4c65c3a2febf4723a715c9eadc844fb3",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 276,
                "brandName": "「東」@FUSSED&Urban·Collection - V'S.2",
                "designerId": 354,
                "designerName": "walkertest",
                "email": "ctrl.walker@gmail.com",
                "id": 65,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20161216/20e25626653e41379220b3e9fe8c66ba",
                "reSendAble": 1,
                "status": "AGREE"
            },
            {
                "brandId": 305,
                "brandName": "Fish D",
                "designerId": 400,
                "designerName": "Fish",
                "email": "fish_caoyu@126.com",
                "id": 40,
                "isSet": 0,
                "logo": "https://scdn.ycosystem.com/ufile/20170302/546a0623ecbd46109719604977217265",
                "reSendAble": 1,
                "status": "AGREE"
            }
        ]
    },
    "message": "成功",
    "status": 100
}
```