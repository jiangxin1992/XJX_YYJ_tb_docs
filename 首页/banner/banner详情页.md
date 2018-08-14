详情页
=======

**url**: service/banner/content
**method** : get   
**调用方** : Web

### 请求参数                                       
|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| bannerId     | int    | Y        | bannerId  	                                                       |    
### 请求示例
http://localhost:8090/servic/banner/content

### 返回值示例 (接口返回值示例)
```json
{
    "data": {
        "content": "dfasfasdfadsfadsfasdf",
        "coverImg": "http://aksfja;lsdjfaskdf.jpg",
        "createTime": 1501575666000,
        "id": 3,
        "link": "",
        "location": "BUYER",
        "modifyTime": null,
        "pv": null,
        "sortWeight": 2,
        "status": "PUBLISHED",
        "title": "阿打算发撒旦法是打发",
        "type": "HTML"
    },
    "message": "成功",
    "status": 100
}
```