sr订货会权限查询
=======

- **url**: /service/sr_appointment/auth
- **method** : get  
- **权限** : showroom_sub
- **调用方** : web/ios

### 请求参数

|    名称   |  类型  | 是否必填 |   说明   |
|-----------|--------|----------|----------|
| auth | int    | Y        | 取值: 5      |

### 返回值说明

true表示有权限，false表示无权限

```json
{
	"data":{
		"result":false
	},
	"message":"成功",
	"status":100
}
```