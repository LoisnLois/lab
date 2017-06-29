	
	var inputval = $('#tool input');
	var sendbtn = $('.send');
	var comment = $('.comment');
	var popup = $('#popup');
	var text = $('.wrapint input');
	//设置适配字体
	//document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
	//var scale = 2 / devicePixelRatio;
	//document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no');
	
	//聊天页面定位到底部
	$('body').scrollTop($(document).height());

	//未输入内容是发送按钮置灰，输入后正常
	inputval.live('keyup',function(e){
		if(!($('#tool input').val() === '')){
			sendbtn.addClass("sendavailable");
		}else{
			sendbtn.removeClass("sendavailable");
		}
		
		//软键盘enter发送
		if(e.keyCode == 13){
			sendmsg();
		}
	});
	
	//点击发送按钮
	sendbtn.click(function(){
		sendmsg();
	});
	var now = '';
	function formattime(arg){
		if(arg<10){
			now += '0'+arg+':';
		}else{
			now += arg+':';
		}
	}
	
	var sendmsg = function(){
		var pretime = new Date();
		var sendval = $('.wrapint input').val();
		if(sendval===''|| sendval.trim()===''){
			var text = "不写点什么么？~_~";
			toasttips(text);
			return;
		}
		formattime(pretime.getHours());
		formattime(pretime.getMinutes());
		formattime(pretime.getSeconds());
		$('#content').append('<div class="question"><span>'+now.slice(0,-1)+'</span><span></span><span>'+sendval+'</span></div>');
		$('body').animate({scrollTop:$(document).height()});
		now = '';
		$('.wrapint input').val('');
		sendbtn.removeClass("sendavailable");
	};
		//点击评价，弹框
	comment.click(function(){
		if(true){
			popup.show();
			$('.mask').show();
			canPj = false;
			comment.removeClass('sendavailable');
		}
	});
	
	
	var str1 = "<span>解决问题能力</span><span>应答速度</span><span>系统功能</span><span>服务态度</span>";
	var str2 = "<span>解决问题能力</span><span>看不懂</span><span>问题未问完就断线</span><span>回复速度慢</span><span>服务态度</span><span>推荐链接不可用</span>";

	submitavailable();
	//评价，点击满意度按钮，显示二级按钮
	var commentbtn = $('#commentbtn span');
	var passdetails = $('#passdetails');
	var denydetails = $('#denydetails');
	var childcomet = $('.childcomet');

	$('#wonderful').click(function(){
		passdetails.hide();
		denydetails.hide();
		submitavailable();
	});
	$('#good').click(function(){
		passdetails.show();
		denydetails.hide();
		submitavailable();
	});
	$('#soso').click(function(){
		passdetails.show();
		denydetails.hide();
		submitavailable();
		
	});
	$('#bad').click(function(){
		passdetails.hide();
		denydetails.show();
		submitavailable();
	});
	$('#awful').click(function(){
		passdetails.hide();
		denydetails.show();
		
		submitavailable();
	});
	
	
	
	
	//一二级按钮选中后，提交评价按钮可用
	if($('#wonderful').hasClass('checked')){
		$('.submitbtn').addClass('submitavailable');
	}
	//二级按钮，切换选中样式
	function checkeddpan(){
		$('.childcomet span').click(function(){
			$('.childcomet span').removeClass('checked');
			$(this).addClass('checked');
			$('.submitbtn').addClass('submitavailable');
		});
		
		//点击满意度按钮，切换选中样式
		$('#commentbtn span').click(function(){
			
			$('.submitbtn').removeClass('submitavailable');
			$('#commentbtn span').removeClass('checked');
			$(this).addClass('checked');
			if($(this).text() === "非常满意"){
				$('.submitbtn').addClass('submitavailable');
			}else if($(this).text() === "满意" || $(this).text() === "一般"){
				if(!($("#passdetails span").text())){
					
					$("#passdetails").append(str1);
				}
				
				if($('#passdetails span').hasClass('checked')){
					$('.submitbtn').addClass('submitavailable');
				}
			}else{
				if(!($("#denydetails span").text())){
					$("#denydetails").append(str2);
				}
				if($('#denydetails span').hasClass('checked')){
					$('.submitbtn').addClass('submitavailable');
				}
			}
		});
	}
	
	function submitavailable(){
		checkeddpan();
		//一二级按钮选中后，提交评价按钮可用
		$('#commentbtn span').each(function(){
			if($(this).hasClass('checked')){
				if(!($(this).text() === "非常满意")){
					if(childcomet.hasClass('checked')){
						$('.submitbtn').addClass('submitavailable');
					}else{
						$('.submitbtn').removeClass('submitavailable');
					}
				}
			}
		});
	}
	

	//点击提交评价
	$('.submitbtn').click(function(){
		if($(this).hasClass('submitavailable')){
			var text = "评价已提交，感谢您的支持";
			toasttips(text);
		}
	});

	function toasttips(text){
		popup.hide();
		$('.mask').hide();
		$('.tipstoast').html(text);
		$('.tipstoast').fadeIn(300);
		setTimeout(function(){$('.tipstoast').fadeOut(300);},1000);
	}

	//11,16,19位数字禁止发送
	function digitExg(content){
		var digitArry;
		var reExp = new RegExp(/[0-9]+/g);
		digitArry = content.match(reExp);
		if(digitArry!=null || digitArry!=undefined){
			for(var i=0; i<digitArry.length;i++){
				if(digitArry[i].length==11){
					printMsg("answer","系统消息:为安全考虑，建议您不要发送连续11位数字");
					return true;
				}
				if(digitArry[i].length==16){
					printMsg("answer","系统消息:为安全考虑，建议您不要发送连续16位数字。");
					return true;
				}
				if(digitArry[i].length==19){
					printMsg("answer","系统消息:为安全考虑，建议您不要发送连续19位数字。");
					return true;
				}
			}
		}
		return false;
	}
	
	
	//聚焦时出现软键盘，失焦时隐藏
	function BlurOrFocus(){
		var obj = inputval[0];
		var docTouchend = function(event){
			if(event.target != obj){
				setTimeout(function(){
					obj.blur();
					document.removeEventListener('touchend',docTouchend,false);
				},1000);
				
			}
		};
		if(obj){
			obj.addEventListener('touchstart',function(){
				document.addEventListener('touchend',docTouchend,false);
			},false);
		}
	}
	BlurOrFocus();


	var clientHeight = document.body.clientHeight;
	    var _focusElem = null; //输入框焦点
	    //利用捕获事件监听输入框等focus动作
	    document.body.addEventListener("focus", function(e) {
	        _focusElem = e.target || e.srcElement;
	    }, true);
	    //因为存在软键盘显示而屏幕大小还没被改变，所以以窗体（屏幕显示）大小改变为准
	    window.addEventListener("resize", function() {
	        if (_focusElem && document.body.clientHeight < clientHeight) {
	            //焦点元素滚动到可视范围的底部(false为底部)
	            _focusElem.scrollIntoView(false);
	        }
	    });

