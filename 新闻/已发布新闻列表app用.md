已发布新闻列表
=======

**url**: service/news/releasedList/app
**调用方**: web
**权限**: 设计师、零售商
### 请求参数
|    名称   |  类型  | 是否必填   |                  说明                  |
|-----------|--------|------------|----------------------------------------|
| type      | int    | 是         |类型		0：云衣间新闻 1：上海时装周	   |
### 返回结果实例

```json
{
	"data":{
		"result":[
			{
				"content":"",
				"count":32,
				"coverImg":"http://source.yunejian.com/ufile/20160906/d4fc5b3718ec42b8a1cd118ad9111f16",
				"createTime":1473133573000,
				"digest":"新闻摘要",
				"id":3,
				"modifyTime":1473327261000,
				"sort":1,
				"status":1,
				"title":"测试新闻",
				"type":1
			},
			{
				"content":"",
				"count":374,
				"coverImg":"http://source.yunejian.com/ufile/20160906/eedb80ef4c4e48d0974c5b3ee1c4f6a3",
				"createTime":1472435340000,
				"digest":"新闻摘要111111",
				"id":1,
				"modifyTime":1473149077000,
				"sort":1,
				"status":1,
				"title":"测试新闻",
				"type":0
			},
			{
				"content":"",
				"count":6,
				"coverImg":"http://source.yunejian.com/ufile/20160907/a5d91a4fda834715bbeddd459d554db6",
				"createTime":1472441725000,
				"digest":"摘要",
				"id":2,
				"modifyTime":1473240076000,
				"sort":0,
				"status":1,
				"title":"云衣间新闻",
				"type":1
			}
		],
		"detailUrl":"http://wxapp.yunejian.com/news_detail.html"
	},
	"message":"成功",
	"status":100
}
```
### 返回参数说明
|    名称   |  类型  | 是否必存在 |                  说明                  |
|-----------|--------|------------|----------------------------------------|
| id        | int    | 是         |新闻id								   |
| type      | int    | 是         |类型		0：云衣间新闻 1：上海时装周	   |
| content   | string | 否         |内容	  在列表中返回为空 				   |
| coverImg  | string | 是         |封面图 								   |	
| createTime| int	 | 是         |创建时间								   |
| modifyTime| int    | 是         |修改时间								   |	
| digest    | int    | 是         |摘要									   |
| sort      | int    | 是         |排序权重								   |	
| status    | int    | 是         |状态 0：未发布 1：已发布				   |
| title     | int    | 是         |标题     							   |	
| count     | int    | 是         |点击量								   |	
| detailUrl | string | 是         |web端新闻详情地址					   |	
