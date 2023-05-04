/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 90vh;\n  width: 90vw;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.formContainer {\n  background-color: grey;\n  height: 70vh;\n  width: 35vw;\n  display: flex;\n  justify-content: center;\n  border: 2px solid black;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 4vh;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB","sourcesContent":["body {\n  height: 90vh;\n  width: 90vw;\n}\n\n.main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.formContainer {\n  background-color: grey;\n  height: 70vh;\n  width: 35vw;\n  display: flex;\n  justify-content: center;\n  border: 2px solid black;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 4vh;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/detect-node/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-node/browser.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = false;



/***/ }),

/***/ "./node_modules/diacritics/index.js":
/*!******************************************!*\
  !*** ./node_modules/diacritics/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.remove = removeDiacritics;

var replacementList = [
  {
    base: ' ',
    chars: "\u00A0",
  }, {
    base: '0',
    chars: "\u07C0",
  }, {
    base: 'A',
    chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
  }, {
    base: 'AA',
    chars: "\uA732",
  }, {
    base: 'AE',
    chars: "\u00C6\u01FC\u01E2",
  }, {
    base: 'AO',
    chars: "\uA734",
  }, {
    base: 'AU',
    chars: "\uA736",
  }, {
    base: 'AV',
    chars: "\uA738\uA73A",
  }, {
    base: 'AY',
    chars: "\uA73C",
  }, {
    base: 'B',
    chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181",
  }, {
    base: 'C',
    chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B",
  }, {
    base: 'D',
    chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779",
  }, {
    base: 'Dh',
    chars: "\u00D0",
  }, {
    base: 'DZ',
    chars: "\u01F1\u01C4",
  }, {
    base: 'Dz',
    chars: "\u01F2\u01C5",
  }, {
    base: 'E',
    chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07",
  }, {
    base: 'F',
    chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B",
  }, {
    base: 'G',
    chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262",
  }, {
    base: 'H',
    chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
  }, {
    base: 'I',
    chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
  }, {
    base: 'J',
    chars: "\u24BF\uFF2A\u0134\u0248\u0237",
  }, {
    base: 'K',
    chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
  }, {
    base: 'L',
    chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
  }, {
    base: 'LJ',
    chars: "\u01C7",
  }, {
    base: 'Lj',
    chars: "\u01C8",
  }, {
    base: 'M',
    chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB",
  }, {
    base: 'N',
    chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E",
  }, {
    base: 'NJ',
    chars: "\u01CA",
  }, {
    base: 'Nj',
    chars: "\u01CB",
  }, {
    base: 'O',
    chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
  }, {
    base: 'OE',
    chars: "\u0152",
  }, {
    base: 'OI',
    chars: "\u01A2",
  }, {
    base: 'OO',
    chars: "\uA74E",
  }, {
    base: 'OU',
    chars: "\u0222",
  }, {
    base: 'P',
    chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
  }, {
    base: 'Q',
    chars: "\u24C6\uFF31\uA756\uA758\u024A",
  }, {
    base: 'R',
    chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
  }, {
    base: 'S',
    chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
  }, {
    base: 'T',
    chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
  }, {
    base: 'Th',
    chars: "\u00DE",
  }, {
    base: 'TZ',
    chars: "\uA728",
  }, {
    base: 'U',
    chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
  }, {
    base: 'V',
    chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245",
  }, {
    base: 'VY',
    chars: "\uA760",
  }, {
    base: 'W',
    chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
  }, {
    base: 'X',
    chars: "\u24CD\uFF38\u1E8A\u1E8C",
  }, {
    base: 'Y',
    chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
  }, {
    base: 'Z',
    chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
  }, {
    base: 'a',
    chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251",
  }, {
    base: 'aa',
    chars: "\uA733",
  }, {
    base: 'ae',
    chars: "\u00E6\u01FD\u01E3",
  }, {
    base: 'ao',
    chars: "\uA735",
  }, {
    base: 'au',
    chars: "\uA737",
  }, {
    base: 'av',
    chars: "\uA739\uA73B",
  }, {
    base: 'ay',
    chars: "\uA73D",
  }, {
    base: 'b',
    chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182",
  }, {
    base: 'c',
    chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184",
  }, {
    base: 'd',
    chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA",
  }, {
    base: 'dh',
    chars: "\u00F0",
  }, {
    base: 'dz',
    chars: "\u01F3\u01C6",
  }, {
    base: 'e',
    chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD",
  }, {
    base: 'f',
    chars: "\u24D5\uFF46\u1E1F\u0192",
  }, {
    base: 'ff',
    chars: "\uFB00",
  }, {
    base: 'fi',
    chars: "\uFB01",
  }, {
    base: 'fl',
    chars: "\uFB02",
  }, {
    base: 'ffi',
    chars: "\uFB03",
  }, {
    base: 'ffl',
    chars: "\uFB04",
  }, {
    base: 'g',
    chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79",
  }, {
    base: 'h',
    chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
  }, {
    base: 'hv',
    chars: "\u0195",
  }, {
    base: 'i',
    chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
  }, {
    base: 'j',
    chars: "\u24D9\uFF4A\u0135\u01F0\u0249",
  }, {
    base: 'k',
    chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
  }, {
    base: 'l',
    chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D",
  }, {
    base: 'lj',
    chars: "\u01C9",
  }, {
    base: 'm',
    chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F",
  }, {
    base: 'n',
    chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509",
  }, {
    base: 'nj',
    chars: "\u01CC",
  }, {
    base: 'o',
    chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11",
  }, {
    base: 'oe',
    chars: "\u0153",
  }, {
    base: 'oi',
    chars: "\u01A3",
  }, {
    base: 'oo',
    chars: "\uA74F",
  }, {
    base: 'ou',
    chars: "\u0223",
  }, {
    base: 'p',
    chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
  }, {
    base: 'q',
    chars: "\u24E0\uFF51\u024B\uA757\uA759",
  }, {
    base: 'r',
    chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
  }, {
    base: 's',
    chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282",
  }, {
    base: 'ss',
    chars: "\xDF",
  }, {
    base: 't',
    chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
  }, {
    base: 'th',
    chars: "\u00FE",
  }, {
    base: 'tz',
    chars: "\uA729",
  }, {
    base: 'u',
    chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
  }, {
    base: 'v',
    chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C",
  }, {
    base: 'vy',
    chars: "\uA761",
  }, {
    base: 'w',
    chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
  }, {
    base: 'x',
    chars: "\u24E7\uFF58\u1E8B\u1E8D",
  }, {
    base: 'y',
    chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
  }, {
    base: 'z',
    chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
  }
];

var diacriticsMap = {};
for (var i = 0; i < replacementList.length; i += 1) {
  var chars = replacementList[i].chars;
  for (var j = 0; j < chars.length; j += 1) {
    diacriticsMap[chars[j]] = replacementList[i].base;
  }
}

function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007e]/g, function(c) {
    return diacriticsMap[c] || c;
  });
}

exports.replacementList = replacementList;
exports.diacriticsMap = diacriticsMap;


/***/ }),

/***/ "./node_modules/i18n-iso-countries/index.js":
/*!**************************************************!*\
  !*** ./node_modules/i18n-iso-countries/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const codes = __webpack_require__(/*! ./codes.json */ "./node_modules/i18n-iso-countries/codes.json");
const supportedLocales = __webpack_require__(/*! ./supportedLocales.json */ "./node_modules/i18n-iso-countries/supportedLocales.json");
const removeDiacritics = (__webpack_require__(/*! diacritics */ "./node_modules/diacritics/index.js").remove);
const registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
const alpha2 = {},
  alpha3 = {},
  numeric = {},
  invertedNumeric = {};

codes.forEach(function (codeInformation) {
  const s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

/**
 * @private
 * @param {number} code
 */
function formatNumericCode(code) {
  return String("000" + (code ? code : "")).slice(-3);
}

/**
 * @private
 * Avoid using obj.hasOwnProperty directly as `hasOwnProperty` could be a
 * property in itself ({ hasOwnProperty: 1 }) and cause weird bugs
 * https://eslint.org/docs/rules/no-prototype-builtins
 */
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

/**
 * @private
 * Pass localeList through a filter and return a newLocaleList obj
 * with the same structure of the old localeList.
 *
 * @param {LocalizedCountryNames} localeList  Local List in raw
 * @param {Function} filter    callback to set filter rule
 * @return {String | String[]} new filtered Local List
 */
function localeFilter(localeList, filter) {
  return Object.keys(localeList).reduce(function (newLocaleList, alpha2) {
    const nameList = localeList[alpha2];
    newLocaleList[alpha2] = filter(nameList, alpha2);
    return newLocaleList;
  }, {});
}

/**
 * @private
 * Preserve for getName & getNames
 *
 * @param {GetNameOptions.select} type all | official | alias
 * @param countryNameList  string array of country's
 *                         official name and alias
 * @return {String | String[]} of a country name
 */
function filterNameBy(type, countryNameList) {
  switch (type) {
    case "official":
      return Array.isArray(countryNameList)
        ? countryNameList[0]
        : countryNameList;

    case "all":
      return typeof countryNameList === "string"
        ? [countryNameList]
        : countryNameList;

    case "alias":
      return Array.isArray(countryNameList)
        ? countryNameList[1] || countryNameList[0]
        : countryNameList;

    default:
      throw new TypeError(
        "LocaleNameType must be one of these: all, official, alias!"
      );
  }
}

/**
 * Register countries in browsers' environment:
 * @param {object} localeData
 * @example countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
 * @return void
 */
exports.registerLocale = function (localeData) {
  if (!localeData.locale) {
    throw new TypeError("Missing localeData.locale");
  }

  if (!localeData.countries) {
    throw new TypeError("Missing localeData.countries");
  }

  registeredLocales[localeData.locale] = localeData.countries;
};

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
function alpha3ToAlpha2(code) {
  return alpha3[code];
}
exports.alpha3ToAlpha2 = alpha3ToAlpha2;

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
function alpha2ToAlpha3(code) {
  return alpha2[code];
}
exports.alpha2ToAlpha3 = alpha2ToAlpha3;

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
function alpha3ToNumeric(code) {
  return invertedNumeric[alpha3ToAlpha2(code)];
}
exports.alpha3ToNumeric = alpha3ToNumeric;

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
function alpha2ToNumeric(code) {
  return invertedNumeric[code];
}
exports.alpha2ToNumeric = alpha2ToNumeric;

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
function numericToAlpha3(code) {
  const padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}
exports.numericToAlpha3 = numericToAlpha3;

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
function numericToAlpha2(code) {
  const padded = formatNumericCode(code);
  return numeric[padded];
}
exports.numericToAlpha2 = numericToAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
function toAlpha3(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if (code.length === 2) {
      return alpha2ToAlpha3(code.toUpperCase());
    }
    if (code.length === 3) {
      return code.toUpperCase();
    }
  }
  if (typeof code === "number") {
    return numericToAlpha3(code);
  }
  return undefined;
}
exports.toAlpha3 = toAlpha3;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
function toAlpha2(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if (code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}
exports.toAlpha2 = toAlpha2;

/**
 * @param {string | number | Alpha2Code | Alpha3Code} code
 * @param {String} lang          language for country name
 * @param {GetNameOptions} options
 * @return {String | String[] | undefined}  name
 */
exports.getName = function (code, lang, options = {}) {
  if (!("select" in options)) {
    options.select = "official";
  }
  try {
    const codeMaps = registeredLocales[lang.toLowerCase()];
    const nameList = codeMaps[toAlpha2(code)];
    return filterNameBy(options.select, nameList);
  } catch (err) {
    return undefined;
  }
};

/**
 * @param {String} lang             language for country names
 * @param {GetNameOptions} options   getNames Options
 * @return {LocalizedCountryNames}  country code
 *                                  mapped to county name
 */
exports.getNames = function (lang, options = {}) {
  if (!("select" in options)) {
    options.select = "official";
  }
  const localeList = registeredLocales[lang.toLowerCase()];
  if (localeList === undefined) return {};
  return localeFilter(localeList, function (nameList) {
    return filterNameBy(options.select, nameList);
  });
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getAlpha2Code = function (name, lang) {
  const normalizeString = (string) => string.toLowerCase();
  const areSimilar = (a, b) => normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      if (typeof codenames[p] === "string") {
        if (areSimilar(codenames[p], name)) {
          return p;
        }
      }
      if (Array.isArray(codenames[p])) {
        for (const mappedName of codenames[p]) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getSimpleAlpha2Code = function (name, lang) {
  const normalizeString = (string) => removeDiacritics(string.toLowerCase());
  const areSimilar = (a, b) => normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      if (typeof codenames[p] === "string") {
        if (areSimilar(codenames[p], name)) {
          return p;
        }
      }
      if (Array.isArray(codenames[p])) {
        for (const mappedName of codenames[p]) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @return Object of alpha-2 codes mapped to alpha-3 codes
 */
exports.getAlpha2Codes = function () {
  return alpha2;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getAlpha3Code = function (name, lang) {
  const alpha2 = exports.getAlpha2Code(name, lang);
  if (alpha2) {
    return exports.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getSimpleAlpha3Code = function (name, lang) {
  const alpha2 = exports.getSimpleAlpha2Code(name, lang);
  if (alpha2) {
    return exports.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @return Object of alpha-3 codes mapped to alpha-2 codes
 */
exports.getAlpha3Codes = function () {
  return alpha3;
};

/*
 * @return Object of numeric codes mapped to alpha-2 codes
 */
exports.getNumericCodes = function () {
  return numeric;
};

/*
 * @return Array of registered languages
 */
exports.langs = function () {
  return Object.keys(registeredLocales);
};

/*
 * @return Array of supported languages
 */
exports.getSupportedLanguages = function () {
  return supportedLocales;
};

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return Boolean
 */
exports.isValid = function (code) {
  if (!code) {
    return false;
  }

  const coerced = code.toString().toUpperCase();
  return (
    hasOwnProperty(alpha3, coerced) ||
    hasOwnProperty(alpha2, coerced) ||
    hasOwnProperty(numeric, coerced)
  );
};


/***/ }),

/***/ "./node_modules/path/path.js":
/*!***********************************!*\
  !*** ./node_modules/path/path.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.




var isWindows = process.platform === 'win32';
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");


// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  var res = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

// returns an array with empty elements removed from either end of the input
// array or the original array if no elements need to be removed
function trimArray(arr) {
  var lastIndex = arr.length - 1;
  var start = 0;
  for (; start <= lastIndex; start++) {
    if (arr[start])
      break;
  }

  var end = lastIndex;
  for (; end >= 0; end--) {
    if (arr[end])
      break;
  }

  if (start === 0 && end === lastIndex)
    return arr;
  if (start > end)
    return [];
  return arr.slice(start, end + 1);
}

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

function win32StatPath(path) {
  var result = splitDeviceRe.exec(path),
      device = result[1] || '',
      isUnc = !!device && device[1] !== ':';
  return {
    device: device,
    isUnc: isUnc,
    isAbsolute: isUnc || !!result[2], // UNC paths are always absolute
    tail: result[3]
  };
}

function normalizeUNCRoot(device) {
  return '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}

// path.resolve([from ...], to)
win32.resolve = function() {
  var resolvedDevice = '',
      resolvedTail = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1; i--) {
    var path;
    if (i >= 0) {
      path = arguments[i];
    } else if (!resolvedDevice) {
      path = process.cwd();
    } else {
      // Windows has the concept of drive-specific current working
      // directories. If we've resolved a drive letter but not yet an
      // absolute path, get cwd for that drive. We're sure the device is not
      // an unc path at this points, because unc paths are always absolute.
      path = process.env['=' + resolvedDevice];
      // Verify that a drive-local cwd was found and that it actually points
      // to our drive. If not, default to the drive's root.
      if (!path || path.substr(0, 3).toLowerCase() !==
          resolvedDevice.toLowerCase() + '\\') {
        path = resolvedDevice + '\\';
      }
    }

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    var result = win32StatPath(path),
        device = result.device,
        isUnc = result.isUnc,
        isAbsolute = result.isAbsolute,
        tail = result.tail;

    if (device &&
        resolvedDevice &&
        device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      // This path points to another device so it is not applicable
      continue;
    }

    if (!resolvedDevice) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = tail + '\\' + resolvedTail;
      resolvedAbsolute = isAbsolute;
    }

    if (resolvedDevice && resolvedAbsolute) {
      break;
    }
  }

  // Convert slashes to backslashes when `resolvedDevice` points to an UNC
  // root. Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    resolvedDevice = normalizeUNCRoot(resolvedDevice);
  }

  // At this point the path should be resolved to a full absolute path,
  // but handle relative paths to be safe (might happen when process.cwd()
  // fails)

  // Normalize the tail path
  resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/),
                                !resolvedAbsolute).join('\\');

  return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
         '.';
};


win32.normalize = function(path) {
  var result = win32StatPath(path),
      device = result.device,
      isUnc = result.isUnc,
      isAbsolute = result.isAbsolute,
      tail = result.tail,
      trailingSlash = /[\\\/]$/.test(tail);

  // Normalize the tail path
  tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join('\\');

  if (!tail && !isAbsolute) {
    tail = '.';
  }
  if (tail && trailingSlash) {
    tail += '\\';
  }

  // Convert slashes to backslashes when `device` points to an UNC root.
  // Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    device = normalizeUNCRoot(device);
  }

  return device + (isAbsolute ? '\\' : '') + tail;
};


win32.isAbsolute = function(path) {
  return win32StatPath(path).isAbsolute;
};

win32.join = function() {
  var paths = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!util.isString(arg)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (arg) {
      paths.push(arg);
    }
  }

  var joined = paths.join('\\');

  // Make sure that the joined path doesn't start with two slashes, because
  // normalize() will mistake it for an UNC path then.
  //
  // This step is skipped when it is very clear that the user actually
  // intended to point at an UNC path. This is assumed when the first
  // non-empty string arguments starts with exactly two slashes followed by
  // at least one more non-slash character.
  //
  // Note that for normalize() to treat a path as an UNC path it needs to
  // have at least 2 components, so we don't filter for that here.
  // This means that the user can use join to construct UNC paths from
  // a server name and a share name; for example:
  //   path.join('//server', 'share') -> '\\\\server\\share\')
  if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
    joined = joined.replace(/^[\\\/]{2,}/, '\\');
  }

  return win32.normalize(joined);
};


// path.relative(from, to)
// it will solve the relative path from 'from' to 'to', for instance:
// from = 'C:\\orandea\\test\\aaa'
// to = 'C:\\orandea\\impl\\bbb'
// The output of the function should be: '..\\..\\impl\\bbb'
win32.relative = function(from, to) {
  from = win32.resolve(from);
  to = win32.resolve(to);

  // windows is not case sensitive
  var lowerFrom = from.toLowerCase();
  var lowerTo = to.toLowerCase();

  var toParts = trimArray(to.split('\\'));

  var lowerFromParts = trimArray(lowerFrom.split('\\'));
  var lowerToParts = trimArray(lowerTo.split('\\'));

  var length = Math.min(lowerFromParts.length, lowerToParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (lowerFromParts[i] !== lowerToParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  if (samePartsLength == 0) {
    return to;
  }

  var outputParts = [];
  for (var i = samePartsLength; i < lowerFromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('\\');
};


win32._makeLong = function(path) {
  // Note: this will *probably* throw somewhere.
  if (!util.isString(path))
    return path;

  if (!path) {
    return '';
  }

  var resolvedPath = win32.resolve(path);

  if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
    // path is local filesystem path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\' + resolvedPath;
  } else if (/^\\\\[^?.]/.test(resolvedPath)) {
    // path is network UNC path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\UNC\\' + resolvedPath.substring(2);
  }

  return path;
};


win32.dirname = function(path) {
  var result = win32SplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


win32.basename = function(path, ext) {
  var f = win32SplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


win32.extname = function(path) {
  return win32SplitPath(path)[3];
};


win32.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir;
  var base = pathObject.base || '';
  if (!dir) {
    return base;
  }
  if (dir[dir.length - 1] === win32.sep) {
    return dir + base;
  }
  return dir + win32.sep + base;
};


win32.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


win32.sep = '\\';
win32.delimiter = ';';


// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


// path.resolve([from ...], to)
// posix version
posix.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path[0] === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(resolvedPath.split('/'),
                                !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
posix.normalize = function(path) {
  var isAbsolute = posix.isAbsolute(path),
      trailingSlash = path && path[path.length - 1] === '/';

  // Normalize the path
  path = normalizeArray(path.split('/'), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
posix.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
posix.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    var segment = arguments[i];
    if (!util.isString(segment)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (segment) {
      if (!path) {
        path += segment;
      } else {
        path += '/' + segment;
      }
    }
  }
  return posix.normalize(path);
};


// path.relative(from, to)
// posix version
posix.relative = function(from, to) {
  from = posix.resolve(from).substr(1);
  to = posix.resolve(to).substr(1);

  var fromParts = trimArray(from.split('/'));
  var toParts = trimArray(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};


posix._makeLong = function(path) {
  return path;
};


posix.dirname = function(path) {
  var result = posixSplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


posix.basename = function(path, ext) {
  var f = posixSplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


posix.extname = function(path) {
  return posixSplitPath(path)[3];
};


posix.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir ? pathObject.dir + posix.sep : '';
  var base = pathObject.base || '';
  return dir + base;
};


posix.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


posix.sep = '/';
posix.delimiter = ':';


if (isWindows)
  module.exports = win32;
else /* posix */
  module.exports = posix;

module.exports.posix = posix;
module.exports.win32 = win32;


/***/ }),

/***/ "./node_modules/postal-codes-js/formats-node.js":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats-node.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var __dirname = "/";


const path = __webpack_require__(/*! path */ "./node_modules/path/path.js");

module.exports = function getFormat(postalCodeFormat) {
    //use eval(require) to workaround webpack which can't require dynamic path
    return eval('require')(path.join(__dirname, 'formats', postalCodeFormat));
};

/***/ }),

/***/ "./node_modules/postal-codes-js/formats-web.js":
/*!*****************************************************!*\
  !*** ./node_modules/postal-codes-js/formats-web.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const formats = {};

formats["10Digits.json"] = __webpack_require__(/*! ./formats/10Digits.json */ "./node_modules/postal-codes-js/formats/10Digits.json");
formats["2Digits.json"] = __webpack_require__(/*! ./formats/2Digits.json */ "./node_modules/postal-codes-js/formats/2Digits.json");
formats["3Digits.json"] = __webpack_require__(/*! ./formats/3Digits.json */ "./node_modules/postal-codes-js/formats/3Digits.json");
formats["4Digits.json"] = __webpack_require__(/*! ./formats/4Digits.json */ "./node_modules/postal-codes-js/formats/4Digits.json");
formats["5Digits.json"] = __webpack_require__(/*! ./formats/5Digits.json */ "./node_modules/postal-codes-js/formats/5Digits.json");
formats["6Digits.json"] = __webpack_require__(/*! ./formats/6Digits.json */ "./node_modules/postal-codes-js/formats/6Digits.json");
formats["7Digits.json"] = __webpack_require__(/*! ./formats/7Digits.json */ "./node_modules/postal-codes-js/formats/7Digits.json");
formats["8Digits.json"] = __webpack_require__(/*! ./formats/8Digits.json */ "./node_modules/postal-codes-js/formats/8Digits.json");
formats["AD.json"] = __webpack_require__(/*! ./formats/AD.json */ "./node_modules/postal-codes-js/formats/AD.json");
formats["AI.json"] = __webpack_require__(/*! ./formats/AI.json */ "./node_modules/postal-codes-js/formats/AI.json");
formats["AQ.json"] = __webpack_require__(/*! ./formats/AQ.json */ "./node_modules/postal-codes-js/formats/AQ.json");
formats["AX.json"] = __webpack_require__(/*! ./formats/AX.json */ "./node_modules/postal-codes-js/formats/AX.json");
formats["AZ.json"] = __webpack_require__(/*! ./formats/AZ.json */ "./node_modules/postal-codes-js/formats/AZ.json");
formats["BB.json"] = __webpack_require__(/*! ./formats/BB.json */ "./node_modules/postal-codes-js/formats/BB.json");
formats["BH.json"] = __webpack_require__(/*! ./formats/BH.json */ "./node_modules/postal-codes-js/formats/BH.json");
formats["BL.json"] = __webpack_require__(/*! ./formats/BL.json */ "./node_modules/postal-codes-js/formats/BL.json");
formats["BN.json"] = __webpack_require__(/*! ./formats/BN.json */ "./node_modules/postal-codes-js/formats/BN.json");
formats["CA.json"] = __webpack_require__(/*! ./formats/CA.json */ "./node_modules/postal-codes-js/formats/CA.json");
formats["DK.json"] = __webpack_require__(/*! ./formats/DK.json */ "./node_modules/postal-codes-js/formats/DK.json");
formats["FK.json"] = __webpack_require__(/*! ./formats/FK.json */ "./node_modules/postal-codes-js/formats/FK.json");
formats["GB.json"] = __webpack_require__(/*! ./formats/GB.json */ "./node_modules/postal-codes-js/formats/GB.json");
formats["GF.json"] = __webpack_require__(/*! ./formats/GF.json */ "./node_modules/postal-codes-js/formats/GF.json");
formats["GG.json"] = __webpack_require__(/*! ./formats/GG.json */ "./node_modules/postal-codes-js/formats/GG.json");
formats["GI.json"] = __webpack_require__(/*! ./formats/GI.json */ "./node_modules/postal-codes-js/formats/GI.json");
formats["GP.json"] = __webpack_require__(/*! ./formats/GP.json */ "./node_modules/postal-codes-js/formats/GP.json");
formats["GS.json"] = __webpack_require__(/*! ./formats/GS.json */ "./node_modules/postal-codes-js/formats/GS.json");
formats["HN.json"] = __webpack_require__(/*! ./formats/HN.json */ "./node_modules/postal-codes-js/formats/HN.json");
formats["IE.json"] = __webpack_require__(/*! ./formats/IE.json */ "./node_modules/postal-codes-js/formats/IE.json");
formats["IM.json"] = __webpack_require__(/*! ./formats/IM.json */ "./node_modules/postal-codes-js/formats/IM.json");
formats["IO.json"] = __webpack_require__(/*! ./formats/IO.json */ "./node_modules/postal-codes-js/formats/IO.json");
formats["JE.json"] = __webpack_require__(/*! ./formats/JE.json */ "./node_modules/postal-codes-js/formats/JE.json");
formats["KY.json"] = __webpack_require__(/*! ./formats/KY.json */ "./node_modules/postal-codes-js/formats/KY.json");
formats["LB.json"] = __webpack_require__(/*! ./formats/LB.json */ "./node_modules/postal-codes-js/formats/LB.json");
formats["LC.json"] = __webpack_require__(/*! ./formats/LC.json */ "./node_modules/postal-codes-js/formats/LC.json");
formats["LT.json"] = __webpack_require__(/*! ./formats/LT.json */ "./node_modules/postal-codes-js/formats/LT.json");
formats["LU.json"] = __webpack_require__(/*! ./formats/LU.json */ "./node_modules/postal-codes-js/formats/LU.json");
formats["LV.json"] = __webpack_require__(/*! ./formats/LV.json */ "./node_modules/postal-codes-js/formats/LV.json");
formats["MC.json"] = __webpack_require__(/*! ./formats/MC.json */ "./node_modules/postal-codes-js/formats/MC.json");
formats["MD.json"] = __webpack_require__(/*! ./formats/MD.json */ "./node_modules/postal-codes-js/formats/MD.json");
formats["MF.json"] = __webpack_require__(/*! ./formats/MF.json */ "./node_modules/postal-codes-js/formats/MF.json");
formats["MS.json"] = __webpack_require__(/*! ./formats/MS.json */ "./node_modules/postal-codes-js/formats/MS.json");
formats["MT.json"] = __webpack_require__(/*! ./formats/MT.json */ "./node_modules/postal-codes-js/formats/MT.json");
formats["NC.json"] = __webpack_require__(/*! ./formats/NC.json */ "./node_modules/postal-codes-js/formats/NC.json");
formats["NL.json"] = __webpack_require__(/*! ./formats/NL.json */ "./node_modules/postal-codes-js/formats/NL.json");
formats["PF.json"] = __webpack_require__(/*! ./formats/PF.json */ "./node_modules/postal-codes-js/formats/PF.json");
formats["PL.json"] = __webpack_require__(/*! ./formats/PL.json */ "./node_modules/postal-codes-js/formats/PL.json");
formats["PM.json"] = __webpack_require__(/*! ./formats/PM.json */ "./node_modules/postal-codes-js/formats/PM.json");
formats["PN.json"] = __webpack_require__(/*! ./formats/PN.json */ "./node_modules/postal-codes-js/formats/PN.json");
formats["PT.json"] = __webpack_require__(/*! ./formats/PT.json */ "./node_modules/postal-codes-js/formats/PT.json");
formats["RE.json"] = __webpack_require__(/*! ./formats/RE.json */ "./node_modules/postal-codes-js/formats/RE.json");
formats["RU.json"] = __webpack_require__(/*! ./formats/RU.json */ "./node_modules/postal-codes-js/formats/RU.json");
formats["SH.json"] = __webpack_require__(/*! ./formats/SH.json */ "./node_modules/postal-codes-js/formats/SH.json");
formats["SM.json"] = __webpack_require__(/*! ./formats/SM.json */ "./node_modules/postal-codes-js/formats/SM.json");
formats["SO.json"] = __webpack_require__(/*! ./formats/SO.json */ "./node_modules/postal-codes-js/formats/SO.json");
formats["SZ.json"] = __webpack_require__(/*! ./formats/SZ.json */ "./node_modules/postal-codes-js/formats/SZ.json");
formats["TC.json"] = __webpack_require__(/*! ./formats/TC.json */ "./node_modules/postal-codes-js/formats/TC.json");
formats["TW.json"] = __webpack_require__(/*! ./formats/TW.json */ "./node_modules/postal-codes-js/formats/TW.json");
formats["US.json"] = __webpack_require__(/*! ./formats/US.json */ "./node_modules/postal-codes-js/formats/US.json");
formats["VA.json"] = __webpack_require__(/*! ./formats/VA.json */ "./node_modules/postal-codes-js/formats/VA.json");
formats["VC.json"] = __webpack_require__(/*! ./formats/VC.json */ "./node_modules/postal-codes-js/formats/VC.json");
formats["VE.json"] = __webpack_require__(/*! ./formats/VE.json */ "./node_modules/postal-codes-js/formats/VE.json");
formats["VG.json"] = __webpack_require__(/*! ./formats/VG.json */ "./node_modules/postal-codes-js/formats/VG.json");
formats["WF.json"] = __webpack_require__(/*! ./formats/WF.json */ "./node_modules/postal-codes-js/formats/WF.json");
formats["WS.json"] = __webpack_require__(/*! ./formats/WS.json */ "./node_modules/postal-codes-js/formats/WS.json");


module.exports = function getFormat(postalCodeFormat) {
    return formats[postalCodeFormat];
};

/***/ }),

/***/ "./node_modules/postal-codes-js/postal-codes.js":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/postal-codes.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const byAlpha2 = __webpack_require__(/*! ./generated/postal-codes-alpha2.json */ "./node_modules/postal-codes-js/generated/postal-codes-alpha2.json");
const byAlpha3 = __webpack_require__(/*! ./generated/postal-codes-alpha3.json */ "./node_modules/postal-codes-js/generated/postal-codes-alpha3.json");
const isNode = __webpack_require__(/*! detect-node */ "./node_modules/detect-node/browser.js");

var getFormat = null;
if ( isNode ) {
    getFormat = __webpack_require__(/*! ./formats-node */ "./node_modules/postal-codes-js/formats-node.js");
} else {
    getFormat = __webpack_require__(/*! ./formats-web */ "./node_modules/postal-codes-js/formats-web.js");
}

module.exports.validate = function (countryCode, postalCode) {

    if ( !countryCode ) {
        return "Missing country code.";
    }

    if ( !postalCode ) {
        return 'Missing postal code.';
    }

    var countryData = undefined;
    var preparedCountryCode = countryCode.trim().toUpperCase();

    // Is it alpha2 ?
    if ( preparedCountryCode.length == 2 ) {
        countryData = byAlpha2[preparedCountryCode];
    }

    // Is it alpha3 ?
    if ( preparedCountryCode.length == 3 ) {
        countryData = byAlpha3[preparedCountryCode];
    }

    if ( !countryData ) {
        return 'Unknown alpha2/alpha3 country code: ' + preparedCountryCode;
    }

    // If the country/region does not use postal codes
    if ( !countryData.postalCodeFormat ) {
        return true;
    }

    var format = getFormat(countryData.postalCodeFormat);
    if ( !format ) {
        return 'Failed to load postal code format "' + countryData.postalCodeFormat + '".';
    }

    var preparedPostalCode = postalCode.toString().trim().slice(0);
    for (var i = 0; i < format.RedundantCharacters.length; i++) {
        preparedPostalCode = preparedPostalCode.replace(new RegExp(format.RedundantCharacters[i], 'g'), '');
    }

    var expression = format.ValidationRegex;
    if ( expression instanceof Array ) {
        expression = '^' + expression.join('|') + '$';
    }

    const regexp = new RegExp(expression, 'i');
    var result = regexp.exec(preparedPostalCode);

    if ( !result ) {
        // Invalid postal code
        return "Postal code " + preparedPostalCode + " is not valid for country " + preparedCountryCode;
    }

    if ( result[0].toLowerCase() != preparedPostalCode.toLowerCase() ) {
        // Found "sub" match
        return "Postal code " + preparedPostalCode + " is not valid for country " + preparedCountryCode;
    }

    return true;
};


/***/ }),

/***/ "./node_modules/postcode-validator/lib/esm/main.js":
/*!*********************************************************!*\
  !*** ./node_modules/postcode-validator/lib/esm/main.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryCode": () => (/* reexport safe */ _postcode_types__WEBPACK_IMPORTED_MODULE_1__.CountryCode),
/* harmony export */   "postcodeValidator": () => (/* binding */ postcodeValidator),
/* harmony export */   "postcodeValidatorExistsForCountry": () => (/* binding */ postcodeValidatorExistsForCountry)
/* harmony export */ });
/* harmony import */ var _postcode_regexes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postcode-regexes */ "./node_modules/postcode-validator/lib/esm/postcode-regexes.js");
/* harmony import */ var _postcode_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postcode-types */ "./node_modules/postcode-validator/lib/esm/postcode-types.js");


const postcodeValidator = (postcode, country) => {
    if (!_postcode_regexes__WEBPACK_IMPORTED_MODULE_0__.POSTCODE_REGEXES.has(country)) {
        // throw Error if country code is unrecognised
        throw Error(`Invalid country code: ${country}`);
    }
    return _postcode_regexes__WEBPACK_IMPORTED_MODULE_0__.POSTCODE_REGEXES.get(country).test(postcode);
};
const postcodeValidatorExistsForCountry = (country) => {
    return _postcode_regexes__WEBPACK_IMPORTED_MODULE_0__.POSTCODE_REGEXES.has(country);
};


/***/ }),

/***/ "./node_modules/postcode-validator/lib/esm/postcode-regexes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/postcode-validator/lib/esm/postcode-regexes.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTCODE_REGEXES": () => (/* binding */ POSTCODE_REGEXES)
/* harmony export */ });
/* harmony import */ var _postcode_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postcode-types */ "./node_modules/postcode-validator/lib/esm/postcode-types.js");

// TODO: Remove CountryCode.UK in next major version release
const POSTCODE_REGEXES = new Map([
    [
        _postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.UK,
        /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
    ],
    [
        _postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GB,
        /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
    ],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.JE, /^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GG, /^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IM, /^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.US, /^([0-9]{5})(?:-([0-9]{4}))?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CA, /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IE, /^([AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.DE, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.JP, /^\d{3}-\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.FR, /^\d{2}[ ]?\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AU, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IT, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CH, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AT, /^(?!0)\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.ES, /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NL, /^\d{4}[ ]?[A-Z]{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BE, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.DK, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SE, /^(SE-)?\d{3}[ ]?\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NO, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BR, /^\d{5}[\-]?\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PT, /^\d{4}([\-]\d{3})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.FI, /^(FI-|AX-)?\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AX, /^22\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KR, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CN, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TW, /^\d{3}(\d{2})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SG, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.DZ, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AD, /^AD\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AR, /^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AM, /^(37)?\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AZ, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BH, /^((1[0-2]|[2-9])\d{2})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BD, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BB, /^(BB\d{5})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BY, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BM, /^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BA, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IO, /^BBND 1ZZ$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BN, /^[A-Z]{2}[ ]?\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.BG, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KH, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CV, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CL, /^\d{7}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CR, /^(\d{4,5}|\d{3}-\d{4})$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.HR, /^(HR-)?\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CY, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CZ, /^\d{3}[ ]?\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.DO, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.EC, /^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.EG, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.EE, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.FO, /^\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GE, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GR, /^\d{3}[ ]?\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GL, /^39\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GT, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.HT, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.HN, /^(?:\d{5})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.HU, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IS, /^\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IN, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.ID, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IL, /^\d{5,7}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.JO, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KZ, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KE, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KW, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KY, /^KY[123]-\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LA, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LV, /^(LV-)?\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LB, /^(\d{4}([ ]?\d{4})?)?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LI, /^(948[5-9])|(949[0-7])$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LT, /^(LT-)?\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LU, /^(L-)?\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MK, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MY, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MV, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MT, /^[A-Z]{3}[ ]?\d{2,4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MU, /^((\d|[A-Z])\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MX, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MD, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MC, /^980\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MA, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NP, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NZ, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NI, /^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NG, /^(\d{6})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.OM, /^(PC )?\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PA, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PK, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PY, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PH, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PL, /^\d{2}-\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PR, /^00[679]\d{2}([ \-]\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.RO, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.RU, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SM, /^4789\d$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SA, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SN, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SK, /^\d{3}[ ]?\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SI, /^(SI-)?\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.ZA, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LK, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TJ, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TH, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TN, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TR, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TM, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.UA, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.UY, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.UZ, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.VA, /^00120$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.VE, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.ZM, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.AS, /^96799$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CC, /^6799$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CK, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.RS, /^\d{5,6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.ME, /^8\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CS, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.YU, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.CX, /^6798$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.ET, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.FK, /^FIQQ 1ZZ$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NF, /^2899$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.FM, /^(9694[1-4])([ \-]\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GF, /^9[78]3\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GN, /^\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GP, /^9[78][01]\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GS, /^SIQQ 1ZZ$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GU, /^969[123]\d([ \-]\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.GW, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.HM, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.IQ, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.KG, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LR, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.LS, /^\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MG, /^\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MH, /^969[67]\d([ \-]\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MN, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MP, /^9695[012]([ \-]\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.MQ, /^9[78]2\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NC, /^988\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.NE, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.VI, /^008(([0-4]\d)|(5[01]))([ \-]\d{4})?$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.VN, /^\d{6}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PF, /^987\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PG, /^\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PM, /^9[78]5\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PN, /^PCRN 1ZZ$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.PW, /^96940$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.RE, /^9[78]4\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SH, /^(ASCN|STHL) 1ZZ$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SJ, /^\d{4}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SO, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.SZ, /^[HLMS]\d{3}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.TC, /^TKCA 1ZZ$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.WF, /^986\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.XK, /^\d{5}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.YT, /^976\d{2}$/],
    [_postcode_types__WEBPACK_IMPORTED_MODULE_0__.CountryCode.INTL, /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i],
]);


/***/ }),

/***/ "./node_modules/postcode-validator/lib/esm/postcode-types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/postcode-validator/lib/esm/postcode-types.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryCode": () => (/* binding */ CountryCode)
/* harmony export */ });
var CountryCode;
(function (CountryCode) {
    CountryCode["UK"] = "UK";
    CountryCode["GB"] = "GB";
    CountryCode["JE"] = "JE";
    CountryCode["GG"] = "GG";
    CountryCode["IM"] = "IM";
    CountryCode["US"] = "US";
    CountryCode["CA"] = "CA";
    CountryCode["IE"] = "IE";
    CountryCode["DE"] = "DE";
    CountryCode["JP"] = "JP";
    CountryCode["FR"] = "FR";
    CountryCode["AU"] = "AU";
    CountryCode["IT"] = "IT";
    CountryCode["CH"] = "CH";
    CountryCode["AT"] = "AT";
    CountryCode["ES"] = "ES";
    CountryCode["NL"] = "NL";
    CountryCode["BE"] = "BE";
    CountryCode["DK"] = "DK";
    CountryCode["SE"] = "SE";
    CountryCode["NO"] = "NO";
    CountryCode["BR"] = "BR";
    CountryCode["PT"] = "PT";
    CountryCode["FI"] = "FI";
    CountryCode["AX"] = "AX";
    CountryCode["KR"] = "KR";
    CountryCode["CN"] = "CN";
    CountryCode["TW"] = "TW";
    CountryCode["SG"] = "SG";
    CountryCode["DZ"] = "DZ";
    CountryCode["AD"] = "AD";
    CountryCode["AR"] = "AR";
    CountryCode["AM"] = "AM";
    CountryCode["AZ"] = "AZ";
    CountryCode["BH"] = "BH";
    CountryCode["BD"] = "BD";
    CountryCode["BB"] = "BB";
    CountryCode["BY"] = "BY";
    CountryCode["BM"] = "BM";
    CountryCode["BA"] = "BA";
    CountryCode["IO"] = "IO";
    CountryCode["BN"] = "BN";
    CountryCode["BG"] = "BG";
    CountryCode["KH"] = "KH";
    CountryCode["CV"] = "CV";
    CountryCode["CL"] = "CL";
    CountryCode["CR"] = "CR";
    CountryCode["HR"] = "HR";
    CountryCode["CY"] = "CY";
    CountryCode["CZ"] = "CZ";
    CountryCode["DO"] = "DO";
    CountryCode["EC"] = "EC";
    CountryCode["EG"] = "EG";
    CountryCode["EE"] = "EE";
    CountryCode["FO"] = "FO";
    CountryCode["GE"] = "GE";
    CountryCode["GR"] = "GR";
    CountryCode["GL"] = "GL";
    CountryCode["GT"] = "GT";
    CountryCode["HT"] = "HT";
    CountryCode["HN"] = "HN";
    CountryCode["HU"] = "HU";
    CountryCode["IS"] = "IS";
    CountryCode["IN"] = "IN";
    CountryCode["ID"] = "ID";
    CountryCode["IL"] = "IL";
    CountryCode["JO"] = "JO";
    CountryCode["KZ"] = "KZ";
    CountryCode["KE"] = "KE";
    CountryCode["KW"] = "KW";
    CountryCode["KY"] = "KY";
    CountryCode["LA"] = "LA";
    CountryCode["LV"] = "LV";
    CountryCode["LB"] = "LB";
    CountryCode["LI"] = "LI";
    CountryCode["LT"] = "LT";
    CountryCode["LU"] = "LU";
    CountryCode["MK"] = "MK";
    CountryCode["MY"] = "MY";
    CountryCode["MV"] = "MV";
    CountryCode["MT"] = "MT";
    CountryCode["MU"] = "MU";
    CountryCode["MX"] = "MX";
    CountryCode["MD"] = "MD";
    CountryCode["MC"] = "MC";
    CountryCode["MA"] = "MA";
    CountryCode["NP"] = "NP";
    CountryCode["NZ"] = "NZ";
    CountryCode["NI"] = "NI";
    CountryCode["NG"] = "NG";
    CountryCode["OM"] = "OM";
    CountryCode["PA"] = "PA";
    CountryCode["PK"] = "PK";
    CountryCode["PY"] = "PY";
    CountryCode["PH"] = "PH";
    CountryCode["PL"] = "PL";
    CountryCode["PR"] = "PR";
    CountryCode["RO"] = "RO";
    CountryCode["RU"] = "RU";
    CountryCode["SM"] = "SM";
    CountryCode["SA"] = "SA";
    CountryCode["SN"] = "SN";
    CountryCode["SK"] = "SK";
    CountryCode["SI"] = "SI";
    CountryCode["ZA"] = "ZA";
    CountryCode["LK"] = "LK";
    CountryCode["TJ"] = "TJ";
    CountryCode["TH"] = "TH";
    CountryCode["TN"] = "TN";
    CountryCode["TR"] = "TR";
    CountryCode["TM"] = "TM";
    CountryCode["UA"] = "UA";
    CountryCode["UY"] = "UY";
    CountryCode["UZ"] = "UZ";
    CountryCode["VA"] = "VA";
    CountryCode["VE"] = "VE";
    CountryCode["ZM"] = "ZM";
    CountryCode["AS"] = "AS";
    CountryCode["CC"] = "CC";
    CountryCode["CK"] = "CK";
    CountryCode["RS"] = "RS";
    CountryCode["ME"] = "ME";
    CountryCode["CS"] = "CS";
    CountryCode["YU"] = "YU";
    CountryCode["CX"] = "CX";
    CountryCode["ET"] = "ET";
    CountryCode["FK"] = "FK";
    CountryCode["NF"] = "NF";
    CountryCode["FM"] = "FM";
    CountryCode["GF"] = "GF";
    CountryCode["GN"] = "GN";
    CountryCode["GP"] = "GP";
    CountryCode["GS"] = "GS";
    CountryCode["GU"] = "GU";
    CountryCode["GW"] = "GW";
    CountryCode["HM"] = "HM";
    CountryCode["IQ"] = "IQ";
    CountryCode["KG"] = "KG";
    CountryCode["LR"] = "LR";
    CountryCode["LS"] = "LS";
    CountryCode["MG"] = "MG";
    CountryCode["MH"] = "MH";
    CountryCode["MN"] = "MN";
    CountryCode["MP"] = "MP";
    CountryCode["MQ"] = "MQ";
    CountryCode["NC"] = "NC";
    CountryCode["NE"] = "NE";
    CountryCode["VI"] = "VI";
    CountryCode["VN"] = "VN";
    CountryCode["PF"] = "PF";
    CountryCode["PG"] = "PG";
    CountryCode["PM"] = "PM";
    CountryCode["PN"] = "PN";
    CountryCode["PW"] = "PW";
    CountryCode["RE"] = "RE";
    CountryCode["SH"] = "SH";
    CountryCode["SJ"] = "SJ";
    CountryCode["SO"] = "SO";
    CountryCode["SZ"] = "SZ";
    CountryCode["TC"] = "TC";
    CountryCode["WF"] = "WF";
    CountryCode["XK"] = "XK";
    CountryCode["YT"] = "YT";
    CountryCode["INTL"] = "INTL";
})(CountryCode || (CountryCode = {}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(__webpack_require__.g.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "./src/formValidator.js":
/*!******************************!*\
  !*** ./src/formValidator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var postal_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postal-codes-js */ "./node_modules/postal-codes-js/postal-codes.js");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
/* harmony import */ var i18n_iso_countries_langs_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json");
/* harmony import */ var postcode_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! postcode-validator */ "./node_modules/postcode-validator/lib/esm/main.js");





class FormValidator {
  constructor() {
    this.emailLi = document.querySelector('.emailLi');
    this.passwordConfirmLi = document.querySelector('.passwordConfirmLi');
    this.passwordLi = document.querySelector('.passwordLi');
    this.zipCodeLi = document.querySelector('.zipCodeLi');
  }

  appendError(errorMsg, parentLi) {
    if (parentLi && !parentLi.errorAdded) {
      const errorMessage = document.createElement('div');
      errorMessage.innerText = errorMsg;
      errorMessage.style.color = 'red';
      parentLi.appendChild(errorMessage);
      parentLi.errorAdded = true;
    }
  }

  removeError(parentLi) {
    if (parentLi && parentLi.errorAdded) {
      const errorMessage = parentLi.querySelector('div');
      errorMessage.parentNode.removeChild(errorMessage);
      parentLi.errorAdded = false;
    }
  }

  handleValidationError(isValid, inputValue, errorMsg, parentLi) {
    if (!isValid && inputValue.length > 0) {
      this.appendError(errorMsg, parentLi);
    } else {
      this.removeError(parentLi);
    }
  }

  validateEmail(emailValue) {
    const regex = /^\S+@\S+\.\S+$/;
    const isValidEmail = regex.test(emailValue);
    this.handleValidationError(
      isValidEmail,
      emailValue,
      'Please enter a valid email address in the format name@example.com',
      this.emailLi
    );
    return isValidEmail;
  }

  validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/i;

    const isValidPassword = regex.test(password);
    this.handleValidationError(
      isValidPassword,
      password,
      'Invalid password',
      this.passwordLi
    );
    return isValidPassword;
  }

  confirmPassword(password, passwordConfirm) {
    const isMatching =
      password === passwordConfirm && passwordConfirm.length !== 0;
    this.handleValidationError(
      isMatching,
      passwordConfirm,
      'Non-matching password',
      this.passwordConfirmLi
    );
    return isMatching;
  }

  validateZipCode(countryCode, zipValue) {
    const isValidPostalCode = postcode_validator__WEBPACK_IMPORTED_MODULE_3__["default"].validate(zipValue, countryCode);
    this.handleValidationError(
      isValidPostalCode,
      zipValue,
      'Invalid postal code for the selected country',
      this.zipCodeLi
    );
    return isValidPostalCode;
  }

  validateForm(email, country, zipCode, password, passwordConfirm) {
    const invalidEmail = !this.validateEmail(email);
    const invalidZipCode = !this.validateZipCode(country, zipCode);
    const nonMatchingPassword = !this.confirmPassword(
      password,
      passwordConfirm
    );

    return {
      invalidEmail,
      invalidZipCode,
      nonMatchingPassword,
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);


/***/ }),

/***/ "./node_modules/i18n-iso-countries/codes.json":
/*!****************************************************!*\
  !*** ./node_modules/i18n-iso-countries/codes.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKX","983","ISO 3166-2:XK"]]');

/***/ }),

/***/ "./node_modules/i18n-iso-countries/langs/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/i18n-iso-countries/langs/en.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locale":"en","countries":{"AF":"Afghanistan","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":["People\'s Republic of China","China"],"CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":["Republic of the Congo","Congo"],"CD":["Democratic Republic of the Congo","Congo"],"CK":"Cook Islands","CR":"Costa Rica","CI":["Cote D\'Ivoire","Ivory Coast"],"HR":"Croatia","CU":"Cuba","CY":"Cyprus","CZ":["Czech Republic","Czechia"],"DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":["Republic of The Gambia","The Gambia","Gambia"],"GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Holy See (Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":["Islamic Republic of Iran","Iran"],"IQ":"Iraq","IE":"Ireland","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"North Korea","KR":["South Korea","Korea, Republic of","Republic of Korea"],"KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MK":["The Republic of North Macedonia","North Macedonia"],"MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":["State of Palestine","Palestine"],"PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":["Russian Federation","Russia"],"RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":["Taiwan, Province of China","Taiwan"],"TJ":"Tajikistan","TZ":["United Republic of Tanzania","Tanzania"],"TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":["Türkiye","Turkey"],"TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":["United Kingdom","UK","Great Britain"],"US":["United States of America","United States","USA"],"UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","AX":"Åland Islands","BQ":"Bonaire, Sint Eustatius and Saba","CW":"Curaçao","GG":"Guernsey","IM":"Isle of Man","JE":"Jersey","ME":"Montenegro","BL":"Saint Barthélemy","MF":"Saint Martin (French part)","RS":"Serbia","SX":"Sint Maarten (Dutch part)","SS":"South Sudan","XK":"Kosovo"}}');

/***/ }),

/***/ "./node_modules/i18n-iso-countries/supportedLocales.json":
/*!***************************************************************!*\
  !*** ./node_modules/i18n-iso-countries/supportedLocales.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["br","cy","dv","sw","eu","af","am","ha","ku","ml","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tr","uk","uz","zh"]');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/10Digits.json":
/*!************************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/10Digits.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"10-Digits - NNNNNNNNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{10}$","TestData":{"Valid":["1234567890","5678567833"],"Invalid":["12334545698","123s33s12","123456789"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/2Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/2Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"2-Digits - NN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{2}$","TestData":{"Valid":["12","56"],"Invalid":["012","1s","1","x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/3Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/3Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"3-Digits - NNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{3}$","TestData":{"Valid":["123","567"],"Invalid":["1234","13s","1x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/4Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/4Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"4-Digits - NNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{4}$","TestData":{"Valid":["1234","5678"],"Invalid":["12345","123s","12x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/5Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/5Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"5-Digits - NNNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{5}$","TestData":{"Valid":["12345","56785"],"Invalid":["123456","1233s","123x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/6Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/6Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"6-Digits - NNNNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{6}$","TestData":{"Valid":["123456","567856"],"Invalid":["1233456","123s3s","1s23x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/7Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/7Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"7-Digits - NNNNNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{7}$","TestData":{"Valid":["1234567","5678567"],"Invalid":["123345456","123s33s","1s23x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/8Digits.json":
/*!***********************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/8Digits.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"8-Digits - NNNNNNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{8}$","TestData":{"Valid":["12345678","56785678"],"Invalid":["123345456","123s33s","1s23x3"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/AD.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/AD.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"AD : CCNNN","RedundantCharacters":" -","ValidationRegex":"^AD[0-9]{3}$","TestData":{"Valid":["AD123","AD001"],"Invalid":["A1234","AD12","AD1234"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/AI.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/AI.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"AI : CC2640","RedundantCharacters":" -","ValidationRegex":"^AI2640$","TestData":{"Valid":["AI2640","AI-2640"],"Invalid":["A2640","AI02640","AI-02640"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/AQ.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/AQ.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"AQ : BIQQ 1ZZ","RedundantCharacters":" -","ValidationRegex":"^BIQQ1ZZ$","TestData":{"Valid":["BIQQ 1ZZ","BIQQ1ZZ"],"Invalid":["BIQQ1Z","BIQQ01ZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/AX.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/AX.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"AX : NNNNN, CC-NNNNN","RedundantCharacters":" -","ValidationRegex":"^(AX)?[0-9]{5}$","TestData":{"Valid":["12345","AX-12345","AX12345"],"Invalid":["AX123","A1234","AX-1234"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/AZ.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/AZ.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"AZ : CCNNNNN","RedundantCharacters":" -","ValidationRegex":"^AZ[0-9]{4}$","TestData":{"Valid":["AZ1234","AZ-1234"],"Invalid":["AZ123","A1234","AZ-12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/BB.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/BB.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"BB : CCNNNNN","RedundantCharacters":" -","ValidationRegex":"^(BB)?[0-9]{5}$","TestData":{"Valid":["BB12345","12345"],"Invalid":["x1231s","1231sd"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/BH.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/BH.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"BH : NNN, NNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{3,4}$","TestData":{"Valid":["123","1234"],"Invalid":["12","12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/BL.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/BL.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"BL : 97133","RedundantCharacters":" -","ValidationRegex":"^97133$","TestData":{"Valid":["97133"],"Invalid":["971330","9713"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/BN.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/BN.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"BN : LLNNNN","RedundantCharacters":" -","ValidationRegex":"^[a-zA-Z]{2}[0-9]{4}$","TestData":{"Valid":["AB1234","tK0987"],"Invalid":["abc123","a12345","at123","BH12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/CA.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/CA.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"CA : A0A 0A0","RedundantCharacters":" -","ValidationRegex":"^[ABCEGHJKLMNPRSTVXY]\\\\d[ABCEGHJ-NPRSTV-Z][\\\\s\\\\-]?\\\\d[ABCEGHJ-NPRSTV-Z]\\\\d$","TestData":{"Valid":["A4B5X5","A4B5A5"],"Invalid":["123AAA","12A5AA"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/DK.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/DK.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"DK","RedundantCharacters":" -","ValidationRegex":"^(DK){0,1}\\\\d{4}$","TestData":{"Valid":["1124","DK1054","DK-1120","DK1120","DK 1125","DK - 1234","dk-1123"],"Invalid":["1125DK","DK12345","DK123","123",""]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/FK.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/FK.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"FK : FIQQ 1ZZ","RedundantCharacters":" -","ValidationRegex":"^FIQQ1ZZ$","TestData":{"Valid":["FIQQ 1ZZ","FIQQ1ZZ"],"Invalid":["FIQQ01ZZ","FIQQ1ZZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/GB.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/GB.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"GB","RedundantCharacters":" -","ValidationRegex":"((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})|GIR0AA","ValidationRegex.DOC":"https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf","TestData":{"Valid":["CW3 9SS","SE5 0EG","SE50EG","WC2H 7LT","se5 0eg","Z29ZZ","Z699ZZ","ZX99ZZ","ZC999ZZ","EC1A 1BB","W1A 0AX","M1 1AE","B33 8TH","CR2 6XH","DN55 1PT","GIR 0AA","W1U 1BW","SK8 7NA"],"Invalid":["WC2H 7LTa","WC2H"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/GF.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/GF.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"GF : 973NN","RedundantCharacters":" -","ValidationRegex":"^973[0-9]{2}$","TestData":{"Valid":["97300","97390"],"Invalid":["9732","973999","97290","097390"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/GG.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/GG.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"GG","RedundantCharacters":" -","ValidationRegex":"^GY[0-9]{2,3}[A-Za-z]{2}$","TestData":{"Valid":["GY1 1AA","GY111AA"],"Invalid":["CW3 9SS","GG1 1AA","SE5 0EG","SE50EG","WC2H 7LTa","WC2H"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/GI.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/GI.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"GI : GX11 1AA","RedundantCharacters":" -","ValidationRegex":"^GX111AA$","TestData":{"Valid":["GX111AA","GX11 1AA"],"Invalid":["GX1101AA","GX111AAA"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/GP.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/GP.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"GP : 971NN","RedundantCharacters":" -","ValidationRegex":"^971[0-9]{2}$","TestData":{"Valid":["97100","97190"],"Invalid":["9712","971999","97290","097190"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/GS.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/GS.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"GS : SIQQ 1ZZ","RedundantCharacters":" -","ValidationRegex":"^SIQQ1ZZ$","TestData":{"Valid":["SIQQ 1ZZ","SIqq 1zz","SIQQ1ZZ"],"Invalid":["SIQQ01ZZ","SIQQ1ZZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/HN.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/HN.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"HN : CCNNNNN","RedundantCharacters":" -","ValidationRegex":"^(HN)?[0-9]{5}$","TestData":{"Valid":["HN12345","12345"],"Invalid":["123456","HN123456","HN1234"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/IE.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/IE.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"IE","RedundantCharacters":"","ValidationRegex":"^[AaC-Fc-fHhKkNnPpRrTtV-Yv-y]\\\\d[0-9Ww][ -]?[0-9AaC-Fc-fHhKkNnPpRrTtV-Yv-y]{4}$","ValidationRegex.DOC":"https://www.eircode.ie/docs/default-source/Common/prepareyourbusinessforeircode-edition3published.pdf?sfvrsn=2","TestData":{"Valid":["D6W1234","A23 0984","D00-AV92","y631fhk","a00 0000","d44-n4x4","A65F4E2"],"Invalid":["D6Z1234","y63  1fhk"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/IM.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/IM.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"IM","RedundantCharacters":" -","ValidationRegex":"^IM[0-9]{2,3}[A-Za-z]{2}$","TestData":{"Valid":["IM1 1AA","IM111AA"],"Invalid":["CW3 9SS","SE5 0EG","SE50EG","WC2H 7LTa","WC2H"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/IO.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/IO.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"IO : BBND 1ZZ","RedundantCharacters":" -","ValidationRegex":"^BBND1ZZ$","TestData":{"Valid":["BBND 1ZZ","BBND1ZZ"],"Invalid":["BBND01ZZ","BBND1ZZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/JE.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/JE.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"JE","RedundantCharacters":" -","ValidationRegex":"^JE[0-9]{2,3}[A-Za-z]{2}$","TestData":{"Valid":["JE1 1AA","JE111AA"],"Invalid":["CW3 9SS","SE5 0EG","SE50EG","WC2H 7LTa","WC2H"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/KY.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/KY.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"KY : CCN-NNNN","RedundantCharacters":" -","ValidationRegex":"^KY[0-9]{5}$","TestData":{"Valid":["KY1-1234","KY12345"],"Invalid":["KY1234","KY123456","K1-1234"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/LB.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/LB.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"LB : NNNNN, NNNN NNNN","RedundantCharacters":" -","ValidationRegex":"^[0-9]{4}(?:[0-9]{4})?$","TestData":{"Valid":["1234","1234 1234","12341234"],"Invalid":["123","1234567","123456789"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/LC.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/LC.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"LC : CCNN NNN","RedundantCharacters":" -","ValidationRegex":"^LC[0-9]{5}$","TestData":{"Valid":["LC12 345","LC12345"],"Invalid":["12345","x1231s","1231sd"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/LT.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/LT.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"LT : LT-NNNNN","RedundantCharacters":" -","ValidationRegex":"^(LT)?[0-9]{5}$","TestData":{"Valid":["12345","LT12345","LT-12345"],"Invalid":["1234","123456","LT-1234"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/LU.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/LU.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"LU","RedundantCharacters":" -","ValidationRegex":"^(L){0,1}\\\\d{4}$","TestData":{"Valid":["1124","L1054","L-1120","L1120","L 1125","L - 1234","l-1123"],"Invalid":["1125L","L12345","L123","123",""]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/LV.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/LV.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"LV : NNNNN, CC-NNNNN","RedundantCharacters":" -","ValidationRegex":"^(LV)?[0-9]{4}$","TestData":{"Valid":["1234","LV-1234","LV1234"],"Invalid":["LV123","L1234","LV-12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/MC.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/MC.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"MC : 980NN","RedundantCharacters":" -","ValidationRegex":"^980[0-9]{2}$","TestData":{"Valid":["98000","98099"],"Invalid":["98100","97099"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/MD.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/MD.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"MD : CCNNNN, CC-NNNN","RedundantCharacters":" -","ValidationRegex":"^(MD)?[0-9]{4}$","TestData":{"Valid":["1234","MD1234","MD-1234"],"Invalid":["MD123","M1234","MD-12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/MF.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/MF.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"MF : 97150","RedundantCharacters":" -","ValidationRegex":"^97150$","TestData":{"Valid":["97150"],"Invalid":["971500","9715"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/MS.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/MS.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"MS : MSR NNNN","RedundantCharacters":" -","ValidationRegex":"^(MSR)?[0-9]{4}$","TestData":{"Valid":["MSR 1110","MSR 1350","1350"],"Invalid":["MS1110","MSR01350","12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/MT.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/MT.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"MA : LLL NNNN","RedundantCharacters":" -","ValidationRegex":"^[A-Z]{3}[0-9]{4}$","TestData":{"Valid":["abc1234","ABC1234","SHD4783"],"Invalid":["ABCABC","123ABCD"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/NC.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/NC.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"NC : 988NN","RedundantCharacters":" -","ValidationRegex":"^988[0-9]{2}$","TestData":{"Valid":["98800","98890"],"Invalid":["9882","988999","98990","098890"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/NL.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/NL.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"NL : NNNN LL","RedundantCharacters":" -","ValidationRegex":"^[1-9][0-9]{3}(?!SA|SD|SS)[A-Z]{2}$","TestData":{"Valid":["1235DF","5983DH","1000 AP"],"Invalid":["1235D","12j4h","k3j51l","1945SS"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/PF.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/PF.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"PF : 987NN","RedundantCharacters":" -","ValidationRegex":"^987[0-9]{2}$","TestData":{"Valid":["98700","98790"],"Invalid":["9872","987999","98690","098790"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/PL.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/PL.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"PL : 99-999","RedundantCharacters":" ","ValidationRegex":"^[0-9]{2}-[0-9]{3}$","TestData":{"Valid":["44-100 ","44-100"],"Invalid":["44100","44f00","e4410","44-100d","c44-100","b44100","44100a"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/PM.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/PM.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"PM : 97500","RedundantCharacters":" -","ValidationRegex":"^97500$","TestData":{"Valid":["97500"],"Invalid":["975000","9750"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/PN.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/PN.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"PN : PCRN 1ZZ","RedundantCharacters":" -","ValidationRegex":"^PCRN1ZZ$","TestData":{"Valid":["PCRN 1ZZ","PCRN1ZZ"],"Invalid":["PCRN01ZZ","PCRN1ZZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/PT.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/PT.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"PT : NNNN-NNN","RedundantCharacters":" ","ValidationRegex":"^[0-9]{4}-[0-9]{3}$","TestData":{"Valid":["1234-123"],"Invalid":["1255","1234567","1234 123","x1231s","1231sd","1010101010","1234 12"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/RE.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/RE.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"RE : 974NN","RedundantCharacters":" -","ValidationRegex":"^974[0-9]{2}$","TestData":{"Valid":["97400","97490"],"Invalid":["9742","974999","97390","097490"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/RU.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/RU.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"RU : NNN[-NNN]","RedundantCharacters":" -","ValidationRegex":"^[0-9]{3}([0-9]{3})?$","TestData":{"Valid":["125","123456"],"Invalid":["x1231s","1231sd","1010101010"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/SH.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/SH.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"SH : STHL 1ZZ","RedundantCharacters":" -","ValidationRegex":"^STHL1ZZ$","TestData":{"Valid":["STHL 1ZZ","STHL1ZZ"],"Invalid":["STHL01ZZ","STHL1ZZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/SM.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/SM.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"SM : 4789N","RedundantCharacters":" -","ValidationRegex":"^4789[0-9]{1}$","TestData":{"Valid":["47890","47899"],"Invalid":["4789","478900","47889"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/SO.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/SO.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"SO : AA NNNNN","RedundantCharacters":" -","ValidationRegex":"^[a-zA-Z]{2}[0-9]{5}$","TestData":{"Valid":["AW12345","BN47899"],"Invalid":["12345","A12345","SL123456"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/SZ.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/SZ.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"SZ : ANNN","RedundantCharacters":" -","ValidationRegex":"^[a-zA-Z]{1}[0-9]{3}$","TestData":{"Valid":["S123","a789"],"Invalid":["F1234","D12"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/TC.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/TC.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"TC : TKCA 1ZZ","RedundantCharacters":" -","ValidationRegex":"^TKCA1ZZ$","TestData":{"Valid":["TKCA1ZZ","TKCA 1ZZ"],"Invalid":["TKCA01ZZ","TKCA1ZZZ"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/TW.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/TW.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"TW : NNN[-NN]","RedundantCharacters":" -","ValidationRegex":"^[0-9]{3}([0-9]{2})?$","TestData":{"Valid":["123","123-45","12345"],"Invalid":["12","1234","101010"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/US.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/US.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"US : NNNNN[-NNNN]","RedundantCharacters":" -","ValidationRegex":"^[0-9]{5}([0-9]{4})?$","TestData":{"Valid":["12345","12345-7689"],"Invalid":["x1231s","1231sd","1010101010"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/VA.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/VA.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"VA : 00120","RedundantCharacters":" -","ValidationRegex":"^00120$","TestData":{"Valid":["00120"],"Invalid":["0012","001200"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/VC.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/VC.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"VC : CCNNNNN","RedundantCharacters":" -","ValidationRegex":"^(VC)?[0-9]{4}$","TestData":{"Valid":["1234","VC1234","VC-1234"],"Invalid":["VC123","V1234","VC-12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/VE.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/VE.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"VE : NNNN, NNNN-A","RedundantCharacters":" -","ValidationRegex":"^[0-9]{4}[a-zA-Z]?$","TestData":{"Valid":["1234","1234-A"],"Invalid":["123","1234AA"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/VG.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/VG.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"VG : CCNNNN","RedundantCharacters":" -","ValidationRegex":"^(VG)?[0-9]{4}$","TestData":{"Valid":["1234","VG1234","VG-1234"],"Invalid":["VG123","V1234","VG-12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/WF.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/WF.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"WF : 986NN","RedundantCharacters":" -","ValidationRegex":"^986[0-9]{2}$","TestData":{"Valid":["98600","98690"],"Invalid":["9862","986999","98990","098690"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/formats/WS.json":
/*!******************************************************!*\
  !*** ./node_modules/postal-codes-js/formats/WS.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Description":"WS : CCNNNNN","RedundantCharacters":" -","ValidationRegex":"^(WS)?[0-9]{4}$","TestData":{"Valid":["1234","WS1234","WS-1234"],"Invalid":["WS123","V1234","WS-12345"]}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/generated/postal-codes-alpha2.json":
/*!*************************************************************************!*\
  !*** ./node_modules/postal-codes-js/generated/postal-codes-alpha2.json ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AF":{"countryName":"Afghanistan","postalCodeFormat":"4Digits.json","alpha2":"AF","alpha3":"AFG","numeric3":"4"},"AX":{"countryName":"Aland Islands","postalCodeFormat":"AX.json","alpha2":"AX","alpha3":"ALA","numeric3":"248"},"AL":{"countryName":"Albania","postalCodeFormat":"4Digits.json","alpha2":"AL","alpha3":"ALB","numeric3":"8"},"DZ":{"countryName":"Algeria","postalCodeFormat":"5Digits.json","alpha2":"DZ","alpha3":"DZA","numeric3":"12"},"AS":{"countryName":"American Samoa","postalCodeFormat":"5Digits.json","alpha2":"AS","alpha3":"ASM","numeric3":"16"},"AD":{"countryName":"Andorra","postalCodeFormat":"AD.json","alpha2":"AD","alpha3":"AND","numeric3":"20"},"AO":{"countryName":"Angola","alpha2":"AO","alpha3":"AGO","numeric3":"24"},"AI":{"countryName":"Anguilla","postalCodeFormat":"AI.json","alpha2":"AI","alpha3":"AIA","numeric3":"660"},"AQ":{"countryName":"Antarctica","postalCodeFormat":"AQ.json","alpha2":"AQ","alpha3":"ATA","numeric3":"10"},"AG":{"countryName":"Antigua and Barbuda","alpha2":"AG","alpha3":"ATG","numeric3":"28"},"AR":{"countryName":"Argentina","postalCodeFormat":"4Digits.json","alpha2":"AR","alpha3":"ARG","numeric3":"32"},"AM":{"countryName":"Armenia","postalCodeFormat":"4Digits.json","alpha2":"AM","alpha3":"ARM","numeric3":"51"},"AW":{"countryName":"Aruba","alpha2":"AW","alpha3":"ABW","numeric3":"533"},"AU":{"countryName":"Australia","postalCodeFormat":"4Digits.json","alpha2":"AU","alpha3":"AUS","numeric3":"36"},"AT":{"countryName":"Austria","postalCodeFormat":"4Digits.json","alpha2":"AT","alpha3":"AUT","numeric3":"40"},"AZ":{"countryName":"Azerbaijan","postalCodeFormat":"AZ.json","alpha2":"AZ","alpha3":"AZE","numeric3":"31"},"BS":{"countryName":"Bahamas","alpha2":"BS","alpha3":"BHS","numeric3":"44"},"BH":{"countryName":"Bahrain","postalCodeFormat":"BH.json","alpha2":"BH","alpha3":"BHR","numeric3":"48"},"BD":{"countryName":"Bangladesh","postalCodeFormat":"4Digits.json","alpha2":"BD","alpha3":"BGD","numeric3":"50"},"BB":{"countryName":"Barbados","postalCodeFormat":"BB.json","alpha2":"BB","alpha3":"BRB","numeric3":"52"},"BY":{"countryName":"Belarus","postalCodeFormat":"6Digits.json","alpha2":"BY","alpha3":"BLR","numeric3":"112"},"BE":{"countryName":"Belgium","postalCodeFormat":"4Digits.json","alpha2":"BE","alpha3":"BEL","numeric3":"56"},"BZ":{"countryName":"Belize","alpha2":"BZ","alpha3":"BLZ","numeric3":"84"},"BJ":{"countryName":"Benin","alpha2":"BJ","alpha3":"BEN","numeric3":"204"},"BM":{"countryName":"Bermuda","alpha2":"BM","alpha3":"BMU","numeric3":"60"},"BT":{"countryName":"Bhutan","postalCodeFormat":"5Digits.json","alpha2":"BT","alpha3":"BTN","numeric3":"64"},"BO":{"countryName":"Bolivia","postalCodeFormat":"4Digits.json","alpha2":"BO","alpha3":"BOL","numeric3":"68"},"BA":{"countryName":"Bosnia and Herzegovina","postalCodeFormat":"5Digits.json","alpha2":"BA","alpha3":"BIH","numeric3":"70"},"BW":{"countryName":"Botswana","alpha2":"BW","alpha3":"BWA","numeric3":"72"},"BV":{"countryName":"Bouvet Island","alpha2":"BV","alpha3":"BVT","numeric3":"74"},"BR":{"countryName":"Brazil","postalCodeFormat":"8Digits.json","alpha2":"BR","alpha3":"BRA","numeric3":"76"},"VG":{"countryName":"British Virgin Islands","postalCodeFormat":"VG.json","alpha2":"VG","alpha3":"VGB","numeric3":"92"},"IO":{"countryName":"British Indian Ocean Territory","postalCodeFormat":"IO.json","alpha2":"IO","alpha3":"IOT","numeric3":"86"},"BN":{"countryName":"Brunei Darussalam","postalCodeFormat":"BN.json","alpha2":"BN","alpha3":"BRN","numeric3":"96"},"BG":{"countryName":"Bulgaria","postalCodeFormat":"4Digits.json","alpha2":"BG","alpha3":"BGR","numeric3":"100"},"BF":{"countryName":"Burkina Faso","alpha2":"BF","alpha3":"BFA","numeric3":"854"},"BI":{"countryName":"Burundi","alpha2":"BI","alpha3":"BDI","numeric3":"108"},"KH":{"countryName":"Cambodia","postalCodeFormat":"5Digits.json","alpha2":"KH","alpha3":"KHM","numeric3":"116"},"CM":{"countryName":"Cameroon","alpha2":"CM","alpha3":"CMR","numeric3":"120"},"CA":{"countryName":"Canada","postalCodeFormat":"CA.json","alpha2":"CA","alpha3":"CAN","numeric3":"124"},"CV":{"countryName":"Cape Verde","postalCodeFormat":"4Digits.json","alpha2":"CV","alpha3":"CPV","numeric3":"132"},"KY":{"countryName":"Cayman Islands","postalCodeFormat":"KY.json","alpha2":"KY","alpha3":"CYM","numeric3":"136"},"CF":{"countryName":"Central African Republic","alpha2":"CF","alpha3":"CAF","numeric3":"140"},"TD":{"countryName":"Chad","postalCodeFormat":"5Digits.json","alpha2":"TD","alpha3":"TCD","numeric3":"148"},"CL":{"countryName":"Chile","postalCodeFormat":"7Digits.json","alpha2":"CL","alpha3":"CHL","numeric3":"152"},"CN":{"countryName":"China","postalCodeFormat":"6Digits.json","alpha2":"CN","alpha3":"CHN","numeric3":"156"},"HK":{"countryName":"Hong Kong, Special Administrative Region of China","alpha2":"HK","alpha3":"HKG","numeric3":"344"},"MO":{"countryName":"Macao, Special Administrative Region of China","alpha2":"MO","alpha3":"MAC","numeric3":"446"},"CX":{"countryName":"Christmas Island","postalCodeFormat":"4Digits.json","alpha2":"CX","alpha3":"CXR","numeric3":"162"},"CC":{"countryName":"Cocos (Keeling) Islands","postalCodeFormat":"4Digits.json","alpha2":"CC","alpha3":"CCK","numeric3":"166"},"CO":{"countryName":"Colombia","postalCodeFormat":"6Digits.json","alpha2":"CO","alpha3":"COL","numeric3":"170"},"KM":{"countryName":"Comoros","alpha2":"KM","alpha3":"COM","numeric3":"174"},"CG":{"countryName":"Congo (Brazzaville)","alpha2":"CG","alpha3":"COG","numeric3":"178"},"CD":{"countryName":"Congo, Democratic Republic of the","alpha2":"CD","alpha3":"COD","numeric3":"180"},"CK":{"countryName":"Cook Islands","alpha2":"CK","alpha3":"COK","numeric3":"184"},"CR":{"countryName":"Costa Rica","postalCodeFormat":"5Digits.json","alpha2":"CR","alpha3":"CRI","numeric3":"188"},"CI":{"countryName":"Côte d\'Ivoire","alpha2":"CI","alpha3":"CIV","numeric3":"384"},"HR":{"countryName":"Croatia","postalCodeFormat":"5Digits.json","alpha2":"HR","alpha3":"HRV","numeric3":"191"},"CU":{"countryName":"Cuba","postalCodeFormat":"5Digits.json","alpha2":"CU","alpha3":"CUB","numeric3":"192"},"CY":{"countryName":"Cyprus","postalCodeFormat":"4Digits.json","alpha2":"CY","alpha3":"CYP","numeric3":"196"},"CZ":{"countryName":"Czech Republic","postalCodeFormat":"5Digits.json","alpha2":"CZ","alpha3":"CZE","numeric3":"203"},"DK":{"countryName":"Denmark","postalCodeFormat":"DK.json","alpha2":"DK","alpha3":"DNK","numeric3":"208"},"DJ":{"countryName":"Djibouti","alpha2":"DJ","alpha3":"DJI","numeric3":"262"},"DM":{"countryName":"Dominica","alpha2":"DM","alpha3":"DMA","numeric3":"212"},"DO":{"countryName":"Dominican Republic","postalCodeFormat":"5Digits.json","alpha2":"DO","alpha3":"DOM","numeric3":"214"},"EC":{"countryName":"Ecuador","postalCodeFormat":"6Digits.json","alpha2":"EC","alpha3":"ECU","numeric3":"218"},"EG":{"countryName":"Egypt","postalCodeFormat":"5Digits.json","alpha2":"EG","alpha3":"EGY","numeric3":"818"},"SV":{"countryName":"El Salvador","postalCodeFormat":"4Digits.json","alpha2":"SV","alpha3":"SLV","numeric3":"222"},"GQ":{"countryName":"Equatorial Guinea","alpha2":"GQ","alpha3":"GNQ","numeric3":"226"},"ER":{"countryName":"Eritrea","alpha2":"ER","alpha3":"ERI","numeric3":"232"},"EE":{"countryName":"Estonia","postalCodeFormat":"5Digits.json","alpha2":"EE","alpha3":"EST","numeric3":"233"},"ET":{"countryName":"Ethiopia","postalCodeFormat":"4Digits.json","alpha2":"ET","alpha3":"ETH","numeric3":"231"},"FK":{"countryName":"Falkland Islands (Malvinas)","postalCodeFormat":"FK.json","alpha2":"FK","alpha3":"FLK","numeric3":"238"},"FO":{"countryName":"Faroe Islands","postalCodeFormat":"3Digits.json","alpha2":"FO","alpha3":"FRO","numeric3":"234"},"FJ":{"countryName":"Fiji","alpha2":"FJ","alpha3":"FJI","numeric3":"242"},"FI":{"countryName":"Finland","postalCodeFormat":"5Digits.json","alpha2":"FI","alpha3":"FIN","numeric3":"246"},"FR":{"countryName":"France","postalCodeFormat":"5Digits.json","alpha2":"FR","alpha3":"FRA","numeric3":"250"},"GF":{"countryName":"French Guiana","postalCodeFormat":"GF.json","alpha2":"GF","alpha3":"GUF","numeric3":"254"},"PF":{"countryName":"French Polynesia","postalCodeFormat":"PF.json","alpha2":"PF","alpha3":"PYF","numeric3":"258"},"TF":{"countryName":"French Southern Territories","alpha2":"TF","alpha3":"ATF","numeric3":"260"},"GA":{"countryName":"Gabon","alpha2":"GA","alpha3":"GAB","numeric3":"266"},"GM":{"countryName":"Gambia","alpha2":"GM","alpha3":"GMB","numeric3":"270"},"GE":{"countryName":"Georgia","postalCodeFormat":"4Digits.json","alpha2":"GE","alpha3":"GEO","numeric3":"268"},"DE":{"countryName":"Germany","postalCodeFormat":"5Digits.json","alpha2":"DE","alpha3":"DEU","numeric3":"276"},"GH":{"countryName":"Ghana","alpha2":"GH","alpha3":"GHA","numeric3":"288"},"GI":{"countryName":"Gibraltar","postalCodeFormat":"GI.json","alpha2":"GI","alpha3":"GIB","numeric3":"292"},"GR":{"countryName":"Greece","postalCodeFormat":"5Digits.json","alpha2":"GR","alpha3":"GRC","numeric3":"300"},"GL":{"countryName":"Greenland","postalCodeFormat":"4Digits.json","alpha2":"GL","alpha3":"GRL","numeric3":"304"},"GD":{"countryName":"Grenada","alpha2":"GD","alpha3":"GRD","numeric3":"308"},"GP":{"countryName":"Guadeloupe","postalCodeFormat":"GP.json","alpha2":"GP","alpha3":"GLP","numeric3":"312"},"GU":{"countryName":"Guam","postalCodeFormat":"US.json","alpha2":"GU","alpha3":"GUM","numeric3":"316"},"GT":{"countryName":"Guatemala","postalCodeFormat":"5Digits.json","alpha2":"GT","alpha3":"GTM","numeric3":"320"},"GG":{"countryName":"Guernsey","postalCodeFormat":"GG.json","alpha2":"GG","alpha3":"GGY","numeric3":"831"},"GN":{"countryName":"Guinea","postalCodeFormat":"3Digits.json","alpha2":"GN","alpha3":"GIN","numeric3":"324"},"GW":{"countryName":"Guinea-Bissau","postalCodeFormat":"4Digits.json","alpha2":"GW","alpha3":"GNB","numeric3":"624"},"GY":{"countryName":"Guyana","alpha2":"GY","alpha3":"GUY","numeric3":"328"},"HT":{"countryName":"Haiti","postalCodeFormat":"4Digits.json","alpha2":"HT","alpha3":"HTI","numeric3":"332"},"HM":{"countryName":"Heard Island and Mcdonald Islands","postalCodeFormat":"4Digits.json","alpha2":"HM","alpha3":"HMD","numeric3":"334"},"VA":{"countryName":"Holy See (Vatican City State)","postalCodeFormat":"VA.json","alpha2":"VA","alpha3":"VAT","numeric3":"336"},"HN":{"countryName":"Honduras","postalCodeFormat":"HN.json","alpha2":"HN","alpha3":"HND","numeric3":"340"},"HU":{"countryName":"Hungary","postalCodeFormat":"4Digits.json","alpha2":"HU","alpha3":"HUN","numeric3":"348"},"IS":{"countryName":"Iceland","postalCodeFormat":"3Digits.json","alpha2":"IS","alpha3":"ISL","numeric3":"352"},"IN":{"countryName":"India","postalCodeFormat":"6Digits.json","alpha2":"IN","alpha3":"IND","numeric3":"356"},"IC":{"countryName":"Canary Islands","postalCodeFormat":"5Digits.json","alpha2":"IC","alpha3":"","numeric3":""},"ID":{"countryName":"Indonesia","postalCodeFormat":"5Digits.json","alpha2":"ID","alpha3":"IDN","numeric3":"360"},"IR":{"countryName":"Iran, Islamic Republic of","postalCodeFormat":"10Digits.json","alpha2":"IR","alpha3":"IRN","numeric3":"364"},"IQ":{"countryName":"Iraq","postalCodeFormat":"5Digits.json","alpha2":"IQ","alpha3":"IRQ","numeric3":"368"},"IE":{"countryName":"Ireland","postalCodeFormat":"IE.json","alpha2":"IE","alpha3":"IRL","numeric3":"372"},"IM":{"countryName":"Isle of Man","postalCodeFormat":"IM.json","alpha2":"IM","alpha3":"IMN","numeric3":"833"},"IL":{"countryName":"Israel","postalCodeFormat":"7Digits.json","alpha2":"IL","alpha3":"ISR","numeric3":"376"},"IT":{"countryName":"Italy","postalCodeFormat":"5Digits.json","alpha2":"IT","alpha3":"ITA","numeric3":"380"},"JM":{"countryName":"Jamaica","postalCodeFormat":"2Digits.json","alpha2":"JM","alpha3":"JAM","numeric3":"388"},"JP":{"countryName":"Japan","postalCodeFormat":"7Digits.json","alpha2":"JP","alpha3":"JPN","numeric3":"392"},"JE":{"countryName":"Jersey","postalCodeFormat":"JE.json","alpha2":"JE","alpha3":"JEY","numeric3":"832"},"JO":{"countryName":"Jordan","postalCodeFormat":"5Digits.json","alpha2":"JO","alpha3":"JOR","numeric3":"400"},"KZ":{"countryName":"Kazakhstan","postalCodeFormat":"6Digits.json","alpha2":"KZ","alpha3":"KAZ","numeric3":"398"},"KE":{"countryName":"Kenya","postalCodeFormat":"5Digits.json","alpha2":"KE","alpha3":"KEN","numeric3":"404"},"KI":{"countryName":"Kiribati","alpha2":"KI","alpha3":"KIR","numeric3":"296"},"KP":{"countryName":"Korea, Democratic People\'s Republic of","alpha2":"KP","alpha3":"PRK","numeric3":"408"},"KR":{"countryName":"Korea, Republic of","postalCodeFormat":"5Digits.json","alpha2":"KR","alpha3":"KOR","numeric3":"410"},"KW":{"countryName":"Kuwait","postalCodeFormat":"5Digits.json","alpha2":"KW","alpha3":"KWT","numeric3":"414"},"KG":{"countryName":"Kyrgyzstan","postalCodeFormat":"6Digits.json","alpha2":"KG","alpha3":"KGZ","numeric3":"417"},"LA":{"countryName":"Lao PDR","postalCodeFormat":"5Digits.json","alpha2":"LA","alpha3":"LAO","numeric3":"418"},"LV":{"countryName":"Latvia","postalCodeFormat":"LV.json","alpha2":"LV","alpha3":"LVA","numeric3":"428"},"LB":{"countryName":"Lebanon","postalCodeFormat":"LB.json","alpha2":"LB","alpha3":"LBN","numeric3":"422"},"LS":{"countryName":"Lesotho","postalCodeFormat":"3Digits.json","alpha2":"LS","alpha3":"LSO","numeric3":"426"},"LR":{"countryName":"Liberia","postalCodeFormat":"4Digits.json","alpha2":"LR","alpha3":"LBR","numeric3":"430"},"LY":{"countryName":"Libya","postalCodeFormat":"5Digits.json","alpha2":"LY","alpha3":"LBY","numeric3":"434"},"LI":{"countryName":"Liechtenstein","postalCodeFormat":"4Digits.json","alpha2":"LI","alpha3":"LIE","numeric3":"438"},"LT":{"countryName":"Lithuania","postalCodeFormat":"LT.json","alpha2":"LT","alpha3":"LTU","numeric3":"440"},"LU":{"countryName":"Luxembourg","postalCodeFormat":"LU.json","alpha2":"LU","alpha3":"LUX","numeric3":"442"},"MK":{"countryName":"Macedonia, Republic of","postalCodeFormat":"4Digits.json","alpha2":"MK","alpha3":"MKD","numeric3":"807"},"MG":{"countryName":"Madagascar","postalCodeFormat":"3Digits.json","alpha2":"MG","alpha3":"MDG","numeric3":"450"},"MW":{"countryName":"Malawi","alpha2":"MW","alpha3":"MWI","numeric3":"454"},"MY":{"countryName":"Malaysia","postalCodeFormat":"5Digits.json","alpha2":"MY","alpha3":"MYS","numeric3":"458"},"MV":{"countryName":"Maldives","postalCodeFormat":"5Digits.json","alpha2":"MV","alpha3":"MDV","numeric3":"462"},"ML":{"countryName":"Mali","alpha2":"ML","alpha3":"MLI","numeric3":"466"},"MT":{"countryName":"Malta","postalCodeFormat":"MT.json","alpha2":"MT","alpha3":"MLT","numeric3":"470"},"MH":{"countryName":"Marshall Islands","postalCodeFormat":"US.json","alpha2":"MH","alpha3":"MHL","numeric3":"584"},"MQ":{"countryName":"Martinique","postalCodeFormat":"5Digits.json","alpha2":"MQ","alpha3":"MTQ","numeric3":"474"},"MR":{"countryName":"Mauritania","alpha2":"MR","alpha3":"MRT","numeric3":"478"},"MU":{"countryName":"Mauritius","postalCodeFormat":"5Digits.json","alpha2":"MU","alpha3":"MUS","numeric3":"480"},"YT":{"countryName":"Mayotte","postalCodeFormat":"5Digits.json","alpha2":"YT","alpha3":"MYT","numeric3":"175"},"MX":{"countryName":"Mexico","postalCodeFormat":"5Digits.json","alpha2":"MX","alpha3":"MEX","numeric3":"484"},"FM":{"countryName":"Micronesia, Federated States of","postalCodeFormat":"US.json","alpha2":"FM","alpha3":"FSM","numeric3":"583"},"MD":{"countryName":"Moldova","postalCodeFormat":"MD.json","alpha2":"MD","alpha3":"MDA","numeric3":"498"},"MC":{"countryName":"Monaco","postalCodeFormat":"MC.json","alpha2":"MC","alpha3":"MCO","numeric3":"492"},"MN":{"countryName":"Mongolia","postalCodeFormat":"5Digits.json","alpha2":"MN","alpha3":"MNG","numeric3":"496"},"ME":{"countryName":"Montenegro","postalCodeFormat":"5Digits.json","alpha2":"ME","alpha3":"MNE","numeric3":"499"},"MS":{"countryName":"Montserrat","postalCodeFormat":"MS.json","alpha2":"MS","alpha3":"MSR","numeric3":"500"},"MA":{"countryName":"Morocco","postalCodeFormat":"5Digits.json","alpha2":"MA","alpha3":"MAR","numeric3":"504"},"MZ":{"countryName":"Mozambique","postalCodeFormat":"4Digits.json","alpha2":"MZ","alpha3":"MOZ","numeric3":"508"},"MM":{"countryName":"Myanmar","postalCodeFormat":"5Digits.json","alpha2":"MM","alpha3":"MMR","numeric3":"104"},"NA":{"countryName":"Namibia","postalCodeFormat":"5Digits.json","alpha2":"NA","alpha3":"NAM","numeric3":"516"},"NR":{"countryName":"Nauru","alpha2":"NR","alpha3":"NRU","numeric3":"520"},"NP":{"countryName":"Nepal","postalCodeFormat":"5Digits.json","alpha2":"NP","alpha3":"NPL","numeric3":"524"},"NL":{"countryName":"Netherlands","postalCodeFormat":"NL.json","alpha2":"NL","alpha3":"NLD","numeric3":"528"},"AN":{"countryName":"Netherlands Antilles","alpha2":"AN","alpha3":"ANT","numeric3":"530"},"NC":{"countryName":"New Caledonia","postalCodeFormat":"NC.json","alpha2":"NC","alpha3":"NCL","numeric3":"540"},"NZ":{"countryName":"New Zealand","postalCodeFormat":"4Digits.json","alpha2":"NZ","alpha3":"NZL","numeric3":"554"},"NI":{"countryName":"Nicaragua","postalCodeFormat":"5Digits.json","alpha2":"NI","alpha3":"NIC","numeric3":"558"},"NE":{"countryName":"Niger","postalCodeFormat":"4Digits.json","alpha2":"NE","alpha3":"NER","numeric3":"562"},"NG":{"countryName":"Nigeria","postalCodeFormat":"6Digits.json","alpha2":"NG","alpha3":"NGA","numeric3":"566"},"NU":{"countryName":"Niue","alpha2":"NU","alpha3":"NIU","numeric3":"570"},"NF":{"countryName":"Norfolk Island","postalCodeFormat":"4Digits.json","alpha2":"NF","alpha3":"NFK","numeric3":"574"},"MP":{"countryName":"Northern Mariana Islands","postalCodeFormat":"US.json","alpha2":"MP","alpha3":"MNP","numeric3":"580"},"NO":{"countryName":"Norway","postalCodeFormat":"4Digits.json","alpha2":"NO","alpha3":"NOR","numeric3":"578"},"OM":{"countryName":"Oman","postalCodeFormat":"3Digits.json","alpha2":"OM","alpha3":"OMN","numeric3":"512"},"PK":{"countryName":"Pakistan","postalCodeFormat":"5Digits.json","alpha2":"PK","alpha3":"PAK","numeric3":"586"},"PW":{"countryName":"Palau","postalCodeFormat":"US.json","alpha2":"PW","alpha3":"PLW","numeric3":"585"},"PS":{"countryName":"Palestinian Territory, Occupied","postalCodeFormat":"3Digits.json","alpha2":"PS","alpha3":"PSE","numeric3":"275"},"PA":{"countryName":"Panama","postalCodeFormat":"4Digits.json","alpha2":"PA","alpha3":"PAN","numeric3":"591"},"PG":{"countryName":"Papua New Guinea","postalCodeFormat":"3Digits.json","alpha2":"PG","alpha3":"PNG","numeric3":"598"},"PY":{"countryName":"Paraguay","postalCodeFormat":"4Digits.json","alpha2":"PY","alpha3":"PRY","numeric3":"600"},"PE":{"countryName":"Peru","postalCodeFormat":"5Digits.json","alpha2":"PE","alpha3":"PER","numeric3":"604"},"PH":{"countryName":"Philippines","postalCodeFormat":"4Digits.json","alpha2":"PH","alpha3":"PHL","numeric3":"608"},"PN":{"countryName":"Pitcairn","postalCodeFormat":"PN.json","alpha2":"PN","alpha3":"PCN","numeric3":"612"},"PL":{"countryName":"Poland","postalCodeFormat":"PL.json","alpha2":"PL","alpha3":"POL","numeric3":"616"},"PT":{"countryName":"Portugal","postalCodeFormat":"PT.json","alpha2":"PT","alpha3":"PRT","numeric3":"620"},"PR":{"countryName":"Puerto Rico","postalCodeFormat":"US.json","alpha2":"PR","alpha3":"PRI","numeric3":"630"},"QA":{"countryName":"Qatar","alpha2":"QA","alpha3":"QAT","numeric3":"634"},"RE":{"countryName":"Réunion","postalCodeFormat":"RE.json","alpha2":"RE","alpha3":"REU","numeric3":"638"},"RO":{"countryName":"Romania","postalCodeFormat":"6Digits.json","alpha2":"RO","alpha3":"ROU","numeric3":"642"},"RU":{"countryName":"Russian Federation","postalCodeFormat":"RU.json","alpha2":"RU","alpha3":"RUS","numeric3":"643"},"RW":{"countryName":"Rwanda","alpha2":"RW","alpha3":"RWA","numeric3":"646"},"BL":{"countryName":"Saint-Barthélemy","postalCodeFormat":"BL.json","alpha2":"BL","alpha3":"BLM","numeric3":"652"},"SH":{"countryName":"Saint Helena","postalCodeFormat":"SH.json","alpha2":"SH","alpha3":"SHN","numeric3":"654"},"KN":{"countryName":"Saint Kitts and Nevis","alpha2":"KN","alpha3":"KNA","numeric3":"659"},"LC":{"countryName":"Saint Lucia","postalCodeFormat":"LC.json","alpha2":"LC","alpha3":"LCA","numeric3":"662"},"MF":{"countryName":"Saint-Martin (French part)","postalCodeFormat":"MF.json","alpha2":"MF","alpha3":"MAF","numeric3":"663"},"PM":{"countryName":"Saint Pierre and Miquelon","postalCodeFormat":"PM.json","alpha2":"PM","alpha3":"SPM","numeric3":"666"},"VC":{"countryName":"Saint Vincent and Grenadines","postalCodeFormat":"VC.json","alpha2":"VC","alpha3":"VCT","numeric3":"670"},"WS":{"countryName":"Samoa","postalCodeFormat":"WS.json","alpha2":"WS","alpha3":"WSM","numeric3":"882"},"SM":{"countryName":"San Marino","postalCodeFormat":"SM.json","alpha2":"SM","alpha3":"SMR","numeric3":"674"},"ST":{"countryName":"Sao Tome and Principe","alpha2":"ST","alpha3":"STP","numeric3":"678"},"SA":{"countryName":"Saudi Arabia","postalCodeFormat":"US.json","alpha2":"SA","alpha3":"SAU","numeric3":"682"},"SN":{"countryName":"Senegal","postalCodeFormat":"5Digits.json","alpha2":"SN","alpha3":"SEN","numeric3":"686"},"RS":{"countryName":"Serbia","postalCodeFormat":"5Digits.json","alpha2":"RS","alpha3":"SRB","numeric3":"688"},"SC":{"countryName":"Seychelles","alpha2":"SC","alpha3":"SYC","numeric3":"690"},"SL":{"countryName":"Sierra Leone","alpha2":"SL","alpha3":"SLE","numeric3":"694"},"SG":{"countryName":"Singapore","postalCodeFormat":"6Digits.json","alpha2":"SG","alpha3":"SGP","numeric3":"702"},"SK":{"countryName":"Slovakia","postalCodeFormat":"5Digits.json","alpha2":"SK","alpha3":"SVK","numeric3":"703"},"SI":{"countryName":"Slovenia","postalCodeFormat":"4Digits.json","alpha2":"SI","alpha3":"SVN","numeric3":"705"},"SB":{"countryName":"Solomon Islands","alpha2":"SB","alpha3":"SLB","numeric3":"90"},"SO":{"countryName":"Somalia","postalCodeFormat":"SO.json","alpha2":"SO","alpha3":"SOM","numeric3":"706"},"ZA":{"countryName":"South Africa","postalCodeFormat":"4Digits.json","alpha2":"ZA","alpha3":"ZAF","numeric3":"710"},"GS":{"countryName":"South Georgia and the South Sandwich Islands","postalCodeFormat":"GS.json","alpha2":"GS","alpha3":"SGS","numeric3":"239"},"SS":{"countryName":"South Sudan","alpha2":"SS","alpha3":"SSD","numeric3":"728"},"ES":{"countryName":"Spain","postalCodeFormat":"5Digits.json","alpha2":"ES","alpha3":"ESP","numeric3":"724"},"LK":{"countryName":"Sri Lanka","postalCodeFormat":"5Digits.json","alpha2":"LK","alpha3":"LKA","numeric3":"144"},"SD":{"countryName":"Sudan","postalCodeFormat":"5Digits.json","alpha2":"SD","alpha3":"SDN","numeric3":"736"},"SR":{"countryName":"Suriname *","alpha2":"SR","alpha3":"SUR","numeric3":"740"},"SJ":{"countryName":"Svalbard and Jan Mayen Islands","postalCodeFormat":"4Digits.json","alpha2":"SJ","alpha3":"SJM","numeric3":"744"},"SZ":{"countryName":"Swaziland","postalCodeFormat":"SZ.json","alpha2":"SZ","alpha3":"SWZ","numeric3":"748"},"SE":{"countryName":"Sweden","postalCodeFormat":"5Digits.json","alpha2":"SE","alpha3":"SWE","numeric3":"752"},"CH":{"countryName":"Switzerland","postalCodeFormat":"4Digits.json","alpha2":"CH","alpha3":"CHE","numeric3":"756"},"SY":{"countryName":"Syrian Arab Republic (Syria)","alpha2":"SY","alpha3":"SYR","numeric3":"760"},"TW":{"countryName":"Taiwan, Republic of China","postalCodeFormat":"TW.json","alpha2":"TW","alpha3":"TWN","numeric3":"158"},"TJ":{"countryName":"Tajikistan","postalCodeFormat":"6Digits.json","alpha2":"TJ","alpha3":"TJK","numeric3":"762"},"TZ":{"countryName":"Tanzania *, United Republic of","postalCodeFormat":"5Digits.json","alpha2":"TZ","alpha3":"TZA","numeric3":"834"},"TH":{"countryName":"Thailand","postalCodeFormat":"5Digits.json","alpha2":"TH","alpha3":"THA","numeric3":"764"},"TL":{"countryName":"Timor-Leste","alpha2":"TL","alpha3":"TLS","numeric3":"626"},"TG":{"countryName":"Togo","alpha2":"TG","alpha3":"TGO","numeric3":"768"},"TK":{"countryName":"Tokelau","alpha2":"TK","alpha3":"TKL","numeric3":"772"},"TO":{"countryName":"Tonga","alpha2":"TO","alpha3":"TON","numeric3":"776"},"TT":{"countryName":"Trinidad and Tobago","postalCodeFormat":"6Digits.json","alpha2":"TT","alpha3":"TTO","numeric3":"780"},"TN":{"countryName":"Tunisia","postalCodeFormat":"4Digits.json","alpha2":"TN","alpha3":"TUN","numeric3":"788"},"TR":{"countryName":"Turkey","postalCodeFormat":"5Digits.json","alpha2":"TR","alpha3":"TUR","numeric3":"792"},"TM":{"countryName":"Turkmenistan","postalCodeFormat":"6Digits.json","alpha2":"TM","alpha3":"TKM","numeric3":"795"},"TC":{"countryName":"Turks and Caicos Islands","postalCodeFormat":"TC.json","alpha2":"TC","alpha3":"TCA","numeric3":"796"},"TV":{"countryName":"Tuvalu","alpha2":"TV","alpha3":"TUV","numeric3":"798"},"UG":{"countryName":"Uganda","alpha2":"UG","alpha3":"UGA","numeric3":"800"},"UA":{"countryName":"Ukraine","postalCodeFormat":"5Digits.json","alpha2":"UA","alpha3":"UKR","numeric3":"804"},"AE":{"countryName":"United Arab Emirates","alpha2":"AE","alpha3":"ARE","numeric3":"784"},"GB":{"countryName":"United Kingdom","postalCodeFormat":"GB.json","alpha2":"GB","alpha3":"GBR","numeric3":"826"},"US":{"countryName":"United States of America","postalCodeFormat":"US.json","alpha2":"US","alpha3":"USA","numeric3":"840"},"UM":{"countryName":"United States Minor Outlying Islands","alpha2":"UM","alpha3":"UMI","numeric3":"581"},"UY":{"countryName":"Uruguay","postalCodeFormat":"5Digits.json","alpha2":"UY","alpha3":"URY","numeric3":"858"},"UZ":{"countryName":"Uzbekistan","postalCodeFormat":"6Digits.json","alpha2":"UZ","alpha3":"UZB","numeric3":"860"},"VU":{"countryName":"Vanuatu","alpha2":"VU","alpha3":"VUT","numeric3":"548"},"VE":{"countryName":"Venezuela (Bolivarian Republic of)","postalCodeFormat":"VE.json","alpha2":"VE","alpha3":"VEN","numeric3":"862"},"VN":{"countryName":"Viet Nam","postalCodeFormat":"6Digits.json","alpha2":"VN","alpha3":"VNM","numeric3":"704"},"VI":{"countryName":"Virgin Islands, US","postalCodeFormat":"US.json","alpha2":"VI","alpha3":"VIR","numeric3":"850"},"WF":{"countryName":"Wallis and Futuna Islands","postalCodeFormat":"WF.json","alpha2":"WF","alpha3":"WLF","numeric3":"876"},"EH":{"countryName":"Western Sahara","alpha2":"EH","alpha3":"ESH","numeric3":"732"},"YE":{"countryName":"Yemen","alpha2":"YE","alpha3":"YEM","numeric3":"887"},"ZM":{"countryName":"Zambia","postalCodeFormat":"5Digits.json","alpha2":"ZM","alpha3":"ZMB","numeric3":"894"},"ZW":{"countryName":"Zimbabwe","alpha2":"ZW","alpha3":"ZWE","numeric3":"716"}}');

/***/ }),

/***/ "./node_modules/postal-codes-js/generated/postal-codes-alpha3.json":
/*!*************************************************************************!*\
  !*** ./node_modules/postal-codes-js/generated/postal-codes-alpha3.json ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AFG":{"countryName":"Afghanistan","postalCodeFormat":"4Digits.json","alpha2":"AF","alpha3":"AFG","numeric3":"4"},"ALA":{"countryName":"Aland Islands","postalCodeFormat":"AX.json","alpha2":"AX","alpha3":"ALA","numeric3":"248"},"ALB":{"countryName":"Albania","postalCodeFormat":"4Digits.json","alpha2":"AL","alpha3":"ALB","numeric3":"8"},"DZA":{"countryName":"Algeria","postalCodeFormat":"5Digits.json","alpha2":"DZ","alpha3":"DZA","numeric3":"12"},"ASM":{"countryName":"American Samoa","postalCodeFormat":"5Digits.json","alpha2":"AS","alpha3":"ASM","numeric3":"16"},"AND":{"countryName":"Andorra","postalCodeFormat":"AD.json","alpha2":"AD","alpha3":"AND","numeric3":"20"},"AGO":{"countryName":"Angola","alpha2":"AO","alpha3":"AGO","numeric3":"24"},"AIA":{"countryName":"Anguilla","postalCodeFormat":"AI.json","alpha2":"AI","alpha3":"AIA","numeric3":"660"},"ATA":{"countryName":"Antarctica","postalCodeFormat":"AQ.json","alpha2":"AQ","alpha3":"ATA","numeric3":"10"},"ATG":{"countryName":"Antigua and Barbuda","alpha2":"AG","alpha3":"ATG","numeric3":"28"},"ARG":{"countryName":"Argentina","postalCodeFormat":"4Digits.json","alpha2":"AR","alpha3":"ARG","numeric3":"32"},"ARM":{"countryName":"Armenia","postalCodeFormat":"4Digits.json","alpha2":"AM","alpha3":"ARM","numeric3":"51"},"ABW":{"countryName":"Aruba","alpha2":"AW","alpha3":"ABW","numeric3":"533"},"AUS":{"countryName":"Australia","postalCodeFormat":"4Digits.json","alpha2":"AU","alpha3":"AUS","numeric3":"36"},"AUT":{"countryName":"Austria","postalCodeFormat":"4Digits.json","alpha2":"AT","alpha3":"AUT","numeric3":"40"},"AZE":{"countryName":"Azerbaijan","postalCodeFormat":"AZ.json","alpha2":"AZ","alpha3":"AZE","numeric3":"31"},"BHS":{"countryName":"Bahamas","alpha2":"BS","alpha3":"BHS","numeric3":"44"},"BHR":{"countryName":"Bahrain","postalCodeFormat":"BH.json","alpha2":"BH","alpha3":"BHR","numeric3":"48"},"BGD":{"countryName":"Bangladesh","postalCodeFormat":"4Digits.json","alpha2":"BD","alpha3":"BGD","numeric3":"50"},"BRB":{"countryName":"Barbados","postalCodeFormat":"BB.json","alpha2":"BB","alpha3":"BRB","numeric3":"52"},"BLR":{"countryName":"Belarus","postalCodeFormat":"6Digits.json","alpha2":"BY","alpha3":"BLR","numeric3":"112"},"BEL":{"countryName":"Belgium","postalCodeFormat":"4Digits.json","alpha2":"BE","alpha3":"BEL","numeric3":"56"},"BLZ":{"countryName":"Belize","alpha2":"BZ","alpha3":"BLZ","numeric3":"84"},"BEN":{"countryName":"Benin","alpha2":"BJ","alpha3":"BEN","numeric3":"204"},"BMU":{"countryName":"Bermuda","alpha2":"BM","alpha3":"BMU","numeric3":"60"},"BTN":{"countryName":"Bhutan","postalCodeFormat":"5Digits.json","alpha2":"BT","alpha3":"BTN","numeric3":"64"},"BOL":{"countryName":"Bolivia","postalCodeFormat":"4Digits.json","alpha2":"BO","alpha3":"BOL","numeric3":"68"},"BIH":{"countryName":"Bosnia and Herzegovina","postalCodeFormat":"5Digits.json","alpha2":"BA","alpha3":"BIH","numeric3":"70"},"BWA":{"countryName":"Botswana","alpha2":"BW","alpha3":"BWA","numeric3":"72"},"BVT":{"countryName":"Bouvet Island","alpha2":"BV","alpha3":"BVT","numeric3":"74"},"BRA":{"countryName":"Brazil","postalCodeFormat":"8Digits.json","alpha2":"BR","alpha3":"BRA","numeric3":"76"},"VGB":{"countryName":"British Virgin Islands","postalCodeFormat":"VG.json","alpha2":"VG","alpha3":"VGB","numeric3":"92"},"IOT":{"countryName":"British Indian Ocean Territory","postalCodeFormat":"IO.json","alpha2":"IO","alpha3":"IOT","numeric3":"86"},"BRN":{"countryName":"Brunei Darussalam","postalCodeFormat":"BN.json","alpha2":"BN","alpha3":"BRN","numeric3":"96"},"BGR":{"countryName":"Bulgaria","postalCodeFormat":"4Digits.json","alpha2":"BG","alpha3":"BGR","numeric3":"100"},"BFA":{"countryName":"Burkina Faso","alpha2":"BF","alpha3":"BFA","numeric3":"854"},"BDI":{"countryName":"Burundi","alpha2":"BI","alpha3":"BDI","numeric3":"108"},"KHM":{"countryName":"Cambodia","postalCodeFormat":"5Digits.json","alpha2":"KH","alpha3":"KHM","numeric3":"116"},"CMR":{"countryName":"Cameroon","alpha2":"CM","alpha3":"CMR","numeric3":"120"},"CAN":{"countryName":"Canada","postalCodeFormat":"CA.json","alpha2":"CA","alpha3":"CAN","numeric3":"124"},"CPV":{"countryName":"Cape Verde","postalCodeFormat":"4Digits.json","alpha2":"CV","alpha3":"CPV","numeric3":"132"},"CYM":{"countryName":"Cayman Islands","postalCodeFormat":"KY.json","alpha2":"KY","alpha3":"CYM","numeric3":"136"},"CAF":{"countryName":"Central African Republic","alpha2":"CF","alpha3":"CAF","numeric3":"140"},"TCD":{"countryName":"Chad","postalCodeFormat":"5Digits.json","alpha2":"TD","alpha3":"TCD","numeric3":"148"},"CHL":{"countryName":"Chile","postalCodeFormat":"7Digits.json","alpha2":"CL","alpha3":"CHL","numeric3":"152"},"CHN":{"countryName":"China","postalCodeFormat":"6Digits.json","alpha2":"CN","alpha3":"CHN","numeric3":"156"},"HKG":{"countryName":"Hong Kong, Special Administrative Region of China","alpha2":"HK","alpha3":"HKG","numeric3":"344"},"MAC":{"countryName":"Macao, Special Administrative Region of China","alpha2":"MO","alpha3":"MAC","numeric3":"446"},"CXR":{"countryName":"Christmas Island","postalCodeFormat":"4Digits.json","alpha2":"CX","alpha3":"CXR","numeric3":"162"},"CCK":{"countryName":"Cocos (Keeling) Islands","postalCodeFormat":"4Digits.json","alpha2":"CC","alpha3":"CCK","numeric3":"166"},"COL":{"countryName":"Colombia","postalCodeFormat":"6Digits.json","alpha2":"CO","alpha3":"COL","numeric3":"170"},"COM":{"countryName":"Comoros","alpha2":"KM","alpha3":"COM","numeric3":"174"},"COG":{"countryName":"Congo (Brazzaville)","alpha2":"CG","alpha3":"COG","numeric3":"178"},"COD":{"countryName":"Congo, Democratic Republic of the","alpha2":"CD","alpha3":"COD","numeric3":"180"},"COK":{"countryName":"Cook Islands","alpha2":"CK","alpha3":"COK","numeric3":"184"},"CRI":{"countryName":"Costa Rica","postalCodeFormat":"5Digits.json","alpha2":"CR","alpha3":"CRI","numeric3":"188"},"CIV":{"countryName":"Côte d\'Ivoire","alpha2":"CI","alpha3":"CIV","numeric3":"384"},"HRV":{"countryName":"Croatia","postalCodeFormat":"5Digits.json","alpha2":"HR","alpha3":"HRV","numeric3":"191"},"CUB":{"countryName":"Cuba","postalCodeFormat":"5Digits.json","alpha2":"CU","alpha3":"CUB","numeric3":"192"},"CYP":{"countryName":"Cyprus","postalCodeFormat":"4Digits.json","alpha2":"CY","alpha3":"CYP","numeric3":"196"},"CZE":{"countryName":"Czech Republic","postalCodeFormat":"5Digits.json","alpha2":"CZ","alpha3":"CZE","numeric3":"203"},"DNK":{"countryName":"Denmark","postalCodeFormat":"DK.json","alpha2":"DK","alpha3":"DNK","numeric3":"208"},"DJI":{"countryName":"Djibouti","alpha2":"DJ","alpha3":"DJI","numeric3":"262"},"DMA":{"countryName":"Dominica","alpha2":"DM","alpha3":"DMA","numeric3":"212"},"DOM":{"countryName":"Dominican Republic","postalCodeFormat":"5Digits.json","alpha2":"DO","alpha3":"DOM","numeric3":"214"},"ECU":{"countryName":"Ecuador","postalCodeFormat":"6Digits.json","alpha2":"EC","alpha3":"ECU","numeric3":"218"},"EGY":{"countryName":"Egypt","postalCodeFormat":"5Digits.json","alpha2":"EG","alpha3":"EGY","numeric3":"818"},"SLV":{"countryName":"El Salvador","postalCodeFormat":"4Digits.json","alpha2":"SV","alpha3":"SLV","numeric3":"222"},"GNQ":{"countryName":"Equatorial Guinea","alpha2":"GQ","alpha3":"GNQ","numeric3":"226"},"ERI":{"countryName":"Eritrea","alpha2":"ER","alpha3":"ERI","numeric3":"232"},"EST":{"countryName":"Estonia","postalCodeFormat":"5Digits.json","alpha2":"EE","alpha3":"EST","numeric3":"233"},"ETH":{"countryName":"Ethiopia","postalCodeFormat":"4Digits.json","alpha2":"ET","alpha3":"ETH","numeric3":"231"},"FLK":{"countryName":"Falkland Islands (Malvinas)","postalCodeFormat":"FK.json","alpha2":"FK","alpha3":"FLK","numeric3":"238"},"FRO":{"countryName":"Faroe Islands","postalCodeFormat":"3Digits.json","alpha2":"FO","alpha3":"FRO","numeric3":"234"},"FJI":{"countryName":"Fiji","alpha2":"FJ","alpha3":"FJI","numeric3":"242"},"FIN":{"countryName":"Finland","postalCodeFormat":"5Digits.json","alpha2":"FI","alpha3":"FIN","numeric3":"246"},"FRA":{"countryName":"France","postalCodeFormat":"5Digits.json","alpha2":"FR","alpha3":"FRA","numeric3":"250"},"GUF":{"countryName":"French Guiana","postalCodeFormat":"GF.json","alpha2":"GF","alpha3":"GUF","numeric3":"254"},"PYF":{"countryName":"French Polynesia","postalCodeFormat":"PF.json","alpha2":"PF","alpha3":"PYF","numeric3":"258"},"ATF":{"countryName":"French Southern Territories","alpha2":"TF","alpha3":"ATF","numeric3":"260"},"GAB":{"countryName":"Gabon","alpha2":"GA","alpha3":"GAB","numeric3":"266"},"GMB":{"countryName":"Gambia","alpha2":"GM","alpha3":"GMB","numeric3":"270"},"GEO":{"countryName":"Georgia","postalCodeFormat":"4Digits.json","alpha2":"GE","alpha3":"GEO","numeric3":"268"},"DEU":{"countryName":"Germany","postalCodeFormat":"5Digits.json","alpha2":"DE","alpha3":"DEU","numeric3":"276"},"GHA":{"countryName":"Ghana","alpha2":"GH","alpha3":"GHA","numeric3":"288"},"GIB":{"countryName":"Gibraltar","postalCodeFormat":"GI.json","alpha2":"GI","alpha3":"GIB","numeric3":"292"},"GRC":{"countryName":"Greece","postalCodeFormat":"5Digits.json","alpha2":"GR","alpha3":"GRC","numeric3":"300"},"GRL":{"countryName":"Greenland","postalCodeFormat":"4Digits.json","alpha2":"GL","alpha3":"GRL","numeric3":"304"},"GRD":{"countryName":"Grenada","alpha2":"GD","alpha3":"GRD","numeric3":"308"},"GLP":{"countryName":"Guadeloupe","postalCodeFormat":"GP.json","alpha2":"GP","alpha3":"GLP","numeric3":"312"},"GUM":{"countryName":"Guam","postalCodeFormat":"US.json","alpha2":"GU","alpha3":"GUM","numeric3":"316"},"GTM":{"countryName":"Guatemala","postalCodeFormat":"5Digits.json","alpha2":"GT","alpha3":"GTM","numeric3":"320"},"GGY":{"countryName":"Guernsey","postalCodeFormat":"GG.json","alpha2":"GG","alpha3":"GGY","numeric3":"831"},"GIN":{"countryName":"Guinea","postalCodeFormat":"3Digits.json","alpha2":"GN","alpha3":"GIN","numeric3":"324"},"GNB":{"countryName":"Guinea-Bissau","postalCodeFormat":"4Digits.json","alpha2":"GW","alpha3":"GNB","numeric3":"624"},"GUY":{"countryName":"Guyana","alpha2":"GY","alpha3":"GUY","numeric3":"328"},"HTI":{"countryName":"Haiti","postalCodeFormat":"4Digits.json","alpha2":"HT","alpha3":"HTI","numeric3":"332"},"HMD":{"countryName":"Heard Island and Mcdonald Islands","postalCodeFormat":"4Digits.json","alpha2":"HM","alpha3":"HMD","numeric3":"334"},"VAT":{"countryName":"Holy See (Vatican City State)","postalCodeFormat":"VA.json","alpha2":"VA","alpha3":"VAT","numeric3":"336"},"HND":{"countryName":"Honduras","postalCodeFormat":"HN.json","alpha2":"HN","alpha3":"HND","numeric3":"340"},"HUN":{"countryName":"Hungary","postalCodeFormat":"4Digits.json","alpha2":"HU","alpha3":"HUN","numeric3":"348"},"ISL":{"countryName":"Iceland","postalCodeFormat":"3Digits.json","alpha2":"IS","alpha3":"ISL","numeric3":"352"},"IND":{"countryName":"India","postalCodeFormat":"6Digits.json","alpha2":"IN","alpha3":"IND","numeric3":"356"},"IDN":{"countryName":"Indonesia","postalCodeFormat":"5Digits.json","alpha2":"ID","alpha3":"IDN","numeric3":"360"},"IRN":{"countryName":"Iran, Islamic Republic of","postalCodeFormat":"10Digits.json","alpha2":"IR","alpha3":"IRN","numeric3":"364"},"IRQ":{"countryName":"Iraq","postalCodeFormat":"5Digits.json","alpha2":"IQ","alpha3":"IRQ","numeric3":"368"},"IRL":{"countryName":"Ireland","postalCodeFormat":"IE.json","alpha2":"IE","alpha3":"IRL","numeric3":"372"},"IMN":{"countryName":"Isle of Man","postalCodeFormat":"IM.json","alpha2":"IM","alpha3":"IMN","numeric3":"833"},"ISR":{"countryName":"Israel","postalCodeFormat":"7Digits.json","alpha2":"IL","alpha3":"ISR","numeric3":"376"},"ITA":{"countryName":"Italy","postalCodeFormat":"5Digits.json","alpha2":"IT","alpha3":"ITA","numeric3":"380"},"JAM":{"countryName":"Jamaica","postalCodeFormat":"2Digits.json","alpha2":"JM","alpha3":"JAM","numeric3":"388"},"JPN":{"countryName":"Japan","postalCodeFormat":"7Digits.json","alpha2":"JP","alpha3":"JPN","numeric3":"392"},"JEY":{"countryName":"Jersey","postalCodeFormat":"JE.json","alpha2":"JE","alpha3":"JEY","numeric3":"832"},"JOR":{"countryName":"Jordan","postalCodeFormat":"5Digits.json","alpha2":"JO","alpha3":"JOR","numeric3":"400"},"KAZ":{"countryName":"Kazakhstan","postalCodeFormat":"6Digits.json","alpha2":"KZ","alpha3":"KAZ","numeric3":"398"},"KEN":{"countryName":"Kenya","postalCodeFormat":"5Digits.json","alpha2":"KE","alpha3":"KEN","numeric3":"404"},"KIR":{"countryName":"Kiribati","alpha2":"KI","alpha3":"KIR","numeric3":"296"},"PRK":{"countryName":"Korea, Democratic People\'s Republic of","alpha2":"KP","alpha3":"PRK","numeric3":"408"},"KOR":{"countryName":"Korea, Republic of","postalCodeFormat":"5Digits.json","alpha2":"KR","alpha3":"KOR","numeric3":"410"},"KWT":{"countryName":"Kuwait","postalCodeFormat":"5Digits.json","alpha2":"KW","alpha3":"KWT","numeric3":"414"},"KGZ":{"countryName":"Kyrgyzstan","postalCodeFormat":"6Digits.json","alpha2":"KG","alpha3":"KGZ","numeric3":"417"},"LAO":{"countryName":"Lao PDR","postalCodeFormat":"5Digits.json","alpha2":"LA","alpha3":"LAO","numeric3":"418"},"LVA":{"countryName":"Latvia","postalCodeFormat":"LV.json","alpha2":"LV","alpha3":"LVA","numeric3":"428"},"LBN":{"countryName":"Lebanon","postalCodeFormat":"LB.json","alpha2":"LB","alpha3":"LBN","numeric3":"422"},"LSO":{"countryName":"Lesotho","postalCodeFormat":"3Digits.json","alpha2":"LS","alpha3":"LSO","numeric3":"426"},"LBR":{"countryName":"Liberia","postalCodeFormat":"4Digits.json","alpha2":"LR","alpha3":"LBR","numeric3":"430"},"LBY":{"countryName":"Libya","postalCodeFormat":"5Digits.json","alpha2":"LY","alpha3":"LBY","numeric3":"434"},"LIE":{"countryName":"Liechtenstein","postalCodeFormat":"4Digits.json","alpha2":"LI","alpha3":"LIE","numeric3":"438"},"LTU":{"countryName":"Lithuania","postalCodeFormat":"LT.json","alpha2":"LT","alpha3":"LTU","numeric3":"440"},"LUX":{"countryName":"Luxembourg","postalCodeFormat":"LU.json","alpha2":"LU","alpha3":"LUX","numeric3":"442"},"MKD":{"countryName":"Macedonia, Republic of","postalCodeFormat":"4Digits.json","alpha2":"MK","alpha3":"MKD","numeric3":"807"},"MDG":{"countryName":"Madagascar","postalCodeFormat":"3Digits.json","alpha2":"MG","alpha3":"MDG","numeric3":"450"},"MWI":{"countryName":"Malawi","alpha2":"MW","alpha3":"MWI","numeric3":"454"},"MYS":{"countryName":"Malaysia","postalCodeFormat":"5Digits.json","alpha2":"MY","alpha3":"MYS","numeric3":"458"},"MDV":{"countryName":"Maldives","postalCodeFormat":"5Digits.json","alpha2":"MV","alpha3":"MDV","numeric3":"462"},"MLI":{"countryName":"Mali","alpha2":"ML","alpha3":"MLI","numeric3":"466"},"MLT":{"countryName":"Malta","postalCodeFormat":"MT.json","alpha2":"MT","alpha3":"MLT","numeric3":"470"},"MHL":{"countryName":"Marshall Islands","postalCodeFormat":"US.json","alpha2":"MH","alpha3":"MHL","numeric3":"584"},"MTQ":{"countryName":"Martinique","postalCodeFormat":"5Digits.json","alpha2":"MQ","alpha3":"MTQ","numeric3":"474"},"MRT":{"countryName":"Mauritania","alpha2":"MR","alpha3":"MRT","numeric3":"478"},"MUS":{"countryName":"Mauritius","postalCodeFormat":"5Digits.json","alpha2":"MU","alpha3":"MUS","numeric3":"480"},"MYT":{"countryName":"Mayotte","postalCodeFormat":"5Digits.json","alpha2":"YT","alpha3":"MYT","numeric3":"175"},"MEX":{"countryName":"Mexico","postalCodeFormat":"5Digits.json","alpha2":"MX","alpha3":"MEX","numeric3":"484"},"FSM":{"countryName":"Micronesia, Federated States of","postalCodeFormat":"US.json","alpha2":"FM","alpha3":"FSM","numeric3":"583"},"MDA":{"countryName":"Moldova","postalCodeFormat":"MD.json","alpha2":"MD","alpha3":"MDA","numeric3":"498"},"MCO":{"countryName":"Monaco","postalCodeFormat":"MC.json","alpha2":"MC","alpha3":"MCO","numeric3":"492"},"MNG":{"countryName":"Mongolia","postalCodeFormat":"5Digits.json","alpha2":"MN","alpha3":"MNG","numeric3":"496"},"MNE":{"countryName":"Montenegro","postalCodeFormat":"5Digits.json","alpha2":"ME","alpha3":"MNE","numeric3":"499"},"MSR":{"countryName":"Montserrat","postalCodeFormat":"MS.json","alpha2":"MS","alpha3":"MSR","numeric3":"500"},"MAR":{"countryName":"Morocco","postalCodeFormat":"5Digits.json","alpha2":"MA","alpha3":"MAR","numeric3":"504"},"MOZ":{"countryName":"Mozambique","postalCodeFormat":"4Digits.json","alpha2":"MZ","alpha3":"MOZ","numeric3":"508"},"MMR":{"countryName":"Myanmar","postalCodeFormat":"5Digits.json","alpha2":"MM","alpha3":"MMR","numeric3":"104"},"NAM":{"countryName":"Namibia","postalCodeFormat":"5Digits.json","alpha2":"NA","alpha3":"NAM","numeric3":"516"},"NRU":{"countryName":"Nauru","alpha2":"NR","alpha3":"NRU","numeric3":"520"},"NPL":{"countryName":"Nepal","postalCodeFormat":"5Digits.json","alpha2":"NP","alpha3":"NPL","numeric3":"524"},"NLD":{"countryName":"Netherlands","postalCodeFormat":"NL.json","alpha2":"NL","alpha3":"NLD","numeric3":"528"},"ANT":{"countryName":"Netherlands Antilles","alpha2":"AN","alpha3":"ANT","numeric3":"530"},"NCL":{"countryName":"New Caledonia","postalCodeFormat":"NC.json","alpha2":"NC","alpha3":"NCL","numeric3":"540"},"NZL":{"countryName":"New Zealand","postalCodeFormat":"4Digits.json","alpha2":"NZ","alpha3":"NZL","numeric3":"554"},"NIC":{"countryName":"Nicaragua","postalCodeFormat":"5Digits.json","alpha2":"NI","alpha3":"NIC","numeric3":"558"},"NER":{"countryName":"Niger","postalCodeFormat":"4Digits.json","alpha2":"NE","alpha3":"NER","numeric3":"562"},"NGA":{"countryName":"Nigeria","postalCodeFormat":"6Digits.json","alpha2":"NG","alpha3":"NGA","numeric3":"566"},"NIU":{"countryName":"Niue","alpha2":"NU","alpha3":"NIU","numeric3":"570"},"NFK":{"countryName":"Norfolk Island","postalCodeFormat":"4Digits.json","alpha2":"NF","alpha3":"NFK","numeric3":"574"},"MNP":{"countryName":"Northern Mariana Islands","postalCodeFormat":"US.json","alpha2":"MP","alpha3":"MNP","numeric3":"580"},"NOR":{"countryName":"Norway","postalCodeFormat":"4Digits.json","alpha2":"NO","alpha3":"NOR","numeric3":"578"},"OMN":{"countryName":"Oman","postalCodeFormat":"3Digits.json","alpha2":"OM","alpha3":"OMN","numeric3":"512"},"PAK":{"countryName":"Pakistan","postalCodeFormat":"5Digits.json","alpha2":"PK","alpha3":"PAK","numeric3":"586"},"PLW":{"countryName":"Palau","postalCodeFormat":"US.json","alpha2":"PW","alpha3":"PLW","numeric3":"585"},"PSE":{"countryName":"Palestinian Territory, Occupied","postalCodeFormat":"3Digits.json","alpha2":"PS","alpha3":"PSE","numeric3":"275"},"PAN":{"countryName":"Panama","postalCodeFormat":"4Digits.json","alpha2":"PA","alpha3":"PAN","numeric3":"591"},"PNG":{"countryName":"Papua New Guinea","postalCodeFormat":"3Digits.json","alpha2":"PG","alpha3":"PNG","numeric3":"598"},"PRY":{"countryName":"Paraguay","postalCodeFormat":"4Digits.json","alpha2":"PY","alpha3":"PRY","numeric3":"600"},"PER":{"countryName":"Peru","postalCodeFormat":"5Digits.json","alpha2":"PE","alpha3":"PER","numeric3":"604"},"PHL":{"countryName":"Philippines","postalCodeFormat":"4Digits.json","alpha2":"PH","alpha3":"PHL","numeric3":"608"},"PCN":{"countryName":"Pitcairn","postalCodeFormat":"PN.json","alpha2":"PN","alpha3":"PCN","numeric3":"612"},"POL":{"countryName":"Poland","postalCodeFormat":"PL.json","alpha2":"PL","alpha3":"POL","numeric3":"616"},"PRT":{"countryName":"Portugal","postalCodeFormat":"PT.json","alpha2":"PT","alpha3":"PRT","numeric3":"620"},"PRI":{"countryName":"Puerto Rico","postalCodeFormat":"US.json","alpha2":"PR","alpha3":"PRI","numeric3":"630"},"QAT":{"countryName":"Qatar","alpha2":"QA","alpha3":"QAT","numeric3":"634"},"REU":{"countryName":"Réunion","postalCodeFormat":"RE.json","alpha2":"RE","alpha3":"REU","numeric3":"638"},"ROU":{"countryName":"Romania","postalCodeFormat":"6Digits.json","alpha2":"RO","alpha3":"ROU","numeric3":"642"},"RUS":{"countryName":"Russian Federation","postalCodeFormat":"RU.json","alpha2":"RU","alpha3":"RUS","numeric3":"643"},"RWA":{"countryName":"Rwanda","alpha2":"RW","alpha3":"RWA","numeric3":"646"},"BLM":{"countryName":"Saint-Barthélemy","postalCodeFormat":"BL.json","alpha2":"BL","alpha3":"BLM","numeric3":"652"},"SHN":{"countryName":"Saint Helena","postalCodeFormat":"SH.json","alpha2":"SH","alpha3":"SHN","numeric3":"654"},"KNA":{"countryName":"Saint Kitts and Nevis","alpha2":"KN","alpha3":"KNA","numeric3":"659"},"LCA":{"countryName":"Saint Lucia","postalCodeFormat":"LC.json","alpha2":"LC","alpha3":"LCA","numeric3":"662"},"MAF":{"countryName":"Saint-Martin (French part)","postalCodeFormat":"MF.json","alpha2":"MF","alpha3":"MAF","numeric3":"663"},"SPM":{"countryName":"Saint Pierre and Miquelon","postalCodeFormat":"PM.json","alpha2":"PM","alpha3":"SPM","numeric3":"666"},"VCT":{"countryName":"Saint Vincent and Grenadines","postalCodeFormat":"VC.json","alpha2":"VC","alpha3":"VCT","numeric3":"670"},"WSM":{"countryName":"Samoa","postalCodeFormat":"WS.json","alpha2":"WS","alpha3":"WSM","numeric3":"882"},"SMR":{"countryName":"San Marino","postalCodeFormat":"SM.json","alpha2":"SM","alpha3":"SMR","numeric3":"674"},"STP":{"countryName":"Sao Tome and Principe","alpha2":"ST","alpha3":"STP","numeric3":"678"},"SAU":{"countryName":"Saudi Arabia","postalCodeFormat":"US.json","alpha2":"SA","alpha3":"SAU","numeric3":"682"},"SEN":{"countryName":"Senegal","postalCodeFormat":"5Digits.json","alpha2":"SN","alpha3":"SEN","numeric3":"686"},"SRB":{"countryName":"Serbia","postalCodeFormat":"5Digits.json","alpha2":"RS","alpha3":"SRB","numeric3":"688"},"SYC":{"countryName":"Seychelles","alpha2":"SC","alpha3":"SYC","numeric3":"690"},"SLE":{"countryName":"Sierra Leone","alpha2":"SL","alpha3":"SLE","numeric3":"694"},"SGP":{"countryName":"Singapore","postalCodeFormat":"6Digits.json","alpha2":"SG","alpha3":"SGP","numeric3":"702"},"SVK":{"countryName":"Slovakia","postalCodeFormat":"5Digits.json","alpha2":"SK","alpha3":"SVK","numeric3":"703"},"SVN":{"countryName":"Slovenia","postalCodeFormat":"4Digits.json","alpha2":"SI","alpha3":"SVN","numeric3":"705"},"SLB":{"countryName":"Solomon Islands","alpha2":"SB","alpha3":"SLB","numeric3":"90"},"SOM":{"countryName":"Somalia","postalCodeFormat":"SO.json","alpha2":"SO","alpha3":"SOM","numeric3":"706"},"ZAF":{"countryName":"South Africa","postalCodeFormat":"4Digits.json","alpha2":"ZA","alpha3":"ZAF","numeric3":"710"},"SGS":{"countryName":"South Georgia and the South Sandwich Islands","postalCodeFormat":"GS.json","alpha2":"GS","alpha3":"SGS","numeric3":"239"},"SSD":{"countryName":"South Sudan","alpha2":"SS","alpha3":"SSD","numeric3":"728"},"ESP":{"countryName":"Spain","postalCodeFormat":"5Digits.json","alpha2":"ES","alpha3":"ESP","numeric3":"724"},"LKA":{"countryName":"Sri Lanka","postalCodeFormat":"5Digits.json","alpha2":"LK","alpha3":"LKA","numeric3":"144"},"SDN":{"countryName":"Sudan","postalCodeFormat":"5Digits.json","alpha2":"SD","alpha3":"SDN","numeric3":"736"},"SUR":{"countryName":"Suriname *","alpha2":"SR","alpha3":"SUR","numeric3":"740"},"SJM":{"countryName":"Svalbard and Jan Mayen Islands","postalCodeFormat":"4Digits.json","alpha2":"SJ","alpha3":"SJM","numeric3":"744"},"SWZ":{"countryName":"Swaziland","postalCodeFormat":"SZ.json","alpha2":"SZ","alpha3":"SWZ","numeric3":"748"},"SWE":{"countryName":"Sweden","postalCodeFormat":"5Digits.json","alpha2":"SE","alpha3":"SWE","numeric3":"752"},"CHE":{"countryName":"Switzerland","postalCodeFormat":"4Digits.json","alpha2":"CH","alpha3":"CHE","numeric3":"756"},"SYR":{"countryName":"Syrian Arab Republic (Syria)","alpha2":"SY","alpha3":"SYR","numeric3":"760"},"TWN":{"countryName":"Taiwan, Republic of China","postalCodeFormat":"TW.json","alpha2":"TW","alpha3":"TWN","numeric3":"158"},"TJK":{"countryName":"Tajikistan","postalCodeFormat":"6Digits.json","alpha2":"TJ","alpha3":"TJK","numeric3":"762"},"TZA":{"countryName":"Tanzania *, United Republic of","postalCodeFormat":"5Digits.json","alpha2":"TZ","alpha3":"TZA","numeric3":"834"},"THA":{"countryName":"Thailand","postalCodeFormat":"5Digits.json","alpha2":"TH","alpha3":"THA","numeric3":"764"},"TLS":{"countryName":"Timor-Leste","alpha2":"TL","alpha3":"TLS","numeric3":"626"},"TGO":{"countryName":"Togo","alpha2":"TG","alpha3":"TGO","numeric3":"768"},"TKL":{"countryName":"Tokelau","alpha2":"TK","alpha3":"TKL","numeric3":"772"},"TON":{"countryName":"Tonga","alpha2":"TO","alpha3":"TON","numeric3":"776"},"TTO":{"countryName":"Trinidad and Tobago","postalCodeFormat":"6Digits.json","alpha2":"TT","alpha3":"TTO","numeric3":"780"},"TUN":{"countryName":"Tunisia","postalCodeFormat":"4Digits.json","alpha2":"TN","alpha3":"TUN","numeric3":"788"},"TUR":{"countryName":"Turkey","postalCodeFormat":"5Digits.json","alpha2":"TR","alpha3":"TUR","numeric3":"792"},"TKM":{"countryName":"Turkmenistan","postalCodeFormat":"6Digits.json","alpha2":"TM","alpha3":"TKM","numeric3":"795"},"TCA":{"countryName":"Turks and Caicos Islands","postalCodeFormat":"TC.json","alpha2":"TC","alpha3":"TCA","numeric3":"796"},"TUV":{"countryName":"Tuvalu","alpha2":"TV","alpha3":"TUV","numeric3":"798"},"UGA":{"countryName":"Uganda","alpha2":"UG","alpha3":"UGA","numeric3":"800"},"UKR":{"countryName":"Ukraine","postalCodeFormat":"5Digits.json","alpha2":"UA","alpha3":"UKR","numeric3":"804"},"ARE":{"countryName":"United Arab Emirates","alpha2":"AE","alpha3":"ARE","numeric3":"784"},"GBR":{"countryName":"United Kingdom","postalCodeFormat":"GB.json","alpha2":"GB","alpha3":"GBR","numeric3":"826"},"USA":{"countryName":"United States of America","postalCodeFormat":"US.json","alpha2":"US","alpha3":"USA","numeric3":"840"},"UMI":{"countryName":"United States Minor Outlying Islands","alpha2":"UM","alpha3":"UMI","numeric3":"581"},"URY":{"countryName":"Uruguay","postalCodeFormat":"5Digits.json","alpha2":"UY","alpha3":"URY","numeric3":"858"},"UZB":{"countryName":"Uzbekistan","postalCodeFormat":"6Digits.json","alpha2":"UZ","alpha3":"UZB","numeric3":"860"},"VUT":{"countryName":"Vanuatu","alpha2":"VU","alpha3":"VUT","numeric3":"548"},"VEN":{"countryName":"Venezuela (Bolivarian Republic of)","postalCodeFormat":"VE.json","alpha2":"VE","alpha3":"VEN","numeric3":"862"},"VNM":{"countryName":"Viet Nam","postalCodeFormat":"6Digits.json","alpha2":"VN","alpha3":"VNM","numeric3":"704"},"VIR":{"countryName":"Virgin Islands, US","postalCodeFormat":"US.json","alpha2":"VI","alpha3":"VIR","numeric3":"850"},"WLF":{"countryName":"Wallis and Futuna Islands","postalCodeFormat":"WF.json","alpha2":"WF","alpha3":"WLF","numeric3":"876"},"ESH":{"countryName":"Western Sahara","alpha2":"EH","alpha3":"ESH","numeric3":"732"},"YEM":{"countryName":"Yemen","alpha2":"YE","alpha3":"YEM","numeric3":"887"},"ZMB":{"countryName":"Zambia","postalCodeFormat":"5Digits.json","alpha2":"ZM","alpha3":"ZMB","numeric3":"894"},"ZWE":{"countryName":"Zimbabwe","alpha2":"ZW","alpha3":"ZWE","numeric3":"716"}}');

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
/* harmony import */ var postal_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postal-codes-js */ "./node_modules/postal-codes-js/postal-codes.js");
/* harmony import */ var i18n_iso_countries_langs_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json");
/* harmony import */ var _formValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidator */ "./src/formValidator.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.registerLocale(__webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json"));

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

const validator = new _formValidator__WEBPACK_IMPORTED_MODULE_3__["default"]();

email.addEventListener('input', () => {
  validator.validateEmail(email.value);
});

let currentCountryCode = null;

country.addEventListener('change', event => {
  currentCountryCode = event.target.value;
});

zipCode.addEventListener('input', () => {
  const zipValue = zipCode.value;
  if (currentCountryCode) {
    validator.validateZipCode(currentCountryCode, zipValue);
  }
});

password.addEventListener('input', () => {
  validator.validatePassword(password.value);
  validator.confirmPassword(password.value, passwordConfirm.value);
});

passwordConfirm.addEventListener('input', () => {
  validator.confirmPassword(password.value, passwordConfirm.value);
});

function populateCountryDropdown() {
  const select = document.getElementById('country');
  const countryList = i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.getNames('en', { select: 'official' });
  Object.entries(countryList).forEach(([code, name]) => {
    const option = document.createElement('option');
    option.value = code;
    option.text = name;
    select.add(option);
  });
}

document.addEventListener('DOMContentLoaded', populateCountryDropdown);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFH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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGdCQUFnQixFQUFFO0FBQ2xCLHFDQUFxQyxHQUFHO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw4QkFBOEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7QUNubkJQOztBQUViLGFBQWEsbUJBQU8sQ0FBQyx5Q0FBTTs7QUFFM0I7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDOzs7Ozs7Ozs7OztBQ1BhOztBQUViOztBQUVBLDJCQUEyQixtQkFBTyxDQUFDLHFGQUF5QjtBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyxtRkFBd0I7QUFDMUQsMEJBQTBCLG1CQUFPLENBQUMsbUZBQXdCO0FBQzFELDBCQUEwQixtQkFBTyxDQUFDLG1GQUF3QjtBQUMxRCwwQkFBMEIsbUJBQU8sQ0FBQyxtRkFBd0I7QUFDMUQsMEJBQTBCLG1CQUFPLENBQUMsbUZBQXdCO0FBQzFELDBCQUEwQixtQkFBTyxDQUFDLG1GQUF3QjtBQUMxRCwwQkFBMEIsbUJBQU8sQ0FBQyxtRkFBd0I7QUFDMUQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNoRCxxQkFBcUIsbUJBQU8sQ0FBQyx5RUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMseUVBQW1CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLHlFQUFtQjtBQUNo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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtRUFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZHN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJDOztBQUVEO0FBQ0E7O0FBRUU7QUFDdkI7O0FBRXJCLDhEQUF3QixDQUFDLG1CQUFPLENBQUMseUZBQWtDOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixzREFBYTs7QUFFbkM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFrQixTQUFTLG9CQUFvQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvZGV0ZWN0LW5vZGUvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vbm9kZV9tb2R1bGVzL2RpYWNyaXRpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9pMThuLWlzby1jb3VudHJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9wYXRoL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9wb3N0YWwtY29kZXMtanMvZm9ybWF0cy1ub2RlLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvcG9zdGFsLWNvZGVzLWpzL2Zvcm1hdHMtd2ViLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvcG9zdGFsLWNvZGVzLWpzL3Bvc3RhbC1jb2Rlcy5qcyIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vbm9kZV9tb2R1bGVzL3Bvc3Rjb2RlLXZhbGlkYXRvci9saWIvZXNtL21haW4uanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9wb3N0Y29kZS12YWxpZGF0b3IvbGliL2VzbS9wb3N0Y29kZS1yZWdleGVzLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvcG9zdGNvZGUtdmFsaWRhdG9yL2xpYi9lc20vcG9zdGNvZGUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vLi9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS8uL3NyYy9mb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NpZ251cGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaWdudXBmb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaWdudXBmb3JtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2lnbnVwZm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpZ251cGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaWdudXBmb3JtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaWdudXBmb3JtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogOTB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDR2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogOTB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiAzNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDR2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuIiwiZXhwb3J0cy5yZW1vdmUgPSByZW1vdmVEaWFjcml0aWNzO1xuXG52YXIgcmVwbGFjZW1lbnRMaXN0ID0gW1xuICB7XG4gICAgYmFzZTogJyAnLFxuICAgIGNoYXJzOiBcIlxcdTAwQTBcIixcbiAgfSwge1xuICAgIGJhc2U6ICcwJyxcbiAgICBjaGFyczogXCJcXHUwN0MwXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnQScsXG4gICAgY2hhcnM6IFwiXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnQUEnLFxuICAgIGNoYXJzOiBcIlxcdUE3MzJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdBRScsXG4gICAgY2hhcnM6IFwiXFx1MDBDNlxcdTAxRkNcXHUwMUUyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnQU8nLFxuICAgIGNoYXJzOiBcIlxcdUE3MzRcIixcbiAgfSwge1xuICAgIGJhc2U6ICdBVScsXG4gICAgY2hhcnM6IFwiXFx1QTczNlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0FWJyxcbiAgICBjaGFyczogXCJcXHVBNzM4XFx1QTczQVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0FZJyxcbiAgICBjaGFyczogXCJcXHVBNzNDXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnQicsXG4gICAgY2hhcnM6IFwiXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0MnLFxuICAgIGNoYXJzOiBcIlxcdTI0YjhcXHVmZjIzXFx1QTczRVxcdTFFMDhcXHUwMTA2XFx1MDA0M1xcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUwMTg3XFx1MDIzQlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0QnLFxuICAgIGNoYXJzOiBcIlxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEFcXHUwMTg5XFx1MUQwNVxcdUE3NzlcIixcbiAgfSwge1xuICAgIGJhc2U6ICdEaCcsXG4gICAgY2hhcnM6IFwiXFx1MDBEMFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0RaJyxcbiAgICBjaGFyczogXCJcXHUwMUYxXFx1MDFDNFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0R6JyxcbiAgICBjaGFyczogXCJcXHUwMUYyXFx1MDFDNVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0UnLFxuICAgIGNoYXJzOiBcIlxcdTAyNUJcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RVxcdTFEMDdcIixcbiAgfSwge1xuICAgIGJhc2U6ICdGJyxcbiAgICBjaGFyczogXCJcXHVBNzdDXFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JcIixcbiAgfSwge1xuICAgIGJhc2U6ICdHJyxcbiAgICBjaGFyczogXCJcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RVxcdTAyNjJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdIJyxcbiAgICBjaGFyczogXCJcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnSScsXG4gICAgY2hhcnM6IFwiXFx1MjRCRVxcdUZGMjlcXHhDQ1xceENEXFx4Q0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx4Q0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTdcIixcbiAgfSwge1xuICAgIGJhc2U6ICdKJyxcbiAgICBjaGFyczogXCJcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XFx1MDIzN1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ0snLFxuICAgIGNoYXJzOiBcIlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdMJyxcbiAgICBjaGFyczogXCJcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ0xKJyxcbiAgICBjaGFyczogXCJcXHUwMUM3XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnTGonLFxuICAgIGNoYXJzOiBcIlxcdTAxQzhcIixcbiAgfSwge1xuICAgIGJhc2U6ICdNJyxcbiAgICBjaGFyczogXCJcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXFx1MDNGQlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ04nLFxuICAgIGNoYXJzOiBcIlxcdUE3QTRcXHUwMjIwXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xceEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDE5RFxcdUE3OTBcXHUxRDBFXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnTkonLFxuICAgIGNoYXJzOiBcIlxcdTAxQ0FcIixcbiAgfSwge1xuICAgIGJhc2U6ICdOaicsXG4gICAgY2hhcnM6IFwiXFx1MDFDQlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ08nLFxuICAgIGNoYXJzOiBcIlxcdTI0QzRcXHVGRjJGXFx4RDJcXHhEM1xceEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxceEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx4RDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx4RDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ09FJyxcbiAgICBjaGFyczogXCJcXHUwMTUyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnT0knLFxuICAgIGNoYXJzOiBcIlxcdTAxQTJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdPTycsXG4gICAgY2hhcnM6IFwiXFx1QTc0RVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ09VJyxcbiAgICBjaGFyczogXCJcXHUwMjIyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnUCcsXG4gICAgY2hhcnM6IFwiXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnUScsXG4gICAgY2hhcnM6IFwiXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdSJyxcbiAgICBjaGFyczogXCJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnUycsXG4gICAgY2hhcnM6IFwiXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1QnLFxuICAgIGNoYXJzOiBcIlxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnVGgnLFxuICAgIGNoYXJzOiBcIlxcdTAwREVcIixcbiAgfSwge1xuICAgIGJhc2U6ICdUWicsXG4gICAgY2hhcnM6IFwiXFx1QTcyOFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ1UnLFxuICAgIGNoYXJzOiBcIlxcdTI0Q0FcXHVGRjM1XFx4RDlcXHhEQVxceERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHhEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRcIixcbiAgfSwge1xuICAgIGJhc2U6ICdWJyxcbiAgICBjaGFyczogXCJcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnVlknLFxuICAgIGNoYXJzOiBcIlxcdUE3NjBcIixcbiAgfSwge1xuICAgIGJhc2U6ICdXJyxcbiAgICBjaGFyczogXCJcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJcIixcbiAgfSwge1xuICAgIGJhc2U6ICdYJyxcbiAgICBjaGFyczogXCJcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnWScsXG4gICAgY2hhcnM6IFwiXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnWicsXG4gICAgY2hhcnM6IFwiXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2MlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2EnLFxuICAgIGNoYXJzOiBcIlxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBcXHUwMjUxXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnYWEnLFxuICAgIGNoYXJzOiBcIlxcdUE3MzNcIixcbiAgfSwge1xuICAgIGJhc2U6ICdhZScsXG4gICAgY2hhcnM6IFwiXFx1MDBFNlxcdTAxRkRcXHUwMUUzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnYW8nLFxuICAgIGNoYXJzOiBcIlxcdUE3MzVcIixcbiAgfSwge1xuICAgIGJhc2U6ICdhdScsXG4gICAgY2hhcnM6IFwiXFx1QTczN1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ2F2JyxcbiAgICBjaGFyczogXCJcXHVBNzM5XFx1QTczQlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2F5JyxcbiAgICBjaGFyczogXCJcXHVBNzNEXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnYicsXG4gICAgY2hhcnM6IFwiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcXHUwMTgyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnYycsXG4gICAgY2hhcnM6IFwiXFx1RkY0M1xcdTI0RDJcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZCcsXG4gICAgY2hhcnM6IFwiXFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1MDE4QlxcdTEzRTdcXHUwNTAxXFx1QTdBQVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2RoJyxcbiAgICBjaGFyczogXCJcXHUwMEYwXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZHonLFxuICAgIGNoYXJzOiBcIlxcdTAxRjNcXHUwMUM2XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZScsXG4gICAgY2hhcnM6IFwiXFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAxRERcIixcbiAgfSwge1xuICAgIGJhc2U6ICdmJyxcbiAgICBjaGFyczogXCJcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZmYnLFxuICAgIGNoYXJzOiBcIlxcdUZCMDBcIixcbiAgfSwge1xuICAgIGJhc2U6ICdmaScsXG4gICAgY2hhcnM6IFwiXFx1RkIwMVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2ZsJyxcbiAgICBjaGFyczogXCJcXHVGQjAyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZmZpJyxcbiAgICBjaGFyczogXCJcXHVGQjAzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZmZsJyxcbiAgICBjaGFyczogXCJcXHVGQjA0XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnZycsXG4gICAgY2hhcnM6IFwiXFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1QTc3RlxcdTFENzlcIixcbiAgfSwge1xuICAgIGJhc2U6ICdoJyxcbiAgICBjaGFyczogXCJcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2h2JyxcbiAgICBjaGFyczogXCJcXHUwMTk1XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnaScsXG4gICAgY2hhcnM6IFwiXFx1MjREOFxcdUZGNDlcXHhFQ1xceEVEXFx4RUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHhFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFcIixcbiAgfSwge1xuICAgIGJhc2U6ICdqJyxcbiAgICBjaGFyczogXCJcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ2snLFxuICAgIGNoYXJzOiBcIlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIixcbiAgfSwge1xuICAgIGJhc2U6ICdsJyxcbiAgICBjaGFyczogXCJcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDdcXHUwMjZEXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnbGonLFxuICAgIGNoYXJzOiBcIlxcdTAxQzlcIixcbiAgfSwge1xuICAgIGJhc2U6ICdtJyxcbiAgICBjaGFyczogXCJcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnbicsXG4gICAgY2hhcnM6IFwiXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxceEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVcXHUwNDNCXFx1MDUwOVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ25qJyxcbiAgICBjaGFyczogXCJcXHUwMUNDXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnbycsXG4gICAgY2hhcnM6IFwiXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHVBNzRCXFx1QTc0RFxcdTAyNzVcXHUwMjU0XFx1MUQxMVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ29lJyxcbiAgICBjaGFyczogXCJcXHUwMTUzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnb2knLFxuICAgIGNoYXJzOiBcIlxcdTAxQTNcIixcbiAgfSwge1xuICAgIGJhc2U6ICdvbycsXG4gICAgY2hhcnM6IFwiXFx1QTc0RlwiLFxuICB9LCB7XG4gICAgYmFzZTogJ291JyxcbiAgICBjaGFyczogXCJcXHUwMjIzXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAncCcsXG4gICAgY2hhcnM6IFwiXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XFx1MDNDMVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3EnLFxuICAgIGNoYXJzOiBcIlxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAncicsXG4gICAgY2hhcnM6IFwiXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M1wiLFxuICB9LCB7XG4gICAgYmFzZTogJ3MnLFxuICAgIGNoYXJzOiBcIlxcdTI0RTJcXHVGRjUzXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJcXHUwMjgyXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAnc3MnLFxuICAgIGNoYXJzOiBcIlxceERGXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAndCcsXG4gICAgY2hhcnM6IFwiXFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XCIsXG4gIH0sIHtcbiAgICBiYXNlOiAndGgnLFxuICAgIGNoYXJzOiBcIlxcdTAwRkVcIixcbiAgfSwge1xuICAgIGJhc2U6ICd0eicsXG4gICAgY2hhcnM6IFwiXFx1QTcyOVwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3UnLFxuICAgIGNoYXJzOiBcIlxcdTI0RTRcXHVGRjU1XFx4RjlcXHhGQVxceEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHhGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODlcIixcbiAgfSwge1xuICAgIGJhc2U6ICd2JyxcbiAgICBjaGFyczogXCJcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAndnknLFxuICAgIGNoYXJzOiBcIlxcdUE3NjFcIixcbiAgfSwge1xuICAgIGJhc2U6ICd3JyxcbiAgICBjaGFyczogXCJcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAneCcsXG4gICAgY2hhcnM6IFwiXFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RFwiLFxuICB9LCB7XG4gICAgYmFzZTogJ3knLFxuICAgIGNoYXJzOiBcIlxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCIsXG4gIH0sIHtcbiAgICBiYXNlOiAneicsXG4gICAgY2hhcnM6IFwiXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M1wiLFxuICB9XG5dO1xuXG52YXIgZGlhY3JpdGljc01hcCA9IHt9O1xuZm9yICh2YXIgaSA9IDA7IGkgPCByZXBsYWNlbWVudExpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgdmFyIGNoYXJzID0gcmVwbGFjZW1lbnRMaXN0W2ldLmNoYXJzO1xuICBmb3IgKHZhciBqID0gMDsgaiA8IGNoYXJzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgZGlhY3JpdGljc01hcFtjaGFyc1tqXV0gPSByZXBsYWNlbWVudExpc3RbaV0uYmFzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVEaWFjcml0aWNzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdlXS9nLCBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGRpYWNyaXRpY3NNYXBbY10gfHwgYztcbiAgfSk7XG59XG5cbmV4cG9ydHMucmVwbGFjZW1lbnRMaXN0ID0gcmVwbGFjZW1lbnRMaXN0O1xuZXhwb3J0cy5kaWFjcml0aWNzTWFwID0gZGlhY3JpdGljc01hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb2RlcyA9IHJlcXVpcmUoXCIuL2NvZGVzLmpzb25cIik7XG5jb25zdCBzdXBwb3J0ZWRMb2NhbGVzID0gcmVxdWlyZShcIi4vc3VwcG9ydGVkTG9jYWxlcy5qc29uXCIpO1xuY29uc3QgcmVtb3ZlRGlhY3JpdGljcyA9IHJlcXVpcmUoXCJkaWFjcml0aWNzXCIpLnJlbW92ZTtcbmNvbnN0IHJlZ2lzdGVyZWRMb2NhbGVzID0ge307XG5cbi8qXG4gKiBBbGwgY29kZXMgbWFwIHRvIElTTyAzMTY2LTEgYWxwaGEtMlxuICovXG5jb25zdCBhbHBoYTIgPSB7fSxcbiAgYWxwaGEzID0ge30sXG4gIG51bWVyaWMgPSB7fSxcbiAgaW52ZXJ0ZWROdW1lcmljID0ge307XG5cbmNvZGVzLmZvckVhY2goZnVuY3Rpb24gKGNvZGVJbmZvcm1hdGlvbikge1xuICBjb25zdCBzID0gY29kZUluZm9ybWF0aW9uO1xuICBhbHBoYTJbc1swXV0gPSBzWzFdO1xuICBhbHBoYTNbc1sxXV0gPSBzWzBdO1xuICBudW1lcmljW3NbMl1dID0gc1swXTtcbiAgaW52ZXJ0ZWROdW1lcmljW3NbMF1dID0gc1syXTtcbn0pO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICovXG5mdW5jdGlvbiBmb3JtYXROdW1lcmljQ29kZShjb2RlKSB7XG4gIHJldHVybiBTdHJpbmcoXCIwMDBcIiArIChjb2RlID8gY29kZSA6IFwiXCIpKS5zbGljZSgtMyk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEF2b2lkIHVzaW5nIG9iai5oYXNPd25Qcm9wZXJ0eSBkaXJlY3RseSBhcyBgaGFzT3duUHJvcGVydHlgIGNvdWxkIGJlIGFcbiAqIHByb3BlcnR5IGluIGl0c2VsZiAoeyBoYXNPd25Qcm9wZXJ0eTogMSB9KSBhbmQgY2F1c2Ugd2VpcmQgYnVnc1xuICogaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gKi9cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogUGFzcyBsb2NhbGVMaXN0IHRocm91Z2ggYSBmaWx0ZXIgYW5kIHJldHVybiBhIG5ld0xvY2FsZUxpc3Qgb2JqXG4gKiB3aXRoIHRoZSBzYW1lIHN0cnVjdHVyZSBvZiB0aGUgb2xkIGxvY2FsZUxpc3QuXG4gKlxuICogQHBhcmFtIHtMb2NhbGl6ZWRDb3VudHJ5TmFtZXN9IGxvY2FsZUxpc3QgIExvY2FsIExpc3QgaW4gcmF3XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaWx0ZXIgICAgY2FsbGJhY2sgdG8gc2V0IGZpbHRlciBydWxlXG4gKiBAcmV0dXJuIHtTdHJpbmcgfCBTdHJpbmdbXX0gbmV3IGZpbHRlcmVkIExvY2FsIExpc3RcbiAqL1xuZnVuY3Rpb24gbG9jYWxlRmlsdGVyKGxvY2FsZUxpc3QsIGZpbHRlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxlTGlzdCkucmVkdWNlKGZ1bmN0aW9uIChuZXdMb2NhbGVMaXN0LCBhbHBoYTIpIHtcbiAgICBjb25zdCBuYW1lTGlzdCA9IGxvY2FsZUxpc3RbYWxwaGEyXTtcbiAgICBuZXdMb2NhbGVMaXN0W2FscGhhMl0gPSBmaWx0ZXIobmFtZUxpc3QsIGFscGhhMik7XG4gICAgcmV0dXJuIG5ld0xvY2FsZUxpc3Q7XG4gIH0sIHt9KTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogUHJlc2VydmUgZm9yIGdldE5hbWUgJiBnZXROYW1lc1xuICpcbiAqIEBwYXJhbSB7R2V0TmFtZU9wdGlvbnMuc2VsZWN0fSB0eXBlIGFsbCB8IG9mZmljaWFsIHwgYWxpYXNcbiAqIEBwYXJhbSBjb3VudHJ5TmFtZUxpc3QgIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5J3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmljaWFsIG5hbWUgYW5kIGFsaWFzXG4gKiBAcmV0dXJuIHtTdHJpbmcgfCBTdHJpbmdbXX0gb2YgYSBjb3VudHJ5IG5hbWVcbiAqL1xuZnVuY3Rpb24gZmlsdGVyTmFtZUJ5KHR5cGUsIGNvdW50cnlOYW1lTGlzdCkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwib2ZmaWNpYWxcIjpcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvdW50cnlOYW1lTGlzdClcbiAgICAgICAgPyBjb3VudHJ5TmFtZUxpc3RbMF1cbiAgICAgICAgOiBjb3VudHJ5TmFtZUxpc3Q7XG5cbiAgICBjYXNlIFwiYWxsXCI6XG4gICAgICByZXR1cm4gdHlwZW9mIGNvdW50cnlOYW1lTGlzdCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IFtjb3VudHJ5TmFtZUxpc3RdXG4gICAgICAgIDogY291bnRyeU5hbWVMaXN0O1xuXG4gICAgY2FzZSBcImFsaWFzXCI6XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb3VudHJ5TmFtZUxpc3QpXG4gICAgICAgID8gY291bnRyeU5hbWVMaXN0WzFdIHx8IGNvdW50cnlOYW1lTGlzdFswXVxuICAgICAgICA6IGNvdW50cnlOYW1lTGlzdDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIkxvY2FsZU5hbWVUeXBlIG11c3QgYmUgb25lIG9mIHRoZXNlOiBhbGwsIG9mZmljaWFsLCBhbGlhcyFcIlxuICAgICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGNvdW50cmllcyBpbiBicm93c2VycycgZW52aXJvbm1lbnQ6XG4gKiBAcGFyYW0ge29iamVjdH0gbG9jYWxlRGF0YVxuICogQGV4YW1wbGUgY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKHJlcXVpcmUoXCJpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvblwiKSk7XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZXhwb3J0cy5yZWdpc3RlckxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGVEYXRhKSB7XG4gIGlmICghbG9jYWxlRGF0YS5sb2NhbGUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBsb2NhbGVEYXRhLmxvY2FsZVwiKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlRGF0YS5jb3VudHJpZXMpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBsb2NhbGVEYXRhLmNvdW50cmllc1wiKTtcbiAgfVxuXG4gIHJlZ2lzdGVyZWRMb2NhbGVzW2xvY2FsZURhdGEubG9jYWxlXSA9IGxvY2FsZURhdGEuY291bnRyaWVzO1xufTtcblxuLypcbiAqIEBwYXJhbSBjb2RlIEFscGhhLTMgY29kZVxuICogQHJldHVybiBBbHBoYS0yIGNvZGUgb3IgdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFscGhhM1RvQWxwaGEyKGNvZGUpIHtcbiAgcmV0dXJuIGFscGhhM1tjb2RlXTtcbn1cbmV4cG9ydHMuYWxwaGEzVG9BbHBoYTIgPSBhbHBoYTNUb0FscGhhMjtcblxuLypcbiAqIEBwYXJhbSBjb2RlIEFscGhhLTIgY29kZVxuICogQHJldHVybiBBbHBoYS0zIGNvZGUgb3IgdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFscGhhMlRvQWxwaGEzKGNvZGUpIHtcbiAgcmV0dXJuIGFscGhhMltjb2RlXTtcbn1cbmV4cG9ydHMuYWxwaGEyVG9BbHBoYTMgPSBhbHBoYTJUb0FscGhhMztcblxuLypcbiAqIEBwYXJhbSBjb2RlIEFscGhhLTMgY29kZVxuICogQHJldHVybiBOdW1lcmljIGNvZGUgb3IgdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGFscGhhM1RvTnVtZXJpYyhjb2RlKSB7XG4gIHJldHVybiBpbnZlcnRlZE51bWVyaWNbYWxwaGEzVG9BbHBoYTIoY29kZSldO1xufVxuZXhwb3J0cy5hbHBoYTNUb051bWVyaWMgPSBhbHBoYTNUb051bWVyaWM7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBBbHBoYS0yIGNvZGVcbiAqIEByZXR1cm4gTnVtZXJpYyBjb2RlIG9yIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBhbHBoYTJUb051bWVyaWMoY29kZSkge1xuICByZXR1cm4gaW52ZXJ0ZWROdW1lcmljW2NvZGVdO1xufVxuZXhwb3J0cy5hbHBoYTJUb051bWVyaWMgPSBhbHBoYTJUb051bWVyaWM7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBOdW1lcmljIGNvZGVcbiAqIEByZXR1cm4gQWxwaGEtMyBjb2RlIG9yIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBudW1lcmljVG9BbHBoYTMoY29kZSkge1xuICBjb25zdCBwYWRkZWQgPSBmb3JtYXROdW1lcmljQ29kZShjb2RlKTtcbiAgcmV0dXJuIGFscGhhMlRvQWxwaGEzKG51bWVyaWNbcGFkZGVkXSk7XG59XG5leHBvcnRzLm51bWVyaWNUb0FscGhhMyA9IG51bWVyaWNUb0FscGhhMztcblxuLypcbiAqIEBwYXJhbSBjb2RlIE51bWVyaWMgY29kZVxuICogQHJldHVybiBBbHBoYS0yIGNvZGUgb3IgdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIG51bWVyaWNUb0FscGhhMihjb2RlKSB7XG4gIGNvbnN0IHBhZGRlZCA9IGZvcm1hdE51bWVyaWNDb2RlKGNvZGUpO1xuICByZXR1cm4gbnVtZXJpY1twYWRkZWRdO1xufVxuZXhwb3J0cy5udW1lcmljVG9BbHBoYTIgPSBudW1lcmljVG9BbHBoYTI7XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBJU08gMzE2Ni0xIGFscGhhLTIsIGFscGhhLTMgb3IgbnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtM1xuICovXG5mdW5jdGlvbiB0b0FscGhhMyhjb2RlKSB7XG4gIGlmICh0eXBlb2YgY29kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmICgvXlswLTldKiQvLnRlc3QoY29kZSkpIHtcbiAgICAgIHJldHVybiBudW1lcmljVG9BbHBoYTMoY29kZSk7XG4gICAgfVxuICAgIGlmIChjb2RlLmxlbmd0aCA9PT0gMikge1xuICAgICAgcmV0dXJuIGFscGhhMlRvQWxwaGEzKGNvZGUudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmIChjb2RlLmxlbmd0aCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvZGUudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBjb2RlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG51bWVyaWNUb0FscGhhMyhjb2RlKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy50b0FscGhhMyA9IHRvQWxwaGEzO1xuXG4vKlxuICogQHBhcmFtIGNvZGUgSVNPIDMxNjYtMSBhbHBoYS0yLCBhbHBoYS0zIG9yIG51bWVyaWMgY29kZVxuICogQHJldHVybiBJU08gMzE2Ni0xIGFscGhhLTJcbiAqL1xuZnVuY3Rpb24gdG9BbHBoYTIoY29kZSkge1xuICBpZiAodHlwZW9mIGNvZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAoL15bMC05XSokLy50ZXN0KGNvZGUpKSB7XG4gICAgICByZXR1cm4gbnVtZXJpY1RvQWxwaGEyKGNvZGUpO1xuICAgIH1cbiAgICBpZiAoY29kZS5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiBjb2RlLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChjb2RlLmxlbmd0aCA9PT0gMykge1xuICAgICAgcmV0dXJuIGFscGhhM1RvQWxwaGEyKGNvZGUudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgY29kZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBudW1lcmljVG9BbHBoYTIoY29kZSk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMudG9BbHBoYTIgPSB0b0FscGhhMjtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IEFscGhhMkNvZGUgfCBBbHBoYTNDb2RlfSBjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZyAgICAgICAgICBsYW5ndWFnZSBmb3IgY291bnRyeSBuYW1lXG4gKiBAcGFyYW0ge0dldE5hbWVPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmcgfCBTdHJpbmdbXSB8IHVuZGVmaW5lZH0gIG5hbWVcbiAqL1xuZXhwb3J0cy5nZXROYW1lID0gZnVuY3Rpb24gKGNvZGUsIGxhbmcsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIShcInNlbGVjdFwiIGluIG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucy5zZWxlY3QgPSBcIm9mZmljaWFsXCI7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBjb2RlTWFwcyA9IHJlZ2lzdGVyZWRMb2NhbGVzW2xhbmcudG9Mb3dlckNhc2UoKV07XG4gICAgY29uc3QgbmFtZUxpc3QgPSBjb2RlTWFwc1t0b0FscGhhMihjb2RlKV07XG4gICAgcmV0dXJuIGZpbHRlck5hbWVCeShvcHRpb25zLnNlbGVjdCwgbmFtZUxpc3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5nICAgICAgICAgICAgIGxhbmd1YWdlIGZvciBjb3VudHJ5IG5hbWVzXG4gKiBAcGFyYW0ge0dldE5hbWVPcHRpb25zfSBvcHRpb25zICAgZ2V0TmFtZXMgT3B0aW9uc1xuICogQHJldHVybiB7TG9jYWxpemVkQ291bnRyeU5hbWVzfSAgY291bnRyeSBjb2RlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwZWQgdG8gY291bnR5IG5hbWVcbiAqL1xuZXhwb3J0cy5nZXROYW1lcyA9IGZ1bmN0aW9uIChsYW5nLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKCEoXCJzZWxlY3RcIiBpbiBvcHRpb25zKSkge1xuICAgIG9wdGlvbnMuc2VsZWN0ID0gXCJvZmZpY2lhbFwiO1xuICB9XG4gIGNvbnN0IGxvY2FsZUxpc3QgPSByZWdpc3RlcmVkTG9jYWxlc1tsYW5nLnRvTG93ZXJDYXNlKCldO1xuICBpZiAobG9jYWxlTGlzdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4ge307XG4gIHJldHVybiBsb2NhbGVGaWx0ZXIobG9jYWxlTGlzdCwgZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgcmV0dXJuIGZpbHRlck5hbWVCeShvcHRpb25zLnNlbGVjdCwgbmFtZUxpc3QpO1xuICB9KTtcbn07XG5cbi8qXG4gKiBAcGFyYW0gbmFtZSBuYW1lXG4gKiBAcGFyYW0gbGFuZyBsYW5ndWFnZSBmb3IgY291bnRyeSBuYW1lXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtMiBvciB1bmRlZmluZWRcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTJDb2RlID0gZnVuY3Rpb24gKG5hbWUsIGxhbmcpIHtcbiAgY29uc3Qgbm9ybWFsaXplU3RyaW5nID0gKHN0cmluZykgPT4gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGFyZVNpbWlsYXIgPSAoYSwgYikgPT4gbm9ybWFsaXplU3RyaW5nKGEpID09PSBub3JtYWxpemVTdHJpbmcoYik7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb2RlbmFtZXMgPSByZWdpc3RlcmVkTG9jYWxlc1tsYW5nLnRvTG93ZXJDYXNlKCldO1xuICAgIGZvciAoY29uc3QgcCBpbiBjb2RlbmFtZXMpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkoY29kZW5hbWVzLCBwKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29kZW5hbWVzW3BdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChhcmVTaW1pbGFyKGNvZGVuYW1lc1twXSwgbmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29kZW5hbWVzW3BdKSkge1xuICAgICAgICBmb3IgKGNvbnN0IG1hcHBlZE5hbWUgb2YgY29kZW5hbWVzW3BdKSB7XG4gICAgICAgICAgaWYgKGFyZVNpbWlsYXIobWFwcGVkTmFtZSwgbmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vKlxuICogQHBhcmFtIG5hbWUgbmFtZVxuICogQHBhcmFtIGxhbmcgbGFuZ3VhZ2UgZm9yIGNvdW50cnkgbmFtZVxuICogQHJldHVybiBJU08gMzE2Ni0xIGFscGhhLTIgb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZ2V0U2ltcGxlQWxwaGEyQ29kZSA9IGZ1bmN0aW9uIChuYW1lLCBsYW5nKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHJlbW92ZURpYWNyaXRpY3Moc3RyaW5nLnRvTG93ZXJDYXNlKCkpO1xuICBjb25zdCBhcmVTaW1pbGFyID0gKGEsIGIpID0+IG5vcm1hbGl6ZVN0cmluZyhhKSA9PT0gbm9ybWFsaXplU3RyaW5nKGIpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY29kZW5hbWVzID0gcmVnaXN0ZXJlZExvY2FsZXNbbGFuZy50b0xvd2VyQ2FzZSgpXTtcbiAgICBmb3IgKGNvbnN0IHAgaW4gY29kZW5hbWVzKSB7XG4gICAgICBpZiAoIWhhc093blByb3BlcnR5KGNvZGVuYW1lcywgcCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNvZGVuYW1lc1twXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoYXJlU2ltaWxhcihjb2RlbmFtZXNbcF0sIG5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvZGVuYW1lc1twXSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBtYXBwZWROYW1lIG9mIGNvZGVuYW1lc1twXSkge1xuICAgICAgICAgIGlmIChhcmVTaW1pbGFyKG1hcHBlZE5hbWUsIG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLypcbiAqIEByZXR1cm4gT2JqZWN0IG9mIGFscGhhLTIgY29kZXMgbWFwcGVkIHRvIGFscGhhLTMgY29kZXNcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTJDb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGFscGhhMjtcbn07XG5cbi8qXG4gKiBAcGFyYW0gbmFtZSBuYW1lXG4gKiBAcGFyYW0gbGFuZyBsYW5ndWFnZSBmb3IgY291bnRyeSBuYW1lXG4gKiBAcmV0dXJuIElTTyAzMTY2LTEgYWxwaGEtMyBvciB1bmRlZmluZWRcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTNDb2RlID0gZnVuY3Rpb24gKG5hbWUsIGxhbmcpIHtcbiAgY29uc3QgYWxwaGEyID0gZXhwb3J0cy5nZXRBbHBoYTJDb2RlKG5hbWUsIGxhbmcpO1xuICBpZiAoYWxwaGEyKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMudG9BbHBoYTMoYWxwaGEyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vKlxuICogQHBhcmFtIG5hbWUgbmFtZVxuICogQHBhcmFtIGxhbmcgbGFuZ3VhZ2UgZm9yIGNvdW50cnkgbmFtZVxuICogQHJldHVybiBJU08gMzE2Ni0xIGFscGhhLTMgb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZ2V0U2ltcGxlQWxwaGEzQ29kZSA9IGZ1bmN0aW9uIChuYW1lLCBsYW5nKSB7XG4gIGNvbnN0IGFscGhhMiA9IGV4cG9ydHMuZ2V0U2ltcGxlQWxwaGEyQ29kZShuYW1lLCBsYW5nKTtcbiAgaWYgKGFscGhhMikge1xuICAgIHJldHVybiBleHBvcnRzLnRvQWxwaGEzKGFscGhhMik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLypcbiAqIEByZXR1cm4gT2JqZWN0IG9mIGFscGhhLTMgY29kZXMgbWFwcGVkIHRvIGFscGhhLTIgY29kZXNcbiAqL1xuZXhwb3J0cy5nZXRBbHBoYTNDb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGFscGhhMztcbn07XG5cbi8qXG4gKiBAcmV0dXJuIE9iamVjdCBvZiBudW1lcmljIGNvZGVzIG1hcHBlZCB0byBhbHBoYS0yIGNvZGVzXG4gKi9cbmV4cG9ydHMuZ2V0TnVtZXJpY0NvZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbnVtZXJpYztcbn07XG5cbi8qXG4gKiBAcmV0dXJuIEFycmF5IG9mIHJlZ2lzdGVyZWQgbGFuZ3VhZ2VzXG4gKi9cbmV4cG9ydHMubGFuZ3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhyZWdpc3RlcmVkTG9jYWxlcyk7XG59O1xuXG4vKlxuICogQHJldHVybiBBcnJheSBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKi9cbmV4cG9ydHMuZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gc3VwcG9ydGVkTG9jYWxlcztcbn07XG5cbi8qXG4gKiBAcGFyYW0gY29kZSBJU08gMzE2Ni0xIGFscGhhLTIsIGFscGhhLTMgb3IgbnVtZXJpYyBjb2RlXG4gKiBAcmV0dXJuIEJvb2xlYW5cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgaWYgKCFjb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY29lcmNlZCA9IGNvZGUudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKFxuICAgIGhhc093blByb3BlcnR5KGFscGhhMywgY29lcmNlZCkgfHxcbiAgICBoYXNPd25Qcm9wZXJ0eShhbHBoYTIsIGNvZXJjZWQpIHx8XG4gICAgaGFzT3duUHJvcGVydHkobnVtZXJpYywgY29lcmNlZClcbiAgKTtcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRGb3JtYXQocG9zdGFsQ29kZUZvcm1hdCkge1xuICAgIC8vdXNlIGV2YWwocmVxdWlyZSkgdG8gd29ya2Fyb3VuZCB3ZWJwYWNrIHdoaWNoIGNhbid0IHJlcXVpcmUgZHluYW1pYyBwYXRoXG4gICAgcmV0dXJuIGV2YWwoJ3JlcXVpcmUnKShwYXRoLmpvaW4oX19kaXJuYW1lLCAnZm9ybWF0cycsIHBvc3RhbENvZGVGb3JtYXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmb3JtYXRzID0ge307XG5cbmZvcm1hdHNbXCIxMERpZ2l0cy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy8xMERpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjJEaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvMkRpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjNEaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvM0RpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjREaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvNERpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjVEaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvNURpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjZEaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvNkRpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjdEaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvN0RpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIjhEaWdpdHMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvOERpZ2l0cy5qc29uXCIpO1xuZm9ybWF0c1tcIkFELmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0FELmpzb25cIik7XG5mb3JtYXRzW1wiQUkuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvQUkuanNvblwiKTtcbmZvcm1hdHNbXCJBUS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9BUS5qc29uXCIpO1xuZm9ybWF0c1tcIkFYLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0FYLmpzb25cIik7XG5mb3JtYXRzW1wiQVouanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvQVouanNvblwiKTtcbmZvcm1hdHNbXCJCQi5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9CQi5qc29uXCIpO1xuZm9ybWF0c1tcIkJILmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0JILmpzb25cIik7XG5mb3JtYXRzW1wiQkwuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvQkwuanNvblwiKTtcbmZvcm1hdHNbXCJCTi5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9CTi5qc29uXCIpO1xuZm9ybWF0c1tcIkNBLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0NBLmpzb25cIik7XG5mb3JtYXRzW1wiREsuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvREsuanNvblwiKTtcbmZvcm1hdHNbXCJGSy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9GSy5qc29uXCIpO1xuZm9ybWF0c1tcIkdCLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0dCLmpzb25cIik7XG5mb3JtYXRzW1wiR0YuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvR0YuanNvblwiKTtcbmZvcm1hdHNbXCJHRy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9HRy5qc29uXCIpO1xuZm9ybWF0c1tcIkdJLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0dJLmpzb25cIik7XG5mb3JtYXRzW1wiR1AuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvR1AuanNvblwiKTtcbmZvcm1hdHNbXCJHUy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9HUy5qc29uXCIpO1xuZm9ybWF0c1tcIkhOLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0hOLmpzb25cIik7XG5mb3JtYXRzW1wiSUUuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvSUUuanNvblwiKTtcbmZvcm1hdHNbXCJJTS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9JTS5qc29uXCIpO1xuZm9ybWF0c1tcIklPLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0lPLmpzb25cIik7XG5mb3JtYXRzW1wiSkUuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvSkUuanNvblwiKTtcbmZvcm1hdHNbXCJLWS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9LWS5qc29uXCIpO1xuZm9ybWF0c1tcIkxCLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0xCLmpzb25cIik7XG5mb3JtYXRzW1wiTEMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvTEMuanNvblwiKTtcbmZvcm1hdHNbXCJMVC5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9MVC5qc29uXCIpO1xuZm9ybWF0c1tcIkxVLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL0xVLmpzb25cIik7XG5mb3JtYXRzW1wiTFYuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvTFYuanNvblwiKTtcbmZvcm1hdHNbXCJNQy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9NQy5qc29uXCIpO1xuZm9ybWF0c1tcIk1ELmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL01ELmpzb25cIik7XG5mb3JtYXRzW1wiTUYuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvTUYuanNvblwiKTtcbmZvcm1hdHNbXCJNUy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9NUy5qc29uXCIpO1xuZm9ybWF0c1tcIk1ULmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL01ULmpzb25cIik7XG5mb3JtYXRzW1wiTkMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvTkMuanNvblwiKTtcbmZvcm1hdHNbXCJOTC5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9OTC5qc29uXCIpO1xuZm9ybWF0c1tcIlBGLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1BGLmpzb25cIik7XG5mb3JtYXRzW1wiUEwuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvUEwuanNvblwiKTtcbmZvcm1hdHNbXCJQTS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9QTS5qc29uXCIpO1xuZm9ybWF0c1tcIlBOLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1BOLmpzb25cIik7XG5mb3JtYXRzW1wiUFQuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvUFQuanNvblwiKTtcbmZvcm1hdHNbXCJSRS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9SRS5qc29uXCIpO1xuZm9ybWF0c1tcIlJVLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1JVLmpzb25cIik7XG5mb3JtYXRzW1wiU0guanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvU0guanNvblwiKTtcbmZvcm1hdHNbXCJTTS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9TTS5qc29uXCIpO1xuZm9ybWF0c1tcIlNPLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1NPLmpzb25cIik7XG5mb3JtYXRzW1wiU1ouanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvU1ouanNvblwiKTtcbmZvcm1hdHNbXCJUQy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9UQy5qc29uXCIpO1xuZm9ybWF0c1tcIlRXLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1RXLmpzb25cIik7XG5mb3JtYXRzW1wiVVMuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvVVMuanNvblwiKTtcbmZvcm1hdHNbXCJWQS5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9WQS5qc29uXCIpO1xuZm9ybWF0c1tcIlZDLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1ZDLmpzb25cIik7XG5mb3JtYXRzW1wiVkUuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvVkUuanNvblwiKTtcbmZvcm1hdHNbXCJWRy5qc29uXCJdID0gcmVxdWlyZShcIi4vZm9ybWF0cy9WRy5qc29uXCIpO1xuZm9ybWF0c1tcIldGLmpzb25cIl0gPSByZXF1aXJlKFwiLi9mb3JtYXRzL1dGLmpzb25cIik7XG5mb3JtYXRzW1wiV1MuanNvblwiXSA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMvV1MuanNvblwiKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEZvcm1hdChwb3N0YWxDb2RlRm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdHNbcG9zdGFsQ29kZUZvcm1hdF07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYnlBbHBoYTIgPSByZXF1aXJlKCcuL2dlbmVyYXRlZC9wb3N0YWwtY29kZXMtYWxwaGEyLmpzb24nKTtcbmNvbnN0IGJ5QWxwaGEzID0gcmVxdWlyZSgnLi9nZW5lcmF0ZWQvcG9zdGFsLWNvZGVzLWFscGhhMy5qc29uJyk7XG5jb25zdCBpc05vZGUgPSByZXF1aXJlKCdkZXRlY3Qtbm9kZScpO1xuXG52YXIgZ2V0Rm9ybWF0ID0gbnVsbDtcbmlmICggaXNOb2RlICkge1xuICAgIGdldEZvcm1hdCA9IHJlcXVpcmUoXCIuL2Zvcm1hdHMtbm9kZVwiKTtcbn0gZWxzZSB7XG4gICAgZ2V0Rm9ybWF0ID0gcmVxdWlyZShcIi4vZm9ybWF0cy13ZWJcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKGNvdW50cnlDb2RlLCBwb3N0YWxDb2RlKSB7XG5cbiAgICBpZiAoICFjb3VudHJ5Q29kZSApIHtcbiAgICAgICAgcmV0dXJuIFwiTWlzc2luZyBjb3VudHJ5IGNvZGUuXCI7XG4gICAgfVxuXG4gICAgaWYgKCAhcG9zdGFsQ29kZSApIHtcbiAgICAgICAgcmV0dXJuICdNaXNzaW5nIHBvc3RhbCBjb2RlLic7XG4gICAgfVxuXG4gICAgdmFyIGNvdW50cnlEYXRhID0gdW5kZWZpbmVkO1xuICAgIHZhciBwcmVwYXJlZENvdW50cnlDb2RlID0gY291bnRyeUNvZGUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvLyBJcyBpdCBhbHBoYTIgP1xuICAgIGlmICggcHJlcGFyZWRDb3VudHJ5Q29kZS5sZW5ndGggPT0gMiApIHtcbiAgICAgICAgY291bnRyeURhdGEgPSBieUFscGhhMltwcmVwYXJlZENvdW50cnlDb2RlXTtcbiAgICB9XG5cbiAgICAvLyBJcyBpdCBhbHBoYTMgP1xuICAgIGlmICggcHJlcGFyZWRDb3VudHJ5Q29kZS5sZW5ndGggPT0gMyApIHtcbiAgICAgICAgY291bnRyeURhdGEgPSBieUFscGhhM1twcmVwYXJlZENvdW50cnlDb2RlXTtcbiAgICB9XG5cbiAgICBpZiAoICFjb3VudHJ5RGF0YSApIHtcbiAgICAgICAgcmV0dXJuICdVbmtub3duIGFscGhhMi9hbHBoYTMgY291bnRyeSBjb2RlOiAnICsgcHJlcGFyZWRDb3VudHJ5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY291bnRyeS9yZWdpb24gZG9lcyBub3QgdXNlIHBvc3RhbCBjb2Rlc1xuICAgIGlmICggIWNvdW50cnlEYXRhLnBvc3RhbENvZGVGb3JtYXQgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXQgPSBnZXRGb3JtYXQoY291bnRyeURhdGEucG9zdGFsQ29kZUZvcm1hdCk7XG4gICAgaWYgKCAhZm9ybWF0ICkge1xuICAgICAgICByZXR1cm4gJ0ZhaWxlZCB0byBsb2FkIHBvc3RhbCBjb2RlIGZvcm1hdCBcIicgKyBjb3VudHJ5RGF0YS5wb3N0YWxDb2RlRm9ybWF0ICsgJ1wiLic7XG4gICAgfVxuXG4gICAgdmFyIHByZXBhcmVkUG9zdGFsQ29kZSA9IHBvc3RhbENvZGUudG9TdHJpbmcoKS50cmltKCkuc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXQuUmVkdW5kYW50Q2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcmVwYXJlZFBvc3RhbENvZGUgPSBwcmVwYXJlZFBvc3RhbENvZGUucmVwbGFjZShuZXcgUmVnRXhwKGZvcm1hdC5SZWR1bmRhbnRDaGFyYWN0ZXJzW2ldLCAnZycpLCAnJyk7XG4gICAgfVxuXG4gICAgdmFyIGV4cHJlc3Npb24gPSBmb3JtYXQuVmFsaWRhdGlvblJlZ2V4O1xuICAgIGlmICggZXhwcmVzc2lvbiBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgICAgICBleHByZXNzaW9uID0gJ14nICsgZXhwcmVzc2lvbi5qb2luKCd8JykgKyAnJCc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChleHByZXNzaW9uLCAnaScpO1xuICAgIHZhciByZXN1bHQgPSByZWdleHAuZXhlYyhwcmVwYXJlZFBvc3RhbENvZGUpO1xuXG4gICAgaWYgKCAhcmVzdWx0ICkge1xuICAgICAgICAvLyBJbnZhbGlkIHBvc3RhbCBjb2RlXG4gICAgICAgIHJldHVybiBcIlBvc3RhbCBjb2RlIFwiICsgcHJlcGFyZWRQb3N0YWxDb2RlICsgXCIgaXMgbm90IHZhbGlkIGZvciBjb3VudHJ5IFwiICsgcHJlcGFyZWRDb3VudHJ5Q29kZTtcbiAgICB9XG5cbiAgICBpZiAoIHJlc3VsdFswXS50b0xvd2VyQ2FzZSgpICE9IHByZXBhcmVkUG9zdGFsQ29kZS50b0xvd2VyQ2FzZSgpICkge1xuICAgICAgICAvLyBGb3VuZCBcInN1YlwiIG1hdGNoXG4gICAgICAgIHJldHVybiBcIlBvc3RhbCBjb2RlIFwiICsgcHJlcGFyZWRQb3N0YWxDb2RlICsgXCIgaXMgbm90IHZhbGlkIGZvciBjb3VudHJ5IFwiICsgcHJlcGFyZWRDb3VudHJ5Q29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgeyBQT1NUQ09ERV9SRUdFWEVTIH0gZnJvbSAnLi9wb3N0Y29kZS1yZWdleGVzJztcbmV4cG9ydCB7IENvdW50cnlDb2RlIH0gZnJvbSAnLi9wb3N0Y29kZS10eXBlcyc7XG5leHBvcnQgY29uc3QgcG9zdGNvZGVWYWxpZGF0b3IgPSAocG9zdGNvZGUsIGNvdW50cnkpID0+IHtcbiAgICBpZiAoIVBPU1RDT0RFX1JFR0VYRVMuaGFzKGNvdW50cnkpKSB7XG4gICAgICAgIC8vIHRocm93IEVycm9yIGlmIGNvdW50cnkgY29kZSBpcyB1bnJlY29nbmlzZWRcbiAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgY291bnRyeSBjb2RlOiAke2NvdW50cnl9YCk7XG4gICAgfVxuICAgIHJldHVybiBQT1NUQ09ERV9SRUdFWEVTLmdldChjb3VudHJ5KS50ZXN0KHBvc3Rjb2RlKTtcbn07XG5leHBvcnQgY29uc3QgcG9zdGNvZGVWYWxpZGF0b3JFeGlzdHNGb3JDb3VudHJ5ID0gKGNvdW50cnkpID0+IHtcbiAgICByZXR1cm4gUE9TVENPREVfUkVHRVhFUy5oYXMoY291bnRyeSk7XG59O1xuIiwiaW1wb3J0IHsgQ291bnRyeUNvZGUgfSBmcm9tICcuL3Bvc3Rjb2RlLXR5cGVzJztcbi8vIFRPRE86IFJlbW92ZSBDb3VudHJ5Q29kZS5VSyBpbiBuZXh0IG1ham9yIHZlcnNpb24gcmVsZWFzZVxuZXhwb3J0IGNvbnN0IFBPU1RDT0RFX1JFR0VYRVMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgIENvdW50cnlDb2RlLlVLLFxuICAgICAgICAvXihbQS1aXSl7MX0oWzAtOV1bMC05XXxbMC05XXxbQS1aXVswLTldW0EtWl18W0EtWl1bMC05XVswLTldfFtBLVpdWzAtOV18WzAtOV1bQS1aXSl7MX0oWyBdKT8oWzAtOV1bQS16XVtBLXpdKXsxfSQvaSxcbiAgICBdLFxuICAgIFtcbiAgICAgICAgQ291bnRyeUNvZGUuR0IsXG4gICAgICAgIC9eKFtBLVpdKXsxfShbMC05XVswLTldfFswLTldfFtBLVpdWzAtOV1bQS1aXXxbQS1aXVswLTldWzAtOV18W0EtWl1bMC05XXxbMC05XVtBLVpdKXsxfShbIF0pPyhbMC05XVtBLXpdW0Etel0pezF9JC9pLFxuICAgIF0sXG4gICAgW0NvdW50cnlDb2RlLkpFLCAvXkpFXFxkW1xcZEEtWl0/WyBdP1xcZFtBQkQtSEpMTi1VVy1aXXsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuR0csIC9eR1lcXGRbXFxkQS1aXT9bIF0/XFxkW0FCRC1ISkxOLVVXLVpdezJ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5JTSwgL15JTVxcZFtcXGRBLVpdP1sgXT9cXGRbQUJELUhKTE4tVVctWl17Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLlVTLCAvXihbMC05XXs1fSkoPzotKFswLTldezR9KSk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DQSwgL14oW0FCQ0VHSEpLTE1OUFJTVFZYWV1bMC05XVtBQkNFR0hKS0xNTlBSU1RWV1hZWl0pXFxzKihbMC05XVtBQkNFR0hKS0xNTlBSU1RWV1hZWl1bMC05XSkkL2ldLFxuICAgIFtDb3VudHJ5Q29kZS5JRSwgL14oW0FDLUZIS05QUlRWLVldWzAtOV17Mn18RDZXKVsgLV0/WzAtOUFDLUZIS05QUlRWLVldezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5ERSwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLkpQLCAvXlxcZHszfS1cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkZSLCAvXlxcZHsyfVsgXT9cXGR7M30kL10sXG4gICAgW0NvdW50cnlDb2RlLkFVLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuSVQsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DSCwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkFULCAvXig/ITApXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5FUywgL14oPzowWzEtOV18WzEtNF1cXGR8NVswLTJdKVxcZHszfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTkwsIC9eXFxkezR9WyBdP1tBLVpdezJ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5CRSwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkRLLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuU0UsIC9eKFNFLSk/XFxkezN9WyBdP1xcZHsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTk8sIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5CUiwgL15cXGR7NX1bXFwtXT9cXGR7M30kL10sXG4gICAgW0NvdW50cnlDb2RlLlBULCAvXlxcZHs0fShbXFwtXVxcZHszfSk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5GSSwgL14oRkktfEFYLSk/XFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5BWCwgL14yMlxcZHszfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuS1IsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DTiwgL15cXGR7Nn0kL10sXG4gICAgW0NvdW50cnlDb2RlLlRXLCAvXlxcZHszfShcXGR7Mn0pPyQvXSxcbiAgICBbQ291bnRyeUNvZGUuU0csIC9eXFxkezZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5EWiwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLkFELCAvXkFEXFxkezN9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5BUiwgL14oW0EtSEotTlAtWl0pP1xcZHs0fShbQS1aXXszfSk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5BTSwgL14oMzcpP1xcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuQVosIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5CSCwgL14oKDFbMC0yXXxbMi05XSlcXGR7Mn0pPyQvXSxcbiAgICBbQ291bnRyeUNvZGUuQkQsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5CQiwgL14oQkJcXGR7NX0pPyQvXSxcbiAgICBbQ291bnRyeUNvZGUuQlksIC9eXFxkezZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5CTSwgL15bQS1aXXsyfVsgXT9bQS1aMC05XXsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuQkEsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5JTywgL15CQk5EIDFaWiQvXSxcbiAgICBbQ291bnRyeUNvZGUuQk4sIC9eW0EtWl17Mn1bIF0/XFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5CRywgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLktILCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuQ1YsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DTCwgL15cXGR7N30kL10sXG4gICAgW0NvdW50cnlDb2RlLkNSLCAvXihcXGR7NCw1fXxcXGR7M30tXFxkezR9KSQvXSxcbiAgICBbQ291bnRyeUNvZGUuSFIsIC9eKEhSLSk/XFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DWSwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkNaLCAvXlxcZHszfVsgXT9cXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLkRPLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuRUMsIC9eKFtBLVpdXFxkezR9W0EtWl18KD86W0EtWl17Mn0pP1xcZHs2fSk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5FRywgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLkVFLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuRk8sIC9eXFxkezN9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5HRSwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkdSLCAvXlxcZHszfVsgXT9cXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLkdMLCAvXjM5XFxkezJ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5HVCwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLkhULCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuSE4sIC9eKD86XFxkezV9KT8kL10sXG4gICAgW0NvdW50cnlDb2RlLkhVLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuSVMsIC9eXFxkezN9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5JTiwgL15cXGR7Nn0kL10sXG4gICAgW0NvdW50cnlDb2RlLklELCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuSUwsIC9eXFxkezUsN30kL10sXG4gICAgW0NvdW50cnlDb2RlLkpPLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuS1osIC9eXFxkezZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5LRSwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLktXLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuS1ksIC9eS1lbMTIzXS1cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkxBLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTFYsIC9eKExWLSk/XFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5MQiwgL14oXFxkezR9KFsgXT9cXGR7NH0pPyk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5MSSwgL14oOTQ4WzUtOV0pfCg5NDlbMC03XSkkL10sXG4gICAgW0NvdW50cnlDb2RlLkxULCAvXihMVC0pP1xcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTFUsIC9eKEwtKT9cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLk1LLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTVksIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5NViwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLk1ULCAvXltBLVpdezN9WyBdP1xcZHsyLDR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5NVSwgL14oKFxcZHxbQS1aXSlcXGR7NH0pPyQvXSxcbiAgICBbQ291bnRyeUNvZGUuTVgsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5NRCwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLk1DLCAvXjk4MFxcZHsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTUEsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5OUCwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLk5aLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTkksIC9eKChcXGR7NH0tKT9cXGR7M30tXFxkezN9KC1cXGR7MX0pPyk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5ORywgL14oXFxkezZ9KT8kL10sXG4gICAgW0NvdW50cnlDb2RlLk9NLCAvXihQQyApP1xcZHszfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuUEEsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5QSywgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLlBZLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuUEgsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5QTCwgL15cXGR7Mn0tXFxkezN9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5QUiwgL14wMFs2NzldXFxkezJ9KFsgXFwtXVxcZHs0fSk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5STywgL15cXGR7Nn0kL10sXG4gICAgW0NvdW50cnlDb2RlLlJVLCAvXlxcZHs2fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuU00sIC9eNDc4OVxcZCQvXSxcbiAgICBbQ291bnRyeUNvZGUuU0EsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5TTiwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLlNLLCAvXlxcZHszfVsgXT9cXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLlNJLCAvXihTSS0pP1xcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuWkEsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5MSywgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLlRKLCAvXlxcZHs2fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuVEgsIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5UTiwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLlRSLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuVE0sIC9eXFxkezZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5VQSwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLlVZLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuVVosIC9eXFxkezZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5WQSwgL14wMDEyMCQvXSxcbiAgICBbQ291bnRyeUNvZGUuVkUsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5aTSwgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLkFTLCAvXjk2Nzk5JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DQywgL142Nzk5JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DSywgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLlJTLCAvXlxcZHs1LDZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5NRSwgL144XFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5DUywgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLllVLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuQ1gsIC9eNjc5OCQvXSxcbiAgICBbQ291bnRyeUNvZGUuRVQsIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5GSywgL15GSVFRIDFaWiQvXSxcbiAgICBbQ291bnRyeUNvZGUuTkYsIC9eMjg5OSQvXSxcbiAgICBbQ291bnRyeUNvZGUuRk0sIC9eKDk2OTRbMS00XSkoWyBcXC1dXFxkezR9KT8kL10sXG4gICAgW0NvdW50cnlDb2RlLkdGLCAvXjlbNzhdM1xcZHsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuR04sIC9eXFxkezN9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5HUCwgL145Wzc4XVswMV1cXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLkdTLCAvXlNJUVEgMVpaJC9dLFxuICAgIFtDb3VudHJ5Q29kZS5HVSwgL145NjlbMTIzXVxcZChbIFxcLV1cXGR7NH0pPyQvXSxcbiAgICBbQ291bnRyeUNvZGUuR1csIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5ITSwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLklRLCAvXlxcZHs1fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuS0csIC9eXFxkezZ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5MUiwgL15cXGR7NH0kL10sXG4gICAgW0NvdW50cnlDb2RlLkxTLCAvXlxcZHszfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuTUcsIC9eXFxkezN9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5NSCwgL145NjlbNjddXFxkKFsgXFwtXVxcZHs0fSk/JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5NTiwgL15cXGR7Nn0kL10sXG4gICAgW0NvdW50cnlDb2RlLk1QLCAvXjk2OTVbMDEyXShbIFxcLV1cXGR7NH0pPyQvXSxcbiAgICBbQ291bnRyeUNvZGUuTVEsIC9eOVs3OF0yXFxkezJ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5OQywgL145ODhcXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLk5FLCAvXlxcZHs0fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuVkksIC9eMDA4KChbMC00XVxcZCl8KDVbMDFdKSkoWyBcXC1dXFxkezR9KT8kL10sXG4gICAgW0NvdW50cnlDb2RlLlZOLCAvXlxcZHs2fSQvXSxcbiAgICBbQ291bnRyeUNvZGUuUEYsIC9eOTg3XFxkezJ9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5QRywgL15cXGR7M30kL10sXG4gICAgW0NvdW50cnlDb2RlLlBNLCAvXjlbNzhdNVxcZHsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuUE4sIC9eUENSTiAxWlokL10sXG4gICAgW0NvdW50cnlDb2RlLlBXLCAvXjk2OTQwJC9dLFxuICAgIFtDb3VudHJ5Q29kZS5SRSwgL145Wzc4XTRcXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLlNILCAvXihBU0NOfFNUSEwpIDFaWiQvXSxcbiAgICBbQ291bnRyeUNvZGUuU0osIC9eXFxkezR9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5TTywgL15cXGR7NX0kL10sXG4gICAgW0NvdW50cnlDb2RlLlNaLCAvXltITE1TXVxcZHszfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuVEMsIC9eVEtDQSAxWlokL10sXG4gICAgW0NvdW50cnlDb2RlLldGLCAvXjk4NlxcZHsyfSQvXSxcbiAgICBbQ291bnRyeUNvZGUuWEssIC9eXFxkezV9JC9dLFxuICAgIFtDb3VudHJ5Q29kZS5ZVCwgL145NzZcXGR7Mn0kL10sXG4gICAgW0NvdW50cnlDb2RlLklOVEwsIC9eKD86W0EtWjAtOV0rKFstIF0/W0EtWjAtOV0rKSopPyQvaV0sXG5dKTtcbiIsImV4cG9ydCB2YXIgQ291bnRyeUNvZGU7XG4oZnVuY3Rpb24gKENvdW50cnlDb2RlKSB7XG4gICAgQ291bnRyeUNvZGVbXCJVS1wiXSA9IFwiVUtcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkdCXCJdID0gXCJHQlwiO1xuICAgIENvdW50cnlDb2RlW1wiSkVcIl0gPSBcIkpFXCI7XG4gICAgQ291bnRyeUNvZGVbXCJHR1wiXSA9IFwiR0dcIjtcbiAgICBDb3VudHJ5Q29kZVtcIklNXCJdID0gXCJJTVwiO1xuICAgIENvdW50cnlDb2RlW1wiVVNcIl0gPSBcIlVTXCI7XG4gICAgQ291bnRyeUNvZGVbXCJDQVwiXSA9IFwiQ0FcIjtcbiAgICBDb3VudHJ5Q29kZVtcIklFXCJdID0gXCJJRVwiO1xuICAgIENvdW50cnlDb2RlW1wiREVcIl0gPSBcIkRFXCI7XG4gICAgQ291bnRyeUNvZGVbXCJKUFwiXSA9IFwiSlBcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkZSXCJdID0gXCJGUlwiO1xuICAgIENvdW50cnlDb2RlW1wiQVVcIl0gPSBcIkFVXCI7XG4gICAgQ291bnRyeUNvZGVbXCJJVFwiXSA9IFwiSVRcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkNIXCJdID0gXCJDSFwiO1xuICAgIENvdW50cnlDb2RlW1wiQVRcIl0gPSBcIkFUXCI7XG4gICAgQ291bnRyeUNvZGVbXCJFU1wiXSA9IFwiRVNcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk5MXCJdID0gXCJOTFwiO1xuICAgIENvdW50cnlDb2RlW1wiQkVcIl0gPSBcIkJFXCI7XG4gICAgQ291bnRyeUNvZGVbXCJES1wiXSA9IFwiREtcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlNFXCJdID0gXCJTRVwiO1xuICAgIENvdW50cnlDb2RlW1wiTk9cIl0gPSBcIk5PXCI7XG4gICAgQ291bnRyeUNvZGVbXCJCUlwiXSA9IFwiQlJcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlBUXCJdID0gXCJQVFwiO1xuICAgIENvdW50cnlDb2RlW1wiRklcIl0gPSBcIkZJXCI7XG4gICAgQ291bnRyeUNvZGVbXCJBWFwiXSA9IFwiQVhcIjtcbiAgICBDb3VudHJ5Q29kZVtcIktSXCJdID0gXCJLUlwiO1xuICAgIENvdW50cnlDb2RlW1wiQ05cIl0gPSBcIkNOXCI7XG4gICAgQ291bnRyeUNvZGVbXCJUV1wiXSA9IFwiVFdcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlNHXCJdID0gXCJTR1wiO1xuICAgIENvdW50cnlDb2RlW1wiRFpcIl0gPSBcIkRaXCI7XG4gICAgQ291bnRyeUNvZGVbXCJBRFwiXSA9IFwiQURcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkFSXCJdID0gXCJBUlwiO1xuICAgIENvdW50cnlDb2RlW1wiQU1cIl0gPSBcIkFNXCI7XG4gICAgQ291bnRyeUNvZGVbXCJBWlwiXSA9IFwiQVpcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkJIXCJdID0gXCJCSFwiO1xuICAgIENvdW50cnlDb2RlW1wiQkRcIl0gPSBcIkJEXCI7XG4gICAgQ291bnRyeUNvZGVbXCJCQlwiXSA9IFwiQkJcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkJZXCJdID0gXCJCWVwiO1xuICAgIENvdW50cnlDb2RlW1wiQk1cIl0gPSBcIkJNXCI7XG4gICAgQ291bnRyeUNvZGVbXCJCQVwiXSA9IFwiQkFcIjtcbiAgICBDb3VudHJ5Q29kZVtcIklPXCJdID0gXCJJT1wiO1xuICAgIENvdW50cnlDb2RlW1wiQk5cIl0gPSBcIkJOXCI7XG4gICAgQ291bnRyeUNvZGVbXCJCR1wiXSA9IFwiQkdcIjtcbiAgICBDb3VudHJ5Q29kZVtcIktIXCJdID0gXCJLSFwiO1xuICAgIENvdW50cnlDb2RlW1wiQ1ZcIl0gPSBcIkNWXCI7XG4gICAgQ291bnRyeUNvZGVbXCJDTFwiXSA9IFwiQ0xcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkNSXCJdID0gXCJDUlwiO1xuICAgIENvdW50cnlDb2RlW1wiSFJcIl0gPSBcIkhSXCI7XG4gICAgQ291bnRyeUNvZGVbXCJDWVwiXSA9IFwiQ1lcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkNaXCJdID0gXCJDWlwiO1xuICAgIENvdW50cnlDb2RlW1wiRE9cIl0gPSBcIkRPXCI7XG4gICAgQ291bnRyeUNvZGVbXCJFQ1wiXSA9IFwiRUNcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkVHXCJdID0gXCJFR1wiO1xuICAgIENvdW50cnlDb2RlW1wiRUVcIl0gPSBcIkVFXCI7XG4gICAgQ291bnRyeUNvZGVbXCJGT1wiXSA9IFwiRk9cIjtcbiAgICBDb3VudHJ5Q29kZVtcIkdFXCJdID0gXCJHRVwiO1xuICAgIENvdW50cnlDb2RlW1wiR1JcIl0gPSBcIkdSXCI7XG4gICAgQ291bnRyeUNvZGVbXCJHTFwiXSA9IFwiR0xcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkdUXCJdID0gXCJHVFwiO1xuICAgIENvdW50cnlDb2RlW1wiSFRcIl0gPSBcIkhUXCI7XG4gICAgQ291bnRyeUNvZGVbXCJITlwiXSA9IFwiSE5cIjtcbiAgICBDb3VudHJ5Q29kZVtcIkhVXCJdID0gXCJIVVwiO1xuICAgIENvdW50cnlDb2RlW1wiSVNcIl0gPSBcIklTXCI7XG4gICAgQ291bnRyeUNvZGVbXCJJTlwiXSA9IFwiSU5cIjtcbiAgICBDb3VudHJ5Q29kZVtcIklEXCJdID0gXCJJRFwiO1xuICAgIENvdW50cnlDb2RlW1wiSUxcIl0gPSBcIklMXCI7XG4gICAgQ291bnRyeUNvZGVbXCJKT1wiXSA9IFwiSk9cIjtcbiAgICBDb3VudHJ5Q29kZVtcIktaXCJdID0gXCJLWlwiO1xuICAgIENvdW50cnlDb2RlW1wiS0VcIl0gPSBcIktFXCI7XG4gICAgQ291bnRyeUNvZGVbXCJLV1wiXSA9IFwiS1dcIjtcbiAgICBDb3VudHJ5Q29kZVtcIktZXCJdID0gXCJLWVwiO1xuICAgIENvdW50cnlDb2RlW1wiTEFcIl0gPSBcIkxBXCI7XG4gICAgQ291bnRyeUNvZGVbXCJMVlwiXSA9IFwiTFZcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkxCXCJdID0gXCJMQlwiO1xuICAgIENvdW50cnlDb2RlW1wiTElcIl0gPSBcIkxJXCI7XG4gICAgQ291bnRyeUNvZGVbXCJMVFwiXSA9IFwiTFRcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkxVXCJdID0gXCJMVVwiO1xuICAgIENvdW50cnlDb2RlW1wiTUtcIl0gPSBcIk1LXCI7XG4gICAgQ291bnRyeUNvZGVbXCJNWVwiXSA9IFwiTVlcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk1WXCJdID0gXCJNVlwiO1xuICAgIENvdW50cnlDb2RlW1wiTVRcIl0gPSBcIk1UXCI7XG4gICAgQ291bnRyeUNvZGVbXCJNVVwiXSA9IFwiTVVcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk1YXCJdID0gXCJNWFwiO1xuICAgIENvdW50cnlDb2RlW1wiTURcIl0gPSBcIk1EXCI7XG4gICAgQ291bnRyeUNvZGVbXCJNQ1wiXSA9IFwiTUNcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk1BXCJdID0gXCJNQVwiO1xuICAgIENvdW50cnlDb2RlW1wiTlBcIl0gPSBcIk5QXCI7XG4gICAgQ291bnRyeUNvZGVbXCJOWlwiXSA9IFwiTlpcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk5JXCJdID0gXCJOSVwiO1xuICAgIENvdW50cnlDb2RlW1wiTkdcIl0gPSBcIk5HXCI7XG4gICAgQ291bnRyeUNvZGVbXCJPTVwiXSA9IFwiT01cIjtcbiAgICBDb3VudHJ5Q29kZVtcIlBBXCJdID0gXCJQQVwiO1xuICAgIENvdW50cnlDb2RlW1wiUEtcIl0gPSBcIlBLXCI7XG4gICAgQ291bnRyeUNvZGVbXCJQWVwiXSA9IFwiUFlcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlBIXCJdID0gXCJQSFwiO1xuICAgIENvdW50cnlDb2RlW1wiUExcIl0gPSBcIlBMXCI7XG4gICAgQ291bnRyeUNvZGVbXCJQUlwiXSA9IFwiUFJcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlJPXCJdID0gXCJST1wiO1xuICAgIENvdW50cnlDb2RlW1wiUlVcIl0gPSBcIlJVXCI7XG4gICAgQ291bnRyeUNvZGVbXCJTTVwiXSA9IFwiU01cIjtcbiAgICBDb3VudHJ5Q29kZVtcIlNBXCJdID0gXCJTQVwiO1xuICAgIENvdW50cnlDb2RlW1wiU05cIl0gPSBcIlNOXCI7XG4gICAgQ291bnRyeUNvZGVbXCJTS1wiXSA9IFwiU0tcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlNJXCJdID0gXCJTSVwiO1xuICAgIENvdW50cnlDb2RlW1wiWkFcIl0gPSBcIlpBXCI7XG4gICAgQ291bnRyeUNvZGVbXCJMS1wiXSA9IFwiTEtcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlRKXCJdID0gXCJUSlwiO1xuICAgIENvdW50cnlDb2RlW1wiVEhcIl0gPSBcIlRIXCI7XG4gICAgQ291bnRyeUNvZGVbXCJUTlwiXSA9IFwiVE5cIjtcbiAgICBDb3VudHJ5Q29kZVtcIlRSXCJdID0gXCJUUlwiO1xuICAgIENvdW50cnlDb2RlW1wiVE1cIl0gPSBcIlRNXCI7XG4gICAgQ291bnRyeUNvZGVbXCJVQVwiXSA9IFwiVUFcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlVZXCJdID0gXCJVWVwiO1xuICAgIENvdW50cnlDb2RlW1wiVVpcIl0gPSBcIlVaXCI7XG4gICAgQ291bnRyeUNvZGVbXCJWQVwiXSA9IFwiVkFcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlZFXCJdID0gXCJWRVwiO1xuICAgIENvdW50cnlDb2RlW1wiWk1cIl0gPSBcIlpNXCI7XG4gICAgQ291bnRyeUNvZGVbXCJBU1wiXSA9IFwiQVNcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkNDXCJdID0gXCJDQ1wiO1xuICAgIENvdW50cnlDb2RlW1wiQ0tcIl0gPSBcIkNLXCI7XG4gICAgQ291bnRyeUNvZGVbXCJSU1wiXSA9IFwiUlNcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk1FXCJdID0gXCJNRVwiO1xuICAgIENvdW50cnlDb2RlW1wiQ1NcIl0gPSBcIkNTXCI7XG4gICAgQ291bnRyeUNvZGVbXCJZVVwiXSA9IFwiWVVcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkNYXCJdID0gXCJDWFwiO1xuICAgIENvdW50cnlDb2RlW1wiRVRcIl0gPSBcIkVUXCI7XG4gICAgQ291bnRyeUNvZGVbXCJGS1wiXSA9IFwiRktcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk5GXCJdID0gXCJORlwiO1xuICAgIENvdW50cnlDb2RlW1wiRk1cIl0gPSBcIkZNXCI7XG4gICAgQ291bnRyeUNvZGVbXCJHRlwiXSA9IFwiR0ZcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkdOXCJdID0gXCJHTlwiO1xuICAgIENvdW50cnlDb2RlW1wiR1BcIl0gPSBcIkdQXCI7XG4gICAgQ291bnRyeUNvZGVbXCJHU1wiXSA9IFwiR1NcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkdVXCJdID0gXCJHVVwiO1xuICAgIENvdW50cnlDb2RlW1wiR1dcIl0gPSBcIkdXXCI7XG4gICAgQ291bnRyeUNvZGVbXCJITVwiXSA9IFwiSE1cIjtcbiAgICBDb3VudHJ5Q29kZVtcIklRXCJdID0gXCJJUVwiO1xuICAgIENvdW50cnlDb2RlW1wiS0dcIl0gPSBcIktHXCI7XG4gICAgQ291bnRyeUNvZGVbXCJMUlwiXSA9IFwiTFJcIjtcbiAgICBDb3VudHJ5Q29kZVtcIkxTXCJdID0gXCJMU1wiO1xuICAgIENvdW50cnlDb2RlW1wiTUdcIl0gPSBcIk1HXCI7XG4gICAgQ291bnRyeUNvZGVbXCJNSFwiXSA9IFwiTUhcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk1OXCJdID0gXCJNTlwiO1xuICAgIENvdW50cnlDb2RlW1wiTVBcIl0gPSBcIk1QXCI7XG4gICAgQ291bnRyeUNvZGVbXCJNUVwiXSA9IFwiTVFcIjtcbiAgICBDb3VudHJ5Q29kZVtcIk5DXCJdID0gXCJOQ1wiO1xuICAgIENvdW50cnlDb2RlW1wiTkVcIl0gPSBcIk5FXCI7XG4gICAgQ291bnRyeUNvZGVbXCJWSVwiXSA9IFwiVklcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlZOXCJdID0gXCJWTlwiO1xuICAgIENvdW50cnlDb2RlW1wiUEZcIl0gPSBcIlBGXCI7XG4gICAgQ291bnRyeUNvZGVbXCJQR1wiXSA9IFwiUEdcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlBNXCJdID0gXCJQTVwiO1xuICAgIENvdW50cnlDb2RlW1wiUE5cIl0gPSBcIlBOXCI7XG4gICAgQ291bnRyeUNvZGVbXCJQV1wiXSA9IFwiUFdcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlJFXCJdID0gXCJSRVwiO1xuICAgIENvdW50cnlDb2RlW1wiU0hcIl0gPSBcIlNIXCI7XG4gICAgQ291bnRyeUNvZGVbXCJTSlwiXSA9IFwiU0pcIjtcbiAgICBDb3VudHJ5Q29kZVtcIlNPXCJdID0gXCJTT1wiO1xuICAgIENvdW50cnlDb2RlW1wiU1pcIl0gPSBcIlNaXCI7XG4gICAgQ291bnRyeUNvZGVbXCJUQ1wiXSA9IFwiVENcIjtcbiAgICBDb3VudHJ5Q29kZVtcIldGXCJdID0gXCJXRlwiO1xuICAgIENvdW50cnlDb2RlW1wiWEtcIl0gPSBcIlhLXCI7XG4gICAgQ291bnRyeUNvZGVbXCJZVFwiXSA9IFwiWVRcIjtcbiAgICBDb3VudHJ5Q29kZVtcIklOVExcIl0gPSBcIklOVExcIjtcbn0pKENvdW50cnlDb2RlIHx8IChDb3VudHJ5Q29kZSA9IHt9KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsImltcG9ydCBwb3N0YWxDb2RlcyBmcm9tICdwb3N0YWwtY29kZXMtanMnO1xuaW1wb3J0IGNvdW50cmllcywgeyBnZXRQb3N0YWxDb2RlUmVnZXggfSBmcm9tICdpMThuLWlzby1jb3VudHJpZXMnO1xuaW1wb3J0ICdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbic7XG5pbXBvcnQgcG9zdGNvZGUgZnJvbSAncG9zdGNvZGUtdmFsaWRhdG9yJztcblxuY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZW1haWxMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbExpJyk7XG4gICAgdGhpcy5wYXNzd29yZENvbmZpcm1MaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZENvbmZpcm1MaScpO1xuICAgIHRoaXMucGFzc3dvcmRMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZExpJyk7XG4gICAgdGhpcy56aXBDb2RlTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemlwQ29kZUxpJyk7XG4gIH1cblxuICBhcHBlbmRFcnJvcihlcnJvck1zZywgcGFyZW50TGkpIHtcbiAgICBpZiAocGFyZW50TGkgJiYgIXBhcmVudExpLmVycm9yQWRkZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IGVycm9yTXNnO1xuICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICBwYXJlbnRMaS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgICAgcGFyZW50TGkuZXJyb3JBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRXJyb3IocGFyZW50TGkpIHtcbiAgICBpZiAocGFyZW50TGkgJiYgcGFyZW50TGkuZXJyb3JBZGRlZCkge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gcGFyZW50TGkucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICBlcnJvck1lc3NhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgICAgcGFyZW50TGkuZXJyb3JBZGRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVZhbGlkYXRpb25FcnJvcihpc1ZhbGlkLCBpbnB1dFZhbHVlLCBlcnJvck1zZywgcGFyZW50TGkpIHtcbiAgICBpZiAoIWlzVmFsaWQgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFwcGVuZEVycm9yKGVycm9yTXNnLCBwYXJlbnRMaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRXJyb3IocGFyZW50TGkpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRW1haWwoZW1haWxWYWx1ZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15cXFMrQFxcUytcXC5cXFMrJC87XG4gICAgY29uc3QgaXNWYWxpZEVtYWlsID0gcmVnZXgudGVzdChlbWFpbFZhbHVlKTtcbiAgICB0aGlzLmhhbmRsZVZhbGlkYXRpb25FcnJvcihcbiAgICAgIGlzVmFsaWRFbWFpbCxcbiAgICAgIGVtYWlsVmFsdWUsXG4gICAgICAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyBpbiB0aGUgZm9ybWF0IG5hbWVAZXhhbXBsZS5jb20nLFxuICAgICAgdGhpcy5lbWFpbExpXG4gICAgKTtcbiAgICByZXR1cm4gaXNWYWxpZEVtYWlsO1xuICB9XG5cbiAgdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkge1xuICAgIGNvbnN0IHJlZ2V4ID1cbiAgICAgIC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qXFxkKSg/PS4qWyFAIyQlXiYqKClfK10pW2EtekEtWlxcZCFAIyQlXiYqKClfK117OCx9JC9pO1xuXG4gICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gcmVnZXgudGVzdChwYXNzd29yZCk7XG4gICAgdGhpcy5oYW5kbGVWYWxpZGF0aW9uRXJyb3IoXG4gICAgICBpc1ZhbGlkUGFzc3dvcmQsXG4gICAgICBwYXNzd29yZCxcbiAgICAgICdJbnZhbGlkIHBhc3N3b3JkJyxcbiAgICAgIHRoaXMucGFzc3dvcmRMaVxuICAgICk7XG4gICAgcmV0dXJuIGlzVmFsaWRQYXNzd29yZDtcbiAgfVxuXG4gIGNvbmZpcm1QYXNzd29yZChwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSB7XG4gICAgY29uc3QgaXNNYXRjaGluZyA9XG4gICAgICBwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtICYmIHBhc3N3b3JkQ29uZmlybS5sZW5ndGggIT09IDA7XG4gICAgdGhpcy5oYW5kbGVWYWxpZGF0aW9uRXJyb3IoXG4gICAgICBpc01hdGNoaW5nLFxuICAgICAgcGFzc3dvcmRDb25maXJtLFxuICAgICAgJ05vbi1tYXRjaGluZyBwYXNzd29yZCcsXG4gICAgICB0aGlzLnBhc3N3b3JkQ29uZmlybUxpXG4gICAgKTtcbiAgICByZXR1cm4gaXNNYXRjaGluZztcbiAgfVxuXG4gIHZhbGlkYXRlWmlwQ29kZShjb3VudHJ5Q29kZSwgemlwVmFsdWUpIHtcbiAgICBjb25zdCBpc1ZhbGlkUG9zdGFsQ29kZSA9IHBvc3Rjb2RlLnZhbGlkYXRlKHppcFZhbHVlLCBjb3VudHJ5Q29kZSk7XG4gICAgdGhpcy5oYW5kbGVWYWxpZGF0aW9uRXJyb3IoXG4gICAgICBpc1ZhbGlkUG9zdGFsQ29kZSxcbiAgICAgIHppcFZhbHVlLFxuICAgICAgJ0ludmFsaWQgcG9zdGFsIGNvZGUgZm9yIHRoZSBzZWxlY3RlZCBjb3VudHJ5JyxcbiAgICAgIHRoaXMuemlwQ29kZUxpXG4gICAgKTtcbiAgICByZXR1cm4gaXNWYWxpZFBvc3RhbENvZGU7XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oZW1haWwsIGNvdW50cnksIHppcENvZGUsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0pIHtcbiAgICBjb25zdCBpbnZhbGlkRW1haWwgPSAhdGhpcy52YWxpZGF0ZUVtYWlsKGVtYWlsKTtcbiAgICBjb25zdCBpbnZhbGlkWmlwQ29kZSA9ICF0aGlzLnZhbGlkYXRlWmlwQ29kZShjb3VudHJ5LCB6aXBDb2RlKTtcbiAgICBjb25zdCBub25NYXRjaGluZ1Bhc3N3b3JkID0gIXRoaXMuY29uZmlybVBhc3N3b3JkKFxuICAgICAgcGFzc3dvcmQsXG4gICAgICBwYXNzd29yZENvbmZpcm1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGludmFsaWRFbWFpbCxcbiAgICAgIGludmFsaWRaaXBDb2RlLFxuICAgICAgbm9uTWF0Y2hpbmdQYXNzd29yZCxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY291bnRyaWVzIGZyb20gJ2kxOG4taXNvLWNvdW50cmllcyc7XG5cbmltcG9ydCBwb3N0YWxDb2RlcyBmcm9tICdwb3N0YWwtY29kZXMtanMnO1xuaW1wb3J0ICdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbic7XG5cbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vZm9ybVZhbGlkYXRvcic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcy9sYW5ncy9lbi5qc29uJykpO1xuXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5Jyk7XG5jb25zdCB6aXBDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ppcENvZGUnKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5jb25zdCBwYXNzd29yZENvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmRDb25maXJtJyk7XG5cbmNvbnN0IHZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKCk7XG5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICB2YWxpZGF0b3IudmFsaWRhdGVFbWFpbChlbWFpbC52YWx1ZSk7XG59KTtcblxubGV0IGN1cnJlbnRDb3VudHJ5Q29kZSA9IG51bGw7XG5cbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICBjdXJyZW50Q291bnRyeUNvZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG59KTtcblxuemlwQ29kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgY29uc3QgemlwVmFsdWUgPSB6aXBDb2RlLnZhbHVlO1xuICBpZiAoY3VycmVudENvdW50cnlDb2RlKSB7XG4gICAgdmFsaWRhdG9yLnZhbGlkYXRlWmlwQ29kZShjdXJyZW50Q291bnRyeUNvZGUsIHppcFZhbHVlKTtcbiAgfVxufSk7XG5cbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICB2YWxpZGF0b3IudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZC52YWx1ZSk7XG4gIHZhbGlkYXRvci5jb25maXJtUGFzc3dvcmQocGFzc3dvcmQudmFsdWUsIHBhc3N3b3JkQ29uZmlybS52YWx1ZSk7XG59KTtcblxucGFzc3dvcmRDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICB2YWxpZGF0b3IuY29uZmlybVBhc3N3b3JkKHBhc3N3b3JkLnZhbHVlLCBwYXNzd29yZENvbmZpcm0udmFsdWUpO1xufSk7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQ291bnRyeURyb3Bkb3duKCkge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpO1xuICBjb25zdCBjb3VudHJ5TGlzdCA9IGNvdW50cmllcy5nZXROYW1lcygnZW4nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KTtcbiAgT2JqZWN0LmVudHJpZXMoY291bnRyeUxpc3QpLmZvckVhY2goKFtjb2RlLCBuYW1lXSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGNvZGU7XG4gICAgb3B0aW9uLnRleHQgPSBuYW1lO1xuICAgIHNlbGVjdC5hZGQob3B0aW9uKTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBwb3B1bGF0ZUNvdW50cnlEcm9wZG93bik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=