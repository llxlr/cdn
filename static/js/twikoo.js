/*!
 * Twikoo v1.7.4
 * (c) 2020-2026 iMaeGoo
 * Released under the MIT License.
 * Last Update: 2026/3/29 03:29:32
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["twikoo"] = factory();
	else
		root["twikoo"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 37:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _marked = __webpack_require__(78);
/**
 * https://marked.js.org/#/USING_ADVANCED.md
 */
_marked.marked.setOptions({
  renderer: new _marked.marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  smartypants: true
});
var _default = exports["default"] = _marked.marked;

/***/ }),

/***/ 58:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><path d=\"M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z\"></path></svg>"

/***/ }),

/***/ 78:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Lexer", ({
  enumerable: true,
  get: function get() {
    return _Lexer.Lexer;
  }
}));
Object.defineProperty(exports, "Parser", ({
  enumerable: true,
  get: function get() {
    return _Parser.Parser;
  }
}));
Object.defineProperty(exports, "Renderer", ({
  enumerable: true,
  get: function get() {
    return _Renderer.Renderer;
  }
}));
Object.defineProperty(exports, "Slugger", ({
  enumerable: true,
  get: function get() {
    return _Slugger.Slugger;
  }
}));
Object.defineProperty(exports, "TextRenderer", ({
  enumerable: true,
  get: function get() {
    return _TextRenderer.TextRenderer;
  }
}));
Object.defineProperty(exports, "Tokenizer", ({
  enumerable: true,
  get: function get() {
    return _Tokenizer.Tokenizer;
  }
}));
Object.defineProperty(exports, "defaults", ({
  enumerable: true,
  get: function get() {
    return _defaults.defaults;
  }
}));
Object.defineProperty(exports, "getDefaults", ({
  enumerable: true,
  get: function get() {
    return _defaults.getDefaults;
  }
}));
exports.lexer = void 0;
exports.marked = marked;
exports.walkTokens = exports.use = exports.setOptions = exports.parser = exports.parseInline = exports.parse = exports.options = void 0;
var _Lexer = __webpack_require__(3774);
var _Parser = __webpack_require__(2817);
var _Tokenizer = __webpack_require__(4001);
var _Renderer = __webpack_require__(7565);
var _TextRenderer = __webpack_require__(1674);
var _Slugger = __webpack_require__(2123);
var _helpers = __webpack_require__(9105);
var _defaults = __webpack_require__(4008);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }
  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }
  opt = (0, _helpers.merge)({}, marked.defaults, opt || {});
  (0, _helpers.checkSanitizeDeprecation)(opt);
  if (callback) {
    var highlight = opt.highlight;
    var tokens;
    try {
      tokens = _Lexer.Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }
    var done = function done(err) {
      var out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = _Parser.Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length) return done();
    var pending = 0;
    marked.walkTokens(tokens, function (token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(function () {
          highlight(token.text, token.lang, function (err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    var _tokens = _Lexer.Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(_tokens, opt.walkTokens);
    }
    return _Parser.Parser.parse(_tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + (0, _helpers.escape)(e.message + '', true) + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options = marked.setOptions = function (opt) {
  (0, _helpers.merge)(marked.defaults, opt);
  (0, _defaults.changeDefaults)(marked.defaults);
  return marked;
};
marked.getDefaults = _defaults.getDefaults;
marked.defaults = _defaults.defaults;

/**
 * Use Extension
 */

marked.use = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var opts = _helpers.merge.apply(void 0, [{}].concat(args));
  var extensions = marked.defaults.extensions || {
    renderers: {},
    childTokens: {}
  };
  var hasExtensions;
  args.forEach(function (pack) {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach(function (ext) {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) {
          // Renderer extensions
          var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              var ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          // Tokenizer Extensions
          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      var renderer = marked.defaults.renderer || new _Renderer.Renderer();
      var _loop = function _loop(prop) {
        var prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          var ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      };
      for (var prop in pack.renderer) {
        _loop(prop);
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      var tokenizer = marked.defaults.tokenizer || new _Tokenizer.Tokenizer();
      var _loop2 = function _loop2(_prop) {
        var prevTokenizer = tokenizer[_prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[_prop] = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          var ret = pack.tokenizer[_prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      };
      for (var _prop in pack.tokenizer) {
        _loop2(_prop);
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      var _walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function (token) {
        pack.walkTokens.call(this, token);
        if (_walkTokens) {
          _walkTokens.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function (tokens, callback) {
  var _iterator = _createForOfIteratorHelper(tokens),
    _step;
  try {
    var _loop3 = function _loop3() {
      var token = _step.value;
      callback.call(marked, token);
      switch (token.type) {
        case 'table':
          {
            var _iterator2 = _createForOfIteratorHelper(token.header),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var cell = _step2.value;
                marked.walkTokens(cell.tokens, callback);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            var _iterator3 = _createForOfIteratorHelper(token.rows),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var row = _step3.value;
                var _iterator4 = _createForOfIteratorHelper(row),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _cell = _step4.value;
                    marked.walkTokens(_cell.tokens, callback);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            break;
          }
        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }
        default:
          {
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
              // Walk any extensions
              marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                marked.walkTokens(token[childTokens], callback);
              });
            } else if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/**
 * Parse Inline
 */
marked.parseInline = function (src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }
  opt = (0, _helpers.merge)({}, marked.defaults, opt || {});
  (0, _helpers.checkSanitizeDeprecation)(opt);
  try {
    var tokens = _Lexer.Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return _Parser.Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + (0, _helpers.escape)(e.message + '', true) + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = _Parser.Parser;
marked.parser = _Parser.Parser.parse;
marked.Renderer = _Renderer.Renderer;
marked.TextRenderer = _TextRenderer.TextRenderer;
marked.Lexer = _Lexer.Lexer;
marked.lexer = _Lexer.Lexer.lex;
marked.Tokenizer = _Tokenizer.Tokenizer;
marked.Slugger = _Slugger.Slugger;
marked.parse = marked;
var options = exports.options = marked.options;
var setOptions = exports.setOptions = marked.setOptions;
var use = exports.use = marked.use;
var walkTokens = exports.walkTokens = marked.walkTokens;
var parseInline = exports.parseInline = marked.parseInline;
var parse = exports.parse = marked;
var parser = exports.parser = _Parser.Parser.parse;
var lexer = exports.lexer = _Lexer.Lexer.lex;

/***/ }),

/***/ 147:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _markdown = _interopRequireDefault(__webpack_require__(1423));
var _image = _interopRequireDefault(__webpack_require__(5171));
var _laugh = _interopRequireDefault(__webpack_require__(6639));
var _clickoutside = _interopRequireDefault(__webpack_require__(2573));
var _owo = _interopRequireDefault(__webpack_require__(1628));
var _utils = __webpack_require__(8129);
var _TkAvatar = _interopRequireDefault(__webpack_require__(4785));
var _TkMetaInput = _interopRequireDefault(__webpack_require__(5062));
var imageTypes = ['apng', 'bmp', 'gif', 'jpeg', 'jpg', 'png', 'svg', 'tif', 'tiff', 'webp'];
var _default = exports.A = {
  components: {
    TkAvatar: _TkAvatar["default"],
    TkMetaInput: _TkMetaInput["default"]
  },
  directives: {
    Clickoutside: _clickoutside["default"]
  },
  props: {
    replyId: String,
    pid: String,
    config: Object
  },
  data: function data() {
    return {
      isSending: false,
      isPreviewing: false,
      isMetaValid: false,
      errorMessage: '',
      owo: null,
      comment: '',
      commentHtml: '',
      nick: '',
      mail: '',
      link: '',
      turnstileLoad: null,
      geeTestLoad: null,
      geeTestCaptchaObj: null,
      iconMarkdown: _markdown["default"],
      iconEmotion: _laugh["default"],
      iconImage: _image["default"]
    };
  },
  computed: {
    captchaProvider: function captchaProvider() {
      if (typeof this.config.CAPTCHA_PROVIDER !== 'undefined') return this.config.CAPTCHA_PROVIDER;
      if (this.config.TURNSTILE_SITE_KEY) return 'Turnstile';
      if (this.config.GEETEST_CAPTCHA_ID) return 'Geetest';
      return '';
    },
    showImage: function showImage() {
      if (typeof this.config.IMAGE_SERVICE !== 'undefined') {
        return !!this.config.IMAGE_SERVICE;
      }
      return this.config.SHOW_IMAGE === 'true';
    },
    canSend: function canSend() {
      return !this.isSending && !!this.isMetaValid && !!this.comment.trim();
    },
    textarea: function textarea() {
      return this.$refs.textarea ? this.$refs.textarea.$refs.textarea : null;
    },
    commentPlaceholder: function commentPlaceholder() {
      var ph = this.$twikoo.placeholder || this.config.COMMENT_PLACEHOLDER || '';
      ph = ph.replace(/<br>/g, '\n');
      return ph;
    },
    maxLength: function maxLength() {
      var limitLength = parseInt(this.config.LIMIT_LENGTH);
      if (Number.isNaN(limitLength)) limitLength = 500;
      return limitLength > 0 ? limitLength : null;
    }
  },
  methods: {
    t: _utils.t,
    initDraft: function initDraft() {
      var draft = localStorage.getItem('twikoo-draft');
      if (!this.comment && draft) {
        this.comment = draft;
      }
    },
    saveDraft: function saveDraft() {
      localStorage.setItem('twikoo-draft', this.comment);
    },
    initOwo: function initOwo() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var odata;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.config.SHOW_EMOTION === 'true')) {
                _context.next = 6;
                break;
              }
              _context.next = 3;
              return (0, _utils.initOwoEmotions)(_this.config.EMOTION_CDN || 'https://owo.imaegoo.com/owo.json');
            case 3:
              odata = _context.sent;
              _this.owo = new _owo["default"]({
                logo: _laugh["default"],
                // OwO button text, default: `OωO表情`
                container: _this.$refs.owo,
                // OwO container, default: `document.getElementsByClassName('OwO')[0]`
                target: _this.textarea,
                // OwO target input or textarea, default: `document.getElementsByTagName('textarea')[0]`
                odata: odata,
                position: 'down',
                // OwO body position, default: `down`
                maxHeight: '250px' // OwO body max-height, default: `250px`
              });
              _utils.marked.setOptions({
                odata: (0, _utils.initMarkedOwo)(odata)
              });
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    initTurnstile: function initTurnstile() {
      var _this2 = this;
      if (this.captchaProvider !== 'Turnstile' || !this.config.TURNSTILE_SITE_KEY) return;
      if (window.turnstile) {
        this.turnstileLoad = Promise.resolve();
        return;
      }
      this.turnstileLoad = new Promise(function (resolve, reject) {
        var scriptEl = document.createElement('script');
        scriptEl.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        scriptEl.onload = resolve;
        scriptEl.onerror = reject;
        _this2.$refs['turnstile-container'].appendChild(scriptEl);
      });
    },
    getTurnstileToken: function getTurnstileToken() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        _this3.turnstileLoad.then(function () {
          var widgetId = window.turnstile.render(_this3.$refs.turnstile, {
            sitekey: _this3.config.TURNSTILE_SITE_KEY,
            callback: function callback(token) {
              resolve(token);
              setTimeout(function () {
                window.turnstile.remove(widgetId);
              }, 5000);
            },
            'error-callback': reject,
            'expired-callback': function expiredCallback() {
              reject(new Error('验证码已过期，请重试'));
            },
            'timeout-callback': function timeoutCallback() {
              reject(new Error('验证码超时，请重试'));
            }
          });
        });
      });
    },
    initGeeTest: function initGeeTest() {
      var _this4 = this;
      if (this.captchaProvider !== 'Geetest' || !this.config.GEETEST_CAPTCHA_ID) return;
      if (window.initGeetest4) {
        this.geeTestLoad = Promise.resolve();
        return;
      }
      this.geeTestLoad = new Promise(function (resolve, reject) {
        var scriptEl = document.createElement('script');
        scriptEl.src = 'https://static.geetest.com/v4/gt4.js';
        scriptEl.onload = resolve;
        scriptEl.onerror = reject;
        _this4.$refs['geetest-container'].appendChild(scriptEl);
      });
    },
    getGeeTestToken: function getGeeTestToken() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        _this5.geeTestLoad.then(function () {
          window.initGeetest4({
            captchaId: _this5.config.GEETEST_CAPTCHA_ID,
            product: 'bind',
            language: 'zho'
          }, function (captcha) {
            _this5.geeTestCaptchaObj = captcha;
            captcha.onReady(function () {
              captcha.showCaptcha();
            }).onSuccess(function () {
              var result = captcha.getValidate();
              resolve({
                geeTestLotNumber: result.lot_number,
                geeTestCaptchaOutput: result.captcha_output,
                geeTestPassToken: result.pass_token,
                geeTestGenTime: result.gen_time
              });
            }).onError(function (e) {
              reject(e);
            }).onClose(function () {
              reject(new Error('验证已取消'));
            });
          });
        });
      });
    },
    onMetaUpdate: function onMetaUpdate(updates) {
      this.nick = updates.meta.nick;
      this.mail = updates.meta.mail;
      this.link = updates.meta.link;
      this.isMetaValid = updates.valid;
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    onCommentInput: function onCommentInput() {
      this.saveDraft();
      this.updatePreview();
    },
    preview: function preview() {
      this.isPreviewing = !this.isPreviewing;
      this.updatePreview();
    },
    updatePreview: function updatePreview() {
      var _this6 = this;
      if (this.isPreviewing) {
        this.commentHtml = (0, _utils.marked)(this.comment);
        this.$nextTick(function () {
          (0, _utils.renderLinks)(_this6.$refs['comment-preview']);
          (0, _utils.renderMath)(_this6.$refs['comment-preview'], _this6.$twikoo.katex);
          if (_this6.config.HIGHLIGHT === 'true') {
            (0, _utils.renderCode)(_this6.$refs['comment-preview'], _this6.config.HIGHLIGHT_THEME, _this6.config.HIGHLIGHT_PLUGIN);
          }
        });
      }
    },
    send: function send() {
      var _this7 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var comment, geeTestResult, sendResult;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this7.isSending = true;
              _context2.prev = 1;
              if (!_this7.comment.match(new RegExp("!\\[".concat((0, _utils.t)('IMAGE_UPLOAD_PLACEHOLDER'), ".+\\]\\(\\)")))) {
                _context2.next = 4;
                break;
              }
              throw new Error((0, _utils.t)('IMAGE_UPLOAD_PLEASE_WAIT'));
            case 4:
              _context2.t0 = _this7.nick;
              _context2.t1 = _this7.mail;
              _context2.t2 = _this7.link;
              _context2.next = 9;
              return (0, _utils.getUserAgent)();
            case 9:
              _context2.t3 = _context2.sent;
              _context2.t4 = (0, _utils.getUrl)(_this7.$twikoo.path);
              _context2.t5 = (0, _utils.getHref)(_this7.$twikoo.href);
              _context2.t6 = (0, _utils.marked)(_this7.comment);
              _context2.t7 = _this7.pid ? _this7.pid : _this7.replyId;
              _context2.t8 = _this7.replyId;
              comment = {
                nick: _context2.t0,
                mail: _context2.t1,
                link: _context2.t2,
                ua: _context2.t3,
                url: _context2.t4,
                href: _context2.t5,
                comment: _context2.t6,
                pid: _context2.t7,
                rid: _context2.t8
              };
              if (!(_this7.captchaProvider === 'Turnstile' && _this7.config.TURNSTILE_SITE_KEY)) {
                _context2.next = 20;
                break;
              }
              _context2.next = 19;
              return _this7.getTurnstileToken();
            case 19:
              comment.turnstileToken = _context2.sent;
            case 20:
              if (!(_this7.captchaProvider === 'Geetest' && _this7.config.GEETEST_CAPTCHA_ID)) {
                _context2.next = 28;
                break;
              }
              _context2.next = 23;
              return _this7.getGeeTestToken();
            case 23:
              geeTestResult = _context2.sent;
              comment.geeTestLotNumber = geeTestResult.geeTestLotNumber;
              comment.geeTestCaptchaOutput = geeTestResult.geeTestCaptchaOutput;
              comment.geeTestPassToken = geeTestResult.geeTestPassToken;
              comment.geeTestGenTime = geeTestResult.geeTestGenTime;
            case 28:
              _context2.next = 30;
              return (0, _utils.call)(_this7.$tcb, 'COMMENT_SUBMIT', comment);
            case 30:
              sendResult = _context2.sent;
              if (!(sendResult && sendResult.result && sendResult.result.id)) {
                _context2.next = 38;
                break;
              }
              _this7.comment = '';
              _this7.errorMessage = '';
              _this7.$emit('load');
              _this7.saveDraft();
              _context2.next = 39;
              break;
            case 38:
              throw new Error(sendResult.result.message);
            case 39:
              _context2.next = 45;
              break;
            case 41:
              _context2.prev = 41;
              _context2.t9 = _context2["catch"](1);
              _utils.logger.error('评论失败', _context2.t9);
              _this7.errorMessage = "".concat((0, _utils.t)('COMMENT_FAILED'), ": ").concat(_context2.t9 && _context2.t9.message);
            case 45:
              _context2.prev = 45;
              _this7.isSending = false;
              return _context2.finish(45);
            case 48:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 41, 45, 48]]);
      }))();
    },
    addEventListener: function addEventListener() {
      if (this.textarea) {
        this.textarea.addEventListener('paste', this.onPaste);
      }
    },
    onBgImgChange: function onBgImgChange() {
      if (this.config.COMMENT_BG_IMG && this.textarea) {
        this.textarea.style['background-image'] = "url(\"".concat(this.config.COMMENT_BG_IMG, "\")");
      }
    },
    onEnterKeyUp: function onEnterKeyUp(event) {
      // 按 Ctrl + Enter / Command + Enter 发送
      if ((event.ctrlKey || event.metaKey) && this.canSend) {
        this.send();
        event.preventDefault();
      }
    },
    closeOwo: function closeOwo() {
      if (this.owo && this.owo.container.classList.contains('OwO-open')) {
        this.owo.toggle();
      }
    },
    openSelectImage: function openSelectImage() {
      this.$refs.inputFile.click();
    },
    onSelectImage: function onSelectImage() {
      var photo = this.$refs.inputFile.files[0];
      this.parseAndUploadPhoto(photo);
    },
    onPaste: function onPaste(e) {
      if (!e.clipboardData) return;
      var photo;
      if (e.clipboardData.files[0]) {
        photo = e.clipboardData.files[0];
      } else if (e.clipboardData.items[0] && e.clipboardData.items[0].getAsFile()) {
        photo = e.clipboardData.items[0].getAsFile();
      }
      this.parseAndUploadPhoto(photo);
    },
    parseAndUploadPhoto: function parseAndUploadPhoto(photo) {
      var _this8 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var nameSplit, fileType, userId, fileIndex, fileName, isGif, newFileName, newFileType, imageCdn, compressedPhoto;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!photo || !_this8.showImage)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              nameSplit = photo.name.split('.');
              fileType = nameSplit.length > 1 ? nameSplit.pop() : '';
              if (!(imageTypes.indexOf(fileType.toLowerCase()) === -1)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              userId = _this8.getUserId();
              fileIndex = "".concat(Date.now(), "-").concat(userId);
              fileName = nameSplit.join('.');
              isGif = photo.type === 'image/gif';
              newFileName = isGif ? fileName : fileName + '.webp';
              newFileType = isGif ? fileType : 'webp';
              _this8.paste(_this8.getImagePlaceholder(fileIndex, newFileType));
              imageCdn = _this8.config.IMAGE_SERVICE || _this8.config.IMAGE_CDN;
              _context3.next = 16;
              return _this8.compressImage(photo);
            case 16:
              compressedPhoto = _context3.sent;
              if (_this8.$tcb && (!imageCdn || imageCdn === 'qcloud')) {
                _this8.uploadPhotoToQcloud(fileIndex, newFileName, newFileType, compressedPhoto);
              } else if (imageCdn) {
                _this8.uploadPhotoToThirdParty(fileIndex, newFileName, newFileType, compressedPhoto);
              } else {
                _this8.uploadFailed(fileIndex, newFileType, (0, _utils.t)('IMAGE_UPLOAD_FAILED_NO_CONF'));
              }
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getUserId: function getUserId() {
      if (this.$tcb) {
        return this.$tcb.auth.currentUser.uid;
      } else {
        return localStorage.getItem('twikoo-access-token');
      }
    },
    compressImage: function compressImage(photo) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(photo.type === 'image/gif')) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return", photo);
            case 2:
              return _context4.abrupt("return", new Promise(function (resolve) {
                var reader = new FileReader();
                reader.onload = function (e) {
                  var img = new Image();
                  img.onload = function () {
                    var canvas = document.createElement('canvas');
                    var width = img.width;
                    var height = img.height;
                    var maxSize = 1920;
                    if (width > maxSize || height > maxSize) {
                      if (width > height) {
                        height = height * maxSize / width;
                        width = maxSize;
                      } else {
                        width = width * maxSize / height;
                        height = maxSize;
                      }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    var webpType = 'image/webp';
                    var fileName = photo.name.replace(/\.[^.]+$/, '.webp');
                    canvas.toBlob(function (blob) {
                      resolve(new File([blob], fileName, {
                        type: webpType
                      }));
                    }, webpType, 0.85);
                  };
                  img.src = e.target.result;
                };
                reader.readAsDataURL(photo);
              }));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    uploadPhotoToQcloud: function uploadPhotoToQcloud(fileIndex, fileName, fileType, photo) {
      var _this9 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var uploadResult, tempUrlResult, tempFileUrl;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this9.$tcb.app.uploadFile({
                cloudPath: "tk-img/".concat(fileIndex, ".").concat(fileType),
                filePath: photo
              });
            case 3:
              uploadResult = _context5.sent;
              if (!uploadResult.fileID) {
                _context5.next = 10;
                break;
              }
              _context5.next = 7;
              return _this9.$tcb.app.getTempFileURL({
                fileList: [uploadResult.fileID]
              });
            case 7:
              tempUrlResult = _context5.sent;
              tempFileUrl = tempUrlResult.fileList[0].tempFileURL;
              _this9.uploadCompleted(fileIndex, fileName, fileType, tempFileUrl);
            case 10:
              _context5.next = 16;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);
              _this9.uploadFailed(fileIndex, fileType, _context5.t0.message);
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 12]]);
      }))();
    },
    uploadPhotoToThirdParty: function uploadPhotoToThirdParty(fileIndex, fileName, fileType, photo) {
      var _this10 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _yield$call, uploadResult;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.t0 = _utils.call;
              _context6.t1 = _this10.$tcb;
              _context6.t2 = fileName;
              _context6.next = 6;
              return (0, _utils.blobToDataURL)(photo);
            case 6:
              _context6.t3 = _context6.sent;
              _context6.t4 = {
                fileName: _context6.t2,
                photo: _context6.t3
              };
              _context6.next = 10;
              return (0, _context6.t0)(_context6.t1, 'UPLOAD_IMAGE', _context6.t4);
            case 10:
              _yield$call = _context6.sent;
              uploadResult = _yield$call.result;
              if (uploadResult.data) {
                _this10.uploadCompleted(fileIndex, fileName, fileType, uploadResult.data.url);
              } else if (uploadResult.code === 1041) {
                _this10.uploadFailed(fileIndex, fileType, (0, _utils.t)('IMAGE_UPLOAD_NSFW'));
              } else {
                console.error(uploadResult);
                _this10.uploadFailed(fileIndex, fileType, uploadResult.err);
              }
              _context6.next = 19;
              break;
            case 15:
              _context6.prev = 15;
              _context6.t5 = _context6["catch"](0);
              console.error(_context6.t5);
              _this10.uploadFailed(fileIndex, fileType, _context6.t5.message);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 15]]);
      }))();
    },
    uploadCompleted: function uploadCompleted(fileIndex, fileName, fileType, fileUrl) {
      fileName = fileName.replace(/[[\]]/g, '_');
      this.comment = this.comment.replace(this.getImagePlaceholder(fileIndex, fileType), "![".concat(fileName, "](").concat(fileUrl, ")"));
      this.$refs.inputFile.value = '';
    },
    uploadFailed: function uploadFailed(fileIndex, fileType, reason) {
      this.comment = this.comment.replace(this.getImagePlaceholder(fileIndex, fileType), "_".concat((0, _utils.t)('IMAGE_UPLOAD_FAILED'), ": ").concat(reason, "_"));
      this.$refs.inputFile.value = '';
    },
    paste: function paste(text) {
      if (document.selection) {
        document.selection.createRange().text = text;
      } else if (this.textarea.selectionStart || this.textarea.selectionStart === 0) {
        var n = this.textarea.selectionStart;
        var r = this.textarea.selectionEnd;
        this.comment = this.comment.substring(0, n) + text + this.comment.substring(r, this.comment.length);
        this.textarea.selectionStart = n + text.length;
        this.textarea.selectionEnd = n + text.length;
      } else {
        this.comment += text;
      }
    },
    getImagePlaceholder: function getImagePlaceholder(fileIndex, fileType) {
      return "![".concat((0, _utils.t)('IMAGE_UPLOAD_PLACEHOLDER'), " ").concat(fileIndex, ".").concat(fileType, "]()");
    }
  },
  mounted: function mounted() {
    if (this.pid) {
      this.$refs['tk-submit'].scrollIntoView({
        behavior: 'instant',
        block: 'center'
      });
    }
    this.initDraft();
    this.initOwo();
    this.addEventListener();
    this.onBgImgChange();
    this.initTurnstile();
    this.initGeeTest();
  },
  watch: {
    'config.SHOW_EMOTION': function configSHOW_EMOTION() {
      this.initOwo();
    },
    'config.COMMENT_BG_IMG': function configCOMMENT_BG_IMG() {
      this.onBgImgChange();
    },
    'config.TURNSTILE_SITE_KEY': function configTURNSTILE_SITE_KEY() {
      this.initTurnstile();
    },
    'config.GEETEST_CAPTCHA_ID': function configGEETEST_CAPTCHA_ID() {
      this.initGeeTest();
    },
    captchaProvider: function captchaProvider() {
      this.initTurnstile();
      this.initGeeTest();
    }
  }
};

/***/ }),

/***/ 210:
/***/ (function() {

"use strict";


(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }

  /* eslint-disable */

  /**
   * The dependencies map is built automatically with gulp.
   *
   * @type {Object<string, string | string[]>}
   */
  var lang_dependencies = /*dependencies_placeholder[*/{
    "javascript": "clike",
    "actionscript": "javascript",
    "apex": ["clike", "sql"],
    "arduino": "cpp",
    "aspnet": ["markup", "csharp"],
    "birb": "clike",
    "bison": "c",
    "c": "clike",
    "csharp": "clike",
    "cpp": "c",
    "cfscript": "clike",
    "chaiscript": ["clike", "cpp"],
    "cilkc": "c",
    "cilkcpp": "cpp",
    "coffeescript": "javascript",
    "crystal": "ruby",
    "css-extras": "css",
    "d": "clike",
    "dart": "clike",
    "django": "markup-templating",
    "ejs": ["javascript", "markup-templating"],
    "etlua": ["lua", "markup-templating"],
    "erb": ["ruby", "markup-templating"],
    "fsharp": "clike",
    "firestore-security-rules": "clike",
    "flow": "javascript",
    "ftl": "markup-templating",
    "gml": "clike",
    "glsl": "c",
    "go": "clike",
    "gradle": "clike",
    "groovy": "clike",
    "haml": "ruby",
    "handlebars": "markup-templating",
    "haxe": "clike",
    "hlsl": "c",
    "idris": "haskell",
    "java": "clike",
    "javadoc": ["markup", "java", "javadoclike"],
    "jolie": "clike",
    "jsdoc": ["javascript", "javadoclike", "typescript"],
    "js-extras": "javascript",
    "json5": "json",
    "jsonp": "json",
    "js-templates": "javascript",
    "kotlin": "clike",
    "latte": ["clike", "markup-templating", "php"],
    "less": "css",
    "lilypond": "scheme",
    "liquid": "markup-templating",
    "markdown": "markup",
    "markup-templating": "markup",
    "mongodb": "javascript",
    "n4js": "javascript",
    "objectivec": "c",
    "opencl": "c",
    "parser": "markup",
    "php": "markup-templating",
    "phpdoc": ["php", "javadoclike"],
    "php-extras": "php",
    "plsql": "sql",
    "processing": "clike",
    "protobuf": "clike",
    "pug": ["markup", "javascript"],
    "purebasic": "clike",
    "purescript": "haskell",
    "qsharp": "clike",
    "qml": "javascript",
    "qore": "clike",
    "racket": "scheme",
    "cshtml": ["markup", "csharp"],
    "jsx": ["markup", "javascript"],
    "tsx": ["jsx", "typescript"],
    "reason": "clike",
    "ruby": "clike",
    "sass": "css",
    "scss": "css",
    "scala": "java",
    "shell-session": "bash",
    "smarty": "markup-templating",
    "solidity": "clike",
    "soy": "markup-templating",
    "sparql": "turtle",
    "sqf": "clike",
    "squirrel": "clike",
    "stata": ["mata", "java", "python"],
    "t4-cs": ["t4-templating", "csharp"],
    "t4-vb": ["t4-templating", "vbnet"],
    "tap": "yaml",
    "tt2": ["clike", "markup-templating"],
    "textile": "markup",
    "twig": "markup-templating",
    "typescript": "javascript",
    "v": "clike",
    "vala": "clike",
    "vbnet": "basic",
    "velocity": "markup",
    "wiki": "markup",
    "xeora": "markup",
    "xml-doc": "markup",
    "xquery": "markup"
  } /*]*/;
  var lang_aliases = /*aliases_placeholder[*/{
    "html": "markup",
    "xml": "markup",
    "svg": "markup",
    "mathml": "markup",
    "ssml": "markup",
    "atom": "markup",
    "rss": "markup",
    "js": "javascript",
    "g4": "antlr4",
    "ino": "arduino",
    "arm-asm": "armasm",
    "art": "arturo",
    "adoc": "asciidoc",
    "avs": "avisynth",
    "avdl": "avro-idl",
    "gawk": "awk",
    "sh": "bash",
    "shell": "bash",
    "shortcode": "bbcode",
    "rbnf": "bnf",
    "oscript": "bsl",
    "cs": "csharp",
    "dotnet": "csharp",
    "cfc": "cfscript",
    "cilk-c": "cilkc",
    "cilk-cpp": "cilkcpp",
    "cilk": "cilkcpp",
    "coffee": "coffeescript",
    "conc": "concurnas",
    "jinja2": "django",
    "dns-zone": "dns-zone-file",
    "dockerfile": "docker",
    "gv": "dot",
    "eta": "ejs",
    "xlsx": "excel-formula",
    "xls": "excel-formula",
    "gamemakerlanguage": "gml",
    "po": "gettext",
    "gni": "gn",
    "ld": "linker-script",
    "go-mod": "go-module",
    "hbs": "handlebars",
    "mustache": "handlebars",
    "hs": "haskell",
    "idr": "idris",
    "gitignore": "ignore",
    "hgignore": "ignore",
    "npmignore": "ignore",
    "webmanifest": "json",
    "kt": "kotlin",
    "kts": "kotlin",
    "kum": "kumir",
    "tex": "latex",
    "context": "latex",
    "ly": "lilypond",
    "emacs": "lisp",
    "elisp": "lisp",
    "emacs-lisp": "lisp",
    "md": "markdown",
    "moon": "moonscript",
    "n4jsd": "n4js",
    "nani": "naniscript",
    "objc": "objectivec",
    "qasm": "openqasm",
    "objectpascal": "pascal",
    "px": "pcaxis",
    "pcode": "peoplecode",
    "plantuml": "plant-uml",
    "pq": "powerquery",
    "mscript": "powerquery",
    "pbfasm": "purebasic",
    "purs": "purescript",
    "py": "python",
    "qs": "qsharp",
    "rkt": "racket",
    "razor": "cshtml",
    "rpy": "renpy",
    "res": "rescript",
    "robot": "robotframework",
    "rb": "ruby",
    "sh-session": "shell-session",
    "shellsession": "shell-session",
    "smlnj": "sml",
    "sol": "solidity",
    "sln": "solution-file",
    "rq": "sparql",
    "sclang": "supercollider",
    "t4": "t4-cs",
    "trickle": "tremor",
    "troy": "tremor",
    "trig": "turtle",
    "ts": "typescript",
    "tsconfig": "typoscript",
    "uscript": "unrealscript",
    "uc": "unrealscript",
    "url": "uri",
    "vb": "visual-basic",
    "vba": "visual-basic",
    "webidl": "web-idl",
    "mathematica": "wolfram",
    "nb": "wolfram",
    "wl": "wolfram",
    "xeoracube": "xeora",
    "yml": "yaml"
  } /*]*/;

  /* eslint-enable */

  /**
   * @typedef LangDataItem
   * @property {{ success?: () => void, error?: () => void }[]} callbacks
   * @property {boolean} [error]
   * @property {boolean} [loading]
   */
  /** @type {Object<string, LangDataItem>} */
  var lang_data = {};
  var ignored_language = 'none';
  var languages_path = 'components/';
  var script = Prism.util.currentScript();
  if (script) {
    var autoloaderFile = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i;
    var prismFile = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i;
    var autoloaderPath = script.getAttribute('data-autoloader-path');
    if (autoloaderPath != null) {
      // data-autoloader-path is set, so just use it
      languages_path = autoloaderPath.trim().replace(/\/?$/, '/');
    } else {
      var src = script.src;
      if (autoloaderFile.test(src)) {
        // the script is the original autoloader script in the usual Prism project structure
        languages_path = src.replace(autoloaderFile, 'components/');
      } else if (prismFile.test(src)) {
        // the script is part of a bundle like a custom prism.js from the download page
        languages_path = src.replace(prismFile, '$1components/');
      }
    }
  }
  var config = Prism.plugins.autoloader = {
    languages_path: languages_path,
    use_minified: true,
    loadLanguages: loadLanguages
  };

  /**
   * Lazily loads an external script.
   *
   * @param {string} src
   * @param {() => void} [success]
   * @param {() => void} [error]
   */
  function addScript(src, success, error) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () {
      document.body.removeChild(s);
      success && success();
    };
    s.onerror = function () {
      document.body.removeChild(s);
      error && error();
    };
    document.body.appendChild(s);
  }

  /**
   * Returns all additional dependencies of the given element defined by the `data-dependencies` attribute.
   *
   * @param {Element} element
   * @returns {string[]}
   */
  function getDependencies(element) {
    var deps = (element.getAttribute('data-dependencies') || '').trim();
    if (!deps) {
      var parent = element.parentElement;
      if (parent && parent.tagName.toLowerCase() === 'pre') {
        deps = (parent.getAttribute('data-dependencies') || '').trim();
      }
    }
    return deps ? deps.split(/\s*,\s*/g) : [];
  }

  /**
   * Returns whether the given language is currently loaded.
   *
   * @param {string} lang
   * @returns {boolean}
   */
  function isLoaded(lang) {
    if (lang.indexOf('!') >= 0) {
      // forced reload
      return false;
    }
    lang = lang_aliases[lang] || lang; // resolve alias

    if (lang in Prism.languages) {
      // the given language is already loaded
      return true;
    }

    // this will catch extensions like CSS extras that don't add a grammar to Prism.languages
    var data = lang_data[lang];
    return data && !data.error && data.loading === false;
  }

  /**
   * Returns the path to a grammar, using the language_path and use_minified config keys.
   *
   * @param {string} lang
   * @returns {string}
   */
  function getLanguagePath(lang) {
    return config.languages_path + 'prism-' + lang + (config.use_minified ? '.min' : '') + '.js';
  }

  /**
   * Loads all given grammars concurrently.
   *
   * @param {string[]|string} languages
   * @param {(languages: string[]) => void} [success]
   * @param {(language: string) => void} [error] This callback will be invoked on the first language to fail.
   */
  function loadLanguages(languages, success, error) {
    if (typeof languages === 'string') {
      languages = [languages];
    }
    var total = languages.length;
    var completed = 0;
    var failed = false;
    if (total === 0) {
      if (success) {
        setTimeout(success, 0);
      }
      return;
    }
    function successCallback() {
      if (failed) {
        return;
      }
      completed++;
      if (completed === total) {
        success && success(languages);
      }
    }
    languages.forEach(function (lang) {
      loadLanguage(lang, successCallback, function () {
        if (failed) {
          return;
        }
        failed = true;
        error && error(lang);
      });
    });
  }

  /**
   * Loads a grammar with its dependencies.
   *
   * @param {string} lang
   * @param {() => void} [success]
   * @param {() => void} [error]
   */
  function loadLanguage(lang, success, error) {
    var force = lang.indexOf('!') >= 0;
    lang = lang.replace('!', '');
    lang = lang_aliases[lang] || lang;
    function load() {
      var data = lang_data[lang];
      if (!data) {
        data = lang_data[lang] = {
          callbacks: []
        };
      }
      data.callbacks.push({
        success: success,
        error: error
      });
      if (!force && isLoaded(lang)) {
        // the language is already loaded and we aren't forced to reload
        languageCallback(lang, 'success');
      } else if (!force && data.error) {
        // the language failed to load before and we don't reload
        languageCallback(lang, 'error');
      } else if (force || !data.loading) {
        // the language isn't currently loading and/or we are forced to reload
        data.loading = true;
        data.error = false;
        addScript(getLanguagePath(lang), function () {
          data.loading = false;
          languageCallback(lang, 'success');
        }, function () {
          data.loading = false;
          data.error = true;
          languageCallback(lang, 'error');
        });
      }
    }
    var dependencies = lang_dependencies[lang];
    if (dependencies && dependencies.length) {
      loadLanguages(dependencies, load, error);
    } else {
      load();
    }
  }

  /**
   * Runs all callbacks of the given type for the given language.
   *
   * @param {string} lang
   * @param {"success" | "error"} type
   */
  function languageCallback(lang, type) {
    if (lang_data[lang]) {
      var callbacks = lang_data[lang].callbacks;
      for (var i = 0, l = callbacks.length; i < l; i++) {
        var callback = callbacks[i][type];
        if (callback) {
          setTimeout(callback, 0);
        }
      }
      callbacks.length = 0;
    }
  }
  Prism.hooks.add('complete', function (env) {
    var element = env.element;
    var language = env.language;
    if (!element || !language || language === ignored_language) {
      return;
    }
    var deps = getDependencies(element);
    if (/^diff-./i.test(language)) {
      // the "diff-xxxx" format is used by the Diff Highlight plugin
      deps.push('diff');
      deps.push(language.substr('diff-'.length));
    } else {
      deps.push(language);
    }
    if (!deps.every(isLoaded)) {
      // the language or some dependencies aren't loaded
      loadLanguages(deps, function () {
        Prism.highlightElement(element);
      });
    }
  });
})();

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-avatar {\n  flex-shrink: 0;\n  height: 2.5rem;\n  width: 2.5rem;\n  overflow: hidden;\n  text-align: center;\n  border-radius: 5px;\n  margin-right: 1rem;\n}\n.tk-comment .tk-submit .tk-avatar,\n.tk-replies .tk-avatar {\n  height: 1.6rem;\n  width: 1.6rem;\n}\n.tk-avatar.tk-has-avatar {\n  background-color: rgba(144,147,153,0.13);\n}\n.tk-avatar.tk-clickable {\n  cursor: pointer;\n}\n.tk-avatar .tk-avatar-img {\n  height: 2.5rem;\n  color: #c0c4cc;\n}\n.tk-comment .tk-submit .tk-avatar .tk-avatar-img,\n.tk-replies .tk-avatar .tk-avatar-img {\n  height: 1.6rem;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 292:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6785);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("88983344", content, true, {});

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-submit {\n  display: flex;\n  flex-direction: column;\n}\n.tk-row {\n  display: flex;\n  flex-direction: row;\n}\n.tk-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.tk-meta-input {\n  margin-bottom: 0.5rem;\n}\n.tk-row.actions {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-left: 3.5rem;\n  align-items: center;\n  justify-content: flex-end;\n}\n.tk-row-actions-start {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.tk-submit-action-icon {\n  align-self: center;\n  display: inline-block;\n  width: 1.25em;\n  line-height: 0;\n  margin-right: 10px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.tk-submit-action-icon svg:hover {\n  opacity: 0.8;\n}\n.tk-submit-action-icon.__markdown {\n  color: #909399;\n}\n.tk-error-message {\n  word-break: break-all;\n  color: #ff0000;\n  font-size: 0.75em;\n  flex-shrink: 1;\n}\n.tk-input-image {\n  display: none;\n}\n.tk-input {\n  flex: 1;\n}\n.tk-input .el-textarea__inner {\n  background-position: right bottom;\n  background-repeat: no-repeat;\n}\n.tk-turnstile-container {\n  position: absolute;\n  right: 0;\n  bottom: -75px;\n  z-index: 1;\n}\n.tk-turnstile {\n  display: flex;\n  flex-direction: column;\n}\n.tk-geetest-container {\n  position: absolute;\n  right: 0;\n  bottom: -75px;\n  z-index: 1;\n}\n.tk-preview-container {\n  margin-left: 3rem;\n  margin-bottom: 1rem;\n  padding: 5px 15px;\n  border: 1px solid rgba(128,128,128,0.31);\n  border-radius: 4px;\n  word-break: break-word;\n}\n.tk-fade-in {\n  animation: tkFadeIn .3s;\n}\n@keyframes tkFadeIn {\n0% {\n    opacity: 0\n}\nto {\n    opacity: 1\n}\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _version = __webpack_require__(2199);
var _utils = __webpack_require__(8129);
var _default = exports.A = {
  data: function data() {
    return {
      version: _version.version,
      counter: {}
    };
  },
  methods: {
    getCounter: function getCounter() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var counterEl, url, href, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              counterEl = document.getElementById('twikoo_visitors');
              if (counterEl) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              if (!(['localhost', '127.0.0.1', '0.0.0.0'].indexOf(window.location.hostname) !== -1)) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              url = (0, _utils.getUrl)(_this.$twikoo.path);
              href = (0, _utils.getHref)(_this.$twikoo.href);
              _context.next = 9;
              return (0, _utils.call)(_this.$tcb, 'COUNTER_GET', {
                url: url,
                href: href,
                title: document.title
              });
            case 9:
              result = _context.sent;
              _this.counter = result.result;
              if (_this.counter.time || _this.counter.time === 0) {
                counterEl.innerHTML = _this.counter.time;
              }
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.getCounter();
  }
};

/***/ }),

/***/ 477:
/***/ (function(module) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 479:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(7120)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : (0, _typeof2["default"])(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 489:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-meta-input"
  }, _vm._l(_vm.displayedInputs, function (metaInput) {
    return _c('el-input', {
      key: metaInput.key,
      attrs: {
        "name": metaInput.name,
        "type": metaInput.type,
        "placeholder": _vm.requiredFields[metaInput.key] ? _vm.t('META_INPUT_REQUIRED') : _vm.t('META_INPUT_NOT_REQUIRED'),
        "size": "small"
      },
      on: {
        "change": _vm.onMetaChange
      },
      model: {
        value: _vm.metaData[metaInput.key],
        callback: function callback($$v) {
          _vm.$set(_vm.metaData, metaInput.key, $$v);
        },
        expression: "metaData[metaInput.key]"
      }
    }, [_c('template', {
      slot: "prepend"
    }, [_vm._v(_vm._s(metaInput.locale))])], 2);
  }), 1);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 504:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z\"></path></svg>"

/***/ }),

/***/ 585:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isUrl = exports.call = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(3852));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _view = __webpack_require__(1085);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var isUrl = exports.isUrl = function isUrl(s) {
  return /^http(s)?:\/\//.test(s);
};
var call = exports.call = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tcb, event) {
    var data,
      _tcb,
      _envId,
      _funcName,
      oldFuncName,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          _tcb = tcb || (_view.app ? _view.app.$tcb : null);
          _envId = data.envId || _view.app.$twikoo.envId;
          _funcName = data.funcName || (_view.app === null || _view.app === void 0 ? void 0 : _view.app.$twikoo.funcName) || 'twikoo';
          if (!_tcb) {
            _context.next = 33;
            break;
          }
          _context.prev = 5;
          _context.next = 8;
          return _tcb.app.callFunction({
            name: _funcName,
            data: _objectSpread({
              event: event
            }, data)
          });
        case 8:
          return _context.abrupt("return", _context.sent);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](5);
          _context.t1 = event;
          _context.next = _context.t1 === 'COMMENT_LIKE' ? 16 : _context.t1 === 'COMMENT_GET' ? 18 : _context.t1 === 'COMMENT_SUBMIT' ? 20 : _context.t1 === 'COUNTER_GET' ? 22 : 24;
          break;
        case 16:
          oldFuncName = 'comment-like';
          return _context.abrupt("break", 24);
        case 18:
          oldFuncName = 'comment-get';
          return _context.abrupt("break", 24);
        case 20:
          oldFuncName = 'comment-submit';
          return _context.abrupt("break", 24);
        case 22:
          oldFuncName = 'counter-get';
          return _context.abrupt("break", 24);
        case 24:
          if (!oldFuncName) {
            _context.next = 30;
            break;
          }
          _context.next = 27;
          return _tcb.app.callFunction({
            name: oldFuncName,
            data: data
          });
        case 27:
          return _context.abrupt("return", _context.sent);
        case 30:
          throw new Error('请升级 Twikoo 云函数版本再试，如果仍无法解决，请删除并重新创建 Twikoo 云函数 - https://twikoo.js.org');
        case 31:
          _context.next = 40;
          break;
        case 33:
          if (!isUrl(_envId)) {
            _context.next = 39;
            break;
          }
          _context.next = 36;
          return new Promise(function (resolve, reject) {
            try {
              var accessToken = localStorage.getItem('twikoo-access-token');
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                    var result = JSON.parse(xhr.responseText);
                    if (result.accessToken) {
                      localStorage.setItem('twikoo-access-token', result.accessToken);
                    }
                    resolve({
                      result: result
                    });
                  } else {
                    reject(xhr.status);
                  }
                }
              };
              xhr.open('POST', _envId);
              xhr.setRequestHeader('Content-Type', 'application/json');
              xhr.send(JSON.stringify(_objectSpread({
                event: event,
                accessToken: accessToken
              }, data)));
            } catch (e) {
              reject(e);
            }
          });
        case 36:
          return _context.abrupt("return", _context.sent);
        case 39:
          throw new Error('缺少 envId 配置 - https://twikoo.js.org');
        case 40:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 11]]);
  }));
  return function call(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3723);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("0e5ef982", content, true, {});

/***/ }),

/***/ 740:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z\"></path></svg>"

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(477);
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && (typeof process === "undefined" ? "undefined" : (0, _typeof2["default"])(process)) === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && ( false ? 0 : (0, _typeof2["default"])(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];
  var blocks = [];
  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }
  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return (0, _typeof2["default"])(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }
  var createOutputMethod = function createOutputMethod(outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };
  var createMethod = function createMethod(is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };
  var nodeWrap = function nodeWrap(method, is224) {
    var crypto = __webpack_require__(4394);
    var Buffer = (__webpack_require__(1903).Buffer);
    var algorithm = is224 ? 'sha224' : 'sha256';
    var bufferFrom;
    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
      bufferFrom = Buffer.from;
    } else {
      bufferFrom = function bufferFrom(message) {
        return new Buffer(message);
      };
    }
    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };
  var createHmacOutputMethod = function createHmacOutputMethod(outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };
  var createHmacMethod = function createHmacMethod(is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };
  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else {
      // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }
  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString,
      type = (0, _typeof2["default"])(message);
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code,
      index = 0,
      i,
      length = message.length,
      blocks = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }
      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >>> 2] |= (0xc0 | code >>> 6) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >>> 2] |= (0xe0 | code >>> 12) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
            blocks[i >>> 2] |= (0xf0 | code >>> 18) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | code >>> 12 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,
      i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >>> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };
  Sha256.prototype.hash = function () {
    var a = this.h0,
      b = this.h1,
      c = this.h2,
      d = this.h3,
      e = this.h4,
      f = this.h5,
      g = this.h6,
      h = this.h7,
      blocks = this.blocks,
      j,
      s0,
      s1,
      maj,
      t1,
      t2,
      ch,
      ab,
      da,
      cd,
      bc;
    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
      t1 = blocks[j - 2];
      s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }
    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
        s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        ab = a & b;
        maj = ab ^ a & c ^ bc;
        ch = e & f ^ ~e & g;
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
      s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
      da = d & a;
      maj = da ^ d & b ^ ab;
      ch = h & e ^ ~h & f;
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
      s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
      cd = c & d;
      maj = cd ^ c & a ^ da;
      ch = g & h ^ ~g & e;
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
      s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
      bc = b & c;
      maj = bc ^ b & d ^ cd;
      ch = f & g ^ ~f & h;
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
      this.chromeBugWorkAround = true;
    }
    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };
  Sha256.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
      h1 = this.h1,
      h2 = this.h2,
      h3 = this.h3,
      h4 = this.h4,
      h5 = this.h5,
      h6 = this.h6,
      h7 = this.h7;
    var hex = HEX_CHARS[h0 >>> 28 & 0x0F] + HEX_CHARS[h0 >>> 24 & 0x0F] + HEX_CHARS[h0 >>> 20 & 0x0F] + HEX_CHARS[h0 >>> 16 & 0x0F] + HEX_CHARS[h0 >>> 12 & 0x0F] + HEX_CHARS[h0 >>> 8 & 0x0F] + HEX_CHARS[h0 >>> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >>> 28 & 0x0F] + HEX_CHARS[h1 >>> 24 & 0x0F] + HEX_CHARS[h1 >>> 20 & 0x0F] + HEX_CHARS[h1 >>> 16 & 0x0F] + HEX_CHARS[h1 >>> 12 & 0x0F] + HEX_CHARS[h1 >>> 8 & 0x0F] + HEX_CHARS[h1 >>> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >>> 28 & 0x0F] + HEX_CHARS[h2 >>> 24 & 0x0F] + HEX_CHARS[h2 >>> 20 & 0x0F] + HEX_CHARS[h2 >>> 16 & 0x0F] + HEX_CHARS[h2 >>> 12 & 0x0F] + HEX_CHARS[h2 >>> 8 & 0x0F] + HEX_CHARS[h2 >>> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >>> 28 & 0x0F] + HEX_CHARS[h3 >>> 24 & 0x0F] + HEX_CHARS[h3 >>> 20 & 0x0F] + HEX_CHARS[h3 >>> 16 & 0x0F] + HEX_CHARS[h3 >>> 12 & 0x0F] + HEX_CHARS[h3 >>> 8 & 0x0F] + HEX_CHARS[h3 >>> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >>> 28 & 0x0F] + HEX_CHARS[h4 >>> 24 & 0x0F] + HEX_CHARS[h4 >>> 20 & 0x0F] + HEX_CHARS[h4 >>> 16 & 0x0F] + HEX_CHARS[h4 >>> 12 & 0x0F] + HEX_CHARS[h4 >>> 8 & 0x0F] + HEX_CHARS[h4 >>> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F] + HEX_CHARS[h5 >>> 28 & 0x0F] + HEX_CHARS[h5 >>> 24 & 0x0F] + HEX_CHARS[h5 >>> 20 & 0x0F] + HEX_CHARS[h5 >>> 16 & 0x0F] + HEX_CHARS[h5 >>> 12 & 0x0F] + HEX_CHARS[h5 >>> 8 & 0x0F] + HEX_CHARS[h5 >>> 4 & 0x0F] + HEX_CHARS[h5 & 0x0F] + HEX_CHARS[h6 >>> 28 & 0x0F] + HEX_CHARS[h6 >>> 24 & 0x0F] + HEX_CHARS[h6 >>> 20 & 0x0F] + HEX_CHARS[h6 >>> 16 & 0x0F] + HEX_CHARS[h6 >>> 12 & 0x0F] + HEX_CHARS[h6 >>> 8 & 0x0F] + HEX_CHARS[h6 >>> 4 & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[h7 >>> 28 & 0x0F] + HEX_CHARS[h7 >>> 24 & 0x0F] + HEX_CHARS[h7 >>> 20 & 0x0F] + HEX_CHARS[h7 >>> 16 & 0x0F] + HEX_CHARS[h7 >>> 12 & 0x0F] + HEX_CHARS[h7 >>> 8 & 0x0F] + HEX_CHARS[h7 >>> 4 & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };
  Sha256.prototype.toString = Sha256.prototype.hex;
  Sha256.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0,
      h1 = this.h1,
      h2 = this.h2,
      h3 = this.h3,
      h4 = this.h4,
      h5 = this.h5,
      h6 = this.h6,
      h7 = this.h7;
    var arr = [h0 >>> 24 & 0xFF, h0 >>> 16 & 0xFF, h0 >>> 8 & 0xFF, h0 & 0xFF, h1 >>> 24 & 0xFF, h1 >>> 16 & 0xFF, h1 >>> 8 & 0xFF, h1 & 0xFF, h2 >>> 24 & 0xFF, h2 >>> 16 & 0xFF, h2 >>> 8 & 0xFF, h2 & 0xFF, h3 >>> 24 & 0xFF, h3 >>> 16 & 0xFF, h3 >>> 8 & 0xFF, h3 & 0xFF, h4 >>> 24 & 0xFF, h4 >>> 16 & 0xFF, h4 >>> 8 & 0xFF, h4 & 0xFF, h5 >>> 24 & 0xFF, h5 >>> 16 & 0xFF, h5 >>> 8 & 0xFF, h5 & 0xFF, h6 >>> 24 & 0xFF, h6 >>> 16 & 0xFF, h6 >>> 8 & 0xFF, h6 & 0xFF];
    if (!this.is224) {
      arr.push(h7 >>> 24 & 0xFF, h7 >>> 16 & 0xFF, h7 >>> 8 & 0xFF, h7 & 0xFF);
    }
    return arr;
  };
  Sha256.prototype.array = Sha256.prototype.digest;
  Sha256.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };
  function HmacSha256(key, is224, sharedMemory) {
    var i,
      type = (0, _typeof2["default"])(key);
    if (type === 'string') {
      var bytes = [],
        length = key.length,
        index = 0,
        code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = 0xc0 | code >>> 6;
          bytes[index++] = 0x80 | code & 0x3f;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = 0xe0 | code >>> 12;
          bytes[index++] = 0x80 | code >>> 6 & 0x3f;
          bytes[index++] = 0x80 | code & 0x3f;
        } else {
          code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
          bytes[index++] = 0xf0 | code >>> 18;
          bytes[index++] = 0x80 | code >>> 12 & 0x3f;
          bytes[index++] = 0x80 | code >>> 6 & 0x3f;
          bytes[index++] = 0x80 | code & 0x3f;
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }
    if (key.length > 64) {
      key = new Sha256(is224, true).update(key).array();
    }
    var oKeyPad = [],
      iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }
    Sha256.call(this, is224, sharedMemory);
    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();
  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };
  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);
  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/***/ }),

/***/ 824:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.install = install;
exports.tcb = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _ = __webpack_require__(8129);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var builtInOptions = [{
  key: 'envId',
  required: true
}];
var tcb = exports.tcb = {
  sdk: null,
  app: null,
  auth: null
};
function install(_x) {
  return _install.apply(this, arguments);
}
function _install() {
  _install = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tcbSdk) {
    var options,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          tcb.sdk = tcbSdk;
          checkOptions(options);
          _context.next = 5;
          return init(options);
        case 5:
          return _context.abrupt("return", tcb);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _install.apply(this, arguments);
}
function checkOptions(options) {
  var missingOptions = [];
  var _iterator = _createForOfIteratorHelper(builtInOptions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;
      if (option["default"] && (0, _.isNotSet)(options[option.key])) {
        options[option.key] = option["default"];
      } else if (option.required && (0, _.isNotSet)(options[option.key])) {
        missingOptions.push(option.key);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (missingOptions.length > 0) {
    var _iterator2 = _createForOfIteratorHelper(missingOptions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var missingOption = _step2.value;
        _.logger.warn("".concat(missingOption, " is required"));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    throw new Error('Twikoo: failed to init');
  }
}
function init(_x2) {
  return _init.apply(this, arguments);
}
function _init() {
  _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(options) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          initApp(options);
          _context2.next = 3;
          return initAuth();
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}
function initApp(options) {
  tcb.app = tcb.sdk.init({
    env: options.envId,
    region: options.region
  });
}
function initAuth() {
  return _initAuth.apply(this, arguments);
}
function _initAuth() {
  _initAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            tcb.auth = tcb.app.auth({
              persistence: 'local'
            });
            if (tcb.auth.hasLoginState()) {
              resolve();
            } else {
              tcb.auth.anonymousAuthProvider().signIn().then(resolve)["catch"](reject);
            }
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _initAuth.apply(this, arguments);
}

/***/ }),

/***/ 872:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-admin-import"
  }, [_c('div', {
    staticClass: "tk-admin-warn tk-admin-import-warn"
  }, [_c('p', [_vm._v(_vm._s(_vm.t('ADMIN_IMPORT_WARN')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.warnText[_vm.source]))])]), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-import-label"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_IMPORT_SELECT_SOURCE')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.source,
      expression: "source"
    }],
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.source = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_IMPORT_SELECT')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "valine"
    }
  }, [_vm._v("Valine (JSON)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "disqus"
    }
  }, [_vm._v("Disqus (XML)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "artalk"
    }
  }, [_vm._v("Artalk v1 (JSON)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "artalk2"
    }
  }, [_vm._v("Artalk v2 (Artrans)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "twikoo"
    }
  }, [_vm._v("Twikoo (JSON)")])]), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-import-label"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_IMPORT_SELECT_FILE')))]), _vm._v(" "), _c('input', {
    ref: "inputFile",
    attrs: {
      "type": "file",
      "value": ""
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.uploadFile
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_IMPORT_START')))]), _vm._v(" "), _c('el-input', {
    ref: "logTextArea",
    attrs: {
      "type": "textarea",
      "rows": 10,
      "placeholder": _vm.t('ADMIN_IMPORT_LOG'),
      "readonly": ""
    },
    model: {
      value: _vm.logText,
      callback: function callback($$v) {
        _vm.logText = $$v;
      },
      expression: "logText"
    }
  })], 1);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 1085:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.render = exports.app = void 0;
var _vue = _interopRequireDefault(__webpack_require__(4478));
var _button = _interopRequireDefault(__webpack_require__(1463));
var _input = _interopRequireDefault(__webpack_require__(5735));
var _loading = _interopRequireDefault(__webpack_require__(4511));
__webpack_require__(622);
__webpack_require__(8848);
__webpack_require__(6756);
__webpack_require__(4707);
var _App = _interopRequireDefault(__webpack_require__(6768));
_vue["default"].use(_button["default"]);
_vue["default"].use(_input["default"]);
_vue["default"].use(_loading["default"]);
var app = exports.app = null;
var render = exports.render = function render(tcb) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  _vue["default"].prototype.$tcb = tcb;
  _vue["default"].prototype.$twikoo = options;
  exports.app = app = new _vue["default"]({
    render: function render(h) {
      return h(_App["default"]);
    }
  });
  app.$mount(options.el || '#twikoo');
  return app;
};

/***/ }),

/***/ 1288:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9737);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("5049e71b", content, true, {});

/***/ }),

/***/ 1315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".el-input__inner,.el-textarea__inner{background-image:none;-webkit-box-sizing:border-box;-webkit-transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.el-textarea{position:relative;display:inline-block;width:100%;vertical-align:bottom;font-size:14px}.el-textarea__inner{display:block;resize:vertical;padding:5px 15px;line-height:1.5;box-sizing:border-box;width:100%;font-size:inherit;color:#606266;background-color:#FFF;border:1px solid #DCDFE6;border-radius:4px;transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.el-textarea__inner::-webkit-input-placeholder{color:#C0C4CC}.el-textarea__inner:-ms-input-placeholder{color:#C0C4CC}.el-textarea__inner::-ms-input-placeholder{color:#C0C4CC}.el-textarea__inner::placeholder{color:#C0C4CC}.el-textarea__inner:hover{border-color:#C0C4CC}.el-textarea__inner:focus{outline:0;border-color:#409EFF}.el-textarea .el-input__count{color:#909399;background:#FFF;position:absolute;font-size:12px;bottom:5px;right:10px}.el-textarea.is-disabled .el-textarea__inner{background-color:#F5F7FA;border-color:#E4E7ED;color:#C0C4CC;cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::-webkit-input-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner:-ms-input-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner::-ms-input-placeholder{color:#C0C4CC}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:#C0C4CC}.el-textarea.is-exceed .el-textarea__inner{border-color:#F56C6C}.el-textarea.is-exceed .el-input__count{color:#F56C6C}.el-input{position:relative;font-size:14px;display:inline-block;width:100%}.el-input::-webkit-scrollbar{z-index:11;width:6px}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{border-radius:5px;width:6px;background:#b4bccc}.el-input::-webkit-scrollbar-corner{background:#fff}.el-input::-webkit-scrollbar-track{background:#fff}.el-input::-webkit-scrollbar-track-piece{background:#fff;width:6px}.el-input .el-input__clear{color:#C0C4CC;font-size:14px;cursor:pointer;-webkit-transition:color .2s cubic-bezier(.645,.045,.355,1);transition:color .2s cubic-bezier(.645,.045,.355,1)}.el-input .el-input__clear:hover{color:#909399}.el-input .el-input__count{height:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#909399;font-size:12px}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input,.el-input__inner{font-size:inherit}.el-input .el-input__count .el-input__count-inner{background:#FFF;line-height:initial;display:inline-block;padding:0 5px}.el-input__inner{-webkit-appearance:none;background-color:#FFF;border-radius:4px;border:1px solid #DCDFE6;box-sizing:border-box;color:#606266;display:inline-block;height:40px;line-height:40px;outline:0;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.el-input__prefix,.el-input__suffix{position:absolute;top:0;-webkit-transition:all .3s;text-align:center;height:100%;color:#C0C4CC}.el-input__inner::-ms-reveal{display:none}.el-input__inner::-webkit-input-placeholder{color:#C0C4CC}.el-input__inner:-ms-input-placeholder{color:#C0C4CC}.el-input__inner::-ms-input-placeholder{color:#C0C4CC}.el-input__inner::placeholder{color:#C0C4CC}.el-input__inner:hover{border-color:#C0C4CC}.el-input.is-active .el-input__inner,.el-input__inner:focus{border-color:#409EFF;outline:0}.el-input__suffix{right:5px;transition:all .3s;pointer-events:none}.el-input__suffix-inner{pointer-events:all}.el-input__prefix{left:5px;transition:all .3s}.el-input__icon{height:100%;width:25px;text-align:center;-webkit-transition:all .3s;transition:all .3s;line-height:40px}.el-input__icon:after{content:'';height:100%;width:0;display:inline-block;vertical-align:middle}.el-input__validateIcon{pointer-events:none}.el-input.is-disabled .el-input__inner{background-color:#F5F7FA;border-color:#E4E7ED;color:#C0C4CC;cursor:not-allowed}.el-input.is-disabled .el-input__inner::-webkit-input-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner:-ms-input-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner::-ms-input-placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__inner::placeholder{color:#C0C4CC}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-exceed .el-input__inner{border-color:#F56C6C}.el-input.is-exceed .el-input__suffix .el-input__count{color:#F56C6C}.el-input--suffix .el-input__inner{padding-right:30px}.el-input--prefix .el-input__inner{padding-left:30px}.el-input--medium{font-size:14px}.el-input--medium .el-input__inner{height:36px;line-height:36px}.el-input--medium .el-input__icon{line-height:36px}.el-input--small{font-size:13px}.el-input--small .el-input__inner{height:32px;line-height:32px}.el-input--small .el-input__icon{line-height:32px}.el-input--mini{font-size:12px}.el-input--mini .el-input__inner{height:28px;line-height:28px}.el-input--mini .el-input__icon{line-height:28px}.el-input-group{line-height:normal;display:inline-table;width:100%;border-collapse:separate;border-spacing:0}.el-input-group>.el-input__inner{vertical-align:middle;display:table-cell}.el-input-group__append,.el-input-group__prepend{background-color:#F5F7FA;color:#909399;vertical-align:middle;display:table-cell;position:relative;border:1px solid #DCDFE6;border-radius:4px;padding:0 20px;width:1px;white-space:nowrap}.el-input-group--prepend .el-input__inner,.el-input-group__append{border-top-left-radius:0;border-bottom-left-radius:0}.el-input-group--append .el-input__inner,.el-input-group__prepend{border-top-right-radius:0;border-bottom-right-radius:0}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:0}.el-input-group__append .el-button,.el-input-group__append .el-select,.el-input-group__prepend .el-button,.el-input-group__prepend .el-select{display:inline-block;margin:-10px -20px}.el-input-group__append button.el-button,.el-input-group__append div.el-select .el-input__inner,.el-input-group__append div.el-select:hover .el-input__inner,.el-input-group__prepend button.el-button,.el-input-group__prepend div.el-select .el-input__inner,.el-input-group__prepend div.el-select:hover .el-input__inner{border-color:transparent;background-color:transparent;color:inherit;border-top:0;border-bottom:0}.el-input-group__prepend{border-right:0}.el-input-group__append{border-left:0}.el-input-group--append .el-select .el-input.is-focus .el-input__inner,.el-input-group--prepend .el-select .el-input.is-focus .el-input__inner{border-color:transparent}.el-input__inner::-ms-clear{display:none;width:0;height:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1332:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var toPropertyKey = __webpack_require__(3987);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1423:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z\"></path></svg>"

/***/ }),

/***/ 1452:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkFootervue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkFooter; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkFooter.vue?vue&type=template&id=3009c007
var TkFootervue_type_template_id_3009c007 = __webpack_require__(2080);
;// ./src/client/view/components/TkFooter.vue?vue&type=template&id=3009c007

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkFooter.vue?vue&type=script&lang=js
var TkFootervue_type_script_lang_js = __webpack_require__(418);
;// ./src/client/view/components/TkFooter.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkFootervue_type_script_lang_js = (TkFootervue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkFooter.vue?vue&type=style&index=0&id=3009c007&prod&lang=css
var TkFootervue_type_style_index_0_id_3009c007_prod_lang_css = __webpack_require__(3457);
;// ./src/client/view/components/TkFooter.vue?vue&type=style&index=0&id=3009c007&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkFooter.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkFootervue_type_script_lang_js,
  TkFootervue_type_template_id_3009c007/* render */.XX,
  TkFootervue_type_template_id_3009c007/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkFooter = (component.exports);

/***/ }),

/***/ 1463:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
module.exports = /******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_380__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_380__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_380__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __nested_webpack_require_380__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __nested_webpack_require_380__.d = function (exports, name, getter) {
    /******/if (!__nested_webpack_require_380__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __nested_webpack_require_380__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __nested_webpack_require_380__.t = function (value, mode) {
    /******/if (mode & 1) value = __nested_webpack_require_380__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && (0, _typeof2["default"])(value) === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __nested_webpack_require_380__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_380__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __nested_webpack_require_380__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __nested_webpack_require_380__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __nested_webpack_require_380__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __nested_webpack_require_380__.p = "/dist/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __nested_webpack_require_380__(__nested_webpack_require_380__.s = 96);
  /******/
}
/************************************************************************/
/******/({
  /***/0: ( /***/function _(module, __nested_webpack_exports__, __nested_webpack_require_4234__) {
    "use strict";

    /* harmony export (binding) */
    __nested_webpack_require_4234__.d(__nested_webpack_exports__, "a", function () {
      return normalizeComponent;
    });
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }
      var hook;
      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context ||
          // cached call
          this.$vnode && this.$vnode.ssrContext ||
          // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles;
      }
      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
      return {
        exports: scriptExports,
        options: options
      };
    }

    /***/
  }),
  /***/96: ( /***/function _(module, __nested_webpack_exports__, __nested_webpack_require_7445__) {
    "use strict";

    __nested_webpack_require_7445__.r(__nested_webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ca859fb4&
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("button", {
        staticClass: "el-button",
        "class": [_vm.type ? "el-button--" + _vm.type : "", _vm.buttonSize ? "el-button--" + _vm.buttonSize : "", {
          "is-disabled": _vm.buttonDisabled,
          "is-loading": _vm.loading,
          "is-plain": _vm.plain,
          "is-round": _vm.round,
          "is-circle": _vm.circle
        }],
        attrs: {
          disabled: _vm.buttonDisabled || _vm.loading,
          autofocus: _vm.autofocus,
          type: _vm.nativeType
        },
        on: {
          click: _vm.handleClick
        }
      }, [_vm.loading ? _c("i", {
        staticClass: "el-icon-loading"
      }) : _vm._e(), _vm.icon && !_vm.loading ? _c("i", {
        "class": _vm.icon
      }) : _vm._e(), _vm.$slots["default"] ? _c("span", [_vm._t("default")], 2) : _vm._e()]);
    };
    var staticRenderFns = [];
    render._withStripped = true;

    // CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ca859fb4&

    // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */
    var buttonvue_type_script_lang_js_ = {
      name: 'ElButton',
      inject: {
        elForm: {
          "default": ''
        },
        elFormItem: {
          "default": ''
        }
      },
      props: {
        type: {
          type: String,
          "default": 'default'
        },
        size: String,
        icon: {
          type: String,
          "default": ''
        },
        nativeType: {
          type: String,
          "default": 'button'
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean
      },
      computed: {
        _elFormItemSize: function _elFormItemSize() {
          return (this.elFormItem || {}).elFormItemSize;
        },
        buttonSize: function buttonSize() {
          return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        buttonDisabled: function buttonDisabled() {
          return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.elForm || {}).disabled;
        }
      },
      methods: {
        handleClick: function handleClick(evt) {
          this.$emit('click', evt);
        }
      }
    };
    // CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
    /* harmony default export */
    var src_buttonvue_type_script_lang_js_ = buttonvue_type_script_lang_js_;
    // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    var componentNormalizer = __nested_webpack_require_7445__(0);

    // CONCATENATED MODULE: ./packages/button/src/button.vue

    /* normalize component */

    var component = Object(componentNormalizer["a" /* default */])(src_buttonvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

    /* hot reload */
    if (false) // removed by dead control flow
{ var api; }
    component.options.__file = "packages/button/src/button.vue";
    /* harmony default export */
    var src_button = component.exports;
    // CONCATENATED MODULE: ./packages/button/index.js

    /* istanbul ignore next */
    src_button.install = function (Vue) {
      Vue.component(src_button.name, src_button);
    };

    /* harmony default export */
    var packages_button = __nested_webpack_exports__["default"] = src_button;

    /***/
  })

  /******/
});

/***/ }),

/***/ 1479:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23ffffff%27 d=%27M6 8.825L1.175 4 2.238 2.938 6 6.7l3.763-3.762L10.825 4z%27/%3E%3C/svg%3E";

/***/ }),

/***/ 1573:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "twikoo",
    attrs: {
      "id": "twikoo"
    }
  }, [_c('tk-comments', {
    attrs: {
      "show-admin-entry": _vm.showAdminEntry
    },
    on: {
      "admin": function admin($event) {
        _vm.showAdmin = true;
      }
    }
  }), _vm._v(" "), _c('tk-footer'), _vm._v(" "), _c('tk-admin', {
    attrs: {
      "show": _vm.showAdmin
    },
    on: {
      "close": function close($event) {
        _vm.showAdmin = false;
      }
    }
  })], 1);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 1621:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "tk-submit",
    staticClass: "tk-submit tk-fade-in"
  }, [_c('div', {
    staticClass: "tk-row"
  }, [_c('tk-avatar', {
    attrs: {
      "config": _vm.config,
      "mail": _vm.mail,
      "nick": _vm.nick
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tk-col"
  }, [_c('tk-meta-input', {
    attrs: {
      "nick": _vm.nick,
      "mail": _vm.mail,
      "link": _vm.link,
      "config": _vm.config
    },
    on: {
      "update": _vm.onMetaUpdate
    }
  }), _vm._v(" "), _c('el-input', {
    ref: "textarea",
    staticClass: "tk-input",
    attrs: {
      "type": "textarea",
      "show-word-limit": "",
      "placeholder": _vm.commentPlaceholder,
      "autosize": {
        minRows: 3
      },
      "maxlength": _vm.maxLength
    },
    on: {
      "input": _vm.onCommentInput
    },
    nativeOn: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onEnterKeyUp($event);
      }
    },
    model: {
      value: _vm.comment,
      callback: function callback($$v) {
        _vm.comment = $$v;
      },
      expression: "comment"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tk-row actions"
  }, [_c('div', {
    staticClass: "tk-row-actions-start"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.config.SHOW_EMOTION === 'true',
      expression: "config.SHOW_EMOTION === 'true'"
    }, {
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: _vm.closeOwo,
      expression: "closeOwo"
    }],
    ref: "owo",
    staticClass: "tk-submit-action-icon OwO",
    domProps: {
      "innerHTML": _vm._s(_vm.iconEmotion)
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showImage,
      expression: "showImage"
    }],
    staticClass: "tk-submit-action-icon",
    domProps: {
      "innerHTML": _vm._s(_vm.iconImage)
    },
    on: {
      "click": _vm.openSelectImage
    }
  }), _vm._v(" "), _c('input', {
    ref: "inputFile",
    staticClass: "tk-input-image",
    attrs: {
      "type": "file",
      "accept": "image/*",
      "value": ""
    },
    on: {
      "change": _vm.onSelectImage
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tk-error-message"
  }, [_vm._v(_vm._s(_vm.errorMessage))])]), _vm._v(" "), _c('a', {
    staticClass: "tk-submit-action-icon __markdown",
    attrs: {
      "alt": "Markdown is supported",
      "href": "https://guides.github.com/features/mastering-markdown/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.iconMarkdown)
    }
  }), _vm._v(" "), !!_vm.replyId ? _c('el-button', {
    staticClass: "tk-cancel",
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.t('SUBMIT_CANCEL')))]) : _vm._e(), _vm._v(" "), _c('el-button', {
    staticClass: "tk-preview",
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.preview
    }
  }, [_vm._v(_vm._s(_vm.t('SUBMIT_PREVIEW')))]), _vm._v(" "), _c('el-button', {
    staticClass: "tk-send",
    attrs: {
      "type": "primary",
      "size": "small",
      "disabled": !_vm.canSend
    },
    on: {
      "click": _vm.send
    }
  }, [_vm._v(_vm._s(_vm.isSending ? _vm.t('SUBMIT_SENDING') : _vm.t('SUBMIT_SEND')))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.captchaProvider === 'Turnstile',
      expression: "captchaProvider === 'Turnstile'"
    }],
    ref: "turnstile-container",
    staticClass: "tk-turnstile-container"
  }, [_c('div', {
    ref: "turnstile",
    staticClass: "tk-turnstile"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.captchaProvider === 'Geetest',
      expression: "captchaProvider === 'Geetest'"
    }],
    ref: "geetest-container",
    staticClass: "tk-geetest-container"
  })], 1), _vm._v(" "), _vm.isPreviewing ? _c('div', {
    ref: "comment-preview",
    staticClass: "tk-preview-container",
    domProps: {
      "innerHTML": _vm._s(_vm.commentHtml)
    }
  }) : _vm._e()]);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 1628:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
/*!
 * OwO v1.0.2
 * Source: https://github.com/DIYgod/OwO/blob/master/src/OwO.js
 * Author: DIYgod
 * Modified by: iMaeGoo
 * Released under the MIT License.
 */
var OwO = exports["default"] = /*#__PURE__*/function () {
  function OwO(option) {
    var _this = this;
    (0, _classCallCheck2["default"])(this, OwO);
    var defaultOption = {
      logo: 'OwO表情',
      container: document.getElementsByClassName('OwO')[0],
      target: document.getElementsByTagName('textarea')[0],
      position: 'down',
      maxHeight: '250px',
      odata: {}
    };
    for (var defaultKey in defaultOption) {
      if (defaultOption[defaultKey] && !option[defaultKey]) {
        option[defaultKey] = defaultOption[defaultKey];
      }
    }
    this.container = option.container;
    this.target = option.target;
    if (option.position === 'up') {
      this.container.classList.add('OwO-up');
    }
    this.odata = option.odata;
    setTimeout(function () {
      _this.init(option);
    });
  }
  (0, _createClass2["default"])(OwO, [{
    key: "init",
    value: function init(option) {
      var _this2 = this;
      this.area = option.target;
      this.packages = Object.keys(this.odata);

      // fill in HTML
      var html = "<div class=\"OwO-logo\">".concat(option.logo, "</div>") + '<div class="OwO-body">';
      for (var i = 0; i < this.packages.length; i++) {
        html += "<ul class=\"OwO-items OwO-items-".concat(this.odata[this.packages[i]].type, "\" style=\"max-height: ").concat(parseInt(option.maxHeight) - 53 + 'px', ";\">");
        var opackage = this.odata[this.packages[i]].container;
        for (var _i = 0; _i < opackage.length; _i++) {
          var icon = opackage[_i].icon.replace('<img', '<img loading="lazy"');
          html += "<li class=\"OwO-item\" title=\"".concat(opackage[_i].text, "\">").concat(icon, "</li>");
        }
        html += '</ul>';
      }
      html += '<div class="OwO-bar">' + '<ul class="OwO-packages">';
      for (var _i2 = 0; _i2 < this.packages.length; _i2++) {
        html += "<li><span>".concat(this.packages[_i2], "</span></li>");
      }
      html += '</ul></div></div>';
      this.container.innerHTML = html;

      // bind event
      this.logo = this.container.getElementsByClassName('OwO-logo')[0];
      this.logo.addEventListener('click', function () {
        _this2.toggle();
      });
      this.container.getElementsByClassName('OwO-body')[0].addEventListener('click', function (e) {
        var target = null;
        if (e.target.classList.contains('OwO-item')) {
          target = e.target;
        } else if (e.target.parentNode.classList.contains('OwO-item')) {
          target = e.target.parentNode;
        }
        if (target) {
          var cursorPos = _this2.area.selectionEnd;
          var areaValue = _this2.area.value;
          var innerHTML = target.innerHTML;
          if (innerHTML.indexOf('<img') !== -1) {
            if (target.title) {
              innerHTML = ':' + target.title + ': ';
            } else {
              // 图片表情转换为 markdown
              var start = innerHTML.indexOf('src="') + 'src="'.length;
              var end = innerHTML.indexOf('"', start);
              if (start !== -1 && end !== -1) {
                innerHTML = "![".concat(target.title || '', "](").concat(innerHTML.substring(start, end), ")");
              }
            }
          }
          _this2.area.value = areaValue.slice(0, cursorPos) + innerHTML + areaValue.slice(cursorPos);
          // 手动触发 input 事件
          _this2.area.dispatchEvent(new InputEvent('input'));
          _this2.area.focus();
          _this2.toggle();
        }
      });
      this.packagesEle = this.container.getElementsByClassName('OwO-packages')[0];
      var _loop = function _loop(_i3) {
        (function (index) {
          _this2.packagesEle.children[_i3].addEventListener('click', function () {
            _this2.tab(index);
          });
        })(_i3);
      };
      for (var _i3 = 0; _i3 < this.packagesEle.children.length; _i3++) {
        _loop(_i3);
      }
      this.tab(0);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.container.classList.contains('OwO-open')) {
        this.container.classList.remove('OwO-open');
      } else {
        this.container.classList.add('OwO-open');
      }
    }
  }, {
    key: "tab",
    value: function tab(index) {
      var itemsShow = this.container.getElementsByClassName('OwO-items-show')[0];
      if (itemsShow) {
        itemsShow.classList.remove('OwO-items-show');
      }
      this.container.getElementsByClassName('OwO-items')[index].classList.add('OwO-items-show');
      var packageActive = this.container.getElementsByClassName('OwO-package-active')[0];
      if (packageActive) {
        packageActive.classList.remove('OwO-package-active');
      }
      this.packagesEle.getElementsByTagName('li')[index].classList.add('OwO-package-active');
    }
  }]);
  return OwO;
}();

/***/ }),

/***/ 1674:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextRenderer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
/**
 * TextRenderer
 * returns only the textual part of the token
 */
var TextRenderer = exports.TextRenderer = /*#__PURE__*/function () {
  function TextRenderer() {
    (0, _classCallCheck2["default"])(this, TextRenderer);
  }
  (0, _createClass2["default"])(TextRenderer, [{
    key: "strong",
    value:
    // no need for block level renderers
    function strong(text) {
      return text;
    }
  }, {
    key: "em",
    value: function em(text) {
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return text;
    }
  }, {
    key: "del",
    value: function del(text) {
      return text;
    }
  }, {
    key: "html",
    value: function html(text) {
      return text;
    }
  }, {
    key: "text",
    value: function text(_text) {
      return _text;
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      return '' + text;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      return '' + text;
    }
  }, {
    key: "br",
    value: function br() {
      return '';
    }
  }]);
  return TextRenderer;
}();

/***/ }),

/***/ 1721:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-comments"
  }, [_c('tk-submit', {
    attrs: {
      "config": _vm.config
    },
    on: {
      "load": _vm.initComments
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "tk-comments-container"
  }, [_c('div', {
    staticClass: "tk-comments-title"
  }, [_c('span', {
    staticClass: "tk-comments-count",
    "class": {
      __hidden: !_vm.comments.length
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.count))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.t('COMMENTS_COUNT_SUFFIX')))])]), _vm._v(" "), _c('span', {
    staticClass: "tk-comments-actions"
  }, [!_vm.loading && _vm.comments.length && _vm.config.SHOW_ORDER !== 'false' ? _c('span', {
    staticClass: "tk-comments-sort"
  }, [_c('button', {
    staticClass: "tk-sort-item",
    "class": {
      __active: _vm.currentSort === 'newest'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setSort('newest');
      }
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENTS_SORT_NEWEST')))]), _vm._v(" "), _c('button', {
    staticClass: "tk-sort-item",
    "class": {
      __active: _vm.currentSort === 'oldest'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setSort('oldest');
      }
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENTS_SORT_OLDEST')))]), _vm._v(" "), _c('button', {
    staticClass: "tk-sort-item",
    "class": {
      __active: _vm.currentSort === 'popular'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setSort('popular');
      }
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENTS_SORT_POPULAR')))])]) : _vm._e(), _vm._v(" "), !_vm.loading && !_vm.loadingMore ? _c('span', {
    staticClass: "tk-icon __comments",
    domProps: {
      "innerHTML": _vm._s(_vm.iconRefresh)
    },
    on: {
      "click": _vm.refresh
    }
  }) : _vm._e(), _vm.showAdminEntry ? _c('span', {
    staticClass: "tk-icon __comments",
    domProps: {
      "innerHTML": _vm._s(_vm.iconSetting)
    },
    on: {
      "click": _vm.openAdmin
    }
  }) : _vm._e()])]), _vm._v(" "), !_vm.loading && !_vm.comments.length ? _c('div', {
    staticClass: "tk-comments-no"
  }, [!_vm.errorMessage ? _c('span', [_vm._v(_vm._s(_vm.t('COMMENTS_NO_COMMENTS')))]) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c('span', {
    staticClass: "tk-comments-error"
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._l(_vm.comments, function (comment) {
    return _c('tk-comment', {
      key: comment.id,
      attrs: {
        "comment": comment,
        "replying": _vm.replyId === comment.id,
        "config": _vm.config
      },
      on: {
        "reply": _vm.onReply,
        "load": _vm.initComments
      }
    });
  }), _vm._v(" "), _vm.showExpand && !_vm.loading ? _c('div', {
    staticClass: "tk-expand-wrap"
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loadingMore,
      expression: "loadingMore"
    }],
    staticClass: "tk-expand",
    on: {
      "click": _vm.onExpand
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENTS_EXPAND')))])]) : _vm._e()], 2)], 1);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 1761:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "tk-comment",
    staticClass: "tk-comment",
    "class": {
      'tk-master': _vm.comment.master
    },
    attrs: {
      "id": _vm.comment.id
    }
  }, [_c('tk-avatar', {
    attrs: {
      "config": _vm.config,
      "nick": _vm.comment.nick,
      "avatar": _vm.comment.avatar,
      "mail-md5": _vm.comment.mailMd5,
      "link": _vm.convertedLink
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tk-main"
  }, [_c('div', {
    staticClass: "tk-row"
  }, [_c('div', {
    staticClass: "tk-meta"
  }, [!_vm.convertedLink ? _c('strong', {
    staticClass: "tk-nick"
  }, [_vm._v(_vm._s(_vm.comment.nick))]) : _vm._e(), _vm._v(" "), _vm.convertedLink ? _c('a', {
    staticClass: "tk-nick tk-nick-link",
    attrs: {
      "href": _vm.convertedLink,
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm.comment.nick))])]) : _vm._e(), _vm._v(" "), _vm.comment.master ? _c('span', {
    staticClass: "tk-tag tk-tag-green"
  }, [_vm._v(_vm._s(_vm.config.MASTER_TAG || _vm.t('COMMENT_MASTER_TAG')))]) : _vm._e(), _vm._v(" "), _vm.comment.top ? _c('span', {
    staticClass: "tk-tag tk-tag-red"
  }, [_vm._v(_vm._s(_vm.t('COMMENT_TOP_TAG')))]) : _vm._e(), _vm._v(" "), _vm.comment.isSpam ? _c('span', {
    staticClass: "tk-tag tk-tag-yellow"
  }, [_vm._v(_vm._s(_vm.t('COMMENT_REVIEWING_TAG')))]) : _vm._e(), _vm._v(" "), _c('small', {
    staticClass: "tk-time"
  }, [_c('time', {
    attrs: {
      "datetime": _vm.jsonTimestamp,
      "title": _vm.localeTime
    }
  }, [_vm._v(_vm._s(_vm.displayCreated))])]), _vm._v(" "), _vm.isLogin ? _c('small', {
    staticClass: "tk-actions"
  }, [_vm.comment.isSpam ? _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.handleSpam(false, $event);
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_SHOW')))]) : _vm._e(), _vm._v(" "), !_vm.comment.isSpam ? _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.handleSpam(true, $event);
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_HIDE')))]) : _vm._e(), _vm._v(" "), !_vm.comment.rid && _vm.comment.top ? _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.handleTop(false, $event);
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_UNTOP')))]) : _vm._e(), _vm._v(" "), !_vm.comment.rid && !_vm.comment.top ? _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.handleTop(true, $event);
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_TOP')))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('tk-action', {
    attrs: {
      "liked": _vm.liked,
      "disliked": _vm.disliked,
      "like-count": _vm.ups,
      "dislike-count": _vm.downs,
      "replies-count": _vm.comment.replies.length,
      "show-dislike": _vm.config.SHOW_DISLIKE !== 'false'
    },
    on: {
      "like": _vm.onLike,
      "dislike": _vm.onDislike,
      "reply": _vm.onReply
    }
  })], 1), _vm._v(" "), _c('div', {
    ref: "tk-content",
    staticClass: "tk-content",
    "class": {
      'tk-content-expand': _vm.isContentExpanded || !_vm.showContentExpand
    }
  }, [_vm.comment.pid ? _c('span', [_vm._v(_vm._s(_vm.t('COMMENT_REPLIED')) + " "), _c('a', {
    staticClass: "tk-ruser",
    attrs: {
      "href": "#".concat(_vm.comment.pid)
    }
  }, [_vm._v("@" + _vm._s(_vm.comment.ruser))]), _vm._v(" :")]) : _vm._e(), _vm._v(" "), _c('span', {
    ref: "comment",
    domProps: {
      "innerHTML": _vm._s(_vm.comment.comment)
    },
    on: {
      "click": _vm.popupLightbox
    }
  })]), _vm._v(" "), _vm.showContentExpand ? _c('div', {
    staticClass: "tk-expand-wrap"
  }, [_c('div', {
    staticClass: "tk-expand",
    on: {
      "click": _vm.onContentExpand
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENT_EXPAND')))])]) : _vm._e(), _vm._v(" "), _vm.showContentCollapse ? _c('div', {
    staticClass: "tk-collapse-wrap"
  }, [_c('div', {
    staticClass: "tk-expand _collapse",
    on: {
      "click": _vm.onContentCollapse
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENT_COLLAPSE')))])]) : _vm._e(), _vm._v(" "), _vm.comment.ipRegion || _vm.comment.os || _vm.comment.browser ? _c('div', {
    staticClass: "tk-extras"
  }, [_vm.comment.ipRegion ? _c('div', {
    staticClass: "tk-extra"
  }, [_c('span', {
    staticClass: "tk-icon __comment",
    domProps: {
      "innerHTML": _vm._s(_vm.iconLocation)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-extra-text"
  }, [_vm._v(" " + _vm._s(_vm.comment.ipRegion))])]) : _vm._e(), _vm._v(" "), _vm.comment.os ? _c('div', {
    staticClass: "tk-extra"
  }, [_c('span', {
    staticClass: "tk-icon __comment",
    domProps: {
      "innerHTML": _vm._s(_vm.iconOs)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-extra-text"
  }, [_vm._v(" " + _vm._s(_vm.comment.os))])]) : _vm._e(), _vm._v(" "), _vm.comment.browser ? _c('div', {
    staticClass: "tk-extra"
  }, [_c('span', {
    staticClass: "tk-icon __comment",
    domProps: {
      "innerHTML": _vm._s(_vm.iconBrowser)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-extra-text"
  }, [_vm._v(" " + _vm._s(_vm.comment.browser))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.replying && !_vm.pid ? _c('tk-submit', {
    attrs: {
      "reply-id": _vm.replyId ? _vm.replyId : _vm.comment.id,
      "pid": _vm.comment.id,
      "config": _vm.config
    },
    on: {
      "load": _vm.onLoad,
      "cancel": _vm.onCancel
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "tk-replies",
    staticClass: "tk-replies",
    "class": {
      'tk-replies-expand': _vm.isExpanded || !_vm.showExpand || _vm.replying
    }
  }, _vm._l(_vm.comment.replies, function (reply) {
    return _c('tk-comment', {
      key: reply.id,
      attrs: {
        "comment": reply,
        "replyId": _vm.comment.id,
        "replying": _vm.replying && _vm.pid === reply.id,
        "config": _vm.config
      },
      on: {
        "expand": _vm.onExpand,
        "load": _vm.onLoad,
        "reply": _vm.onReplyReply
      }
    });
  }), 1), _vm._v(" "), _vm.showExpand && !_vm.replying ? _c('div', {
    staticClass: "tk-expand-wrap"
  }, [_c('div', {
    staticClass: "tk-expand",
    on: {
      "click": _vm.onExpand
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENT_EXPAND')))])]) : _vm._e(), _vm._v(" "), _vm.showCollapse && !_vm.replying ? _c('div', {
    staticClass: "tk-collapse-wrap"
  }, [_c('div', {
    staticClass: "tk-expand _collapse",
    on: {
      "click": _vm.onCollapse
    }
  }, [_vm._v(_vm._s(_vm.t('COMMENT_COLLAPSE')))])]) : _vm._e()], 1)], 1);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 1778:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url["default"] : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 1819:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var arrayWithoutHoles = __webpack_require__(8198);
var iterableToArray = __webpack_require__(6884);
var unsupportedIterableToArray = __webpack_require__(2075);
var nonIterableSpread = __webpack_require__(5838);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1903:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 1914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkCommentsvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkComments; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkComments.vue?vue&type=template&id=bd3099fc
var TkCommentsvue_type_template_id_bd3099fc = __webpack_require__(1721);
;// ./src/client/view/components/TkComments.vue?vue&type=template&id=bd3099fc

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkComments.vue?vue&type=script&lang=js
var TkCommentsvue_type_script_lang_js = __webpack_require__(4333);
;// ./src/client/view/components/TkComments.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkCommentsvue_type_script_lang_js = (TkCommentsvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkComments.vue?vue&type=style&index=0&id=bd3099fc&prod&lang=css
var TkCommentsvue_type_style_index_0_id_bd3099fc_prod_lang_css = __webpack_require__(2630);
;// ./src/client/view/components/TkComments.vue?vue&type=style&index=0&id=bd3099fc&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkComments.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkCommentsvue_type_script_lang_js,
  TkCommentsvue_type_template_id_bd3099fc/* render */.XX,
  TkCommentsvue_type_template_id_bd3099fc/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkComments = (component.exports);

/***/ }),

/***/ 1965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = function (_self) {
  // Private helper vars
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;

  // The grammar object for plaintext
  var plainTextGrammar = {};
  var _ = {
    /**
     * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
     * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
     * additional languages or plugins yourself.
     *
     * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
     *
     * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
     * empty Prism object into the global scope before loading the Prism script like this:
     *
     * ```js
     * window.Prism = window.Prism || {};
     * Prism.manual = true;
     * // add a new <script> to load Prism's script
     * ```
     *
     * @default false
     * @type {boolean}
     * @memberof Prism
     * @public
     */
    manual: _self.Prism && _self.Prism.manual,
    /**
     * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
     * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
     * own worker, you don't want it to do this.
     *
     * By setting this value to `true`, Prism will not add its own listeners to the worker.
     *
     * You obviously have to change this value before Prism executes. To do this, you can add an
     * empty Prism object into the global scope before loading the Prism script like this:
     *
     * ```js
     * window.Prism = window.Prism || {};
     * Prism.disableWorkerMessageHandler = true;
     * // Load Prism's script
     * ```
     *
     * @default false
     * @type {boolean}
     * @memberof Prism
     * @public
     */
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    /**
     * A namespace for utility methods.
     *
     * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
     * change or disappear at any time.
     *
     * @namespace
     * @memberof Prism
     */
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      /**
       * Returns the name of the type of the given value.
       *
       * @param {any} o
       * @returns {string}
       * @example
       * type(null)      === 'Null'
       * type(undefined) === 'Undefined'
       * type(123)       === 'Number'
       * type('foo')     === 'String'
       * type(true)      === 'Boolean'
       * type([1, 2])    === 'Array'
       * type({})        === 'Object'
       * type(String)    === 'Function'
       * type(/abc+/)    === 'RegExp'
       */
      type: function type(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      /**
       * Returns a unique number for the given object. Later calls will still return the same number.
       *
       * @param {Object} obj
       * @returns {number}
       */
      objId: function objId(obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }
        return obj['__id'];
      },
      /**
       * Creates a deep clone of the given object.
       *
       * The main intended use of this function is to clone language definitions.
       *
       * @param {T} o
       * @param {Record<number, any>} [visited]
       * @returns {T}
       * @template T
       */
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;
        switch (_.util.type(o)) {
          case 'Object':
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = /** @type {Record<string, any>} */{};
            visited[id] = clone;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }
            return /** @type {any} */clone;
          case 'Array':
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;
            ( /** @type {Array} */ /** @type {any} */o).forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return /** @type {any} */clone;
          default:
            return o;
        }
      },
      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function getLanguage(element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return 'none';
      },
      /**
       * Sets the Prism `language-xxxx` class of the given element.
       *
       * @param {Element} element
       * @param {string} language
       * @returns {void}
       */
      setLanguage: function setLanguage(element, language) {
        // remove all `language-xxxx` classes
        // (this might leave behind a leading space)
        element.className = element.className.replace(RegExp(lang, 'gi'), '');

        // add the new `language-xxxx` class
        // (using `classList` will automatically clean up spaces for us)
        element.classList.add('language-' + language);
      },
      /**
       * Returns the script element that is currently executing.
       *
       * This does __not__ work for line script element.
       *
       * @returns {HTMLScriptElement | null}
       */
      currentScript: function currentScript() {
        if (typeof document === 'undefined') {
          return null;
        }
        if (document.currentScript && document.currentScript.tagName === 'SCRIPT' && 1 < 2 /* hack to trip TS' flow analysis */) {
          return /** @type {any} */document.currentScript;
        }

        // IE11 workaround
        // we'll get the src of the current script by parsing IE11's error stack trace
        // this will not work for inline scripts

        try {
          throw new Error();
        } catch (err) {
          // Get file src url from stack. Specifically works with the format of stack traces in IE.
          // A stack will look like this:
          //
          // Error
          //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
          //    at Global code (http://localhost/components/prism-core.js:606:1)

          var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
          if (src) {
            var scripts = document.getElementsByTagName('script');
            for (var i in scripts) {
              if (scripts[i].src == src) {
                return scripts[i];
              }
            }
          }
          return null;
        }
      },
      /**
       * Returns whether a given class is active for `element`.
       *
       * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
       * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
       * given class is just the given class with a `no-` prefix.
       *
       * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
       * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
       * ancestors have the given class or the negated version of it, then the default activation will be returned.
       *
       * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
       * version of it, the class is considered active.
       *
       * @param {Element} element
       * @param {string} className
       * @param {boolean} [defaultActivation=false]
       * @returns {boolean}
       */
      isActive: function isActive(element, className, defaultActivation) {
        var no = 'no-' + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    /**
     * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
     *
     * @namespace
     * @memberof Prism
     * @public
     */
    languages: {
      /**
       * The grammar for plain, unformatted text.
       */
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      /**
       * Creates a deep copy of the language with the given id and appends the given tokens.
       *
       * If a token in `redef` also appears in the copied language, then the existing token in the copied language
       * will be overwritten at its original position.
       *
       * ## Best practices
       *
       * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
       * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
       * understand the language definition because, normally, the order of tokens matters in Prism grammars.
       *
       * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
       * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
       *
       * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
       * @param {Grammar} redef The new tokens to append.
       * @returns {Grammar} The new language created.
       * @public
       * @example
       * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
       *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
       *     // at its original position
       *     'comment': { ... },
       *     // CSS doesn't have a 'color' token, so this token will be appended
       *     'color': /\b(?:red|green|blue)\b/
       * });
       */
      extend: function extend(id, redef) {
        var lang = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang[key] = redef[key];
        }
        return lang;
      },
      /**
       * Inserts tokens _before_ another token in a language definition or any other grammar.
       *
       * ## Usage
       *
       * This helper method makes it easy to modify existing languages. For example, the CSS language definition
       * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
       * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
       * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
       * this:
       *
       * ```js
       * Prism.languages.markup.style = {
       *     // token
       * };
       * ```
       *
       * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
       * before existing tokens. For the CSS example above, you would use it like this:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'cdata', {
       *     'style': {
       *         // token
       *     }
       * });
       * ```
       *
       * ## Special cases
       *
       * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
       * will be ignored.
       *
       * This behavior can be used to insert tokens after `before`:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'comment', {
       *     'comment': Prism.languages.markup.comment,
       *     // tokens after 'comment'
       * });
       * ```
       *
       * ## Limitations
       *
       * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
       * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
       * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
       * deleting properties which is necessary to insert at arbitrary positions.
       *
       * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
       * Instead, it will create a new object and replace all references to the target object with the new one. This
       * can be done without temporarily deleting properties, so the iteration order is well-defined.
       *
       * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
       * you hold the target object in a variable, then the value of the variable will not change.
       *
       * ```js
       * var oldMarkup = Prism.languages.markup;
       * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
       *
       * assert(oldMarkup !== Prism.languages.markup);
       * assert(newMarkup === Prism.languages.markup);
       * ```
       *
       * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
       * object to be modified.
       * @param {string} before The key to insert before.
       * @param {Grammar} insert An object containing the key-value pairs to be inserted.
       * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
       * object to be modified.
       *
       * Defaults to `Prism.languages`.
       * @returns {Grammar} The new grammar object.
       * @public
       */
      insertBefore: function insertBefore(inside, before, insert, root) {
        root = root || ( /** @type {any} */_.languages);
        var grammar = root[inside];
        /** @type {Grammar} */
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            // Do not insert token which also occur in insert. See #1525
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;

        // Update references in other language definitions
        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    /**
     * This is the most high-level function in Prism’s API.
     * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
     * each one of them.
     *
     * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
     *
     * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
     * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
     * @memberof Prism
     * @public
     */
    highlightAll: function highlightAll(async, callback) {
      _.highlightAllUnder(document, async, callback);
    },
    /**
     * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
     * {@link Prism.highlightElement} on each one of them.
     *
     * The following hooks will be run:
     * 1. `before-highlightall`
     * 2. `before-all-elements-highlight`
     * 3. All hooks of {@link Prism.highlightElement} for each element.
     *
     * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
     * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
     * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
     * @memberof Prism
     * @public
     */
    highlightAllUnder: function highlightAllUnder(container, async, callback) {
      var env = {
        callback: callback,
        container: container,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      _.hooks.run('before-highlightall', env);
      env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
      _.hooks.run('before-all-elements-highlight', env);
      for (var i = 0, element; element = env.elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },
    /**
     * Highlights the code inside a single element.
     *
     * The following hooks will be run:
     * 1. `before-sanity-check`
     * 2. `before-highlight`
     * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
     * 4. `before-insert`
     * 5. `after-highlight`
     * 6. `complete`
     *
     * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
     * the element's language.
     *
     * @param {Element} element The element containing the code.
     * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
     * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
     * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
     * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
     *
     * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
     * asynchronous highlighting to work. You can build your own bundle on the
     * [Download page](https://prismjs.com/download.html).
     * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
     * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
     * @memberof Prism
     * @public
     */
    highlightElement: function highlightElement(element, async, callback) {
      // Find language
      var language = _.util.getLanguage(element);
      var grammar = _.languages[language];

      // Set language on the element, if not present
      _.util.setLanguage(element, language);

      // Set language on the parent, for styling
      var parent = element.parentElement;
      if (parent && parent.nodeName.toLowerCase() === 'pre') {
        _.util.setLanguage(parent, language);
      }
      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };
      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;
        _.hooks.run('before-insert', env);
        env.element.innerHTML = env.highlightedCode;
        _.hooks.run('after-highlight', env);
        _.hooks.run('complete', env);
        callback && callback.call(env.element);
      }
      _.hooks.run('before-sanity-check', env);

      // plugins may change/add the parent/element
      parent = env.element.parentElement;
      if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
        parent.setAttribute('tabindex', '0');
      }
      if (!env.code) {
        _.hooks.run('complete', env);
        callback && callback.call(env.element);
        return;
      }
      _.hooks.run('before-highlight', env);
      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }
      if (async && _self.Worker) {
        var worker = new Worker(_.filename);
        worker.onmessage = function (evt) {
          insertHighlightedCode(evt.data);
        };
        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
     * and the language definitions to use, and returns a string with the HTML produced.
     *
     * The following hooks will be run:
     * 1. `before-tokenize`
     * 2. `after-tokenize`
     * 3. `wrap`: On each {@link Token}.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @param {string} language The name of the language definition passed to `grammar`.
     * @returns {string} The highlighted HTML.
     * @memberof Prism
     * @public
     * @example
     * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
     */
    highlight: function highlight(text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      _.hooks.run('before-tokenize', env);
      if (!env.grammar) {
        throw new Error('The language "' + env.language + '" has no grammar.');
      }
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run('after-tokenize', env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    /**
     * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
     * and the language definitions to use, and returns an array with the tokenized code.
     *
     * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
     *
     * This method could be useful in other contexts as well, as a very crude parser.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @returns {TokenStream} An array of strings and tokens, a token stream.
     * @memberof Prism
     * @public
     * @example
     * let code = `var foo = 0;`;
     * let tokens = Prism.tokenize(code, Prism.languages.javascript);
     * tokens.forEach(token => {
     *     if (token instanceof Prism.Token && token.type === 'number') {
     *         console.log(`Found numeric literal: ${token.content}`);
     *     }
     * });
     */
    tokenize: function tokenize(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    /**
     * @namespace
     * @memberof Prism
     * @public
     */
    hooks: {
      all: {},
      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string} name The name of the hook.
       * @param {HookCallback} callback The callback function which is given environment variables.
       * @public
       */
      add: function add(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      /**
       * Runs a hook invoking all registered callbacks with the given environment variables.
       *
       * Callbacks will be invoked synchronously and in the order in which they were registered.
       *
       * @param {string} name The name of the hook.
       * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
       * @public
       */
      run: function run(name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  _self.Prism = _;

  // Typescript note:
  // The following can be used to import the Token type in JSDoc:
  //
  //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

  /**
   * Creates a new token.
   *
   * @param {string} type See {@link Token#type type}
   * @param {string | TokenStream} content See {@link Token#content content}
   * @param {string|string[]} [alias] The alias(es) of the token.
   * @param {string} [matchedStr=""] A copy of the full string this token was created from.
   * @class
   * @global
   * @public
   */
  function Token(type, content, alias, matchedStr) {
    /**
     * The type of the token.
     *
     * This is usually the key of a pattern in a {@link Grammar}.
     *
     * @type {string}
     * @see GrammarToken
     * @public
     */
    this.type = type;
    /**
     * The strings or tokens contained by this token.
     *
     * This will be a token stream if the pattern matched also defined an `inside` grammar.
     *
     * @type {string | TokenStream}
     * @public
     */
    this.content = content;
    /**
     * The alias(es) of the token.
     *
     * @type {string|string[]}
     * @see GrammarToken
     * @public
     */
    this.alias = alias;
    // Copy of the full string this token was created from
    this.length = (matchedStr || '').length | 0;
  }

  /**
   * A token stream is an array of strings and {@link Token Token} objects.
   *
   * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
   * them.
   *
   * 1. No adjacent strings.
   * 2. No empty strings.
   *
   *    The only exception here is the token stream that only contains the empty string and nothing else.
   *
   * @typedef {Array<string | Token>} TokenStream
   * @global
   * @public
   */

  /**
   * Converts the given token or token stream to an HTML representation.
   *
   * The following hooks will be run:
   * 1. `wrap`: On each {@link Token}.
   *
   * @param {string | Token | TokenStream} o The token or token stream to be converted.
   * @param {string} language The name of current language.
   * @returns {string} The HTML representation of the token or token stream.
   * @memberof Token
   * @static
   */
  Token.stringify = function stringify(o, language) {
    if (typeof o == 'string') {
      return o;
    }
    if (Array.isArray(o)) {
      var s = '';
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run('wrap', env);
    var attributes = '';
    for (var name in env.attributes) {
      attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }
    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  };

  /**
   * @param {RegExp} pattern
   * @param {number} pos
   * @param {string} text
   * @param {boolean} lookbehind
   * @returns {RegExpExecArray | null}
   */
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      // change the match to remove the text matched by the Prism lookbehind group
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }

  /**
   * @param {string} text
   * @param {LinkedList<string | Token>} tokenList
   * @param {any} grammar
   * @param {LinkedListNode<string | Token>} startNode
   * @param {number} startPos
   * @param {RematchOptions} [rematch]
   * @returns {void}
   * @private
   *
   * @typedef RematchOptions
   * @property {string} cause
   * @property {number} reach
   */
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + ',' + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
        }

        /** @type {RegExp} */
        var pattern = patternObj.pattern || patternObj;
        for (
        // iterate the token list and keep track of the current token/string position
        var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          var removeCount = 1; // this is the to parameter of removeBetween
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos;

            // find the node that contains the match
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            // adjust pos (and p)
            p -= currentNode.value.length;
            pos = p;

            // the current node is a Token, then the match starts inside another Token, which is invalid
            if (currentNode.value instanceof Token) {
              continue;
            }

            // find the last node which is affected by this match
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;

            // replace with the new match
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }

          // eslint-disable-next-line no-redeclare
          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            // at least one Token object was removed, so we have to do some rematching
            // this can only happen if the current pattern is greedy

            /** @type {RematchOptions} */
            var nestedRematch = {
              cause: token + ',' + j,
              reach: reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

            // the reach might have been extended because of the rematching
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }

  /**
   * @typedef LinkedListNode
   * @property {T} value
   * @property {LinkedListNode<T> | null} prev The previous node.
   * @property {LinkedListNode<T> | null} next The next node.
   * @template T
   * @private
   */

  /**
   * @template T
   * @private
   */
  function LinkedList() {
    /** @type {LinkedListNode<T>} */
    var head = {
      value: null,
      prev: null,
      next: null
    };
    /** @type {LinkedListNode<T>} */
    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;

    /** @type {LinkedListNode<T>} */
    this.head = head;
    /** @type {LinkedListNode<T>} */
    this.tail = tail;
    this.length = 0;
  }

  /**
   * Adds a new node with the given value to the list.
   *
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {T} value
   * @returns {LinkedListNode<T>} The added node.
   * @template T
   */
  function addAfter(list, node, value) {
    // assumes that node != list.tail && values.length >= 0
    var next = node.next;
    var newNode = {
      value: value,
      prev: node,
      next: next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  /**
   * Removes `count` nodes after the given node. The given node will not be removed.
   *
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {number} count
   * @template T
   */
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  /**
   * @param {LinkedList<T>} list
   * @returns {T[]}
   * @template T
   */
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }
    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data);
        var lang = message.language;
        var code = message.code;
        var immediateClose = message.immediateClose;
        _self.postMessage(_.highlight(code, _.languages[lang], lang));
        if (immediateClose) {
          _self.close();
        }
      }, false);
    }
    return _;
  }

  // Get current script and highlight
  var script = _.util.currentScript();
  if (script) {
    _.filename = script.src;
    if (script.hasAttribute('data-manual')) {
      _.manual = true;
    }
  }
  function highlightAutomaticallyCallback() {
    if (!_.manual) {
      _.highlightAll();
    }
  }
  if (!_.manual) {
    // If the document state is "loading", then we'll use DOMContentLoaded.
    // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    // might take longer one animation frame to execute which can create a race condition where only some plugins have
    // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    // See https://github.com/PrismJS/prism/issues/2102
    var readyState = document.readyState;
    if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
      document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    } else {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(highlightAutomaticallyCallback);
      } else {
        window.setTimeout(highlightAutomaticallyCallback, 16);
      }
    }
  }
  return _;
}(_self);
if ( true && module.exports) {
  module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
  __webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */

/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below
      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function value(attrName, lang) {
    Prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: Prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
        // See rest below
      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;
  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(Prism);

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};

/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + (
    // constant
    /NaN|Infinity/.source + '|' +
    // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' +
    // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' +
    // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' +
    // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' +
    // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: RegExp(
    // lookbehind
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
    // Regex pattern:
    // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
    // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
    // with the only syntax, so we have to define 2 different regex patterns.
    /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' +
    // `v` flag syntax. This supports 3 levels of nested character classes.
    /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' +
    // lookahead
    /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: Prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
Prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});
if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');

  // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
  Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}
Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  var LOADING_MESSAGE = 'Loading…';
  var FAILURE_MESSAGE = function FAILURE_MESSAGE(status, message) {
    return '✖ Error ' + status + ' while fetching file: ' + message;
  };
  var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
  var EXTENSIONS = {
    'js': 'javascript',
    'py': 'python',
    'rb': 'ruby',
    'ps1': 'powershell',
    'psm1': 'powershell',
    'sh': 'bash',
    'bat': 'batch',
    'h': 'c',
    'tex': 'latex'
  };
  var STATUS_ATTR = 'data-src-status';
  var STATUS_LOADING = 'loading';
  var STATUS_LOADED = 'loaded';
  var STATUS_FAILED = 'failed';
  var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

  /**
   * Loads the given file.
   *
   * @param {string} src The URL or path of the source file to load.
   * @param {(result: string) => void} success
   * @param {(reason: string) => void} error
   */
  function loadFile(src, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status < 400 && xhr.responseText) {
          success(xhr.responseText);
        } else {
          if (xhr.status >= 400) {
            error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
          } else {
            error(FAILURE_EMPTY_MESSAGE);
          }
        }
      }
    };
    xhr.send(null);
  }

  /**
   * Parses the given range.
   *
   * This returns a range with inclusive ends.
   *
   * @param {string | null | undefined} range
   * @returns {[number, number | undefined] | undefined}
   */
  function parseRange(range) {
    var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
    if (m) {
      var start = Number(m[1]);
      var comma = m[2];
      var end = m[3];
      if (!comma) {
        return [start, start];
      }
      if (!end) {
        return [start, undefined];
      }
      return [start, Number(end)];
    }
    return undefined;
  }
  Prism.hooks.add('before-highlightall', function (env) {
    env.selector += ', ' + SELECTOR;
  });
  Prism.hooks.add('before-sanity-check', function (env) {
    var pre = /** @type {HTMLPreElement} */env.element;
    if (pre.matches(SELECTOR)) {
      env.code = ''; // fast-path the whole thing and go to complete

      pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

      // add code element with loading message
      var code = pre.appendChild(document.createElement('CODE'));
      code.textContent = LOADING_MESSAGE;
      var src = pre.getAttribute('data-src');
      var language = env.language;
      if (language === 'none') {
        // the language might be 'none' because there is no language set;
        // in this case, we want to use the extension as the language
        var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
        language = EXTENSIONS[extension] || extension;
      }

      // set language classes
      Prism.util.setLanguage(code, language);
      Prism.util.setLanguage(pre, language);

      // preload the language
      var autoloader = Prism.plugins.autoloader;
      if (autoloader) {
        autoloader.loadLanguages(language);
      }

      // load file
      loadFile(src, function (text) {
        // mark as loaded
        pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

        // handle data-range
        var range = parseRange(pre.getAttribute('data-range'));
        if (range) {
          var lines = text.split(/\r\n?|\n/g);

          // the range is one-based and inclusive on both ends
          var start = range[0];
          var end = range[1] == null ? lines.length : range[1];
          if (start < 0) {
            start += lines.length;
          }
          start = Math.max(0, Math.min(start - 1, lines.length));
          if (end < 0) {
            end += lines.length;
          }
          end = Math.max(0, Math.min(end, lines.length));
          text = lines.slice(start, end).join('\n');

          // add data-start for line numbers
          if (!pre.hasAttribute('data-start')) {
            pre.setAttribute('data-start', String(start + 1));
          }
        }

        // highlight code
        code.textContent = text;
        Prism.highlightElement(code);
      }, function (error) {
        // mark as failed
        pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
        code.textContent = error;
      });
    }
  });
  Prism.plugins.fileHighlight = {
    /**
     * Executes the File Highlight plugin for all matching `pre` elements under the given container.
     *
     * Note: Elements which are already loaded or currently loading will not be touched by this method.
     *
     * @param {ParentNode} [container=document]
     */
    highlight: function highlight(container) {
      var elements = (container || document).querySelectorAll(SELECTOR);
      for (var i = 0, element; element = elements[i++];) {
        Prism.highlightElement(element);
      }
    }
  };
  var logged = false;
  /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
  Prism.fileHighlight = function () {
    if (!logged) {
      console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
      logged = true;
    }
    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  };
})();

/***/ }),

/***/ 2036:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _util = __webpack_require__(2417);

/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
exports["default"] = {
  mounted: function mounted() {
    if (true) return;
    // removed by dead control flow

    // removed by dead control flow
 var _getMigratingConfig, _getMigratingConfig$p, props, _getMigratingConfig$e, events; 
    // removed by dead control flow
 var _$vnode, data, componentOptions; 
    // removed by dead control flow
 var definedProps; 
    // removed by dead control flow
 var definedEvents; 
    // removed by dead control flow
 var propName; 
    // removed by dead control flow
 var eventName; 
  },
  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
};

/***/ }),

/***/ 2053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkAdminvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAdmin; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdmin.vue?vue&type=template&id=77b0a469
var TkAdminvue_type_template_id_77b0a469 = __webpack_require__(4576);
;// ./src/client/view/components/TkAdmin.vue?vue&type=template&id=77b0a469

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdmin.vue?vue&type=script&lang=js
var TkAdminvue_type_script_lang_js = __webpack_require__(4238);
;// ./src/client/view/components/TkAdmin.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkAdminvue_type_script_lang_js = (TkAdminvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdmin.vue?vue&type=style&index=0&id=77b0a469&prod&lang=css
var TkAdminvue_type_style_index_0_id_77b0a469_prod_lang_css = __webpack_require__(4797);
;// ./src/client/view/components/TkAdmin.vue?vue&type=style&index=0&id=77b0a469&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAdmin.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkAdminvue_type_script_lang_js,
  TkAdminvue_type_template_id_77b0a469/* render */.XX,
  TkAdminvue_type_template_id_77b0a469/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAdmin = (component.exports);

/***/ }),

/***/ 2075:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var arrayLikeToArray = __webpack_require__(6530);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2080:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-footer"
  }, [_vm._v("\n  Powered by "), _c('a', {
    attrs: {
      "href": "https://twikoo.js.org",
      "target": "_blank"
    }
  }, [_vm._v("Twikoo")]), _vm._v("\n  v" + _vm._s(_vm.version) + "\n")]);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 2123:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Slugger = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
/**
 * Slugger generates header id
 */
var Slugger = exports.Slugger = /*#__PURE__*/function () {
  function Slugger() {
    (0, _classCallCheck2["default"])(this, Slugger);
    this.seen = {};
  }
  (0, _createClass2["default"])(Slugger, [{
    key: "serialize",
    value: function serialize(value) {
      return value.toLowerCase().trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }

    /**
     * Finds the next safe (unique) slug to use
     */
  }, {
    key: "getNextSafeSlug",
    value: function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }

    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
  }, {
    key: "slug",
    value: function slug(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    }
  }]);
  return Slugger;
}();

/***/ }),

/***/ 2199:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.version = void 0;
var version = exports.version = '1.7.4';

/***/ }),

/***/ 2266:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("863e6cdc", content, true, {});

/***/ }),

/***/ 2362:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _index = __webpack_require__(1085);
var _utils = __webpack_require__(8129);
var _api = __webpack_require__(585);
// 邮箱正则表达式来自 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
var mailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _default = exports.A = {
  props: {
    nick: String,
    mail: String,
    link: String,
    config: Object
  },
  data: function data() {
    return {
      metaInputs: [{
        key: 'nick',
        locale: (0, _utils.t)('META_INPUT_NICK'),
        name: 'nick',
        type: 'text'
      }, {
        key: 'mail',
        locale: (0, _utils.t)('META_INPUT_MAIL'),
        name: 'mail',
        type: 'email'
      }, {
        key: 'link',
        locale: (0, _utils.t)('META_INPUT_LINK'),
        name: 'link',
        type: 'text'
      }],
      metaData: {
        nick: '',
        mail: '',
        link: ''
      }
    };
  },
  computed: {
    displayedFields: function displayedFields() {
      var displayedFieldsSetting = this.config.DISPLAYED_FIELDS;
      return {
        nick: displayedFieldsSetting ? displayedFieldsSetting.indexOf('nick') !== -1 : true,
        mail: displayedFieldsSetting ? displayedFieldsSetting.indexOf('mail') !== -1 : true,
        link: displayedFieldsSetting ? displayedFieldsSetting.indexOf('link') !== -1 : true
      };
    },
    displayedInputs: function displayedInputs() {
      var _this = this;
      return this.metaInputs.filter(function (i) {
        return !!_this.displayedFields[i.key];
      });
    },
    requiredFields: function requiredFields() {
      var requiredFieldsSetting = this.config.REQUIRED_FIELDS;
      return {
        nick: requiredFieldsSetting ? requiredFieldsSetting.indexOf('nick') !== -1 : true,
        mail: requiredFieldsSetting ? requiredFieldsSetting.indexOf('mail') !== -1 : true,
        link: requiredFieldsSetting ? requiredFieldsSetting.indexOf('link') !== -1 : false
      };
    }
  },
  methods: {
    t: _utils.t,
    initMeta: function initMeta() {
      var mStr = localStorage.getItem('twikoo');
      if (mStr) {
        var metaData = JSON.parse(mStr);
        this.metaData.nick = metaData.nick;
        this.metaData.mail = metaData.mail;
        this.metaData.link = metaData.link;
      }
      this.updateMeta();
    },
    updateMeta: function updateMeta() {
      localStorage.setItem('twikoo', JSON.stringify(this.metaData));
      this.$emit('update', {
        meta: this.metaData,
        valid: this.checkValid()
      });
    },
    checkValid: function checkValid() {
      var isValidMail = mailRegExp.test(this.metaData.mail);
      return (this.metaData.nick || !this.requiredFields.nick) && (isValidMail || !this.requiredFields.mail) && (this.metaData.link || !this.requiredFields.link);
    },
    checkQQ: function checkQQ() {
      if ((0, _utils.isQQ)(this.metaData.nick)) {
        // 模仿 Valine 的操作逻辑，当用户在 [昵称] 输入 QQ 号时
        // 1. 自动填充数字 QQ 邮箱到 [邮箱]
        // 2. 自动填充 QQ 昵称到 [昵称]
        // 3. 自动显示 QQ 头像
        var qqNum = this.metaData.nick.replace(/@qq.com/ig, '');
        var qqMail = "".concat(qqNum, "@qq.com");
        this.metaData.mail = qqMail;
        this.getQQNick(qqNum);
      }
    },
    getQQNick: function getQQNick(qqNum) {
      var _this2 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$call, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _api.call)(null, 'GET_QQ_NICK', {
                qq: qqNum
              });
            case 3:
              _yield$call = _context.sent;
              result = _yield$call.result;
              if (result && result.nick) {
                _this2.metaData.nick = result.nick;
                _this2.updateMeta();
              }
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.warn('获取 QQ 昵称失败：', _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    checkAdminCrypt: function checkAdminCrypt() {
      var app = this.$root.$children[0];
      var showAdminEntry = this.config.HIDE_ADMIN_CRYPT ? this.config.HIDE_ADMIN_CRYPT === this.metaData.nick : true;
      app.onShowAdminEntry(showAdminEntry);
    },
    onMetaChange: function onMetaChange() {
      this.checkQQ();
      this.updateMeta();
      this.checkAdminCrypt();
    }
  },
  watch: {
    nick: function nick(newVal) {
      this.metaData.nick = newVal;
    },
    mail: function mail(newVal) {
      this.metaData.mail = newVal;
    },
    link: function link(newVal) {
      this.metaData.link = newVal;
    },
    requiredFields: {
      handler: function handler(val, oldVal) {
        this.$emit('update', {
          meta: this.metaData,
          valid: this.checkValid()
        });
      },
      deep: true
    },
    'config.VERSION': function configVERSION() {
      this.checkAdminCrypt();
    }
  },
  mounted: function mounted() {
    _index.app.$on('initMeta', this.initMeta);
    this.initMeta();
  }
};

/***/ }),

/***/ 2411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-action {\n  display: flex;\n  align-items: center;\n}\n.tk-action-link {\n  margin-left: 0.5rem;\n  color: #409eff;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n.tk-action-link .tk-action-icon-solid {\n  display: none;\n}\n.tk-action-link.tk-liked .tk-action-icon,\n.tk-action-link:hover .tk-action-icon {\n  display: none;\n}\n.tk-action-link.tk-liked .tk-action-icon-solid,\n.tk-action-link:hover .tk-action-icon-solid {\n  display: block;\n}\n.tk-action-link.tk-disliked .tk-action-icon,\n.tk-action-link.tk-disliked:hover .tk-action-icon {\n  display: none;\n}\n.tk-action-link.tk-disliked .tk-action-icon-solid,\n.tk-action-link.tk-disliked:hover .tk-action-icon-solid {\n  display: block;\n}\n.tk-action-count {\n  margin-left: 0.25rem;\n  font-size: 0.75rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n}\n.tk-action-icon {\n  display: inline-block;\n  height: 1em;\n  width: 1em;\n  line-height: 0;\n  color: #409eff;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2417:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(477);
var _typeof3 = _interopRequireDefault2(__webpack_require__(9367));
exports.__esModule = true;
exports.isMac = exports.isEmpty = exports.isEqual = exports.arrayEquals = exports.looseEqual = exports.capitalize = exports.kebabCase = exports.autoprefixer = exports.isFirefox = exports.isEdge = exports.isIE = exports.coerceTruthyValueToArray = exports.arrayFind = exports.arrayFindIndex = exports.escapeRegexpString = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;
var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
};
exports.noop = noop;
exports.hasOwn = hasOwn;
exports.toObject = toObject;
exports.getPropByPath = getPropByPath;
exports.rafThrottle = rafThrottle;
exports.objToArray = objToArray;
var _vue = __webpack_require__(4478);
var _vue2 = _interopRequireDefault(_vue);
var _types = __webpack_require__(6200);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function noop() {}
;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
;
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}
;
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
;
var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;
  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;
    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};
function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  var i = 0;
  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}
;
var generateId = exports.generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};
var valueEquals = exports.valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
var escapeRegexpString = exports.escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

// TODO: use native Array.find, Array.findIndex when IE support is dropped
var arrayFindIndex = exports.arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};
var arrayFind = exports.arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
var coerceTruthyValueToArray = exports.coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};
var isIE = exports.isIE = function isIE() {
  return !_vue2["default"].prototype.$isServer && !isNaN(Number(document.documentMode));
};
var isEdge = exports.isEdge = function isEdge() {
  return !_vue2["default"].prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};
var isFirefox = exports.isFirefox = function isFirefox() {
  return !_vue2["default"].prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};
var autoprefixer = exports.autoprefixer = function autoprefixer(style) {
  if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') return style;
  var rules = ['transform', 'transition', 'animation'];
  var prefixes = ['ms-', 'webkit-'];
  rules.forEach(function (rule) {
    var value = style[rule];
    if (rule && value) {
      prefixes.forEach(function (prefix) {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
var kebabCase = exports.kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};
var capitalize = exports.capitalize = function capitalize(str) {
  if (!(0, _types.isString)(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var looseEqual = exports.looseEqual = function looseEqual(a, b) {
  var isObjectA = (0, _types.isObject)(a);
  var isObjectB = (0, _types.isObject)(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};
var arrayEquals = exports.arrayEquals = function arrayEquals(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (var i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }
  return true;
};
var isEqual = exports.isEqual = function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};
var isEmpty = exports.isEmpty = function isEmpty(val) {
  // null or undefined
  if (val == null) return true;
  if (typeof val === 'boolean') return false;
  if (typeof val === 'number') return !val;
  if (val instanceof Error) return val.message === '';
  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      {
        return !val.size;
      }
    // Plain Object
    case '[object Object]':
      {
        return !Object.keys(val).length;
      }
  }
  return false;
};
function rafThrottle(fn) {
  var locked = false;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(function (_) {
      fn.apply(_this, args);
      locked = false;
    });
  };
}
function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}
var isMac = exports.isMac = function isMac() {
  return !_vue2["default"].prototype.$isServer && /macintosh|mac os x/i.test(navigator.userAgent);
};

/***/ }),

/***/ 2531:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z\"></path></svg>"

/***/ }),

/***/ 2573:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _vue = _interopRequireDefault(__webpack_require__(4478));
var _dom = __webpack_require__(8784);
var nodeList = [];
var ctx = '@@clickoutsideContext';
var startClick;
var seed = 0;
!_vue["default"].prototype.$isServer && (0, _dom.on)(document, 'mousedown', function (e) {
  return startClick = e;
});
!_vue["default"].prototype.$isServer && (0, _dom.on)(document, 'mouseup', function (e) {
  nodeList.forEach(function (node) {
    return node[ctx].documentHandler(e, startClick);
  });
});
function createDocumentHandler(el, binding, vnode) {
  return function () {
    var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;
    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
var _default = exports["default"] = {
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;
    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};

/***/ }),

/***/ 2630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6727);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("2f96e18e", content, true, {});

/***/ }),

/***/ 2817:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Parser = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
var _Renderer = __webpack_require__(7565);
var _TextRenderer = __webpack_require__(1674);
var _Slugger = __webpack_require__(2123);
var _defaults = __webpack_require__(4008);
var _helpers = __webpack_require__(9105);
/**
 * Parsing & Compiling
 */
var Parser = exports.Parser = /*#__PURE__*/function () {
  function Parser(options) {
    (0, _classCallCheck2["default"])(this, Parser);
    this.options = options || _defaults.defaults;
    this.options.renderer = this.options.renderer || new _Renderer.Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer.TextRenderer();
    this.slugger = new _Slugger.Slugger();
  }

  /**
   * Static Parse Method
   */
  (0, _createClass2["default"])(Parser, [{
    key: "parse",
    value:
    /**
     * Parse Loop
     */
    function parse(tokens) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var out = '',
        i,
        j,
        k,
        l2,
        l3,
        row,
        cell,
        header,
        body,
        token,
        ordered,
        start,
        loose,
        itemBody,
        item,
        checked,
        task,
        checkbox,
        ret;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];

        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);
          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'space':
            {
              continue;
            }
          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }
          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, (0, _helpers.unescape)(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }
          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }
          case 'table':
            {
              header = '';

              // header
              cell = '';
              l2 = token.header.length;
              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                  header: true,
                  align: token.align[j]
                });
              }
              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.rows.length;
              for (j = 0; j < l2; j++) {
                row = token.rows[j];
                cell = '';
                l3 = row.length;
                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: token.align[k]
                  });
                }
                body += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body);
              continue;
            }
          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }
          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';
              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';
                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);
                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }
                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }
              out += this.renderer.list(body, ordered, start);
              continue;
            }
          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }
          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }
          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;
              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }
              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }

    /**
     * Parse Inline Tokens
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
        i,
        token,
        ret;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];

        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);
          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'owo':
            {
              out += renderer.owo(token.text);
              break;
            }
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }
          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }
          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }
          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }
          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }
          case 'br':
            {
              out += renderer.br();
              break;
            }
          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }

    /**
     * Static Parse Inline Method
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
  }]);
  return Parser;
}();

/***/ }),

/***/ 2838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-admin-comment {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tk-admin-comment a {\n  color: currentColor;\n  text-decoration: underline;\n}\n.tk-admin-warn {\n  margin-bottom: 1em;\n}\n.tk-admin-security-alert {\n  position: relative;\n  padding-right: 2.5rem;\n  margin-bottom: 0;\n}\n.tk-admin-security-alert .tk-admin-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  float: none;\n  width: 1rem;\n  height: 1rem;\n  padding: 0.5rem;\n  margin: 0;\n}\n.tk-admin-security-alert-message {\n  margin-bottom: 0.5em;\n}\n.tk-admin-security-alert-url {\n  word-break: break-all;\n  background: rgba(0,0,0,0.2);\n  padding: 0.5em;\n  border-radius: 4px;\n  margin-bottom: 0.5em;\n}\n.tk-admin-comment-filter {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.tk-admin-comment-filter-keyword {\n  flex: 1;\n}\n.tk-admin-comment-filter-type {\n  height: 32px;\n  margin: 0 0.5em;\n  padding: 0 0.5em;\n  color: #ffffff;\n  background: none;\n  border: 1px solid rgba(144,147,153,0.31);\n  border-radius: 4px;\n  position: relative;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n.tk-admin-comment-filter-type:focus {\n  border-color: #409eff;\n}\n.tk-admin-comment-filter-type option {\n  color: initial;\n}\n.tk-admin-comment-list {\n  margin-top: 1em;\n}\n.tk-admin-comment-list,\n.tk-admin-comment-item {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\n.tk-admin-comment-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.5em;\n}\n.tk-admin-comment .tk-avatar {\n  margin-right: 0.5em;\n}\n.tk-admin-comment .tk-content {\n  max-height: none;\n}\n.tk-admin-actions {\n  display: flex;\n  margin-bottom: 1em;\n  border-bottom: 1px solid rgba(255,255,255,0.5);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2865:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(477);
var _typeof3 = _interopRequireDefault2(__webpack_require__(9367));
exports.__esModule = true;
exports.isInContainer = exports.getScrollContainer = exports.isScroll = exports.getStyle = exports.once = exports.off = exports.on = undefined;
var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
}; /* istanbul ignore next */

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;
var _vue = __webpack_require__(4478);
var _vue2 = _interopRequireDefault(_vue);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var isServer = _vue2["default"].prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
;

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.setAttribute('class', curClass);
  }
}
;

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.setAttribute('class', trim(curClass));
  }
}
;

/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;
  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
;
var isScroll = exports.isScroll = function isScroll(el, vertical) {
  if (isServer) return;
  var determinedDirection = vertical !== null && vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');
  return overflow.match(/(scroll|auto|overlay)/);
};
var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;
  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
var isInContainer = exports.isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;
  var elRect = el.getBoundingClientRect();
  var containerRect = void 0;
  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};

/***/ }),

/***/ 2889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(477);
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

/* eslint-disable strict */

;
(function ($) {
  'use strict';

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }
    return output;
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  }
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return md5;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(void 0);

/***/ }),

/***/ 2971:
/***/ (function(module) {

"use strict";


function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-meta-input {\n  display: flex;\n}\n.tk-meta-input .el-input {\n  width: auto;\n  width: calc((100% - 1rem) / 3); /* Fix Safari */\n  flex: 1;\n}\n.tk-meta-input .el-input + .el-input {\n  margin-left: 0.5rem;\n}\n.tk-meta-input .el-input .el-input-group__prepend {\n  padding: 0 1rem;\n}\n.tk-meta-input .el-input input:invalid {\n  border: 1px solid #f56c6c;\n  box-shadow: none;\n}\n@media screen and (max-width: 767px) {\n.tk-meta-input {\n    flex-direction: column;\n}\n.tk-meta-input .el-input {\n    width: auto;\n}\n.tk-meta-input .el-input + .el-input {\n    margin-left: 0;\n    margin-top: 0.5rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3396:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _utils = __webpack_require__(8129);
var _default = exports.A = {
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    t: _utils.t,
    doExport: function doExport(collection) {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return (0, _utils.call)(_this.$tcb, 'COMMENT_EXPORT_FOR_ADMIN', {
                collection: collection
              });
            case 4:
              result = _context.sent;
              if (result.result.data) {
                _this.downloadJson("twikoo-".concat(collection, ".json"), result.result.data);
              }
            case 6:
              _context.prev = 6;
              _this.loading = false;
              return _context.finish(6);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1,, 6, 9]]);
      }))();
    },
    downloadJson: function downloadJson(fileName, json) {
      var jsonStr = json instanceof Object ? JSON.stringify(json, null, 2) : json;
      var url = window.URL || window.webkitURL || window;
      var blob = new Blob([jsonStr]);
      var saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      saveLink.href = url.createObjectURL(blob);
      saveLink.download = fileName;
      saveLink.click();
    }
  }
};

/***/ }),

/***/ 3397:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _comment = _interopRequireDefault(__webpack_require__(3491));
var _comment2 = _interopRequireDefault(__webpack_require__(6370));
var _thumbsUp = _interopRequireDefault(__webpack_require__(6359));
var _thumbsUp2 = _interopRequireDefault(__webpack_require__(5910));
var _thumbsDown = _interopRequireDefault(__webpack_require__(6412));
var _thumbsDown2 = _interopRequireDefault(__webpack_require__(9801));
var _default = exports.A = {
  data: function data() {
    return {
      iconComment: _comment["default"],
      iconCommentSolid: _comment2["default"],
      iconLike: _thumbsUp["default"],
      iconLikeSolid: _thumbsUp2["default"],
      iconDislike: _thumbsDown["default"],
      iconDislikeSolid: _thumbsDown2["default"]
    };
  },
  props: {
    liked: Boolean,
    disliked: Boolean,
    likeCount: Number,
    dislikeCount: Number,
    repliesCount: Number,
    showDislike: Boolean
  },
  computed: {
    likeCountStr: function likeCountStr() {
      return this.likeCount > 0 ? "".concat(this.likeCount) : '';
    },
    dislikeCountStr: function dislikeCountStr() {
      return this.dislikeCount > 0 ? "".concat(this.dislikeCount) : '';
    },
    repliesCountStr: function repliesCountStr() {
      return this.repliesCount > 0 ? "".concat(this.repliesCount) : '';
    }
  },
  methods: {
    onLike: function onLike($event) {
      $event.preventDefault();
      this.$emit('like');
    },
    onDislike: function onDislike($event) {
      $event.preventDefault();
      this.$emit('dislike');
    },
    onReply: function onReply($event) {
      $event.preventDefault();
      this.$emit('reply');
    }
  }
};

/***/ }),

/***/ 3430:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2411);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("5e79ebc6", content, true, {});

/***/ }),

/***/ 3457:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8440);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("042e8a68", content, true, {});

/***/ }),

/***/ 3491:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z\"></path></svg>"

/***/ }),

/***/ 3514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-admin-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n.tk-admin {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  pointer-events: all;\n  color: #ffffff;\n  background-color: rgba(0,0,0,0.60);\n  backdrop-filter: blur(5px);\n  transition: all 0.5s ease;\n  visibility: hidden;\n}\n.tk-admin::-webkit-scrollbar {\n  width: 5px;\n  background-color: transparent;\n}\n.tk-admin::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.tk-admin::-webkit-scrollbar-thumb {\n  background-color: rgba(255,255,255,0.31);\n}\n.tk-admin.__show {\n  left: 0;\n  visibility: visible;\n}\n.tk-admin-close {\n  position: sticky;\n  float: right;\n  display: block;\n  top: 0;\n  right: 0;\n  width: 1rem;\n  height: 1rem;\n  padding: 1rem;\n  box-sizing: content-box;\n  color: #ffffff;\n}\n.tk-login,\n.tk-regist {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 0 2rem;\n}\n.tk-login-title {\n  color: #ffffff;\n  font-size: 1.25rem;\n  text-align: center;\n  margin-top: 10rem;\n}\n.tk-password,\n.tk-login-msg {\n  color: #ffffff;\n  width: 80%;\n  text-align: center;\n  margin-top: 1rem;\n}\n.tk-password .el-input__inner {\n  min-width: 100px;\n}\n.tk-login-msg a {\n  color: #ffffff;\n  margin-left: 1em;\n  text-decoration: underline;\n}\n.tk-regist-button {\n  margin-top: 1rem;\n}\n.tk-panel {\n  color: #ffffff;\n  padding: 2rem;\n}\n.tk-panel-title {\n  font-size: 1.5rem;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.tk-panel-logout {\n  color: #ffffff;\n  font-size: 1rem;\n  text-decoration: underline;\n}\n.tk-panel .tk-tabs {\n  display: flex;\n  margin-bottom: 1em;\n  border-bottom: 2px solid #c0c4cc;\n}\n.tk-panel .tk-tab {\n  color: #c0c4cc;\n  cursor: pointer;\n  line-height: 2em;\n  margin-right: 2em;\n  margin-bottom: -2px;\n}\n.tk-panel .tk-tab.__active {\n  color: #ffffff;\n  border-bottom: 2px solid #ffffff;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3572:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _utils = __webpack_require__(8129);
var _TkAction = _interopRequireDefault(__webpack_require__(6679));
var _TkAvatar = _interopRequireDefault(__webpack_require__(4785));
var _TkSubmit = _interopRequireDefault(__webpack_require__(5567));
var _windows = _interopRequireDefault(__webpack_require__(2531));
var _apple = _interopRequireDefault(__webpack_require__(9396));
var _android = _interopRequireDefault(__webpack_require__(6937));
var _linux = _interopRequireDefault(__webpack_require__(8974));
var _ubuntu = _interopRequireDefault(__webpack_require__(7397));
var _chrome = _interopRequireDefault(__webpack_require__(58));
var _firefoxBrowser = _interopRequireDefault(__webpack_require__(8443));
var _safari = _interopRequireDefault(__webpack_require__(740));
var _internetExplorer = _interopRequireDefault(__webpack_require__(3793));
var _edge = _interopRequireDefault(__webpack_require__(7051));
var _windowMaximize = _interopRequireDefault(__webpack_require__(9039));
var _locationArrow = _interopRequireDefault(__webpack_require__(3982));
var osList = {
  win: _windows["default"],
  mac: _apple["default"],
  ipad: _apple["default"],
  iphone: _apple["default"],
  ios: _apple["default"],
  android: _android["default"],
  ubuntu: _ubuntu["default"],
  linux: _linux["default"]
};
var browserList = {
  edge: _edge["default"],
  chrome: _chrome["default"],
  firefox: _firefoxBrowser["default"],
  safari: _safari["default"],
  explorer: _internetExplorer["default"],
  ie: _internetExplorer["default"]
};
var _default = exports.A = {
  name: 'tk-comment',
  // 允许组件模板递归地调用自身
  components: {
    TkAction: _TkAction["default"],
    TkAvatar: _TkAvatar["default"],
    TkSubmit: _TkSubmit["default"]
  },
  data: function data() {
    return {
      pid: '',
      like: 0,
      liked: false,
      disliked: false,
      ups: 0,
      downs: 0,
      likeLoading: false,
      isExpanded: false,
      hasExpand: false,
      isContentExpanded: false,
      hasContentExpand: false,
      isLogin: false
    };
  },
  props: {
    comment: Object,
    replyId: String,
    replying: Boolean,
    config: Object
  },
  computed: {
    displayCreated: function displayCreated() {
      return (0, _utils.timeago)(this.comment.created);
    },
    jsonTimestamp: function jsonTimestamp() {
      return new Date(this.comment.created).toJSON();
    },
    localeTime: function localeTime() {
      return new Date(this.comment.created).toLocaleString();
    },
    iconOs: function iconOs() {
      return this.getIconBy(this.comment.os, osList);
    },
    iconBrowser: function iconBrowser() {
      return this.getIconBy(this.comment.browser, browserList);
    },
    iconLocation: function iconLocation() {
      return _locationArrow["default"];
    },
    showExpand: function showExpand() {
      return this.hasExpand && !this.isExpanded;
    },
    showCollapse: function showCollapse() {
      return this.hasExpand && this.isExpanded;
    },
    showContentExpand: function showContentExpand() {
      return this.hasContentExpand && !this.isContentExpanded;
    },
    showContentCollapse: function showContentCollapse() {
      return this.hasContentExpand && this.isContentExpanded;
    },
    convertedLink: function convertedLink() {
      return (0, _utils.convertLink)(this.comment.link);
    }
  },
  methods: {
    t: _utils.t,
    getIconBy: function getIconBy(name, list) {
      var lowerCaseName = name.toLowerCase();
      for (var key in list) {
        if (lowerCaseName.indexOf(key) !== -1) return list[key];
      }
      return _windowMaximize["default"];
    },
    showExpandIfNeed: function showExpandIfNeed() {
      if (this.comment.replies && this.comment.replies.length > 0 && this.$refs['tk-replies']) {
        // 200 是回复区域最大高度
        // 36 是展开按钮高度
        this.hasExpand = this.$refs['tk-replies'].scrollHeight > 200 + 36;
      }
    },
    showContentExpandIfNeed: function showContentExpandIfNeed() {
      // 如果已经折叠就不再判断 主要是为了防止图片在onload之前就已经折叠而导致图片在onload之后取消折叠
      this.hasContentExpand = this.hasContentExpand || this.$refs['tk-content'].scrollHeight > 500;
    },
    showContentExpandIfNeedAfterImagesLoaded: function showContentExpandIfNeedAfterImagesLoaded() {
      var _this = this;
      this.$refs['tk-content'].querySelectorAll('img').forEach(function (imgEl) {
        imgEl.onload = _this.showContentExpandIfNeed;
      });
    },
    scrollToComment: function scrollToComment() {
      if (window.location.hash.indexOf(this.comment.id) !== -1) {
        this.$refs['tk-comment'].scrollIntoView({
          behavior: 'smooth'
        });
        this.$emit('expand');
      }
    },
    onLike: function onLike() {
      var _this2 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this2.likeLoading) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _this2.likeLoading = true;
              _context.next = 5;
              return (0, _utils.call)(_this2.$tcb, 'COMMENT_LIKE', {
                id: _this2.comment.id,
                type: 'up'
              });
            case 5:
              if (_this2.liked) {
                _this2.ups--;
              } else {
                _this2.ups++;
                if (_this2.disliked) {
                  _this2.downs--;
                }
              }
              _this2.liked = !_this2.liked;
              _this2.disliked = false;
              _this2.likeLoading = false;
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    onDislike: function onDislike() {
      var _this3 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this3.likeLoading) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _this3.likeLoading = true;
              _context2.next = 5;
              return (0, _utils.call)(_this3.$tcb, 'COMMENT_LIKE', {
                id: _this3.comment.id,
                type: 'down'
              });
            case 5:
              if (_this3.disliked) {
                _this3.downs--;
              } else {
                _this3.downs++;
                if (_this3.liked) {
                  _this3.ups--;
                }
              }
              _this3.disliked = !_this3.disliked;
              _this3.liked = false;
              _this3.likeLoading = false;
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onReply: function onReply(id) {
      this.pid = id;
      this.$emit('reply', this.comment.id);
    },
    onReplyReply: function onReplyReply(id) {
      // 楼中楼回复
      this.pid = id;
      if (id) {
        // action 回复按钮 触发
        this.$emit('reply', this.comment.id);
      } else {
        // submit 取消按钮 触发
        this.$emit('reply', '');
      }
    },
    onCancel: function onCancel() {
      this.pid = '';
      this.$emit('reply', '');
    },
    onLoad: function onLoad() {
      if (this.comment.replies.length > 0) {
        this.$refs['tk-replies'].lastElementChild.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
      this.pid = '';
      this.$emit('reply', '');
      this.$emit('load');
      this.onExpand();
    },
    onExpand: function onExpand() {
      this.isExpanded = true;
    },
    onCollapse: function onCollapse() {
      this.isExpanded = false;
    },
    onContentExpand: function onContentExpand() {
      this.isContentExpanded = true;
    },
    onContentCollapse: function onContentCollapse() {
      this.isContentExpanded = false;
    },
    checkAuth: function checkAuth() {
      var _this4 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var currentUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!_this4.$tcb) {
                _context3.next = 7;
                break;
              }
              _context3.next = 3;
              return _this4.$tcb.auth.getCurrenUser();
            case 3:
              currentUser = _context3.sent;
              _this4.isLogin = currentUser.loginType === 'CUSTOM';
              _context3.next = 8;
              break;
            case 7:
              _this4.isLogin = _this4.$twikoo.serverConfig && _this4.$twikoo.serverConfig.IS_ADMIN;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    handleSpam: function handleSpam(isSpam, $event) {
      $event.preventDefault();
      this.setComment({
        isSpam: isSpam
      });
    },
    handleTop: function handleTop(top, $event) {
      $event.preventDefault();
      this.setComment({
        top: top
      });
    },
    popupLightbox: function popupLightbox(event) {
      if (this.$twikoo.serverConfig.LIGHTBOX !== 'true') return;
      var target = event.target;
      if (target.tagName === 'IMG' && !target.classList.contains('tk-owo-emotion')) {
        var lightbox = document.createElement('div');
        lightbox.className = 'tk-lightbox';
        var lightboxImg = document.createElement('img');
        lightboxImg.className = 'tk-lightbox-image';
        lightboxImg.src = target.src;
        lightbox.appendChild(lightboxImg);
        lightbox.addEventListener('click', function () {
          document.body.removeChild(lightbox);
        });
        document.body.appendChild(lightbox);
      }
    },
    setComment: function setComment(set) {
      var _this5 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.loading = true;
              _context4.next = 3;
              return (0, _utils.call)(_this5.$tcb, 'COMMENT_SET_FOR_ADMIN', {
                id: _this5.comment.id,
                set: set
              });
            case 3:
              _this5.loading = false;
              _this5.$emit('load');
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    this.$nextTick(this.showContentExpandIfNeed);
    this.$nextTick(this.showContentExpandIfNeedAfterImagesLoaded);
    this.$nextTick(this.showExpandIfNeed);
    this.$nextTick(this.scrollToComment);
    this.$nextTick(function () {
      (0, _utils.renderLinks)(_this6.$refs.comment);
      (0, _utils.renderMath)(_this6.$refs.comment, _this6.$twikoo.katex);
    });
    this.checkAuth();
  },
  watch: {
    'comment.like': {
      handler: function handler(like) {
        this.like = this.comment.like;
      },
      immediate: true
    },
    'comment.ups': {
      handler: function handler(ups) {
        this.ups = this.comment.ups;
        this.liked = this.comment.liked;
      },
      immediate: true
    },
    'comment.downs': {
      handler: function handler(downs) {
        this.downs = this.comment.downs;
        this.disliked = this.comment.disliked;
      },
      immediate: true
    },
    'config.HIGHLIGHT': {
      handler: function handler(highlight) {
        var _this7 = this;
        if (highlight === 'true') {
          this.$nextTick(function () {
            (0, _utils.renderCode)(_this7.$refs.comment, _this7.config.HIGHLIGHT_THEME, _this7.config.HIGHLIGHT_PLUGIN);
          });
        }
      },
      immediate: true
    }
  }
};

/***/ }),

/***/ 3723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".el-button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#FFF;border:1px solid #DCDFE6;color:#606266;-webkit-appearance:none;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:0;margin:0;-webkit-transition:.1s;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.el-button+.el-button{margin-left:10px}.el-button:focus,.el-button:hover{color:#409EFF;border-color:#c6e2ff;background-color:#ecf5ff}.el-button:active{color:#3a8ee6;border-color:#3a8ee6;outline:0}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon-]+span{margin-left:5px}.el-button.is-plain:focus,.el-button.is-plain:hover{background:#FFF;border-color:#409EFF;color:#409EFF}.el-button.is-active,.el-button.is-plain:active{color:#3a8ee6;border-color:#3a8ee6}.el-button.is-plain:active{background:#FFF;outline:0}.el-button.is-disabled,.el-button.is-disabled:focus,.el-button.is-disabled:hover{color:#C0C4CC;cursor:not-allowed;background-image:none;background-color:#FFF;border-color:#EBEEF5}.el-button.is-disabled.el-button--text{background-color:transparent}.el-button.is-disabled.is-plain,.el-button.is-disabled.is-plain:focus,.el-button.is-disabled.is-plain:hover{background-color:#FFF;border-color:#EBEEF5;color:#C0C4CC}.el-button.is-loading{position:relative;pointer-events:none}.el-button.is-loading:before{pointer-events:none;content:'';position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border-radius:inherit;background-color:rgba(255,255,255,.35)}.el-button.is-round{border-radius:20px;padding:12px 23px}.el-button.is-circle{border-radius:50%;padding:12px}.el-button--primary{color:#FFF;background-color:#409EFF;border-color:#409EFF}.el-button--primary:focus,.el-button--primary:hover{background:#66b1ff;border-color:#66b1ff;color:#FFF}.el-button--primary:active{background:#3a8ee6;border-color:#3a8ee6;color:#FFF;outline:0}.el-button--primary.is-active{background:#3a8ee6;border-color:#3a8ee6;color:#FFF}.el-button--primary.is-disabled,.el-button--primary.is-disabled:active,.el-button--primary.is-disabled:focus,.el-button--primary.is-disabled:hover{color:#FFF;background-color:#a0cfff;border-color:#a0cfff}.el-button--primary.is-plain{color:#409EFF;background:#ecf5ff;border-color:#b3d8ff}.el-button--primary.is-plain:focus,.el-button--primary.is-plain:hover{background:#409EFF;border-color:#409EFF;color:#FFF}.el-button--primary.is-plain:active{background:#3a8ee6;border-color:#3a8ee6;color:#FFF;outline:0}.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:hover{color:#8cc5ff;background-color:#ecf5ff;border-color:#d9ecff}.el-button--success{color:#FFF;background-color:#67C23A;border-color:#67C23A}.el-button--success:focus,.el-button--success:hover{background:#85ce61;border-color:#85ce61;color:#FFF}.el-button--success.is-active,.el-button--success:active{background:#5daf34;border-color:#5daf34;color:#FFF}.el-button--success:active{outline:0}.el-button--success.is-disabled,.el-button--success.is-disabled:active,.el-button--success.is-disabled:focus,.el-button--success.is-disabled:hover{color:#FFF;background-color:#b3e19d;border-color:#b3e19d}.el-button--success.is-plain{color:#67C23A;background:#f0f9eb;border-color:#c2e7b0}.el-button--success.is-plain:focus,.el-button--success.is-plain:hover{background:#67C23A;border-color:#67C23A;color:#FFF}.el-button--success.is-plain:active{background:#5daf34;border-color:#5daf34;color:#FFF;outline:0}.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:hover{color:#a4da89;background-color:#f0f9eb;border-color:#e1f3d8}.el-button--warning{color:#FFF;background-color:#E6A23C;border-color:#E6A23C}.el-button--warning:focus,.el-button--warning:hover{background:#ebb563;border-color:#ebb563;color:#FFF}.el-button--warning.is-active,.el-button--warning:active{background:#cf9236;border-color:#cf9236;color:#FFF}.el-button--warning:active{outline:0}.el-button--warning.is-disabled,.el-button--warning.is-disabled:active,.el-button--warning.is-disabled:focus,.el-button--warning.is-disabled:hover{color:#FFF;background-color:#f3d19e;border-color:#f3d19e}.el-button--warning.is-plain{color:#E6A23C;background:#fdf6ec;border-color:#f5dab1}.el-button--warning.is-plain:focus,.el-button--warning.is-plain:hover{background:#E6A23C;border-color:#E6A23C;color:#FFF}.el-button--warning.is-plain:active{background:#cf9236;border-color:#cf9236;color:#FFF;outline:0}.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:hover{color:#f0c78a;background-color:#fdf6ec;border-color:#faecd8}.el-button--danger{color:#FFF;background-color:#F56C6C;border-color:#F56C6C}.el-button--danger:focus,.el-button--danger:hover{background:#f78989;border-color:#f78989;color:#FFF}.el-button--danger.is-active,.el-button--danger:active{background:#dd6161;border-color:#dd6161;color:#FFF}.el-button--danger:active{outline:0}.el-button--danger.is-disabled,.el-button--danger.is-disabled:active,.el-button--danger.is-disabled:focus,.el-button--danger.is-disabled:hover{color:#FFF;background-color:#fab6b6;border-color:#fab6b6}.el-button--danger.is-plain{color:#F56C6C;background:#fef0f0;border-color:#fbc4c4}.el-button--danger.is-plain:focus,.el-button--danger.is-plain:hover{background:#F56C6C;border-color:#F56C6C;color:#FFF}.el-button--danger.is-plain:active{background:#dd6161;border-color:#dd6161;color:#FFF;outline:0}.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:hover{color:#f9a7a7;background-color:#fef0f0;border-color:#fde2e2}.el-button--info{color:#FFF;background-color:#909399;border-color:#909399}.el-button--info:focus,.el-button--info:hover{background:#a6a9ad;border-color:#a6a9ad;color:#FFF}.el-button--info.is-active,.el-button--info:active{background:#82848a;border-color:#82848a;color:#FFF}.el-button--info:active{outline:0}.el-button--info.is-disabled,.el-button--info.is-disabled:active,.el-button--info.is-disabled:focus,.el-button--info.is-disabled:hover{color:#FFF;background-color:#c8c9cc;border-color:#c8c9cc}.el-button--info.is-plain{color:#909399;background:#f4f4f5;border-color:#d3d4d6}.el-button--info.is-plain:focus,.el-button--info.is-plain:hover{background:#909399;border-color:#909399;color:#FFF}.el-button--info.is-plain:active{background:#82848a;border-color:#82848a;color:#FFF;outline:0}.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:hover{color:#bcbec2;background-color:#f4f4f5;border-color:#e9e9eb}.el-button--medium{padding:10px 20px;font-size:14px;border-radius:4px}.el-button--mini,.el-button--small{font-size:12px;border-radius:3px}.el-button--medium.is-round{padding:10px 20px}.el-button--medium.is-circle{padding:10px}.el-button--small,.el-button--small.is-round{padding:9px 15px}.el-button--small.is-circle{padding:9px}.el-button--mini,.el-button--mini.is-round{padding:7px 15px}.el-button--mini.is-circle{padding:7px}.el-button--text{border-color:transparent;color:#409EFF;background:0 0;padding-left:0;padding-right:0}.el-button--text:focus,.el-button--text:hover{color:#66b1ff;border-color:transparent;background-color:transparent}.el-button--text:active{color:#3a8ee6;border-color:transparent;background-color:transparent}.el-button--text.is-disabled,.el-button--text.is-disabled:focus,.el-button--text.is-disabled:hover{border-color:transparent}.el-button-group .el-button--danger:last-child,.el-button-group .el-button--danger:not(:first-child):not(:last-child),.el-button-group .el-button--info:last-child,.el-button-group .el-button--info:not(:first-child):not(:last-child),.el-button-group .el-button--primary:last-child,.el-button-group .el-button--primary:not(:first-child):not(:last-child),.el-button-group .el-button--success:last-child,.el-button-group .el-button--success:not(:first-child):not(:last-child),.el-button-group .el-button--warning:last-child,.el-button-group .el-button--warning:not(:first-child):not(:last-child),.el-button-group>.el-dropdown>.el-button{border-left-color:rgba(255,255,255,.5)}.el-button-group .el-button--danger:first-child,.el-button-group .el-button--danger:not(:first-child):not(:last-child),.el-button-group .el-button--info:first-child,.el-button-group .el-button--info:not(:first-child):not(:last-child),.el-button-group .el-button--primary:first-child,.el-button-group .el-button--primary:not(:first-child):not(:last-child),.el-button-group .el-button--success:first-child,.el-button-group .el-button--success:not(:first-child):not(:last-child),.el-button-group .el-button--warning:first-child,.el-button-group .el-button--warning:not(:first-child):not(:last-child){border-right-color:rgba(255,255,255,.5)}.el-button-group{display:inline-block;vertical-align:middle}.el-button-group::after,.el-button-group::before{display:table;content:\"\"}.el-button-group::after{clear:both}.el-button-group>.el-button{float:left;position:relative}.el-button-group>.el-button+.el-button{margin-left:0}.el-button-group>.el-button.is-disabled{z-index:1}.el-button-group>.el-button:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.el-button-group>.el-button:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.el-button-group>.el-button:first-child:last-child{border-radius:4px}.el-button-group>.el-button:first-child:last-child.is-round{border-radius:20px}.el-button-group>.el-button:first-child:last-child.is-circle{border-radius:50%}.el-button-group>.el-button:not(:first-child):not(:last-child){border-radius:0}.el-button-group>.el-button:not(:last-child){margin-right:-1px}.el-button-group>.el-button.is-active,.el-button-group>.el-button:not(.is-disabled):active,.el-button-group>.el-button:not(.is-disabled):focus,.el-button-group>.el-button:not(.is-disabled):hover{z-index:1}.el-button-group>.el-dropdown>.el-button{border-top-left-radius:0;border-bottom-left-radius:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3725:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports["default"] = function (instance, callback) {
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!instance || !callback) throw new Error('instance & callback is required');
  var called = false;
  var afterLeaveCallback = function afterLeaveCallback() {
    if (called) return;
    called = true;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
  if (once) {
    instance.$once('after-leave', afterLeaveCallback);
  } else {
    instance.$on('after-leave', afterLeaveCallback);
  }
  setTimeout(function () {
    afterLeaveCallback();
  }, speed + 100);
};
; /**
   * Bind after-leave event for vue instance. Make sure after-leave is called in any browsers.
   *
   * @param {Vue} instance Vue instance.
   * @param {Function} callback callback of after-leave event
   * @param {Number} speed the speed of transition, default value is 300ms
   * @param {Boolean} once weather bind after-leave once. default value is false.
   */

/***/ }),

/***/ 3774:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Lexer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
var _Tokenizer = __webpack_require__(4001);
var _defaults = __webpack_require__(4008);
var _rules = __webpack_require__(5779);
var _helpers = __webpack_require__(9105);
/**
 * smartypants text replacement
 */
function smartypants(text) {
  return text
  // em-dashes
  .replace(/---/g, "\u2014")
  // en-dashes
  .replace(/--/g, "\u2013")
  // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")
  // closing singles & apostrophes
  .replace(/'/g, "\u2019")
  // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C")
  // closing doubles
  .replace(/"/g, "\u201D")
  // ellipses
  .replace(/\.{3}/g, "\u2026");
}

/**
 * mangle email addresses
 */
function mangle(text) {
  var out = '',
    i,
    ch;
  var l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }
  return out;
}

/**
 * Block Lexer
 */
var Lexer = exports.Lexer = /*#__PURE__*/function () {
  function Lexer(options) {
    (0, _classCallCheck2["default"])(this, Lexer);
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || _defaults.defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer.Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      block: _rules.block.normal,
      inline: _rules.inline.normal
    };
    if (this.options.pedantic) {
      rules.block = _rules.block.pedantic;
      rules.inline = _rules.inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = _rules.block.gfm;
      if (this.options.breaks) {
        rules.inline = _rules.inline.breaks;
      } else {
        rules.inline = _rules.inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  (0, _createClass2["default"])(Lexer, [{
    key: "lex",
    value:
    /**
     * Preprocessing
     */
    function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens);
      var next;
      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }
      return this.tokens;
    }

    /**
     * Lexing
     */
  }, {
    key: "blockTokens",
    value: function blockTokens(src) {
      var _this = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (this.options.pedantic) {
        src = src.replace(/^ +$/gm, '');
      }
      var token, lastToken, cutSrc, lastParagraphClipped;
      var _loop = function _loop() {
          if (_this.options.extensions && _this.options.extensions.block && _this.options.extensions.block.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }

          // newline
          if (token = _this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.raw.length === 1 && tokens.length > 0) {
              // if there's a single \n as a spacer, it's terminating the last line,
              // so move it there so that we don't get unecessary paragraph tags
              tokens[tokens.length - 1].raw += '\n';
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }

          // code
          if (token = _this.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            // An indented code block cannot interrupt a paragraph.
            if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }

          // fences
          if (token = _this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // heading
          if (token = _this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // hr
          if (token = _this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // blockquote
          if (token = _this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // list
          if (token = _this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // html
          if (token = _this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // def
          if (token = _this.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.raw;
              _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
            } else if (!_this.tokens.links[token.tag]) {
              _this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            return 0; // continue
          }

          // table (gfm)
          if (token = _this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // lheading
          if (token = _this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // top-level paragraph
          // prevent paragraph consuming extensions by clipping 'src' to extension start
          cutSrc = src;
          if (_this.options.extensions && _this.options.extensions.startBlock) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (_this.state.top && (token = _this.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];
            if (lastParagraphClipped && lastToken.type === 'paragraph') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this.inlineQueue.pop();
              _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            return 0; // continue
          }

          // text
          if (token = _this.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this.inlineQueue.pop();
              _this.inlineQueue[_this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (_this.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret;
      while (src) {
        _ret = _loop();
        if (_ret === 0) continue;
        if (_ret === 1) break;
      }
      this.state.top = true;
      return tokens;
    }
  }, {
    key: "inline",
    value: function inline(src, tokens) {
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
    }

    /**
     * Lexing/Compiling
     */
  }, {
    key: "inlineTokens",
    value: function inlineTokens(src) {
      var _this2 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var token, lastToken, cutSrc;

      // String with links masked to avoid interference with em and strong
      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar;

      // Mask out reflinks
      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + (0, _helpers.repeatString)('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      // Mask out other blocks
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + (0, _helpers.repeatString)('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }

      // Mask out escaped em & strong delimiters
      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      }
      var _loop2 = function _loop2() {
          if (!keepPrevChar) {
            prevChar = '';
          }
          keepPrevChar = false;

          // owo
          if (token = _this2.tokenizer.owo(src)) {
            src = src.substring(token.raw.length);
            if (token.type) {
              tokens.push(token);
            }
            return 0; // continue
          }

          // extensions
          if (_this2.options.extensions && _this2.options.extensions.inline && _this2.options.extensions.inline.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this2
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }

          // escape
          if (token = _this2.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // tag
          if (token = _this2.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }

          // link
          if (token = _this2.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // reflink, nolink
          if (token = _this2.tokenizer.reflink(src, _this2.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }

          // em & strong
          if (token = _this2.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // code
          if (token = _this2.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // br
          if (token = _this2.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // del (gfm)
          if (token = _this2.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // autolink
          if (token = _this2.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // url (gfm)
          if (!_this2.state.inLink && (token = _this2.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }

          // text
          // prevent inlineText consuming extensions by clipping 'src' to extension start
          cutSrc = src;
          if (_this2.options.extensions && _this2.options.extensions.startInline) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this2.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (token = _this2.tokenizer.inlineText(cutSrc, smartypants)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== '_') {
              // Track prevChar before string of ____ started
              prevChar = token.raw.slice(-1);
            }
            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (_this2.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret2;
      while (src) {
        _ret2 = _loop2();
        if (_ret2 === 0) continue;
        if (_ret2 === 1) break;
      }
      return tokens;
    }
  }], [{
    key: "rules",
    get: function get() {
      return {
        block: _rules.block,
        inline: _rules.inline
      };
    }

    /**
     * Static Lex Method
     */
  }, {
    key: "lex",
    value: function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }

    /**
     * Static Lex Inline Method
     */
  }, {
    key: "lexInline",
    value: function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
  }]);
  return Lexer;
}();

/***/ }),

/***/ 3793:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M483.049 159.706c10.855-24.575 21.424-60.438 21.424-87.871 0-72.722-79.641-98.371-209.673-38.577-107.632-7.181-211.221 73.67-237.098 186.457 30.852-34.862 78.271-82.298 121.977-101.158C125.404 166.85 79.128 228.002 43.992 291.725 23.246 329.651 0 390.94 0 436.747c0 98.575 92.854 86.5 180.251 42.006 31.423 15.43 66.559 15.573 101.695 15.573 97.124 0 184.249-54.294 216.814-146.022H377.927c-52.509 88.593-196.819 52.996-196.819-47.436H509.9c6.407-43.581-1.655-95.715-26.851-141.162zM64.559 346.877c17.711 51.15 53.703 95.871 100.266 123.304-88.741 48.94-173.267 29.096-100.266-123.304zm115.977-108.873c2-55.151 50.276-94.871 103.98-94.871 53.418 0 101.981 39.72 103.981 94.871H180.536zm184.536-187.6c21.425-10.287 48.563-22.003 72.558-22.003 31.422 0 54.274 21.717 54.274 53.722 0 20.003-7.427 49.007-14.569 67.867-26.28-42.292-65.986-81.584-112.263-99.586z\"></path></svg>"

/***/ }),

/***/ 3852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var toPropertyKey = __webpack_require__(3987);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3982:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z\"></path></svg>"

/***/ }),

/***/ 3987:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _typeof = (__webpack_require__(9367)["default"]);
var toPrimitive = __webpack_require__(7278);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4001:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tokenizer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(9272));
var _defaults = __webpack_require__(4008);
var _helpers = __webpack_require__(9105);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function outputLink(cap, link, raw, lexer) {
  var href = link.href;
  var title = link.title ? (0, _helpers.escape)(link.title) : null;
  var text = cap[1].replace(/\\([\[\]])/g, '$1');
  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    var token = {
      type: 'link',
      raw: raw,
      href: href,
      title: title,
      text: text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  } else {
    return {
      type: 'image',
      raw: raw,
      href: href,
      title: title,
      text: (0, _helpers.escape)(text)
    };
  }
}
function indentCodeCompensation(raw, text) {
  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  var indentToCode = matchIndentToCode[1];
  return text.split('\n').map(function (node) {
    var matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    var _matchIndentInNode = (0, _slicedToArray2["default"])(matchIndentInNode, 1),
      indentInNode = _matchIndentInNode[0];
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join('\n');
}

/**
 * Tokenizer
 */
var Tokenizer = exports.Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(options) {
    (0, _classCallCheck2["default"])(this, Tokenizer);
    this.options = options || _defaults.defaults;
  }
  (0, _createClass2["default"])(Tokenizer, [{
    key: "space",
    value: function space(src) {
      var cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: 'space',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "code",
    value: function code(src) {
      var cap = this.rules.block.code.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? (0, _helpers.rtrim)(text, '\n') : text
        };
      }
    }
  }, {
    key: "fences",
    value: function fences(src) {
      var cap = this.rules.block.fences.exec(src);
      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    }
  }, {
    key: "heading",
    value: function heading(src) {
      var cap = this.rules.block.heading.exec(src);
      if (cap) {
        var text = cap[2].trim();

        // remove trailing #s
        if (/#$/.test(text)) {
          var trimmed = (0, _helpers.rtrim)(text, '#');
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }
        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "hr",
    value: function hr(src) {
      var cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "blockquote",
    value: function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: this.lexer.blockTokens(text, []),
          text: text
        };
      }
    }
  }, {
    key: "list",
    value: function list(src) {
      var cap = this.rules.block.list.exec(src);
      if (cap) {
        var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\".concat(bull.slice(-1)) : "\\".concat(bull);
        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        }

        // Get next list item
        var itemRegex = new RegExp("^( {0,3}".concat(bull, ")((?: [^\\n]*)?(?:\\n|$))"));

        // Check if current bullet point can start a new List Item
        while (src) {
          endEarly = false;
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            // End list if bullet was actually HR (possibly move into itemRegex?)
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          line = cap[2].split('\n', 1)[0];
          nextLine = src.split('\n', 1)[0];
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char
            indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            // Items begin with at most one blank line
            raw += nextLine + '\n';
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            var nextBulletRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:[*+-]|\\d{1,9}[.)])"));

            // Check if following lines should be included in List Item
            while (src) {
              rawLine = src.split('\n', 1)[0];
              line = rawLine;

              // Re-align to follow commonmark nesting rules
              if (this.options.pedantic) {
                line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
              }

              // End list item if found start of new bullet
              if (nextBulletRegex.test(line)) {
                break;
              }
              if (line.search(/[^ ]/) >= indent || !line.trim()) {
                // Dedent if possible
                itemContents += '\n' + line.slice(indent);
              } else if (!blankLine) {
                // Until blank line, item doesn't need indentation
                itemContents += '\n' + line;
              } else {
                // Otherwise, improper indentation ends this item
                break;
              }
              if (!blankLine && !line.trim()) {
                // Check if current line is blank
                blankLine = true;
              }
              raw += rawLine + '\n';
              src = src.substring(rawLine.length + 1);
            }
          }
          if (!list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }

          // Check for task list items
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }
          list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
        }

        // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        var l = list.items.length;

        // Item child tokens handled here at end because we needed to have the final item to trim it first
        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
          var spacers = list.items[i].tokens.filter(function (t) {
            return t.type === 'space';
          });
          var hasMultipleLineBreaks = spacers.every(function (t) {
            var chars = t.raw.split('');
            var lineBreaks = 0;
            var _iterator = _createForOfIteratorHelper(chars),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _char = _step.value;
                if (_char === '\n') {
                  lineBreaks += 1;
                }
                if (lineBreaks > 1) {
                  return true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return false;
          });
          if (!list.loose && spacers.length && hasMultipleLineBreaks) {
            // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
            list.loose = true;
            list.items[i].loose = true;
          }
        }
        return list;
      }
    }
  }, {
    key: "html",
    value: function html(src) {
      var cap = this.rules.block.html.exec(src);
      if (cap) {
        var token = {
          type: 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        };
        if (this.options.sanitize) {
          token.type = 'paragraph';
          token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : (0, _helpers.escape)(cap[0]);
          token.tokens = [];
          this.lexer.inline(token.text, token.tokens);
        }
        return token;
      }
    }
  }, {
    key: "def",
    value: function def(src) {
      var cap = this.rules.block.def.exec(src);
      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          type: 'def',
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    }
  }, {
    key: "table",
    value: function table(src) {
      var cap = this.rules.block.table.exec(src);
      if (cap) {
        var item = {
          type: 'table',
          header: (0, _helpers.splitCells)(cap[1]).map(function (c) {
            return {
              text: c
            };
          }),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
        };
        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i, j, k, row;
          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }
          l = item.rows.length;
          for (i = 0; i < l; i++) {
            item.rows[i] = (0, _helpers.splitCells)(item.rows[i], item.header.length).map(function (c) {
              return {
                text: c
              };
            });
          }

          // parse child tokens inside headers and cells

          // header child tokens
          l = item.header.length;
          for (j = 0; j < l; j++) {
            item.header[j].tokens = [];
            this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
          }

          // cell child tokens
          l = item.rows.length;
          for (j = 0; j < l; j++) {
            row = item.rows[j];
            for (k = 0; k < row.length; k++) {
              row[k].tokens = [];
              this.lexer.inlineTokens(row[k].text, row[k].tokens);
            }
          }
          return item;
        }
      }
    }
  }, {
    key: "lheading",
    value: function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);
      if (cap) {
        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "paragraph",
    value: function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        var token = {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "text",
    value: function text(src) {
      var cap = this.rules.block.text.exec(src);
      if (cap) {
        var token = {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "escape",
    value: function escape(src) {
      var cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: (0, _helpers.escape)(cap[1])
        };
      }
    }
  }, {
    key: "tag",
    value: function tag(src) {
      var cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : (0, _helpers.escape)(cap[0]) : cap[0]
        };
      }
    }
  }, {
    key: "link",
    value: function link(src) {
      var cap = this.rules.inline.link.exec(src);
      if (cap) {
        var trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          }

          // ending angle bracket cannot be escaped
          var rtrimSlash = (0, _helpers.rtrim)(trimmedUrl.slice(0, -1), '\\');
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = (0, _helpers.findClosingBracket)(cap[2], '()');
          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }
        var href = cap[2];
        var title = '';
        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0], this.lexer);
      }
    }
  }, {
    key: "reflink",
    value: function reflink(src, links) {
      var cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];
        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }
        return outputLink(cap, link, cap[0], this.lexer);
      }
    }
  }, {
    key: "emStrong",
    value: function emStrong(src, maskedSrc) {
      var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match) return;

      // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/)) return;
      var nextChar = match[1] || match[2] || '';
      if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
        var lLength = match[0].length - 1;
        var rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0;

        // Clip maskedSrc to same section of string as src (move to lexer?)
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__

          rLength = rDelim.length;
          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters

          // Remove extra characters. *a*** -> *a*
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

          // Create `em` if smallest delimiter has odd char count. *a***
          if (Math.min(lLength, rLength) % 2) {
            var _text = src.slice(1, lLength + match.index + rLength);
            return {
              type: 'em',
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: _text,
              tokens: this.lexer.inlineTokens(_text, [])
            };
          }

          // Create 'strong' if smallest delimiter has even char count. **a***
          var text = src.slice(2, lLength + match.index + rLength - 1);
          return {
            type: 'strong',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }
      }
    }
  }, {
    key: "codespan",
    value: function codespan(src) {
      var cap = this.rules.inline.code.exec(src);
      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = (0, _helpers.escape)(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    }
  }, {
    key: "br",
    value: function br(src) {
      var cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "del",
    value: function del(src) {
      var cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2], [])
        };
      }
    }
  }, {
    key: "owo",
    value: function owo(src) {
      var cap = this.rules.inline.owo.exec(src);
      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'owo',
            raw: cap[0],
            text: cap[1]
          };
        }
      }
    }
  }, {
    key: "autolink",
    value: function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        var text, href;
        if (cap[2] === '@') {
          text = (0, _helpers.escape)(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = (0, _helpers.escape)(cap[1]);
          href = text;
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "url",
    value: function url(src, mangle) {
      var cap;
      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;
        if (cap[2] === '@') {
          text = (0, _helpers.escape)(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = (0, _helpers.escape)(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "inlineText",
    value: function inlineText(src, smartypants) {
      var cap = this.rules.inline.text.exec(src);
      if (cap) {
        var text;
        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : (0, _helpers.escape)(cap[0]) : cap[0];
        } else {
          text = (0, _helpers.escape)(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }
        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    }
  }]);
  return Tokenizer;
}();

/***/ }),

/***/ 4008:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changeDefaults = changeDefaults;
exports.defaults = void 0;
exports.getDefaults = getDefaults;
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = exports.defaults = getDefaults();
function changeDefaults(newDefaults) {
  exports.defaults = defaults = newDefaults;
}

/***/ }),

/***/ 4064:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _blueimpMd = _interopRequireDefault(__webpack_require__(2889));
var _jsSha = __webpack_require__(823);
var _utils = __webpack_require__(8129);
var _userCircle = _interopRequireDefault(__webpack_require__(9587));
var _default = exports.A = {
  props: {
    config: Object,
    avatar: String,
    nick: String,
    mail: String,
    mailMd5: String,
    link: String
  },
  data: function data() {
    return {
      iconUser: _userCircle["default"]
    };
  },
  computed: {
    gravatarCdn: function gravatarCdn() {
      if (this.config && this.config.GRAVATAR_CDN) {
        return this.config.GRAVATAR_CDN;
      }
      return 'weavatar.com';
    },
    defaultGravatar: function defaultGravatar() {
      if (this.config && this.config.DEFAULT_GRAVATAR) {
        return this.config.DEFAULT_GRAVATAR;
      }
      return "initials&name=".concat(this.nick);
    },
    avatarInner: function avatarInner() {
      if (this.avatar) {
        return this.avatar;
      }
      if (this.mailMd5) {
        return "https://".concat(this.gravatarCdn, "/avatar/").concat(this.mailMd5, "?d=").concat(this.defaultGravatar);
      }
      if (this.mail && (0, _utils.isQQ)(this.mail)) {
        return (0, _utils.getQQAvatar)(this.mail);
      }
      if (this.mail) {
        var hashMethod = this.gravatarCdn === 'cravatar.cn' ? _blueimpMd["default"] : _jsSha.sha256;
        return "https://".concat(this.gravatarCdn, "/avatar/").concat(hashMethod((0, _utils.normalizeMail)(this.mail)), "?d=").concat(this.defaultGravatar);
      }
      return '';
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
      if (this.link) {
        window.open((0, _utils.convertLink)(this.link), '_blank').opener = null;
      }
    }
  }
};

/***/ }),

/***/ 4161:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _view = __webpack_require__(1085);
var PRISM_CDN = 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0';
var Prism;
var cssEl;
var renderCode = function renderCode(el, theme, plugins) {
  var prismCdn = _view.app && _view.app.$twikoo.prismCdn ? _view.app.$twikoo.prismCdn : PRISM_CDN;
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  if (!Prism) {
    Prism = __webpack_require__(1965);
    __webpack_require__(210);
    Prism.plugins.autoloader.languages_path = "".concat(prismCdn, "/components/");
    if (plugins) {
      __webpack_require__(8072);
      plugins.split(',').map(function (item) {
        return item.trim();
      }).forEach(function (p) {
        if (p === 'showLanguage') {
          __webpack_require__(4296);
        } else if (p === 'copyButton') {
          __webpack_require__(5472);
        }
      });
    }
  }
  loadCss(theme, prismCdn);
  Prism.highlightAllUnder(el);
};
var loadCss = function loadCss(theme, prismCdn) {
  var twikooEl = document.getElementById('twikoo');
  if (cssEl && twikooEl.contains(cssEl) || !theme || theme === 'none') return;
  cssEl = document.createElement('link');
  if (theme === 'default') {
    cssEl.href = "".concat(prismCdn, "/themes/prism.min.css");
  } else {
    cssEl.href = "".concat(prismCdn, "/themes/prism-").concat(theme, ".min.css");
  }
  cssEl.rel = 'stylesheet';
  cssEl.type = 'text/css';
  twikooEl.appendChild(cssEl);
};
var _default = exports["default"] = renderCode;

/***/ }),

/***/ 4216:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkAdminConfigvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAdminConfig; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminConfig.vue?vue&type=template&id=726c719a
var TkAdminConfigvue_type_template_id_726c719a = __webpack_require__(4926);
;// ./src/client/view/components/TkAdminConfig.vue?vue&type=template&id=726c719a

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminConfig.vue?vue&type=script&lang=js
var TkAdminConfigvue_type_script_lang_js = __webpack_require__(4868);
;// ./src/client/view/components/TkAdminConfig.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkAdminConfigvue_type_script_lang_js = (TkAdminConfigvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminConfig.vue?vue&type=style&index=0&id=726c719a&prod&lang=css
var TkAdminConfigvue_type_style_index_0_id_726c719a_prod_lang_css = __webpack_require__(9103);
;// ./src/client/view/components/TkAdminConfig.vue?vue&type=style&index=0&id=726c719a&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAdminConfig.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkAdminConfigvue_type_script_lang_js,
  TkAdminConfigvue_type_template_id_726c719a/* render */.XX,
  TkAdminConfigvue_type_template_id_726c719a/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAdminConfig = (component.exports);

/***/ }),

/***/ 4238:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _blueimpMd = _interopRequireDefault(__webpack_require__(2889));
var _TkAdminComment = _interopRequireDefault(__webpack_require__(7945));
var _TkAdminConfig = _interopRequireDefault(__webpack_require__(4216));
var _TkAdminImport = _interopRequireDefault(__webpack_require__(9985));
var _TkAdminExport = _interopRequireDefault(__webpack_require__(9097));
var _utils = __webpack_require__(8129);
var _times = _interopRequireDefault(__webpack_require__(9671));
var _default = exports.A = {
  components: {
    TkAdminComment: _TkAdminComment["default"],
    TkAdminConfig: _TkAdminConfig["default"],
    TkAdminImport: _TkAdminImport["default"],
    TkAdminExport: _TkAdminExport["default"]
  },
  props: {
    show: Boolean
  },
  data: function data() {
    return {
      iconClose: _times["default"],
      loading: true,
      version: '',
      needUpdate: false,
      isLogin: false,
      isSetPassword: true,
      isSetCredentials: false,
      credentials: '',
      password: '',
      passwordConfirm: '',
      loginErrorMessage: '',
      activeTabName: 'comment'
    };
  },
  computed: {
    canRegist: function canRegist() {
      return !this.isSetPassword && !!this.password && this.password === this.passwordConfirm && (this.isSetCredentials || this.credentials);
    }
  },
  methods: {
    t: _utils.t,
    onLogin: function onLogin() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var passwordMd5, res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.password) {
                _context.next = 3;
                break;
              }
              _this.loginErrorMessage = (0, _utils.t)('ADMIN_PASSWORD_REQUIRED');
              return _context.abrupt("return");
            case 3:
              _this.loading = true;
              _this.loginErrorMessage = '';
              passwordMd5 = (0, _blueimpMd["default"])(_this.password);
              _context.next = 8;
              return (0, _utils.call)(_this.$tcb, 'LOGIN', {
                password: passwordMd5
              });
            case 8:
              res = _context.sent;
              if (!res.result.message) {
                _context.next = 13;
                break;
              }
              _this.loginErrorMessage = res.result.message;
              _context.next = 28;
              break;
            case 13:
              if (!res.result.ticket) {
                _context.next = 27;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return _this.$tcb.auth.customAuthProvider().signIn(res.result.ticket);
            case 17:
              _utils.logger.log('登录成功');
              _this.password = '';
              _this.checkAuth();
              _context.next = 25;
              break;
            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](14);
              _utils.logger.error('登录失败', _context.t0);
            case 25:
              _context.next = 28;
              break;
            case 27:
              if (res.result.code === 0) {
                _utils.logger.log('登录成功');
                localStorage.setItem('twikoo-access-token', passwordMd5);
                _this.password = '';
                _this.checkAuth();
              }
            case 28:
              _this.loading = false;
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[14, 22]]);
      }))();
    },
    onLogout: function onLogout($event) {
      var _this2 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              $event.preventDefault();
              _this2.loading = true;
              if (!_this2.$tcb) {
                _context2.next = 9;
                break;
              }
              _context2.next = 5;
              return _this2.$tcb.auth.signOut();
            case 5:
              _context2.next = 7;
              return _this2.$tcb.auth.anonymousAuthProvider().signIn();
            case 7:
              _context2.next = 10;
              break;
            case 9:
              localStorage.removeItem('twikoo-access-token');
            case 10:
              _this2.isLogin = false;
              _this2.loading = false;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onRegist: function onRegist() {
      var _this3 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var passwordMd5, res;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.loading = true;
              passwordMd5 = (0, _blueimpMd["default"])(_this3.password);
              _context3.next = 4;
              return (0, _utils.call)(_this3.$tcb, 'SET_PASSWORD', {
                password: passwordMd5,
                credentials: _this3.credentials
              });
            case 4:
              res = _context3.sent;
              if (!res.result.code) {
                _this3.passwordMd5 = '';
                _this3.isSetPassword = true;
                _this3.onLogin();
              } else {
                _this3.loginErrorMessage = (0, _utils.t)('ADMIN_REGIST_FAILED');
                if (res.result.message) {
                  _this3.loginErrorMessage += '，' + res.result.message;
                }
                _utils.logger.warn('Twikoo 注册失败', res);
              }
              _this3.loading = false;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onShow: function onShow() {
      var _this4 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.loading = true;
              _context4.next = 3;
              return _this4.checkAuth();
            case 3:
              if (_this4.isLogin) {
                _context4.next = 7;
                break;
              }
              _context4.next = 6;
              return _this4.checkIfPasswordSet();
            case 6:
              _this4.focusPassword();
            case 7:
              _this4.loading = false;
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    focusPassword: function focusPassword() {
      var _this5 = this;
      // 聚焦密码输入框
      setTimeout(function () {
        _this5.$refs.focusme && _this5.$refs.focusme.focus();
      }, 500);
    },
    checkAuth: function checkAuth() {
      var _this6 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var currentUser, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this6.$tcb) {
                _context5.next = 7;
                break;
              }
              _context5.next = 3;
              return _this6.$tcb.auth.getCurrenUser();
            case 3:
              currentUser = _context5.sent;
              _this6.isLogin = currentUser.loginType === 'CUSTOM';
              _context5.next = 11;
              break;
            case 7:
              _context5.next = 9;
              return (0, _utils.call)(_this6.$tcb, 'GET_CONFIG');
            case 9:
              result = _context5.sent;
              if (result && result.result && result.result.config) {
                _this6.isLogin = result.result.config.IS_ADMIN;
              }
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    checkIfPasswordSet: function checkIfPasswordSet() {
      var _this7 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var res;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return (0, _utils.call)(_this7.$tcb, 'GET_PASSWORD_STATUS');
            case 3:
              res = _context6.sent;
              _this7.version = res.result.version;
              _this7.isSetPassword = res.result.status;
              _this7.isSetCredentials = !_this7.$tcb;
              _context6.next = 14;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              _this7.needUpdate = true;
              _this7.loading = false;
              throw _context6.t0;
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    },
    onClose: function onClose($event) {
      $event.preventDefault();
      this.$emit('close');
    }
  },
  watch: {
    show: function show(val) {
      // 弹出管理面板
      if (val) this.onShow();
    }
  }
};

/***/ }),

/***/ 4296:
/***/ (function() {

"use strict";


(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }
  if (!Prism.plugins.toolbar) {
    console.warn('Show Languages plugin loaded before Toolbar plugin.');
    return;
  }

  /* eslint-disable */

  // The languages map is built automatically with gulp
  var Languages = /*languages_placeholder[*/{
    "none": "Plain text",
    "plain": "Plain text",
    "plaintext": "Plain text",
    "text": "Plain text",
    "txt": "Plain text",
    "html": "HTML",
    "xml": "XML",
    "svg": "SVG",
    "mathml": "MathML",
    "ssml": "SSML",
    "rss": "RSS",
    "css": "CSS",
    "clike": "C-like",
    "js": "JavaScript",
    "abap": "ABAP",
    "abnf": "ABNF",
    "al": "AL",
    "antlr4": "ANTLR4",
    "g4": "ANTLR4",
    "apacheconf": "Apache Configuration",
    "apl": "APL",
    "aql": "AQL",
    "ino": "Arduino",
    "arff": "ARFF",
    "armasm": "ARM Assembly",
    "arm-asm": "ARM Assembly",
    "art": "Arturo",
    "asciidoc": "AsciiDoc",
    "adoc": "AsciiDoc",
    "aspnet": "ASP.NET (C#)",
    "asm6502": "6502 Assembly",
    "asmatmel": "Atmel AVR Assembly",
    "autohotkey": "AutoHotkey",
    "autoit": "AutoIt",
    "avisynth": "AviSynth",
    "avs": "AviSynth",
    "avro-idl": "Avro IDL",
    "avdl": "Avro IDL",
    "awk": "AWK",
    "gawk": "GAWK",
    "sh": "Shell",
    "basic": "BASIC",
    "bbcode": "BBcode",
    "bbj": "BBj",
    "bnf": "BNF",
    "rbnf": "RBNF",
    "bqn": "BQN",
    "bsl": "BSL (1C:Enterprise)",
    "oscript": "OneScript",
    "csharp": "C#",
    "cs": "C#",
    "dotnet": "C#",
    "cpp": "C++",
    "cfscript": "CFScript",
    "cfc": "CFScript",
    "cil": "CIL",
    "cilkc": "Cilk/C",
    "cilk-c": "Cilk/C",
    "cilkcpp": "Cilk/C++",
    "cilk-cpp": "Cilk/C++",
    "cilk": "Cilk/C++",
    "cmake": "CMake",
    "cobol": "COBOL",
    "coffee": "CoffeeScript",
    "conc": "Concurnas",
    "csp": "Content-Security-Policy",
    "css-extras": "CSS Extras",
    "csv": "CSV",
    "cue": "CUE",
    "dataweave": "DataWeave",
    "dax": "DAX",
    "django": "Django/Jinja2",
    "jinja2": "Django/Jinja2",
    "dns-zone-file": "DNS zone file",
    "dns-zone": "DNS zone file",
    "dockerfile": "Docker",
    "dot": "DOT (Graphviz)",
    "gv": "DOT (Graphviz)",
    "ebnf": "EBNF",
    "editorconfig": "EditorConfig",
    "ejs": "EJS",
    "etlua": "Embedded Lua templating",
    "erb": "ERB",
    "excel-formula": "Excel Formula",
    "xlsx": "Excel Formula",
    "xls": "Excel Formula",
    "fsharp": "F#",
    "firestore-security-rules": "Firestore security rules",
    "ftl": "FreeMarker Template Language",
    "gml": "GameMaker Language",
    "gamemakerlanguage": "GameMaker Language",
    "gap": "GAP (CAS)",
    "gcode": "G-code",
    "gdscript": "GDScript",
    "gedcom": "GEDCOM",
    "gettext": "gettext",
    "po": "gettext",
    "glsl": "GLSL",
    "gn": "GN",
    "gni": "GN",
    "linker-script": "GNU Linker Script",
    "ld": "GNU Linker Script",
    "go-module": "Go module",
    "go-mod": "Go module",
    "graphql": "GraphQL",
    "hbs": "Handlebars",
    "hs": "Haskell",
    "hcl": "HCL",
    "hlsl": "HLSL",
    "http": "HTTP",
    "hpkp": "HTTP Public-Key-Pins",
    "hsts": "HTTP Strict-Transport-Security",
    "ichigojam": "IchigoJam",
    "icu-message-format": "ICU Message Format",
    "idr": "Idris",
    "ignore": ".ignore",
    "gitignore": ".gitignore",
    "hgignore": ".hgignore",
    "npmignore": ".npmignore",
    "inform7": "Inform 7",
    "javadoc": "JavaDoc",
    "javadoclike": "JavaDoc-like",
    "javastacktrace": "Java stack trace",
    "jq": "JQ",
    "jsdoc": "JSDoc",
    "js-extras": "JS Extras",
    "json": "JSON",
    "webmanifest": "Web App Manifest",
    "json5": "JSON5",
    "jsonp": "JSONP",
    "jsstacktrace": "JS stack trace",
    "js-templates": "JS Templates",
    "keepalived": "Keepalived Configure",
    "kts": "Kotlin Script",
    "kt": "Kotlin",
    "kumir": "KuMir (КуМир)",
    "kum": "KuMir (КуМир)",
    "latex": "LaTeX",
    "tex": "TeX",
    "context": "ConTeXt",
    "lilypond": "LilyPond",
    "ly": "LilyPond",
    "emacs": "Lisp",
    "elisp": "Lisp",
    "emacs-lisp": "Lisp",
    "llvm": "LLVM IR",
    "log": "Log file",
    "lolcode": "LOLCODE",
    "magma": "Magma (CAS)",
    "md": "Markdown",
    "markup-templating": "Markup templating",
    "matlab": "MATLAB",
    "maxscript": "MAXScript",
    "mel": "MEL",
    "metafont": "METAFONT",
    "mongodb": "MongoDB",
    "moon": "MoonScript",
    "n1ql": "N1QL",
    "n4js": "N4JS",
    "n4jsd": "N4JS",
    "nand2tetris-hdl": "Nand To Tetris HDL",
    "naniscript": "Naninovel Script",
    "nani": "Naninovel Script",
    "nasm": "NASM",
    "neon": "NEON",
    "nginx": "nginx",
    "nsis": "NSIS",
    "objectivec": "Objective-C",
    "objc": "Objective-C",
    "ocaml": "OCaml",
    "opencl": "OpenCL",
    "openqasm": "OpenQasm",
    "qasm": "OpenQasm",
    "parigp": "PARI/GP",
    "objectpascal": "Object Pascal",
    "psl": "PATROL Scripting Language",
    "pcaxis": "PC-Axis",
    "px": "PC-Axis",
    "peoplecode": "PeopleCode",
    "pcode": "PeopleCode",
    "php": "PHP",
    "phpdoc": "PHPDoc",
    "php-extras": "PHP Extras",
    "plant-uml": "PlantUML",
    "plantuml": "PlantUML",
    "plsql": "PL/SQL",
    "powerquery": "PowerQuery",
    "pq": "PowerQuery",
    "mscript": "PowerQuery",
    "powershell": "PowerShell",
    "promql": "PromQL",
    "properties": ".properties",
    "protobuf": "Protocol Buffers",
    "purebasic": "PureBasic",
    "pbfasm": "PureBasic",
    "purs": "PureScript",
    "py": "Python",
    "qsharp": "Q#",
    "qs": "Q#",
    "q": "Q (kdb+ database)",
    "qml": "QML",
    "rkt": "Racket",
    "cshtml": "Razor C#",
    "razor": "Razor C#",
    "jsx": "React JSX",
    "tsx": "React TSX",
    "renpy": "Ren'py",
    "rpy": "Ren'py",
    "res": "ReScript",
    "rest": "reST (reStructuredText)",
    "robotframework": "Robot Framework",
    "robot": "Robot Framework",
    "rb": "Ruby",
    "sas": "SAS",
    "sass": "Sass (Sass)",
    "scss": "Sass (SCSS)",
    "shell-session": "Shell session",
    "sh-session": "Shell session",
    "shellsession": "Shell session",
    "sml": "SML",
    "smlnj": "SML/NJ",
    "solidity": "Solidity (Ethereum)",
    "sol": "Solidity (Ethereum)",
    "solution-file": "Solution file",
    "sln": "Solution file",
    "soy": "Soy (Closure Template)",
    "sparql": "SPARQL",
    "rq": "SPARQL",
    "splunk-spl": "Splunk SPL",
    "sqf": "SQF: Status Quo Function (Arma 3)",
    "sql": "SQL",
    "stata": "Stata Ado",
    "iecst": "Structured Text (IEC 61131-3)",
    "supercollider": "SuperCollider",
    "sclang": "SuperCollider",
    "systemd": "Systemd configuration file",
    "t4-templating": "T4 templating",
    "t4-cs": "T4 Text Templates (C#)",
    "t4": "T4 Text Templates (C#)",
    "t4-vb": "T4 Text Templates (VB)",
    "tap": "TAP",
    "tt2": "Template Toolkit 2",
    "toml": "TOML",
    "trickle": "trickle",
    "troy": "troy",
    "trig": "TriG",
    "ts": "TypeScript",
    "tsconfig": "TSConfig",
    "uscript": "UnrealScript",
    "uc": "UnrealScript",
    "uorazor": "UO Razor Script",
    "uri": "URI",
    "url": "URL",
    "vbnet": "VB.Net",
    "vhdl": "VHDL",
    "vim": "vim",
    "visual-basic": "Visual Basic",
    "vba": "VBA",
    "vb": "Visual Basic",
    "wasm": "WebAssembly",
    "web-idl": "Web IDL",
    "webidl": "Web IDL",
    "wgsl": "WGSL",
    "wiki": "Wiki markup",
    "wolfram": "Wolfram language",
    "nb": "Mathematica Notebook",
    "wl": "Wolfram language",
    "xeoracube": "XeoraCube",
    "xml-doc": "XML doc (.net)",
    "xojo": "Xojo (REALbasic)",
    "xquery": "XQuery",
    "yaml": "YAML",
    "yml": "YAML",
    "yang": "YANG"
  } /*]*/;

  /* eslint-enable */

  Prism.plugins.toolbar.registerButton('show-language', function (env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    /**
     * Tries to guess the name of a language given its id.
     *
     * @param {string} id The language id.
     * @returns {string}
     */
    function guessTitle(id) {
      if (!id) {
        return id;
      }
      return (id.substring(0, 1).toUpperCase() + id.substring(1)).replace(/s(?=cript)/, 'S');
    }
    var language = pre.getAttribute('data-language') || Languages[env.language] || guessTitle(env.language);
    if (!language) {
      return;
    }
    var element = document.createElement('span');
    element.textContent = language;
    return element;
  });
})();

/***/ }),

/***/ 4333:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _cog = _interopRequireDefault(__webpack_require__(504));
var _sync = _interopRequireDefault(__webpack_require__(9966));
var _vue = _interopRequireDefault(__webpack_require__(4478));
var _utils = __webpack_require__(8129);
var _index = __webpack_require__(1085);
var _TkComment = _interopRequireDefault(__webpack_require__(5519));
var _TkSubmit = _interopRequireDefault(__webpack_require__(5567));
var _default = exports.A = {
  components: {
    TkSubmit: _TkSubmit["default"],
    TkComment: _TkComment["default"]
  },
  props: {
    showAdminEntry: Boolean
  },
  data: function data() {
    return {
      loading: true,
      loadingMore: false,
      errorMessage: '',
      config: {},
      comments: [],
      showExpand: true,
      count: 0,
      replyId: '',
      currentSort: 'newest',
      iconSetting: _cog["default"],
      iconRefresh: _sync["default"]
    };
  },
  methods: {
    t: _utils.t,
    initConfig: function initConfig() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.call)(_this.$tcb, 'GET_CONFIG');
            case 2:
              result = _context.sent;
              if (result && result.result && result.result.config) {
                _this.config = result.result.config;
                _vue["default"].prototype.$twikoo.serverConfig = result.result.config;
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    initComments: function initComments() {
      var _this2 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var url;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              url = (0, _utils.getUrl)(_this2.$twikoo.path);
              _context2.next = 4;
              return _this2.getComments({
                url: url,
                sort: _this2.currentSort
              });
            case 4:
              _this2.loading = false;
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    refresh: function refresh() {
      this.comments = [];
      this.initComments();
    },
    setSort: function setSort(sort) {
      if (this.currentSort === sort) return;
      this.currentSort = sort;
      this.comments = [];
      this.initComments();
    },
    onExpand: function onExpand() {
      var _this3 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var url, before;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!_this3.loadingMore) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _this3.loadingMore = true;
              url = (0, _utils.getUrl)(_this3.$twikoo.path);
              before = _this3.comments.filter(function (item) {
                return !item.top;
              }).map(function (item) {
                return item.created;
              }).sort(function (a, b) {
                return a - b;
              })[0];
              _context3.next = 7;
              return _this3.getComments({
                url: url,
                before: before,
                sort: _this3.currentSort
              });
            case 7:
              _this3.loadingMore = false;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    onCommentLoaded: function onCommentLoaded() {
      typeof this.$twikoo.onCommentLoaded === 'function' && this.$twikoo.onCommentLoaded();
    },
    getComments: function getComments(event) {
      var _this4 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var comments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, _utils.call)(_this4.$tcb, 'COMMENT_GET', event);
            case 3:
              comments = _context4.sent;
              if (comments && comments.result && comments.result.data) {
                _this4.comments = event.before ? _this4.comments.concat(comments.result.data) : comments.result.data;
                _this4.showExpand = comments.result.more;
                _this4.count = comments.result.count || _this4.comments.length || 0;
                _this4.$nextTick(_this4.onCommentLoaded);
              }
              _context4.next = 10;
              break;
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              _this4.errorMessage = _context4.t0.message;
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    onReply: function onReply(id) {
      this.replyId = id;
    },
    openAdmin: function openAdmin() {
      this.$emit('admin');
    }
  },
  mounted: function mounted() {
    this.initConfig();
    this.initComments();
    // Re-fetch config when admin saves settings (e.g. captcha provider change)
    _index.app.$on('configUpdated', this.initConfig);
  }
};

/***/ }),

/***/ 4394:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 4478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(6615);
} else // removed by dead control flow
{}

/***/ }),

/***/ 4486:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 4511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
module.exports = /******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_380__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_380__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_380__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __nested_webpack_require_380__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __nested_webpack_require_380__.d = function (exports, name, getter) {
    /******/if (!__nested_webpack_require_380__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __nested_webpack_require_380__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __nested_webpack_require_380__.t = function (value, mode) {
    /******/if (mode & 1) value = __nested_webpack_require_380__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && (0, _typeof2["default"])(value) === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __nested_webpack_require_380__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_380__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __nested_webpack_require_380__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __nested_webpack_require_380__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __nested_webpack_require_380__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __nested_webpack_require_380__.p = "/dist/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __nested_webpack_require_380__(__nested_webpack_require_380__.s = 73);
  /******/
}
/************************************************************************/
/******/({
  /***/0: ( /***/function _(module, __nested_webpack_exports__, __nested_webpack_require_4234__) {
    "use strict";

    /* harmony export (binding) */
    __nested_webpack_require_4234__.d(__nested_webpack_exports__, "a", function () {
      return normalizeComponent;
    });
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }
      var hook;
      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context ||
          // cached call
          this.$vnode && this.$vnode.ssrContext ||
          // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles;
      }
      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
      return {
        exports: scriptExports,
        options: options
      };
    }

    /***/
  }),
  /***/13: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(9668);

    /***/
  }),
  /***/2: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(2865);

    /***/
  }),
  /***/42: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(3725);

    /***/
  }),
  /***/7: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(4478);

    /***/
  }),
  /***/73: ( /***/function _(module, __nested_webpack_exports__, __nested_webpack_require_7924__) {
    "use strict";

    __nested_webpack_require_7924__.r(__nested_webpack_exports__);

    // EXTERNAL MODULE: external "vue"
    var external_vue_ = __nested_webpack_require_7924__(7);
    var external_vue_default = /*#__PURE__*/__nested_webpack_require_7924__.n(external_vue_);

    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("transition", {
        attrs: {
          name: "el-loading-fade"
        },
        on: {
          "after-leave": _vm.handleAfterLeave
        }
      }, [_c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }],
        staticClass: "el-loading-mask",
        "class": [_vm.customClass, {
          "is-fullscreen": _vm.fullscreen
        }],
        style: {
          backgroundColor: _vm.background || ""
        }
      }, [_c("div", {
        staticClass: "el-loading-spinner"
      }, [!_vm.spinner ? _c("svg", {
        staticClass: "circular",
        attrs: {
          viewBox: "25 25 50 50"
        }
      }, [_c("circle", {
        staticClass: "path",
        attrs: {
          cx: "50",
          cy: "50",
          r: "20",
          fill: "none"
        }
      })]) : _c("i", {
        "class": _vm.spinner
      }), _vm.text ? _c("p", {
        staticClass: "el-loading-text"
      }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])])]);
    };
    var staticRenderFns = [];
    render._withStripped = true;

    // CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

    // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */
    var loadingvue_type_script_lang_js_ = {
      data: function data() {
        return {
          text: null,
          spinner: null,
          background: null,
          fullscreen: true,
          visible: false,
          customClass: ''
        };
      },
      methods: {
        handleAfterLeave: function handleAfterLeave() {
          this.$emit('after-leave');
        },
        setText: function setText(text) {
          this.text = text;
        }
      }
    };
    // CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
    /* harmony default export */
    var src_loadingvue_type_script_lang_js_ = loadingvue_type_script_lang_js_;
    // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    var componentNormalizer = __nested_webpack_require_7924__(0);

    // CONCATENATED MODULE: ./packages/loading/src/loading.vue

    /* normalize component */

    var component = Object(componentNormalizer["a" /* default */])(src_loadingvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

    /* hot reload */
    if (false) // removed by dead control flow
{ var api; }
    component.options.__file = "packages/loading/src/loading.vue";
    /* harmony default export */
    var loading = component.exports;
    // EXTERNAL MODULE: external "element-ui/lib/utils/dom"
    var dom_ = __nested_webpack_require_7924__(2);

    // EXTERNAL MODULE: external "element-ui/lib/utils/popup"
    var popup_ = __nested_webpack_require_7924__(13);

    // EXTERNAL MODULE: external "element-ui/lib/utils/after-leave"
    var after_leave_ = __nested_webpack_require_7924__(42);
    var after_leave_default = /*#__PURE__*/__nested_webpack_require_7924__.n(after_leave_);

    // CONCATENATED MODULE: ./packages/loading/src/directive.js

    var Mask = external_vue_default.a.extend(loading);
    var loadingDirective = {};
    loadingDirective.install = function (Vue) {
      if (Vue.prototype.$isServer) return;
      var toggleLoading = function toggleLoading(el, binding) {
        if (binding.value) {
          Vue.nextTick(function () {
            if (binding.modifiers.fullscreen) {
              el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
              el.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
              el.maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
              Object(dom_["addClass"])(el.mask, 'is-fullscreen');
              insertDom(document.body, el, binding);
            } else {
              Object(dom_["removeClass"])(el.mask, 'is-fullscreen');
              if (binding.modifiers.body) {
                el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
                ['top', 'left'].forEach(function (property) {
                  var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                  el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(Object(dom_["getStyle"])(document.body, 'margin-' + property), 10) + 'px';
                });
                ['height', 'width'].forEach(function (property) {
                  el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                });
                insertDom(document.body, el, binding);
              } else {
                el.originalPosition = Object(dom_["getStyle"])(el, 'position');
                insertDom(el, el, binding);
              }
            }
          });
        } else {
          after_leave_default()(el.instance, function (_) {
            if (!el.instance.hiding) return;
            el.domVisible = false;
            var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
            Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
            Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
            el.instance.hiding = false;
          }, 300, true);
          el.instance.visible = false;
          el.instance.hiding = true;
        }
      };
      var insertDom = function insertDom(parent, el, binding) {
        if (!el.domVisible && Object(dom_["getStyle"])(el, 'display') !== 'none' && Object(dom_["getStyle"])(el, 'visibility') !== 'hidden') {
          Object.keys(el.maskStyle).forEach(function (property) {
            el.mask.style[property] = el.maskStyle[property];
          });
          if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed' && el.originalPosition !== 'sticky') {
            Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
          }
          if (binding.modifiers.fullscreen && binding.modifiers.lock) {
            Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
          }
          el.domVisible = true;
          parent.appendChild(el.mask);
          Vue.nextTick(function () {
            if (el.instance.hiding) {
              el.instance.$emit('after-leave');
            } else {
              el.instance.visible = true;
            }
          });
          el.domInserted = true;
        } else if (el.domVisible && el.instance.hiding === true) {
          el.instance.visible = true;
          el.instance.hiding = false;
        }
      };
      Vue.directive('loading', {
        bind: function bind(el, binding, vnode) {
          var textExr = el.getAttribute('element-loading-text');
          var spinnerExr = el.getAttribute('element-loading-spinner');
          var backgroundExr = el.getAttribute('element-loading-background');
          var customClassExr = el.getAttribute('element-loading-custom-class');
          var vm = vnode.context;
          var mask = new Mask({
            el: document.createElement('div'),
            data: {
              text: vm && vm[textExr] || textExr,
              spinner: vm && vm[spinnerExr] || spinnerExr,
              background: vm && vm[backgroundExr] || backgroundExr,
              customClass: vm && vm[customClassExr] || customClassExr,
              fullscreen: !!binding.modifiers.fullscreen
            }
          });
          el.instance = mask;
          el.mask = mask.$el;
          el.maskStyle = {};
          binding.value && toggleLoading(el, binding);
        },
        update: function update(el, binding) {
          el.instance.setText(el.getAttribute('element-loading-text'));
          if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding);
          }
        },
        unbind: function unbind(el, binding) {
          if (el.domInserted) {
            el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
            toggleLoading(el, {
              value: false,
              modifiers: binding.modifiers
            });
          }
          el.instance && el.instance.$destroy();
        }
      });
    };

    /* harmony default export */
    var directive = loadingDirective;
    // EXTERNAL MODULE: external "element-ui/lib/utils/merge"
    var merge_ = __nested_webpack_require_7924__(9);
    var merge_default = /*#__PURE__*/__nested_webpack_require_7924__.n(merge_);

    // CONCATENATED MODULE: ./packages/loading/src/index.js

    var LoadingConstructor = external_vue_default.a.extend(loading);
    var defaults = {
      text: null,
      fullscreen: true,
      body: false,
      lock: false,
      customClass: ''
    };
    var fullscreenLoading = void 0;
    LoadingConstructor.prototype.originalPosition = '';
    LoadingConstructor.prototype.originalOverflow = '';
    LoadingConstructor.prototype.close = function () {
      var _this = this;
      if (this.fullscreen) {
        fullscreenLoading = undefined;
      }
      after_leave_default()(this, function (_) {
        var target = _this.fullscreen || _this.body ? document.body : _this.target;
        Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
        Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
        if (_this.$el && _this.$el.parentNode) {
          _this.$el.parentNode.removeChild(_this.$el);
        }
        _this.$destroy();
      }, 300);
      this.visible = false;
    };
    var src_addStyle = function addStyle(options, parent, instance) {
      var maskStyle = {};
      if (options.fullscreen) {
        instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
        instance.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
        maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
      } else if (options.body) {
        instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
        ['top', 'left'].forEach(function (property) {
          var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
          maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
        });
        ['height', 'width'].forEach(function (property) {
          maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
        });
      } else {
        instance.originalPosition = Object(dom_["getStyle"])(parent, 'position');
      }
      Object.keys(maskStyle).forEach(function (property) {
        instance.$el.style[property] = maskStyle[property];
      });
    };
    var src_Loading = function Loading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (external_vue_default.a.prototype.$isServer) return;
      options = merge_default()({}, defaults, options);
      if (typeof options.target === 'string') {
        options.target = document.querySelector(options.target);
      }
      options.target = options.target || document.body;
      if (options.target !== document.body) {
        options.fullscreen = false;
      } else {
        options.body = true;
      }
      if (options.fullscreen && fullscreenLoading) {
        return fullscreenLoading;
      }
      var parent = options.body ? document.body : options.target;
      var instance = new LoadingConstructor({
        el: document.createElement('div'),
        data: options
      });
      src_addStyle(options, parent, instance);
      if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed' && instance.originalPosition !== 'sticky') {
        Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
      }
      if (options.fullscreen && options.lock) {
        Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
      }
      parent.appendChild(instance.$el);
      external_vue_default.a.nextTick(function () {
        instance.visible = true;
      });
      if (options.fullscreen) {
        fullscreenLoading = instance;
      }
      return instance;
    };

    /* harmony default export */
    var src = src_Loading;
    // CONCATENATED MODULE: ./packages/loading/index.js

    /* harmony default export */
    var packages_loading = __nested_webpack_exports__["default"] = {
      install: function install(Vue) {
        Vue.use(directive);
        Vue.prototype.$loading = src;
      },
      directive: directive,
      service: src
    };

    /***/
  }),
  /***/9: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(8589);

    /***/
  })

  /******/
});

/***/ }),

/***/ 4524:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDef = isDef;
exports.isKorean = isKorean;
function isDef(val) {
  return val !== undefined && val !== null;
}
function isKorean(text) {
  var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}

/***/ }),

/***/ 4555:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _index = __webpack_require__(1085);
var _utils = __webpack_require__(8129);
var _version = __webpack_require__(2199);
var _TkAvatar = _interopRequireDefault(__webpack_require__(4785));
var _TkPagination = _interopRequireDefault(__webpack_require__(6431));
var _times = _interopRequireDefault(__webpack_require__(9671));
var defaultPageSize = 5;
var _default = exports.A = {
  components: {
    TkAvatar: _TkAvatar["default"],
    TkPagination: _TkPagination["default"]
  },
  data: function data() {
    return {
      loading: true,
      comments: [],
      serverConfig: {},
      serverVersion: this.$twikoo.serverConfig.VERSION,
      clientVersion: _version.version,
      count: 0,
      pageSize: defaultPageSize,
      currentPage: 1,
      filter: {
        keyword: '',
        type: ''
      },
      securityAlert: null,
      iconClose: _times["default"]
    };
  },
  methods: {
    t: _utils.t,
    displayCreated: function displayCreated(comment) {
      return (0, _utils.timeago)(comment.created);
    },
    convertLink: function convertLink(link) {
      return (0, _utils.convertLink)(link);
    },
    getComments: function getComments() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return (0, _utils.call)(_this.$tcb, 'COMMENT_GET_FOR_ADMIN', {
                per: _this.pageSize,
                page: _this.currentPage,
                keyword: _this.filter.keyword,
                type: _this.filter.type
              });
            case 3:
              res = _context.sent;
              if (res.result && !res.result.code) {
                _this.count = res.result.count;
                _this.comments = res.result.data;
              }
              _this.$nextTick(function () {
                (0, _utils.renderLinks)(_this.$refs.comments);
                (0, _utils.renderMath)(_this.$refs['comment-list'], _this.$twikoo.katex);
                _this.highlightCode();
              });
              _this.loading = false;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getConfig: function getConfig() {
      var _this2 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _utils.call)(_this2.$tcb, 'GET_CONFIG_FOR_ADMIN');
            case 2:
              res = _context2.sent;
              if (res.result && !res.result.code) {
                _this2.serverConfig = res.result.config;
                _this2.checkConfig();
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    checkConfig: function checkConfig() {
      var _this3 = this;
      if (!this.serverConfig.HIGHLIGHT) this.serverConfig.HIGHLIGHT = 'true';
      // 在已登錄的情況下，不用再輸入昵稱和郵箱等信息
      var metaData = {};
      var mStr = localStorage.getItem('twikoo');
      if (mStr) {
        metaData = JSON.parse(mStr);
      }
      ['nick', 'mail', 'avatar'].forEach(function (key) {
        if (!metaData[key]) {
          _this3.serverConfig[key] = '';
        } else {
          _this3.serverConfig[key] = metaData[key];
        }
      });
      if (!metaData.nick && this.serverConfig.BLOGGER_NICK) {
        metaData.nick = this.serverConfig.BLOGGER_NICK;
      }
      if (!metaData.mail && this.serverConfig.BLOGGER_EMAIL) {
        metaData.mail = this.serverConfig.BLOGGER_EMAIL;
      }
      if (!metaData.link && this.serverConfig.SITE_URL) {
        metaData.link = this.serverConfig.SITE_URL;
      }
      localStorage.setItem('twikoo', JSON.stringify(metaData));
      _index.app.$emit('initMeta');
    },
    onPageSizeChange: function onPageSizeChange(newPageSize) {
      this.pageSize = newPageSize;
      this.getComments();
    },
    switchPage: function switchPage(e) {
      this.currentPage = e;
      this.getComments();
    },
    handleView: function handleView(comment) {
      var targetUrl = "".concat(comment.url, "#").concat(comment._id);
      try {
        var url = new URL(targetUrl);
        if (url.hostname !== window.location.hostname) {
          // 域名不同，显示提示，要求用户手动复制访问
          this.securityAlert = {
            commentId: comment._id,
            message: (0, _utils.t)('ADMIN_COMMENT_SECURITY_ALERT'),
            url: targetUrl
          };
          return;
        }
        // 域名相同，允许打开
        window.open(targetUrl);
      } catch (e) {
        try {
          // 尝试将其作为相对路径解析，如果成功说明是有效的相对路径
          // eslint-disable-next-line no-new
          new URL(targetUrl, window.location.origin);
          // 允许打开
          window.open(targetUrl);
        } catch (e2) {
          // 作为相对路径也无法解析，说明 URL 格式错误
          this.securityAlert = {
            commentId: comment._id,
            message: (0, _utils.t)('ADMIN_COMMENT_PARSE_ERROR'),
            url: comment.url
          };
        }
      }
    },
    handleDelete: function handleDelete(comment) {
      var _this4 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (confirm((0, _utils.t)('ADMIN_COMMENT_DELETE_CONFIRM'))) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _this4.loading = true;
              _context3.next = 5;
              return (0, _utils.call)(_this4.$tcb, 'COMMENT_DELETE_FOR_ADMIN', {
                id: comment._id
              });
            case 5:
              _context3.next = 7;
              return _this4.getComments();
            case 7:
              _this4.loading = false;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    handleSpam: function handleSpam(comment, isSpam) {
      this.setComment(comment, {
        isSpam: isSpam
      });
    },
    handleTop: function handleTop(comment, top) {
      this.setComment(comment, {
        top: top
      });
    },
    setComment: function setComment(comment, set) {
      var _this5 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.loading = true;
              _context4.next = 3;
              return (0, _utils.call)(_this5.$tcb, 'COMMENT_SET_FOR_ADMIN', {
                id: comment._id,
                set: set
              });
            case 3:
              _context4.next = 5;
              return _this5.getComments();
            case 5:
              _this5.loading = false;
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    highlightCode: function highlightCode() {
      if (this.serverConfig.HIGHLIGHT === 'true') {
        (0, _utils.renderCode)(this.$refs['comment-list'], this.serverConfig.HIGHLIGHT_THEME, this.serverConfig.HIGHLIGHT_PLUGIN);
      }
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Promise.all([_this6.getConfig(), _this6.getComments()]);
          case 2:
            _this6.highlightCode();
          case 3:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
};

/***/ }),

/***/ 4576:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-admin-container"
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "tk-admin",
    "class": {
      '__show': _vm.show
    }
  }, [_c('a', {
    staticClass: "tk-admin-close",
    attrs: {
      "href": "#"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.iconClose)
    },
    on: {
      "click": _vm.onClose
    }
  }), _vm._v(" "), _vm.needUpdate ? _c('div', {
    staticClass: "tk-login-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.t('ADMIN_NEED_UPDATE')))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://twikoo.js.org/update.html",
      "target": "_blank"
    }
  }, [_vm._v("https://twikoo.js.org/update.html")])]) : _vm._e(), _vm._v(" "), !_vm.needUpdate ? _c('div', [!_vm.isLogin && _vm.isSetPassword ? _c('div', {
    staticClass: "tk-login"
  }, [_c('div', {
    staticClass: "tk-login-title"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_LOGIN_TITLE')))]), _vm._v(" "), _c('form', [_c('input', {
    attrs: {
      "type": "hidden"
    }
  }), _vm._v(" "), _c('el-input', {
    ref: "focusme",
    staticClass: "tk-password",
    attrs: {
      "placeholder": _vm.t('ADMIN_PASSWORD_PLACEHOLDER'),
      "show-password": ""
    },
    nativeOn: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onLogin.apply(null, arguments);
      }
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_PASSWORD')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "slot": "append"
    },
    on: {
      "click": _vm.onLogin
    },
    slot: "append"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_LOGIN')))])], 2)], 1), _vm._v(" "), _vm.loginErrorMessage ? _c('div', {
    staticClass: "tk-login-msg"
  }, [_vm._v("\n          " + _vm._s(_vm.loginErrorMessage) + "\n          "), _c('a', {
    attrs: {
      "href": "https://twikoo.js.org/faq.html",
      "rel": "noopener noreferrer",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_FORGOT')))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.isLogin && !_vm.isSetPassword ? _c('div', {
    staticClass: "tk-regist"
  }, [_c('div', {
    staticClass: "tk-login-title"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_LOGIN_TITLE')))]), _vm._v(" "), _c('form', [!_vm.isSetCredentials ? _c('el-input', {
    ref: "focusme",
    staticClass: "tk-password",
    attrs: {
      "placeholder": _vm.t('ADMIN_CREDENTIALS_PLACEHOLDER')
    },
    model: {
      value: _vm.credentials,
      callback: function callback($$v) {
        _vm.credentials = $$v;
      },
      expression: "credentials"
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CREDENTIALS')))])], 2) : _vm._e(), _vm._v(" "), _c('el-input', {
    staticClass: "tk-password",
    attrs: {
      "placeholder": _vm.t('ADMIN_SET_PASSWORD_PLACEHOLDER'),
      "show-password": ""
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_SET_PASSWORD')))])], 2), _vm._v(" "), _c('el-input', {
    staticClass: "tk-password",
    attrs: {
      "placeholder": _vm.t('ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER'),
      "show-password": ""
    },
    model: {
      value: _vm.passwordConfirm,
      callback: function callback($$v) {
        _vm.passwordConfirm = $$v;
      },
      expression: "passwordConfirm"
    }
  }, [_c('template', {
    slot: "prepend"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_SET_PASSWORD_CONFIRM')))])], 2)], 1), _vm._v(" "), _c('el-button', {
    staticClass: "tk-regist-button",
    attrs: {
      "disabled": !_vm.canRegist
    },
    on: {
      "click": _vm.onRegist
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_REGIST')))]), _vm._v(" "), _vm.loginErrorMessage ? _c('div', {
    staticClass: "tk-login-msg"
  }, [_vm._v(_vm._s(_vm.loginErrorMessage))]) : _vm._e(), _vm._v(" "), !_vm.isSetCredentials ? _c('div', {
    staticClass: "tk-login-msg"
  }, [_c('a', {
    attrs: {
      "href": "https://twikoo.js.org/faq.html",
      "rel": "noopener noreferrer",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CREDENTIALS_FAQ')))])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.isLogin ? _c('div', {
    staticClass: "tk-panel"
  }, [_c('div', {
    staticClass: "tk-panel-title"
  }, [_c('div', [_vm._v(_vm._s(_vm.t('ADMIN_TITLE')))]), _vm._v(" "), _c('a', {
    staticClass: "tk-panel-logout",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.onLogout
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_LOGOUT')))])]), _vm._v(" "), _c('div', {
    staticClass: "tk-tabs"
  }, [_c('div', {
    staticClass: "tk-tab",
    "class": {
      __active: _vm.activeTabName === 'comment'
    },
    on: {
      "click": function click($event) {
        _vm.activeTabName = 'comment';
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT')))]), _vm._v(" "), _c('div', {
    staticClass: "tk-tab",
    "class": {
      __active: _vm.activeTabName === 'config'
    },
    on: {
      "click": function click($event) {
        _vm.activeTabName = 'config';
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG')))]), _vm._v(" "), _c('div', {
    staticClass: "tk-tab",
    "class": {
      __active: _vm.activeTabName === 'import'
    },
    on: {
      "click": function click($event) {
        _vm.activeTabName = 'import';
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_IMPORT')))]), _vm._v(" "), _c('div', {
    staticClass: "tk-tab",
    "class": {
      __active: _vm.activeTabName === 'export'
    },
    on: {
      "click": function click($event) {
        _vm.activeTabName = 'export';
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_EXPORT')))])]), _vm._v(" "), _c('tk-admin-comment', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTabName === 'comment',
      expression: "activeTabName === 'comment'"
    }]
  }), _vm._v(" "), _c('tk-admin-config', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTabName === 'config',
      expression: "activeTabName === 'config'"
    }]
  }), _vm._v(" "), _c('tk-admin-import', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTabName === 'import',
      expression: "activeTabName === 'import'"
    }]
  }), _vm._v(" "), _c('tk-admin-export', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTabName === 'export',
      expression: "activeTabName === 'export'"
    }]
  })], 1) : _vm._e()]) : _vm._e()])]);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 4624:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(269);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("5a1fa943", content, true, {});

/***/ }),

/***/ 4707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6810);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("8be46386", content, true, {});

/***/ }),

/***/ 4785:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkAvatarvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAvatar; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAvatar.vue?vue&type=template&id=1c861970
var TkAvatarvue_type_template_id_1c861970 = __webpack_require__(5897);
;// ./src/client/view/components/TkAvatar.vue?vue&type=template&id=1c861970

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAvatar.vue?vue&type=script&lang=js
var TkAvatarvue_type_script_lang_js = __webpack_require__(4064);
;// ./src/client/view/components/TkAvatar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkAvatarvue_type_script_lang_js = (TkAvatarvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAvatar.vue?vue&type=style&index=0&id=1c861970&prod&lang=css
var TkAvatarvue_type_style_index_0_id_1c861970_prod_lang_css = __webpack_require__(4624);
;// ./src/client/view/components/TkAvatar.vue?vue&type=style&index=0&id=1c861970&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAvatar.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkAvatarvue_type_script_lang_js,
  TkAvatarvue_type_template_id_1c861970/* render */.XX,
  TkAvatarvue_type_template_id_1c861970/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAvatar = (component.exports);

/***/ }),

/***/ 4797:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3514);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("a49b0590", content, true, {});

/***/ }),

/***/ 4805:
/***/ (function(module) {

"use strict";


function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4868:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _utils = __webpack_require__(8129);
var _version = __webpack_require__(2199);
var _index = __webpack_require__(1085);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _default = exports.A = {
  data: function data() {
    return {
      loading: true,
      settings: [{
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_COMMON'),
        items: [{
          key: 'SITE_NAME',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SITE_NAME'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u8679\u58A8\u7A7A\u95F4\u7AD9"),
          value: ''
        }, {
          key: 'SITE_URL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SITE_URL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "https://www.imaegoo.com"),
          value: ''
        }, {
          key: 'CORS_ALLOW_ORIGIN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_CORS_ALLOW_ORIGIN'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "https://www.imaegoo.com"),
          value: ''
        }, {
          key: 'BLOGGER_NICK',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_BLOGGER_NICK'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "iMaeGoo"),
          value: ''
        }, {
          key: 'BLOGGER_EMAIL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_BLOGGER_EMAIL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "12345@qq.com"),
          value: ''
        }, {
          key: 'COMMENT_PAGE_SIZE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_COMMENT_PAGE_SIZE'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "8"),
          value: ''
        }, {
          key: 'MASTER_TAG',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_MASTER_TAG'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u7AD9\u957F"),
          value: ''
        }, {
          key: 'COMMENT_BG_IMG',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_COMMENT_BG_IMG'),
          ph: '',
          value: ''
        }, {
          key: 'GRAVATAR_CDN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_GRAVATAR_CDN'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "sdn.geekzu.org"),
          value: ''
        }, {
          key: 'DEFAULT_GRAVATAR',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_DEFAULT_GRAVATAR'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "mp"),
          value: ''
        }, {
          key: 'COMMENT_PLACEHOLDER',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_COMMENT_PLACEHOLDER'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE')),
          value: ''
        }, {
          key: 'SHOW_ORDER',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SHOW_ORDER'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "true"),
          value: ''
        }, {
          key: 'SHOW_DISLIKE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SHOW_DISLIKE'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "true"),
          value: ''
        }, {
          key: 'DISPLAYED_FIELDS',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_DISPLAYED_FIELDS'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "nick,mail,link"),
          value: ''
        }, {
          key: 'REQUIRED_FIELDS',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_REQUIRED_FIELDS'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "nick,mail,link"),
          value: ''
        }, {
          key: 'HIDE_ADMIN_CRYPT',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_HIDE_ADMIN_CRYPT'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "admin"),
          value: ''
        }, {
          key: 'QQ_API_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_QQ_API_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "your_api_key"),
          value: ''
        }]
      }, {
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_PLUGIN'),
        items: [{
          key: 'IMAGE_SERVICE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_IMAGE_SERVICE'),
          options: [{
            value: '',
            label: (0, _utils.t)('ADMIN_CONFIG_IMAGE_SERVICE_NONE')
          }, {
            value: 'qcloud',
            label: 'qcloud'
          }, {
            value: '7bu',
            label: '7bu (https://7bu.top)'
          }, {
            value: 'see',
            label: 'see (https://s.ee)'
          }, {
            value: 'lskypro',
            label: 'lskypro'
          }, {
            value: 'piclist',
            label: 'piclist'
          }, {
            value: 'easyimage',
            label: 'easyimage'
          }, {
            value: 'chevereto',
            label: 'chevereto'
          }, {
            value: 's3',
            label: 'S3 / R2 / MinIO'
          }],
          value: ''
        }, {
          key: 'IMAGE_CDN_URL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_IMAGE_CDN_URL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "https://piclist.example.com"),
          value: '',
          showIf: function showIf(s) {
            return ['lskypro', 'piclist', 'easyimage'].includes(s('IMAGE_SERVICE'));
          }
        }, {
          key: 'IMAGE_CDN_TOKEN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_IMAGE_CDN_TOKEN'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "example"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') && s('IMAGE_SERVICE') !== 's3';
          }
        }, {
          key: 'S3_REGION',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_REGION'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "us-east-1"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'S3_BUCKET',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_BUCKET'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "my-bucket"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'S3_ACCESS_KEY_ID',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_ACCESS_KEY_ID'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "AKIAIOSFODNN7EXAMPLE"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'S3_SECRET_ACCESS_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_SECRET_ACCESS_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"),
          value: '',
          secret: true,
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'S3_ENDPOINT',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_ENDPOINT'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "https://xxx.r2.cloudflarestorage.com"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'S3_CDN_URL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_CDN_URL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "https://cdn.example.com"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'S3_PATH_PREFIX',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_S3_PATH_PREFIX'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "images/twikoo"),
          value: '',
          showIf: function showIf(s) {
            return s('IMAGE_SERVICE') === 's3';
          }
        }, {
          key: 'NSFW_API_URL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_NSFW_API_URL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "https://nsfw.example.com"),
          value: ''
        }, {
          key: 'NSFW_THRESHOLD',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_NSFW_THRESHOLD'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "0.5"),
          value: ''
        }, {
          key: 'SHOW_EMOTION',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SHOW_EMOTION'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "false"),
          value: ''
        }, {
          key: 'EMOTION_CDN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_EMOTION_CDN'),
          ph: '',
          value: ''
        }, {
          key: 'HIGHLIGHT',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_HIGHLIGHT'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "false"),
          value: ''
        }, {
          key: 'HIGHLIGHT_THEME',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_HIGHLIGHT_THEME'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "tomorrow"),
          value: ''
        }, {
          key: 'HIGHLIGHT_PLUGIN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_HIGHLIGHT_PLUGIN'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "showLanguage"),
          value: ''
        }, {
          key: 'LIGHTBOX',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_LIGHTBOX'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "true"),
          value: ''
        }]
      }, {
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_PRIVACY'),
        items: [{
          key: 'SHOW_UA',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SHOW_UA'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "false"),
          value: ''
        }, {
          key: 'SHOW_REGION',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SHOW_REGION'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "true"),
          value: ''
        }]
      }, {
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_SPAM'),
        items: [{
          key: 'AKISMET_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_AKISMET_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "8651783edxxx"),
          value: ''
        }, {
          key: 'QCLOUD_SECRET_ID',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_QCLOUD_SECRET_ID'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "AKI******************************IHw"),
          value: ''
        }, {
          key: 'QCLOUD_SECRET_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_QCLOUD_SECRET_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "Xrk**************************3D7"),
          value: '',
          secret: true
        }, {
          key: 'QCLOUD_CMS_BIZTYPE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_QCLOUD_CMS_BIZTYPE'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "1787728329856520192"),
          value: ''
        }, {
          key: 'LIMIT_PER_MINUTE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "5"),
          value: ''
        }, {
          key: 'LIMIT_PER_MINUTE_ALL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_LIMIT_PER_MINUTE_ALL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "5"),
          value: ''
        }, {
          key: 'LIMIT_LENGTH',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_LIMIT_LENGTH'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "100"),
          value: ''
        }, {
          key: 'FORBIDDEN_WORDS',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_FORBIDDEN_WORDS'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u5FEB\u9012,\u7A7A\u5305"),
          value: ''
        }, {
          key: 'BLOCKED_WORDS',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_BLOCKED_WORDS'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u5FEB\u9012,\u7A7A\u5305"),
          value: ''
        }, {
          key: 'NOTIFY_SPAM',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_NOTIFY_SPAM'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "false"),
          value: ''
        }]
      }, {
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_CAPTCHA'),
        items: [{
          key: 'CAPTCHA_PROVIDER',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_CAPTCHA_PROVIDER'),
          options: [{
            value: '',
            label: (0, _utils.t)('ADMIN_CONFIG_CAPTCHA_NONE')
          }, {
            value: 'Turnstile',
            label: (0, _utils.t)('ADMIN_CONFIG_CAPTCHA_TURNSTILE')
          }, {
            value: 'Geetest',
            label: (0, _utils.t)('ADMIN_CONFIG_CAPTCHA_GEETEST')
          }],
          value: ''
        }, {
          key: 'TURNSTILE_SITE_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_TURNSTILE_SITE_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "0x4AAAAAAAPLTtpBr_T12345"),
          value: '',
          showIf: function showIf(s) {
            return s('CAPTCHA_PROVIDER') === 'Turnstile';
          }
        }, {
          key: 'TURNSTILE_SECRET_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_TURNSTILE_SECRET_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "0x4AAAAAAAPLTmBm6gHmOnOqC1iwmU12345"),
          value: '',
          secret: true,
          showIf: function showIf(s) {
            return s('CAPTCHA_PROVIDER') === 'Turnstile';
          }
        }, {
          key: 'GEETEST_CAPTCHA_ID',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_GEETEST_CAPTCHA_ID'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "your_captcha_id"),
          value: '',
          showIf: function showIf(s) {
            return s('CAPTCHA_PROVIDER') === 'Geetest';
          }
        }, {
          key: 'GEETEST_CAPTCHA_KEY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_GEETEST_CAPTCHA_KEY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "your_captcha_key"),
          value: '',
          secret: true,
          showIf: function showIf(s) {
            return s('CAPTCHA_PROVIDER') === 'Geetest';
          }
        }]
      }, {
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_IM'),
        items: [{
          key: 'PUSHOO_CHANNEL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_PUSHOO_CHANNEL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "pushdeer"),
          value: ''
        }, {
          key: 'PUSHOO_TOKEN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_PUSHOO_TOKEN'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "PDU431TfFHZICvR6lJrFBswSRN1cJ*****zzFvR"),
          value: ''
        }, {
          key: 'SC_MAIL_NOTIFY',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SC_MAIL_NOTIFY'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "true"),
          value: ''
        }]
      }, {
        name: (0, _utils.t)('ADMIN_CONFIG_CATEGORY_MAIL'),
        items: [{
          key: 'SENDER_EMAIL',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SENDER_EMAIL'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "blog@imaegoo.com"),
          value: ''
        }, {
          key: 'SENDER_NAME',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SENDER_NAME'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u8679\u58A8\u7A7A\u95F4\u7AD9\u8BC4\u8BBA\u63D0\u9192"),
          value: ''
        }, {
          key: 'SMTP_SERVICE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SMTP_SERVICE'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "QQ"),
          value: ''
        }, {
          key: 'SMTP_HOST',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SMTP_HOST'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "smtp.qq.com"),
          value: ''
        }, {
          key: 'SMTP_PORT',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SMTP_PORT'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "465"),
          value: ''
        }, {
          key: 'SMTP_SECURE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SMTP_SECURE'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "true"),
          value: ''
        }, {
          key: 'SMTP_USER',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SMTP_USER'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "blog@imaegoo.com"),
          value: ''
        }, {
          key: 'SMTP_PASS',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_SMTP_PASS'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "password"),
          value: '',
          secret: true
        }, {
          key: 'MAIL_SUBJECT',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_MAIL_SUBJECT'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u60A8\u5728\u8679\u58A8\u7A7A\u95F4\u7AD9\u4E0A\u7684\u8BC4\u8BBA\u6536\u5230\u4E86\u56DE\u590D"),
          value: ''
        }, {
          key: 'MAIL_TEMPLATE',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_MAIL_TEMPLATE'),
          ph: '',
          value: ''
        }, {
          key: 'MAIL_SUBJECT_ADMIN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_MAIL_SUBJECT_ADMIN'),
          ph: "".concat((0, _utils.t)('ADMIN_CONFIG_EXAMPLE'), "\u8679\u58A8\u7A7A\u95F4\u7AD9\u4E0A\u6709\u65B0\u8BC4\u8BBA\u4E86"),
          value: ''
        }, {
          key: 'MAIL_TEMPLATE_ADMIN',
          desc: (0, _utils.t)('ADMIN_CONFIG_ITEM_MAIL_TEMPLATE_ADMIN'),
          ph: '',
          value: ''
        }]
      }],
      serverConfig: {},
      serverVersion: this.$twikoo.serverConfig.VERSION,
      clientVersion: _version.version,
      message: '',
      emailTestAddress: '',
      emailTestResult: ''
    };
  },
  methods: {
    t: _utils.t,
    readConfig: function readConfig() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return (0, _utils.call)(_this.$tcb, 'GET_CONFIG_FOR_ADMIN');
            case 3:
              res = _context.sent;
              if (res.result && !res.result.code) {
                _this.serverConfig = res.result.config;
                if (typeof _this.serverConfig.CAPTCHA_PROVIDER === 'undefined') {
                  if (_this.serverConfig.TURNSTILE_SITE_KEY) {
                    _this.serverConfig.CAPTCHA_PROVIDER = 'Turnstile';
                  } else if (_this.serverConfig.GEETEST_CAPTCHA_ID) {
                    _this.serverConfig.CAPTCHA_PROVIDER = 'Geetest';
                  }
                }
                if (typeof _this.serverConfig.IMAGE_SERVICE === 'undefined') {
                  if (_this.serverConfig.SHOW_IMAGE === 'false') {
                    _this.serverConfig.IMAGE_SERVICE = '';
                  } else if (_this.serverConfig.IMAGE_CDN) {
                    _this.serverConfig.IMAGE_SERVICE = _this.serverConfig.IMAGE_CDN;
                  } else {
                    // 旧逻辑中，SHOW_IMAGE 默认为 true。没有 IMAGE_SERVICE 字段。所以兼容旧版，这里保持比较好 ⊙.⊙
                    _this.serverConfig.IMAGE_SERVICE = '';
                  }
                }
                _this.resetConfig();
              }
              _this.loading = false;
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    resetConfig: function resetConfig() {
      var _iterator = _createForOfIteratorHelper(this.settings),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var settingGroup = _step.value;
          var _iterator2 = _createForOfIteratorHelper(settingGroup.items),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var setting = _step2.value;
              if (this.serverConfig[setting.key] !== undefined) {
                setting.value = this.serverConfig[setting.key];
              } else {
                setting.value = '';
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    showSetting: function showSetting(setting) {
      var _this2 = this;
      if (typeof setting.showIf !== 'function') return true;
      var getVal = function getVal(key) {
        var _iterator3 = _createForOfIteratorHelper(_this2.settings),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var g = _step3.value;
            var found = g.items.find(function (i) {
              return i.key === key;
            });
            if (found) return found.value;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return null;
      };
      return setting.showIf(getVal);
    },
    saveConfig: function saveConfig() {
      var _this3 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var config, _iterator4, _step4, settingGroup, _iterator5, _step5, setting, oldValue, newValue;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.loading = true;
              _this3.message = '正在保存';
              config = {};
              _iterator4 = _createForOfIteratorHelper(_this3.settings);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  settingGroup = _step4.value;
                  _iterator5 = _createForOfIteratorHelper(settingGroup.items);
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      setting = _step5.value;
                      oldValue = _this3.serverConfig[setting.key];
                      newValue = setting.value;
                      if (oldValue !== newValue) {
                        config[setting.key] = setting.value;
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
                // 兼容旧版：同步 IMAGE_SERVICE 到 IMAGE_CDN 和 SHOW_IMAGE
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              if (config.IMAGE_SERVICE !== undefined) {
                config.IMAGE_CDN = config.IMAGE_SERVICE;
                config.SHOW_IMAGE = config.IMAGE_SERVICE ? 'true' : 'false';
              }
              _utils.logger.log('保存配置', config);
              _context2.next = 9;
              return (0, _utils.call)(_this3.$tcb, 'SET_CONFIG', {
                config: config
              });
            case 9:
              _context2.next = 11;
              return _this3.readConfig();
            case 11:
              // Notify other components (e.g. TkComments) to refresh config
              _index.app.$emit('configUpdated');
              _this3.message = '保存成功';
              _this3.loading = false;
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    testEmail: function testEmail() {
      var _this4 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var testResult;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this4.loading = true;
              _context3.next = 3;
              return (0, _utils.call)(_this4.$tcb, 'EMAIL_TEST', {
                mail: _this4.emailTestAddress
              });
            case 3:
              testResult = _context3.sent;
              _utils.logger.log('邮件测试', testResult);
              _this4.emailTestResult = JSON.stringify(testResult);
              _this4.loading = false;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  },
  mounted: function mounted() {
    this.readConfig();
  }
};

/***/ }),

/***/ 4926:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "tk-admin-config"
  }, [_vm.clientVersion !== _vm.serverVersion ? _c('div', {
    staticClass: "tk-admin-warn"
  }, [_c('span', [_vm._v(_vm._s(_vm.t('ADMIN_CLIENT_VERSION')) + _vm._s(_vm.clientVersion) + "，")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.t('ADMIN_SERVER_VERSION')) + _vm._s(_vm.serverVersion) + "，")]), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-config-groups"
  }, [_vm._l(_vm.settings, function (settingGroup) {
    return _c('details', {
      key: settingGroup.name,
      staticClass: "tk-admin-config-group"
    }, [_c('summary', {
      staticClass: "tk-admin-config-group-title"
    }, [_vm._v(_vm._s(settingGroup.name))]), _vm._v(" "), _vm._l(settingGroup.items, function (setting) {
      return _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.showSetting(setting),
          expression: "showSetting(setting)"
        }],
        key: setting.key,
        staticClass: "tk-admin-config-item"
      }, [_c('div', {
        staticClass: "tk-admin-config-title",
        attrs: {
          "title": setting.key
        }
      }, [_vm._v(_vm._s(setting.key))]), _vm._v(" "), _c('div', {
        staticClass: "tk-admin-config-input"
      }, [setting.options ? _c('select', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: setting.value,
          expression: "setting.value"
        }],
        staticClass: "tk-admin-config-select",
        on: {
          "change": function change($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(setting, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, _vm._l(setting.options, function (opt) {
        return _c('option', {
          key: opt.value,
          domProps: {
            "value": opt.value
          }
        }, [_vm._v(_vm._s(opt.label))]);
      }), 0) : _c('el-input', {
        attrs: {
          "placeholder": setting.ph,
          "size": "small",
          "show-password": setting.secret
        },
        model: {
          value: setting.value,
          callback: function callback($$v) {
            _vm.$set(setting, "value", $$v);
          },
          expression: "setting.value"
        }
      })], 1), _vm._v(" "), _c('div'), _vm._v(" "), _c('div', {
        staticClass: "tk-admin-config-desc"
      }, [_vm._v(_vm._s(setting.desc))])]);
    })], 2);
  }), _vm._v(" "), _c('details', {
    staticClass: "tk-admin-config-group"
  }, [_c('summary', {
    staticClass: "tk-admin-config-group-title"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG_EMAIL_TEST')))]), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-config-email-test"
  }, [_c('div', {
    staticClass: "tk-admin-config-email-test-desc"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG_EMAIL_TEST_HELP')))]), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-config-input"
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: _vm.emailTestAddress,
      callback: function callback($$v) {
        _vm.emailTestAddress = $$v;
      },
      expression: "emailTestAddress"
    }
  }, [_c('el-button', {
    attrs: {
      "slot": "append",
      "type": "info"
    },
    on: {
      "click": _vm.testEmail
    },
    slot: "append"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG_EMAIL_TEST_BTN')))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-config-email-test-desc"
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG_EMAIL_TEST_RESULT')) + _vm._s(_vm.emailTestResult))])])])], 2), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-config-actions"
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.saveConfig
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG_SAVE')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "info"
    },
    on: {
      "click": _vm.resetConfig
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_CONFIG_RESET')))])], 1), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-config-message"
  }, [_vm._v(_vm._s(_vm.message))])]);
};
var staticRenderFns = exports.Yp = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', [_vm._v("请参考 "), _c('a', {
    attrs: {
      "href": "https://twikoo.js.org/update.html",
      "target": "_blank"
    }
  }, [_vm._v("版本更新")]), _vm._v(" 进行升级")]);
}];

/***/ }),

/***/ 4964:
/***/ (function(module) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5062:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkMetaInputvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkMetaInput; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkMetaInput.vue?vue&type=template&id=1f03c352
var TkMetaInputvue_type_template_id_1f03c352 = __webpack_require__(489);
;// ./src/client/view/components/TkMetaInput.vue?vue&type=template&id=1f03c352

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkMetaInput.vue?vue&type=script&lang=js
var TkMetaInputvue_type_script_lang_js = __webpack_require__(2362);
;// ./src/client/view/components/TkMetaInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkMetaInputvue_type_script_lang_js = (TkMetaInputvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkMetaInput.vue?vue&type=style&index=0&id=1f03c352&prod&lang=css
var TkMetaInputvue_type_style_index_0_id_1f03c352_prod_lang_css = __webpack_require__(9368);
;// ./src/client/view/components/TkMetaInput.vue?vue&type=style&index=0&id=1f03c352&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkMetaInput.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkMetaInputvue_type_script_lang_js,
  TkMetaInputvue_type_template_id_1f03c352/* render */.XX,
  TkMetaInputvue_type_template_id_1f03c352/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkMetaInput = (component.exports);

/***/ }),

/***/ 5083:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ addStylesClient; }
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5547);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 5132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1778);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(1479), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-admin-config-groups {\n  overflow-y: auto;\n  padding-right: 0.5em;\n  position: relative;\n}\n.tk-admin-config-groups .tk-admin-config-group,\n.tk-admin-config-groups .tk-admin-config-group-title {\n  background: transparent;\n}\n.tk-admin-config-group-title {\n  margin-top: 1em;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.tk-admin-config-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 30% 70%;\n  margin-top: 1em;\n  position: relative;\n}\n.tk-admin-config-title {\n  text-align: right;\n  margin-right: 1em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tk-admin-config-input {\n  position: relative;\n}\n.tk-admin-config-select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: right 10px center;\n  border-radius: 4px;\n  border: 1px solid rgba(144, 147, 153, 0.31);\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: inherit;\n  height: 32px;\n  line-height: 32px;\n  outline: none;\n  padding: 0 30px 0 10px;\n  transition: border-color .2s cubic-bezier(.645,.045,.355,1);\n  width: 100%;\n}\n.tk-admin-config-select:focus {\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.tk-admin-config-select option {\n  color: initial;\n  background: #333;\n}\n.tk-admin-config-desc {\n  margin-top: 0.5em;\n  font-size: 0.75em;\n  overflow-wrap: break-word;\n}\n.tk-admin-config-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1em;\n}\n.tk-admin-config-message {\n  margin-top: 0.5em;\n  text-align: center;\n}\n.tk-admin-config-email-test-desc {\n  margin: 1em 0;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5171:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z\"></path></svg>"

/***/ }),

/***/ 5327:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2838);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("0bb4e246", content, true, {});

/***/ }),

/***/ 5346:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 5447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-main {\n  flex: 1;\n  width: 0;\n}\n.tk-row {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.tk-nick-link {\n  color: inherit;\n  text-decoration: none;\n}\n.tk-replies .tk-nick-link {\n  font-size: .9em;\n}\n.tk-nick-link:hover {\n  color: #409eff;\n}\n.tk-actions {\n  display: none;\n  margin-left: 1em;\n}\n.tk-comment:hover .tk-actions {\n  display: inline;\n}\n.tk-extras {\n  color: #999999;\n  font-size: 0.875em;\n  display: flex;\n  flex-wrap: wrap;\n}\n.tk-extra {\n  margin-top: 0.5rem;\n  margin-right: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n.tk-icon.__comment {\n  height: 1em;\n  width: 1em;\n  line-height: 1;\n}\n.tk-extra-text {\n  line-height: 1;\n}\n.tk-tag {\n  display: inline-block;\n  padding: 0 0.5em;\n  font-size: 0.75em;\n  background-color: #f2f6fc;\n}\n.tk-tag-green {\n  background-color: rgba(103,194,58,0.13);\n  border: 1px solid rgba(103,194,58,0.50);\n  border-radius: 2px;\n  color: #67c23a;\n}\n.tk-tag-yellow {\n  background-color: rgba(230,162,60,0.13);\n  border: 1px solid rgba(230,162,60,0.50);\n  border-radius: 2px;\n  color: #e6a23c;\n}\n.tk-tag-blue {\n  background-color: rgba(64,158,255,0.13);\n  border: 1px solid rgba(64,158,255,0.50);\n  border-radius: 2px;\n  color: #409eff;\n}\n.tk-tag-red {\n  background-color: rgba(245,108,108,0.13);\n  border: 1px solid rgba(245,108,108,0.50);\n  border-radius: 2px;\n  color: #f56c6c;\n}\n.tk-comment {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  word-break: break-all;\n}\n.tk-content {\n  margin-top: 0.5rem;\n  overflow: hidden;\n  max-height: 500px;\n  position: relative;\n}\n.tk-content-expand {\n  max-height: none;\n}\n.tk-replies .tk-content {\n  font-size: .9em;\n}\n.tk-comment .vemoji {\n  max-height: 2em;\n  vertical-align: middle;\n}\n.tk-replies {\n  max-height: 200px;\n  overflow: hidden;\n  position: relative;\n}\n.tk-replies-expand {\n  max-height: none;\n  overflow: unset;\n}\n.tk-submit {\n  margin-top: 1rem;\n}\n.tk-expand {\n  font-size: 0.75em;\n}\n.tk-lightbox {\n  display: block;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n.tk-lightbox-image {\n  min-width: 100px;\n  min-height: 30px;\n  width: auto;\n  height: auto;\n  max-width: 95%;\n  max-height: 95%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: linear-gradient(90deg, #eeeeee 50%, #e3e3e3 0);\n  background-size: 40px 100%;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5472:
/***/ (function() {

"use strict";


(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }
  if (!Prism.plugins.toolbar) {
    console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');
    return;
  }

  /**
   * When the given elements is clicked by the user, the given text will be copied to clipboard.
   *
   * @param {HTMLElement} element
   * @param {CopyInfo} copyInfo
   *
   * @typedef CopyInfo
   * @property {() => string} getText
   * @property {() => void} success
   * @property {(reason: unknown) => void} error
   */
  function registerClipboard(element, copyInfo) {
    element.addEventListener('click', function () {
      copyTextToClipboard(copyInfo);
    });
  }

  // https://stackoverflow.com/a/30810322/7595472

  /** @param {CopyInfo} copyInfo */
  function fallbackCopyTextToClipboard(copyInfo) {
    var textArea = document.createElement('textarea');
    textArea.value = copyInfo.getText();

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      setTimeout(function () {
        if (successful) {
          copyInfo.success();
        } else {
          copyInfo.error();
        }
      }, 1);
    } catch (err) {
      setTimeout(function () {
        copyInfo.error(err);
      }, 1);
    }
    document.body.removeChild(textArea);
  }
  /** @param {CopyInfo} copyInfo */
  function copyTextToClipboard(copyInfo) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyInfo.getText()).then(copyInfo.success, function () {
        // try the fallback in case `writeText` didn't work
        fallbackCopyTextToClipboard(copyInfo);
      });
    } else {
      fallbackCopyTextToClipboard(copyInfo);
    }
  }

  /**
   * Selects the text content of the given element.
   *
   * @param {Element} element
   */
  function selectElementText(element) {
    // https://stackoverflow.com/a/20079910/7595472
    window.getSelection().selectAllChildren(element);
  }

  /**
   * Traverses up the DOM tree to find data attributes that override the default plugin settings.
   *
   * @param {Element} startElement An element to start from.
   * @returns {Settings} The plugin settings.
   * @typedef {Record<"copy" | "copy-error" | "copy-success" | "copy-timeout", string | number>} Settings
   */
  function getSettings(startElement) {
    /** @type {Settings} */
    var settings = {
      'copy': 'Copy',
      'copy-error': 'Press Ctrl+C to copy',
      'copy-success': 'Copied!',
      'copy-timeout': 5000
    };
    var prefix = 'data-prismjs-';
    for (var key in settings) {
      var attr = prefix + key;
      var element = startElement;
      while (element && !element.hasAttribute(attr)) {
        element = element.parentElement;
      }
      if (element) {
        settings[key] = element.getAttribute(attr);
      }
    }
    return settings;
  }
  Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
    var element = env.element;
    var settings = getSettings(element);
    var linkCopy = document.createElement('button');
    linkCopy.className = 'copy-to-clipboard-button';
    linkCopy.setAttribute('type', 'button');
    var linkSpan = document.createElement('span');
    linkCopy.appendChild(linkSpan);
    setState('copy');
    registerClipboard(linkCopy, {
      getText: function getText() {
        return element.textContent;
      },
      success: function success() {
        setState('copy-success');
        resetText();
      },
      error: function error() {
        setState('copy-error');
        setTimeout(function () {
          selectElementText(element);
        }, 1);
        resetText();
      }
    });
    return linkCopy;
    function resetText() {
      setTimeout(function () {
        setState('copy');
      }, settings['copy-timeout']);
    }

    /** @param {"copy" | "copy-error" | "copy-success"} state */
    function setState(state) {
      linkSpan.textContent = settings[state];
      linkCopy.setAttribute('data-copy-state', state);
    }
  });
})();

/***/ }),

/***/ 5519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkCommentvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkComment; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkComment.vue?vue&type=template&id=489ab898
var TkCommentvue_type_template_id_489ab898 = __webpack_require__(1761);
;// ./src/client/view/components/TkComment.vue?vue&type=template&id=489ab898

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkComment.vue?vue&type=script&lang=js
var TkCommentvue_type_script_lang_js = __webpack_require__(3572);
;// ./src/client/view/components/TkComment.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkCommentvue_type_script_lang_js = (TkCommentvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkComment.vue?vue&type=style&index=0&id=489ab898&prod&lang=css
var TkCommentvue_type_style_index_0_id_489ab898_prod_lang_css = __webpack_require__(9080);
;// ./src/client/view/components/TkComment.vue?vue&type=style&index=0&id=489ab898&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkComment.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkCommentvue_type_script_lang_js,
  TkCommentvue_type_template_id_489ab898/* render */.XX,
  TkCommentvue_type_template_id_489ab898/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkComment = (component.exports);

/***/ }),

/***/ 5547:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.A = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
}

/***/ }),

/***/ 5567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkSubmitvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkSubmit; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkSubmit.vue?vue&type=template&id=08afd568
var TkSubmitvue_type_template_id_08afd568 = __webpack_require__(1621);
;// ./src/client/view/components/TkSubmit.vue?vue&type=template&id=08afd568

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkSubmit.vue?vue&type=script&lang=js
var TkSubmitvue_type_script_lang_js = __webpack_require__(147);
;// ./src/client/view/components/TkSubmit.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkSubmitvue_type_script_lang_js = (TkSubmitvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkSubmit.vue?vue&type=style&index=0&id=08afd568&prod&lang=css
var TkSubmitvue_type_style_index_0_id_08afd568_prod_lang_css = __webpack_require__(2266);
;// ./src/client/view/components/TkSubmit.vue?vue&type=style&index=0&id=08afd568&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkSubmit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkSubmitvue_type_script_lang_js,
  TkSubmitvue_type_template_id_08afd568/* render */.XX,
  TkSubmitvue_type_template_id_08afd568/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkSubmit = (component.exports);

/***/ }),

/***/ 5735:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
module.exports = /******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_380__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_380__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_380__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __nested_webpack_require_380__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __nested_webpack_require_380__.d = function (exports, name, getter) {
    /******/if (!__nested_webpack_require_380__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __nested_webpack_require_380__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __nested_webpack_require_380__.t = function (value, mode) {
    /******/if (mode & 1) value = __nested_webpack_require_380__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && (0, _typeof2["default"])(value) === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __nested_webpack_require_380__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_380__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __nested_webpack_require_380__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __nested_webpack_require_380__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __nested_webpack_require_380__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __nested_webpack_require_380__.p = "/dist/";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __nested_webpack_require_380__(__nested_webpack_require_380__.s = 75);
  /******/
}
/************************************************************************/
/******/({
  /***/0: ( /***/function _(module, __nested_webpack_exports__, __nested_webpack_require_4234__) {
    "use strict";

    /* harmony export (binding) */
    __nested_webpack_require_4234__.d(__nested_webpack_exports__, "a", function () {
      return normalizeComponent;
    });
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }
      var hook;
      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context ||
          // cached call
          this.$vnode && this.$vnode.ssrContext ||
          // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles;
      }
      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
      return {
        exports: scriptExports,
        options: options
      };
    }

    /***/
  }),
  /***/11: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(2036);

    /***/
  }),
  /***/21: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(4524);

    /***/
  }),
  /***/4: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(5956);

    /***/
  }),
  /***/75: ( /***/function _(module, __nested_webpack_exports__, __nested_webpack_require_7828__) {
    "use strict";

    __nested_webpack_require_7828__.r(__nested_webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", {
        "class": [_vm.type === "textarea" ? "el-textarea" : "el-input", _vm.inputSize ? "el-input--" + _vm.inputSize : "", {
          "is-disabled": _vm.inputDisabled,
          "is-exceed": _vm.inputExceed,
          "el-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "el-input-group--append": _vm.$slots.append,
          "el-input-group--prepend": _vm.$slots.prepend,
          "el-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
          "el-input--suffix": _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable || _vm.showPassword
        }],
        on: {
          mouseenter: function mouseenter($event) {
            _vm.hovering = true;
          },
          mouseleave: function mouseleave($event) {
            _vm.hovering = false;
          }
        }
      }, [_vm.type !== "textarea" ? [_vm.$slots.prepend ? _c("div", {
        staticClass: "el-input-group__prepend"
      }, [_vm._t("prepend")], 2) : _vm._e(), _vm.type !== "textarea" ? _c("input", _vm._b({
        ref: "input",
        staticClass: "el-input__inner",
        attrs: {
          tabindex: _vm.tabindex,
          type: _vm.showPassword ? _vm.passwordVisible ? "text" : "password" : _vm.type,
          disabled: _vm.inputDisabled,
          readonly: _vm.readonly,
          autocomplete: _vm.autoComplete || _vm.autocomplete,
          "aria-label": _vm.label
        },
        on: {
          compositionstart: _vm.handleCompositionStart,
          compositionupdate: _vm.handleCompositionUpdate,
          compositionend: _vm.handleCompositionEnd,
          input: _vm.handleInput,
          focus: _vm.handleFocus,
          blur: _vm.handleBlur,
          change: _vm.handleChange
        }
      }, "input", _vm.$attrs, false)) : _vm._e(), _vm.$slots.prefix || _vm.prefixIcon ? _c("span", {
        staticClass: "el-input__prefix"
      }, [_vm._t("prefix"), _vm.prefixIcon ? _c("i", {
        staticClass: "el-input__icon",
        "class": _vm.prefixIcon
      }) : _vm._e()], 2) : _vm._e(), _vm.getSuffixVisible() ? _c("span", {
        staticClass: "el-input__suffix"
      }, [_c("span", {
        staticClass: "el-input__suffix-inner"
      }, [!_vm.showClear || !_vm.showPwdVisible || !_vm.isWordLimitVisible ? [_vm._t("suffix"), _vm.suffixIcon ? _c("i", {
        staticClass: "el-input__icon",
        "class": _vm.suffixIcon
      }) : _vm._e()] : _vm._e(), _vm.showClear ? _c("i", {
        staticClass: "el-input__icon el-icon-circle-close el-input__clear",
        on: {
          mousedown: function mousedown($event) {
            $event.preventDefault();
          },
          click: _vm.clear
        }
      }) : _vm._e(), _vm.showPwdVisible ? _c("i", {
        staticClass: "el-input__icon el-icon-view el-input__clear",
        on: {
          click: _vm.handlePasswordVisible
        }
      }) : _vm._e(), _vm.isWordLimitVisible ? _c("span", {
        staticClass: "el-input__count"
      }, [_c("span", {
        staticClass: "el-input__count-inner"
      }, [_vm._v("\n            " + _vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit) + "\n          ")])]) : _vm._e()], 2), _vm.validateState ? _c("i", {
        staticClass: "el-input__icon",
        "class": ["el-input__validateIcon", _vm.validateIcon]
      }) : _vm._e()]) : _vm._e(), _vm.$slots.append ? _c("div", {
        staticClass: "el-input-group__append"
      }, [_vm._t("append")], 2) : _vm._e()] : _c("textarea", _vm._b({
        ref: "textarea",
        staticClass: "el-textarea__inner",
        style: _vm.textareaStyle,
        attrs: {
          tabindex: _vm.tabindex,
          disabled: _vm.inputDisabled,
          readonly: _vm.readonly,
          autocomplete: _vm.autoComplete || _vm.autocomplete,
          "aria-label": _vm.label
        },
        on: {
          compositionstart: _vm.handleCompositionStart,
          compositionupdate: _vm.handleCompositionUpdate,
          compositionend: _vm.handleCompositionEnd,
          input: _vm.handleInput,
          focus: _vm.handleFocus,
          blur: _vm.handleBlur,
          change: _vm.handleChange
        }
      }, "textarea", _vm.$attrs, false)), _vm.isWordLimitVisible && _vm.type === "textarea" ? _c("span", {
        staticClass: "el-input__count"
      }, [_vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))]) : _vm._e()], 2);
    };
    var staticRenderFns = [];
    render._withStripped = true;

    // CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

    // EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
    var emitter_ = __nested_webpack_require_7828__(4);
    var emitter_default = /*#__PURE__*/__nested_webpack_require_7828__.n(emitter_);

    // EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
    var migrating_ = __nested_webpack_require_7828__(11);
    var migrating_default = /*#__PURE__*/__nested_webpack_require_7828__.n(migrating_);

    // CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
    var hiddenTextarea = void 0;
    var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
    var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
    function calculateNodeStyling(targetElement) {
      var style = window.getComputedStyle(targetElement);
      var boxSizing = style.getPropertyValue('box-sizing');
      var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
      var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
      var contextStyle = CONTEXT_STYLE.map(function (name) {
        return name + ':' + style.getPropertyValue(name);
      }).join(';');
      return {
        contextStyle: contextStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
      };
    }
    function calcTextareaHeight(targetElement) {
      var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
      }
      var _calculateNodeStyling = calculateNodeStyling(targetElement),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        contextStyle = _calculateNodeStyling.contextStyle;
      hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
      hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
      var height = hiddenTextarea.scrollHeight;
      var result = {};
      if (boxSizing === 'border-box') {
        height = height + borderSize;
      } else if (boxSizing === 'content-box') {
        height = height - paddingSize;
      }
      hiddenTextarea.value = '';
      var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
      if (minRows !== null) {
        var minHeight = singleRowHeight * minRows;
        if (boxSizing === 'border-box') {
          minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
        result.minHeight = minHeight + 'px';
      }
      if (maxRows !== null) {
        var maxHeight = singleRowHeight * maxRows;
        if (boxSizing === 'border-box') {
          maxHeight = maxHeight + paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
      }
      result.height = height + 'px';
      hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
      hiddenTextarea = null;
      return result;
    }
    ;
    // EXTERNAL MODULE: external "element-ui/lib/utils/merge"
    var merge_ = __nested_webpack_require_7828__(9);
    var merge_default = /*#__PURE__*/__nested_webpack_require_7828__.n(merge_);

    // EXTERNAL MODULE: external "element-ui/lib/utils/shared"
    var shared_ = __nested_webpack_require_7828__(21);

    // CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */
    var inputvue_type_script_lang_js_ = {
      name: 'ElInput',
      componentName: 'ElInput',
      mixins: [emitter_default.a, migrating_default.a],
      inheritAttrs: false,
      inject: {
        elForm: {
          "default": ''
        },
        elFormItem: {
          "default": ''
        }
      },
      data: function data() {
        return {
          textareaCalcStyle: {},
          hovering: false,
          focused: false,
          isComposing: false,
          passwordVisible: false
        };
      },
      props: {
        value: [String, Number],
        size: String,
        resize: String,
        form: String,
        disabled: Boolean,
        readonly: Boolean,
        type: {
          type: String,
          "default": 'text'
        },
        autosize: {
          type: [Boolean, Object],
          "default": false
        },
        autocomplete: {
          type: String,
          "default": 'off'
        },
        /** @Deprecated in next major version */
        autoComplete: {
          type: String,
          validator: function validator(val) {
             false && 0;
            return true;
          }
        },
        validateEvent: {
          type: Boolean,
          "default": true
        },
        suffixIcon: String,
        prefixIcon: String,
        label: String,
        clearable: {
          type: Boolean,
          "default": false
        },
        showPassword: {
          type: Boolean,
          "default": false
        },
        showWordLimit: {
          type: Boolean,
          "default": false
        },
        tabindex: String
      },
      computed: {
        _elFormItemSize: function _elFormItemSize() {
          return (this.elFormItem || {}).elFormItemSize;
        },
        validateState: function validateState() {
          return this.elFormItem ? this.elFormItem.validateState : '';
        },
        needStatusIcon: function needStatusIcon() {
          return this.elForm ? this.elForm.statusIcon : false;
        },
        validateIcon: function validateIcon() {
          return {
            validating: 'el-icon-loading',
            success: 'el-icon-circle-check',
            error: 'el-icon-circle-close'
          }[this.validateState];
        },
        textareaStyle: function textareaStyle() {
          return merge_default()({}, this.textareaCalcStyle, {
            resize: this.resize
          });
        },
        inputSize: function inputSize() {
          return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        inputDisabled: function inputDisabled() {
          return this.disabled || (this.elForm || {}).disabled;
        },
        nativeInputValue: function nativeInputValue() {
          return this.value === null || this.value === undefined ? '' : String(this.value);
        },
        showClear: function showClear() {
          return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
        },
        showPwdVisible: function showPwdVisible() {
          return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
        },
        isWordLimitVisible: function isWordLimitVisible() {
          return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
        },
        upperLimit: function upperLimit() {
          return this.$attrs.maxlength;
        },
        textLength: function textLength() {
          if (typeof this.value === 'number') {
            return String(this.value).length;
          }
          return (this.value || '').length;
        },
        inputExceed: function inputExceed() {
          // show exceed style if length of initial value greater then maxlength
          return this.isWordLimitVisible && this.textLength > this.upperLimit;
        }
      },
      watch: {
        value: function value(val) {
          this.$nextTick(this.resizeTextarea);
          if (this.validateEvent) {
            this.dispatch('ElFormItem', 'el.form.change', [val]);
          }
        },
        // native input value is set explicitly
        // do not use v-model / :value in template
        // see: https://github.com/ElemeFE/element/issues/14521
        nativeInputValue: function nativeInputValue() {
          this.setNativeInputValue();
        },
        // when change between <input> and <textarea>,
        // update DOM dependent value and styles
        // https://github.com/ElemeFE/element/issues/14857
        type: function type() {
          var _this = this;
          this.$nextTick(function () {
            _this.setNativeInputValue();
            _this.resizeTextarea();
            _this.updateIconOffset();
          });
        }
      },
      methods: {
        focus: function focus() {
          this.getInput().focus();
        },
        blur: function blur() {
          this.getInput().blur();
        },
        getMigratingConfig: function getMigratingConfig() {
          return {
            props: {
              'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
              'on-icon-click': 'on-icon-click is removed.'
            },
            events: {
              'click': 'click is removed.'
            }
          };
        },
        handleBlur: function handleBlur(event) {
          this.focused = false;
          this.$emit('blur', event);
          if (this.validateEvent) {
            this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
          }
        },
        select: function select() {
          this.getInput().select();
        },
        resizeTextarea: function resizeTextarea() {
          if (this.$isServer) return;
          var autosize = this.autosize,
            type = this.type;
          if (type !== 'textarea') return;
          if (!autosize) {
            this.textareaCalcStyle = {
              minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
            };
            return;
          }
          var minRows = autosize.minRows;
          var maxRows = autosize.maxRows;
          this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
        },
        setNativeInputValue: function setNativeInputValue() {
          var input = this.getInput();
          if (!input) return;
          if (input.value === this.nativeInputValue) return;
          input.value = this.nativeInputValue;
        },
        handleFocus: function handleFocus(event) {
          this.focused = true;
          this.$emit('focus', event);
        },
        handleCompositionStart: function handleCompositionStart(event) {
          this.$emit('compositionstart', event);
          this.isComposing = true;
        },
        handleCompositionUpdate: function handleCompositionUpdate(event) {
          this.$emit('compositionupdate', event);
          var text = event.target.value;
          var lastCharacter = text[text.length - 1] || '';
          this.isComposing = !Object(shared_["isKorean"])(lastCharacter);
        },
        handleCompositionEnd: function handleCompositionEnd(event) {
          this.$emit('compositionend', event);
          if (this.isComposing) {
            this.isComposing = false;
            this.handleInput(event);
          }
        },
        handleInput: function handleInput(event) {
          // should not emit input during composition
          // see: https://github.com/ElemeFE/element/issues/10516
          if (this.isComposing) return;

          // hack for https://github.com/ElemeFE/element/issues/8548
          // should remove the following line when we don't support IE
          if (event.target.value === this.nativeInputValue) return;
          this.$emit('input', event.target.value);

          // ensure native input value is controlled
          // see: https://github.com/ElemeFE/element/issues/12850
          this.$nextTick(this.setNativeInputValue);
        },
        handleChange: function handleChange(event) {
          this.$emit('change', event.target.value);
        },
        calcIconOffset: function calcIconOffset(place) {
          var elList = [].slice.call(this.$el.querySelectorAll('.el-input__' + place) || []);
          if (!elList.length) return;
          var el = null;
          for (var i = 0; i < elList.length; i++) {
            if (elList[i].parentNode === this.$el) {
              el = elList[i];
              break;
            }
          }
          if (!el) return;
          var pendantMap = {
            suffix: 'append',
            prefix: 'prepend'
          };
          var pendant = pendantMap[place];
          if (this.$slots[pendant]) {
            el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)';
          } else {
            el.removeAttribute('style');
          }
        },
        updateIconOffset: function updateIconOffset() {
          this.calcIconOffset('prefix');
          this.calcIconOffset('suffix');
        },
        clear: function clear() {
          this.$emit('input', '');
          this.$emit('change', '');
          this.$emit('clear');
        },
        handlePasswordVisible: function handlePasswordVisible() {
          var _this2 = this;
          this.passwordVisible = !this.passwordVisible;
          this.$nextTick(function () {
            _this2.focus();
          });
        },
        getInput: function getInput() {
          return this.$refs.input || this.$refs.textarea;
        },
        getSuffixVisible: function getSuffixVisible() {
          return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
        }
      },
      created: function created() {
        this.$on('inputSelect', this.select);
      },
      mounted: function mounted() {
        this.setNativeInputValue();
        this.resizeTextarea();
        this.updateIconOffset();
      },
      updated: function updated() {
        this.$nextTick(this.updateIconOffset);
      }
    };
    // CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
    /* harmony default export */
    var src_inputvue_type_script_lang_js_ = inputvue_type_script_lang_js_;
    // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    var componentNormalizer = __nested_webpack_require_7828__(0);

    // CONCATENATED MODULE: ./packages/input/src/input.vue

    /* normalize component */

    var component = Object(componentNormalizer["a" /* default */])(src_inputvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

    /* hot reload */
    if (false) // removed by dead control flow
{ var api; }
    component.options.__file = "packages/input/src/input.vue";
    /* harmony default export */
    var input = component.exports;
    // CONCATENATED MODULE: ./packages/input/index.js

    /* istanbul ignore next */
    input.install = function (Vue) {
      Vue.component(input.name, input);
    };

    /* harmony default export */
    var packages_input = __nested_webpack_exports__["default"] = input;

    /***/
  }),
  /***/9: ( /***/function _(module, exports) {
    module.exports = __webpack_require__(8589);

    /***/
  })

  /******/
});

/***/ }),

/***/ 5779:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.inline = exports.block = void 0;
var _helpers = __webpack_require__(9105);
/**
 * Block-Level Grammar
 */
var block = exports.block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: _helpers.noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = (0, _helpers.edit)(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = (0, _helpers.edit)(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = (0, _helpers.edit)(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = (0, _helpers.edit)(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = (0, _helpers.edit)(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = (0, _helpers.edit)(block.blockquote).replace('paragraph', block.paragraph).getRegex();

/**
 * Normal Block Grammar
 */

block.normal = (0, _helpers.merge)({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = (0, _helpers.merge)({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});
block.gfm.table = (0, _helpers.edit)(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = (0, _helpers.edit)(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = (0, _helpers.merge)({}, block.normal, {
  html: (0, _helpers.edit)('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: _helpers.noopTest,
  // fences not supported
  paragraph: (0, _helpers.edit)(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});

/**
 * Inline-Level Grammar
 */
var inline = exports.inline = {
  owo: /^:(\S*):/,
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: _helpers.noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //        () Skip orphan delim inside strong    (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: _helpers.noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`:*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = (0, _helpers.edit)(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = (0, _helpers.edit)(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = (0, _helpers.edit)(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = (0, _helpers.edit)(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = (0, _helpers.edit)(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = (0, _helpers.edit)(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = (0, _helpers.edit)(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = (0, _helpers.edit)(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = (0, _helpers.edit)(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = (0, _helpers.edit)(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = (0, _helpers.edit)(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = (0, _helpers.merge)({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = (0, _helpers.merge)({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: (0, _helpers.edit)(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: (0, _helpers.edit)(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = (0, _helpers.merge)({}, inline.normal, {
  escape: (0, _helpers.edit)(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`:*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = (0, _helpers.edit)(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = (0, _helpers.merge)({}, inline.gfm, {
  br: (0, _helpers.edit)(inline.br).replace('{2,}', '*').getRegex(),
  text: (0, _helpers.edit)(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});

/***/ }),

/***/ 5838:
/***/ (function(module) {

"use strict";


function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5878:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setLanguage = exports["default"] = void 0;
var _i18n = _interopRequireDefault(__webpack_require__(7564));
// ISO Language Code Table http://www.lingoes.net/en/translator/langcode.htm
// RSS Language Code Table https://www.rssboard.org/rss-language-codes

var langs = {
  zh: 0,
  'zh-cn': 0,
  'zh-hk': 1,
  'zh-tw': 2,
  'en-us': 3,
  'en-gb': 3,
  en: 3,
  uz: 4,
  'uz-uz': 4,
  ja: 5,
  'ja-jp': 5,
  ko: 6,
  'ko-kr': 6
};
var defaultLanguage = 'zh-cn';
var twikooLangOption = '';
var setLanguage = exports.setLanguage = function setLanguage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (options.lang && options.lang.toLowerCase() in langs) {
    twikooLangOption = options.lang;
  }
};
var translate = function translate(key, language) {
  // 优先级: translate 入参 > twikoo.init 入参 > 浏览器语言设置 > 默认语言
  var lang = (language || twikooLangOption || navigator.language).toLowerCase();
  var value;
  if (lang && langs[lang]) {
    value = _i18n["default"][key][langs[lang]];
  } else {
    value = _i18n["default"][key][langs[defaultLanguage]];
  }
  return value || '';
};
var _default = exports["default"] = translate;

/***/ }),

/***/ 5897:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-avatar",
    "class": {
      'tk-clickable': !!_vm.link,
      'tk-has-avatar': !!_vm.avatarInner
    },
    on: {
      "click": _vm.onClick
    }
  }, [!_vm.avatarInner ? _c('div', {
    staticClass: "tk-avatar-img",
    domProps: {
      "innerHTML": _vm._s(_vm.iconUser)
    }
  }) : _vm._e(), _vm._v(" "), _vm.avatarInner ? _c('img', {
    staticClass: "tk-avatar-img",
    attrs: {
      "src": _vm.avatarInner,
      "alt": ""
    }
  }) : _vm._e()]);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 5910:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z\"></path></svg>"

/***/ }),

/***/ 5956:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
exports["default"] = {
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};

/***/ }),

/***/ 6200:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(477);
var _typeof3 = _interopRequireDefault2(__webpack_require__(9367));
exports.__esModule = true;
exports.isDefined = exports.isUndefined = exports.isFunction = undefined;
var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
};
exports.isString = isString;
exports.isObject = isObject;
exports.isHtmlElement = isHtmlElement;
var _vue = __webpack_require__(4478);
var _vue2 = _interopRequireDefault(_vue);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

/**
 *  - Inspired:
 *    https://github.com/jashkenas/underscore/blob/master/modules/isFunction.js
 */
var isFunction = function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};
if ( true && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) !== 'object' && (_vue2["default"].prototype.$isServer || typeof document.childNodes !== 'function')) {
  exports.isFunction = isFunction = function isFunction(obj) {
    return typeof obj === 'function' || false;
  };
}
exports.isFunction = isFunction;
var isUndefined = exports.isUndefined = function isUndefined(val) {
  return val === void 0;
};
var isDefined = exports.isDefined = function isDefined(val) {
  return val !== undefined && val !== null;
};

/***/ }),

/***/ 6359:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z\"></path></svg>"

/***/ }),

/***/ 6370:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z\"></path></svg>"

/***/ }),

/***/ 6412:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z\"></path></svg>"

/***/ }),

/***/ 6431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkPaginationvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkPagination; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkPagination.vue?vue&type=template&id=54ee568d
var TkPaginationvue_type_template_id_54ee568d = __webpack_require__(8675);
;// ./src/client/view/components/TkPagination.vue?vue&type=template&id=54ee568d

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkPagination.vue?vue&type=script&lang=js
var TkPaginationvue_type_script_lang_js = __webpack_require__(9171);
;// ./src/client/view/components/TkPagination.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkPaginationvue_type_script_lang_js = (TkPaginationvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkPagination.vue?vue&type=style&index=0&id=54ee568d&prod&lang=css
var TkPaginationvue_type_style_index_0_id_54ee568d_prod_lang_css = __webpack_require__(292);
;// ./src/client/view/components/TkPagination.vue?vue&type=style&index=0&id=54ee568d&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkPagination.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkPaginationvue_type_script_lang_js,
  TkPaginationvue_type_template_id_54ee568d/* render */.XX,
  TkPaginationvue_type_template_id_54ee568d/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkPagination = (component.exports);

/***/ }),

/***/ 6530:
/***/ (function(module) {

"use strict";


function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */


var _interopRequireDefault = __webpack_require__(477);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
var t = Object.freeze({}),
  e = Array.isArray;
function n(t) {
  return null == t;
}
function o(t) {
  return null != t;
}
function r(t) {
  return !0 === t;
}
function s(t) {
  return "string" == typeof t || "number" == typeof t || "symbol" == (0, _typeof2["default"])(t) || "boolean" == typeof t;
}
function i(t) {
  return "function" == typeof t;
}
function c(t) {
  return null !== t && "object" == (0, _typeof2["default"])(t);
}
var a = Object.prototype.toString;
function l(t) {
  return "[object Object]" === a.call(t);
}
function u(t) {
  var e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t);
}
function f(t) {
  return o(t) && "function" == typeof t.then && "function" == typeof t["catch"];
}
function d(t) {
  return null == t ? "" : Array.isArray(t) || l(t) && t.toString === a ? JSON.stringify(t, p, 2) : String(t);
}
function p(t, e) {
  return e && e.__v_isRef ? e.value : e;
}
function h(t) {
  var e = parseFloat(t);
  return isNaN(e) ? t : e;
}
function m(t, e) {
  var n = Object.create(null),
    o = t.split(",");
  for (var _t2 = 0; _t2 < o.length; _t2++) n[o[_t2]] = !0;
  return e ? function (t) {
    return n[t.toLowerCase()];
  } : function (t) {
    return n[t];
  };
}
var _ = m("key,ref,slot,slot-scope,is");
function v(t, e) {
  var n = t.length;
  if (n) {
    if (e === t[n - 1]) return void (t.length = n - 1);
    var _o2 = t.indexOf(e);
    if (_o2 > -1) return t.splice(_o2, 1);
  }
}
var y = Object.prototype.hasOwnProperty;
function g(t, e) {
  return y.call(t, e);
}
function b(t) {
  var e = Object.create(null);
  return function (n) {
    return e[n] || (e[n] = t(n));
  };
}
var $ = /-(\w)/g,
  w = b(function (t) {
    return t.replace($, function (t, e) {
      return e ? e.toUpperCase() : "";
    });
  }),
  C = b(function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }),
  x = /\B([A-Z])/g,
  O = b(function (t) {
    return t.replace(x, "-$1").toLowerCase();
  });
var k = Function.prototype.bind ? function (t, e) {
  return t.bind(e);
} : function (t, e) {
  function n(n) {
    var o = arguments.length;
    return o ? o > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
  }
  return n._length = t.length, n;
};
function S(t, e) {
  e = e || 0;
  var n = t.length - e;
  var o = new Array(n);
  for (; n--;) o[n] = t[n + e];
  return o;
}
function j(t, e) {
  for (var _n2 in e) t[_n2] = e[_n2];
  return t;
}
function A(t) {
  var e = {};
  for (var _n3 = 0; _n3 < t.length; _n3++) t[_n3] && j(e, t[_n3]);
  return e;
}
function T(t, e, n) {}
var E = function E(t, e, n) {
    return !1;
  },
  P = function P(t) {
    return t;
  };
function I(t, e) {
  if (t === e) return !0;
  var n = c(t),
    o = c(e);
  if (!n || !o) return !n && !o && String(t) === String(e);
  try {
    var _n4 = Array.isArray(t),
      _o3 = Array.isArray(e);
    if (_n4 && _o3) return t.length === e.length && t.every(function (t, n) {
      return I(t, e[n]);
    });
    if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
    if (_n4 || _o3) return !1;
    {
      var _n5 = Object.keys(t),
        _o4 = Object.keys(e);
      return _n5.length === _o4.length && _n5.every(function (n) {
        return I(t[n], e[n]);
      });
    }
  } catch (t) {
    return !1;
  }
}
function D(t, e) {
  for (var _n6 = 0; _n6 < t.length; _n6++) if (I(t[_n6], e)) return _n6;
  return -1;
}
function N(t) {
  var e = !1;
  return function () {
    e || (e = !0, t.apply(this, arguments));
  };
}
function M(t, e) {
  return t === e ? 0 === t && 1 / t != 1 / e : t == t || e == e;
}
var L = "data-server-rendered",
  R = ["component", "directive", "filter"],
  F = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"];
var U = {
  optionMergeStrategies: Object.create(null),
  silent: !1,
  productionTip: !1,
  devtools: !1,
  performance: !1,
  errorHandler: null,
  warnHandler: null,
  ignoredElements: [],
  keyCodes: Object.create(null),
  isReservedTag: E,
  isReservedAttr: E,
  isUnknownElement: E,
  getTagNamespace: T,
  parsePlatformTagName: P,
  mustUseProp: E,
  async: !0,
  _lifecycleHooks: F
};
function B(t) {
  var e = (t + "").charCodeAt(0);
  return 36 === e || 95 === e;
}
function V(t, e, n, o) {
  Object.defineProperty(t, e, {
    value: n,
    enumerable: !!o,
    writable: !0,
    configurable: !0
  });
}
var z = new RegExp("[^".concat(/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source, ".$_\\d]"));
var H = ("__proto__" in {}),
  W = "undefined" != typeof window,
  K = W && window.navigator.userAgent.toLowerCase(),
  q = K && /msie|trident/.test(K),
  G = K && K.indexOf("msie 9.0") > 0,
  Z = K && K.indexOf("edge/") > 0;
K && K.indexOf("android");
var J = K && /iphone|ipad|ipod|ios/.test(K);
K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K);
var X = K && K.match(/firefox\/(\d+)/),
  Q = {}.watch;
var Y,
  tt = !1;
if (W) try {
  var _t3 = {};
  Object.defineProperty(_t3, "passive", {
    get: function get() {
      tt = !0;
    }
  }), window.addEventListener("test-passive", null, _t3);
} catch (t) {}
var et = function et() {
    return void 0 === Y && (Y = !W && "undefined" != typeof __webpack_require__.g && __webpack_require__.g.process && "server" === __webpack_require__.g.process.env.VUE_ENV), Y;
  },
  nt = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function ot(t) {
  return "function" == typeof t && /native code/.test(t.toString());
}
var rt = "undefined" != typeof Symbol && ot(Symbol) && "undefined" != typeof Reflect && ot(Reflect.ownKeys);
var st;
st = "undefined" != typeof Set && ot(Set) ? Set : /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2["default"])(this, _class);
    this.set = Object.create(null);
  }
  (0, _createClass2["default"])(_class, [{
    key: "has",
    value: function has(t) {
      return !0 === this.set[t];
    }
  }, {
    key: "add",
    value: function add(t) {
      this.set[t] = !0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.set = Object.create(null);
    }
  }]);
  return _class;
}();
var it = null;
function ct() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  t || it && it._scope.off(), it = t, t && t._scope.on();
}
var at = /*#__PURE__*/function () {
  function at(t, e, n, o, r, s, i, c) {
    (0, _classCallCheck2["default"])(this, at);
    this.tag = t, this.data = e, this.children = n, this.text = o, this.elm = r, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = i, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
  }
  (0, _createClass2["default"])(at, [{
    key: "child",
    get: function get() {
      return this.componentInstance;
    }
  }]);
  return at;
}();
var lt = function lt() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var e = new at();
  return e.text = t, e.isComment = !0, e;
};
function ut(t) {
  return new at(void 0, void 0, void 0, String(t));
}
function ft(t) {
  var e = new at(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
  return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
}
var dt = 0;
var pt = [],
  ht = function ht() {
    for (var _t4 = 0; _t4 < pt.length; _t4++) {
      var _e2 = pt[_t4];
      _e2.subs = _e2.subs.filter(function (t) {
        return t;
      }), _e2._pending = !1;
    }
    pt.length = 0;
  };
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2["default"])(this, mt);
    this._pending = !1, this.id = dt++, this.subs = [];
  }
  (0, _createClass2["default"])(mt, [{
    key: "addSub",
    value: function addSub(t) {
      this.subs.push(t);
    }
  }, {
    key: "removeSub",
    value: function removeSub(t) {
      this.subs[this.subs.indexOf(t)] = null, this._pending || (this._pending = !0, pt.push(this));
    }
  }, {
    key: "depend",
    value: function depend(t) {
      mt.target && mt.target.addDep(this);
    }
  }, {
    key: "notify",
    value: function notify(t) {
      var e = this.subs.filter(function (t) {
        return t;
      });
      for (var _t5 = 0, _n7 = e.length; _t5 < _n7; _t5++) {
        e[_t5].update();
      }
    }
  }]);
  return mt;
}();
mt.target = null;
var _t = [];
function vt(t) {
  _t.push(t), mt.target = t;
}
function yt() {
  _t.pop(), mt.target = _t[_t.length - 1];
}
var gt = Array.prototype,
  bt = Object.create(gt);
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
  var e = gt[t];
  V(bt, t, function () {
    for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
      n[_key] = arguments[_key];
    }
    var o = e.apply(this, n),
      r = this.__ob__;
    var s;
    switch (t) {
      case "push":
      case "unshift":
        s = n;
        break;
      case "splice":
        s = n.slice(2);
    }
    return s && r.observeArray(s), r.dep.notify(), o;
  });
});
var $t = Object.getOwnPropertyNames(bt),
  wt = {};
var Ct = !0;
function xt(t) {
  Ct = t;
}
var Ot = {
  notify: T,
  depend: T,
  addSub: T,
  removeSub: T
};
var kt = /*#__PURE__*/function () {
  function kt(t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    (0, _classCallCheck2["default"])(this, kt);
    if (this.value = t, this.shallow = n, this.mock = o, this.dep = o ? Ot : new mt(), this.vmCount = 0, V(t, "__ob__", this), e(t)) {
      if (!o) if (H) t.__proto__ = bt;else for (var _e3 = 0, _n8 = $t.length; _e3 < _n8; _e3++) {
        var _n9 = $t[_e3];
        V(t, _n9, bt[_n9]);
      }
      n || this.observeArray(t);
    } else {
      var _e4 = Object.keys(t);
      for (var _r2 = 0; _r2 < _e4.length; _r2++) {
        jt(t, _e4[_r2], wt, void 0, n, o);
      }
    }
  }
  (0, _createClass2["default"])(kt, [{
    key: "observeArray",
    value: function observeArray(t) {
      for (var _e5 = 0, _n10 = t.length; _e5 < _n10; _e5++) St(t[_e5], !1, this.mock);
    }
  }]);
  return kt;
}();
function St(t, n, o) {
  return t && g(t, "__ob__") && t.__ob__ instanceof kt ? t.__ob__ : !Ct || !o && et() || !e(t) && !l(t) || !Object.isExtensible(t) || t.__v_skip || Rt(t) || t instanceof at ? void 0 : new kt(t, n, o);
}
function jt(t, n, o, r, s, i) {
  var c = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
  var a = new mt(),
    l = Object.getOwnPropertyDescriptor(t, n);
  if (l && !1 === l.configurable) return;
  var u = l && l.get,
    f = l && l.set;
  u && !f || o !== wt && 2 !== arguments.length || (o = t[n]);
  var d = s ? o && o.__ob__ : St(o, !1, i);
  return Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function get() {
      var n = u ? u.call(t) : o;
      return mt.target && (a.depend(), d && (d.dep.depend(), e(n) && Et(n))), Rt(n) && !s ? n.value : n;
    },
    set: function set(e) {
      var n = u ? u.call(t) : o;
      if (M(n, e)) {
        if (f) f.call(t, e);else {
          if (u) return;
          if (!s && Rt(n) && !Rt(e)) return void (n.value = e);
          o = e;
        }
        d = s ? e && e.__ob__ : St(e, !1, i), a.notify();
      }
    }
  }), a;
}
function At(t, n, o) {
  if (Mt(t)) return;
  var r = t.__ob__;
  return e(t) && u(n) ? (t.length = Math.max(t.length, n), t.splice(n, 1, o), r && !r.shallow && r.mock && St(o, !1, !0), o) : n in t && !(n in Object.prototype) ? (t[n] = o, o) : t._isVue || r && r.vmCount ? o : r ? (jt(r.value, n, o, void 0, r.shallow, r.mock), r.dep.notify(), o) : (t[n] = o, o);
}
function Tt(t, n) {
  if (e(t) && u(n)) return void t.splice(n, 1);
  var o = t.__ob__;
  t._isVue || o && o.vmCount || Mt(t) || g(t, n) && (delete t[n], o && o.dep.notify());
}
function Et(t) {
  for (var _n11, _o5 = 0, _r3 = t.length; _o5 < _r3; _o5++) _n11 = t[_o5], _n11 && _n11.__ob__ && _n11.__ob__.dep.depend(), e(_n11) && Et(_n11);
}
function Pt(t) {
  return It(t, !0), V(t, "__v_isShallow", !0), t;
}
function It(t, e) {
  Mt(t) || St(t, e, et());
}
function Dt(t) {
  return Mt(t) ? Dt(t.__v_raw) : !(!t || !t.__ob__);
}
function Nt(t) {
  return !(!t || !t.__v_isShallow);
}
function Mt(t) {
  return !(!t || !t.__v_isReadonly);
}
var Lt = "__v_isRef";
function Rt(t) {
  return !(!t || !0 !== t.__v_isRef);
}
function Ft(t, e) {
  if (Rt(t)) return t;
  var n = {};
  return V(n, Lt, !0), V(n, "__v_isShallow", e), V(n, "dep", jt(n, "value", t, null, e, et())), n;
}
function Ut(t, e, n) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function get() {
      var t = e[n];
      if (Rt(t)) return t.value;
      {
        var _e6 = t && t.__ob__;
        return _e6 && _e6.dep.depend(), t;
      }
    },
    set: function set(t) {
      var o = e[n];
      Rt(o) && !Rt(t) ? o.value = t : e[n] = t;
    }
  });
}
function Bt(t, e, n) {
  var o = t[e];
  if (Rt(o)) return o;
  var r = {
    get value() {
      var o = t[e];
      return void 0 === o ? n : o;
    },
    set value(n) {
      t[e] = n;
    }
  };
  return V(r, Lt, !0), r;
}
var Vt = "__v_rawToReadonly",
  zt = "__v_rawToShallowReadonly";
function Ht(t) {
  return Wt(t, !1);
}
function Wt(t, e) {
  if (!l(t)) return t;
  if (Mt(t)) return t;
  var n = e ? zt : Vt,
    o = t[n];
  if (o) return o;
  var r = Object.create(Object.getPrototypeOf(t));
  V(t, n, r), V(r, "__v_isReadonly", !0), V(r, "__v_raw", t), Rt(t) && V(r, Lt, !0), (e || Nt(t)) && V(r, "__v_isShallow", !0);
  var s = Object.keys(t);
  for (var _n12 = 0; _n12 < s.length; _n12++) Kt(r, t, s[_n12], e);
  return r;
}
function Kt(t, e, n, o) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function get() {
      var t = e[n];
      return o || !l(t) ? t : Ht(t);
    },
    set: function set() {}
  });
}
var qt = "watcher",
  Gt = "".concat(qt, " callback"),
  Zt = "".concat(qt, " getter"),
  Jt = "".concat(qt, " cleanup");
function Xt(t, e) {
  return Yt(t, null, {
    flush: "post"
  });
}
var Qt = {};
function Yt(n, o) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t,
    r = _ref.immediate,
    s = _ref.deep,
    _ref$flush = _ref.flush,
    c = _ref$flush === void 0 ? "pre" : _ref$flush,
    a = _ref.onTrack,
    l = _ref.onTrigger;
  var u = it,
    f = function f(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var o = Ke(t, null, n, u, e);
      return s && o && o.__ob__ && o.__ob__.dep.depend(), o;
    };
  var d,
    p,
    h = !1,
    m = !1;
  if (Rt(n) ? (d = function d() {
    return n.value;
  }, h = Nt(n)) : Dt(n) ? (d = function d() {
    return n.__ob__.dep.depend(), n;
  }, s = !0) : e(n) ? (m = !0, h = n.some(function (t) {
    return Dt(t) || Nt(t);
  }), d = function d() {
    return n.map(function (t) {
      return Rt(t) ? t.value : Dt(t) ? (t.__ob__.dep.depend(), yn(t)) : i(t) ? f(t, Zt) : void 0;
    });
  }) : d = i(n) ? o ? function () {
    return f(n, Zt);
  } : function () {
    if (!u || !u._isDestroyed) return p && p(), f(n, qt, [_]);
  } : T, o && s) {
    var _t6 = d;
    d = function d() {
      return yn(_t6());
    };
  }
  var _ = function _(t) {
    p = v.onStop = function () {
      f(t, Jt);
    };
  };
  if (et()) return _ = T, o ? r && f(o, Gt, [d(), m ? [] : void 0, _]) : d(), T;
  var v = new wn(it, d, T, {
    lazy: !0
  });
  v.noRecurse = !o;
  var y = m ? [] : Qt;
  return v.run = function () {
    if (v.active) if (o) {
      var _t7 = v.get();
      (s || h || (m ? _t7.some(function (t, e) {
        return M(t, y[e]);
      }) : M(_t7, y))) && (p && p(), f(o, Gt, [_t7, y === Qt ? void 0 : y, _]), y = _t7);
    } else v.get();
  }, "sync" === c ? v.update = v.run : "post" === c ? (v.post = !0, v.update = function () {
    return zn(v);
  }) : v.update = function () {
    if (u && u === it && !u._isMounted) {
      var _t8 = u._preWatchers || (u._preWatchers = []);
      _t8.indexOf(v) < 0 && _t8.push(v);
    } else zn(v);
  }, o ? r ? v.run() : y = v.get() : "post" === c && u ? u.$once("hook:mounted", function () {
    return v.get();
  }) : v.get(), function () {
    v.teardown();
  };
}
var te;
var ee = /*#__PURE__*/function () {
  function ee() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    (0, _classCallCheck2["default"])(this, ee);
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = te, !t && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
  }
  (0, _createClass2["default"])(ee, [{
    key: "run",
    value: function run(t) {
      if (this.active) {
        var _e7 = te;
        try {
          return te = this, t();
        } finally {
          te = _e7;
        }
      }
    }
  }, {
    key: "on",
    value: function on() {
      te = this;
    }
  }, {
    key: "off",
    value: function off() {
      te = this.parent;
    }
  }, {
    key: "stop",
    value: function stop(t) {
      if (this.active) {
        var _e8, _n13;
        for (_e8 = 0, _n13 = this.effects.length; _e8 < _n13; _e8++) this.effects[_e8].teardown();
        for (_e8 = 0, _n13 = this.cleanups.length; _e8 < _n13; _e8++) this.cleanups[_e8]();
        if (this.scopes) for (_e8 = 0, _n13 = this.scopes.length; _e8 < _n13; _e8++) this.scopes[_e8].stop(!0);
        if (!this.detached && this.parent && !t) {
          var _t9 = this.parent.scopes.pop();
          _t9 && _t9 !== this && (this.parent.scopes[this.index] = _t9, _t9.index = this.index);
        }
        this.parent = void 0, this.active = !1;
      }
    }
  }]);
  return ee;
}();
function ne() {
  return te;
}
function oe(t) {
  var e = t._provided,
    n = t.$parent && t.$parent._provided;
  return n === e ? t._provided = Object.create(n) : e;
}
var re = b(function (t) {
  var e = "&" === t.charAt(0),
    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
    o = "!" === (t = n ? t.slice(1) : t).charAt(0);
  return {
    name: t = o ? t.slice(1) : t,
    once: n,
    capture: o,
    passive: e
  };
});
function se(t, n) {
  function o() {
    var t = o.fns;
    if (!e(t)) return Ke(t, null, arguments, n, "v-on handler");
    {
      var _e9 = t.slice();
      for (var _t10 = 0; _t10 < _e9.length; _t10++) Ke(_e9[_t10], null, arguments, n, "v-on handler");
    }
  }
  return o.fns = t, o;
}
function ie(t, e, o, s, i, c) {
  var a, l, u, f;
  for (a in t) l = t[a], u = e[a], f = re(a), n(l) || (n(u) ? (n(l.fns) && (l = t[a] = se(l, c)), r(f.once) && (l = t[a] = i(f.name, l, f.capture)), o(f.name, l, f.capture, f.passive, f.params)) : l !== u && (u.fns = l, t[a] = u));
  for (a in e) n(t[a]) && (f = re(a), s(f.name, e[a], f.capture));
}
function ce(t, e, s) {
  var i;
  t instanceof at && (t = t.data.hook || (t.data.hook = {}));
  var c = t[e];
  function a() {
    s.apply(this, arguments), v(i.fns, a);
  }
  n(c) ? i = se([a]) : o(c.fns) && r(c.merged) ? (i = c, i.fns.push(a)) : i = se([c, a]), i.merged = !0, t[e] = i;
}
function ae(t, e, n, r, s) {
  if (o(e)) {
    if (g(e, n)) return t[n] = e[n], s || delete e[n], !0;
    if (g(e, r)) return t[n] = e[r], s || delete e[r], !0;
  }
  return !1;
}
function le(t) {
  return s(t) ? [ut(t)] : e(t) ? fe(t) : void 0;
}
function ue(t) {
  return o(t) && o(t.text) && !1 === t.isComment;
}
function fe(t, i) {
  var c = [];
  var a, l, u, f;
  for (a = 0; a < t.length; a++) l = t[a], n(l) || "boolean" == typeof l || (u = c.length - 1, f = c[u], e(l) ? l.length > 0 && (l = fe(l, "".concat(i || "", "_").concat(a)), ue(l[0]) && ue(f) && (c[u] = ut(f.text + l[0].text), l.shift()), c.push.apply(c, l)) : s(l) ? ue(f) ? c[u] = ut(f.text + l) : "" !== l && c.push(ut(l)) : ue(l) && ue(f) ? c[u] = ut(f.text + l.text) : (r(t._isVList) && o(l.tag) && n(l.key) && o(i) && (l.key = "__vlist".concat(i, "_").concat(a, "__")), c.push(l)));
  return c;
}
function de(t, n) {
  var r,
    s,
    i,
    a,
    l = null;
  if (e(t) || "string" == typeof t) for (l = new Array(t.length), r = 0, s = t.length; r < s; r++) l[r] = n(t[r], r);else if ("number" == typeof t) for (l = new Array(t), r = 0; r < t; r++) l[r] = n(r + 1, r);else if (c(t)) if (rt && t[Symbol.iterator]) {
    l = [];
    var _e10 = t[Symbol.iterator]();
    var _o6 = _e10.next();
    for (; !_o6.done;) l.push(n(_o6.value, l.length)), _o6 = _e10.next();
  } else for (i = Object.keys(t), l = new Array(i.length), r = 0, s = i.length; r < s; r++) a = i[r], l[r] = n(t[a], a, r);
  return o(l) || (l = []), l._isVList = !0, l;
}
function pe(t, e, n, o) {
  var r = this.$scopedSlots[t];
  var s;
  r ? (n = n || {}, o && (n = j(j({}, o), n)), s = r(n) || (i(e) ? e() : e)) : s = this.$slots[t] || (i(e) ? e() : e);
  var c = n && n.slot;
  return c ? this.$createElement("template", {
    slot: c
  }, s) : s;
}
function he(t) {
  return co(this.$options, "filters", t) || P;
}
function me(t, n) {
  return e(t) ? -1 === t.indexOf(n) : t !== n;
}
function _e(t, e, n, o, r) {
  var s = U.keyCodes[e] || n;
  return r && o && !U.keyCodes[e] ? me(r, o) : s ? me(s, t) : o ? O(o) !== e : void 0 === t;
}
function ve(t, n, o, r, s) {
  if (o) if (c(o)) {
    var _i;
    e(o) && (o = A(o));
    var _loop = function _loop(_e11) {
      if ("class" === _e11 || "style" === _e11 || _(_e11)) _i = t;else {
        var _o7 = t.attrs && t.attrs.type;
        _i = r || U.mustUseProp(n, _o7, _e11) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
      }
      var c = w(_e11),
        a = O(_e11);
      if (!(c in _i) && !(a in _i) && (_i[_e11] = o[_e11], s)) {
        (t.on || (t.on = {}))["update:".concat(_e11)] = function (t) {
          o[_e11] = t;
        };
      }
    };
    for (var _e11 in o) {
      _loop(_e11);
    }
  } else ;
  return t;
}
function ye(t, e) {
  var n = this._staticTrees || (this._staticTrees = []);
  var o = n[t];
  return o && !e || (o = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, this._c, this), be(o, "__static__".concat(t), !1)), o;
}
function ge(t, e, n) {
  return be(t, "__once__".concat(e).concat(n ? "_".concat(n) : ""), !0), t;
}
function be(t, n, o) {
  if (e(t)) for (var _e12 = 0; _e12 < t.length; _e12++) t[_e12] && "string" != typeof t[_e12] && $e(t[_e12], "".concat(n, "_").concat(_e12), o);else $e(t, n, o);
}
function $e(t, e, n) {
  t.isStatic = !0, t.key = e, t.isOnce = n;
}
function we(t, e) {
  if (e) if (l(e)) {
    var _n14 = t.on = t.on ? j({}, t.on) : {};
    for (var _t11 in e) {
      var _o8 = _n14[_t11],
        _r4 = e[_t11];
      _n14[_t11] = _o8 ? [].concat(_o8, _r4) : _r4;
    }
  } else ;
  return t;
}
function Ce(t, n, o, r) {
  n = n || {
    $stable: !o
  };
  for (var _r5 = 0; _r5 < t.length; _r5++) {
    var _s2 = t[_r5];
    e(_s2) ? Ce(_s2, n, o) : _s2 && (_s2.proxy && (_s2.fn.proxy = !0), n[_s2.key] = _s2.fn);
  }
  return r && (n.$key = r), n;
}
function xe(t, e) {
  for (var _n15 = 0; _n15 < e.length; _n15 += 2) {
    var _o9 = e[_n15];
    "string" == typeof _o9 && _o9 && (t[e[_n15]] = e[_n15 + 1]);
  }
  return t;
}
function Oe(t, e) {
  return "string" == typeof t ? e + t : t;
}
function ke(t) {
  t._o = ge, t._n = h, t._s = d, t._l = de, t._t = pe, t._q = I, t._i = D, t._m = ye, t._f = he, t._k = _e, t._b = ve, t._v = ut, t._e = lt, t._u = Ce, t._g = we, t._d = xe, t._p = Oe;
}
function Se(t, e) {
  if (!t || !t.length) return {};
  var n = {};
  for (var _o10 = 0, _r6 = t.length; _o10 < _r6; _o10++) {
    var _r7 = t[_o10],
      _s3 = _r7.data;
    if (_s3 && _s3.attrs && _s3.attrs.slot && delete _s3.attrs.slot, _r7.context !== e && _r7.fnContext !== e || !_s3 || null == _s3.slot) (n["default"] || (n["default"] = [])).push(_r7);else {
      var _t12 = _s3.slot,
        _e13 = n[_t12] || (n[_t12] = []);
      "template" === _r7.tag ? _e13.push.apply(_e13, _r7.children || []) : _e13.push(_r7);
    }
  }
  for (var _t13 in n) n[_t13].every(je) && delete n[_t13];
  return n;
}
function je(t) {
  return t.isComment && !t.asyncFactory || " " === t.text;
}
function Ae(t) {
  return t.isComment && t.asyncFactory;
}
function Te(e, n, o, r) {
  var s;
  var i = Object.keys(o).length > 0,
    c = n ? !!n.$stable : !i,
    a = n && n.$key;
  if (n) {
    if (n._normalized) return n._normalized;
    if (c && r && r !== t && a === r.$key && !i && !r.$hasNormal) return r;
    s = {};
    for (var _t14 in n) n[_t14] && "$" !== _t14[0] && (s[_t14] = Ee(e, o, _t14, n[_t14]));
  } else s = {};
  for (var _t15 in o) _t15 in s || (s[_t15] = Pe(o, _t15));
  return n && Object.isExtensible(n) && (n._normalized = s), V(s, "$stable", c), V(s, "$key", a), V(s, "$hasNormal", i), s;
}
function Ee(t, n, o, r) {
  var s = function s() {
    var n = it;
    ct(t);
    var o = arguments.length ? r.apply(null, arguments) : r({});
    o = o && "object" == (0, _typeof2["default"])(o) && !e(o) ? [o] : le(o);
    var s = o && o[0];
    return ct(n), o && (!s || 1 === o.length && s.isComment && !Ae(s)) ? void 0 : o;
  };
  return r.proxy && Object.defineProperty(n, o, {
    get: s,
    enumerable: !0,
    configurable: !0
  }), s;
}
function Pe(t, e) {
  return function () {
    return t[e];
  };
}
function Ie(e) {
  return {
    get attrs() {
      if (!e._attrsProxy) {
        var _n16 = e._attrsProxy = {};
        V(_n16, "_v_attr_proxy", !0), De(_n16, e.$attrs, t, e, "$attrs");
      }
      return e._attrsProxy;
    },
    get listeners() {
      if (!e._listenersProxy) {
        De(e._listenersProxy = {}, e.$listeners, t, e, "$listeners");
      }
      return e._listenersProxy;
    },
    get slots() {
      return function (t) {
        t._slotsProxy || Me(t._slotsProxy = {}, t.$scopedSlots);
        return t._slotsProxy;
      }(e);
    },
    emit: k(e.$emit, e),
    expose: function expose(t) {
      t && Object.keys(t).forEach(function (n) {
        return Ut(e, t, n);
      });
    }
  };
}
function De(t, e, n, o, r) {
  var s = !1;
  for (var _i2 in e) _i2 in t ? e[_i2] !== n[_i2] && (s = !0) : (s = !0, Ne(t, _i2, o, r));
  for (var _n17 in t) _n17 in e || (s = !0, delete t[_n17]);
  return s;
}
function Ne(t, e, n, o) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: function get() {
      return n[o][e];
    }
  });
}
function Me(t, e) {
  for (var _n18 in e) t[_n18] = e[_n18];
  for (var _n19 in t) _n19 in e || delete t[_n19];
}
function Le() {
  var t = it;
  return t._setupContext || (t._setupContext = Ie(t));
}
var Re = null;
function Fe(t, e) {
  return (t.__esModule || rt && "Module" === t[Symbol.toStringTag]) && (t = t["default"]), c(t) ? e.extend(t) : t;
}
function Ue(t) {
  if (e(t)) for (var _e14 = 0; _e14 < t.length; _e14++) {
    var _n20 = t[_e14];
    if (o(_n20) && (o(_n20.componentOptions) || Ae(_n20))) return _n20;
  }
}
var Be = 1,
  Ve = 2;
function ze(t, n, a, l, u, f) {
  return (e(a) || s(a)) && (u = l, l = a, a = void 0), r(f) && (u = Ve), function (t, n, r, s, a) {
    if (o(r) && o(r.__ob__)) return lt();
    o(r) && o(r.is) && (n = r.is);
    if (!n) return lt();
    e(s) && i(s[0]) && ((r = r || {}).scopedSlots = {
      "default": s[0]
    }, s.length = 0);
    a === Ve ? s = le(s) : a === Be && (s = function (t) {
      for (var _n21 = 0; _n21 < t.length; _n21++) if (e(t[_n21])) return Array.prototype.concat.apply([], t);
      return t;
    }(s));
    var l, u;
    if ("string" == typeof n) {
      var _e15;
      u = t.$vnode && t.$vnode.ns || U.getTagNamespace(n), l = U.isReservedTag(n) ? new at(U.parsePlatformTagName(n), r, s, void 0, void 0, t) : r && r.pre || !o(_e15 = co(t.$options, "components", n)) ? new at(n, r, s, void 0, void 0, t) : Xn(_e15, r, t, s, n);
    } else l = Xn(n, r, t, s);
    return e(l) ? l : o(l) ? (o(u) && He(l, u), o(r) && function (t) {
      c(t.style) && yn(t.style);
      c(t["class"]) && yn(t["class"]);
    }(r), l) : lt();
  }(t, n, a, l, u);
}
function He(t, e, s) {
  if (t.ns = e, "foreignObject" === t.tag && (e = void 0, s = !0), o(t.children)) for (var _i3 = 0, _c = t.children.length; _i3 < _c; _i3++) {
    var _c2 = t.children[_i3];
    o(_c2.tag) && (n(_c2.ns) || r(s) && "svg" !== _c2.tag) && He(_c2, e, s);
  }
}
function We(t, e, n) {
  vt();
  try {
    if (e) {
      var _o11 = e;
      for (; _o11 = _o11.$parent;) {
        var _r8 = _o11.$options.errorCaptured;
        if (_r8) for (var _s4 = 0; _s4 < _r8.length; _s4++) try {
          if (!1 === _r8[_s4].call(_o11, t, e, n)) return;
        } catch (t) {
          qe(t, _o11, "errorCaptured hook");
        }
      }
    }
    qe(t, e, n);
  } finally {
    yt();
  }
}
function Ke(t, e, n, o, r) {
  var s;
  try {
    s = n ? t.apply(e, n) : t.call(e), s && !s._isVue && f(s) && !s._handled && (s["catch"](function (t) {
      return We(t, o, r + " (Promise/async)");
    }), s._handled = !0);
  } catch (t) {
    We(t, o, r);
  }
  return s;
}
function qe(t, e, n) {
  if (U.errorHandler) try {
    return U.errorHandler.call(null, t, e, n);
  } catch (e) {
    e !== t && Ge(e);
  }
  Ge(t);
}
function Ge(t, e, n) {
  if (!W || "undefined" == typeof console) throw t;
  console.error(t);
}
var Ze = !1;
var Je = [];
var Xe,
  Qe = !1;
function Ye() {
  Qe = !1;
  var t = Je.slice(0);
  Je.length = 0;
  for (var _e16 = 0; _e16 < t.length; _e16++) t[_e16]();
}
if ("undefined" != typeof Promise && ot(Promise)) {
  var _t16 = Promise.resolve();
  Xe = function Xe() {
    _t16.then(Ye), J && setTimeout(T);
  }, Ze = !0;
} else if (q || "undefined" == typeof MutationObserver || !ot(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Xe = "undefined" != typeof setImmediate && ot(setImmediate) ? function () {
  setImmediate(Ye);
} : function () {
  setTimeout(Ye, 0);
};else {
  var _t17 = 1;
  var _e17 = new MutationObserver(Ye),
    _n22 = document.createTextNode(String(_t17));
  _e17.observe(_n22, {
    characterData: !0
  }), Xe = function Xe() {
    _t17 = (_t17 + 1) % 2, _n22.data = String(_t17);
  }, Ze = !0;
}
function tn(t, e) {
  var n;
  if (Je.push(function () {
    if (t) try {
      t.call(e);
    } catch (t) {
      We(t, e, "nextTick");
    } else n && n(e);
  }), Qe || (Qe = !0, Xe()), !t && "undefined" != typeof Promise) return new Promise(function (t) {
    n = t;
  });
}
function en(t) {
  return function (e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : it;
    if (n) return function (t, e, n) {
      var o = t.$options;
      o[e] = oo(o[e], n);
    }(n, t, e);
  };
}
var nn = en("beforeMount"),
  on = en("mounted"),
  rn = en("beforeUpdate"),
  sn = en("updated"),
  cn = en("beforeDestroy"),
  an = en("destroyed"),
  ln = en("activated"),
  un = en("deactivated"),
  fn = en("serverPrefetch"),
  dn = en("renderTracked"),
  pn = en("renderTriggered"),
  hn = en("errorCaptured");
var mn = "2.7.16";
var _n = Object.freeze({
  __proto__: null,
  version: mn,
  defineComponent: function defineComponent(t) {
    return t;
  },
  ref: function ref(t) {
    return Ft(t, !1);
  },
  shallowRef: function shallowRef(t) {
    return Ft(t, !0);
  },
  isRef: Rt,
  toRef: Bt,
  toRefs: function toRefs(t) {
    var n = e(t) ? new Array(t.length) : {};
    for (var _e18 in t) n[_e18] = Bt(t, _e18);
    return n;
  },
  unref: function unref(t) {
    return Rt(t) ? t.value : t;
  },
  proxyRefs: function proxyRefs(t) {
    if (Dt(t)) return t;
    var e = {},
      n = Object.keys(t);
    for (var _o12 = 0; _o12 < n.length; _o12++) Ut(e, t, n[_o12]);
    return e;
  },
  customRef: function customRef(t) {
    var e = new mt(),
      _t18 = t(function () {
        e.depend();
      }, function () {
        e.notify();
      }),
      n = _t18.get,
      o = _t18.set,
      r = {
        get value() {
          return n();
        },
        set value(t) {
          o(t);
        }
      };
    return V(r, Lt, !0), r;
  },
  triggerRef: function triggerRef(t) {
    t.dep && t.dep.notify();
  },
  reactive: function reactive(t) {
    return It(t, !1), t;
  },
  isReactive: Dt,
  isReadonly: Mt,
  isShallow: Nt,
  isProxy: function isProxy(t) {
    return Dt(t) || Mt(t);
  },
  shallowReactive: Pt,
  markRaw: function markRaw(t) {
    return Object.isExtensible(t) && V(t, "__v_skip", !0), t;
  },
  toRaw: function t(e) {
    var n = e && e.__v_raw;
    return n ? t(n) : e;
  },
  readonly: Ht,
  shallowReadonly: function shallowReadonly(t) {
    return Wt(t, !0);
  },
  computed: function computed(t, e) {
    var n, o;
    var r = i(t);
    r ? (n = t, o = T) : (n = t.get, o = t.set);
    var s = et() ? null : new wn(it, n, T, {
        lazy: !0
      }),
      c = {
        effect: s,
        get value() {
          return s ? (s.dirty && s.evaluate(), mt.target && s.depend(), s.value) : n();
        },
        set value(t) {
          o(t);
        }
      };
    return V(c, Lt, !0), V(c, "__v_isReadonly", r), c;
  },
  watch: function watch(t, e, n) {
    return Yt(t, e, n);
  },
  watchEffect: function watchEffect(t, e) {
    return Yt(t, null, e);
  },
  watchPostEffect: Xt,
  watchSyncEffect: function watchSyncEffect(t, e) {
    return Yt(t, null, {
      flush: "sync"
    });
  },
  EffectScope: ee,
  effectScope: function effectScope(t) {
    return new ee(t);
  },
  onScopeDispose: function onScopeDispose(t) {
    te && te.cleanups.push(t);
  },
  getCurrentScope: ne,
  provide: function provide(t, e) {
    it && (oe(it)[t] = e);
  },
  inject: function inject(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var o = it;
    if (o) {
      var _r9 = o.$parent && o.$parent._provided;
      if (_r9 && t in _r9) return _r9[t];
      if (arguments.length > 1) return n && i(e) ? e.call(o) : e;
    }
  },
  h: function h(t, e, n) {
    return ze(it, t, e, n, 2, !0);
  },
  getCurrentInstance: function getCurrentInstance() {
    return it && {
      proxy: it
    };
  },
  useSlots: function useSlots() {
    return Le().slots;
  },
  useAttrs: function useAttrs() {
    return Le().attrs;
  },
  useListeners: function useListeners() {
    return Le().listeners;
  },
  mergeDefaults: function mergeDefaults(t, n) {
    var o = e(t) ? t.reduce(function (t, e) {
      return t[e] = {}, t;
    }, {}) : t;
    for (var _t19 in n) {
      var _r10 = o[_t19];
      _r10 ? e(_r10) || i(_r10) ? o[_t19] = {
        type: _r10,
        "default": n[_t19]
      } : _r10["default"] = n[_t19] : null === _r10 && (o[_t19] = {
        "default": n[_t19]
      });
    }
    return o;
  },
  nextTick: tn,
  set: At,
  del: Tt,
  useCssModule: function useCssModule() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "$style";
    {
      if (!it) return t;
      var _n23 = it[e];
      return _n23 || t;
    }
  },
  useCssVars: function useCssVars(t) {
    if (!W) return;
    var e = it;
    e && Xt(function () {
      var n = e.$el,
        o = t(e, e._setupProxy);
      if (n && 1 === n.nodeType) {
        var _t20 = n.style;
        for (var _e19 in o) _t20.setProperty("--".concat(_e19), o[_e19]);
      }
    });
  },
  defineAsyncComponent: function defineAsyncComponent(t) {
    i(t) && (t = {
      loader: t
    });
    var _t21 = t,
      e = _t21.loader,
      n = _t21.loadingComponent,
      o = _t21.errorComponent,
      _t21$delay = _t21.delay,
      r = _t21$delay === void 0 ? 200 : _t21$delay,
      s = _t21.timeout,
      _t21$suspensible = _t21.suspensible,
      c = _t21$suspensible === void 0 ? !1 : _t21$suspensible,
      a = _t21.onError;
    var l = null,
      u = 0;
    var f = function f() {
      var t;
      return l || (t = l = e()["catch"](function (t) {
        if (t = t instanceof Error ? t : new Error(String(t)), a) return new Promise(function (e, n) {
          a(t, function () {
            return e((u++, l = null, f()));
          }, function () {
            return n(t);
          }, u + 1);
        });
        throw t;
      }).then(function (e) {
        return t !== l && l ? l : (e && (e.__esModule || "Module" === e[Symbol.toStringTag]) && (e = e["default"]), e);
      }));
    };
    return function () {
      return {
        component: f(),
        delay: r,
        timeout: s,
        error: o,
        loading: n
      };
    };
  },
  onBeforeMount: nn,
  onMounted: on,
  onBeforeUpdate: rn,
  onUpdated: sn,
  onBeforeUnmount: cn,
  onUnmounted: an,
  onActivated: ln,
  onDeactivated: un,
  onServerPrefetch: fn,
  onRenderTracked: dn,
  onRenderTriggered: pn,
  onErrorCaptured: function onErrorCaptured(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : it;
    hn(t, e);
  }
});
var vn = new st();
function yn(t) {
  return gn(t, vn), vn.clear(), t;
}
function gn(t, n) {
  var o, r;
  var s = e(t);
  if (!(!s && !c(t) || t.__v_skip || Object.isFrozen(t) || t instanceof at)) {
    if (t.__ob__) {
      var _e20 = t.__ob__.dep.id;
      if (n.has(_e20)) return;
      n.add(_e20);
    }
    if (s) for (o = t.length; o--;) gn(t[o], n);else if (Rt(t)) gn(t.value, n);else for (r = Object.keys(t), o = r.length; o--;) gn(t[r[o]], n);
  }
}
var bn,
  $n = 0;
var wn = /*#__PURE__*/function () {
  function wn(t, e, n, o, r) {
    (0, _classCallCheck2["default"])(this, wn);
    !function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : te;
      e && e.active && e.effects.push(t);
    }(this, te && !te._vm ? te : t ? t._scope : void 0), (this.vm = t) && r && (t._watcher = this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++$n, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new st(), this.newDepIds = new st(), this.expression = "", i(e) ? this.getter = e : (this.getter = function (t) {
      if (z.test(t)) return;
      var e = t.split(".");
      return function (t) {
        for (var _n24 = 0; _n24 < e.length; _n24++) {
          if (!t) return;
          t = t[e[_n24]];
        }
        return t;
      };
    }(e), this.getter || (this.getter = T)), this.value = this.lazy ? void 0 : this.get();
  }
  (0, _createClass2["default"])(wn, [{
    key: "get",
    value: function get() {
      var t;
      vt(this);
      var e = this.vm;
      try {
        t = this.getter.call(e, e);
      } catch (t) {
        if (!this.user) throw t;
        We(t, e, "getter for watcher \"".concat(this.expression, "\""));
      } finally {
        this.deep && yn(t), yt(), this.cleanupDeps();
      }
      return t;
    }
  }, {
    key: "addDep",
    value: function addDep(t) {
      var e = t.id;
      this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }
  }, {
    key: "cleanupDeps",
    value: function cleanupDeps() {
      var t = this.deps.length;
      for (; t--;) {
        var _e21 = this.deps[t];
        this.newDepIds.has(_e21.id) || _e21.removeSub(this);
      }
      var e = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = e, this.newDepIds.clear(), e = this.deps, this.deps = this.newDeps, this.newDeps = e, this.newDeps.length = 0;
    }
  }, {
    key: "update",
    value: function update() {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : zn(this);
    }
  }, {
    key: "run",
    value: function run() {
      if (this.active) {
        var _t22 = this.get();
        if (_t22 !== this.value || c(_t22) || this.deep) {
          var _e22 = this.value;
          if (this.value = _t22, this.user) {
            var _n25 = "callback for watcher \"".concat(this.expression, "\"");
            Ke(this.cb, this.vm, [_t22, _e22], this.vm, _n25);
          } else this.cb.call(this.vm, _t22, _e22);
        }
      }
    }
  }, {
    key: "evaluate",
    value: function evaluate() {
      this.value = this.get(), this.dirty = !1;
    }
  }, {
    key: "depend",
    value: function depend() {
      var t = this.deps.length;
      for (; t--;) this.deps[t].depend();
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.vm && !this.vm._isBeingDestroyed && v(this.vm._scope.effects, this), this.active) {
        var _t23 = this.deps.length;
        for (; _t23--;) this.deps[_t23].removeSub(this);
        this.active = !1, this.onStop && this.onStop();
      }
    }
  }]);
  return wn;
}();
function Cn(t, e) {
  bn.$on(t, e);
}
function xn(t, e) {
  bn.$off(t, e);
}
function On(t, e) {
  var n = bn;
  return function o() {
    null !== e.apply(null, arguments) && n.$off(t, o);
  };
}
function kn(t, e, n) {
  bn = t, ie(e, n || {}, Cn, xn, On, t), bn = void 0;
}
var Sn = null;
function jn(t) {
  var e = Sn;
  return Sn = t, function () {
    Sn = e;
  };
}
function An(t) {
  for (; t && (t = t.$parent);) if (t._inactive) return !0;
  return !1;
}
function Tn(t, e) {
  if (e) {
    if (t._directInactive = !1, An(t)) return;
  } else if (t._directInactive) return;
  if (t._inactive || null === t._inactive) {
    t._inactive = !1;
    for (var _e23 = 0; _e23 < t.$children.length; _e23++) Tn(t.$children[_e23]);
    Pn(t, "activated");
  }
}
function En(t, e) {
  if (!(e && (t._directInactive = !0, An(t)) || t._inactive)) {
    t._inactive = !0;
    for (var _e24 = 0; _e24 < t.$children.length; _e24++) En(t.$children[_e24]);
    Pn(t, "deactivated");
  }
}
function Pn(t, e, n) {
  var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  vt();
  var r = it,
    s = ne();
  o && ct(t);
  var i = t.$options[e],
    c = "".concat(e, " hook");
  if (i) for (var _e25 = 0, _o13 = i.length; _e25 < _o13; _e25++) Ke(i[_e25], t, n || null, t, c);
  t._hasHookEvent && t.$emit("hook:" + e), o && (ct(r), s && s.on()), yt();
}
var In = [],
  Dn = [];
var Nn = {},
  Mn = !1,
  Ln = !1,
  Rn = 0;
var Fn = 0,
  Un = Date.now;
if (W && !q) {
  var _t24 = window.performance;
  _t24 && "function" == typeof _t24.now && Un() > document.createEvent("Event").timeStamp && (Un = function Un() {
    return _t24.now();
  });
}
var Bn = function Bn(t, e) {
  if (t.post) {
    if (!e.post) return 1;
  } else if (e.post) return -1;
  return t.id - e.id;
};
function Vn() {
  var t, e;
  for (Fn = Un(), Ln = !0, In.sort(Bn), Rn = 0; Rn < In.length; Rn++) t = In[Rn], t.before && t.before(), e = t.id, Nn[e] = null, t.run();
  var n = Dn.slice(),
    o = In.slice();
  Rn = In.length = Dn.length = 0, Nn = {}, Mn = Ln = !1, function (t) {
    for (var _e26 = 0; _e26 < t.length; _e26++) t[_e26]._inactive = !0, Tn(t[_e26], !0);
  }(n), function (t) {
    var e = t.length;
    for (; e--;) {
      var _n26 = t[e],
        _o14 = _n26.vm;
      _o14 && _o14._watcher === _n26 && _o14._isMounted && !_o14._isDestroyed && Pn(_o14, "updated");
    }
  }(o), ht(), nt && U.devtools && nt.emit("flush");
}
function zn(t) {
  var e = t.id;
  if (null == Nn[e] && (t !== mt.target || !t.noRecurse)) {
    if (Nn[e] = !0, Ln) {
      var _e27 = In.length - 1;
      for (; _e27 > Rn && In[_e27].id > t.id;) _e27--;
      In.splice(_e27 + 1, 0, t);
    } else In.push(t);
    Mn || (Mn = !0, tn(Vn));
  }
}
function Hn(t, e) {
  if (t) {
    var _n27 = Object.create(null),
      _o15 = rt ? Reflect.ownKeys(t) : Object.keys(t);
    for (var _r11 = 0; _r11 < _o15.length; _r11++) {
      var _s5 = _o15[_r11];
      if ("__ob__" === _s5) continue;
      var _c3 = t[_s5].from;
      if (_c3 in e._provided) _n27[_s5] = e._provided[_c3];else if ("default" in t[_s5]) {
        var _o16 = t[_s5]["default"];
        _n27[_s5] = i(_o16) ? _o16.call(e) : _o16;
      }
    }
    return _n27;
  }
}
function Wn(n, o, s, i, c) {
  var _this = this;
  var a = c.options;
  var l;
  g(i, "_uid") ? (l = Object.create(i), l._original = i) : (l = i, i = i._original);
  var u = r(a._compiled),
    f = !u;
  this.data = n, this.props = o, this.children = s, this.parent = i, this.listeners = n.on || t, this.injections = Hn(a.inject, i), this.slots = function () {
    return _this.$slots || Te(i, n.scopedSlots, _this.$slots = Se(s, i)), _this.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function get() {
      return Te(i, n.scopedSlots, this.slots());
    }
  }), u && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = Te(i, n.scopedSlots, this.$slots)), a._scopeId ? this._c = function (t, n, o, r) {
    var s = ze(l, t, n, o, r, f);
    return s && !e(s) && (s.fnScopeId = a._scopeId, s.fnContext = i), s;
  } : this._c = function (t, e, n, o) {
    return ze(l, t, e, n, o, f);
  };
}
function Kn(t, e, n, o, r) {
  var s = ft(t);
  return s.fnContext = n, s.fnOptions = o, e.slot && ((s.data || (s.data = {})).slot = e.slot), s;
}
function qn(t, e) {
  for (var _n28 in e) t[w(_n28)] = e[_n28];
}
function Gn(t) {
  return t.name || t.__name || t._componentTag;
}
ke(Wn.prototype);
var Zn = {
    init: function init(t, e) {
      if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
        var _e28 = t;
        Zn.prepatch(_e28, _e28);
      } else {
        (t.componentInstance = function (t, e) {
          var n = {
              _isComponent: !0,
              _parentVnode: t,
              parent: e
            },
            r = t.data.inlineTemplate;
          o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
          return new t.componentOptions.Ctor(n);
        }(t, Sn)).$mount(e ? t.elm : void 0, e);
      }
    },
    prepatch: function prepatch(e, n) {
      var o = n.componentOptions;
      !function (e, n, o, r, s) {
        var i = r.data.scopedSlots,
          c = e.$scopedSlots,
          a = !!(i && !i.$stable || c !== t && !c.$stable || i && e.$scopedSlots.$key !== i.$key || !i && e.$scopedSlots.$key);
        var l = !!(s || e.$options._renderChildren || a);
        var u = e.$vnode;
        e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = s;
        var f = r.data.attrs || t;
        e._attrsProxy && De(e._attrsProxy, f, u.data && u.data.attrs || t, e, "$attrs") && (l = !0), e.$attrs = f, o = o || t;
        var d = e.$options._parentListeners;
        if (e._listenersProxy && De(e._listenersProxy, o, d || t, e, "$listeners"), e.$listeners = e.$options._parentListeners = o, kn(e, o, d), n && e.$options.props) {
          xt(!1);
          var _t25 = e._props,
            _o17 = e.$options._propKeys || [];
          for (var _r12 = 0; _r12 < _o17.length; _r12++) {
            var _s6 = _o17[_r12],
              _i4 = e.$options.props;
            _t25[_s6] = ao(_s6, _i4, n, e);
          }
          xt(!0), e.$options.propsData = n;
        }
        l && (e.$slots = Se(s, r.context), e.$forceUpdate());
      }(n.componentInstance = e.componentInstance, o.propsData, o.listeners, n, o.children);
    },
    insert: function insert(t) {
      var e = t.context,
        n = t.componentInstance;
      var o;
      n._isMounted || (n._isMounted = !0, Pn(n, "mounted")), t.data.keepAlive && (e._isMounted ? ((o = n)._inactive = !1, Dn.push(o)) : Tn(n, !0));
    },
    destroy: function destroy(t) {
      var e = t.componentInstance;
      e._isDestroyed || (t.data.keepAlive ? En(e, !0) : e.$destroy());
    }
  },
  Jn = Object.keys(Zn);
function Xn(s, i, a, l, u) {
  if (n(s)) return;
  var d = a.$options._base;
  if (c(s) && (s = d.extend(s)), "function" != typeof s) return;
  var p;
  if (n(s.cid) && (p = s, s = function (t, e) {
    if (r(t.error) && o(t.errorComp)) return t.errorComp;
    if (o(t.resolved)) return t.resolved;
    var s = Re;
    if (s && o(t.owners) && -1 === t.owners.indexOf(s) && t.owners.push(s), r(t.loading) && o(t.loadingComp)) return t.loadingComp;
    if (s && !o(t.owners)) {
      var _r13 = t.owners = [s];
      var _i5 = !0,
        _a = null,
        _l = null;
      s.$on("hook:destroyed", function () {
        return v(_r13, s);
      });
      var _u = function _u(t) {
          for (var _t26 = 0, _e29 = _r13.length; _t26 < _e29; _t26++) _r13[_t26].$forceUpdate();
          t && (_r13.length = 0, null !== _a && (clearTimeout(_a), _a = null), null !== _l && (clearTimeout(_l), _l = null));
        },
        _d = N(function (n) {
          t.resolved = Fe(n, e), _i5 ? _r13.length = 0 : _u(!0);
        }),
        _p = N(function (e) {
          o(t.errorComp) && (t.error = !0, _u(!0));
        }),
        _h = t(_d, _p);
      return c(_h) && (f(_h) ? n(t.resolved) && _h.then(_d, _p) : f(_h.component) && (_h.component.then(_d, _p), o(_h.error) && (t.errorComp = Fe(_h.error, e)), o(_h.loading) && (t.loadingComp = Fe(_h.loading, e), 0 === _h.delay ? t.loading = !0 : _a = setTimeout(function () {
        _a = null, n(t.resolved) && n(t.error) && (t.loading = !0, _u(!1));
      }, _h.delay || 200)), o(_h.timeout) && (_l = setTimeout(function () {
        _l = null, n(t.resolved) && _p(null);
      }, _h.timeout)))), _i5 = !1, t.loading ? t.loadingComp : t.resolved;
    }
  }(p, d), void 0 === s)) return function (t, e, n, o, r) {
    var s = lt();
    return s.asyncFactory = t, s.asyncMeta = {
      data: e,
      context: n,
      children: o,
      tag: r
    }, s;
  }(p, i, a, l, u);
  i = i || {}, Co(s), o(i.model) && function (t, n) {
    var r = t.model && t.model.prop || "value",
      s = t.model && t.model.event || "input";
    (n.attrs || (n.attrs = {}))[r] = n.model.value;
    var i = n.on || (n.on = {}),
      c = i[s],
      a = n.model.callback;
    o(c) ? (e(c) ? -1 === c.indexOf(a) : c !== a) && (i[s] = [a].concat(c)) : i[s] = a;
  }(s.options, i);
  var h = function (t, e, r) {
    var s = e.options.props;
    if (n(s)) return;
    var i = {},
      c = t.attrs,
      a = t.props;
    if (o(c) || o(a)) for (var _t27 in s) {
      var _e30 = O(_t27);
      ae(i, a, _t27, _e30, !0) || ae(i, c, _t27, _e30, !1);
    }
    return i;
  }(i, s);
  if (r(s.options.functional)) return function (n, r, s, i, c) {
    var a = n.options,
      l = {},
      u = a.props;
    if (o(u)) for (var _e31 in u) l[_e31] = ao(_e31, u, r || t);else o(s.attrs) && qn(l, s.attrs), o(s.props) && qn(l, s.props);
    var f = new Wn(s, l, c, i, n),
      d = a.render.call(null, f._c, f);
    if (d instanceof at) return Kn(d, s, f.parent, a);
    if (e(d)) {
      var _t28 = le(d) || [],
        _e32 = new Array(_t28.length);
      for (var _n29 = 0; _n29 < _t28.length; _n29++) _e32[_n29] = Kn(_t28[_n29], s, f.parent, a);
      return _e32;
    }
  }(s, h, i, a, l);
  var m = i.on;
  if (i.on = i.nativeOn, r(s.options["abstract"])) {
    var _t29 = i.slot;
    i = {}, _t29 && (i.slot = _t29);
  }
  !function (t) {
    var e = t.hook || (t.hook = {});
    for (var _t30 = 0; _t30 < Jn.length; _t30++) {
      var _n30 = Jn[_t30],
        _o18 = e[_n30],
        _r14 = Zn[_n30];
      _o18 === _r14 || _o18 && _o18._merged || (e[_n30] = _o18 ? Qn(_r14, _o18) : _r14);
    }
  }(i);
  var _ = Gn(s.options) || u;
  return new at("vue-component-".concat(s.cid).concat(_ ? "-".concat(_) : ""), i, void 0, void 0, void 0, a, {
    Ctor: s,
    propsData: h,
    listeners: m,
    tag: u,
    children: l
  }, p);
}
function Qn(t, e) {
  var n = function n(_n31, o) {
    t(_n31, o), e(_n31, o);
  };
  return n._merged = !0, n;
}
var Yn = T;
var to = U.optionMergeStrategies;
function eo(t, e) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  if (!e) return t;
  var o, r, s;
  var i = rt ? Reflect.ownKeys(e) : Object.keys(e);
  for (var _c4 = 0; _c4 < i.length; _c4++) o = i[_c4], "__ob__" !== o && (r = t[o], s = e[o], n && g(t, o) ? r !== s && l(r) && l(s) && eo(r, s) : At(t, o, s));
  return t;
}
function no(t, e, n) {
  return n ? function () {
    var o = i(e) ? e.call(n, n) : e,
      r = i(t) ? t.call(n, n) : t;
    return o ? eo(o, r) : r;
  } : e ? t ? function () {
    return eo(i(e) ? e.call(this, this) : e, i(t) ? t.call(this, this) : t);
  } : e : t;
}
function oo(t, n) {
  var o = n ? t ? t.concat(n) : e(n) ? n : [n] : t;
  return o ? function (t) {
    var e = [];
    for (var _n32 = 0; _n32 < t.length; _n32++) -1 === e.indexOf(t[_n32]) && e.push(t[_n32]);
    return e;
  }(o) : o;
}
function ro(t, e, n, o) {
  var r = Object.create(t || null);
  return e ? j(r, e) : r;
}
to.data = function (t, e, n) {
  return n ? no(t, e, n) : e && "function" != typeof e ? t : no(t, e);
}, F.forEach(function (t) {
  to[t] = oo;
}), R.forEach(function (t) {
  to[t + "s"] = ro;
}), to.watch = function (t, n, o, r) {
  if (t === Q && (t = void 0), n === Q && (n = void 0), !n) return Object.create(t || null);
  if (!t) return n;
  var s = {};
  j(s, t);
  for (var _t31 in n) {
    var _o19 = s[_t31];
    var _r15 = n[_t31];
    _o19 && !e(_o19) && (_o19 = [_o19]), s[_t31] = _o19 ? _o19.concat(_r15) : e(_r15) ? _r15 : [_r15];
  }
  return s;
}, to.props = to.methods = to.inject = to.computed = function (t, e, n, o) {
  if (!t) return e;
  var r = Object.create(null);
  return j(r, t), e && j(r, e), r;
}, to.provide = function (t, e) {
  return t ? function () {
    var n = Object.create(null);
    return eo(n, i(t) ? t.call(this) : t), e && eo(n, i(e) ? e.call(this) : e, !1), n;
  } : e;
};
var so = function so(t, e) {
  return void 0 === e ? t : e;
};
function io(t, n, o) {
  if (i(n) && (n = n.options), function (t, n) {
    var o = t.props;
    if (!o) return;
    var r = {};
    var s, i, c;
    if (e(o)) for (s = o.length; s--;) i = o[s], "string" == typeof i && (c = w(i), r[c] = {
      type: null
    });else if (l(o)) for (var _t32 in o) i = o[_t32], c = w(_t32), r[c] = l(i) ? i : {
      type: i
    };
    t.props = r;
  }(n), function (t, n) {
    var o = t.inject;
    if (!o) return;
    var r = t.inject = {};
    if (e(o)) for (var _t33 = 0; _t33 < o.length; _t33++) r[o[_t33]] = {
      from: o[_t33]
    };else if (l(o)) for (var _t34 in o) {
      var _e33 = o[_t34];
      r[_t34] = l(_e33) ? j({
        from: _t34
      }, _e33) : {
        from: _e33
      };
    }
  }(n), function (t) {
    var e = t.directives;
    if (e) for (var _t35 in e) {
      var _n33 = e[_t35];
      i(_n33) && (e[_t35] = {
        bind: _n33,
        update: _n33
      });
    }
  }(n), !n._base && (n["extends"] && (t = io(t, n["extends"], o)), n.mixins)) for (var _e34 = 0, _r16 = n.mixins.length; _e34 < _r16; _e34++) t = io(t, n.mixins[_e34], o);
  var r = {};
  var s;
  for (s in t) c(s);
  for (s in n) g(t, s) || c(s);
  function c(e) {
    var s = to[e] || so;
    r[e] = s(t[e], n[e], o, e);
  }
  return r;
}
function co(t, e, n, o) {
  if ("string" != typeof n) return;
  var r = t[e];
  if (g(r, n)) return r[n];
  var s = w(n);
  if (g(r, s)) return r[s];
  var i = C(s);
  if (g(r, i)) return r[i];
  return r[n] || r[s] || r[i];
}
function ao(t, e, n, o) {
  var r = e[t],
    s = !g(n, t);
  var c = n[t];
  var a = po(Boolean, r.type);
  if (a > -1) if (s && !g(r, "default")) c = !1;else if ("" === c || c === O(t)) {
    var _t36 = po(String, r.type);
    (_t36 < 0 || a < _t36) && (c = !0);
  }
  if (void 0 === c) {
    c = function (t, e, n) {
      if (!g(e, "default")) return;
      var o = e["default"];
      if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
      return i(o) && "Function" !== uo(e.type) ? o.call(t) : o;
    }(o, r, t);
    var _e35 = Ct;
    xt(!0), St(c), xt(_e35);
  }
  return c;
}
var lo = /^\s*function (\w+)/;
function uo(t) {
  var e = t && t.toString().match(lo);
  return e ? e[1] : "";
}
function fo(t, e) {
  return uo(t) === uo(e);
}
function po(t, n) {
  if (!e(n)) return fo(n, t) ? 0 : -1;
  for (var _e36 = 0, _o20 = n.length; _e36 < _o20; _e36++) if (fo(n[_e36], t)) return _e36;
  return -1;
}
var ho = {
  enumerable: !0,
  configurable: !0,
  get: T,
  set: T
};
function mo(t, e, n) {
  ho.get = function () {
    return this[e][n];
  }, ho.set = function (t) {
    this[e][n] = t;
  }, Object.defineProperty(t, n, ho);
}
function _o(t) {
  var n = t.$options;
  if (n.props && function (t, e) {
    var n = t.$options.propsData || {},
      o = t._props = Pt({}),
      r = t.$options._propKeys = [],
      s = !t.$parent;
    s || xt(!1);
    for (var _s7 in e) {
      r.push(_s7);
      jt(o, _s7, ao(_s7, e, n, t), void 0, !0), _s7 in t || mo(t, "_props", _s7);
    }
    xt(!0);
  }(t, n.props), function (t) {
    var e = t.$options,
      n = e.setup;
    if (n) {
      var _o21 = t._setupContext = Ie(t);
      ct(t), vt();
      var _r17 = Ke(n, null, [t._props || Pt({}), _o21], t, "setup");
      if (yt(), ct(), i(_r17)) e.render = _r17;else if (c(_r17)) if (t._setupState = _r17, _r17.__sfc) {
        var _e37 = t._setupProxy = {};
        for (var _t37 in _r17) "__sfc" !== _t37 && Ut(_e37, _r17, _t37);
      } else for (var _e38 in _r17) B(_e38) || Ut(t, _r17, _e38);
    }
  }(t), n.methods && function (t, e) {
    t.$options.props;
    for (var _n34 in e) t[_n34] = "function" != typeof e[_n34] ? T : k(e[_n34], t);
  }(t, n.methods), n.data) !function (t) {
    var e = t.$options.data;
    e = t._data = i(e) ? function (t, e) {
      vt();
      try {
        return t.call(e, e);
      } catch (t) {
        return We(t, e, "data()"), {};
      } finally {
        yt();
      }
    }(e, t) : e || {}, l(e) || (e = {});
    var n = Object.keys(e),
      o = t.$options.props;
    t.$options.methods;
    var r = n.length;
    for (; r--;) {
      var _e39 = n[r];
      o && g(o, _e39) || B(_e39) || mo(t, "_data", _e39);
    }
    var s = St(e);
    s && s.vmCount++;
  }(t);else {
    var _e40 = St(t._data = {});
    _e40 && _e40.vmCount++;
  }
  n.computed && function (t, e) {
    var n = t._computedWatchers = Object.create(null),
      o = et();
    for (var _r18 in e) {
      var _s8 = e[_r18],
        _c5 = i(_s8) ? _s8 : _s8.get;
      o || (n[_r18] = new wn(t, _c5 || T, T, vo)), _r18 in t || yo(t, _r18, _s8);
    }
  }(t, n.computed), n.watch && n.watch !== Q && function (t, n) {
    for (var _o22 in n) {
      var _r19 = n[_o22];
      if (e(_r19)) for (var _e41 = 0; _e41 < _r19.length; _e41++) $o(t, _o22, _r19[_e41]);else $o(t, _o22, _r19);
    }
  }(t, n.watch);
}
var vo = {
  lazy: !0
};
function yo(t, e, n) {
  var o = !et();
  i(n) ? (ho.get = o ? go(e) : bo(n), ho.set = T) : (ho.get = n.get ? o && !1 !== n.cache ? go(e) : bo(n.get) : T, ho.set = n.set || T), Object.defineProperty(t, e, ho);
}
function go(t) {
  return function () {
    var e = this._computedWatchers && this._computedWatchers[t];
    if (e) return e.dirty && e.evaluate(), mt.target && e.depend(), e.value;
  };
}
function bo(t) {
  return function () {
    return t.call(this, this);
  };
}
function $o(t, e, n, o) {
  return l(n) && (o = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, o);
}
var wo = 0;
function Co(t) {
  var e = t.options;
  if (t["super"]) {
    var _n35 = Co(t["super"]);
    if (_n35 !== t.superOptions) {
      t.superOptions = _n35;
      var _o23 = function (t) {
        var e;
        var n = t.options,
          o = t.sealedOptions;
        for (var _t38 in n) n[_t38] !== o[_t38] && (e || (e = {}), e[_t38] = n[_t38]);
        return e;
      }(t);
      _o23 && j(t.extendOptions, _o23), e = t.options = io(_n35, t.extendOptions), e.name && (e.components[e.name] = t);
    }
  }
  return e;
}
function xo(t) {
  this._init(t);
}
function Oo(t) {
  t.cid = 0;
  var e = 1;
  t.extend = function (t) {
    t = t || {};
    var n = this,
      o = n.cid,
      r = t._Ctor || (t._Ctor = {});
    if (r[o]) return r[o];
    var s = Gn(t) || Gn(n.options),
      i = function i(t) {
        this._init(t);
      };
    return (i.prototype = Object.create(n.prototype)).constructor = i, i.cid = e++, i.options = io(n.options, t), i["super"] = n, i.options.props && function (t) {
      var e = t.options.props;
      for (var _n36 in e) mo(t.prototype, "_props", _n36);
    }(i), i.options.computed && function (t) {
      var e = t.options.computed;
      for (var _n37 in e) yo(t.prototype, _n37, e[_n37]);
    }(i), i.extend = n.extend, i.mixin = n.mixin, i.use = n.use, R.forEach(function (t) {
      i[t] = n[t];
    }), s && (i.options.components[s] = i), i.superOptions = n.options, i.extendOptions = t, i.sealedOptions = j({}, i.options), r[o] = i, i;
  };
}
function ko(t) {
  return t && (Gn(t.Ctor.options) || t.tag);
}
function So(t, n) {
  return e(t) ? t.indexOf(n) > -1 : "string" == typeof t ? t.split(",").indexOf(n) > -1 : (o = t, "[object RegExp]" === a.call(o) && t.test(n));
  // removed by dead control flow
 var o; 
}
function jo(t, e) {
  var n = t.cache,
    o = t.keys,
    r = t._vnode,
    s = t.$vnode;
  for (var _t39 in n) {
    var _s9 = n[_t39];
    if (_s9) {
      var _i6 = _s9.name;
      _i6 && !e(_i6) && Ao(n, _t39, o, r);
    }
  }
  s.componentOptions.children = void 0;
}
function Ao(t, e, n, o) {
  var r = t[e];
  !r || o && r.tag === o.tag || r.componentInstance.$destroy(), t[e] = null, v(n, e);
}
!function (e) {
  e.prototype._init = function (e) {
    var n = this;
    n._uid = wo++, n._isVue = !0, n.__v_skip = !0, n._scope = new ee(!0), n._scope.parent = void 0, n._scope._vm = !0, e && e._isComponent ? function (t, e) {
      var n = t.$options = Object.create(t.constructor.options),
        o = e._parentVnode;
      n.parent = e.parent, n._parentVnode = o;
      var r = o.componentOptions;
      n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
    }(n, e) : n.$options = io(Co(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, function (t) {
      var e = t.$options;
      var n = e.parent;
      if (n && !e["abstract"]) {
        for (; n.$options["abstract"] && n.$parent;) n = n.$parent;
        n.$children.push(t);
      }
      t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._provided = n ? n._provided : Object.create(null), t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
    }(n), function (t) {
      t._events = Object.create(null), t._hasHookEvent = !1;
      var e = t.$options._parentListeners;
      e && kn(t, e);
    }(n), function (e) {
      e._vnode = null, e._staticTrees = null;
      var n = e.$options,
        o = e.$vnode = n._parentVnode,
        r = o && o.context;
      e.$slots = Se(n._renderChildren, r), e.$scopedSlots = o ? Te(e.$parent, o.data.scopedSlots, e.$slots) : t, e._c = function (t, n, o, r) {
        return ze(e, t, n, o, r, !1);
      }, e.$createElement = function (t, n, o, r) {
        return ze(e, t, n, o, r, !0);
      };
      var s = o && o.data;
      jt(e, "$attrs", s && s.attrs || t, null, !0), jt(e, "$listeners", n._parentListeners || t, null, !0);
    }(n), Pn(n, "beforeCreate", void 0, !1), function (t) {
      var e = Hn(t.$options.inject, t);
      e && (xt(!1), Object.keys(e).forEach(function (n) {
        jt(t, n, e[n]);
      }), xt(!0));
    }(n), _o(n), function (t) {
      var e = t.$options.provide;
      if (e) {
        var _n38 = i(e) ? e.call(t) : e;
        if (!c(_n38)) return;
        var _o24 = oe(t),
          _r20 = rt ? Reflect.ownKeys(_n38) : Object.keys(_n38);
        for (var _t40 = 0; _t40 < _r20.length; _t40++) {
          var _e42 = _r20[_t40];
          Object.defineProperty(_o24, _e42, Object.getOwnPropertyDescriptor(_n38, _e42));
        }
      }
    }(n), Pn(n, "created"), n.$options.el && n.$mount(n.$options.el);
  };
}(xo), function (t) {
  var e = {
      get: function get() {
        return this._data;
      }
    },
    n = {
      get: function get() {
        return this._props;
      }
    };
  Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = At, t.prototype.$delete = Tt, t.prototype.$watch = function (t, e, n) {
    var o = this;
    if (l(e)) return $o(o, t, e, n);
    (n = n || {}).user = !0;
    var r = new wn(o, t, e, n);
    if (n.immediate) {
      var _t41 = "callback for immediate watcher \"".concat(r.expression, "\"");
      vt(), Ke(e, o, [r.value], o, _t41), yt();
    }
    return function () {
      r.teardown();
    };
  };
}(xo), function (t) {
  var n = /^hook:/;
  t.prototype.$on = function (t, o) {
    var r = this;
    if (e(t)) for (var _e43 = 0, _n39 = t.length; _e43 < _n39; _e43++) r.$on(t[_e43], o);else (r._events[t] || (r._events[t] = [])).push(o), n.test(t) && (r._hasHookEvent = !0);
    return r;
  }, t.prototype.$once = function (t, e) {
    var n = this;
    function o() {
      n.$off(t, o), e.apply(n, arguments);
    }
    return o.fn = e, n.$on(t, o), n;
  }, t.prototype.$off = function (t, n) {
    var o = this;
    if (!arguments.length) return o._events = Object.create(null), o;
    if (e(t)) {
      for (var _e44 = 0, _r21 = t.length; _e44 < _r21; _e44++) o.$off(t[_e44], n);
      return o;
    }
    var r = o._events[t];
    if (!r) return o;
    if (!n) return o._events[t] = null, o;
    var s,
      i = r.length;
    for (; i--;) if (s = r[i], s === n || s.fn === n) {
      r.splice(i, 1);
      break;
    }
    return o;
  }, t.prototype.$emit = function (t) {
    var e = this;
    var n = e._events[t];
    if (n) {
      n = n.length > 1 ? S(n) : n;
      var _o25 = S(arguments, 1),
        _r22 = "event handler for \"".concat(t, "\"");
      for (var _t42 = 0, _s10 = n.length; _t42 < _s10; _t42++) Ke(n[_t42], e, _o25, e, _r22);
    }
    return e;
  };
}(xo), function (t) {
  t.prototype._update = function (t, e) {
    var n = this,
      o = n.$el,
      r = n._vnode,
      s = jn(n);
    n._vnode = t, n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1), s(), o && (o.__vue__ = null), n.$el && (n.$el.__vue__ = n);
    var i = n;
    for (; i && i.$vnode && i.$parent && i.$vnode === i.$parent._vnode;) i.$parent.$el = i.$el, i = i.$parent;
  }, t.prototype.$forceUpdate = function () {
    var t = this;
    t._watcher && t._watcher.update();
  }, t.prototype.$destroy = function () {
    var t = this;
    if (t._isBeingDestroyed) return;
    Pn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
    var e = t.$parent;
    !e || e._isBeingDestroyed || t.$options["abstract"] || v(e.$children, t), t._scope.stop(), t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), Pn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
  };
}(xo), function (t) {
  ke(t.prototype), t.prototype.$nextTick = function (t) {
    return tn(t, this);
  }, t.prototype._render = function () {
    var t = this,
      _t$$options = t.$options,
      n = _t$$options.render,
      o = _t$$options._parentVnode;
    o && t._isMounted && (t.$scopedSlots = Te(t.$parent, o.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && Me(t._slotsProxy, t.$scopedSlots)), t.$vnode = o;
    var r = it,
      s = Re;
    var i;
    try {
      ct(t), Re = t, i = n.call(t._renderProxy, t.$createElement);
    } catch (e) {
      We(e, t, "render"), i = t._vnode;
    } finally {
      Re = s, ct(r);
    }
    return e(i) && 1 === i.length && (i = i[0]), i instanceof at || (i = lt()), i.parent = o, i;
  };
}(xo);
var To = [String, RegExp, Array];
var Eo = {
  KeepAlive: {
    name: "keep-alive",
    "abstract": !0,
    props: {
      include: To,
      exclude: To,
      max: [String, Number]
    },
    methods: {
      cacheVNode: function cacheVNode() {
        var t = this.cache,
          e = this.keys,
          n = this.vnodeToCache,
          o = this.keyToCache;
        if (n) {
          var _r23 = n.tag,
            _s11 = n.componentInstance,
            _i7 = n.componentOptions;
          t[o] = {
            name: ko(_i7),
            tag: _r23,
            componentInstance: _s11
          }, e.push(o), this.max && e.length > parseInt(this.max) && Ao(t, e[0], e, this._vnode), this.vnodeToCache = null;
        }
      }
    },
    created: function created() {
      this.cache = Object.create(null), this.keys = [];
    },
    destroyed: function destroyed() {
      for (var _t43 in this.cache) Ao(this.cache, _t43, this.keys);
    },
    mounted: function mounted() {
      var _this2 = this;
      this.cacheVNode(), this.$watch("include", function (t) {
        jo(_this2, function (e) {
          return So(t, e);
        });
      }), this.$watch("exclude", function (t) {
        jo(_this2, function (e) {
          return !So(t, e);
        });
      });
    },
    updated: function updated() {
      this.cacheVNode();
    },
    render: function render() {
      var t = this.$slots["default"],
        e = Ue(t),
        n = e && e.componentOptions;
      if (n) {
        var _t44 = ko(n),
          _o26 = this.include,
          _r24 = this.exclude;
        if (_o26 && (!_t44 || !So(_o26, _t44)) || _r24 && _t44 && So(_r24, _t44)) return e;
        var _s12 = this.cache,
          _i8 = this.keys,
          _c6 = null == e.key ? n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "") : e.key;
        _s12[_c6] ? (e.componentInstance = _s12[_c6].componentInstance, v(_i8, _c6), _i8.push(_c6)) : (this.vnodeToCache = e, this.keyToCache = _c6), e.data.keepAlive = !0;
      }
      return e || t && t[0];
    }
  }
};
!function (t) {
  var e = {
    get: function get() {
      return U;
    }
  };
  Object.defineProperty(t, "config", e), t.util = {
    warn: Yn,
    extend: j,
    mergeOptions: io,
    defineReactive: jt
  }, t.set = At, t["delete"] = Tt, t.nextTick = tn, t.observable = function (t) {
    return St(t), t;
  }, t.options = Object.create(null), R.forEach(function (e) {
    t.options[e + "s"] = Object.create(null);
  }), t.options._base = t, j(t.options.components, Eo), function (t) {
    t.use = function (t) {
      var e = this._installedPlugins || (this._installedPlugins = []);
      if (e.indexOf(t) > -1) return this;
      var n = S(arguments, 1);
      return n.unshift(this), i(t.install) ? t.install.apply(t, n) : i(t) && t.apply(null, n), e.push(t), this;
    };
  }(t), function (t) {
    t.mixin = function (t) {
      return this.options = io(this.options, t), this;
    };
  }(t), Oo(t), function (t) {
    R.forEach(function (e) {
      t[e] = function (t, n) {
        return n ? ("component" === e && l(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && i(n) && (n = {
          bind: n,
          update: n
        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
      };
    });
  }(t);
}(xo), Object.defineProperty(xo.prototype, "$isServer", {
  get: et
}), Object.defineProperty(xo.prototype, "$ssrContext", {
  get: function get() {
    return this.$vnode && this.$vnode.ssrContext;
  }
}), Object.defineProperty(xo, "FunctionalRenderContext", {
  value: Wn
}), xo.version = mn;
var Po = m("style,class"),
  Io = m("input,textarea,option,select,progress"),
  Do = m("contenteditable,draggable,spellcheck"),
  No = m("events,caret,typing,plaintext-only"),
  Mo = function Mo(t, e) {
    return Bo(e) || "false" === e ? "false" : "contenteditable" === t && No(e) ? e : "true";
  },
  Lo = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
  Ro = "http://www.w3.org/1999/xlink",
  Fo = function Fo(t) {
    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
  },
  Uo = function Uo(t) {
    return Fo(t) ? t.slice(6, t.length) : "";
  },
  Bo = function Bo(t) {
    return null == t || !1 === t;
  };
function Vo(t) {
  var e = t.data,
    n = t,
    r = t;
  for (; o(r.componentInstance);) r = r.componentInstance._vnode, r && r.data && (e = zo(r.data, e));
  for (; o(n = n.parent);) n && n.data && (e = zo(e, n.data));
  return function (t, e) {
    if (o(t) || o(e)) return Ho(t, Wo(e));
    return "";
  }(e.staticClass, e["class"]);
}
function zo(t, e) {
  return {
    staticClass: Ho(t.staticClass, e.staticClass),
    "class": o(t["class"]) ? [t["class"], e["class"]] : e["class"]
  };
}
function Ho(t, e) {
  return t ? e ? t + " " + e : t : e || "";
}
function Wo(t) {
  return Array.isArray(t) ? function (t) {
    var e,
      n = "";
    for (var _r25 = 0, _s13 = t.length; _r25 < _s13; _r25++) o(e = Wo(t[_r25])) && "" !== e && (n && (n += " "), n += e);
    return n;
  }(t) : c(t) ? function (t) {
    var e = "";
    for (var _n40 in t) t[_n40] && (e && (e += " "), e += _n40);
    return e;
  }(t) : "string" == typeof t ? t : "";
}
var Ko = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
  },
  qo = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
  Go = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
  Zo = function Zo(t) {
    return qo(t) || Go(t);
  };
var Jo = Object.create(null);
var Xo = m("text,number,password,search,email,tel,url");
var Qo = Object.freeze({
    __proto__: null,
    createElement: function createElement(t, e) {
      var n = document.createElement(t);
      return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
    },
    createElementNS: function createElementNS(t, e) {
      return document.createElementNS(Ko[t], e);
    },
    createTextNode: function createTextNode(t) {
      return document.createTextNode(t);
    },
    createComment: function createComment(t) {
      return document.createComment(t);
    },
    insertBefore: function insertBefore(t, e, n) {
      t.insertBefore(e, n);
    },
    removeChild: function removeChild(t, e) {
      t.removeChild(e);
    },
    appendChild: function appendChild(t, e) {
      t.appendChild(e);
    },
    parentNode: function parentNode(t) {
      return t.parentNode;
    },
    nextSibling: function nextSibling(t) {
      return t.nextSibling;
    },
    tagName: function tagName(t) {
      return t.tagName;
    },
    setTextContent: function setTextContent(t, e) {
      t.textContent = e;
    },
    setStyleScope: function setStyleScope(t, e) {
      t.setAttribute(e, "");
    }
  }),
  Yo = {
    create: function create(t, e) {
      tr(e);
    },
    update: function update(t, e) {
      t.data.ref !== e.data.ref && (tr(t, !0), tr(e));
    },
    destroy: function destroy(t) {
      tr(t, !0);
    }
  };
function tr(t, n) {
  var r = t.data.ref;
  if (!o(r)) return;
  var s = t.context,
    c = t.componentInstance || t.elm,
    a = n ? null : c,
    l = n ? void 0 : c;
  if (i(r)) return void Ke(r, s, [a], s, "template ref function");
  var u = t.data.refInFor,
    f = "string" == typeof r || "number" == typeof r,
    d = Rt(r),
    p = s.$refs;
  if (f || d) if (u) {
    var _t45 = f ? p[r] : r.value;
    n ? e(_t45) && v(_t45, c) : e(_t45) ? _t45.includes(c) || _t45.push(c) : f ? (p[r] = [c], er(s, r, p[r])) : r.value = [c];
  } else if (f) {
    if (n && p[r] !== c) return;
    p[r] = l, er(s, r, a);
  } else if (d) {
    if (n && r.value !== c) return;
    r.value = a;
  }
}
function er(_ref2, e, n) {
  var t = _ref2._setupState;
  t && g(t, e) && (Rt(t[e]) ? t[e].value = n : t[e] = n);
}
var nr = new at("", {}, []),
  or = ["create", "activate", "update", "remove", "destroy"];
function rr(t, e) {
  return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && o(t.data) === o(e.data) && function (t, e) {
    if ("input" !== t.tag) return !0;
    var n;
    var r = o(n = t.data) && o(n = n.attrs) && n.type,
      s = o(n = e.data) && o(n = n.attrs) && n.type;
    return r === s || Xo(r) && Xo(s);
  }(t, e) || r(t.isAsyncPlaceholder) && n(e.asyncFactory.error));
}
function sr(t, e, n) {
  var r, s;
  var i = {};
  for (r = e; r <= n; ++r) s = t[r].key, o(s) && (i[s] = r);
  return i;
}
var ir = {
  create: cr,
  update: cr,
  destroy: function destroy(t) {
    cr(t, nr);
  }
};
function cr(t, e) {
  (t.data.directives || e.data.directives) && function (t, e) {
    var n = t === nr,
      o = e === nr,
      r = lr(t.data.directives, t.context),
      s = lr(e.data.directives, e.context),
      i = [],
      c = [];
    var a, l, u;
    for (a in s) l = r[a], u = s[a], l ? (u.oldValue = l.value, u.oldArg = l.arg, fr(u, "update", e, t), u.def && u.def.componentUpdated && c.push(u)) : (fr(u, "bind", e, t), u.def && u.def.inserted && i.push(u));
    if (i.length) {
      var _o27 = function _o27() {
        for (var _n41 = 0; _n41 < i.length; _n41++) fr(i[_n41], "inserted", e, t);
      };
      n ? ce(e, "insert", _o27) : _o27();
    }
    c.length && ce(e, "postpatch", function () {
      for (var _n42 = 0; _n42 < c.length; _n42++) fr(c[_n42], "componentUpdated", e, t);
    });
    if (!n) for (a in r) s[a] || fr(r[a], "unbind", t, t, o);
  }(t, e);
}
var ar = Object.create(null);
function lr(t, e) {
  var n = Object.create(null);
  if (!t) return n;
  var o, r;
  for (o = 0; o < t.length; o++) {
    if (r = t[o], r.modifiers || (r.modifiers = ar), n[ur(r)] = r, e._setupState && e._setupState.__sfc) {
      var _t46 = r.def || co(e, "_setupState", "v-" + r.name);
      r.def = "function" == typeof _t46 ? {
        bind: _t46,
        update: _t46
      } : _t46;
    }
    r.def = r.def || co(e.$options, "directives", r.name);
  }
  return n;
}
function ur(t) {
  return t.rawName || "".concat(t.name, ".").concat(Object.keys(t.modifiers || {}).join("."));
}
function fr(t, e, n, o, r) {
  var s = t.def && t.def[e];
  if (s) try {
    s(n.elm, t, n, o, r);
  } catch (o) {
    We(o, n.context, "directive ".concat(t.name, " ").concat(e, " hook"));
  }
}
var dr = [Yo, ir];
function pr(t, e) {
  var s = e.componentOptions;
  if (o(s) && !1 === s.Ctor.options.inheritAttrs) return;
  if (n(t.data.attrs) && n(e.data.attrs)) return;
  var i, c, a;
  var l = e.elm,
    u = t.data.attrs || {};
  var f = e.data.attrs || {};
  for (i in (o(f.__ob__) || r(f._v_attr_proxy)) && (f = e.data.attrs = j({}, f)), f) c = f[i], a = u[i], a !== c && hr(l, i, c, e.data.pre);
  for (i in (q || Z) && f.value !== u.value && hr(l, "value", f.value), u) n(f[i]) && (Fo(i) ? l.removeAttributeNS(Ro, Uo(i)) : Do(i) || l.removeAttribute(i));
}
function hr(t, e, n, o) {
  o || t.tagName.indexOf("-") > -1 ? mr(t, e, n) : Lo(e) ? Bo(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Do(e) ? t.setAttribute(e, Mo(e, n)) : Fo(e) ? Bo(n) ? t.removeAttributeNS(Ro, Uo(e)) : t.setAttributeNS(Ro, e, n) : mr(t, e, n);
}
function mr(t, e, n) {
  if (Bo(n)) t.removeAttribute(e);else {
    if (q && !G && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
      var _e45 = function _e45(n) {
        n.stopImmediatePropagation(), t.removeEventListener("input", _e45);
      };
      t.addEventListener("input", _e45), t.__ieph = !0;
    }
    t.setAttribute(e, n);
  }
}
var _r = {
  create: pr,
  update: pr
};
function vr(t, e) {
  var r = e.elm,
    s = e.data,
    i = t.data;
  if (n(s.staticClass) && n(s["class"]) && (n(i) || n(i.staticClass) && n(i["class"]))) return;
  var c = Vo(e);
  var a = r._transitionClasses;
  o(a) && (c = Ho(c, Wo(a))), c !== r._prevClass && (r.setAttribute("class", c), r._prevClass = c);
}
var yr = {
  create: vr,
  update: vr
};
var gr = "__r",
  br = "__c";
var $r;
function wr(t, e, n) {
  var o = $r;
  return function r() {
    null !== e.apply(null, arguments) && Or(t, r, n, o);
  };
}
var Cr = Ze && !(X && Number(X[1]) <= 53);
function xr(t, e, n, o) {
  if (Cr) {
    var _t47 = Fn,
      _n43 = e;
    e = _n43._wrapper = function (e) {
      if (e.target === e.currentTarget || e.timeStamp >= _t47 || e.timeStamp <= 0 || e.target.ownerDocument !== document) return _n43.apply(this, arguments);
    };
  }
  $r.addEventListener(t, e, tt ? {
    capture: n,
    passive: o
  } : n);
}
function Or(t, e, n, o) {
  (o || $r).removeEventListener(t, e._wrapper || e, n);
}
function kr(t, e) {
  if (n(t.data.on) && n(e.data.on)) return;
  var r = e.data.on || {},
    s = t.data.on || {};
  $r = e.elm || t.elm, function (t) {
    if (o(t[gr])) {
      var _e46 = q ? "change" : "input";
      t[_e46] = [].concat(t[gr], t[_e46] || []), delete t[gr];
    }
    o(t[br]) && (t.change = [].concat(t[br], t.change || []), delete t[br]);
  }(r), ie(r, s, xr, Or, wr, e.context), $r = void 0;
}
var Sr = {
  create: kr,
  update: kr,
  destroy: function destroy(t) {
    return kr(t, nr);
  }
};
var jr;
function Ar(t, e) {
  if (n(t.data.domProps) && n(e.data.domProps)) return;
  var s, i;
  var c = e.elm,
    a = t.data.domProps || {};
  var l = e.data.domProps || {};
  for (s in (o(l.__ob__) || r(l._v_attr_proxy)) && (l = e.data.domProps = j({}, l)), a) s in l || (c[s] = "");
  for (s in l) {
    if (i = l[s], "textContent" === s || "innerHTML" === s) {
      if (e.children && (e.children.length = 0), i === a[s]) continue;
      1 === c.childNodes.length && c.removeChild(c.childNodes[0]);
    }
    if ("value" === s && "PROGRESS" !== c.tagName) {
      c._value = i;
      var _t48 = n(i) ? "" : String(i);
      Tr(c, _t48) && (c.value = _t48);
    } else if ("innerHTML" === s && Go(c.tagName) && n(c.innerHTML)) {
      jr = jr || document.createElement("div"), jr.innerHTML = "<svg>".concat(i, "</svg>");
      var _t49 = jr.firstChild;
      for (; c.firstChild;) c.removeChild(c.firstChild);
      for (; _t49.firstChild;) c.appendChild(_t49.firstChild);
    } else if (i !== a[s]) try {
      c[s] = i;
    } catch (t) {}
  }
}
function Tr(t, e) {
  return !t.composing && ("OPTION" === t.tagName || function (t, e) {
    var n = !0;
    try {
      n = document.activeElement !== t;
    } catch (t) {}
    return n && t.value !== e;
  }(t, e) || function (t, e) {
    var n = t.value,
      r = t._vModifiers;
    if (o(r)) {
      if (r.number) return h(n) !== h(e);
      if (r.trim) return n.trim() !== e.trim();
    }
    return n !== e;
  }(t, e));
}
var Er = {
  create: Ar,
  update: Ar
};
var Pr = b(function (t) {
  var e = {},
    n = /:(.+)/;
  return t.split(/;(?![^(]*\))/g).forEach(function (t) {
    if (t) {
      var _o28 = t.split(n);
      _o28.length > 1 && (e[_o28[0].trim()] = _o28[1].trim());
    }
  }), e;
});
function Ir(t) {
  var e = Dr(t.style);
  return t.staticStyle ? j(t.staticStyle, e) : e;
}
function Dr(t) {
  return Array.isArray(t) ? A(t) : "string" == typeof t ? Pr(t) : t;
}
var Nr = /^--/,
  Mr = /\s*!important$/,
  Lr = function Lr(t, e, n) {
    if (Nr.test(e)) t.style.setProperty(e, n);else if (Mr.test(n)) t.style.setProperty(O(e), n.replace(Mr, ""), "important");else {
      var _o29 = Ur(e);
      if (Array.isArray(n)) for (var _e47 = 0, _r26 = n.length; _e47 < _r26; _e47++) t.style[_o29] = n[_e47];else t.style[_o29] = n;
    }
  },
  Rr = ["Webkit", "Moz", "ms"];
var Fr;
var Ur = b(function (t) {
  if (Fr = Fr || document.createElement("div").style, "filter" !== (t = w(t)) && t in Fr) return t;
  var e = t.charAt(0).toUpperCase() + t.slice(1);
  for (var _t50 = 0; _t50 < Rr.length; _t50++) {
    var _n44 = Rr[_t50] + e;
    if (_n44 in Fr) return _n44;
  }
});
function Br(t, e) {
  var r = e.data,
    s = t.data;
  if (n(r.staticStyle) && n(r.style) && n(s.staticStyle) && n(s.style)) return;
  var i, c;
  var a = e.elm,
    l = s.staticStyle,
    u = s.normalizedStyle || s.style || {},
    f = l || u,
    d = Dr(e.data.style) || {};
  e.data.normalizedStyle = o(d.__ob__) ? j({}, d) : d;
  var p = function (t, e) {
    var n = {};
    var o;
    if (e) {
      var _e48 = t;
      for (; _e48.componentInstance;) _e48 = _e48.componentInstance._vnode, _e48 && _e48.data && (o = Ir(_e48.data)) && j(n, o);
    }
    (o = Ir(t.data)) && j(n, o);
    var r = t;
    for (; r = r.parent;) r.data && (o = Ir(r.data)) && j(n, o);
    return n;
  }(e, !0);
  for (c in f) n(p[c]) && Lr(a, c, "");
  for (c in p) i = p[c], Lr(a, c, null == i ? "" : i);
}
var Vr = {
  create: Br,
  update: Br
};
var zr = /\s+/;
function Hr(t, e) {
  if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(zr).forEach(function (e) {
    return t.classList.add(e);
  }) : t.classList.add(e);else {
    var _n45 = " ".concat(t.getAttribute("class") || "", " ");
    _n45.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (_n45 + e).trim());
  }
}
function Wr(t, e) {
  if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(zr).forEach(function (e) {
    return t.classList.remove(e);
  }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");else {
    var _n46 = " ".concat(t.getAttribute("class") || "", " ");
    var _o30 = " " + e + " ";
    for (; _n46.indexOf(_o30) >= 0;) _n46 = _n46.replace(_o30, " ");
    _n46 = _n46.trim(), _n46 ? t.setAttribute("class", _n46) : t.removeAttribute("class");
  }
}
function Kr(t) {
  if (t) {
    if ("object" == (0, _typeof2["default"])(t)) {
      var _e49 = {};
      return !1 !== t.css && j(_e49, qr(t.name || "v")), j(_e49, t), _e49;
    }
    return "string" == typeof t ? qr(t) : void 0;
  }
}
var qr = b(function (t) {
    return {
      enterClass: "".concat(t, "-enter"),
      enterToClass: "".concat(t, "-enter-to"),
      enterActiveClass: "".concat(t, "-enter-active"),
      leaveClass: "".concat(t, "-leave"),
      leaveToClass: "".concat(t, "-leave-to"),
      leaveActiveClass: "".concat(t, "-leave-active")
    };
  }),
  Gr = W && !G,
  Zr = "transition",
  Jr = "animation";
var Xr = "transition",
  Qr = "transitionend",
  Yr = "animation",
  ts = "animationend";
Gr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Xr = "WebkitTransition", Qr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Yr = "WebkitAnimation", ts = "webkitAnimationEnd"));
var es = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (t) {
  return t();
};
function ns(t) {
  es(function () {
    es(t);
  });
}
function os(t, e) {
  var n = t._transitionClasses || (t._transitionClasses = []);
  n.indexOf(e) < 0 && (n.push(e), Hr(t, e));
}
function rs(t, e) {
  t._transitionClasses && v(t._transitionClasses, e), Wr(t, e);
}
function ss(t, e, n) {
  var _cs = cs(t, e),
    o = _cs.type,
    r = _cs.timeout,
    s = _cs.propCount;
  if (!o) return n();
  var i = o === Zr ? Qr : ts;
  var c = 0;
  var a = function a() {
      t.removeEventListener(i, l), n();
    },
    l = function l(e) {
      e.target === t && ++c >= s && a();
    };
  setTimeout(function () {
    c < s && a();
  }, r + 1), t.addEventListener(i, l);
}
var is = /\b(transform|all)(,|$)/;
function cs(t, e) {
  var n = window.getComputedStyle(t),
    o = (n[Xr + "Delay"] || "").split(", "),
    r = (n[Xr + "Duration"] || "").split(", "),
    s = as(o, r),
    i = (n[Yr + "Delay"] || "").split(", "),
    c = (n[Yr + "Duration"] || "").split(", "),
    a = as(i, c);
  var l,
    u = 0,
    f = 0;
  e === Zr ? s > 0 && (l = Zr, u = s, f = r.length) : e === Jr ? a > 0 && (l = Jr, u = a, f = c.length) : (u = Math.max(s, a), l = u > 0 ? s > a ? Zr : Jr : null, f = l ? l === Zr ? r.length : c.length : 0);
  return {
    type: l,
    timeout: u,
    propCount: f,
    hasTransform: l === Zr && is.test(n[Xr + "Property"])
  };
}
function as(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max.apply(null, e.map(function (e, n) {
    return ls(e) + ls(t[n]);
  }));
}
function ls(t) {
  return 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function us(t, e) {
  var r = t.elm;
  o(r._leaveCb) && (r._leaveCb.cancelled = !0, r._leaveCb());
  var s = Kr(t.data.transition);
  if (n(s)) return;
  if (o(r._enterCb) || 1 !== r.nodeType) return;
  var a = s.css,
    l = s.type,
    u = s.enterClass,
    f = s.enterToClass,
    d = s.enterActiveClass,
    p = s.appearClass,
    m = s.appearToClass,
    _ = s.appearActiveClass,
    v = s.beforeEnter,
    y = s.enter,
    g = s.afterEnter,
    b = s.enterCancelled,
    $ = s.beforeAppear,
    w = s.appear,
    C = s.afterAppear,
    x = s.appearCancelled,
    O = s.duration;
  var k = Sn,
    S = Sn.$vnode;
  for (; S && S.parent;) k = S.context, S = S.parent;
  var j = !k._isMounted || !t.isRootInsert;
  if (j && !w && "" !== w) return;
  var A = j && p ? p : u,
    T = j && _ ? _ : d,
    E = j && m ? m : f,
    P = j && $ || v,
    I = j && i(w) ? w : y,
    D = j && C || g,
    M = j && x || b,
    L = h(c(O) ? O.enter : O),
    R = !1 !== a && !G,
    F = ps(I),
    U = r._enterCb = N(function () {
      R && (rs(r, E), rs(r, T)), U.cancelled ? (R && rs(r, A), M && M(r)) : D && D(r), r._enterCb = null;
    });
  t.data.show || ce(t, "insert", function () {
    var e = r.parentNode,
      n = e && e._pending && e._pending[t.key];
    n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), I && I(r, U);
  }), P && P(r), R && (os(r, A), os(r, T), ns(function () {
    rs(r, A), U.cancelled || (os(r, E), F || (ds(L) ? setTimeout(U, L) : ss(r, l, U)));
  })), t.data.show && (e && e(), I && I(r, U)), R || F || U();
}
function fs(t, e) {
  var r = t.elm;
  o(r._enterCb) && (r._enterCb.cancelled = !0, r._enterCb());
  var s = Kr(t.data.transition);
  if (n(s) || 1 !== r.nodeType) return e();
  if (o(r._leaveCb)) return;
  var i = s.css,
    a = s.type,
    l = s.leaveClass,
    u = s.leaveToClass,
    f = s.leaveActiveClass,
    d = s.beforeLeave,
    p = s.leave,
    m = s.afterLeave,
    _ = s.leaveCancelled,
    v = s.delayLeave,
    y = s.duration,
    g = !1 !== i && !G,
    b = ps(p),
    $ = h(c(y) ? y.leave : y),
    w = r._leaveCb = N(function () {
      r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), g && (rs(r, u), rs(r, f)), w.cancelled ? (g && rs(r, l), _ && _(r)) : (e(), m && m(r)), r._leaveCb = null;
    });
  function C() {
    w.cancelled || (!t.data.show && r.parentNode && ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), d && d(r), g && (os(r, l), os(r, f), ns(function () {
      rs(r, l), w.cancelled || (os(r, u), b || (ds($) ? setTimeout(w, $) : ss(r, a, w)));
    })), p && p(r, w), g || b || w());
  }
  v ? v(C) : C();
}
function ds(t) {
  return "number" == typeof t && !isNaN(t);
}
function ps(t) {
  if (n(t)) return !1;
  var e = t.fns;
  return o(e) ? ps(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
}
function hs(t, e) {
  !0 !== e.data.show && us(e);
}
var ms = function (t) {
  var i, c;
  var a = {},
    l = t.modules,
    u = t.nodeOps;
  for (i = 0; i < or.length; ++i) for (a[or[i]] = [], c = 0; c < l.length; ++c) o(l[c][or[i]]) && a[or[i]].push(l[c][or[i]]);
  function f(t) {
    var e = u.parentNode(t);
    o(e) && u.removeChild(e, t);
  }
  function d(t, e, n, s, i, c, l) {
    if (o(t.elm) && o(c) && (t = c[l] = ft(t)), t.isRootInsert = !i, function (t, e, n, s) {
      var i = t.data;
      if (o(i)) {
        var _c7 = o(t.componentInstance) && i.keepAlive;
        if (o(i = i.hook) && o(i = i.init) && i(t, !1), o(t.componentInstance)) return p(t, e), h(n, t.elm, s), r(_c7) && function (t, e, n, r) {
          var s,
            i = t;
          for (; i.componentInstance;) if (i = i.componentInstance._vnode, o(s = i.data) && o(s = s.transition)) {
            for (s = 0; s < a.activate.length; ++s) a.activate[s](nr, i);
            e.push(i);
            break;
          }
          h(n, t.elm, r);
        }(t, e, n, s), !0;
      }
    }(t, e, n, s)) return;
    var f = t.data,
      d = t.children,
      m = t.tag;
    o(m) ? (t.elm = t.ns ? u.createElementNS(t.ns, m) : u.createElement(m, t), g(t), _(t, d, e), o(f) && y(t, e), h(n, t.elm, s)) : r(t.isComment) ? (t.elm = u.createComment(t.text), h(n, t.elm, s)) : (t.elm = u.createTextNode(t.text), h(n, t.elm, s));
  }
  function p(t, e) {
    o(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, v(t) ? (y(t, e), g(t)) : (tr(t), e.push(t));
  }
  function h(t, e, n) {
    o(t) && (o(n) ? u.parentNode(n) === t && u.insertBefore(t, e, n) : u.appendChild(t, e));
  }
  function _(t, n, o) {
    if (e(n)) for (var _e50 = 0; _e50 < n.length; ++_e50) d(n[_e50], o, t.elm, null, !0, n, _e50);else s(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)));
  }
  function v(t) {
    for (; t.componentInstance;) t = t.componentInstance._vnode;
    return o(t.tag);
  }
  function y(t, e) {
    for (var _e51 = 0; _e51 < a.create.length; ++_e51) a.create[_e51](nr, t);
    i = t.data.hook, o(i) && (o(i.create) && i.create(nr, t), o(i.insert) && e.push(t));
  }
  function g(t) {
    var e;
    if (o(e = t.fnScopeId)) u.setStyleScope(t.elm, e);else {
      var _n47 = t;
      for (; _n47;) o(e = _n47.context) && o(e = e.$options._scopeId) && u.setStyleScope(t.elm, e), _n47 = _n47.parent;
    }
    o(e = Sn) && e !== t.context && e !== t.fnContext && o(e = e.$options._scopeId) && u.setStyleScope(t.elm, e);
  }
  function b(t, e, n, o, r, s) {
    for (; o <= r; ++o) d(n[o], s, t, e, !1, n, o);
  }
  function $(t) {
    var e, n;
    var r = t.data;
    if (o(r)) for (o(e = r.hook) && o(e = e.destroy) && e(t), e = 0; e < a.destroy.length; ++e) a.destroy[e](t);
    if (o(e = t.children)) for (n = 0; n < t.children.length; ++n) $(t.children[n]);
  }
  function w(t, e, n) {
    for (; e <= n; ++e) {
      var _n48 = t[e];
      o(_n48) && (o(_n48.tag) ? (C(_n48), $(_n48)) : f(_n48.elm));
    }
  }
  function C(t, e) {
    if (o(e) || o(t.data)) {
      var _n49;
      var _r27 = a.remove.length + 1;
      for (o(e) ? e.listeners += _r27 : e = function (t, e) {
        function n() {
          0 == --n.listeners && f(t);
        }
        return n.listeners = e, n;
      }(t.elm, _r27), o(_n49 = t.componentInstance) && o(_n49 = _n49._vnode) && o(_n49.data) && C(_n49, e), _n49 = 0; _n49 < a.remove.length; ++_n49) a.remove[_n49](t, e);
      o(_n49 = t.data.hook) && o(_n49 = _n49.remove) ? _n49(t, e) : e();
    } else f(t.elm);
  }
  function x(t, e, n, r) {
    for (var _s14 = n; _s14 < r; _s14++) {
      var _n50 = e[_s14];
      if (o(_n50) && rr(t, _n50)) return _s14;
    }
  }
  function O(t, e, s, i, c, l) {
    if (t === e) return;
    o(e.elm) && o(i) && (e = i[c] = ft(e));
    var f = e.elm = t.elm;
    if (r(t.isAsyncPlaceholder)) return void (o(e.asyncFactory.resolved) ? j(t.elm, e, s) : e.isAsyncPlaceholder = !0);
    if (r(e.isStatic) && r(t.isStatic) && e.key === t.key && (r(e.isCloned) || r(e.isOnce))) return void (e.componentInstance = t.componentInstance);
    var p;
    var h = e.data;
    o(h) && o(p = h.hook) && o(p = p.prepatch) && p(t, e);
    var m = t.children,
      _ = e.children;
    if (o(h) && v(e)) {
      for (p = 0; p < a.update.length; ++p) a.update[p](t, e);
      o(p = h.hook) && o(p = p.update) && p(t, e);
    }
    n(e.text) ? o(m) && o(_) ? m !== _ && function (t, e, r, s, i) {
      var c,
        a,
        l,
        f,
        p = 0,
        h = 0,
        m = e.length - 1,
        _ = e[0],
        v = e[m],
        y = r.length - 1,
        g = r[0],
        $ = r[y];
      var C = !i;
      for (; p <= m && h <= y;) n(_) ? _ = e[++p] : n(v) ? v = e[--m] : rr(_, g) ? (O(_, g, s, r, h), _ = e[++p], g = r[++h]) : rr(v, $) ? (O(v, $, s, r, y), v = e[--m], $ = r[--y]) : rr(_, $) ? (O(_, $, s, r, y), C && u.insertBefore(t, _.elm, u.nextSibling(v.elm)), _ = e[++p], $ = r[--y]) : rr(v, g) ? (O(v, g, s, r, h), C && u.insertBefore(t, v.elm, _.elm), v = e[--m], g = r[++h]) : (n(c) && (c = sr(e, p, m)), a = o(g.key) ? c[g.key] : x(g, e, p, m), n(a) ? d(g, s, t, _.elm, !1, r, h) : (l = e[a], rr(l, g) ? (O(l, g, s, r, h), e[a] = void 0, C && u.insertBefore(t, l.elm, _.elm)) : d(g, s, t, _.elm, !1, r, h)), g = r[++h]);
      p > m ? (f = n(r[y + 1]) ? null : r[y + 1].elm, b(t, f, r, h, y, s)) : h > y && w(e, p, m);
    }(f, m, _, s, l) : o(_) ? (o(t.text) && u.setTextContent(f, ""), b(f, null, _, 0, _.length - 1, s)) : o(m) ? w(m, 0, m.length - 1) : o(t.text) && u.setTextContent(f, "") : t.text !== e.text && u.setTextContent(f, e.text), o(h) && o(p = h.hook) && o(p = p.postpatch) && p(t, e);
  }
  function k(t, e, n) {
    if (r(n) && o(t.parent)) t.parent.data.pendingInsert = e;else for (var _t51 = 0; _t51 < e.length; ++_t51) e[_t51].data.hook.insert(e[_t51]);
  }
  var S = m("attrs,class,staticClass,staticStyle,key");
  function j(t, e, n, s) {
    var i;
    var c = e.tag,
      a = e.data,
      l = e.children;
    if (s = s || a && a.pre, e.elm = t, r(e.isComment) && o(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
    if (o(a) && (o(i = a.hook) && o(i = i.init) && i(e, !0), o(i = e.componentInstance))) return p(e, n), !0;
    if (o(c)) {
      if (o(l)) if (t.hasChildNodes()) {
        if (o(i = a) && o(i = i.domProps) && o(i = i.innerHTML)) {
          if (i !== t.innerHTML) return !1;
        } else {
          var _e52 = !0,
            _o31 = t.firstChild;
          for (var _t52 = 0; _t52 < l.length; _t52++) {
            if (!_o31 || !j(_o31, l[_t52], n, s)) {
              _e52 = !1;
              break;
            }
            _o31 = _o31.nextSibling;
          }
          if (!_e52 || _o31) return !1;
        }
      } else _(e, l, n);
      if (o(a)) {
        var _t53 = !1;
        for (var _o32 in a) if (!S(_o32)) {
          _t53 = !0, y(e, n);
          break;
        }
        !_t53 && a["class"] && yn(a["class"]);
      }
    } else t.data !== e.text && (t.data = e.text);
    return !0;
  }
  return function (t, e, s, i) {
    if (n(e)) return void (o(t) && $(t));
    var c = !1;
    var l = [];
    if (n(t)) c = !0, d(e, l);else {
      var _n51 = o(t.nodeType);
      if (!_n51 && rr(t, e)) O(t, e, l, null, null, i);else {
        if (_n51) {
          if (1 === t.nodeType && t.hasAttribute(L) && (t.removeAttribute(L), s = !0), r(s) && j(t, e, l)) return k(e, l, !0), t;
          f = t, t = new at(u.tagName(f).toLowerCase(), {}, [], void 0, f);
        }
        var _i9 = t.elm,
          _c8 = u.parentNode(_i9);
        if (d(e, l, _i9._leaveCb ? null : _c8, u.nextSibling(_i9)), o(e.parent)) {
          var _t54 = e.parent;
          var _n52 = v(e);
          for (; _t54;) {
            for (var _e53 = 0; _e53 < a.destroy.length; ++_e53) a.destroy[_e53](_t54);
            if (_t54.elm = e.elm, _n52) {
              for (var _e54 = 0; _e54 < a.create.length; ++_e54) a.create[_e54](nr, _t54);
              var _e55 = _t54.data.hook.insert;
              if (_e55.merged) {
                var _t55 = _e55.fns.slice(1);
                for (var _e56 = 0; _e56 < _t55.length; _e56++) _t55[_e56]();
              }
            } else tr(_t54);
            _t54 = _t54.parent;
          }
        }
        o(_c8) ? w([t], 0, 0) : o(t.tag) && $(t);
      }
    }
    var f;
    return k(e, l, c), e.elm;
  };
}({
  nodeOps: Qo,
  modules: [_r, yr, Sr, Er, Vr, W ? {
    create: hs,
    activate: hs,
    remove: function remove(t, e) {
      !0 !== t.data.show ? fs(t, e) : e();
    }
  } : {}].concat(dr)
});
G && document.addEventListener("selectionchange", function () {
  var t = document.activeElement;
  t && t.vmodel && Cs(t, "input");
});
var _s = {
  inserted: function inserted(t, e, n, o) {
    "select" === n.tag ? (o.elm && !o.elm._vOptions ? ce(n, "postpatch", function () {
      _s.componentUpdated(t, e, n);
    }) : vs(t, e, n.context), t._vOptions = [].map.call(t.options, bs)) : ("textarea" === n.tag || Xo(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", $s), t.addEventListener("compositionend", ws), t.addEventListener("change", ws), G && (t.vmodel = !0)));
  },
  componentUpdated: function componentUpdated(t, e, n) {
    if ("select" === n.tag) {
      vs(t, e, n.context);
      var _o33 = t._vOptions,
        _r28 = t._vOptions = [].map.call(t.options, bs);
      if (_r28.some(function (t, e) {
        return !I(t, _o33[e]);
      })) {
        (t.multiple ? e.value.some(function (t) {
          return gs(t, _r28);
        }) : e.value !== e.oldValue && gs(e.value, _r28)) && Cs(t, "change");
      }
    }
  }
};
function vs(t, e, n) {
  ys(t, e), (q || Z) && setTimeout(function () {
    ys(t, e);
  }, 0);
}
function ys(t, e, n) {
  var o = e.value,
    r = t.multiple;
  if (r && !Array.isArray(o)) return;
  var s, i;
  for (var _e57 = 0, _n53 = t.options.length; _e57 < _n53; _e57++) if (i = t.options[_e57], r) s = D(o, bs(i)) > -1, i.selected !== s && (i.selected = s);else if (I(bs(i), o)) return void (t.selectedIndex !== _e57 && (t.selectedIndex = _e57));
  r || (t.selectedIndex = -1);
}
function gs(t, e) {
  return e.every(function (e) {
    return !I(e, t);
  });
}
function bs(t) {
  return "_value" in t ? t._value : t.value;
}
function $s(t) {
  t.target.composing = !0;
}
function ws(t) {
  t.target.composing && (t.target.composing = !1, Cs(t.target, "input"));
}
function Cs(t, e) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function xs(t) {
  return !t.componentInstance || t.data && t.data.transition ? t : xs(t.componentInstance._vnode);
}
var Os = {
    bind: function bind(t, _ref3, n) {
      var e = _ref3.value;
      var o = (n = xs(n)).data && n.data.transition,
        r = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
      e && o ? (n.data.show = !0, us(n, function () {
        t.style.display = r;
      })) : t.style.display = e ? r : "none";
    },
    update: function update(t, _ref4, o) {
      var e = _ref4.value,
        n = _ref4.oldValue;
      if (!e == !n) return;
      (o = xs(o)).data && o.data.transition ? (o.data.show = !0, e ? us(o, function () {
        t.style.display = t.__vOriginalDisplay;
      }) : fs(o, function () {
        t.style.display = "none";
      })) : t.style.display = e ? t.__vOriginalDisplay : "none";
    },
    unbind: function unbind(t, e, n, o, r) {
      r || (t.style.display = t.__vOriginalDisplay);
    }
  },
  ks = {
    model: _s,
    show: Os
  };
var Ss = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function js(t) {
  var e = t && t.componentOptions;
  return e && e.Ctor.options["abstract"] ? js(Ue(e.children)) : t;
}
function As(t) {
  var e = {},
    n = t.$options;
  for (var _o34 in n.propsData) e[_o34] = t[_o34];
  var o = n._parentListeners;
  for (var _t56 in o) e[w(_t56)] = o[_t56];
  return e;
}
function Ts(t, e) {
  if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
    props: e.componentOptions.propsData
  });
}
var Es = function Es(t) {
    return t.tag || Ae(t);
  },
  Ps = function Ps(t) {
    return "show" === t.name;
  };
var Is = {
  name: "transition",
  props: Ss,
  "abstract": !0,
  render: function render(t) {
    var _this3 = this;
    var e = this.$slots["default"];
    if (!e) return;
    if (e = e.filter(Es), !e.length) return;
    var n = this.mode,
      o = e[0];
    if (function (t) {
      for (; t = t.parent;) if (t.data.transition) return !0;
    }(this.$vnode)) return o;
    var r = js(o);
    if (!r) return o;
    if (this._leaving) return Ts(t, o);
    var i = "__transition-".concat(this._uid, "-");
    r.key = null == r.key ? r.isComment ? i + "comment" : i + r.tag : s(r.key) ? 0 === String(r.key).indexOf(i) ? r.key : i + r.key : r.key;
    var c = (r.data || (r.data = {})).transition = As(this),
      a = this._vnode,
      l = js(a);
    if (r.data.directives && r.data.directives.some(Ps) && (r.data.show = !0), l && l.data && !function (t, e) {
      return e.key === t.key && e.tag === t.tag;
    }(r, l) && !Ae(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
      var _e58 = l.data.transition = j({}, c);
      if ("out-in" === n) return this._leaving = !0, ce(_e58, "afterLeave", function () {
        _this3._leaving = !1, _this3.$forceUpdate();
      }), Ts(t, o);
      if ("in-out" === n) {
        if (Ae(r)) return a;
        var _t57;
        var _n54 = function _n54() {
          _t57();
        };
        ce(c, "afterEnter", _n54), ce(c, "enterCancelled", _n54), ce(_e58, "delayLeave", function (e) {
          _t57 = e;
        });
      }
    }
    return o;
  }
};
var Ds = j({
  tag: String,
  moveClass: String
}, Ss);
delete Ds.mode;
var Ns = {
  props: Ds,
  beforeMount: function beforeMount() {
    var _this4 = this;
    var t = this._update;
    this._update = function (e, n) {
      var o = jn(_this4);
      _this4.__patch__(_this4._vnode, _this4.kept, !1, !0), _this4._vnode = _this4.kept, o(), t.call(_this4, e, n);
    };
  },
  render: function render(t) {
    var e = this.tag || this.$vnode.data.tag || "span",
      n = Object.create(null),
      o = this.prevChildren = this.children,
      r = this.$slots["default"] || [],
      s = this.children = [],
      i = As(this);
    for (var _t58 = 0; _t58 < r.length; _t58++) {
      var _e59 = r[_t58];
      _e59.tag && null != _e59.key && 0 !== String(_e59.key).indexOf("__vlist") && (s.push(_e59), n[_e59.key] = _e59, (_e59.data || (_e59.data = {})).transition = i);
    }
    if (o) {
      var _r29 = [],
        _s15 = [];
      for (var _t59 = 0; _t59 < o.length; _t59++) {
        var _e60 = o[_t59];
        _e60.data.transition = i, _e60.data.pos = _e60.elm.getBoundingClientRect(), n[_e60.key] ? _r29.push(_e60) : _s15.push(_e60);
      }
      this.kept = t(e, null, _r29), this.removed = _s15;
    }
    return t(e, null, s);
  },
  updated: function updated() {
    var t = this.prevChildren,
      e = this.moveClass || (this.name || "v") + "-move";
    t.length && this.hasMove(t[0].elm, e) && (t.forEach(Ms), t.forEach(Ls), t.forEach(Rs), this._reflow = document.body.offsetHeight, t.forEach(function (t) {
      if (t.data.moved) {
        var _n55 = t.elm,
          _o35 = _n55.style;
        os(_n55, e), _o35.transform = _o35.WebkitTransform = _o35.transitionDuration = "", _n55.addEventListener(Qr, _n55._moveCb = function t(o) {
          o && o.target !== _n55 || o && !/transform$/.test(o.propertyName) || (_n55.removeEventListener(Qr, t), _n55._moveCb = null, rs(_n55, e));
        });
      }
    }));
  },
  methods: {
    hasMove: function hasMove(t, e) {
      if (!Gr) return !1;
      if (this._hasMove) return this._hasMove;
      var n = t.cloneNode();
      t._transitionClasses && t._transitionClasses.forEach(function (t) {
        Wr(n, t);
      }), Hr(n, e), n.style.display = "none", this.$el.appendChild(n);
      var o = cs(n);
      return this.$el.removeChild(n), this._hasMove = o.hasTransform;
    }
  }
};
function Ms(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function Ls(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function Rs(t) {
  var e = t.data.pos,
    n = t.data.newPos,
    o = e.left - n.left,
    r = e.top - n.top;
  if (o || r) {
    t.data.moved = !0;
    var _e61 = t.elm.style;
    _e61.transform = _e61.WebkitTransform = "translate(".concat(o, "px,").concat(r, "px)"), _e61.transitionDuration = "0s";
  }
}
var Fs = {
  Transition: Is,
  TransitionGroup: Ns
};
xo.config.mustUseProp = function (t, e, n) {
  return "value" === n && Io(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
}, xo.config.isReservedTag = Zo, xo.config.isReservedAttr = Po, xo.config.getTagNamespace = function (t) {
  return Go(t) ? "svg" : "math" === t ? "math" : void 0;
}, xo.config.isUnknownElement = function (t) {
  if (!W) return !0;
  if (Zo(t)) return !1;
  if (t = t.toLowerCase(), null != Jo[t]) return Jo[t];
  var e = document.createElement(t);
  return t.indexOf("-") > -1 ? Jo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Jo[t] = /HTMLUnknownElement/.test(e.toString());
}, j(xo.options.directives, ks), j(xo.options.components, Fs), xo.prototype.__patch__ = W ? ms : T, xo.prototype.$mount = function (t, e) {
  return function (t, e, n) {
    var o;
    t.$el = e, t.$options.render || (t.$options.render = lt), Pn(t, "beforeMount"), o = function o() {
      t._update(t._render(), n);
    }, new wn(t, o, T, {
      before: function before() {
        t._isMounted && !t._isDestroyed && Pn(t, "beforeUpdate");
      }
    }, !0), n = !1;
    var r = t._preWatchers;
    if (r) for (var _t60 = 0; _t60 < r.length; _t60++) r[_t60].run();
    return null == t.$vnode && (t._isMounted = !0, Pn(t, "mounted")), t;
  }(this, t = t && W ? function (t) {
    if ("string" == typeof t) {
      return document.querySelector(t) || document.createElement("div");
    }
    return t;
  }(t) : void 0, e);
}, W && setTimeout(function () {
  U.devtools && nt && nt.emit("init", xo);
}, 0), j(xo, _n), module.exports = xo;

/***/ }),

/***/ 6639:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><path d=\"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z\"></path></svg>"

/***/ }),

/***/ 6679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkActionvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAction; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAction.vue?vue&type=template&id=67ed0ecb
var TkActionvue_type_template_id_67ed0ecb = __webpack_require__(7285);
;// ./src/client/view/components/TkAction.vue?vue&type=template&id=67ed0ecb

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAction.vue?vue&type=script&lang=js
var TkActionvue_type_script_lang_js = __webpack_require__(3397);
;// ./src/client/view/components/TkAction.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkActionvue_type_script_lang_js = (TkActionvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAction.vue?vue&type=style&index=0&id=67ed0ecb&prod&lang=css
var TkActionvue_type_style_index_0_id_67ed0ecb_prod_lang_css = __webpack_require__(3430);
;// ./src/client/view/components/TkAction.vue?vue&type=style&index=0&id=67ed0ecb&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAction.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkActionvue_type_script_lang_js,
  TkActionvue_type_template_id_67ed0ecb/* render */.XX,
  TkActionvue_type_template_id_67ed0ecb/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAction = (component.exports);

/***/ }),

/***/ 6727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-comments-title {\n  font-size: 1.25rem;\n  font-weight: bold;\n  line-height: 1;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.tk-comments-count.__hidden {\n  visibility: hidden;\n}\n.tk-comments-count {\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.tk-comments-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  white-space: nowrap;\n}\n.tk-comments-container {\n  min-height: 10rem;\n  display: flex;\n  flex-direction: column;\n}\n.tk-comments-no {\n  flex: 1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tk-comments-error {\n  font-size: 0.75em;\n  color: #ff0000;\n}\n.tk-comments-sort {\n  display: flex;\n  align-items: center;\n  gap: 0.75em;\n  margin-right: 0.5em;\n  line-height: 1;\n}\n.tk-sort-item {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.75rem;\n  line-height: 1;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: rgba(64, 158, 255, 0.6);\n}\n.tk-sort-item.__active {\n  color: #409eff;\n}\n.tk-sort-item:focus {\n  outline: none;\n  color: #409eff;\n}\n.tk-icon.__comments {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  height: 0.75rem;\n  width: 0.75rem;\n  line-height: 0;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: #409eff;\n}\n.tk-icon.__comments svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.twikoo div.code-toolbar {\n  position: relative;\n  border-radius: .3em\n}\n.twikoo div.code-toolbar>.toolbar {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  font-size: .8125rem;\n  font-weight: 500;\n  display: flex;\n}\n.twikoo div.code-toolbar>.toolbar>.toolbar-item {\n  margin-left: .3em\n}\n.twikoo div.code-toolbar>.toolbar>.toolbar-item>a,\n.twikoo div.code-toolbar>.toolbar>.toolbar-item>button,\n.twikoo div.code-toolbar>.toolbar>.toolbar-item>span {\n  padding: 2px 4px;\n  border-radius: .3em;\n}\n.twikoo div.code-toolbar>.toolbar>.toolbar-item>button {\n  border: 1px solid rgba(128, 128, 128, 0.31);\n}\n.twikoo div.code-toolbar>.toolbar>.toolbar-item>button:hover {\n  cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6756:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9211);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("e6b19834", content, true, {});

/***/ }),

/***/ 6768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ Appvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/App.vue?vue&type=template&id=2dfc7687
var Appvue_type_template_id_2dfc7687 = __webpack_require__(1573);
;// ./src/client/view/App.vue?vue&type=template&id=2dfc7687

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/App.vue?vue&type=script&lang=js
var Appvue_type_script_lang_js = __webpack_require__(8926);
;// ./src/client/view/App.vue?vue&type=script&lang=js
 /* harmony default export */ var view_Appvue_type_script_lang_js = (Appvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/App.vue?vue&type=style&index=0&id=2dfc7687&prod&lang=css
var Appvue_type_style_index_0_id_2dfc7687_prod_lang_css = __webpack_require__(1288);
;// ./src/client/view/App.vue?vue&type=style&index=0&id=2dfc7687&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/App.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  view_Appvue_type_script_lang_js,
  Appvue_type_template_id_2dfc7687/* render */.XX,
  Appvue_type_template_id_2dfc7687/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);

/***/ }),

/***/ 6785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-pagination,\n.tk-pagination-pagers {\n  display: flex;\n}\n.tk-pagination {\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.tk-pagination-options {\n  display: flex;\n  align-items: center;\n}\n.tk-pagination-pager {\n  width: 2em;\n  height: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.tk-pagination-pager.__current {\n  background-color: #409eff;\n  pointer-events: none;\n}\n.tk-pagination .el-input {\n  width: 50px;\n}\n.tk-pagination .el-input .el-input__inner {\n  padding: 0;\n  height: 28px;\n  text-align: center;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.tk-pagination .el-input .el-input__inner::-webkit-inner-spin-button,\n.tk-pagination .el-input .el-input__inner::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * OwO v1.0.2\n * Source: https://github.com/DIYgod/OwO/blob/master/dist/OwO.min.css\n * Author: DIYgod\n * Modified by: iMaeGoo\n * Released under the MIT License.\n */\n\n.OwO {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.OwO.OwO-open .OwO-body {\n  display: block;\n}\n\n.OwO .OwO-logo {\n  width: 1.125em;\n  display: flex;\n}\n\n.OwO .OwO-body {\n  display: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  max-width: 500px;\n  color: #4a4a4a;\n  background-color: #ffffff;\n  border: 1px solid rgba(144,147,153,0.31);\n  top: 2em;\n  border-radius: 0 4px 4px;\n  z-index: 1000;\n}\n\n.night .OwO .OwO-body,\n.darkmode .OwO .OwO-body,\n.DarkMode .OwO .OwO-body,\n[data-theme=\"dark\"] .OwO .OwO-body,\n[data-user-color-scheme=\"dark\"] .OwO .OwO-body {\n  color: #ffffff;\n  background-color: #4a4a4a;\n}\n\n.OwO .OwO-body .OwO-items {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: none;\n  padding: 10px;\n  padding-right: 0;\n  margin: 0;\n  overflow: auto;\n  font-size: 0;\n}\n\n.OwO .OwO-body .OwO-items .OwO-item {\n  list-style-type: none;\n  padding: 5px 10px;\n  border-radius: 5px;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 14px;\n  cursor: pointer;\n  -webkit-transition: .3s;\n  transition: .3s;\n  text-align: center;\n}\n\n.OwO .OwO-body .OwO-items .OwO-item:hover {\n  background-color: rgba(144,147,153,0.13);\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\n}\n\n.OwO .OwO-body .OwO-items-emoji .OwO-item {\n  font-size: 20px;\n  line-height: 19px;\n}\n\n.OwO .OwO-body .OwO-items-image .OwO-item {\n  width: 14%;\n  box-sizing: border-box;\n}\n\n@media screen and (max-width: 600px) {\n  #twikoo .OwO-items > .OwO-item {\n    width: 16%;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  #twikoo .OwO-items > .OwO-item {\n    width: 20%;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  #twikoo .OwO-items > .OwO-item {\n    width: 25%;\n  }\n}\n\n@media screen and (max-width: 330px) {\n  #twikoo .OwO-items > .OwO-item {\n    width: 33%;\n  }\n}\n\n\n.OwO .OwO-body .OwO-items-image .OwO-item img {\n  max-width: 100%;\n}\n\n.OwO .OwO-body .OwO-items-show {\n  display: block;\n}\n\n.OwO .OwO-body .OwO-bar {\n  width: 100%;\n  border-top: 1px solid rgba(144,147,153,0.31);\n  border-radius: 0 0 4px 4px;\n}\n\n.OwO .OwO-body .OwO-bar .OwO-packages {\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n}\n\n.OwO .OwO-body .OwO-bar .OwO-packages li {\n  list-style-type: none;\n  display: inline-block;\n  line-height: 30px;\n  font-size: 14px;\n  padding: 0 10px;\n  cursor: pointer;\n  margin-right: 3px;\n}\n\n.OwO .OwO-body .OwO-bar .OwO-packages li:nth-child(1) {\n  border-radius: 0 0 0 3px;\n}\n\n.OwO .OwO-body .OwO-bar .OwO-packages li:hover {\n  background-color: rgba(144,147,153,0.13);\n}\n\n.OwO .OwO-body .OwO-bar .OwO-packages .OwO-package-active {\n  background-color: rgba(144,147,153,0.13);\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6884:
/***/ (function(module) {

"use strict";


function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6937:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55\"></path></svg>"

/***/ }),

/***/ 7051:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M481.92,134.48C440.87,54.18,352.26,8,255.91,8,137.05,8,37.51,91.68,13.47,203.66c26-46.49,86.22-79.14,149.46-79.14,79.27,0,121.09,48.93,122.25,50.18,22,23.8,33,50.39,33,83.1,0,10.4-5.31,25.82-15.11,38.57-1.57,2-6.39,4.84-6.39,11,0,5.06,3.29,9.92,9.14,14,27.86,19.37,80.37,16.81,80.51,16.81A115.39,115.39,0,0,0,444.94,322a118.92,118.92,0,0,0,58.95-102.44C504.39,176.13,488.39,147.26,481.92,134.48ZM212.77,475.67a154.88,154.88,0,0,1-46.64-45c-32.94-47.42-34.24-95.6-20.1-136A155.5,155.5,0,0,1,203,215.75c59-45.2,94.84-5.65,99.06-1a80,80,0,0,0-4.89-10.14c-9.24-15.93-24-36.41-56.56-53.51-33.72-17.69-70.59-18.59-77.64-18.59-38.71,0-77.9,13-107.53,35.69C35.68,183.3,12.77,208.72,8.6,243c-1.08,12.31-2.75,62.8,23,118.27a248,248,0,0,0,248.3,141.61C241.78,496.26,214.05,476.24,212.77,475.67Zm250.72-98.33a7.76,7.76,0,0,0-7.92-.23,181.66,181.66,0,0,1-20.41,9.12,197.54,197.54,0,0,1-69.55,12.52c-91.67,0-171.52-63.06-171.52-144A61.12,61.12,0,0,1,200.61,228,168.72,168.72,0,0,0,161.85,278c-14.92,29.37-33,88.13,13.33,151.66,6.51,8.91,23,30,56,47.67,23.57,12.65,49,19.61,71.7,19.61,35.14,0,115.43-33.44,163-108.87A7.75,7.75,0,0,0,463.49,377.34Z\"></path></svg>"

/***/ }),

/***/ 7080:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getQQAvatar = getQQAvatar;
exports.isQQ = isQQ;
exports.normalizeMail = normalizeMail;
function normalizeMail(mail) {
  return String(mail).trim().toLowerCase();
}
function isQQ(mail) {
  return /^[1-9][0-9]{4,10}$/.test(mail) || /^[1-9][0-9]{4,10}@qq.com$/i.test(mail);
}
function getQQAvatar(qq) {
  var qqNum = qq.replace(/@qq.com/ig, '');
  return "https://thirdqq.qlogo.cn/g?b=sdk&nk=".concat(qqNum, "&s=140");
}

/***/ }),

/***/ 7120:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _typeof = (__webpack_require__(9367)["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7278:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _typeof = (__webpack_require__(9367)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7285:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-action"
  }, [_c('a', {
    staticClass: "tk-action-link",
    "class": {
      'tk-liked': _vm.liked
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.onLike
    }
  }, [_c('span', {
    staticClass: "tk-action-icon",
    domProps: {
      "innerHTML": _vm._s(_vm.iconLike)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-action-icon tk-action-icon-solid",
    domProps: {
      "innerHTML": _vm._s(_vm.iconLikeSolid)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-action-count"
  }, [_vm._v(_vm._s(_vm.likeCountStr))])]), _vm._v(" "), _vm.showDislike ? _c('a', {
    staticClass: "tk-action-link",
    "class": {
      'tk-disliked': _vm.disliked
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.onDislike
    }
  }, [_c('span', {
    staticClass: "tk-action-icon",
    domProps: {
      "innerHTML": _vm._s(_vm.iconDislike)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-action-icon tk-action-icon-solid",
    domProps: {
      "innerHTML": _vm._s(_vm.iconDislikeSolid)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-action-count"
  }, [_vm._v(_vm._s(_vm.dislikeCountStr))])]) : _vm._e(), _vm._v(" "), _c('a', {
    staticClass: "tk-action-link",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.onReply
    }
  }, [_c('span', {
    staticClass: "tk-action-icon",
    domProps: {
      "innerHTML": _vm._s(_vm.iconComment)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-action-icon tk-action-icon-solid",
    domProps: {
      "innerHTML": _vm._s(_vm.iconCommentSolid)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tk-action-count"
  }, [_vm._v(_vm._s(_vm.repliesCountStr))])])]);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 7397:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><path d=\"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm52.7 93c8.8-15.2 28.3-20.5 43.5-11.7 15.3 8.8 20.5 28.3 11.7 43.6-8.8 15.2-28.3 20.5-43.5 11.7-15.3-8.9-20.5-28.4-11.7-43.6zM87.4 287.9c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.6-14.3 31.9-31.9 31.9zm28.1 3.1c22.3-17.9 22.4-51.9 0-69.9 8.6-32.8 29.1-60.7 56.5-79.1l23.7 39.6c-51.5 36.3-51.5 112.5 0 148.8L172 370c-27.4-18.3-47.8-46.3-56.5-79zm228.7 131.7c-15.3 8.8-34.7 3.6-43.5-11.7-8.8-15.3-3.6-34.8 11.7-43.6 15.2-8.8 34.7-3.6 43.5 11.7 8.8 15.3 3.6 34.8-11.7 43.6zm.3-69.5c-26.7-10.3-56.1 6.6-60.5 35-5.2 1.4-48.9 14.3-96.7-9.4l22.5-40.3c57 26.5 123.4-11.7 128.9-74.4l46.1.7c-2.3 34.5-17.3 65.5-40.3 88.4zm-5.9-105.3c-5.4-62-71.3-101.2-128.9-74.4l-22.5-40.3c47.9-23.7 91.5-10.8 96.7-9.4 4.4 28.3 33.8 45.3 60.5 35 23.1 22.9 38 53.9 40.2 88.5l-46 .6z\"></path></svg>"

/***/ }),

/***/ 7435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ = __webpack_require__(8129);
var timeAgo = function timeAgo(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  if (date) {
    try {
      var oldTime = date.getTime();
      var currTime = Date.now();
      var diffValue = currTime - oldTime;
      var days = Math.floor(diffValue / (24 * 3600 * 1000));
      if (days === 0) {
        // 计算相差小时数
        var leave1 = diffValue % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        if (hours === 0) {
          // 计算相差分钟数
          var leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
          var minutes = Math.floor(leave2 / (60 * 1000));
          if (minutes === 0) {
            // 计算相差秒数
            var leave3 = leave2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
            var seconds = Math.round(leave3 / 1000);
            return seconds + " ".concat((0, _.t)('TIMEAGO_SECONDS'));
          }
          return minutes + " ".concat((0, _.t)('TIMEAGO_MINUTES'));
        }
        return hours + " ".concat((0, _.t)('TIMEAGO_HOURS'));
      }
      if (days < 0) return (0, _.t)('TIMEAGO_NOW');
      if (days < 8) {
        return days + " ".concat((0, _.t)('TIMEAGO_DAYS'));
      } else {
        return dateFormat(date);
      }
    } catch (error) {
      _.logger.log('timeAgo 错误', error);
    }
  }
};
var dateFormat = function dateFormat(date) {
  var vDay = padWithZeros(date.getDate(), 2);
  var vMonth = padWithZeros(date.getMonth() + 1, 2);
  var vYear = padWithZeros(date.getFullYear(), 2);
  return "".concat(vYear, "-").concat(vMonth, "-").concat(vDay);
};
var padWithZeros = function padWithZeros(vNumber, width) {
  var numAsString = vNumber.toString();
  while (numAsString.length < width) {
    numAsString = '0' + numAsString;
  }
  return numAsString;
};
var _default = exports["default"] = timeAgo;

/***/ }),

/***/ 7564:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(3852));
var _ADMIN_CLIENT_VERSION;
/* eslint-disable no-template-curly-in-string */

/**
 * 把 i18n 的 key 中相同的部分提取出来可以减小打包 js 的体积
 */
var S = {
  AC: 'ADMIN_COMMENT',
  ACC: 'ADMIN_CONFIG_CATEGORY',
  ACI: 'ADMIN_CONFIG_ITEM',
  AI: 'ADMIN_IMPORT'
};
var pushooChannels = ['qmsg', 'serverchan', 'pushplus', 'pushplushxtrip', 'dingtalk', 'wecom', 'bark', 'gocqhttp', 'atri', 'pushdeer', 'igot', 'telegram', 'feishu'].map(function (s) {
  return "\"".concat(s, "\"");
});
var smtpServices = ['126', '163', '1und1', 'AOL', 'DebugMail', 'DynectEmail', 'FastMail', 'GandiMail', 'Gmail', 'Godaddy', 'GodaddyAsia', 'GodaddyEurope', 'Hotmail', 'Mail.ru', 'Maildev', 'Mailgun', 'Mailjet', 'Mailosaur', 'Mandrill', 'Naver', 'OpenMailBox', 'Outlook365', 'Postmark', 'QQ', 'QQex', 'SES', 'SES-EU-WEST-1', 'SES-US-EAST-1', 'SES-US-WEST-2', 'SendCloud', 'SendGrid', 'SendPulse', 'SendinBlue', 'Sparkpost', 'Yahoo', 'Yandex', 'Zoho', 'hot.ee', 'iCloud', 'mail.ee', 'qiye.aliyun'].map(function (s) {
  return "\"".concat(s, "\"");
});
var highlightThemes = ['default', 'coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'].map(function (s) {
  return "\"".concat(s, "\"");
});
var highlightPlugins = ['showLanguage', 'copyButton'].map(function (s) {
  return "\"".concat(s, "\"");
});
var imageBedServices = ['qcloud', '7bu (https://7bu.top)', 'see (https://s.ee)', 'lskypro', 'piclist', 'easyimage', 'chevereto', 'S3 / R2 / MinIO'].map(function (s) {
  return "\"".concat(s, "\"");
});
var customImageBedServices = ['lskypro', 'piclist', 'easyimage', 's3'].map(function (s) {
  return "\"".concat(s, "\"");
});
var defaultGravatar = ['404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'].map(function (s) {
  return "\"".concat(s, "\"");
});

/**
 * 把所有语言翻译放在同一对象下可以减小打包 js 的体积 (~17kb)
 *
 * [key]: [
 *   'zh-CN',
 *   'zh-HK', // Contributor: [Jerry Wong](https://github.com/jerryc127)
 *   'zh-TW', // Contributor: [Jerry Wong](https://github.com/jerryc127), [kuohuanhuan](https://github.com/kuohuanhuan)
 *   'en'     // Contributor: [PCloud](https://github.com/HEIGE-PCloud)
 *   'uz-UZ'  // Contributor: [Nomad](https://github.com/digitaltwinz)
 *   'ja-JP'  // Contributor: [yumexupanic](https://github.com/yumexupanic), [HakoMC](https://github.com/HakoMC)
 *   'ko-KR'  // Contributor: [다배](https://github.com/tipsyoncola)
 * ]
 */
var _default = exports["default"] = (_ADMIN_CLIENT_VERSION = {
  ADMIN_CLIENT_VERSION: ['前端版本：', '前端版本：', '前端版本：', 'Client version: ', 'Клиент версияси: ', 'クライアントバージョン：', '클라이언트 버전: '],
  ADMIN_SERVER_VERSION: ['云函数版本：', '云函數版本：', '雲端函式版本：', 'Server version: ', 'Сервернинг версияси: ', 'サーバーサイドバージョン: ', '서버 버전: ']
}, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.AC, ['评论管理', '評論管理', '留言管理', 'Comment', 'Изоҳ', 'コメント管理', '댓글 관리']), S.AC + '_DELETE', ['删除', '刪除', '移除', 'Delete', 'Ўчирмоқ', '削除', '삭제']), S.AC + '_DELETE_CONFIRM', ['确认删除？', '確認刪除？', '確認移除？', 'Confirm deletion?', 'Ўчириш тасдиқлансинми?', '本当に削除しますか？', '정말 삭제하시겠습니까?']), S.AC + '_FILTER_ALL', ['全部', '全部', '全部', 'All', 'Ҳаммаси', '全部', '전체']), S.AC + '_FILTER_VISIBLE', ['只看可见', '只看可見', '只看可見', 'Visible', 'Кўринадиган', '表示中のみ', '표시 댓글']), S.AC + '_FILTER_HIDDEN', ['只看隐藏', '只看隱藏', '只看隱藏', 'Hidden', 'Яширилган', '非表示中のみ', '숨김 댓글']), S.AC + '_HIDE', ['隐藏', '隱藏', '隱藏', 'Hide', 'Яширмоқ', '非表示', '숨기기']), S.AC + '_IS_SPAM_SUFFIX', [' (已隐藏)', ' (已隱藏)', ' (已隱藏)', ' (Hidden)', ' (Яширилган)', ' (非表示)', ' (숨김 처리됨)']), S.AC + '_SEARCH', ['搜索', '搜索', '搜尋', 'Search', 'Излаш', '検索', '검색']), S.AC + '_SEARCH_PLACEHOLDER', ['搜索昵称、邮箱、网址、IP、评论正文、文章地址', '搜索暱稱、郵箱、網址、IP、評論正文、文章地址', '搜索暱稱、郵件、網址、IP、留言正文、文章路徑', 'Search by nick, mail, website, IP, comment, or article path', 'Тахаллус, почта, веб-сайт, ИП, шарҳ ёки мақола йўли бўйича излаш', '名前、メールアドレス、ウェブサイトURL、IPアドレス、コメント内容、記事のURLを検索', '닉네임, 이메일, 웹사이트, IP, 댓글 내용, 게시글 주소로 검색']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.AC + '_SHOW', ['显示', '顯示', '顯示', 'Show', 'Кўрсатиш', '表示', '표시']), S.AC + '_TOP', ['置顶', '置頂', '置頂', 'Pin', 'Қадамоқ', '固定する', '고정']), S.AC + '_UNTOP', ['取消置顶', '取消置頂', '取消置頂', 'Unpin', 'Қадоқни ечмоқ', '固定を解除', '고정 해제']), S.AC + '_VIEW', ['查看', '查看', '檢視', 'View', 'Кўриниш', '閲覧', '보기']), S.AC + '_SECURITY_ALERT', ['评论链接与本站不同！出于安全考虑，请手动复制以下网址访问：', '評論連結與本站不同！出於安全考慮，請手動複製以下網址訪問：', '留言連結與本站不同！出於安全考慮，請手動複製以下網址訪問：', 'The comment link is different from this site! For security reasons, please manually copy the following URL to visit:', 'Шарҳ ҳаволаси бу сайтдан фарқ қилади! Хавфсизлик сабабларига кўра, илтимос, қуйидаги URL манзилни қўлда нусха олинг:', 'コメントリンクがこのサイトと異なります！セキュリティ上の理由から、以下のURLを手動でコピーしてアクセスしてください：', '댓글 링크가 이 사이트와 다릅니다! 보안상의 이유로, 다음 URL을 수동으로 복사하여 방문하세요:']), S.AC + '_PARSE_ERROR', ['无法解析评论链接，请仔细检查链接后手动复制以下网址访问：', '無法解析評論連結，請仔細檢查連結後手動複製以下網址訪問：', '無法解析留言連結，請仔細檢查連結後手動複製以下網址訪問：', 'Unable to parse comment link. Please check and manually copy the following URL:', 'Шарҳ ҳаволасини таҳлил қилиб бўлмади. Илтимос, қуйидаги манзилни текширинг ва қўлда нусха олинг:', 'コメントリンクを解析できません。以下のURLを確認して手動でコピーしてください：', '댓글 링크를 파싱할 수 없습니다. 다음 주소를 확인하고 수동으로 복사하세요:']), "ADMIN_CONFIG", ['配置管理', '配置管理', '設定值管理', 'Configuration', 'Конфигурация', '設定管理', '환경설정']), S.ACC + '_COMMON', ['通用', '通用', '一般', 'General', 'Умумий', '一般', '일반']), S.ACC + '_IM', ['即时通知', '即時通知', '即時通知', 'Instant notification', 'Тезкор хабарнома', '即時通知', '실시간 알림']), S.ACC + '_MAIL', ['邮件通知', '郵件通知', '郵件通知', 'Email notification', 'Электрон почта хабарномаси', 'メール通知', '이메일 알림']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACC + '_PLUGIN', ['插件', '插件', '擴充功能', 'Plugin', 'Плагин', 'プラグイン', '플러그인']), S.ACC + '_PRIVACY', ['隐私', '隱私', '隱私權', 'Privacy', 'Шахсий қоидалар', 'プライバシー', '개인정보']), S.ACC + '_SPAM', ['反垃圾', '反垃圾', '防垃圾', 'Spam', 'Спам', 'スパム対策', '스팸 관리']), S.ACC + '_CAPTCHA', ['人机验证', '人機驗證', '人機驗證', 'CAPTCHA', 'CAPTCHA', 'CAPTCHA', 'CAPTCHA']), "ADMIN_CONFIG_IMAGE_CDN_NONE", ['无（不启用图片上传）', '無（不啟用圖片上傳）', '無（不啟用圖片上傳）', 'None (disable image upload)', 'Йўқ (расм юклашни ўчириш)', 'なし（画像アップロードを無効にする）', '없음 (이미지 업로드 비활성화)']), "ADMIN_CONFIG_IMAGE_SERVICE_NONE", ['禁用图片上传', '禁用圖片上傳', '禁用圖片上傳', 'Disable image uploading', 'Расм юклашни ўчириш', '画像のアップロードを無効にする', '이미지 업로드 비활성화']), "ADMIN_CONFIG_CAPTCHA_NONE", ['无', '無', '無', 'None', 'Йўқ', 'なし', '없음']), "ADMIN_CONFIG_CAPTCHA_TURNSTILE", ['Cloudflare Turnstile', 'Cloudflare Turnstile', 'Cloudflare Turnstile', 'Cloudflare Turnstile', 'Cloudflare Turnstile', 'Cloudflare Turnstile', 'Cloudflare Turnstile']), "ADMIN_CONFIG_CAPTCHA_GEETEST", ['极验 Geetest', '極驗 Geetest', '極驗 Geetest', 'GeeTest', 'GeeTest', 'GeeTest', 'GeeTest']), "ADMIN_CONFIG_EMAIL_TEST", ['邮件通知测试', '郵件通知測試', '郵件通知測試', 'Email notification test', 'Электрон почта хабарномаси тести', 'メール通知テスト', '이메일 알림 테스트']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "ADMIN_CONFIG_EMAIL_TEST_BTN", ['发送测试邮件', '發送測試郵件', '發送測試郵件', 'Send test mail', 'Синов хатини юбориш', 'テストメールを送信', '테스트 메일 발송']), "ADMIN_CONFIG_EMAIL_TEST_HELP", ['输入一个邮箱地址，发送测试邮件', '輸入一個郵箱位址，發送測試郵件', '輸入一個郵箱帳號，發送測試郵件', 'Input an email address & send test mail', 'Э-почта манзилини киритинг ва синов хатини юборинг', 'メールアドレスを入力してテストメールを送信', '이메일 주소를 입력하고 테스트 메일을 발송하세요']), "ADMIN_CONFIG_EMAIL_TEST_RESULT", ['测试结果：', '測試結果：', '測試結果：', 'Test result: ', 'Тест натижаси: ', 'テスト結果：', '테스트 결과: ']), "ADMIN_CONFIG_EXAMPLE", ['示例：', '示例：', '範例：', 'Example: ', 'Намуна: ', '例：', '예시: ']), S.ACI + '_AKISMET_KEY', ['Akismet 反垃圾评论，用于垃圾评论检测，设为 "MANUAL_REVIEW" 开启人工审核，留空不使用反垃圾。注册：https://akismet.com', 'Akismet 反垃圾評論，用於垃圾評論檢測，設為 "MANUAL_REVIEW" 開啟人工審核，留空不使用反垃圾。註冊：https://akismet.com', 'Akismet 防垃圾留言，用於垃圾留言檢測，設為 "MANUAL_REVIEW" 以開啟人工審核，留空則不使用防垃圾。註冊：https://akismet.com', 'Akismet spam protection. Set to "MANUAL_REVIEW" to enable manual review. Leave it blank to not use anti-spam. Register Akismet: https://akismet.com', 'Акисмет спам ҳимояси. Қўлда кўриб чиқишни ёқиш учун "MANUAL_REVIEW" га созланг. Анти-спамдан фойдаланмаслик учун уни бўш қолдиринг. Акисметни рўйхатдан ўтказиш: https://akismet.com', 'Akismetは、スパムコメントの検出に使用されるアンチスパムサービスです。"MANUAL_REVIEW"に設定することで、手動レビューを有効化します。コメントのスパム対策にAkismetを使用することで、不要なコメントをブロックし、サイトのセキュリティを向上させることができます。 Akismetの詳細情報と登録は、https://akismet.com で提供されています。', 'Akismet 스팸 방지. 스팸 댓글 감지에 사용합니다. "MANUAL_REVIEW"를 설정하면 수동 검토를 활성화합니다. 비워두면 스팸 수동 검토를 사용하지 않습니다. Akismet 등록: https://akismet.com']), S.ACI + '_BLOGGER_NICK', ['博主的昵称。', '博主的昵稱。', '站長的暱稱。',
// 「部落客」才是台灣對於「博主」的稱呼，音譯 "Blogger"。但此處用「站長」意譯 "Admin"。
'Admin nick name.', 'Админ исми.', '管理者の名前。', '관리자 닉네임.']), S.ACI + '_BLOGGER_EMAIL', ['博主的邮箱地址，用于邮件通知、博主标识。', '博主的郵箱地址，用於郵件通知、博主標識。', '站長的郵箱帳號，用於郵件通知、站長認證。', 'Admin Email address. Used for Email notification and admin identification.', 'Админ электрон почта манзили. Электрон почта хабарномаси ва администратор идентификацияси учун фойдаланилади.', '管理者のメールアドレス。メール通知と管理者の識別に使用されます。', '관리자 이메일 주소. 이메일 알림 및 관리자 식별에 사용됩니다.']), S.ACI + '_COMMENT_BG_IMG', ['评论框自定义背景图片 URL 地址。', '評論框自定義背景圖片 URL 地址。', '留言區塊自訂背景圖片 URL 網址。', 'URL for custom background image.', 'Махсус фон расми учун УРЛ.', 'コメントボックスのカスタム背景画像のURL。', '댓글창 배경 이미지 URL 주소.']), S.ACI + '_COMMENT_PAGE_SIZE', ['评论列表分页大小，默认为 8。', '評論列表分頁大小，預設為 8。', '留言列表分頁大小，預設為 8。', 'Comment page size. Default: 8.', 'Изоҳ саҳифаси ўлчами. Стандарт: 8.', 'コメントリストのページサイズ。デフォルトは8。', '한 페이지당 표시 댓글 수. 기본값: 8.']), S.ACI + '_COMMENT_PLACEHOLDER', ['评论框提示信息，可用<br>换行，默认为空', '評論框提示信息，可用<br>換行，預設為空', '留言區塊提示資訊，可用<br>換行，預設空白', 'Comment placeholder. Use <br> to start a newline. Default: empty.', 'Изоҳ тўлдирувчиси. Янги қаторни бошлаш учун <бр> дан фойдаланинг. Стандарт: бўш.', 'コメントボックスのヒントメッセージ。<br>で改行。デフォルトは空。', '댓글 입력창에 표시될 기본 문구. <br> 태그로 줄바꿈 가능. 기본값: 비어 있음.']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_CORS_ALLOW_ORIGIN', ['CORS 安全域名，注意：如果您不了解什么是 CORS，此项请留空，错误设置会导致无法加载，默认为空，格式为 https://blog.example.com；如需添加多域名请使用,分隔', 'CORS 安全域名，注意：错误设置会导致无法加載，默認為空，格式为 https://blog.example.com；如需添加多域名請使用,分隔', 'CORS 安全網域，注意：設定錯誤將會導致載入失敗，預設空白，格式應為 https://blog.example.com；如需添加多域名請使用,分隔', 'CORS allow origin, note: incorrect settings can cause loading failure. Default: blank, format: https://blog.example.com; If you need to add multiple domain names, please use, separate', 'Версел СОРС келиб чиқишига рухсат беради, эътибор беринг: нотўғри созламалар юклашда хатоликка олиб келиши мумкин. Стандарт: бўш, формат: https://blog.example.com; Агар сиз бир нечта домен номларини қўшмоқчи бўлсангиз, илтимос, ажратишдан фойдаланинг.', 'CORS セキュアドメイン。注意：誤った設定は読み込みエラーを引き起こす可能性があります。デフォルトは空、形式は https://blog.example.com です。複数のドメインを追加する場合は、コンマで区切ってください。', '댓글 서버 접근 허용 웹사이트 주소. 참고: 등록된 웹사이트만 댓글 시스템과 안전하게 통신합니다. 주소 오류 시 댓글창이 사라질 수 있습니다. 기본값: 비어 있음(보안 취약), 형식: https://blog.example.com; 여러 주소는 쉼표(,)로 구분.']), S.ACI + '_DEFAULT_GRAVATAR', ["\u9ED8\u8BA4\u7684\u5934\u50CF\u663E\u793A\u3002\u9ED8\u8BA4\u503C\uFF08\u7559\u7A7A\uFF09\u4E3A \"initials\"\uFF0C\u53EF\u9009\uFF1A".concat(defaultGravatar.join('、')), "\u9810\u8A2D\u7684\u982D\u50CF\u986F\u793A\u3002\u9810\u8A2D\u503C\uFF08\u7559\u7A7A\uFF09\u70BA \"initials\"\uFF0C\u53EF\u9078\uFF1A".concat(defaultGravatar.join('、')), "\u9810\u8A2D\u7684\u5927\u982D\u8CBC\u7167\u5716\u793A\u3002\u9810\u8A2D\u503C\uFF08\u7559\u7A7A\uFF09\u70BA \"initials\"\uFF0C\u9078\u9805\uFF1A".concat(defaultGravatar.join('、')), "Avatar placeholder. Default (when empty): \"initials\". Choose from: ".concat(defaultGravatar.join(', ')), "\u0410\u0432\u0430\u0442\u0430\u0440 \u0442\u045E\u043B\u0434\u0438\u0440\u0443\u0432\u0447\u0438\u0441\u0438. \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 (\u0430\u0433\u0430\u0440 \u0431\u045E\u0448 \u049B\u043E\u043B\u0434\u0438\u0440\u0438\u043B\u0441\u0430): \xAB\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\xBB. \u049A\u0443\u0439\u0438\u0434\u0430\u0433\u0438\u043B\u0430\u0440\u0434\u0430\u043D \u0442\u0430\u043D\u043B\u0430\u043D\u0433: ".concat(defaultGravatar.join(', ')), "\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u8868\u793A\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\uFF08\u7A7A\u6B04\u6642\uFF09\u306F \"initials\" \u3067\u3001\u9078\u629E\u80A2\u306F\uFF1A".concat(defaultGravatar.join('、'), " \u3067\u3059"), "\uD504\uB85C\uD544 \uAE30\uBCF8 \uC774\uBBF8\uC9C0. \uAE30\uBCF8\uAC12(\uBE44\uC6CC\uB458 \uACBD\uC6B0): \"initials\". \uC0AC\uC6A9 \uAC00\uB2A5 \uC2A4\uD0C0\uC77C: ".concat(defaultGravatar.join(', '))]), S.ACI + '_EMOTION_CDN', ['表情 CDN，英文逗号分隔。默认为：https://owo.imaegoo.com/owo.json', '表情 CDN，英文逗號分隔。預設為：https://owo.imaegoo.com/owo.json', '表情 CDN 來源，使用英文逗號分隔。預設為：https://owo.imaegoo.com/owo.json', 'Emoji CDN. Separate by comma. Default: https://owo.imaegoo.com/owo.json', 'Emoji CDN. Вергул билан ажратинг. Default: https://owo.imaegoo.com/owo.json', '顔文字CDN。コンマで区切ってください。デフォルト：https://owo.imaegoo.com/owo.json', '이모티콘 데이터 웹 주소. 쉼표(,)로 구분. 기본값: https://owo.imaegoo.com/owo.json']), S.ACI + '_FORBIDDEN_WORDS', ['违禁词配置，包含违禁词的内容会直接标记为垃圾评论。英文逗号分隔。', '違禁詞配置，包含違禁詞的內容會直接標記為垃圾評論。英文逗號分隔。', '禁用詞語設定，包含禁用詞語的內容會直接標記為垃圾留言。使用英文逗號分隔。', 'Configure prohibited words. Comments containing prohibited words will be auto spammed. Separate by comma.', 'Тақиқланган сўзларни созланг. Тақиқланган сўзларни ўз ичига олган шарҳлар автоматик равишда спамга юборилади. Вергул билан ажратинг.', '禁止ワード設定。禁止ワードを含むコンテンツは直ちにスパムコメントとしてマークされます。コンマで区切ってください。', '금지어 설정. 금지어 포함 댓글은 스팸으로 숨김 처리 됩니다. 쉼표로 구분.']), S.ACI + '_BLOCKED_WORDS', ['屏蔽词配置，包含屏蔽词的内容会直接评论失败。英文逗号分隔。', '屏蔽词配置，包含屏蔽词的内容会直接评论失败。英文逗号分隔。', '屏蔽词配置，包含屏蔽词的内容会直接评论失败。英文逗号分隔。', 'Configure blocked words. Comments containing blocked words will fail to send. Separate by comma.', 'Configure blocked words. Comments containing blocked words will fail to send. Separate by comma.', 'ブロックワード設定。ブロックワードを含むコンテンツは送信に失敗します。コンマで区切ってください。', '차단어 설정. 차단어 포함 댓글은 등록에 실패합니다. 쉼표로 구분.']), S.ACI + '_GRAVATAR_CDN', ['自定义头像 CDN 地址。如：cn.gravatar.com, weavatar.com, cravatar.cn, sdn.geekzu.org, gravatar.loli.net，默认：weavatar.com', '自定義頭像 CDN 地址。如：cn.gravatar.com, weavatar.com, cravatar.cn, sdn.geekzu.org, gravatar.loli.net，預設：weavatar.com', '自訂大頭貼照 CDN 來源。如：cn.gravatar.com, weavatar.com, cravatar.cn, sdn.geekzu.org, gravatar.loli.net，預設：weavatar.com', 'Custom avator CDN. (Examples: gravatar.com) Default: weavatar.com.', 'Custom avator CDN. (Мисоллар: gravatar.com) Default: weavatar.com.', 'カスタムプロフィール画像CDNアドレス。例：cn.gravatar.com、weavatar.com、cravatar.cn、sdn.geekzu.org、gravatar.loli.net、デフォルト：weavatar.com', '프로필 이미지(아바타) Gravatar 서버 주소. 더 빠르거나 안정적인 서버를 선택할 수 있습니다. (예: gravatar.com) 기본값: weavatar.com.']), S.ACI + '_HIDE_ADMIN_CRYPT', ['隐藏管理面板入口。可设置一个“暗号”，只有在“昵称”一栏输入相同的“暗号”时，管理面板入口才会显示，留空则不隐藏管理入口', '隱藏管理面板入口。可設定一個“暗號”，只有在“暱稱”一欄輸入相同的“暗號”時，管理面板入口才會顯示，留空則不隱藏管理入口', '隱藏管理控制台入口。可設定一個“暗號”，只有在「暱稱」一欄輸入相同的「暗號」時，管理控制台入口才會顯示，留白則不隱藏管理入口', 'Set a cipher to hide the management panel entrance, only when the same cipher is entered in the nickname field the management panel entry will be displayed. Leave it blank to not hide the management entrance.', 'Бошқарув панелига киришни яшириш учун шифрни ўрнатинг, фақат тахаллус майдонига худди шу шифр киритилганда бошқарув панелидаги ёзув кўрсатилади. Бошқарув киришини яширмаслик учун уни бўш қолдиринг.', '管理パネルのログイン画面を非表示にする。 "パスワード" を設定でき、 "名前" フィールドに同じ "パスワード" を入力した場合のみ、管理パネルのログイン画面が表示されます。空白の場合、管理パネルのログイン画面は非表示にされません。', '환경설정 버튼을 숨깁니다. 암호를 설정하여, 닉네임 입력란에 동일한 암호를 입력해야만 환경설정 버튼이 표시됩니다. 비워두면 버튼을 숨기지 않습니다.']), S.ACI + '_QQ_API_KEY', ['QQ昵称API密钥，用于获取QQ昵称。前往 https://api.nsuuu.com/admin/key 获取', 'QQ暱稱API密鑰，用於獲取QQ暱稱。前往 https://api.nsuuu.com/admin/key 獲取', 'QQ暱稱API密鑰，用於獲取QQ暱稱。前往 https://api.nsuuu.com/admin/key 獲取', 'QQ nickname API key for fetching QQ nickname. Get it from https://api.nsuuu.com/admin/key', 'QQ laqab API kaliti, QQ laqabni olish uchun. https://api.nsuuu.com/admin/key dan oling', 'QQニックネームAPIキー。QQニックネームの取得に使用します。https://api.nsuuu.com/admin/key で取得', 'QQ 닉네임 API 키. https://api.nsuuu.com/admin/key 에서 발급']), S.ACI + '_HIGHLIGHT', ['启用代码高亮功能。如果您的主题和代码高亮有冲突，请设为 false。默认：true', '啟用代碼高亮功能。如果您的主題和代碼高亮有衝突，請設為 false。預設：true', '啟用程式碼醒目顯示功能。如果您的主題和此功能發生衝突，請設定為 false。預設：true', 'Enable code highlighting. If your theme conflicts with code highlighting, please set it to false. Default: true.', 'Кодни ажратиб кўрсатишни ёқинг. Агар мавзуингиз кодни ажратиб кўрсатишга зид бўлса, уни «фалсе» га ўрнатинг. Стандарт: рост.', 'コードハイライト機能を有効にします。テーマとコードハイライトに競合がある場合、falseに設定してください。デフォルト：true', '코드 하이라이팅 기능을 활성화합니다. 테마와 코드 하이라이팅이 충돌하면 false로 설정하세요. 기본값: true.']), S.ACI + '_HIGHLIGHT_THEME', ["\u4EE3\u7801\u9AD8\u4EAE\u4E3B\u9898\uFF0C\u53EF\u9009\uFF1A".concat(highlightThemes.join('、'), "\uFF0C\u8BBF\u95EE https://prismjs.com \u53EF\u9884\u89C8\u4E3B\u9898\u6548\u679C\u3002\u5982\u679C\u60A8\u7684\u4E3B\u9898\u548C\u4EE3\u7801\u9AD8\u4EAE\u6709\u51B2\u7A81\uFF0C\u8BF7\u8BBE\u4E3A none\u3002\u9ED8\u8BA4\uFF1Anone"), "\u4EE3\u78BC\u9AD8\u4EAE\u4E3B\u984C\uFF0C\u53EF\u9078\uFF1A".concat(highlightThemes.join('、'), "\uFF0C\u8A2A\u554F https://prismjs.com \u53EF\u9810\u89BD\u4E3B\u984C\u6548\u679C\u3002\u5982\u679C\u60A8\u7684\u4E3B\u984C\u548C\u4EE3\u78BC\u9AD8\u4EAE\u6709\u885D\u7A81\uFF0C\u8ACB\u8A2D\u70BA none\u3002\u9810\u8A2D\uFF1Anone"), "\u7A0B\u5F0F\u78BC\u9192\u76EE\u986F\u793A\u4E3B\u984C\uFF0C\u9078\u9805\uFF1A".concat(highlightThemes.join('、'), "\uFF0C\u700F\u89BD https://prismjs.com \u53EF\u9810\u89BD\u4E3B\u984C\u6548\u679C\u3002\u5982\u679C\u60A8\u7684\u4E3B\u984C\u548C\u6B64\u529F\u80FD\u767C\u751F\u885D\u7A81\uFF0C\u8ACB\u8A2D\u5B9A\u70BA none\u3002\u9810\u8A2D\uFF1Anone"), "Code highlighting theme. Select from: ".concat(highlightThemes.join(', '), ". Visit https://prismjs.com for preview. If your theme conflicts with code highlighting, please set it to none. Default: none."), "\u041A\u043E\u0434\u043D\u0438 \u0442\u0430\u044A\u043A\u0438\u0434\u043B\u0430\u0448 \u043C\u0430\u0432\u0437\u0443\u0441\u0438. \u049A\u0443\u0439\u0438\u0434\u0430\u0433\u0438\u043B\u0430\u0440\u0434\u0430\u043D \u0442\u0430\u043D\u043B\u0430\u043D\u0433: ".concat(highlightThemes.join(', '), ". \u041E\u043B\u0434\u0438\u043D\u0434\u0430\u043D \u043A\u045E\u0440\u0438\u0448 \u0443\u0447\u0443\u043D https://prismjs.com \u0441\u0430\u0439\u0442\u0438\u0433\u0430 \u0442\u0430\u0448\u0440\u0438\u0444 \u0431\u0443\u044E\u0440\u0438\u043D\u0433. \u0410\u0433\u0430\u0440 \u043C\u0430\u0432\u0437\u0443\u0438\u043D\u0433\u0438\u0437 \u043A\u043E\u0434\u043D\u0438 \u0430\u0436\u0440\u0430\u0442\u0438\u0431 \u043A\u045E\u0440\u0441\u0430\u0442\u0438\u0448\u0433\u0430 \u0437\u0438\u0434 \u0431\u045E\u043B\u0441\u0430, \u0443\u043D\u0438 \xAB\u04B2\u0435\u0447\xBB \u0433\u0430 \u045E\u0440\u043D\u0430\u0442\u0438\u043D\u0433. \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442: \u0439\u045E\u049B."), "\u30B3\u30FC\u30C9\u30CF\u30A4\u30E9\u30A4\u30C8\u306E\u30C6\u30FC\u30DE\u3002\u9078\u629E\u80A2\uFF1A".concat(highlightThemes.join('、'), "\u3001\u30C6\u30FC\u30DE\u306E\u52B9\u679C\u3092\u30D7\u30EC\u30D3\u30E5\u30FC\u3059\u308B\u306B\u306F https://prismjs.com \u3092\u8A2A\u554F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C6\u30FC\u30DE\u3068\u30B3\u30FC\u30C9\u30CF\u30A4\u30E9\u30A4\u30C8\u306B\u7AF6\u5408\u304C\u3042\u308B\u5834\u5408\u3001none\u306B\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\uFF1Anone"), "\uCF54\uB4DC \uD558\uC774\uB77C\uC774\uD305 \uD14C\uB9C8. \uC0AC\uC6A9 \uAC00\uB2A5 \uD14C\uB9C8: ".concat(highlightThemes.join(', '), ". https://prismjs.com \uC5D0\uC11C \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uD655\uC778\uD558\uC138\uC694. \uD14C\uB9C8\uC640 \uCF54\uB4DC \uD558\uC774\uB77C\uC774\uD305\uC774 \uCDA9\uB3CC\uD558\uBA74 none\uC73C\uB85C \uC124\uC815\uD558\uC138\uC694. \uAE30\uBCF8\uAC12: none.")]), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_HIGHLIGHT_PLUGIN', ["\u4EE3\u7801\u9AD8\u4EAE\u63D2\u4EF6\uFF0C\u53EF\u9009\uFF1A".concat(highlightPlugins.join('、'), "\uFF0C\u5206\u522B\u8868\u793A\uFF1A\u5C55\u793A\u4EE3\u7801\u8BED\u8A00\u3001\u5C55\u793A\u4EE3\u7801\u62F7\u8D1D\u6309\u94AE\u3002\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2A\u9009\u9879\uFF0C\u5982\u679C\u60F3\u8981\u4E0D\u6DFB\u52A0\u4EFB\u4F55\u4EE3\u7801\u9AD8\u4EAE\u63D2\u4EF6\uFF0C\u8BF7\u8BBE\u4E3A none\u3002\u9ED8\u8BA4\uFF1Anone\u3002"), "\u4EE3\u78BC\u9AD8\u4EAE\u63D2\u4EF6\uFF0C\u53EF\u9078\uFF1A".concat(highlightPlugins.join('、'), "\uFF0C\u5206\u5225\u8868\u793A\uFF1A\u5C55\u793A\u4EE3\u78BC\u8A9E\u8A00\u3001\u5C55\u793A\u4EE3\u78BC\u62F7\u8C9D\u6309\u9215\u3002\u53EF\u4EE5\u540C\u6642\u8A2D\u7F6E\u591A\u500B\u9078\u9805\uFF0C\u5982\u679C\u60F3\u8981\u4E0D\u6DFB\u52A0\u4EFB\u4F55\u4EE3\u78BC\u9AD8\u4EAE\u63D2\u4EF6\uFF0C\u8ACB\u8A2D\u70BA none\u3002\u9810\u8A2D\uFF1Anone\u3002"), "\u4EE3\u78BC\u9AD8\u4EAE\u5916\u639B\u7A0B\u5F0F\uFF0C\u53EF\u9078\uFF1A".concat(highlightPlugins.join('、'), "\uFF0C\u5206\u5225\u8868\u793A\uFF1A\u5C55\u793A\u4EE3\u78BC\u8A9E\u8A00\u3001\u5C55\u793A\u4EE3\u78BC\u62F7\u8C9D\u6309\u9215\u3002 \u53EF\u4EE5\u540C\u6642\u8A2D\u7F6E\u591A\u500B\u9078\u9805\uFF0C\u5982\u679C\u60F3\u8981\u4E0D\u6DFB\u52A0\u4EFB\u4F55\u4EE3\u78BC\u9AD8\u4EAE\u5916\u639B\u7A0B\u5F0F\uFF0C\u8ACB\u8A2D\u5B9A\u70BA none\u3002\u9810\u8A2D\uFF1Anone\u3002"), "Code highlight plug-in, optional: ".concat(highlightPlugins.join(', '), ", respectively: show code language, show code copy button. Multiple options can be set at the same time, if you want to add no code highlighting plug-ins, please set it to none. Default: none. "), "\u041F\u043B\u0430\u0433\u0438\u043D \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438 \u043A\u043E\u0434\u0430, \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: ".concat(highlightPlugins.join(','), ", \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E: \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u044F\u0437\u044B\u043A \u043A\u043E\u0434\u0430, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u0434\u0430. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u043F\u0446\u0438\u0439 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E, \u0435\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u043B\u0430\u0433\u0438\u043D \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438 \u043A\u043E\u0434\u0430, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 none. \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E: none."), "\u30B3\u30FC\u30C9\u30FB\u30CF\u30A4\u30E9\u30A4\u30C8\u30FB\u30D7\u30E9\u30B0\u30A4\u30F3\u3002\u30AA\u30D7\u30B7\u30E7\u30F3: ".concat(highlightPlugins.join(','), ", \u305D\u308C\u305E\u308C: \u30B3\u30FC\u30C9\u8A00\u8A9E\u306E\u8868\u793A\u3001\u30B3\u30FC\u30C9\u30FB\u30B3\u30D4\u30FC\u30FB\u30DC\u30BF\u30F3\u306E\u8868\u793A\u3002\u8907\u6570\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u540C\u6642\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u304C\u3001\u30B3\u30FC\u30C9\u30FB\u30CF\u30A4\u30E9\u30A4\u30C8\u30FB\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u8FFD\u52A0\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001none\u306B\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), "\uCF54\uB4DC \uD558\uC774\uB77C\uC774\uD2B8 \uCD94\uAC00 \uAE30\uB2A5. \uC120\uD0DD \uAC00\uB2A5: ".concat(highlightPlugins.join(', '), ". (\uCF54\uB4DC \uC5B8\uC5B4 \uD45C\uC2DC, \uBCF5\uC0AC \uBC84\uD2BC) \uC5EC\uB7EC \uAE30\uB2A5\uC744 \uB3D9\uC2DC\uC5D0 \uC124\uC815\uD560 \uC218 \uC788\uC73C\uBA70, \uCD94\uAC00\uD558\uC9C0 \uC54A\uC73C\uB824\uBA74 none\uC73C\uB85C \uC124\uC815\uD558\uC138\uC694. \uAE30\uBCF8\uAC12: none.")]), S.ACI + '_IMAGE_SERVICE', ["\u63D2\u5165\u56FE\u7247\u6240\u4F7F\u7528\u7684\u56FE\u5E8A\uFF0C\u76EE\u524D\u652F\u6301\uFF1A".concat(imageBedServices.join('、')), "\u63D2\u5165\u5716\u7247\u6240\u4F7F\u7528\u7684\u5716\u5E8A\uFF0C\u76EE\u524D\u652F\u6301\uFF1A".concat(imageBedServices.join('、')), "\u63D2\u5165\u5716\u7247\u6240\u4F7F\u7528\u7684\u5716\u5E8A\uFF0C\u76EE\u524D\u652F\u63F4\uFF1A".concat(imageBedServices.join('、')), "The image bed for image uploading. Select from: ".concat(imageBedServices.join(', ')), "\u0420\u0430\u0441\u043C \u044E\u043A\u043B\u0430\u0448 \u0443\u0447\u0443\u043D \u0440\u0430\u0441\u043C \u0442\u045E\u0448\u0430\u0433\u0438. \u049A\u0443\u0439\u0438\u0434\u0430\u0433\u0438\u043B\u0430\u0440\u0434\u0430\u043D \u0442\u0430\u043D\u043B\u0430\u043D\u0433: ".concat(imageBedServices.join(', ')), "\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3002\u6B21\u306E\u3046\u3061\u304B\u3089\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\uFF1A".concat(imageBedServices.join('、')), "\uB313\uAE00 \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC \uAE30\uB2A5\uC5D0 \uC0AC\uC6A9\uB420 \uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4. \uC0AC\uC6A9 \uAC00\uB2A5 \uBAA9\uB85D: ".concat(imageBedServices.join(', '))]), S.ACI + '_IMAGE_SERVICE_NONE', ['禁用图片上传', '禁用圖片上傳', '禁用圖片上傳', 'Disable image uploading', 'Расм юклашни ўчириш', '画像のアップロードを無効にする', '이미지 업로드 비활성화']), S.ACI + '_IMAGE_CDN', ["\u63D2\u5165\u56FE\u7247\u6240\u4F7F\u7528\u7684\u56FE\u5E8A\uFF0C\u76EE\u524D\u652F\u6301\uFF1A".concat(imageBedServices.join('、')), "\u63D2\u5165\u5716\u7247\u6240\u4F7F\u7528\u7684\u5716\u5E8A\uFF0C\u76EE\u524D\u652F\u6301\uFF1A".concat(imageBedServices.join('、')), "\u63D2\u5165\u5716\u7247\u6240\u4F7F\u7528\u7684\u5716\u5E8A\uFF0C\u76EE\u524D\u652F\u63F4\uFF1A".concat(imageBedServices.join('、')), "The image bed for image uploading. Select from: ".concat(imageBedServices.join(', ')), "\u0420\u0430\u0441\u043C \u044E\u043A\u043B\u0430\u0448 \u0443\u0447\u0443\u043D \u0440\u0430\u0441\u043C \u0442\u045E\u0448\u0430\u0433\u0438. \u049A\u0443\u0439\u0438\u0434\u0430\u0433\u0438\u043B\u0430\u0440\u0434\u0430\u043D \u0442\u0430\u043D\u043B\u0430\u043D\u0433: ".concat(imageBedServices.join(', ')), "\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3002\u6B21\u306E\u3046\u3061\u304B\u3089\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\uFF1A".concat(imageBedServices.join('、')), "\uB313\uAE00 \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC \uAE30\uB2A5\uC5D0 \uC0AC\uC6A9\uB420 \uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4. \uC0AC\uC6A9 \uAC00\uB2A5 \uBAA9\uB85D: ".concat(imageBedServices.join(', '))]), S.ACI + '_IMAGE_CDN_URL', ["\u56FE\u5E8A\u7684 URL\uFF0C\u4EC5\u5F53 IMAGE_CDN \u4E3A ".concat(customImageBedServices.join(' / '), " \u65F6\u9700\u8981\u586B\u5199"), // 简体中文
"\u5716\u5E8A\u7684 URL\uFF0C\u50C5\u7576 IMAGE_CDN \u70BA ".concat(customImageBedServices.join(' / '), " \u6642\u9700\u8981\u586B\u5BEB"), // 繁体中文
"\u5716\u5E8A\u7684 URL\uFF0C\u50C5\u7576 IMAGE_CDN \u70BA ".concat(customImageBedServices.join(' / '), " \u6642\u9700\u8981\u586B\u5BEB"), // 繁体中文（台湾）
"The URL for the image bed. Required if your IMAGE_CDN is one of these: ".concat(customImageBedServices.join(', ')), // 英文
"IMAGE_CDN \u0442\u043E\u043C\u043E\u043D\u0438\u0434\u0430\u043D \u0431\u0435\u043B\u0433\u0438\u043B\u0430\u043D\u0433\u0430\u043D \u0440\u0430\u0441\u043C \u0442\u045E\u0448\u0430\u0433\u0438 URL. \u0410\u0433\u0430\u0440 \u0441\u0438\u0437\u043D\u0438\u043D\u0433 IMAGE_CDN \u0448\u0443\u043B\u0430\u0440\u0434\u0430\u043D \u0431\u0438\u0440\u0438 \u0431\u045E\u043B\u0441\u0430: ".concat(customImageBedServices.join(', ')), // 乌兹别克语
"IMAGE_CDN\u3067\u8A2D\u5B9A\u3057\u305F\u753B\u50CF\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u306EURL\u3002IMAGE_CDN\u304C\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u5834\u5408\u306F\u5165\u529B\u304C\u5FC5\u8981\u3067\u3059\uFF1A".concat(customImageBedServices.join('、')),
// 日语
'이미지 저장소 URL. IMAGE_CDN 설정이 다음 중 하나인 경우 필요합니다: ${customImageBedServices.join(', ')}']), S.ACI + '_IMAGE_CDN_TOKEN', ['图床 token。qcloud 图床无需设置', '图床 token。qcloud 图床无需设置', '圖床 token。qcloud 圖床不需設定', 'The image bed token. Unnessessary for qcloud', 'Тасвир токен белгиси. Қслоуд учун кераксиз', '画像ホスティングトークン。qcloud画像ホスティングを利用する場合は設定の必要はありません', '이미지 호스팅 토큰. qcloud은 설정 불필요.']), S.ACI + '_NSFW_API_URL', ['NSFW 图片检测 API 地址。免费服务：nsfw.xnet.ren、nsfw.qixz.cn，项目：github.com/HG-ha/nsfwpy', 'NSFW 圖片檢測 API 地址。免費服務：nsfw.xnet.ren、nsfw.qixz.cn，項目：github.com/HG-ha/nsfwpy', 'NSFW 圖片檢測 API 地址。免費服務：nsfw.xnet.ren、nsfw.qixz.cn，項目：github.com/HG-ha/nsfwpy', 'NSFW image detection API URL. Free services: nsfw.xnet.ren, nsfw.qixz.cn, project: github.com/HG-ha/nsfwpy', 'NSFW расмни аниқлаш API URL. Бепул хизматлар: nsfw.xnet.ren, nsfw.qixz.cn, лойиҳа: github.com/HG-ha/nsfwpy', 'NSFW画像検出API URL。無料サービス：nsfw.xnet.ren、nsfw.qixz.cn、プロジェクト：github.com/HG-ha/nsfwpy', 'NSFW 이미지 감지 API URL. 무료 서비스: nsfw.xnet.ren, nsfw.qixz.cn, 프로젝트: github.com/HG-ha/nsfwpy']), S.ACI + '_NSFW_THRESHOLD', ['NSFW 检测阈值（0-1），当检测分数高于此值时拒绝上传。默认：0.5', 'NSFW 檢測閾值（0-1），當檢測分數高於此值時拒絕上傳。預設：0.5', 'NSFW 檢測閾值（0-1），當檢測分數高於此值時拒絕上傳。預設：0.5', 'NSFW detection threshold (0-1). Upload will be rejected if score exceeds this value. Default: 0.5', 'NSFW аниқлаш чегараси (0-1). Баҳо бу қийматдан ошса юклаш рад қилинади. Стандарт: 0.5', 'NSFW検出しきい値（0-1）。スコアがこの値を超えるとアップロードが拒否されます。デフォルト：0.5', 'NSFW 감지 임계값 (0-1). 점수가 이 값을 초과하면 업로드가 거부됩니다. 기본값: 0.5']), S.ACI + '_S3_REGION', ['S3 存储区域，例如 us-east-1。使用兼容 S3 的服务（如 Cloudflare R2、MinIO）时可填任意值', 'S3 儲存區域，例如 us-east-1。使用相容 S3 的服務（如 Cloudflare R2、MinIO）時可填任意值', 'S3 儲存區域，例如 us-east-1。使用相容 S3 的服務（如 Cloudflare R2、MinIO）時可填任意值', 'S3 region, e.g. us-east-1. Can be any value when using S3-compatible services (e.g. Cloudflare R2, MinIO)', 'S3 минтақаси, масалан us-east-1. S3 мос хизматлар учун (Cloudflare R2, MinIO) ихтиёрий қийматни киритиш мумкин', 'S3リージョン（例：us-east-1）。Cloudflare R2やMinIOなどのS3互換サービスを使用する場合は任意の値を入力できます', 'S3 리전 (예: us-east-1). Cloudflare R2, MinIO 등 S3 호환 서비스 사용 시 임의 값 입력 가능']), S.ACI + '_S3_BUCKET', ['S3 存储桶名称', 'S3 儲存桶名稱', 'S3 儲存桶名稱', 'S3 bucket name', 'S3 bucket nomi', 'S3バケット名', 'S3 버킷 이름']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_S3_ACCESS_KEY_ID', ['S3 Access Key ID', 'S3 Access Key ID', 'S3 Access Key ID', 'S3 Access Key ID', 'S3 Access Key ID', 'S3 Access Key ID', 'S3 Access Key ID']), S.ACI + '_S3_SECRET_ACCESS_KEY', ['S3 Secret Access Key', 'S3 Secret Access Key', 'S3 Secret Access Key', 'S3 Secret Access Key', 'S3 Secret Access Key', 'S3 Secret Access Key', 'S3 Secret Access Key']), S.ACI + '_S3_ENDPOINT', ['S3 自定义 Endpoint，使用 Cloudflare R2、MinIO 等兼容 S3 的服务时填写', 'S3 自訂 Endpoint，使用 Cloudflare R2、MinIO 等相容 S3 的服務時填寫', 'S3 自訂 Endpoint，使用 Cloudflare R2、MinIO 等相容 S3 的服務時填寫', 'S3 custom endpoint. Required when using S3-compatible services like Cloudflare R2 or MinIO', 'S3 maxsus endpoint. Cloudflare R2 yoki MinIO kabi S3 mos xizmatlardan foydalanishda talab qilinadi', 'S3カスタムエンドポイント。Cloudflare R2やMinIOなどのS3互換サービスを使用する場合に必要です', 'S3 커스텀 엔드포인트. Cloudflare R2, MinIO 등 S3 호환 서비스 사용 시 필요']), S.ACI + '_S3_CDN_URL', ['S3 图片访问域名（CDN 域名），留空则使用默认 S3/Endpoint URL', 'S3 圖片存取網域（CDN 網域），留空則使用預設 S3/Endpoint URL', 'S3 圖片存取網域（CDN 網域），留空則使用預設 S3/Endpoint URL', 'S3 image access domain (CDN domain). Leave empty to use default S3/Endpoint URL', 'S3 rasm kirish domeni (CDN domeni). Standart S3/Endpoint URL dan foydalanish uchun bo\'sh qoldiring', 'S3画像アクセスドメイン（CDNドメイン）。空白の場合はデフォルトのS3/Endpoint URLを使用します', 'S3 이미지 접근 도메인 (CDN 도메인). 비워두면 기본 S3/Endpoint URL 사용']), S.ACI + '_S3_PATH_PREFIX', ['S3 图片存储路径前缀，例如 images/twikoo，留空则存储在根目录', 'S3 圖片儲存路徑前綴，例如 images/twikoo，留空則儲存在根目錄', 'S3 圖片儲存路徑前綴，例如 images/twikoo，留空則儲存在根目錄', 'S3 image storage path prefix, e.g. images/twikoo. Leave empty to store in root', 'S3 rasm saqlash yo\'l prefiksi, masalan images/twikoo. Ildizda saqlash uchun bo\'sh qoldiring', 'S3画像保存パスプレフィックス（例：images/twikoo）。空白の場合はルートに保存されます', 'S3 이미지 저장 경로 접두사 (예: images/twikoo). 비워두면 루트에 저장']), S.ACI + '_LIGHTBOX', ['使用简易图片点击放大效果。默认：false', '使用簡易圖片點擊放大效果。預設：false', '使用簡易圖片點擊放大效果。預設：false', 'Use simple Lightbox effect. Default: false', 'Используйте простые эффекты лайтбокса. По умолчанию: false', 'シンプルな画像拡大機能を使用します。デフォルト：false', '라이트박스 효과, 댓글 이미지 클릭 시 확대 효과 사용. 기본값: false']), S.ACI + '_LIMIT_PER_MINUTE', ['单个 IP 发言频率限制（条/10分钟），0 为无限制，默认：10', '單個 IP 發言頻率限制（條/10分鐘），0 為無限制，預設：10', '單個 IP 留言頻率限制（則/10分鐘），0 為無限，預設：10', 'How many comments can be posted by each IP every 10 minutes, 0 is unlimited, default: 10.', 'Ҳар бир ИП ҳар 10 дақиқада қанча шарҳ қолдириши мумкин, 0 чексиз, стандарт: 10.', '同一IPにおける10分ごとの投稿回数制限。0は無制限、デフォルト：10', 'IP별 댓글 작성 빈도 제한 (10분당 건수), 0은 무제한. 기본값: 10.']), S.ACI + '_LIMIT_PER_MINUTE_ALL', ['全站发言频率限制（条/10分钟），0 为无限制，默认：10', '全站發言頻率限制（條/10分鐘），0 為無限制，預設：10', '全站留言頻率限制（則/10分鐘），0 為無限，預設：10', 'How many comments can be posted by all IPs every 10 minutes, 0 is unlimited, default: 10.', 'Барча ИП-лар ҳар 10 дақиқада қанча шарҳ қўйиши мумкин, 0 чексиз, стандарт: 10.', '全IPにおける10分ごとの投稿回数制限。0は無制限、デフォルト：10', '10분당 사이트 전체에 작성 가능한 총 댓글 수 제한. 0은 무제한. 기본값: 10.']), S.ACI + '_LIMIT_LENGTH', ['评论长度限制，0 为无限制，默认：500', '評論長度限制，0 為無限制，預設：500', '留言長度限制，0 為無限，預設：500', 'Comment length limitation, 0 is unlimited, default: 500.', 'Шарҳ узунлиги чеклови, 0 чексиз, стандарт: 500.', 'コメント長さの制限。0は無制限、デフォルト：500', '댓글 길이 제한. 0은 무제한. 기본값: 500.']), S.ACI + '_MAIL_SUBJECT', ['自定义通知邮件主题，留空则使用默认主题。', '自定義通知郵件主題，留空則使用預設主題。', '自訂通知郵件主題，留白則使用預設主題。', 'Custom Email notification subject. Leave it blank to use the default subject.', 'Махсус электрон почта хабарномаси мавзуси. Стандарт мавзуни ишлатиш учун уни бўш қолдиринг.', 'カスタム通知メールの件名。空白の場合はデフォルトの件名を使用します。', '댓글 알림 이메일 제목 설정. 비워두면 기본 제목을 사용합니다.']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_MAIL_SUBJECT_ADMIN', ['自定义博主通知邮件主题，留空则使用默认主题。', '自定義博主通知郵件主題，留空則使用預設主題。', '自訂站長通知郵件主題，留白則使用預設主題。', 'Custom admin Email notification subject. Leave it blank to use the default subject.', 'Махсус администратор электрон почта хабарномаси мавзуси. Стандарт мавзуни ишлатиш учун уни бўш қолдиринг.', '管理者へのカスタム通知メールの件名。空白の場合はデフォルトの件名を使用します。', '관리자에게 발송되는 댓글 알림 이메일 제목 설정. 비워두면 기본 제목을 사용합니다.']), S.ACI + '_MAIL_TEMPLATE', ['自定义通知邮件模板，留空则使用默认模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}', '自定義通知郵件模板，留空則使用預設模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}', '自訂通知郵件模板，留白則使用預設模板。可包含的欄位：${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}', 'Custom Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}', 'Махсус электрон почта хабарномаси шаблони. Стандарт шаблонни ишлатиш учун уни бўш қолдиринг. Қўшилиши мумкин бўлган майдонлар:  ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}', 'カスタム通知メールテンプレート。空白の場合はデフォルトテンプレートを使用します。使用可能なフィールド：${SITE_URL}、${SITE_NAME}、${PARENT_NICK}、${PARENT_COMMENT}、${NICK}、${COMMENT}、${POST_URL}、${IMG}、${PARENT_IMG}', '댓글 알림 이메일 템플릿 설정. 비워두면 기본 템플릿 사용. 다음 변수를 사용하면 해당 값으로 자동 치환됩니다: ${SITE_URL}, ${SITE_NAME}, ${PARENT_NICK}, ${PARENT_COMMENT}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}']), S.ACI + '_MAIL_TEMPLATE_ADMIN', ['自定义博主通知邮件模板，留空则使用默认模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}', '自定義博主通知郵件模板，留空則使用預設模板。可包含的字段：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}', '自訂站長通知郵件模板，留白則使用預設模板。可包含的欄位：${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}', 'Custom admin Email notification template. Leave it blank to use the default template. Fields that can be included: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}', 'Махсус администратор электрон почта хабарномаси шаблони. Стандарт шаблонни ишлатиш учун уни бўш қолдиринг. Қўшилиши мумкин бўлган майдонлар:  ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IMG}, ${PARENT_IMG}', '管理者へのカスタム通知メールテンプレート。空白の場合はデフォルトテンプレートを使用します。使用可能なフィールド：${SITE_URL}、${SITE_NAME}、${NICK}、${COMMENT}、${POST_URL}、${IP}、${MAIL}、${IMG}', '관리자 알림 이메일 템플릿 설정. 비워두면 기본 템플릿 사용. 다음 변수를 사용하면 해당 값으로 자동 치환됩니다: ${SITE_URL}, ${SITE_NAME}, ${NICK}, ${COMMENT}, ${POST_URL}, ${IP}, ${MAIL}, ${IMG}']), S.ACI + '_MASTER_TAG', ['博主标识自定义文字，默认为 “博主”。', '博主標識自定義文字，預設為 “博主”。', '站長認證自訂文字，預設為「博主」。',
// 可能牽涉到程式碼層面，不做更動以免造成誤導。
'Custom admin identifier.', 'Махсус администратор идентификатори.', '管理者を表すカスタムテキスト。デフォルト："ブロガー"', '관리자 태그 설정. (닉네임 옆에 표시됨. 예: 관리자)']), S.ACI + '_NOTIFY_SPAM', ['垃圾评论是否发送通知，默认：true', '垃圾評論是否發送通知，默認：true', '垃圾留言是否發送通知，預設：true', 'Notifications for spam comments. Default: true.', 'Спам шарҳлар учун билдиришномалар. Стандарт: рост.', 'スパムコメントの通知を送信するかどうか。デフォルト：true', '스팸 댓글 알림 발송 여부. 기본값: true.']), S.ACI + '_CAPTCHA_PROVIDER', ['人机验证码提供商', '人機驗證碼提供商', '人機驗證碼提供商', 'CAPTCHA Provider', 'CAPTCHA Provider', 'CAPTCHAプロバイダー', '캡차 제공자']), S.ACI + '_TURNSTILE_SITE_KEY', ['Turnstile 验证码的站点密钥。申请地址: https://dash.cloudflare.com/?to=/:account/turnstile', 'Turnstile 验证码的站点密钥。申请地址: https://dash.cloudflare.com/?to=/:account/turnstile', 'Turnstile 验证码的站点密钥。申请地址: https://dash.cloudflare.com/?to=/:account/turnstile', 'Turnstile CAPTCHA Site Key. Get from: https://dash.cloudflare.com/?to=/:account/turnstile', 'Turnstile CAPTCHA Site Key. Get from: https://dash.cloudflare.com/?to=/:account/turnstile', 'Turnstile CAPTCHAのサイトキー。参照: https://dash.cloudflare.com/?to=/:account/turnstile', 'Turnstile CAPTCHA(스팸봇 방지) 사이트 키. 발급처: https://dash.cloudflare.com/?to=/:account/turnstile']), S.ACI + '_TURNSTILE_SECRET_KEY', ['Turnstile 验证码的密钥', 'Turnstile 验证码的密钥', 'Turnstile 验证码的密钥', 'Turnstile CAPTCHA Secret Key', 'Turnstile CAPTCHA Secret Key', 'Turnstile CAPTCHAのシークレットキー', 'Turnstile CAPTCHA Secret Key']), S.ACI + '_GEETEST_CAPTCHA_ID', ['极验验证码的 Captcha ID。申请地址: https://console.geetest.com/sensbot/management', '极验验证码的 Captcha ID。申请地址: https://console.geetest.com/sensbot/management', '极验验证码的 Captcha ID。申请地址: https://console.geetest.com/sensbot/management', 'GeeTest CAPTCHA ID. Get from: https://console.geetest.com/sensbot/management', 'GeeTest CAPTCHA ID. Get from: https://console.geetest.com/sensbot/management', 'GeeTest CAPTCHA ID. 参照: https://console.geetest.com/sensbot/management', 'GeeTest CAPTCHA ID. 발급처: https://console.geetest.com/sensbot/management']), S.ACI + '_GEETEST_CAPTCHA_KEY', ['极验验证码的 Captcha Key', '极验验证码的 Captcha Key', '极验验证码的 Captcha Key', 'GeeTest CAPTCHA Key', 'GeeTest CAPTCHA Key', 'GeeTest CAPTCHA Key', 'GeeTest CAPTCHA Key']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_QCLOUD_SECRET_ID', ['腾讯云 secret id，用于垃圾评论检测。同时设置腾讯云和 Akismet 时，只有腾讯云会生效。注册：https://twikoo.js.org/cms.html', '騰訊雲 secret id，用於垃圾評論檢測。同時設定騰訊雲和 Akismet 時，只有騰訊雲會生效。註冊：https://twikoo.js.org/cms.html', '騰訊雲 Secret ID，用於垃圾留言檢測。同時設定騰訊雲和 Akismet 時，只有騰訊雲會被啟用。註冊：https://twikoo.js.org/cms.html',
// 「騰訊雲」是一家網路服務提供商，不改為「騰訊雲端」。
'Tencent Cloud secret id for spam detection. When Tencent Cloud and Akismet are set at the same time, only Tencent Cloud will take effect. Register: https://twikoo.js.org/cms.html', 'Спамни аниқлаш учун Тенсент Слоуд махфий идентификатори. Тенсент Слоуд ва Акисмет бир вақтнинг ўзида ўрнатилганда, фақат Тенсент Слоуд кучга киради. Рўйхатдан ўтиш: https://twikoo.js.org/cms.html', 'Tencent CloudのシークレットID。スパムコメントの検出に使用されます。同時にTencent CloudとAkismetを設定した場合、Tencent Cloudのみが有効になります。登録：https://twikoo.js.org/cms.html', 'Tencent Cloud secret id (스팸 감지용). Tencent Cloud와 Akismet 동시 설정 시 Tencent Cloud만 적용. 등록: https://twikoo.js.org/cms.html']), S.ACI + '_QCLOUD_CMS_BIZTYPE', ['腾讯云内容安全 Biztype 名称，用于垃圾评论策略。可以自定义垃圾拦截规则', '騰訊雲內容安全 Biztype 名稱，用於垃圾評論策略。可以自定義垃圾攔截規則', '騰訊雲內容安全 Biztype 名稱，用於垃圾評論策略。可以自定義垃圾攔截規則',
// 「騰訊雲」是一家網路服務提供商，不改為「騰訊雲端」。
'Tencent Cloud Content Security Biztype name for spam comment policy. Spam blocking rules can be customized', 'Tencent Cloud Content Security Biztype име, използвано за спам политика. Може да персонализира правилата за блокиране на спам', 'Tencent Cloud Content Security Biztype name スパムコメントポリシー。スパムブロックルールはカスタマイズ可能', 'Tencent Cloud Content Security Biztype 이름 (스팸 댓글 정책용). 스팸 차단 규칙 설정 가능.']), S.ACI + '_QCLOUD_SECRET_KEY', ['腾讯云 secret key', '騰訊雲 secret key', '騰訊雲 Secret Key', 'Tencent Cloud secret key.', 'Тенсент Клауд махфий калити.', 'Tencent Cloudのシークレットキー', 'Tencent Cloud Secret Key.']), S.ACI + '_PUSHOO_CHANNEL', ["\u5373\u65F6\u6D88\u606F\u63A8\u9001\u5E73\u53F0\u540D\u79F0\uFF0C\u652F\u6301\uFF1A".concat(pushooChannels.join('、'), " \u7B49"), "\u5373\u6642\u6D88\u606F\u63A8\u9001\u5E73\u53F0\u540D\u79F0\uFF0C\u652F\u6301\uFF1A".concat(pushooChannels.join('、'), " \u7B49"), "\u5373\u6642\u8A0A\u606F\u63A8\u9001\u5E73\u53F0\u540D\u7A31\uFF0C\u652F\u63F4\uFF1A".concat(pushooChannels.join('、'), " \u7B49"), "IM notification push channel. Support: ".concat(pushooChannels.join(', ')), "\u0418\u041C \u0431\u0438\u043B\u0434\u0438\u0440\u0438\u0448\u043D\u043E\u043C\u0430\u0441\u0438 \u0441\u0443\u0440\u0438\u0448 \u043A\u0430\u043D\u0430\u043B\u0438. \u049A\u045E\u043B\u043B\u0430\u0431-\u049B\u0443\u0432\u0432\u0430\u0442\u043B\u0430\u0448: ".concat(pushooChannels.join(', ')), "\u5373\u6642\u30E1\u30C3\u30BB\u30FC\u30B8\u30D7\u30C3\u30B7\u30E5\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u540D\u524D\u3002".concat(pushooChannels.join('、'), " \u306A\u3069\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"), "\uC2E4\uC2DC\uAC04 \uC54C\uB9BC\uC744 \uBC1B\uC744 \uC11C\uBE44\uC2A4 \uC124\uC815. \uC9C0\uC6D0: ".concat(pushooChannels.join(', '))]), S.ACI + '_PUSHOO_TOKEN', ['即时消息推送 token。请参考 https://pushoo.js.org 里的详细说明配置', '即時消息推送 token。请参考 https://pushoo.js.org 里的详细说明配置', '即時訊息推送 Token。請参考 https://pushoo.js.org 裡的詳細說明進行設定', 'IM notification push token. See https://pushoo.js.org for details', 'ИМ билдиришномаси пуш токени. Тафсилотлар учун https://pushoo.js.org га қаранг', '即時メッセージプッシュトークン。詳細な設定については、https://pushoo.js.org の説明をご覧ください', '선택한 실시간 알림 서비스 인증 토큰. 설정 방법은 https://pushoo.js.org 를 참조.']), S.ACI + '_DISPLAYED_FIELDS', ['界面上展示的输入框，默认：nick,mail,link', '界面上顯示的輸入框，預設：nick,mail,link', '界面上顯示的輸入框，預設：nick,mail,link', 'Input boxes displayed on the interface. Default: nick,mail,link', 'Поля ввода, отображаемые на интерфейсе, Стандарт: nick,mail,link', '画面に表示される入力欄。デフォルト：nick,mail,link', '화면에 표시할 정보 입력란. 기본값: nick,mail,link']), S.ACI + '_REQUIRED_FIELDS', ['评论必填信息，设为 nick,mail,link 代表全必填，设为 none 代表全选填，默认：nick,mail', '評論必填信息，設為 nick,mail,link 代表全必填，設為 none 代表全選填，預設：nick,mail', '留言必填資訊，設為 nick,mail,link 代表全必填，設為 none 代表全選填，預設：nick,mail', 'Required fields for comments. Set to "nick,mail,link" means all fields are required. Set to "none" means all fields are optional. Default: nick,mail.', 'Шарҳлар учун зарур майдонлар. «Ниск,маил,линк» га ўрнатилган бўлса, барча майдонлар талаб қилинади. «Йўқ» га ўрнатилиши барча майдонлар ихтиёрий эканлигини англатади. Стандарт: ник, почта.', 'コメント必須項目。すべてを必須にする場合は nick,mail,link に設定、すべてを任意にする場合はnoneに設定してください。デフォルト：nick,mail', '댓글 작성 시 필수 입력 정보. "nick,mail,link"는 모두 필수, "none"은 모두 선택 압력. 기본값: nick,mail.']), S.ACI + '_SC_MAIL_NOTIFY', ['是否同时通过 IM 和邮件 2 种方式通知博主，默认只通过 IM 通知博主，默认：false', '是否同時通過 IM 和郵件 2 種方式通知博主，預設只通過 IM 通知博主，預設：false', '是否同時透過 IM 和郵件 2 種方式通知博主，預設只透過 IM 通知博主，預設：false', 'Whether to notify admin via IM and email at the same time, the default is to notify admin only via IM. Default: false.', 'Администраторни бир вақтнинг ўзида ИМ ва электрон почта орқали хабардор қилиш керакми, сукут бўйича администраторни фақат ИМ орқали хабардор қилиш керак. Стандарт: нотўғри.', '管理者にIMとメールで同時に通知するかどうか。デフォルトはIMのみで通知、デフォルト：false', '실시간 알림과 이메일로 동시에 관리자에게 알릴지 여부. 기본값은 실시간 알림만 사용. 기본값: false.']), S.ACI + '_SENDER_EMAIL', ['邮件通知邮箱地址。对于大多数邮箱服务商，SENDER_EMAIL 必须和 SMTP_USER 保持一致，否则无法发送邮件。', '郵件通知郵箱地址。對於大多數郵箱服務商，SENDER_EMAIL 必須和 SMTP_USER 保持一致，否則無法發送郵件。', '郵件通知郵箱帳號。對於大多數電郵服務提供商，SENDER_EMAIL 必須和 SMTP_USER 保持一致，否則無法傳送郵件。', 'Email address for Email notification. For most email service providers, SENDER_EMAIL must be consistent with SMTP_USER, otherwise emails cannot be sent.', 'Электрон почта хабарномаси учун электрон почта манзили. Аксарият электрон почта хизмати провайдерлари учун  SENDER_EMAIL билан мос келиши керак, акс ҳолда электрон почта хабарларини юбориб бўлмайди.', 'メール通知のメールアドレス。 ほとんどのメールボックス・プロバイダでは、SENDER_EMAILはSMTP_USERと同じでなければなりません。', '알림 이메일 발신 주소. 대부분의 이메일 서비스 제공자의 경우 SENDER_EMAIL과 SMTP_USER가 일치해야 메일 발송이 가능합니다.']), S.ACI + '_SENDER_NAME', ['邮件通知标题。', '郵件通知標題。', '郵件通知標題。', 'The title for Email notification.', 'Электрон почта хабарномаси сарлавҳаси.', 'メール通知のタイトル', '알림 이메일 발신자 이름.']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_SHOW_EMOTION', ['启用插入表情功能，默认为：true', '啟用插入表情功能，預設為：true', '啟用插入表情功能，預設為：true', 'Enable emojis. Default: true.', 'Кулгичларни ёқинг. Стандарт: рост.', '顔文字の挿入を有効にするかどうか。デフォルト：true', '이모티콘 삽입 기능 활성화. 기본값: true.']), S.ACI + '_SHOW_IMAGE', ['启用插入图片功能，默认为：true', '啟用插入圖片功能，預設為：true', '啟用插入圖片功能，預設為：true', 'Enable picture uploading. Default: true.', 'Расм юклашни ёқинг. Стандарт: рост.', '画像のアップロードを有効にするかどうか。デフォルト：true', '이미지 업로드 기능 활성화. 기본값: true.']), S.ACI + '_SHOW_ORDER', ['评论排序下拉框，默认为：true', '評論排序下拉框，預設為：true', '評論排序下拉框，預設為：true', 'Show sort dropdown. Default: true.', 'Изоҳларни тартиблаш очиладиган менюси. Стандарт: рост.', 'コメントの並べ替えドロップダウンを表示するかどうか。デフォルト：true', '댓글 정렬 드롭다운 메뉴 표시 여부. 기본값: true.']), S.ACI + '_SHOW_DISLIKE', ['评论点踩按钮，默认为：true', '評論點踩按鈕，預設為：true', '評論點踩按鈕，預設為：true', 'Show dislike button. Default: true.', 'Изоҳларни ёқтирмаслик тугмаси. Стандарт: рост.', '「よくないね」ボタンを表示するかどうか。デフォルト：true', '댓글 싫어요 버튼 표시 여부. 기본값: true.']), S.ACI + '_SHOW_UA', ['是否显示用户系统和浏览器，默认为：true', '是否顯示使用者系統和瀏覽器，預設為：true', '是否顯示使用者作業系統和瀏覽器，預設為：true', 'Show users\' OS and browser. Default: true.', 'Фойдаланувчиларнинг ОС ва браузерини кўрсатиш. Стандарт: рост.', 'ユーザーのOSとブラウザーの情報を表示するかどうか。デフォルト：true', '댓글 작성자의 운영체제 및 브라우저 표시 여부. 기본값: true.']), S.ACI + '_SHOW_REGION', ['是否显示用户 IP 属地到省，可能不准确，不支持 IPv6，默认为：false', '是否顯示使用者 IP 屬地到省，預設為：false', '是否顯示使用者 IP 所屬地（精確到省），預設為：false', 'Show users\' IP region (province). Default: false.', 'Фойдаланувчиларнинг ИП ҳудудини (вилоят) кўрсатиш. Стандарт: нотўғри.', 'ユーザーIPの所在地（省）を表示するかどうか。正確でない場合があります。IPv6はサポートされていません。デフォルト：false', '사용자 IP 지역(도/시 단위) 표시 여부 (부정확할 수 있음, IPv6 미지원). 기본값: false.']), S.ACI + '_SITE_NAME', ['网站名称', '網站名稱', '網站名稱', 'Website name.', 'Вебсайт номи.', 'ウェブサイト名', '웹사이트 이름.']), S.ACI + '_SITE_URL', ['网站地址', '網站地址', '網站網址', 'Website URL.', 'Вебсайт URL.', 'ウェブサイトのアドレス', '웹사이트 주소.']), S.ACI + '_SMTP_HOST', ['自定义 SMTP 服务器地址。如您已配置 SMTP_SERVICE，此项请留空。', '自定義 SMTP 伺服器地址。如您已配置 SMTP_SERVICE，此項請留空。', '自訂 SMTP 伺服器位址。如您已設定 SMTP_SERVICE，此項請留白。', 'Custom SMTP server address. If you have configured SMTP_SERVICE, please leave it empty.', 'Махсус СМТП сервер манзили. Агар сиз СМТП_СEРВИСE созлаган бўлсангиз, уни бўш қолдиринг.', '自定义 SMTP 服务器地址。如您已配置 SMTP_SERVICE，此项请留空。', 'カスタムSMTPサーバのアドレス。SMTP_SERVICEを設定している場合は空白のままにします。', 'SMTP 서버 주소. SMTP_SERVICE를 설정한 경우 비워두세요.']), S.ACI + '_SMTP_PASS', ['邮件通知邮箱密码，QQ、163邮箱请填写授权码。', '郵件通知郵箱密碼，QQ、163郵箱請填寫授權碼。', '郵件通知郵箱密碼，QQ、163 郵箱請填寫授權碼。', 'Email notification mailbox password. Enter authorization code for QQ/163 mail.', 'Электрон почта хабарномаси почта қутиси пароли. ҚҚ/163 почтаси учун авторизация кодини киритинг.', 'メール通知のメールボックスパスワード。QQ、163メールは認証コードを入力してください', '알림 이메일 계정 SMTP용 비밀번호. (QQ, 163 등 대부분 별도의 앱 비밀번호/인증 코드 사용)']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.ACI + '_SMTP_PORT', ['自定义 SMTP 端口。如您已配置 SMTP_SERVICE，此项请留空。', '自定義 SMTP 端口。如您已配置 SMTP_SERVICE，此項請留空。', '自訂 SMTP 連接埠。如您已設定 SMTP_SERVICE，此項請留白。', 'Custom SMTP port. If you have configured SMTP_SERVICE, please leave it empty.', 'Махсус СМТП порти. Агар сиз СМТП_СEРВИС созлаган бўлсангиз, уни бўш қолдиринг.', 'カスタムSMTPポート。SMTP_SERVICEを設定している場合は、空白のままにします。', 'SMTP 포트. SMTP_SERVICE를 설정한 경우 비워두세요.']), S.ACI + '_SMTP_SECURE', ['自定义 SMTP 是否使用TLS，请填写 true 或 false。如您已配置 SMTP_SERVICE，此项请留空。', '自定義 SMTP 是否使用TLS，請填寫 true 或 false。如您已配置 SMTP_SERVICE，此項請留空。', '自訂 SMTP 是否使用 TLS，請填寫 true 或 false。如您已設定 SMTP_SERVICE，此項請留白。', 'Custom TLS for SMTP. Enter "true" or "false". If you have configured SMTP_SERVICE, please leave it empty.', 'СМТП учун махсус ТЛС. «Тўғри» ёки «нотўғри» ни киритинг. Агар сиз СМТП_СEРВИС созлаган бўлсангиз, уни бўш қолдиринг.', 'SMTPがTLSを使用するかどうかをカスタマイズします。trueまたはfalseを記入してください。SMTP_SERVICEを設定している場合は、この項目を空白にしてください。', 'SMTP TLS 사용 여부 (true 또는 false 입력). SMTP_SERVICE를 설정한 경우 비워두세요.']), S.ACI + '_SMTP_SERVICE', ["\u90AE\u4EF6\u901A\u77E5\u90AE\u7BB1\u670D\u52A1\u5546\u3002\u652F\u6301\uFF1A".concat(smtpServices.join('、')), "\u90F5\u4EF6\u901A\u77E5\u90F5\u7BB1\u670D\u52D9\u5546\u3002\u652F\u6301\uFF1A".concat(smtpServices.join('、')), "\u90F5\u4EF6\u901A\u77E5\u90F5\u7BB1\u670D\u52D9\u63D0\u4F9B\u5546\u3002\u652F\u63F4\uFF1A".concat(smtpServices.join('、')), "Email service provider for Email notification. Support: ".concat(smtpServices.join(', ')), "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D \u043F\u043E\u0447\u0442\u0430 \u0445\u0430\u0431\u0430\u0440\u043D\u043E\u043C\u0430\u0441\u0438 \u0443\u0447\u0443\u043D \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D \u043F\u043E\u0447\u0442\u0430 \u0445\u0438\u0437\u043C\u0430\u0442\u0438 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0438. \u049A\u045E\u043B\u043B\u0430\u0431-\u049B\u0443\u0432\u0432\u0430\u0442\u043B\u0430\u0448: ".concat(smtpServices.join(', ')), "\u30E1\u30FC\u30EB\u901A\u77E5\u30E1\u30FC\u30EB\u30DC\u30C3\u30AF\u30B9\u30B5\u30FC\u30D3\u30B9\u30D7\u30ED\u30D0\u30A4\u30C0\u3002\u30B5\u30DD\u30FC\u30C8: ".concat(smtpServices.join(','), "."), "\uC54C\uB9BC \uBC1C\uC1A1 \uC774\uBA54\uC77C \uC11C\uBE44\uC2A4 \uC120\uD0DD. \uC9C0\uC6D0 \uBAA9\uB85D: ".concat(smtpServices.join(', '))]), S.ACI + '_SMTP_USER', ['邮件通知邮箱用户名。', '郵件通知郵箱用户名。', '郵件通知郵箱使用者名稱。', 'Email notification mailbox username.', 'Электрон почта хабарномаси почта қутиси фойдаланувчи номи.', 'メール通知のメールボックスユーザー名。', '선택한 이메일 알림 서비스 아이디']), "ADMIN_CONFIG_RESET", ['重置', '重置', '還原', 'Reset', 'Ресет', 'リセット', '초기화']), "ADMIN_CONFIG_SAVE", ['保存', '保存', '儲存', 'Save', 'Сақлаш', '保存', '저장']), "ADMIN_CREDENTIALS", ['私钥文件', '私鑰文件', '私鑰檔案', 'Private key file', 'Shaxsiy kalit fayli', '秘密鍵ファイル', '개인 키 파일']), "ADMIN_CREDENTIALS_FAQ", ['如何获得私钥', '如何獲得私鑰', '如何獲取私鑰', 'How to get the private key', 'Shaxsiy kalitni qanday olish mumkin', '秘密鍵を取得する方法', '개인 키 발급 방법']), "ADMIN_CREDENTIALS_PLACEHOLDER", ['请粘贴私钥文件内容', '請貼上私鑰文件內容', '請貼上私鑰檔案內容', 'Please paste the contents of the private key file', 'Iltimos, shaxsiy kalit faylining mazmunini joylashtiring', '秘密鍵ファイルの内容を貼り付けてください', '개인 키 파일 내용을 붙여넣으세요']), "ADMIN_FORGOT", ['忘记密码', '忘記密碼', '忘記密碼', 'Forget your password', 'Парол унутилган', 'パスワードを忘れた', '비밀번호 찾기']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "ADMIN_EXPORT", ['导出', '匯出', '匯出', 'Export', 'Экспорт', 'エクスポート', '내보내기']), "ADMIN_EXPORT_WARN", ['将全部数据导出为 JSON 文件。如果遇到评论较多、导出失败或缺失数据，请连接数据库手动导出', '將全部數據匯出為 JSON 檔。如果遇到評論較多、匯出失敗或缺失數據，請連接資料庫手動匯出', '將全部數據匯出為 JSON 檔。如果遇到評論較多、匯出失敗或缺失數據，請連接資料庫手動匯出', 'Export all data as a JSON file. If you encounter export failures or missing data, connect to the database to export manually', 'Барча маълумотларни ЖСОН файли сифатида экспорт қилинг. Экспорт хатоси ёки этишмаётган маълумотларга дуч келсангиз, қўлда экспорт қилиш учун маълумотлар базасига уланинг', 'すべてのデータをJSONファイルとしてエクスポートします。コメントが多く、エクスポートに失敗したりデータが欠落している場合は、データベースに手動で接続してエクスポートしてください', '모든 데이터를 JSON 파일로 내보냅니다. 댓글이 많아 내보내기 실패 또는 데이터 누락 발생 시, 데이터베이스에 직접 연결하여 수동으로 내보내세요.']), "ADMIN_EXPORT_COMMENT", ['导出评论', '匯出評論', '匯出評論', 'Export comment', 'Изохни экспорт килиш', 'コメントをエクスポート', '댓글 내보내기']), "ADMIN_EXPORT_COUNTER", ['导出访问量', '匯出訪問量', '匯出訪問量', 'Export counter', 'Экспорт сони', 'ページビューをエクスポート', '통계 내보내기']), S.AI, ['导入', '匯入', '匯入', 'Import', 'Импорт', 'インポート', '가져오기']), S.AI + '_FILE_REQUIRED', ['未选择文件', '未選擇文件', '未選擇檔案', 'No file selected', 'Файлни танланмади', 'ファイルが選択されていません', '파일이 선택되지 않았습니다']), S.AI + '_IMPORTED', ['完成导入 ', '完成匯入 ', '完成匯入 ', 'Imported ', 'Импорт қилинди ', 'インポート完了 ', '가져오기 완료 ']), S.AI + '_IMPORTING', ['开始导入 ', '開始匯入 ', '開始匯入 ', 'Importing ', 'Импорт қилинмоқда ', 'インポートを開始 ', '가져오는 중 ']), S.AI + '_LOG', ['日志', '日誌', '日誌', 'Log', 'Лог', 'システムログ', '로그']), S.AI + '_SELECT', ['请选择', '請選擇', '請選擇', 'Select', 'Танланг', '選択してください', '선택하세요']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.AI + '_SELECT_FILE', ['选择文件', '選擇文件', '選擇檔案', 'Select file', 'Файлни танланг', 'ファイルを選択', '파일 선택']), S.AI + '_SELECT_SOURCE', ['选择源系统', '選擇源系統', '選擇來源系統', 'Select source', 'Манба танланг', 'ソースを選択', '가져올 댓글 데이터 선택']), S.AI + '_SOURCE_REQUIRED', ['未选择源系统', '未選擇源系統', '未選擇來源系統', 'No source selected.', 'Ҳеч қандай манба танланмаган.', 'ソースが選択されていません', '가져올 댓글 데이터가 선택되지 않았습니다.']), S.AI + '_START', ['开始导入', '開始匯入', '開始匯入', 'Start import', 'Импортни бошлаш', 'インポートを開始', '가져오기 시작']), S.AI + '_STARTING', ['开始导入', '開始匯入', '開始匯入', 'Importing', 'Импорт қилинмоқда', 'インポート中です', '가져오는 중']), S.AI + '_TIP_ARTALK', ['请上传 JSON 格式的 Artalk 导出文件，文件名通常为 comments.data.json', '請上傳 JSON 格式的 Artalk 導出文件，文件名通常為 comments.data.json', '請上傳 JSON 格式的 Artalk 匯出檔案，檔名通常為 comments.data.json', 'Please upload the Artalk export file in JSON format.The file name is usually comments.data.json', 'Арталк экспорт файлини ЖСОН форматида юкланг. Файл номи одатда comments.data.json бўлади.', 'JSON形式のArtalkエクスポートファイルをアップロードしてください。ファイル名は通常、comments.data.jsonです。', 'JSON 형식의 Artalk 내보내기 파일을 업로드하세요. 파일 이름은 보통 comments.data.json 입니다.']), S.AI + '_TIP_DISQUS', ['请上传 XML 格式的 Disqus 导出文件，文件名通常为 [网站名称]-[导出时间]-all.xml', '請上傳 XML 格式的 Disqus 導出文件，文件名通常為 [網站名稱]-[導出時間]-all.xml', '請上傳 XML 格式的 Disqus 匯出檔案，檔名通常為 [網站名稱]-[匯出時間]-all.xml', 'Please upload the Disqus export file in XML format. The file name is usually [website name]-[export time]-all.xml', 'Disqus экспорт файлини ХМЛ форматида юкланг. Файл номи одатда [веб-сайт номи]-[экспорт vaqti]-all.xml', 'DisqusエクスポートファイルをXML形式でアップロードしてください。ファイル名は通常、[サイト名]-[エクスポート時間]-all.xmlです。', 'XML 형식의 Disqus 내보내기 파일을 업로드하세요. 파일 이름은 보통 [웹사이트이름]-[내보내기시간]-all.xml 입니다.']), S.AI + '_TIP_VALINE', ['请上传 JSON 格式的 Valine 导出文件，文件名通常为 Comment.json', '請上傳 JSON 格式的 Valine 導出文件，文件名通常為 Comment.json', '請上傳 JSON 格式的 Valine 匯出檔案，檔名通常為 Comment.json', 'Please upload the Valine export file in JSON format. The file name is usually Comment.json', 'Илтимос, Валине экспорт файлини ЖСОН форматида юкланг. Файл номи одатда Comment.json', 'JSON形式のValineエクスポートファイルをアップロードしてください。ファイル名は通常、Comment.jsonです。', 'JSON 형식의 Valine 내보내기 파일을 업로드하세요. 파일 이름은 보통 Comment.json 입니다.']), S.AI + '_UPLOADED', ['上传完成 ', '上傳完成 ', '上傳完成 ', 'Uploaded ', 'Юкланди ', 'アップロード完了', '업로드 완료 ']), S.AI + '_UPLOADING', ['已上传 ', '已上傳 ', '已上傳 ', 'Uploading ', 'Юкланмоқда ', 'アップロード中です', '업로드 중 ']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, S.AI + '_WARN', ['支持从其他评论系统的备份文件导入评论。\n数据是安全的，导入功能完全在您的云环境进行。\n建议在导入前备份 comment 数据库。', '支持從其他評論系統的備份文件匯入評論。\n數據是安全的，匯入功能完全在您的雲環境進行。\n建議在匯入前備份 comment 數據庫。', '支援從其他留言系統的備份檔案匯入留言。\n資料是安全的，匯入功能完全在您的雲端環境進行。\n建議在匯入前備份 comment 資料庫。', 'Import comments from other comment systems.\nThe data is safe, and the import function is performed entirely in your cloud environment.\nPlease backup your comment database before importing.', 'Бошқа шарҳ тизимларидан шарҳларни импорт қилинг.\nМаълумотлар хавфсиз ва импорт функцияси тўлиқ булутли муҳитда амалга оширилади.\nИмпорт қилишдан олдин шарҳлар маълумотлар базасини захираланг.', '他のコメントシステムのバックアップファイルからのインポートに対応。\nデータは安全で、インポート機能はすべてクラウド環境で実行されます。\nインポート前にコメントデータベースをバックアップすることを推奨します。', '다른 댓글 시스템의 백업 파일에서 댓글을 가져올 수 있습니다.\n데이터 가져오기는 설정하신 클라우드에서만 안전하게 진행됩니다.\n가져오기 전에 댓글 데이터베이스를 백업하는 것이 좋습니다.']), "ADMIN_LOGIN", ['登录', '登入', '登入', 'Sign in', 'Тизимга кириш', 'ログイン', '로그인']), "ADMIN_LOGIN_TITLE", ['Twikoo 评论管理', 'Twikoo 評論管理', 'Twikoo 留言管理', 'Twikoo Management Panel', 'Twikoo Бошқарув Панели', 'Twikoo コメント管理', 'Twikoo 관리자 패널']), "ADMIN_LOGOUT", ['退出登录', '退出登入', '登出', 'Sign out', 'Тизимдан чиқиш', 'ログアウト', '로그아웃']), "ADMIN_NEED_UPDATE", ['若要使用评论管理，请更新 Twikoo 云函数', '若要使用評論管理，請更新 Twikoo 雲函數', '若要使用留言管理功能，請更新 Twikoo 雲端函數', 'A new version of Twikoo is required for comment management.', 'Фикрларни бошқариш учун Твикоо нинг янги версияси талаб қилинади.', 'コメント管理を使用するには、Twikoo クラウド関数を更新してください', '새 버전의 댓글 관리를 사용하려면 Twikoo Cloud Function을 업데이트하세요.']), "ADMIN_PASSWORD", ['密码', '密碼', '密碼', 'Password', 'Пароль', 'パスワード', '비밀번호']), "ADMIN_PASSWORD_PLACEHOLDER", ['请输入', '請輸入', '請輸入', 'Enter your password...', 'Паролингизни киритинг...', '入力してください', '비밀번호를 입력하세요...']), "ADMIN_PASSWORD_REQUIRED", ['请输入密码', '請輸入密碼', '請輸入密碼', 'Please enter your password', 'Илтимос, паролингизни киритинг', 'パスワードを入力してください', '비밀번호를 입력하세요']), "ADMIN_REGIST", ['注册', '註冊', '註冊', 'Register', 'Рўйхатдан ўтиш', '登録', '관리자 등록']), "ADMIN_REGIST_FAILED", ['注册失败', '註冊失敗', '註冊失敗', 'Register failed', 'Рўйхатдан ўтиш амалга ошмади', '登録に失敗しました', '관리자 등록 실패']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "ADMIN_SET_PASSWORD", ['设置密码', '設置密碼', '設定密碼', 'Set password', 'Пароль қўйиш', 'パスワードの設定', '비밀번호 설정']), "ADMIN_SET_PASSWORD_CONFIRM", ['确认密码', '確認密碼', '確認密碼', 'Confirm password', 'Паролни тасдиқланг', 'パスワードの確認', '비밀번호 확인']), "ADMIN_SET_PASSWORD_CONFIRM_PLACEHOLDER", ['确认密码', '確認密碼', '確認密碼', 'Confirm password...', 'Паролни тасдиқлаш...', 'パスワードの確認', '비밀번호 확인...']), "ADMIN_SET_PASSWORD_PLACEHOLDER", ['密码', '密碼', '密碼', 'Password', 'Пароль', 'パスワード', '비밀번호']), "ADMIN_TITLE", ['Twikoo 管理面板', 'Twikoo 管理面板', 'Twikoo 管理控制台', 'Twikoo Management Panel', 'Twikoo Бошқарув Панели', 'Twikoo管理パネル', 'Twikoo 관리 패널']), "COMMENTS_COUNT_SUFFIX", [' 条评论', ' 條評論', ' 則留言', ' comments', ' изоҳлар', ' 件のコメント', '개의 댓글']), "COMMENTS_SORT_NEWEST", ['最新', '最新', '最新', 'Newest', 'Энг янги', '最新', '최신']), "COMMENTS_SORT_OLDEST", ['最早', '最早', '最早', 'Oldest', 'Энг эски', '最古', '오래됨']), "COMMENTS_SORT_POPULAR", ['热门', '熱門', '熱門', 'Popular', 'Машҳур', '人気', '인기']), "COMMENTS_EXPAND", ['查看更多', '查看更多', '檢視更多', 'Load more', 'Давомини юклаш', 'もっと見る', '더 보기']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "COMMENTS_NO_COMMENTS", ['没有评论', '沒有評論', '沒有留言', 'No comment', 'Изоҳларсиз', 'コメントはありません', '아직 댓글이 없습니다.']), "COMMENT_EXPAND", ['展开', '展開', '展開', 'Read more', 'Давомини ўқиш', '全文を表示', '더 보기']), "COMMENT_COLLAPSE", ['收起', '收起', '閉合', 'Collapse', 'Очиш', '折りたたむ', '접기']), "COMMENT_MASTER_TAG", ['博主', '博主', '站長', 'Admin', 'Модератор', '管理者', '관리자']), "COMMENT_REPLIED", ['回复', '回覆', '回覆', 'Reply', 'Жавоб бериш', '返信', '답글']), "COMMENT_REVIEWING_TAG", ['审核中', '審核中', '審核中', 'Pending', 'Кутилмоқда', '検討中', '검토 중']), "COMMENT_TOP_TAG", ['置顶', '置頂', '置頂', 'Pinned', 'Қадоқланган', '固定', '고정됨']), "COMMENT_FAILED", ['评论失败', '評論失敗', '評論失敗', 'Comment failed', 'Фикр билдирилмади', 'コメント失敗', '댓글 등록 실패']), "META_INPUT_LINK", ['网址', '網址', '網址', 'Website', 'Веб-сайт', 'ウェブサイト', '웹사이트']), "META_INPUT_MAIL", ['邮箱', '郵箱', '郵箱', 'Email', 'Email', 'メールアドレス', '이메일']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "META_INPUT_NICK", ['昵称', '暱稱', '暱稱', 'Nickname', 'Исм', '名前', '닉네임']), "META_INPUT_NOT_REQUIRED", ['选填', '選填', '選填', 'Optional', 'Ихтиёрий', '任意', '선택']), "META_INPUT_REQUIRED", ['必填', '必填', '必填', 'Required', 'Мажбурий', '必須', '필수']), "PAGINATION_COUNT_PREFIX", ['共 ', '共 ', '共 ', '', '', '合計 ', '총 ']), "PAGINATION_COUNT_SUFFIX", [' 条', ' 條', ' 條', ' entries', ' ёзувлар', ' 件', '개']), "PAGINATION_GOTO_PREFIX", ['前往', '前往', '前往', 'Goto page', 'Саҳифага ўтиш', 'ページに移動', '이동할 페이지: ']), "PAGINATION_GOTO_SUFFIX", ['页', '頁', '頁', '', 'ページ', '']), "PAGINATION_PAGESIZE", ['条/页', '條/頁', '則/頁', 'entries/page', 'ёзувлар/саҳифа', '件/ページ', '개/페이지']), "SUBMIT_CANCEL", ['取消', '取消', '取消', 'Cancel', 'Бекор қилиш', 'キャンセル', '취소']), "SUBMIT_PREVIEW", ['预览', '預覽', '預覽', 'Preview', 'Кўриб чиқиш', 'プレビュー', '미리보기']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "SUBMIT_SEND", ['发送', '發送', '傳送', 'Send', 'Юбормоқ', '送信', '등록']), "IMAGE_UPLOAD_PLACEHOLDER", ['图片上传中', '圖片上傳中', '圖片上傳中', 'Uploading image', 'Расм юклаш', '画像のアップロード中', '이미지 업로드 중']), "IMAGE_UPLOAD_FAILED", ['图片上传失败', '圖片上傳失敗', '圖片上傳失敗', 'IMAGE UPLOAD FAILED', 'РАСМ ЮКЛАНМАДИ', '画像のアップロード失敗', '이미지 업로드 실패']), "IMAGE_UPLOAD_NSFW", ['图片包含不当内容，禁止上传', '圖片包含不當內容，禁止上傳', '圖片包含不當內容，禁止上傳', 'Image contains inappropriate content, upload rejected', 'Расм ноқулай мазмунни ўз ичига олади, юклаш рад қилинди', '画像に不適切なコンテンツが含まれているため、アップロードが拒否されました', '이미지에 부적절한 콘텐츠가 포함되어 있어 업로드가 거부되었습니다']), "IMAGE_UPLOAD_FAILED_NO_CONF", ['博主未配置图床服务', '博主未配置圖床服務', '博主未配置圖床服務', 'The blogger didn\'t configured any image bed service', 'Муаллиф ҳеч қандай тасвир хизматини созламаган', '管理者が画像配信サービスを設定していません', '블로거가 이미지 호스팅 서비스를 설정하지 않았습니다.']), "IMAGE_UPLOAD_PLEASE_WAIT", ['图片上传中，请稍候再发送', '圖片上傳中，請稍候再發送', '圖片上傳中，請稍候再傳送', 'Uploading image, please try again later', 'Расм юкланмоқда, кейинроқ қайта уриниб кўринг', '画像のアップロードが完了するまでお待ちください', '이미지 업로드 중입니다. 잠시 후 다시 시도해주세요.']), "SUBMIT_SENDING", ['发送中', '發送中', '正在傳送', 'Sending', 'Юбориш', '送信中', '등록 중']), "TIMEAGO_DAYS", ['天前', '天前', '天前', 'days ago', 'кунлар олдин', '日前', '일 전']), "TIMEAGO_HOURS", ['小时前', '小時前', '小時前', 'hours ago', 'соатлар олдин', '時間前', '시간 전']), "TIMEAGO_MINUTES", ['分钟前', '分鐘前', '分鐘前', 'minutes ago', 'дақиқалар олдин', '分前', '분 전']), (0, _defineProperty2["default"])((0, _defineProperty2["default"])(_ADMIN_CLIENT_VERSION, "TIMEAGO_NOW", ['刚刚', '剛剛', '剛剛', 'Just now', 'Ҳозиргина', 'たった今', '방금 전']), "TIMEAGO_SECONDS", ['秒前', '秒前', '秒前', 'seconds ago', 'сониялар олдин', '秒前', '초 전']));

/***/ }),

/***/ 7565:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Renderer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8850));
var _createClass2 = _interopRequireDefault(__webpack_require__(1332));
var _defaults = __webpack_require__(4008);
var _helpers = __webpack_require__(9105);
/**
 * Renderer
 */
var Renderer = exports.Renderer = /*#__PURE__*/function () {
  function Renderer(options) {
    (0, _classCallCheck2["default"])(this, Renderer);
    this.options = options || _defaults.defaults;
  }
  (0, _createClass2["default"])(Renderer, [{
    key: "owo",
    value: function owo(text) {
      var odata = this.options.odata;
      if (odata && odata[text]) {
        return '<img class="tk-owo-emotion" src="' + odata[text] + '" alt=":' + text + ':">';
      } else {
        return ':' + text + ':';
      }
    }
  }, {
    key: "code",
    value: function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];
      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);
        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }
      _code = _code.replace(/\n$/, '') + '\n';
      if (!lang) {
        return '<pre><code>' + (escaped ? _code : (0, _helpers.escape)(_code, true)) + '</code></pre>\n';
      }
      return '<pre><code class="' + this.options.langPrefix + (0, _helpers.escape)(lang, true) + '">' + (escaped ? _code : (0, _helpers.escape)(_code, true)) + '</code></pre>\n';
    }
  }, {
    key: "blockquote",
    value: function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    }
  }, {
    key: "html",
    value: function html(_html) {
      return _html;
    }
  }, {
    key: "heading",
    value: function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      }
      // ignore IDs
      return '<h' + level + '>' + text + '</h' + level + '>\n';
    }
  }, {
    key: "hr",
    value: function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
  }, {
    key: "list",
    value: function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
  }, {
    key: "listitem",
    value: function listitem(text) {
      return '<li>' + text + '</li>\n';
    }
  }, {
    key: "checkbox",
    value: function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    }
  }, {
    key: "paragraph",
    value: function paragraph(text) {
      return '<p>' + text + '</p>\n';
    }
  }, {
    key: "table",
    value: function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }
  }, {
    key: "tablerow",
    value: function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    }
  }, {
    key: "tablecell",
    value: function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    }

    // span level renderer
  }, {
    key: "strong",
    value: function strong(text) {
      return '<strong>' + text + '</strong>';
    }
  }, {
    key: "em",
    value: function em(text) {
      return '<em>' + text + '</em>';
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return '<code>' + text + '</code>';
    }
  }, {
    key: "br",
    value: function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    }
  }, {
    key: "del",
    value: function del(text) {
      return '<del>' + text + '</del>';
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      href = (0, _helpers.cleanUrl)(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = '<a href="' + (0, _helpers.escape)(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      href = (0, _helpers.cleanUrl)(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    }
  }, {
    key: "text",
    value: function text(_text) {
      return _text;
    }
  }]);
  return Renderer;
}();

/***/ }),

/***/ 7912:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "tk-admin-comment"
  }, [_vm.clientVersion !== _vm.serverVersion ? _c('div', {
    staticClass: "tk-admin-warn"
  }, [_c('span', [_vm._v(_vm._s(_vm.t('ADMIN_CLIENT_VERSION')) + _vm._s(_vm.clientVersion) + "，")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.t('ADMIN_SERVER_VERSION')) + _vm._s(_vm.serverVersion) + "，")]), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tk-admin-comment-filter"
  }, [_c('el-input', {
    staticClass: "tk-admin-comment-filter-keyword",
    attrs: {
      "size": "small",
      "placeholder": _vm.t('ADMIN_COMMENT_SEARCH_PLACEHOLDER')
    },
    nativeOn: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.getComments.apply(null, arguments);
      }
    },
    model: {
      value: _vm.filter.keyword,
      callback: function callback($$v) {
        _vm.$set(_vm.filter, "keyword", $$v);
      },
      expression: "filter.keyword"
    }
  }), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filter.type,
      expression: "filter.type"
    }],
    staticClass: "tk-admin-comment-filter-type",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filter, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_FILTER_ALL')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VISIBLE"
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_FILTER_VISIBLE')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HIDDEN"
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_FILTER_HIDDEN')))])]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    on: {
      "click": _vm.getComments
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_SEARCH')))])], 1), _vm._v(" "), _c('div', {
    ref: "comment-list",
    staticClass: "tk-admin-comment-list"
  }, _vm._l(_vm.comments, function (comment) {
    return _c('div', {
      key: comment._id,
      staticClass: "tk-admin-comment-item"
    }, [_c('div', {
      staticClass: "tk-admin-comment-meta"
    }, [_c('tk-avatar', {
      attrs: {
        "config": _vm.serverConfig,
        "avatar": comment.avatar,
        "nick": comment.nick,
        "mail": comment.mail,
        "link": comment.link
      }
    }), _vm._v(" "), !comment.link ? _c('span', [_vm._v(_vm._s(comment.nick) + " ")]) : _vm._e(), _vm._v(" "), comment.link ? _c('a', {
      attrs: {
        "href": _vm.convertLink(comment.link),
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(comment.nick) + " ")]) : _vm._e(), _vm._v(" "), comment.mail ? _c('span', [_vm._v("("), _c('a', {
      attrs: {
        "href": "mailto:".concat(comment.mail)
      }
    }, [_vm._v(_vm._s(comment.mail))]), _vm._v(") ")]) : _vm._e(), _vm._v(" "), comment.isSpam ? _c('span', [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_IS_SPAM_SUFFIX')) + " ")]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "tk-time"
    }, [_vm._v(_vm._s(_vm.displayCreated(comment)) + " ")]), _vm._v(" "), _c('span', {
      attrs: {
        "title": comment.ua
      }
    }, [_vm._v(_vm._s(comment.ipRegion))])], 1), _vm._v(" "), _c('div', {
      ref: "comments",
      refInFor: true,
      staticClass: "tk-content",
      domProps: {
        "innerHTML": _vm._s(comment.comment)
      }
    }), _vm._v(" "), _vm.securityAlert && _vm.securityAlert.commentId === comment._id ? _c('div', {
      staticClass: "tk-admin-warn tk-admin-security-alert"
    }, [_c('a', {
      staticClass: "tk-admin-close",
      attrs: {
        "href": "#"
      },
      domProps: {
        "innerHTML": _vm._s(_vm.iconClose)
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          _vm.securityAlert = null;
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "tk-admin-security-alert-message"
    }, [_vm._v(_vm._s(_vm.securityAlert.message))]), _vm._v(" "), _vm.securityAlert.url ? _c('div', {
      staticClass: "tk-admin-security-alert-url"
    }, [_c('code', [_vm._v(_vm._s(_vm.securityAlert.url))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "tk-admin-actions"
    }, [_c('el-button', {
      attrs: {
        "size": "mini",
        "type": "text"
      },
      on: {
        "click": function click($event) {
          return _vm.handleView(comment);
        }
      }
    }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_VIEW')))]), _vm._v(" "), comment.isSpam ? _c('el-button', {
      attrs: {
        "size": "mini",
        "type": "text"
      },
      on: {
        "click": function click($event) {
          return _vm.handleSpam(comment, false);
        }
      }
    }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_SHOW')))]) : _vm._e(), _vm._v(" "), !comment.isSpam ? _c('el-button', {
      attrs: {
        "size": "mini",
        "type": "text"
      },
      on: {
        "click": function click($event) {
          return _vm.handleSpam(comment, true);
        }
      }
    }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_HIDE')))]) : _vm._e(), _vm._v(" "), !comment.rid && comment.top ? _c('el-button', {
      attrs: {
        "size": "mini",
        "type": "text"
      },
      on: {
        "click": function click($event) {
          return _vm.handleTop(comment, false);
        }
      }
    }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_UNTOP')))]) : _vm._e(), _vm._v(" "), !comment.rid && !comment.top ? _c('el-button', {
      attrs: {
        "size": "mini",
        "type": "text"
      },
      on: {
        "click": function click($event) {
          return _vm.handleTop(comment, true);
        }
      }
    }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_TOP')))]) : _vm._e(), _vm._v(" "), _c('el-button', {
      attrs: {
        "size": "mini",
        "type": "text"
      },
      on: {
        "click": function click($event) {
          return _vm.handleDelete(comment);
        }
      }
    }, [_vm._v(_vm._s(_vm.t('ADMIN_COMMENT_DELETE')))])], 1)]);
  }), 0), _vm._v(" "), _c('tk-pagination', {
    attrs: {
      "page-size": _vm.pageSize,
      "total": _vm.count
    },
    on: {
      "page-size-change": _vm.onPageSizeChange,
      "current-change": _vm.switchPage
    }
  })], 1);
};
var staticRenderFns = exports.Yp = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', [_vm._v("请参考 "), _c('a', {
    attrs: {
      "href": "https://twikoo.js.org/update.html",
      "target": "_blank"
    }
  }, [_vm._v("版本更新")]), _vm._v(" 进行升级")]);
}];

/***/ }),

/***/ 7945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkAdminCommentvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAdminComment; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminComment.vue?vue&type=template&id=b9b7d77c
var TkAdminCommentvue_type_template_id_b9b7d77c = __webpack_require__(7912);
;// ./src/client/view/components/TkAdminComment.vue?vue&type=template&id=b9b7d77c

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminComment.vue?vue&type=script&lang=js
var TkAdminCommentvue_type_script_lang_js = __webpack_require__(4555);
;// ./src/client/view/components/TkAdminComment.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkAdminCommentvue_type_script_lang_js = (TkAdminCommentvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminComment.vue?vue&type=style&index=0&id=b9b7d77c&prod&lang=css
var TkAdminCommentvue_type_style_index_0_id_b9b7d77c_prod_lang_css = __webpack_require__(5327);
;// ./src/client/view/components/TkAdminComment.vue?vue&type=style&index=0&id=b9b7d77c&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAdminComment.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkAdminCommentvue_type_script_lang_js,
  TkAdminCommentvue_type_template_id_b9b7d77c/* render */.XX,
  TkAdminCommentvue_type_template_id_b9b7d77c/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAdminComment = (component.exports);

/***/ }),

/***/ 8072:
/***/ (function() {

"use strict";


(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }
  var callbacks = [];
  var map = {};
  var noop = function noop() {};
  Prism.plugins.toolbar = {};

  /**
   * @typedef ButtonOptions
   * @property {string} text The text displayed.
   * @property {string} [url] The URL of the link which will be created.
   * @property {Function} [onClick] The event listener for the `click` event of the created button.
   * @property {string} [className] The class attribute to include with element.
   */

  /**
   * Register a button callback with the toolbar.
   *
   * @param {string} key
   * @param {ButtonOptions|Function} opts
   */
  var registerButton = Prism.plugins.toolbar.registerButton = function (key, opts) {
    var callback;
    if (typeof opts === 'function') {
      callback = opts;
    } else {
      callback = function callback(env) {
        var element;
        if (typeof opts.onClick === 'function') {
          element = document.createElement('button');
          element.type = 'button';
          element.addEventListener('click', function () {
            opts.onClick.call(this, env);
          });
        } else if (typeof opts.url === 'string') {
          element = document.createElement('a');
          element.href = opts.url;
        } else {
          element = document.createElement('span');
        }
        if (opts.className) {
          element.classList.add(opts.className);
        }
        element.textContent = opts.text;
        return element;
      };
    }
    if (key in map) {
      console.warn('There is a button with the key "' + key + '" registered already.');
      return;
    }
    callbacks.push(map[key] = callback);
  };

  /**
   * Returns the callback order of the given element.
   *
   * @param {HTMLElement} element
   * @returns {string[] | undefined}
   */
  function getOrder(element) {
    while (element) {
      var order = element.getAttribute('data-toolbar-order');
      if (order != null) {
        order = order.trim();
        if (order.length) {
          return order.split(/\s*,\s*/g);
        } else {
          return [];
        }
      }
      element = element.parentElement;
    }
  }

  /**
   * Post-highlight Prism hook callback.
   *
   * @param env
   */
  var hook = Prism.plugins.toolbar.hook = function (env) {
    // Check if inline or actual code block (credit to line-numbers plugin)
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Autoloader rehighlights, so only do this once.
    if (pre.parentNode.classList.contains('code-toolbar')) {
      return;
    }

    // Create wrapper for <pre> to prevent scrolling toolbar with content
    var wrapper = document.createElement('div');
    wrapper.classList.add('code-toolbar');
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Setup the toolbar
    var toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    // order callbacks
    var elementCallbacks = callbacks;
    var order = getOrder(env.element);
    if (order) {
      elementCallbacks = order.map(function (key) {
        return map[key] || noop;
      });
    }
    elementCallbacks.forEach(function (callback) {
      var element = callback(env);
      if (!element) {
        return;
      }
      var item = document.createElement('div');
      item.classList.add('toolbar-item');
      item.appendChild(element);
      toolbar.appendChild(item);
    });

    // Add our toolbar to the currently created wrapper of <pre> tag
    wrapper.appendChild(toolbar);
  };
  registerButton('label', function (env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }
    if (!pre.hasAttribute('data-label')) {
      return;
    }
    var element;
    var template;
    var text = pre.getAttribute('data-label');
    try {
      // Any normal text will blow up this selector.
      template = document.querySelector('template#' + text);
    } catch (e) {/* noop */}
    if (template) {
      element = template.content;
    } else {
      if (pre.hasAttribute('data-url')) {
        element = document.createElement('a');
        element.href = pre.getAttribute('data-url');
      } else {
        element = document.createElement('span');
      }
      element.textContent = text;
    }
    return element;
  });

  /**
   * Register the toolbar with Prism.
   */
  Prism.hooks.add('complete', hook);
})();

/***/ }),

/***/ 8087:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("59ad6a1e", content, true, {});

/***/ }),

/***/ 8120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-admin-import {\n  display: flex;\n  flex-direction: column;\n}\n.tk-admin-import-label {\n  margin-top: 1em;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.tk-admin-import select,\n.tk-admin-import input,\n.tk-admin-import .el-button,\n.tk-admin-import .el-textarea {\n  margin-top: 1em;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8129:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
var _typeof = __webpack_require__(9367);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.blobToDataURL = void 0;
Object.defineProperty(exports, "call", ({
  enumerable: true,
  get: function get() {
    return _api.call;
  }
}));
exports.getHref = exports.getFuncVer = exports.getCommentsCountApi = exports.convertLink = void 0;
Object.defineProperty(exports, "getQQAvatar", ({
  enumerable: true,
  get: function get() {
    return _avatar.getQQAvatar;
  }
}));
exports.getUserAgent = exports.getUrl = exports.getRecentCommentsApi = void 0;
Object.defineProperty(exports, "initMarkedOwo", ({
  enumerable: true,
  get: function get() {
    return _emotion.initMarkedOwo;
  }
}));
Object.defineProperty(exports, "initOwoEmotions", ({
  enumerable: true,
  get: function get() {
    return _emotion.initOwoEmotions;
  }
}));
exports.isNotSet = void 0;
Object.defineProperty(exports, "isQQ", ({
  enumerable: true,
  get: function get() {
    return _avatar.isQQ;
  }
}));
Object.defineProperty(exports, "isUrl", ({
  enumerable: true,
  get: function get() {
    return _api.isUrl;
  }
}));
exports.logger = void 0;
Object.defineProperty(exports, "marked", ({
  enumerable: true,
  get: function get() {
    return _marked["default"];
  }
}));
Object.defineProperty(exports, "normalizeMail", ({
  enumerable: true,
  get: function get() {
    return _avatar.normalizeMail;
  }
}));
exports.readAsText = void 0;
Object.defineProperty(exports, "renderCode", ({
  enumerable: true,
  get: function get() {
    return _highlight["default"];
  }
}));
exports.renderMath = exports.renderLinks = void 0;
Object.defineProperty(exports, "setLanguage", ({
  enumerable: true,
  get: function get() {
    return _i18n.setLanguage;
  }
}));
Object.defineProperty(exports, "t", ({
  enumerable: true,
  get: function get() {
    return _i18n["default"];
  }
}));
Object.defineProperty(exports, "timeago", ({
  enumerable: true,
  get: function get() {
    return _timeago["default"];
  }
}));
exports.timestamp = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(1819));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _i18n = _interopRequireWildcard(__webpack_require__(5878));
var _timeago = _interopRequireDefault(__webpack_require__(7435));
var _marked = _interopRequireDefault(__webpack_require__(37));
var _highlight = _interopRequireDefault(__webpack_require__(4161));
var _api = __webpack_require__(585);
var _avatar = __webpack_require__(7080);
var _emotion = __webpack_require__(9212);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var isNotSet = exports.isNotSet = function isNotSet(option) {
  return option === undefined || option === null || option === '';
};
var logger = exports.logger = {
  log: function log(message, e) {
    console.log("Twikoo: ".concat(message), e);
  },
  info: function info(message, e) {
    console.info("Twikoo: ".concat(message), e);
  },
  warn: function warn(message, e) {
    console.warn("Twikoo: ".concat(message), e);
  },
  error: function error(message, e) {
    console.error("Twikoo: ".concat(message), e);
  }
};
var timestamp = exports.timestamp = function timestamp() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return date.getTime();
};
var convertLink = exports.convertLink = function convertLink(link) {
  if (!link) return '';
  if (link.substring(0, 4) !== 'http') return "http://".concat(link);
  return link;
};

// 云函数版本
var twikooFuncVer;
var getFuncVer = exports.getFuncVer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tcb) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (twikooFuncVer) {
            _context.next = 4;
            break;
          }
          _context.next = 3;
          return (0, _api.call)(tcb, 'GET_FUNC_VERSION');
        case 3:
          twikooFuncVer = _context.sent;
        case 4:
          return _context.abrupt("return", twikooFuncVer);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getFuncVer(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getCommentsCountApi = exports.getCommentsCountApi = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tcb, options) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (options.urls instanceof Array) {
            _context2.next = 2;
            break;
          }
          throw new Error('urls 参数有误');
        case 2:
          if (!(options.urls.length === 0)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", []);
        case 4:
          _context2.next = 6;
          return (0, _api.call)(tcb, 'GET_COMMENTS_COUNT', options);
        case 6:
          result = _context2.sent;
          return _context2.abrupt("return", result.result.data);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getCommentsCountApi(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getRecentCommentsApi = exports.getRecentCommentsApi = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(tcb, options) {
    var result, _iterator, _step, comment;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _api.call)(tcb, 'GET_RECENT_COMMENTS', options);
        case 2:
          result = _context3.sent;
          // 封装相对评论时间
          _iterator = _createForOfIteratorHelper(result.result.data);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              comment = _step.value;
              comment.relativeTime = (0, _timeago["default"])(comment.created);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return _context3.abrupt("return", result.result.data);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getRecentCommentsApi(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 替换 UA 中的 Windows NT 版本号以兼容识别 Windows 11
 * https://learn.microsoft.com/en-us/microsoft-edge/web-platform/how-to-detect-win11
 * 替换 UA 中的 macOS 版本以兼容识别 Catalina 以上版本的 macOS
 */
var getUserAgent = exports.getUserAgent = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var ua, platform, _yield$navigator$user, platformVersion, majorPlatformVersion, correctVersion, _correctVersion;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ua = window.navigator.userAgent;
          _context4.prev = 1;
          platform = navigator.userAgentData.platform;
          if (!(platform === 'Windows' || platform === 'macOS')) {
            _context4.next = 10;
            break;
          }
          _context4.next = 6;
          return navigator.userAgentData.getHighEntropyValues(['platformVersion']);
        case 6:
          _yield$navigator$user = _context4.sent;
          platformVersion = _yield$navigator$user.platformVersion;
          majorPlatformVersion = parseInt(platformVersion.split('.')[0]);
          if (platform === 'Windows' && majorPlatformVersion >= 13) {
            correctVersion = '11.0';
            ua = ua.replace(/Windows NT 10\.0/i, "Windows NT ".concat(correctVersion));
          } else if (platform === 'macOS' && majorPlatformVersion >= 11) {
            _correctVersion = platformVersion.replace(/\./g, '_');
            ua = ua.replace(/Mac OS X 10_[0-9]+_[0-9]+/i, "Mac OS X ".concat(_correctVersion));
          }
        case 10:
          _context4.next = 14;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
        case 14:
          return _context4.abrupt("return", ua);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 12]]);
  }));
  return function getUserAgent() {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 由于 Twikoo 早期版本将 path 视为表达式处理，
 * 而其他同类评论系统都是把 path 视为字符串常量，
 * 为同时兼顾早期版本和统一性，就有了这个方法。
 */
var getUrl = exports.getUrl = function getUrl(path) {
  var url;
  if (window.TWIKOO_MAGIC_PATH) {
    // 从全局变量获取 path
    url = window.TWIKOO_MAGIC_PATH;
  } else if (path && typeof path === 'string') {
    switch (path) {
      case 'location.pathname':
      case 'window.location.pathname':
        url = window.location.pathname;
        break;
      case 'location.href':
      case 'window.location.href':
        url = window.location.href;
        break;
      default:
        url = path;
    }
  } else {
    // 默认 path
    url = window.location.pathname;
  }
  return url;
};
var getHref = exports.getHref = function getHref(href) {
  var _ref5, _window$TWIKOO_MAGIC_;
  return (_ref5 = (_window$TWIKOO_MAGIC_ = window.TWIKOO_MAGIC_HREF) !== null && _window$TWIKOO_MAGIC_ !== void 0 ? _window$TWIKOO_MAGIC_ : href) !== null && _ref5 !== void 0 ? _ref5 : window.location.href;
};

/**
 * 读取文本文件内容
 */
var readAsText = exports.readAsText = function readAsText(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = function () {
      if (reader.error) {
        reject(reader.error);
      } else {
        resolve(reader.result);
      }
    };
  });
};
var renderLinks = exports.renderLinks = function renderLinks(el) {
  var aEls = [];
  if (el instanceof Array) {
    el.forEach(function (item) {
      var _aEls;
      (_aEls = aEls).push.apply(_aEls, (0, _toConsumableArray2["default"])(item.getElementsByTagName('a')));
    });
  } else if (el instanceof Element) {
    aEls = el.getElementsByTagName('a');
  }
  var _iterator2 = _createForOfIteratorHelper(aEls),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var aEl = _step2.value;
      aEl.setAttribute('target', '_blank');
      aEl.setAttribute('rel', 'noopener noreferrer');
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var renderMath = exports.renderMath = function renderMath(el, options) {
  var defaultOptions = {
    delimiters: [{
      left: '$$',
      right: '$$',
      display: true
    }, {
      left: '$',
      right: '$',
      display: false
    }, {
      left: '\\(',
      right: '\\)',
      display: false
    }, {
      left: '\\[',
      right: '\\]',
      display: true
    }],
    throwOnError: false
  };
  if (typeof renderMathInElement === 'function') {
    /* eslint-disable-next-line no-undef */
    renderMathInElement(el, options || defaultOptions);
  }
};
var blobToDataURL = exports.blobToDataURL = function blobToDataURL(blob) {
  return new Promise(function (resolve) {
    var reader = new FileReader();
    reader.onload = function (evt) {
      var base64 = evt.target.result;
      resolve(base64);
    };
    reader.readAsDataURL(blob);
  });
};

/***/ }),

/***/ 8198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var arrayLikeToArray = __webpack_require__(6530);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _vue = __webpack_require__(4478);
var _vue2 = _interopRequireDefault(_vue);
var _dom = __webpack_require__(2865);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var hasModal = false;
var hasInitZIndex = false;
var zIndex = void 0;
var getModal = function getModal() {
  if (_vue2["default"].prototype.$isServer) return;
  var modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;
    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }
  return modalDom;
};
var instances = {};
var PopupManager = {
  modalFade: true,
  getInstance: function getInstance(id) {
    return instances[id];
  },
  register: function register(id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },
  deregister: function deregister(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },
  nextZIndex: function nextZIndex() {
    return PopupManager.zIndex++;
  },
  modalStack: [],
  doOnModalClick: function doOnModalClick() {
    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;
    var instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },
  openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
    if (_vue2["default"].prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;
    var modalStack = this.modalStack;
    for (var i = 0, j = modalStack.length; i < j; i++) {
      var item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }
    var modalDom = getModal();
    (0, _dom.addClass)(modalDom, 'v-modal');
    if (this.modalFade && !hasModal) {
      (0, _dom.addClass)(modalDom, 'v-modal-enter');
    }
    if (modalClass) {
      var classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(function (item) {
        return (0, _dom.addClass)(modalDom, item);
      });
    }
    setTimeout(function () {
      (0, _dom.removeClass)(modalDom, 'v-modal-enter');
    }, 200);
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }
    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = '';
    this.modalStack.push({
      id: id,
      zIndex: zIndex,
      modalClass: modalClass
    });
  },
  closeModal: function closeModal(id) {
    var modalStack = this.modalStack;
    var modalDom = getModal();
    if (modalStack.length > 0) {
      var topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          var classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return (0, _dom.removeClass)(modalDom, item);
          });
        }
        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (var i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }
    if (modalStack.length === 0) {
      if (this.modalFade) {
        (0, _dom.addClass)(modalDom, 'v-modal-leave');
      }
      setTimeout(function () {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none';
          PopupManager.modalDom = undefined;
        }
        (0, _dom.removeClass)(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};
Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get: function get() {
    if (!hasInitZIndex) {
      zIndex = zIndex || (_vue2["default"].prototype.$ELEMENT || {}).zIndex || 2000;
      hasInitZIndex = true;
    }
    return zIndex;
  },
  set: function set(value) {
    zIndex = value;
  }
});
var getTopPopup = function getTopPopup() {
  if (_vue2["default"].prototype.$isServer) return;
  if (PopupManager.modalStack.length > 0) {
    var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;
    var instance = PopupManager.getInstance(topPopup.id);
    return instance;
  }
};
if (!_vue2["default"].prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      var topPopup = getTopPopup();
      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
      }
    }
  });
}
exports["default"] = PopupManager;

/***/ }),

/***/ 8440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tk-footer {\n  width: 100%;\n  text-align: end;\n  font-size: 0.75em;\n  color: #999999;\n  margin-top: 1em;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8443:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M189.37,152.86Zm-58.74-29.37C130.79,123.5,130.71,123.5,130.63,123.49Zm351.42,45.35c-10.61-25.5-32.08-53-48.94-61.73,13.72,26.89,21.67,53.88,24.7,74,0,0,0,.14.05.41-27.58-68.75-74.35-96.47-112.55-156.83-1.93-3.05-3.86-6.11-5.74-9.33-1-1.65-1.86-3.34-2.69-5.05A44.88,44.88,0,0,1,333.24.69a.63.63,0,0,0-.55-.66.9.9,0,0,0-.46,0l-.12.07-.18.1.1-.14c-54.23,31.77-76.72,87.38-82.5,122.78a130,130,0,0,0-48.33,12.33,6.25,6.25,0,0,0-3.09,7.75,6.13,6.13,0,0,0,7.79,3.79l.52-.21a117.84,117.84,0,0,1,42.11-11l1.42-.1c2-.12,4-.2,6-.22A122.61,122.61,0,0,1,291,140c.67.2,1.32.42,2,.63,1.89.57,3.76,1.2,5.62,1.87,1.36.5,2.71,1,4.05,1.58,1.09.44,2.18.88,3.25,1.35q2.52,1.13,5,2.35c.75.37,1.5.74,2.25,1.13q2.4,1.26,4.74,2.63,1.51.87,3,1.8a124.89,124.89,0,0,1,42.66,44.13c-13-9.15-36.35-18.19-58.82-14.28,87.74,43.86,64.18,194.9-57.39,189.2a108.43,108.43,0,0,1-31.74-6.12c-2.42-.91-4.8-1.89-7.16-2.93-1.38-.63-2.76-1.27-4.12-2C174.5,346,149.9,316.92,146.83,281.59c0,0,11.25-41.95,80.62-41.95,7.5,0,28.93-20.92,29.33-27-.09-2-42.54-18.87-59.09-35.18-8.85-8.71-13.05-12.91-16.77-16.06a69.58,69.58,0,0,0-6.31-4.77A113.05,113.05,0,0,1,173.92,97c-25.06,11.41-44.55,29.45-58.71,45.37h-.12c-9.67-12.25-9-52.65-8.43-61.08-.12-.53-7.22,3.68-8.15,4.31a178.54,178.54,0,0,0-23.84,20.43A214,214,0,0,0,51.9,133.36l0,0a.08.08,0,0,1,0,0,205.84,205.84,0,0,0-32.73,73.9c-.06.27-2.33,10.21-4,22.48q-.42,2.87-.78,5.74c-.57,3.69-1,7.71-1.44,14,0,.24,0,.48-.05.72-.18,2.71-.34,5.41-.49,8.12,0,.41,0,.82,0,1.24,0,134.7,109.21,243.89,243.92,243.89,120.64,0,220.82-87.58,240.43-202.62.41-3.12.74-6.26,1.11-9.41,4.85-41.83-.54-85.79-15.82-122.55Z\"></path></svg>"

/***/ }),

/***/ 8554:
/***/ (function(module) {

"use strict";


function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8589:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports["default"] = function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
};
;

/***/ }),

/***/ 8675:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-pagination"
  }, [!!_vm.pageCount ? _c('div', {
    staticClass: "tk-pagination-options"
  }, [_c('div', [_c('span', [_vm._v(_vm._s(_vm.t('PAGINATION_COUNT_PREFIX')))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.total))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.t('PAGINATION_COUNT_SUFFIX')))])]), _vm._v(" "), _c('el-input', {
    attrs: {
      "type": "number",
      "min": "1",
      "max": "100",
      "value": _vm.userPageSize ? _vm.userPageSize : _vm.pageSize
    },
    on: {
      "input": _vm.handleInputPageSize,
      "change": _vm.pageSizeChamge
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.t('PAGINATION_PAGESIZE')))])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tk-pagination-pagers"
  }, _vm._l(_vm.pagers, function (pager) {
    return _c('div', {
      key: pager.page,
      staticClass: "tk-pagination-pager",
      "class": {
        __current: pager.page === _vm.currentPage
      },
      on: {
        "click": function click($event) {
          return _vm.currentChange(pager.page);
        }
      }
    }, [_vm._v(_vm._s(pager.title))]);
  }), 0), _vm._v(" "), !!_vm.pageCount ? _c('div', {
    staticClass: "tk-pagination-options"
  }, [_c('span', [_vm._v(_vm._s(_vm.t('PAGINATION_GOTO_PREFIX')))]), _vm._v(" "), _c('el-input', {
    attrs: {
      "type": "number",
      "min": "1",
      "max": _vm.pageCount,
      "value": _vm.userInput ? _vm.userInput : _vm.currentPage
    },
    on: {
      "input": _vm.handleInput,
      "change": _vm.currentChange
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.t('PAGINATION_GOTO_SUFFIX')))])], 1) : _vm._e()]);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 8784:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addClass = addClass;
exports.getStyle = exports.getScrollContainer = void 0;
exports.hasClass = hasClass;
exports.once = exports.on = exports.off = exports.isScroll = exports.isInContainer = void 0;
exports.removeClass = removeClass;
exports.setStyle = setStyle;
var _typeof2 = _interopRequireDefault(__webpack_require__(9367));
var _vue = _interopRequireDefault(__webpack_require__(4478));
/* istanbul ignore next */

var isServer = _vue["default"].prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = exports.off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
;

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.setAttribute('class', curClass);
  }
}
;

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.setAttribute('class', trim(curClass));
  }
}
;

/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;
  if ((0, _typeof2["default"])(styleName) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
;
var isScroll = exports.isScroll = function isScroll(el, vertical) {
  if (isServer) return;
  var determinedDirection = vertical !== null && vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');
  return overflow.match(/(scroll|auto|overlay)/);
};
var getScrollContainer = exports.getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;
  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
var isInContainer = exports.isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;
  var elRect = el.getBoundingClientRect();
  var containerRect;
  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};

/***/ }),

/***/ 8848:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1315);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("1a92f302", content, true, {});

/***/ }),

/***/ 8850:
/***/ (function(module) {

"use strict";


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8926:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _TkComments = _interopRequireDefault(__webpack_require__(1914));
var _TkFooter = _interopRequireDefault(__webpack_require__(1452));
var _TkAdmin = _interopRequireDefault(__webpack_require__(2053));
var _default = exports.A = {
  components: {
    TkComments: _TkComments["default"],
    TkFooter: _TkFooter["default"],
    TkAdmin: _TkAdmin["default"]
  },
  data: function data() {
    return {
      showAdmin: false,
      showAdminEntry: false
    };
  },
  methods: {
    onShowAdminEntry: function onShowAdminEntry(showAdminEntry) {
      this.showAdminEntry = showAdminEntry;
    }
  }
};

/***/ }),

/***/ 8974:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z\"></path></svg>"

/***/ }),

/***/ 9039:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z\"></path></svg>"

/***/ }),

/***/ 9067:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 9080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5447);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("811194ca", content, true, {});

/***/ }),

/***/ 9097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkAdminExportvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAdminExport; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminExport.vue?vue&type=template&id=d17d8842
var TkAdminExportvue_type_template_id_d17d8842 = __webpack_require__(9976);
;// ./src/client/view/components/TkAdminExport.vue?vue&type=template&id=d17d8842

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminExport.vue?vue&type=script&lang=js
var TkAdminExportvue_type_script_lang_js = __webpack_require__(3396);
;// ./src/client/view/components/TkAdminExport.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkAdminExportvue_type_script_lang_js = (TkAdminExportvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAdminExport.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  components_TkAdminExportvue_type_script_lang_js,
  TkAdminExportvue_type_template_id_d17d8842/* render */.XX,
  TkAdminExportvue_type_template_id_d17d8842/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAdminExport = (component.exports);

/***/ }),

/***/ 9103:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5132);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("4be5e494", content, true, {});

/***/ }),

/***/ 9105:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkSanitizeDeprecation = checkSanitizeDeprecation;
exports.cleanUrl = cleanUrl;
exports.edit = edit;
exports.escape = escape;
exports.findClosingBracket = findClosingBracket;
exports.merge = merge;
exports.noopTest = void 0;
exports.repeatString = repeatString;
exports.resolveUrl = resolveUrl;
exports.rtrim = rtrim;
exports.splitCells = splitCells;
exports.unescape = unescape;
/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    var prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  var relativeBase = base.indexOf(':') === -1;
  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}
var noopTest = exports.noopTest = {
  exec: function noopTest() {}
};
function merge(obj) {
  var i = 1,
    target,
    key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  var i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }
  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  var l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  var suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.substr(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var l = str.length;
  var level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  var result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

/***/ }),

/***/ 9171:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _utils = __webpack_require__(8129);
var _default = exports.A = {
  props: {
    pageSize: {
      type: Number,
      "default": 10
    },
    total: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      currentPage: 1,
      userInput: 0,
      userPageSize: 0,
      pagers: []
    };
  },
  computed: {
    pageCount: function pageCount() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  methods: {
    t: _utils.t,
    generatePager: function generatePager() {
      var pagers = [];
      for (var page = 1; page <= this.pageCount; page++) {
        if (Math.abs(this.currentPage - page) < 3 || page === 1 || page === this.pageCount) {
          pagers.push({
            title: "".concat(page),
            page: page
          });
        } else if (Math.abs(this.currentPage - page) < 4) {
          pagers.push({
            title: '...',
            page: page
          });
        }
      }
      this.pagers = pagers;
    },
    currentChange: function currentChange(pageNum) {
      this.currentPage = parseInt(pageNum);
      if (this.currentPage > this.pageCount) this.currentPage = this.pageCount;
      this.userInput = 0;
      this.$emit('current-change', this.currentPage);
      this.generatePager();
    },
    pageSizeChamge: function pageSizeChamge(pageSize) {
      this.userPageSize = 0;
      this.$emit('page-size-change', parseInt(pageSize));
    },
    handleInput: function handleInput(pageNum) {
      this.userInput = parseInt(pageNum);
    },
    handleInputPageSize: function handleInputPageSize(pageSize) {
      this.userPageSize = parseInt(pageSize);
    }
  },
  watch: {
    total: {
      handler: function handler() {
        this.generatePager();
      },
      immediate: true
    },
    pageSize: {
      handler: function handler() {
        this.generatePager();
      }
    }
  }
};

/***/ }),

/***/ 9211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".el-loading-parent--relative{position:relative!important}.el-loading-parent--hidden{overflow:hidden!important}.el-loading-mask{position:absolute;z-index:2000;background-color:rgba(255,255,255,.9);margin:0;top:0;right:0;bottom:0;left:0;-webkit-transition:opacity .3s;transition:opacity .3s}.el-loading-mask.is-fullscreen{position:fixed}.el-loading-mask.is-fullscreen .el-loading-spinner{margin-top:-25px}.el-loading-mask.is-fullscreen .el-loading-spinner .circular{height:50px;width:50px}.el-loading-spinner{top:50%;margin-top:-21px;width:100%;text-align:center;position:absolute}.el-loading-spinner .el-loading-text{color:#409EFF;margin:3px 0;font-size:14px}.el-loading-spinner .circular{height:42px;width:42px;-webkit-animation:loading-rotate 2s linear infinite;animation:loading-rotate 2s linear infinite}.el-loading-spinner .path{-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#409EFF;stroke-linecap:round}.el-loading-spinner i{color:#409EFF}.el-loading-fade-enter,.el-loading-fade-leave-active{opacity:0}@-webkit-keyframes loading-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9212:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initMarkedOwo = initMarkedOwo;
exports.initOwoEmotions = initOwoEmotions;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(1819));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _ = __webpack_require__(8129);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function initOwoEmotion(api) {
  return new Promise(function (resolve) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          var odata = formatOdata(JSON.parse(xhr.responseText));
          resolve(odata);
        } else {
          _.logger.warn('OwO data request was unsuccessful: ' + xhr.status);
        }
      }
    };
    xhr.open('get', api, true);
    xhr.send(null);
  });
}
function initOwoEmotions(_x) {
  return _initOwoEmotions.apply(this, arguments);
} // 格式化不规范的 OwO 数据格式
function _initOwoEmotions() {
  _initOwoEmotions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(apis) {
    var odata, odatas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          odata = {};
          _context.next = 3;
          return Promise.all(apis.split(',').map(function (api) {
            return initOwoEmotion(api.trim());
          }));
        case 3:
          odatas = _context.sent;
          Object.assign.apply(Object, [odata].concat((0, _toConsumableArray2["default"])(odatas)));
          return _context.abrupt("return", odata);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _initOwoEmotions.apply(this, arguments);
}
function formatOdata(odata) {
  try {
    Object.values(odata).forEach(function (item) {
      if (item.type === 'image') {
        var _iterator = _createForOfIteratorHelper(item.container),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var image = _step.value;
            if (!image.text) {
              // 缺少 text 的，取 img 文件名作为 text
              image.text = getFilename(getImgSrc(image.icon));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    return odata;
  } catch (e) {
    _.logger.warn('OwO data is bad: ', e);
  }
}
var template = document.createElement('template');
function getImgSrc(html) {
  try {
    template.innerHTML = html;
    return template.content.childNodes[0].src;
  } catch (e) {
    return '';
  }
}
function getFilename(url) {
  return url.split('#').shift().split('?').shift().split('/').pop();
}
function initMarkedOwo(odata) {
  if (odata && Object.values(odata)) {
    var imgs = {};
    Object.values(odata).forEach(function (item) {
      item.container.forEach(function (img) {
        var imgSrc = getImgSrc(img.icon);
        if (imgSrc) {
          imgs[img.text] = imgSrc;
        }
      });
    });
    return imgs;
  }
}

/***/ }),

/***/ 9272:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var arrayWithHoles = __webpack_require__(8554);
var iterableToArrayLimit = __webpack_require__(4805);
var unsupportedIterableToArray = __webpack_require__(2075);
var nonIterableRest = __webpack_require__(2971);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9367:
/***/ (function(module) {

"use strict";


function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9368:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("2af15803", content, true, {});

/***/ }),

/***/ 9396:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path d=\"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z\"></path></svg>"

/***/ }),

/***/ 9587:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><path d=\"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z\"></path></svg>"

/***/ }),

/***/ 9668:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PopupManager = undefined;
var _vue = __webpack_require__(4478);
var _vue2 = _interopRequireDefault(_vue);
var _merge = __webpack_require__(8589);
var _merge2 = _interopRequireDefault(_merge);
var _popupManager = __webpack_require__(8432);
var _popupManager2 = _interopRequireDefault(_popupManager);
var _scrollbarWidth = __webpack_require__(9686);
var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);
var _dom = __webpack_require__(2865);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var idSeed = 1;
var scrollBarWidth = void 0;
exports["default"] = {
  props: {
    visible: {
      type: Boolean,
      "default": false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      "default": false
    },
    modalFade: {
      type: Boolean,
      "default": true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      "default": false
    },
    lockScroll: {
      type: Boolean,
      "default": true
    },
    closeOnPressEscape: {
      type: Boolean,
      "default": false
    },
    closeOnClickModal: {
      type: Boolean,
      "default": false
    }
  },
  beforeMount: function beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    _popupManager2["default"].register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    _popupManager2["default"].deregister(this._popupId);
    _popupManager2["default"].closeModal(this._popupId);
    this.restoreBodyStyle();
  },
  data: function data() {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    };
  },
  watch: {
    visible: function visible(val) {
      var _this = this;
      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          _vue2["default"].nextTick(function () {
            _this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },
  methods: {
    open: function open(options) {
      var _this2 = this;
      if (!this.rendered) {
        this.rendered = true;
      }
      var props = (0, _merge2["default"])({}, this.$props || this, options);
      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);
      var openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this2._openTimer = null;
          _this2.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;
      this._opening = true;
      var dom = this.$el;
      var modal = props.modal;
      var zIndex = props.zIndex;
      if (zIndex) {
        _popupManager2["default"].zIndex = zIndex;
      }
      if (modal) {
        if (this._closing) {
          _popupManager2["default"].closeModal(this._popupId);
          this._closing = false;
        }
        _popupManager2["default"].openModal(this._popupId, _popupManager2["default"].nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
        if (props.lockScroll) {
          this.withoutHiddenClass = !(0, _dom.hasClass)(document.body, 'el-popup-parent--hidden');
          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt((0, _dom.getStyle)(document.body, 'paddingRight'), 10);
          }
          scrollBarWidth = (0, _scrollbarWidth2["default"])();
          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          var bodyOverflowY = (0, _dom.getStyle)(document.body, 'overflowY');
          if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
          }
          (0, _dom.addClass)(document.body, 'el-popup-parent--hidden');
        }
      }
      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute';
      }
      dom.style.zIndex = _popupManager2["default"].nextZIndex();
      this.opened = true;
      this.onOpen && this.onOpen();
      this.doAfterOpen();
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this3 = this;
      if (this.willClose && !this.willClose()) return;
      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);
      var closeDelay = Number(this.closeDelay);
      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this3._closeTimer = null;
          _this3.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      this._closing = true;
      this.onClose && this.onClose();
      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }
      this.opened = false;
      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      _popupManager2["default"].closeModal(this._popupId);
      this._closing = false;
    },
    restoreBodyStyle: function restoreBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        (0, _dom.removeClass)(document.body, 'el-popup-parent--hidden');
      }
      this.withoutHiddenClass = true;
    }
  }
};
exports.PopupManager = _popupManager2["default"];

/***/ }),

/***/ 9671:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 352 512\"><path d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path></svg>"

/***/ }),

/***/ 9686:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function () {
  if (_vue2["default"].prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
var _vue = __webpack_require__(4478);
var _vue2 = _interopRequireDefault(_vue);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var scrollBarWidth = void 0;
;

/***/ }),

/***/ 9737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5346);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9067);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.twikoo {\n  position: relative;\n}\n.twikoo svg {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n}\n\n/* 全局 CSS */\n.tk-expand {\n  width: 100%;\n  cursor: pointer;\n  padding: 0.75em;\n  text-align: center;\n  transition: all 0.5s;\n}\n.tk-expand:hover {\n  background-color: rgba(0,0,0,0.13);\n}\n.tk-expand:active {\n  background-color: rgba(0,0,0,0.19);\n}\n.tk-content img {\n  max-width: 300px;\n  max-height: 300px;\n  vertical-align: middle;\n}\n.tk-owo-emotion,\n.twikoo .OwO-item img {\n  width: 3em;\n  height: auto;\n}\n\n/* element-ui overwrite */\n.twikoo .el-input__inner,\n.twikoo .el-textarea__inner {\n  color: currentColor;\n  background-color: transparent;\n  border-color: rgba(144,147,153,0.31);\n}\n.twikoo .el-input__inner:hover,\n.twikoo .el-textarea__inner:hover {\n  border-color: rgba(144,147,153,0.50);\n}\n.twikoo .el-input__inner:focus,\n.twikoo .el-textarea__inner:focus {\n  border-color: #409eff;\n}\n.twikoo .el-input-group__append,\n.twikoo .el-input-group__prepend {\n  color: currentColor;\n  background-clip: padding-box;\n  background-color: rgba(144,147,153,0.13);\n  border-color: rgba(144,147,153,0.31);\n}\n.twikoo .el-button:not(.el-button--primary):not(.el-button--text) {\n  color: currentColor;\n  background-color: rgba(144,147,153,0.063);\n  border-color: rgba(144,147,153,0.31);\n}\n.twikoo .el-button:not(.el-button--primary):not(.el-button--text):active,\n.twikoo .el-button:not(.el-button--primary):not(.el-button--text):focus,\n.twikoo .el-button:not(.el-button--primary):not(.el-button--text):hover {\n  color: #409eff;\n  background-color: rgba(64,158,255,0.063);\n  border-color: rgba(64,158,255,0.50);\n}\n.twikoo .el-button--primary.is-disabled,\n.twikoo .el-button--primary.is-disabled:active,\n.twikoo .el-button--primary.is-disabled:focus,\n.twikoo .el-button--primary.is-disabled:hover {\n  color: rgba(255,255,255,0.63);\n  background-color: rgba(64,158,255,0.50);\n  border-color: transparent;\n}\n.twikoo .el-loading-mask {\n  background-color: transparent;\n  backdrop-filter: opacity(20%);\n}\n.twikoo .el-textarea .el-input__count {\n  color: currentColor;\n  background: transparent;\n}\n.tk-admin-warn {\n  padding: 1rem 1.5rem;\n  background-color: #fff7d0;\n  border-left: 0.5rem solid #e7c000;\n  color: #6b5900;\n  align-self: stretch;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9801:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z\"></path></svg>"

/***/ }),

/***/ 9865:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "B", ({
  value: true
}));
exports.A = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _utils = __webpack_require__(8129);
var _default = exports.A = {
  data: function data() {
    return {
      loading: false,
      source: '',
      logText: '',
      warnText: {
        valine: (0, _utils.t)('ADMIN_IMPORT_TIP_VALINE'),
        disqus: (0, _utils.t)('ADMIN_IMPORT_TIP_DISQUS'),
        artalk: (0, _utils.t)('ADMIN_IMPORT_TIP_ARTALK'),
        artalk2: '',
        twikoo: ''
      }
    };
  },
  methods: {
    t: _utils.t,
    uploadFile: function uploadFile() {
      var _this = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var filePath, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.source) {
                _context.next = 3;
                break;
              }
              _this.log((0, _utils.t)('ADMIN_IMPORT_SOURCE_REQUIRED'));
              return _context.abrupt("return");
            case 3:
              filePath = _this.$refs.inputFile.files[0];
              if (filePath) {
                _context.next = 7;
                break;
              }
              _this.log((0, _utils.t)('ADMIN_IMPORT_FILE_REQUIRED'));
              return _context.abrupt("return");
            case 7:
              _this.log((0, _utils.t)('ADMIN_IMPORT_START'));
              _this.loading = true;
              _context.prev = 9;
              if (!_this.$tcb) {
                _context.next = 19;
                break;
              }
              _context.next = 13;
              return _this.$tcb.app.uploadFile({
                cloudPath: "import/".concat(Date.now()),
                filePath: filePath,
                onUploadProgress: function onUploadProgress(progressEvent) {
                  var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                  _this.log("".concat((0, _utils.t)('ADMIN_IMPORT_UPLOADING')).concat(percentCompleted, "%"));
                }
              });
            case 13:
              result = _context.sent;
              _this.log("".concat((0, _utils.t)('ADMIN_IMPORT_UPLOADED')).concat(result.fileID));
              _context.next = 17;
              return _this.importFile(result.fileID);
            case 17:
              _context.next = 21;
              break;
            case 19:
              _context.next = 21;
              return _this.importFileToVercel(filePath);
            case 21:
              _context.next = 27;
              break;
            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](9);
              console.error(_context.t0);
              _this.log(_context.t0.message);
            case 27:
              _this.loading = false;
            case 28:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[9, 23]]);
      }))();
    },
    importFile: function importFile(fileID) {
      var _this2 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.log("".concat((0, _utils.t)('ADMIN_IMPORT_IMPORTING')).concat(_this2.source));
              _context2.next = 3;
              return (0, _utils.call)(_this2.$tcb, 'COMMENT_IMPORT_FOR_ADMIN', {
                fileId: fileID,
                source: _this2.source
              });
            case 3:
              result = _context2.sent;
              _this2.logText += result.result.log;
              _this2.log("".concat((0, _utils.t)('ADMIN_IMPORT_IMPORTED')).concat(_this2.source));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    importFileToVercel: function importFileToVercel(filePath) {
      var _this3 = this;
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.log("".concat((0, _utils.t)('ADMIN_IMPORT_IMPORTING')).concat(_this3.source));
              _context3.t0 = _utils.call;
              _context3.t1 = _this3.$tcb;
              _context3.next = 5;
              return (0, _utils.readAsText)(filePath);
            case 5:
              _context3.t2 = _context3.sent;
              _context3.t3 = _this3.source;
              _context3.t4 = {
                file: _context3.t2,
                source: _context3.t3
              };
              _context3.next = 10;
              return (0, _context3.t0)(_context3.t1, 'COMMENT_IMPORT_FOR_ADMIN', _context3.t4);
            case 10:
              result = _context3.sent;
              _this3.logText += result.result.log;
              _this3.log("".concat((0, _utils.t)('ADMIN_IMPORT_IMPORTED')).concat(_this3.source));
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    log: function log(message) {
      this.logText += "".concat(new Date().toLocaleString(), " ").concat(message, "\n");
      this.$nextTick(this.scrollLogToBottom);
    },
    scrollLogToBottom: function scrollLogToBottom() {
      if (this.$refs.logTextArea) {
        var textareaEl = this.$refs.logTextArea.$refs.textarea;
        textareaEl.scrollTop = textareaEl.scrollHeight;
      }
    }
  }
};

/***/ }),

/***/ 9966:
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z\"></path></svg>"

/***/ }),

/***/ 9976:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Yp = exports.XX = void 0;
var render = exports.XX = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tk-admin-export"
  }, [_c('div', {
    staticClass: "tk-admin-warn tk-admin-import-warn"
  }, [_c('p', [_vm._v(_vm._s(_vm.t('ADMIN_EXPORT_WARN')))])]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.loading
    },
    on: {
      "click": function click($event) {
        return _vm.doExport('comment');
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_EXPORT_COMMENT')))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.loading
    },
    on: {
      "click": function click($event) {
        return _vm.doExport('counter');
      }
    }
  }, [_vm._v(_vm._s(_vm.t('ADMIN_EXPORT_COUNTER')))])], 1);
};
var staticRenderFns = exports.Yp = [];

/***/ }),

/***/ 9985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __esModule: function() { return /* reexport */ TkAdminImportvue_type_script_lang_js/* __esModule */.B; },
  "default": function() { return /* binding */ TkAdminImport; }
});

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminImport.vue?vue&type=template&id=434a0218
var TkAdminImportvue_type_template_id_434a0218 = __webpack_require__(872);
;// ./src/client/view/components/TkAdminImport.vue?vue&type=template&id=434a0218

// EXTERNAL MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminImport.vue?vue&type=script&lang=js
var TkAdminImportvue_type_script_lang_js = __webpack_require__(9865);
;// ./src/client/view/components/TkAdminImport.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TkAdminImportvue_type_script_lang_js = (TkAdminImportvue_type_script_lang_js/* default */.A); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/client/view/components/TkAdminImport.vue?vue&type=style&index=0&id=434a0218&prod&lang=css
var TkAdminImportvue_type_style_index_0_id_434a0218_prod_lang_css = __webpack_require__(8087);
;// ./src/client/view/components/TkAdminImport.vue?vue&type=style&index=0&id=434a0218&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4486);
;// ./src/client/view/components/TkAdminImport.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_TkAdminImportvue_type_script_lang_js,
  TkAdminImportvue_type_template_id_434a0218/* render */.XX,
  TkAdminImportvue_type_template_id_434a0218/* staticRenderFns */.Yp,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TkAdminImport = (component.exports);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			590: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;


var _interopRequireDefault = __webpack_require__(477);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getCommentsCount = getCommentsCount;
exports.getRecentComments = getRecentComments;
exports.init = init;
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.version;
  }
}));
var _regenerator = _interopRequireDefault(__webpack_require__(479));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(4964));
var _version = __webpack_require__(2199);
var _tcb = __webpack_require__(824);
var _view = __webpack_require__(1085);
var _utils = __webpack_require__(8129);
function initTcb(_x) {
  return _initTcb.apply(this, arguments);
}
function _initTcb() {
  _initTcb = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof cloudbase === 'undefined')) {
            _context.next = 3;
            break;
          }
          _utils.logger.error('Please import cloudbase firstly:\n<script src="https://imgcache.qq.com/qcloud/cloudbase-js-sdk/1.3.3/cloudbase.full.js"></script>');
          return _context.abrupt("return", null);
        case 3:
          _context.next = 5;
          return (0, _tcb.install)(cloudbase, options);
        case 5:
          return _context.abrupt("return", _context.sent);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _initTcb.apply(this, arguments);
}
function init() {
  return _init.apply(this, arguments);
}
function _init() {
  _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var options,
      tcb,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
          if (!(0, _utils.isUrl)(options.envId)) {
            _context2.next = 5;
            break;
          }
          _context2.t0 = null;
          _context2.next = 8;
          break;
        case 5:
          _context2.next = 7;
          return initTcb(options);
        case 7:
          _context2.t0 = _context2.sent;
        case 8:
          tcb = _context2.t0;
          (0, _utils.setLanguage)(options);
          (0, _view.render)(tcb, options);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}
function getCommentsCount() {
  return _getCommentsCount.apply(this, arguments);
}
function _getCommentsCount() {
  _getCommentsCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var options,
      tcb,
      _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
          if (!(0, _utils.isUrl)(options.envId)) {
            _context3.next = 5;
            break;
          }
          _context3.t0 = null;
          _context3.next = 8;
          break;
        case 5:
          _context3.next = 7;
          return initTcb(options);
        case 7:
          _context3.t0 = _context3.sent;
        case 8:
          tcb = _context3.t0;
          _context3.next = 11;
          return (0, _utils.getCommentsCountApi)(tcb, options);
        case 11:
          return _context3.abrupt("return", _context3.sent);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getCommentsCount.apply(this, arguments);
}
function getRecentComments() {
  return _getRecentComments.apply(this, arguments);
}
function _getRecentComments() {
  _getRecentComments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var options,
      tcb,
      _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
          if (!(0, _utils.isUrl)(options.envId)) {
            _context4.next = 5;
            break;
          }
          _context4.t0 = null;
          _context4.next = 8;
          break;
        case 5:
          _context4.next = 7;
          return initTcb(options);
        case 7:
          _context4.t0 = _context4.sent;
        case 8:
          tcb = _context4.t0;
          _context4.next = 11;
          return (0, _utils.getRecentCommentsApi)(tcb, options);
        case 11:
          return _context4.abrupt("return", _context4.sent);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getRecentComments.apply(this, arguments);
}
var _default = exports["default"] = init;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});