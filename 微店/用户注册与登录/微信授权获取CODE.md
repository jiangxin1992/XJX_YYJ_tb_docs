微信授权获取CODE
=======
YEJ测试数据

````
appId=wx538862158e3e051e
scope采用snsapi_userinfo
````


在确保微信公众账号拥有授权作用域（scope参数）的权限的前提下（服务号获得高级接口后，默认拥有scope参数中的snsapi_base和snsapi_userinfo），引导关注者打开如下页面：

````
https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
若提示“该链接无法访问”，请检查参数是否填写错误，是否拥有scope参数对应的授权作用域权限。
````
尤其注意：由于授权操作安全等级较高，所以在发起授权请求时，微信会对授权链接做正则强匹配校验，如果链接的参数顺序不对，授权页面将无法正常访问

参考链接(请在微信客户端中打开此链接体验)

````

Scope为snsapi_base
https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect
Scope为snsapi_userinfo
https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect

````
尤其注意：跳转回调redirect_uri，应当使用https链接来确保授权code的安全性。
参数说明

|     名称  	 | 是否必返回 |             说明                                           |
|------------|----------|-----------------------------------------------------------|
| appid            | Y        | 公众号的唯一标识	                                         |
| redirect_uri     | Y        | 授权后重定向的回调链接地址，请使用urlencode对链接进行处理          |
| response_type    | Y        | 登录过程是否存在错误                                         |
| scope            | Y        | 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）                                                                    |
| state            | Y        | 重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节                                    
| #wechat_redirect            | Y        | 无论直接打开还是做页面302重定向时候，必须带此参数        |                                  