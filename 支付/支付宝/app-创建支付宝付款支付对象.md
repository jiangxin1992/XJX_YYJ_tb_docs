创建支付宝付款对象
=======

**url**: /service/pay/appAlipayCreate  
**method** : post  
**权限** : all  
**调用方** : app

### 请求参数

|     名称    |  类型  | 是否必填 |             说明                                    |
|-------------|--------|----------|------------------------------------------------     |
| totalFee    | String | Y        | 订单总金额											|
| orderCode   | String | Y        | 订单号                                              |
| percent     | String | Y        | 付款比                                              |


### 返回值示例 (接口返回值示例)

```json
{
    "data":{
		"partner":"2088911850774983",
		"payment_type":"1",
		"_input_charset":"utf-8",
		"out_trade_no":"113381717ez28",
		"subject":"L.Chan113381717",
		"total_fee":"0.01",
		"body":"下单系列:try",
		"seller_id":"info@yunejian.com",
		"notify_url":"http://121.40.57.9/service/pay/appAlipayNotify",
		"service":"mobile.securitypay.pay",
		"logoPath":"http://source.yunejian.com/ufile/20160712/88bfc8c38b7d47d5b820fcd99a32c9a0"
	},
	"message":"成功",
	"status":100
}
```