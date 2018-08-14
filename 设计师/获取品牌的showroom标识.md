获取品牌的showroom标识
=======

### 获取设计师品牌信息

- url: /service/showroom/getShowroomTag
- method: `get`
- 权限: 品牌、销售代表、买手

注: 买手导出pdf订单时会访问该接口

### 请求参数

|    名称    | 类型 | 必填 |             说明             |
|------------|------|------|------------------------------|
| designerId | int  | N    | 设计师id，非买手登录时可不传 |


### 返回字段说明

|     名称     |  类型  |      说明     |
|--------------|--------|---------------|
| adYear       | number | 活动年份      |
| adSeasonShow | string | 季节名称      |
| showroomName | string | showroom 名称 |
| adSeason     | string | 活动季节      |
| logo         | string | showroom logo |


#### 响应数据

有绑定showroom的情况:

```json
{
	"data":{
		"adYear":2018,
		"adSeasonShow":"SS",
		"showroomName":"Coda Showroom",
		"adSeason":"春夏 Spring/Summer",
		"logo":"https://scdn.ycosystem.com/ufile/20170523/bf8d92d812024466905f1e684b2a6518"
	},
	"message":"成功",
	"status":100
}
```

没绑定showroom的情况

```json
{
	"data":{},
	"message":"成功",
	"status":100
}
```
