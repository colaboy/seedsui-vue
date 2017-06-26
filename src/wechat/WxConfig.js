import ajax from './../utils/ajax.js'

function WxConfig(fn){
	var url = '/app/std_mendian/hbtask/getSignature.action';
	var reqUrl = window.location.href.split('#')[0];
	var reqData = {url: reqUrl};
	$.ajax({
	   type: 'post',
	   url: url,
	   data: reqData,
	   dataType: 'json',
	   success: function(val){
	   		//$("#ID-Data").html(val instanceof Object?JSON.stringify(val):val);
	   		var conf = {
	          appId: val.corpId,
	          timestamp: val.timestamp,
	          nonceStr: val.nonceStr,
	          signature: val.signature,
	          jsApiList: ['chooseImage', 'uploadImage', 'getLocation']
	        };
	        conf.debug = false;

			wx.config(conf);
			if(fn)fn();
	   },
	   error:function(){
	   //$("#ID-Test").html('请求错误');
	   }
    });
}

export default WxConfig