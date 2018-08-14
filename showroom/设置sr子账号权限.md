设置sr子账号权限
=========

- **url**: /service/showroom/auth/check
- **method** : post
- **权限** : showroom主账号
- **调用方** : Web、Pad

### 请求参数

|   名称   |  类型  | 是否必填 |             说明            |
|----------|--------|----------|-----------------------------|
| userId   | number | Y        | sr子账号id                  |
| authList | string | N        | 权限id列表,多个时用逗号隔开 |

### 返回字段说明

可忽略