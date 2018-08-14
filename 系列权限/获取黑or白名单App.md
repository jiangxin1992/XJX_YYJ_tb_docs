获取名单
=======

**url**: service/seriesAuth/list/app
**调用方**: web,app
**权限**: all

### 请求参数
|    名称      |  类型     | 是否必存在 |                  说明                  |
|--------------|-----------|------------|----------------------------------------|
| seriesId     | long      | 是         |系列id							  	     |
| authType     | int       | 否         |权限 3白名单 4黑名单   			     |
### 请求参数示例

```json
{
	"data":{
		"result":[
			{
				"authType":null,
				"buyerId":130,
				"buyerName":"刘天琪-买手",
				"logoPath":"http://source.yunejian.com/ufile/20160907/66bbb0fdaf854051b37a1bf6a5839929"
			}
		]
	},
	"message":"成功",
	"status":100
}



```
