(this["webpackJsonpbasic-framework"] = this["webpackJsonpbasic-framework"] || [])["push"]([[24, 10], {
  1003: function (dataAndEvents, abbrevs, require) {
    (function (WindowPrototype) {
      var object = require(31);
      var o = require(32);
      var html = require(1135);
      var isFunction = require["n"](html);
      var update = require(1146);
      var throttledUpdate = require["n"](update);
      var expect = require(8);
      var meta = require(968);
      var array = require(939);
      var modules = require(97);
      var Snapshot = function () {
        function getType() {
          Object(object["a"])(this, getType);
          this["_boundConfirmationPopupHandler"] = void 0;
          this["documentTitle"] = "";
          this["_confirmBrowserNavigation"] = throttledUpdate()(this["_confirmBrowserNavigation"], 1E3);
        }
        Object(o["a"])(getType, [{
          "key": "preventBrowserNavigation",
          "value": function () {
            var history = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : WindowPrototype["history"];
            history["pushState"](null, document["title"], Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
            this["_preventBackwardNavigation"] = this["_preventBackwardNavigation"]["bind"](this, history);
            WindowPrototype["addEventListener"]("popstate", this["_preventBackwardNavigation"], true);
          }
        }, {
          "key": "confirmBrowserNavigation",
          "value": function (newValue, thisValue, factor) {
            if (this["_boundConfirmationPopupHandler"]) {
              WindowPrototype["removeEventListener"]("beforeunload", this["_boundConfirmationPopupHandler"], true);
            }
            this["_boundConfirmationPopupHandler"] = isFunction()(this["_confirmBrowserNavigation"], newValue, thisValue, factor);
            WindowPrototype["addEventListener"]("beforeunload", this["_boundConfirmationPopupHandler"], true);
          }
        }, {
          "key": "confirmationPopupHandler",
          "get": function () {
            return this["_boundConfirmationPopupHandler"];
          },
          "set": function (mL) {
            this["_boundConfirmationPopupHandler"] = mL;
          }
        }, {
          "key": "restoreBrowserNavigation",
          "value": function () {
            WindowPrototype["removeEventListener"]("popstate", this["_preventBackwardNavigation"], true);
            this["removeNavigationConfirmation"]();
          }
        }, {
          "key": "removeNavigationConfirmation",
          "value": function () {
            WindowPrototype["removeEventListener"]("beforeunload", this["_boundConfirmationPopupHandler"], true);
          }
        }, {
          "key": "_confirmBrowserNavigation",
          "value": function (exports, func, fn, child) {
            var val = Object(expect["e"])("alerts: MSG_CONFIRM_LEAVE");
            func(child)["then"](function () {
              return fn(child);
            });
            exports["returnValue"] = val;
            return val;
          }
        }, {
          "key": "_preventBackwardNavigation",
          "value": function (thisValue) {
            thisValue["pushState"](null, document["title"], Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
          }
        }, {
          "key": "setDocumentTitle",
          "value": function (title) {
            if (this["documentTitle"] !== title) {
              document["title"] = this["documentTitle"] = title;
              this["preventBrowserNavigation"]();
            }
          }
        }, {
          "key": "createDocumentTitle",
          "value": function (options) {
            var hc = options["showSubjectPicker"];
            var type = options["selectedSubject"];
            var key = void 0 === type ? "" : type;
            var value = options["selectedFooterElement"];
            var val = void 0 === value ? "" : value;
            var classNames = options["selectedMyStuffElement"];
            var SubClass = Object(expect["e"])("dashboard:I_READY_TITLE");
            var args = "";
            if (hc) {
              args = Object(expect["e"])("dashboard:CHOOSE_SUBJECT");
            } else {
              if (key) {
                var r20 = Object(expect["e"])("dashboard:"["concat"](array["b"][key]["toUpperCase"](), "_SUBJECT_NAME"));
                var _args = Object(expect["e"])("dashboard.footer:"["concat"](val));
                if ([meta["a"]["TO_DO"]["name"], meta["a"]["MY_PROGRESS"]["name"]]["includes"](val)) {
                  args = ""["concat"](r20, " ")["concat"](_args);
                } else {
                  if (meta["a"]["MY_STUFF"]["name"] === val) {
                    var rest = Object(expect["e"])("myStuff:"["concat"](classNames || ""));
                    args = ""["concat"](_args, " ")["concat"](rest);
                  } else {
                    args = _args;
                  }
                }
              }
            }
            return args ? ""["concat"](args, ", ")["concat"](SubClass) : SubClass;
          }
        }]);
        return getType;
      }();
      var current = new Snapshot();
      abbrevs["a"] = current;
    })["call"](this, require(90));
  },
  1011: function (dataAndEvents, cache, require) {
    function getName(opt_attributes) {
      var value = opt_attributes["buddy"]["name"];
      var computed = void 0 === value ? "" : value;
      var charset = opt_attributes["isSad"];
      return computed && meta["a"]["Buddy"["concat"](computed)["concat"](charset ? "Sad" : "")];
    }
    function setup(data) {
      var row = data["buddy"];
      var mapHeight = data["height"];
      var opcode = data["isSad"];
      var w = data["width"];
      var options = Object(modules["a"])(data, props);
      var name = getName({
        "buddy": row,
        "isSad": opcode
      });
      if (!name) {
        name = getName({
          "buddy": g["a"]["DEFAULT_BUDDY"],
          "isSad": opcode
        });
      }
      return name ? elements["a"]["createElement"]("div", Object["assign"]({
        "alt-text": row["name"],
        "title": row["name"] || "",
        "id": "current-buddy",
        "style": {
          "height": mapHeight,
          "width": w
        }
      }, options), elements["a"]["createElement"](name, {
        "style": {
          "display": "block",
          "height": "100%",
          "width": "100%"
        }
      })) : null;
    }
    function indexOf(isSorted) {
      return {
        "buddy": Object(nodes["p"])(isSorted)
      };
    }
    var modules = require(916);
    var helper = require(0);
    var elements = require["n"](helper);
    var args = require(89);
    var g = require(69);
    var nodes = require(911);
    var meta = require(300);
    var props = ["buddy", "height", "isSad", "width"];
    var v = Object(args["connect"])(indexOf, {})(setup);
    __TEST__;
    cache["a"] = v;
  },
  1012: function (dataAndEvents, _meta, self) {
    function init(options) {
      var value = options["color"];
      var computed = void 0 === value ? "#056" : value;
      var style = options["style"];
      return keys["a"]["createElement"]("svg", {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "130",
        "height": "130",
        "aria-hidden": "true",
        "viewBox": "0 0 130 130",
        "style": style
      }, keys["a"]["createElement"]("g", {
        "data-name": "Layer 3",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, keys["a"]["createElement"]("path", {
        "d": "M67.83 65.49V27.1a60.39 60.39 0 0 0-49.69 0v40.16",
        "stroke-width": "5.14"
      }), keys["a"]["createElement"]("path", {
        "stroke-width": "2.57",
        "d": "M24.39 83.19h38.16M24.39 72.78h38.16M30.46 62.38h26.02M22.15 97a71.53 71.53 0 0 1 43.23-.85"
      }), keys["a"]["createElement"]("circle", {
        "cx": "43.47",
        "cy": "78.98",
        "r": "27.88",
        "stroke-width": "5.14"
      }), keys["a"]["createElement"]("path", {
        "stroke-width": "5.14",
        "d": "M22.53 99.92L4.52 117.94M67.83 27.1a60.39 60.39 0 0 1 49.69 0v63.22a60.35 60.35 0 0 0-48.32-.6"
      })));
    }
    function link(options) {
      var value = options["color"];
      var computed = void 0 === value ? "#056" : value;
      var types = options["style"];
      var data = void 0 === types ? {
        "width": 130,
        "height": 130
      } : types;
      return keys["a"]["createElement"]("svg", {
        "aria-hidden": "true",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": data["width"],
        "height": data["height"],
        "viewBox": "0 0 130 130",
        "style": data
      }, keys["a"]["createElement"]("path", {
        "d": "M80.94 108.41s-7.83-7.27-7.79-12.35a10.64 10.64 0 0 1-3.54.48A6.33 6.33 0 0 1 64 92.11a32.15 32.15 0 0 1-11.82 2.61c-4 0-7-1.15-8.85-3.42-1.72-2.08-3.12-6.59-2.79-10.89a14.81 14.81 0 0 1-5.17 1 9.48 9.48 0 0 1-2.19-.24c-5.2-1.26-7.12-5.85-6.81-10-5.51-.79-8.65-5.61-9.45-8.89a28.52 28.52 0 0 1 6.94-25.27c3.51-3.94 9.21-8.63 16.45-8.63h.59c1.63-4.12 6-6.83 11.22-6.83a12.52 12.52 0 0 1 9.18 3.72 12.15 12.15 0 0 1 9-3.77 11.54 11.54 0 0 1 10 5.34 18 18 0 0 1 6.4-1.19 14.94 14.94 0 0 1 11.47 5.07c3.85 4.53 3.8 7.48 3.76 10.33v.1c6.72 2.16 11.71 10.13 11.71 19 0 10.71-4.64 15.35-9 17.33 3.73 5.32.75 9.33-.32 10.48a7.62 7.62 0 0 1-5 2.51A9.35 9.35 0 0 1 97 96.91c-1.74 1.77-4.32 2.67-7.66 2.67a22.1 22.1 0 0 1-4.34-.45 26.11 26.11 0 0 0 4.3 7.62s.55 1.66-.76 1.66z",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3"
      }), keys["a"]["createElement"]("path", {
        "d": "M54.06 54.72c-2.3 3.43-12 10.28-20.34 0M40.19 59.57s-1.87 9.93-11 10.74c-6.78.7-10.41-4.81-11.23-8.19a27.64 27.64 0 0 1 6.72-24.37c4.49-5 10.44-8.79 17-8.23C44 21.71 56.23 20.11 61.38 27c3.51-5.56 14.58-6.5 18.56 1.23 6.55-2.81 13.57-1.41 17.55 3.27S101 39 101 42c6.55 1.64 11.72 9.4 11.72 18.21 0 4.92-1 13.85-9.61 16.9 4 4.68 2.29 8.35.55 10.23s-4.53 3.34-9.91 1.23c-3 2.81-10.77 2.53-15 .8s-10.56-.57-14.06 1.31-15.78 5.81-20.58 0c-1.87-2.27-3.2-7.54-2.34-11.85",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2"
      }), keys["a"]["createElement"]("path", {
        "d": "M27.51 70.39c-.7 4.13 1.13 8.67 5.93 9.84 3.94 1 10.5-1.13 14.46-6.58 7.74 6.8 24.45 4.53 27.26-5.12M79.94 28.19C75.16 39.27 61 32.3 54.06 40.38M67 35.51s6.57 7.34 0 14.67M101 42c-1.4 3-5.08 4.54-10.16 4M100.2 54.72c.56 2.68 2 7.17-2 11.84s-9.76 5.63-11.81 10.12M92 71.42s3.85 5.08 1.17 9.6M64.71 90.67a5.4 5.4 0 0 0 5 4.88A5.63 5.63 0 0 0 74 94.37s-.37 5.67 7.35 13h7.23a26.44 26.44 0 0 1-5-9.67c1.12.36 15.05 4.17 14.84-8.15",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2"
      }));
    }
    function setFillAndStroke(o) {
      var v = o["color"];
      var stroke = void 0 === v ? "#056" : v;
      var value = o["style"];
      var data = void 0 === value ? {
        "width": 130,
        "height": 130
      } : value;
      return keys["a"]["createElement"]("svg", {
        "aria-hidden": "true",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": data["width"],
        "height": data["height"],
        "viewBox": "0 0 130 130",
        "style": data
      }, keys["a"]["createElement"]("path", {
        "fill": "none",
        "stroke": stroke,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "8",
        "d": "M94.25 45.5l-39 39L35.75 65"
      }), keys["a"]["createElement"]("circle", {
        "cx": "65",
        "cy": "65",
        "r": "52",
        "fill": "none",
        "stroke": stroke,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "4"
      }));
    }
    function style(styles) {
      var value = styles["color"];
      var computed = void 0 === value ? "#056" : value;
      var s = styles["style"];
      var data = void 0 === s ? {
        "width": 130,
        "height": 130
      } : s;
      return keys["a"]["createElement"]("svg", {
        "aria-hidden": "true",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": data["width"],
        "height": data["height"],
        "viewBox": "0 0 130 130",
        "style": data
      }, keys["a"]["createElement"]("path", {
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "4",
        "d": "M6.5 114.6h117M41 114.6V97.8a3.81 3.81 0 0 0-3.59-4h-6.82a3.81 3.81 0 0 0-3.59 4v16.8M72 114.6v-48a3.81 3.81 0 0 0-3.59-4h-6.82a3.81 3.81 0 0 0-3.59 4v48M103.14 114.6V34.48l7.86 7.84a4 4 0 0 0 5.66 0l1.41-1.41a4 4 0 0 0 0-5.66l-18.4-18.38a5 5 0 0 0-7.07 0L74.22 35.25a4 4 0 0 0 0 5.66l1.41 1.41a4 4 0 0 0 5.66 0l7.85-7.84v80.12"
      }));
    }
    function render(options) {
      var value = options["color"];
      var computed = void 0 === value ? "#056" : value;
      var types = options["style"];
      var data = void 0 === types ? {
        "width": 130,
        "height": 130
      } : types;
      return keys["a"]["createElement"]("svg", {
        "aria-hidden": "true",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": data["width"],
        "height": data["height"],
        "viewBox": "0 0 130 130",
        "style": data
      }, keys["a"]["createElement"]("g", {
        "data-name": "Layer 3",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, keys["a"]["createElement"]("path", {
        "d": "M65.45 22.54l5.33 10.8 11.91 1.73a.5.5 0 0 1 .28.86l-8.62 8.4 2 11.87a.51.51 0 0 1-.74.53L65 51.13l-10.65 5.6a.51.51 0 0 1-.74-.53l2-11.87-8.61-8.4a.5.5 0 0 1 .28-.86l11.91-1.73 5.33-10.8a.5.5 0 0 1 .93 0z",
        "stroke-width": "3"
      }), keys["a"]["createElement"]("rect", {
        "x": "20",
        "y": "7",
        "width": "90",
        "height": "116",
        "rx": "16",
        "stroke-width": "4.5"
      }), keys["a"]["createElement"]("path", {
        "stroke-width": "2.5",
        "d": "M34.47 100.26h61.06M34.47 87.21h61.06M34.47 74.16h61.06"
      })));
    }
    var event;
    var r20;
    var restoreScript;
    var attributes = self(22);
    var update = self(20);
    var throttledUpdate = self["n"](update);
    var obj = self(0);
    var keys = self["n"](obj);
    var abbrevs = self(69);
    var s = self["p"] + "static/media/ela_lesson_default_3_small.e4add9c2.jpg";
    var large = self["p"] + "static/media/ela_lesson_default_3_large.e466bb50.jpg";
    var _0x14f246 = self["p"] + "static/media/asr_3_large.3ac1e5ff.jpg";
    var L = self["p"] + "static/media/asr_3_small.b55c1cf5.jpg";
    var small_data = self["p"] + "static/media/math_lesson_default_3_small.262c4b58.jpg";
    var _0x2a4af1 = self["p"] + "static/media/math_lesson_default_3_large.c0af90fb.jpg";
    var _0x14c3ce = self["p"] + "static/media/diagnostic_3_large.ff04c468.jpg";
    var small = self["p"] + "static/media/diagnostic_3_small.406c03eb.jpg";
    var _0x12dbc2 = self["p"] + "static/media/growth_monitoring_3_large.8e35fbc2.jpg";
    var _0x45f521 = self["p"] + "static/media/growth_monitoring_3_small.f3b77a3c.jpg";
    var _0x3a1849 = self["p"] + "static/media/ism_3_large.0a47a647.jpg";
    var _0x17a92c = self["p"] + "static/media/ism_3_small.a3a3d017.jpg";
    var _0x27b7bd = self["p"] + "static/media/comp_check_3_large.fa4754bb.jpg";
    var visited = self(1063);
    var meta = self(1064);
    var maskCaretMapCopy = abbrevs["a"]["ACTIVITY_TYPE"];
    var LESSON_CHANNEL = abbrevs["a"]["LESSON_CHANNEL"];
    var ASSESSMENT_TYPE = abbrevs["a"]["ASSESSMENT_TYPE"];
    event = {};
    Object(attributes["a"])(event, LESSON_CHANNEL["MAIN"], {
      "math": {
        "small": small_data,
        "large": _0x2a4af1
      },
      "ela": {
        "small": s,
        "large": large
      }
    });
    Object(attributes["a"])(event, LESSON_CHANNEL["EXTRA_LESSON"], {
      "math": {
        "small": small_data,
        "large": _0x2a4af1
      },
      "ela": {
        "small": s,
        "large": large
      }
    });
    Object(attributes["a"])(event, LESSON_CHANNEL["BASAL_PRACTICE"], {
      "math": {
        "small": small_data,
        "large": _0x2a4af1
      }
    });
    Object(attributes["a"])(event, LESSON_CHANNEL["CLOSE_READING"], {
      "ela": {
        "small": s,
        "large": large
      }
    });
    var originalEvent = event;
    var remainder = {
      "gk2": (r20 = {}, Object(attributes["a"])(r20, ASSESSMENT_TYPE["DIAGNOSTIC"], {
        "small": link
      }), Object(attributes["a"])(r20, ASSESSMENT_TYPE["GROWTH_MONITORING"], {
        "small": style
      }), Object(attributes["a"])(r20, ASSESSMENT_TYPE["ISM"], {
        "small": render
      }), Object(attributes["a"])(r20, ASSESSMENT_TYPE["BASAL_CHECK"], {
        "small": setFillAndStroke
      }), Object(attributes["a"])(r20, maskCaretMapCopy["ASR"], {
        "small": link
      }), r20),
      "g38": (restoreScript = {}, Object(attributes["a"])(restoreScript, ASSESSMENT_TYPE["DIAGNOSTIC"], {
        "small": small,
        "large": _0x14c3ce
      }), Object(attributes["a"])(restoreScript, ASSESSMENT_TYPE["GROWTH_MONITORING"], {
        "small": _0x45f521,
        "large": _0x12dbc2
      }), Object(attributes["a"])(restoreScript, ASSESSMENT_TYPE["ISM"], {
        "small": _0x17a92c,
        "large": _0x3a1849
      }), Object(attributes["a"])(restoreScript, ASSESSMENT_TYPE["BASAL_CHECK"], {
        "small": "data:image/jpeg;base64,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",
        "large": _0x27b7bd
      }), Object(attributes["a"])(restoreScript, maskCaretMapCopy["ASR"], {
        "small": L,
        "large": _0x14f246
      }), restoreScript)
    };
    _meta["a"] = function (styles) {
      var activity = styles["activity"];
      var c = styles["cdnPath"];
      var inlineSheet = styles["isk2"];
      var option = styles["isCompletedWork"];
      var options = void 0 !== option && option;
      var code = styles["selectedSubject"];
      var s = styles["style"];
      var a = styles["imageSize"];
      var adown = void 0 === a ? "small" : a;
      var style = styles["ariaHidden"];
      var caseSensitive = void 0 !== style && style;
      var color = styles["color"];
      var pos = ""["concat"](c, "/instruction/content/dashboard/images/lessonthumbnails");
      var gstyle = s;
      if (activity) {
        var i = activity["entityType"];
        var data = "";
        var value = "";
        if (i === maskCaretMapCopy["LESSON"]) {
          var parts = function (params) {
            var primaryImageOrSrc;
            var param = params["activity"];
            var value = params["isk2"];
            var fn = params["isCompletedWork"];
            var emptyArray = void 0 !== fn && fn;
            var extensionName = params["selectedSubject"];
            var lastParam = params["imageSize"];
            var lh = params["thumbnailLocation"];
            var color = params["color"];
            var data = throttledUpdate()(param, "lesson.id")["toLowerCase"]();
            var SubClass = throttledUpdate()(param, "lesson.channel");
            var attrNames = value && !emptyArray;
            var secondarySrc = !value && throttledUpdate()(originalEvent, ""["concat"](SubClass, ".")["concat"](extensionName, ".")["concat"](lastParam));
            var res = data["replace"](/\.v[0-9]+$/gi, "");
            switch (SubClass) {
              case LESSON_CHANNEL["BASAL_PRACTICE"]:
                primaryImageOrSrc = attrNames ? keys["a"]["createElement"](meta["a"], {
                  "color": color
                }) : ""["concat"](lh, "/")["concat"](res, "_")["concat"](lastParam, ".jpg");
                break;
              case LESSON_CHANNEL["CLOSE_READING"]:
                primaryImageOrSrc = attrNames ? keys["a"]["createElement"](init, {
                  "color": color
                }) : ""["concat"](lh, "/")["concat"](res, "_")["concat"](lastParam, ".jpg");
                break;
              case LESSON_CHANNEL["EXTRA_LESSON"]:
                ;
              default:
                primaryImageOrSrc = attrNames ? keys["a"]["createElement"](visited["a"], {
                  "color": color
                }) : ""["concat"](lh, "/")["concat"](res, "_")["concat"](lastParam, ".jpg");
            }
            return {
              "primaryImageOrSrc": primaryImageOrSrc,
              "secondarySrc": secondarySrc
            };
          }({
            "activity": activity,
            "isk2": inlineSheet,
            "isCompletedWork": options,
            "selectedSubject": code,
            "imageSize": adown,
            "thumbnailLocation": pos,
            "color": color
          });
          var last = parts["primaryImageOrSrc"];
          var tmp = parts["secondarySrc"];
          value = last;
          data = tmp;
        } else {
          if ([maskCaretMapCopy["ISM"], maskCaretMapCopy["ASSESSMENT"], maskCaretMapCopy["BASAL_CHECK"], maskCaretMapCopy["ASR"]]["includes"](i)) {
            value = function (styles) {
              var array;
              var r20 = styles["activity"];
              var iterator = styles["isk2"];
              var c = styles["imageSize"];
              var value = styles["style"];
              var diff = void 0 === value ? {
                "width": 130,
                "height": 130
              } : value;
              var color = styles["color"];
              var hooks = throttledUpdate()(r20, "type", throttledUpdate()(r20, "entityType"));
              switch (hooks) {
                case maskCaretMapCopy["BASAL_CHECK"]:
                  array = throttledUpdate()(remainder, ""["concat"](iterator ? "gk2" : "g38", ".")["concat"](ASSESSMENT_TYPE["BASAL_CHECK"], ".")["concat"](c));
                  break;
                case maskCaretMapCopy["ISM"]:
                  array = throttledUpdate()(remainder, ""["concat"](iterator ? "gk2" : "g38", ".")["concat"](ASSESSMENT_TYPE["ISM"], ".")["concat"](c));
                  break;
                default:
                  array = throttledUpdate()(remainder, ""["concat"](iterator ? "gk2" : "g38", ".")["concat"](hooks, ".")["concat"](c));
              }
              return iterator ? keys["a"]["createElement"](array, {
                "color": color,
                "style": diff
              }) : array;
            }({
              "activity": activity,
              "isk2": inlineSheet,
              "imageSize": adown,
              "style": s,
              "color": color
            });
          }
        }
        var text = caseSensitive ? "" : i;
        return "string" === typeof value ? keys["a"]["createElement"]("img", {
          "alt": text,
          "aria-hidden": caseSensitive,
          "src": value,
          "onError": function (error) {
            error["target"]["src"] = data;
            error["target"]["onerror"] = null;
          },
          "style": gstyle
        }) : value;
      }
      return null;
    };
  },
  1047: function (dataAndEvents, b, c) {
    c["d"](b, "a", function () {
      return _0x545d81;
    });
    var _0x545d81 = [{
      "id": "AL",
      "displayName": "Alabama"
    }, {
      "id": "AK",
      "displayName": "Alaska"
    }, {
      "id": "AS",
      "displayName": "American Samoa"
    }, {
      "id": "AZ",
      "displayName": "Arizona"
    }, {
      "id": "AR",
      "displayName": "Arkansas"
    }, {
      "id": "CA",
      "displayName": "California"
    }, {
      "id": "CO",
      "displayName": "Colorado"
    }, {
      "id": "CT",
      "displayName": "Connecticut"
    }, {
      "id": "DE",
      "displayName": "Delaware"
    }, {
      "id": "DC",
      "displayName": "District of Columbia"
    }, {
      "id": "FL",
      "displayName": "Florida"
    }, {
      "id": "GA",
      "displayName": "Georgia"
    }, {
      "id": "GU",
      "displayName": "Guam"
    }, {
      "id": "HI",
      "displayName": "Hawai'i"
    }, {
      "id": "ID",
      "displayName": "Idaho"
    }, {
      "id": "IL",
      "displayName": "Illinois"
    }, {
      "id": "IN",
      "displayName": "Indiana"
    }, {
      "id": "IA",
      "displayName": "Iowa"
    }, {
      "id": "KS",
      "displayName": "Kansas"
    }, {
      "id": "KY",
      "displayName": "Kentucky"
    }, {
      "id": "LA",
      "displayName": "Louisiana"
    }, {
      "id": "ME",
      "displayName": "Maine"
    }, {
      "id": "MD",
      "displayName": "Maryland"
    }, {
      "id": "MA",
      "displayName": "Massachusetts"
    }, {
      "id": "MI",
      "displayName": "Michigan"
    }, {
      "id": "MN",
      "displayName": "Minnesota"
    }, {
      "id": "MS",
      "displayName": "Mississippi"
    }, {
      "id": "MO",
      "displayName": "Missouri"
    }, {
      "id": "MT",
      "displayName": "Montana"
    }, {
      "id": "NE",
      "displayName": "Nebraska"
    }, {
      "id": "NV",
      "displayName": "Nevada"
    }, {
      "id": "NH",
      "displayName": "New Hampshire"
    }, {
      "id": "NJ",
      "displayName": "New Jersey"
    }, {
      "id": "NM",
      "displayName": "New Mexico"
    }, {
      "id": "NY",
      "displayName": "New York"
    }, {
      "id": "NC",
      "displayName": "North Carolina"
    }, {
      "id": "ND",
      "displayName": "North Dakota"
    }, {
      "id": "MP",
      "displayName": "Northern Mariana Islands"
    }, {
      "id": "OH",
      "displayName": "Ohio"
    }, {
      "id": "OK",
      "displayName": "Oklahoma"
    }, {
      "id": "OR",
      "displayName": "Oregon"
    }, {
      "id": "PA",
      "displayName": "Pennsylvania"
    }, {
      "id": "PR",
      "displayName": "Puerto Rico"
    }, {
      "id": "RI",
      "displayName": "Rhode Island"
    }, {
      "id": "SC",
      "displayName": "South Carolina"
    }, {
      "id": "SD",
      "displayName": "South Dakota"
    }, {
      "id": "TN",
      "displayName": "Tennessee"
    }, {
      "id": "TX",
      "displayName": "Texas"
    }, {
      "id": "VI",
      "displayName": "US Virgin Islands"
    }, {
      "id": "UT",
      "displayName": "Utah"
    }, {
      "id": "VT",
      "displayName": "Vermont"
    }, {
      "id": "VA",
      "displayName": "Virginia"
    }, {
      "id": "WA",
      "displayName": "Washington"
    }, {
      "id": "WV",
      "displayName": "West Virginia"
    }, {
      "id": "WI",
      "displayName": "Wisconsin"
    }, {
      "id": "WY",
      "displayName": "Wyoming"
    }, {
      "id": "INTL",
      "displayName": "International"
    }, {
      "id": "OTHER",
      "displayName": "Other"
    }];
  },
  1063: function (dataAndEvents, _meta, p) {
    var m = p(0);
    var g = p["n"](m);
    _meta["a"] = function (styles) {
      var value = styles["color"];
      var computed = void 0 === value ? "#056" : value;
      var s = styles["style"];
      return g["a"]["createElement"]("svg", {
        "aria-hidden": "true",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "130",
        "height": "130",
        "viewBox": "0 0 130 130",
        "style": s
      }, g["a"]["createElement"]("path", {
        "d": "M111.26 100.53a467.38 467.38 0 0 1-92.52 0A11 11 0 0 1 9.67 92a217.25 217.25 0 0 1 0-68.1 11 11 0 0 1 9.07-8.54 465.86 465.86 0 0 1 92.52 0 11 11 0 0 1 9.07 8.54 217.25 217.25 0 0 1 0 68.1 11 11 0 0 1-9.07 8.53z",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "5"
      }), g["a"]["createElement"]("path", {
        "d": "M11 83a574.09 574.09 0 0 0 108 0",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3.5"
      }), g["a"]["createElement"]("path", {
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "5",
        "d": "M29.2 113.83h71.96"
      }), g["a"]["createElement"]("path", {
        "d": "M53 37.36a9.74 9.74 0 0 0-18 0M95 37.36a9.74 9.74 0 0 0-18 0M41 55.91c2.21 8.93 12.13 16.65 24 16.79 11.86-.14 21.78-7.86 24-16.79a153.2 153.2 0 0 0-48 0z",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3.5"
      }), g["a"]["createElement"]("path", {
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "5",
        "d": "M56.13 113.83v-10.06M74.12 103.77v10.06"
      }));
    };
  },
  1064: function (dataAndEvents, _meta, p) {
    var m = p(0);
    var g = p["n"](m);
    _meta["a"] = function (styles) {
      var value = styles["color"];
      var computed = void 0 === value ? "#056" : value;
      var s = styles["style"];
      var data = void 0 === s ? {
        "width": 130,
        "height": 130
      } : s;
      return g["a"]["createElement"]("svg", {
        "aria-hidden": "true",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": data["width"],
        "height": data["height"],
        "viewBox": "0 0 130 130",
        "style": data
      }, g["a"]["createElement"]("path", {
        "d": "M111.8 100.94a472.18 472.18 0 0 1-93.6 0A11.05 11.05 0 0 1 9 92.3a219.32 219.32 0 0 1 0-68.9 11.05 11.05 0 0 1 9.17-8.64 472.18 472.18 0 0 1 93.6 0A11.05 11.05 0 0 1 121 23.4a219.32 219.32 0 0 1 0 68.9 11.05 11.05 0 0 1-9.2 8.64zM28.79 114.4h72.8M56.03 114.4v-10.17M74.23 104.23v10.17",
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "5"
      }), g["a"]["createElement"]("path", {
        "fill": "none",
        "stroke": computed,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "9",
        "d": "M52 32.8v52M52 62.52h16.34A14.86 14.86 0 0 0 83.2 47.66 14.86 14.86 0 0 0 68.34 32.8H52"
      }));
    };
  },
  1151: function (dataAndEvents, b, require) {
    function create(options) {
      var hc = options["color"];
      return Object(object["c"])(memory, null, Object(object["c"])(progressContexts, {
        "role": "contentinfo",
        "color": hc
      }, Object(m["e"])("copyright:COPYRIGHT", {
        "year": "2023"
      })));
    }
    function parse(options) {
      var insertBefore = options["disabled"];
      var hc = options["onClick"];
      var keys = Object(object["c"])(ArrayProto, {
        "disabled": insertBefore
      });
      return Object(object["c"])(events["a"], {
        "type": "grid",
        "gridGap": "15px",
        "gridTemplateRows": "120px 1fr"
      }, Object(object["c"])(elements["a"], {
        "height": "120px",
        "width": "120px"
      }, Object(object["c"])(Block["a"], {
        "role": "button",
        "id": "diagnostic-survey-continue",
        "aria-label": Object(m["e"])("BTN_CONTINUE"),
        "name": Object(m["e"])("BTN_CONTINUE"),
        "variant": "transparent",
        "iconOnly": true,
        "components": {
          "Icon": keys
        },
        "disabled": insertBefore,
        "onClick": hc,
        "tabIndex": 0,
        "css": Object(object["b"])("background-color:", insertBefore ? map["z"] : map["L"], ";border-radius:60px;height:120px;transition:0.175s ease-out transform;width:120px;&:hover{transform:scale(1.04);}&:focus{transform:scale(1.04);}", funcs["f"], ";;label:ContinueButton;")
      })), Object(object["c"])(elements["a"], {
        "style": {
          "color": insertBefore ? map["m"] : map["p"]
        }
      }, Object(object["c"])(tests["a"], {
        "fontSize": "25px",
        "lineHeight": "29px",
        "nowrap": true,
        "textAlign": "center"
      }, Object(m["e"])("BTN_CONTINUE"))));
    }
    function getType(language) {
      return {
        "language": Object(files["i"])(language),
        "subject": Object(args["b"])(language)
      };
    }
    function indexOf(isSorted) {
      return {
        "settings": Object(files["e"])(isSorted)
      };
    }
    function normal(source) {
      return {
        "games": Object(constants["b"])(source),
        "settings": Object(files["e"])(source)
      };
    }
    function openCursorAndCheck(db) {
      return Object(object["c"])(originalEvent, {
        "ignorePriorErrors": true,
        "onMount": g["b"]
      }, function (args) {
        var pageX = args["loading"];
        var callback = args["error"];
        var pageY = args["dismiss"];
        return Object(object["c"])(cached, Object["assign"]({
          "error": callback
        }, db, {
          "dismissError": pageY,
          "loading": pageX
        }));
      });
    }
    function decode(secure) {
      return {
        "settings": Object(files["e"])(secure)
      };
    }
    function formatDate(language) {
      return {
        "assessment": Object(data["d"])(language),
        "selectedSubject": Object(args["b"])(language),
        "assessmentActivityId": Object(views["b"])(language),
        "selectedActivity": Object(views["a"])(language),
        "privileges": Object(files["j"])(language),
        "gradeBand": Object(files["f"])(language),
        "isUsingLockDown": Object(attributes["a"])(language),
        "showSurvey": Object(data["c"])(language),
        "language": Object(files["i"])(language),
        "isOnIpadAssessmentMode": Object(base64["c"])(language),
        "assessmentCompleted": Object(data["b"])(language)
      };
    }
    require["d"](b, "a", function () {
      return oldconfig;
    });
    require["d"](b, "b", function () {
      return otherElement;
    });
    var nodes = require(31);
    var helper = require(32);
    var inspect = require(80);
    var _ = require(68);
    var selfClosing = require(60);
    var getActual = require(38);
    var filter = require(20);
    var isArray = require["n"](filter);
    var info = require(1134);
    var match = require["n"](info);
    var html = require(1061);
    var isFunction = require["n"](html);
    var which = require(0);
    var keys = require["n"](which);
    var assert = require(24);
    var buffers = require(63);
    var localStorage = require(301);
    var self = require(89);
    var meta = require(1003);
    var expect = require(178);
    var storage = require(934);
    var attr = require(61);
    var attributes = require(1207);
    var base64 = require(1018);
    var a1 = require(69);
    var modules = require(97);
    var getName = require(913);
    var o = require(134);
    var object = require(3);
    var m = require(8);
    var rreturn = Object(getActual["a"])("div", {
      "target": "e178yyzm5",
      "label": "PBDisplay"
    })("display:inline-block;overflow:hidden;background-color:", function (series) {
      return series["barStyles"]["colors"]["color6"];
    }, ";border-left-style:none;height:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["barHeight"];
    }, "px;width:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["rootWidth"];
    }, "px;transition:1s ease-in-out;border:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["border"];
    }, ";border-left:0;");
    var udataCur = Object(getActual["a"])("div", {
      "target": "e178yyzm4",
      "label": "LeftCircle"
    })("float:left;position:relative;top:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["topMargin"];
    }, "px;left:13px;width:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["circleXY"];
    }, "px;height:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["circleXY"];
    }, "px;z-index:2;background-color:", function (series) {
      return series["barStyles"]["colors"]["color7"];
    }, ";border-radius:50%;");
    var pdataCur = Object(getActual["a"])("div", {
      "target": "e178yyzm3",
      "label": "ProgressDisplay"
    })("height:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["fillHeight"];
    }, "px;float:left;width:", function (keyframes) {
      return keyframes["pct"];
    }, "%;position:absolute;background-color:", function (series) {
      return series["barStyles"]["colors"]["color2"];
    }, ";top:0;left:-6px;");
    var progressValues = Object(getActual["a"])("div", {
      "target": "e178yyzm2",
      "label": "PBLine"
    })("position:relative;height:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["fillHeight"];
    }, "px;background-color:", function (series) {
      return series["barStyles"]["colors"]["color1"];
    }, ";margin-left:30px;top:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["topBarMargin"];
    }, "px;z-index:1;");
    var pdataOld = Object(getActual["a"])("div", {
      "target": "e178yyzm1",
      "label": "RightCircle"
    })("float:left;width:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["circleXY"];
    }, "px;height:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["circleXY"];
    }, "px;position:relative;z-index:2;top:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["topMargin"];
    }, "px;left:-10px;padding:0;margin-left:-1px;background-color:", function (series) {
      return series["barStyles"]["colors"]["color5"];
    }, ";border-radius:50%;");
    var newMillis = Object(getActual["a"])("div", {
      "target": "e178yyzm0",
      "label": "PCTLabel"
    })("position:relative;float:left;width:", function (dataAndEvents) {
      return dataAndEvents["barStyles"]["pctLabelWidth"];
    }, "px;top:0;left:5px;font-size:14px;font-family:sans-serif;font-weight:bold;text-align:center;color:", function (series) {
      return series["barStyles"]["colors"]["color2"];
    }, ";");
    var prop = {
      "name": "1ume0ny-ProgressBarDisplay",
      "styles": "float:left;label:ProgressBarDisplay;"
    };
    var failuresLink = function (deepDataAndEvents) {
      function done() {
        var result;
        Object(nodes["a"])(this, done);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (result = radixToPower["call"]["apply"](radixToPower, [this]["concat"](rv)))["currentLanguage"] = Object(m["b"])() || "en";
        result["getStyleValues"] = function () {
          return {
            "circleXY": 18,
            "pctLabelWidth": 165,
            "colors": {
              "color1": "rgb(48, 54, 59)",
              "color2": "rgb(20, 183, 202)",
              "color5": "rgb(76, 107, 120)",
              "color6": "#1d1d1d",
              "color7": "rgb(255, 255, 255)"
            },
            "rootWidth": result["props"]["width"],
            "barWidth": result["props"]["width"] - 165,
            "topMargin": 4,
            "topBarMargin": 7,
            "contentHeight": 30,
            "barHeight": 28,
            "boxShadow": "0px 0px 3px 0px rgba(0, 0, 0, 0.4)",
            "border": "1px solid rgb(55, 54, 54)",
            "fillHeight": 12
          };
        };
        return result;
      }
      Object(inspect["a"])(done, deepDataAndEvents);
      var radixToPower = function (key) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x4da73) {
            return false;
          }
        }
        return function () {
          var parsed;
          var camelKey = Object(selfClosing["a"])(key);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](camelKey, arguments, scripts);
          } else {
            parsed = camelKey["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(done);
      Object(helper["a"])(done, [{
        "key": "UNSAFE_componentWillMount",
        "value": function () {
          var b = this["props"]["language"];
          var bup = b && b["toLocaleLowerCase"]();
          if (!("en" !== bup && "es" !== bup)) {
            Object(m["a"])(bup);
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          if (!("en" !== this["currentLanguage"] && "es" !== this["currentLanguage"])) {
            Object(m["a"])(this["currentLanguage"]);
          }
        }
      }, {
        "key": "render",
        "value": function () {
          var barStyles = this["getStyleValues"]();
          return Object(object["c"])(rreturn, {
            "id": "pb-display-root",
            "barStyles": barStyles
          }, Object(object["c"])("div", {
            "css": Object(object["b"])("overflow:hidden;width:", this["props"]["width"], "px;height:", barStyles["barHeight"], "px;;label:ProgressBarDisplay;")
          }, Object(object["c"])("div", {
            "css": prop
          }, Object(object["c"])(udataCur, {
            "barStyles": barStyles
          }), Object(object["c"])(progressValues, {
            "barStyles": barStyles
          }, Object(object["c"])("div", {
            "css": Object(object["b"])("overflow:auto;z-index:1;width:", barStyles["barWidth"], "px;;label:ProgressBarDisplay;")
          }, Object(object["c"])(pdataCur, {
            "barStyles": barStyles,
            "pct": this["props"]["pct"],
            "id": "pb-display-pct-bar"
          })))), Object(object["c"])(pdataOld, {
            "barStyles": barStyles
          }, Object(object["c"])(newMillis, {
            "barStyles": barStyles,
            "id": "pb-display-pct-label"
          }, this["props"]["pct"], Object(m["e"])("progressBar:MSG_PERCENTAGE_COMPLETE")))));
        }
      }]);
      return done;
    }(which["Component"]);
    var styles = Object(getActual["a"])("div", {
      "target": "eg34fsf3",
      "label": "PBarBase"
    })({
      "name": "1p8mfu5",
      "styles": "display:inline-block;font-family:sans-serif;font-size:14px;font-weight:700;background-color:#1d1d1d;color:#8a8a7b;text-align:center;border:1px solid #373636;cursor:pointer;height:100%;position:relative;padding:5px;&>div{position:absolute;}"
    });
    var typePattern = Object(getActual["a"])(styles, {
      "target": "eg34fsf2",
      "label": "PBarLeft"
    })({
      "name": "14vb02n",
      "styles": "border-top-left-radius:8px;border-bottom-left-radius:8px;width:100px"
    });
    var dontCloseTags = Object(getActual["a"])(styles, {
      "target": "eg34fsf1",
      "label": "PBarRight"
    })({
      "name": "qomaln",
      "styles": "border-top-right-radius:8px;border-bottom-right-radius:8px;border-left:0;width:25px"
    });
    var suiteView = Object(getActual["a"])("div", {
      "target": "eg34fsf0",
      "label": "PBar"
    })("position:relative;left:", function (results) {
      return results["left"] + 50;
    }, "px;width:", function (a) {
      return a["width"] + 15;
    }, "px;height:28px;white-space:nowrap;:focus{outline-style:solid;outline-color:#00ffff;outline-width:6px;position:relative;width:", function (a) {
      return a["width"] + 15 + 6;
    }, "px;:before{content:' ';top:-2px;left:-2px;right:-2px;bottom:-2px;outline-style:dotted!important;outline-color:#4e4e50!important;outline-width:2px!important;position:absolute!important;}}:active{:focus{outline:0;:before{outline:0!important;}}}:hover ", typePattern, ",:hover ", dontCloseTags, "{background-color:#2e2e2e;color:#ffffff;border:1px solid #a09f9f;}");
    var firstLength = function (deepDataAndEvents) {
      function clone() {
        var element;
        Object(nodes["a"])(this, clone);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (element = scope["call"]["apply"](scope, [this]["concat"](rv)))["state"] = {
          "isOpen": false,
          "currentWidth": 0
        };
        element["_handleCloseBarOnResize"] = function () {
          element["setState"]({
            "isOpen": false,
            "currentWidth": 0
          });
        };
        element["_toggleBarOpenClose"] = function () {
          var showMessage = element["state"]["isOpen"];
          var barStyles = element["props"]["barStyles"];
          var body = showMessage ? 0 : barStyles["pcWidth"];
          element["setState"]({
            "currentWidth": body,
            "isOpen": !showMessage
          });
        };
        element["_toggleBarOpenCloseUsingKeyBoard"] = function (shortcuts) {
          var showMessage = element["state"]["isOpen"];
          var barStyles = element["props"]["barStyles"];
          var body = showMessage ? 0 : barStyles["pcWidth"];
          if (!(32 !== shortcuts["keyCode"] && 13 !== shortcuts["keyCode"])) {
            element["setState"]({
              "currentWidth": body,
              "isOpen": !showMessage
            });
          }
        };
        return element;
      }
      Object(inspect["a"])(clone, deepDataAndEvents);
      var scope = function (dest) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x53b6be) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(selfClosing["a"])(dest);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(clone);
      Object(helper["a"])(clone, [{
        "key": "componentDidMount",
        "value": function () {
          window["addEventListener"]("resize", this["_handleCloseBarOnResize"]);
          this["_handleCloseBarOnResize"]();
        }
      }, {
        "key": "UNSAFE_componentWillReceiveProps",
        "value": function (thisValue) {
          var barStyles = this["props"]["barStyles"];
          var currentWidth = this["state"]["isOpen"] && !this["props"]["isNewItem"] ? barStyles["pcWidth"] : 0;
          var isOpen = !!currentWidth;
          this["setState"]({
            "currentWidth": currentWidth,
            "isOpen": isOpen
          });
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          window["removeEventListener"]("resize", this["_handleCloseBarOnResize"]);
        }
      }, {
        "key": "render",
        "value": function () {
          var isOpen = this["state"]["isOpen"];
          var group = this["props"];
          var language = group["language"];
          var value = group["barStyles"];
          var cls = ""["concat"](this["props"]["styleClass"], "pbar-parent");
          return Object(object["c"])(suiteView, {
            "left": value["pbX"],
            "width": value["pbWidth"],
            "id": "progressBar",
            "className": cls,
            "tabIndex": "0",
            "onKeyUp": this["_toggleBarOpenCloseUsingKeyBoard"],
            "aria-label": Object(m["e"])("progressBar:MY_PROGRESS"),
            "role": "application",
            "onMouseUp": function (event) {
              event["currentTarget"]["blur"]();
            }
          }, Object(object["c"])(typePattern, {
            "id": "pbar-left",
            "className": "pbar-left",
            "onClick": this["_toggleBarOpenClose"]
          }, Object(object["c"])("div", null, Object(m["e"])("progressBar:MY_PROGRESS"))), Object(object["c"])(failuresLink, {
            "width": this["state"]["currentWidth"],
            "pct": this["props"]["pct"],
            "language": language
          }), Object(object["c"])(dontCloseTags, {
            "id": "pbar-right",
            "className": "pbar-right",
            "onClick": this["_toggleBarOpenClose"]
          }, Object(object["c"])("div", null, isOpen ? "<" : ">")));
        }
      }]);
      return clone;
    }(which["Component"]);
    var memory = Object(getActual["a"])("div", {
      "target": "e1748zc41",
      "label": "CopyrightWrapper"
    })({
      "name": "4joxzw",
      "styles": "position:absolute;bottom:11px;width:100%"
    });
    var progressContexts = Object(getActual["a"])("div", {
      "target": "e1748zc40",
      "label": "CopyrightDiv"
    })("color:", function (exports) {
      return exports["color"];
    }, ";font-family:'Open Sans', sans-serif;text-align:center;@media (max-width: 1200px){font-size:9px;}@media (min-width: 1200px){font-size:10px;}");
    var events = require(912);
    var tests = require(914);
    var elements = require(922);
    var Attrs = require(1266);
    var Block = require(977);
    var Node = require(303);
    var should = require(999);
    var oop = require(976);
    var skin = require(970);
    var Test = require(971);
    var d = require(926);
    var map = require(7);
    var abbrevs = require(300);
    var Runnable = require(923);
    var funcs = require(96);
    var doctypes = require(925);
    var files = require(911);
    var args = require(917);
    var a = require(939);
    var restoreScript = abbrevs["a"]["InterstitialAudio"];
    var expectationResult = abbrevs["a"]["InterstitialContinue"];
    var waitsFunc = abbrevs["a"]["SurveySchoolImage"];
    var waitsForFunc = abbrevs["a"]["InterstitialClose"];
    var camelKey = Object(getActual["a"])(restoreScript, {
      "target": "eakt59i4",
      "label": "AudioIcon"
    })("path:first-child{stroke:", map["p"], ";}path:nth-child(2){fill:", map["p"], ";}");
    var rclass = Object(getActual["a"])(elements["a"], {
      "target": "eakt59i3",
      "label": "CheckboxWrapper"
    })({
      "name": "1cg614g",
      "styles": "padding-bottom:45px;div[class*='Checkbox__wrapper']{height:40px;line-height:40px;label.form-check-label{font-weight:800!important;font-size:40px;display:table;:before{box-shadow:none!important;height:40px;width:40px;}}}"
    });
    var radixToPower = Object(getActual["a"])("div", {
      "target": "eakt59i2",
      "label": "CheckboxAccessibilityWrapper"
    })(funcs["f"], " width:40px;height:40px;display:block;");
    var dependentModules = Object(getActual["a"])(Attrs["a"], {
      "target": "eakt59i1",
      "label": "StyledCheckbox"
    })({
      "name": "1ug0ppq",
      "styles": "line-height:35px!important;height:35px!important;padding-bottom:45px;margin-top:0"
    });
    var ArrayProto = Object(getActual["a"])(expectationResult, {
      "target": "eakt59i0",
      "label": "StyledArrow"
    })("path{stroke:", function (rec) {
      return rec["disabled"] ? map["m"] : map["p"];
    }, ";}");
    var newHextets = function (deepDataAndEvents) {
      function getType(obj) {
        var element;
        Object(nodes["a"])(this, getType);
        (element = options["call"](this, obj))["state"] = {
          "inSchool": "unknown"
        };
        element["currentLanguage"] = Object(m["b"])() || "en";
        element["changeLanguage"] = function (v) {
          if (!(element["props"]["subject"] !== a["a"]["MATH"])) {
            if (!("en" !== v && "es" !== v)) {
              document["getElementsByTagName"]("html")[0]["setAttribute"]("lang", v);
              Object(m["a"])(v);
            }
          }
        };
        element["setInSchool"] = function (dataAndEvents) {
          element["setState"]({
            "inSchool": dataAndEvents
          });
        };
        element["onContinue"] = function () {
          var node = element["props"];
          var current = node["onContinue"];
          var data = node["assessmentType"];
          var vals = a1["a"]["ASSESSMENT_TYPE"];
          d["g"]["trackEvent"]({
            "category": d["c"][data === vals["DIAGNOSTIC"] ? "DIAGNOSTIC" : "GM"],
            "action": d["b"]["SURVEY_RESPONSE"],
            "label": element["state"]["inSchool"]
          });
          current(element["state"]["inSchool"]);
        };
        var temp = obj["gradeBand"];
        Test["a"]["gradeLevel"] = "gk2" === temp ? doctypes["a"]["GRADE_LEVEL"] : "3";
        var srcLang = element["props"]["language"];
        element["changeLanguage"](srcLang);
        return element;
      }
      Object(inspect["a"])(getType, deepDataAndEvents);
      var options = function (deepDataAndEvents) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x2e4a35) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(selfClosing["a"])(deepDataAndEvents);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(getType);
      Object(helper["a"])(getType, [{
        "key": "componentWillUnmount",
        "value": function () {
          this["changeLanguage"](this["currentLanguage"]);
        }
      }, {
        "key": "render",
        "value": function () {
          var setInSchool = this;
          var args = this["props"];
          var pageX = args["gradeBand"];
          var callback = args["onClose"];
          var response = this["state"]["inSchool"];
          var charset = "gk2" === pageX;
          return Object(object["c"])(skin["a"], {
            "id": "LocationSurvey",
            "fillScreen": false,
            "centerContent": true,
            "overflow": true
          }, Object(object["c"])(events["a"], {
            "type": "flex"
          }, Object(object["c"])(oop["a"], {
            "height": "650px",
            "width": "auto",
            "transformOrigin": "center",
            "top": -4
          }, Object(object["c"])(Node["a"], {
            "aria-label": Object(m["e"])("lesson:CLOSE"),
            "tabIndex": 0,
            "onClick": callback,
            "id": "survey-close-button",
            "css": funcs["f"],
            "style": {
              "position": "absolute",
              "top": "-5%",
              "right": "-30%",
              "color": map["U"]
            }
          }, Object(object["c"])(waitsForFunc, {
            "alt": Object(m["e"])("lesson:CLOSE"),
            "title": Object(m["e"])("lesson:CLOSE")
          })), Object(object["c"])(should["a"], null, Object(object["c"])("div", {
            "style": {
              "marginTop": 10,
              "textAlign": "center",
              "marginBottom": 45
            }
          }, Object(object["c"])(waitsFunc, null)), Object(object["c"])(events["a"], {
            "type": "inline-grid",
            "gridGap": "15px",
            "gridTemplateColumns": "37px 1fr",
            "style": {
              "width": 490,
              "paddingBottom": 45,
              "marginLeft": 0
            }
          }, Object(object["c"])(elements["a"], {
            "style": {
              "paddingTop": 10
            }
          }, charset && Object(object["c"])(Runnable["a"], {
            "audioKey": "es" === Object(m["b"])() ? "ESPANOL/MSG_SURVEY_ARE_YOU_AT_SCHOOL_ES" : "MSG_SURVEY_ARE_YOU_AT_SCHOOL",
            "autoPlayHistory": false,
            "autoPlay": !attr["a"]["isIpad"](),
            "style": {
              "marginRight": "15px"
            }
          }, Object(object["c"])("div", {
            "tabIndex": 0,
            "aria-label": Object(m["e"])(""["concat"](pageX, ":PLAY_AUDIO")),
            "role": "button",
            "css": funcs["f"]
          }, Object(object["c"])(camelKey, null)))), Object(object["c"])(elements["a"], null, Object(object["c"])(tests["a"], {
            "fontSize": "40px",
            "fontWeight": "800",
            "lineHeight": "52px",
            "style": {
              "color": map["p"]
            }
          }, Object(m["e"])(""["concat"](pageX, ":ARE_YOU_AT_SCHOOL"))))), Object(object["c"])("div", {
            "style": {
              "marginLeft": 52
            }
          }, Object(object["c"])(rclass, null, Object(object["c"])(events["a"], {
            "type": "inline-grid",
            "gridGap": "15px",
            "gridTemplateColumns": ""["concat"](charset ? "37px " : "", "1fr")
          }, charset && Object(object["c"])(Runnable["a"], {
            "audioKey": "es" === Object(m["b"])() ? "ESPANOL/YES_ES" : "MSG_SURVEY_YES",
            "autoPlay": false,
            "style": {
              "marginRight": "15px"
            }
          }, Object(object["c"])("div", {
            "tabIndex": 0,
            "aria-label": Object(m["e"])(""["concat"](pageX, ":PLAY_AUDIO")),
            "role": "button",
            "css": funcs["f"]
          }, Object(object["c"])(camelKey, null))), Object(object["c"])(dependentModules, {
            "id": "survey-yes",
            "tabIndex": "-1",
            "label": Object(object["c"])(which["Fragment"], null, Object(object["c"])(radixToPower, {
              "tabIndex": 0,
              "role": "radio",
              "aria-checked": "yes" === response,
              "aria-label": Object(m["e"])("YES"),
              "onClick": function (event) {
                setInSchool["setInSchool"]("yes");
                event["target"]["blur"]();
              },
              "onKeyUp": function (event) {
                if (!(13 !== event["keyCode"] && 32 !== event["keyCode"])) {
                  setInSchool["setInSchool"]("yes");
                  event["preventDefault"]();
                }
              }
            }), Object(object["c"])("div", {
              "role": "radio",
              "aria-checked": false
            }), Object(object["c"])("span", {
              "style": {
                "display": "table-cell",
                "verticalAlign": "middle"
              }
            }, Object(m["e"])("YES"))),
            "value": "yes" === response,
            "onChange": function () {
              return setInSchool["setInSchool"]("yes");
            }
          }))), Object(object["c"])(rclass, null, Object(object["c"])(events["a"], {
            "type": "inline-grid",
            "gridGap": "15px",
            "gridTemplateColumns": ""["concat"](charset ? "37px " : "", "1fr")
          }, charset && Object(object["c"])(Runnable["a"], {
            "audioKey": "es" === Object(m["b"])() ? "ESPANOL/NO_ES" : "MSG_SURVEY_NO",
            "autoPlay": false,
            "style": {
              "marginRight": "15px"
            }
          }, Object(object["c"])("div", {
            "tabIndex": 0,
            "aria-label": Object(m["e"])(""["concat"](pageX, ":PLAY_AUDIO")),
            "role": "button",
            "css": funcs["f"]
          }, Object(object["c"])(camelKey, null))), Object(object["c"])(dependentModules, {
            "id": "survey-no",
            "tabIndex": "-1",
            "css": funcs["f"],
            "label": Object(object["c"])(which["Fragment"], null, Object(object["c"])("div", {
              "role": "radio",
              "aria-checked": false
            }), Object(object["c"])(radixToPower, {
              "tabIndex": 0,
              "role": "radio",
              "aria-checked": "no" === response,
              "aria-label": Object(m["e"])("NO"),
              "onClick": function (event) {
                setInSchool["setInSchool"]("no");
                event["target"]["blur"]();
              },
              "onKeyUp": function (event) {
                if (!(13 !== event["keyCode"] && 32 !== event["keyCode"])) {
                  setInSchool["setInSchool"]("no");
                  event["preventDefault"]();
                }
              }
            }), Object(object["c"])("span", {
              "style": {
                "display": "table-cell",
                "verticalAlign": "middle"
              }
            }, Object(m["e"])("NO"))),
            "value": "no" === response,
            "onChange": function () {
              return setInSchool["setInSchool"]("no");
            }
          })))), Object(object["c"])("div", {
            "style": {
              "marginTop": 0,
              "marginLeft": 348
            }
          }, Object(object["c"])(parse, {
            "disabled": "unknown" === response,
            "tabIndex": "0",
            "onClick": this["onContinue"]
          }))))));
        }
      }]);
      return getType;
    }(keys["a"]["Component"]);
    var whitespaceRegex = Object(self["connect"])(getType)(newHextets);
    __TEST__;
    var e = require(1059);
    var tmp = require(975);
    var data = require(1163);
    var url = require(1183);
    var mocks = require(950);
    var entity = require(1062);
    var result = {
      "name": "1kkrokv-IFRAME_STYLE",
      "styles": "height:calc(100vh - 70px);width:90%;margin:auto;div{position:relative;display:block;iframe{position:absolute;height:100%;width:100%;top:0;left:0;}};label:IFRAME_STYLE;"
    };
    var parentName = function (deepDataAndEvents) {
      function init() {
        var result;
        Object(nodes["a"])(this, init);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (result = radixToPower["call"]["apply"](radixToPower, [this]["concat"](rv)))["state"] = {
          "autoPlayEnabledChecked": false,
          "hasFrameBeenTested": false,
          "hasError": false,
          "loadingProgress": -1,
          "progressMsg": "initializing"
        };
        result["_keepAliveID"] = null;
        result["_initializeIFrame"] = function () {
          result["_setInteropHandlers"]();
          result["_resizeIFrame"]();
          if (result["props"]["assessmentJSON"]) {
            result["_loadContent"]();
          }
        };
        result["loadError"] = function () {
          var message = result["state"];
          var messageType = message["loadingProgress"];
          var pointers = message["progressMsg"];
          var throttledUpdate = result["props"]["navigateToPage"];
          Object(o["g"])("HTML5DiagnosticDisplay load error, loaded "["concat"](messageType, "% : ")["concat"](pointers), o["m"]);
          throttledUpdate(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        result["getiFrameRef"] = function (style) {
          result["iFrameRef"] = style;
        };
        result["startKeepAlive"] = function () {
          var SESSION_KEEP_ALIVE_INTERVAL = result["props"]["settings"]["SESSION_KEEP_ALIVE_INTERVAL"];
          result["stopKeepAlive"]();
          result["_keepAliveID"] = window["setTimeout"](function () {
            result["props"]["dispatchKeepAlive"]();
            result["startKeepAlive"]();
          }, 6E4 * SESSION_KEEP_ALIVE_INTERVAL);
        };
        result["stopKeepAlive"] = function () {
          window["clearTimeout"](result["_keepAliveID"]);
        };
        result["iFrameRef"] = void 0;
        return result;
      }
      Object(inspect["a"])(init, deepDataAndEvents);
      var radixToPower = function (key) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x44c29b) {
            return false;
          }
        }
        return function () {
          var parsed;
          var camelKey = Object(selfClosing["a"])(key);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](camelKey, arguments, scripts);
          } else {
            parsed = camelKey["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(init);
      Object(helper["a"])(init, [{
        "key": "componentDidMount",
        "value": function () {
          var collection = this;
          this["startKeepAlive"]();
          window["getContentDataCallback"] = this["_initializeIFrame"];
          window["setProgressCallback"] = function (dataAndEvents, deepDataAndEvents) {
            collection["setState"]({
              "loadingProgress": dataAndEvents,
              "progressMsg": deepDataAndEvents
            }, function () {
              if (dataAndEvents >= 100) {
                (0, collection["props"]["contentLoadedCallback"])();
                collection["_getIFrameWindow"]()["postMessage"]({
                  "type": "displayNextQuestion"
                }, "*");
              }
            });
          };
          window["autoPlayCallback"] = function (resp) {
            collection["_handleAutoPlayResult"](resp);
          };
          window["closeAndEndSession"] = function () {
            collection["stopKeepAlive"]();
            collection["props"]["closeWhenSessionTimeout"]();
          };
        }
      }, {
        "key": "componentDidUpdate",
        "value": function (source) {
          if (this["state"]["autoPlayEnabledChecked"]) {
            this["_resizeIFrame"]();
          }
          if (this["props"]["assessmentJSON"]) {
            if (this["props"]["assessmentJSON"]["item"]["meta"]["reference"] !== source["assessmentJSON"]["item"]["meta"]["reference"]) {
              this["_loadContent"]();
            }
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          window["setProgressCallback"] = window["getContentDataCallback"] = window["logErrorCallback"] = window["autoPlayCallback"] = window["closeAndEndSession"] = void 0;
          this["stopKeepAlive"]();
        }
      }, {
        "key": "_getIFrameWindow",
        "value": function () {
          return this["iFrameRef"]["contentWindow"];
        }
      }, {
        "key": "_setInteropHandlers",
        "value": function () {
          var c = this["_getIFrameWindow"]();
          var $cookies = this["props"];
          var value = $cookies["assessmentJSON"];
          var tmp = $cookies["interop"]["scoreItemCallback"];
          c["scoreItemCallback"] = tmp;
          c["assessmentJSON"] = value;
          c["log"] = o["e"];
          c["info"] = o["d"];
          c["error"] = o["b"];
          c["fatal"] = o["c"];
        }
      }, {
        "key": "_handleAutoPlayResult",
        "value": function (thisValue) {
          if (thisValue === a1["a"]["AUTOPLAY"]["AUTOPLAY_ENABLED"]) {
            this["setState"]({
              "autoPlayEnabledChecked": true
            });
          } else {
            (0, this["props"]["navigateToPage"])(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
          }
        }
      }, {
        "key": "_resizeIFrame",
        "value": function () {
          var els = isArray()(this["_getIFrameWindow"](), "document");
          if (els) {
            var el = els["getElementById"]("diagnostic-container");
            if (el) {
              el["setAttribute"]("style", "display:block;height:"["concat"](this["props"]["height"], "px"));
            }
          }
        }
      }, {
        "key": "_loadContent",
        "value": function () {
          var track = this;
          this["setState"]({
            "loadingProgress": -1,
            "progressMsg": "initializing"
          }, function () {
            track["_getIFrameWindow"]()["postMessage"]({
              "type": "newQuestion",
              "assessmentJSON": track["props"]["assessmentJSON"]
            }, "*");
          });
        }
      }, {
        "key": "render",
        "value": function () {
          var parts = this["props"];
          var spaceAfter = parts["contentLoadedCallback"];
          var source = parts["subject"];
          var owner = parts["settings"];
          var unlock = owner["LEARNING_TREE_TIMEOUT_MILLIS"];
          var retry = owner["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var title = parts["title"];
          return Object(object["c"])("div", {
            "id": "html-diagnostic-iframe",
            "css": result
          }, source && Object(object["c"])(mocks["a"], {
            "title": title,
            "getRef": this["getiFrameRef"],
            "id": "diagnosticIFrame",
            "allowTransparency": true,
            "allowFullscreen": true,
            "className": "assessment-frame",
            "src": "/student/dashboard/diagnosticIFrame/"["concat"](source),
            "timeout": unlock,
            "retry": retry,
            "loadCheckAttribute": "preloader",
            "loadErrorCallback": this["loadError"],
            "loadCompleteCallback": spaceAfter
          }));
        }
      }]);
      return init;
    }(keys["a"]["Component"]);
    var copies = {
      "navigateToPage": expect["e"],
      "dispatchKeepAlive": entity["b"]
    };
    var parentLogger = Object(self["connect"])(indexOf, copies)(parentName);
    __TEST__;
    var visited = require(26);
    var update = require(938);
    var throttledUpdate = require["n"](update);
    var argv = require(10);
    var options = require["n"](argv);
    var g = require(1019);
    var constants = require(1058);
    var funcProps = Object(getActual["a"])("div", {
      "target": "egx9ddm0",
      "label": "IframeWrapper"
    })("width:", function (a) {
      return a["width"];
    }, ";height:95vh;margin:0 auto;overflow:hidden;div{position:relative;overflow:hidden;}iframe{padding-top:15px;display:block;position:absolute;top:-20px;left:0;height:100%;width:100%;}");
    var cacheKey = function (deepDataAndEvents) {
      function getOwnPropertyNames() {
        var props;
        Object(nodes["a"])(this, getOwnPropertyNames);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (props = properties["call"]["apply"](properties, [this]["concat"](rv)))["loadError"] = function () {
          var prop = props["props"];
          var P = prop["navigateToPage"];
          var SubClass = prop["gameId"];
          Object(o["g"])("HTML5Diagnostic game load error, gameId = ["["concat"](SubClass, "]"), o["m"]);
          P(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        props["_iframeChecked"] = false;
        return props;
      }
      Object(inspect["a"])(getOwnPropertyNames, deepDataAndEvents);
      var properties = function (methods) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x2377b7) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(selfClosing["a"])(methods);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(getOwnPropertyNames);
      Object(helper["a"])(getOwnPropertyNames, [{
        "key": "componentDidMount",
        "value": function () {
          window["gameBridge"] = this["addGameBridgeMethods"]();
        }
      }, {
        "key": "UNSAFE_componentWillReceiveProps",
        "value": function (view) {
          if (view["width"] !== this["props"]["width"]) {
            if (!Boolean(window["gameBridge"])) {
              window["gameBridge"] = this["addGameBridgeMethods"]();
            }
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          delete window["gameBridge"];
        }
      }, {
        "key": "addGameBridgeMethods",
        "value": function () {
          var collection = this;
          var owner = this["props"];
          var valuesFn = owner["scoreItemCallback"];
          var unlock = owner["closeItemCallback"];
          return {
            "skipScoreCard": true,
            "isWithinDiag": true,
            "info": {
              "numberOfRetries": this["props"]["settings"]["LEARNING_TREE_LESSON_NUM_RETRIES"]
            },
            "initialized": function () {
              collection["updateGameLoadStatus"](false);
            },
            "start": function () {
              return collection["_startGame"]();
            },
            "getUserData": function () {
              return collection["_getUserData"]();
            },
            "saveUserData": function (resp) {
              return collection["_saveUserData"](resp);
            },
            "close": function () {
              unlock();
            },
            "updateLoadProgress": function (dataAndEvents) {},
            "sendScore": function () {
              var f = Object(visited["a"])(options["a"]["mark"](function link() {
                return options["a"]["wrap"](function (node) {
                  for (;;) {
                    switch (node["prev"] = node["next"]) {
                      case 0:
                        d["g"]["trackEvent"]({
                          "category": d["c"]["DIAGNOSTIC_GAME"],
                          "action": d["b"]["ACTIVITY_COMPLETED"],
                          "label": isArray()(collection["_getActiveGame"](), "name")
                        });
                        node["t0"] = Promise;
                        node["next"] = 4;
                        return valuesFn();
                      case 4:
                        node["t1"] = node["sent"];
                        return node["abrupt"]("return", node["t0"]["resolve"]["call"](node["t0"], node["t1"]));
                      case 6:
                        ;
                      case "end":
                        return node["stop"]();
                    }
                  }
                }, link);
              }));
              return function () {
                return f["apply"](this, arguments);
              };
            }()
          };
        }
      }, {
        "key": "_startGame",
        "value": function () {
          return new Promise(function (it) {
            it();
          });
        }
      }, {
        "key": "_getUserData",
        "value": function () {
          var gameIndex = this["props"];
          return (0, gameIndex["getUserData"])({
            "fieldtripId": gameIndex["gameId"]
          });
        }
      }, {
        "key": "_saveUserData",
        "value": function (component) {
          var gameIndex = this["props"];
          return (0, gameIndex["dispatchSaveUserData"])({
            "fieldtripId": gameIndex["gameId"],
            "data": component
          });
        }
      }, {
        "key": "updateGameLoadStatus",
        "value": function (thisValue) {
          if (!thisValue) {
            (0, this["props"]["contentLoadedCallback"])();
          }
        }
      }, {
        "key": "_getActiveGame",
        "value": function () {
          var match = this["props"];
          var which = match["games"];
          var pageId = match["gameId"];
          if (which) {
            return throttledUpdate()(which, {
              "id": pageId
            });
          }
        }
      }, {
        "key": "_getGamePath",
        "value": function (fields) {
          if (fields) {
            var field = fields["path"];
            var args = this["props"]["settings"];
            var pageY = args["CDN_DOMAIN_URL"];
            var pageX = args["REWARDS_GAMES_VERSION"];
            var next = args["REWARDS_GAMES_BEGOOPED_VERSION"];
            var c = args["REWARDS_GAMES_CAT_STACKER_VERSION"];
            var arg = args["REWARDS_GAMES_PATH_SPINNERS_VERSION"];
            var result = null;
            switch (field) {
              case "game-minedigger":
                ;
              case "game-bubbles":
                ;
              case "game-lanerunner":
                result = ""["concat"](pageY, "/instruction/reward-games/")["concat"](pageX, "/")["concat"](field, "/");
                break;
              case "game-begooped":
                result = ""["concat"](pageY, "/instruction/")["concat"](field, "/")["concat"](next);
                break;
              case "game-catstacker":
                result = ""["concat"](pageY, "/instruction/")["concat"](field, "/")["concat"](c);
                break;
              case "game-hpr":
                result = ""["concat"](pageY, "/instruction/")["concat"](field, "/")["concat"](arg);
                break;
              default:
                result = null;
            }
            return result;
          }
        }
      }, {
        "key": "render",
        "value": function () {
          var a = this["props"];
          var next = a["settings"];
          var fn = next["LEARNING_TREE_TIMEOUT_MILLIS"];
          var retry = next["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var x = a["title"];
          var w = a["width"];
          var angle = this["_getActiveGame"]();
          var s = this["_getGamePath"](angle);
          return s ? Object(object["c"])(funcProps, {
            "id": "diagnostic-game-iframe",
            "width": w
          }, Object(object["c"])(mocks["a"], {
            "title": x,
            "id": "diag-game",
            "src": s,
            "timeout": fn,
            "retry": retry,
            "loadCheckAttribute": ["preloader", "Gamepad"],
            "loadErrorCallback": this["loadError"]
          })) : null;
        }
      }]);
      return getOwnPropertyNames;
    }(which["PureComponent"]);
    var reversed = {
      "navigateToPage": expect["e"],
      "getUserData": g["c"],
      "dispatchSaveUserData": g["d"]
    };
    var cached = Object(self["connect"])(normal, reversed)(cacheKey);
    __TEST__;
    var originalEvent = Object(getName["a"])([g["b"], g["c"], g["d"]]);
    var views = require(931);
    var gotErr = Object(getActual["a"])("div", {
      "target": "e1ph3dd80",
      "label": "IframeWrapper"
    })("width:", function (options) {
      var dw = options["width"];
      return ""["concat"](dw, "px") || false;
    }, ";height:", function (options) {
      var dh = options["height"];
      return ""["concat"](dh, "px") || false;
    }, ";margin:auto;overflow:auto;div{position:relative;padding-top:46.25%;overflow:hidden;}iframe{position:absolute;top:0;left:0;height:100%;width:100%;}");
    var resp = function (deepDataAndEvents) {
      function init() {
        var enabled;
        Object(nodes["a"])(this, init);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (enabled = R["call"]["apply"](R, [this]["concat"](rv)))["state"] = {
          "loadingProgress": -1,
          "progressMsg": "initializing"
        };
        enabled["_handleIframeEvents"] = function (cache) {
          var label = cache["data"]["type"];
          switch (label) {
            case "ADD_KEYDOWN_LISTENER":
              ;
            case "ADD_LISTENERS_TO_DETECT_MOVEMENTS":
              window["addEventListener"]("keydown", enabled["_onWindowKeyPress"]);
              window["addEventListener"]("mousemove", enabled["_onWindowKeyPress"]);
              break;
            case "ADD_PAGE_BLUR":
              window["addEventListener"]("focus", enabled["_onSDFocus"], false);
              window["addEventListener"]("blur", enabled["_pauseOverlay"], false);
              break;
            case "ADD_RESIZE_EVENTS":
              window["addEventListener"]("resize", enabled["_onWindowResize"]);
              break;
            default:
              console["log"]("No "["concat"](label, " such event from iframe "), label);
          }
        };
        enabled["_globalPlayPause"] = function ($cookies, dataAndEvents) {
          var value = $cookies["key"];
          var _shiftKey = $cookies["shiftKey"];
          if (dataAndEvents) {
            if ("escape" === value["toLowerCase"]()) {
              dataAndEvents["postMessage"]({
                "pause": true,
                "type": "PLAY_PAUSE"
              }, "*");
            } else {
              if (_shiftKey) {
                if ("p" === value["toLowerCase"]()) {
                  dataAndEvents["postMessage"]({
                    "pause": false,
                    "type": "PLAY_PAUSE"
                  }, "*");
                }
              }
            }
          }
        };
        enabled["_detectMovements"] = function (dataAndEvents, e) {
          if (e) {
            e["postMessage"]({
              "type": "MOVEMENT_DETECTED",
              "movementDetected": true
            }, "*");
          }
        };
        enabled["_onWindowKeyPress"] = function (walkers) {
          var r20 = enabled["_getIFrameWindow"]();
          if ("keydown" === walkers["type"]) {
            enabled["_globalPlayPause"](walkers, r20);
          }
          enabled["_detectMovements"](walkers, r20);
        };
        enabled["_onWindowResize"] = function () {
          var promise = enabled["_getIFrameWindow"]();
          if (promise) {
            promise["postMessage"]({
              "type": "RESIZE_DETECTED",
              "windowWidth": window["innerWidth"],
              "windowHeight": window["innerHeight"],
              "pbX": enabled["props"]["pbX"]
            }, "*");
          }
        };
        enabled["_onSDFocus"] = function (dataAndEvents) {
          var $ = enabled["_getIFrameWindow"]();
          if ($) {
            $["postMessage"]({
              "focusin": true,
              "type": "PAGE_HAS_FOCUS"
            }, "*");
          }
        };
        enabled["_pauseOverlay"] = function (dataAndEvents) {
          var $ = enabled["_getIFrameWindow"]();
          if ($) {
            $["postMessage"]({
              "focusin": false,
              "type": "PAGE_LOST_FOCUS"
            }, "*");
          }
        };
        enabled["_getIFrameWindow"] = function () {
          return enabled["iFrameRef"]["contentWindow"];
        };
        enabled["loadError"] = function () {
          var parts = enabled["props"];
          var part = parts["navigateToPage"];
          var source = parts["source"];
          Object(o["g"])("Diagnostic Animation load error, source = ["["concat"](source, "]"), o["m"]);
          part(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        enabled["contentLoadedCallback"] = function () {
          enabled["props"]["contentLoadedCallback"]();
          enabled["_onWindowResize"]();
        };
        enabled["getiFrameRef"] = function (dataAndEvents) {
          enabled["iFrameRef"] = dataAndEvents;
        };
        enabled["iFrameRef"] = void 0;
        return enabled;
      }
      Object(inspect["a"])(init, deepDataAndEvents);
      var R = function (key) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x4f9383) {
            return false;
          }
        }
        return function () {
          var parsed;
          var camelKey = Object(selfClosing["a"])(key);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](camelKey, arguments, scripts);
          } else {
            parsed = camelKey["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(init);
      Object(helper["a"])(init, [{
        "key": "componentDidMount",
        "value": function () {
          var track = this;
          this["setState"]({
            "loadingProgress": 100,
            "progressMsg": "Loaded Diagnostic Animation"
          }, function () {
            (0, track["props"]["contentLoadedCallback"])();
            window["addEventListener"]("message", track["_handleIframeEvents"]);
          });
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          window["removeEventListener"]("message", this["_handleIframeEvents"]);
          window["removeEventListener"]("keydown", this["_onWindowKeyPress"]);
          window["removeEventListener"]("mousemove", this["_onWindowKeyPress"]);
          window["removeEventListener"]("focus", this["_onSDFocus"]);
          window["removeEventListener"]("blur", this["_pauseOverlay"]);
        }
      }, {
        "key": "render",
        "value": function () {
          var options = this["props"];
          var hc = options["cdnUrl"];
          var source = options["source"];
          var x = options["title"];
          var vals = options["settings"];
          var w = options["width"];
          var h = options["height"];
          var val = vals["LEARNING_TREE_TIMEOUT_MILLIS"];
          var valArr = vals["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var uri = ""["concat"](hc)["concat"](a1["a"]["DIAGNOSTIC_CONTENT_PATH"])["concat"](source);
          return Object(object["c"])(gotErr, {
            "id": "html-diagnostic-iframe",
            "width": w + 120,
            "height": h - 30
          }, Object(object["c"])(mocks["a"], {
            "getRef": this["getiFrameRef"],
            "title": x,
            "id": "diagnosticAnimationIFrame",
            "allowTransparency": true,
            "className": "assessment-frame",
            "src": uri,
            "timeout": val,
            "retry": valArr,
            "loadErrorCallback": this["loadError"],
            "loadCompleteCallback": this["contentLoadedCallback"]
          }));
        }
      }]);
      return init;
    }(keys["a"]["Component"]);
    var stringProps = {
      "navigateToPage": expect["e"]
    };
    var serverAttrs = Object(self["connect"])(decode, stringProps)(resp);
    __TEST__;
    var Token = require(1158);
    var j = require(1219);
    var frequency = require(1184);
    var expr = a1["a"]["ASSESSMENT_TYPE"];
    var ACTIVITY_TIMERS = a1["a"]["ACTIVITY_TIMERS"];
    var event = a1["a"]["DIAGNOSTIC_CONTENT_PATH"];
    var number = Object(assert["defaultMemoize"])(function (dataAndEvents) {
      return Math["floor"](100 * dataAndEvents);
    });
    var cDigit = Object(getActual["a"])("div", {
      "target": "ejyuqa32",
      "label": "AssesmentView"
    })("overflow:hidden;background-color:", function (dataAndEvents) {
      return dataAndEvents["selectedSubject"] === a["a"]["ELA"] ? "#1FC663" : "#267AD9";
    }, ";background-size:100% 100%;");
    var core_rnotwhite = Object(getActual["a"])("div", {
      "target": "ejyuqa31",
      "label": "ProgressBarWrapper"
    })({
      "name": "1d3w5wq",
      "styles": "width:100%"
    });
    var oldconfig = Object(getActual["a"])("img", {
      "target": "ejyuqa30",
      "label": "CloseButton"
    })({
      "name": "17molni",
      "styles": "position:absolute;right:0;top:0;padding:5px"
    });
    var otherElement = function (deepDataAndEvents) {
      function tobi(promise) {
        var timers;
        Object(nodes["a"])(this, tobi);
        (timers = options["call"](this, promise))["state"] = {
          "windowHeight": window["innerHeight"],
          "windowWidth": window["innerWidth"],
          "isNewItem": false,
          "showLoader": true,
          "showProgress": false,
          "showCover": false,
          "itemId": null,
          "responded": false
        };
        timers["currentLanguage"] = Object(m["b"])() || "en";
        timers["timerId"] = void 0;
        timers["closeButtonClicked"] = false;
        timers["doneButtonClicked"] = false;
        timers["showIpadAssessmentError"] = function () {
          (0, timers["props"]["navigateToPage"])(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        timers["_closeSimulator"] = function () {
          var start = timers["props"];
          var throttledUpdate = start["dispatchStopCheatSimulatorAction"];
          if (true === start["isCheating"]) {
            throttledUpdate();
          }
        };
        timers["_onScoreItem"] = function (dataAndEvents, deepDataAndEvents) {
          var args = timers["props"];
          var parent = args["dispatchCompleteTestItemAction"];
          var result = args["assessment"];
          var pageY = args["assessmentActivityId"];
          var remaining = result && result["item"]["id"];
          timers["_startNewItemTimer"]();
          timers["doneButtonClicked"] = true;
          if (!timers["closeButtonClicked"]) {
            parent({
              "activityId": pageY,
              "assessmentItemId": remaining,
              "durationSeconds": deepDataAndEvents,
              "correct": false,
              "itemResponse": dataAndEvents
            });
          }
        };
        timers["_animationDone"] = function () {
          var o = timers["props"]["assessment"];
          if (o) {
            var r20 = {
              "reference": o["item"]["assessmentJSON"]["item"]["meta"]["reference"],
              "controlResponse": []
            };
            timers["_onScoreItem"](r20, 1);
          } else {
            timers["_logError"]("Cannot retrieve assessmentJSON meta data to submit itemResponse.");
          }
        };
        timers["_toolsVideosCallback"] = function (deepDataAndEvents, dataAndEvents) {
          var args = timers["props"];
          var next = args["assessment"];
          var pageX = args["cdnUrl"];
          var r = args["selectedSubject"];
          if (!next) {
            return null;
          }
          var parentName;
          var grade = next["item"]["assessmentJSON"]["item"]["meta"]["grade"];
          var attrs = {};
          var originalEvent = event;
          var newMillis = a["b"][r];
          dataAndEvents["forEach"](function (attr) {
            parentName = isArray()(function (deepDataAndEvents, nowMillis) {
              return {
                "answeringQuestions": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_answeringquestions.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_answeringquestions.mp4")
                },
                "baseTenBlocks": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_basetenblocks.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_basetenblocks.mp4")
                },
                "calculators": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_calculators.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_calculators.mp4")
                },
                "coordinateGrid": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_coordinategrid.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_coordinategrid.mp4")
                },
                "counters": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_counters.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_counters.mp4")
                },
                "hundredCharts": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_hundredcharts.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_hundredcharts.mp4")
                },
                "myProgress": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_myprogress.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_myprogress.mp4")
                },
                "numberLine": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_numberline.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_numberline.mp4")
                },
                "protractor": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_protractor.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_protractor.mp4")
                },
                "ruler": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_ruler.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_ruler.mp4")
                },
                "unitCube": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_unitcube.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_unitcube.mp4")
                },
                "unitSquare": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_unitsquare.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_3_unitsquare.mp4")
                },
                "multiMediaPlayer": {
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_2_3_multimediaplayer.mp4")
                },
                "switchingTabs": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_1_switchingtabs.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_2_3_switchingtabs.mp4")
                },
                "turningPages": {
                  "grade1": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_K_1_turningpages.mp4"),
                  "grade2": "shared/tutorial/"["concat"](deepDataAndEvents, "/videos/plory/")["concat"](nowMillis, "_2_3_turningpages.mp4")
                }
              };
            }(deepDataAndEvents, newMillis), ""["concat"](attr, ".grade")["concat"](grade));
            attrs[attr] = parentName ? ""["concat"](pageX)["concat"](originalEvent)["concat"](parentName) : "";
          });
          return attrs;
        };
        timers["_logError"] = function (deepDataAndEvents) {
          Object(o["g"])(deepDataAndEvents, o["m"]);
          (0, timers["props"]["navigateToPage"])(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        timers["_logMessage"] = function (deepDataAndEvents) {
          Object(o["h"])(deepDataAndEvents);
        };
        timers["_handleResize"] = function () {
          timers["setState"]({
            "windowHeight": window["innerHeight"],
            "windowWidth": window["innerWidth"]
          });
        };
        timers["_contentLoadedCallback"] = function () {
          clearTimeout(timers["timerId"]);
          timers["setState"]({
            "showLoader": false,
            "showCover": false,
            "showProgress": true
          });
        };
        timers["_onCloseAssessment"] = function () {
          var specialObjects = timers["props"];
          var throttledUpdate = specialObjects["dispatchStopActivityAction"];
          var special = specialObjects["selectedActivity"];
          var itemInstancing = special && special["type"] === expr["GROWTH_MONITORING"];
          timers["closeButtonClicked"] = true;
          if (!timers["doneButtonClicked"]) {
            throttledUpdate(false);
          }
          d["g"]["trackEvent"]({
            "category": itemInstancing ? d["c"]["GM"] : d["c"]["DIAGNOSTIC"],
            "action": d["b"]["ACTIVITY_PAUSED"]
          });
        };
        timers["_closeWhenSessionTimeout"] = function () {
          (0, timers["props"]["dispatchStopActivityAction"])(true);
        };
        timers["_getData"] = function () {
          return {
            "id": timers["state"]["itemId"],
            "type": "ASSESSMENT"
          };
        };
        timers["_onCloseAssessmentUsingKeyboard"] = function (event) {
          if (!(32 !== event["keyCode"] && 13 !== event["keyCode"])) {
            timers["_onCloseAssessment"]();
            event["preventDefault"]();
          }
        };
        timers["_onContinueSurvey"] = function (response) {
          var start = timers["props"];
          var throttledUpdate = start["dispatchStartAssessmentAction"];
          (0, start["dispatchUpdateStudentLocationAction"])({
            "recorded": false,
            "location": "yes" === response ? "SCHOOL" : "OTHER"
          });
          throttledUpdate();
        };
        timers["_onCloseSurvey"] = function () {
          var args = timers["props"];
          var parent = args["navigateToPage"];
          var pageY = args["isUsingLockDown"];
          if (attr["a"]["isChromeBookLockDownApp"]()) {
            storage["b"]["logoutAndCloseLockdown"]();
          } else {
            if (pageY) {
              storage["b"]["logout"]();
              window["location"]["href"] = "https://"["concat"](window["location"]["hostname"])["concat"](a1["a"]["LOCKDOWN_BROWSER_EXIT_URL"]);
            } else {
              parent(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
            }
          }
        };
        timers["_getQuestionData"] = function () {
          return isArray()(timers["props"], "assessment.item.assessmentJSON");
        };
        timers["changeLanguage"] = function (v) {
          if (!(timers["props"]["selectedSubject"] !== a["a"]["MATH"])) {
            if (!("en" !== v && "es" !== v)) {
              document["getElementsByTagName"]("html")[0]["setAttribute"]("lang", v);
              Object(m["a"])(v);
            }
          }
        };
        timers["getIframeTitle"] = function () {
          var params = timers["props"];
          var value = params["assessment"];
          var r = params["selectedSubject"];
          var param = params["selectedActivity"];
          var attrNames = value && value["item"]["assessmentJSON"]["item"]["meta"]["type"];
          var later = "";
          if (param["type"] === expr["GROWTH_MONITORING"]) {
            later = ""["concat"](a["b"][r]["toUpperCase"](), "_GROWTH_MONITORING");
          } else {
            switch (attrNames) {
              case "Tutorial":
                later = ""["concat"](a["b"][r]["toUpperCase"](), "_DIAGNOSTIC_TUTORIAL");
                break;
              case "Game":
                later = "DIAGNOSTIC_GAME_BREAK";
                break;
              case "BrainBreak":
                later = "DIAGNOSTIC_BRAIN_BREAK";
                break;
              default:
                later = ""["concat"](a["b"][r]["toUpperCase"](), "_DIAGNOSTIC_QUESTION");
            }
          }
          return ""["concat"](Object(m["e"])("accessibility:"["concat"](later, "_TITLE")));
        };
        var srcLang = timers["props"]["language"];
        timers["changeLanguage"](srcLang);
        return timers;
      }
      Object(inspect["a"])(tobi, deepDataAndEvents);
      var options = function (event) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x317b3f) {
            return false;
          }
        }
        return function () {
          var parsed;
          var data = Object(selfClosing["a"])(event);
          if (isEmpty()) {
            var scripts = Object(selfClosing["a"])(this)["constructor"];
            parsed = Reflect["construct"](data, arguments, scripts);
          } else {
            parsed = data["apply"](this, arguments);
          }
          return Object(_["a"])(this, parsed);
        };
      }(tobi);
      Object(helper["a"])(tobi, [{
        "key": "componentDidMount",
        "value": function () {
          var props = this["props"];
          var prop = props["assessmentActivityId"];
          var propValue = props["dispatchPauseActivityAction"];
          var required = props["dispatchUncloseActivityAction"];
          var value = props["selectedActivity"];
          var modules = props["showSurvey"];
          var name = props["selectedSubject"];
          var p = props["privileges"];
          var p1 = props["isCheating"];
          var fn = props["dispatchStartCheatSimulatorAction"];
          var val = props["dispatchStartAssessmentAction"];
          var special = props["setIpadAssessmentModeProgress"];
          var p0 = props["isOnIpadAssessmentMode"];
          var lval = value && value["type"] === expr["GROWTH_MONITORING"];
          var x = lval ? expr["GROWTH_MONITORING"] : expr["DIAGNOSTIC"];
          var r20 = [isFunction()(d["a"]["ACTIVITY_TYPE"], {
            "value": x
          })];
          var params = {
            "subject": name,
            "type": x
          };
          if (p1) {
            fn();
          } else {
            if (!modules) {
              val();
            }
          }
          d["g"]["setCustom"](r20);
          d["g"]["trackPage"](d["e"]["DIAGNOSTIC"]["withData"](params));
          j["a"]["setCustom"](r20);
          d["g"]["trackEvent"]({
            "category": lval ? d["c"]["GM"] : d["c"]["DIAGNOSTIC"],
            "action": "NOT_STARTED" === value["status"] ? d["b"]["ACTIVITY_STARTED"] : d["b"]["ACTIVITY_RESUMED"]
          });
          if (!p["HAS_BROWSER_LOCKDOWN_ACCESS"]) {
            meta["a"]["confirmBrowserNavigation"](propValue, required, {
              "activityId": prop
            });
          }
          window["scoreItemCallback"] = this["_onScoreItem"];
          window["getData"] = this["_getData"];
          window["animationDoneCallback"] = this["_animationDone"];
          window["toolsVideosCallback"] = this["_toolsVideosCallback"];
          window["logMessage"] = this["_logMessage"];
          window["logError"] = this["_logError"];
          window["getQuestionData"] = this["_getQuestionData"];
          window["addEventListener"]("resize", this["_handleResize"]);
          this["_handleResize"]();
          if (p0) {
            window["addEventListener"](attr["e"], this["showIpadAssessmentError"], false);
            window["addEventListener"](attr["d"], function translate() {
              special(false);
              window["removeEventListener"](attr["d"], translate, false);
            }, false);
          }
        }
      }, {
        "key": "UNSAFE_componentWillReceiveProps",
        "value": function (args) {
          var options = args["assessment"];
          var map = this["props"]["assessment"];
          if (options) {
            if (map) {
              if (!options["endOfTest"]) {
                if (!(map["item"]["id"] === options["item"]["id"])) {
                  this["setState"]({
                    "isNewItem": true,
                    "itemId": options["item"]["id"]
                  });
                  this["closeButtonClicked"] = false;
                  this["doneButtonClicked"] = false;
                }
              }
            }
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          var props = this["props"];
          var fn = props["dispatchLoadTestingQueueAction"];
          var val = props["dispatchUpdateTestingQueueIndexAction"];
          var value = props["dispatchUpdateAssessmentAction"];
          var prop = props["isOnIpadAssessmentMode"];
          var p = props["assessmentCompleted"];
          var propValue = props["selectedActivity"];
          var isFunction = props["dispatchCloseActivityAction"];
          var white = props["setIpadAssessmentModeProgress"];
          if (!this["closeButtonClicked"]) {
            if (!p) {
              isFunction(propValue);
            }
          }
          window["scoreItemCallback"] = window["getData"] = window["animationDoneCallback"] = window["toolsVideosCallback"] = window["getQuestionData"] = window["logMessage"] = window["logError"] = void 0;
          window["removeEventListener"]("resize", this["_handleResize"]);
          clearTimeout(this["timerId"]);
          meta["a"]["removeNavigationConfirmation"]();
          this["_closeSimulator"]();
          value();
          fn([]);
          val(0);
          this["changeLanguage"](this["currentLanguage"]);
          if (prop) {
            white(true);
            attr["a"]["iPadAssessmentModeEnd"]();
            window["removeEventListener"](attr["e"], this["showIpadAssessmentError"], false);
          }
        }
      }, {
        "key": "_startNewItemTimer",
        "value": function () {
          var setState = this;
          if (true !== this["state"]["showLoader"]) {
            this["setState"]({
              "showCover": true
            });
            this["timerId"] = match()(function () {
              setState["setState"]({
                "showLoader": true,
                "showCover": false
              });
            }, ACTIVITY_TIMERS["CLOSE_READING"]);
          }
        }
      }, {
        "key": "_getComponentDimensions",
        "value": function () {
          var inner = window["innerHeight"];
          var windowWidth = window["innerWidth"];
          var s = 0;
          var numbers = this["props"]["assessment"];
          if (numbers) {
            s = number(numbers["progressNumerator"] / numbers["progressDenominator"]);
          }
          return {
            "windowHeight": inner,
            "windowWidth": windowWidth,
            "percent": s
          };
        }
      }, {
        "key": "render",
        "value": function () {
          var res = this["props"];
          var last = res["assessment"];
          var children = res["cdnUrl"];
          var r = res["selectedSubject"];
          var message = res["loading"];
          var user = res["selectedActivity"];
          var work = res["gradeBand"];
          var cont = res["isCheating"];
          var intMigratorExists = res["showSurvey"];
          var args = this["state"];
          var size = args["windowWidth"];
          var parent = args["windowHeight"];
          var pageY = args["isNewItem"];
          var fail = args["showLoader"];
          var value = args["showProgress"];
          var c = null;
          if (intMigratorExists && !cont) {
            c = Object(object["c"])(whitespaceRegex, {
              "gradeBand": work,
              "onContinue": this["_onContinueSurvey"],
              "onClose": this["_onCloseSurvey"],
              "assessmentType": user["type"]
            });
          } else {
            if (last) {
              var arr = last["item"]["assessmentJSON"]["item"]["meta"]["type"];
              var xy = this["_getComponentDimensions"]();
              var SubClass = r === a["a"]["MATH"] ? "html5-math-" : "html5-reading-";
              var options = isArray()(last["item"]["assessmentJSON"]["item"], "content.workspaceArea");
              var failureMessage = options && "AnimationHtmlJs" === options["type"] ? options["type"] : "";
              var arr2 = "Tutorial" === arr && "AnimationHtmlJs" === failureMessage ? "Animation" : arr;
              var msgElm = Object(object["c"])("div", null);
              var x = this["getIframeTitle"]();
              var samples = function (b, parentClass) {
                var a = 1.5 * parentClass * 0.87;
                return {
                  "pcWidth": (a = a > b ? b - 30 : a) - 104.4,
                  "pbWidth": a,
                  "pbX": (b - a) / 2 - 40 - 15
                };
              }(size, parent);
              var sample = samples["pcWidth"];
              var x2 = samples["pbWidth"];
              var minIdx = samples["pbX"];
              switch (arr2) {
                case "Game":
                  msgElm = Object(object["c"])(openCursorAndCheck, {
                    "id": "diagnostic-gameview-container",
                    "width": ""["concat"](x2 - 50, "px"),
                    "gameId": last["item"]["assessmentJSON"]["item"]["content"]["workspaceArea"]["source"],
                    "scoreItemCallback": this["_onScoreItem"],
                    "closeItemCallback": this["_onCloseAssessment"],
                    "contentLoadedCallback": this["_contentLoadedCallback"],
                    "title": x
                  });
                  break;
                case "Animation":
                  msgElm = Object(object["c"])(serverAttrs, {
                    "id": "dignostic-animation-view-container",
                    "cdnUrl": children,
                    "width": x2 - 50,
                    "pbX": minIdx,
                    "height": this["state"]["windowHeight"] - 70,
                    "source": options["source"],
                    "contentLoadedCallback": this["_contentLoadedCallback"],
                    "title": x
                  });
                  break;
                default:
                  msgElm = Object(object["c"])(parentLogger, {
                    "id": "html5-diagnostic-container",
                    "assessmentJSON": last["item"]["assessmentJSON"],
                    "height": this["state"]["windowHeight"] - 70,
                    "interop": {
                      "scoreItemCallback": this["_onScoreItem"]
                    },
                    "contentLoadedCallback": this["_contentLoadedCallback"],
                    "subject": r,
                    "title": x,
                    "closeWhenSessionTimeout": this["_closeWhenSessionTimeout"]
                  });
              }
              c = Object(object["c"])(which["Fragment"], null, (message || fail) && Object(object["c"])(localStorage["a"], {
                "fullScreen": true
              }), Object(object["c"])(cDigit, {
                "id": "assessment-view-div",
                "className": ""["concat"](SubClass, "view"),
                "selectedSubject": r
              }, Object(object["c"])(frequency["b"], {
                "height": xy["windowHeight"] + "px"
              }, Object(object["c"])(frequency["a"], {
                "width": ""["concat"](40, "px"),
                "style": {
                  "zIndex": 2
                }
              }), Object(object["c"])(frequency["a"], {
                "width": ""["concat"](40, "px"),
                "style": {
                  "zIndex": 2,
                  "height": ""["concat"](40, "px"),
                  "right": "6px",
                  "top": "6px"
                },
                "css": funcs["f"],
                "id": "close-assessment-button",
                "aria-label": Object(m["e"])("diagnostic:CLOSE_BUTTON"),
                "role": "button",
                "tabIndex": 0,
                "onClick": this["_onCloseAssessment"],
                "onKeyUp": this["_onCloseAssessmentUsingKeyboard"],
                "onMouseUp": function (event) {
                  event["target"]["blur"]();
                }
              }, Object(object["c"])(oldconfig, {
                "id": "close-assessment-button-img",
                "src": url["a"],
                "alt": Object(m["e"])("diagnostic:CLOSE_BUTTON")
              })), Object(object["c"])(frequency["a"], {
                "width": "100%",
                "style": {
                  "zIndex": 1
                }
              }, x === Object(m["e"])("accessibility:DIAGNOSTIC_BRAIN_BREAK_TITLE") && Object(object["c"])(buffers["b"], {
                "message": x,
                "aria-live": "assertive",
                "clearOnUnmount": true
              }), msgElm, value && Object(object["c"])(core_rnotwhite, {
                "className": ""["concat"](SubClass, "progress")
              }, Object(object["c"])(firstLength, {
                "alt": Object(m["e"])("progressBar:PROGRESS_BAR"),
                "barStyles": {
                  "pcWidth": sample,
                  "pbWidth": x2,
                  "pbX": minIdx
                },
                "windowHeight": parent - 70,
                "windowWidth": size,
                "pct": xy["percent"],
                "isNewItem": pageY,
                "styleClass": SubClass,
                "language": last["item"]["language"],
                "closeButtonWidth": 40
              }))), "Game" !== arr2 && Object(object["c"])(create, {
                "color": r === a["a"]["ELA"] ? map["r"] : map["w"]
              }))));
            }
          }
          return c;
        }
      }]);
      return tobi;
    }(which["Component"]);
    var r20 = {
      "navigateToPage": expect["e"],
      "dispatchStartAssessmentAction": e["f"],
      "dispatchStopActivityAction": e["g"],
      "dispatchCloseActivityAction": e["a"],
      "dispatchCompleteTestItemAction": e["c"],
      "dispatchPauseActivityAction": e["d"],
      "dispatchUncloseActivityAction": e["h"],
      "dispatchLoadTestingQueueAction": tmp["j"],
      "dispatchUpdateTestingQueueIndexAction": tmp["s"],
      "dispatchStartCheatSimulatorAction": tmp["n"],
      "dispatchStopCheatSimulatorAction": tmp["p"],
      "dispatchUpdateStudentLocationAction": e["j"],
      "dispatchUpdateAssessmentAction": e["i"],
      "setIpadAssessmentModeProgress": Token["a"]
    };
    var otherElementRect = Object(self["connect"])(formatDate, r20)(otherElement);
    __TEST__;
    var arrayProps = Object(getName["a"])([e["g"], e["c"], e["d"], e["h"]]);
    b["c"] = function (deepDataAndEvents) {
      return Object(object["c"])(arrayProps, {
        "ignorePriorErrors": true
      }, function (args) {
        var pageX = args["loading"];
        var callback = args["error"];
        var pageY = args["dismiss"];
        return Object(object["c"])(otherElementRect, Object["assign"]({}, deepDataAndEvents, {
          "dismissError": pageY,
          "loading": pageX,
          "error": callback
        }));
      });
    };
  },
  1183: function (dataAndEvents, _meta, deepDataAndEvents) {
    _meta["a"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABlUlEQVRIDbWVsUoEMRCGbwWLK8TiROzutBcfQS2s7x0UtBQsFTxUPJ9JRAtLQRQfQMVK8A0UXL85md3sJptkvRj4yWQyM9/O3ibX6dRGnud9tIFma1vBpeSgdTTwBhOwjT6RjHu04E0wNontoTsk4wvtGtulycYO+kbmeGIRhBEjkAczEVtq7ZUELBwuiOZ5YQS5IJpbwvBsononGqizE8amQB41qGGW2lszNDREWaVFe7GK64aE4jVi9/BdozU7vOKR2kMB3VbczYsC1gKi1X4ZJJ6g2CGvMfS6zFrnSpvM7Jyau4nsKkSJiWFuSGLYWOt55yk7i4PoE/wR1g4iMEByGN9R7PggsDhn+sDemYSYE+96AOcN4oRNAVFwGJYAEoYlhDTD/gFiw/DMoTZ315j4NteV/Gbz8hkfodhRnBMS2sBG8jfRdX5+tvMiy7JDdWMfY5/pOjB3paNF9BpoqeikXjCiszdiliZ5GAPUBGuEKNQDE8iKxvlgQYgWccBsiBHcJ+ESvaAD9cfO5OyjZ3SFls28H7nXJjgHxyQdAAAAAElFTkSuQmCC";
  },
  1184: function (dataAndEvents, date, f) {
    function load(options) {
      var w = options["width"];
      var hc = options["children"];
      var style = options["style"];
      var data = Object(attributes["a"])(options, camelKey);
      return Object(o["c"])(restoreScript, Object["assign"]({
        "width": w,
        "style": style
      }, data), hc);
    }
    function init(params) {
      var fn = params["minWidth"];
      var mapHeight = params["height"];
      var param = params["children"];
      return Object(o["c"])(r20, {
        "height": mapHeight,
        "minWidth": fn
      }, param);
    }
    f["d"](date, "a", function () {
      return load;
    });
    f["d"](date, "b", function () {
      return init;
    });
    var attributes = f(916);
    var g = f(38);
    var o = f(3);
    f(0);
    var camelKey = ["width", "children", "style"];
    var restoreScript = Object(g["a"])("div", {
      "target": "erxd68e1",
      "label": "Div"
    })("width:", function (a) {
      return a["width"];
    }, ";position:relative;");
    var r20 = Object(g["a"])("div", {
      "target": "erxd68e0",
      "label": "Wrapper"
    })("width:100%;height:", function (hash) {
      return hash["height"];
    }, ";min-width:", function (dataAndEvents) {
      return dataAndEvents["minWidth"];
    }, ";:after{content:'';display:table;clear:both;}&>:first-child{float:left;}&>:nth-child(2){float:right;}&>:nth-child(3){margin:auto;}");
  },
  1185: function (dataAndEvents, _meta, deepDataAndEvents) {
    _meta["a"] = {
      "MINCOINS_FOR_GAMES": 50,
      "CREDITS_UNAVAILABLE": "--"
    };
  },
  1257: function (dataAndEvents, _meta, require) {
    function expect(num) {
      return function (ca) {
        var r20 = ca["theme"];
        var c = ca["themePath"];
        return markErr()(r20, ""["concat"](c, ".")["concat"](num));
      };
    }
    function parse(node) {
      var rawParams = node["onMouseOver"];
      var current = node["onMouseOut"];
      return Object(o["c"])("div", {
        "onMouseOver": rawParams,
        "onMouseOut": current
      }, rreturn);
    }
    function onStop(test) {
      var desc = test["isk2"];
      var initial = test["isDisabled"];
      return desc ? Object(o["c"])(g["a"], {
        "altText": "My coins",
        "component": initial ? Object(o["c"])(iterator, null) : Object(o["c"])(suiteView, null)
      }) : Object(o["c"])(g["a"], {
        "altText": "My coins",
        "component": initial ? Object(o["c"])(pdataOld, null) : Object(o["c"])(reversed, null)
      });
    }
    var modules = require(44);
    var object = require(38);
    var update = require(1069);
    var throttledUpdate = require["n"](update);
    var Block = require(20);
    var markErr = require["n"](Block);
    var o = require(3);
    var nodes = require(0);
    var meta = require(922);
    var _ = require(912);
    var b = require(1067);
    var localStorage = require(914);
    var g = require(304);
    var events = require(8);
    var mocks = require(300);
    var a = require(7);
    var funcs = require(96);
    var j = require(1185);
    var path = require(177);
    var resolved = require["n"](path);
    var m = require(63);
    var elements = require(61);
    var tests = require(923);
    var a1 = require(915);
    var attr = require(921);
    var suiteView = mocks["a"]["CoinK2"];
    var reversed = mocks["a"]["Coin38"];
    var iterator = mocks["a"]["DisabledCoinK2"];
    var pdataOld = mocks["a"]["DisabledCoin38"];
    var rreturn = j["a"]["CREDITS_UNAVAILABLE"];
    var r20 = Object(object["a"])(b["a"], {
      "target": "e24r95g1",
      "label": "NocoinsTooltip"
    })("&>div.tooltip{margin-top:10px;&>div:first-child{display:inline-block;position:relative;color:", a["l"], ";width:350px;max-width:350px;text-align:center;line-height:32px;border:1px solid ", a["l"], ";background:", a["U"], ";&::before,&::after{content:'';display:block;position:absolute;bottom:100%;width:0;height:0;border-style:solid;}&::after{right:calc(50% - 7px);border-color:transparent transparent ", a["U"], " transparent;border-width:7px;}&::before{right:calc(50% - 9px);border-color:transparent transparent ", a["l"], " transparent;border-width:9px;}&+span{display:none;}}}");
    var restoreScript = Object(object["a"])(_["a"], {
      "target": "e24r95g0",
      "label": "CoinLayout"
    })("grid-gap:", expect("gridGap"), ";font-size:", expect("fontSize"), ";font-weight:", expect("fontWeight"), ";line-height:", expect("height"), ";svg{display:block;height:", expect("height"), ";width:", expect("width"), ";}&.coins-disabled{svg,#coin-amount{cursor:pointer;}}#coin-amount{white-space:nowrap;}");
    var udataCur = elements["a"]["isIpad"]() ? tests["a"] : a1["a"];
    _meta["a"] = function (args) {
      var pageX = args["amount"];
      var value = args["isk2"];
      var proceed = void 0 !== value && value;
      var pageY = args["themePath"];
      var ArrayProto = Object(nodes["useState"])(false);
      var keys = Object(modules["a"])(ArrayProto, 2);
      var key = keys[0];
      var k = keys[1];
      var solo = Object(nodes["useMemo"])(function () {
        return throttledUpdate()(pageX);
      }, [pageX]);
      var EX = Object(nodes["useCallback"])(function () {
        return k(true);
      }, [k]);
      var connectToDomNode = Object(nodes["useCallback"])(function () {
        return k(false);
      }, [k]);
      return Object(o["c"])(restoreScript, {
        "className": resolved()({
          "coins-disabled": solo
        }),
        "type": "grid",
        "alignItems": "center",
        "gridTemplateColumns": "0fr 0fr",
        "themePath": pageY
      }, Object(o["c"])(meta["a"], {
        "id": "coin-wrapper"
      }, Object(o["c"])("div", {
        "onFocus": EX,
        "onBlur": connectToDomNode,
        "onMouseOver": EX,
        "onMouseOut": connectToDomNode,
        "onMouseUp": attr["a"],
        "tabIndex": solo ? 0 : -1,
        "css": Object(o["b"])(funcs["f"], ";display:block;;label:CoinHolder;")
      }, Object(o["c"])(onStop, {
        "isk2": proceed,
        "isDisabled": solo
      })), solo && Object(o["c"])(r20, {
        "autohide": true,
        "placement": "bottom",
        "target": "coin-wrapper",
        "isOpen": key
      }, Object(o["c"])(m["b"], {
        "message": Object(events["e"])("dashboard.header:COINS_UNAVAILABLE"),
        "aria-live": "assertive",
        "clearOnUnmount": true
      }), Object(o["c"])(udataCur, {
        "audioKey": "COINS_UNAVAILABLE",
        "autoPlay": true,
        "autoPlayHistory": false
      }, Object(o["c"])(localStorage["a"], {
        "className": "header_11"
      }, Object(events["e"])("dashboard.header:COINS_UNAVAILABLE"))))), Object(o["c"])(meta["a"], null, Object(o["c"])(localStorage["a"], {
        "id": "coin-amount",
        "color": solo ? a["A"] : a["p"],
        "fontFamily": solo ? "Roboto Medium" : "Roboto"
      }, solo ? Object(o["c"])(parse, {
        "onMouseOver": EX,
        "onMouseOut": connectToDomNode
      }) : pageX)));
    };
  },
  1259: function (dataAndEvents, _meta, require) {
    var modules = require(38);
    var o = require(3);
    var Block = require(0);
    var meta = require(1012);
    var g = require(1011);
    var r20 = require(300)["a"]["InterstitialBg"];
    var restoreScript = Object(modules["a"])(r20, {
      "target": "enrdo2h3",
      "label": "StyledBackgroundImage"
    })("#Background g{mix-blend-mode:", function (dataAndEvents) {
      return dataAndEvents["isSad"] ? "inherit !important" : "multiply";
    }, ";}");
    var udataCur = Object(modules["a"])(g["a"], {
      "target": "enrdo2h2",
      "label": "StyledBuddyContainer"
    })({
      "name": "1oh3b2v",
      "styles": "bottom:0;height:364px;position:absolute;width:364px;z-index:1"
    });
    var rreturn = Object(modules["a"])("div", {
      "target": "enrdo2h1",
      "label": "BuddyImageWrapper"
    })("background-color:#b1d0fc;display:flex;height:364px;justify-content:center;margin-bottom:", function (m) {
      return m["caption"] ? 0 : "10px";
    }, ";position:relative;>svg{position:absolute;width:490px;z-index:0;}");
    var pdataOld = Object(modules["a"])("div", {
      "target": "enrdo2h0",
      "label": "CaptionWrapper"
    })({
      "name": "30tvht",
      "styles": "margin-bottom:60px"
    });
    _meta["a"] = function (m) {
      m["caption"];
      var my = m["cdnPath"];
      var a = m["components"];
      var adown = void 0 === a ? {} : a;
      var formula = m["isk2"];
      var how = m["isPassingScore"];
      var value = m["lessonActivity"];
      var av = m["selectedSubject"];
      var attrNames = value && "COMPLETED" === value["status"];
      return Object(o["c"])(Block["Fragment"], null, formula ? Object(o["c"])(rreturn, {
        "caption": adown["Caption"]
      }, attrNames && Object(o["c"])(restoreScript, {
        "isSad": attrNames && !how
      }), Object(o["c"])(udataCur, {
        "isSad": attrNames && !how
      })) : Object(o["c"])(meta["a"], {
        "activity": value,
        "cdnPath": my,
        "isk2": formula,
        "selectedSubject": av,
        "style": {
          "height": 342,
          "marginBottom": adown["Caption"] ? 0 : 30,
          "width": "100%"
        },
        "imageSize": "large",
        "ariaHidden": true
      }), adown["Caption"] && Object(o["c"])(pdataOld, null, adown["Caption"]));
    };
  },
  1370: function (dataAndEvents, _meta, jQuery) {
    var o = jQuery(3);
    var self = jQuery(89);
    var j = jQuery(911);
    var html = jQuery(1218);
    var m = jQuery["n"](html);
    var r20 = {
      "onJQueryLoad": jQuery(998)["n"]
    };
    _meta["a"] = Object(self["connect"])(function (exported) {
      return {
        "settings": Object(j["e"])(exported)
      };
    }, r20)(function (params) {
      var rawPhoto = params["settings"]["CDN_DOMAIN_URL"];
      var fn = params["onError"];
      var param = params["onJQueryLoad"];
      return Object(o["c"])(m["a"], {
        "url": ""["concat"](rawPhoto, "/client/js/jquery-1.7.1.min.js"),
        "onError": fn,
        "onLoad": param
      });
    });
  },
  1385: function (dataAndEvents, _meta, jQuery) {
    function show(obj, string) {
      var array = Object(html["useRef"])(string);
      Object(html["useEffect"])(function () {
        array["current"] = obj;
      });
      return array["current"];
    }
    function create(n) {
      var ret;
      if (n) {
        n = n["toUpperCase"]();
        ret = Raphael()(all["a"]["find"](function (done) {
          return done["id"] === n;
        }), "displayName");
      }
      return ret || "";
    }
    function render(rows) {
      var escape = rows["setCredits"];
      var isUndefined = rows["setProgress"];
      var map = rows["student"];
      var row = rows["useAlternateInstructionContent"];
      var r = rows["isSwitchedUser"];
      var value = rows["lessonActivity"];
      var _ref = rows["settings"];
      var collapse = rows["navigateToPage"];
      var byIdRaw = rows["dispatchCompleteLessonComponent"];
      var valuesFn = rows["dispatchStartLessonComponentAction"];
      var callback = rows["dispatchPauseLessonComponentAction"];
      var fn = rows["dispatchResumeLessonComponentAction"];
      var y = rows["dispatchSetClosedCaptionPreferenceAction"];
      var comparator = rows["dispatchLoadStateAction"];
      var cb = rows["dispatchSaveStateAction"];
      var innerEquiv = rows["dispatchDeleteStateAction"];
      var firstLine = rows["iframeid"];
      var target = rows["loaded"];
      var tr = rows["ccEnabled"];
      var _args = Object(html["useState"])(function () {
        return document["getElementById"](firstLine);
      });
      var args = Object(object["a"])(_args, 2);
      var el = args[0];
      var next = args[1];
      var res = show(el, el);
      if (res) {
        if (el !== res) {
          j["e"]["error"]("This component does not support iframe switching.");
        }
      }
      Object(html["useEffect"])(function () {
        next(document["getElementById"](firstLine));
      }, [firstLine]);
      var a = insert["c"]["getCurrentLessonComponentActivity"](value);
      var delegateEventSplitter = Object(html["useState"])();
      var match = Object(object["a"])(delegateEventSplitter, 2);
      var src = match[0];
      var check = match[1];
      if (el) {
        if (!src) {
          (src = Object(obj["z"])(el, new URL(el["src"])))["addCommandProcessor"](obj["n"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      Object(map["g"])(tabCtrl["payload"], ""["concat"](map["m"], " [LESSON.ERROR]"));
                    case 1:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          check(src);
        }
      }
      var targets = show(target, false);
      if (target) {
        if (!targets) {
          if (src) {
            src["loaderCompleted"]();
          }
        }
      }
      Object(html["useEffect"])(function () {
        return function () {
          if (src) {
            src["close"]();
          }
        };
      }, [src]);
      Object(html["useMemo"])(function () {
        if (src) {
          src["addCommandProcessor"](obj["i"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      return node["abrupt"]("return", {
                        "id": value["id"],
                        "previouslyFailed": !!value["previouslyFailedActivityId"]
                      });
                    case 1:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [src, value]);
      Object(html["useMemo"])(function () {
        if (src) {
          src["addCommandProcessor"](obj["r"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      return node["abrupt"]("return", {
                        "ccEnabled": tr
                      });
                    case 1:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [src, tr]);
      Object(html["useMemo"])(function () {
        if (src) {
          src["addCommandProcessor"](obj["j"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              var message;
              var timeout;
              var from;
              var val;
              var label;
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      message = _ref["DC_API_ENDPOINT"];
                      timeout = _ref["DC_DELAY_RETRIES"];
                      from = _ref["DC_MAX_RETRIES"];
                      val = _ref["DC_SERVICE_ENABLED"];
                      label = message && message["startsWith"]("/") ? window["location"]["origin"] + message : message;
                      return node["abrupt"]("return", {
                        "serviceEnabled": val,
                        "endpoint": label,
                        "retries": {
                          "max": from,
                          "delay": timeout
                        }
                      });
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [src, _ref]);
      Object(html["useMemo"])(function () {
        if (src) {
          src["addCommandProcessor"](obj["k"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      return node["abrupt"]("return", Object(controls["a"])({
                        "reviewMode": false,
                        "previewMode": false
                      }, r ? {
                        "superUser": true
                      } : {}));
                    case 1:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [r, src]);
      Object(html["useMemo"])(function () {
        if (src) {
          src["addCommandProcessor"](obj["o"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      Object(map["g"])(tabCtrl["payload"], ""["concat"](map["m"], " [LESSON.FATAL]"));
                      collapse(Object(o["b"])(o["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", o["a"]["ERROR_GENERIC"]));
                    case 2:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["w"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              var suiteView;
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      suiteView = tabCtrl["payload"];
                      isUndefined(suiteView);
                    case 2:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["v"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(attrs) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      escape(attrs["payload"]);
                    case 1:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [collapse, isUndefined, escape, src]);
      Object(html["useMemo"])(function () {
        if (src) {
          src["addCommandProcessor"](obj["m"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              var desc;
              var nameSuffix;
              var item;
              var firstName;
              var lastName;
              var i;
              var val;
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      desc = map && map["gradeLevelData"] && map["gradeLevelData"]["chronologicalGradeLevel"] && map["gradeLevelData"]["chronologicalGradeLevel"] ? map["gradeLevelData"]["chronologicalGradeLevel"]["id"] : "";
                      nameSuffix = map && map["primarySchoolEnrollment"] && map["primarySchoolEnrollment"]["school"] && map["primarySchoolEnrollment"]["school"]["name"] ? map["primarySchoolEnrollment"]["school"]["name"] : "";
                      item = map["id"];
                      firstName = map["firstName"];
                      lastName = map["lastName"];
                      i = map["stateId"];
                      val = map["dateOfBirth"];
                      return node["abrupt"]("return", {
                        "id": item,
                        "firstName": firstName || "",
                        "lastName": lastName || "",
                        "stateId": i || "",
                        "stateName": create(i),
                        "grade": desc,
                        "dateOfBirth": val || "",
                        "school": nameSuffix,
                        "useAlternateInstructionContent": row
                      });
                    case 4:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [src, map, row]);
      Object(html["useMemo"])(function () {
        if (a && src) {
          var scrollIntervalId;
          function complete() {
            return clearInterval(scrollIntervalId);
          }
          function onLoad() {
            return "Are you sure you want to leave?";
          }
          function render(recurring) {
            var next = a["id"];
            var r20 = Object(block["b"])(args["a"]["COMPONENT_PAUSE"]({
              "componentStatusId": a["id"]
            }));
            if (recurring) {
              complete();
              scrollIntervalId = setInterval(map["c"], 6E4 * _ref["SESSION_KEEP_ALIVE_INTERVAL"]);
              window["onbeforeunload"] = onLoad;
              window["onunload"] = function () {
                return Object(img["e"])(next, r20);
              };
            } else {
              window["onbeforeunload"] = null;
              window["onunload"] = null;
              complete();
            }
          }
          var iterator = Raphael()(value, "lesson.name");
          var mArr = Raphael()(value, "lesson.channel");
          var isFunction = Raphael()(value, "status");
          var initial = "BASAL_PRACTICE" === mArr;
          src["addCommandProcessor"](obj["s"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      node["next"] = 2;
                      return y(tabCtrl["payload"]);
                    case 2:
                      return node["abrupt"]("return", node["sent"]);
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["l"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      node["next"] = 2;
                      return comparator(a["id"]);
                    case 2:
                      return node["abrupt"]("return", node["sent"]);
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["u"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(attrs) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      node["next"] = 2;
                      return cb({
                        "componentStatusId": a["id"],
                        "value": attrs["payload"]
                      });
                    case 2:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["h"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      node["next"] = 2;
                      return innerEquiv(a["id"]);
                    case 2:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["x"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      render(true);
                      node["next"] = 3;
                      return valuesFn({
                        "componentStatusId": a["id"]
                      });
                    case 3:
                      if (iterator) {
                        self["g"]["trackEvent"]({
                          "category": initial ? ""["concat"](self["c"]["PRACTICE"], " - ")["concat"](iterator) : ""["concat"](self["c"]["HTML5_LESSON"], " - ")["concat"](iterator),
                          "action": "NOT_STARTED" === isFunction ? self["b"]["ACTIVITY_STARTED"] : self["b"]["ACTIVITY_RESUMED"]
                        });
                      }
                      ;
                    case 4:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["q"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      render(false);
                      node["next"] = 3;
                      return callback(a["id"]);
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["t"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      render(true);
                      node["next"] = 3;
                      return fn(a["id"]);
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["a"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function init(allBindingsAccessor) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      render(false);
                      node["next"] = 3;
                      return callback(a["id"]);
                    case 3:
                      if (iterator) {
                        self["g"]["trackEvent"]({
                          "category": initial ? ""["concat"](self["c"]["PRACTICE"], " - ")["concat"](iterator) : ""["concat"](self["c"]["HTML5_LESSON"], " - ")["concat"](iterator),
                          "action": self["b"]["ACTIVITY_PAUSED"]
                        });
                      }
                      collapse(Object(o["b"])(o["a"]["STUDENT_DASHBOARD_HOME"]));
                    case 5:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, init);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          src["addCommandProcessor"](obj["e"], function () {
            var f = Object(attributes["a"])(options["a"]["mark"](function init(data) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      render(false);
                      node["next"] = 3;
                      return byIdRaw({
                        "componentStatusId": a["id"],
                        "instructionLessonOutcome": null != data["payload"] ? {
                          "score": data["payload"]
                        } : null
                      });
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, init);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          return function () {
            return render(false);
          };
        }
      }, [src, a, _ref["SESSION_KEEP_ALIVE_INTERVAL"], value, collapse, byIdRaw, valuesFn, callback, fn, comparator, cb, innerEquiv, y]);
      return null;
    }
    function Keyboard(defaults) {
      return {
        "student": Object(c["o"])(defaults),
        "settings": Object(c["e"])(defaults),
        "lessonActivity": Object(tmp["e"])(defaults),
        "isSwitchedUser": Object(c["h"])(defaults),
        "useAlternateInstructionContent": Object(c["a"])(defaults),
        "ccEnabled": Object(tmp["b"])(defaults)
      };
    }
    var controls = jQuery(4);
    var attributes = jQuery(26);
    var object = jQuery(44);
    var targets = jQuery(20);
    var Raphael = jQuery["n"](targets);
    var button = jQuery(10);
    var options = jQuery["n"](button);
    var obj = jQuery(1149);
    var data = jQuery(998);
    var args = jQuery(89);
    var tmp = jQuery(996);
    var html = jQuery(0);
    var m = jQuery["n"](html);
    var all = jQuery(1047);
    var $links = jQuery(231);
    var insert = jQuery(1015);
    var o = jQuery(97);
    var map = jQuery(1021);
    var img = jQuery(1332);
    var block = jQuery(948);
    var scripts = jQuery(134);
    var src = jQuery(178);
    var self = jQuery(926);
    var c = jQuery(911);
    var j = jQuery(9);
    var r20 = {
      "navigateToPage": src["e"],
      "dispatchCompleteLessonComponent": data["c"],
      "dispatchStartLessonComponentAction": data["o"],
      "dispatchPauseLessonComponentAction": data["h"],
      "dispatchResumeLessonComponentAction": data["j"],
      "dispatchSetClosedCaptionPreferenceAction": data["l"],
      "dispatchLoadStateAction": data["g"],
      "dispatchSaveStateAction": data["k"],
      "dispatchDeleteStateAction": data["d"]
    };
    var tpls = Object(args["connect"])(Keyboard, r20)(render);
    _meta["a"] = function (deepDataAndEvents) {
      return m["a"]["createElement"](tpls, deepDataAndEvents);
    };
    __TEST__;
  },
  1631: function (dataAndEvents, deepDataAndEvents) {},
  1649: function (dataAndEvents, _meta, require) {
    (function (dataAndEvents) {
      function $(state) {
        return {
          "settings": Object(o["e"])(state),
          "lessonActivity": Object(events["e"])(state),
          "selectedSubject": Object(object["b"])(state),
          "simulatingSnargg2": Object(b["d"])(state)
        };
      }
      var attributes = require(31);
      var g = require(32);
      var _ = require(80);
      var meta = require(68);
      var attr = require(60);
      var nodes = require(20);
      var write = require["n"](nodes);
      var helper = require(0);
      var base64 = require(3);
      var localStorage = require(971);
      var inspect = require(89);
      var mocks = require(913);
      var j = require(301);
      var o = require(911);
      var expect = require(178);
      var elements = require(950);
      var modules = require(97);
      var events = require(996);
      var funcs = require(998);
      var object = require(917);
      var args = require(134);
      var Block = require(1370);
      var b = require(1005);
      var tests = require(1385);
      var a1 = require(69);
      var a = require(939);
      var conf = require(8);
      var d = require(926);
      var result = {
        "name": "1i22fuh-IFRAMESTYLE",
        "styles": "position:fixed;width:100%;height:100%;border:none;display:block;background-color:white;label:IFRAMESTYLE;"
      };
      var pageId = "closereading_lesson";
      var key = function (deepDataAndEvents) {
        function init() {
          var promise;
          Object(attributes["a"])(this, init);
          var length = arguments["length"];
          var rv = new Array(length);
          var i = 0;
          for (; i < length; i++) {
            rv[i] = arguments[i];
          }
          (promise = options["call"]["apply"](options, [this]["concat"](rv)))["state"] = {
            "showLoader": true
          };
          promise["progress"] = -1;
          promise["progressTimeout"] = void 0;
          promise["loadError"] = function () {
            var $cookies = promise["props"];
            var throttledUpdate = $cookies["navigateToPage"];
            var value = $cookies["lessonActivity"];
            var visible_keys = write()(value, "lesson.id");
            Object(args["g"])("HTML5 close reading lesson load error, lesson = ["["concat"](visible_keys, "]"), args["m"]);
            throttledUpdate(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
          };
          return promise;
        }
        Object(_["a"])(init, deepDataAndEvents);
        var options = function (key) {
          function isEmpty() {
            if ("undefined" === typeof Reflect || !Reflect["construct"]) {
              return false;
            }
            if (Reflect["construct"]["sham"]) {
              return false;
            }
            if ("function" === typeof Proxy) {
              return true;
            }
            try {
              Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
              return true;
            } catch (_0x3d80b1) {
              return false;
            }
          }
          return function () {
            var parsed;
            var camelKey = Object(attr["a"])(key);
            if (isEmpty()) {
              var scripts = Object(attr["a"])(this)["constructor"];
              parsed = Reflect["construct"](camelKey, arguments, scripts);
            } else {
              parsed = camelKey["apply"](this, arguments);
            }
            return Object(meta["a"])(this, parsed);
          };
        }(init);
        Object(g["a"])(init, [{
          "key": "componentDidMount",
          "value": function () {
            this["addCloseReadingBridgeMethods"]();
          }
        }, {
          "key": "UNSAFE_componentWillReceiveProps",
          "value": function (def) {
            var name = def["lessonActivity"];
            var lessonActivity = this["props"]["lessonActivity"];
            var filename = write()(name, "status");
            var res = write()(name, "lesson.name");
            if (null === lessonActivity) {
              if (name) {
                d["g"]["trackEvent"]({
                  "category": ""["concat"](d["c"]["CR"], " - ")["concat"](res),
                  "action": "NOT_STARTED" === filename ? d["b"]["ACTIVITY_STARTED"] : d["b"]["ACTIVITY_RESUMED"]
                });
              }
            }
          }
        }, {
          "key": "componentWillUnmount",
          "value": function () {
            var r20 = this["props"]["selectedSubject"];
            localStorage["a"]["removeContextKeys"](r20);
            this["removeCloseReadingBridgeMethods"]();
            clearTimeout(this["progressTimeout"]);
          }
        }, {
          "key": "checkProgress",
          "value": function (thisValue) {
            var loadError = this;
            var backoff = this["props"]["settings"]["LEARNING_TREE_TIMEOUT_MILLIS"];
            if (this["progress"] !== thisValue) {
              clearTimeout(this["progressTimeout"]);
            }
            if (!this["progressTimeout"]) {
              this["progressTimeout"] = setTimeout(function () {
                loadError["loadError"]();
              }, backoff);
            }
            this["progress"] = thisValue;
            if (thisValue >= 100) {
              this["loadCompleted"]();
            }
          }
        }, {
          "key": "loadCompleted",
          "value": function () {
            clearTimeout(this["progressTimeout"]);
            this["setState"]({
              "showLoader": false
            });
          }
        }, {
          "key": "addCloseReadingBridgeMethods",
          "value": function () {
            var collection = this;
            var isUndefined = this["props"]["navigateToPage"];
            window["childPreloadProgress"] = function (resp) {
              collection["checkProgress"](resp);
            };
            window["lessonBridge"] = {
              "start": function () {},
              "pause": function () {},
              "resume": function () {},
              "close": function () {
                var key = collection["props"]["lessonActivity"];
                var camelKey = write()(key, "lesson.name");
                if (camelKey) {
                  d["g"]["trackEvent"]({
                    "category": ""["concat"](d["c"]["CR"], " - ")["concat"](camelKey),
                    "action": d["b"]["ACTIVITY_PAUSED"]
                  });
                }
                isUndefined(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
              },
              "complete": function (res) {
                var suiteView = Object(modules["b"])(modules["a"]["STUDENT_LESSON_COMPLETED"])["replace"](":isPassingScore/:score?", res["toString"]());
                isUndefined(suiteView);
              },
              "fatal": function () {
                collection["loadError"]();
              }
            };
            dataAndEvents["autoPlayCallback"] = function (dataAndEvents) {};
          }
        }, {
          "key": "removeCloseReadingBridgeMethods",
          "value": function () {
            window["childPreloadProgress"] = window["lessonBridge"] = void 0;
          }
        }, {
          "key": "getLessonSourceURL",
          "value": function (shim) {
            var data;
            var listener = this["props"];
            var args = listener["settings"];
            var pageY = args["CR_INSTRUCTION_URL"];
            var pageX = args["CR_INSTRUCTION_BASE"];
            var fn = listener["simulatingSnargg2"];
            var pathConfig = shim["id"];
            if (pathConfig) {
              var action = write()(shim, "lessonComponent.contentFileName");
              data = fn ? ""["concat"](pageY)["concat"](a1["a"]["SNAPPY_URL"], "?cr=true&csid=")["concat"](pathConfig)["concat"](action) : ""["concat"](pageY)["concat"](pageX, "/?csid=")["concat"](pathConfig)["concat"](action);
            }
            return data;
          }
        }, {
          "key": "render",
          "value": function () {
            var args = this;
            var res = this["props"];
            var tokens = res["settings"];
            var ns = tokens["LEARNING_TREE_TIMEOUT_MILLIS"];
            var token = tokens["LEARNING_TREE_LESSON_NUM_RETRIES"];
            var value = res["lessonActivity"];
            var type = res["loading"];
            var r = res["selectedSubject"];
            var fx = this["state"]["showLoader"];
            var visible_keys = write()(value, "componentActivities");
            var srcTerminal = visible_keys && this["getLessonSourceURL"](write()(visible_keys, "[0]"));
            var MSG_CLOSURE_CUSTOM_COLOR_BUTTON = ""["concat"](Object(conf["e"])("dashboard:"["concat"](a["b"][r]["toUpperCase"](), "_SUBJECT_NAME")), " ")["concat"](Object(conf["e"])("activity:CLOSE_READING"), ", ")["concat"](Object(conf["e"])("dashboard:I_READY_TITLE"));
            return Object(base64["c"])("div", null, (type || fx) && Object(base64["c"])(j["a"], {
              "fullScreen": true
            }), srcTerminal && Object(base64["c"])("div", null, Object(base64["c"])(Block["a"], {
              "onError": this["loadError"]
            }), Object(base64["c"])(elements["a"], {
              "title": MSG_CLOSURE_CUSTOM_COLOR_BUTTON,
              "id": pageId,
              "src": srcTerminal,
              "css": result,
              "timeout": ns,
              "retry": token,
              "loadCheckAttribute": "preloader",
              "loadErrorCallback": this["loadError"],
              "loadCompleteCallback": function () {
                args["checkProgress"](-1);
              }
            }), Object(base64["c"])(tests["a"], {
              "iframeid": pageId,
              "loaded": !this["state"]["showLoader"],
              "setCredits": function () {},
              "setProgress": function (message) {
                return args["checkProgress"](message);
              }
            })));
          }
        }]);
        return init;
      }(helper["Component"]);
      var r20 = {
        "navigateToPage": expect["e"]
      };
      var camelKey = Object(inspect["connect"])($, r20)(key);
      __TEST__;
      var restoreScript = Object(mocks["a"])([funcs["f"]]);
      _meta["a"] = function (deepDataAndEvents) {
        return Object(base64["c"])(restoreScript, {
          "onMount": funcs["f"]
        }, function (res) {
          var last = res["loading"];
          return Object(base64["c"])(camelKey, Object["assign"]({}, deepDataAndEvents, {
            "loading": last
          }));
        });
      };
    })["call"](this, require(90));
  },
  1663: function (dataAndEvents, work, require) {
    function _formatUnit() {
      var att = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return att["replace"](/<\/?[^>]+(>|$)/g, "");
    }
    function success(options) {
      var key = options["children"];
      var theClass = options["className"];
      var hc = options["opts"];
      var camelKey = function (o) {
        var prop = function (res) {
          var dots = [];
          var i = 0;
          for (; i < res["length"]; i++) {
            var stat = res[i];
            if ("<" === stat) {
              dots["push"](i);
            }
            if (">" === stat) {
              if (dots["length"] > 0) {
                dots["pop"]();
              }
            }
          }
          return dots;
        }(o);
        var stack = o["split"]("");
        prop["forEach"](function (offset) {
          return stack[offset] = "&lt;";
        });
        return stack["join"]("");
      }(key);
      return meta["a"]["createElement"]("span", {
        "className": compiled()(theClass)
      }, hideLoadMask()(camelKey, hc));
    }
    function Keyboard(defaults) {
      return {
        "cdnPath": Object(p["c"])(defaults),
        "gradeBand": Object(p["f"])(defaults),
        "student": Object(p["o"])(defaults),
        "settings": Object(p["e"])(defaults),
        "lessonActivity": Object(o["e"])(defaults),
        "lessonLoadingProgress": Object(o["g"])(defaults),
        "lessonCreditsData": Object(o["f"])(defaults),
        "isLessonResumedFromPause": Object(o["c"])(defaults),
        "selectedSubject": Object(args["b"])(defaults),
        "selectedActivityType": Object(tags["d"])(defaults),
        "isPractice": Object(o["d"])(defaults),
        "simulatingSnargg2": Object(m["d"])(defaults)
      };
    }
    function isObject(arg) {
      return Object(object["c"])(newMillis, {
        "onMount": map["f"]
      }, function (res) {
        var last = res["loading"];
        return Object(object["c"])(otherElementRect, Object["assign"]({}, arg, {
          "loading": last
        }));
      });
    }
    function getType(sequence) {
      return {
        "assessment": Object(m["e"])(sequence),
        "selectedSubject": Object(args["b"])(sequence)
      };
    }
    function update(options) {
      return meta["a"]["createElement"](camelKey, {
        "onMount": t["m"],
        "ignorePriorErrors": true
      }, function (args) {
        var pageX = args["loading"];
        var callback = args["error"];
        var pageY = args["dismiss"];
        return meta["a"]["createElement"](typePattern, Object["assign"]({
          "error": callback
        }, options, {
          "dismissError": pageY,
          "loading": pageX
        }));
      });
    }
    function formatDate(millis) {
      return {
        "settings": Object(p["e"])(millis),
        "ismActivity": Object(tags["a"])(millis),
        "selectedSubject": Object(args["b"])(millis)
      };
    }
    function show(obj, string) {
      var array = Object(plugin["useRef"])(string);
      Object(plugin["useEffect"])(function () {
        array["current"] = obj;
      });
      return array["current"];
    }
    function init(options) {
      var text = options["asrActivity"];
      var hc = options["settings"];
      var $transition = options["navigateToPage"];
      var cb = options["dispatchStartAction"];
      var y = options["dispatchCompleteAction"];
      var value = options["iframeid"];
      var target = options["loaded"];
      var _args = Object(plugin["useState"])(function () {
        return document["getElementById"](value);
      });
      var args = Object(attributes["a"])(_args, 2);
      var el = args[0];
      var callback = args[1];
      var res = show(el, el);
      if (res) {
        if (el !== res) {
          expect["e"]["error"]("This component does not support iframe switching.");
        }
      }
      Object(plugin["useEffect"])(function () {
        callback(document["getElementById"](value));
      }, [value]);
      var cacheKey = Object(plugin["useState"])();
      var cached = Object(attributes["a"])(cacheKey, 2);
      var memory = cached[0];
      var fire = cached[1];
      if (el) {
        if (!memory) {
          (memory = Object(data["z"])(el, new URL(el["src"])))["addCommandProcessor"](data["n"], function () {
            var f = Object(_["a"])(options["a"]["mark"](function init(params) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      Object(c["g"])(params["payload"], ""["concat"](c["m"], " [ASR.ERROR]"));
                    case 1:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, init);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          fire(memory);
        }
      }
      var targets = show(target, false);
      if (target) {
        if (!targets) {
          if (memory) {
            memory["loaderCompleted"]();
          }
        }
      }
      Object(plugin["useEffect"])(function () {
        return function () {
          if (memory) {
            memory["close"]();
          }
        };
      }, [memory]);
      Object(plugin["useMemo"])(function () {
        if (memory) {
          memory["addCommandProcessor"](data["o"], function () {
            var f = Object(_["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      Object(c["g"])(tabCtrl["payload"], ""["concat"](c["m"], " [ASR.FATAL]"));
                      $transition(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
                    case 2:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
        }
      }, [$transition, memory]);
      Object(plugin["useMemo"])(function () {
        if (text && memory) {
          var scrollIntervalId;
          var code = callback()(text, "id");
          function getTime() {
            return clearInterval(scrollIntervalId);
          }
          function onLoad() {
            return "Are you sure you want to leave?";
          }
          function add(recurring) {
            if (recurring) {
              getTime();
              scrollIntervalId = setInterval(base64["c"], 6E4 * hc["SESSION_KEEP_ALIVE_INTERVAL"]);
              window["onbeforeunload"] = onLoad;
            } else {
              window["onbeforeunload"] = null;
              window["onunload"] = null;
              getTime();
            }
          }
          memory["addCommandProcessor"](data["y"], function () {
            var f = Object(_["a"])(options["a"]["mark"](function link(tabCtrl) {
              var v;
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      add(true);
                      node["next"] = 3;
                      return cb({
                        "activityId": code
                      });
                    case 3:
                      v = node["sent"];
                      return node["abrupt"]("return", v);
                    case 5:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          memory["addCommandProcessor"](data["g"], function () {
            var f = Object(_["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      add(false);
                      node["next"] = 3;
                      return y({
                        "activityId": code
                      });
                    case 3:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          memory["addCommandProcessor"](data["d"], function () {
            var f = Object(_["a"])(options["a"]["mark"](function link(tabCtrl) {
              return options["a"]["wrap"](function (node) {
                for (;;) {
                  switch (node["prev"] = node["next"]) {
                    case 0:
                      add(false);
                      $transition(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
                    case 2:
                      ;
                    case "end":
                      return node["stop"]();
                  }
                }
              }, link);
            }));
            return function (dataAndEvents) {
              return f["apply"](this, arguments);
            };
          }());
          return function () {
            return add(false);
          };
        }
      }, [memory, hc["SESSION_KEEP_ALIVE_INTERVAL"], text, $transition, cb, y]);
      return null;
    }
    function buildNode(exported) {
      return {
        "settings": Object(p["e"])(exported),
        "asrActivity": Object(tags["a"])(exported)
      };
    }
    function insertBefore(opt_obj2) {
      return meta["a"]["createElement"](setup, opt_obj2);
    }
    function $(state) {
      return {
        "cdnPath": Object(p["c"])(state),
        "settings": Object(p["e"])(state),
        "selectedActivity": Object(tags["a"])(state),
        "selectedSubject": Object(args["b"])(state)
      };
    }
    function compileNode(o) {
      return {
        "activity": Object(tags["a"])(o),
        "testingQueue": Object(m["f"])(o),
        "isCheating": Object(m["b"])(o)
      };
    }
    require["r"](work);
    var plugin = require(0);
    var meta = require["n"](plugin);
    var events = require(31);
    var elements = require(32);
    var attr = require(80);
    var Block = require(68);
    var tests = require(60);
    var path = require(139);
    var pop = require["n"](path);
    var names = require(20);
    var callback = require["n"](names);
    var nodes = require(69);
    var options = require(38);
    var selector = require(954);
    var elem = require["n"](selector);
    var which = require(1174);
    var ch = require["n"](which);
    var html = require(966);
    var isFunction = require["n"](html);
    var object = require(3);
    var inspect = require(89);
    var selfClosing = require(913);
    var getActual = require(301);
    var args = require(917);
    var o = require(996);
    var tags = require(931);
    var p = require(911);
    var conf = require(178);
    var map = require(998);
    var rep = require(1015);
    var assert = require(4);
    var localStorage = require(950);
    var modules = require(97);
    var c = require(134);
    var extensions = require(8);
    var getName = require(1370);
    var key = "html5Iframe";
    var value = {
      "name": "157xkid-iframeViewHide",
      "styles": "position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#000;min-height:600px;overflow:auto;z-index:-999;label:iframeViewHide;"
    };
    var json = {
      "name": "1kp59jx-iframeView",
      "styles": "position:absolute;top:0px;left:0px;z-index:1;width:100%;height:100%;background-color:#000;min-height:600px;overflow:hidden;label:iframeView;"
    };
    var event = function (deepDataAndEvents) {
      function clone() {
        var timeout;
        Object(events["a"])(this, clone);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (timeout = later["call"]["apply"](later, [this]["concat"](rv)))["progressTimeout"] = void 0;
        timeout["checkProgress"] = function (length) {
          var index = timeout["props"];
          var backoff = index["settings"]["LEARNING_TREE_TIMEOUT_MILLIS"];
          var pos = index["lessonLoadingProgress"];
          if (pos !== length) {
            if (timeout["progressTimeout"]) {
              clearTimeout(timeout["progressTimeout"]);
            }
            timeout["progressTimeout"] = null;
          }
          if (!timeout["progressTimeout"]) {
            if (pos < 100) {
              timeout["progressTimeout"] = setTimeout(timeout["loadError"], backoff);
            }
          }
          if (length >= 100) {
            if (timeout["progressTimeout"]) {
              clearTimeout(timeout["progressTimeout"]);
            }
            timeout["progressTimeout"] = null;
          }
        };
        timeout["loadError"] = function () {
          var throttledUpdate = timeout["props"]["navigateToPage"];
          Object(c["g"])("HTML5 lesson iframe load error, loaded "["concat"](timeout["props"]["lessonLoadingProgress"], "%"), c["m"]);
          throttledUpdate(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        timeout["loadComplete"] = function () {
          timeout["checkProgress"](-1);
          var el = document["querySelector"]("iframe");
          if (el) {
            var dom = el["contentWindow"];
            if (dom) {
              var dots = [];
              var getActual = dom["fetch"];
              dom["fetch"] = function (obj) {
                var args = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (obj && obj["toString"]()["endsWith"]("/instruction-data-capture/student/dispatch") && "include" !== args["credentials"]) {
                  var _0x47e215 = performance["now"]();
                  var index = dots["length"] ? {
                    "X-Prior-Request-Timing": ""["concat"](dots["shift"](), " ms")
                  } : {};
                  args["credentials"] = "include";
                  args["headers"] = Object(assert["a"])(Object(assert["a"])({}, args["headers"] || {}), index);
                  return getActual(obj, args)["finally"](function () {
                    return dots["push"](Math["ceil"](performance["now"]() - _0x47e215));
                  });
                }
                return getActual(obj, args);
              };
            }
          }
        };
        return timeout;
      }
      Object(attr["a"])(clone, deepDataAndEvents);
      var later = function (dest) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x358ecd) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(tests["a"])(dest);
          if (isEmpty()) {
            var scripts = Object(tests["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(Block["a"])(this, parsed);
        };
      }(clone);
      Object(elements["a"])(clone, [{
        "key": "UNSAFE_componentWillReceiveProps",
        "value": function (thisValue) {
          if (thisValue["lessonLoadingProgress"] !== this["props"]["lessonLoadingProgress"]) {
            this["checkProgress"](thisValue["lessonLoadingProgress"]);
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          if (this["progressTimeout"]) {
            clearTimeout(this["progressTimeout"]);
          }
        }
      }, {
        "key": "getLessonUrl",
        "value": function (newValue) {
          var args = this["props"];
          var settings = args["settings"];
          var spaces = settings["LEARNING_TREE_INSTRUCTION_URL"];
          var current = settings["PHOENIX_LESSONS_VERSION"];
          var ret = settings["INSTRUCTION_MATH_VERSION"];
          var s = settings["INSTRUCTION_READING_VERSION"];
          var curr = settings["INSTRUCTION_READING_COMPREHENSION_VERSION"];
          var o = settings["INSTRUCTION_VOCAB_VERSION"];
          var pageY = args["simulatingSnargg2"];
          var d = "";
          var result = newValue["componentActivities"];
          if (result && result["length"] > 0) {
            var percent = rep["c"]["getCurrentLessonComponentActivity"](newValue);
            if (newValue && percent) {
              var last;
              var pathConfig = callback()(percent, "id");
              var progress = callback()(percent, "lessonComponent");
              var evt = callback()(progress, "componentType");
              var location = callback()(progress, "contentDir");
              var prog = callback()(progress, "contentFileName");
              switch (callback()(location["split"]("/"), "[2]", "reading")) {
                case "reading":
                  ;
                default:
                  last = s;
                  break;
                case "reading-comp":
                  last = curr;
                  break;
                case "math":
                  last = ret;
                  break;
                case "vocab":
                  last = o;
                  break;
                case "phoenix":
                  last = current;
              }
              d = pageY ? ""["concat"](spaces)["concat"](nodes["a"]["SNAPPY_URL"], "?csid=")["concat"](pathConfig) : ""["concat"](spaces)["concat"](location)["concat"](last, "/?csid=")["concat"](pathConfig, "&type=")["concat"](evt["toUpperCase"]())["concat"](prog);
            }
          }
          return d;
        }
      }, {
        "key": "render",
        "value": function () {
          var args = this["props"];
          var angle = args["lessonActivity"];
          var next = args["settings"];
          var timedout = next["LEARNING_TREE_TIMEOUT_MILLIS"];
          var fn = next["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var iterator = args["isLessonStarted"];
          var type = args["isPractice"];
          var pageY = args["selectedSubject"];
          var s = this["getLessonUrl"](angle);
          var computed = iterator ? json : value;
          var _args = type ? Object(extensions["e"])("activity:BASAL_PRACTICE") : Object(extensions["e"])("activity:LESSON");
          var MSG_CLOSURE_CUSTOM_COLOR_BUTTON = ("ela" === pageY ? Object(extensions["e"])("dashboard:READING_SUBJECT_NAME") : Object(extensions["e"])("dashboard:MATH_SUBJECT_NAME")) + " " + _args + "," + Object(extensions["e"])("dashboard:I_READY_TITLE");
          return s && Object(object["c"])("div", {
            "css": computed
          }, Object(object["c"])(getName["a"], {
            "onError": this["loadError"]
          }), Object(object["c"])(localStorage["a"], {
            "title": MSG_CLOSURE_CUSTOM_COLOR_BUTTON,
            "src": s,
            "id": key,
            "timeout": timedout,
            "retry": fn,
            "loadCheckAttribute": ["_trackJs", "Howler", "preloader"],
            "loadErrorCallback": this["loadError"],
            "loadCompleteCallback": this["loadComplete"]
          }));
        }
      }]);
      return clone;
    }(meta["a"]["Component"]);
    __TEST__;
    var originalEvent = event;
    var next = require(181);
    var timeout = require["n"](next);
    var abbrevs = require(303);
    var should = require(922);
    var visited = require(1193);
    var Attrs = require(912);
    var Node = require(1654);
    var oop = require(914);
    var skin = require(976);
    var Test = require(970);
    var mocks = require(1257);
    var a1 = require(300);
    var expected = require(177);
    var compiled = require["n"](expected);
    var fromRequire = require(1606);
    var hideLoadMask = require["n"](fromRequire);
    var expr = require(7);
    var Runnable = require(999);
    var doctypes = require(1265);
    var j = require(1259);
    var Token = require(98);
    var tmp = require(96);
    var array = require(1063);
    var items = require(1064);
    var views = require(1184);
    var constants = require(63);
    var d = require(926);
    var pdataOld = a1["a"]["CreditImagesIcon"];
    var suiteView = a1["a"]["CreditPassagesIcon"];
    var pdataCur = a1["a"]["InterstitialClose"];
    var progressValues = a1["a"]["InterstitialObjectiveCheckmark"];
    var fontFamily = nodes["a"]["FONT_SECONDARY"];
    var oldestDate = nodes["a"]["LESSON_LOADING_THRESHOLD"];
    var result = {
      "name": "dezg2i-HIDDENDIV",
      "styles": ":focus{outline:none;};label:HIDDENDIV;"
    };
    var css = Object(object["b"])(tmp["f"], ";color:white;&:focus,&:hover{transform:scale(1.04);}&:active{transform:scale(0.95);};label:BUTTONSTYLE;");
    var fmt = function (deepDataAndEvents) {
      function filter() {
        var string;
        Object(events["a"])(this, filter);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (string = index["call"]["apply"](index, [this]["concat"](rv)))["state"] = {
          "showObjectives": false,
          "showCreditsModal": false,
          "hideObjectives": false
        };
        string["getActivityStatus"] = function () {
          var str = string["props"];
          var value = str["lessonActivity"];
          var label = str["isPractice"];
          return "NOT_STARTED" === value["status"] ? label ? Object(extensions["e"])("activity:BASAL_PRACTICE") : Object(extensions["e"])("activity:NEXT_LESSON") : label ? Object(extensions["e"])("activity:RESUME_PRACTICE") : Object(extensions["e"])("activity:RESUME_LESSON");
        };
        string["parseObjectiveText"] = function (tokens) {
          var E = String["fromCharCode"](8226);
          var ul = tokens["split"](E)["length"] - 1;
          var scripts = tokens["match"](/<li>(.*?)<\/li>/gi) || [];
          return ul > 0 ? Object(object["c"])("ul", {
            "className": "objectives-list"
          }, timeout()(tokens["split"](E), function (deepDataAndEvents, key) {
            if (deepDataAndEvents) {
              return Object(object["c"])("li", {
                "className": "objective",
                "key": "objective_"["concat"](key)
              }, Object(object["c"])("img", {
                "alt": "objective bullet icon",
                "src": "common/svg/icons/splash_objective_bullet_icon.svg",
                "className": "objective-bullet-img"
              }), Object(object["c"])("div", {
                "className": "objective-text"
              }, "$", deepDataAndEvents));
            }
          })) : scripts["length"] > 0 ? Object(object["c"])(Attrs["a"], {
            "type": "grid",
            "gridTemplateColumns": "26px 1fr",
            "gridGap": "12px 20px",
            "my": "40px"
          }, timeout()(scripts, function (pathMap) {
            return Object(object["c"])(plugin["Fragment"], null, Object(object["c"])(should["a"], null, Object(object["c"])(progressValues, null)), Object(object["c"])(should["a"], null, Object(object["c"])(success, null, pathMap["match"](/<li>(.*?)<\/li>/)[1])));
          })) : Object(object["c"])("div", {
            "className": "objective-text-no-bullet"
          }, "rawText");
        };
        string["closeLesson"] = function () {
          string["props"]["navigateToPage"](Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
        };
        string["toggleObjectives"] = function () {
          string["setState"](function ($cookies) {
            var value = $cookies["showObjectives"];
            $cookies["hideObjectives"];
            return {
              "showObjectives": !value,
              "hideObjectives": value
            };
          }, string["setObjectivesViewCount"]);
        };
        string["setObjectivesViewCount"] = function () {
          if (string["state"]["showObjectives"]) {
            string["OBJECTIVES_VIEW_COUNT"]++;
          }
        };
        string["toggleCreditsModal"] = function () {
          string["setState"](function (dataAndEvents) {
            return {
              "showCreditsModal": !dataAndEvents["showCreditsModal"]
            };
          }, string["setCreditsViewCount"]);
        };
        string["getCreditText"] = function () {
          var vals = string["props"]["lessonCreditsData"];
          var value = "";
          if (vals) {
            Object["keys"](vals)["forEach"](function (key) {
              var val = vals[key];
              if (val) {
                if ("" !== val) {
                  value += key + ": " + _formatUnit(val);
                }
              }
            });
          }
          return "" === value ? "" : Object(object["c"])(plugin["Fragment"], null, Object(object["c"])(constants["b"], {
            "message": value,
            "aria-live": "assertive",
            "clearOnUnmount": true
          }), Object(object["c"])(tmp["b"], {
            "dangerouslySetInnerHTML": {
              "__html": value
            }
          }));
        };
        string["setCreditsViewCount"] = function () {
          if (string["state"]["showCreditsModal"]) {
            string["CREDITS_VIEW_COUNT"]++;
          }
        };
        string["getGACategory"] = function () {
          var str = string["props"];
          var label = str["isPractice"];
          var scheme = str["lessonActivity"];
          var c = filter()(scheme, "lesson.name");
          var j = label ? "PRACTICE" : "HTML5_LESSON";
          return ""["concat"](d["c"][j], " - ")["concat"](c);
        };
        string["getCreditsModalContent"] = function () {
          var json = string["props"]["lessonCreditsData"];
          var r20 = json ? Object["keys"](json)["map"](function (type, key) {
            var tag = json[type];
            var r20 = "images" === type ? Object(object["c"])(pdataOld, null) : Object(object["c"])(suiteView, null);
            return tag && Object(object["c"])("div", {
              "key": "credit_"["concat"](key),
              "style": {
                "margin": "15px 5px 15px 5px"
              }
            }, Object(object["c"])("div", {
              "style": {
                "marginLeft": "auto",
                "marginRight": "auto",
                "width": "50px"
              }
            }, r20), Object(object["c"])("div", {
              "className": "credits-text",
              "aria-hidden": true,
              "dangerouslySetInnerHTML": {
                "__html": tag
              }
            }));
          }) : null;
          return Object(object["c"])(plugin["Fragment"], null, Object(object["c"])("div", {
            "aria-hidden": "true"
          }, r20));
        };
        string["lessonLoaded"] = false;
        string["renderCard"] = function () {
          var str = string["props"];
          var scheme = str["cdnPath"];
          var stri = str["isk2"];
          var label = str["lessonActivity"];
          var rest = str["selectedSubject"];
          var cml = str["selectedActivityType"];
          var ch = str["isPractice"];
          return string["state"]["showObjectives"] ? string["renderObjectivesCard"]() : Object(object["c"])("div", {
            "id": "html5-splash-card"
          }, Object(object["c"])(Runnable["a"], {
            "components": {
              "CardFooter": string["renderCardFooter"](),
              "CardImage": Object(object["c"])(j["a"], {
                "cdnPath": scheme,
                "isk2": stri,
                "lessonActivity": label,
                "selectedSubject": rest
              }),
              "CardTitle": string["renderCardTitle"]()
            },
            "id": "html5-splash-card",
            "isk2": stri,
            "isPassingScore": true,
            "lessonActivity": label,
            "selectedActivityType": cml
          }, stri ? !ch && Object(object["c"])(mocks["a"], {
            "amount": 20,
            "themePath": "splash.coins"
          }) : Object(object["c"])(plugin["Fragment"], null, Object(object["c"])(constants["b"], {
            "message": " "["concat"](filter()(label, "lesson.track.name"), ". ")["concat"](filter()(label, "lesson.name"), ". ")["concat"](Object(extensions["e"])("gk2:MY_COINS"), " 20 "),
            "aria-live": "assertive",
            "clearOnUnmount": true
          }), Object(object["c"])(Attrs["a"], {
            "type": "grid",
            "alignItems": "start",
            "gridGap": "25px",
            "gridTemplateColumns": "1fr 0fr"
          }, Object(object["c"])(oop["a"], {
            "fontSize": "26px",
            "lineHeight": "35px"
          }, Object(object["c"])(oop["a"], {
            "fontWeight": "800"
          }, filter()(label, "lesson.track.name")), Object(object["c"])("div", null, filter()(label, "lesson.name"))), !ch && Object(object["c"])(mocks["a"], {
            "amount": 20,
            "themePath": "splash.coins"
          })))));
        };
        string["objectivesTitleRef"] = meta["a"]["createRef"]();
        string["gradek2TitleRef"] = meta["a"]["createRef"]();
        string["grade38TitleRef"] = meta["a"]["createRef"]();
        string["renderCardFooter"] = function () {
          var str = string["props"];
          var label = str["lessonLoadingProgress"];
          var onClick = str["lessonStartedCb"];
          var charset = string["state"]["showObjectives"];
          return Object(object["c"])(Attrs["a"], {
            "alignItems": "end"
          }, Object(object["c"])(should["a"], null, Object(object["c"])(abbrevs["a"], {
            "aria-label": Object(extensions["e"])("lesson:"["concat"](charset ? "HIDE_" : "", "OBJECTIVES")),
            "tabIndex": 0,
            "onClick": string["toggleObjectives"],
            "id": "lesson-splash-objectives-button",
            "css": css
          }, Object(object["c"])(oop["a"], {
            "fontSize": "22px",
            "fontWeight": "800",
            "color": expr["b"]
          }, Object(extensions["e"])("lesson:"["concat"](charset ? "HIDE_" : "", "OBJECTIVES"))))), Object(object["c"])(should["a"], {
            "flex": 0
          }, Object(object["c"])(doctypes["a"], {
            "id": "lesson-splash-continue-button",
            "tabIndex": 0,
            "aria-label": Object(extensions["e"])("lesson:OPEN_LESSON"),
            "progress": label,
            "onClick": onClick
          })));
        };
        string["renderCardTitle"] = function () {
          var str = string["props"];
          var c = str["isk2"];
          var label = str["lessonActivity"];
          var key = str["isPractice"];
          var id = key ? items["a"] : array["a"];
          var lval = "MAIN" === filter()(label, "lesson.channel");
          var value = key ? expr["G"] : lval ? expr["M"] : expr["G"];
          return c ? Object(object["c"])("div", {
            "css": result,
            "tabIndex": -1,
            "ref": string["gradek2TitleRef"]
          }, Object(object["c"])(Attrs["a"], {
            "type": "grid",
            "alignItems": "center",
            "gridGap": "22px",
            "gridTemplateColumns": "80px 1fr"
          }, Object(object["c"])(should["a"], null, Object(object["c"])(id, {
            "color": value,
            "style": {
              "width": 80,
              "height": 80
            }
          })), Object(object["c"])(should["a"], null, string["getActivityStatus"](), Object(object["c"])("br", null), Object(object["c"])(oop["a"], {
            "fontFamily": "Roboto",
            "fontSize": "32px",
            "fontWeight": "400",
            "lineHeight": "40px"
          }, filter()(label, "lesson.name"))))) : Object(object["c"])("div", {
            "css": result,
            "tabIndex": -1,
            "ref": string["grade38TitleRef"]
          }, string["getActivityStatus"]());
        };
        string["renderObjectivesCard"] = function () {
          var r20 = string["props"]["lessonActivity"];
          return Object(object["c"])(Runnable["a"], {
            "components": {
              "CardFooter": string["renderCardFooter"]()
            }
          }, Object(object["c"])("div", {
            "css": result,
            "tabIndex": -1,
            "ref": string["objectivesTitleRef"],
            "id": "objectives-lesson-name"
          }, Object(object["c"])(oop["a"], {
            "fontFamily": fontFamily,
            "fontSize": "37px",
            "fontWeight": "800",
            "lineHeight": "46px"
          }, filter()(r20, "lesson.name"))), Object(object["c"])(oop["a"], {
            "fontSize": "22px",
            "lineHeight": "34px"
          }, string["parseObjectiveText"](filter()(r20, "lesson.objectiveText"))));
        };
        string["startTime"] = Date["now"]();
        string["OBJECTIVES_VIEW_COUNT"] = 0;
        string["CREDITS_VIEW_COUNT"] = 0;
        return string;
      }
      Object(attr["a"])(filter, deepDataAndEvents);
      var index = function (key) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x44bcce) {
            return false;
          }
        }
        return function () {
          var parsed;
          var camelKey = Object(tests["a"])(key);
          if (isEmpty()) {
            var scripts = Object(tests["a"])(this)["constructor"];
            parsed = Reflect["construct"](camelKey, arguments, scripts);
          } else {
            parsed = camelKey["apply"](this, arguments);
          }
          return Object(Block["a"])(this, parsed);
        };
      }(filter);
      Object(elements["a"])(filter, [{
        "key": "componentDidMount",
        "value": function () {
          this["startTime"] = Date["now"]();
        }
      }, {
        "key": "componentDidUpdate",
        "value": function (thisValue, newValue) {
          var lessonLoadingProgress = this["props"]["lessonLoadingProgress"];
          if (this["state"]["hideObjectives"]) {
            if (this["gradek2TitleRef"]["current"]) {
              this["gradek2TitleRef"]["current"]["focus"]();
            }
          }
          if (this["state"]["hideObjectives"]) {
            if (this["grade38TitleRef"]["current"]) {
              this["grade38TitleRef"]["current"]["focus"]();
            }
          }
          if (this["state"]["showObjectives"]) {
            if (this["objectivesTitleRef"]["current"]) {
              this["objectivesTitleRef"]["current"]["focus"]();
            }
          }
          if (100 === lessonLoadingProgress && thisValue["lessonLoadingProgress"] < 100 && !this["lessonLoaded"]) {
            var date = Number(((Date["now"]() - this["startTime"]) / 1E3)["toFixed"](2));
            d["g"]["trackEvent"]({
              "category": this["getGACategory"](),
              "action": d["b"]["LESSON_LOADED"],
              "label": ""["concat"](date, "s")
            });
            if (date > oldestDate) {
              Object(c["h"])("Lesson load time "["concat"](date, " seconds"));
            }
            this["lessonLoaded"] = true;
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          if (this["OBJECTIVES_VIEW_COUNT"] > 0) {
            d["g"]["trackEvent"]({
              "category": this["getGACategory"](),
              "action": d["b"]["VIEWED_LESSON_OBJECTIVES"],
              "label": ""["concat"](this["OBJECTIVES_VIEW_COUNT"])
            });
          }
          if (this["CREDITS_VIEW_COUNT"] > 0) {
            d["g"]["trackEvent"]({
              "category": this["getGACategory"](),
              "action": d["b"]["VIEWED_LESSON_CREDITS"],
              "label": ""["concat"](this["CREDITS_VIEW_COUNT"])
            });
          }
        }
      }, {
        "key": "render",
        "value": function () {
          var isminh = this["state"]["showCreditsModal"];
          var ch = this["getCreditText"]();
          return Object(object["c"])(Test["a"], {
            "id": "html5-lesson-splash",
            "fillScreen": false,
            "overflow": true
          }, Object(object["c"])(skin["a"], {
            "height": "750px",
            "transformOrigin": "top center"
          }, Object(object["c"])(Token["a"], {
            "direction": "horizontal"
          }, Object(object["c"])(views["b"], {
            "height": "auto",
            "minWidth": "750px"
          }, Object(object["c"])(views["a"], {
            "width": "10%",
            "style": {
              "paddingTop": "55px",
              "display": "" !== ch ? "block" : "none"
            }
          }, Object(object["c"])(abbrevs["a"], {
            "tabIndex": 0,
            "aria-label": Object(extensions["e"])("lesson:CREDITS"),
            "id": "lesson-splash-credit-button",
            "onClick": this["toggleCreditsModal"],
            "css": css,
            "blurOnClick": true
          }, Object(object["c"])(oop["a"], {
            "color": "white",
            "fontSize": "26px",
            "fontWeight": "800"
          }, Object(extensions["e"])("lesson:CREDITS"))), isminh && ch, Object(object["c"])(visited["a"], {
            "placement": "bottom",
            "isOpen": isminh,
            "target": "lesson-splash-credit-button",
            "toggle": this["toggleCreditsModal"]
          }, Object(object["c"])(Node["a"], null, this["getCreditsModalContent"]()))), Object(object["c"])(views["a"], {
            "width": "10%",
            "style": {
              "paddingTop": "55px",
              "paddingLeft": "30px",
              "textAlign": "right"
            }
          }, Object(object["c"])(abbrevs["a"], {
            "aria-label": Object(extensions["e"])("lesson:CLOSE"),
            "tabIndex": 0,
            "onClick": this["closeLesson"],
            "id": "lesson-splash-close-button",
            "css": css
          }, Object(object["c"])(pdataCur, null))), Object(object["c"])(views["a"], {
            "style": {
              "paddingTop": "66px",
              "width": "610px",
              "alignSelf": "center"
            }
          }, this["renderCard"]())))));
        }
      }]);
      return filter;
    }(meta["a"]["Component"]);
    var _fmt = fmt;
    var m = require(1005);
    var base64VLQ = require(1385);
    var b = require(305);
    var failuresLink = Object(options["a"])("div", {
      "target": "efd5bcn0",
      "label": "BackgroundHolder"
    })(function (dataAndEvents) {
      return {
        "backgroundColor": dataAndEvents["theme"]["global"]["backgroundColor"],
        "backgroundSize": "cover",
        "backgroundImage": dataAndEvents["theme"]["global"]["backgroundImage"]
      };
    }, ";");
    var otherElement = function (deepDataAndEvents) {
      function clone() {
        var result;
        Object(events["a"])(this, clone);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (result = radixToPower["call"]["apply"](radixToPower, [this]["concat"](rv)))["state"] = {
          "isLessonStarted": false
        };
        result["TIME_AT_COMPONENT_MOUNTED"] = 0;
        result["onSplashComplete"] = function () {
          result["setState"](function (dataAndEvents) {
            return {
              "isLessonStarted": true
            };
          });
        };
        result["onProgress"] = function (deepDataAndEvents) {
          result["props"]["dispatchUpdateLessonLoadingProgress"](deepDataAndEvents);
          if (result["props"]["isLessonResumedFromPause"]) {
            if (deepDataAndEvents >= 100) {
              result["onSplashComplete"]();
            }
          }
        };
        result["startLesson"] = function () {
          var camelKey = document["getElementById"](key);
          if (camelKey) {
            callback()(camelKey, "contentWindow.splashScreenCompleted", elem["a"])();
            result["setState"](function (dataAndEvents) {
              return {
                "isLessonStarted": true
              };
            });
            var value = result["props"]["lessonActivity"];
            var iterator = callback()(value, "lesson.name");
            var isFunction = callback()(value, "lesson.channel");
            var mArr = callback()(value, "status");
            var initial = "BASAL_PRACTICE" === isFunction;
            if (iterator) {
              d["g"]["trackEvent"]({
                "category": initial ? ""["concat"](d["c"]["PRACTICE"], " - ")["concat"](iterator) : ""["concat"](d["c"]["HTML5_LESSON"], " - ")["concat"](iterator),
                "action": "NOT_STARTED" === mArr ? d["b"]["ACTIVITY_STARTED"] : d["b"]["ACTIVITY_RESUMED"]
              });
            }
          }
        };
        return result;
      }
      Object(attr["a"])(clone, deepDataAndEvents);
      var radixToPower = function (dest) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x593acf) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(tests["a"])(dest);
          if (isEmpty()) {
            var scripts = Object(tests["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(Block["a"])(this, parsed);
        };
      }(clone);
      Object(elements["a"])(clone, [{
        "key": "UNSAFE_componentWillMount",
        "value": function () {
          this["TIME_AT_COMPONENT_MOUNTED"] = new Date()["getTime"]();
          (0, this["props"]["dispatchUpdateLessonLoadingProgress"])(-1);
        }
      }, {
        "key": "UNSAFE_componentWillReceiveProps",
        "value": function (values) {
          var res = this["props"];
          var work = res["lessonActivity"];
          if (res["loading"]) {
            if (!values["loading"]) {
              this["addBridgeMethods"](values);
            }
          }
          if (isFunction()(window, "lessonBridge.info")) {
            window["lessonBridge"]["info"]["previouslyFailedLesson"] = isFunction()(values, "lessonActivity.previouslyFailedActivityId") && null !== values["lessonActivity"]["previouslyFailedActivityId"] && values["lessonActivity"]["previouslyFailedActivityId"] === callback()(work, "previouslyFailedActivityId");
            if (values["lessonActivity"]) {
              if (window["lessonBridge"]["info"]["activityId"] !== values["lessonActivity"]["id"]) {
                window["lessonBridge"]["info"]["activityId"] = values["lessonActivity"]["id"];
              }
            }
          }
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          this["removeBridgeMethods"]();
        }
      }, {
        "key": "currentExecutionTime",
        "value": function () {
          return new Date()["getTime"]() - this["TIME_AT_COMPONENT_MOUNTED"];
        }
      }, {
        "key": "addBridgeMethods",
        "value": function (v) {
          var scene = this;
          var mod = v["student"]["id"];
          var HOP = v["dispatchUpdateLessonLoadingProgress"];
          var onErrorFnPrev = v["dispatchSetLessonCreditsData"];
          var loose = v["lessonActivity"];
          var pre = v["isLessonResumedFromPause"];
          var args = v["settings"];
          var type = args["DC_API_ENDPOINT"];
          var delay = args["DC_DELAY_RETRIES"];
          var options = args["DC_MAX_RETRIES"];
          var pageY = args["DC_SERVICE_ENABLED"];
          window["childPreloadProgress"] = function (walkers) {
            HOP(walkers);
            if (pre) {
              if (walkers >= 100) {
                scene["startLesson"]();
              }
            }
          };
          window["setCreditsData"] = function (error) {
            onErrorFnPrev(error);
          };
          var dataset = rep["c"]["getCurrentLessonComponentActivity"](loose);
          window["lessonBridge"] = {
            "setScore": function (score) {
              var r20 = !isNaN(score) && ch()(score) ? {
                "score": score
              } : null;
              if (dataset) {
                scene["completeLessonComponent"](dataset["id"], r20);
              }
            },
            "start": function () {
              window.p1 = scene;
            },
            "pause": function () {},
            "resume": function () {},
            "close": function () {
              var args = scene["props"];
              var parent = args["navigateToPage"];
              var value = args["lessonActivity"];
              var iterator = callback()(value, "lesson.name");
              var initial = "BASAL_PRACTICE" === callback()(value, "lesson.channel");
              if (iterator) {
                d["g"]["trackEvent"]({
                  "category": initial ? ""["concat"](d["c"]["PRACTICE"], " - ")["concat"](iterator) : ""["concat"](d["c"]["HTML5_LESSON"], " - ")["concat"](iterator),
                  "action": d["b"]["ACTIVITY_PAUSED"]
                });
              }
              parent(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
            },
            "fatal": function () {},
            "info": {
              "dataCapture": {
                "serviceEnabled": pageY,
                "endpoint": type,
                "retries": {
                  "max": options,
                  "delay": delay
                }
              },
              "studentId": mod,
              "previouslyFailedLesson": null,
              "activityId": null
            }
          };
        }
      }, {
        "key": "removeBridgeMethods",
        "value": function () {
          window["childPreloadProgress"] = window["lessonBridge"] = window["setCreditsData"] = window["autoPlayCallback"] = void 0;
        }
      }, {
        "key": "returnToDashboardHome",
        "value": function () {
          (0, this["props"]["navigateToPage"])(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
        }
      }, {
        "key": "getScrubbedScore",
        "value": function (value) {
          var listener = null;
          var t = "string" === typeof value ? value["replace"]("%", "")["trim"]() : value;
          if ("" !== t) {
            if (null !== t) {
              t = Number(t);
              listener = !isNaN(t) && t >= 0 && t <= 100 ? Math["round"](t) : null;
            }
          }
          return listener;
        }
      }, {
        "key": "completeLessonComponent",
        "value": function (thisValue, x) {
          var parts = this["props"];
          var last = parts["dispatchCompleteLessonComponent"];
          var part = parts["dispatchReportInvalidScore"];
          var string = this["getScrubbedScore"](callback()(x, "score", null));
          if (x && null === string) {
            part({
              "score": x["score"],
              "componentStatusId": thisValue
            });
          } else {
            last({
              "componentStatusId": thisValue,
              "instructionLessonOutcome": x ? {
                "score": string
              } : null
            });
          }
        }
      }, {
        "key": "render",
        "value": function () {
          var res = this["props"];
          var work = res["cdnPath"];
          var settings = res["settings"];
          var last = res["gradeBand"];
          var value = res["lessonActivity"];
          var m = res["loading"];
          var navigateToPage = res["navigateToPage"];
          var children = res["lessonLoadingProgress"];
          var cont = res["lessonCreditsData"];
          var name = res["isLessonResumedFromPause"];
          var intMigratorExists = res["selectedSubject"];
          var staff = res["student"];
          var managers = res["selectedActivityType"];
          var exists = res["isPractice"];
          var all3 = res["simulatingSnargg2"];
          var altName = this["state"]["isLessonStarted"];
          var isFunction = callback()(value, "lesson");
          var r20 = !isFunction || altName || name ? null : Object(object["c"])(_fmt, {
            "cdnPath": work,
            "lessonActivity": value,
            "isk2": "gk2" === last,
            "navigateToPage": navigateToPage,
            "lessonLoadingProgress": Object(b["a"])() ? 100 : children,
            "lessonCreditsData": cont,
            "lessonStartedCb": this["startLesson"],
            "selectedSubject": intMigratorExists,
            "student": staff,
            "selectedActivityType": managers,
            "isPractice": exists
          });
          var restoreScript = !isFunction || m || Object(b["a"])() ? null : Object(object["c"])(originalEvent, {
            "navigateToPage": navigateToPage,
            "settings": settings,
            "lessonActivity": value,
            "lessonLoadingProgress": children,
            "isLessonStarted": altName,
            "isPractice": exists,
            "selectedSubject": intMigratorExists,
            "simulatingSnargg2": all3
          });
          return Object(object["c"])(failuresLink, {
            "role": "main",
            "id": "lesson-view"
          }, m && Object(object["c"])(getActual["a"], {
            "fullScreen": true
          }), r20, restoreScript, !m && Object(object["c"])(base64VLQ["a"], {
            "iframeid": key,
            "loaded": altName,
            "setCredits": this["props"]["dispatchSetLessonCreditsData"],
            "setProgress": this["onProgress"]
          }));
        }
      }]);
      return clone;
    }(meta["a"]["Component"]);
    var restoreScript = {
      "navigateToPage": conf["e"],
      "dispatchUpdateLessonLoadingProgress": map["p"],
      "dispatchSetLessonCreditsData": map["m"],
      "dispatchReportInvalidScore": map["i"],
      "dispatchCompleteLessonComponent": map["c"]
    };
    var otherElementRect = Object(inspect["connect"])(Keyboard, restoreScript)(otherElement);
    __TEST__;
    var newMillis = Object(selfClosing["a"])([map["f"]]);
    var query = require(1649);
    var g = require(1151);
    var e = require(1059);
    var t = require(975);
    var r20 = {
      "navigateToPage": conf["e"],
      "dispatchStopActivityAction": e["g"],
      "dispatchCompleteTestItemAction": t["d"],
      "dispatchPauseActivityAction": e["d"],
      "dispatchUncloseActivityAction": e["h"],
      "dispatchLoadTestingQueueAction": t["j"],
      "dispatchUpdateTestingQueueIndexAction": t["s"]
    };
    var typePattern = Object(inspect["connect"])(getType, r20)(g["b"]);
    if (true === __TEST__) {
      g["b"];
    }
    var camelKey = Object(selfClosing["a"])([t["m"], e["g"], t["d"], e["d"], e["h"]]);
    var info = require(1061);
    var match = require["n"](info);
    var storage = require(1062);
    var Base = require(231);
    var a = require(939);
    var helper = require(1003);
    var actual = nodes["a"]["ACTIVITY_TYPE"];
    var prop = {
      "name": "1hy97x4-WRAPPER",
      "styles": "position:'fixed',width:'100%',height:'100%',border:'none',display:'block';label:WRAPPER;"
    };
    var nonStripName = function (deepDataAndEvents) {
      function getOwnPropertyNames() {
        var props;
        Object(events["a"])(this, getOwnPropertyNames);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (props = properties["call"]["apply"](properties, [this]["concat"](rv)))["state"] = {
          "showLoader": true
        };
        props["_keepAliveID"] = null;
        props["startKeepAlive"] = function () {
          var SESSION_KEEP_ALIVE_INTERVAL = props["props"]["settings"]["SESSION_KEEP_ALIVE_INTERVAL"];
          props["stopKeepAlive"]();
          props["_keepAliveID"] = window["setTimeout"](function () {
            props["keepAliveSession"]();
            props["startKeepAlive"]();
          }, 6E4 * SESSION_KEEP_ALIVE_INTERVAL);
        };
        props["stopKeepAlive"] = function () {
          window["clearTimeout"](props["_keepAliveID"]);
        };
        props["onError"] = function (dataAndEvents) {
          var prop = props["props"];
          var P = prop["navigateToPage"];
          var r20 = prop["ismActivity"];
          var pathConfig = callback()(r20, "id");
          Object(c["g"])("Standards mastery load error, id = ["["concat"](pathConfig, "]"), c["m"]);
          P(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", callback()(modules["a"], dataAndEvents || "ERROR_GENERIC", modules["a"]["ERROR_GENERIC"])));
        };
        props["keepAliveSession"] = function () {
          (0, props["props"]["dispatchKeepAlive"])();
        };
        props["loadCompleted"] = function () {
          props["setState"]({
            "showLoader": false
          });
        };
        props["loadError"] = function () {
          props["onError"]();
        };
        return props;
      }
      Object(attr["a"])(getOwnPropertyNames, deepDataAndEvents);
      var properties = function (methods) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x58315c) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(tests["a"])(methods);
          if (isEmpty()) {
            var scripts = Object(tests["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(Block["a"])(this, parsed);
        };
      }(getOwnPropertyNames);
      Object(elements["a"])(getOwnPropertyNames, [{
        "key": "UNSAFE_componentWillMount",
        "value": function () {
          (0, this["props"]["dispatchCheckSession"])();
        }
      }, {
        "key": "componentDidMount",
        "value": function () {
          var values = this["props"];
          var last = values["navigateToPage"];
          var value = values["ismActivity"];
          var r = values["selectedSubject"];
          var x = value["entityType"] === actual["ISM"] ? actual["ISM"] : actual["BASAL_CHECK"];
          var r20 = [match()(d["a"]["ACTIVITY_TYPE"], {
            "value": x
          })];
          var params = {
            "subject": r,
            "type": x
          };
          var force = "NOT_STARTED" === value["status"];
          d["g"]["setCustom"](r20);
          d["g"]["trackPage"](d["e"]["STANDARDS_MASTERY"]["withData"](params));
          helper["a"]["setDocumentTitle"](""["concat"](a["b"][r], " Activity, i-Ready"));
          if (value["entityType"] === actual["ISM"] || value["entityType"] === actual["BASAL_CHECK"]) {
            this["startKeepAlive"]();
            this["addBridgeMethods"]();
          } else {
            last(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
          }
          d["g"]["trackEvent"]({
            "category": value["entityType"] === actual["BASAL_CHECK"] ? ""["concat"](d["c"]["COMP_CHECK"]) : ""["concat"](d["c"]["ISM"]),
            "action": force ? d["b"]["ACTIVITY_STARTED"] : d["b"]["ACTIVITY_RESUMED"]
          });
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          window["lessonBridge"] = void 0;
        }
      }, {
        "key": "addBridgeMethods",
        "value": function () {
          var obj = this;
          var args = this["props"];
          var parent = args["navigateToPage"];
          var expected = args["ismActivity"];
          window["lessonBridge"] = {
            "close": function () {
              var json = expected["entityType"] === actual["ISM"] ? "ism" : "check";
              obj["stopKeepAlive"]();
              parent(Object(modules["b"])(modules["a"]["STUDENT_DASHBOARD_HOME"]));
              d["g"]["trackEvent"]({
                "category": ""["concat"]("check" === json ? d["c"]["COMP_CHECK"] : d["c"]["ISM"]),
                "action": d["b"]["ACTIVITY_PAUSED"]
              });
            },
            "complete": function () {
              var jpeg = expected["entityType"] === actual["ISM"] ? "ism" : "check";
              obj["stopKeepAlive"]();
              parent(Object(modules["b"])(modules["a"]["STUDENT_ASSESSMENT_COMPLETED"])["replace"](":assessmentType/:score?", jpeg));
              d["g"]["trackEvent"]({
                "category": ""["concat"]("check" === jpeg ? d["c"]["COMP_CHECK"] : d["c"]["ISM"]),
                "action": d["b"]["ACTIVITY_COMPLETED"]
              });
            },
            "error": function (request) {
              obj["stopKeepAlive"]();
              obj["onError"](request);
            }
          };
        }
      }, {
        "key": "getUrl",
        "value": function () {
          var values = this["props"]["ismActivity"];
          var res = values["id"];
          var value = values["entityType"];
          return ""["concat"](value === actual["ISM"] ? Base["a"]["_STANDARDS_MASTERY_LAUNCH_URL"] : Base["a"]["_BASAL_CHECK_LAUNCH_URL"], "/")["concat"](res);
        }
      }, {
        "key": "render",
        "value": function () {
          var rows = this["props"];
          var row = rows["ismActivity"];
          var timedout = rows["settings"]["LEARNING_TREE_TIMEOUT_MILLIS"];
          var r = rows["selectedSubject"];
          var rowId = this["state"]["showLoader"];
          var SubClass = row["entityType"] === actual["ISM"] ? Object(extensions["e"])("activity:STANDARDS_CHECK") : Object(extensions["e"])("activity:BASAL_CHECK");
          var MSG_CLOSURE_CUSTOM_COLOR_BUTTON = ""["concat"](Object(extensions["e"])("dashboard:"["concat"](a["b"][r]["toUpperCase"](), "_SUBJECT_NAME")), " ")["concat"](SubClass, ", ")["concat"](Object(extensions["e"])("dashboard:I_READY_TITLE"));
          return Object(object["c"])("div", null, rowId && row && Object(object["c"])(getActual["a"], {
            "fullScreen": false
          }), (row["entityType"] === actual["ISM"] || row["entityType"] === actual["BASAL_CHECK"]) && Object(object["c"])("div", {
            "css": prop
          }, Object(object["c"])(localStorage["a"], {
            "title": MSG_CLOSURE_CUSTOM_COLOR_BUTTON,
            "id": "mastery",
            "src": this["getUrl"](),
            "timeout": timedout,
            "retry": 1,
            "loadCheckAttribute": row["entityType"] === actual["ISM"] ? "sbaAssignment" : "assignment",
            "loadErrorCallback": this["loadError"],
            "loadCompleteCallback": this["loadCompleted"]
          })));
        }
      }]);
      return getOwnPropertyNames;
    }(plugin["Component"]);
    var udataCur = {
      "dispatchCheckSession": storage["a"],
      "dispatchKeepAlive": storage["b"],
      "navigateToPage": conf["e"]
    };
    var url = Object(inspect["connect"])(formatDate, udataCur)(nonStripName);
    __TEST__;
    var link = url;
    var _ = require(26);
    var attributes = require(44);
    var ast = require(10);
    var environment = require["n"](ast);
    var data = require(1149);
    var frequency = require(1337);
    var base64 = require(1021);
    var expect = require(9);
    var rreturn = {
      "navigateToPage": conf["e"],
      "dispatchStartAction": frequency["b"],
      "dispatchCompleteAction": frequency["a"]
    };
    var setup = Object(inspect["connect"])(buildNode, rreturn)(init);
    __TEST__;
    var pageId = "learnosity-wrapper";
    var memory = function (deepDataAndEvents) {
      function clone() {
        var result;
        Object(events["a"])(this, clone);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (result = radixToPower["call"]["apply"](radixToPower, [this]["concat"](rv)))["state"] = {
          "isWrapperLoaded": false
        };
        result["loadError"] = function () {
          var throttledUpdate = result["props"]["navigateToPage"];
          Object(c["g"])("ASR iframe load error.", c["m"]);
          throttledUpdate(Object(modules["b"])(modules["a"]["STUDENT_ERROR"])["replace"]("/:errorReason?", modules["a"]["ERROR_GENERIC"]));
        };
        result["loadComplete"] = function () {
          result["setState"]({
            "isWrapperLoaded": true
          });
        };
        return result;
      }
      Object(attr["a"])(clone, deepDataAndEvents);
      var radixToPower = function (dest) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x30d39b) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(tests["a"])(dest);
          if (isEmpty()) {
            var scripts = Object(tests["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(Block["a"])(this, parsed);
        };
      }(clone);
      Object(elements["a"])(clone, [{
        "key": "componentDidMount",
        "value": function () {
          var r = this["props"]["selectedSubject"];
          helper["a"]["setDocumentTitle"](""["concat"](a["b"][r], " Activity, i-Ready"));
        }
      }, {
        "key": "render",
        "value": function () {
          var index = this["props"];
          var digit = index["cdnPath"];
          var ca = index["settings"];
          var timedout = ca["LEARNING_TREE_TIMEOUT_MILLIS"];
          var retry = ca["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var c = ca["SPANISH_FIXEDFORM_ASSESSMENT_PLAYER_PATH"];
          var j = this["state"]["isWrapperLoaded"];
          var item = ""["concat"](digit)["concat"](c);
          return Object(object["c"])(plugin["Fragment"], null, !j && Object(object["c"])(getActual["a"], {
            "fullScreen": true
          }), Object(object["c"])("div", {
            "role": "main",
            "id": "learnosity-view"
          }, Object(object["c"])(localStorage["a"], {
            "title": "Learnosity iFrame",
            "src": item,
            "id": pageId,
            "timeout": timedout,
            "retry": retry,
            "loadErrorCallback": this["loadError"],
            "loadCompleteCallback": this["loadComplete"]
          }), Object(object["c"])(clone, {
            "iframeid": pageId,
            "loaded": j
          })));
        }
      }]);
      return clone;
    }(meta["a"]["Component"]);
    var progressContexts = {
      "navigateToPage": conf["e"]
    };
    var db = Object(inspect["connect"])($, progressContexts)(memory);
    __TEST__;
    var removeResponse = db;
    var G = {
      "HTML_LESSON": meta["a"]["createElement"](isObject, null),
      "CLOSE_READING_LESSON": meta["a"]["createElement"](query["a"], null)
    };
    var ec = function (deepDataAndEvents) {
      function getOwnPropertyNames() {
        var props;
        Object(events["a"])(this, getOwnPropertyNames);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (props = properties["call"]["apply"](properties, [this]["concat"](rv)))["entityTypeRenderMap"] = {
          "lessonActivity": "_renderLessonActivity",
          "assessmentActivity": "_renderAssessmentActivity",
          "ismActivity": "_renderIsmActivity",
          "basalCheckActivity": "_renderIsmActivity",
          "spanishFixedFormAssessmentActivity": "_renderAsrActivity"
        };
        props["_renderLessonActivity"] = function () {
          var H = props["props"]["activity"];
          return G[callback()(H, "lesson.lessonType")];
        };
        props["_renderAssessmentActivity"] = function () {
          var prop = props["props"];
          var chr = prop["cdnUrl"];
          var r20 = prop["testingQueue"];
          var areaKey = prop["isCheating"];
          return nodes["a"]["DIAGNOSTIC_CHEAT_VIEW"] && callback()(r20, "length") ? meta["a"]["createElement"](update, null) : meta["a"]["createElement"](g["c"], {
            "isCheating": areaKey,
            "cdnUrl": chr
          });
        };
        props["_renderIsmActivity"] = function () {
          return meta["a"]["createElement"](link, null);
        };
        props["_renderAsrActivity"] = function () {
          return meta["a"]["createElement"](removeResponse, null);
        };
        return props;
      }
      Object(attr["a"])(getOwnPropertyNames, deepDataAndEvents);
      var properties = function (methods) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x27f0fe) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(tests["a"])(methods);
          if (isEmpty()) {
            var scripts = Object(tests["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(Block["a"])(this, parsed);
        };
      }(getOwnPropertyNames);
      Object(elements["a"])(getOwnPropertyNames, [{
        "key": "render",
        "value": function () {
          var activity = this["props"]["activity"];
          var value = callback()(this, callback()(this["entityTypeRenderMap"], activity["entityType"]));
          return pop()(value) ? value() : meta["a"]["createElement"]("div", null);
        }
      }]);
      return getOwnPropertyNames;
    }(meta["a"]["Component"]);
    var dontCloseTags = {};
    var val = Object(inspect["connect"])(compileNode, dontCloseTags)(ec);
    __TEST__;
    var rval = val;
    var ASSERT = require(1200);
    var forOwn = require(302);
    work["default"] = function () {
      return meta["a"]["createElement"](forOwn["a"], {
        "displaySubHeader": false
      }, meta["a"]["createElement"](ASSERT["a"], null, function ($cookies) {
        var value = $cookies["CDN_DOMAIN_URL"];
        return meta["a"]["createElement"](rval, {
          "cdnUrl": value
        });
      }));
    };
  },
  915: function (dataAndEvents, abbrevs, require) {
    var attributes = require(916);
    var modules = require(31);
    var o = require(32);
    var object = require(80);
    var args = require(68);
    var g = require(60);
    var nodes = require(0);
    var meta = require["n"](nodes);
    var _ = require(1017);
    var camelKey = ["children"];
    var current = function (deepDataAndEvents) {
      function $() {
        Object(modules["a"])(this, $);
        return f["apply"](this, arguments);
      }
      Object(object["a"])($, deepDataAndEvents);
      var f = function ($) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x38428e) {
            return false;
          }
        }
        return function () {
          var parsed;
          var f = Object(g["a"])($);
          if (isEmpty()) {
            var scripts = Object(g["a"])(this)["constructor"];
            parsed = Reflect["construct"](f, arguments, scripts);
          } else {
            parsed = f["apply"](this, arguments);
          }
          return Object(args["a"])(this, parsed);
        };
      }($);
      Object(o["a"])($, [{
        "key": "render",
        "value": function () {
          var params = this["props"];
          var param = params["children"];
          var data = Object(attributes["a"])(params, camelKey);
          return meta["a"]["createElement"](_["a"], Object["assign"]({}, data, {
            "audioKeyContext": "",
            "id": "",
            "layer": "",
            "mouseover": true
          }), param);
        }
      }]);
      return $;
    }(nodes["Component"]);
    current["defaultProps"] = {
      "autoPlay": false,
      "delay": 400
    };
    abbrevs["a"] = current;
  },
  921: function (dataAndEvents, b, a) {
    function init(config) {
      config["target"]["blur"]();
    }
    a["d"](b, "a", function () {
      return init;
    });
    a(134);
    a(56);
  },
  950: function (dataAndEvents, abbrevs, require) {
    var meta = require(31);
    var modules = require(32);
    var object = require(80);
    var args = require(68);
    var attributes = require(60);
    var update = require(1022);
    var throttledUpdate = require["n"](update);
    var nodes = require(28);
    var min = require["n"](nodes);
    var Block = require(966);
    var validateProperty = require["n"](Block);
    var selector = require(954);
    var elem = require["n"](selector);
    var o = require(3);
    var c = require(134);
    var _0xdee491 = false;
    var obj = function () {
      function buildNode() {
        Object(meta["a"])(this, buildNode);
      }
      Object(modules["a"])(buildNode, null, [{
        "key": "timeout",
        "value": function (params, css, handler) {
          function check() {
            timeout["timeoutObj"] = setTimeout(render, backoff);
            params["addEventListener"]("load", update);
          }
          function completed() {
            clearTimeout(timeout["timeoutObj"]);
            params["removeEventListener"]("load", update);
          }
          function spin() {
            if (css()) {
              getElementById();
            } else {
              params["src"] = "about:blank";
              setTimeout(function () {
                check();
                params["src"] = fn;
              }, 1);
            }
          }
          function render(in_recursion) {
            if (!in_recursion) {
              completed();
            }
            var first_visit = ["false", "../false", "/student/dashboard/false", ""["concat"](window["location"]["origin"], "/student/dashboard/false")]["includes"](fn["split"]("#")[0]);
            if (first_visit || ++_0x3a1d07 > YYSTATE) {
              if (first_visit) {
                if (!_0xdee491) {
                  _0xdee491 = true;
                  Object(c["h"])("iFrameUtils: detected /student/dashboard/false -- " + new Error(fn)["stack"]);
                }
              }
              handler();
            } else {
              spin();
            }
          }
          function update(allBindingsAccessor) {
            completed();
            timeout["timeoutObj2"] = setTimeout(function () {
              if (css()) {
                getElementById();
              } else {
                render(true);
              }
            }, 1);
          }
          var timeout = this;
          var getElementById = arguments["length"] > 3 && void 0 !== arguments[3] ? arguments[3] : elem["a"];
          var DEFAULT_DELAY = arguments["length"] > 4 ? arguments[4] : void 0;
          var YY_START = arguments["length"] > 5 ? arguments[5] : void 0;
          var backoff = DEFAULT_DELAY;
          var YYSTATE = YY_START;
          var fn = params["src"];
          var _0x3a1d07 = 0;
          check();
        }
      }, {
        "key": "clearTimeouts",
        "value": function () {
          if (this["timeoutObj"]) {
            clearTimeout(this["timeoutObj"]);
          }
          if (this["timeoutObj2"]) {
            clearTimeout(this["timeoutObj2"]);
          }
        }
      }]);
      return buildNode;
    }();
    obj["timeoutObj"] = void 0;
    obj["timeoutObj2"] = void 0;
    var helper = require(0);
    var elements = require["n"](helper);
    var g = require(305);
    var result = {
      "name": "1gfhmqc-IFRAME",
      "styles": "height:100%;width:100%;position:absolute;display:flex;label:IFRAME;"
    };
    var current = function (deepDataAndEvents) {
      function clone() {
        var result;
        Object(meta["a"])(this, clone);
        var length = arguments["length"];
        var rv = new Array(length);
        var i = 0;
        for (; i < length; i++) {
          rv[i] = arguments[i];
        }
        (result = radixToPower["call"]["apply"](radixToPower, [this]["concat"](rv)))["iFrameRef"] = elements["a"]["createRef"]();
        return result;
      }
      Object(object["a"])(clone, deepDataAndEvents);
      var radixToPower = function (dest) {
        function isEmpty() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return false;
          }
          if (Reflect["construct"]["sham"]) {
            return false;
          }
          if ("function" === typeof Proxy) {
            return true;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return true;
          } catch (_0x8df31a) {
            return false;
          }
        }
        return function () {
          var parsed;
          var baseType = Object(attributes["a"])(dest);
          if (isEmpty()) {
            var scripts = Object(attributes["a"])(this)["constructor"];
            parsed = Reflect["construct"](baseType, arguments, scripts);
          } else {
            parsed = baseType["apply"](this, arguments);
          }
          return Object(args["a"])(this, parsed);
        };
      }(clone);
      Object(modules["a"])(clone, [{
        "key": "UNSAFE_componentWillMount",
        "value": function () {
          if (this["props"]["shouldUseDocumentDomain"]) {
            if (!Object(g["a"])()) {
              document["domain"] = "i-ready.com";
            }
          }
        }
      }, {
        "key": "componentDidMount",
        "value": function () {
          this["_checkIFrameLoad"]();
        }
      }, {
        "key": "componentWillUnmount",
        "value": function () {
          var loadedSrcs = this["iFrameRef"]["current"];
          obj["clearTimeouts"]();
          if (loadedSrcs) {
            loadedSrcs["src"] = "about:blank";
            loadedSrcs["parentElement"]["removeChild"](loadedSrcs);
          }
        }
      }, {
        "key": "_checkIFrameLoad",
        "value": function () {
          var hasAttribute = this;
          var args = this["props"];
          var next = args["loadErrorCallback"];
          var pageY = args["loadCheckAttribute"];
          var pageX = args["loadCompleteCallback"];
          var timeout = args["timeout"];
          var _buttonLabels = args["retry"];
          var func = args["getRef"];
          var name = this["iFrameRef"]["current"];
          if (name) {
            if (func) {
              func(name);
            }
            obj["timeout"](name, function () {
              var undef = false;
              try {
                undef = !pageY || hasAttribute["hasAttribute"]();
              } catch (_0x55d6f6) {}
              return undef;
            }, next, pageX, timeout, _buttonLabels);
          }
        }
      }, {
        "key": "hasAttribute",
        "value": function () {
          var type = this["props"]["loadCheckAttribute"];
          var ret = false;
          var ctx = this["iFrameRef"]["current"];
          if (ctx) {
            if (type) {
              if ("string" === typeof type) {
                ret = validateProperty()(ctx["contentWindow"], type);
              } else {
                if (min()(type)) {
                  throttledUpdate()(type, function (deepDataAndEvents) {
                    if (validateProperty()(ctx["contentWindow"], deepDataAndEvents)) {
                      ret = true;
                      return false;
                    }
                  });
                }
              }
            }
          }
          return ret;
        }
      }, {
        "key": "render",
        "value": function () {
          var el = this["props"];
          var id = el["id"];
          var c = el["className"];
          var value = el["allowTransparency"];
          var tobj = el["allowFullscreen"];
          var title = el["title"];
          var img = el["src"];
          var w = el["width"];
          var mapHeight = el["height"];
          var minContentHeight = el["minHeight"];
          return Object(o["c"])("div", {
            "css": result,
            "id": ""["concat"](id, "-wrapper")
          }, Object(o["c"])("iframe", {
            "id": id,
            "ref": this["iFrameRef"],
            "frameBorder": "0",
            "scrolling": "no",
            "className": c,
            "allowtransparency": value["toString"](),
            "allow": "autoplay",
            "allowfullscreen": tobj["toString"](),
            "title": title,
            "src": img,
            "css": Object(o["b"])({
              "width": w,
              "height": mapHeight,
              "minHeight": minContentHeight
            }, ";;label:FrameHolder;")
          }));
        }
      }]);
      return clone;
    }(elements["a"]["Component"]);
    current["defaultProps"] = {
      "loadCheckAttribute": null,
      "getRef": elem["a"],
      "loadErrorCallback": elem["a"],
      "loadCompleteCallback": elem["a"],
      "allowFullscreen": false,
      "allowTransparency": false,
      "timeout": 500,
      "retry": 1,
      "width": "100%",
      "height": "100%",
      "minHeight": "100%",
      "shouldUseDocumentDomain": true
    };
    abbrevs["a"] = current;
  }
}]);
