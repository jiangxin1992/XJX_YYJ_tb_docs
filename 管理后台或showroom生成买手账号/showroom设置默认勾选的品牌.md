showroom设置默认勾选的品牌
=======

**url**: service/showroom/defaultBrandSet
**content-type**: application/json (注意，需要加此请求头)
**method** : post  
**权限** : SHOWROOM
**调用方** : Web

### 请求参数

|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| designerIds       | list | Y        | 需要设置为勾选的设计师id  	                                                       |
### 请求示例
http://localhost:8090/__/showroom/defaultBrandSet
### 请求参数示例
{
    "designerIds": [2,91,14]
}
### 返回值示例 (接口返回值示例)
```json
{
    "data": {
        "showroomId": 17,
        "type": 1
    },
    "message": "成功",
    "status": 100
}
```