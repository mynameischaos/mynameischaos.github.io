var me = {
	id: 'me', // 写死的，不用改
	name: '' || '同学', // 用户昵称
	avatar: '' || 'http://c1.mifile.cn/f/i/hd/2016051101/a-default.png', // 用户头像图片 url
	userId: '', // 用户id
	registered: false // 用户是否已经预约
};
var _imgUrl = './image/';
var gif = {
	welcome: '<img src="' + _imgUrl + 'welcome.gif' + '">',
	lol: '<img src="' + _imgUrl + 'lol.gif' + '">',
	cry: '<img src="' + _imgUrl + 'cry.gif' + '">',
};
var _animation = {
	tour: $('.J_map').html(),
};
var _userName = me.name;
var _dialog = {};
var _members = {};

function geneDialog(userName) {
	var defaultMembers = {
		lj: {
			id: 'lj',
			name: 'Lambda',
			avatar: _imgUrl + 'g11.jpeg',
		},
		lwq: {
			id: 'lwq',
			name: '小噶',
			avatar: _imgUrl + 'g33.jpeg',
		},
		lb: {
			id: 'lb',
			name: '小舍',
			avatar: _imgUrl + 'g22.jpeg',
		},
		zgp: {
			id: 'zgp',
			name: '熠昕',
			avatar: _imgUrl + 'g44.jpeg',
		},
		wc: {
			id: 'wc',
			name: '伟嘉',
			avatar: _imgUrl + '5.jpeg',
		},
		ld: {
			id: 'ld',
			name: '生态链刘德',
			avatar: _imgUrl + 'a-ld.png',
		},
		hf: {
			id: 'hf',
			name: 'MIUI洪锋',
			avatar: _imgUrl + 'a-hf.png',
		},
		kk: {
			id: 'kk',
			name: '小米路由云KK',
			avatar: _imgUrl + 'a-kk.png',
		},
		st: {
			id: 'st',
			name: '沈腾',
			avatar: _imgUrl + 'a-st.png',
		},
	};
	_members = $.extend(_members, defaultMembers);


	// 引导对话
	_dialog.d0 = [{
		type: 'plain',
		author: _members.lj,
		content: userName + ' 你好！',
		pause: 2000,
	}, {
		type: 'plain',
		author: _members.lwq,
		content: '欢迎 ' + userName + '🎉🎉🎉',
		flag: 'emoji-welcome',
	}, {
		type: 'plain',
		author: _members.lb,
		content: '清华女神现在在图书馆学习',
	}, {
		type: 'plain',
		author: _members.zgp,
		content: '清华女神没有时间与你聊天',
	}, {
		type: 'plain',
		author: _members.lj,
		content: '送礼物尽管送！',
	},];

	// 关于存储大小的对话
	_dialog.d2 = [{
		type: 'plain',
		author: _members.me,
		content: '女神请收下我送的玫瑰吧！',
	}, {
		type: 'system',
		content: 'Lambda已收下你的💐',
		pause: 500,
	}, {
		type: 'system',
		content: '小噶已收下你的💐',
		pause: 400,
	}, {
		type: 'system',
		content: '小舍已收下你的💐',
		pause: 700,
	}, {
		type: 'system',
		content: '熠昕已收下你的💐',
		pause: 400,
	}, {
		type: 'system',
		content: '你已被踢出群聊',
		pause: 1500,
	}, {
		type: 'plain',
		author: _members.lwq,
		content: '哈哈，谢谢你的礼物，刚刚跟你开玩笑的...',
	},];


	// 关于电量的对话
	_dialog.d3 = [{
		type: 'plain',
		author: _members.me,
		content: '女神请收下我送的三只🐿和辣条！',
	}, {
		type: 'system',
		content: 'Lambda已收下你的三只🐿',
		pause: 500,
	}, {
		type: 'system',
		content: '小噶已收下你的三只🐿',
		pause: 400,
	}, {
		type: 'system',
		content: '小舍已收下你的三只🐿',
		pause: 700,
	}, {
		type: 'system',
		content: '熠昕已收下你的三只🐿',
		pause: 400,
	}, {
		type: 'system',
		content: '你已被踢出群聊',
		pause: 1500,
	}, {
		type: 'plain',
		author: _members.lwq,
		content: '哈哈，谢谢你的礼物，刚刚跟你开玩笑的...',
	},];
	
	// 关于求红包的对话
	_dialog.d8 = [{
		type: 'plain',
		author: _members.me,
		content: '女神请收下我送的小🐷佩奇！',
	}, {
		type: 'system',
		content: 'Lambda已收下你的小🐷',
		pause: 500,
	}, {
		type: 'system',
		content: '小噶已收下你的小🐷',
		pause: 400,
	}, {
		type: 'system',
		content: '小舍已收下你的小🐷',
		pause: 700,
	}, {
		type: 'system',
		content: '熠昕已收下你的小🐷',
		pause: 400,
	}, {
		type: 'system',
		content: '你已被踢出群聊',
		pause: 1500,
	}, {
		type: 'plain',
		author: _members.lwq,
		content: '哈哈，谢谢你的礼物，刚刚跟你开玩笑的...',
	},];
	
	// 关于 存储空间 - 30部奥斯卡 的对话
	_dialog.d2_1 = [{
		type: 'plain',
		author: _members.me,
		content: '我觉得能放个30部影片已经很大了！',
	}, {
		type: 'plain',
		author: _members.wc,
		content: '那你可就小看小米Max了，它最大可是能放下700集左右的海贼王的！',
	}, {
		type: 'plain',
		author: _members.me,
		content: '果然是大容量啊！',
	},];

	// 关于 存储空间 - 80集美剧 的对话
	_dialog.d2_2 = [{
		type: 'plain',
		author: _members.me,
		content: '我觉得能放个80集美剧已经很牛了！',
	}, {
		type: 'plain',
		author: _members.wc,
		content: '那你可就小看小米Max了，它最大可是能放下700集左右的海贼王的！',
		pause: 3000,
	}, {
		type: 'plain',
		author: _members.me,
		content: '果然是大容量啊！',
	},];

	// 关于 存储空间 - 700番海贼王 的对话
	_dialog.d2_3 = [{
		type: 'plain',
		author: _members.me,
		content: '既然容量这么大，应该能放一整部海贼王吧？',
	}, {
		type: 'plain',
		author: _members.wc,
		content: '你太厉害了，小米Max通过扩展卡最大存储达到256GB，700集左右的《海贼王》存进去杠杠的！',
		pause: 3000,
	}, {
		type: 'plain',
		author: _members.me,
		content: '果然是大容量啊！',
	},];
}

$.fn.scrollSmooth = function(scrollHeight, duration) {
	var $el = this;
	var el  = $el[0];
	var startPosition = el.scrollTop;
	var delta = scrollHeight  - startPosition;
	var startTime = Date.now();
	function scroll() {
		var fraction = Math.min(1, (Date.now() - startTime) / duration);
		el.scrollTop = delta * fraction + startPosition;
		if(fraction < 1) {
			setTimeout(scroll, 10);
		}
	}
	scroll();
};

$.fn.goSmooth = function(height, duration) {
	var $el = this;
	var startPosition = 1 * $el.css('margin-bottom').replace('px', '');
	var delta = height  - startPosition;
	var startTime = Date.now();
	function scroll() {
		var fraction = Math.min(1, (Date.now() - startTime) / duration);
		$el.css('margin-bottom', delta * fraction + startPosition);
		if(fraction < 1) {
			setTimeout(scroll, 10);
		}
	}
	scroll();
};

var $chat = $('#chatContent');

function Queue() {};
Queue.prototype = {
	add: function(el) {
		if (this._last) {
			this._last = this._last._next = { //_last是不断变的
				el: el,
				_next: null //设置_last属性表示最后一个元素，并且让新增元素成为它的一个属性值
			}
		} else {
			this._last = this._first = { //我们要设置一个_first属性表示第一个元素
				el: el,
				_next: null
			}
		}
		return this;
	}
}

function copyQueue(p) {
	var queue = new Queue;
	for (var i = 0; i < p.length; i++) {
		queue.add(p[i]);
	}
	return queue;
};

function activeInput() {
	$('.box_ft').find('.input-wrapper').addClass('J_inputWrapper');
}

function deactiveInput() {
	$('.box_ft').find('.input-wrapper').removeClass('J_inputWrapper');
}

	function showChoice(choice, delay) {
		$('.J_noticeInput').hide();

		if (delay === null) {
			delay = 100;
		}
		if (!choice) {
			choice = '0';
		}

		setTimeout(function() {
			$('.J_choiceWrapper').addClass('opened').find('.J_choice').removeClass('choosen').hide();
			$('.J_inputWrapper').addClass('opened');
			var $choiceUl = $('.J_choiceWrapper').find('.J_choice').filter('[data-choice="' + choice + '"]');
			var cH = $choiceUl.addClass('choosen').show().height();
			var ftH = $('.box_ft').height();
			var sOH = $('#chatContent').height();

			$('.box_bd').goSmooth(cH, 100);
			$('.J_scrollContent').scrollSmooth(ftH + sOH, 300);

		}, delay);
	}

	function hideChoice() {
		$('.box_bd').goSmooth(0, 100);
		$('.J_inputWrapper').removeClass('opened');
		$('.J_choiceWrapper').removeClass('opened');
	}

	function playTour() {
		$('.J_mapWrapper').addClass('animate');
		var i = 0;
		var interval = setInterval(function() {
			if (i >= 9) {
				$('.J_tourtime').html(8);
				clearInterval(interval);
			} else {
				i++;
				$('.J_tourtime').html(i%9);
			}
		}, 5000/9);

	}

function showDialog(dialog, cb) {
		// 显示对话的时候，菜单栏不可点
		deactiveInput();

		var message = copyQueue(dialog)._first;
		var tpl = doT.template($('#messageTpl').html());

		function loop(delay) {
			// speed
			if (delay == undefined) {
				// random delay between messages
				delay = Math.random() * 1000 + 600;
				//delay = Math.random() * 50 + 50;
			}

			var timeout = setTimeout(function() {
				if (message) {
					// 显示 message
					var messageHtml = tpl([message.el]);
					$chat.append(messageHtml);
					
					// 自动滚动
					var viewH = $('.J_scrollContent').height();
					var contentH = $chat.height();				
					if (contentH > viewH) {
						$('.J_scrollContent').scrollSmooth(contentH - viewH + 16, 300)
					}
					
					// 执行附加效果
					if (message.el.flag) {
						var flag = message.el.flag;

						switch (flag) {
							case 'animate-tour':
								playTour();
								break;
							default:
								break;
						}
					}

					// 特别语句的特殊delay
					if(message.el.pause != undefined) {
						loop(message.el.pause);
					} else {
						loop();
					}

					// 指向下一句
					message = message._next;

				} else {
					activeInput();
					clearTimeout(timeout);
					cb && cb();
				}
			}, delay);
		};

		loop(0);
	};

$(document).ready(function() {	
	_members.me = me;
	geneDialog(_userName);
	
	//展示默认的引导对话
	showDialog(_dialog['d0'], function() {
		$('.J_noticeInput').show();
	});
	
	// 不同选项点击触发不同的对话和下级选项
		$('.box_ft').on('click', '.J_choice .J_liNext', function(e) {
			e.preventDefault();
			var $choice = $(this);
			var dialogId = $choice.attr('data-target-dialog');
			var choiceId = $choice.attr('data-target-choice');
			var continueDialog = ($choice.attr('data-continue') !== 'false');

			// if ($choice.hasClass('disabled')) {
			// 	return;
			// }
			$('.J_mainChoice').find('.J_liNext[data-target-dialog="' + dialogId + '"]').addClass('disabled');

			if (!choiceId) {
				choiceId = '0';
			}

			hideChoice();
			clearTimeout(window.waitUser);

			showDialog(_dialog['d' + dialogId], function() {
				if (continueDialog) {
					showChoice(choiceId, 500);
					// 用户若干秒没操作的话，提示文案
					window.waitUser = setTimeout(function() {
						var random = Math.floor( (Math.random() * 3) + 1);
						showDialog(_dialog['dr_' + random]);
					}, 30000);
				}
			});

			if ( !$('.J_mainChoice').find('.J_liNext').not('.disabled') ) {
				clearTimeout(window.waitUser);
			}
		});

		//显示或者隐藏菜单
		$(document).on('click', '.J_inputWrapper', function() {
			var choosen = $('.J_choice').filter('.choosen').attr('data-choice');
			if ($('.J_choiceWrapper').hasClass('opened')) {
				hideChoice();
			} else {
				showChoice(choosen, 0);
			}
		});

		// 对话里的图片点击时会全屏显示
		$(document).on('click', '.J_img', function(e){
			var $target = $(this);
			var imgUrl = $target.attr('src').replace(/\.(jpg|jpeg|png|gif)/, '-hd.$1');

			if (imgUrl) {
			// 全屏显示照片
			loadImg(imgUrl);
			$('#J_fullPics').show();
		}

	});
});