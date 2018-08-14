lookbook列表
=======

- **url**: /service/designer/lookBookList
- **method**: `post`
- **权限**: 设计师、销售代表
- **分页**: 是

#### 请求参数

无

#### 响应参数说明

|    名称    |      类型      |      说明      |
|------------|----------------|----------------|
| id         | int            | lookbook id    |
| name       | string         | 名称           |
| coverPic   | string         | 封面图         |
| status     | int            | 状态           |
| picUrls    | string array   | 所有图         |
| picCount   | int            | 所有图的数量   |
| seriesInfo | `object array` | 相关的系列信息 |

##### 相关的系列信息--seriesInfo

| 名称 |  类型  |   说明   |
|------|--------|----------|
| id   | int    | 系列id   |
| name | string | 系列名称 |

##### 样例

```json
{
    "data":{
        "pageInfo":{
            "recordTotalAmount":1,
            "pagesAmount":1,
            "recordAmount":1,
            "pageIndex":1,
            "isLastPage":true,
            "pageSize":15,
            "isFirstPage":true
        },
        "result":[
            {
                "picCount":24,
                "createTime":1457077356000,
                "seriesInfo":[
                    {
                        "name":"2016 春季",
                        "id":50
                    }
                ],
                "name":"Apiece Apart",
                "id":48,
                "coverPic":"http://source.yunejian.com/ufile/20150924/b2770120e5c942b4b69eeecde713d56d",
                "picUrls":[
                    "http://source.yunejian.com/ufile/20150924/8ae6e91135514b569c1f0a8012f957bd",
                    "http://source.yunejian.com/ufile/20150924/3a410f0403024e96b6dd37a67ac1745b",
                    "http://source.yunejian.com/ufile/20150924/c2ba86a72daa4201a44dcefc09d20ea8",
                    "http://source.yunejian.com/ufile/20150924/1d268c7b70d948ca8df1dbe3d1ad340d",
                    "http://source.yunejian.com/ufile/20150924/d2752e9080cb4f0eb60c74dfa4494ff9",
                    "http://source.yunejian.com/ufile/20150924/9dff8153a122496787942441544f2699",
                    "http://source.yunejian.com/ufile/20150924/402347abedba4e418ac2e5963bf988d5",
                    "http://source.yunejian.com/ufile/20150924/2395e37afb8c4a8586e1ac759e7f03b5",
                    "http://source.yunejian.com/ufile/20150924/82a778427b204050b99c9c3ecdac704b",
                    "http://source.yunejian.com/ufile/20150924/66b262e977f044adae142cdd02318955",
                    "http://source.yunejian.com/ufile/20150924/20544f6d79ef4d34a065ef75269b81ac",
                    "http://source.yunejian.com/ufile/20150924/3608daacf4c74383b77176b1cd2a84aa",
                    "http://source.yunejian.com/ufile/20150924/9cf4b639057046d28ab0ff578acbd696",
                    "http://source.yunejian.com/ufile/20150924/5c3b5fd53d9849ec8d70865b72a6bf78",
                    "http://source.yunejian.com/ufile/20150924/b234bd5edd1f418899098475dbbb9285",
                    "http://source.yunejian.com/ufile/20150924/f6176c9851c448a4bd1fe3280db1ec23",
                    "http://source.yunejian.com/ufile/20150924/384b63e1ca85408d9d243bd4fd24099d",
                    "http://source.yunejian.com/ufile/20150924/787703b7b79b43f48e1b268c4147f794",
                    "http://source.yunejian.com/ufile/20150924/7750df0028184a9da36f8f8b15566b82",
                    "http://source.yunejian.com/ufile/20150924/5a2c7f99ba544bc9823b39b7ab72b657",
                    "http://source.yunejian.com/ufile/20150924/7de1e29451ad4a16a591ab861f8ba0de",
                    "http://source.yunejian.com/ufile/20150924/aa891821dfe044d391f967aeaabd39fc",
                    "http://source.yunejian.com/ufile/20150924/23e1f2db735b415fac555a4ed9afe15b",
                    "http://source.yunejian.com/ufile/20150924/0e60efaee64b45f08954339dfd736225"
                ],
                "status":0
            }
        ]
    },
    "message":"成功",
    "status":100
}
```