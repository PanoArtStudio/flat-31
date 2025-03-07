// Garden Gnome Software - Skin
// Pano2VR 5.2.4/15996
// Filename: mono--pano2vr-skin.ggsk
// Generated Пт мар 7 22:23:56 2025

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/okinstrbutton__o.png';
		preLoadImg.src=basePath + 'images/okinstrbutton__a.png';
		preLoadImg.src=basePath + 'images/buttondown__o.png';
		preLoadImg.src=basePath + 'images/buttondown__a.png';
		preLoadImg.src=basePath + 'images/buttonup__o.png';
		preLoadImg.src=basePath + 'images/buttonup__a.png';
		preLoadImg.src=basePath + 'images/buttonleft0__o.png';
		preLoadImg.src=basePath + 'images/buttonleft0__a.png';
		preLoadImg.src=basePath + 'images/buttonleft__o.png';
		preLoadImg.src=basePath + 'images/buttonleft__a.png';
		preLoadImg.src=basePath + 'images/buttonplus__o.png';
		preLoadImg.src=basePath + 'images/buttonplus__a.png';
		preLoadImg.src=basePath + 'images/buttonminus__o.png';
		preLoadImg.src=basePath + 'images/buttonminus__a.png';
		preLoadImg.src=basePath + 'images/buttonhome__o.png';
		preLoadImg.src=basePath + 'images/buttonhome__a.png';
		preLoadImg.src=basePath + 'images/buttonrotate__o.png';
		preLoadImg.src=basePath + 'images/buttonrotate__a.png';
		preLoadImg.src=basePath + 'images/buttonfullscreen__o.png';
		preLoadImg.src=basePath + 'images/buttonfullscreen__a.png';
		preLoadImg.src=basePath + 'images/buttonsocialshare__o.png';
		preLoadImg.src=basePath + 'images/buttonsocialshare__a.png';
		preLoadImg.src=basePath + 'images/buttonaddit__o.png';
		preLoadImg.src=basePath + 'images/buttonaddit__a.png';
		preLoadImg.src=basePath + 'images/closebutton0__o.png';
		preLoadImg.src=basePath + 'images/closebutton0__a.png';
		preLoadImg.src=basePath + 'images/closebutton__o.png';
		preLoadImg.src=basePath + 'images/closebutton__a.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._instructionbox=document.createElement('div');
		this._instructionbox__img=document.createElement('img');
		this._instructionbox__img.className='ggskin ggskin_image';
		this._instructionbox__img.setAttribute('src',basePath + 'images/instructionbox.png');
		this._instructionbox__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._instructionbox__img.className='ggskin ggskin_image';
		this._instructionbox__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._instructionbox__img);
		this._instructionbox.appendChild(this._instructionbox__img);
		this._instructionbox.ggId="instruction-box";
		this._instructionbox.ggLeft=-5320;
		this._instructionbox.ggTop=-200;
		this._instructionbox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._instructionbox.ggVisible=true;
		this._instructionbox.className='ggskin ggskin_image ';
		this._instructionbox.ggType='image';
		hs ='';
		hs+='height : 346px;';
		hs+='left : -5320px;';
		hs+='position : absolute;';
		hs+='top : -200px;';
		hs+='visibility : inherit;';
		hs+='width : 480px;';
		hs+='pointer-events:auto;';
		this._instructionbox.setAttribute('style',hs);
		this._instructionbox.style[domTransform + 'Origin']='50% 50%';
		me._instructionbox.ggIsActive=function() {
			return false;
		}
		me._instructionbox.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._instructionbox.onclick=function (e) {
			me._instructionbox.ggVisible = !me._instructionbox.ggVisible;
			var flag=me._instructionbox.ggVisible;
			me._instructionbox.style[domTransition]='none';
			me._instructionbox.style.visibility=((flag)&&(Number(me._instructionbox.style.opacity)>0||!me._instructionbox.style.opacity))?'inherit':'hidden';
		}
		this._instructionbox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._okinstrbutton=document.createElement('div');
		this._okinstrbutton__img=document.createElement('img');
		this._okinstrbutton__img.className='ggskin ggskin_button';
		this._okinstrbutton__img.setAttribute('src',basePath + 'images/okinstrbutton.png');
		this._okinstrbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._okinstrbutton__img.className='ggskin ggskin_button';
		this._okinstrbutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._okinstrbutton__img);
		this._okinstrbutton.appendChild(this._okinstrbutton__img);
		this._okinstrbutton.ggId="ok-instr-button";
		this._okinstrbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._okinstrbutton.ggVisible=true;
		this._okinstrbutton.className='ggskin ggskin_button ';
		this._okinstrbutton.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 414px;';
		hs+='position : absolute;';
		hs+='top : 302px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		this._okinstrbutton.setAttribute('style',hs);
		this._okinstrbutton.style[domTransform + 'Origin']='50% 50%';
		me._okinstrbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._okinstrbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._okinstrbutton.onmouseover=function (e) {
			me._okinstrbutton__img.src=basePath + 'images/okinstrbutton__o.png';
		}
		this._okinstrbutton.onmouseout=function (e) {
			me._okinstrbutton__img.src=basePath + 'images/okinstrbutton.png';
		}
		this._okinstrbutton.onmousedown=function (e) {
			me._okinstrbutton__img.src=basePath + 'images/okinstrbutton__a.png';
		}
		this._okinstrbutton.onmouseup=function (e) {
			me._okinstrbutton__img.src=basePath + 'images/okinstrbutton.png';
		}
		this._okinstrbutton.ggUpdatePosition=function (useTransition) {
		}
		this._instructionbox.appendChild(this._okinstrbutton);
		this.divSkin.appendChild(this._instructionbox);
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggLeft=-2320;
		this._toolbar.ggTop=-47;
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container ';
		this._toolbar.ggType='container';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -2320px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 4640px;';
		hs+='pointer-events:none;';
		this._toolbar.setAttribute('style',hs);
		this._toolbar.style[domTransform + 'Origin']='50% 50%';
		me._toolbar.ggIsActive=function() {
			return false;
		}
		me._toolbar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._toolbar.onmouseover=function (e) {
			me.elementMouseOver['toolbar']=true;
		}
		this._toolbar.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._controlspanel.style[domTransition]='none';
			} else {
				me._controlspanel.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controlspanel.style.opacity='0.5';
			me._controlspanel.style.visibility=me._controlspanel.ggVisible?'inherit':'hidden';
			me.elementMouseOver['toolbar']=false;
		}
		this._toolbar.ontouchend=function (e) {
			me.elementMouseOver['toolbar']=false;
		}
		this._toolbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controlspanel=document.createElement('div');
		this._controlspanel.ggId="controls-panel";
		this._controlspanel.ggLeft=-2320;
		this._controlspanel.ggTop=-46;
		this._controlspanel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controlspanel.ggVisible=true;
		this._controlspanel.className='ggskin ggskin_rectangle ';
		this._controlspanel.ggType='rectangle';
		hs ='';
		hs+='background : #e0e0e0;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='left : -2320px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -46px;';
		hs+='visibility : inherit;';
		hs+='width : 4640px;';
		hs+='pointer-events:auto;';
		this._controlspanel.setAttribute('style',hs);
		this._controlspanel.style[domTransform + 'Origin']='50% 50%';
		me._controlspanel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._controlspanel.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._controlspanel.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttondown=document.createElement('div');
		this._buttondown__img=document.createElement('img');
		this._buttondown__img.className='ggskin ggskin_button';
		this._buttondown__img.setAttribute('src',basePath + 'images/buttondown.png');
		this._buttondown__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttondown__img.className='ggskin ggskin_button';
		this._buttondown__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttondown__img);
		this._buttondown.appendChild(this._buttondown__img);
		this._buttondown.ggId="button-down";
		this._buttondown.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttondown.ggVisible=true;
		this._buttondown.className='ggskin ggskin_button ';
		this._buttondown.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2111px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttondown.setAttribute('style',hs);
		this._buttondown.style[domTransform + 'Origin']='50% 50%';
		me._buttondown.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttondown.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttondown.onmouseover=function (e) {
			me._buttondown__img.src=basePath + 'images/buttondown__o.png';
		}
		this._buttondown.onmouseout=function (e) {
			me._buttondown__img.src=basePath + 'images/buttondown.png';
			me.elementMouseDown['buttondown']=false;
		}
		this._buttondown.onmousedown=function (e) {
			me._buttondown__img.src=basePath + 'images/buttondown__a.png';
			me.elementMouseDown['buttondown']=true;
		}
		this._buttondown.onmouseup=function (e) {
			me._buttondown__img.src=basePath + 'images/buttondown.png';
			me.elementMouseDown['buttondown']=false;
		}
		this._buttondown.ontouchend=function (e) {
			me.elementMouseDown['buttondown']=false;
		}
		this._buttondown.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttondown);
		this._buttonup=document.createElement('div');
		this._buttonup__img=document.createElement('img');
		this._buttonup__img.className='ggskin ggskin_button';
		this._buttonup__img.setAttribute('src',basePath + 'images/buttonup.png');
		this._buttonup__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonup__img.className='ggskin ggskin_button';
		this._buttonup__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonup__img);
		this._buttonup.appendChild(this._buttonup__img);
		this._buttonup.ggId="button-up";
		this._buttonup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonup.ggVisible=true;
		this._buttonup.className='ggskin ggskin_button ';
		this._buttonup.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2153px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonup.setAttribute('style',hs);
		this._buttonup.style[domTransform + 'Origin']='50% 50%';
		me._buttonup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonup.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonup.onmouseover=function (e) {
			me._buttonup__img.src=basePath + 'images/buttonup__o.png';
		}
		this._buttonup.onmouseout=function (e) {
			me._buttonup__img.src=basePath + 'images/buttonup.png';
			me.elementMouseDown['buttonup']=false;
		}
		this._buttonup.onmousedown=function (e) {
			me._buttonup__img.src=basePath + 'images/buttonup__a.png';
			me.elementMouseDown['buttonup']=true;
		}
		this._buttonup.onmouseup=function (e) {
			me._buttonup__img.src=basePath + 'images/buttonup.png';
			me.elementMouseDown['buttonup']=false;
		}
		this._buttonup.ontouchend=function (e) {
			me.elementMouseDown['buttonup']=false;
		}
		this._buttonup.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonup);
		this._buttonleft0=document.createElement('div');
		this._buttonleft0__img=document.createElement('img');
		this._buttonleft0__img.className='ggskin ggskin_button';
		this._buttonleft0__img.setAttribute('src',basePath + 'images/buttonleft0.png');
		this._buttonleft0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonleft0__img.className='ggskin ggskin_button';
		this._buttonleft0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonleft0__img);
		this._buttonleft0.appendChild(this._buttonleft0__img);
		this._buttonleft0.ggId="button-left";
		this._buttonleft0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonleft0.ggVisible=true;
		this._buttonleft0.className='ggskin ggskin_button ';
		this._buttonleft0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2195px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonleft0.setAttribute('style',hs);
		this._buttonleft0.style[domTransform + 'Origin']='50% 50%';
		me._buttonleft0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonleft0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonleft0.onmouseover=function (e) {
			me._buttonleft0__img.src=basePath + 'images/buttonleft0__o.png';
		}
		this._buttonleft0.onmouseout=function (e) {
			me._buttonleft0__img.src=basePath + 'images/buttonleft0.png';
			me.elementMouseDown['buttonleft0']=false;
		}
		this._buttonleft0.onmousedown=function (e) {
			me._buttonleft0__img.src=basePath + 'images/buttonleft0__a.png';
			me.elementMouseDown['buttonleft0']=true;
		}
		this._buttonleft0.onmouseup=function (e) {
			me._buttonleft0__img.src=basePath + 'images/buttonleft0.png';
			me.elementMouseDown['buttonleft0']=false;
		}
		this._buttonleft0.ontouchend=function (e) {
			me.elementMouseDown['buttonleft0']=false;
		}
		this._buttonleft0.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonleft0);
		this._buttonleft=document.createElement('div');
		this._buttonleft__img=document.createElement('img');
		this._buttonleft__img.className='ggskin ggskin_button';
		this._buttonleft__img.setAttribute('src',basePath + 'images/buttonleft.png');
		this._buttonleft__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonleft__img.className='ggskin ggskin_button';
		this._buttonleft__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonleft__img);
		this._buttonleft.appendChild(this._buttonleft__img);
		this._buttonleft.ggId="button-left";
		this._buttonleft.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonleft.ggVisible=true;
		this._buttonleft.className='ggskin ggskin_button ';
		this._buttonleft.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2237px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonleft.setAttribute('style',hs);
		this._buttonleft.style[domTransform + 'Origin']='50% 50%';
		me._buttonleft.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonleft.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonleft.onmouseover=function (e) {
			me._buttonleft__img.src=basePath + 'images/buttonleft__o.png';
		}
		this._buttonleft.onmouseout=function (e) {
			me._buttonleft__img.src=basePath + 'images/buttonleft.png';
			me.elementMouseDown['buttonleft']=false;
		}
		this._buttonleft.onmousedown=function (e) {
			me._buttonleft__img.src=basePath + 'images/buttonleft__a.png';
			me.elementMouseDown['buttonleft']=true;
		}
		this._buttonleft.onmouseup=function (e) {
			me._buttonleft__img.src=basePath + 'images/buttonleft.png';
			me.elementMouseDown['buttonleft']=false;
		}
		this._buttonleft.ontouchend=function (e) {
			me.elementMouseDown['buttonleft']=false;
		}
		this._buttonleft.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonleft);
		this._buttonplus=document.createElement('div');
		this._buttonplus__img=document.createElement('img');
		this._buttonplus__img.className='ggskin ggskin_button';
		this._buttonplus__img.setAttribute('src',basePath + 'images/buttonplus.png');
		this._buttonplus__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonplus__img.className='ggskin ggskin_button';
		this._buttonplus__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonplus__img);
		this._buttonplus.appendChild(this._buttonplus__img);
		this._buttonplus.ggId="button-plus";
		this._buttonplus.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonplus.ggVisible=true;
		this._buttonplus.className='ggskin ggskin_button ';
		this._buttonplus.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2279px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonplus.setAttribute('style',hs);
		this._buttonplus.style[domTransform + 'Origin']='50% 50%';
		me._buttonplus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonplus.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonplus.onmouseover=function (e) {
			me._buttonplus__img.src=basePath + 'images/buttonplus__o.png';
		}
		this._buttonplus.onmouseout=function (e) {
			me._buttonplus__img.src=basePath + 'images/buttonplus.png';
			me.elementMouseDown['buttonplus']=false;
		}
		this._buttonplus.onmousedown=function (e) {
			me._buttonplus__img.src=basePath + 'images/buttonplus__a.png';
			me.elementMouseDown['buttonplus']=true;
		}
		this._buttonplus.onmouseup=function (e) {
			me._buttonplus__img.src=basePath + 'images/buttonplus.png';
			me.elementMouseDown['buttonplus']=false;
		}
		this._buttonplus.ontouchend=function (e) {
			me.elementMouseDown['buttonplus']=false;
		}
		this._buttonplus.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonplus);
		this._buttonminus=document.createElement('div');
		this._buttonminus__img=document.createElement('img');
		this._buttonminus__img.className='ggskin ggskin_button';
		this._buttonminus__img.setAttribute('src',basePath + 'images/buttonminus.png');
		this._buttonminus__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonminus__img.className='ggskin ggskin_button';
		this._buttonminus__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonminus__img);
		this._buttonminus.appendChild(this._buttonminus__img);
		this._buttonminus.ggId="button-minus";
		this._buttonminus.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonminus.ggVisible=true;
		this._buttonminus.className='ggskin ggskin_button ';
		this._buttonminus.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2321px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonminus.setAttribute('style',hs);
		this._buttonminus.style[domTransform + 'Origin']='50% 50%';
		me._buttonminus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonminus.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonminus.onmouseover=function (e) {
			me._buttonminus__img.src=basePath + 'images/buttonminus__o.png';
		}
		this._buttonminus.onmouseout=function (e) {
			me._buttonminus__img.src=basePath + 'images/buttonminus.png';
			me.elementMouseDown['buttonminus']=false;
		}
		this._buttonminus.onmousedown=function (e) {
			me._buttonminus__img.src=basePath + 'images/buttonminus__a.png';
			me.elementMouseDown['buttonminus']=true;
		}
		this._buttonminus.onmouseup=function (e) {
			me._buttonminus__img.src=basePath + 'images/buttonminus.png';
			me.elementMouseDown['buttonminus']=false;
		}
		this._buttonminus.ontouchend=function (e) {
			me.elementMouseDown['buttonminus']=false;
		}
		this._buttonminus.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonminus);
		this._buttonhome=document.createElement('div');
		this._buttonhome__img=document.createElement('img');
		this._buttonhome__img.className='ggskin ggskin_button';
		this._buttonhome__img.setAttribute('src',basePath + 'images/buttonhome.png');
		this._buttonhome__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonhome__img.className='ggskin ggskin_button';
		this._buttonhome__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonhome__img);
		this._buttonhome.appendChild(this._buttonhome__img);
		this._buttonhome.ggId="button-home";
		this._buttonhome.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonhome.ggVisible=true;
		this._buttonhome.className='ggskin ggskin_button ';
		this._buttonhome.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2363px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonhome.setAttribute('style',hs);
		this._buttonhome.style[domTransform + 'Origin']='50% 50%';
		me._buttonhome.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonhome.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonhome.onclick=function (e) {
			me.player.moveToDefaultViewEx(1.4,0);
		}
		this._buttonhome.onmouseover=function (e) {
			me._buttonhome__img.src=basePath + 'images/buttonhome__o.png';
		}
		this._buttonhome.onmouseout=function (e) {
			me._buttonhome__img.src=basePath + 'images/buttonhome.png';
		}
		this._buttonhome.onmousedown=function (e) {
			me._buttonhome__img.src=basePath + 'images/buttonhome__a.png';
		}
		this._buttonhome.onmouseup=function (e) {
			me._buttonhome__img.src=basePath + 'images/buttonhome.png';
		}
		this._buttonhome.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonhome);
		this._buttonrotate=document.createElement('div');
		this._buttonrotate__img=document.createElement('img');
		this._buttonrotate__img.className='ggskin ggskin_button';
		this._buttonrotate__img.setAttribute('src',basePath + 'images/buttonrotate.png');
		this._buttonrotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonrotate__img.className='ggskin ggskin_button';
		this._buttonrotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonrotate__img);
		this._buttonrotate.appendChild(this._buttonrotate__img);
		this._buttonrotate.ggId="button-rotate";
		this._buttonrotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonrotate.ggVisible=true;
		this._buttonrotate.className='ggskin ggskin_button ';
		this._buttonrotate.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2405px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonrotate.setAttribute('style',hs);
		this._buttonrotate.style[domTransform + 'Origin']='50% 50%';
		me._buttonrotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonrotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonrotate.onclick=function (e) {
			me.player.toggleAutorotate();
		}
		this._buttonrotate.onmouseover=function (e) {
			me._buttonrotate__img.src=basePath + 'images/buttonrotate__o.png';
		}
		this._buttonrotate.onmouseout=function (e) {
			me._buttonrotate__img.src=basePath + 'images/buttonrotate.png';
		}
		this._buttonrotate.onmousedown=function (e) {
			me._buttonrotate__img.src=basePath + 'images/buttonrotate__a.png';
		}
		this._buttonrotate.onmouseup=function (e) {
			me._buttonrotate__img.src=basePath + 'images/buttonrotate.png';
		}
		this._buttonrotate.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonrotate);
		this._buttonfullscreen=document.createElement('div');
		this._buttonfullscreen__img=document.createElement('img');
		this._buttonfullscreen__img.className='ggskin ggskin_button';
		this._buttonfullscreen__img.setAttribute('src',basePath + 'images/buttonfullscreen.png');
		this._buttonfullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonfullscreen__img.className='ggskin ggskin_button';
		this._buttonfullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonfullscreen__img);
		this._buttonfullscreen.appendChild(this._buttonfullscreen__img);
		this._buttonfullscreen.ggId="button-fullscreen";
		this._buttonfullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonfullscreen.ggVisible=true;
		this._buttonfullscreen.className='ggskin ggskin_button ';
		this._buttonfullscreen.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2447px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonfullscreen.setAttribute('style',hs);
		this._buttonfullscreen.style[domTransform + 'Origin']='50% 50%';
		me._buttonfullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonfullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonfullscreen.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._buttonfullscreen.onmouseover=function (e) {
			me._buttonfullscreen__img.src=basePath + 'images/buttonfullscreen__o.png';
		}
		this._buttonfullscreen.onmouseout=function (e) {
			me._buttonfullscreen__img.src=basePath + 'images/buttonfullscreen.png';
		}
		this._buttonfullscreen.onmousedown=function (e) {
			me._buttonfullscreen__img.src=basePath + 'images/buttonfullscreen__a.png';
		}
		this._buttonfullscreen.onmouseup=function (e) {
			me._buttonfullscreen__img.src=basePath + 'images/buttonfullscreen.png';
		}
		this._buttonfullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonfullscreen);
		this._buttonsocialshare=document.createElement('div');
		this._buttonsocialshare__img=document.createElement('img');
		this._buttonsocialshare__img.className='ggskin ggskin_button';
		this._buttonsocialshare__img.setAttribute('src',basePath + 'images/buttonsocialshare.png');
		this._buttonsocialshare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonsocialshare__img.className='ggskin ggskin_button';
		this._buttonsocialshare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonsocialshare__img);
		this._buttonsocialshare.appendChild(this._buttonsocialshare__img);
		this._buttonsocialshare.ggId="button-social-share";
		this._buttonsocialshare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonsocialshare.ggVisible=true;
		this._buttonsocialshare.className='ggskin ggskin_button ';
		this._buttonsocialshare.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 2489px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonsocialshare.setAttribute('style',hs);
		this._buttonsocialshare.style[domTransform + 'Origin']='50% 50%';
		me._buttonsocialshare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttonsocialshare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttonsocialshare.onclick=function (e) {
			var flag=me._socialbar.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._socialbar.style[domTransition]='none';
			} else {
				me._socialbar.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._socialbar.style.opacity='0';
				me._socialbar.style.visibility='hidden';
			} else {
				me._socialbar.style.opacity='1';
				me._socialbar.style.visibility=me._socialbar.ggVisible?'inherit':'hidden';
			}
			me._socialbar.ggOpacitiyActive=!flag;
		}
		this._buttonsocialshare.onmouseover=function (e) {
			me._buttonsocialshare__img.src=basePath + 'images/buttonsocialshare__o.png';
		}
		this._buttonsocialshare.onmouseout=function (e) {
			me._buttonsocialshare__img.src=basePath + 'images/buttonsocialshare.png';
		}
		this._buttonsocialshare.onmousedown=function (e) {
			me._buttonsocialshare__img.src=basePath + 'images/buttonsocialshare__a.png';
		}
		this._buttonsocialshare.onmouseup=function (e) {
			me._buttonsocialshare__img.src=basePath + 'images/buttonsocialshare.png';
		}
		this._buttonsocialshare.ggUpdatePosition=function (useTransition) {
		}
		this._controlspanel.appendChild(this._buttonsocialshare);
		this._toolbar.appendChild(this._controlspanel);
		this.divSkin.appendChild(this._toolbar);
		this._buttonaddit=document.createElement('div');
		this._buttonaddit__img=document.createElement('img');
		this._buttonaddit__img.className='ggskin ggskin_button';
		this._buttonaddit__img.setAttribute('src',basePath + 'images/buttonaddit.png');
		this._buttonaddit__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._buttonaddit__img.className='ggskin ggskin_button';
		this._buttonaddit__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buttonaddit__img);
		this._buttonaddit.appendChild(this._buttonaddit__img);
		this._buttonaddit.ggId="button-addit";
		this._buttonaddit.ggLeft=-20;
		this._buttonaddit.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttonaddit.ggVisible=true;
		this._buttonaddit.className='ggskin ggskin_button ';
		this._buttonaddit.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -20px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._buttonaddit.setAttribute('style',hs);
		this._buttonaddit.style[domTransform + 'Origin']='50% 50%';
		me._buttonaddit.ggIsActive=function() {
			return false;
		}
		me._buttonaddit.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._buttonaddit.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._panolist.style[domTransition]='none';
			} else {
				me._panolist.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._panolist.style.opacity='0.9';
			me._panolist.style.visibility=me._panolist.ggVisible?'inherit':'hidden';
		}
		this._buttonaddit.onmouseover=function (e) {
			me._buttonaddit__img.src=basePath + 'images/buttonaddit__o.png';
		}
		this._buttonaddit.onmouseout=function (e) {
			me._buttonaddit__img.src=basePath + 'images/buttonaddit.png';
		}
		this._buttonaddit.onmousedown=function (e) {
			me._buttonaddit__img.src=basePath + 'images/buttonaddit__a.png';
		}
		this._buttonaddit.onmouseup=function (e) {
			me._buttonaddit__img.src=basePath + 'images/buttonaddit.png';
		}
		this._buttonaddit.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this.divSkin.appendChild(this._buttonaddit);
		this._radarback=document.createElement('div');
		this._radarback__img=document.createElement('img');
		this._radarback__img.className='ggskin ggskin_image';
		this._radarback__img.setAttribute('src',basePath + 'images/radarback.png');
		this._radarback__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radarback__img.className='ggskin ggskin_image';
		this._radarback__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radarback__img);
		this._radarback.appendChild(this._radarback__img);
		this._radarback.ggId="radar-back";
		this._radarback.ggLeft=-74;
		this._radarback.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radarback.ggVisible=true;
		this._radarback.className='ggskin ggskin_image ';
		this._radarback.ggType='image';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -74px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		this._radarback.setAttribute('style',hs);
		this._radarback.style[domTransform + 'Origin']='50% 50%';
		me._radarback.ggIsActive=function() {
			return false;
		}
		me._radarback.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._radarback.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._radarbeam=document.createElement('div');
		this._radarbeam__img=document.createElement('img');
		this._radarbeam__img.className='ggskin ggskin_button';
		this._radarbeam__img.setAttribute('src',basePath + 'images/radarbeam.png');
		this._radarbeam__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._radarbeam__img.className='ggskin ggskin_button';
		this._radarbeam__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._radarbeam__img);
		this._radarbeam.appendChild(this._radarbeam__img);
		this._radarbeam.ggId="radar-beam";
		this._radarbeam.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radarbeam.ggVisible=true;
		this._radarbeam.className='ggskin ggskin_button ';
		this._radarbeam.ggType='button';
		hs ='';
		hs+='height : 72px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		this._radarbeam.setAttribute('style',hs);
		this._radarbeam.style[domTransform + 'Origin']='50% 50%';
		me._radarbeam.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._radarbeam.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._radarbeam.ggUpdatePosition=function (useTransition) {
		}
		this._radarback.appendChild(this._radarbeam);
		this.divSkin.appendChild(this._radarback);
		this._panolist=document.createElement('div');
		this._panolist.ggId="pano-list";
		this._panolist.ggLeft=-240;
		this._panolist.ggTop=-160;
		this._panolist.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._panolist.ggVisible=true;
		this._panolist.className='ggskin ggskin_rectangle ';
		this._panolist.ggType='rectangle';
		hs ='';
		hs+='background : #e0e0e0;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 319px;';
		hs+='left : -240px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -160px;';
		hs+='visibility : hidden;';
		hs+='width : 478px;';
		hs+='pointer-events:auto;';
		this._panolist.setAttribute('style',hs);
		this._panolist.style[domTransform + 'Origin']='50% 50%';
		me._panolist.ggIsActive=function() {
			return false;
		}
		me._panolist.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._panolist.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._closebutton0=document.createElement('div');
		this._closebutton0__img=document.createElement('img');
		this._closebutton0__img.className='ggskin ggskin_button';
		this._closebutton0__img.setAttribute('src',basePath + 'images/closebutton0.png');
		this._closebutton0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._closebutton0__img.className='ggskin ggskin_button';
		this._closebutton0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._closebutton0__img);
		this._closebutton0.appendChild(this._closebutton0__img);
		this._closebutton0.ggId="close-button";
		this._closebutton0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._closebutton0.ggVisible=true;
		this._closebutton0.className='ggskin ggskin_button ';
		this._closebutton0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 449px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._closebutton0.setAttribute('style',hs);
		this._closebutton0.style[domTransform + 'Origin']='50% 50%';
		me._closebutton0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._closebutton0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._closebutton0.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._panolist.style[domTransition]='none';
			} else {
				me._panolist.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._panolist.style.opacity='0';
			me._panolist.style.visibility='hidden';
		}
		this._closebutton0.onmouseover=function (e) {
			me._closebutton0__img.src=basePath + 'images/closebutton0__o.png';
		}
		this._closebutton0.onmouseout=function (e) {
			me._closebutton0__img.src=basePath + 'images/closebutton0.png';
		}
		this._closebutton0.onmousedown=function (e) {
			me._closebutton0__img.src=basePath + 'images/closebutton0__a.png';
		}
		this._closebutton0.onmouseup=function (e) {
			me._closebutton0__img.src=basePath + 'images/closebutton0.png';
		}
		this._closebutton0.ggUpdatePosition=function (useTransition) {
		}
		this._panolist.appendChild(this._closebutton0);
		this.divSkin.appendChild(this._panolist);
		this._socialbar=document.createElement('div');
		this._socialbar.ggId="social-bar";
		this._socialbar.ggLeft=-101;
		this._socialbar.ggTop=-56;
		this._socialbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._socialbar.ggVisible=true;
		this._socialbar.className='ggskin ggskin_rectangle ';
		this._socialbar.ggType='rectangle';
		hs ='';
		hs+='background : #e0e0e0;';
		hs+='border : 1px solid #585858;';
		hs+='cursor : default;';
		hs+='height : 102px;';
		hs+='left : -101px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : hidden;';
		hs+='width : 199px;';
		hs+='pointer-events:auto;';
		this._socialbar.setAttribute('style',hs);
		this._socialbar.style[domTransform + 'Origin']='50% 50%';
		me._socialbar.ggIsActive=function() {
			return false;
		}
		me._socialbar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._socialbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._closebutton=document.createElement('div');
		this._closebutton__img=document.createElement('img');
		this._closebutton__img.className='ggskin ggskin_button';
		this._closebutton__img.setAttribute('src',basePath + 'images/closebutton.png');
		this._closebutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._closebutton__img.className='ggskin ggskin_button';
		this._closebutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._closebutton__img);
		this._closebutton.appendChild(this._closebutton__img);
		this._closebutton.ggId="close-button";
		this._closebutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._closebutton.ggVisible=true;
		this._closebutton.className='ggskin ggskin_button ';
		this._closebutton.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 171px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._closebutton.setAttribute('style',hs);
		this._closebutton.style[domTransform + 'Origin']='50% 50%';
		me._closebutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._closebutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._closebutton.onclick=function (e) {
			var flag=me._socialbar.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._socialbar.style[domTransition]='none';
			} else {
				me._socialbar.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._socialbar.style.opacity='0';
				me._socialbar.style.visibility='hidden';
			} else {
				me._socialbar.style.opacity='0';
				me._socialbar.style.visibility='hidden';
			}
			me._socialbar.ggOpacitiyActive=!flag;
		}
		this._closebutton.onmouseover=function (e) {
			me._closebutton__img.src=basePath + 'images/closebutton__o.png';
		}
		this._closebutton.onmouseout=function (e) {
			me._closebutton__img.src=basePath + 'images/closebutton.png';
		}
		this._closebutton.onmousedown=function (e) {
			me._closebutton__img.src=basePath + 'images/closebutton__a.png';
		}
		this._closebutton.onmouseup=function (e) {
			me._closebutton__img.src=basePath + 'images/closebutton.png';
		}
		this._closebutton.ggUpdatePosition=function (useTransition) {
		}
		this._socialbar.appendChild(this._closebutton);
		this._socialfb=document.createElement('div');
		this._socialfb__img=document.createElement('img');
		this._socialfb__img.className='ggskin ggskin_image';
		this._socialfb__img.setAttribute('src',basePath + 'images/socialfb.png');
		this._socialfb__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._socialfb__img.className='ggskin ggskin_image';
		this._socialfb__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._socialfb__img);
		this._socialfb.appendChild(this._socialfb__img);
		this._socialfb.ggId="social-fb";
		this._socialfb.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._socialfb.ggVisible=true;
		this._socialfb.className='ggskin ggskin_image ';
		this._socialfb.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 22px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._socialfb.setAttribute('style',hs);
		this._socialfb.style[domTransform + 'Origin']='50% 50%';
		me._socialfb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._socialfb.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._socialfb.onclick=function (e) {
			me.player.openUrl("https:\/\/www.facebook.com\/profile.php?id=100004696787554","_blank");
		}
		this._socialfb.onmouseover=function (e) {
			me.elementMouseOver['socialfb']=true;
		}
		this._socialfb.onmouseout=function (e) {
			me._socialfb.style[domTransition]='none';
			me._socialfb.style.opacity='0.8';
			me._socialfb.style.visibility=me._socialfb.ggVisible?'inherit':'hidden';
			me.elementMouseOver['socialfb']=false;
		}
		this._socialfb.ontouchend=function (e) {
			me.elementMouseOver['socialfb']=false;
		}
		this._socialfb.ggUpdatePosition=function (useTransition) {
		}
		this._socialbar.appendChild(this._socialfb);
		this._socialgp=document.createElement('div');
		this._socialgp__img=document.createElement('img');
		this._socialgp__img.className='ggskin ggskin_image';
		this._socialgp__img.setAttribute('src',basePath + 'images/socialgp.png');
		this._socialgp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._socialgp__img.className='ggskin ggskin_image';
		this._socialgp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._socialgp__img);
		this._socialgp.appendChild(this._socialgp__img);
		this._socialgp.ggId="social-gp";
		this._socialgp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._socialgp.ggVisible=true;
		this._socialgp.className='ggskin ggskin_image ';
		this._socialgp.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 78px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._socialgp.setAttribute('style',hs);
		this._socialgp.style[domTransform + 'Origin']='50% 50%';
		me._socialgp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._socialgp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._socialgp.onclick=function (e) {
			me.player.openUrl("https:\/\/t.me\/PanoArtStudio","_blank");
		}
		this._socialgp.onmouseover=function (e) {
			me.elementMouseOver['socialgp']=true;
		}
		this._socialgp.onmouseout=function (e) {
			me._socialgp.style[domTransition]='none';
			me._socialgp.style.opacity='0.8';
			me._socialgp.style.visibility=me._socialgp.ggVisible?'inherit':'hidden';
			me.elementMouseOver['socialgp']=false;
		}
		this._socialgp.ontouchend=function (e) {
			me.elementMouseOver['socialgp']=false;
		}
		this._socialgp.ggUpdatePosition=function (useTransition) {
		}
		this._socialbar.appendChild(this._socialgp);
		this._socialpinterest=document.createElement('div');
		this._socialpinterest__img=document.createElement('img');
		this._socialpinterest__img.className='ggskin ggskin_image';
		this._socialpinterest__img.setAttribute('src',basePath + 'images/socialpinterest.png');
		this._socialpinterest__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._socialpinterest__img.className='ggskin ggskin_image';
		this._socialpinterest__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._socialpinterest__img);
		this._socialpinterest.appendChild(this._socialpinterest__img);
		this._socialpinterest.ggId="social-pinterest";
		this._socialpinterest.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._socialpinterest.ggVisible=true;
		this._socialpinterest.className='ggskin ggskin_image ';
		this._socialpinterest.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 133px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._socialpinterest.setAttribute('style',hs);
		this._socialpinterest.style[domTransform + 'Origin']='50% 50%';
		me._socialpinterest.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._socialpinterest.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._socialpinterest.onclick=function (e) {
			me.player.openUrl("http:\/\/wa.me\/+995592107477","_blank");
		}
		this._socialpinterest.onmouseover=function (e) {
			me.elementMouseOver['socialpinterest']=true;
		}
		this._socialpinterest.onmouseout=function (e) {
			me._socialpinterest.style[domTransition]='none';
			me._socialpinterest.style.opacity='0.8';
			me._socialpinterest.style.visibility=me._socialpinterest.ggVisible?'inherit':'hidden';
			me.elementMouseOver['socialpinterest']=false;
		}
		this._socialpinterest.ontouchend=function (e) {
			me.elementMouseOver['socialpinterest']=false;
		}
		this._socialpinterest.ggUpdatePosition=function (useTransition) {
		}
		this._socialbar.appendChild(this._socialpinterest);
		this._sharetext=document.createElement('div');
		this._sharetext__text=document.createElement('div');
		this._sharetext.className='ggskin ggskin_textdiv';
		this._sharetext.ggTextDiv=this._sharetext__text;
		this._sharetext.ggId="share-text";
		this._sharetext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sharetext.ggVisible=true;
		this._sharetext.className='ggskin ggskin_text ';
		this._sharetext.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:auto;';
		this._sharetext.setAttribute('style',hs);
		this._sharetext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._sharetext__text.setAttribute('style',hs);
		this._sharetext__text.innerHTML="Share on";
		this._sharetext.appendChild(this._sharetext__text);
		me._sharetext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sharetext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sharetext.ggUpdatePosition=function (useTransition) {
		}
		this._socialbar.appendChild(this._sharetext);
		this.divSkin.appendChild(this._socialbar);
		this._hide_container=document.createElement('div');
		this._hide_container.ggId="hide_container";
		this._hide_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_container.ggVisible=false;
		this._hide_container.className='ggskin ggskin_container ';
		this._hide_container.ggType='container';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		this._hide_container.setAttribute('style',hs);
		this._hide_container.style[domTransform + 'Origin']='50% 50%';
		me._hide_container.ggIsActive=function() {
			return false;
		}
		me._hide_container.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_container.ggUpdatePosition=function (useTransition) {
		}
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark ';
		this._markertemplate.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 658px;';
		hs+='position : absolute;';
		hs+='top : 109px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate.onmouseover=function (e) {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function (e) {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._markertemplate.ggUpdateConditionNodeChange=function () {
				me._markertemplate__normal.ggNodeChangeMain();
				me._markertemplate__active.ggNodeChangeMain();
		}
		this._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		this._markertemplate.ggNodeChange=function () {
			me._markertemplate.ggUpdateConditionNodeChange();
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text ';
		this._marker_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : hidden;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		this._marker_title.setAttribute('style',hs);
		this._marker_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #e0e0e0;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((78-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._markertemplate.appendChild(this._marker_title);
		this._hide_container.appendChild(this._markertemplate);
		this.divSkin.appendChild(this._hide_container);
		this._loading_container=document.createElement('div');
		this._loading_container.ggId="loading_container";
		this._loading_container.ggLeft=-96;
		this._loading_container.ggTop=-105;
		this._loading_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_container.ggVisible=true;
		this._loading_container.className='ggskin ggskin_container ';
		this._loading_container.ggType='container';
		hs ='';
		hs+='height : 192px;';
		hs+='left : -96px;';
		hs+='position : absolute;';
		hs+='top : -105px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:none;';
		this._loading_container.setAttribute('style',hs);
		this._loading_container.style[domTransform + 'Origin']='50% 50%';
		me._loading_container.ggIsActive=function() {
			return false;
		}
		me._loading_container.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadback=document.createElement('div');
		this._loadback.ggId="load-back";
		this._loadback.ggLeft=-320;
		this._loadback.ggTop=-231;
		this._loadback.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadback.ggVisible=true;
		this._loadback.className='ggskin ggskin_rectangle ';
		this._loadback.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 4480px;';
		hs+='left : -320px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -231px;';
		hs+='visibility : inherit;';
		hs+='width : 4640px;';
		hs+='pointer-events:auto;';
		this._loadback.setAttribute('style',hs);
		this._loadback.style[domTransform + 'Origin']='50% 50%';
		me._loadback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadback.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadback.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_container.appendChild(this._loadback);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading_text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text ';
		this._loading_text.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		this._loading_text.setAttribute('style',hs);
		this._loading_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(224,224,224,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs=(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_text.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((67-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._loading_container.appendChild(this._loading_text);
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_button';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.png');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img.className='ggskin ggskin_button';
		this._loading_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_image__img);
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-97;
		this._loading_image.ggTop=-96;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_button ';
		this._loading_image.ggType='button';
		hs ='';
		hs+='height : 256px;';
		hs+='left : -97px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_container.appendChild(this._loading_image);
		this.divSkin.appendChild(this._loading_container);
		this._logomono=document.createElement('div');
		this._logomono__img=document.createElement('img');
		this._logomono__img.className='ggskin ggskin_button';
		this._logomono__img.setAttribute('src',basePath + 'images/logomono.png');
		this._logomono__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._logomono__img.className='ggskin ggskin_button';
		this._logomono__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logomono__img);
		this._logomono.appendChild(this._logomono__img);
		this._logomono.ggId="logo-mono";
		this._logomono.ggLeft=-96;
		this._logomono.ggTop=-103;
		this._logomono.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logomono.ggVisible=true;
		this._logomono.className='ggskin ggskin_button ';
		this._logomono.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -96px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -103px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._logomono.setAttribute('style',hs);
		this._logomono.style[domTransform + 'Origin']='50% 50%';
		me._logomono.ggIsActive=function() {
			return false;
		}
		me._logomono.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._logomono.onclick=function (e) {
			me.player.openUrl("http:\/\/t.me\/PanoArtStudio","_blank");
		}
		this._logomono.onmouseover=function (e) {
			me.elementMouseOver['logomono']=true;
		}
		this._logomono.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me._logomono.style[domTransition]='none';
			} else {
				me._logomono.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._logomono.style.opacity='0.5';
			me._logomono.style.visibility=me._logomono.ggVisible?'inherit':'hidden';
			me.elementMouseOver['logomono']=false;
		}
		this._logomono.ontouchend=function (e) {
			me.elementMouseOver['logomono']=false;
		}
		this._logomono.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._logomono);
		this._markertemplate__normal=new SkinElement_marker_normal_Class(this,this._markertemplate);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left='0px';
		this._markertemplate__normal.style.top='0px';
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=new SkinElement_marker_active_Class(this,this._markertemplate);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left='0px';
		this._markertemplate__active.style.top='0px';
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		if (me.player.transitionsDisabled) {
			me._panolist.style[domTransition]='none';
		} else {
			me._panolist.style[domTransition]='all 500ms ease-out 0ms';
		}
		me._panolist.style.opacity='0';
		me._panolist.style.visibility='hidden';
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='0';
			me._loading_container.style.visibility='hidden';
			me._instructionbox.style[domTransition]='none';
			me._instructionbox.ggParameter.rx=5080;me._instructionbox.ggParameter.ry=0;
			me._instructionbox.style[domTransform]=parameterToTransform(me._instructionbox.ggParameter);
		}
		this.divSkin.ggReLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loading_container.style[domTransition]='none';
			} else {
				me._loading_container.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_container.style.opacity='1';
			me._loading_container.style.visibility=me._loading_container.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._panolist.style[domTransition]='none';
			} else {
				me._panolist.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._panolist.style.opacity='0';
			me._panolist.style.visibility='hidden';
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._markertemplate.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['toolbar']) {
			if (me.player.transitionsDisabled) {
				me._controlspanel.style[domTransition]='none';
			} else {
				me._controlspanel.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controlspanel.style.opacity='0.9';
			me._controlspanel.style.visibility=me._controlspanel.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseDown['buttondown']) {
			me.player.changeTiltLog(-1.4,true);
		}
		if (me.elementMouseDown['buttonup']) {
			me.player.changeTiltLog(1.4,true);
		}
		if (me.elementMouseDown['buttonleft0']) {
			me.player.changePanLog(1.4,true);
		}
		if (me.elementMouseDown['buttonleft']) {
			me.player.changePanLog(-1.4,true);
		}
		if (me.elementMouseDown['buttonplus']) {
			me.player.changeFovLog(-1.4,true);
		}
		if (me.elementMouseDown['buttonminus']) {
			me.player.changeFovLog(1.4,true);
		}
		var hs='';
		if (me._radarbeam.ggParameter) {
			hs+=parameterToTransform(me._radarbeam.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._radarbeam.style[domTransform]=hs;
		if (me.elementMouseOver['socialfb']) {
			me._socialfb.style[domTransition]='none';
			me._socialfb.style.opacity='1';
			me._socialfb.style.visibility=me._socialfb.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['socialgp']) {
			me._socialgp.style[domTransition]='none';
			me._socialgp.style.opacity='1';
			me._socialgp.style.visibility=me._socialgp.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['socialpinterest']) {
			me._socialpinterest.style[domTransition]='none';
			me._socialpinterest.style.opacity='1';
			me._socialpinterest.style.visibility=me._socialpinterest.ggVisible?'inherit':'hidden';
		}
		me._marker_title.ggUpdateText();
		me._loading_text.ggUpdateText();
		if (me.elementMouseOver['logomono']) {
			if (me.player.transitionsDisabled) {
				me._logomono.style[domTransition]='none';
			} else {
				me._logomono.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._logomono.style.opacity='1';
			me._logomono.style.visibility=me._logomono.ggVisible?'inherit':'hidden';
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="active_zone";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 19px;';
			hs+='position : absolute;';
			hs+='top : 16px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hostspot_marker=document.createElement('div');
			this._hostspot_marker__img=document.createElement('img');
			this._hostspot_marker__img.className='ggskin ggskin_button';
			this._hostspot_marker__img.setAttribute('src',basePath + 'images/hostspot_marker.png');
			this._hostspot_marker__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hostspot_marker__img.className='ggskin ggskin_button';
			this._hostspot_marker__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hostspot_marker__img);
			this._hostspot_marker.appendChild(this._hostspot_marker__img);
			this._hostspot_marker.ggId="hostspot_marker";
			this._hostspot_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hostspot_marker.ggVisible=true;
			this._hostspot_marker.className='ggskin ggskin_button ';
			this._hostspot_marker.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 61px;';
			hs+='left : 7px;';
			hs+='position : absolute;';
			hs+='top : -1px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			hs+='pointer-events:auto;';
			this._hostspot_marker.setAttribute('style',hs);
			this._hostspot_marker.style[domTransform + 'Origin']='50% 50%';
			me._hostspot_marker.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hostspot_marker.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hostspot_marker.onclick=function (e) {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			this._hostspot_marker.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hostspot_marker);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_marker_active_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_active=document.createElement('div');
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_image';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.png');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_active__img.className='ggskin ggskin_image';
		this._marker_active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._marker_active__img);
		this._marker_active.appendChild(this._marker_active__img);
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_image ';
		this._marker_active.ggType='image';
		hs ='';
		hs+='height : 37px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active.style[domTransform + 'Origin']='50% 50%';
		me._marker_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_active.ggUpdatePosition=function (useTransition) {
		}
		this._marker_active.ggNodeChangeMain=function() {
		}
		return this._marker_active;
	};
	function SkinElement_marker_normal_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_normal=document.createElement('div');
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_button';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.png');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_normal__img.className='ggskin ggskin_button';
		this._marker_normal__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._marker_normal__img);
		this._marker_normal.appendChild(this._marker_normal__img);
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_button ';
		this._marker_normal.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_normal.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_normal.onmouseover=function (e) {
			me._marker_normal__img.src=basePath + 'images/marker_normal__o.png';
		}
		this._marker_normal.onmouseout=function (e) {
			me._marker_normal__img.src=basePath + 'images/marker_normal.png';
		}
		this._marker_normal.onmousedown=function (e) {
			me._marker_normal__img.src=basePath + 'images/marker_normal__a.png';
		}
		this._marker_normal.onmouseup=function (e) {
			me._marker_normal__img.src=basePath + 'images/marker_normal.png';
		}
		this._marker_normal.ggUpdatePosition=function (useTransition) {
		}
		this._marker_normal.ggNodeChangeMain=function() {
		}
		return this._marker_normal;
	};
	this.addSkin();
};