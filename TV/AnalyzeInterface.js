//获取接口数据
function GetInterfaceData(){
	var data=[                                  
						"https://z1.m1907.cn/?jx=",
                                                "https://www.sjzvip.com/jiexi1.php?url=",
                                                
                                                "http://jx.drgxj.com/?url=",
                                                "https://jx.618g.com/?url=",     
                                                "http://jx.itaoju.top/?url="
						
			];
	return data;
}


//广告网址,支持正则表达式
var AdReject=[

]


var ClearAll=true;//是所有网页启用去除广告功能(true),还是只对带?no的链接启用去除广告功能(false)
