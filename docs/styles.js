(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/angular-gantt/dist/angular-gantt.css":
/*!***********************************************************!*\
  !*** ./node_modules/angular-gantt/dist/angular-gantt.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../raw-loader!../../postcss-loader/lib??embedded!./angular-gantt.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/angular-gantt/dist/angular-gantt.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/angular-gantt/dist/angular-gantt.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/angular-gantt/dist/angular-gantt.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Project: angular-gantt v2.0.0-rc.1 - Gantt chart component for AngularJS\n * Authors: Rémi Alvergnat <toilal.dev@gmail.com> (https://www.pragmasphere.com), Marco Schweighauser\n * License: MIT\n * Homepage: https://www.angular-gantt.com\n * Github: https://github.com/angular-gantt/angular-gantt.git\n */.gantt{line-height:normal}.gantt-scrollable{overflow-x:auto}.gantt-scrollable,.gantt-scrollable-header{border-left:1px solid #ddd;border-right:1px solid #ddd}.gantt-scrollable-header{overflow-x:hidden}.gantt-header,.gantt-side,.gantt-task{cursor:default}.gantt-header{overflow:hidden}.gantt-row-label span.gantt-label-text{padding-left:12px;padding-right:12px}.gantt-row-label{overflow:hidden;white-space:nowrap}.gantt-valign-container{height:100%}.gantt-valign-content{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.gantt-side-background{position:absolute;height:100%;width:100%}.gantt-side-background-body{overflow:hidden}.gantt-side-content{position:relative;vertical-align:top;white-space:nowrap;overflow:hidden}.gantt-side-content>div.side-element{display:inline-block}.gantt-header-columns{position:relative;height:100%}.gantt-side{float:left;position:relative}.gantt-header-row{-webkit-box-sizing:border-box;box-sizing:border-box;height:2em;white-space:nowrap;border-top:1px solid #ddd}.gantt-header-row-last{border-bottom:1px solid #ddd}.gantt-header-row .gantt-column-header{position:absolute;border-right:1px solid #ddd}.gantt-header-row .gantt-column-header-last{position:absolute;border-right:none}.gantt-header-row .gantt-column-header{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:2em;text-align:center;padding-top:.5em;overflow:hidden;text-overflow:clip}.gantt-foreground-col,.gantt-foreground-col-current-date,.gantt-foreground-col-nonworkhour{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:100%;border-right:1px solid #ddd}.gantt-foreground-col-nonworkhour{background-color:hsla(0,0%,78%,.3)}.gantt-column-header-last,.gantt-column-last{border-right:none}.gantt-side-background-header{position:relative}.gantt-side-header-row{position:absolute;bottom:0;width:100%;padding-left:12px;padding-right:12px;border-top:1px solid #ddd;border-bottom:1px solid #ddd;overflow:hidden;white-space:nowrap}.gantt-body{position:relative;height:100%}.gantt-body-rows{overflow-x:hidden;overflow-y:hidden}.gantt-body-background,.gantt-body-foreground{position:absolute;height:100%;width:100%}.gantt-body-columns,.gantt-resizer{position:absolute;height:100%}.gantt-resizer{z-index:1;right:-6px;top:0;width:12px}.gantt-resizer-enabled{cursor:ew-resize}.gantt-resizer-display{margin-left:auto;margin-right:auto;width:4px;background-color:#ddd;background-image:-webkit-gradient(linear,left top, right top,color-stop(50%, transparent),color-stop(0, hsla(0,0%,100%,.5)));background-image:linear-gradient(90deg,transparent 50%,hsla(0,0%,100%,.5) 0);background-size:2px 2px;height:100%}.gantt-timeframe{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%}.gantt-timeframe-non-working{background-color:#d3d3d3;opacity:.3}.gantt-foreground-col-current-date{background-color:green;opacity:.6}.gantt-row-background,.gantt-row-content{position:absolute;width:100%;height:100%}.gantt-row-even>.gantt-row-background{background-color:#efefef}.gantt-row{position:relative}.gantt-row-height{height:2em}.gantt-task,.gantt-task-milestone{position:absolute;margin:auto;top:0;bottom:0;min-width:.6em;height:80%}.gantt-task-background{background-color:grey;border-radius:2px;overflow:hidden}.gantt-task-background,.gantt-task-content,.gantt-task-foreground{position:absolute;height:100%;width:100%}.gantt-task-content{text-align:center;vertical-align:middle;overflow:hidden;white-space:nowrap}.gantt-task-content>span{margin-left:8px;margin-right:8px}.gantt-task-truncated-left{position:absolute;top:0;bottom:0;left:.3em}.gantt-task-truncated-right{position:absolute;top:0;bottom:0;right:.3em}.gantt-task-truncated-left,.gantt-task-truncated-right{color:#fff;font-size:1.5em;font-weight:bolder}.gantt-timespan{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:100%;color:#000;background-color:hsla(0,0%,62%,.5);border-left:1px solid #9e9e9e;border-right:1px solid #9e9e9e}.gantt-current-date-line{border:1px dotted green;opacity:.6;height:100%;position:absolute}.unselectable{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gantt-task-bounds{height:125%;top:-12.5%;position:absolute;z-index:99;border:1px dashed;pointer-events:none}.gantt-task-bounds-in{border-color:#2e4f2e}.gantt-task-bounds-out{border-color:tomato}.gantt-corner-area{position:absolute;width:100%;overflow:hidden}.gantt-corner-area .gantt-header-row{padding-top:1px;border-top:none;position:relative}.gantt-corner-area .gantt-header-row .gantt-column-header{position:absolute;right:0;padding-left:5px;padding-right:5px}.gantt .gantt-body-dependencies{position:absolute;height:100%;width:100%}.gantt .gantt-endpoint.jtk-endpoint-anchor{z-index:20;overflow:hidden}.gantt .gantt-endpoint.fallback-endpoint.jtk-endpoint-anchor{z-index:auto;overflow:hidden}.gantt .gantt-endpoint-overlay.fallback-endpoint{height:4px;width:40px;top:-2px}.gantt .gantt-endpoint-overlay.start-endpoint.fallback-endpoint{left:-45px;background-image:-webkit-gradient(linear,left top, right top,from(hsla(0,0%,100%,0)),to(#456));background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#456)}.gantt .gantt-endpoint-overlay.end-endpoint.fallback-endpoint{left:-5px;background-image:-webkit-gradient(linear,right top, left top,from(hsla(0,0%,100%,0)),to(#456));background-image:linear-gradient(270deg,hsla(0,0%,100%,0),#456)}.gantt .jtk-overlay{z-index:20}.gantt .gantt-endpoint-overlay{position:absolute}.gantt .gantt-endpoint-overlay.arrow-right{width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #000}.gantt .gantt-endpoint-overlay.arrow-right.start-endpoint{top:-5px;left:-11px;border-left-color:#4040a0}.gantt .gantt-endpoint-overlay.arrow-right.end-endpoint{top:-5px;left:6px;border-left-color:#40a040}.gantt .gantt-endpoint.source-endpoint svg *{fill:#40a040}.gantt .gantt-endpoint.target-endpoint svg *{fill:#4040a0}.gantt-task-conflict{border:2px solid #a00000}.gantt-task-group{position:absolute;background:#6388cd;height:30%;top:-25%;bottom:0;margin:auto}.gantt-task-group-left-main,.gantt-task-group-right-main{position:absolute;width:12px;height:100%;background:#6388cd;top:0;bottom:0;margin:auto 0}.gantt-task-group-left-main{left:-6px}.gantt-task-group-right-main{right:-6px}.gantt-task-group-left-symbol,.gantt-task-group-right-symbol{position:absolute;width:0;height:50%;top:75%;bottom:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:12px solid #6388cd}.gantt-task-group-left-symbol{left:-6px}.gantt-task-group-right-symbol{right:-6px}.gantt-task-overview{height:40%;top:40%;-webkit-filter:grayscale(.6);filter:grayscale(.6)}.gantt-task-overview .gantt-task-content{display:none}.gantt-labels-header-row{-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:12px;padding-right:12px;height:2em;white-space:nowrap;overflow:hidden}.gantt-labels-header-row span{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:2em;text-align:center;padding-top:.5em;overflow:hidden;text-overflow:clip}.gantt-labels-header-row-last{border-bottom:1px solid #ddd}.gantt-labels-body,.gantt-labels-header{overflow:hidden}.gantt-task-moving,.gantt-task-resizing{opacity:.6;filter:alpha(opacity=60);-webkit-filter:grayscale(.7);filter:grayscale(.7)}.gantt-task-overlaps{border:2px solid #a00000}.gantt-task-progress{position:absolute;overflow:hidden;bottom:0;height:6px;border-radius:2px}.gantt-task-foreground-sections,.gantt-task-sections{height:100%;width:100%;position:absolute;overflow:hidden}.gantt-task-sections{bottom:0}.gantt-task-sections .gantt-task-section{position:absolute;overflow:hidden;height:100%}.gantt-row-label.on-dragging{background-color:#999!important}.gantt-row-label.on-drag-hover{border:1px solid #999}.gantt-table-header{overflow:hidden;position:relative}.gantt-table-header-row{position:absolute;bottom:0;width:100%}.gantt-table-header-row span.gantt-label-text{font-weight:700;white-space:nowrap;display:inline-block;padding-top:.5em;overflow:hidden;text-overflow:clip}div.gantt-table-content{overflow:hidden}.gantt-side-content-table>div.gantt-table-column{display:inline-block;overflow:hidden}.gantt-task-info{position:fixed;background:#fff;border:1px solid rgba(0,0,0,.2);border-radius:4px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);padding:9px 12px;z-index:999}.gantt-task-info-content{line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gantt-task-infoArrow:before,.gantt-task-infoArrowR:before{position:absolute;top:100%;width:0;height:0;border-top:8px solid rgba(0,0,0,.1);border-right:8px solid transparent;border-left:8px solid transparent;content:\"\"}.gantt-task-infoArrow:before{left:10px}.gantt-task-infoArrowR:before{right:10px}.gantt-task-infoArrow:after,.gantt-task-infoArrowR:after{position:absolute;top:100%;width:0;height:0;border-top:7px solid #fff;border-right:7px solid transparent;border-left:7px solid transparent;content:\"\"}.gantt-task-infoArrow:after{left:11px}.gantt-task-infoArrowR:after{right:11px}.angular-ui-tree-empty{border:1px dashed #bbb;min-height:100px;background-color:#e5e5e5;background-image:linear-gradient(45deg,#fff 25%,transparent 0,transparent 75%,#fff 0,#fff),linear-gradient(45deg,#fff 25%,transparent 0,transparent 75%,#fff 0,#fff);background-size:60px 60px;background-position:0 0,30px 30px;pointer-events:none}.angular-ui-tree-nodes{position:relative;margin:0;padding:0;list-style:none}.angular-ui-tree-nodes .angular-ui-tree-nodes{padding-left:20px}.angular-ui-tree-node,.angular-ui-tree-placeholder{position:relative;margin:0;padding:0;min-height:20px;line-height:20px}.angular-ui-tree-hidden{display:none}.angular-ui-tree-placeholder{margin:10px;padding:0;min-height:30px}.angular-ui-tree-handle{cursor:move;text-decoration:none;font-weight:700;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:20px;line-height:20px}.angular-ui-tree-drag{position:absolute;pointer-events:none;z-index:999;opacity:.8}.angular-ui-tree-drag .tree-node-content{margin-top:0}.gantt-row-label-background{position:absolute;width:100%}.gantt-tree-body .gantt-row-label span{margin:0}.gantt-tree-body .gantt-row-label a.gantt-tree-handle-button,.gantt-tree-body .gantt-row-label span.gantt-tree-handle{padding:0;position:relative}.gantt-tree-body .gantt-row-label span.gantt-label-text{padding-left:0}.gantt-tree-header{overflow:hidden;position:relative}.gantt-tree-body{overflow:hidden}.gantt-tree-header-row{position:absolute;bottom:0;width:100%}.gantt-tree-header-row span.gantt-label-text{display:inline-block;padding-top:.5em;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:clip}.gantt-tree-body ol{padding-left:0}.angular-ui-tree-handle{cursor:inherit;text-decoration:inherit;font-weight:inherit;min-height:inherit;line-height:inherit}.gantt-side-content-tree .gantt-tree-handle-button{pointer-events:auto}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/angular-gantt/dist/angular-gantt.css ./src/styles.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\danie\Desktop\NgJsGanttInAngular\node_modules\angular-gantt\dist\angular-gantt.css */"./node_modules/angular-gantt/dist/angular-gantt.css");
module.exports = __webpack_require__(/*! C:\Users\danie\Desktop\NgJsGanttInAngular\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map