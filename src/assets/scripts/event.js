//Event 订阅发布
(function(window,document,undefined){
	window.Event=function(){
		var _listen,_trigger,_remove,
		_default='default',
		namespaceCache={},
		_create,
		each=function(arr,fn){
			var ret;
			for(var i=0;i<arr.length;i++){
				var n=arr[i];
				ret=fn.call(n,i,n);
			}
			return ret;
		};

		_listen=function(key,fn,cache){
			if(!cache[key]){
				cache[key]=[];
			}
			cache[key].push(fn);
		};
		_remove=function(key,cache,fn){
			if(!cache[key]){
				return;
			}
			if(fn){
				for(var i=cache[key].length;i>=0;i--){
					if(cache[key]===fn){
						cache[key].splice(i,1);
					}else{
						cache[key]=[];
					}
				}
			}else{
				cache[key]=[];
			}
		};
		_trigger=function(){
			var cache=[].shift.call(arguments),
			key=[].shift.call(arguments),
			args=arguments;
			stack=cache[key];
			if(!stack || !stack.length){
				return;
			}
			return each(stack,function(){
				return this.apply(this,args);
			});
		};
		_create=function(namespace){
			var namespace=namespace||_default;
			var cache={},
			offlineStack=[],//离线事件
			ret={
				listen:function(key,fn,last){
					_listen(key,fn,cache);
					if(offlineStack===null){
						return;
					}
					if(last==='last'){
						offlineStack.length && offlineStack.pop()();
					}else{
						each(offlineStack,function(){
							this();
						})
					}
					offlineStack=null;
				},
				one:function(key,fn,last){
					_remove(key,cache);
					this.listen(key,fn,last);
				},
				remove:function(key,fn){
					_remove(key,cache,fn);
				},
				trigger:function(){
					var _self=this;
					[].unshift.call(arguments,cache);
					var args=arguments;
					var fn=function(){
						return _trigger.apply(_self,args);
					}
					if(offlineStack){
						return offlineStack.push(fn);
					}
					return fn();
				}
			};
			if(Object.prototype.toString.call(namespace).indexOf("object HTML")===1 && namespace.getAttribute("id")){
				namespace=namespace.getAttribute("id");
			}
			return namespace ? (namespaceCache[namespace]?namespaceCache[namespace]:namespaceCache[namespace]=ret) : ret;
		};
		return{
			create:_create,
			one:function(key,fn,last){
				var event=this.create();
				event.one(key,fn,last);
			},
			remove:function(key,fn){
				var event=this.create();
				event.remove(key,fn);
			},
			listen:function(key,fn,last){
				var event=this.create();
				event.listen(key,fn,last);
			},
			trigger:function(){
				var event=this.create();
				event.trigger.apply(this,arguments);
			}
		};
	}();
	/********************先发布后订阅********************/
	/*var fn1=function(e){
		console.log(e);
	}
	var btn1=document.getElementById("button1");
	var btn2=document.getElementById("button2");
	var btn3=document.getElementById("button3");
	Event.create(btn1).listen('click',fn1);
	btn1.addEventListener("click",function(e){
		Event.create(this).trigger('click',e);
	},false);
	Event.create(btn2).listen('click',fn1);
	btn2.addEventListener("click",function(e){
		Event.create(this).trigger('click',e);
	},false);
	btn3.addEventListener("click",function(e){
		Event.create(this).trigger('click',e);
	},false);*/
	/********************使用命名空间********************/
	/*Event.create('namespace1').listen('click',function(e){
		console.log(e);
	});
	Event.create('namespace1').remove('click');
	Event.create('namespace1').trigger('click',1);
	Event.create('namespace2').listen('click',function(e){
		console.log(e);
	});
	Event.create('namespace2').trigger('click',2);*/
})(window,document,undefined);