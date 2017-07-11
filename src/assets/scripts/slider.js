//Slider 滑动控件
(function(window,document,undefined){
	
	window.Slider=function(container,params){
		/*=========================
          Model
          ===========================*/
		var defaults={
			pagination:null,
			autoplay:false,
			slidesPerView:1,
			threshold:"50",
			duration:"300",
			height:0,

			//loop
			loop:false,
			slideDuplicateClass:'slider-slide-duplicate',

			//dom class
			wrapperClass:"slider-wrapper",
			slideClass:"slider-slide",
			slideActiveClass:"active",
			bulletClass:"bullet",
			bulletActiveClass:"active"

			/*callbacks
			onInit:function(Slider)
			onSlideChangeStart:function(Slider)
			onSlideChange:function(Slider)
			onSlideChangeEnd:function(Slider)
			*/
		}
		params=params||{};
		for(var def in defaults){
			if(params[def]===undefined){
				params[def]=defaults[def];
			}
		}
		//Slider
		var s=this;

		//Params
		s.params = params;

		//Container
		s.container=typeof container=="string"?document.querySelector(container):container;
		if(!s.container){
            console.log("SeedsUI Error：未找到Slider的ID，请检查传入参数是否正确");
            return;
        }
		s.container.width=s.container.clientWidth;
		//Wrapper
		s.wrapper=document.querySelector(container+" > ."+s.params.wrapperClass);
		// s.wrapper=s.container.querySelector(":scope > ."+s.params.wrapperClass);
		//Slides
		s.slides=document.querySelectorAll(container+" > ."+s.params.wrapperClass+" > ."+s.params.slideClass+"");
		// s.slides=s.wrapper.querySelectorAll(":scope > ."+s.params.slideClass);
		if(s.slides.length<=0){
			return;
		}
		/*=========================
          Method
          ===========================*/
        //根据index更新选中class
        s.updateClasses = function () {
        	//Slide
        	for(var i=0;i<s.slides.length;i++){
				s.slides[i].className=s.slides[i].className.replace(/\s{1,}active/,"");
			}
			s.slides[s.activeIndex].className+=" "+s.params.slideActiveClass;

			// Pagination
			var index=s.activeIndex;
			if(s.params.loop){
				if(s.activeIndex>=s.params.slidesPerView && s.activeIndex<=s.slides.length-1-s.params.slidesPerView){
					//console.log("原稿处");
					index=Math.abs(s.activeIndex-s.params.slidesPerView);
				}else{
					//console.log("左右复稿处");
					index=Math.abs(s.numberOfBullets-Math.abs(s.activeIndex-s.params.slidesPerView));
				}
			}
			if (!s.paginationContainer) return;
			for(var i=0;i<s.bullets.length;i++){
				s.bullets[i].className=s.bullets[i].className.replace(/\s{1,}active/,"");
			}
			s.bullets[index].className+=" "+s.params.bulletActiveClass;
        };
        //更新子容器
		s.updateSlides=function(){
			s.slides=document.querySelectorAll(container+" > ."+s.params.wrapperClass+" > ."+s.params.slideClass+"");
			//s.slides=s.wrapper.querySelectorAll(":scope > ."+s.params.slideClass);
		};
		//更新容器尺寸
        s.updateContainerSize=function(){
			//Slide width
			s.container.width=s.container.clientWidth;
			s.width=Math.floor(s.container.width/s.params.slidesPerView);

			//设置wrapper宽度
			s.wrapper.width=s.width*s.slides.length;
			s.wrapper.style.width=s.wrapper.width+"px";

			//设置单个slide宽度
			[].slice.call(s.slides).forEach(function(n,i,a){
				n.style.width=s.width+"px";
			});

			//Slide height
			if(s.params.height){
				s.height=s.params.height.indexOf("px")>0?s.params.height.substring(0,s.params.height.indexOf("px")):s.params.height;
			}else{
				s.height=s.container.clientHeight?s.container.clientHeight:s.wrapper.clientHeight;
			}
			[].slice.call(s.slides).forEach(function(n,i,a){
				n.style.height=s.height+"px";
			});

			if(s.height){
				s.container.style.height=s.height+"px";
				s.wrapper.style.height=s.height+"px";
			}

			//更新active index
			s.updateClasses();
			
			//如果有循环的话
			if(s.params.loop){
				s.params.duration=0;
				moveToIndex();
				s.params.duration=defaults.duration;
			}
		};
		//更新小点点
        s.updatePagination=function(){
        	if (!s.params.pagination) return;
        	s.paginationContainer=document.querySelector(container+" > "+s.params.pagination);
        	//s.paginationContainer = s.container.querySelector(":scope > "+s.params.pagination);

        	s.bullets=[];
        	s.paginationContainer.innerHTML="";
            s.numberOfBullets = s.params.loop ? s.slides.length - s.params.slidesPerView * 2 : s.slides.length;
            for (var i = 0; i < s.numberOfBullets; i++) {
            	var bullet=document.createElement("span");
				bullet.setAttribute("class",s.params.bulletClass);
				s.paginationContainer.appendChild(bullet);
				s.bullets.push(bullet);
            }
            //s.bullets = s.paginationContainer.querySelectorAll(":scope > "+s.params.bulletClass);
        };
        //更新
        s.update=function(){
        	if(s.params.loop)s.createLoop();
			s.updateSlides();
			if(s.params.pagination)s.updatePagination();
            s.updateContainerSize();
        }
        /*=========================
          Loop
          ===========================*/
        s.createLoop = function () {
        	if(!s.params.loop)return;
        	if(s.params.slidesPerView>s.slides.length)return;
        	var prependSlides = [], appendSlides = [],i;
        	[].slice.call(s.slides).forEach(function(n,i,a){
        		if (i < s.params.slidesPerView)appendSlides.push(n);
        		if (i < s.slides.length && i >= s.slides.length - s.params.slidesPerView)prependSlides.push(n);
        	});
        	for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.appendChild(appendSlides[i].cloneNode(true)).classList.add(s.params.slideDuplicateClass);
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.insertBefore(prependSlides[i].cloneNode(true),s.wrapper.firstElementChild).classList.add(s.params.slideDuplicateClass);
            }
            s.activeIndex=s.params.slidesPerView;
        };
        s.destroyLoop = function () {
        	s.params.loop=null;
        	var slideDuplicate=s.wrapper.querySelectorAll('.' + s.params.slideDuplicateClass);
        	for(var i=0,slideDu;slideDu=slideDuplicate[i++];){
        		s.wrapper.removeChild(slideDu);
        	}
        };
        //Controller
		/*=========================
          Touch Events
          ===========================*/
		//绑定事件
		s.events=function(detach){
			var touchTarget=s.container;
			var action=detach?"removeEventListener":"addEventListener";
			touchTarget[action]("touchstart",s.onTouchStart,false);
			touchTarget[action]("touchmove",s.onTouchMove,false);
			touchTarget[action]("touchend",s.onTouchEnd,false);
			touchTarget[action]("touchcancel",s.onTouchEnd,false);
		}
		//attach、dettach事件
		s.attach=function(event){
			s.events();
		}
		s.detach=function(event){
			s.events(true);
		}
		/*=========================
          Touch Handler
          ===========================*/
        //Touch信息
        s.touches={
			direction:0,
			vertical:0,
			horizontal:0,
			startX:0,
			startY:0,
			currentX:0,
        	currentY:0,
			endX:0,
			endY:0,
			diffX:0,
			diffY:0,
			posX:0
		};
        //索引
        s.activeIndex=0;
        function preventDefault(e){
			e.preventDefault();
		}
		s.onTouchStart=function(e){
			s.container.addEventListener("touchmove",preventDefault,false);
			s.touches.startX=e.touches[0].clientX;
			s.touches.startY=e.touches[0].clientY;
			//关闭自动播放
			s.stopAutoplay();
			//runCallBack
			s.target=s.slides[s.activeIndex];
			if(s.params.onSlideChangeStart)s.params.onSlideChangeStart(s);
		};
		s.onTouchMove=function(e){
			s.touches.currentX=e.touches[0].clientX;
			s.touches.currentY=e.touches[0].clientY;
			s.touches.diffX=s.touches.startX-s.touches.currentX;
			s.touches.diffY=s.touches.startY-s.touches.currentY;
			//runCallBack
			if(s.params.onSlideChange)s.params.onSlideChange(s);

			//设置滑动方向
			if(s.touches.direction === 0) {//设置滑动方向(-1上下 | 1左右)
				s.touches.direction = Math.abs(s.touches.diffX) > Math.abs(s.touches.diffY) ? 1 : -1;
			}
			if (s.touches.direction === -1) {//设置垂直方向(-1上 | 1下)
				s.touches.vertical = s.touches.diffY < 0 ? 1 : -1;
			}
			if (s.touches.direction === 1) {//设置左右方向(-1左 | 1右)
				s.touches.horizontal = s.touches.diffX < 0 ? 1 : -1;
			}
			
			//如果是上下滑动则不工作
			if(s.touches.vertical !=0 ){
				s.container.removeEventListener("touchmove",preventDefault,false);
				return;
			}

			//如果滑动了，则禁止事件向下传播
			e.stopPropagation();

			//x轴距离左边的像素，向左为负数，向右为正数
			var moveX=s.touches.posX-s.touches.diffX;
			//判断是否是边缘
			if(moveX>0 || -moveX + s.container.width >= s.wrapper.width){
				return;
			}
			s.wrapper.style.webkitTransform='translate3d(' + moveX + 'px,0px,0px)';
		};
		s.onTouchEnd=function(e){
			//s.container.removeEventListener("touchmove",preventDefault,false);
			//左右拉动
			if(s.touches.direction===1){
				//左右拉动
				if(s.touches.diffX>s.params.threshold){
					//下一页
					s.activeIndex++;
				}else if(s.touches.diffX<-s.params.threshold){
					//上一页
					s.activeIndex--;
				}
				s.slideTo();
			}
			//清空滑动方向
			s.touches.direction=0;
			s.touches.vertical=0;
			s.touches.horizontal=0;
			//开启自动播放
			s.startAutoplay();
		};
		/*=========================
          Autoplay
          ===========================*/
        s.startAutoplay = function () {
        	if(!s.params.autoplay)return;
			s.autoplayer=window.setInterval(function(){
				s.activeIndex++;
				if(s.activeIndex>=s.slides.length){
					s.activeIndex=0;
				}
				s.slideTo(s.activeIndex);
			},s.params["autoplay"]);
        };

        s.stopAutoplay = function (internal) {
        	if(s.autoplayer){
        		window.clearInterval(s.autoplayer);
        	}
        };

		/*=========================
          Method
          ===========================*/
        function moveToIndex(){
        	s.wrapper.style.webkitTransitionDuration=s.params.duration+"ms";
        	s.touches.posX=-s.activeIndex*s.width;
        	//s.wrapper.style.left=s.touches.posX+"px";
        	s.wrapper.style.webkitTransform='translate3d(' + s.touches.posX + 'px,0px,0px)';
        }
        s.slideTo=function(slideIndex){
        	if(slideIndex>=0){
				s.activeIndex=slideIndex;
			}
			//索引不能小于0
			if(s.activeIndex<0){
				s.activeIndex=0;
			}
			//索引不能大于slide总数
			if(s.activeIndex>s.slides.length-1){
				s.activeIndex=s.slides.length-1;
			}
			//一页多屏，索引不能露出空白区域
			if(s.params.slidesPerView>1 && s.activeIndex>s.slides.length-params.slidesPerView){
				s.activeIndex=s.slides.length-s.params.slidesPerView;
			}
			
			//更新class
			s.updateClasses();
			//移动至index
			moveToIndex();
			setTimeout(function(){
				s.wrapper.style.webkitTransitionDuration="0ms";
				//runCallBack
				s.target=s.slides[s.activeIndex];
				if(s.params.onSlideChangeEnd)s.params.onSlideChangeEnd(s);
				//循环的情况
				if(s.params.loop){
					if(s.touches.posX==0){
						s.activeIndex=s.slides.length-s.params.slidesPerView*2;
						//console.log("最左侧，应跳转到："+s.activeIndex);
						s.params.duration=0;
						moveToIndex();
						s.params.duration=defaults.duration;
						return;
					}
					if(-s.touches.posX + s.container.width >= s.wrapper.width){
						s.activeIndex=s.params.slidesPerView;
						//console.log("最右侧，应跳转到："+s.activeIndex);
						s.params.duration=0;
						moveToIndex();
						s.params.duration=defaults.duration;
						return;
					}
				}
			},s.params.duration);
        };

		//主函数
		s.init=function(){
			s.update();
			s.attach();
			if(s.params.autoplay) s.startAutoplay();
			//runCallBack
			s.target=s.slides[s.activeIndex];
			if(s.params.onInit)s.params.onInit(s);
		}
		//执行主函数
		s.init();
		// Return slider instance
		return s;
	}
	Slider.prototype={
		support:{
			touch:(function(){return 'ontouchstart' in window})(),
			animationend:(function(){return 'onanimationend' in window})(),
			transitionend:(function(){return 'ontransitionend' in window})(),
		}
	}
})(window,document,undefined);