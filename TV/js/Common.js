
document.addEventListener('plusready', function() {
        //var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
        	plus.nativeUI.confirm("退出APP程序?",function(e){
                	if(e.index==0){
                    	plus.runtime.quit();
                	}
                },{"title":"警示","buttons":["确认","取消"],"verticalAlign":"center"});
//          webview.canBack(function(e) {
//              
//			});    
        });
});

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