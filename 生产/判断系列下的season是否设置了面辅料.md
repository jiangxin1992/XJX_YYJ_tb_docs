判断系列下的season是否设置了面辅料
=======

- **url**: service/fabric/check_fabrics
- **调用方**: Web
- **权限**: Designer,Salesman
- **method**: get

### 请求参数

- 参数 `seriesId`和`year / season`, 至少有一项不能为空

|   名称   |  类型  |  说明  |
|----------|--------|--------|
| seriesId | number | 系列id |
| year     | string |        |
| season   | string |        |

### 返回值示例

- true: 有设置
- false: 未设置


```json
{
  "data": true,
  "message": "成功",
  "status": 100
}
```
