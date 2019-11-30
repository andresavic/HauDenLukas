webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/andresavic/Code/Privat/HauDenLukas/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "scale",
    value: function scale(num, in_min, in_max, out_min, out_max) {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.d();
      console.log('GrandChild did mount.');
      setTimeout(function () {
        _this2.shot();
      }, 1000);
    }
  }, {
    key: "shot",
    value: function shot() {
      this.highestPoint = 1000;
      this.highestPointArrived = false;
      matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.Body.setMass(this.frosch, 1);
      matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.Body.applyForce(this.frosch, this.frosch.position, {
        x: 0,
        y: -0.079
      });
    }
  }, {
    key: "d",
    value: function d() {
      var _this3 = this;

      var Engine = matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.Engine,
          Render = matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.Render,
          World = matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.World,
          Events = matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.Events,
          Bodies = matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.Bodies;
      var engine = Engine.create();
      var render = Render.create({
        element: document.body,
        engine: engine
      });
      this.range = 600;
      this.highestPoint = 1000;
      this.highestPointArrived = true;
      this.frosch = Bodies.rectangle(400, 600, 20, 20);
      this.frosch.restitution = 0.8;
      this.end = Bodies.rectangle(400, -5, 100, 10, {
        label: "bell",
        isStatic: true
      });
      var ground = Bodies.rectangle(400, 630, 810, 60, {
        isStatic: true
      });
      World.add(engine.world, [this.frosch, this.end, ground]); // run the engine

      Engine.run(engine); // run the renderer

      Render.run(render);
      Events.on(engine, 'afterUpdate', function (event) {
        var engine = event.source;

        if (_this3.highestPointArrived === false && _this3.frosch.position.y > _this3.highestPoint) {
          _this3.highestPointArrived = true;
          var m = Math.round(_this3.highestPoint - 10);
          console.log("HIGHET POINT", m);
          var cm = _this3.range - m;
          console.log("CM", cm);
          var led = Math.round(_this3.scale(cm, 0, 600, 0, 240));
          console.log("HIGHEST LED", led);
          matter_js__WEBPACK_IMPORTED_MODULE_8___default.a.World.addBody(engine.world, Bodies.rectangle(400, m, 200, 2, {
            isStatic: true,
            isSensor: true
          }));
        } else {
          _this3.highestPoint = _this3.frosch.position.y;
        }

        _this3.renderLeds(); //console.log(this.frosch.position);

      });
      Events.on(engine, 'collisionStart', function (event) {
        console.log("coll");
        var pairs = event.pairs; // change object colours to show those in an active collision (e.g. resting contact)

        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];
          console.log(pair);
        }
      });
    }
  }, {
    key: "renderLeds",
    value: function renderLeds() {
      var m = Math.round(this.frosch.position.y - 10);
      var cm = this.range - m;
      console.log("CM", cm);
      var led = Math.round(this.scale(cm, 0, 600, 0, 240));
      console.log("HIGHEST LED", led);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Hau den Lukas");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res;
                return _context.abrupt("return", {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.d820e304387df1042cf1.hot-update.js.map