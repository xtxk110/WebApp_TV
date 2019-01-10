
document.addEventListener('plusready', function() {
        plus.key.addEventListener('backbutton', function() {
        	var top=plus.webview.getTopWebview();
        	top.canBack(function(e){
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