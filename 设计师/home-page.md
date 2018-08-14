设计师相关接口
=======

### 获取设计师品牌信息

- url: /service/homePage/orderDesignerInfo
- method: `post`

#### 请求参数

| 名称       	| 类型 	| 必填 	| 说明     	|
|------------	|------	|------	|----------	|
| designerId 	| int  	| 是   	| 设计师id 	|
| orderCode 	| Str  	| 是   	| 订单号 	|
#### 响应数据

##### 响应参数说明
null

##### 样例

```json
{
"data":{
		"connectStatus":-1,
		"retailerName":[
			"买手店1",
			"买手店2",
			"买手店3"
		],
		"lookBook":{
			"coverPic":"http://source.yunejian.com/ufile/20151224/487a5c9075ce4ab3ad838f7bd7e5c9e6",
			"createTime":1453341907000,
			"designerId":2,
			"id":67,
			"isOnHomepage":0,
			"name":"Apiece Apart",
			"note":"",
			"picCount":11,
			"status":0
		},
		"brandIntroduction":{
			"brandIntroduction":"美国女装品牌 Apiece Apart 释出的2016春夏季款式清新宜人，“我就是那片蓝”。设计师 Starr Hout 和 Laura Cramer 在这一季回归纯色干净，一字肩的松紧设计上衣，宽松的斗篷款拼色装，宽松摇曳的阔腿裤都让人感受无比清凉和快意。",
			"brandName":"DDD的style",
			"designerId":2,
			"email":"445897574@qq.com",
			"note":"",
			"phone":"15662137643",
			"qq":"492874090",
			"weixin":"hgft"
		},
		"logo":"http://source.yunejian.com/ufile/20160223/2d80489394984de58213593bb40e5237",
		"picUrls":[
			"http://source.yunejian.com/ufile/20151214/08e4cadf64104452b74df6ac414c0585",
			"http://source.yunejian.com/ufile/20151214/340d0e650753473d8ad627176b9464c4",
			"http://source.yunejian.com/ufile/20151214/607b62a149354df4ab3b07e0ff0363b2",
			"http://source.yunejian.com/ufile/20151214/fdaf73a4eacc45e7bf3dcbd248f00052",
			"http://source.yunejian.com/ufile/20151214/2962ada4071842d8b9dea7ec50b34d01",
			"http://source.yunejian.com/ufile/20151214/370a21e87cb5453e9794affbf585b1bb",
			"http://source.yunejian.com/ufile/20151214/22641d3c8bb24ef3904af99f6ef69cd7",
			"http://source.yunejian.com/ufile/20151223/ee1d883bcb7e48b89c9dd810aa9b5a66",
			"http://source.yunejian.com/ufile/20151223/17e769663e1442c0b7bc23ceb01eb46c",
			"http://source.yunejian.com/ufile/20151231/a68bdf546ca74c6bbff1da91fa22b0c3",
			"http://source.yunejian.com/ufile/20151231/dc4cf2a8ce7a4a718dbbaa476f69495b"
		],
		"designerName":"Alice"
	},
	"message":"成功",
	"status":100

}
```