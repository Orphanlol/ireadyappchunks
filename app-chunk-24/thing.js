(this["webpackJsonpbasic-framework"] = this["webpackJsonpbasic-framework"] || [])['push']([[0x18, 0xa], {
  0x3eb: function (_0x150dcb, _0x48fc07, _0x345643) {
    'use strict';

    (function (_0xcf1b8c) {
      var _0x19261f = _0x345643(0x1f);
      var _0x2093fc = _0x345643(0x20);
      var _0x3901ea = _0x345643(0x46f);
      var _0x18ce6e = _0x345643['n'](_0x3901ea);
      var _0x53d529 = _0x345643(0x47a);
      var _0x1776ec = _0x345643['n'](_0x53d529);
      var _0x2c6c15 = _0x345643(0x8);
      var _0x395fd6 = _0x345643(0x3c8);
      var _0x3449db = _0x345643(0x3ab);
      var _0x482c16 = _0x345643(0x61);
      var _0x2a7190 = function () {
        function _0x7e59a4() {
          Object(_0x19261f['a'])(this, _0x7e59a4);
          this["_boundConfirmationPopupHandler"] = void 0x0;
          this['documentTitle'] = '';
          this["_confirmBrowserNavigation"] = _0x1776ec()(this["_confirmBrowserNavigation"], 0x3e8);
        }
        Object(_0x2093fc['a'])(_0x7e59a4, [{
          'key': 'preventBrowserNavigation',
          'value': function () {
            var _0x325b03 = arguments["length"] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : _0xcf1b8c["history"];
            _0x325b03['pushState'](null, document['title'], Object(_0x482c16['b'])(_0x482c16['a']["STUDENT_DASHBOARD_HOME"]));
            this["_preventBackwardNavigation"] = this["_preventBackwardNavigation"]["bind"](this, _0x325b03);
            _0xcf1b8c["addEventListener"]('popstate', this["_preventBackwardNavigation"], !0x0);
          }
        }, {
          'key': 'confirmBrowserNavigation',
          'value': function (_0x3aa972, _0x2b5dea, _0x17c494) {
            this["_boundConfirmationPopupHandler"] && _0xcf1b8c["removeEventListener"]("beforeunload", this["_boundConfirmationPopupHandler"], !0x0);
            this["_boundConfirmationPopupHandler"] = _0x18ce6e()(this["_confirmBrowserNavigation"], _0x3aa972, _0x2b5dea, _0x17c494);
            _0xcf1b8c['addEventListener']("beforeunload", this["_boundConfirmationPopupHandler"], !0x0);
          }
        }, {
          'key': "confirmationPopupHandler",
          'get': function () {
            return this["_boundConfirmationPopupHandler"];
          },
          'set': function (_0x5ab51f) {
            this["_boundConfirmationPopupHandler"] = _0x5ab51f;
          }
        }, {
          'key': "restoreBrowserNavigation",
          'value': function () {
            _0xcf1b8c["removeEventListener"]("popstate", this['_preventBackwardNavigation'], !0x0);
            this["removeNavigationConfirmation"]();
          }
        }, {
          'key': "removeNavigationConfirmation",
          'value': function () {
            _0xcf1b8c['removeEventListener']('beforeunload', this['_boundConfirmationPopupHandler'], !0x0);
          }
        }, {
          'key': '_confirmBrowserNavigation',
          'value': function (_0x45fc84, _0x1e5dc7, _0x327303, _0x50d2a5) {
            var _0x394940 = Object(_0x2c6c15['e'])("alerts: MSG_CONFIRM_LEAVE");
            _0x1e5dc7(_0x50d2a5)["then"](function () {
              return _0x327303(_0x50d2a5);
            });
            _0x45fc84["returnValue"] = _0x394940;
            return _0x394940;
          }
        }, {
          'key': "_preventBackwardNavigation",
          'value': function (_0x3fa569) {
            _0x3fa569["pushState"](null, document["title"], Object(_0x482c16['b'])(_0x482c16['a']["STUDENT_DASHBOARD_HOME"]));
          }
        }, {
          'key': 'setDocumentTitle',
          'value': function (_0x4b9d34) {
            this["documentTitle"] !== _0x4b9d34 && (document["title"] = this['documentTitle'] = _0x4b9d34, this["preventBrowserNavigation"]());
          }
        }, {
          'key': 'createDocumentTitle',
          'value': function (_0xfa6fdf) {
            var _0x1f2849 = _0xfa6fdf["showSubjectPicker"];
            var _0x12eca7 = _0xfa6fdf['selectedSubject'];
            var _0x10f3ca = void 0x0 === _0x12eca7 ? '' : _0x12eca7;
            var _0x22df26 = _0xfa6fdf["selectedFooterElement"];
            var _0x4ab8cf = void 0x0 === _0x22df26 ? '' : _0x22df26;
            var _0xb0277c = _0xfa6fdf["selectedMyStuffElement"];
            var _0x52c133 = Object(_0x2c6c15['e'])("dashboard:I_READY_TITLE");
            var _0x427768 = '';
            if (_0x1f2849) {
              _0x427768 = Object(_0x2c6c15['e'])("dashboard:CHOOSE_SUBJECT");
            } else {
              if (_0x10f3ca) {
                var _0x2f8d54 = Object(_0x2c6c15['e'])("dashboard:"['concat'](_0x3449db['b'][_0x10f3ca]["toUpperCase"](), "_SUBJECT_NAME"));
                var _0x492579 = Object(_0x2c6c15['e'])("dashboard.footer:"["concat"](_0x4ab8cf));
                if ([_0x395fd6['a']['TO_DO']["name"], _0x395fd6['a']["MY_PROGRESS"]['name']]["includes"](_0x4ab8cf)) {
                  _0x427768 = ''["concat"](_0x2f8d54, '\x20')["concat"](_0x492579);
                } else {
                  if (_0x395fd6['a']["MY_STUFF"]["name"] === _0x4ab8cf) {
                    var _0x24718e = Object(_0x2c6c15['e'])('myStuff:'["concat"](_0xb0277c || ''));
                    _0x427768 = ''["concat"](_0x492579, '\x20')["concat"](_0x24718e);
                  } else {
                    _0x427768 = _0x492579;
                  }
                }
              }
            }
            return _0x427768 ? ''['concat'](_0x427768, ',\x20')["concat"](_0x52c133) : _0x52c133;
          }
        }]);
        return _0x7e59a4;
      }();
      var _0x23da18 = new _0x2a7190();
      _0x48fc07['a'] = _0x23da18;
    })["call"](this, _0x345643(0x5a));
  },
  0x3f3: function (_0x266812, _0x1da9d6, _0x4fc328) {
    'use strict';

    var _0xd16dcf = _0x4fc328(0x394);
    var _0x6d5f5a = _0x4fc328(0x0);
    var _0x117301 = _0x4fc328['n'](_0x6d5f5a);
    var _0xbe1715 = _0x4fc328(0x59);
    var _0x3b0728 = _0x4fc328(0x45);
    var _0xe942f0 = _0x4fc328(0x38f);
    var _0x43dbce = _0x4fc328(0x12c);
    var _0x3d2bc3 = ["buddy", "height", "isSad", "width"];
    function _0xd2f024(_0xb3804d) {
      var _0x1e4b6d = _0xb3804d["buddy"]["name"];
      var _0x55455d = void 0x0 === _0x1e4b6d ? '' : _0x1e4b6d;
      var _0x459937 = _0xb3804d["isSad"];
      return _0x55455d && _0x43dbce['a']["Buddy"["concat"](_0x55455d)["concat"](_0x459937 ? "Sad" : '')];
    }
    function _0x5c378d(_0x1cc074) {
      var _0x16023a = _0x1cc074["buddy"];
      var _0x109cb4 = _0x1cc074["height"];
      var _0x613392 = _0x1cc074["isSad"];
      var _0x4f7274 = _0x1cc074['width'];
      var _0x3c0d1e = Object(_0xd16dcf['a'])(_0x1cc074, _0x3d2bc3);
      var _0x2a7a33 = _0xd2f024({
        'buddy': _0x16023a,
        'isSad': _0x613392
      });
      _0x2a7a33 || (_0x2a7a33 = _0xd2f024({
        'buddy': _0x3b0728['a']["DEFAULT_BUDDY"],
        'isSad': _0x613392
      }));
      return _0x2a7a33 ? _0x117301['a']['createElement']("div", Object["assign"]({
        'alt-text': _0x16023a["name"],
        'title': _0x16023a["name"] || '',
        'id': "current-buddy",
        'style': {
          'height': _0x109cb4,
          'width': _0x4f7274
        }
      }, _0x3c0d1e), _0x117301['a']["createElement"](_0x2a7a33, {
        'style': {
          'display': 'block',
          'height': '100%',
          'width': '100%'
        }
      })) : null;
    }
    function _0x3eac15(_0x358d3d) {
      return {
        'buddy': Object(_0xe942f0['p'])(_0x358d3d)
      };
    }
    var _0x260c68 = Object(_0xbe1715["connect"])(_0x3eac15, {})(_0x5c378d);
    __TEST__;
    _0x1da9d6['a'] = _0x260c68;
  },
  0x3f4: function (_0x15c161, _0x39014f, _0x29625b) {
    'use strict';

    var _0x12afc7;
    var _0x18a8d9;
    var _0x3ac6c5;
    var _0x526de6 = _0x29625b(0x16);
    var _0x5241fb = _0x29625b(0x14);
    var _0x4861e1 = _0x29625b['n'](_0x5241fb);
    var _0x3c1426 = _0x29625b(0x0);
    var _0x3241d6 = _0x29625b['n'](_0x3c1426);
    var _0x29c5a3 = _0x29625b(0x45);
    var _0x4e221a = _0x29625b['p'] + "static/media/ela_lesson_default_3_small.e4add9c2.jpg";
    var _0x4f7a46 = _0x29625b['p'] + "static/media/ela_lesson_default_3_large.e466bb50.jpg";
    var _0x14f246 = _0x29625b['p'] + "static/media/asr_3_large.3ac1e5ff.jpg";
    var _0x558555 = _0x29625b['p'] + "static/media/asr_3_small.b55c1cf5.jpg";
    var _0x437ad1 = _0x29625b['p'] + "static/media/math_lesson_default_3_small.262c4b58.jpg";
    var _0x2a4af1 = _0x29625b['p'] + "static/media/math_lesson_default_3_large.c0af90fb.jpg";
    var _0x14c3ce = _0x29625b['p'] + 'static/media/diagnostic_3_large.ff04c468.jpg';
    var _0x56d15a = _0x29625b['p'] + 'static/media/diagnostic_3_small.406c03eb.jpg';
    var _0x12dbc2 = _0x29625b['p'] + 'static/media/growth_monitoring_3_large.8e35fbc2.jpg';
    var _0x45f521 = _0x29625b['p'] + "static/media/growth_monitoring_3_small.f3b77a3c.jpg";
    var _0x3a1849 = _0x29625b['p'] + 'static/media/ism_3_large.0a47a647.jpg';
    var _0x17a92c = _0x29625b['p'] + "static/media/ism_3_small.a3a3d017.jpg";
    var _0x27b7bd = _0x29625b['p'] + "static/media/comp_check_3_large.fa4754bb.jpg";
    var _0x51d46e = _0x29625b(0x427);
    var _0x530e39 = _0x29625b(0x428);
    function _0x528bf3(_0x31d216) {
      var _0x22a668 = _0x31d216["color"];
      var _0x56a50d = void 0x0 === _0x22a668 ? "#056" : _0x22a668;
      var _0x105e19 = _0x31d216["style"];
      return _0x3241d6['a']['createElement']("svg", {
        'xmlns': "http://www.w3.org/2000/svg",
        'width': '130',
        'height': '130',
        'aria-hidden': 'true',
        'viewBox': '0\x200\x20130\x20130',
        'style': _0x105e19
      }, _0x3241d6['a']["createElement"]('g', {
        'data-name': "Layer 3",
        'fill': "none",
        'stroke': _0x56a50d,
        'stroke-linecap': "round",
        'stroke-linejoin': 'round'
      }, _0x3241d6['a']['createElement']("path", {
        'd': "M67.83 65.49V27.1a60.39 60.39 0 0 0-49.69 0v40.16",
        'stroke-width': "5.14"
      }), _0x3241d6['a']['createElement']("path", {
        'stroke-width': "2.57",
        'd': "M24.39 83.19h38.16M24.39 72.78h38.16M30.46 62.38h26.02M22.15 97a71.53 71.53 0 0 1 43.23-.85"
      }), _0x3241d6['a']["createElement"]("circle", {
        'cx': "43.47",
        'cy': "78.98",
        'r': '27.88',
        'stroke-width': "5.14"
      }), _0x3241d6['a']["createElement"]("path", {
        'stroke-width': "5.14",
        'd': 'M22.53\x2099.92L4.52\x20117.94M67.83\x2027.1a60.39\x2060.39\x200\x200\x201\x2049.69\x200v63.22a60.35\x2060.35\x200\x200\x200-48.32-.6'
      })));
    }
    function _0x2aa6be(_0x5bbe1b) {
      var _0x3d18d0 = _0x5bbe1b['color'];
      var _0x5b9934 = void 0x0 === _0x3d18d0 ? "#056" : _0x3d18d0;
      var _0xd196d7 = _0x5bbe1b["style"];
      var _0x1acd5f = void 0x0 === _0xd196d7 ? {
        'width': 0x82,
        'height': 0x82
      } : _0xd196d7;
      return _0x3241d6['a']["createElement"]("svg", {
        'aria-hidden': "true",
        'xmlns': "http://www.w3.org/2000/svg",
        'width': _0x1acd5f["width"],
        'height': _0x1acd5f["height"],
        'viewBox': "0 0 130 130",
        'style': _0x1acd5f
      }, _0x3241d6['a']["createElement"]("path", {
        'd': "M80.94 108.41s-7.83-7.27-7.79-12.35a10.64 10.64 0 0 1-3.54.48A6.33 6.33 0 0 1 64 92.11a32.15 32.15 0 0 1-11.82 2.61c-4 0-7-1.15-8.85-3.42-1.72-2.08-3.12-6.59-2.79-10.89a14.81 14.81 0 0 1-5.17 1 9.48 9.48 0 0 1-2.19-.24c-5.2-1.26-7.12-5.85-6.81-10-5.51-.79-8.65-5.61-9.45-8.89a28.52 28.52 0 0 1 6.94-25.27c3.51-3.94 9.21-8.63 16.45-8.63h.59c1.63-4.12 6-6.83 11.22-6.83a12.52 12.52 0 0 1 9.18 3.72 12.15 12.15 0 0 1 9-3.77 11.54 11.54 0 0 1 10 5.34 18 18 0 0 1 6.4-1.19 14.94 14.94 0 0 1 11.47 5.07c3.85 4.53 3.8 7.48 3.76 10.33v.1c6.72 2.16 11.71 10.13 11.71 19 0 10.71-4.64 15.35-9 17.33 3.73 5.32.75 9.33-.32 10.48a7.62 7.62 0 0 1-5 2.51A9.35 9.35 0 0 1 97 96.91c-1.74 1.77-4.32 2.67-7.66 2.67a22.1 22.1 0 0 1-4.34-.45 26.11 26.11 0 0 0 4.3 7.62s.55 1.66-.76 1.66z",
        'fill': 'none',
        'stroke': _0x5b9934,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '3'
      }), _0x3241d6['a']["createElement"]("path", {
        'd': "M54.06 54.72c-2.3 3.43-12 10.28-20.34 0M40.19 59.57s-1.87 9.93-11 10.74c-6.78.7-10.41-4.81-11.23-8.19a27.64 27.64 0 0 1 6.72-24.37c4.49-5 10.44-8.79 17-8.23C44 21.71 56.23 20.11 61.38 27c3.51-5.56 14.58-6.5 18.56 1.23 6.55-2.81 13.57-1.41 17.55 3.27S101 39 101 42c6.55 1.64 11.72 9.4 11.72 18.21 0 4.92-1 13.85-9.61 16.9 4 4.68 2.29 8.35.55 10.23s-4.53 3.34-9.91 1.23c-3 2.81-10.77 2.53-15 .8s-10.56-.57-14.06 1.31-15.78 5.81-20.58 0c-1.87-2.27-3.2-7.54-2.34-11.85",
        'fill': "none",
        'stroke': _0x5b9934,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '2'
      }), _0x3241d6['a']["createElement"]("path", {
        'd': "M27.51 70.39c-.7 4.13 1.13 8.67 5.93 9.84 3.94 1 10.5-1.13 14.46-6.58 7.74 6.8 24.45 4.53 27.26-5.12M79.94 28.19C75.16 39.27 61 32.3 54.06 40.38M67 35.51s6.57 7.34 0 14.67M101 42c-1.4 3-5.08 4.54-10.16 4M100.2 54.72c.56 2.68 2 7.17-2 11.84s-9.76 5.63-11.81 10.12M92 71.42s3.85 5.08 1.17 9.6M64.71 90.67a5.4 5.4 0 0 0 5 4.88A5.63 5.63 0 0 0 74 94.37s-.37 5.67 7.35 13h7.23a26.44 26.44 0 0 1-5-9.67c1.12.36 15.05 4.17 14.84-8.15",
        'fill': "none",
        'stroke': _0x5b9934,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2'
      }));
    }
    function _0x312f02(_0x2fe38f) {
      var _0x51bdf3 = _0x2fe38f["color"];
      var _0x359a06 = void 0x0 === _0x51bdf3 ? "#056" : _0x51bdf3;
      var _0x11545c = _0x2fe38f["style"];
      var _0x566fad = void 0x0 === _0x11545c ? {
        'width': 0x82,
        'height': 0x82
      } : _0x11545c;
      return _0x3241d6['a']['createElement']("svg", {
        'aria-hidden': 'true',
        'xmlns': "http://www.w3.org/2000/svg",
        'width': _0x566fad["width"],
        'height': _0x566fad["height"],
        'viewBox': "0 0 130 130",
        'style': _0x566fad
      }, _0x3241d6['a']["createElement"]("path", {
        'fill': 'none',
        'stroke': _0x359a06,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '8',
        'd': "M94.25 45.5l-39 39L35.75 65"
      }), _0x3241d6['a']['createElement']("circle", {
        'cx': '65',
        'cy': '65',
        'r': '52',
        'fill': "none",
        'stroke': _0x359a06,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '4'
      }));
    }
    function _0x234bcf(_0x1bf585) {
      var _0x55264d = _0x1bf585['color'];
      var _0x1ae5b3 = void 0x0 === _0x55264d ? "#056" : _0x55264d;
      var _0x2e7984 = _0x1bf585["style"];
      var _0x220bd8 = void 0x0 === _0x2e7984 ? {
        'width': 0x82,
        'height': 0x82
      } : _0x2e7984;
      return _0x3241d6['a']["createElement"]("svg", {
        'aria-hidden': "true",
        'xmlns': "http://www.w3.org/2000/svg",
        'width': _0x220bd8["width"],
        'height': _0x220bd8['height'],
        'viewBox': '0\x200\x20130\x20130',
        'style': _0x220bd8
      }, _0x3241d6['a']["createElement"]("path", {
        'fill': "none",
        'stroke': _0x1ae5b3,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '4',
        'd': "M6.5 114.6h117M41 114.6V97.8a3.81 3.81 0 0 0-3.59-4h-6.82a3.81 3.81 0 0 0-3.59 4v16.8M72 114.6v-48a3.81 3.81 0 0 0-3.59-4h-6.82a3.81 3.81 0 0 0-3.59 4v48M103.14 114.6V34.48l7.86 7.84a4 4 0 0 0 5.66 0l1.41-1.41a4 4 0 0 0 0-5.66l-18.4-18.38a5 5 0 0 0-7.07 0L74.22 35.25a4 4 0 0 0 0 5.66l1.41 1.41a4 4 0 0 0 5.66 0l7.85-7.84v80.12"
      }));
    }
    function _0x525f08(_0x1592ac) {
      var _0x3f4103 = _0x1592ac['color'];
      var _0x583267 = void 0x0 === _0x3f4103 ? "#056" : _0x3f4103;
      var _0x5505ad = _0x1592ac["style"];
      var _0x1b6615 = void 0x0 === _0x5505ad ? {
        'width': 0x82,
        'height': 0x82
      } : _0x5505ad;
      return _0x3241d6['a']["createElement"]("svg", {
        'aria-hidden': 'true',
        'xmlns': "http://www.w3.org/2000/svg",
        'width': _0x1b6615["width"],
        'height': _0x1b6615["height"],
        'viewBox': "0 0 130 130",
        'style': _0x1b6615
      }, _0x3241d6['a']["createElement"]('g', {
        'data-name': "Layer 3",
        'fill': 'none',
        'stroke': _0x583267,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }, _0x3241d6['a']["createElement"]('path', {
        'd': 'M65.45\x2022.54l5.33\x2010.8\x2011.91\x201.73a.5.5\x200\x200\x201\x20.28.86l-8.62\x208.4\x202\x2011.87a.51.51\x200\x200\x201-.74.53L65\x2051.13l-10.65\x205.6a.51.51\x200\x200\x201-.74-.53l2-11.87-8.61-8.4a.5.5\x200\x200\x201\x20.28-.86l11.91-1.73\x205.33-10.8a.5.5\x200\x200\x201\x20.93\x200z',
        'stroke-width': '3'
      }), _0x3241d6['a']['createElement']("rect", {
        'x': '20',
        'y': '7',
        'width': '90',
        'height': "116",
        'rx': '16',
        'stroke-width': '4.5'
      }), _0x3241d6['a']['createElement']("path", {
        'stroke-width': "2.5",
        'd': "M34.47 100.26h61.06M34.47 87.21h61.06M34.47 74.16h61.06"
      })));
    }
    var _0x2da39d = _0x29c5a3['a']["ACTIVITY_TYPE"];
    var _0xf608a5 = _0x29c5a3['a']["LESSON_CHANNEL"];
    var _0x113d85 = _0x29c5a3['a']["ASSESSMENT_TYPE"];
    _0x12afc7 = {};
    Object(_0x526de6['a'])(_0x12afc7, _0xf608a5["MAIN"], {
      'math': {
        'small': _0x437ad1,
        'large': _0x2a4af1
      },
      'ela': {
        'small': _0x4e221a,
        'large': _0x4f7a46
      }
    });
    Object(_0x526de6['a'])(_0x12afc7, _0xf608a5["EXTRA_LESSON"], {
      'math': {
        'small': _0x437ad1,
        'large': _0x2a4af1
      },
      'ela': {
        'small': _0x4e221a,
        'large': _0x4f7a46
      }
    });
    Object(_0x526de6['a'])(_0x12afc7, _0xf608a5['BASAL_PRACTICE'], {
      'math': {
        'small': _0x437ad1,
        'large': _0x2a4af1
      }
    });
    Object(_0x526de6['a'])(_0x12afc7, _0xf608a5["CLOSE_READING"], {
      'ela': {
        'small': _0x4e221a,
        'large': _0x4f7a46
      }
    });
    var _0x17c902 = _0x12afc7;
    var _0x3280f8 = {
      'gk2': (_0x18a8d9 = {}, Object(_0x526de6['a'])(_0x18a8d9, _0x113d85['DIAGNOSTIC'], {
        'small': _0x2aa6be
      }), Object(_0x526de6['a'])(_0x18a8d9, _0x113d85["GROWTH_MONITORING"], {
        'small': _0x234bcf
      }), Object(_0x526de6['a'])(_0x18a8d9, _0x113d85["ISM"], {
        'small': _0x525f08
      }), Object(_0x526de6['a'])(_0x18a8d9, _0x113d85["BASAL_CHECK"], {
        'small': _0x312f02
      }), Object(_0x526de6['a'])(_0x18a8d9, _0x2da39d["ASR"], {
        'small': _0x2aa6be
      }), _0x18a8d9),
      'g38': (_0x3ac6c5 = {}, Object(_0x526de6['a'])(_0x3ac6c5, _0x113d85["DIAGNOSTIC"], {
        'small': _0x56d15a,
        'large': _0x14c3ce
      }), Object(_0x526de6['a'])(_0x3ac6c5, _0x113d85["GROWTH_MONITORING"], {
        'small': _0x45f521,
        'large': _0x12dbc2
      }), Object(_0x526de6['a'])(_0x3ac6c5, _0x113d85["ISM"], {
        'small': _0x17a92c,
        'large': _0x3a1849
      }), Object(_0x526de6['a'])(_0x3ac6c5, _0x113d85["BASAL_CHECK"], {
        'small': "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAN2gAwAEAAAAAQAAANwAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIANwA3QMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/3QAEAA7/2gAMAwEAAhEDEQA/APqvX/8AkO6l/wBfM3/oZrIrX1//AJDupf8AXzN/6GayK/sbDfw4+iP8vsf/AB6nq/zCiiitjkCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK67wr/y9f8AAP8A2auRrrvCv/L1/wAA/wDZq4sx/gy/rqerkn+9Q+f5M//Q+q9f/wCQ7qX/AF8zf+hmsitfX/8AkO6l/wBfM3/oZrIr+xsN/Dj6I/y+x/8AHqer/MKKKK2OQKKKKACiiigAorovDvhPxD4rufsuhWT3JBAZxxGmf7znCj88ntX0f4Z/Z50+ALceK71rqTg+RbnZGPYuRuYfQLXg5vxLg8FpXn73Zav7unzsfY8NcBZpm2uEpe5/M9I/f1+V2fKCI0jBEBZm4AHJJrtNM+G/jrWAGsdFuCrdGkUQqfoZCoNfeGi+FvDvh2MR6Jp0NpgY3Ig3ke7nLH8Sa3q/Pcb4oSvbDUfnJ/ov8z9ryn6PtNJPHYlt9oK34u//AKSj4ntfgF48uADN9ktc/wDPSYn/ANAV61x+zr4pwN2pWQPfBkP/ALJX2DRXg1PETMm9HFfL/M+xo+B+RRVpRlL1l/kkfHMv7O3i5RmHULFz3BaVfy/dmuevfgf8Q7QExWcV2B/zymT+TlT+lfc9FXS8Rsxi/e5X6r/JozxPgZkc1aHPH0l/mmfmxqvhfxHoeTq+mXFoo/ikjYJ+DY2n8DWFX6hkBgVYZB4INeeeIPhX4H8RhmudOW2nb/lrbYhfPqcDaT/vA19LgPE+DdsVSt5xd/wf+Z8HnP0fqsU5YDEKXlJW/FX/ACR+f9Fe+eK/gJ4g0lXu/Dkw1W3HPlkBJwPYfdb8CD6CvCbi2uLSd7a7iaGaM4ZHUqyn0IPIr9Ey3OMNjI8+HmpfmvVbn4hn3DGPyyp7PHUnDs+j9GtH95DRRRXpHghRRRQAUUUUAFdd4V/5ev8AgH/s1cjXXeFf+Xr/AIB/7NXFmP8ABl/XU9XJP96h8/yZ/9H6r1//AJDupf8AXzN/6GayK19f/wCQ7qX/AF8zf+hmsiv7Gw38OPoj/L7H/wAep6v8wooorY5AooqzZ2d1qF1FZWUTTzzsEREGWZj0AFKUkldlQg5NRirtkCI0jBEBZmIAAGSSewr6R8AfAqe9EWreNN0EBwyWanEjD/pow+6P9kfN6kV6R8MvhLZ+EY49X1pUudYYZH8SW4PZPVvVvwHHJ9pr8e4o4/lJvD4B2XWXf0/z+4/p7w98GIQjHGZxG8t1T6L/ABd3/d2XW+ypafp1hpNpHYaZbpa28QwscahVH4Dv6nvV2iivyuU3JuUndn9E06cYRUYKyXQKKKKksKKKKACiiigAooooAK4vxd4B8N+NLcx6tbAXAGEuI/llT/gXcexyK7Sit8NiqlGaqUpNSXVHHj8voYqlKhiYKUHumro+AfHfwz17wNN5twv2rTnOI7pB8uT0Djna314PYnnHnNfp5dWttfW0lneRLPBMpV0cBlYHsQa+N/in8JJfCpfXfD6tNpLHLpyzWxPqepT0J5HQ+p/auE+OY4prD4vSfR9H/k/wf4H8p+I/hFPL4yx2W3lRWrju4+fnH8V1urs8Looor9HPwsKKKKACuu8K/wDL1/wD/wBmrka67wr/AMvX/AP/AGauLMf4Mv66nq5J/vUPn+TP/9L6r1//AJDupf8AXzN/6GayK19f/wCQ7qX/AF8zf+hmsiv7Gw38OPoj/L7H/wAep6v8wooorY5BVVmYKoyTwAOpNfa/wj+GUfhOyXXNYjzrFyvCn/l3jb+Af7R/iP4DvnzP4F+AF1K7/wCEx1WLdbWjbbVW6PMvV8eidv8Aa/3a+uK/HvEDihuTwFB6L4n+n+f3dz+nvBfw+jGEc5xkdX/DT6L+b1f2fLXqrFFFFflB/RwUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUySOOaN4ZkDxuCrKwyCDwQQeoNPooTE1fRnxD8W/hq/g+/wD7W0pC2j3bHHfyJDzsP+yf4T+B5HPjNfplq+k2Ou6ZcaRqcfm210hR19j3B7EHkHsa/PTxj4XvfB+v3Oh3nzeUd0b4wJIm+6w+vf0ORX7zwNxO8ZS+r13+8j+K7+q6/efx54u+H6yyusbhI/uaj2/ll29Huu2q7HMUUUV9+fi4V13hX/l6/wCAf+zVyNdd4V/5ev8AgH/s1cWY/wAGX9dT1ck/3qHz/Jn/0/qvX/8AkO6l/wBfM3/oZrIrX1//AJDupf8AXzN/6GayK/sbDfw4+iP8vsf/AB6nq/zCt3w1oN14m12y0Kz/ANZdyBS2M7V6sx9lUE/hWFX1L+zx4ZAS/wDFlwvJP2WAn0GGkP8A6CAfrXlcRZssFg51+q0Xq9v8z6Lgfhx5rmdHB/ZbvL/CtX9+y82j6P0nS7PRdNttJsE8u3tI1jQeyjqfc9Se5rQoor+ZJzcpOUnds/vulSjCKhBWS0S8goooqTQKKKKACiiigAooooAKKKKACiiigAor86f2tP2wD4Je5+Gvwqu1bX1JS/1BMOtl6wxZyDN2Y9I+g+f7n5q6T8d/jPomsR67Y+NtX+2RvvzLeyzo5znEkcrMjqT1VgQfSsZ10nY6qeElJXP6QKK8Q/Z4+LTfGn4WaZ41uoUttQLSW17FHny1uYThimckK6lXAJON2MnGT7fWqd1c5pRadmFeK/G7wcviDwy2tWqf6dpAaTI6tB1kX8PvD6HHWvaqa6LIpRwGVgQQRkEHsa9DK8wnhMRDEU94v/h180eLxDklLMcFVwVbaat6Po/k9T8vaK7Dx74cPhTxZqGjKCIY33w57xSfMnPfAOD7g1x9f1FhsRGtTjVhtJJr5n+e+PwNTDV54eqrSg2n6p2Cuu8K/wDL1/wD/wBmrka67wr/AMvX/AP/AGascx/gy/rqdWSf71D5/kz/1PqvX/8AkO6l/wBfM3/oZrIrX1//AJDupf8AXzN/6GayK/sbDfw4+iP8vsf/AB6nq/zCv0Y8C6GPDnhHS9I27ZIYVaQf9NX+d/8Ax4mvg3wZpg1jxZpGmsNyT3UQcf7AYFv/AB0Gv0er8q8UMa7UcMvOT/Jfqf0V9HzKVfE46S10gvzl/wC2hRRRX5Ef0uFFFFABRRRQAUUUUAFFFFABRRRQAV+cn7XX7XS+EVvPhd8LrwNrrAxahqERyLIHhoYWH/LfszD/AFfQfP8AcP2uv2ul8IrefC74XXgbXWBi1DUIjkWQPDQwsP8Alv2Zh/q+g+f7n5CO7SMXclmYkkk5JJ7muatW6I78Nhr+9IHdpGLuSzMSSSckk9zVvTdN1DWdQttJ0m2kvL28kWKGGJS8kkjnCqqjkkngAUabpuoazqFtpOk20l5e3kixQwxKXkkkc4VVUckk8ACv24/ZU/ZU0/4OafH4w8YRx3njO8j9nj0+NxzFEehkI4kkH+6vy5L4U6bkzrrVlBHqf7Mnwovvg58ItM8KawytqszyXt6EOVSefH7sHodihVJHBIJHBFfQFFFd6VlY8eUm3dhRRRTJPlz9ozQwDpXiSNeTutJT+bx/+z18vV95/GTTBqfw91LC7pLXZcL7eWw3H/vgtXwZX7/4eY11cuUHvBtfqvzP4x8bcpWGzuVWK0qRUvn8L/K/zCuu8K/8vX/AP/Zq5Guu8K/8vX/AP/Zq+szH+DL+up+bZJ/vUPn+TP/V+q9f/wCQ7qX/AF8zf+hmsitfX/8AkO6l/wBfM3/oZrIr+xsN/Dj6I/y+x/8AHqer/M9Y+CVqLn4i6e7DIt0nk/8AIbKP1avuyvin4Aqp8dsSMlbSUj2O5BX2tX4b4kzbzBLtFfmz+ufAiio5JKS61JP8Ir9Aooor8/P2gKx9e8Q6D4W0ubW/Euo2+lafBjzLi6lWGJc8AFnIGSeAO56VsV+Lv/BQLxzr2rfFqDwPNLJHo+hWkEkUPIjknuFLvNj+I7SEB7bSB1OYqT5Vc1o0ueVj9TPCPxy+EXjzU/7F8JeLLDUb88rbpLtlfHXYr7S+O+3OK9Wr+W22ubizuIryzleCeB1kjkjYq6OpyrKw5BB5BHSv2d/ZL/a0t/ibb2/w8+IdwkHi2BNttcthU1FFH5CcD7y/x/eXuBnTrX0ZvXwjirxPvWiiitzjCiiigAr85P2uv2ul8IrefC74XXgbXWBi1DUIjkWQPDQwsP8Alv2Zh/q+g+f7h+11+10vhFbz4XfC68Da6wMWoahEciyB4aGFh/y37Mw/1fQfP9z8hHdpGLuSzMSSSckk9zXNWrdEd+Gw1/ekDu0jF3JZmJJJOSSe5q3pum6hrOoW2k6TbSXl7eSLFDDEpeSSRzhVVRySTwAKNN03UNZ1C20nSbaS8vbyRYoYYlLySSOcKqqOSSeABX7cfsqfsqaf8HNPj8YeMI47zxneR+zx6fG45iiPQyEcSSD/AHV+XJfCnTcmddasoIP2VP2VNP8Ag5p8fjDxhHHeeM7yP2ePT43HMUR6GQjiSQf7q/Lkv9p0UV3xikrI8ec3J3YUUUUyQooooAwfFVqt74Y1ezYZE1pOn/fUZFfmzX6dX/8Ax43H/XN/5GvzFr9i8LZv2dePnH9f8j+YPpC0kq2Dn1amvucf8wrrvCv/AC9f8A/9mrka67wr/wAvX/AP/Zq/Scx/gy/rqfg+Sf71D5/kz//W+q9f/wCQ7qX/AF8zf+hmsitfX/8AkO6l/wBfM3/oZrIr+xsN/Dj6I/y+x/8AHqer/M9n+A0/leP44+P31tMnPsA3H/fNfbtfn98KL4af8QtFmY4Ekxh+vnI0Y/VhX6A1+I+JdFxx0Z94r82f1l4C4pTyepT6xqP7mov/ADCiiivzs/bwr4b/AGwv2Ybj4v6fH478FqP+Eq0i38prc4C31uhLCME8CVCTsJ4bO0/wkfclFTKKasy6c3F3R/Lbc21xZ3EtneRPBPA7RyRyKVdHU4ZWU8gg8EHpRbXNxZ3EV5ZyvBPA6yRyRsVdHU5VlYcgg8gjpX7O/tafsl2/xNt7j4h/Dy3SDxbAm65tlwqaiij8hOB91v4/ut2I/GK5trizuJbO8ieCeB2jkjkUq6Opwysp5BB4IPSuGpTcWexSqqauj9nf2S/2tLf4m29v8PPiHcJB4tgTbbXLYVNRRR+QnA+8v8f3l7gfetfy221zcWdxFeWcrwTwOskckbFXR1OVZWHIIPII6V+zv7Jf7Wlv8Tbe3+HnxDuEg8WwJttrlsKmooo/ITgfeX+P7y9wOijWvozixOGt70T71r85P2uv2ul8IrefC74XXgbXWBi1DUIjkWQPDQwsP+W/ZmH+r6D5/uH7XX7XS+EVvPhd8LrwNrrAxahqERyLIHhoYWH/AC37Mw/1fQfP9z8hHdpGLuSzMSSSckk9zSrVuiHhsNf3pA7tIxdyWZiSSTkknuat6bpuoazqFtpOk20l5e3kixQwxKXkkkc4VVUckk8ACjTdN1DWdQttJ0m2kvL28kWKGGJS8kkjnCqqjkkngAV+3H7Kn7Kmn/BzT4/GHjCOO88Z3kfs8enxuOYoj0MhHEkg/wB1flyXwp03JnXWrKCD9lT9lTT/AIOafH4w8YRx3njO8j9nj0+NxzFEehkI4kkH+6vy5L/adFFd8YpKyPHnNyd2FFFFMkKKKKACiiigDP1aZbfSr2dukcMjHtwFJr8y6/RH4i3403wNrl0TtP2WSMH/AGpR5a/qwr87q/ZvC6i1RrVO7S+5f8E/lr6QmJTxWFo9VGT+9pf+2hXXeFf+Xr/gH/s1cjXXeFf+Xr/gH/s1fouY/wAGX9dT8NyT/eofP8mf/9f6r1//AJDupf8AXzN/6GayK19f/wCQ7qX/AF8zf+hmsiv7Gw38OPoj/L7H/wAep6v8y3YXkun31vfwf6y2kSVf95CGH6iv0vsruHULO3v7Y7ormNZEPqrgMP0NfmLX3F8EPEA1rwTDZSPuuNKc27A9dn3oz9Np2j/dr838Tcvc8PTxK+y7P0f/AAV+J+6+AOdKnjK+Bk/jSa9Y7r5p3+R7FRRRX4qf1YFFFFABXwV+1p+yXb/E23uPiH8PLdIPFsCbrm2XCpqKKPyE4H3W/j+63Yj71oqZRTVmXTqOLuj+W25trizuJbO8ieCeB2jkjkUq6Opwysp5BB4IPSi3uLi0uIru0laGeFleORGKujqchlI5BB5BHSv2d/a0/ZLt/ibb3HxD+HlukHi2BN1zbLhU1FFH5CcD7rfx/dbsR+MVzbXFncS2d5E8E8DtHJHIpV0dThlZTyCDwQelcNSm4s9ilVU1dEbu0jF3JZmJJJOSSe5q3pum6hrOoW2k6TbSXl7eSLFDDEpeSSRzhVVRySTwAKNN03UNZ1C20nSbaS8vbyRYoYYlLySSOcKqqOSSeABX7cfsqfsqaf8ABzT4/GHjCOO88Z3kfs8enxuOYoj0MhHEkg/3V+XJcp03JirVlBB+yp+ypp/wc0+Pxh4wjjvPGd5H7PHp8bjmKI9DIRxJIP8AdX5cl/tOiiu+MUlZHjzm5O7CiiimSFFFFABRRRQAUUUUAeFftAauLLwdDpat+81K4UEescXzk/g22vjCvbPjv4hGr+Mf7MhfdDpMYi46ea/zOf8A0FT7ivE6/ovgjL3h8upp7y95/Pb8LH8OeLOdLG55WcXeMLQX/bu//k1wrrvCv/L1/wAA/wDZq5Guu8K/8vX/AAD/ANmr6DMf4Mv66nxeSf71D5/kz//Q+q9f/wCQ7qX/AF8zf+hmsitfX/8AkO6l/wBfM3/oZrIr+xsN/Dj6I/y+x/8AHqer/MK9e+C/itfDfi+O0uX22eqgW756CTP7tj/wL5fYMTXkNKCQcjgisMywEMVQnh6m0lb/AIPy3OvIs4q5fjKWMo/FBp+vdfNaM/UOivLvhP43Txj4bjW5cHUrALFcDPLcfLJ/wIDn3B9q9Rr+X8fgqmGrSoVVaUXb+vU/0DybNqOOwtPF4d3jNXX+Xqno/MKKKK5D0wooooAK+V/jD+yB8KPjFrbeJ9RF1ousy48+5sGRPtG3gGWN0dS2ONwAY8ZJwBX1RRSaT3KjNxd0fNfwZ/ZV+FnwTvm1zQop9U1pgVW+v2SSSFWGGEKoqImRwTgsRkbsHFfSlFFCSWwSk27sKKKKZIUUUUAFFFFABRRRQAVz3ivxDb+FvD17rtzgi2jJRScb5Dwi/i2BXQ18cfHXxwNa1ZfC+nSbrPTWJmI6PcdCPogyPqT6CvoeGMlljsXGl9lay9P+DsfE+IHFcMny2eJv770gu8n+i3fpbqeF3l3cX93NfXbmSe4dpHY9WZzkn8TVaiiv6WjFJWR/Bc5uTcpO7YV13hX/AJev+Af+zVyNdd4V/wCXr/gH/s1ceY/wZf11PTyT/eofP8mf/9H6r1//AJDupf8AXzN/6GayK19f/wCQ7qX/AF8zf+hmsiv7Gw38OPoj/L7H/wAep6v8wooorY5DrPBfi2/8F69BrNl86D5Jos4EsRPzKffuD2IBr9BNF1nT/EGl2+saVKJra5Xcp7j1BHYg8EetfmfXqfwx+JF14G1EwXW6bSLpv30Q6o3TzEHqB1HcfQY+C414V+u0/b0F+8j/AOTLt69vu9P2Two8Rf7KrfU8W/3E3v8AyPv6Pr9/e/3jRVPT9QsdVsotR02dbi2nXckiHII/z1HUHg1cr8GlFxbjJWaP7Fp1Izipwd09mFFFFSWFFFFABRRRQAUUUUAFFFFABRRRQAUUV558QviFpvgTTfMkxPqE4P2e3zyT/eb0Qfr0Ht04PB1cRVjRoxvJnBmmaUMFQnicTPlhHVt/1v2XUwvi38RY/B+knTdOkH9sXykR46woeDIffsvqeexr4cZmZizHJPJJ6k1o6xq+oa9qU+rapMZ7m4YszH9APQAcAdhWbX9GcM8PQy/D+zWsnrJ93/kuh/DfH3G1XO8a6z0px0hHsu7831+S6BRRRX0Z8MFdd4V/5ev+Af8As1cjXXeFf+Xr/gH/ALNXFmP8GX9dT1ck/wB6h8/yZ//S+q9f/wCQ7qX/AF8zf+hmsitfX/8AkO6l/wBfM3/oZrIr+xsN/Dj6I/y+x/8AHqer/MKKKK2OQKKKKAPR/h/8SdY8CXe2LN1pspzLbMcDJ/iQ/wALfoe/Yj7Z8MeLND8X6eNQ0S4Eq8b0PEkbHs69j+h7E1+b9auja3qvh+/TUtGuXtbmPoyHqPQjoQe4ORXxPE3BdHHXq0/dqd+j9f8AP8z9Y4B8VcVlFsPXXtKHbrH/AAv9Hp2sfpfRXzn4N+Pum3qx2XjCL7FPwPtMQLQt7svLKfpkfQV9BWV9ZajbJeafPHcwScq8bB1P0IyK/Es0yTFYKfJiIW8+j9Gf1jw9xZl+aU/aYKqpd1tJeq3/AE7MtUUUV5R9GFFFFABRRRQAUUUUAFFcr4m8a+GvCMHm63epE5GViX5pX+iDn8Tx6mvlrxt8ctc19ZNP8PK2lWLZBcH/AEhwfVhwn0Xn/ar6TJOFcZjmnTjaP8z2/wCD8j4XivxEyzKItV581T+SOsvn2+dvK57X8RPi9pPhFJNN0orfav02A5jhPrIR3/2Rz647/GGratqOuahNqmrTtc3U5y7t/IDoAOwHA7VnkknJ5JpK/cuH+GcPl8LU9ZPeT3f+S8vzP5F404+xud1eau+Wmvhgtl5vu/P7rBRRRX0R8OFFFFABXXeFf+Xr/gH/ALNXI113hX/l6/4B/wCzVxZj/Bl/XU9XJP8AeofP8mf/0/qvX/8AkO6l/wBfM3/oZrIrX1//AJDupf8AXzN/6GayK/sbDfw4+iP8vsf/AB6nq/zCiiitjkCiiigAooooAK2tF8Ra74dn+06JfS2bnGfLYhWx/eXow9iDWLRWdWlGcXGaun0Zth8RUpTVSlJxktmnZr5o+hdD/aG8QWgWLXrGHUFHBkjPkyH3PDKfwAr1PTPj34FvQBfG409u/mRF1/Ax7ifyFfE9FfI43gPLazuocr/uu34ar8D9Lynxiz3CpRdVVEv51f8AFWl+J+h1r8SPAd4AYddtFz/z0kEX/oe2tceLPCzAMus2RB5BFxH/APFV+bVFeDU8L8Pf3a0l8k/8j7Gj9ILGpfvMNFvybX+Z+kEvjLwjAN02t2KA9M3MQzj0+audvvi18PLAHzdZjkI7RK8ufxRSP1r4Boq6PhhhU/fqyfpZfozPE/SBzBr9zh4L15n+qPr7Vv2iPDtuGXRtOuL1x0MpWFPz+dv/AB0V4/4g+NvjjWw0NtOulwN/DbAq+PeQktn/AHSK8hor6XAcG5dh3zRpXfeWv56fgfB5z4pZ5jk4zruMX0j7v4rX72STTTXErT3EjSyOcszEsxPqSeTUdFFfTpW0R+fNtu7CiiimIKKKKACiiigArrvCv/L1/wAA/wDZq5Guu8K/8vX/AAD/ANmrizH+DL+up6uSf71D5/kz/9T6r1//AJDupf8AXzN/6GayK19f/wCQ7qX/AF8zf+hmsiv7Gw38OPoj/L7H/wAep6v8wooorY5AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuu8K/8vX/AAD/ANmrka67wr/y9f8AAP8A2auLMf4Mv66nq5J/vUPn+TP/2Q==",
        'large': _0x27b7bd
      }), Object(_0x526de6['a'])(_0x3ac6c5, _0x2da39d['ASR'], {
        'small': _0x558555,
        'large': _0x14f246
      }), _0x3ac6c5)
    };
    _0x39014f['a'] = function (_0x532ff4) {
      var _0x3cf509 = _0x532ff4["activity"];
      var _0x3879fe = _0x532ff4["cdnPath"];
      var _0x204cce = _0x532ff4['isk2'];
      var _0x3f82a7 = _0x532ff4["isCompletedWork"];
      var _0x1927d4 = void 0x0 !== _0x3f82a7 && _0x3f82a7;
      var _0x3bcf28 = _0x532ff4["selectedSubject"];
      var _0x2c3cdb = _0x532ff4["style"];
      var _0x1a5098 = _0x532ff4["imageSize"];
      var _0x4a11fb = void 0x0 === _0x1a5098 ? "small" : _0x1a5098;
      var _0x325574 = _0x532ff4["ariaHidden"];
      var _0x4509c6 = void 0x0 !== _0x325574 && _0x325574;
      var _0x15fad2 = _0x532ff4["color"];
      var _0x3216f4 = ''["concat"](_0x3879fe, "/instruction/content/dashboard/images/lessonthumbnails");
      var _0x3d8f59 = _0x2c3cdb;
      if (_0x3cf509) {
        var _0x4d6332 = _0x3cf509["entityType"];
        var _0x4519f7 = '';
        var _0x4ba740 = '';
        if (_0x4d6332 === _0x2da39d["LESSON"]) {
          var _0x4a8323 = function (_0x3371a6) {
            var _0x38313e;
            var _0x5a69c5 = _0x3371a6["activity"];
            var _0x2039d5 = _0x3371a6["isk2"];
            var _0x1f0990 = _0x3371a6["isCompletedWork"];
            var _0x5cc52e = void 0x0 !== _0x1f0990 && _0x1f0990;
            var _0x58766b = _0x3371a6["selectedSubject"];
            var _0x40a142 = _0x3371a6["imageSize"];
            var _0x52463b = _0x3371a6['thumbnailLocation'];
            var _0x13546a = _0x3371a6["color"];
            var _0xfaff29 = _0x4861e1()(_0x5a69c5, "lesson.id")["toLowerCase"]();
            var _0x346bd0 = _0x4861e1()(_0x5a69c5, "lesson.channel");
            var _0x53b2b2 = _0x2039d5 && !_0x5cc52e;
            var _0x63b265 = !_0x2039d5 && _0x4861e1()(_0x17c902, ''['concat'](_0x346bd0, '.')["concat"](_0x58766b, '.')["concat"](_0x40a142));
            var _0x74d740 = _0xfaff29["replace"](/\.v[0-9]+$/gi, '');
            switch (_0x346bd0) {
              case _0xf608a5["BASAL_PRACTICE"]:
                _0x38313e = _0x53b2b2 ? _0x3241d6['a']["createElement"](_0x530e39['a'], {
                  'color': _0x13546a
                }) : ''["concat"](_0x52463b, '/')["concat"](_0x74d740, '_')["concat"](_0x40a142, ".jpg");
                break;
              case _0xf608a5["CLOSE_READING"]:
                _0x38313e = _0x53b2b2 ? _0x3241d6['a']["createElement"](_0x528bf3, {
                  'color': _0x13546a
                }) : ''["concat"](_0x52463b, '/')["concat"](_0x74d740, '_')['concat'](_0x40a142, ".jpg");
                break;
              case _0xf608a5["EXTRA_LESSON"]:
              default:
                _0x38313e = _0x53b2b2 ? _0x3241d6['a']["createElement"](_0x51d46e['a'], {
                  'color': _0x13546a
                }) : ''["concat"](_0x52463b, '/')['concat'](_0x74d740, '_')["concat"](_0x40a142, ".jpg");
            }
            return {
              'primaryImageOrSrc': _0x38313e,
              'secondarySrc': _0x63b265
            };
          }({
            'activity': _0x3cf509,
            'isk2': _0x204cce,
            'isCompletedWork': _0x1927d4,
            'selectedSubject': _0x3bcf28,
            'imageSize': _0x4a11fb,
            'thumbnailLocation': _0x3216f4,
            'color': _0x15fad2
          });
          var _0x49015f = _0x4a8323["primaryImageOrSrc"];
          var _0x1d42d0 = _0x4a8323["secondarySrc"];
          _0x4ba740 = _0x49015f;
          _0x4519f7 = _0x1d42d0;
        } else {
          [_0x2da39d['ISM'], _0x2da39d["ASSESSMENT"], _0x2da39d['BASAL_CHECK'], _0x2da39d["ASR"]]["includes"](_0x4d6332) && (_0x4ba740 = function (_0x3cdb6f) {
            var _0x2fd1d9;
            var _0x203058 = _0x3cdb6f['activity'];
            var _0x890568 = _0x3cdb6f["isk2"];
            var _0xe01268 = _0x3cdb6f['imageSize'];
            var _0x38e55e = _0x3cdb6f["style"];
            var _0x31ccc9 = void 0x0 === _0x38e55e ? {
              'width': 0x82,
              'height': 0x82
            } : _0x38e55e;
            var _0x282779 = _0x3cdb6f["color"];
            var _0x5ebf8d = _0x4861e1()(_0x203058, 'type', _0x4861e1()(_0x203058, "entityType"));
            switch (_0x5ebf8d) {
              case _0x2da39d["BASAL_CHECK"]:
                _0x2fd1d9 = _0x4861e1()(_0x3280f8, ''["concat"](_0x890568 ? "gk2" : "g38", '.')["concat"](_0x113d85["BASAL_CHECK"], '.')["concat"](_0xe01268));
                break;
              case _0x2da39d["ISM"]:
                _0x2fd1d9 = _0x4861e1()(_0x3280f8, ''["concat"](_0x890568 ? "gk2" : "g38", '.')["concat"](_0x113d85["ISM"], '.')["concat"](_0xe01268));
                break;
              default:
                _0x2fd1d9 = _0x4861e1()(_0x3280f8, ''["concat"](_0x890568 ? "gk2" : "g38", '.')["concat"](_0x5ebf8d, '.')["concat"](_0xe01268));
            }
            return _0x890568 ? _0x3241d6['a']["createElement"](_0x2fd1d9, {
              'color': _0x282779,
              'style': _0x31ccc9
            }) : _0x2fd1d9;
          }({
            'activity': _0x3cf509,
            'isk2': _0x204cce,
            'imageSize': _0x4a11fb,
            'style': _0x2c3cdb,
            'color': _0x15fad2
          }));
        }
        var _0x1b54b3 = _0x4509c6 ? '' : _0x4d6332;
        return "string" === typeof _0x4ba740 ? _0x3241d6['a']['createElement']("img", {
          'alt': _0x1b54b3,
          'aria-hidden': _0x4509c6,
          'src': _0x4ba740,
          'onError': function (_0x3a07ec) {
            _0x3a07ec["target"]["src"] = _0x4519f7;
            _0x3a07ec["target"]["onerror"] = null;
          },
          'style': _0x3d8f59
        }) : _0x4ba740;
      }
      return null;
    };
  },
  0x417: function (_0xc7b42f, _0x50b3c6, _0x166830) {
    'use strict';

    _0x166830['d'](_0x50b3c6, 'a', function () {
      return _0x545d81;
    });
    var _0x545d81 = [{
      'id': 'AL',
      'displayName': 'Alabama'
    }, {
      'id': 'AK',
      'displayName': "Alaska"
    }, {
      'id': 'AS',
      'displayName': "American Samoa"
    }, {
      'id': 'AZ',
      'displayName': "Arizona"
    }, {
      'id': 'AR',
      'displayName': 'Arkansas'
    }, {
      'id': 'CA',
      'displayName': "California"
    }, {
      'id': 'CO',
      'displayName': "Colorado"
    }, {
      'id': 'CT',
      'displayName': "Connecticut"
    }, {
      'id': 'DE',
      'displayName': "Delaware"
    }, {
      'id': 'DC',
      'displayName': 'District\x20of\x20Columbia'
    }, {
      'id': 'FL',
      'displayName': 'Florida'
    }, {
      'id': 'GA',
      'displayName': 'Georgia'
    }, {
      'id': 'GU',
      'displayName': "Guam"
    }, {
      'id': 'HI',
      'displayName': 'Hawai\x27i'
    }, {
      'id': 'ID',
      'displayName': "Idaho"
    }, {
      'id': 'IL',
      'displayName': "Illinois"
    }, {
      'id': 'IN',
      'displayName': "Indiana"
    }, {
      'id': 'IA',
      'displayName': "Iowa"
    }, {
      'id': 'KS',
      'displayName': "Kansas"
    }, {
      'id': 'KY',
      'displayName': 'Kentucky'
    }, {
      'id': 'LA',
      'displayName': "Louisiana"
    }, {
      'id': 'ME',
      'displayName': "Maine"
    }, {
      'id': 'MD',
      'displayName': "Maryland"
    }, {
      'id': 'MA',
      'displayName': 'Massachusetts'
    }, {
      'id': 'MI',
      'displayName': 'Michigan'
    }, {
      'id': 'MN',
      'displayName': "Minnesota"
    }, {
      'id': 'MS',
      'displayName': "Mississippi"
    }, {
      'id': 'MO',
      'displayName': "Missouri"
    }, {
      'id': 'MT',
      'displayName': 'Montana'
    }, {
      'id': 'NE',
      'displayName': "Nebraska"
    }, {
      'id': 'NV',
      'displayName': 'Nevada'
    }, {
      'id': 'NH',
      'displayName': "New Hampshire"
    }, {
      'id': 'NJ',
      'displayName': "New Jersey"
    }, {
      'id': 'NM',
      'displayName': "New Mexico"
    }, {
      'id': 'NY',
      'displayName': 'New\x20York'
    }, {
      'id': 'NC',
      'displayName': "North Carolina"
    }, {
      'id': 'ND',
      'displayName': 'North\x20Dakota'
    }, {
      'id': 'MP',
      'displayName': "Northern Mariana Islands"
    }, {
      'id': 'OH',
      'displayName': "Ohio"
    }, {
      'id': 'OK',
      'displayName': "Oklahoma"
    }, {
      'id': 'OR',
      'displayName': "Oregon"
    }, {
      'id': 'PA',
      'displayName': 'Pennsylvania'
    }, {
      'id': 'PR',
      'displayName': 'Puerto\x20Rico'
    }, {
      'id': 'RI',
      'displayName': 'Rhode\x20Island'
    }, {
      'id': 'SC',
      'displayName': "South Carolina"
    }, {
      'id': 'SD',
      'displayName': "South Dakota"
    }, {
      'id': 'TN',
      'displayName': "Tennessee"
    }, {
      'id': 'TX',
      'displayName': "Texas"
    }, {
      'id': 'VI',
      'displayName': 'US\x20Virgin\x20Islands'
    }, {
      'id': 'UT',
      'displayName': 'Utah'
    }, {
      'id': 'VT',
      'displayName': 'Vermont'
    }, {
      'id': 'VA',
      'displayName': "Virginia"
    }, {
      'id': 'WA',
      'displayName': "Washington"
    }, {
      'id': 'WV',
      'displayName': 'West\x20Virginia'
    }, {
      'id': 'WI',
      'displayName': "Wisconsin"
    }, {
      'id': 'WY',
      'displayName': 'Wyoming'
    }, {
      'id': "INTL",
      'displayName': "International"
    }, {
      'id': "OTHER",
      'displayName': "Other"
    }];
  },
  0x427: function (_0x48737b, _0x5273d1, _0x1af220) {
    'use strict';

    var _0x4e4829 = _0x1af220(0x0);
    var _0x531a06 = _0x1af220['n'](_0x4e4829);
    _0x5273d1['a'] = function (_0x59f0fb) {
      var _0x1d9025 = _0x59f0fb["color"];
      var _0x4661e3 = void 0x0 === _0x1d9025 ? '#056' : _0x1d9025;
      var _0x353aa4 = _0x59f0fb["style"];
      return _0x531a06['a']['createElement']('svg', {
        'aria-hidden': 'true',
        'xmlns': "http://www.w3.org/2000/svg",
        'width': "130",
        'height': "130",
        'viewBox': "0 0 130 130",
        'style': _0x353aa4
      }, _0x531a06['a']["createElement"]("path", {
        'd': "M111.26 100.53a467.38 467.38 0 0 1-92.52 0A11 11 0 0 1 9.67 92a217.25 217.25 0 0 1 0-68.1 11 11 0 0 1 9.07-8.54 465.86 465.86 0 0 1 92.52 0 11 11 0 0 1 9.07 8.54 217.25 217.25 0 0 1 0 68.1 11 11 0 0 1-9.07 8.53z",
        'fill': "none",
        'stroke': _0x4661e3,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '5'
      }), _0x531a06['a']["createElement"]("path", {
        'd': "M11 83a574.09 574.09 0 0 0 108 0",
        'fill': "none",
        'stroke': _0x4661e3,
        'stroke-linecap': 'round',
        'stroke-linejoin': "round",
        'stroke-width': '3.5'
      }), _0x531a06['a']["createElement"]("path", {
        'fill': "none",
        'stroke': _0x4661e3,
        'stroke-linecap': 'round',
        'stroke-linejoin': "round",
        'stroke-width': '5',
        'd': "M29.2 113.83h71.96"
      }), _0x531a06['a']['createElement']("path", {
        'd': "M53 37.36a9.74 9.74 0 0 0-18 0M95 37.36a9.74 9.74 0 0 0-18 0M41 55.91c2.21 8.93 12.13 16.65 24 16.79 11.86-.14 21.78-7.86 24-16.79a153.2 153.2 0 0 0-48 0z",
        'fill': "none",
        'stroke': _0x4661e3,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '3.5'
      }), _0x531a06['a']['createElement']("path", {
        'fill': "none",
        'stroke': _0x4661e3,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '5',
        'd': "M56.13 113.83v-10.06M74.12 103.77v10.06"
      }));
    };
  },
  0x428: function (_0x30236a, _0xcd4b63, _0x45144d) {
    'use strict';

    var _0x5b5d12 = _0x45144d(0x0);
    var _0x53a9a2 = _0x45144d['n'](_0x5b5d12);
    _0xcd4b63['a'] = function (_0xf2a929) {
      var _0x3b18f4 = _0xf2a929["color"];
      var _0x4e3c43 = void 0x0 === _0x3b18f4 ? "#056" : _0x3b18f4;
      var _0xbb8f65 = _0xf2a929["style"];
      var _0x303320 = void 0x0 === _0xbb8f65 ? {
        'width': 0x82,
        'height': 0x82
      } : _0xbb8f65;
      return _0x53a9a2['a']["createElement"]("svg", {
        'aria-hidden': "true",
        'xmlns': "http://www.w3.org/2000/svg",
        'width': _0x303320['width'],
        'height': _0x303320["height"],
        'viewBox': "0 0 130 130",
        'style': _0x303320
      }, _0x53a9a2['a']["createElement"]("path", {
        'd': "M111.8 100.94a472.18 472.18 0 0 1-93.6 0A11.05 11.05 0 0 1 9 92.3a219.32 219.32 0 0 1 0-68.9 11.05 11.05 0 0 1 9.17-8.64 472.18 472.18 0 0 1 93.6 0A11.05 11.05 0 0 1 121 23.4a219.32 219.32 0 0 1 0 68.9 11.05 11.05 0 0 1-9.2 8.64zM28.79 114.4h72.8M56.03 114.4v-10.17M74.23 104.23v10.17",
        'fill': 'none',
        'stroke': _0x4e3c43,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '5'
      }), _0x53a9a2['a']["createElement"]("path", {
        'fill': 'none',
        'stroke': _0x4e3c43,
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': '9',
        'd': "M52 32.8v52M52 62.52h16.34A14.86 14.86 0 0 0 83.2 47.66 14.86 14.86 0 0 0 68.34 32.8H52"
      }));
    };
  },
  0x47f: function (_0x59ff38, _0x446321, _0x31c824) {
    'use strict';

    _0x31c824['d'](_0x446321, 'a', function () {
      return _0x34d8e0;
    });
    _0x31c824['d'](_0x446321, 'b', function () {
      return _0x4c7237;
    });
    var _0x59469c = _0x31c824(0x1f);
    var _0x1bc2ad = _0x31c824(0x20);
    var _0x3957b2 = _0x31c824(0x50);
    var _0x4c82e2 = _0x31c824(0x44);
    var _0x498c24 = _0x31c824(0x3c);
    var _0x4c9adc = _0x31c824(0x26);
    var _0x468837 = _0x31c824(0x14);
    var _0x32d32c = _0x31c824['n'](_0x468837);
    var _0x430c1f = _0x31c824(0x46e);
    var _0xb5bca = _0x31c824['n'](_0x430c1f);
    var _0x3ebeb8 = _0x31c824(0x425);
    var _0x4bb318 = _0x31c824['n'](_0x3ebeb8);
    var _0x43e3c9 = _0x31c824(0x0);
    var _0x3b5abe = _0x31c824['n'](_0x43e3c9);
    var _0x32c180 = _0x31c824(0x18);
    var _0x54f934 = _0x31c824(0x3f);
    var _0x2e9740 = _0x31c824(0x12d);
    var _0x4369f3 = _0x31c824(0x59);
    var _0x476790 = _0x31c824(0x3eb);
    var _0x3bc50b = _0x31c824(0xb2);
    var _0x3b344c = _0x31c824(0x3a6);
    var _0x3e154a = _0x31c824(0x3d);
    var _0x2da787 = _0x31c824(0x4b7);
    var _0x400e81 = _0x31c824(0x3fa);
    var _0x198c34 = _0x31c824(0x45);
    var _0x4e857c = _0x31c824(0x61);
    var _0x25f8ce = _0x31c824(0x391);
    var _0x260831 = _0x31c824(0x86);
    var _0x211957 = _0x31c824(0x3);
    var _0x484b02 = _0x31c824(0x8);
    var _0x317e90 = Object(_0x4c9adc['a'])('div', {
      'target': "e178yyzm5",
      'label': "PBDisplay"
    })("display:inline-block;overflow:hidden;background-color:", function (_0x34ab64) {
      return _0x34ab64['barStyles']['colors']["color6"];
    }, ';border-left-style:none;height:', function (_0x32de52) {
      return _0x32de52["barStyles"]["barHeight"];
    }, "px;width:", function (_0x1c73f4) {
      return _0x1c73f4["barStyles"]['rootWidth'];
    }, "px;transition:1s ease-in-out;border:", function (_0x37a71d) {
      return _0x37a71d["barStyles"]["border"];
    }, ";border-left:0;");
    var _0x1e9f25 = Object(_0x4c9adc['a'])("div", {
      'target': "e178yyzm4",
      'label': "LeftCircle"
    })("float:left;position:relative;top:", function (_0x2fb428) {
      return _0x2fb428['barStyles']["topMargin"];
    }, 'px;left:13px;width:', function (_0x182cdd) {
      return _0x182cdd["barStyles"]["circleXY"];
    }, "px;height:", function (_0x237730) {
      return _0x237730["barStyles"]["circleXY"];
    }, "px;z-index:2;background-color:", function (_0xb525ee) {
      return _0xb525ee["barStyles"]['colors']["color7"];
    }, ";border-radius:50%;");
    var _0x557379 = Object(_0x4c9adc['a'])('div', {
      'target': 'e178yyzm3',
      'label': "ProgressDisplay"
    })('height:', function (_0x548eb3) {
      return _0x548eb3["barStyles"]["fillHeight"];
    }, "px;float:left;width:", function (_0x1cee56) {
      return _0x1cee56["pct"];
    }, "%;position:absolute;background-color:", function (_0x54f922) {
      return _0x54f922["barStyles"]["colors"]["color2"];
    }, ';top:0;left:-6px;');
    var _0x589ef6 = Object(_0x4c9adc['a'])('div', {
      'target': "e178yyzm2",
      'label': "PBLine"
    })("position:relative;height:", function (_0x57277e) {
      return _0x57277e["barStyles"]["fillHeight"];
    }, 'px;background-color:', function (_0x273d63) {
      return _0x273d63['barStyles']["colors"]["color1"];
    }, ";margin-left:30px;top:", function (_0x2ab989) {
      return _0x2ab989["barStyles"]["topBarMargin"];
    }, 'px;z-index:1;');
    var _0x2c650f = Object(_0x4c9adc['a'])("div", {
      'target': "e178yyzm1",
      'label': "RightCircle"
    })("float:left;width:", function (_0x553321) {
      return _0x553321['barStyles']["circleXY"];
    }, "px;height:", function (_0x2f99c6) {
      return _0x2f99c6["barStyles"]['circleXY'];
    }, "px;position:relative;z-index:2;top:", function (_0x4672d0) {
      return _0x4672d0["barStyles"]["topMargin"];
    }, 'px;left:-10px;padding:0;margin-left:-1px;background-color:', function (_0xa405d9) {
      return _0xa405d9['barStyles']["colors"]["color5"];
    }, ";border-radius:50%;");
    var _0x4ca679 = Object(_0x4c9adc['a'])("div", {
      'target': "e178yyzm0",
      'label': "PCTLabel"
    })("position:relative;float:left;width:", function (_0x28e6db) {
      return _0x28e6db["barStyles"]['pctLabelWidth'];
    }, 'px;top:0;left:5px;font-size:14px;font-family:sans-serif;font-weight:bold;text-align:center;color:', function (_0x2a27da) {
      return _0x2a27da['barStyles']["colors"]['color2'];
    }, ';');
    var _0x32d633 = {
      'name': "1ume0ny-ProgressBarDisplay",
      'styles': "float:left;label:ProgressBarDisplay;"
    };
    var _0x51f8cb = function (_0x3a57ed) {
      Object(_0x3957b2['a'])(_0x10495f, _0x3a57ed);
      var _0x245e78 = function (_0x2ed61d) {
        function _0x11bdf1() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]['sham']) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x4da73) {
            return !0x1;
          }
        }
        return function () {
          var _0x19a285;
          var _0x3b3635 = Object(_0x498c24['a'])(_0x2ed61d);
          if (_0x11bdf1()) {
            var _0x3136cf = Object(_0x498c24['a'])(this)["constructor"];
            _0x19a285 = Reflect['construct'](_0x3b3635, arguments, _0x3136cf);
          } else {
            _0x19a285 = _0x3b3635['apply'](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x19a285);
        };
      }(_0x10495f);
      function _0x10495f() {
        var _0x2134ec;
        Object(_0x59469c['a'])(this, _0x10495f);
        for (var _0x347b13 = arguments["length"], _0x5f1b4b = new Array(_0x347b13), _0x4becb2 = 0x0; _0x4becb2 < _0x347b13; _0x4becb2++) {
          _0x5f1b4b[_0x4becb2] = arguments[_0x4becb2];
        }
        (_0x2134ec = _0x245e78['call']["apply"](_0x245e78, [this]['concat'](_0x5f1b4b)))['currentLanguage'] = Object(_0x484b02['b'])() || 'en';
        _0x2134ec["getStyleValues"] = function () {
          return {
            'circleXY': 0x12,
            'pctLabelWidth': 0xa5,
            'colors': {
              'color1': "rgb(48, 54, 59)",
              'color2': "rgb(20, 183, 202)",
              'color5': "rgb(76, 107, 120)",
              'color6': "#1d1d1d",
              'color7': "rgb(255, 255, 255)"
            },
            'rootWidth': _0x2134ec['props']["width"],
            'barWidth': _0x2134ec["props"]["width"] - 0xa5,
            'topMargin': 0x4,
            'topBarMargin': 0x7,
            'contentHeight': 0x1e,
            'barHeight': 0x1c,
            'boxShadow': "0px 0px 3px 0px rgba(0, 0, 0, 0.4)",
            'border': '1px\x20solid\x20rgb(55,\x2054,\x2054)',
            'fillHeight': 0xc
          };
        };
        return _0x2134ec;
      }
      Object(_0x1bc2ad['a'])(_0x10495f, [{
        'key': "UNSAFE_componentWillMount",
        'value': function () {
          var _0x4af0d0 = this["props"]["language"];
          var _0x434e4a = _0x4af0d0 && _0x4af0d0['toLocaleLowerCase']();
          'en' !== _0x434e4a && 'es' !== _0x434e4a || Object(_0x484b02['a'])(_0x434e4a);
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          'en' !== this["currentLanguage"] && 'es' !== this["currentLanguage"] || Object(_0x484b02['a'])(this["currentLanguage"]);
        }
      }, {
        'key': 'render',
        'value': function () {
          var _0x3dba47 = this["getStyleValues"]();
          return Object(_0x211957['c'])(_0x317e90, {
            'id': "pb-display-root",
            'barStyles': _0x3dba47
          }, Object(_0x211957['c'])("div", {
            'css': Object(_0x211957['b'])("overflow:hidden;width:", this['props']["width"], "px;height:", _0x3dba47["barHeight"], "px;;label:ProgressBarDisplay;")
          }, Object(_0x211957['c'])('div', {
            'css': _0x32d633
          }, Object(_0x211957['c'])(_0x1e9f25, {
            'barStyles': _0x3dba47
          }), Object(_0x211957['c'])(_0x589ef6, {
            'barStyles': _0x3dba47
          }, Object(_0x211957['c'])('div', {
            'css': Object(_0x211957['b'])("overflow:auto;z-index:1;width:", _0x3dba47["barWidth"], "px;;label:ProgressBarDisplay;")
          }, Object(_0x211957['c'])(_0x557379, {
            'barStyles': _0x3dba47,
            'pct': this["props"]['pct'],
            'id': 'pb-display-pct-bar'
          })))), Object(_0x211957['c'])(_0x2c650f, {
            'barStyles': _0x3dba47
          }, Object(_0x211957['c'])(_0x4ca679, {
            'barStyles': _0x3dba47,
            'id': 'pb-display-pct-label'
          }, this["props"]['pct'], Object(_0x484b02['e'])("progressBar:MSG_PERCENTAGE_COMPLETE")))));
        }
      }]);
      return _0x10495f;
    }(_0x43e3c9['Component']);
    var _0x23f9be = Object(_0x4c9adc['a'])('div', {
      'target': "eg34fsf3",
      'label': "PBarBase"
    })({
      'name': "1p8mfu5",
      'styles': "display:inline-block;font-family:sans-serif;font-size:14px;font-weight:700;background-color:#1d1d1d;color:#8a8a7b;text-align:center;border:1px solid #373636;cursor:pointer;height:100%;position:relative;padding:5px;&>div{position:absolute;}"
    });
    var _0x567cb4 = Object(_0x4c9adc['a'])(_0x23f9be, {
      'target': "eg34fsf2",
      'label': 'PBarLeft'
    })({
      'name': '14vb02n',
      'styles': "border-top-left-radius:8px;border-bottom-left-radius:8px;width:100px"
    });
    var _0x26c651 = Object(_0x4c9adc['a'])(_0x23f9be, {
      'target': "eg34fsf1",
      'label': 'PBarRight'
    })({
      'name': "qomaln",
      'styles': "border-top-right-radius:8px;border-bottom-right-radius:8px;border-left:0;width:25px"
    });
    var _0x23ba6f = Object(_0x4c9adc['a'])('div', {
      'target': 'eg34fsf0',
      'label': "PBar"
    })("position:relative;left:", function (_0x16f754) {
      return _0x16f754["left"] + 0x32;
    }, 'px;width:', function (_0x12540e) {
      return _0x12540e["width"] + 0xf;
    }, "px;height:28px;white-space:nowrap;:focus{outline-style:solid;outline-color:#00ffff;outline-width:6px;position:relative;width:", function (_0x1cfd90) {
      return _0x1cfd90["width"] + 0xf + 0x6;
    }, 'px;:before{content:\x27\x20\x27;top:-2px;left:-2px;right:-2px;bottom:-2px;outline-style:dotted!important;outline-color:#4e4e50!important;outline-width:2px!important;position:absolute!important;}}:active{:focus{outline:0;:before{outline:0!important;}}}:hover\x20', _0x567cb4, ',:hover\x20', _0x26c651, "{background-color:#2e2e2e;color:#ffffff;border:1px solid #a09f9f;}");
    var _0x45c807 = function (_0x1a48eb) {
      Object(_0x3957b2['a'])(_0x2ac2f1, _0x1a48eb);
      var _0x3b0281 = function (_0x1ac065) {
        function _0x3835e3() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date['prototype']["toString"]["call"](Reflect['construct'](Date, [], function () {}));
            return !0x0;
          } catch (_0x53b6be) {
            return !0x1;
          }
        }
        return function () {
          var _0x5c7410;
          var _0x2fc2cd = Object(_0x498c24['a'])(_0x1ac065);
          if (_0x3835e3()) {
            var _0x4c63ce = Object(_0x498c24['a'])(this)["constructor"];
            _0x5c7410 = Reflect["construct"](_0x2fc2cd, arguments, _0x4c63ce);
          } else {
            _0x5c7410 = _0x2fc2cd["apply"](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x5c7410);
        };
      }(_0x2ac2f1);
      function _0x2ac2f1() {
        var _0x32abfa;
        Object(_0x59469c['a'])(this, _0x2ac2f1);
        for (var _0xe2c002 = arguments["length"], _0x56e120 = new Array(_0xe2c002), _0x477143 = 0x0; _0x477143 < _0xe2c002; _0x477143++) {
          _0x56e120[_0x477143] = arguments[_0x477143];
        }
        (_0x32abfa = _0x3b0281["call"]["apply"](_0x3b0281, [this]["concat"](_0x56e120)))["state"] = {
          'isOpen': !0x1,
          'currentWidth': 0x0
        };
        _0x32abfa["_handleCloseBarOnResize"] = function () {
          _0x32abfa["setState"]({
            'isOpen': !0x1,
            'currentWidth': 0x0
          });
        };
        _0x32abfa["_toggleBarOpenClose"] = function () {
          var _0xf66013 = _0x32abfa["state"]["isOpen"];
          var _0x15e034 = _0x32abfa['props']["barStyles"];
          var _0x3f989b = _0xf66013 ? 0x0 : _0x15e034["pcWidth"];
          _0x32abfa["setState"]({
            'currentWidth': _0x3f989b,
            'isOpen': !_0xf66013
          });
        };
        _0x32abfa["_toggleBarOpenCloseUsingKeyBoard"] = function (_0x3025e2) {
          var _0x4ae05f = _0x32abfa["state"]["isOpen"];
          var _0x9a1e07 = _0x32abfa['props']["barStyles"];
          var _0x1f8e85 = _0x4ae05f ? 0x0 : _0x9a1e07["pcWidth"];
          0x20 !== _0x3025e2['keyCode'] && 0xd !== _0x3025e2["keyCode"] || _0x32abfa["setState"]({
            'currentWidth': _0x1f8e85,
            'isOpen': !_0x4ae05f
          });
        };
        return _0x32abfa;
      }
      Object(_0x1bc2ad['a'])(_0x2ac2f1, [{
        'key': "componentDidMount",
        'value': function () {
          window["addEventListener"]("resize", this["_handleCloseBarOnResize"]);
          this["_handleCloseBarOnResize"]();
        }
      }, {
        'key': "UNSAFE_componentWillReceiveProps",
        'value': function (_0x3a003d) {
          var _0x1a037c = this["props"]["barStyles"];
          var _0xdf815e = this["state"]["isOpen"] && !this['props']['isNewItem'] ? _0x1a037c['pcWidth'] : 0x0;
          var _0x2dd119 = !!_0xdf815e;
          this["setState"]({
            'currentWidth': _0xdf815e,
            'isOpen': _0x2dd119
          });
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          window["removeEventListener"]("resize", this["_handleCloseBarOnResize"]);
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x316208 = this["state"]["isOpen"];
          var _0x3b2acb = this['props'];
          var _0x2918b = _0x3b2acb["language"];
          var _0x427f46 = _0x3b2acb["barStyles"];
          var _0x548635 = ''['concat'](this['props']["styleClass"], "pbar-parent");
          return Object(_0x211957['c'])(_0x23ba6f, {
            'left': _0x427f46["pbX"],
            'width': _0x427f46["pbWidth"],
            'id': "progressBar",
            'className': _0x548635,
            'tabIndex': '0',
            'onKeyUp': this['_toggleBarOpenCloseUsingKeyBoard'],
            'aria-label': Object(_0x484b02['e'])("progressBar:MY_PROGRESS"),
            'role': "application",
            'onMouseUp': function (_0x2bdcf1) {
              _0x2bdcf1['currentTarget']["blur"]();
            }
          }, Object(_0x211957['c'])(_0x567cb4, {
            'id': "pbar-left",
            'className': "pbar-left",
            'onClick': this["_toggleBarOpenClose"]
          }, Object(_0x211957['c'])('div', null, Object(_0x484b02['e'])("progressBar:MY_PROGRESS"))), Object(_0x211957['c'])(_0x51f8cb, {
            'width': this["state"]["currentWidth"],
            'pct': this["props"]['pct'],
            'language': _0x2918b
          }), Object(_0x211957['c'])(_0x26c651, {
            'id': 'pbar-right',
            'className': 'pbar-right',
            'onClick': this['_toggleBarOpenClose']
          }, Object(_0x211957['c'])('div', null, _0x316208 ? '<' : '>')));
        }
      }]);
      return _0x2ac2f1;
    }(_0x43e3c9["Component"]);
    var _0x26a5a4 = Object(_0x4c9adc['a'])('div', {
      'target': "e1748zc41",
      'label': "CopyrightWrapper"
    })({
      'name': "4joxzw",
      'styles': "position:absolute;bottom:11px;width:100%"
    });
    var _0x460a31 = Object(_0x4c9adc['a'])('div', {
      'target': "e1748zc40",
      'label': "CopyrightDiv"
    })('color:', function (_0x50ce6d) {
      return _0x50ce6d["color"];
    }, ";font-family:'Open Sans', sans-serif;text-align:center;@media (max-width: 1200px){font-size:9px;}@media (min-width: 1200px){font-size:10px;}");
    function _0x118c90(_0x4848d8) {
      var _0x3a6dae = _0x4848d8["color"];
      return Object(_0x211957['c'])(_0x26a5a4, null, Object(_0x211957['c'])(_0x460a31, {
        'role': "contentinfo",
        'color': _0x3a6dae
      }, Object(_0x484b02['e'])('copyright:COPYRIGHT', {
        'year': "2023"
      })));
    }
    var _0x4defa0 = _0x31c824(0x390);
    var _0x2f53fe = _0x31c824(0x392);
    var _0x1467f4 = _0x31c824(0x39a);
    var _0x4ba478 = _0x31c824(0x4f2);
    var _0x548ac3 = _0x31c824(0x3d1);
    var _0x3162b3 = _0x31c824(0x12f);
    var _0x447189 = _0x31c824(0x3e7);
    var _0x46a0da = _0x31c824(0x3d0);
    var _0x28de51 = _0x31c824(0x3ca);
    var _0x27f533 = _0x31c824(0x3cb);
    var _0x40684f = _0x31c824(0x39e);
    var _0x3b1a71 = _0x31c824(0x7);
    var _0x330f5a = _0x31c824(0x12c);
    var _0x3841b5 = _0x31c824(0x39b);
    var _0x1e932f = _0x31c824(0x60);
    var _0x134166 = _0x31c824(0x39d);
    var _0x379a87 = _0x31c824(0x38f);
    var _0x4838b9 = _0x31c824(0x395);
    var _0x3e1fd7 = _0x31c824(0x3ab);
    var _0x49ba93 = _0x330f5a['a']["InterstitialAudio"];
    var _0x226eb1 = _0x330f5a['a']["InterstitialContinue"];
    var _0x553e05 = _0x330f5a['a']['SurveySchoolImage'];
    var _0x57fbca = _0x330f5a['a']["InterstitialClose"];
    var _0x49739a = Object(_0x4c9adc['a'])(_0x49ba93, {
      'target': 'eakt59i4',
      'label': "AudioIcon"
    })("path:first-child{stroke:", _0x3b1a71['p'], ';}path:nth-child(2){fill:', _0x3b1a71['p'], ';}');
    var _0x592e42 = Object(_0x4c9adc['a'])(_0x1467f4['a'], {
      'target': "eakt59i3",
      'label': "CheckboxWrapper"
    })({
      'name': "1cg614g",
      'styles': "padding-bottom:45px;div[class*='Checkbox__wrapper']{height:40px;line-height:40px;label.form-check-label{font-weight:800!important;font-size:40px;display:table;:before{box-shadow:none!important;height:40px;width:40px;}}}"
    });
    var _0x1f1613 = Object(_0x4c9adc['a'])('div', {
      'target': 'eakt59i2',
      'label': 'CheckboxAccessibilityWrapper'
    })(_0x1e932f['f'], '\x20width:40px;height:40px;display:block;');
    var _0xd3c7ed = Object(_0x4c9adc['a'])(_0x4ba478['a'], {
      'target': "eakt59i1",
      'label': "StyledCheckbox"
    })({
      'name': "1ug0ppq",
      'styles': "line-height:35px!important;height:35px!important;padding-bottom:45px;margin-top:0"
    });
    var _0xcec3a7 = Object(_0x4c9adc['a'])(_0x226eb1, {
      'target': "eakt59i0",
      'label': 'StyledArrow'
    })("path{stroke:", function (_0x10a087) {
      return _0x10a087["disabled"] ? _0x3b1a71['m'] : _0x3b1a71['p'];
    }, ';}');
    function _0x1c9697(_0x3c1ac4) {
      var _0x1fa12f = _0x3c1ac4["disabled"];
      var _0xf835f = _0x3c1ac4["onClick"];
      var _0x54f2f2 = Object(_0x211957['c'])(_0xcec3a7, {
        'disabled': _0x1fa12f
      });
      return Object(_0x211957['c'])(_0x4defa0['a'], {
        'type': "grid",
        'gridGap': "15px",
        'gridTemplateRows': "120px 1fr"
      }, Object(_0x211957['c'])(_0x1467f4['a'], {
        'height': '120px',
        'width': '120px'
      }, Object(_0x211957['c'])(_0x548ac3['a'], {
        'role': "button",
        'id': "diagnostic-survey-continue",
        'aria-label': Object(_0x484b02['e'])("BTN_CONTINUE"),
        'name': Object(_0x484b02['e'])("BTN_CONTINUE"),
        'variant': 'transparent',
        'iconOnly': !0x0,
        'components': {
          'Icon': _0x54f2f2
        },
        'disabled': _0x1fa12f,
        'onClick': _0xf835f,
        'tabIndex': 0x0,
        'css': Object(_0x211957['b'])("background-color:", _0x1fa12f ? _0x3b1a71['z'] : _0x3b1a71['L'], ";border-radius:60px;height:120px;transition:0.175s ease-out transform;width:120px;&:hover{transform:scale(1.04);}&:focus{transform:scale(1.04);}", _0x1e932f['f'], ";;label:ContinueButton;")
      })), Object(_0x211957['c'])(_0x1467f4['a'], {
        'style': {
          'color': _0x1fa12f ? _0x3b1a71['m'] : _0x3b1a71['p']
        }
      }, Object(_0x211957['c'])(_0x2f53fe['a'], {
        'fontSize': "25px",
        'lineHeight': "29px",
        'nowrap': !0x0,
        'textAlign': "center"
      }, Object(_0x484b02['e'])("BTN_CONTINUE"))));
    }
    var _0xe853db = function (_0x44dc81) {
      Object(_0x3957b2['a'])(_0x34b329, _0x44dc81);
      var _0x2ce35f = function (_0x44bd54) {
        function _0x4d133c() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect['construct']["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date['prototype']['toString']["call"](Reflect['construct'](Date, [], function () {}));
            return !0x0;
          } catch (_0x2e4a35) {
            return !0x1;
          }
        }
        return function () {
          var _0x5763ec;
          var _0x130f0d = Object(_0x498c24['a'])(_0x44bd54);
          if (_0x4d133c()) {
            var _0x140f25 = Object(_0x498c24['a'])(this)["constructor"];
            _0x5763ec = Reflect["construct"](_0x130f0d, arguments, _0x140f25);
          } else {
            _0x5763ec = _0x130f0d['apply'](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x5763ec);
        };
      }(_0x34b329);
      function _0x34b329(_0x51fbf6) {
        var _0x5d2bb9;
        Object(_0x59469c['a'])(this, _0x34b329);
        (_0x5d2bb9 = _0x2ce35f["call"](this, _0x51fbf6))["state"] = {
          'inSchool': "unknown"
        };
        _0x5d2bb9["currentLanguage"] = Object(_0x484b02['b'])() || 'en';
        _0x5d2bb9["changeLanguage"] = function (_0x553928) {
          _0x5d2bb9["props"]['subject'] !== _0x3e1fd7['a']["MATH"] || 'en' !== _0x553928 && 'es' !== _0x553928 || (document["getElementsByTagName"]('html')[0x0]['setAttribute']('lang', _0x553928), Object(_0x484b02['a'])(_0x553928));
        };
        _0x5d2bb9["setInSchool"] = function (_0x35c8d9) {
          _0x5d2bb9["setState"]({
            'inSchool': _0x35c8d9
          });
        };
        _0x5d2bb9['onContinue'] = function () {
          var _0x98578f = _0x5d2bb9["props"];
          var _0x259455 = _0x98578f['onContinue'];
          var _0x4e81cc = _0x98578f["assessmentType"];
          var _0x677e11 = _0x198c34['a']['ASSESSMENT_TYPE'];
          _0x40684f['g']["trackEvent"]({
            'category': _0x40684f['c'][_0x4e81cc === _0x677e11["DIAGNOSTIC"] ? "DIAGNOSTIC" : 'GM'],
            'action': _0x40684f['b']["SURVEY_RESPONSE"],
            'label': _0x5d2bb9["state"]['inSchool']
          });
          _0x259455(_0x5d2bb9["state"]["inSchool"]);
        };
        var _0x38031f = _0x51fbf6['gradeBand'];
        _0x27f533['a']["gradeLevel"] = 'gk2' === _0x38031f ? _0x134166['a']["GRADE_LEVEL"] : '3';
        var _0x2ba667 = _0x5d2bb9["props"]['language'];
        _0x5d2bb9["changeLanguage"](_0x2ba667);
        return _0x5d2bb9;
      }
      Object(_0x1bc2ad['a'])(_0x34b329, [{
        'key': "componentWillUnmount",
        'value': function () {
          this["changeLanguage"](this['currentLanguage']);
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x330901 = this;
          var _0x59eb66 = this["props"];
          var _0x190d13 = _0x59eb66["gradeBand"];
          var _0x37f435 = _0x59eb66['onClose'];
          var _0x3dda06 = this["state"]["inSchool"];
          var _0x49aff5 = 'gk2' === _0x190d13;
          return Object(_0x211957['c'])(_0x28de51['a'], {
            'id': "LocationSurvey",
            'fillScreen': !0x1,
            'centerContent': !0x0,
            'overflow': !0x0
          }, Object(_0x211957['c'])(_0x4defa0['a'], {
            'type': 'flex'
          }, Object(_0x211957['c'])(_0x46a0da['a'], {
            'height': '650px',
            'width': "auto",
            'transformOrigin': 'center',
            'top': -0x4
          }, Object(_0x211957['c'])(_0x3162b3['a'], {
            'aria-label': Object(_0x484b02['e'])("lesson:CLOSE"),
            'tabIndex': 0x0,
            'onClick': _0x37f435,
            'id': "survey-close-button",
            'css': _0x1e932f['f'],
            'style': {
              'position': "absolute",
              'top': "-5%",
              'right': "-30%",
              'color': _0x3b1a71['U']
            }
          }, Object(_0x211957['c'])(_0x57fbca, {
            'alt': Object(_0x484b02['e'])("lesson:CLOSE"),
            'title': Object(_0x484b02['e'])("lesson:CLOSE")
          })), Object(_0x211957['c'])(_0x447189['a'], null, Object(_0x211957['c'])('div', {
            'style': {
              'marginTop': 0xa,
              'textAlign': 'center',
              'marginBottom': 0x2d
            }
          }, Object(_0x211957['c'])(_0x553e05, null)), Object(_0x211957['c'])(_0x4defa0['a'], {
            'type': "inline-grid",
            'gridGap': "15px",
            'gridTemplateColumns': '37px\x201fr',
            'style': {
              'width': 0x1ea,
              'paddingBottom': 0x2d,
              'marginLeft': 0x0
            }
          }, Object(_0x211957['c'])(_0x1467f4['a'], {
            'style': {
              'paddingTop': 0xa
            }
          }, _0x49aff5 && Object(_0x211957['c'])(_0x3841b5['a'], {
            'audioKey': 'es' === Object(_0x484b02['b'])() ? "ESPANOL/MSG_SURVEY_ARE_YOU_AT_SCHOOL_ES" : "MSG_SURVEY_ARE_YOU_AT_SCHOOL",
            'autoPlayHistory': !0x1,
            'autoPlay': !_0x3e154a['a']["isIpad"](),
            'style': {
              'marginRight': "15px"
            }
          }, Object(_0x211957['c'])('div', {
            'tabIndex': 0x0,
            'aria-label': Object(_0x484b02['e'])(''["concat"](_0x190d13, ':PLAY_AUDIO')),
            'role': "button",
            'css': _0x1e932f['f']
          }, Object(_0x211957['c'])(_0x49739a, null)))), Object(_0x211957['c'])(_0x1467f4['a'], null, Object(_0x211957['c'])(_0x2f53fe['a'], {
            'fontSize': '40px',
            'fontWeight': "800",
            'lineHeight': "52px",
            'style': {
              'color': _0x3b1a71['p']
            }
          }, Object(_0x484b02['e'])(''["concat"](_0x190d13, ":ARE_YOU_AT_SCHOOL"))))), Object(_0x211957['c'])('div', {
            'style': {
              'marginLeft': 0x34
            }
          }, Object(_0x211957['c'])(_0x592e42, null, Object(_0x211957['c'])(_0x4defa0['a'], {
            'type': "inline-grid",
            'gridGap': "15px",
            'gridTemplateColumns': ''["concat"](_0x49aff5 ? "37px " : '', "1fr")
          }, _0x49aff5 && Object(_0x211957['c'])(_0x3841b5['a'], {
            'audioKey': 'es' === Object(_0x484b02['b'])() ? "ESPANOL/YES_ES" : 'MSG_SURVEY_YES',
            'autoPlay': !0x1,
            'style': {
              'marginRight': "15px"
            }
          }, Object(_0x211957['c'])('div', {
            'tabIndex': 0x0,
            'aria-label': Object(_0x484b02['e'])(''["concat"](_0x190d13, ':PLAY_AUDIO')),
            'role': "button",
            'css': _0x1e932f['f']
          }, Object(_0x211957['c'])(_0x49739a, null))), Object(_0x211957['c'])(_0xd3c7ed, {
            'id': "survey-yes",
            'tabIndex': '-1',
            'label': Object(_0x211957['c'])(_0x43e3c9["Fragment"], null, Object(_0x211957['c'])(_0x1f1613, {
              'tabIndex': 0x0,
              'role': "radio",
              'aria-checked': "yes" === _0x3dda06,
              'aria-label': Object(_0x484b02['e'])('YES'),
              'onClick': function (_0xd2e249) {
                _0x330901['setInSchool']("yes");
                _0xd2e249["target"]["blur"]();
              },
              'onKeyUp': function (_0x4aca95) {
                0xd !== _0x4aca95["keyCode"] && 0x20 !== _0x4aca95["keyCode"] || (_0x330901["setInSchool"]("yes"), _0x4aca95['preventDefault']());
              }
            }), Object(_0x211957['c'])('div', {
              'role': "radio",
              'aria-checked': !0x1
            }), Object(_0x211957['c'])("span", {
              'style': {
                'display': "table-cell",
                'verticalAlign': "middle"
              }
            }, Object(_0x484b02['e'])('YES'))),
            'value': "yes" === _0x3dda06,
            'onChange': function () {
              return _0x330901["setInSchool"]("yes");
            }
          }))), Object(_0x211957['c'])(_0x592e42, null, Object(_0x211957['c'])(_0x4defa0['a'], {
            'type': "inline-grid",
            'gridGap': "15px",
            'gridTemplateColumns': ''["concat"](_0x49aff5 ? "37px " : '', "1fr")
          }, _0x49aff5 && Object(_0x211957['c'])(_0x3841b5['a'], {
            'audioKey': 'es' === Object(_0x484b02['b'])() ? "ESPANOL/NO_ES" : "MSG_SURVEY_NO",
            'autoPlay': !0x1,
            'style': {
              'marginRight': '15px'
            }
          }, Object(_0x211957['c'])('div', {
            'tabIndex': 0x0,
            'aria-label': Object(_0x484b02['e'])(''["concat"](_0x190d13, ':PLAY_AUDIO')),
            'role': "button",
            'css': _0x1e932f['f']
          }, Object(_0x211957['c'])(_0x49739a, null))), Object(_0x211957['c'])(_0xd3c7ed, {
            'id': "survey-no",
            'tabIndex': '-1',
            'css': _0x1e932f['f'],
            'label': Object(_0x211957['c'])(_0x43e3c9["Fragment"], null, Object(_0x211957['c'])('div', {
              'role': "radio",
              'aria-checked': !0x1
            }), Object(_0x211957['c'])(_0x1f1613, {
              'tabIndex': 0x0,
              'role': "radio",
              'aria-checked': 'no' === _0x3dda06,
              'aria-label': Object(_0x484b02['e'])('NO'),
              'onClick': function (_0x5dde06) {
                _0x330901["setInSchool"]('no');
                _0x5dde06['target']['blur']();
              },
              'onKeyUp': function (_0x429e09) {
                0xd !== _0x429e09["keyCode"] && 0x20 !== _0x429e09['keyCode'] || (_0x330901['setInSchool']('no'), _0x429e09["preventDefault"]());
              }
            }), Object(_0x211957['c'])("span", {
              'style': {
                'display': "table-cell",
                'verticalAlign': "middle"
              }
            }, Object(_0x484b02['e'])('NO'))),
            'value': 'no' === _0x3dda06,
            'onChange': function () {
              return _0x330901["setInSchool"]('no');
            }
          })))), Object(_0x211957['c'])('div', {
            'style': {
              'marginTop': 0x0,
              'marginLeft': 0x15c
            }
          }, Object(_0x211957['c'])(_0x1c9697, {
            'disabled': "unknown" === _0x3dda06,
            'tabIndex': '0',
            'onClick': this["onContinue"]
          }))))));
        }
      }]);
      return _0x34b329;
    }(_0x3b5abe['a']["Component"]);
    function _0x442922(_0x331956) {
      return {
        'language': Object(_0x379a87['i'])(_0x331956),
        'subject': Object(_0x4838b9['b'])(_0x331956)
      };
    }
    var _0x24aea0 = Object(_0x4369f3["connect"])(_0x442922)(_0xe853db);
    __TEST__;
    var _0x487f23 = _0x31c824(0x423);
    var _0x378b27 = _0x31c824(0x3cf);
    var _0x7b9d6e = _0x31c824(0x48b);
    var _0x33271b = _0x31c824(0x49f);
    var _0x6a1340 = _0x31c824(0x3b6);
    var _0x66313f = _0x31c824(0x426);
    var _0x5b909c = {
      'name': "1kkrokv-IFRAME_STYLE",
      'styles': 'height:calc(100vh\x20-\x2070px);width:90%;margin:auto;div{position:relative;display:block;iframe{position:absolute;height:100%;width:100%;top:0;left:0;}};label:IFRAME_STYLE;'
    };
    var _0x598155 = function (_0x18d2c6) {
      Object(_0x3957b2['a'])(_0xb37add, _0x18d2c6);
      var _0x481cd5 = function (_0x4bdae3) {
        function _0x4144e5() {
          if ('undefined' === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date['prototype']["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x44c29b) {
            return !0x1;
          }
        }
        return function () {
          var _0x47f1f9;
          var _0x5557d3 = Object(_0x498c24['a'])(_0x4bdae3);
          if (_0x4144e5()) {
            var _0x1e66e7 = Object(_0x498c24['a'])(this)['constructor'];
            _0x47f1f9 = Reflect["construct"](_0x5557d3, arguments, _0x1e66e7);
          } else {
            _0x47f1f9 = _0x5557d3["apply"](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x47f1f9);
        };
      }(_0xb37add);
      function _0xb37add() {
        var _0xb24f73;
        Object(_0x59469c['a'])(this, _0xb37add);
        for (var _0x460e4a = arguments["length"], _0xc3a4ba = new Array(_0x460e4a), _0x2d39c6 = 0x0; _0x2d39c6 < _0x460e4a; _0x2d39c6++) {
          _0xc3a4ba[_0x2d39c6] = arguments[_0x2d39c6];
        }
        (_0xb24f73 = _0x481cd5['call']["apply"](_0x481cd5, [this]["concat"](_0xc3a4ba)))['state'] = {
          'autoPlayEnabledChecked': !0x1,
          'hasFrameBeenTested': !0x1,
          'hasError': !0x1,
          'loadingProgress': -0x1,
          'progressMsg': "initializing"
        };
        _0xb24f73['_keepAliveID'] = null;
        _0xb24f73["_initializeIFrame"] = function () {
          _0xb24f73["_setInteropHandlers"]();
          _0xb24f73["_resizeIFrame"]();
          _0xb24f73["props"]["assessmentJSON"] && _0xb24f73['_loadContent']();
        };
        _0xb24f73["loadError"] = function () {
          var _0x1b79d3 = _0xb24f73["state"];
          var _0x27f762 = _0x1b79d3["loadingProgress"];
          var _0x43f9aa = _0x1b79d3["progressMsg"];
          var _0x26db85 = _0xb24f73['props']["navigateToPage"];
          Object(_0x260831['g'])("HTML5DiagnosticDisplay load error, loaded "["concat"](_0x27f762, '%\x20:\x20')["concat"](_0x43f9aa), _0x260831['m']);
          _0x26db85(Object(_0x4e857c['b'])(_0x4e857c['a']["STUDENT_ERROR"])["replace"]("/:errorReason?", _0x4e857c['a']['ERROR_GENERIC']));
        };
        _0xb24f73["getiFrameRef"] = function (_0x39b5d2) {
          _0xb24f73['iFrameRef'] = _0x39b5d2;
        };
        _0xb24f73["startKeepAlive"] = function () {
          var _0x8842b2 = _0xb24f73["props"]["settings"]["SESSION_KEEP_ALIVE_INTERVAL"];
          _0xb24f73["stopKeepAlive"]();
          _0xb24f73["_keepAliveID"] = window["setTimeout"](function () {
            _0xb24f73["props"]["dispatchKeepAlive"]();
            _0xb24f73["startKeepAlive"]();
          }, 0xea60 * _0x8842b2);
        };
        _0xb24f73["stopKeepAlive"] = function () {
          window["clearTimeout"](_0xb24f73["_keepAliveID"]);
        };
        _0xb24f73["iFrameRef"] = void 0x0;
        return _0xb24f73;
      }
      Object(_0x1bc2ad['a'])(_0xb37add, [{
        'key': "componentDidMount",
        'value': function () {
          var _0x3df4f9 = this;
          this['startKeepAlive']();
          window['getContentDataCallback'] = this["_initializeIFrame"];
          window['setProgressCallback'] = function (_0x6ea0b2, _0x53c917) {
            _0x3df4f9["setState"]({
              'loadingProgress': _0x6ea0b2,
              'progressMsg': _0x53c917
            }, function () {
              _0x6ea0b2 >= 0x64 && ((0x0, _0x3df4f9['props']["contentLoadedCallback"])(), _0x3df4f9["_getIFrameWindow"]()["postMessage"]({
                'type': "displayNextQuestion"
              }, '*'));
            });
          };
          window["autoPlayCallback"] = function (_0x2ca6ae) {
            _0x3df4f9['_handleAutoPlayResult'](_0x2ca6ae);
          };
          window["closeAndEndSession"] = function () {
            _0x3df4f9["stopKeepAlive"]();
            _0x3df4f9["props"]["closeWhenSessionTimeout"]();
          };
        }
      }, {
        'key': 'componentDidUpdate',
        'value': function (_0x29c36d) {
          this["state"]["autoPlayEnabledChecked"] && this["_resizeIFrame"]();
          this["props"]["assessmentJSON"] && this["props"]["assessmentJSON"]["item"]['meta']["reference"] !== _0x29c36d['assessmentJSON']["item"]['meta']["reference"] && this['_loadContent']();
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          window["setProgressCallback"] = window["getContentDataCallback"] = window["logErrorCallback"] = window["autoPlayCallback"] = window["closeAndEndSession"] = void 0x0;
          this["stopKeepAlive"]();
        }
      }, {
        'key': '_getIFrameWindow',
        'value': function () {
          return this["iFrameRef"]["contentWindow"];
        }
      }, {
        'key': "_setInteropHandlers",
        'value': function () {
          var _0x32a865 = this["_getIFrameWindow"]();
          var _0x201319 = this["props"];
          var _0x472e1e = _0x201319["assessmentJSON"];
          var _0x476cbe = _0x201319["interop"]['scoreItemCallback'];
          _0x32a865["scoreItemCallback"] = _0x476cbe;
          _0x32a865["assessmentJSON"] = _0x472e1e;
          _0x32a865["log"] = _0x260831['e'];
          _0x32a865["info"] = _0x260831['d'];
          _0x32a865['error'] = _0x260831['b'];
          _0x32a865["fatal"] = _0x260831['c'];
        }
      }, {
        'key': "_handleAutoPlayResult",
        'value': function (_0x57a72c) {
          _0x57a72c === _0x198c34['a']["AUTOPLAY"]["AUTOPLAY_ENABLED"] ? this['setState']({
            'autoPlayEnabledChecked': !0x0
          }) : (0x0, this["props"]["navigateToPage"])(Object(_0x4e857c['b'])(_0x4e857c['a']["STUDENT_ERROR"])["replace"]("/:errorReason?", _0x4e857c['a']["ERROR_GENERIC"]));
        }
      }, {
        'key': '_resizeIFrame',
        'value': function () {
          var _0x34f01f = _0x32d32c()(this["_getIFrameWindow"](), "document");
          if (_0x34f01f) {
            var _0x528d30 = _0x34f01f["getElementById"]("diagnostic-container");
            _0x528d30 && _0x528d30["setAttribute"]("style", "display:block;height:"["concat"](this["props"]['height'], 'px'));
          }
        }
      }, {
        'key': "_loadContent",
        'value': function () {
          var _0x9afb41 = this;
          this["setState"]({
            'loadingProgress': -0x1,
            'progressMsg': "initializing"
          }, function () {
            _0x9afb41["_getIFrameWindow"]()["postMessage"]({
              'type': "newQuestion",
              'assessmentJSON': _0x9afb41["props"]["assessmentJSON"]
            }, '*');
          });
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x8f3865 = this["props"];
          var _0x2063df = _0x8f3865["contentLoadedCallback"];
          var _0xe2ecf3 = _0x8f3865["subject"];
          var _0x5e8ed6 = _0x8f3865["settings"];
          var _0x255561 = _0x5e8ed6['LEARNING_TREE_TIMEOUT_MILLIS'];
          var _0x32382e = _0x5e8ed6["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var _0x2fc8ab = _0x8f3865["title"];
          return Object(_0x211957['c'])("div", {
            'id': "html-diagnostic-iframe",
            'css': _0x5b909c
          }, _0xe2ecf3 && Object(_0x211957['c'])(_0x6a1340['a'], {
            'title': _0x2fc8ab,
            'getRef': this['getiFrameRef'],
            'id': "diagnosticIFrame",
            'allowTransparency': !0x0,
            'allowFullscreen': !0x0,
            'className': 'assessment-frame',
            'src': "/student/dashboard/diagnosticIFrame/"["concat"](_0xe2ecf3),
            'timeout': _0x255561,
            'retry': _0x32382e,
            'loadCheckAttribute': 'preloader',
            'loadErrorCallback': this["loadError"],
            'loadCompleteCallback': _0x2063df
          }));
        }
      }]);
      return _0xb37add;
    }(_0x3b5abe['a']['Component']);
    function _0x6586b0(_0x35ab4b) {
      return {
        'settings': Object(_0x379a87['e'])(_0x35ab4b)
      };
    }
    var _0x2bcff3 = {
      'navigateToPage': _0x3bc50b['e'],
      'dispatchKeepAlive': _0x66313f['b']
    };
    var _0x32f293 = Object(_0x4369f3["connect"])(_0x6586b0, _0x2bcff3)(_0x598155);
    __TEST__;
    var _0x54dd7d = _0x31c824(0x1a);
    var _0x1cf653 = _0x31c824(0x3aa);
    var _0x113b1c = _0x31c824['n'](_0x1cf653);
    var _0x250cee = _0x31c824(0xa);
    var _0x41503b = _0x31c824['n'](_0x250cee);
    var _0x51cd95 = _0x31c824(0x3fb);
    var _0x4e4806 = _0x31c824(0x422);
    var _0x4e2da3 = Object(_0x4c9adc['a'])('div', {
      'target': "egx9ddm0",
      'label': "IframeWrapper"
    })("width:", function (_0x55a44f) {
      return _0x55a44f['width'];
    }, ";height:95vh;margin:0 auto;overflow:hidden;div{position:relative;overflow:hidden;}iframe{padding-top:15px;display:block;position:absolute;top:-20px;left:0;height:100%;width:100%;}");
    var _0x4c231f = function (_0x2d5321) {
      Object(_0x3957b2['a'])(_0x57071c, _0x2d5321);
      var _0x476939 = function (_0xd078bd) {
        function _0x3a185f() {
          if ('undefined' === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date['prototype']["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x2377b7) {
            return !0x1;
          }
        }
        return function () {
          var _0x725ac3;
          var _0x1c9ac1 = Object(_0x498c24['a'])(_0xd078bd);
          if (_0x3a185f()) {
            var _0x2e63f1 = Object(_0x498c24['a'])(this)["constructor"];
            _0x725ac3 = Reflect["construct"](_0x1c9ac1, arguments, _0x2e63f1);
          } else {
            _0x725ac3 = _0x1c9ac1["apply"](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x725ac3);
        };
      }(_0x57071c);
      function _0x57071c() {
        var _0x403c5d;
        Object(_0x59469c['a'])(this, _0x57071c);
        for (var _0x5761a9 = arguments["length"], _0x485174 = new Array(_0x5761a9), _0x130e66 = 0x0; _0x130e66 < _0x5761a9; _0x130e66++) {
          _0x485174[_0x130e66] = arguments[_0x130e66];
        }
        (_0x403c5d = _0x476939["call"]["apply"](_0x476939, [this]["concat"](_0x485174)))["loadError"] = function () {
          var _0x4823bc = _0x403c5d["props"];
          var _0x3a1055 = _0x4823bc["navigateToPage"];
          var _0x41ab36 = _0x4823bc["gameId"];
          Object(_0x260831['g'])('HTML5Diagnostic\x20game\x20load\x20error,\x20gameId\x20=\x20['["concat"](_0x41ab36, ']'), _0x260831['m']);
          _0x3a1055(Object(_0x4e857c['b'])(_0x4e857c['a']["STUDENT_ERROR"])["replace"]("/:errorReason?", _0x4e857c['a']["ERROR_GENERIC"]));
        };
        _0x403c5d["_iframeChecked"] = !0x1;
        return _0x403c5d;
      }
      Object(_0x1bc2ad['a'])(_0x57071c, [{
        'key': "componentDidMount",
        'value': function () {
          window["gameBridge"] = this["addGameBridgeMethods"]();
        }
      }, {
        'key': 'UNSAFE_componentWillReceiveProps',
        'value': function (_0x234b70) {
          _0x234b70["width"] !== this["props"]["width"] && (Boolean(window["gameBridge"]) || (window["gameBridge"] = this["addGameBridgeMethods"]()));
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          delete window["gameBridge"];
        }
      }, {
        'key': 'addGameBridgeMethods',
        'value': function () {
          var _0x303aee = this;
          var _0x325501 = this['props'];
          var _0x58ad4d = _0x325501["scoreItemCallback"];
          var _0x51fe82 = _0x325501["closeItemCallback"];
          return {
            'skipScoreCard': !0x0,
            'isWithinDiag': !0x0,
            'info': {
              'numberOfRetries': this['props']["settings"]['LEARNING_TREE_LESSON_NUM_RETRIES']
            },
            'initialized': function () {
              _0x303aee["updateGameLoadStatus"](!0x1);
            },
            'start': function () {
              return _0x303aee["_startGame"]();
            },
            'getUserData': function () {
              return _0x303aee["_getUserData"]();
            },
            'saveUserData': function (_0x28f10d) {
              return _0x303aee['_saveUserData'](_0x28f10d);
            },
            'close': function () {
              _0x51fe82();
            },
            'updateLoadProgress': function (_0x616f54) {},
            'sendScore': function () {
              var _0x6a4831 = Object(_0x54dd7d['a'])(_0x41503b['a']["mark"](function _0x49ff60() {
                return _0x41503b['a']["wrap"](function (_0x40524c) {
                  for (;;) {
                    switch (_0x40524c["prev"] = _0x40524c["next"]) {
                      case 0x0:
                        _0x40684f['g']['trackEvent']({
                          'category': _0x40684f['c']["DIAGNOSTIC_GAME"],
                          'action': _0x40684f['b']['ACTIVITY_COMPLETED'],
                          'label': _0x32d32c()(_0x303aee["_getActiveGame"](), 'name')
                        });
                        _0x40524c['t0'] = Promise;
                        _0x40524c["next"] = 0x4;
                        return _0x58ad4d();
                      case 0x4:
                        _0x40524c['t1'] = _0x40524c["sent"];
                        return _0x40524c["abrupt"]("return", _0x40524c['t0']["resolve"]["call"](_0x40524c['t0'], _0x40524c['t1']));
                      case 0x6:
                      case "end":
                        return _0x40524c["stop"]();
                    }
                  }
                }, _0x49ff60);
              }));
              return function () {
                return _0x6a4831['apply'](this, arguments);
              };
            }()
          };
        }
      }, {
        'key': "_startGame",
        'value': function () {
          return new Promise(function (_0x242516) {
            _0x242516();
          });
        }
      }, {
        'key': "_getUserData",
        'value': function () {
          var _0x3cb415 = this['props'];
          return (0x0, _0x3cb415["getUserData"])({
            'fieldtripId': _0x3cb415["gameId"]
          });
        }
      }, {
        'key': '_saveUserData',
        'value': function (_0x2cc730) {
          var _0x552d39 = this["props"];
          return (0x0, _0x552d39["dispatchSaveUserData"])({
            'fieldtripId': _0x552d39['gameId'],
            'data': _0x2cc730
          });
        }
      }, {
        'key': "updateGameLoadStatus",
        'value': function (_0x1f766f) {
          _0x1f766f || (0x0, this["props"]["contentLoadedCallback"])();
        }
      }, {
        'key': "_getActiveGame",
        'value': function () {
          var _0x3feee2 = this["props"];
          var _0x2d168f = _0x3feee2['games'];
          var _0x19a998 = _0x3feee2["gameId"];
          if (_0x2d168f) {
            return _0x113b1c()(_0x2d168f, {
              'id': _0x19a998
            });
          }
        }
      }, {
        'key': "_getGamePath",
        'value': function (_0x4fa246) {
          if (_0x4fa246) {
            var _0x13242d = _0x4fa246['path'];
            var _0x9d6d05 = this["props"]["settings"];
            var _0x367435 = _0x9d6d05['CDN_DOMAIN_URL'];
            var _0x243770 = _0x9d6d05['REWARDS_GAMES_VERSION'];
            var _0x2436fc = _0x9d6d05["REWARDS_GAMES_BEGOOPED_VERSION"];
            var _0x523fce = _0x9d6d05["REWARDS_GAMES_CAT_STACKER_VERSION"];
            var _0x372e2b = _0x9d6d05['REWARDS_GAMES_PATH_SPINNERS_VERSION'];
            var _0x500a61 = null;
            switch (_0x13242d) {
              case "game-minedigger":
              case "game-bubbles":
              case "game-lanerunner":
                _0x500a61 = ''["concat"](_0x367435, "/instruction/reward-games/")['concat'](_0x243770, '/')["concat"](_0x13242d, '/');
                break;
              case 'game-begooped':
                _0x500a61 = ''["concat"](_0x367435, "/instruction/")["concat"](_0x13242d, '/')["concat"](_0x2436fc);
                break;
              case "game-catstacker":
                _0x500a61 = ''["concat"](_0x367435, "/instruction/")['concat'](_0x13242d, '/')["concat"](_0x523fce);
                break;
              case "game-hpr":
                _0x500a61 = ''['concat'](_0x367435, "/instruction/")['concat'](_0x13242d, '/')["concat"](_0x372e2b);
                break;
              default:
                _0x500a61 = null;
            }
            return _0x500a61;
          }
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x12daa2 = this["props"];
          var _0x484baf = _0x12daa2['settings'];
          var _0x3895fa = _0x484baf['LEARNING_TREE_TIMEOUT_MILLIS'];
          var _0x46aee0 = _0x484baf["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var _0x4debc2 = _0x12daa2["title"];
          var _0x4ac1d8 = _0x12daa2["width"];
          var _0x1a8aa0 = this["_getActiveGame"]();
          var _0x1992b9 = this["_getGamePath"](_0x1a8aa0);
          return _0x1992b9 ? Object(_0x211957['c'])(_0x4e2da3, {
            'id': 'diagnostic-game-iframe',
            'width': _0x4ac1d8
          }, Object(_0x211957['c'])(_0x6a1340['a'], {
            'title': _0x4debc2,
            'id': "diag-game",
            'src': _0x1992b9,
            'timeout': _0x3895fa,
            'retry': _0x46aee0,
            'loadCheckAttribute': ["preloader", "Gamepad"],
            'loadErrorCallback': this["loadError"]
          })) : null;
        }
      }]);
      return _0x57071c;
    }(_0x43e3c9["PureComponent"]);
    function _0x2d0823(_0x840ec5) {
      return {
        'games': Object(_0x4e4806['b'])(_0x840ec5),
        'settings': Object(_0x379a87['e'])(_0x840ec5)
      };
    }
    var _0x34b338 = {
      'navigateToPage': _0x3bc50b['e'],
      'getUserData': _0x51cd95['c'],
      'dispatchSaveUserData': _0x51cd95['d']
    };
    var _0x2c8cd4 = Object(_0x4369f3['connect'])(_0x2d0823, _0x34b338)(_0x4c231f);
    __TEST__;
    var _0x4d4662 = Object(_0x25f8ce['a'])([_0x51cd95['b'], _0x51cd95['c'], _0x51cd95['d']]);
    function _0x207139(_0x46b5fc) {
      return Object(_0x211957['c'])(_0x4d4662, {
        'ignorePriorErrors': !0x0,
        'onMount': _0x51cd95['b']
      }, function (_0x4582c1) {
        var _0x2344d8 = _0x4582c1["loading"];
        var _0x2dc2cb = _0x4582c1["error"];
        var _0xd6334 = _0x4582c1['dismiss'];
        return Object(_0x211957['c'])(_0x2c8cd4, Object['assign']({
          'error': _0x2dc2cb
        }, _0x46b5fc, {
          'dismissError': _0xd6334,
          'loading': _0x2344d8
        }));
      });
    }
    var _0x521b3 = _0x31c824(0x3a3);
    var _0x3896ef = Object(_0x4c9adc['a'])('div', {
      'target': "e1ph3dd80",
      'label': "IframeWrapper"
    })("width:", function (_0x5c5efc) {
      var _0x1a7102 = _0x5c5efc["width"];
      return ''["concat"](_0x1a7102, 'px') || !0x1;
    }, ";height:", function (_0x535bad) {
      var _0x586c0c = _0x535bad["height"];
      return ''["concat"](_0x586c0c, 'px') || !0x1;
    }, ';margin:auto;overflow:auto;div{position:relative;padding-top:46.25%;overflow:hidden;}iframe{position:absolute;top:0;left:0;height:100%;width:100%;}');
    var _0x5adcf9 = function (_0x280577) {
      Object(_0x3957b2['a'])(_0x19127f, _0x280577);
      var _0x47e165 = function (_0x2765f2) {
        function _0x4f6432() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect['construct']['sham']) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x4f9383) {
            return !0x1;
          }
        }
        return function () {
          var _0x500636;
          var _0x4f4ef6 = Object(_0x498c24['a'])(_0x2765f2);
          if (_0x4f6432()) {
            var _0x2f3db4 = Object(_0x498c24['a'])(this)["constructor"];
            _0x500636 = Reflect["construct"](_0x4f4ef6, arguments, _0x2f3db4);
          } else {
            _0x500636 = _0x4f4ef6["apply"](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x500636);
        };
      }(_0x19127f);
      function _0x19127f() {
        var _0x345027;
        Object(_0x59469c['a'])(this, _0x19127f);
        for (var _0x7f3e7c = arguments["length"], _0x25c0c4 = new Array(_0x7f3e7c), _0x115c91 = 0x0; _0x115c91 < _0x7f3e7c; _0x115c91++) {
          _0x25c0c4[_0x115c91] = arguments[_0x115c91];
        }
        (_0x345027 = _0x47e165['call']['apply'](_0x47e165, [this]["concat"](_0x25c0c4)))["state"] = {
          'loadingProgress': -0x1,
          'progressMsg': 'initializing'
        };
        _0x345027["_handleIframeEvents"] = function (_0x22e449) {
          var _0x2a3646 = _0x22e449["data"]['type'];
          switch (_0x2a3646) {
            case "ADD_KEYDOWN_LISTENER":
            case "ADD_LISTENERS_TO_DETECT_MOVEMENTS":
              window['addEventListener']("keydown", _0x345027["_onWindowKeyPress"]);
              window["addEventListener"]("mousemove", _0x345027["_onWindowKeyPress"]);
              break;
            case "ADD_PAGE_BLUR":
              window["addEventListener"]("focus", _0x345027["_onSDFocus"], !0x1);
              window["addEventListener"]("blur", _0x345027["_pauseOverlay"], !0x1);
              break;
            case "ADD_RESIZE_EVENTS":
              window['addEventListener']("resize", _0x345027["_onWindowResize"]);
              break;
            default:
              console["log"]("No "["concat"](_0x2a3646, '\x20such\x20event\x20from\x20iframe\x20'), _0x2a3646);
          }
        };
        _0x345027["_globalPlayPause"] = function (_0x5ad69d, _0x3ec554) {
          var _0x1856d4 = _0x5ad69d["key"];
          var _0x164469 = _0x5ad69d["shiftKey"];
          _0x3ec554 && ("escape" === _0x1856d4['toLowerCase']() ? _0x3ec554['postMessage']({
            'pause': !0x0,
            'type': 'PLAY_PAUSE'
          }, '*') : _0x164469 && 'p' === _0x1856d4["toLowerCase"]() && _0x3ec554["postMessage"]({
            'pause': !0x1,
            'type': 'PLAY_PAUSE'
          }, '*'));
        };
        _0x345027["_detectMovements"] = function (_0x271919, _0x9942ac) {
          _0x9942ac && _0x9942ac['postMessage']({
            'type': "MOVEMENT_DETECTED",
            'movementDetected': !0x0
          }, '*');
        };
        _0x345027["_onWindowKeyPress"] = function (_0x39b1d1) {
          var _0x106bf8 = _0x345027["_getIFrameWindow"]();
          "keydown" === _0x39b1d1["type"] && _0x345027['_globalPlayPause'](_0x39b1d1, _0x106bf8);
          _0x345027["_detectMovements"](_0x39b1d1, _0x106bf8);
        };
        _0x345027["_onWindowResize"] = function () {
          var _0x6c2818 = _0x345027['_getIFrameWindow']();
          _0x6c2818 && _0x6c2818["postMessage"]({
            'type': "RESIZE_DETECTED",
            'windowWidth': window['innerWidth'],
            'windowHeight': window["innerHeight"],
            'pbX': _0x345027['props']["pbX"]
          }, '*');
        };
        _0x345027["_onSDFocus"] = function (_0x92f77b) {
          var _0x3724f3 = _0x345027["_getIFrameWindow"]();
          _0x3724f3 && _0x3724f3['postMessage']({
            'focusin': !0x0,
            'type': 'PAGE_HAS_FOCUS'
          }, '*');
        };
        _0x345027["_pauseOverlay"] = function (_0x4653dc) {
          var _0xbfa2a6 = _0x345027["_getIFrameWindow"]();
          _0xbfa2a6 && _0xbfa2a6["postMessage"]({
            'focusin': !0x1,
            'type': "PAGE_LOST_FOCUS"
          }, '*');
        };
        _0x345027["_getIFrameWindow"] = function () {
          return _0x345027["iFrameRef"]["contentWindow"];
        };
        _0x345027['loadError'] = function () {
          var _0xd136b3 = _0x345027["props"];
          var _0x54d8cc = _0xd136b3["navigateToPage"];
          var _0x2a06fc = _0xd136b3["source"];
          Object(_0x260831['g'])("Diagnostic Animation load error, source = ["["concat"](_0x2a06fc, ']'), _0x260831['m']);
          _0x54d8cc(Object(_0x4e857c['b'])(_0x4e857c['a']["STUDENT_ERROR"])['replace']("/:errorReason?", _0x4e857c['a']['ERROR_GENERIC']));
        };
        _0x345027["contentLoadedCallback"] = function () {
          _0x345027["props"]['contentLoadedCallback']();
          _0x345027['_onWindowResize']();
        };
        _0x345027['getiFrameRef'] = function (_0x31d42f) {
          _0x345027["iFrameRef"] = _0x31d42f;
        };
        _0x345027['iFrameRef'] = void 0x0;
        return _0x345027;
      }
      Object(_0x1bc2ad['a'])(_0x19127f, [{
        'key': "componentDidMount",
        'value': function () {
          var _0x4dcdfa = this;
          this['setState']({
            'loadingProgress': 0x64,
            'progressMsg': "Loaded Diagnostic Animation"
          }, function () {
            (0x0, _0x4dcdfa["props"]["contentLoadedCallback"])();
            window['addEventListener']("message", _0x4dcdfa["_handleIframeEvents"]);
          });
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          window["removeEventListener"]("message", this["_handleIframeEvents"]);
          window["removeEventListener"]("keydown", this["_onWindowKeyPress"]);
          window["removeEventListener"]("mousemove", this['_onWindowKeyPress']);
          window["removeEventListener"]("focus", this["_onSDFocus"]);
          window["removeEventListener"]("blur", this['_pauseOverlay']);
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x11764b = this['props'];
          var _0x2c7d5a = _0x11764b["cdnUrl"];
          var _0x3adadd = _0x11764b["source"];
          var _0x4607f4 = _0x11764b["title"];
          var _0x4ff798 = _0x11764b["settings"];
          var _0x302ec3 = _0x11764b["width"];
          var _0x56fdb8 = _0x11764b["height"];
          var _0x189868 = _0x4ff798["LEARNING_TREE_TIMEOUT_MILLIS"];
          var _0x2ddf85 = _0x4ff798['LEARNING_TREE_LESSON_NUM_RETRIES'];
          var _0xac6de9 = ''["concat"](_0x2c7d5a)["concat"](_0x198c34['a']["DIAGNOSTIC_CONTENT_PATH"])['concat'](_0x3adadd);
          return Object(_0x211957['c'])(_0x3896ef, {
            'id': "html-diagnostic-iframe",
            'width': _0x302ec3 + 0x78,
            'height': _0x56fdb8 - 0x1e
          }, Object(_0x211957['c'])(_0x6a1340['a'], {
            'getRef': this["getiFrameRef"],
            'title': _0x4607f4,
            'id': 'diagnosticAnimationIFrame',
            'allowTransparency': !0x0,
            'className': 'assessment-frame',
            'src': _0xac6de9,
            'timeout': _0x189868,
            'retry': _0x2ddf85,
            'loadErrorCallback': this["loadError"],
            'loadCompleteCallback': this['contentLoadedCallback']
          }));
        }
      }]);
      return _0x19127f;
    }(_0x3b5abe['a']["Component"]);
    function _0x199df2(_0x34a209) {
      return {
        'settings': Object(_0x379a87['e'])(_0x34a209)
      };
    }
    var _0x4db898 = {
      'navigateToPage': _0x3bc50b['e']
    };
    var _0x2454e0 = Object(_0x4369f3['connect'])(_0x199df2, _0x4db898)(_0x5adcf9);
    __TEST__;
    var _0xadb468 = _0x31c824(0x486);
    var _0x280b27 = _0x31c824(0x4c3);
    var _0x2fe75e = _0x31c824(0x4a0);
    var _0xa8f4ab = _0x198c34['a']["ASSESSMENT_TYPE"];
    var _0x3d4bbf = _0x198c34['a']["ACTIVITY_TIMERS"];
    var _0x1f43d1 = _0x198c34['a']["DIAGNOSTIC_CONTENT_PATH"];
    var _0x427800 = Object(_0x32c180['defaultMemoize'])(function (_0x3e5531) {
      return Math['floor'](0x64 * _0x3e5531);
    });
    var _0x58e4c7 = Object(_0x4c9adc['a'])('div', {
      'target': 'ejyuqa32',
      'label': "AssesmentView"
    })("overflow:hidden;background-color:", function (_0x296ae8) {
      return _0x296ae8["selectedSubject"] === _0x3e1fd7['a']["ELA"] ? "#1FC663" : "#267AD9";
    }, ";background-size:100% 100%;");
    var _0x1a82fd = Object(_0x4c9adc['a'])('div', {
      'target': "ejyuqa31",
      'label': "ProgressBarWrapper"
    })({
      'name': "1d3w5wq",
      'styles': 'width:100%'
    });
    var _0x34d8e0 = Object(_0x4c9adc['a'])("img", {
      'target': "ejyuqa30",
      'label': "CloseButton"
    })({
      'name': "17molni",
      'styles': "position:absolute;right:0;top:0;padding:5px"
    });
    var _0x4c7237 = function (_0xa3b1cd) {
      Object(_0x3957b2['a'])(_0x33597f, _0xa3b1cd);
      var _0x10e9b0 = function (_0x11240b) {
        function _0x45f041() {
          if ('undefined' === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date['prototype']["toString"]["call"](Reflect['construct'](Date, [], function () {}));
            return !0x0;
          } catch (_0x317b3f) {
            return !0x1;
          }
        }
        return function () {
          var _0x5a924f;
          var _0x5d861c = Object(_0x498c24['a'])(_0x11240b);
          if (_0x45f041()) {
            var _0x57213c = Object(_0x498c24['a'])(this)["constructor"];
            _0x5a924f = Reflect['construct'](_0x5d861c, arguments, _0x57213c);
          } else {
            _0x5a924f = _0x5d861c["apply"](this, arguments);
          }
          return Object(_0x4c82e2['a'])(this, _0x5a924f);
        };
      }(_0x33597f);
      function _0x33597f(_0x22796b) {
        var _0x15ac62;
        Object(_0x59469c['a'])(this, _0x33597f);
        (_0x15ac62 = _0x10e9b0["call"](this, _0x22796b))['state'] = {
          'windowHeight': window["innerHeight"],
          'windowWidth': window["innerWidth"],
          'isNewItem': !0x1,
          'showLoader': !0x0,
          'showProgress': !0x1,
          'showCover': !0x1,
          'itemId': null,
          'responded': !0x1
        };
        _0x15ac62["currentLanguage"] = Object(_0x484b02['b'])() || 'en';
        _0x15ac62["timerId"] = void 0x0;
        _0x15ac62["closeButtonClicked"] = !0x1;
        _0x15ac62["doneButtonClicked"] = !0x1;
        _0x15ac62['showIpadAssessmentError'] = function () {
          (0x0, _0x15ac62['props']["navigateToPage"])(Object(_0x4e857c['b'])(_0x4e857c['a']["STUDENT_ERROR"])["replace"]('/:errorReason?', _0x4e857c['a']["ERROR_GENERIC"]));
        };
        _0x15ac62["_closeSimulator"] = function () {
          var _0x5d6680 = _0x15ac62["props"];
          var _0x3411cc = _0x5d6680["dispatchStopCheatSimulatorAction"];
          !0x0 === _0x5d6680['isCheating'] && _0x3411cc();
        };
        _0x15ac62['_onScoreItem'] = function (_0x2e4e23, _0x1dee6f) {
          var _0x4c7822 = _0x15ac62["props"];
          var _0x710aec = _0x4c7822["dispatchCompleteTestItemAction"];
          var _0x4cb478 = _0x4c7822["assessment"];
          var _0x1c29af = _0x4c7822["assessmentActivityId"];
          var _0xcd4fb3 = _0x4cb478 && _0x4cb478['item']['id'];
          _0x15ac62["_startNewItemTimer"]();
          _0x15ac62['doneButtonClicked'] = !0x0;
          !_0x15ac62['closeButtonClicked'] && _0x710aec({
            'activityId': _0x1c29af,
            'assessmentItemId': _0xcd4fb3,
            'durationSeconds': _0x1dee6f,
            'correct': !0x1,
            'itemResponse': _0x2e4e23
          });
        };
        _0x15ac62["_animationDone"] = function () {
          var _0x26a2f9 = _0x15ac62["props"]["assessment"];
          if (_0x26a2f9) {
            var _0x586b7a = {
              'reference': _0x26a2f9['item']["assessmentJSON"]["item"]["meta"]["reference"],
              'controlResponse': []
            };
            _0x15ac62["_onScoreItem"](_0x586b7a, 0x1);
          } else {
            _0x15ac62['_logError']("Cannot retrieve assessmentJSON meta data to submit itemResponse.");
          }
        };
        _0x15ac62["_toolsVideosCallback"] = function (_0x104647, _0x5bb132) {
          var _0x44ccfe = _0x15ac62['props'];
          var _0x146eca = _0x44ccfe["assessment"];
          var _0x27efef = _0x44ccfe["cdnUrl"];
          var _0xcab5c8 = _0x44ccfe["selectedSubject"];
          if (!_0x146eca) {
            return null;
          }
          var _0x3bab14;
          var _0x1c83c7 = _0x146eca["item"]["assessmentJSON"]['item']["meta"]["grade"];
          var _0x2e5ccb = {};
          var _0xc010b9 = _0x1f43d1;
          var _0x24a5c7 = _0x3e1fd7['b'][_0xcab5c8];
          _0x5bb132["forEach"](function (_0x51fda5) {
            _0x3bab14 = _0x32d32c()(function (_0x28285a, _0x37da98) {
              return {
                'answeringQuestions': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_answeringquestions.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_K_3_answeringquestions.mp4")
                },
                'baseTenBlocks': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')['concat'](_0x37da98, "_K_3_basetenblocks.mp4"),
                  'grade2': "shared/tutorial/"['concat'](_0x28285a, "/videos/plory/")["concat"](_0x37da98, '_K_3_basetenblocks.mp4')
                },
                'calculators': {
                  'grade1': "shared/tutorial/"['concat'](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_calculators.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_calculators.mp4")
                },
                'coordinateGrid': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, '_K_3_coordinategrid.mp4'),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_coordinategrid.mp4")
                },
                'counters': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')['concat'](_0x37da98, "_K_3_counters.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_K_3_counters.mp4")
                },
                'hundredCharts': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_K_3_hundredcharts.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, '_K_3_hundredcharts.mp4')
                },
                'myProgress': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_myprogress.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_K_3_myprogress.mp4")
                },
                'numberLine': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_numberline.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, '_K_3_numberline.mp4')
                },
                'protractor': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')['concat'](_0x37da98, "_K_3_protractor.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_protractor.mp4")
                },
                'ruler': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_ruler.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_K_3_ruler.mp4")
                },
                'unitCube': {
                  'grade1': "shared/tutorial/"['concat'](_0x28285a, '/videos/plory/')['concat'](_0x37da98, "_K_3_unitcube.mp4"),
                  'grade2': "shared/tutorial/"['concat'](_0x28285a, '/videos/plory/')["concat"](_0x37da98, '_K_3_unitcube.mp4')
                },
                'unitSquare': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_K_3_unitsquare.mp4"),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_3_unitsquare.mp4")
                },
                'multiMediaPlayer': {
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, "/videos/plory/")['concat'](_0x37da98, "_2_3_multimediaplayer.mp4")
                },
                'switchingTabs': {
                  'grade1': "shared/tutorial/"['concat'](_0x28285a, '/videos/plory/')['concat'](_0x37da98, '_K_1_switchingtabs.mp4'),
                  'grade2': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_2_3_switchingtabs.mp4")
                },
                'turningPages': {
                  'grade1': "shared/tutorial/"["concat"](_0x28285a, '/videos/plory/')["concat"](_0x37da98, "_K_1_turningpages.mp4"),
                  'grade2': "shared/tutorial/"['concat'](_0x28285a, "/videos/plory/")["concat"](_0x37da98, "_2_3_turningpages.mp4")
                }
              };
            }(_0x104647, _0x24a5c7), ''["concat"](_0x51fda5, ".grade")['concat'](_0x1c83c7));
            _0x2e5ccb[_0x51fda5] = _0x3bab14 ? ''["concat"](_0x27efef)["concat"](_0xc010b9)["concat"](_0x3bab14) : '';
          });
          return _0x2e5ccb;
        };
        _0x15ac62["_logError"] = function (_0xab922d) {
          Object(_0x260831['g'])(_0xab922d, _0x260831['m']);
          (0x0, _0x15ac62['props']["navigateToPage"])(Object(_0x4e857c['b'])(_0x4e857c['a']['STUDENT_ERROR'])["replace"]("/:errorReason?", _0x4e857c['a']["ERROR_GENERIC"]));
        };
        _0x15ac62["_logMessage"] = function (_0x373193) {
          Object(_0x260831['h'])(_0x373193);
        };
        _0x15ac62["_handleResize"] = function () {
          _0x15ac62['setState']({
            'windowHeight': window['innerHeight'],
            'windowWidth': window["innerWidth"]
          });
        };
        _0x15ac62["_contentLoadedCallback"] = function () {
          clearTimeout(_0x15ac62['timerId']);
          _0x15ac62["setState"]({
            'showLoader': !0x1,
            'showCover': !0x1,
            'showProgress': !0x0
          });
        };
        _0x15ac62["_onCloseAssessment"] = function () {
          var _0x3ffac2 = _0x15ac62["props"];
          var _0x2cd888 = _0x3ffac2["dispatchStopActivityAction"];
          var _0x464eb6 = _0x3ffac2['selectedActivity'];
          var _0x841747 = _0x464eb6 && _0x464eb6['type'] === _0xa8f4ab["GROWTH_MONITORING"];
          _0x15ac62["closeButtonClicked"] = !0x0;
          !_0x15ac62["doneButtonClicked"] && _0x2cd888(!0x1);
          _0x40684f['g']['trackEvent']({
            'category': _0x841747 ? _0x40684f['c']['GM'] : _0x40684f['c']['DIAGNOSTIC'],
            'action': _0x40684f['b']['ACTIVITY_PAUSED']
          });
        };
        _0x15ac62["_closeWhenSessionTimeout"] = function () {
          (0x0, _0x15ac62["props"]["dispatchStopActivityAction"])(!0x0);
        };
        _0x15ac62['_getData'] = function () {
          return {
            'id': _0x15ac62["state"]["itemId"],
            'type': 'ASSESSMENT'
          };
        };
        _0x15ac62["_onCloseAssessmentUsingKeyboard"] = function (_0x9fff7c) {
          0x20 !== _0x9fff7c['keyCode'] && 0xd !== _0x9fff7c["keyCode"] || (_0x15ac62["_onCloseAssessment"](), _0x9fff7c["preventDefault"]());
        };
        _0x15ac62['_onContinueSurvey'] = function (_0x5d307c) {
          var _0x124732 = _0x15ac62['props'];
          var _0x39ea92 = _0x124732["dispatchStartAssessmentAction"];
          (0x0, _0x124732["dispatchUpdateStudentLocationAction"])({
            'recorded': !0x1,
            'location': "yes" === _0x5d307c ? 'SCHOOL' : 'OTHER'
          });
          _0x39ea92();
        };
        _0x15ac62['_onCloseSurvey'] = function () {
          var _0x48a003 = _0x15ac62["props"];
          var _0x4a60c2 = _0x48a003["navigateToPage"];
          var _0x106e0c = _0x48a003["isUsingLockDown"];
          _0x3e154a['a']["isChromeBookLockDownApp"]() ? _0x3b344c['b']["logoutAndCloseLockdown"]() : _0x106e0c ? (_0x3b344c['b']["logout"](), window["location"]["href"] = "https://"["concat"](window["location"]['hostname'])["concat"](_0x198c34['a']["LOCKDOWN_BROWSER_EXIT_URL"])) : _0x4a60c2(Object(_0x4e857c['b'])(_0x4e857c['a']["STUDENT_DASHBOARD_HOME"]));
        };
        _0x15ac62['_getQuestionData'] = function () {
          return _0x32d32c()(_0x15ac62["props"], "assessment.item.assessmentJSON");
        };
        _0x15ac62["changeLanguage"] = function (_0x2eeee5) {
          _0x15ac62["props"]["selectedSubject"] !== _0x3e1fd7['a']["MATH"] || 'en' !== _0x2eeee5 && 'es' !== _0x2eeee5 || (document['getElementsByTagName']('html')[0x0]["setAttribute"]('lang', _0x2eeee5), Object(_0x484b02['a'])(_0x2eeee5));
        };
        _0x15ac62["getIframeTitle"] = function () {
          var _0x4ea5d6 = _0x15ac62['props'];
          var _0x4bd139 = _0x4ea5d6["assessment"];
          var _0x490160 = _0x4ea5d6["selectedSubject"];
          var _0x60ec56 = _0x4ea5d6["selectedActivity"];
          var _0x175c99 = _0x4bd139 && _0x4bd139['item']['assessmentJSON']["item"]['meta']["type"];
          var _0x2a9051 = '';
          if (_0x60ec56["type"] === _0xa8f4ab["GROWTH_MONITORING"]) {
            _0x2a9051 = ''["concat"](_0x3e1fd7['b'][_0x490160]["toUpperCase"](), "_GROWTH_MONITORING");
          } else {
            switch (_0x175c99) {
              case 'Tutorial':
                _0x2a9051 = ''['concat'](_0x3e1fd7['b'][_0x490160]['toUpperCase'](), "_DIAGNOSTIC_TUTORIAL");
                break;
              case "Game":
                _0x2a9051 = 'DIAGNOSTIC_GAME_BREAK';
                break;
              case "BrainBreak":
                _0x2a9051 = "DIAGNOSTIC_BRAIN_BREAK";
                break;
              default:
                _0x2a9051 = ''["concat"](_0x3e1fd7['b'][_0x490160]["toUpperCase"](), "_DIAGNOSTIC_QUESTION");
            }
          }
          return ''["concat"](Object(_0x484b02['e'])("accessibility:"["concat"](_0x2a9051, '_TITLE')));
        };
        var _0x336d8f = _0x15ac62['props']["language"];
        _0x15ac62['changeLanguage'](_0x336d8f);
        return _0x15ac62;
      }
      Object(_0x1bc2ad['a'])(_0x33597f, [{
        'key': "componentDidMount",
        'value': function () {
          var _0x4fb04 = this["props"];
          var _0x48e86c = _0x4fb04["assessmentActivityId"];
          var _0x5217e3 = _0x4fb04["dispatchPauseActivityAction"];
          var _0x5e20ff = _0x4fb04["dispatchUncloseActivityAction"];
          var _0x1c4cf9 = _0x4fb04["selectedActivity"];
          var _0x2b53f6 = _0x4fb04["showSurvey"];
          var _0x419cda = _0x4fb04["selectedSubject"];
          var _0xe50742 = _0x4fb04["privileges"];
          var _0x13db3b = _0x4fb04['isCheating'];
          var _0x5e9e1f = _0x4fb04["dispatchStartCheatSimulatorAction"];
          var _0x29ea02 = _0x4fb04["dispatchStartAssessmentAction"];
          var _0x5b0494 = _0x4fb04["setIpadAssessmentModeProgress"];
          var _0x36afa4 = _0x4fb04["isOnIpadAssessmentMode"];
          var _0x399f48 = _0x1c4cf9 && _0x1c4cf9["type"] === _0xa8f4ab["GROWTH_MONITORING"];
          var _0x7cb89b = _0x399f48 ? _0xa8f4ab["GROWTH_MONITORING"] : _0xa8f4ab["DIAGNOSTIC"];
          var _0x3d4f26 = [_0x4bb318()(_0x40684f['a']["ACTIVITY_TYPE"], {
            'value': _0x7cb89b
          })];
          var _0x4d5778 = {
            'subject': _0x419cda,
            'type': _0x7cb89b
          };
          _0x13db3b ? _0x5e9e1f() : _0x2b53f6 || _0x29ea02();
          _0x40684f['g']["setCustom"](_0x3d4f26);
          _0x40684f['g']["trackPage"](_0x40684f['e']["DIAGNOSTIC"]['withData'](_0x4d5778));
          _0x280b27['a']["setCustom"](_0x3d4f26);
          _0x40684f['g']["trackEvent"]({
            'category': _0x399f48 ? _0x40684f['c']['GM'] : _0x40684f['c']['DIAGNOSTIC'],
            'action': "NOT_STARTED" === _0x1c4cf9["status"] ? _0x40684f['b']["ACTIVITY_STARTED"] : _0x40684f['b']['ACTIVITY_RESUMED']
          });
          !_0xe50742["HAS_BROWSER_LOCKDOWN_ACCESS"] && _0x476790['a']["confirmBrowserNavigation"](_0x5217e3, _0x5e20ff, {
            'activityId': _0x48e86c
          });
          window["scoreItemCallback"] = this["_onScoreItem"];
          window["getData"] = this["_getData"];
          window['animationDoneCallback'] = this["_animationDone"];
          window["toolsVideosCallback"] = this['_toolsVideosCallback'];
          window["logMessage"] = this["_logMessage"];
          window["logError"] = this['_logError'];
          window["getQuestionData"] = this["_getQuestionData"];
          window["addEventListener"]("resize", this["_handleResize"]);
          this["_handleResize"]();
          _0x36afa4 && (window["addEventListener"](_0x3e154a['e'], this["showIpadAssessmentError"], !0x1), window["addEventListener"](_0x3e154a['d'], function _0x11c855() {
            _0x5b0494(!0x1);
            window["removeEventListener"](_0x3e154a['d'], _0x11c855, !0x1);
          }, !0x1));
        }
      }, {
        'key': "UNSAFE_componentWillReceiveProps",
        'value': function (_0x58ff5e) {
          var _0x4c5347 = _0x58ff5e['assessment'];
          var _0x47dfe8 = this['props']["assessment"];
          _0x4c5347 && _0x47dfe8 && (_0x4c5347['endOfTest'] || _0x47dfe8["item"]['id'] === _0x4c5347['item']['id'] || (this["setState"]({
            'isNewItem': !0x0,
            'itemId': _0x4c5347["item"]['id']
          }), this['closeButtonClicked'] = !0x1, this['doneButtonClicked'] = !0x1));
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          var _0x100817 = this["props"];
          var _0xdb7769 = _0x100817["dispatchLoadTestingQueueAction"];
          var _0x12a777 = _0x100817["dispatchUpdateTestingQueueIndexAction"];
          var _0x493d19 = _0x100817['dispatchUpdateAssessmentAction'];
          var _0x20aff5 = _0x100817["isOnIpadAssessmentMode"];
          var _0x32c2c2 = _0x100817['assessmentCompleted'];
          var _0x3c77a9 = _0x100817['selectedActivity'];
          var _0x38b87a = _0x100817["dispatchCloseActivityAction"];
          var _0x1ec5f5 = _0x100817['setIpadAssessmentModeProgress'];
          !this['closeButtonClicked'] && !_0x32c2c2 && _0x38b87a(_0x3c77a9);
          window['scoreItemCallback'] = window['getData'] = window["animationDoneCallback"] = window["toolsVideosCallback"] = window["getQuestionData"] = window["logMessage"] = window["logError"] = void 0x0;
          window['removeEventListener']("resize", this["_handleResize"]);
          clearTimeout(this["timerId"]);
          _0x476790['a']['removeNavigationConfirmation']();
          this['_closeSimulator']();
          _0x493d19();
          _0xdb7769([]);
          _0x12a777(0x0);
          this["changeLanguage"](this["currentLanguage"]);
          _0x20aff5 && (_0x1ec5f5(!0x0), _0x3e154a['a']["iPadAssessmentModeEnd"](), window["removeEventListener"](_0x3e154a['e'], this['showIpadAssessmentError'], !0x1));
        }
      }, {
        'key': "_startNewItemTimer",
        'value': function () {
          var _0x5f4050 = this;
          !0x0 !== this["state"]["showLoader"] && (this['setState']({
            'showCover': !0x0
          }), this["timerId"] = _0xb5bca()(function () {
            _0x5f4050['setState']({
              'showLoader': !0x0,
              'showCover': !0x1
            });
          }, _0x3d4bbf['CLOSE_READING']));
        }
      }, {
        'key': '_getComponentDimensions',
        'value': function () {
          var _0x2d112e = window["innerHeight"];
          var _0x5c8861 = window["innerWidth"];
          var _0x4e7b4e = 0x0;
          var _0x2cdeca = this["props"]["assessment"];
          _0x2cdeca && (_0x4e7b4e = _0x427800(_0x2cdeca["progressNumerator"] / _0x2cdeca["progressDenominator"]));
          return {
            'windowHeight': _0x2d112e,
            'windowWidth': _0x5c8861,
            'percent': _0x4e7b4e
          };
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x5a2a26 = this["props"];
          var _0x5b047e = _0x5a2a26['assessment'];
          var _0x1c6b63 = _0x5a2a26['cdnUrl'];
          var _0x5ed97a = _0x5a2a26["selectedSubject"];
          var _0x4d8494 = _0x5a2a26["loading"];
          var _0x180710 = _0x5a2a26['selectedActivity'];
          var _0x1febfc = _0x5a2a26['gradeBand'];
          var _0x5c7b63 = _0x5a2a26["isCheating"];
          var _0x236402 = _0x5a2a26["showSurvey"];
          var _0x2b63e7 = this['state'];
          var _0x557a06 = _0x2b63e7["windowWidth"];
          var _0x3f0c61 = _0x2b63e7["windowHeight"];
          var _0x3c8321 = _0x2b63e7['isNewItem'];
          var _0x20085d = _0x2b63e7["showLoader"];
          var _0xeff61 = _0x2b63e7["showProgress"];
          var _0x3ce825 = null;
          if (_0x236402 && !_0x5c7b63) {
            _0x3ce825 = Object(_0x211957['c'])(_0x24aea0, {
              'gradeBand': _0x1febfc,
              'onContinue': this["_onContinueSurvey"],
              'onClose': this["_onCloseSurvey"],
              'assessmentType': _0x180710['type']
            });
          } else {
            if (_0x5b047e) {
              var _0x4161a8 = _0x5b047e['item']["assessmentJSON"]["item"]["meta"]['type'];
              var _0x557f9a = this["_getComponentDimensions"]();
              var _0x5ac4c9 = _0x5ed97a === _0x3e1fd7['a']["MATH"] ? "html5-math-" : "html5-reading-";
              var _0x169e09 = _0x32d32c()(_0x5b047e["item"]["assessmentJSON"]["item"], 'content.workspaceArea');
              var _0x593434 = _0x169e09 && 'AnimationHtmlJs' === _0x169e09["type"] ? _0x169e09["type"] : '';
              var _0x5075b8 = 'Tutorial' === _0x4161a8 && 'AnimationHtmlJs' === _0x593434 ? "Animation" : _0x4161a8;
              var _0x85736c = Object(_0x211957['c'])("div", null);
              var _0x56fff5 = this["getIframeTitle"]();
              var _0xb935f4 = function (_0x15a15e, _0x1e4d00) {
                var _0x258ba2 = 1.5 * _0x1e4d00 * 0.87;
                return {
                  'pcWidth': (_0x258ba2 = _0x258ba2 > _0x15a15e ? _0x15a15e - 0x1e : _0x258ba2) - 104.4,
                  'pbWidth': _0x258ba2,
                  'pbX': (_0x15a15e - _0x258ba2) / 0x2 - 0x28 - 0xf
                };
              }(_0x557a06, _0x3f0c61);
              var _0x512384 = _0xb935f4["pcWidth"];
              var _0xb7a340 = _0xb935f4["pbWidth"];
              var _0x520ebf = _0xb935f4["pbX"];
              switch (_0x5075b8) {
                case 'Game':
                  _0x85736c = Object(_0x211957['c'])(_0x207139, {
                    'id': "diagnostic-gameview-container",
                    'width': ''["concat"](_0xb7a340 - 0x32, 'px'),
                    'gameId': _0x5b047e['item']["assessmentJSON"]["item"]["content"]["workspaceArea"]["source"],
                    'scoreItemCallback': this["_onScoreItem"],
                    'closeItemCallback': this["_onCloseAssessment"],
                    'contentLoadedCallback': this["_contentLoadedCallback"],
                    'title': _0x56fff5
                  });
                  break;
                case 'Animation':
                  _0x85736c = Object(_0x211957['c'])(_0x2454e0, {
                    'id': "dignostic-animation-view-container",
                    'cdnUrl': _0x1c6b63,
                    'width': _0xb7a340 - 0x32,
                    'pbX': _0x520ebf,
                    'height': this["state"]['windowHeight'] - 0x46,
                    'source': _0x169e09["source"],
                    'contentLoadedCallback': this["_contentLoadedCallback"],
                    'title': _0x56fff5
                  });
                  break;
                default:
                  _0x85736c = Object(_0x211957['c'])(_0x32f293, {
                    'id': "html5-diagnostic-container",
                    'assessmentJSON': _0x5b047e["item"]["assessmentJSON"],
                    'height': this["state"]["windowHeight"] - 0x46,
                    'interop': {
                      'scoreItemCallback': this["_onScoreItem"]
                    },
                    'contentLoadedCallback': this["_contentLoadedCallback"],
                    'subject': _0x5ed97a,
                    'title': _0x56fff5,
                    'closeWhenSessionTimeout': this['_closeWhenSessionTimeout']
                  });
              }
              _0x3ce825 = Object(_0x211957['c'])(_0x43e3c9["Fragment"], null, (_0x4d8494 || _0x20085d) && Object(_0x211957['c'])(_0x2e9740['a'], {
                'fullScreen': !0x0
              }), Object(_0x211957['c'])(_0x58e4c7, {
                'id': "assessment-view-div",
                'className': ''["concat"](_0x5ac4c9, "view"),
                'selectedSubject': _0x5ed97a
              }, Object(_0x211957['c'])(_0x2fe75e['b'], {
                'height': _0x557f9a["windowHeight"] + 'px'
              }, Object(_0x211957['c'])(_0x2fe75e['a'], {
                'width': ''["concat"](0x28, 'px'),
                'style': {
                  'zIndex': 0x2
                }
              }), Object(_0x211957['c'])(_0x2fe75e['a'], {
                'width': ''["concat"](0x28, 'px'),
                'style': {
                  'zIndex': 0x2,
                  'height': ''["concat"](0x28, 'px'),
                  'right': "6px",
                  'top': "6px"
                },
                'css': _0x1e932f['f'],
                'id': "close-assessment-button",
                'aria-label': Object(_0x484b02['e'])("diagnostic:CLOSE_BUTTON"),
                'role': "button",
                'tabIndex': 0x0,
                'onClick': this["_onCloseAssessment"],
                'onKeyUp': this['_onCloseAssessmentUsingKeyboard'],
                'onMouseUp': function (_0x440755) {
                  _0x440755["target"]['blur']();
                }
              }, Object(_0x211957['c'])(_0x34d8e0, {
                'id': 'close-assessment-button-img',
                'src': _0x33271b['a'],
                'alt': Object(_0x484b02['e'])("diagnostic:CLOSE_BUTTON")
              })), Object(_0x211957['c'])(_0x2fe75e['a'], {
                'width': "100%",
                'style': {
                  'zIndex': 0x1
                }
              }, _0x56fff5 === Object(_0x484b02['e'])('accessibility:DIAGNOSTIC_BRAIN_BREAK_TITLE') && Object(_0x211957['c'])(_0x54f934['b'], {
                'message': _0x56fff5,
                'aria-live': "assertive",
                'clearOnUnmount': !0x0
              }), _0x85736c, _0xeff61 && Object(_0x211957['c'])(_0x1a82fd, {
                'className': ''['concat'](_0x5ac4c9, "progress")
              }, Object(_0x211957['c'])(_0x45c807, {
                'alt': Object(_0x484b02['e'])("progressBar:PROGRESS_BAR"),
                'barStyles': {
                  'pcWidth': _0x512384,
                  'pbWidth': _0xb7a340,
                  'pbX': _0x520ebf
                },
                'windowHeight': _0x3f0c61 - 0x46,
                'windowWidth': _0x557a06,
                'pct': _0x557f9a["percent"],
                'isNewItem': _0x3c8321,
                'styleClass': _0x5ac4c9,
                'language': _0x5b047e["item"]["language"],
                'closeButtonWidth': 0x28
              }))), "Game" !== _0x5075b8 && Object(_0x211957['c'])(_0x118c90, {
                'color': _0x5ed97a === _0x3e1fd7['a']["ELA"] ? _0x3b1a71['r'] : _0x3b1a71['w']
              }))));
            }
          }
          return _0x3ce825;
        }
      }]);
      return _0x33597f;
    }(_0x43e3c9['Component']);
    function _0x2ea745(_0x5cde5c) {
      return {
        'assessment': Object(_0x7b9d6e['d'])(_0x5cde5c),
        'selectedSubject': Object(_0x4838b9['b'])(_0x5cde5c),
        'assessmentActivityId': Object(_0x521b3['b'])(_0x5cde5c),
        'selectedActivity': Object(_0x521b3['a'])(_0x5cde5c),
        'privileges': Object(_0x379a87['j'])(_0x5cde5c),
        'gradeBand': Object(_0x379a87['f'])(_0x5cde5c),
        'isUsingLockDown': Object(_0x2da787['a'])(_0x5cde5c),
        'showSurvey': Object(_0x7b9d6e['c'])(_0x5cde5c),
        'language': Object(_0x379a87['i'])(_0x5cde5c),
        'isOnIpadAssessmentMode': Object(_0x400e81['c'])(_0x5cde5c),
        'assessmentCompleted': Object(_0x7b9d6e['b'])(_0x5cde5c)
      };
    }
    var _0x570270 = {
      'navigateToPage': _0x3bc50b['e'],
      'dispatchStartAssessmentAction': _0x487f23['f'],
      'dispatchStopActivityAction': _0x487f23['g'],
      'dispatchCloseActivityAction': _0x487f23['a'],
      'dispatchCompleteTestItemAction': _0x487f23['c'],
      'dispatchPauseActivityAction': _0x487f23['d'],
      'dispatchUncloseActivityAction': _0x487f23['h'],
      'dispatchLoadTestingQueueAction': _0x378b27['j'],
      'dispatchUpdateTestingQueueIndexAction': _0x378b27['s'],
      'dispatchStartCheatSimulatorAction': _0x378b27['n'],
      'dispatchStopCheatSimulatorAction': _0x378b27['p'],
      'dispatchUpdateStudentLocationAction': _0x487f23['j'],
      'dispatchUpdateAssessmentAction': _0x487f23['i'],
      'setIpadAssessmentModeProgress': _0xadb468['a']
    };
    var _0x3d22b6 = Object(_0x4369f3['connect'])(_0x2ea745, _0x570270)(_0x4c7237);
    __TEST__;
    var _0x76128e = Object(_0x25f8ce['a'])([_0x487f23['g'], _0x487f23['c'], _0x487f23['d'], _0x487f23['h']]);
    _0x446321['c'] = function (_0x39980d) {
      return Object(_0x211957['c'])(_0x76128e, {
        'ignorePriorErrors': !0x0
      }, function (_0x42e91e) {
        var _0x5eedfb = _0x42e91e["loading"];
        var _0xa4b268 = _0x42e91e["error"];
        var _0x570941 = _0x42e91e["dismiss"];
        return Object(_0x211957['c'])(_0x3d22b6, Object['assign']({}, _0x39980d, {
          'dismissError': _0x570941,
          'loading': _0x5eedfb,
          'error': _0xa4b268
        }));
      });
    };
  },
  0x49f: function (_0x7c0608, _0x19a5a2, _0x51bb4f) {
    'use strict';

    _0x19a5a2['a'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABlUlEQVRIDbWVsUoEMRCGbwWLK8TiROzutBcfQS2s7x0UtBQsFTxUPJ9JRAtLQRQfQMVK8A0UXL85md3sJptkvRj4yWQyM9/O3ibX6dRGnud9tIFma1vBpeSgdTTwBhOwjT6RjHu04E0wNontoTsk4wvtGtulycYO+kbmeGIRhBEjkAczEVtq7ZUELBwuiOZ5YQS5IJpbwvBsononGqizE8amQB41qGGW2lszNDREWaVFe7GK64aE4jVi9/BdozU7vOKR2kMB3VbczYsC1gKi1X4ZJJ6g2CGvMfS6zFrnSpvM7Jyau4nsKkSJiWFuSGLYWOt55yk7i4PoE/wR1g4iMEByGN9R7PggsDhn+sDemYSYE+96AOcN4oRNAVFwGJYAEoYlhDTD/gFiw/DMoTZ315j4NteV/Gbz8hkfodhRnBMS2sBG8jfRdX5+tvMiy7JDdWMfY5/pOjB3paNF9BpoqeikXjCiszdiliZ5GAPUBGuEKNQDE8iKxvlgQYgWccBsiBHcJ+ESvaAD9cfO5OyjZ3SFls28H7nXJjgHxyQdAAAAAElFTkSuQmCC";
  },
  0x4a0: function (_0x4e401a, _0x11fef8, _0x3a1e37) {
    'use strict';

    _0x3a1e37['d'](_0x11fef8, 'a', function () {
      return _0x4105e8;
    });
    _0x3a1e37['d'](_0x11fef8, 'b', function () {
      return _0x3c4629;
    });
    var _0x181781 = _0x3a1e37(0x394);
    var _0x371438 = _0x3a1e37(0x26);
    var _0x4dd05f = _0x3a1e37(0x3);
    _0x3a1e37(0x0);
    var _0x1bd4df = ['width', 'children', 'style'];
    var _0x528d6a = Object(_0x371438['a'])("div", {
      'target': "erxd68e1",
      'label': "Div"
    })("width:", function (_0x45fa22) {
      return _0x45fa22["width"];
    }, ";position:relative;");
    function _0x4105e8(_0x234261) {
      var _0x245958 = _0x234261["width"];
      var _0x396e43 = _0x234261['children'];
      var _0x44a3d5 = _0x234261["style"];
      var _0x51507d = Object(_0x181781['a'])(_0x234261, _0x1bd4df);
      return Object(_0x4dd05f['c'])(_0x528d6a, Object["assign"]({
        'width': _0x245958,
        'style': _0x44a3d5
      }, _0x51507d), _0x396e43);
    }
    var _0xf94111 = Object(_0x371438['a'])("div", {
      'target': "erxd68e0",
      'label': "Wrapper"
    })("width:100%;height:", function (_0xe6e6f7) {
      return _0xe6e6f7["height"];
    }, ";min-width:", function (_0x5175d6) {
      return _0x5175d6["minWidth"];
    }, ";:after{content:'';display:table;clear:both;}&>:first-child{float:left;}&>:nth-child(2){float:right;}&>:nth-child(3){margin:auto;}");
    function _0x3c4629(_0x31f3c8) {
      var _0x5bc447 = _0x31f3c8['minWidth'];
      var _0x3ec74d = _0x31f3c8["height"];
      var _0x21ca1f = _0x31f3c8["children"];
      return Object(_0x4dd05f['c'])(_0xf94111, {
        'height': _0x3ec74d,
        'minWidth': _0x5bc447
      }, _0x21ca1f);
    }
  },
  0x4a1: function (_0x3fb977, _0x9fe7d4, _0xd257aa) {
    'use strict';

    _0x9fe7d4['a'] = {
      'MINCOINS_FOR_GAMES': 0x32,
      'CREDITS_UNAVAILABLE': '--'
    };
  },
  0x4e9: function (_0x83386c, _0x546138, _0x2284d9) {
    'use strict';

    var _0x2d59e9 = _0x2284d9(0x2c);
    var _0x315bce = _0x2284d9(0x26);
    var _0x266419 = _0x2284d9(0x42d);
    var _0x307c4a = _0x2284d9['n'](_0x266419);
    var _0x56aeb2 = _0x2284d9(0x14);
    var _0x33dc65 = _0x2284d9['n'](_0x56aeb2);
    var _0x30eefb = _0x2284d9(0x3);
    var _0x4e5e4c = _0x2284d9(0x0);
    var _0x5b2b1e = _0x2284d9(0x39a);
    var _0x34f6c0 = _0x2284d9(0x390);
    var _0xe0cd3f = _0x2284d9(0x42b);
    var _0x1099bb = _0x2284d9(0x392);
    var _0x575aad = _0x2284d9(0x130);
    var _0x1116f4 = _0x2284d9(0x8);
    var _0x11925b = _0x2284d9(0x12c);
    var _0x9cebad = _0x2284d9(0x7);
    var _0x3c3527 = _0x2284d9(0x60);
    var _0x1babe0 = _0x2284d9(0x4a1);
    var _0x209909 = _0x2284d9(0xb1);
    var _0x151d9f = _0x2284d9['n'](_0x209909);
    var _0x27ef6e = _0x2284d9(0x3f);
    var _0x140645 = _0x2284d9(0x3d);
    var _0x9507a6 = _0x2284d9(0x39b);
    var _0x1a2e3c = _0x2284d9(0x393);
    var _0x1c5ded = _0x2284d9(0x399);
    var _0x36c251 = _0x11925b['a']["CoinK2"];
    var _0x2b1047 = _0x11925b['a']["Coin38"];
    var _0x2569b2 = _0x11925b['a']["DisabledCoinK2"];
    var _0x2b5aab = _0x11925b['a']["DisabledCoin38"];
    var _0x5bfe51 = _0x1babe0['a']["CREDITS_UNAVAILABLE"];
    function _0x1841e5(_0x49e641) {
      return function (_0x57a1e3) {
        var _0x1b059f = _0x57a1e3['theme'];
        var _0x267b7f = _0x57a1e3['themePath'];
        return _0x33dc65()(_0x1b059f, ''["concat"](_0x267b7f, '.')['concat'](_0x49e641));
      };
    }
    var _0x1ff62d = Object(_0x315bce['a'])(_0xe0cd3f['a'], {
      'target': "e24r95g1",
      'label': "NocoinsTooltip"
    })("&>div.tooltip{margin-top:10px;&>div:first-child{display:inline-block;position:relative;color:", _0x9cebad['l'], ";width:350px;max-width:350px;text-align:center;line-height:32px;border:1px solid ", _0x9cebad['l'], ';background:', _0x9cebad['U'], ";&::before,&::after{content:'';display:block;position:absolute;bottom:100%;width:0;height:0;border-style:solid;}&::after{right:calc(50% - 7px);border-color:transparent transparent ", _0x9cebad['U'], '\x20transparent;border-width:7px;}&::before{right:calc(50%\x20-\x209px);border-color:transparent\x20transparent\x20', _0x9cebad['l'], '\x20transparent;border-width:9px;}&+span{display:none;}}}');
    var _0xd389d = Object(_0x315bce['a'])(_0x34f6c0['a'], {
      'target': "e24r95g0",
      'label': "CoinLayout"
    })("grid-gap:", _0x1841e5("gridGap"), ';font-size:', _0x1841e5("fontSize"), ";font-weight:", _0x1841e5('fontWeight'), ";line-height:", _0x1841e5('height'), ";svg{display:block;height:", _0x1841e5("height"), ";width:", _0x1841e5("width"), ';}&.coins-disabled{svg,#coin-amount{cursor:pointer;}}#coin-amount{white-space:nowrap;}');
    function _0x1a9cc0(_0x552ee4) {
      var _0x295394 = _0x552ee4["onMouseOver"];
      var _0x2bdc57 = _0x552ee4['onMouseOut'];
      return Object(_0x30eefb['c'])('div', {
        'onMouseOver': _0x295394,
        'onMouseOut': _0x2bdc57
      }, _0x5bfe51);
    }
    function _0x4fd78e(_0x495875) {
      var _0xd5f6f9 = _0x495875["isk2"];
      var _0x16ab0f = _0x495875["isDisabled"];
      return _0xd5f6f9 ? Object(_0x30eefb['c'])(_0x575aad['a'], {
        'altText': 'My\x20coins',
        'component': _0x16ab0f ? Object(_0x30eefb['c'])(_0x2569b2, null) : Object(_0x30eefb['c'])(_0x36c251, null)
      }) : Object(_0x30eefb['c'])(_0x575aad['a'], {
        'altText': "My coins",
        'component': _0x16ab0f ? Object(_0x30eefb['c'])(_0x2b5aab, null) : Object(_0x30eefb['c'])(_0x2b1047, null)
      });
    }
    var _0x4e37f6 = _0x140645['a']["isIpad"]() ? _0x9507a6['a'] : _0x1a2e3c['a'];
    _0x546138['a'] = function (_0x3db644) {
      var _0x17a5fe = _0x3db644["amount"];
      var _0x2e238c = _0x3db644["isk2"];
      var _0x2debb2 = void 0x0 !== _0x2e238c && _0x2e238c;
      var _0x54b61b = _0x3db644["themePath"];
      var _0x21cd12 = Object(_0x4e5e4c["useState"])(!0x1);
      var _0x2e89d6 = Object(_0x2d59e9['a'])(_0x21cd12, 0x2);
      var _0x3e37f = _0x2e89d6[0x0];
      var _0x5e1276 = _0x2e89d6[0x1];
      var _0x16141d = Object(_0x4e5e4c["useMemo"])(function () {
        return _0x307c4a()(_0x17a5fe);
      }, [_0x17a5fe]);
      var _0x20a761 = Object(_0x4e5e4c["useCallback"])(function () {
        return _0x5e1276(!0x0);
      }, [_0x5e1276]);
      var _0x4fe86a = Object(_0x4e5e4c["useCallback"])(function () {
        return _0x5e1276(!0x1);
      }, [_0x5e1276]);
      return Object(_0x30eefb['c'])(_0xd389d, {
        'className': _0x151d9f()({
          'coins-disabled': _0x16141d
        }),
        'type': "grid",
        'alignItems': 'center',
        'gridTemplateColumns': "0fr 0fr",
        'themePath': _0x54b61b
      }, Object(_0x30eefb['c'])(_0x5b2b1e['a'], {
        'id': "coin-wrapper"
      }, Object(_0x30eefb['c'])("div", {
        'onFocus': _0x20a761,
        'onBlur': _0x4fe86a,
        'onMouseOver': _0x20a761,
        'onMouseOut': _0x4fe86a,
        'onMouseUp': _0x1c5ded['a'],
        'tabIndex': _0x16141d ? 0x0 : -0x1,
        'css': Object(_0x30eefb['b'])(_0x3c3527['f'], ";display:block;;label:CoinHolder;")
      }, Object(_0x30eefb['c'])(_0x4fd78e, {
        'isk2': _0x2debb2,
        'isDisabled': _0x16141d
      })), _0x16141d && Object(_0x30eefb['c'])(_0x1ff62d, {
        'autohide': !0x0,
        'placement': "bottom",
        'target': 'coin-wrapper',
        'isOpen': _0x3e37f
      }, Object(_0x30eefb['c'])(_0x27ef6e['b'], {
        'message': Object(_0x1116f4['e'])('dashboard.header:COINS_UNAVAILABLE'),
        'aria-live': 'assertive',
        'clearOnUnmount': !0x0
      }), Object(_0x30eefb['c'])(_0x4e37f6, {
        'audioKey': "COINS_UNAVAILABLE",
        'autoPlay': !0x0,
        'autoPlayHistory': !0x1
      }, Object(_0x30eefb['c'])(_0x1099bb['a'], {
        'className': "header_11"
      }, Object(_0x1116f4['e'])('dashboard.header:COINS_UNAVAILABLE'))))), Object(_0x30eefb['c'])(_0x5b2b1e['a'], null, Object(_0x30eefb['c'])(_0x1099bb['a'], {
        'id': 'coin-amount',
        'color': _0x16141d ? _0x9cebad['A'] : _0x9cebad['p'],
        'fontFamily': _0x16141d ? "Roboto Medium" : "Roboto"
      }, _0x16141d ? Object(_0x30eefb['c'])(_0x1a9cc0, {
        'onMouseOver': _0x20a761,
        'onMouseOut': _0x4fe86a
      }) : _0x17a5fe)));
    };
  },
  0x4eb: function (_0x49f3ef, _0x48d194, _0x28dc9b) {
    'use strict';

    var _0x2d3486 = _0x28dc9b(0x26);
    var _0x5db879 = _0x28dc9b(0x3);
    var _0x208144 = _0x28dc9b(0x0);
    var _0x390aee = _0x28dc9b(0x3f4);
    var _0x17c034 = _0x28dc9b(0x3f3);
    var _0x5a8cb4 = _0x28dc9b(0x12c)['a']["InterstitialBg"];
    var _0x5909cf = Object(_0x2d3486['a'])(_0x5a8cb4, {
      'target': "enrdo2h3",
      'label': "StyledBackgroundImage"
    })("#Background g{mix-blend-mode:", function (_0x52ecb9) {
      return _0x52ecb9["isSad"] ? "inherit !important" : 'multiply';
    }, ';}');
    var _0x2c602c = Object(_0x2d3486['a'])(_0x17c034['a'], {
      'target': "enrdo2h2",
      'label': "StyledBuddyContainer"
    })({
      'name': '1oh3b2v',
      'styles': "bottom:0;height:364px;position:absolute;width:364px;z-index:1"
    });
    var _0xc4f299 = Object(_0x2d3486['a'])("div", {
      'target': 'enrdo2h1',
      'label': "BuddyImageWrapper"
    })('background-color:#b1d0fc;display:flex;height:364px;justify-content:center;margin-bottom:', function (_0x12b4f6) {
      return _0x12b4f6['caption'] ? 0x0 : "10px";
    }, ';position:relative;>svg{position:absolute;width:490px;z-index:0;}');
    var _0x43f5b1 = Object(_0x2d3486['a'])("div", {
      'target': 'enrdo2h0',
      'label': "CaptionWrapper"
    })({
      'name': "30tvht",
      'styles': "margin-bottom:60px"
    });
    _0x48d194['a'] = function (_0x49ce5d) {
      _0x49ce5d["caption"];
      var _0x7edc5a = _0x49ce5d['cdnPath'];
      var _0x405978 = _0x49ce5d["components"];
      var _0x4761f8 = void 0x0 === _0x405978 ? {} : _0x405978;
      var _0x33aec2 = _0x49ce5d["isk2"];
      var _0x27c3af = _0x49ce5d['isPassingScore'];
      var _0x291e0a = _0x49ce5d["lessonActivity"];
      var _0x57791d = _0x49ce5d["selectedSubject"];
      var _0x43d973 = _0x291e0a && "COMPLETED" === _0x291e0a["status"];
      return Object(_0x5db879['c'])(_0x208144["Fragment"], null, _0x33aec2 ? Object(_0x5db879['c'])(_0xc4f299, {
        'caption': _0x4761f8["Caption"]
      }, _0x43d973 && Object(_0x5db879['c'])(_0x5909cf, {
        'isSad': _0x43d973 && !_0x27c3af
      }), Object(_0x5db879['c'])(_0x2c602c, {
        'isSad': _0x43d973 && !_0x27c3af
      })) : Object(_0x5db879['c'])(_0x390aee['a'], {
        'activity': _0x291e0a,
        'cdnPath': _0x7edc5a,
        'isk2': _0x33aec2,
        'selectedSubject': _0x57791d,
        'style': {
          'height': 0x156,
          'marginBottom': _0x4761f8["Caption"] ? 0x0 : 0x1e,
          'width': "100%"
        },
        'imageSize': 'large',
        'ariaHidden': !0x0
      }), _0x4761f8["Caption"] && Object(_0x5db879['c'])(_0x43f5b1, null, _0x4761f8["Caption"]));
    };
  },
  0x55a: function (_0x28cee0, _0x53eb71, _0x31d38f) {
    'use strict';

    var _0x219424 = _0x31d38f(0x3);
    var _0x517c4a = _0x31d38f(0x59);
    var _0x200c0a = _0x31d38f(0x38f);
    var _0x4d932b = _0x31d38f(0x4c2);
    var _0x2ff844 = _0x31d38f['n'](_0x4d932b);
    var _0x23c84e = {
      'onJQueryLoad': _0x31d38f(0x3e6)['n']
    };
    _0x53eb71['a'] = Object(_0x517c4a['connect'])(function (_0x16c50e) {
      return {
        'settings': Object(_0x200c0a['e'])(_0x16c50e)
      };
    }, _0x23c84e)(function (_0x458829) {
      var _0x181cfe = _0x458829['settings']["CDN_DOMAIN_URL"];
      var _0x42e836 = _0x458829["onError"];
      var _0xfde196 = _0x458829["onJQueryLoad"];
      return Object(_0x219424['c'])(_0x2ff844['a'], {
        'url': ''["concat"](_0x181cfe, "/client/js/jquery-1.7.1.min.js"),
        'onError': _0x42e836,
        'onLoad': _0xfde196
      });
    });
  },
  0x569: function (_0x1e568e, _0x248392, _0x1e9c6b) {
    'use strict';

    var _0x3f2711 = _0x1e9c6b(0x4);
    var _0x3f1716 = _0x1e9c6b(0x1a);
    var _0x4c0411 = _0x1e9c6b(0x2c);
    var _0x66830a = _0x1e9c6b(0x14);
    var _0x17957e = _0x1e9c6b['n'](_0x66830a);
    var _0x2256fa = _0x1e9c6b(0xa);
    var _0x15fb8b = _0x1e9c6b['n'](_0x2256fa);
    var _0x583ec1 = _0x1e9c6b(0x47d);
    var _0x130b7f = _0x1e9c6b(0x3e6);
    var _0x55b210 = _0x1e9c6b(0x59);
    var _0x5908f3 = _0x1e9c6b(0x3e4);
    var _0x530120 = _0x1e9c6b(0x0);
    var _0x8b297a = _0x1e9c6b['n'](_0x530120);
    var _0x242e25 = _0x1e9c6b(0x417);
    var _0x40985c = _0x1e9c6b(0xe7);
    var _0x2c915c = _0x1e9c6b(0x3f7);
    var _0x24f51d = _0x1e9c6b(0x61);
    var _0x351798 = _0x1e9c6b(0x3fd);
    var _0x163d21 = _0x1e9c6b(0x534);
    var _0x1a612b = _0x1e9c6b(0x3b4);
    var _0x53380e = _0x1e9c6b(0x86);
    var _0x30bd8c = _0x1e9c6b(0xb2);
    var _0x3af783 = _0x1e9c6b(0x39e);
    var _0x3ffc48 = _0x1e9c6b(0x38f);
    var _0xdc268f = _0x1e9c6b(0x9);
    function _0xe350d1(_0x147688, _0x147e35) {
      var _0x59ab0a = Object(_0x530120["useRef"])(_0x147e35);
      Object(_0x530120["useEffect"])(function () {
        _0x59ab0a["current"] = _0x147688;
      });
      return _0x59ab0a["current"];
    }
    function _0x9171da(_0x54edd4) {
      var _0x53befa;
      _0x54edd4 && (_0x54edd4 = _0x54edd4["toUpperCase"](), _0x53befa = _0x17957e()(_0x242e25['a']["find"](function (_0x1738dc) {
        return _0x1738dc['id'] === _0x54edd4;
      }), "displayName"));
      return _0x53befa || '';
    }
    function _0x17e0e6(_0x4d6e38) {
      var _0x2d39f5 = _0x4d6e38['setCredits'];
      var _0x49c75d = _0x4d6e38["setProgress"];
      var _0x4b5c95 = _0x4d6e38['student'];
      var _0x14ed91 = _0x4d6e38["useAlternateInstructionContent"];
      var _0x325438 = _0x4d6e38["isSwitchedUser"];
      var _0x2d9c35 = _0x4d6e38["lessonActivity"];
      var _0x3ccf37 = _0x4d6e38["settings"];
      var _0x4ad056 = _0x4d6e38["navigateToPage"];
      var _0xa49194 = _0x4d6e38["dispatchCompleteLessonComponent"];
      var _0x437608 = _0x4d6e38["dispatchStartLessonComponentAction"];
      var _0x507cb0 = _0x4d6e38['dispatchPauseLessonComponentAction'];
      var _0x372596 = _0x4d6e38["dispatchResumeLessonComponentAction"];
      var _0x5effb1 = _0x4d6e38["dispatchSetClosedCaptionPreferenceAction"];
      var _0x3c4b6a = _0x4d6e38["dispatchLoadStateAction"];
      var _0x429f91 = _0x4d6e38["dispatchSaveStateAction"];
      var _0x533058 = _0x4d6e38["dispatchDeleteStateAction"];
      var _0x534e62 = _0x4d6e38["iframeid"];
      var _0x4c8bb8 = _0x4d6e38["loaded"];
      var _0x541a0c = _0x4d6e38['ccEnabled'];
      var _0x13c6f7 = Object(_0x530120['useState'])(function () {
        return document['getElementById'](_0x534e62);
      });
      var _0x4b23f4 = Object(_0x4c0411['a'])(_0x13c6f7, 0x2);
      var _0x3b587f = _0x4b23f4[0x0];
      var _0x3c210a = _0x4b23f4[0x1];
      var _0x3b250c = _0xe350d1(_0x3b587f, _0x3b587f);
      _0x3b250c && _0x3b587f !== _0x3b250c && _0xdc268f['e']["error"]("This component does not support iframe switching.");
      Object(_0x530120["useEffect"])(function () {
        _0x3c210a(document['getElementById'](_0x534e62));
      }, [_0x534e62]);
      var _0x5b04d3 = _0x2c915c['c']['getCurrentLessonComponentActivity'](_0x2d9c35);
      var _0x203867 = Object(_0x530120["useState"])();
      var _0x5c7068 = Object(_0x4c0411['a'])(_0x203867, 0x2);
      var _0x17d799 = _0x5c7068[0x0];
      var _0x5ed434 = _0x5c7068[0x1];
      _0x3b587f && !_0x17d799 && ((_0x17d799 = Object(_0x583ec1['z'])(_0x3b587f, new URL(_0x3b587f['src'])))["addCommandProcessor"](_0x583ec1['n'], function () {
        var _0x109ebd = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x389b61(_0x266dc0) {
          return _0x15fb8b['a']["wrap"](function (_0x3824d2) {
            for (;;) {
              switch (_0x3824d2["prev"] = _0x3824d2["next"]) {
                case 0x0:
                  Object(_0x53380e['g'])(_0x266dc0['payload'], ''["concat"](_0x53380e['m'], '\x20[LESSON.ERROR]'));
                case 0x1:
                case "end":
                  return _0x3824d2["stop"]();
              }
            }
          }, _0x389b61);
        }));
        return function (_0x1c6854) {
          return _0x109ebd['apply'](this, arguments);
        };
      }()), _0x5ed434(_0x17d799));
      var _0x2b66d2 = _0xe350d1(_0x4c8bb8, !0x1);
      _0x4c8bb8 && !_0x2b66d2 && _0x17d799 && _0x17d799['loaderCompleted']();
      Object(_0x530120["useEffect"])(function () {
        return function () {
          _0x17d799 && _0x17d799["close"]();
        };
      }, [_0x17d799]);
      Object(_0x530120["useMemo"])(function () {
        _0x17d799 && _0x17d799["addCommandProcessor"](_0x583ec1['i'], function () {
          var _0x811c1 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x883d82(_0x1b3b09) {
            return _0x15fb8b['a']["wrap"](function (_0xb5aac0) {
              for (;;) {
                switch (_0xb5aac0["prev"] = _0xb5aac0["next"]) {
                  case 0x0:
                    return _0xb5aac0["abrupt"]("return", {
                      'id': _0x2d9c35['id'],
                      'previouslyFailed': !!_0x2d9c35["previouslyFailedActivityId"]
                    });
                  case 0x1:
                  case "end":
                    return _0xb5aac0["stop"]();
                }
              }
            }, _0x883d82);
          }));
          return function (_0x127eac) {
            return _0x811c1["apply"](this, arguments);
          };
        }());
      }, [_0x17d799, _0x2d9c35]);
      Object(_0x530120["useMemo"])(function () {
        _0x17d799 && _0x17d799["addCommandProcessor"](_0x583ec1['r'], function () {
          var _0x3da693 = Object(_0x3f1716['a'])(_0x15fb8b['a']['mark'](function _0x36b20f(_0x20d403) {
            return _0x15fb8b['a']['wrap'](function (_0x180cee) {
              for (;;) {
                switch (_0x180cee["prev"] = _0x180cee["next"]) {
                  case 0x0:
                    return _0x180cee["abrupt"]("return", {
                      'ccEnabled': _0x541a0c
                    });
                  case 0x1:
                  case "end":
                    return _0x180cee["stop"]();
                }
              }
            }, _0x36b20f);
          }));
          return function (_0x41c0bb) {
            return _0x3da693["apply"](this, arguments);
          };
        }());
      }, [_0x17d799, _0x541a0c]);
      Object(_0x530120["useMemo"])(function () {
        _0x17d799 && _0x17d799["addCommandProcessor"](_0x583ec1['j'], function () {
          var _0x4532df = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x2b2aa2(_0x56f996) {
            var _0x3105d2;
            var _0x55c298;
            var _0xc50489;
            var _0x248ee9;
            var _0x2fc3fe;
            return _0x15fb8b['a']['wrap'](function (_0x201ecc) {
              for (;;) {
                switch (_0x201ecc["prev"] = _0x201ecc["next"]) {
                  case 0x0:
                    _0x3105d2 = _0x3ccf37["DC_API_ENDPOINT"];
                    _0x55c298 = _0x3ccf37["DC_DELAY_RETRIES"];
                    _0xc50489 = _0x3ccf37["DC_MAX_RETRIES"];
                    _0x248ee9 = _0x3ccf37["DC_SERVICE_ENABLED"];
                    _0x2fc3fe = _0x3105d2 && _0x3105d2["startsWith"]('/') ? window['location']["origin"] + _0x3105d2 : _0x3105d2;
                    return _0x201ecc['abrupt']("return", {
                      'serviceEnabled': _0x248ee9,
                      'endpoint': _0x2fc3fe,
                      'retries': {
                        'max': _0xc50489,
                        'delay': _0x55c298
                      }
                    });
                  case 0x3:
                  case "end":
                    return _0x201ecc["stop"]();
                }
              }
            }, _0x2b2aa2);
          }));
          return function (_0x194185) {
            return _0x4532df["apply"](this, arguments);
          };
        }());
      }, [_0x17d799, _0x3ccf37]);
      Object(_0x530120["useMemo"])(function () {
        _0x17d799 && _0x17d799["addCommandProcessor"](_0x583ec1['k'], function () {
          var _0x3ee029 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x2206b9(_0xeae4ec) {
            return _0x15fb8b['a']["wrap"](function (_0x538339) {
              for (;;) {
                switch (_0x538339["prev"] = _0x538339['next']) {
                  case 0x0:
                    return _0x538339["abrupt"]("return", Object(_0x3f2711['a'])({
                      'reviewMode': !0x1,
                      'previewMode': !0x1
                    }, _0x325438 ? {
                      'superUser': !0x0
                    } : {}));
                  case 0x1:
                  case "end":
                    return _0x538339['stop']();
                }
              }
            }, _0x2206b9);
          }));
          return function (_0x5724ec) {
            return _0x3ee029["apply"](this, arguments);
          };
        }());
      }, [_0x325438, _0x17d799]);
      Object(_0x530120["useMemo"])(function () {
        _0x17d799 && (_0x17d799["addCommandProcessor"](_0x583ec1['o'], function () {
          var _0x338044 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x44408d(_0x3d0576) {
            return _0x15fb8b['a']["wrap"](function (_0x4f6fa1) {
              for (;;) {
                switch (_0x4f6fa1["prev"] = _0x4f6fa1["next"]) {
                  case 0x0:
                    Object(_0x53380e['g'])(_0x3d0576["payload"], ''["concat"](_0x53380e['m'], '\x20[LESSON.FATAL]'));
                    _0x4ad056(Object(_0x24f51d['b'])(_0x24f51d['a']['STUDENT_ERROR'])["replace"]("/:errorReason?", _0x24f51d['a']["ERROR_GENERIC"]));
                  case 0x2:
                  case "end":
                    return _0x4f6fa1["stop"]();
                }
              }
            }, _0x44408d);
          }));
          return function (_0x5adc03) {
            return _0x338044["apply"](this, arguments);
          };
        }()), _0x17d799["addCommandProcessor"](_0x583ec1['w'], function () {
          var _0x5dd1ec = Object(_0x3f1716['a'])(_0x15fb8b['a']['mark'](function _0xef78d5(_0x410c68) {
            var _0x4a2f12;
            return _0x15fb8b['a']["wrap"](function (_0x1a59e0) {
              for (;;) {
                switch (_0x1a59e0['prev'] = _0x1a59e0["next"]) {
                  case 0x0:
                    _0x4a2f12 = _0x410c68['payload'];
                    _0x49c75d(_0x4a2f12);
                  case 0x2:
                  case "end":
                    return _0x1a59e0["stop"]();
                }
              }
            }, _0xef78d5);
          }));
          return function (_0xe420d6) {
            return _0x5dd1ec["apply"](this, arguments);
          };
        }()), _0x17d799['addCommandProcessor'](_0x583ec1['v'], function () {
          var _0x1ee621 = Object(_0x3f1716['a'])(_0x15fb8b['a']['mark'](function _0x1cb2d4(_0x1d7be9) {
            return _0x15fb8b['a']["wrap"](function (_0x34748f) {
              for (;;) {
                switch (_0x34748f['prev'] = _0x34748f["next"]) {
                  case 0x0:
                    _0x2d39f5(_0x1d7be9['payload']);
                  case 0x1:
                  case "end":
                    return _0x34748f["stop"]();
                }
              }
            }, _0x1cb2d4);
          }));
          return function (_0x98396f) {
            return _0x1ee621["apply"](this, arguments);
          };
        }()));
      }, [_0x4ad056, _0x49c75d, _0x2d39f5, _0x17d799]);
      Object(_0x530120['useMemo'])(function () {
        _0x17d799 && _0x17d799['addCommandProcessor'](_0x583ec1['m'], function () {
          var _0x47e354 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x2797af(_0x2910e8) {
            var _0x250941;
            var _0x5af963;
            var _0x3f7cf3;
            var _0x461f2a;
            var _0x16ca67;
            var _0x26cd0c;
            var _0x4e2731;
            return _0x15fb8b['a']["wrap"](function (_0x5ab818) {
              for (;;) {
                switch (_0x5ab818['prev'] = _0x5ab818["next"]) {
                  case 0x0:
                    _0x250941 = _0x4b5c95 && _0x4b5c95['gradeLevelData'] && _0x4b5c95["gradeLevelData"]['chronologicalGradeLevel'] && _0x4b5c95["gradeLevelData"]['chronologicalGradeLevel'] ? _0x4b5c95['gradeLevelData']["chronologicalGradeLevel"]['id'] : '';
                    _0x5af963 = _0x4b5c95 && _0x4b5c95["primarySchoolEnrollment"] && _0x4b5c95["primarySchoolEnrollment"]["school"] && _0x4b5c95['primarySchoolEnrollment']["school"]["name"] ? _0x4b5c95["primarySchoolEnrollment"]["school"]['name'] : '';
                    _0x3f7cf3 = _0x4b5c95['id'];
                    _0x461f2a = _0x4b5c95["firstName"];
                    _0x16ca67 = _0x4b5c95['lastName'];
                    _0x26cd0c = _0x4b5c95["stateId"];
                    _0x4e2731 = _0x4b5c95['dateOfBirth'];
                    return _0x5ab818['abrupt']('return', {
                      'id': _0x3f7cf3,
                      'firstName': _0x461f2a || '',
                      'lastName': _0x16ca67 || '',
                      'stateId': _0x26cd0c || '',
                      'stateName': _0x9171da(_0x26cd0c),
                      'grade': _0x250941,
                      'dateOfBirth': _0x4e2731 || '',
                      'school': _0x5af963,
                      'useAlternateInstructionContent': _0x14ed91
                    });
                  case 0x4:
                  case "end":
                    return _0x5ab818["stop"]();
                }
              }
            }, _0x2797af);
          }));
          return function (_0x8b545) {
            return _0x47e354["apply"](this, arguments);
          };
        }());
      }, [_0x17d799, _0x4b5c95, _0x14ed91]);
      Object(_0x530120['useMemo'])(function () {
        if (_0x5b04d3 && _0x17d799) {
          var _0x452999;
          function _0x130563() {
            return clearInterval(_0x452999);
          }
          function _0x21def0() {
            return "Are you sure you want to leave?";
          }
          function _0x5a9677(_0x4b9be1) {
            var _0x133be3 = _0x5b04d3['id'];
            var _0x5451cd = Object(_0x1a612b['b'])(_0x40985c['a']["COMPONENT_PAUSE"]({
              'componentStatusId': _0x5b04d3['id']
            }));
            _0x4b9be1 ? (_0x130563(), _0x452999 = setInterval(_0x351798['c'], 0xea60 * _0x3ccf37["SESSION_KEEP_ALIVE_INTERVAL"]), window["onbeforeunload"] = _0x21def0, window["onunload"] = function () {
              return Object(_0x163d21['e'])(_0x133be3, _0x5451cd);
            }) : (window["onbeforeunload"] = null, window["onunload"] = null, _0x130563());
          }
          var _0x4c77f5 = _0x17957e()(_0x2d9c35, "lesson.name");
          var _0x13bf51 = _0x17957e()(_0x2d9c35, 'lesson.channel');
          var _0x21f700 = _0x17957e()(_0x2d9c35, "status");
          var _0x16acb4 = "BASAL_PRACTICE" === _0x13bf51;
          _0x17d799["addCommandProcessor"](_0x583ec1['s'], function () {
            var _0x4901cf = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x339351(_0x34b3f8) {
              return _0x15fb8b['a']["wrap"](function (_0x4021fa) {
                for (;;) {
                  switch (_0x4021fa["prev"] = _0x4021fa["next"]) {
                    case 0x0:
                      _0x4021fa["next"] = 0x2;
                      return _0x5effb1(_0x34b3f8["payload"]);
                    case 0x2:
                      return _0x4021fa["abrupt"]("return", _0x4021fa['sent']);
                    case 0x3:
                    case "end":
                      return _0x4021fa["stop"]();
                  }
                }
              }, _0x339351);
            }));
            return function (_0x1ed429) {
              return _0x4901cf["apply"](this, arguments);
            };
          }());
          _0x17d799["addCommandProcessor"](_0x583ec1['l'], function () {
            var _0x3f078c = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x3902e6(_0x559de8) {
              return _0x15fb8b['a']["wrap"](function (_0x4a8991) {
                for (;;) {
                  switch (_0x4a8991["prev"] = _0x4a8991["next"]) {
                    case 0x0:
                      _0x4a8991["next"] = 0x2;
                      return _0x3c4b6a(_0x5b04d3['id']);
                    case 0x2:
                      return _0x4a8991['abrupt']("return", _0x4a8991["sent"]);
                    case 0x3:
                    case "end":
                      return _0x4a8991["stop"]();
                  }
                }
              }, _0x3902e6);
            }));
            return function (_0x1da4f0) {
              return _0x3f078c["apply"](this, arguments);
            };
          }());
          _0x17d799['addCommandProcessor'](_0x583ec1['u'], function () {
            var _0x48be9a = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x2f07cb(_0x3b8f32) {
              return _0x15fb8b['a']["wrap"](function (_0x3474a0) {
                for (;;) {
                  switch (_0x3474a0['prev'] = _0x3474a0["next"]) {
                    case 0x0:
                      _0x3474a0["next"] = 0x2;
                      return _0x429f91({
                        'componentStatusId': _0x5b04d3['id'],
                        'value': _0x3b8f32["payload"]
                      });
                    case 0x2:
                    case "end":
                      return _0x3474a0["stop"]();
                  }
                }
              }, _0x2f07cb);
            }));
            return function (_0x113fa3) {
              return _0x48be9a["apply"](this, arguments);
            };
          }());
          _0x17d799['addCommandProcessor'](_0x583ec1['h'], function () {
            var _0x368b55 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x15634d(_0x3edaf7) {
              return _0x15fb8b['a']["wrap"](function (_0x33ec3d) {
                for (;;) {
                  switch (_0x33ec3d['prev'] = _0x33ec3d["next"]) {
                    case 0x0:
                      _0x33ec3d["next"] = 0x2;
                      return _0x533058(_0x5b04d3['id']);
                    case 0x2:
                    case "end":
                      return _0x33ec3d["stop"]();
                  }
                }
              }, _0x15634d);
            }));
            return function (_0x391c9c) {
              return _0x368b55["apply"](this, arguments);
            };
          }());
          _0x17d799["addCommandProcessor"](_0x583ec1['x'], function () {
            var _0x151fea = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x5933c2(_0x3ff6ac) {
              return _0x15fb8b['a']['wrap'](function (_0x480706) {
                for (;;) {
                  switch (_0x480706["prev"] = _0x480706['next']) {
                    case 0x0:
                      _0x5a9677(!0x0);
                      _0x480706['next'] = 0x3;
                      return _0x437608({
                        'componentStatusId': _0x5b04d3['id']
                      });
                    case 0x3:
                      _0x4c77f5 && _0x3af783['g']['trackEvent']({
                        'category': _0x16acb4 ? ''["concat"](_0x3af783['c']['PRACTICE'], " - ")['concat'](_0x4c77f5) : ''['concat'](_0x3af783['c']["HTML5_LESSON"], " - ")["concat"](_0x4c77f5),
                        'action': "NOT_STARTED" === _0x21f700 ? _0x3af783['b']["ACTIVITY_STARTED"] : _0x3af783['b']["ACTIVITY_RESUMED"]
                      });
                    case 0x4:
                    case 'end':
                      return _0x480706["stop"]();
                  }
                }
              }, _0x5933c2);
            }));
            return function (_0x71deb7) {
              return _0x151fea["apply"](this, arguments);
            };
          }());
          _0x17d799['addCommandProcessor'](_0x583ec1['q'], function () {
            var _0x2a710c = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x51c9d2(_0x2f0b6f) {
              return _0x15fb8b['a']["wrap"](function (_0x27ce0c) {
                for (;;) {
                  switch (_0x27ce0c["prev"] = _0x27ce0c["next"]) {
                    case 0x0:
                      _0x5a9677(!0x1);
                      _0x27ce0c['next'] = 0x3;
                      return _0x507cb0(_0x5b04d3['id']);
                    case 0x3:
                    case "end":
                      return _0x27ce0c['stop']();
                  }
                }
              }, _0x51c9d2);
            }));
            return function (_0x5d5b01) {
              return _0x2a710c["apply"](this, arguments);
            };
          }());
          _0x17d799['addCommandProcessor'](_0x583ec1['t'], function () {
            var _0x414b11 = Object(_0x3f1716['a'])(_0x15fb8b['a']['mark'](function _0x4584d7(_0x59a845) {
              return _0x15fb8b['a']["wrap"](function (_0x302ebc) {
                for (;;) {
                  switch (_0x302ebc["prev"] = _0x302ebc["next"]) {
                    case 0x0:
                      _0x5a9677(!0x0);
                      _0x302ebc["next"] = 0x3;
                      return _0x372596(_0x5b04d3['id']);
                    case 0x3:
                    case 'end':
                      return _0x302ebc['stop']();
                  }
                }
              }, _0x4584d7);
            }));
            return function (_0xe95e0d) {
              return _0x414b11["apply"](this, arguments);
            };
          }());
          _0x17d799["addCommandProcessor"](_0x583ec1['a'], function () {
            var _0x31b593 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x2adbe9(_0x11ced5) {
              return _0x15fb8b['a']['wrap'](function (_0x6662ab) {
                for (;;) {
                  switch (_0x6662ab["prev"] = _0x6662ab["next"]) {
                    case 0x0:
                      _0x5a9677(!0x1);
                      _0x6662ab["next"] = 0x3;
                      return _0x507cb0(_0x5b04d3['id']);
                    case 0x3:
                      _0x4c77f5 && _0x3af783['g']['trackEvent']({
                        'category': _0x16acb4 ? ''['concat'](_0x3af783['c']["PRACTICE"], " - ")['concat'](_0x4c77f5) : ''["concat"](_0x3af783['c']["HTML5_LESSON"], " - ")["concat"](_0x4c77f5),
                        'action': _0x3af783['b']["ACTIVITY_PAUSED"]
                      });
                      _0x4ad056(Object(_0x24f51d['b'])(_0x24f51d['a']["STUDENT_DASHBOARD_HOME"]));
                    case 0x5:
                    case "end":
                      return _0x6662ab["stop"]();
                  }
                }
              }, _0x2adbe9);
            }));
            return function (_0x2c841b) {
              return _0x31b593["apply"](this, arguments);
            };
          }());
          _0x17d799["addCommandProcessor"](_0x583ec1['e'], function () {
            var _0x236166 = Object(_0x3f1716['a'])(_0x15fb8b['a']["mark"](function _0x5f232c(_0x53cb0e) {
              return _0x15fb8b['a']["wrap"](function (_0x15a13f) {
                for (;;) {
                  switch (_0x15a13f["prev"] = _0x15a13f['next']) {
                    case 0x0:
                      _0x5a9677(!0x1);
                      _0x15a13f['next'] = 0x3;
                      return _0xa49194({
                        'componentStatusId': _0x5b04d3['id'],
                        'instructionLessonOutcome': null != _0x53cb0e["payload"] ? {
                          'score': _0x53cb0e["payload"]
                        } : null
                      });
                    case 0x3:
                    case "end":
                      return _0x15a13f["stop"]();
                  }
                }
              }, _0x5f232c);
            }));
            return function (_0x5574c8) {
              return _0x236166["apply"](this, arguments);
            };
          }());
          return function () {
            return _0x5a9677(!0x1);
          };
        }
      }, [_0x17d799, _0x5b04d3, _0x3ccf37["SESSION_KEEP_ALIVE_INTERVAL"], _0x2d9c35, _0x4ad056, _0xa49194, _0x437608, _0x507cb0, _0x372596, _0x3c4b6a, _0x429f91, _0x533058, _0x5effb1]);
      return null;
    }
    function _0x1ec7da(_0x32bef8) {
      return {
        'student': Object(_0x3ffc48['o'])(_0x32bef8),
        'settings': Object(_0x3ffc48['e'])(_0x32bef8),
        'lessonActivity': Object(_0x5908f3['e'])(_0x32bef8),
        'isSwitchedUser': Object(_0x3ffc48['h'])(_0x32bef8),
        'useAlternateInstructionContent': Object(_0x3ffc48['a'])(_0x32bef8),
        'ccEnabled': Object(_0x5908f3['b'])(_0x32bef8)
      };
    }
    var _0x218578 = {
      'navigateToPage': _0x30bd8c['e'],
      'dispatchCompleteLessonComponent': _0x130b7f['c'],
      'dispatchStartLessonComponentAction': _0x130b7f['o'],
      'dispatchPauseLessonComponentAction': _0x130b7f['h'],
      'dispatchResumeLessonComponentAction': _0x130b7f['j'],
      'dispatchSetClosedCaptionPreferenceAction': _0x130b7f['l'],
      'dispatchLoadStateAction': _0x130b7f['g'],
      'dispatchSaveStateAction': _0x130b7f['k'],
      'dispatchDeleteStateAction': _0x130b7f['d']
    };
    var _0x37f3a9 = Object(_0x55b210['connect'])(_0x1ec7da, _0x218578)(_0x17e0e6);
    _0x248392['a'] = function (_0x58a30f) {
      return _0x8b297a['a']['createElement'](_0x37f3a9, _0x58a30f);
    };
    __TEST__;
  },
  0x65f: function (_0xc0e23f, _0x43a775) {},
  0x671: function (_0x34903c, _0x3c11ed, _0x1dab42) {
    'use strict';

    (function (_0x105905) {
      var _0x545b4d = _0x1dab42(0x1f);
      var _0x1333be = _0x1dab42(0x20);
      var _0x24653a = _0x1dab42(0x50);
      var _0x883e24 = _0x1dab42(0x44);
      var _0x478c9c = _0x1dab42(0x3c);
      var _0x57d53a = _0x1dab42(0x14);
      var _0x5bbbd6 = _0x1dab42['n'](_0x57d53a);
      var _0x20743f = _0x1dab42(0x0);
      var _0x57062e = _0x1dab42(0x3);
      var _0x254434 = _0x1dab42(0x3cb);
      var _0x2bf2a7 = _0x1dab42(0x59);
      var _0x1a1b89 = _0x1dab42(0x391);
      var _0x34cbf2 = _0x1dab42(0x12d);
      var _0x58eb59 = _0x1dab42(0x38f);
      var _0x313762 = _0x1dab42(0xb2);
      var _0x279129 = _0x1dab42(0x3b6);
      var _0x3b43eb = _0x1dab42(0x61);
      var _0x4fcd34 = _0x1dab42(0x3e4);
      var _0xd39ea8 = _0x1dab42(0x3e6);
      var _0x545369 = _0x1dab42(0x395);
      var _0x3c4af1 = _0x1dab42(0x86);
      var _0x287830 = _0x1dab42(0x55a);
      var _0x480c05 = _0x1dab42(0x3ed);
      var _0x2ca63e = _0x1dab42(0x569);
      var _0x5dc095 = _0x1dab42(0x45);
      var _0x5a610b = _0x1dab42(0x3ab);
      var _0x5263f6 = _0x1dab42(0x8);
      var _0x5520c8 = _0x1dab42(0x39e);
      var _0x4bdabe = {
        'name': "1i22fuh-IFRAMESTYLE",
        'styles': "position:fixed;width:100%;height:100%;border:none;display:block;background-color:white;label:IFRAMESTYLE;"
      };
      var _0x581e04 = "closereading_lesson";
      var _0x5a62aa = function (_0xa11b05) {
        Object(_0x24653a['a'])(_0x52db04, _0xa11b05);
        var _0xf7cb98 = function (_0x38f89e) {
          function _0x294ec0() {
            if ('undefined' === typeof Reflect || !Reflect["construct"]) {
              return !0x1;
            }
            if (Reflect['construct']["sham"]) {
              return !0x1;
            }
            if ("function" === typeof Proxy) {
              return !0x0;
            }
            try {
              Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
              return !0x0;
            } catch (_0x3d80b1) {
              return !0x1;
            }
          }
          return function () {
            var _0x2ac3fb;
            var _0x488436 = Object(_0x478c9c['a'])(_0x38f89e);
            if (_0x294ec0()) {
              var _0x282843 = Object(_0x478c9c['a'])(this)["constructor"];
              _0x2ac3fb = Reflect["construct"](_0x488436, arguments, _0x282843);
            } else {
              _0x2ac3fb = _0x488436["apply"](this, arguments);
            }
            return Object(_0x883e24['a'])(this, _0x2ac3fb);
          };
        }(_0x52db04);
        function _0x52db04() {
          var _0x58d582;
          Object(_0x545b4d['a'])(this, _0x52db04);
          for (var _0x4c9741 = arguments["length"], _0x1348ef = new Array(_0x4c9741), _0x2ee083 = 0x0; _0x2ee083 < _0x4c9741; _0x2ee083++) {
            _0x1348ef[_0x2ee083] = arguments[_0x2ee083];
          }
          (_0x58d582 = _0xf7cb98["call"]["apply"](_0xf7cb98, [this]['concat'](_0x1348ef)))["state"] = {
            'showLoader': !0x0
          };
          _0x58d582["progress"] = -0x1;
          _0x58d582["progressTimeout"] = void 0x0;
          _0x58d582["loadError"] = function () {
            var _0x15c32a = _0x58d582["props"];
            var _0x28c5e9 = _0x15c32a["navigateToPage"];
            var _0x11ef16 = _0x15c32a["lessonActivity"];
            var _0x178859 = _0x5bbbd6()(_0x11ef16, "lesson.id");
            Object(_0x3c4af1['g'])('HTML5\x20close\x20reading\x20lesson\x20load\x20error,\x20lesson\x20=\x20['["concat"](_0x178859, ']'), _0x3c4af1['m']);
            _0x28c5e9(Object(_0x3b43eb['b'])(_0x3b43eb['a']["STUDENT_ERROR"])["replace"]("/:errorReason?", _0x3b43eb['a']["ERROR_GENERIC"]));
          };
          return _0x58d582;
        }
        Object(_0x1333be['a'])(_0x52db04, [{
          'key': "componentDidMount",
          'value': function () {
            this["addCloseReadingBridgeMethods"]();
          }
        }, {
          'key': 'UNSAFE_componentWillReceiveProps',
          'value': function (_0x918f83) {
            var _0x308242 = _0x918f83["lessonActivity"];
            var _0x59d345 = this['props']['lessonActivity'];
            var _0x5ca2c5 = _0x5bbbd6()(_0x308242, "status");
            var _0x46cf81 = _0x5bbbd6()(_0x308242, "lesson.name");
            null === _0x59d345 && _0x308242 && _0x5520c8['g']["trackEvent"]({
              'category': ''["concat"](_0x5520c8['c']['CR'], " - ")["concat"](_0x46cf81),
              'action': "NOT_STARTED" === _0x5ca2c5 ? _0x5520c8['b']["ACTIVITY_STARTED"] : _0x5520c8['b']["ACTIVITY_RESUMED"]
            });
          }
        }, {
          'key': "componentWillUnmount",
          'value': function () {
            var _0x1a5c55 = this["props"]["selectedSubject"];
            _0x254434['a']["removeContextKeys"](_0x1a5c55);
            this['removeCloseReadingBridgeMethods']();
            clearTimeout(this["progressTimeout"]);
          }
        }, {
          'key': "checkProgress",
          'value': function (_0x513163) {
            var _0x5ab97d = this;
            var _0x434da7 = this["props"]["settings"]["LEARNING_TREE_TIMEOUT_MILLIS"];
            this["progress"] !== _0x513163 && clearTimeout(this["progressTimeout"]);
            this['progressTimeout'] || (this['progressTimeout'] = setTimeout(function () {
              _0x5ab97d['loadError']();
            }, _0x434da7));
            this["progress"] = _0x513163;
            _0x513163 >= 0x64 && this["loadCompleted"]();
          }
        }, {
          'key': "loadCompleted",
          'value': function () {
            clearTimeout(this["progressTimeout"]);
            this["setState"]({
              'showLoader': !0x1
            });
          }
        }, {
          'key': 'addCloseReadingBridgeMethods',
          'value': function () {
            var _0x1589b9 = this;
            var _0x4fd64b = this["props"]["navigateToPage"];
            window["childPreloadProgress"] = function (_0x1fa3b4) {
              _0x1589b9["checkProgress"](_0x1fa3b4);
            };
            window['lessonBridge'] = {
              'start': function () {},
              'pause': function () {},
              'resume': function () {},
              'close': function () {
                var _0x1c9a12 = _0x1589b9["props"]["lessonActivity"];
                var _0x5e6150 = _0x5bbbd6()(_0x1c9a12, "lesson.name");
                _0x5e6150 && _0x5520c8['g']["trackEvent"]({
                  'category': ''["concat"](_0x5520c8['c']['CR'], '\x20-\x20')["concat"](_0x5e6150),
                  'action': _0x5520c8['b']["ACTIVITY_PAUSED"]
                });
                _0x4fd64b(Object(_0x3b43eb['b'])(_0x3b43eb['a']['STUDENT_DASHBOARD_HOME']));
              },
              'complete': function (_0x24b7af) {
                var _0x326486 = Object(_0x3b43eb['b'])(_0x3b43eb['a']["STUDENT_LESSON_COMPLETED"])['replace'](":isPassingScore/:score?", _0x24b7af['toString']());
                _0x4fd64b(_0x326486);
              },
              'fatal': function () {
                _0x1589b9["loadError"]();
              }
            };
            _0x105905["autoPlayCallback"] = function (_0x21704e) {};
          }
        }, {
          'key': "removeCloseReadingBridgeMethods",
          'value': function () {
            window["childPreloadProgress"] = window["lessonBridge"] = void 0x0;
          }
        }, {
          'key': 'getLessonSourceURL',
          'value': function (_0x2d4918) {
            var _0x2c4e2d;
            var _0x4f272e = this["props"];
            var _0x2885ce = _0x4f272e["settings"];
            var _0x397aaa = _0x2885ce["CR_INSTRUCTION_URL"];
            var _0x4c9820 = _0x2885ce["CR_INSTRUCTION_BASE"];
            var _0x17f419 = _0x4f272e['simulatingSnargg2'];
            var _0x3d0e07 = _0x2d4918['id'];
            if (_0x3d0e07) {
              var _0x3c5313 = _0x5bbbd6()(_0x2d4918, 'lessonComponent.contentFileName');
              _0x2c4e2d = _0x17f419 ? ''["concat"](_0x397aaa)["concat"](_0x5dc095['a']['SNAPPY_URL'], "?cr=true&csid=")["concat"](_0x3d0e07)["concat"](_0x3c5313) : ''['concat'](_0x397aaa)["concat"](_0x4c9820, "/?csid=")["concat"](_0x3d0e07)['concat'](_0x3c5313);
            }
            return _0x2c4e2d;
          }
        }, {
          'key': "render",
          'value': function () {
            var _0x28fa1e = this;
            var _0x258a36 = this["props"];
            var _0x4760d5 = _0x258a36['settings'];
            var _0x40a156 = _0x4760d5["LEARNING_TREE_TIMEOUT_MILLIS"];
            var _0x4a7d5f = _0x4760d5["LEARNING_TREE_LESSON_NUM_RETRIES"];
            var _0x39e1ad = _0x258a36["lessonActivity"];
            var _0x19c09c = _0x258a36["loading"];
            var _0x518674 = _0x258a36["selectedSubject"];
            var _0x2900ef = this['state']["showLoader"];
            var _0x23f3a5 = _0x5bbbd6()(_0x39e1ad, "componentActivities");
            var _0x542a34 = _0x23f3a5 && this["getLessonSourceURL"](_0x5bbbd6()(_0x23f3a5, "[0]"));
            var _0x21173a = ''["concat"](Object(_0x5263f6['e'])("dashboard:"["concat"](_0x5a610b['b'][_0x518674]["toUpperCase"](), "_SUBJECT_NAME")), '\x20')["concat"](Object(_0x5263f6['e'])("activity:CLOSE_READING"), ',\x20')["concat"](Object(_0x5263f6['e'])('dashboard:I_READY_TITLE'));
            return Object(_0x57062e['c'])('div', null, (_0x19c09c || _0x2900ef) && Object(_0x57062e['c'])(_0x34cbf2['a'], {
              'fullScreen': !0x0
            }), _0x542a34 && Object(_0x57062e['c'])('div', null, Object(_0x57062e['c'])(_0x287830['a'], {
              'onError': this["loadError"]
            }), Object(_0x57062e['c'])(_0x279129['a'], {
              'title': _0x21173a,
              'id': _0x581e04,
              'src': _0x542a34,
              'css': _0x4bdabe,
              'timeout': _0x40a156,
              'retry': _0x4a7d5f,
              'loadCheckAttribute': 'preloader',
              'loadErrorCallback': this["loadError"],
              'loadCompleteCallback': function () {
                _0x28fa1e["checkProgress"](-0x1);
              }
            }), Object(_0x57062e['c'])(_0x2ca63e['a'], {
              'iframeid': _0x581e04,
              'loaded': !this['state']["showLoader"],
              'setCredits': function () {},
              'setProgress': function (_0x410336) {
                return _0x28fa1e["checkProgress"](_0x410336);
              }
            })));
          }
        }]);
        return _0x52db04;
      }(_0x20743f["Component"]);
      function _0x2d0027(_0x584ae9) {
        return {
          'settings': Object(_0x58eb59['e'])(_0x584ae9),
          'lessonActivity': Object(_0x4fcd34['e'])(_0x584ae9),
          'selectedSubject': Object(_0x545369['b'])(_0x584ae9),
          'simulatingSnargg2': Object(_0x480c05['d'])(_0x584ae9)
        };
      }
      var _0x319658 = {
        'navigateToPage': _0x313762['e']
      };
      var _0x527e96 = Object(_0x2bf2a7["connect"])(_0x2d0027, _0x319658)(_0x5a62aa);
      __TEST__;
      var _0x2366b7 = Object(_0x1a1b89['a'])([_0xd39ea8['f']]);
      _0x3c11ed['a'] = function (_0x2a338e) {
        return Object(_0x57062e['c'])(_0x2366b7, {
          'onMount': _0xd39ea8['f']
        }, function (_0x321c90) {
          var _0x4d78fc = _0x321c90["loading"];
          return Object(_0x57062e['c'])(_0x527e96, Object["assign"]({}, _0x2a338e, {
            'loading': _0x4d78fc
          }));
        });
      };
    })["call"](this, _0x1dab42(0x5a));
  },
  0x67f: function (_0x41afd4, _0x4bea42, _0x42c2d9) {
    'use strict';

    _0x42c2d9['r'](_0x4bea42);
    var _0xf5d161 = _0x42c2d9(0x0);
    var _0x54ddf5 = _0x42c2d9['n'](_0xf5d161);
    var _0x561375 = _0x42c2d9(0x1f);
    var _0x238315 = _0x42c2d9(0x20);
    var _0x317a11 = _0x42c2d9(0x50);
    var _0x28bec5 = _0x42c2d9(0x44);
    var _0x522d3a = _0x42c2d9(0x3c);
    var _0x52ad8a = _0x42c2d9(0x8b);
    var _0xf86c48 = _0x42c2d9['n'](_0x52ad8a);
    var _0x18a25c = _0x42c2d9(0x14);
    var _0x21fb14 = _0x42c2d9['n'](_0x18a25c);
    var _0x1693a1 = _0x42c2d9(0x45);
    var _0x35f0a9 = _0x42c2d9(0x26);
    var _0x143a6b = _0x42c2d9(0x3ba);
    var _0x3e2e75 = _0x42c2d9['n'](_0x143a6b);
    var _0xb15e8f = _0x42c2d9(0x496);
    var _0x53cc22 = _0x42c2d9['n'](_0xb15e8f);
    var _0x5800d2 = _0x42c2d9(0x3c6);
    var _0x52af0a = _0x42c2d9['n'](_0x5800d2);
    var _0x312ad8 = _0x42c2d9(0x3);
    var _0x2ec172 = _0x42c2d9(0x59);
    var _0x216aeb = _0x42c2d9(0x391);
    var _0xa4b2f6 = _0x42c2d9(0x12d);
    var _0x124484 = _0x42c2d9(0x395);
    var _0x3ca2fc = _0x42c2d9(0x3e4);
    var _0x3b4cd1 = _0x42c2d9(0x3a3);
    var _0x5b4ede = _0x42c2d9(0x38f);
    var _0x5d1fed = _0x42c2d9(0xb2);
    var _0x30f5d2 = _0x42c2d9(0x3e6);
    var _0x2a12fe = _0x42c2d9(0x3f7);
    var _0x29d2c8 = _0x42c2d9(0x4);
    var _0x20d3ce = _0x42c2d9(0x3b6);
    var _0x3b4df5 = _0x42c2d9(0x61);
    var _0xb5c075 = _0x42c2d9(0x86);
    var _0x35b415 = _0x42c2d9(0x8);
    var _0x482847 = _0x42c2d9(0x55a);
    var _0x49cb46 = "html5Iframe";
    var _0x1a8eca = {
      'name': "157xkid-iframeViewHide",
      'styles': "position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#000;min-height:600px;overflow:auto;z-index:-999;label:iframeViewHide;"
    };
    var _0xaac1af = {
      'name': "1kp59jx-iframeView",
      'styles': "position:absolute;top:0px;left:0px;z-index:1;width:100%;height:100%;background-color:#000;min-height:600px;overflow:hidden;label:iframeView;"
    };
    var _0x6edae9 = function (_0xb4eeda) {
      Object(_0x317a11['a'])(_0x483781, _0xb4eeda);
      var _0x530ec1 = function (_0x86726a) {
        function _0xa24158() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]['toString']["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x358ecd) {
            return !0x1;
          }
        }
        return function () {
          var _0x193768;
          var _0x3ca152 = Object(_0x522d3a['a'])(_0x86726a);
          if (_0xa24158()) {
            var _0x41ac0b = Object(_0x522d3a['a'])(this)["constructor"];
            _0x193768 = Reflect["construct"](_0x3ca152, arguments, _0x41ac0b);
          } else {
            _0x193768 = _0x3ca152["apply"](this, arguments);
          }
          return Object(_0x28bec5['a'])(this, _0x193768);
        };
      }(_0x483781);
      function _0x483781() {
        var _0x30bbd2;
        Object(_0x561375['a'])(this, _0x483781);
        for (var _0x56b15e = arguments["length"], _0x3b667e = new Array(_0x56b15e), _0x31f362 = 0x0; _0x31f362 < _0x56b15e; _0x31f362++) {
          _0x3b667e[_0x31f362] = arguments[_0x31f362];
        }
        (_0x30bbd2 = _0x530ec1["call"]["apply"](_0x530ec1, [this]["concat"](_0x3b667e)))["progressTimeout"] = void 0x0;
        _0x30bbd2['checkProgress'] = function (_0x58e0fd) {
          var _0x5ba8a3 = _0x30bbd2["props"];
          var _0x106db4 = _0x5ba8a3["settings"]["LEARNING_TREE_TIMEOUT_MILLIS"];
          var _0x1837ca = _0x5ba8a3["lessonLoadingProgress"];
          _0x1837ca !== _0x58e0fd && (_0x30bbd2['progressTimeout'] && clearTimeout(_0x30bbd2["progressTimeout"]), _0x30bbd2["progressTimeout"] = null);
          !_0x30bbd2['progressTimeout'] && _0x1837ca < 0x64 && (_0x30bbd2["progressTimeout"] = setTimeout(_0x30bbd2["loadError"], _0x106db4));
          _0x58e0fd >= 0x64 && (_0x30bbd2["progressTimeout"] && clearTimeout(_0x30bbd2["progressTimeout"]), _0x30bbd2['progressTimeout'] = null);
        };
        _0x30bbd2["loadError"] = function () {
          var _0x21a94e = _0x30bbd2["props"]['navigateToPage'];
          Object(_0xb5c075['g'])("HTML5 lesson iframe load error, loaded "["concat"](_0x30bbd2["props"]['lessonLoadingProgress'], '%'), _0xb5c075['m']);
          _0x21a94e(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_ERROR"])["replace"]('/:errorReason?', _0x3b4df5['a']["ERROR_GENERIC"]));
        };
        _0x30bbd2["loadComplete"] = function () {
          _0x30bbd2["checkProgress"](-0x1);
          var _0x1c93e = document["querySelector"]("iframe");
          if (_0x1c93e) {
            var _0x515483 = _0x1c93e["contentWindow"];
            if (_0x515483) {
              var _0x21d6e3 = [];
              var _0x19470f = _0x515483["fetch"];
              _0x515483["fetch"] = function (_0x11cabb) {
                var _0x427b3f = arguments["length"] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : {};
                if (_0x11cabb && _0x11cabb["toString"]()["endsWith"]("/instruction-data-capture/student/dispatch") && 'include' !== _0x427b3f['credentials']) {
                  var _0x47e215 = performance['now']();
                  var _0x121177 = _0x21d6e3['length'] ? {
                    'X-Prior-Request-Timing': ''["concat"](_0x21d6e3["shift"](), " ms")
                  } : {};
                  _0x427b3f["credentials"] = 'include';
                  _0x427b3f["headers"] = Object(_0x29d2c8['a'])(Object(_0x29d2c8['a'])({}, _0x427b3f["headers"] || {}), _0x121177);
                  return _0x19470f(_0x11cabb, _0x427b3f)["finally"](function () {
                    return _0x21d6e3["push"](Math['ceil'](performance['now']() - _0x47e215));
                  });
                }
                return _0x19470f(_0x11cabb, _0x427b3f);
              };
            }
          }
        };
        return _0x30bbd2;
      }
      Object(_0x238315['a'])(_0x483781, [{
        'key': 'UNSAFE_componentWillReceiveProps',
        'value': function (_0xd9b826) {
          _0xd9b826["lessonLoadingProgress"] !== this["props"]["lessonLoadingProgress"] && this['checkProgress'](_0xd9b826["lessonLoadingProgress"]);
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          this["progressTimeout"] && clearTimeout(this["progressTimeout"]);
        }
      }, {
        'key': "getLessonUrl",
        'value': function (_0x36f122) {
          var _0x3a59b8 = this["props"];
          var _0x22fd92 = _0x3a59b8["settings"];
          var _0x1426ac = _0x22fd92["LEARNING_TREE_INSTRUCTION_URL"];
          var _0x3d53e8 = _0x22fd92['PHOENIX_LESSONS_VERSION'];
          var _0x47e96a = _0x22fd92['INSTRUCTION_MATH_VERSION'];
          var _0x3825ff = _0x22fd92["INSTRUCTION_READING_VERSION"];
          var _0x317993 = _0x22fd92["INSTRUCTION_READING_COMPREHENSION_VERSION"];
          var _0x59c10e = _0x22fd92["INSTRUCTION_VOCAB_VERSION"];
          var _0x354ec3 = _0x3a59b8['simulatingSnargg2'];
          var _0xddae69 = '';
          var _0x3b7e4e = _0x36f122['componentActivities'];
          if (_0x3b7e4e && _0x3b7e4e["length"] > 0x0) {
            var _0xd9cc81 = _0x2a12fe['c']['getCurrentLessonComponentActivity'](_0x36f122);
            if (_0x36f122 && _0xd9cc81) {
              var _0x450471;
              var _0x909d3e = _0x21fb14()(_0xd9cc81, 'id');
              var _0x1b0ed2 = _0x21fb14()(_0xd9cc81, "lessonComponent");
              var _0x1972f9 = _0x21fb14()(_0x1b0ed2, "componentType");
              var _0x5ebfb5 = _0x21fb14()(_0x1b0ed2, 'contentDir');
              var _0x2548d5 = _0x21fb14()(_0x1b0ed2, "contentFileName");
              switch (_0x21fb14()(_0x5ebfb5['split']('/'), "[2]", "reading")) {
                case "reading":
                default:
                  _0x450471 = _0x3825ff;
                  break;
                case "reading-comp":
                  _0x450471 = _0x317993;
                  break;
                case "math":
                  _0x450471 = _0x47e96a;
                  break;
                case "vocab":
                  _0x450471 = _0x59c10e;
                  break;
                case 'phoenix':
                  _0x450471 = _0x3d53e8;
              }
              _0xddae69 = _0x354ec3 ? ''['concat'](_0x1426ac)["concat"](_0x1693a1['a']["SNAPPY_URL"], '?csid=')["concat"](_0x909d3e) : ''["concat"](_0x1426ac)["concat"](_0x5ebfb5)["concat"](_0x450471, "/?csid=")["concat"](_0x909d3e, "&type=")["concat"](_0x1972f9["toUpperCase"]())["concat"](_0x2548d5);
            }
          }
          return _0xddae69;
        }
      }, {
        'key': 'render',
        'value': function () {
          var _0x2c18c6 = this["props"];
          var _0x1c3ec6 = _0x2c18c6['lessonActivity'];
          var _0x4c15f4 = _0x2c18c6['settings'];
          var _0x58525f = _0x4c15f4["LEARNING_TREE_TIMEOUT_MILLIS"];
          var _0x2c79d5 = _0x4c15f4["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var _0x4d70e1 = _0x2c18c6["isLessonStarted"];
          var _0x27f9f9 = _0x2c18c6['isPractice'];
          var _0x3520c4 = _0x2c18c6["selectedSubject"];
          var _0x5d142e = this["getLessonUrl"](_0x1c3ec6);
          var _0x7082dc = _0x4d70e1 ? _0xaac1af : _0x1a8eca;
          var _0x445424 = _0x27f9f9 ? Object(_0x35b415['e'])("activity:BASAL_PRACTICE") : Object(_0x35b415['e'])('activity:LESSON');
          var _0x11cdd5 = ("ela" === _0x3520c4 ? Object(_0x35b415['e'])("dashboard:READING_SUBJECT_NAME") : Object(_0x35b415['e'])("dashboard:MATH_SUBJECT_NAME")) + '\x20' + _0x445424 + ',' + Object(_0x35b415['e'])("dashboard:I_READY_TITLE");
          return _0x5d142e && Object(_0x312ad8['c'])("div", {
            'css': _0x7082dc
          }, Object(_0x312ad8['c'])(_0x482847['a'], {
            'onError': this["loadError"]
          }), Object(_0x312ad8['c'])(_0x20d3ce['a'], {
            'title': _0x11cdd5,
            'src': _0x5d142e,
            'id': _0x49cb46,
            'timeout': _0x58525f,
            'retry': _0x2c79d5,
            'loadCheckAttribute': ["_trackJs", 'Howler', "preloader"],
            'loadErrorCallback': this['loadError'],
            'loadCompleteCallback': this["loadComplete"]
          }));
        }
      }]);
      return _0x483781;
    }(_0x54ddf5['a']["Component"]);
    __TEST__;
    var _0x42a4d6 = _0x6edae9;
    var _0x5225ce = _0x42c2d9(0xb5);
    var _0x3bfee6 = _0x42c2d9['n'](_0x5225ce);
    var _0x19ff35 = _0x42c2d9(0x12f);
    var _0x353768 = _0x42c2d9(0x39a);
    var _0x5edf62 = _0x42c2d9(0x4a9);
    var _0x2cf7df = _0x42c2d9(0x390);
    var _0x5e6ccc = _0x42c2d9(0x676);
    var _0x50de2b = _0x42c2d9(0x392);
    var _0x5d5b7f = _0x42c2d9(0x3d0);
    var _0x1d79dd = _0x42c2d9(0x3ca);
    var _0x813948 = _0x42c2d9(0x4e9);
    var _0x469ad5 = _0x42c2d9(0x12c);
    var _0x49ea90 = _0x42c2d9(0xb1);
    var _0x283116 = _0x42c2d9['n'](_0x49ea90);
    var _0x51d542 = _0x42c2d9(0x646);
    var _0x755bd = _0x42c2d9['n'](_0x51d542);
    function _0x35192b() {
      var _0x18e595 = arguments["length"] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';
      return _0x18e595["replace"](/<\/?[^>]+(>|$)/g, '');
    }
    function _0x38e7ed(_0x28019f) {
      var _0xe8c1e8 = _0x28019f['children'];
      var _0x4e90ea = _0x28019f["className"];
      var _0x594c2b = _0x28019f["opts"];
      var _0x176555 = function (_0x2f73a7) {
        var _0x680d2d = function (_0x269d5a) {
          for (var _0x38741b = [], _0x649da5 = 0x0; _0x649da5 < _0x269d5a["length"]; _0x649da5++) {
            var _0x4a826d = _0x269d5a[_0x649da5];
            '<' === _0x4a826d && _0x38741b['push'](_0x649da5);
            '>' === _0x4a826d && _0x38741b["length"] > 0x0 && _0x38741b['pop']();
          }
          return _0x38741b;
        }(_0x2f73a7);
        var _0x6bb053 = _0x2f73a7['split']('');
        _0x680d2d["forEach"](function (_0x554881) {
          return _0x6bb053[_0x554881] = '&lt;';
        });
        return _0x6bb053['join']('');
      }(_0xe8c1e8);
      return _0x54ddf5['a']['createElement']("span", {
        'className': _0x283116()(_0x4e90ea)
      }, _0x755bd()(_0x176555, _0x594c2b));
    }
    var _0x227031 = _0x42c2d9(0x7);
    var _0x507b23 = _0x42c2d9(0x3e7);
    var _0x41ea4d = _0x42c2d9(0x4f1);
    var _0x25f5b8 = _0x42c2d9(0x4eb);
    var _0x39d6c7 = _0x42c2d9(0x62);
    var _0x16625d = _0x42c2d9(0x60);
    var _0x3493b8 = _0x42c2d9(0x427);
    var _0x19152e = _0x42c2d9(0x428);
    var _0x168556 = _0x42c2d9(0x4a0);
    var _0x3cda6c = _0x42c2d9(0x3f);
    var _0x5a51e3 = _0x42c2d9(0x39e);
    var _0x2869e2 = _0x469ad5['a']['CreditImagesIcon'];
    var _0x39fb3b = _0x469ad5['a']["CreditPassagesIcon"];
    var _0x551377 = _0x469ad5['a']['InterstitialClose'];
    var _0x267553 = _0x469ad5['a']["InterstitialObjectiveCheckmark"];
    var _0x3bec2b = _0x1693a1['a']["FONT_SECONDARY"];
    var _0x6fe095 = _0x1693a1['a']["LESSON_LOADING_THRESHOLD"];
    var _0x323ba3 = {
      'name': "dezg2i-HIDDENDIV",
      'styles': ":focus{outline:none;};label:HIDDENDIV;"
    };
    var _0x2b1761 = Object(_0x312ad8['b'])(_0x16625d['f'], ";color:white;&:focus,&:hover{transform:scale(1.04);}&:active{transform:scale(0.95);};label:BUTTONSTYLE;");
    var _0x193649 = function (_0x2b21c6) {
      Object(_0x317a11['a'])(_0x3f0d02, _0x2b21c6);
      var _0x19e83f = function (_0x3b47d8) {
        function _0x41fc02() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]["toString"]['call'](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x44bcce) {
            return !0x1;
          }
        }
        return function () {
          var _0x3d1162;
          var _0x4991d2 = Object(_0x522d3a['a'])(_0x3b47d8);
          if (_0x41fc02()) {
            var _0x36a205 = Object(_0x522d3a['a'])(this)["constructor"];
            _0x3d1162 = Reflect["construct"](_0x4991d2, arguments, _0x36a205);
          } else {
            _0x3d1162 = _0x4991d2["apply"](this, arguments);
          }
          return Object(_0x28bec5['a'])(this, _0x3d1162);
        };
      }(_0x3f0d02);
      function _0x3f0d02() {
        var _0xf00317;
        Object(_0x561375['a'])(this, _0x3f0d02);
        for (var _0x4d09a1 = arguments["length"], _0x2d3bb6 = new Array(_0x4d09a1), _0x7c62cb = 0x0; _0x7c62cb < _0x4d09a1; _0x7c62cb++) {
          _0x2d3bb6[_0x7c62cb] = arguments[_0x7c62cb];
        }
        (_0xf00317 = _0x19e83f["call"]["apply"](_0x19e83f, [this]["concat"](_0x2d3bb6)))["state"] = {
          'showObjectives': !0x1,
          'showCreditsModal': !0x1,
          'hideObjectives': !0x1
        };
        _0xf00317["getActivityStatus"] = function () {
          var _0x5df6fc = _0xf00317['props'];
          var _0x533d18 = _0x5df6fc["lessonActivity"];
          var _0x269d0c = _0x5df6fc["isPractice"];
          return "NOT_STARTED" === _0x533d18["status"] ? _0x269d0c ? Object(_0x35b415['e'])("activity:BASAL_PRACTICE") : Object(_0x35b415['e'])("activity:NEXT_LESSON") : _0x269d0c ? Object(_0x35b415['e'])("activity:RESUME_PRACTICE") : Object(_0x35b415['e'])('activity:RESUME_LESSON');
        };
        _0xf00317["parseObjectiveText"] = function (_0x269b22) {
          var _0x9d2287 = String["fromCharCode"](0x2022);
          var _0x5a169d = _0x269b22["split"](_0x9d2287)["length"] - 0x1;
          var _0x23ffb7 = _0x269b22["match"](/<li>(.*?)<\/li>/gi) || [];
          return _0x5a169d > 0x0 ? Object(_0x312ad8['c'])('ul', {
            'className': "objectives-list"
          }, _0x3bfee6()(_0x269b22["split"](_0x9d2287), function (_0xe3f352, _0x645c85) {
            if (_0xe3f352) {
              return Object(_0x312ad8['c'])('li', {
                'className': "objective",
                'key': "objective_"["concat"](_0x645c85)
              }, Object(_0x312ad8['c'])("img", {
                'alt': "objective bullet icon",
                'src': "common/svg/icons/splash_objective_bullet_icon.svg",
                'className': "objective-bullet-img"
              }), Object(_0x312ad8['c'])("div", {
                'className': "objective-text"
              }, '$', _0xe3f352));
            }
          })) : _0x23ffb7["length"] > 0x0 ? Object(_0x312ad8['c'])(_0x2cf7df['a'], {
            'type': "grid",
            'gridTemplateColumns': "26px 1fr",
            'gridGap': "12px 20px",
            'my': "40px"
          }, _0x3bfee6()(_0x23ffb7, function (_0x2c6692) {
            return Object(_0x312ad8['c'])(_0xf5d161['Fragment'], null, Object(_0x312ad8['c'])(_0x353768['a'], null, Object(_0x312ad8['c'])(_0x267553, null)), Object(_0x312ad8['c'])(_0x353768['a'], null, Object(_0x312ad8['c'])(_0x38e7ed, null, _0x2c6692["match"](/<li>(.*?)<\/li>/)[0x1])));
          })) : Object(_0x312ad8['c'])("div", {
            'className': 'objective-text-no-bullet'
          }, "rawText");
        };
        _0xf00317["closeLesson"] = function () {
          _0xf00317["props"]["navigateToPage"](Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_DASHBOARD_HOME"]));
        };
        _0xf00317['toggleObjectives'] = function () {
          _0xf00317["setState"](function (_0x14db8a) {
            var _0x5e9ea3 = _0x14db8a["showObjectives"];
            _0x14db8a["hideObjectives"];
            return {
              'showObjectives': !_0x5e9ea3,
              'hideObjectives': _0x5e9ea3
            };
          }, _0xf00317['setObjectivesViewCount']);
        };
        _0xf00317["setObjectivesViewCount"] = function () {
          _0xf00317["state"]["showObjectives"] && _0xf00317["OBJECTIVES_VIEW_COUNT"]++;
        };
        _0xf00317["toggleCreditsModal"] = function () {
          _0xf00317['setState'](function (_0x28f980) {
            return {
              'showCreditsModal': !_0x28f980['showCreditsModal']
            };
          }, _0xf00317["setCreditsViewCount"]);
        };
        _0xf00317['getCreditText'] = function () {
          var _0x3e30de = _0xf00317["props"]["lessonCreditsData"];
          var _0x3a0d9a = '';
          _0x3e30de && Object["keys"](_0x3e30de)["forEach"](function (_0x1a0963) {
            var _0x19d1dd = _0x3e30de[_0x1a0963];
            _0x19d1dd && '' !== _0x19d1dd && (_0x3a0d9a += _0x1a0963 + ':\x20' + _0x35192b(_0x19d1dd));
          });
          return '' === _0x3a0d9a ? '' : Object(_0x312ad8['c'])(_0xf5d161["Fragment"], null, Object(_0x312ad8['c'])(_0x3cda6c['b'], {
            'message': _0x3a0d9a,
            'aria-live': "assertive",
            'clearOnUnmount': !0x0
          }), Object(_0x312ad8['c'])(_0x16625d['b'], {
            'dangerouslySetInnerHTML': {
              '__html': _0x3a0d9a
            }
          }));
        };
        _0xf00317["setCreditsViewCount"] = function () {
          _0xf00317["state"]["showCreditsModal"] && _0xf00317["CREDITS_VIEW_COUNT"]++;
        };
        _0xf00317["getGACategory"] = function () {
          var _0x5c3e0e = _0xf00317['props'];
          var _0x30cfa1 = _0x5c3e0e['isPractice'];
          var _0x526db2 = _0x5c3e0e["lessonActivity"];
          var _0x4641af = _0x21fb14()(_0x526db2, "lesson.name");
          var _0x36a7b7 = _0x30cfa1 ? "PRACTICE" : "HTML5_LESSON";
          return ''["concat"](_0x5a51e3['c'][_0x36a7b7], '\x20-\x20')['concat'](_0x4641af);
        };
        _0xf00317['getCreditsModalContent'] = function () {
          var _0xcd5593 = _0xf00317["props"]["lessonCreditsData"];
          var _0x4a0ed7 = _0xcd5593 ? Object["keys"](_0xcd5593)["map"](function (_0x1b4023, _0x440c94) {
            var _0x10609b = _0xcd5593[_0x1b4023];
            var _0x3c2703 = "images" === _0x1b4023 ? Object(_0x312ad8['c'])(_0x2869e2, null) : Object(_0x312ad8['c'])(_0x39fb3b, null);
            return _0x10609b && Object(_0x312ad8['c'])("div", {
              'key': "credit_"["concat"](_0x440c94),
              'style': {
                'margin': '15px\x205px\x2015px\x205px'
              }
            }, Object(_0x312ad8['c'])("div", {
              'style': {
                'marginLeft': "auto",
                'marginRight': "auto",
                'width': "50px"
              }
            }, _0x3c2703), Object(_0x312ad8['c'])("div", {
              'className': "credits-text",
              'aria-hidden': !0x0,
              'dangerouslySetInnerHTML': {
                '__html': _0x10609b
              }
            }));
          }) : null;
          return Object(_0x312ad8['c'])(_0xf5d161['Fragment'], null, Object(_0x312ad8['c'])("div", {
            'aria-hidden': "true"
          }, _0x4a0ed7));
        };
        _0xf00317["lessonLoaded"] = !0x1;
        _0xf00317['renderCard'] = function () {
          var _0x3fc07e = _0xf00317['props'];
          var _0x4d28a3 = _0x3fc07e["cdnPath"];
          var _0x1338bf = _0x3fc07e["isk2"];
          var _0x224636 = _0x3fc07e["lessonActivity"];
          var _0xff6abb = _0x3fc07e["selectedSubject"];
          var _0x2f8108 = _0x3fc07e["selectedActivityType"];
          var _0x4188de = _0x3fc07e["isPractice"];
          return _0xf00317["state"]["showObjectives"] ? _0xf00317["renderObjectivesCard"]() : Object(_0x312ad8['c'])("div", {
            'id': "html5-splash-card"
          }, Object(_0x312ad8['c'])(_0x507b23['a'], {
            'components': {
              'CardFooter': _0xf00317["renderCardFooter"](),
              'CardImage': Object(_0x312ad8['c'])(_0x25f5b8['a'], {
                'cdnPath': _0x4d28a3,
                'isk2': _0x1338bf,
                'lessonActivity': _0x224636,
                'selectedSubject': _0xff6abb
              }),
              'CardTitle': _0xf00317['renderCardTitle']()
            },
            'id': "html5-splash-card",
            'isk2': _0x1338bf,
            'isPassingScore': !0x0,
            'lessonActivity': _0x224636,
            'selectedActivityType': _0x2f8108
          }, _0x1338bf ? !_0x4188de && Object(_0x312ad8['c'])(_0x813948['a'], {
            'amount': 0x14,
            'themePath': "splash.coins"
          }) : Object(_0x312ad8['c'])(_0xf5d161['Fragment'], null, Object(_0x312ad8['c'])(_0x3cda6c['b'], {
            'message': '\x20'["concat"](_0x21fb14()(_0x224636, "lesson.track.name"), '.\x20')["concat"](_0x21fb14()(_0x224636, "lesson.name"), '.\x20')['concat'](Object(_0x35b415['e'])("gk2:MY_COINS"), '\x2020\x20'),
            'aria-live': "assertive",
            'clearOnUnmount': !0x0
          }), Object(_0x312ad8['c'])(_0x2cf7df['a'], {
            'type': "grid",
            'alignItems': "start",
            'gridGap': "25px",
            'gridTemplateColumns': "1fr 0fr"
          }, Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'fontSize': '26px',
            'lineHeight': "35px"
          }, Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'fontWeight': "800"
          }, _0x21fb14()(_0x224636, "lesson.track.name")), Object(_0x312ad8['c'])("div", null, _0x21fb14()(_0x224636, "lesson.name"))), !_0x4188de && Object(_0x312ad8['c'])(_0x813948['a'], {
            'amount': 0x14,
            'themePath': "splash.coins"
          })))));
        };
        _0xf00317["objectivesTitleRef"] = _0x54ddf5['a']["createRef"]();
        _0xf00317["gradek2TitleRef"] = _0x54ddf5['a']["createRef"]();
        _0xf00317["grade38TitleRef"] = _0x54ddf5['a']['createRef']();
        _0xf00317['renderCardFooter'] = function () {
          var _0x61c741 = _0xf00317["props"];
          var _0x5f1122 = _0x61c741['lessonLoadingProgress'];
          var _0xd0e6d2 = _0x61c741["lessonStartedCb"];
          var _0x16ec85 = _0xf00317["state"]["showObjectives"];
          return Object(_0x312ad8['c'])(_0x2cf7df['a'], {
            'alignItems': "end"
          }, Object(_0x312ad8['c'])(_0x353768['a'], null, Object(_0x312ad8['c'])(_0x19ff35['a'], {
            'aria-label': Object(_0x35b415['e'])("lesson:"["concat"](_0x16ec85 ? "HIDE_" : '', "OBJECTIVES")),
            'tabIndex': 0x0,
            'onClick': _0xf00317["toggleObjectives"],
            'id': "lesson-splash-objectives-button",
            'css': _0x2b1761
          }, Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'fontSize': "22px",
            'fontWeight': "800",
            'color': _0x227031['b']
          }, Object(_0x35b415['e'])('lesson:'["concat"](_0x16ec85 ? "HIDE_" : '', "OBJECTIVES"))))), Object(_0x312ad8['c'])(_0x353768['a'], {
            'flex': 0x0
          }, Object(_0x312ad8['c'])(_0x41ea4d['a'], {
            'id': "lesson-splash-continue-button",
            'tabIndex': 0x0,
            'aria-label': Object(_0x35b415['e'])("lesson:OPEN_LESSON"),
            'progress': _0x5f1122,
            'onClick': _0xd0e6d2
          })));
        };
        _0xf00317["renderCardTitle"] = function () {
          var _0x5f35b2 = _0xf00317["props"];
          var _0x4d6602 = _0x5f35b2["isk2"];
          var _0x237006 = _0x5f35b2['lessonActivity'];
          var _0x190c48 = _0x5f35b2["isPractice"];
          var _0x4e6421 = _0x190c48 ? _0x19152e['a'] : _0x3493b8['a'];
          var _0x2967a9 = "MAIN" === _0x21fb14()(_0x237006, "lesson.channel");
          var _0x5708b1 = _0x190c48 ? _0x227031['G'] : _0x2967a9 ? _0x227031['M'] : _0x227031['G'];
          return _0x4d6602 ? Object(_0x312ad8['c'])("div", {
            'css': _0x323ba3,
            'tabIndex': -0x1,
            'ref': _0xf00317["gradek2TitleRef"]
          }, Object(_0x312ad8['c'])(_0x2cf7df['a'], {
            'type': "grid",
            'alignItems': "center",
            'gridGap': "22px",
            'gridTemplateColumns': "80px 1fr"
          }, Object(_0x312ad8['c'])(_0x353768['a'], null, Object(_0x312ad8['c'])(_0x4e6421, {
            'color': _0x5708b1,
            'style': {
              'width': 0x50,
              'height': 0x50
            }
          })), Object(_0x312ad8['c'])(_0x353768['a'], null, _0xf00317["getActivityStatus"](), Object(_0x312ad8['c'])('br', null), Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'fontFamily': 'Roboto',
            'fontSize': "32px",
            'fontWeight': "400",
            'lineHeight': "40px"
          }, _0x21fb14()(_0x237006, "lesson.name"))))) : Object(_0x312ad8['c'])("div", {
            'css': _0x323ba3,
            'tabIndex': -0x1,
            'ref': _0xf00317["grade38TitleRef"]
          }, _0xf00317['getActivityStatus']());
        };
        _0xf00317["renderObjectivesCard"] = function () {
          var _0x5d901b = _0xf00317["props"]["lessonActivity"];
          return Object(_0x312ad8['c'])(_0x507b23['a'], {
            'components': {
              'CardFooter': _0xf00317['renderCardFooter']()
            }
          }, Object(_0x312ad8['c'])("div", {
            'css': _0x323ba3,
            'tabIndex': -0x1,
            'ref': _0xf00317["objectivesTitleRef"],
            'id': 'objectives-lesson-name'
          }, Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'fontFamily': _0x3bec2b,
            'fontSize': '37px',
            'fontWeight': "800",
            'lineHeight': '46px'
          }, _0x21fb14()(_0x5d901b, "lesson.name"))), Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'fontSize': "22px",
            'lineHeight': "34px"
          }, _0xf00317["parseObjectiveText"](_0x21fb14()(_0x5d901b, "lesson.objectiveText"))));
        };
        _0xf00317["startTime"] = Date["now"]();
        _0xf00317["OBJECTIVES_VIEW_COUNT"] = 0x0;
        _0xf00317["CREDITS_VIEW_COUNT"] = 0x0;
        return _0xf00317;
      }
      Object(_0x238315['a'])(_0x3f0d02, [{
        'key': "componentDidMount",
        'value': function () {
          this["startTime"] = Date["now"]();
        }
      }, {
        'key': "componentDidUpdate",
        'value': function (_0x177d9b, _0x3a9606) {
          var _0x1dbdfc = this["props"]["lessonLoadingProgress"];
          this["state"]["hideObjectives"] && this["gradek2TitleRef"]["current"] && this['gradek2TitleRef']["current"]["focus"]();
          this["state"]["hideObjectives"] && this["grade38TitleRef"]["current"] && this["grade38TitleRef"]["current"]["focus"]();
          this['state']['showObjectives'] && this["objectivesTitleRef"]["current"] && this["objectivesTitleRef"]['current']["focus"]();
          if (0x64 === _0x1dbdfc && _0x177d9b['lessonLoadingProgress'] < 0x64 && !this["lessonLoaded"]) {
            var _0xa93724 = Number(((Date['now']() - this["startTime"]) / 0x3e8)["toFixed"](0x2));
            _0x5a51e3['g']["trackEvent"]({
              'category': this["getGACategory"](),
              'action': _0x5a51e3['b']['LESSON_LOADED'],
              'label': ''['concat'](_0xa93724, 's')
            });
            _0xa93724 > _0x6fe095 && Object(_0xb5c075['h'])("Lesson load time "["concat"](_0xa93724, " seconds"));
            this['lessonLoaded'] = !0x0;
          }
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          this['OBJECTIVES_VIEW_COUNT'] > 0x0 && _0x5a51e3['g']["trackEvent"]({
            'category': this["getGACategory"](),
            'action': _0x5a51e3['b']['VIEWED_LESSON_OBJECTIVES'],
            'label': ''['concat'](this["OBJECTIVES_VIEW_COUNT"])
          });
          this["CREDITS_VIEW_COUNT"] > 0x0 && _0x5a51e3['g']["trackEvent"]({
            'category': this["getGACategory"](),
            'action': _0x5a51e3['b']["VIEWED_LESSON_CREDITS"],
            'label': ''["concat"](this['CREDITS_VIEW_COUNT'])
          });
        }
      }, {
        'key': 'render',
        'value': function () {
          var _0x42a634 = this["state"]['showCreditsModal'];
          var _0x14be6c = this['getCreditText']();
          return Object(_0x312ad8['c'])(_0x1d79dd['a'], {
            'id': 'html5-lesson-splash',
            'fillScreen': !0x1,
            'overflow': !0x0
          }, Object(_0x312ad8['c'])(_0x5d5b7f['a'], {
            'height': '750px',
            'transformOrigin': "top center"
          }, Object(_0x312ad8['c'])(_0x39d6c7['a'], {
            'direction': 'horizontal'
          }, Object(_0x312ad8['c'])(_0x168556['b'], {
            'height': 'auto',
            'minWidth': "750px"
          }, Object(_0x312ad8['c'])(_0x168556['a'], {
            'width': "10%",
            'style': {
              'paddingTop': "55px",
              'display': '' !== _0x14be6c ? "block" : 'none'
            }
          }, Object(_0x312ad8['c'])(_0x19ff35['a'], {
            'tabIndex': 0x0,
            'aria-label': Object(_0x35b415['e'])('lesson:CREDITS'),
            'id': "lesson-splash-credit-button",
            'onClick': this["toggleCreditsModal"],
            'css': _0x2b1761,
            'blurOnClick': !0x0
          }, Object(_0x312ad8['c'])(_0x50de2b['a'], {
            'color': 'white',
            'fontSize': "26px",
            'fontWeight': "800"
          }, Object(_0x35b415['e'])("lesson:CREDITS"))), _0x42a634 && _0x14be6c, Object(_0x312ad8['c'])(_0x5edf62['a'], {
            'placement': "bottom",
            'isOpen': _0x42a634,
            'target': "lesson-splash-credit-button",
            'toggle': this["toggleCreditsModal"]
          }, Object(_0x312ad8['c'])(_0x5e6ccc['a'], null, this["getCreditsModalContent"]()))), Object(_0x312ad8['c'])(_0x168556['a'], {
            'width': "10%",
            'style': {
              'paddingTop': '55px',
              'paddingLeft': "30px",
              'textAlign': 'right'
            }
          }, Object(_0x312ad8['c'])(_0x19ff35['a'], {
            'aria-label': Object(_0x35b415['e'])("lesson:CLOSE"),
            'tabIndex': 0x0,
            'onClick': this["closeLesson"],
            'id': 'lesson-splash-close-button',
            'css': _0x2b1761
          }, Object(_0x312ad8['c'])(_0x551377, null))), Object(_0x312ad8['c'])(_0x168556['a'], {
            'style': {
              'paddingTop': "66px",
              'width': "610px",
              'alignSelf': "center"
            }
          }, this['renderCard']())))));
        }
      }]);
      return _0x3f0d02;
    }(_0x54ddf5['a']["Component"]);
    var _0x13f9bc = _0x193649;
    var _0x69d01d = _0x42c2d9(0x3ed);
    var _0x25bc22 = _0x42c2d9(0x569);
    var _0x49e1a8 = _0x42c2d9(0x131);
    var _0x3a042 = Object(_0x35f0a9['a'])("div", {
      'target': "efd5bcn0",
      'label': "BackgroundHolder"
    })(function (_0x1e97b4) {
      return {
        'backgroundColor': _0x1e97b4["theme"]["global"]["backgroundColor"],
        'backgroundSize': "cover",
        'backgroundImage': _0x1e97b4["theme"]["global"]["backgroundImage"]
      };
    }, ';');
    var _0x3b5803 = function (_0x291ac9) {
      Object(_0x317a11['a'])(_0x95f743, _0x291ac9);
      var _0x4fdbc1 = function (_0xc68324) {
        function _0x2e349c() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]['toString']["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x593acf) {
            return !0x1;
          }
        }
        return function () {
          var _0x131142;
          var _0x497937 = Object(_0x522d3a['a'])(_0xc68324);
          if (_0x2e349c()) {
            var _0x161d27 = Object(_0x522d3a['a'])(this)["constructor"];
            _0x131142 = Reflect["construct"](_0x497937, arguments, _0x161d27);
          } else {
            _0x131142 = _0x497937["apply"](this, arguments);
          }
          return Object(_0x28bec5['a'])(this, _0x131142);
        };
      }(_0x95f743);
      function _0x95f743() {
        var _0x5a994d;
        Object(_0x561375['a'])(this, _0x95f743);
        for (var _0x32fc79 = arguments["length"], _0x1524f9 = new Array(_0x32fc79), _0x9ae407 = 0x0; _0x9ae407 < _0x32fc79; _0x9ae407++) {
          _0x1524f9[_0x9ae407] = arguments[_0x9ae407];
        }
        (_0x5a994d = _0x4fdbc1['call']["apply"](_0x4fdbc1, [this]['concat'](_0x1524f9)))['state'] = {
          'isLessonStarted': !0x1
        };
        _0x5a994d["TIME_AT_COMPONENT_MOUNTED"] = 0x0;
        _0x5a994d['onSplashComplete'] = function () {
          _0x5a994d["setState"](function (_0x14d554) {
            return {
              'isLessonStarted': !0x0
            };
          });
        };
        _0x5a994d["onProgress"] = function (_0x22064f) {
          _0x5a994d["props"]["dispatchUpdateLessonLoadingProgress"](_0x22064f);
          _0x5a994d["props"]['isLessonResumedFromPause'] && _0x22064f >= 0x64 && _0x5a994d['onSplashComplete']();
        };
        _0x5a994d['startLesson'] = function () {
          var _0x4f5aba = document["getElementById"](_0x49cb46);
          if (_0x4f5aba) {
            _0x21fb14()(_0x4f5aba, 'contentWindow.splashScreenCompleted', _0x3e2e75['a'])();
            _0x5a994d["setState"](function (_0x598d3b) {
              return {
                'isLessonStarted': !0x0
              };
            });
            var _0x48eea4 = _0x5a994d['props']["lessonActivity"];
            var _0x40b457 = _0x21fb14()(_0x48eea4, "lesson.name");
            var _0x4430 = _0x21fb14()(_0x48eea4, "lesson.channel");
            var _0x8ee125 = _0x21fb14()(_0x48eea4, "status");
            var _0x57fb2a = "BASAL_PRACTICE" === _0x4430;
            _0x40b457 && _0x5a51e3['g']["trackEvent"]({
              'category': _0x57fb2a ? ''["concat"](_0x5a51e3['c']["PRACTICE"], '\x20-\x20')["concat"](_0x40b457) : ''['concat'](_0x5a51e3['c']["HTML5_LESSON"], " - ")['concat'](_0x40b457),
              'action': "NOT_STARTED" === _0x8ee125 ? _0x5a51e3['b']["ACTIVITY_STARTED"] : _0x5a51e3['b']['ACTIVITY_RESUMED']
            });
          }
        };
        return _0x5a994d;
      }
      Object(_0x238315['a'])(_0x95f743, [{
        'key': "UNSAFE_componentWillMount",
        'value': function () {
          this["TIME_AT_COMPONENT_MOUNTED"] = new Date()["getTime"]();
          (0x0, this["props"]['dispatchUpdateLessonLoadingProgress'])(-0x1);
        }
      }, {
        'key': 'UNSAFE_componentWillReceiveProps',
        'value': function (_0x21bd80) {
          var _0x49d931 = this["props"];
          var _0x404ad1 = _0x49d931["lessonActivity"];
          _0x49d931["loading"] && !_0x21bd80['loading'] && this["addBridgeMethods"](_0x21bd80);
          _0x52af0a()(window, "lessonBridge.info") && (window["lessonBridge"]["info"]["previouslyFailedLesson"] = _0x52af0a()(_0x21bd80, 'lessonActivity.previouslyFailedActivityId') && null !== _0x21bd80["lessonActivity"]['previouslyFailedActivityId'] && _0x21bd80['lessonActivity']["previouslyFailedActivityId"] === _0x21fb14()(_0x404ad1, 'previouslyFailedActivityId'), _0x21bd80["lessonActivity"] && window["lessonBridge"]["info"]["activityId"] !== _0x21bd80['lessonActivity']['id'] && (window["lessonBridge"]["info"]['activityId'] = _0x21bd80["lessonActivity"]['id']));
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          this["removeBridgeMethods"]();
        }
      }, {
        'key': 'currentExecutionTime',
        'value': function () {
          return new Date()['getTime']() - this["TIME_AT_COMPONENT_MOUNTED"];
        }
      }, {
        'key': 'addBridgeMethods',
        'value': function (_0x31884f) {
          var _0x2c9e81 = this;
          var _0x497754 = _0x31884f["student"]['id'];
          var _0x46544c = _0x31884f["dispatchUpdateLessonLoadingProgress"];
          var _0x10300e = _0x31884f["dispatchSetLessonCreditsData"];
          var _0xbd681d = _0x31884f["lessonActivity"];
          var _0x2c6b43 = _0x31884f["isLessonResumedFromPause"];
          var _0x43add9 = _0x31884f["settings"];
          var _0x4aa30c = _0x43add9["DC_API_ENDPOINT"];
          var _0x7ef4b6 = _0x43add9["DC_DELAY_RETRIES"];
          var _0x23003e = _0x43add9["DC_MAX_RETRIES"];
          var _0x115b9a = _0x43add9['DC_SERVICE_ENABLED'];
          window["childPreloadProgress"] = function (_0x2f7ce3) {
            _0x46544c(_0x2f7ce3);
            _0x2c6b43 && _0x2f7ce3 >= 0x64 && _0x2c9e81["startLesson"]();
          };
          window["setCreditsData"] = function (_0x49d87e) {
            _0x10300e(_0x49d87e);
          };
          var _0x357d35 = _0x2a12fe['c']["getCurrentLessonComponentActivity"](_0xbd681d);
          window["lessonBridge"] = {
            'setScore': function (_0xce6ca7) {
              var _0x1d951b = !isNaN(_0xce6ca7) && _0x53cc22()(_0xce6ca7) ? {
                'score': _0xce6ca7
              } : null;
              _0x357d35 && _0x2c9e81["completeLessonComponent"](_0x357d35['id'], _0x1d951b);
            },
            'start': function () {
              window.p1 = _0x2c9e81;
            },
            'pause': function () {},
            'resume': function () {},
            'close': function () {
              var _0x4abf6d = _0x2c9e81["props"];
              var _0x1bcc95 = _0x4abf6d['navigateToPage'];
              var _0x1fa5c9 = _0x4abf6d["lessonActivity"];
              var _0x328902 = _0x21fb14()(_0x1fa5c9, "lesson.name");
              var _0xd73ea5 = 'BASAL_PRACTICE' === _0x21fb14()(_0x1fa5c9, "lesson.channel");
              _0x328902 && _0x5a51e3['g']["trackEvent"]({
                'category': _0xd73ea5 ? ''["concat"](_0x5a51e3['c']["PRACTICE"], " - ")["concat"](_0x328902) : ''["concat"](_0x5a51e3['c']["HTML5_LESSON"], " - ")["concat"](_0x328902),
                'action': _0x5a51e3['b']["ACTIVITY_PAUSED"]
              });
              _0x1bcc95(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_DASHBOARD_HOME"]));
            },
            'fatal': function () {},
            'info': {
              'dataCapture': {
                'serviceEnabled': _0x115b9a,
                'endpoint': _0x4aa30c,
                'retries': {
                  'max': _0x23003e,
                  'delay': _0x7ef4b6
                }
              },
              'studentId': _0x497754,
              'previouslyFailedLesson': null,
              'activityId': null
            }
          };
        }
      }, {
        'key': "removeBridgeMethods",
        'value': function () {
          window["childPreloadProgress"] = window['lessonBridge'] = window["setCreditsData"] = window["autoPlayCallback"] = void 0x0;
        }
      }, {
        'key': "returnToDashboardHome",
        'value': function () {
          (0x0, this['props']["navigateToPage"])(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_DASHBOARD_HOME"]));
        }
      }, {
        'key': 'getScrubbedScore',
        'value': function (_0x7b8a42) {
          var _0x26a63f = null;
          var _0x5973d9 = "string" === typeof _0x7b8a42 ? _0x7b8a42["replace"]('%', '')["trim"]() : _0x7b8a42;
          '' !== _0x5973d9 && null !== _0x5973d9 && (_0x5973d9 = Number(_0x5973d9), _0x26a63f = !isNaN(_0x5973d9) && _0x5973d9 >= 0x0 && _0x5973d9 <= 0x64 ? Math['round'](_0x5973d9) : null);
          return _0x26a63f;
        }
      }, {
        'key': 'completeLessonComponent',
        'value': function (_0xa9b8fc, _0x4bea3c) {
          var _0x3c2b60 = this['props'];
          var _0x21caf4 = _0x3c2b60["dispatchCompleteLessonComponent"];
          var _0x44e75d = _0x3c2b60["dispatchReportInvalidScore"];
          var _0x1540a7 = this["getScrubbedScore"](_0x21fb14()(_0x4bea3c, "score", null));
          _0x4bea3c && null === _0x1540a7 ? _0x44e75d({
            'score': _0x4bea3c["score"],
            'componentStatusId': _0xa9b8fc
          }) : _0x21caf4({
            'componentStatusId': _0xa9b8fc,
            'instructionLessonOutcome': _0x4bea3c ? {
              'score': _0x1540a7
            } : null
          });
        }
      }, {
        'key': 'render',
        'value': function () {
          var _0x57c325 = this["props"];
          var _0x304fc2 = _0x57c325["cdnPath"];
          var _0x4f7453 = _0x57c325['settings'];
          var _0xb3aa1d = _0x57c325["gradeBand"];
          var _0x520556 = _0x57c325["lessonActivity"];
          var _0x1bbd5a = _0x57c325['loading'];
          var _0x47b747 = _0x57c325["navigateToPage"];
          var _0x470eee = _0x57c325['lessonLoadingProgress'];
          var _0x4b8b5c = _0x57c325["lessonCreditsData"];
          var _0x2c2d3c = _0x57c325['isLessonResumedFromPause'];
          var _0x1d7adc = _0x57c325['selectedSubject'];
          var _0x1f572c = _0x57c325['student'];
          var _0x16cc3c = _0x57c325["selectedActivityType"];
          var _0x3371b2 = _0x57c325["isPractice"];
          var _0xb74360 = _0x57c325['simulatingSnargg2'];
          var _0x3855b4 = this["state"]["isLessonStarted"];
          var _0x45c9c6 = _0x21fb14()(_0x520556, 'lesson');
          var _0x538b4e = !_0x45c9c6 || _0x3855b4 || _0x2c2d3c ? null : Object(_0x312ad8['c'])(_0x13f9bc, {
            'cdnPath': _0x304fc2,
            'lessonActivity': _0x520556,
            'isk2': 'gk2' === _0xb3aa1d,
            'navigateToPage': _0x47b747,
            'lessonLoadingProgress': Object(_0x49e1a8['a'])() ? 0x64 : _0x470eee,
            'lessonCreditsData': _0x4b8b5c,
            'lessonStartedCb': this["startLesson"],
            'selectedSubject': _0x1d7adc,
            'student': _0x1f572c,
            'selectedActivityType': _0x16cc3c,
            'isPractice': _0x3371b2
          });
          var _0x573e6b = !_0x45c9c6 || _0x1bbd5a || Object(_0x49e1a8['a'])() ? null : Object(_0x312ad8['c'])(_0x42a4d6, {
            'navigateToPage': _0x47b747,
            'settings': _0x4f7453,
            'lessonActivity': _0x520556,
            'lessonLoadingProgress': _0x470eee,
            'isLessonStarted': _0x3855b4,
            'isPractice': _0x3371b2,
            'selectedSubject': _0x1d7adc,
            'simulatingSnargg2': _0xb74360
          });
          return Object(_0x312ad8['c'])(_0x3a042, {
            'role': "main",
            'id': 'lesson-view'
          }, _0x1bbd5a && Object(_0x312ad8['c'])(_0xa4b2f6['a'], {
            'fullScreen': !0x0
          }), _0x538b4e, _0x573e6b, !_0x1bbd5a && Object(_0x312ad8['c'])(_0x25bc22['a'], {
            'iframeid': _0x49cb46,
            'loaded': _0x3855b4,
            'setCredits': this["props"]['dispatchSetLessonCreditsData'],
            'setProgress': this["onProgress"]
          }));
        }
      }]);
      return _0x95f743;
    }(_0x54ddf5['a']["Component"]);
    function _0x1bf4ba(_0x14629e) {
      return {
        'cdnPath': Object(_0x5b4ede['c'])(_0x14629e),
        'gradeBand': Object(_0x5b4ede['f'])(_0x14629e),
        'student': Object(_0x5b4ede['o'])(_0x14629e),
        'settings': Object(_0x5b4ede['e'])(_0x14629e),
        'lessonActivity': Object(_0x3ca2fc['e'])(_0x14629e),
        'lessonLoadingProgress': Object(_0x3ca2fc['g'])(_0x14629e),
        'lessonCreditsData': Object(_0x3ca2fc['f'])(_0x14629e),
        'isLessonResumedFromPause': Object(_0x3ca2fc['c'])(_0x14629e),
        'selectedSubject': Object(_0x124484['b'])(_0x14629e),
        'selectedActivityType': Object(_0x3b4cd1['d'])(_0x14629e),
        'isPractice': Object(_0x3ca2fc['d'])(_0x14629e),
        'simulatingSnargg2': Object(_0x69d01d['d'])(_0x14629e)
      };
    }
    var _0x8a05da = {
      'navigateToPage': _0x5d1fed['e'],
      'dispatchUpdateLessonLoadingProgress': _0x30f5d2['p'],
      'dispatchSetLessonCreditsData': _0x30f5d2['m'],
      'dispatchReportInvalidScore': _0x30f5d2['i'],
      'dispatchCompleteLessonComponent': _0x30f5d2['c']
    };
    var _0x1b03e3 = Object(_0x2ec172['connect'])(_0x1bf4ba, _0x8a05da)(_0x3b5803);
    __TEST__;
    var _0x15d1b5 = Object(_0x216aeb['a'])([_0x30f5d2['f']]);
    function _0x4c1079(_0x49505c) {
      return Object(_0x312ad8['c'])(_0x15d1b5, {
        'onMount': _0x30f5d2['f']
      }, function (_0x2ec0f6) {
        var _0x378b1d = _0x2ec0f6["loading"];
        return Object(_0x312ad8['c'])(_0x1b03e3, Object["assign"]({}, _0x49505c, {
          'loading': _0x378b1d
        }));
      });
    }
    var _0x3abf11 = _0x42c2d9(0x671);
    var _0x24a0ac = _0x42c2d9(0x47f);
    var _0x18660d = _0x42c2d9(0x423);
    var _0x47430e = _0x42c2d9(0x3cf);
    function _0x24ffc3(_0x2bc76d) {
      return {
        'assessment': Object(_0x69d01d['e'])(_0x2bc76d),
        'selectedSubject': Object(_0x124484['b'])(_0x2bc76d)
      };
    }
    var _0x2ee0ba = {
      'navigateToPage': _0x5d1fed['e'],
      'dispatchStopActivityAction': _0x18660d['g'],
      'dispatchCompleteTestItemAction': _0x47430e['d'],
      'dispatchPauseActivityAction': _0x18660d['d'],
      'dispatchUncloseActivityAction': _0x18660d['h'],
      'dispatchLoadTestingQueueAction': _0x47430e['j'],
      'dispatchUpdateTestingQueueIndexAction': _0x47430e['s']
    };
    var _0x31eae9 = Object(_0x2ec172["connect"])(_0x24ffc3, _0x2ee0ba)(_0x24a0ac['b']);
    !0x0 === __TEST__ && _0x24a0ac['b'];
    var _0x4927cc = Object(_0x216aeb['a'])([_0x47430e['m'], _0x18660d['g'], _0x47430e['d'], _0x18660d['d'], _0x18660d['h']]);
    function _0xe4e323(_0x5549f0) {
      return _0x54ddf5['a']["createElement"](_0x4927cc, {
        'onMount': _0x47430e['m'],
        'ignorePriorErrors': !0x0
      }, function (_0x274087) {
        var _0x591e25 = _0x274087["loading"];
        var _0x1aff9f = _0x274087["error"];
        var _0x4c3186 = _0x274087['dismiss'];
        return _0x54ddf5['a']["createElement"](_0x31eae9, Object["assign"]({
          'error': _0x1aff9f
        }, _0x5549f0, {
          'dismissError': _0x4c3186,
          'loading': _0x591e25
        }));
      });
    }
    var _0x20ca96 = _0x42c2d9(0x425);
    var _0xb16212 = _0x42c2d9['n'](_0x20ca96);
    var _0x4b9665 = _0x42c2d9(0x426);
    var _0x530642 = _0x42c2d9(0xe7);
    var _0x1e1c74 = _0x42c2d9(0x3ab);
    var _0x5d93f3 = _0x42c2d9(0x3eb);
    var _0x5a3386 = _0x1693a1['a']['ACTIVITY_TYPE'];
    var _0x8a1e7e = {
      'name': '1hy97x4-WRAPPER',
      'styles': "position:'fixed',width:'100%',height:'100%',border:'none',display:'block';label:WRAPPER;"
    };
    var _0x165b93 = function (_0x1e1b4f) {
      Object(_0x317a11['a'])(_0x34a8b8, _0x1e1b4f);
      var _0x257772 = function (_0x1e87ed) {
        function _0x20029d() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x58315c) {
            return !0x1;
          }
        }
        return function () {
          var _0x311eae;
          var _0x15da07 = Object(_0x522d3a['a'])(_0x1e87ed);
          if (_0x20029d()) {
            var _0x1fd547 = Object(_0x522d3a['a'])(this)["constructor"];
            _0x311eae = Reflect['construct'](_0x15da07, arguments, _0x1fd547);
          } else {
            _0x311eae = _0x15da07["apply"](this, arguments);
          }
          return Object(_0x28bec5['a'])(this, _0x311eae);
        };
      }(_0x34a8b8);
      function _0x34a8b8() {
        var _0x259144;
        Object(_0x561375['a'])(this, _0x34a8b8);
        for (var _0x15c319 = arguments["length"], _0x30803a = new Array(_0x15c319), _0x3d7547 = 0x0; _0x3d7547 < _0x15c319; _0x3d7547++) {
          _0x30803a[_0x3d7547] = arguments[_0x3d7547];
        }
        (_0x259144 = _0x257772["call"]["apply"](_0x257772, [this]["concat"](_0x30803a)))["state"] = {
          'showLoader': !0x0
        };
        _0x259144["_keepAliveID"] = null;
        _0x259144["startKeepAlive"] = function () {
          var _0x30bd1e = _0x259144["props"]["settings"]["SESSION_KEEP_ALIVE_INTERVAL"];
          _0x259144["stopKeepAlive"]();
          _0x259144["_keepAliveID"] = window['setTimeout'](function () {
            _0x259144["keepAliveSession"]();
            _0x259144["startKeepAlive"]();
          }, 0xea60 * _0x30bd1e);
        };
        _0x259144["stopKeepAlive"] = function () {
          window["clearTimeout"](_0x259144["_keepAliveID"]);
        };
        _0x259144["onError"] = function (_0x969a8d) {
          var _0x3a964c = _0x259144['props'];
          var _0xb11695 = _0x3a964c["navigateToPage"];
          var _0x318bb2 = _0x3a964c["ismActivity"];
          var _0x55889f = _0x21fb14()(_0x318bb2, 'id');
          Object(_0xb5c075['g'])("Standards mastery load error, id = ["["concat"](_0x55889f, ']'), _0xb5c075['m']);
          _0xb11695(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_ERROR"])["replace"]("/:errorReason?", _0x21fb14()(_0x3b4df5['a'], _0x969a8d || "ERROR_GENERIC", _0x3b4df5['a']["ERROR_GENERIC"])));
        };
        _0x259144["keepAliveSession"] = function () {
          (0x0, _0x259144["props"]["dispatchKeepAlive"])();
        };
        _0x259144["loadCompleted"] = function () {
          _0x259144["setState"]({
            'showLoader': !0x1
          });
        };
        _0x259144['loadError'] = function () {
          _0x259144["onError"]();
        };
        return _0x259144;
      }
      Object(_0x238315['a'])(_0x34a8b8, [{
        'key': "UNSAFE_componentWillMount",
        'value': function () {
          (0x0, this["props"]["dispatchCheckSession"])();
        }
      }, {
        'key': "componentDidMount",
        'value': function () {
          var _0x16e346 = this["props"];
          var _0x8c581c = _0x16e346['navigateToPage'];
          var _0x38cfc7 = _0x16e346['ismActivity'];
          var _0x323afe = _0x16e346["selectedSubject"];
          var _0x442664 = _0x38cfc7["entityType"] === _0x5a3386["ISM"] ? _0x5a3386['ISM'] : _0x5a3386["BASAL_CHECK"];
          var _0x194ce4 = [_0xb16212()(_0x5a51e3['a']['ACTIVITY_TYPE'], {
            'value': _0x442664
          })];
          var _0x3a7259 = {
            'subject': _0x323afe,
            'type': _0x442664
          };
          var _0xc00498 = "NOT_STARTED" === _0x38cfc7["status"];
          _0x5a51e3['g']["setCustom"](_0x194ce4);
          _0x5a51e3['g']["trackPage"](_0x5a51e3['e']["STANDARDS_MASTERY"]['withData'](_0x3a7259));
          _0x5d93f3['a']["setDocumentTitle"](''["concat"](_0x1e1c74['b'][_0x323afe], '\x20Activity,\x20i-Ready'));
          _0x38cfc7["entityType"] === _0x5a3386["ISM"] || _0x38cfc7["entityType"] === _0x5a3386["BASAL_CHECK"] ? (this["startKeepAlive"](), this["addBridgeMethods"]()) : _0x8c581c(Object(_0x3b4df5['b'])(_0x3b4df5['a']['STUDENT_DASHBOARD_HOME']));
          _0x5a51e3['g']["trackEvent"]({
            'category': _0x38cfc7['entityType'] === _0x5a3386['BASAL_CHECK'] ? ''["concat"](_0x5a51e3['c']["COMP_CHECK"]) : ''['concat'](_0x5a51e3['c']["ISM"]),
            'action': _0xc00498 ? _0x5a51e3['b']['ACTIVITY_STARTED'] : _0x5a51e3['b']["ACTIVITY_RESUMED"]
          });
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          window["lessonBridge"] = void 0x0;
        }
      }, {
        'key': "addBridgeMethods",
        'value': function () {
          var _0x5a712b = this;
          var _0x314ddc = this["props"];
          var _0x362732 = _0x314ddc['navigateToPage'];
          var _0x2bd2c9 = _0x314ddc["ismActivity"];
          window["lessonBridge"] = {
            'close': function () {
              var _0x46245a = _0x2bd2c9["entityType"] === _0x5a3386["ISM"] ? "ism" : "check";
              _0x5a712b["stopKeepAlive"]();
              _0x362732(Object(_0x3b4df5['b'])(_0x3b4df5['a']['STUDENT_DASHBOARD_HOME']));
              _0x5a51e3['g']["trackEvent"]({
                'category': ''["concat"]('check' === _0x46245a ? _0x5a51e3['c']["COMP_CHECK"] : _0x5a51e3['c']["ISM"]),
                'action': _0x5a51e3['b']["ACTIVITY_PAUSED"]
              });
            },
            'complete': function () {
              var _0x2a2370 = _0x2bd2c9["entityType"] === _0x5a3386["ISM"] ? "ism" : "check";
              _0x5a712b["stopKeepAlive"]();
              _0x362732(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_ASSESSMENT_COMPLETED"])["replace"](":assessmentType/:score?", _0x2a2370));
              _0x5a51e3['g']["trackEvent"]({
                'category': ''['concat']("check" === _0x2a2370 ? _0x5a51e3['c']["COMP_CHECK"] : _0x5a51e3['c']["ISM"]),
                'action': _0x5a51e3['b']["ACTIVITY_COMPLETED"]
              });
            },
            'error': function (_0x1c77ad) {
              _0x5a712b["stopKeepAlive"]();
              _0x5a712b["onError"](_0x1c77ad);
            }
          };
        }
      }, {
        'key': "getUrl",
        'value': function () {
          var _0x1c01e6 = this["props"]['ismActivity'];
          var _0x457cdf = _0x1c01e6['id'];
          var _0xef286a = _0x1c01e6["entityType"];
          return ''['concat'](_0xef286a === _0x5a3386["ISM"] ? _0x530642['a']["_STANDARDS_MASTERY_LAUNCH_URL"] : _0x530642['a']['_BASAL_CHECK_LAUNCH_URL'], '/')["concat"](_0x457cdf);
        }
      }, {
        'key': 'render',
        'value': function () {
          var _0x4f195a = this["props"];
          var _0x1182ac = _0x4f195a["ismActivity"];
          var _0x4d868d = _0x4f195a["settings"]["LEARNING_TREE_TIMEOUT_MILLIS"];
          var _0x4eee4b = _0x4f195a["selectedSubject"];
          var _0x24c0bd = this["state"]["showLoader"];
          var _0x585c62 = _0x1182ac['entityType'] === _0x5a3386["ISM"] ? Object(_0x35b415['e'])("activity:STANDARDS_CHECK") : Object(_0x35b415['e'])('activity:BASAL_CHECK');
          var _0x1b2750 = ''["concat"](Object(_0x35b415['e'])('dashboard:'["concat"](_0x1e1c74['b'][_0x4eee4b]["toUpperCase"](), '_SUBJECT_NAME')), '\x20')['concat'](_0x585c62, ',\x20')["concat"](Object(_0x35b415['e'])("dashboard:I_READY_TITLE"));
          return Object(_0x312ad8['c'])("div", null, _0x24c0bd && _0x1182ac && Object(_0x312ad8['c'])(_0xa4b2f6['a'], {
            'fullScreen': !0x1
          }), (_0x1182ac['entityType'] === _0x5a3386["ISM"] || _0x1182ac["entityType"] === _0x5a3386["BASAL_CHECK"]) && Object(_0x312ad8['c'])("div", {
            'css': _0x8a1e7e
          }, Object(_0x312ad8['c'])(_0x20d3ce['a'], {
            'title': _0x1b2750,
            'id': "mastery",
            'src': this["getUrl"](),
            'timeout': _0x4d868d,
            'retry': 0x1,
            'loadCheckAttribute': _0x1182ac["entityType"] === _0x5a3386["ISM"] ? "sbaAssignment" : "assignment",
            'loadErrorCallback': this["loadError"],
            'loadCompleteCallback': this['loadCompleted']
          })));
        }
      }]);
      return _0x34a8b8;
    }(_0xf5d161['Component']);
    function _0x17af70(_0x28bf08) {
      return {
        'settings': Object(_0x5b4ede['e'])(_0x28bf08),
        'ismActivity': Object(_0x3b4cd1['a'])(_0x28bf08),
        'selectedSubject': Object(_0x124484['b'])(_0x28bf08)
      };
    }
    var _0x4bb186 = {
      'dispatchCheckSession': _0x4b9665['a'],
      'dispatchKeepAlive': _0x4b9665['b'],
      'navigateToPage': _0x5d1fed['e']
    };
    var _0xe4a513 = Object(_0x2ec172["connect"])(_0x17af70, _0x4bb186)(_0x165b93);
    __TEST__;
    var _0x1b4858 = _0xe4a513;
    var _0x5bab24 = _0x42c2d9(0x1a);
    var _0x3dff3d = _0x42c2d9(0x2c);
    var _0x5df9a2 = _0x42c2d9(0xa);
    var _0x424cbd = _0x42c2d9['n'](_0x5df9a2);
    var _0x2bec03 = _0x42c2d9(0x47d);
    var _0xc1a0db = _0x42c2d9(0x539);
    var _0x170212 = _0x42c2d9(0x3fd);
    var _0x4a26b1 = _0x42c2d9(0x9);
    function _0x589ec2(_0x14a847, _0x310b41) {
      var _0x23c2e6 = Object(_0xf5d161["useRef"])(_0x310b41);
      Object(_0xf5d161["useEffect"])(function () {
        _0x23c2e6["current"] = _0x14a847;
      });
      return _0x23c2e6['current'];
    }
    function _0xa8004f(_0x10d7b2) {
      var _0x19c37a = _0x10d7b2["asrActivity"];
      var _0x5bbf68 = _0x10d7b2["settings"];
      var _0x2e9b2f = _0x10d7b2["navigateToPage"];
      var _0x338997 = _0x10d7b2["dispatchStartAction"];
      var _0x520d57 = _0x10d7b2["dispatchCompleteAction"];
      var _0x2408ae = _0x10d7b2["iframeid"];
      var _0x192d7a = _0x10d7b2['loaded'];
      var _0x3a561a = Object(_0xf5d161["useState"])(function () {
        return document['getElementById'](_0x2408ae);
      });
      var _0x22c907 = Object(_0x3dff3d['a'])(_0x3a561a, 0x2);
      var _0x9236a0 = _0x22c907[0x0];
      var _0x279312 = _0x22c907[0x1];
      var _0x2ddf75 = _0x589ec2(_0x9236a0, _0x9236a0);
      _0x2ddf75 && _0x9236a0 !== _0x2ddf75 && _0x4a26b1['e']['error']('This\x20component\x20does\x20not\x20support\x20iframe\x20switching.');
      Object(_0xf5d161["useEffect"])(function () {
        _0x279312(document["getElementById"](_0x2408ae));
      }, [_0x2408ae]);
      var _0x334210 = Object(_0xf5d161["useState"])();
      var _0x210286 = Object(_0x3dff3d['a'])(_0x334210, 0x2);
      var _0x48a477 = _0x210286[0x0];
      var _0x224011 = _0x210286[0x1];
      _0x9236a0 && !_0x48a477 && ((_0x48a477 = Object(_0x2bec03['z'])(_0x9236a0, new URL(_0x9236a0["src"])))["addCommandProcessor"](_0x2bec03['n'], function () {
        var _0x149497 = Object(_0x5bab24['a'])(_0x424cbd['a']["mark"](function _0x114832(_0xbfd3b7) {
          return _0x424cbd['a']['wrap'](function (_0x76cef0) {
            for (;;) {
              switch (_0x76cef0['prev'] = _0x76cef0["next"]) {
                case 0x0:
                  Object(_0xb5c075['g'])(_0xbfd3b7['payload'], ''["concat"](_0xb5c075['m'], '\x20[ASR.ERROR]'));
                case 0x1:
                case "end":
                  return _0x76cef0['stop']();
              }
            }
          }, _0x114832);
        }));
        return function (_0x31e53a) {
          return _0x149497['apply'](this, arguments);
        };
      }()), _0x224011(_0x48a477));
      var _0x47374c = _0x589ec2(_0x192d7a, !0x1);
      _0x192d7a && !_0x47374c && _0x48a477 && _0x48a477["loaderCompleted"]();
      Object(_0xf5d161["useEffect"])(function () {
        return function () {
          _0x48a477 && _0x48a477["close"]();
        };
      }, [_0x48a477]);
      Object(_0xf5d161["useMemo"])(function () {
        _0x48a477 && _0x48a477["addCommandProcessor"](_0x2bec03['o'], function () {
          var _0x50cfca = Object(_0x5bab24['a'])(_0x424cbd['a']["mark"](function _0x26c073(_0xc0e4a8) {
            return _0x424cbd['a']["wrap"](function (_0x1780f0) {
              for (;;) {
                switch (_0x1780f0["prev"] = _0x1780f0["next"]) {
                  case 0x0:
                    Object(_0xb5c075['g'])(_0xc0e4a8['payload'], ''['concat'](_0xb5c075['m'], '\x20[ASR.FATAL]'));
                    _0x2e9b2f(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_ERROR"])["replace"]('/:errorReason?', _0x3b4df5['a']["ERROR_GENERIC"]));
                  case 0x2:
                  case "end":
                    return _0x1780f0['stop']();
                }
              }
            }, _0x26c073);
          }));
          return function (_0x3982a1) {
            return _0x50cfca['apply'](this, arguments);
          };
        }());
      }, [_0x2e9b2f, _0x48a477]);
      Object(_0xf5d161["useMemo"])(function () {
        if (_0x19c37a && _0x48a477) {
          var _0x52eb97;
          var _0xd468e8 = _0x21fb14()(_0x19c37a, 'id');
          function _0x2bfec9() {
            return clearInterval(_0x52eb97);
          }
          function _0x107e92() {
            return "Are you sure you want to leave?";
          }
          function _0x18f06a(_0x4c458a) {
            _0x4c458a ? (_0x2bfec9(), _0x52eb97 = setInterval(_0x170212['c'], 0xea60 * _0x5bbf68["SESSION_KEEP_ALIVE_INTERVAL"]), window["onbeforeunload"] = _0x107e92) : (window['onbeforeunload'] = null, window["onunload"] = null, _0x2bfec9());
          }
          _0x48a477["addCommandProcessor"](_0x2bec03['y'], function () {
            var _0x59a5dc = Object(_0x5bab24['a'])(_0x424cbd['a']['mark'](function _0xa49abd(_0x3fdd3a) {
              var _0x2ce9ee;
              return _0x424cbd['a']['wrap'](function (_0x38f623) {
                for (;;) {
                  switch (_0x38f623["prev"] = _0x38f623["next"]) {
                    case 0x0:
                      _0x18f06a(!0x0);
                      _0x38f623["next"] = 0x3;
                      return _0x338997({
                        'activityId': _0xd468e8
                      });
                    case 0x3:
                      _0x2ce9ee = _0x38f623['sent'];
                      return _0x38f623["abrupt"]("return", _0x2ce9ee);
                    case 0x5:
                    case "end":
                      return _0x38f623['stop']();
                  }
                }
              }, _0xa49abd);
            }));
            return function (_0x3d2876) {
              return _0x59a5dc["apply"](this, arguments);
            };
          }());
          _0x48a477["addCommandProcessor"](_0x2bec03['g'], function () {
            var _0x16e409 = Object(_0x5bab24['a'])(_0x424cbd['a']["mark"](function _0x5cca69(_0x19abc7) {
              return _0x424cbd['a']["wrap"](function (_0x4bc246) {
                for (;;) {
                  switch (_0x4bc246['prev'] = _0x4bc246['next']) {
                    case 0x0:
                      _0x18f06a(!0x1);
                      _0x4bc246["next"] = 0x3;
                      return _0x520d57({
                        'activityId': _0xd468e8
                      });
                    case 0x3:
                    case "end":
                      return _0x4bc246["stop"]();
                  }
                }
              }, _0x5cca69);
            }));
            return function (_0x1e9b18) {
              return _0x16e409['apply'](this, arguments);
            };
          }());
          _0x48a477["addCommandProcessor"](_0x2bec03['d'], function () {
            var _0x542665 = Object(_0x5bab24['a'])(_0x424cbd['a']['mark'](function _0x218267(_0x517c21) {
              return _0x424cbd['a']['wrap'](function (_0x3b6c6e) {
                for (;;) {
                  switch (_0x3b6c6e["prev"] = _0x3b6c6e["next"]) {
                    case 0x0:
                      _0x18f06a(!0x1);
                      _0x2e9b2f(Object(_0x3b4df5['b'])(_0x3b4df5['a']['STUDENT_DASHBOARD_HOME']));
                    case 0x2:
                    case "end":
                      return _0x3b6c6e["stop"]();
                  }
                }
              }, _0x218267);
            }));
            return function (_0x539e90) {
              return _0x542665["apply"](this, arguments);
            };
          }());
          return function () {
            return _0x18f06a(!0x1);
          };
        }
      }, [_0x48a477, _0x5bbf68["SESSION_KEEP_ALIVE_INTERVAL"], _0x19c37a, _0x2e9b2f, _0x338997, _0x520d57]);
      return null;
    }
    function _0xe078f8(_0x2b3a7a) {
      return {
        'settings': Object(_0x5b4ede['e'])(_0x2b3a7a),
        'asrActivity': Object(_0x3b4cd1['a'])(_0x2b3a7a)
      };
    }
    var _0x51e5d3 = {
      'navigateToPage': _0x5d1fed['e'],
      'dispatchStartAction': _0xc1a0db['b'],
      'dispatchCompleteAction': _0xc1a0db['a']
    };
    var _0x34c377 = Object(_0x2ec172["connect"])(_0xe078f8, _0x51e5d3)(_0xa8004f);
    function _0x51ee8b(_0x1b3770) {
      return _0x54ddf5['a']['createElement'](_0x34c377, _0x1b3770);
    }
    __TEST__;
    var _0x27a01e = 'learnosity-wrapper';
    var _0x18dab4 = function (_0x3793a7) {
      Object(_0x317a11['a'])(_0x12989f, _0x3793a7);
      var _0x118266 = function (_0x1a6f3f) {
        function _0x4156c9() {
          if ("undefined" === typeof Reflect || !Reflect['construct']) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date['prototype']['toString']['call'](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x30d39b) {
            return !0x1;
          }
        }
        return function () {
          var _0x3dcf26;
          var _0x50eb74 = Object(_0x522d3a['a'])(_0x1a6f3f);
          if (_0x4156c9()) {
            var _0x427867 = Object(_0x522d3a['a'])(this)['constructor'];
            _0x3dcf26 = Reflect["construct"](_0x50eb74, arguments, _0x427867);
          } else {
            _0x3dcf26 = _0x50eb74["apply"](this, arguments);
          }
          return Object(_0x28bec5['a'])(this, _0x3dcf26);
        };
      }(_0x12989f);
      function _0x12989f() {
        var _0x317681;
        Object(_0x561375['a'])(this, _0x12989f);
        for (var _0x2de7de = arguments["length"], _0x1c30e4 = new Array(_0x2de7de), _0x2ca818 = 0x0; _0x2ca818 < _0x2de7de; _0x2ca818++) {
          _0x1c30e4[_0x2ca818] = arguments[_0x2ca818];
        }
        (_0x317681 = _0x118266['call']["apply"](_0x118266, [this]["concat"](_0x1c30e4)))['state'] = {
          'isWrapperLoaded': !0x1
        };
        _0x317681["loadError"] = function () {
          var _0x580384 = _0x317681["props"]["navigateToPage"];
          Object(_0xb5c075['g'])("ASR iframe load error.", _0xb5c075['m']);
          _0x580384(Object(_0x3b4df5['b'])(_0x3b4df5['a']["STUDENT_ERROR"])["replace"]("/:errorReason?", _0x3b4df5['a']["ERROR_GENERIC"]));
        };
        _0x317681["loadComplete"] = function () {
          _0x317681["setState"]({
            'isWrapperLoaded': !0x0
          });
        };
        return _0x317681;
      }
      Object(_0x238315['a'])(_0x12989f, [{
        'key': "componentDidMount",
        'value': function () {
          var _0x21485b = this["props"]["selectedSubject"];
          _0x5d93f3['a']["setDocumentTitle"](''["concat"](_0x1e1c74['b'][_0x21485b], " Activity, i-Ready"));
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x4b3a94 = this['props'];
          var _0x5124fa = _0x4b3a94["cdnPath"];
          var _0xb300b3 = _0x4b3a94['settings'];
          var _0x2f79b6 = _0xb300b3["LEARNING_TREE_TIMEOUT_MILLIS"];
          var _0x4aaa61 = _0xb300b3["LEARNING_TREE_LESSON_NUM_RETRIES"];
          var _0x3a1143 = _0xb300b3["SPANISH_FIXEDFORM_ASSESSMENT_PLAYER_PATH"];
          var _0x5140ef = this["state"]["isWrapperLoaded"];
          var _0x15a622 = ''['concat'](_0x5124fa)["concat"](_0x3a1143);
          return Object(_0x312ad8['c'])(_0xf5d161['Fragment'], null, !_0x5140ef && Object(_0x312ad8['c'])(_0xa4b2f6['a'], {
            'fullScreen': !0x0
          }), Object(_0x312ad8['c'])("div", {
            'role': 'main',
            'id': 'learnosity-view'
          }, Object(_0x312ad8['c'])(_0x20d3ce['a'], {
            'title': "Learnosity iFrame",
            'src': _0x15a622,
            'id': _0x27a01e,
            'timeout': _0x2f79b6,
            'retry': _0x4aaa61,
            'loadErrorCallback': this["loadError"],
            'loadCompleteCallback': this["loadComplete"]
          }), Object(_0x312ad8['c'])(_0x51ee8b, {
            'iframeid': _0x27a01e,
            'loaded': _0x5140ef
          })));
        }
      }]);
      return _0x12989f;
    }(_0x54ddf5['a']["Component"]);
    function _0x350635(_0xf94df5) {
      return {
        'cdnPath': Object(_0x5b4ede['c'])(_0xf94df5),
        'settings': Object(_0x5b4ede['e'])(_0xf94df5),
        'selectedActivity': Object(_0x3b4cd1['a'])(_0xf94df5),
        'selectedSubject': Object(_0x124484['b'])(_0xf94df5)
      };
    }
    var _0x53f16e = {
      'navigateToPage': _0x5d1fed['e']
    };
    var _0x57dd8b = Object(_0x2ec172["connect"])(_0x350635, _0x53f16e)(_0x18dab4);
    __TEST__;
    var _0x1da6d7 = _0x57dd8b;
    var _0x5e1187 = {
      'HTML_LESSON': _0x54ddf5['a']["createElement"](_0x4c1079, null),
      'CLOSE_READING_LESSON': _0x54ddf5['a']["createElement"](_0x3abf11['a'], null)
    };
    var _0x88b9e1 = function (_0xc0ca5f) {
      Object(_0x317a11['a'])(_0x5301e4, _0xc0ca5f);
      var _0x34d4da = function (_0xc124d7) {
        function _0x35880a() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]['sham']) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]["toString"]['call'](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x27f0fe) {
            return !0x1;
          }
        }
        return function () {
          var _0x5228bc;
          var _0x12ce15 = Object(_0x522d3a['a'])(_0xc124d7);
          if (_0x35880a()) {
            var _0x532d33 = Object(_0x522d3a['a'])(this)["constructor"];
            _0x5228bc = Reflect['construct'](_0x12ce15, arguments, _0x532d33);
          } else {
            _0x5228bc = _0x12ce15["apply"](this, arguments);
          }
          return Object(_0x28bec5['a'])(this, _0x5228bc);
        };
      }(_0x5301e4);
      function _0x5301e4() {
        var _0x5ccfd3;
        Object(_0x561375['a'])(this, _0x5301e4);
        for (var _0x24ebb5 = arguments['length'], _0x56d078 = new Array(_0x24ebb5), _0x5ac69e = 0x0; _0x5ac69e < _0x24ebb5; _0x5ac69e++) {
          _0x56d078[_0x5ac69e] = arguments[_0x5ac69e];
        }
        (_0x5ccfd3 = _0x34d4da["call"]["apply"](_0x34d4da, [this]["concat"](_0x56d078)))["entityTypeRenderMap"] = {
          'lessonActivity': "_renderLessonActivity",
          'assessmentActivity': "_renderAssessmentActivity",
          'ismActivity': '_renderIsmActivity',
          'basalCheckActivity': "_renderIsmActivity",
          'spanishFixedFormAssessmentActivity': '_renderAsrActivity'
        };
        _0x5ccfd3["_renderLessonActivity"] = function () {
          var _0x2b85d3 = _0x5ccfd3["props"]["activity"];
          return _0x5e1187[_0x21fb14()(_0x2b85d3, "lesson.lessonType")];
        };
        _0x5ccfd3["_renderAssessmentActivity"] = function () {
          var _0x27679f = _0x5ccfd3["props"];
          var _0x365a7d = _0x27679f["cdnUrl"];
          var _0x303aa3 = _0x27679f["testingQueue"];
          var _0x4a8b01 = _0x27679f['isCheating'];
          return _0x1693a1['a']["DIAGNOSTIC_CHEAT_VIEW"] && _0x21fb14()(_0x303aa3, "length") ? _0x54ddf5['a']['createElement'](_0xe4e323, null) : _0x54ddf5['a']["createElement"](_0x24a0ac['c'], {
            'isCheating': _0x4a8b01,
            'cdnUrl': _0x365a7d
          });
        };
        _0x5ccfd3["_renderIsmActivity"] = function () {
          return _0x54ddf5['a']["createElement"](_0x1b4858, null);
        };
        _0x5ccfd3["_renderAsrActivity"] = function () {
          return _0x54ddf5['a']["createElement"](_0x1da6d7, null);
        };
        return _0x5ccfd3;
      }
      Object(_0x238315['a'])(_0x5301e4, [{
        'key': 'render',
        'value': function () {
          var _0x313e4f = this["props"]['activity'];
          var _0x35cc39 = _0x21fb14()(this, _0x21fb14()(this["entityTypeRenderMap"], _0x313e4f["entityType"]));
          return _0xf86c48()(_0x35cc39) ? _0x35cc39() : _0x54ddf5['a']["createElement"]("div", null);
        }
      }]);
      return _0x5301e4;
    }(_0x54ddf5['a']["Component"]);
    function _0x5807fc(_0x4d118e) {
      return {
        'activity': Object(_0x3b4cd1['a'])(_0x4d118e),
        'testingQueue': Object(_0x69d01d['f'])(_0x4d118e),
        'isCheating': Object(_0x69d01d['b'])(_0x4d118e)
      };
    }
    var _0x5ae304 = {};
    var _0x233d45 = Object(_0x2ec172["connect"])(_0x5807fc, _0x5ae304)(_0x88b9e1);
    __TEST__;
    var _0x571e03 = _0x233d45;
    var _0x35c93b = _0x42c2d9(0x4b0);
    var _0x2ac8d8 = _0x42c2d9(0x12e);
    _0x4bea42['default'] = function () {
      return _0x54ddf5['a']["createElement"](_0x2ac8d8['a'], {
        'displaySubHeader': !0x1
      }, _0x54ddf5['a']["createElement"](_0x35c93b['a'], null, function (_0x1b68fc) {
        var _0x3aa348 = _0x1b68fc["CDN_DOMAIN_URL"];
        return _0x54ddf5['a']["createElement"](_0x571e03, {
          'cdnUrl': _0x3aa348
        });
      }));
    };
  },
  0x393: function (_0x3b603d, _0x4f5316, _0x443e9b) {
    'use strict';

    var _0x4bcc7c = _0x443e9b(0x394);
    var _0x508f20 = _0x443e9b(0x1f);
    var _0x478221 = _0x443e9b(0x20);
    var _0x5382b2 = _0x443e9b(0x50);
    var _0x3c7f87 = _0x443e9b(0x44);
    var _0x4eaaa8 = _0x443e9b(0x3c);
    var _0x4d8e74 = _0x443e9b(0x0);
    var _0x4a4883 = _0x443e9b['n'](_0x4d8e74);
    var _0x319573 = _0x443e9b(0x3f9);
    var _0x3eff6e = ["children"];
    var _0x4d06a3 = function (_0x1c2430) {
      Object(_0x5382b2['a'])(_0x101176, _0x1c2430);
      var _0x404955 = function (_0x195872) {
        function _0x5ea74e() {
          if ("undefined" === typeof Reflect || !Reflect["construct"]) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ("function" === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]["toString"]['call'](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x38428e) {
            return !0x1;
          }
        }
        return function () {
          var _0x37442a;
          var _0x5a8ff5 = Object(_0x4eaaa8['a'])(_0x195872);
          if (_0x5ea74e()) {
            var _0x3f0c94 = Object(_0x4eaaa8['a'])(this)["constructor"];
            _0x37442a = Reflect["construct"](_0x5a8ff5, arguments, _0x3f0c94);
          } else {
            _0x37442a = _0x5a8ff5["apply"](this, arguments);
          }
          return Object(_0x3c7f87['a'])(this, _0x37442a);
        };
      }(_0x101176);
      function _0x101176() {
        Object(_0x508f20['a'])(this, _0x101176);
        return _0x404955["apply"](this, arguments);
      }
      Object(_0x478221['a'])(_0x101176, [{
        'key': "render",
        'value': function () {
          var _0x582ac7 = this["props"];
          var _0x50a9cf = _0x582ac7["children"];
          var _0x56ae7b = Object(_0x4bcc7c['a'])(_0x582ac7, _0x3eff6e);
          return _0x4a4883['a']["createElement"](_0x319573['a'], Object['assign']({}, _0x56ae7b, {
            'audioKeyContext': '',
            'id': '',
            'layer': '',
            'mouseover': !0x0
          }), _0x50a9cf);
        }
      }]);
      return _0x101176;
    }(_0x4d8e74["Component"]);
    _0x4d06a3['defaultProps'] = {
      'autoPlay': !0x1,
      'delay': 0x190
    };
    _0x4f5316['a'] = _0x4d06a3;
  },
  0x399: function (_0x2901c1, _0x12bc33, _0x1ad4e0) {
    'use strict';

    _0x1ad4e0['d'](_0x12bc33, 'a', function () {
      return _0x58f656;
    });
    _0x1ad4e0(0x86);
    _0x1ad4e0(0x38);
    function _0x58f656(_0x4f2a2f) {
      _0x4f2a2f["target"]['blur']();
    }
  },
  0x3b6: function (_0x131d00, _0x1bce63, _0x3b193c) {
    'use strict';

    var _0x9d2d0 = _0x3b193c(0x1f);
    var _0x22830d = _0x3b193c(0x20);
    var _0x49be7d = _0x3b193c(0x50);
    var _0x1bd552 = _0x3b193c(0x44);
    var _0x1ae862 = _0x3b193c(0x3c);
    var _0x21edb4 = _0x3b193c(0x3fe);
    var _0x3c1e6b = _0x3b193c['n'](_0x21edb4);
    var _0x4d7b60 = _0x3b193c(0x1c);
    var _0xcbe54b = _0x3b193c['n'](_0x4d7b60);
    var _0xd20b58 = _0x3b193c(0x3c6);
    var _0x33eea2 = _0x3b193c['n'](_0xd20b58);
    var _0x46abe4 = _0x3b193c(0x3ba);
    var _0x1f68ae = _0x3b193c['n'](_0x46abe4);
    var _0x4e8403 = _0x3b193c(0x3);
    var _0x4fca45 = _0x3b193c(0x86);
    var _0xdee491 = !0x1;
    var _0x5aa8a2 = function () {
      function _0x100576() {
        Object(_0x9d2d0['a'])(this, _0x100576);
      }
      Object(_0x22830d['a'])(_0x100576, null, [{
        'key': 'timeout',
        'value': function (_0x217282, _0x3e8571, _0x542ab9) {
          var _0x3e742a = this;
          var _0x11b0af = arguments["length"] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : _0x1f68ae['a'];
          var _0x3d1d00 = arguments["length"] > 0x4 ? arguments[0x4] : void 0x0;
          var _0x54da95 = arguments["length"] > 0x5 ? arguments[0x5] : void 0x0;
          var _0x45347b = _0x3d1d00;
          var _0x1d8007 = _0x54da95;
          var _0x177a65 = _0x217282["src"];
          var _0x3a1d07 = 0x0;
          function _0x1256fb() {
            _0x3e742a["timeoutObj"] = setTimeout(_0xf814c7, _0x45347b);
            _0x217282["addEventListener"]('load', _0x5f3d88);
          }
          function _0x244735() {
            clearTimeout(_0x3e742a["timeoutObj"]);
            _0x217282["removeEventListener"]('load', _0x5f3d88);
          }
          function _0x8324d5() {
            _0x3e8571() ? _0x11b0af() : (_0x217282["src"] = "about:blank", setTimeout(function () {
              _0x1256fb();
              _0x217282['src'] = _0x177a65;
            }, 0x1));
          }
          function _0xf814c7(_0x5dee76) {
            _0x5dee76 || _0x244735();
            var _0x41dec2 = ['false', '../false', '/student/dashboard/false', ''["concat"](window["location"]["origin"], '/student/dashboard/false')]["includes"](_0x177a65["split"]('#')[0x0]);
            _0x41dec2 || ++_0x3a1d07 > _0x1d8007 ? (_0x41dec2 && !_0xdee491 && (_0xdee491 = !0x0, Object(_0x4fca45['h'])('iFrameUtils:\x20detected\x20/student/dashboard/false\x20--\x20' + new Error(_0x177a65)["stack"])), _0x542ab9()) : _0x8324d5();
          }
          function _0x5f3d88(_0x4d65ef) {
            _0x244735();
            _0x3e742a['timeoutObj2'] = setTimeout(function () {
              _0x3e8571() ? _0x11b0af() : _0xf814c7(!0x0);
            }, 0x1);
          }
          _0x1256fb();
        }
      }, {
        'key': "clearTimeouts",
        'value': function () {
          this['timeoutObj'] && clearTimeout(this['timeoutObj']);
          this['timeoutObj2'] && clearTimeout(this["timeoutObj2"]);
        }
      }]);
      return _0x100576;
    }();
    _0x5aa8a2["timeoutObj"] = void 0x0;
    _0x5aa8a2["timeoutObj2"] = void 0x0;
    var _0x1cfe6c = _0x3b193c(0x0);
    var _0x430104 = _0x3b193c['n'](_0x1cfe6c);
    var _0x28e6c5 = _0x3b193c(0x131);
    var _0xcb9a6d = {
      'name': '1gfhmqc-IFRAME',
      'styles': 'height:100%;width:100%;position:absolute;display:flex;label:IFRAME;'
    };
    var _0x4ae4ad = function (_0x1bacd8) {
      Object(_0x49be7d['a'])(_0x260173, _0x1bacd8);
      var _0x75adc7 = function (_0x2f41da) {
        function _0x4ef398() {
          if ("undefined" === typeof Reflect || !Reflect['construct']) {
            return !0x1;
          }
          if (Reflect["construct"]["sham"]) {
            return !0x1;
          }
          if ('function' === typeof Proxy) {
            return !0x0;
          }
          try {
            Date["prototype"]['toString']["call"](Reflect["construct"](Date, [], function () {}));
            return !0x0;
          } catch (_0x8df31a) {
            return !0x1;
          }
        }
        return function () {
          var _0x1b5e16;
          var _0x421bf5 = Object(_0x1ae862['a'])(_0x2f41da);
          if (_0x4ef398()) {
            var _0x212a98 = Object(_0x1ae862['a'])(this)["constructor"];
            _0x1b5e16 = Reflect["construct"](_0x421bf5, arguments, _0x212a98);
          } else {
            _0x1b5e16 = _0x421bf5["apply"](this, arguments);
          }
          return Object(_0x1bd552['a'])(this, _0x1b5e16);
        };
      }(_0x260173);
      function _0x260173() {
        var _0x13f7cb;
        Object(_0x9d2d0['a'])(this, _0x260173);
        for (var _0x41ca2a = arguments['length'], _0x5c1e25 = new Array(_0x41ca2a), _0x44eccc = 0x0; _0x44eccc < _0x41ca2a; _0x44eccc++) {
          _0x5c1e25[_0x44eccc] = arguments[_0x44eccc];
        }
        (_0x13f7cb = _0x75adc7['call']["apply"](_0x75adc7, [this]["concat"](_0x5c1e25)))["iFrameRef"] = _0x430104['a']["createRef"]();
        return _0x13f7cb;
      }
      Object(_0x22830d['a'])(_0x260173, [{
        'key': 'UNSAFE_componentWillMount',
        'value': function () {
          this['props']['shouldUseDocumentDomain'] && !Object(_0x28e6c5['a'])() && (document["domain"] = "i-ready.com");
        }
      }, {
        'key': "componentDidMount",
        'value': function () {
          this["_checkIFrameLoad"]();
        }
      }, {
        'key': "componentWillUnmount",
        'value': function () {
          var _0x17589d = this['iFrameRef']["current"];
          _0x5aa8a2["clearTimeouts"]();
          _0x17589d && (_0x17589d["src"] = "about:blank", _0x17589d["parentElement"]['removeChild'](_0x17589d));
        }
      }, {
        'key': "_checkIFrameLoad",
        'value': function () {
          var _0x176899 = this;
          var _0x3cff80 = this["props"];
          var _0x36e8d3 = _0x3cff80["loadErrorCallback"];
          var _0x5cfcd4 = _0x3cff80["loadCheckAttribute"];
          var _0x3acb4f = _0x3cff80['loadCompleteCallback'];
          var _0x416dee = _0x3cff80['timeout'];
          var _0x1fa396 = _0x3cff80["retry"];
          var _0x5da4b2 = _0x3cff80["getRef"];
          var _0x5e4b1e = this["iFrameRef"]["current"];
          _0x5e4b1e && (_0x5da4b2 && _0x5da4b2(_0x5e4b1e), _0x5aa8a2["timeout"](_0x5e4b1e, function () {
            var _0x3d2f7f = !0x1;
            try {
              _0x3d2f7f = !_0x5cfcd4 || _0x176899["hasAttribute"]();
            } catch (_0x55d6f6) {}
            return _0x3d2f7f;
          }, _0x36e8d3, _0x3acb4f, _0x416dee, _0x1fa396));
        }
      }, {
        'key': 'hasAttribute',
        'value': function () {
          var _0x4cf36d = this["props"]["loadCheckAttribute"];
          var _0x5a268f = !0x1;
          var _0x2f666d = this["iFrameRef"]["current"];
          _0x2f666d && _0x4cf36d && ("string" === typeof _0x4cf36d ? _0x5a268f = _0x33eea2()(_0x2f666d["contentWindow"], _0x4cf36d) : _0xcbe54b()(_0x4cf36d) && _0x3c1e6b()(_0x4cf36d, function (_0x564895) {
            if (_0x33eea2()(_0x2f666d['contentWindow'], _0x564895)) {
              _0x5a268f = !0x0;
              return !0x1;
            }
          }));
          return _0x5a268f;
        }
      }, {
        'key': "render",
        'value': function () {
          var _0x5f59e6 = this['props'];
          var _0x3c9cbe = _0x5f59e6['id'];
          var _0xce2eb2 = _0x5f59e6['className'];
          var _0x10f04e = _0x5f59e6["allowTransparency"];
          var _0x5b1c97 = _0x5f59e6['allowFullscreen'];
          var _0x1126f2 = _0x5f59e6["title"];
          var _0x51961c = _0x5f59e6["src"];
          var _0x737a57 = _0x5f59e6["width"];
          var _0x52c873 = _0x5f59e6["height"];
          var _0x5b5471 = _0x5f59e6["minHeight"];
          return Object(_0x4e8403['c'])("div", {
            'css': _0xcb9a6d,
            'id': ''['concat'](_0x3c9cbe, '-wrapper')
          }, Object(_0x4e8403['c'])("iframe", {
            'id': _0x3c9cbe,
            'ref': this["iFrameRef"],
            'frameBorder': '0',
            'scrolling': 'no',
            'className': _0xce2eb2,
            'allowtransparency': _0x10f04e["toString"](),
            'allow': 'autoplay',
            'allowfullscreen': _0x5b1c97['toString'](),
            'title': _0x1126f2,
            'src': _0x51961c,
            'css': Object(_0x4e8403['b'])({
              'width': _0x737a57,
              'height': _0x52c873,
              'minHeight': _0x5b5471
            }, ';;label:FrameHolder;')
          }));
        }
      }]);
      return _0x260173;
    }(_0x430104['a']["Component"]);
    _0x4ae4ad["defaultProps"] = {
      'loadCheckAttribute': null,
      'getRef': _0x1f68ae['a'],
      'loadErrorCallback': _0x1f68ae['a'],
      'loadCompleteCallback': _0x1f68ae['a'],
      'allowFullscreen': !0x1,
      'allowTransparency': !0x1,
      'timeout': 0x1f4,
      'retry': 0x1,
      'width': "100%",
      'height': "100%",
      'minHeight': "100%",
      'shouldUseDocumentDomain': !0x0
    };
    _0x1bce63['a'] = _0x4ae4ad;
  }
}]);
