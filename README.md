# jquery.tab-menu-set
jQuery plugin for simple tabs.

## Demo
http://usamimi.info/~sutara/sample/tab-menu-set/

## JSDoc
http://usamimi.info/~sutara/sample/tab-menu-set/jsdoc/

## Usage

###### HTML
```html
<div id="tabset1">
	<ol>
		<li><a>御子神 リコ</a></li>
		<li><a>御子神 リム</a></li>
		<li><a>御子神 ナギサ</a></li>
	</ol>
	<div>
		<div>（みこがみ リコ）</div>
		<div>（みこがみ リム）</div>
		<div>（みこがみ ナギサ）</div>
	</div>
</div>
```
###### JavaScript
```javascript
$('#tabset1').tabMenuSet();
```

## Options

you can set some properties of this plugin like following.  
(下記のようにオプションを指定できます。)

###### JavaScript
```javascript
$('#tabset2').tabMenuSet({
	init_tab: 1,
	chg_by_hover: true
});
```

- - -
### init_tab
Number of a tab displayed with initial state.  
(初期状態で開いているタブ (ゼロから始まる番号で指定))

###### initial value
``` javascript
0
```
- - -
### chg_by_hover
Change a tab if mouseover.  
(マウスオーバーだけでタブを切り替えるかどうか)

###### initial value
``` javascript
false
```

## Author
Yuusaku Miyazaki (宮崎 雄策)

- Mail: toumin.m7@gmail.com
- [Blog](http://d.hatena.ne.jp/sutara_lumpur/20120424/1335269821)


## License
[MIT License](http://www.opensource.org/licenses/mit-license.php)
