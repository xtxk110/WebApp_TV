//获取接口数据
function GetInterfaceData(){
	var data=[    		     
						"https://z1.m1907.cn/?jx=",
                        "http://jx.duzhiqiang.com/?url=",
                        "http://y.mt2t.com/lines?url="
						
			];
	return data;
}

//广告网址,支持正则表达式
//全民影院网站广告脚本
var AdReject=[
"https://kim.lfhnkp.com/5380.*"
]


var ClearAll=true;//是所有网页启用去除广告功能(true),还是只对带?no的链接启用去除广告功能(false)
