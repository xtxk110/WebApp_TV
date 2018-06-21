//获取接口数据
function GetInterfaceData(){
	var data=["http://yun.baiyug.cn/vip/index.php?url=",
			  "http://jx.618g.com/?url=",
			  "http://api.baiyug.vip/index.php?url=",
			  "http://api.xyingyu.com/?url=",
			  "http://api.greatchina56.com/?url=",
			  "https://beaacc.com/api.php?url=",
			  "http://jiexi.071811.cc/jx2.php?url=",
			  "http://jx.iaeec.cn/jx.php/?url=",
			  "http://jx.cmbzzs.cn/jx.php/?url="
	];
	return data;
}
function GetQuery(name,url) {

            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r;
            if(url!=""){
            	r=url.match(reg);
            }else
            	r = window.location.search.substr(1).match(reg);//从?之后开始匹配如getQuery(courseid)返回一个数组["courseid=8","","8","&",index:0,input:"courseid=8"]
            if (r != null) 
            	return (r[2]);
            return null;
}
