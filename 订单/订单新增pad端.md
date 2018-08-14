订单新增pad端
=======
该接口是对原有`/service/order/orderInfo`的重写

Web端使用另外的接口进行订单创建及修改。该接口为Pad端而写，入参结构和订单详情接口的返回结构保持一致

- **url**: service/v2/order/preAdd/pad 订单初始化
- **url**: service/v2/order/add/pad 订单新增
- **url**: service/v2/order/modify/pad 订单修改/重新关联
- **调用方**: Pad
- **权限**: 设计师、零售商

**注意**: 以上3个接口需要加上请求头`content-type:application/json`

### changelog
- 2016-07-11 新增 `taxRate`和`discount`两个字段

### 请求参数说明--针对query string
| 名称           | 类型  | 说明                                 			   |
| -------------- |       | --                                   			   |
| realBuyerId    | int   | 买家id                               			   |
| reassociate    | bool  | 默认false,订单重新关联时值必须为true 			   |
| preModifyTime  | string|进入修改订单页的时间 仅在修改订单操作时候传入即可|


### 请求参数说明--针对request body,数据结构和订单详情保持一致

|             名称            |      类型      |                            说明                           |
|-----------------------------|----------------|-----------------------------------------------------------|
| orderCode                   | string         | 订单编号                                                  |
| totalPrice                  | float          | 总价                                                      |
| finalTotalPrice             | float          | 折后总价                                                  |
| curType                     | string         | 订单币种                                                  |
| **[groups](#groups)**       | `object array` | 波段分组                                                  |
| **[seriesMap](#seriesmap)** | `object`       | 系列信息,从系列id到系列的映射                             |
| orderStatus                 | int            | 订单状态                                                  |
| closeReqStatus              | int            | 订单关闭请求 0 无关闭请求；1 己方提出关闭; 2 对方提出关闭 |
| autoCloseHoursRemains       | int            | 离订单自动关闭的时间，-1表示无限时                        |
| addressModifAvailable       | bool           | 可否修改地址                                              |
| buyerName                   |                | 买手店名称                                                |
| businessCard                |                | 买手店名片                                                |
| realBuyerId                 |                | 平台上买手店的id                                          |
| buyerEmail                  |                | 买手店 email                                              |
| deliveryChoose              |                | 快递方式                                                  |
| buyerAddressId              |                | 买手店地址 id                                             |
| payApp                      |                | 支付方式                                                  |
| occasion                    |                | 下单场合,上海时装周/北京时装周等                          |
| orderDescription            |                | 订单备注                                                  |
| orderCreateTime             |                | 订单创建时间                                              |
| brandName                   |                | 品牌名称                                                  |
| taxRate                     | int            | 税率: 6 / 17 / null                                       |
| discount                    | int            | 折扣: 0到100之间的整数                                    |
| type                        | string         | 买断: BUYOUT; 寄售: CONSIGNMENT                           |

#### groups 元素说明

| 名称                        | 类型           | 说明     |
| --------------              | :----:         | --       |
| **[dateRange](#daterange)** | `object`       | 波段信息 |
| **[styles](#styles)**       | `object array` | 款式数组 |

##### dateRange包含字段

| 名称           | 类型   | 说明             |
| -------------- | :----: | --               |
| id             | int    | 修改时，已有波段 |
| name           | string | 波段名称         |
| start          | date   | 起始日期         |
| end            | date   | 截止日期         |

##### styles元素说明

| 名称                              | 类型           | 说明         |
| --------------                    | :----:         | --           |
| styleId                           | int            | 款式id       |
| styleCode                         | string         | 款式编号     |
| name                              | string         | 款式名称     |
| orderAmountMin                    | date           | 最小起购数量 |
| retailPrice                       | float          | 零售价       |
| originalPrice                     | float          | 单价         |
| finalPrice                        | float          | 折后价       |
| albumImg                          | string         | 封面图片     |
| seriesId                          | int            | 所在系列id   |
| styleModifyTime                   | int            | 款式修改时间 |
| **[colors](#colors)**             | `object array` | 颜色信息     |
| **[sizeNameList](#sizenamelist)** | `object array` | 尺码信息     |

##### colors元素说明

| 名称           | 类型           | 说明              |
| -------------- | :----:         | --                |
| colorId        | int            | 颜色id            |
| name           | string         | 颜色名称          |
| value          | string         | 颜色值            |
| ~~imgs~~       | string array   | 颜色图片,暂时不用 |
| **sizes**      | `object array` | 尺码订购信息      |

##### sizes元素说明

| 名称           | 类型   | 说明         |
| -------------- | :----: | --           |
| sizeId         | int    | 尺码id       |
| amount         | string | 尺码订购件数 |


#### seriesMap元素说明

| 名称           | 类型   | 说明                            |
| -------------- | :----: | --                              |
| seriesId       | int    | 系列编号                        |
| name           | string | 系列名称                        |
| orderAmountMin | int    | 最小起购数量                    |
| supplyStatus   | int    | 供货类型,0 现货；1 分时间段发货 |

### 请求参数示例

有些字段是老的接口中遗留的字段，貌似没有什么用

```json
{
    "addressModifAvailable": true,
    "autoCloseHoursRemains": -1,
    "autoReceivedHoursRemains": -1,
    "billCreatePersonId": null,
    "billCreatePersonName": "",
    "brandId": 3,
    "brandLogo": "http://source.yunejian.com/ufile/20160421/80c8c12155e341fabff58e8ffeb23a40",
    "brandName": "DDD的style",
    "businessCard": "",
    "buyerAddress": null,
    "buyerAddressId": null,
    "buyerEmail": "",
    "buyerName": "",
    "buyerStoreCity": "",
    "buyerStoreProvince": "",
    "closeReqStatus": 0,
    "curType": 0,
    "deliveryChoose": "",
    "designerId": 2,
    "finalTotalPrice": 0,
    "groups": [
      {
        "dateRange": {
          "end": 1475291303000,
          "id": 834,
          "name": "2016 SS",
          "start": 1464750503000
        },
        "styles": [
          {
            "albumImg": "http://source.yunejian.com/ufile/20160421/2927f1ff1ea148d1ac521b647c287339",
            "colors": [
              {
                "colorId": 4935,
                "imgs": [
                  "http://source.yunejian.com/ufile/20160421/3e513d9bd5834c36b9fb070d16213274",
                  "http://source.yunejian.com/ufile/20160421/46db2b3f8dd740adbfc7372d55080048",
                  "http://source.yunejian.com/ufile/20160421/38490aec6ebd453684b072794b52e26e",
                  "http://source.yunejian.com/ufile/20160421/8b67f96a9e69465bb6a6afd952f9a863",
                  "http://source.yunejian.com/ufile/20160421/af154561c05344a58d941faed71a2d86"
                ],
                "name": "藏青+白",
                "sizes": [
                  {
                    "amount": 0,
                    "sizeId": 7619
                  },
                  {
                    "amount": 0,
                    "sizeId": 7620
                  },
                  {
                    "amount": 0,
                    "sizeId": 7621
                  },
                  {
                    "amount": 0,
                    "sizeId": 7622
                  },
                  {
                    "amount": 0,
                    "sizeId": 7623
                  },
                  {
                    "amount": 0,
                    "sizeId": 7624
                  },
                  {
                    "amount": 0,
                    "sizeId": 7625
                  },
                  {
                    "amount": 0,
                    "sizeId": 7626
                  },
                  {
                    "amount": 10,
                    "sizeId": 7627
                  }
                ],
                "value": "#12122b"
              }
            ],
            "finalPrice": 1250,
            "name": "丝毛重叠半身裙",
            "orderAmountMin": null,
            "originalPrice": 1250,
            "retailPrice": 2600,
            "seriesId": 176,
            "sizeNameList": [
              {
                "id": 7619,
                "value": "50"
              },
              {
                "id": 7620,
                "value": "60"
              },
              {
                "id": 7621,
                "value": "70"
              },
              {
                "id": 7622,
                "value": "75"
              },
              {
                "id": 7623,
                "value": "80"
              },
              {
                "id": 7624,
                "value": "85"
              },
              {
                "id": 7625,
                "value": "90"
              },
              {
                "id": 7626,
                "value": "95"
              },
              {
                "id": 7627,
                "value": "100"
              }
            ],
            "styleCode": "SWC409W",
            "styleId": 1033,
            "styleModifyTime": 1463478213000
          }
        ]
      }
    ],
    "occasion": "",
    "orderCode": "123398877017",
    "orderCreateTime": 1463478227000,
    "orderDescription": "",
    "orderStatus": 3,
    "payApp": "",
    "realBuyerId": null,
    "seriesMap": {
      "176": {
        "name": "2016 SS",
        "orderAmountMin": 3,
        "seriesId": 176,
        "supplyStatus": 1
      }
    },
    "shareCode": "W146347823871909154",
    "totalPrice": 0
  }
```
