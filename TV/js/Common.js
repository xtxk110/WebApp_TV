
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