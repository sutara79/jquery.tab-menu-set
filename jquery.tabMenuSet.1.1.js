/**
 * jQuery Plugin
 * jquery.tabMenuSet.1.1
 * Yuusaku Miyazaki (toumin.m7@gmail.com)
 * MIT license
 */
(function($) {

$.fn.tabMenuSet = function(option) {
	return this.each(function() {
		(new tabMenuSet).init(this, option);
	});
};

var tabMenuSet = function() {};

$.extend(tabMenuSet.prototype, {
	//***************************************
	// 初期化
	init: function(elem, option) {
		this.elem = elem;
		this.option = option;

		this.setOptions();
		this.setElements();
		this.setEventHandler();
		this.initTab();
	},

	//**********************************************
	// オプションを設定
	setOptions: function() {
		this.option = $.extend({
			init_tab: 0,
			chg_by_hover: false
		}, this.option);
	},

	//**********************************************
	// プラグインで使用するHTML要素の初期設定
	setElements: function() {
		this.elem = {
			root  : $(this.elem).addClass('jqtab'),
			title : $(this.elem).children().eq(0).addClass('jqtab_title'),
			body  : $(this.elem).children().eq(1).addClass('jqtab_body')
		};
	},

	//**********************************************
	// イベントハンドラ設定
	setEventHandler: function() {
		var self = this;
		// タブがマウスオーバーされた場合の動作
		$(this.elem.title).children().children('a')
			//----------------------------------------
			// マウスオーバー
			//----------------------------------------
			.mouseover(function(ev) {
				if (self.option.chg_by_hover) {
					_changeHash(ev);
					_changeTabBody(ev.target);
				} else {
					var current = $(self.elem.root).find('.jqtab_hover');	
					// マウスオーバーされたタブと表示中のタブが違っている場合のみ、下記を行う
					if (!$(ev.target).is(current)) {
						// クリックされたタブを元に、表示短縮用の変数を作成
						$(current).removeClass('jqtab_hover');
						$(ev.target).addClass('jqtab_hover');
					}
				}	
			})
			//----------------------------------------
			// マウスアウト
			//----------------------------------------
			.mouseout(function(ev) {
				if (!self.option.chg_by_hover) {
					$(ev.target).removeClass('jqtab_hover');
				}
			})
			//----------------------------------------
			// クリック
			//----------------------------------------
			.click(function(ev) {
				if (!self.option.chg_by_hover) {
					_changeHash(ev);
					_changeTabBody(ev.target);
				}
			});
		//----------------------------------------
		// タブに設定されたページ内リンクの挙動を、
		// ブラウザのデフォルト機能に代わって実行する。
		//----------------------------------------
		function _changeHash(ev) {
			var idx = $(self.elem.title).children().children('a').index(ev.target);
			var body_id = $(self.elem.body).children().eq(idx).attr('id');
			if (body_id) {
				ev.preventDefault();
				location.hash = body_id;
			}
		}
		//----------------------------------------
		// タブ本文の表示を切り替える
		//----------------------------------------
		function _changeTabBody(target) {
			// クリックされたタブを元に、表示短縮用の変数を作成
			var current_menu = $(self.elem.root).find('.jqtab_selected');
			var next_index   = $(self.elem.title).children().children('a').index(target);
			var current_body = $(self.elem.body).children(':visible');
			var next_body    = $(self.elem.body).children().eq(next_index);

			// マウスオーバーされたタブと表示中のタブが違っている場合のみ、下記を行う
			if (!$(target).is(current_menu)) {
				$(target).addClass('jqtab_selected');
				$(current_menu).removeClass('jqtab_selected');
				$(current_body).hide();
				$(next_body).show();
			}
		}
	},

	//**********************************************
	// タブの初期状態を設定
	initTab: function() {
		var init_idx = this.option.init_tab;
		
		// ページ内リンクへの移動が指定されている場合にのみ実行
		if (location.hash != '') {
			var id = location.hash.replace('#', '');
			$(this.elem.body).children().each(function(idx, obj) {
				if ($(obj).attr('id') == id) init_idx = idx;
			});
		}
		
		$(this.elem.title).children().children().eq(init_idx).addClass('jqtab_selected');
		$(this.elem.body).children().eq(init_idx).show();
	}
});

})(jQuery);
