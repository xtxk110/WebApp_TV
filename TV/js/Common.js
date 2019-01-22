
document.addEventListener('plusready', function() {
        plus.key.addEventListener('backbutton', function() {
        	var top=plus.webview.getTopWebview();
        	top.canBack(function(e){
        		//SetUserAgent(true);
        		if(e.canBack){
        			if(top.id==plus.webview.getLaunchWebview().id){
        				var child= plus.webview.getLaunchWebview().children();
        				for (i=0;i<child.length;i++) {
        					child[i].close();
        				}
        				Quit();
        			}else	
        				top.back();
        		}else{
        			if(top.id==plus.webview.getLaunchWebview().id)
        				Quit();
        			else{
        				WebviewCloseAll();
        				location.replace("index.html");	
        			}
        		}
        	});    
        });
        document.addEventListener("pause", function(){plus.storage.clear();}, false);
        document.addEventListener("background", function(){plus.storage.clear();}, false);
});

function WebviewCloseAll(){
				var wb=plus.webview.all();
					for (i=0;i<wb.length;i++) {
						if(wb[i].id==plus.webview.getLaunchWebview().id)
							continue;
						wb[i].close();
					}
			}

function Quit(){
	plus.nativeUI.confirm("退出APP程序?",function(e){
                	if(e.index==0){
                    	plus.runtime.quit();
                    	plus.storage.clear();
                	}
                },{"title":"警示","buttons":["确认","取消"],"verticalAlign":"center"});
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

function SetUserAgent(isMobile){ 
	if(isMobile)
		plus.navigator.setUserAgent("Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; XiaoMi Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1");
	else
		plus.navigator.setUserAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
}
