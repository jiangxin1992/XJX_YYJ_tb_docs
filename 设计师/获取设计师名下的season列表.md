设计师名下的season列表
=======

### 获取设计师个人信息

- **url**: /service/v2/designer/seasons
- **method**: `post`

#### 请求参数

|    名称    | 类型 | 必填 |                 说明                 |
|------------|------|------|--------------------------------------|
| designerId | int  | 否   | 设计师id，设计师登录时，不必传此参数 |

#### 响应数据

##### 响应参数说明

|   名称   |     类型     |                  说明                 |
|----------|--------------|---------------------------------------|
| selected | object       | 默认的season,如果为空，则取seasons[0] |
| seasons  | object array | 所有seasons信息                       |

##### 样例

```json
{
  "data": {
    "seasons": [
      {
        "season": "早春夏 Pre-S/S",
        "year": 2019
      },
      {
        "season": "度假 Holiday",
        "year": 2018
      },
      {
        "season": "秋 Fall",
        "year": 2017
      },
      {
        "season": "早春夏 Pre-S/S",
        "year": 2016
      },
      {
        "season": "春夏 Spring/Summer",
        "year": 2015
      },
      {
        "season": "秋冬 Autumn/Winter",
        "year": 2014
      },
      {
        "season": "秋冬 Autumn/Winter",
        "year": 2013
      },
      {
        "season": "早春 Pre-Spring",
        "year": 2012
      },
      {
        "season": "秋 Fall",
        "year": 2011
      },
      {
        "season": "夏 Summer",
        "year": 2010
      }
    ],
    "selected": {
        "season": "夏 Summer",
        "year": 2010
      }
  },
  "message": "成功",
  "status": 100
}
```