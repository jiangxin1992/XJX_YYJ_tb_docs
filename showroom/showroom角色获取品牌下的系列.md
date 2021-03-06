showroom角色获取品牌下的系列
=======

**url**: /service/showroom/report/showRoomBrandSeries
**method** : get
**权限** : showroom主账号及子账号
**调用方** : Web

### 请求参数

|   名称   |  类型  | 是否必填 |   说明   |
|----------|--------|----------|----------|
| designerId    | int   | Y        | 设计师id |

### 返回值示例

```json
{
    "data": [
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/eeab775f5e224cbb867729c778152763",
            "authType": 2,
            "createId": 167,
            "createTime": 1467770074000,
            "description": "",
            "designerId": 167,
            "id": 191,
            "modifyId": 415,
            "modifyTime": 1500542324000,
            "name": "2018 SS秋冬",
            "note": "",
            "orderAmountMin": 8,
            "orderDueTime": 1484271759000,
            "region": "中国杭州",
            "season": "秋冬 Autumn/Winter",
            "sortId": 191,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 1,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/eeab775f5e224cbb867729c778152763",
            "authType": 2,
            "createId": 167,
            "createTime": 1467771442000,
            "description": "",
            "designerId": 167,
            "id": 192,
            "modifyId": 167,
            "modifyTime": 1500542338000,
            "name": "2018 SS秋冬 （美元）",
            "note": "",
            "orderAmountMin": 8,
            "orderDueTime": 1477100559000,
            "region": "中国杭州",
            "season": "秋冬 Autumn/Winter",
            "sortId": 192,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 1,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/8b8e83cd8eb54149a5c39a2a9dd06017",
            "authType": 2,
            "createId": 167,
            "createTime": 1467772278000,
            "description": "现货系列，应邀设计",
            "designerId": 167,
            "id": 193,
            "modifyId": 167,
            "modifyTime": 1500542343000,
            "name": "2017 DW Spring Flowers（现货）",
            "note": "",
            "orderAmountMin": 18,
            "orderDueTime": 1479954376000,
            "region": "中国杭州",
            "season": "走秀 Runway",
            "sortId": 193,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 0,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/fc878fb342794ffca5c383a335cedaf3",
            "authType": 2,
            "createId": 167,
            "createTime": 1467794642000,
            "description": "",
            "designerId": 167,
            "id": 196,
            "modifyId": 167,
            "modifyTime": 1503303293000,
            "name": "2019 CTH S-S",
            "note": "",
            "orderAmountMin": 8,
            "orderDueTime": 1501576808000,
            "region": "中国杭州",
            "season": "春夏 Spring/Summer",
            "sortId": 196,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 1,
            "year": 2019
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/8b8e83cd8eb54149a5c39a2a9dd06017",
            "authType": 0,
            "createId": 167,
            "createTime": 1469705961000,
            "description": "的订单的是水电费是的非的订单的是水电费是的非的订单的是水电费是的非的订单的是水电费是的非的订单的是水电费是的非的订单的是水电费是的非的",
            "designerId": 167,
            "id": 214,
            "modifyId": 167,
            "modifyTime": 1505453633000,
            "name": "2017 DW Spring Flowers（现货）___copy",
            "note": "",
            "orderAmountMin": 18,
            "orderDueTime": 1519439176000,
            "region": "中国杭州",
            "season": "走秀 Runway",
            "sortId": 205,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 0,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/8b8e83cd8eb54149a5c39a2a9dd06017",
            "authType": 2,
            "createId": 167,
            "createTime": 1470045070000,
            "description": "现货系列，应邀设计",
            "designerId": 167,
            "id": 215,
            "modifyId": 167,
            "modifyTime": 1503303477000,
            "name": "2017 DW Spring Flowers（现货）",
            "note": "",
            "orderAmountMin": 18,
            "orderDueTime": 1516415176000,
            "region": "中国杭州",
            "season": "走秀 Runway",
            "sortId": 206,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 0,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/8b8e83cd8eb54149a5c39a2a9dd06017",
            "authType": 2,
            "createId": 167,
            "createTime": 1470886205000,
            "description": "现货系列，应邀设计",
            "designerId": 167,
            "id": 219,
            "modifyId": 167,
            "modifyTime": 1505453432000,
            "name": "2017 DW Spring Flowers（现货）",
            "note": "",
            "orderAmountMin": 18,
            "orderDueTime": 1516415176000,
            "region": "中国杭州",
            "season": "走秀 Runway",
            "sortId": 207,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 0,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/8b8e83cd8eb54149a5c39a2a9dd06017",
            "authType": 0,
            "createId": 167,
            "createTime": 1470886272000,
            "description": "现货系列，应邀设计",
            "designerId": 167,
            "id": 220,
            "modifyId": 167,
            "modifyTime": 1505453353000,
            "name": "2017 DW Spring Flowers（现货）",
            "note": "",
            "orderAmountMin": 18,
            "orderDueTime": 1540693576000,
            "region": "中国杭州",
            "season": "走秀 Runway",
            "sortId": 208,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 0,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/eeab775f5e224cbb867729c778152763",
            "authType": 4,
            "createId": 167,
            "createTime": 1470886340000,
            "description": "点点滴滴",
            "designerId": 167,
            "id": 221,
            "modifyId": 167,
            "modifyTime": 1506513474000,
            "name": "2018 SS秋冬 （美元）test",
            "note": "",
            "orderAmountMin": 8,
            "orderDueTime": 1523670159000,
            "region": "中国杭州",
            "season": "秋冬 Autumn/Winter",
            "sortId": 389,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 1,
            "year": 2018
        },
        {
            "albumImg": "https://scdn.ycosystem.com/ufile/20160706/8b8e83cd8eb54149a5c39a2a9dd06017",
            "authType": 1,
            "createId": 167,
            "createTime": 1498016035000,
            "description": "现货系列，应邀设计",
            "designerId": 167,
            "id": 395,
            "modifyId": 167,
            "modifyTime": 1507691738000,
            "name": "2018 SS",
            "note": "",
            "orderAmountMin": 18,
            "orderDueTime": 1510971976000,
            "region": "中国杭州",
            "season": "走秀 Runway",
            "sortId": 209,
            "status": 0,
            "supplyEndTime": null,
            "supplyStartTime": null,
            "supplyStatus": 0,
            "year": 2018
        }
    ],
    "message": "成功",
    "status": 100
}
```