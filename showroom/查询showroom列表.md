查询showroom列表
=======

**url**: /__/showroom/list
**method** : get  
**权限** : admin 
**调用方** : Web

### 请求参数

|     名称  	 |  类型   | 是否必填  |             说明                                                   |
|------------|--------|----------|-------------------------------------------------------------------|
| name       | String | N        | 名称   	                                                       |
| status     | String    | N        | 状态：init代表合同未生效，normal代表合同正常，expire代表合同已到期，stop代表停用                                                        
|
| pageIndex     | int    | Y        | 页码                                                        
|
### 请求示例
http://localhost:3334/service/showroom/list?pageIndex=1
### 返回值示例 (接口返回值示例)

```json
{
    "data":{
        "showroomUserList":[
            {
                "brandNumbers":1,
                "contractEndTime":1514779920000,
                "contractStartTime":1483243920000,
                "createId":112,
                "createTime":1487730404000,
                "email":"9898098098098@qq.com",
                "id":4,
                "logo":"http://cdn.ycosystem.com/ufile/20170204/fb49b53aa3b648a896aeb4c90a214ff4",
                "majorId":null,
                "manager":"mang",
                "managerPhone":"13987898767",
                "modifyId":null,
                "modifyTime":null,
                "name":"云衣间",
                "status":"NORMAL",
                "type":"MAJOR"
            }
        ],
        "pageInfo":{
            "recordTotalAmount":1,
            "pagesAmount":1,
            "recordAmount":1,
            "pageIndex":1,
            "isLastPage":true,
            "pageSize":20,
            "isFirstPage":true
        }
    },
    "message":"成功",
    "status":100
}
```