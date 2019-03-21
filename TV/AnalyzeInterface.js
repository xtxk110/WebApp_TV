//获取接口数据
function GetInterfaceData(){
	var data=[    		     
						"https://jx.618g.com/?url=",
						"http://api.smq1.com/?url=",
                        "https://z1.m1907.cn/?jx=",
						"http://api.51ckm.com/Box.php?url=",
						"http://vip.ooosoo.com/jx/?url=", 
						"http://api.zuilingxian.com/jiexi.php?url=",
						"http://api.baiyug.cn/vip/?url=",   
						"https://jx.km58.top/jx/?url=",
						"https://cdn.yangju.vip/k/?url=",
						"http://www.wmxz.wang/video.php?url=",
						"http://jqaaa.com/jx.php?url="
						
			];
	return data;
}
var AdReject=[

//全民影院网站广告脚本
{match:"https://js.users.51.la/19598991.js",redirect:"Empty.js"}
,{match:"https://s23.cnzz.com/z_stat.php?id=1276226633&web_id=1276226633",redirect:"Empty.js"}
,{match:"https://c.cnzz.com/core.php?web_id=1276226633&t=z",redirect:"Empty.js"}
,{match:"http://y.yeaimm.com/.*",redirect:"Empty.js"}
,{match:"https://m.puzwb.cn/.*",redirect:"Empty.js"}
,{match:"https://m.kfuih.cn/.*",redirect:"Empty.js"}
// 88影视网 https://m.88ys.cn/ 
,{match:"https://kim.lfhnkp.com/5380.*",redirect:"Empty.js"}
]

//清除广告脚本
var AdJs=""+
"function ClearAd(){"+
	"var d=document.querySelectorAll('[style*=z-index]');"+
	"for (i=0;i<d.length;i++) {"+
		"var z=d[i].style.zIndex;"+
		"if(z>=2147480000){"+
			"d[i].style.display='none';"+
			"break;"+
		"}"+	
	"}"+
"}"+
"setTimeout(function(){ClearAd();},500);"+
"";

var ClearAll=true;//是所有网页启用去除广告功能(true),还是只对带?no的链接启用去除广告功能(false)
