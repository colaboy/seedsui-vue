//Dragrefresh 下拉刷新:Circle风格
(function(window,document,undefined){
	window.DfCircle=function(params){
		/*==================
		  Model
		  ==================*/
        var topParent,topContainer=params.topContainer,topIcon;
        if(params.topContainer!=false){
            var topParent=typeof params.topParent=="string"?document.querySelector(params.topParent):params.topParent;
            if(!topParent){
                console.log("SeedsUI Error : Dragrefresh.Circle topParent不存在，请检查页面中是否有此元素");
            }else{
                topContainer=topParent.querySelector(".SID-Dragrefresh-TopContainer");
                if(!topContainer){
            		topContainer=document.createElement("div");
            		topContainer.setAttribute("class","SID-Dragrefresh-TopContainer df-circle");
            		topContainer.innerHTML='<div class="df-circle-icon"></div>';
                    topParent.appendChild(topContainer);
                }
                var topIcon=topContainer.querySelector(".df-circle-icon");
            }
        }

        var bottomParent,bottomContainer=params.bottomContainer;
        if(params.bottomContainer==undefined){
            var bottomParent=typeof params.bottomParent=="string"?document.querySelector(params.bottomParent):params.bottomParent;
            if(!bottomParent){
                console.log("SeedsUI Error : Dragrefresh.Circle bottomParent不存在，请检查页面中是否有此元素");
            }else{
                bottomContainer=bottomParent.querySelector(".SID-Dragrefresh-BottomContainer");
                if(!bottomContainer){
            		bottomContainer=document.createElement("div");
            		bottomContainer.setAttribute("class","SID-Dragrefresh-BottomContainer df-circle-icon df-circle-icon-loading");
                    bottomContainer.setAttribute("style","height:50px");
            		bottomParent.appendChild(bottomContainer);
                }
            }
        }
		/*==================
		  params
		  ==================*/
		var defaults={
            overflowContainer:params.overflowContainer||document.body,
            topContainer:topContainer,
            bottomContainer:bottomContainer,
            baseline:params.baseline||-50,
            threshold:params.threshold||120,
            onTopRefresh:topContainer&&params.onTopRefresh?params.onTopRefresh:null,
            onTopComplete:topContainer?function(e){
                if(params.onTopComplete)params.onTopComplete(e);
                if(bottomContainer)bottomContainer.classList.remove("df-circle-icon-none");
            }:null,
            onTopNoData:topContainer&&params.onTopNoData?params.onTopNoData:null,
            onBottomRefresh:bottomContainer&&params.onBottomRefresh?params.onBottomRefresh:null,
            onBottomComplete:bottomContainer&&params.onBottomComplete?params.onBottomComplete:null,
            onBottomNoData:bottomContainer?function(e){
                bottomContainer.classList.add("df-circle-icon-none");
            }:null,
            //实体操作
            onPull:topContainer?function(e){
                if(!e.isTopRefreshing){
                    rotateDeg=e.touches.currentPosY*2;
                    topContainer.style.webkitTransform='translate3d(0,' + e.touches.currentPosY + 'px,0) rotate(' + rotateDeg + 'deg)';
                }
            }:null,
            onShowTop:topContainer?function(e){
                topContainer.style.webkitTransform='translate3d(0,120px,0) rotate(0deg)';
            }:null,
            onHideTop:topContainer?function(e){
                topContainer.style.webkitTransform='translate3d(0,0,0) rotate(0deg)';
            }:null,
            onTopShowed:topContainer?function(e){
                topIcon.classList.add("df-circle-icon-loading");
            }:null,
            onTopHid:topContainer?function(e){
                topIcon.classList.remove("df-circle-icon-loading");
            }:null,
        };
        /*==================
		  Plugin
		  ==================*/
		return new Dragrefresh(defaults);
	};
})(window,document,undefined);