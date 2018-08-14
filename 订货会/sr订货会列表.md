sr订货会列表
=======

- **url**: /service/sr_appointment/list
- **method** : get  
- **权限** : showroom,showroom_sub
- **调用方** : web/ios

### 请求参数

|    名称   |  类型  | 是否必填 |   说明   |
|-----------|--------|----------|----------|
| pageIndex | int    | Y        | 页码     |
| pageSize  | int    | Y        | 每页条数 |

### 返回值说明

|        名称        |  类型  |    说明    |
|--------------------|--------|------------|
| id                 | number | 订货会id   |
| name               | string | 名称       |
| poster               | string | 海报图       |
| year               | number | 年份       |
| season             | string | 季         |
| status             | string | 状态,ON: 进行中；OFF 已结束       |
| peopleApplied      | number | 申请人数   |
| peopleToBeVerified | number | 待审核人数 |