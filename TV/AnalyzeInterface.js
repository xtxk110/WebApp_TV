//获取接口数据
function GetInterfaceData(){
	var data=[    		     
						"http://y.mt2t.com/lines?url=",            
                        "http://jx.drgxj.com/?url=", 
						"https://z1.m1907.cn/?jx=",
                        "http://api.51ckm.com/Box.php?url=",
						"https://jx.618g.com/?url="
						
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

//清除广告脚本  z>=2147480000 "break;"+
var AdJs=""+
"function ClearAd(){"+
	"var d=document.querySelectorAll('[style*=z-index],[style*=position]');"+
	"for (i=0;i<d.length;i++) {"+
		"var z=d[i].style.zIndex;var s=d[i].style"+
		"if(z>=100000||((s.position=='fixed||s.position=='absolute')'&&(s.bottom==0||s.bottom=='0px'))){"+
			"d[i].style.display='none';"+
			
		"}"+	
	"}"+
"}"+
"setTimeout(function(){ClearAd();},500);"+
"";

var ClearAll=true;//是所有网页启用去除广告功能(true),还是只对带?no的链接启用去除广告功能(false)
