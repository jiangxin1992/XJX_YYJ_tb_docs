新增一条pv
=======

- **url**: service/stat/pv
- **method**: post
- **平台**: Web/Pad/IOS


### 请求参数

|   名称   |  类型  | 是否必填 |                 说明                |
|----------|--------|----------|-------------------------------------|
| platform | string | Y        | 平台，取值： IOS/IPAD/WEB           |
| cat      | string | Y        | 类型, 取值: STYLE 款式pv; COOP 合作pv                   |
| key      | string | Y        | 标识, 取值: cat为STYLE时,取款式的id |


#### cat --> key 对应关系

1. STYLE: key 取款式的id
2. COOP: 点击`邀请合作零售商`按钮时, key取值`寻求合作方`

### 返回字段说明

可忽略