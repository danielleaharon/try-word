(this["webpackJsonpbarebones"] = this["webpackJsonpbarebones"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home/home */ "./src/components/Home/home.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contact/Contact */ "./src/components/Contact/Contact.js");
/* harmony import */ var _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NotFound/NotFound */ "./src/components/NotFound/NotFound.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Navbar/navbar */ "./src/components/Navbar/navbar.js");
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/App.js";





 // import ProductsChoice from './components/Products/ProductsChoice';
// import Product from './components/Product/Product';
// import Design from './components/Design/Design';
// import DesignMobile from './components/Design/DesignMobile';

 // import NotFoundDesign from './components/NotFoundDesign/NotFoundDesign';
// import Admin from './components/Admin/Admin';
// import Cart from './components/Cart/Cart';
// import Order from './components/Order/Order';
// import OrderAdmin from './components/OrderAdmin/OrderAdmin';





function App(props) {
  const [cart, setCart] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [order, setOrder] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [category, setCategory] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('all');
  const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [height, setHeight] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [design, setDesign] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [Ondesign, setOnDesign] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions); // returned function will be called on component unmount 

    window.removeEventListener('resize', updateWindowDimensions);
  }); //   React.useEffect(() => {
  //     updateWindowDimensions();
  //     window.addEventListener('resize', updateWindowDimensions);
  //     // returned function will be called on component unmount 
  //     if (localStorage.getItem("cart") != null) {
  //       if (cart.length < JSON.parse(localStorage.getItem("cart")).length) {
  //         setCart(JSON.parse(localStorage.getItem("cart")));
  //       }
  //     }
  //     else {
  //       localStorage.setItem("cart", JSON.stringify(cart))
  //     }
  //     if (localStorage.getItem("order") != null) {
  //       const orderList2 = [];
  //       JSON.parse(localStorage.getItem('order')).forEach((item) => {
  //         axios.post(Config.getServerPath() + 'order/userOrder/' + item._id)
  //           .then(res => {
  //             if (res.data.status === 400) {
  //               console.log('error')
  //             } else {
  //               orderList2.push(res.data.order)
  //               localStorage.setItem("order", JSON.stringify(orderList2));
  //             }
  //           })
  //           .catch(() => {
  //             console.log('send')
  //           });
  //         if (order.length < JSON.parse(localStorage.getItem("order")).length)
  //           setOrder(JSON.parse(localStorage.getItem("order")));
  //       })
  //     }
  //     //window.removeEventListener('resize', updateWindowDimensions)
  //   }, [cart,order.length]);
  //   const updateOrder = async () => {
  //     const orderList2 = [];
  //     await JSON.parse(localStorage.getItem('order')).forEach((item) => {
  //       axios.post(Config.getServerPath() + 'order/userOrder/' + item._id)
  //         .then(res => {
  //           if (res.data.status === 400) {
  //             console.log('error')
  //             return
  //           }
  //           orderList2.push(res.data.order)
  //           // orderList2=res.data.orderList;
  //           localStorage.setItem("order", JSON.stringify(orderList2));
  //           if (order.length === orderList2.length)
  //             setOrder(orderList2);
  //           // setOrder(res.data.orderList)
  //           //   if(order.length<JSON.parse(localStorage.getItem("order")).length) {
  //           //     setOrder(JSON.parse(localStorage.getItem("order")));
  //           // }
  //         })
  //         .catch(() => {
  //           console.log('send')
  //         });
  //     })
  //     // setOrder(JSON.parse(localStorage.getItem("order")));
  //     return true;
  //   }
  //   const goToDesign = (item) => {
  //     setDesign(item)
  //   }
  //   const addToCart = (item, size, imgItem, design) => {
  //     const arr = cart;
  //     const index = arr.findIndex(x => x.item._id === item._id && x.imgItem.color === imgItem.color && x.size === size && x.design.url.front === design.url.front);
  //     if (index !== -1) {
  //       arr[index].count++;
  //       if (Ondesign)
  //         goToDesign(arr[index])
  //       // const tempItem={item,size,imgItem,count};
  //       // arr.push(tempItem);
  //     }
  //     else {
  //       var count = 1;
  //       const tempItem2 = { item, size, imgItem, count, design };
  //       arr.push(tempItem2);
  //       if (Ondesign)
  //         goToDesign(tempItem2)
  //     }
  //     localStorage.setItem("cart", JSON.stringify(arr));
  //     setCart(JSON.parse(localStorage.getItem("cart")));
  //     // setCart(arr)
  //   }
  //   const updateCart = (item, count) => {
  //     const arr = cart;
  //     const index = cart.findIndex(x => x.item._id === item.item._id && x.imgItem.color === item.imgItem.color && x.size === item.size && x.design.url.front === item.design.url.front);
  //     if (index !== -1) {
  //       arr[index].count = count;
  //       // const tempItem={item,size,imgItem,count};
  //       // arr.push(tempItem);
  //     }
  //     localStorage.setItem("cart", JSON.stringify(arr));
  //   }
  //   const updateCartDesign = (item, design) => {
  //     const arr = cart;
  //     const index = cart.findIndex(x => x.item._id === item.item._id && x.imgItem.color === item.imgItem.color && x.size === item.size && x.design.url.front === item.design.url.front);
  //     if (index !== -1) {
  //       arr[index].design = design;
  //       // const tempItem={item,size,imgItem,count};
  //       // arr.push(tempItem);
  //     }
  //     localStorage.setItem("cart", JSON.stringify(arr));
  //   }
  //   const deleteFromCart = (item) => {
  //     console.log(cart)
  //     const index = cart.findIndex(x => x.item._id === item.item._id && x.imgItem.color === item.imgItem.color && x.size === item.size && x.design.url.front === item.design.url.front);
  //     console.log(index)
  //     if (index !== -1) {
  //       const tempList = cart.splice(index, 1);
  //       console.log(tempList)
  //       // const tempList2=cart.slice(index+1,cart.length);
  //       // tempList= tempList.concat(tempList2)
  //       localStorage.setItem("cart", JSON.stringify(cart));
  //       setCart(JSON.parse(localStorage.getItem("cart")));
  //     }
  //   }

  const getAppContent = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: '/',
      exact: true,
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home_home__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
        setCategory: setCategory,
        width: width,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 15
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: '/Contact',
      exact: true,
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
        width: width,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    hide: Ondesign,
    cartSize: cart.length,
    orderSize: order.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 9
    }
  }, getAppContent()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr",
    hidden: Ondesign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hide: Ondesign,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/Image/cakeCat.png":
/*!*******************************!*\
  !*** ./src/Image/cakeCat.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cakeCat.fe644006.png";

/***/ }),

/***/ "./src/Image/capCat.png":
/*!******************************!*\
  !*** ./src/Image/capCat.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/capCat.d1973a02.png";

/***/ }),

/***/ "./src/Image/cupCat.png":
/*!******************************!*\
  !*** ./src/Image/cupCat.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cupCat.42eabe6d.png";

/***/ }),

/***/ "./src/Image/keyCat.png":
/*!******************************!*\
  !*** ./src/Image/keyCat.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/keyCat.68c19a5b.png";

/***/ }),

/***/ "./src/Image/logoPic.png":
/*!*******************************!*\
  !*** ./src/Image/logoPic.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logoPic.e6d8acdf.png";

/***/ }),

/***/ "./src/Image/logowhite.png":
/*!*********************************!*\
  !*** ./src/Image/logowhite.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logowhite.4202b970.png";

/***/ }),

/***/ "./src/Image/map.png":
/*!***************************!*\
  !*** ./src/Image/map.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/map.c47088e7.png";

/***/ }),

/***/ "./src/Image/opiumLogo3.png":
/*!**********************************!*\
  !*** ./src/Image/opiumLogo3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/opiumLogo3.b8be2f25.png";

/***/ }),

/***/ "./src/Image/shirtCat.png":
/*!********************************!*\
  !*** ./src/Image/shirtCat.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shirtCat.9a4b6c7a.png";

/***/ }),

/***/ "./src/common/generalUtils.js":
/*!************************************!*\
  !*** ./src/common/generalUtils.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getLangClass(className, langIndex) {
  return className + ' ' + className + '-' + (langIndex === 0 ? 'eng' : 'heb');
}

exports.getLangClass = getLangClass;

/***/ }),

/***/ "./src/components/About/About.css":
/*!****************************************!*\
  !*** ./src/components/About/About.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/About/About.js":
/*!***************************************!*\
  !*** ./src/components/About/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./src/components/About/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/About/About.js";


function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "About",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "\u05D7\u05E0\u05D5\u05EA \u05D4\u05D3\u05E4\u05E1\u05D5\u05EA \u05E2\u05DC \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05D4\u05DE\u05DE\u05D5\u05E7\u05DE\u05EA \u05D1\u05DC\u05D1 \u05D4\u05E2\u05D9\u05E8 \u05E9\u05DC \u05D4\u05E8\u05E6\u05DC\u05D9\u05D4 \u05D0\u05DA \u05DE\u05D2\u05D9\u05E2\u05D4 \u05DC\u05DB\u05DC \u05DE\u05E7\u05D5\u05DD. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 83
    }
  }), "\u05D4\u05D7\u05E0\u05D5\u05EA \u05DB\u05D1\u05E8 \u05E7\u05D9\u05D9\u05DE\u05EA 12 \u05E9\u05E0\u05D4 \u05D1\u05E0\u05D9\u05E6\u05D5\u05D7\u05D5 \u05E9\u05DC \u05D3\u05D5\u05E8\u05D5\u05DF \u05E9\u05E8\u05E7 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05D3\u05E4\u05D9\u05E1 \u05D0\u05EA \u05DE\u05D1\u05D5\u05E7\u05E9\u05EA\u05DB\u05DD. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 78
    }
  }), "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D3\u05E4\u05D9\u05E1 \u05D1\u05D7\u05E0\u05D5\u05EA \u05DB\u05DE\u05E2\u05D8 \u05E2\u05DC \u05DB\u05DC \u05D0\u05E9\u05E8 \u05E2\u05D5\u05DC\u05D4 \u05E2\u05DC \u05E8\u05D5\u05D7\u05DB\u05DD \u05D1\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05DE\u05E6\u05D7\u05D9\u05E7\u05D9\u05DD."));
}

/***/ }),

/***/ "./src/components/Categories/Categories.css":
/*!**************************************************!*\
  !*** ./src/components/Categories/Categories.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Categories/Categories.js":
/*!*************************************************!*\
  !*** ./src/components/Categories/Categories.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_cupCat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Image/cupCat.png */ "./src/Image/cupCat.png");
/* harmony import */ var _Image_cupCat_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_cupCat_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_capCat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image/capCat.png */ "./src/Image/capCat.png");
/* harmony import */ var _Image_capCat_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Image_capCat_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image_shirtCat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Image/shirtCat.png */ "./src/Image/shirtCat.png");
/* harmony import */ var _Image_shirtCat_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Image_shirtCat_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Image_cakeCat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Image/cakeCat.png */ "./src/Image/cakeCat.png");
/* harmony import */ var _Image_cakeCat_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Image_cakeCat_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image_keyCat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Image/keyCat.png */ "./src/Image/keyCat.png");
/* harmony import */ var _Image_keyCat_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Image_keyCat_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Categories.css */ "./src/components/Categories/Categories.css");
/* harmony import */ var _Categories_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Categories_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/Categories/Categories.js";









class Categories extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      goProducts: false,
      productsHerf: ''
    };
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick(category) {
    this.setState({
      goProducts: true,
      productsHerf: '/Products/' + category + '/all'
    });
  }

  render() {
    if (this.state.goProducts) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
      to: this.state.productsHerf,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Categories",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 8
      }
    }, "\u05E2\u05DC \u05DE\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D3\u05E4\u05D9\u05E1\u05D9\u05DD?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "print-category-home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handelClick('cups'),
      className: "cube-orange-category cube-category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }
    }, "\u05DB\u05D5\u05E1\u05D5\u05EA \u05E1\u05E4\u05DC\u05D9\u05DD \u05D5\u05D1\u05E7\u05D1\u05D5\u05E7\u05D9\u05DD", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 125
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_cupCat_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "Cup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 130
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handelClick('caps'),
      className: "cube-red-category cube-category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 8
      }
    }, "\u05DB\u05D5\u05D1\u05E2\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8\u05D9\u05DC", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 122
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_capCat_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "cap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 127
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handelClick('shirt'),
      className: "cube-pink-category cube-category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 8
      }
    }, "\u05D4\u05DC\u05D1\u05E9\u05D4", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 109
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_shirtCat_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "shirt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 114
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handelClick('kitchen'),
      className: "cube-purple-category cube-category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 8
      }
    }, "\u05DE\u05D5\u05E6\u05E8\u05D9 \u05DC\u05DE\u05D8\u05D1\u05D7 \u05D5\u05DC\u05D1\u05D9\u05EA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 125
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_cakeCat_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "cake",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 130
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handelClick('gift'),
      className: "cube-blue-category cube-category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 8
      }
    }, "\u05DE\u05EA\u05E0\u05D5\u05EA \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 116
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_keyCat_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "key",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 121
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handelClick('all'),
      className: "cube-green-category cube-category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 8
      }
    }, "\u05DC\u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD")));
  }

}

/***/ }),

/***/ "./src/components/Contact/Contact.css":
/*!********************************************!*\
  !*** ./src/components/Contact/Contact.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Contact/Contact.js":
/*!*******************************************!*\
  !*** ./src/components/Contact/Contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Image/map.png */ "./src/Image/map.png");
/* harmony import */ var _Image_map_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_map_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact.css */ "./src/components/Contact/Contact.css");
/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Contact_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/Contact/Contact.js";






function Contact(props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    name: '',
    phone: '',
    category: '',
    mesaage: '',
    mail: ''
  });
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    mailE: false,
    mailEmsg: '',
    categoryE: false,
    phoneE: false,
    phoneEmsg: '',
    nameE: false
  });

  const sendContextMail = () => {
    const postData = {
      name: state.name,
      phonenumber: state.phone,
      topic: state.category,
      mail: state.mail
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_config_config__WEBPACK_IMPORTED_MODULE_3___default.a.getServerPath() + 'mail/contect', postData).then(res => {
      if (res.data.status === 400) {
        console.log('error');
        return;
      }

      setState({
        mesaage: 'תודה ' + state.name + '\nהפרטים נשלחו, ניצור איתך קשר בהקדם',
        name: '',
        mail: '',
        phone: '',
        category: ''
      });
    }).catch(() => {
      console.log('send');
    });
  };

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=32.16744668349592,34.8471588018455");
  };

  const handleChange = event => {
    clearValid();
    const {
      name,
      value
    } = event.target;
    setState({ ...state,
      [name]: value
    });
  };

  const clearValid = () => {
    setErrors({ ...errors,
      mailEmsg: '',
      phoneEmsg: '',
      categoryE: false,
      mailE: false,
      phoneE: false,
      nameE: false
    });
  };

  const cheackValid = () => {
    var error = {};

    if (state.name === '') {
      error["nameE"] = true;
    }

    if (state.phone === '') {
      error["phoneE"] = true;
      error["phoneEmsg"] = "חסר מספר טלפון";
    } else if (state.phone.length !== 10) {
      error["phoneEmsg"] = "מספר טלפון לא תקין";
      error["phoneE"] = true;
    }

    if (state.mail === '') {
      error["mailEmsg"] = " חסר מייל ";
      error["mailE"] = true;
    } else if (!state.mail.includes('@')) {
      error["mailEmsg"] = " מייל לא תקין ";
      error["mailE"] = true;
    }

    if (state.category === '') {
      error["categoryE"] = true;
    }

    setErrors(error);
    return Object.keys(error).length !== 0 ? true : false;
  };

  const handleSubmit = e => {
    if (cheackValid()) return;
    sendContextMail();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "Contact-h3-big",
    hidden: window.location.pathname === '/Contact',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "Contact-h3",
    hidden: window.location.pathname === '/Contact' && props.width > 800 || window.location.pathname === '/',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact-d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9",
    id: "name",
    name: "name",
    type: "name",
    variant: "outlined",
    required: true,
    onChange: handleChange,
    value: state.name,
    error: errors.nameE,
    InputLabelProps: {
      id: 'lable'
    },
    "aria-describedby": "helper",
    helperText: errors.nameE ? 'חסר שם פרטי' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "\u05D8\u05DC\u05E4\u05D5\u05DF",
    id: "name",
    name: "phone",
    type: "tel",
    variant: "outlined",
    error: errors.phoneE,
    required: true,
    onChange: handleChange,
    value: state.phone,
    helperText: errors.phoneEmsg,
    InputLabelProps: {
      id: 'lable'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "\u05DE\u05D9\u05D9\u05DC",
    id: "name",
    name: "mail",
    type: "email",
    variant: "outlined",
    error: errors.mailE,
    required: true,
    onChange: handleChange,
    value: state.mail,
    helperText: errors.mailEmsg,
    InputLabelProps: {
      id: 'lable'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: "\u05E0\u05D5\u05E9\u05D0",
    id: "name",
    name: "category",
    type: "name",
    variant: "outlined" // inputProps={{style:{outline:'none !important',border:'none !important'}}}
    ,
    error: errors.categoryE,
    required: true,
    onChange: handleChange,
    value: state.category,
    InputLabelProps: {
      id: 'lable'
    },
    helperText: errors.categoryE ? 'חסר נושא ' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "div-submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "button",
    value: "\u05E9\u05DC\u05D7",
    className: "submit",
    onClick: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mesaage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, state.mesaage))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "map_grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: showInMapClicked,
    className: "map",
    src: _Image_map_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "map loction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flow'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, "       ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button-loction",
    onClick: showInMapClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 39
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons",
    style: {
      fontSize: '24px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 101
    }
  }, "place")), "\u05D1\u05D5\u05D0\u05D5 \u05DC\u05D1\u05E7\u05E8 \u05D0\u05D5\u05EA\u05E0\u05D5 \u05D1\u05E1\u05D5\u05E7\u05D5\u05DC\u05D5\u05D1 75 \u05D4\u05E8\u05E6\u05DC\u05D9\u05D4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, "\u05D0\u05F3,\u05D2\u05F3,\u05D3\u05F3,\u05D4\u05F3: 09:00-13:00, 16:00-19:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, "\u05D1\u05F3: 09:00-13:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, "\u05D5\u05F3: 09:00-14:00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/Details/Details.css":
/*!********************************************!*\
  !*** ./src/components/Details/Details.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Details/Details.js":
/*!*******************************************!*\
  !*** ./src/components/Details/Details.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Details; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.css */ "./src/components/Details/Details.css");
/* harmony import */ var _Details_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Details_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/Details/Details.js";


function Details(props) {
  const [details, setDetails] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Details row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "\u05E1\u05D5\u05D2\u05D9 \u05D4\u05D3\u05E4\u05E1\u05D5\u05EA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: details === 1 ? 'shadow-cube' : '',
    className: "col-2 cube-orange cube-colors",
    onClick: () => setDetails(1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "\u05D9\u05E9\u05D9\u05E8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: details === 2 ? 'shadow-cube' : '',
    className: "col-2 cube-red cube-colors",
    onClick: () => setDetails(2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\u05E1\u05D5\u05D1\u05DC\u05D9\u05DE\u05E6\u05D9\u05D4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: details === 3 ? 'shadow-cube' : '',
    className: "col-2 cube-pink cube-colors",
    onClick: () => setDetails(3),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\u05DE\u05E9\u05D9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: details === 4 ? 'shadow-cube' : '',
    className: "col-2 cube-purple cube-colors",
    onClick: () => setDetails(4),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "\u05E4\u05DC\u05E7\u05E1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: details === 5 ? 'shadow-cube' : '',
    className: "col-2 cube-blue cube-colors",
    onClick: () => setDetails(5),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "\u05E8\u05E7\u05DE\u05D4 \u05DE\u05DE\u05D5\u05D7\u05E9\u05D1\u05EA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: details === 6 ? 'shadow-cube' : '',
    className: "col-2 cube-green cube-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "\u05DE\u05E9\u05D9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9 mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    hidden: details !== 1,
    className: "cube-orange_d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "span_orange_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 59
    }
  }, "\u05D9\u05E9\u05D9\u05E8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 99
    }
  })), "\u05D4\u05DE\u05D5\u05E9\u05D2 \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D9\u05E9\u05D9\u05E8\u05D4 \u05DE\u05EA\u05D0\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D5\u05D1\u05D3\u05D4 \u05E9\u05E7\u05D9\u05D9\u05DD \u05E7\u05E9\u05E8 \u05D9\u05E9\u05D9\u05E8 \u05D1\u05D9\u05DF \u05D4\u05DE\u05E9\u05D8\u05D7 \u05D4\u05DE\u05D3\u05E4\u05D9\u05E1 \u05DC\u05DE\u05E9\u05D8\u05D7 \u05D4\u05DE\u05D5\u05D3\u05E4\u05E1, \u05DB\u05DC\u05D5\u05DE\u05E8 \u05D4\u05D4\u05D3\u05E4\u05E1\u05D4 \u05E0\u05E2\u05E9\u05D9\u05EA \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05E2\u05DC \u05D2\u05D1\u05D9 \u05D4\u05D7\u05D5\u05DE\u05E8. \u05D0\u05EA \u05D4\u05D4\u05D3\u05E4\u05E1\u05D4 \u05D4\u05D9\u05E9\u05D9\u05E8\u05D4 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05E6\u05E2 \u05E2\u05DC \u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05E9\u05DC \u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05DB\u05D2\u05D5\u05DF \u05E2\u05E5, \u05E0\u05D9\u05D9\u05E8, \u05D0\u05D1\u05DF, \u05D8\u05E7\u05E1\u05D8\u05D9\u05DC, \u05D5\u05E2\u05D5\u05D3. \u05D6\u05D0\u05EA \u05DC\u05D4\u05D1\u05D3\u05D9\u05DC \u05DE\u05D4\u05D3\u05E4\u05E1\u05D4 \u05E2\u05E7\u05D9\u05E4\u05D4, \u05E9\u05D1\u05D4 \u05D0\u05D9\u05DF \u05DE\u05D2\u05E2 \u05D9\u05E9\u05D9\u05E8 \u05D1\u05D9\u05DF \u05D4\u05DE\u05E9\u05D8\u05D7 \u05D4\u05DE\u05D3\u05E4\u05D9\u05E1 \u05DC\u05DE\u05E9\u05D8\u05D7 \u05D4\u05DE\u05D5\u05D3\u05E4\u05E1. \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D9\u05E9\u05D9\u05E8\u05D4 \u05DE\u05E9\u05DE\u05E9\u05EA \u05D1\u05E2\u05D9\u05E7\u05E8 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D0\u05DE\u05E0\u05D5\u05EA.\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05DC\u05E9\u05D9\u05D8\u05EA \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D9\u05E9\u05D9\u05E8\u05D4 \u2013 \u05D7\u05D5\u05EA\u05DE\u05EA \u05D2\u05D5\u05DE\u05D9, \u05D4\u05D3\u05E4\u05E1\u05EA \u05D1\u05DC\u05D8, \u05EA\u05D7\u05E8\u05D9\u05D8, \u05D4\u05D3\u05E4\u05E1 \u05DE\u05E9\u05D9, \u05D3\u05E4\u05D5\u05E1 \u05E6\u05D9\u05DC\u05D9\u05E0\u05D3\u05E8, \u05D4\u05D3\u05E4\u05E1 \u05D0\u05D1\u05DF, \u05D5\u05E2\u05D5\u05D3.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 143
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 149
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setDetails(0),
    className: "close-details-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "feather:x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 77
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    hidden: details !== 2,
    className: "cube-red_d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "span_red_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 56
    }
  }, "\u05E1\u05D5\u05D1\u05DC\u05D9\u05DE\u05E6\u05D9\u05D4", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 98
    }
  })), "\u05E9\u05D9\u05D8\u05EA \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D7\u05D3\u05E9\u05D4, \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA (\u05DE\u05DE\u05D3\u05E4\u05E1\u05EA) \u05D5\u05D4\u05E2\u05D1\u05E8\u05D4 \u05D1\u05D7\u05D5\u05DD \u05D0\u05DC \u05D4\u05D1\u05D2\u05D3. \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05D9\u05E0\u05D5 \u05DB\u05D5\u05DC\u05DC \u05D4\u05DB\u05E0\u05EA \u05D2\u05DC\u05D5\u05E4\u05D5\u05EA, \u05D0\u05DC\u05D0, \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D1\u05D3\u05D9\u05D5 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05E2\u05DC \u05D2\u05D1\u05D9 \u05E0\u05D9\u05D9\u05E8 \u05D5\u05D0\u05D6 \u05D4\u05D3\u05D9\u05D5 \u05DE\u05D5\u05E2\u05D1\u05E8 \u05D1\u05D7\u05D5\u05DD \u05D0\u05DC \u05D4\u05D1\u05D2\u05D3. \u05D4\u05D9\u05EA\u05E8\u05D5\u05DF \u05D4\u05D2\u05D3\u05D5\u05DC \u05E9\u05DC \u05D4\u05E9\u05D9\u05D8\u05D4 \u05D4\u05D6\u05D5 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05D9\u05E6\u05E8 \u05D4\u05D3\u05E4\u05E1\u05D9\u05DD \u05E6\u05D1\u05E2\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05E2\u05DC\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D7\u05E1\u05D9\u05EA \u05DC\u05D3\u05E4\u05D5\u05E1 \u05D4\u05DE\u05E9\u05D9, \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05DB\u05DE\u05D5\u05D9\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA \u05D5\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05D5\u05EA.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "span_red",
    href: "https://www.youtube.com/watch?v=d4A4xkFfNsE",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\u05DC\u05E1\u05E8\u05D8\u05D5\u05DF \u05D1\u05E0\u05D5\u05E9\u05D0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "dashicons:video-alt3",
    "data-inline": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 139
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setDetails(0),
    className: "close-details-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "feather:x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 77
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    hidden: details !== 3,
    className: "cube-pink_d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "span_pink_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 57
    }
  }, "\u05DE\u05E9\u05D9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 94
    }
  })), "\u05E9\u05D9\u05D8\u05EA \u05D4\u05D3\u05E4\u05E1\u05EA \u05D4\u05D7\u05D5\u05DC\u05E6\u05D5\u05EA \u05D4\u05E2\u05EA\u05D9\u05E7 \u05D5\u05D4\u05D5\u05D5\u05EA\u05D9\u05E7\u05D4 \u05DE\u05DB\u05D5\u05DC\u05DF. \u05D1\u05E9\u05D9\u05D8\u05D4 \u05D6\u05D5 \u05D9\u05D5\u05E6\u05E8\u05D9\u05DD \u05E9\u05D1\u05DC\u05D5\u05E0\u05D4 \u05E2\u05DC \u05D2\u05D1\u05D9 \u05E8\u05E9\u05EA \u05E4\u05D5\u05DC\u05D9\u05D0\u05E1\u05D8\u05E8 \u05E6\u05E4\u05D5\u05E4\u05D4 (\u05D2\u05DC\u05D5\u05E4\u05D4), \u05D5\u05D3\u05E8\u05DA \u05E9\u05D1\u05DC\u05D5\u05E0\u05D4 \u05D6\u05D5 \u05DE\u05E2\u05D1\u05D9\u05E8\u05D9\u05DD \u05D3\u05D9\u05D5 \u05D0\u05DC \u05D4\u05D1\u05D2\u05D3. \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D6\u05D5 \u05D4\u05DD \u05D1\u05E2\u05D9\u05E7\u05E8 \u05D1\u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05D4\u05E0\u05DE\u05D5\u05DB\u05D5\u05EA \u05D1\u05D4\u05D3\u05E4\u05E1\u05EA \u05DB\u05DE\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05E9\u05DC \u05D7\u05D5\u05DC\u05E6\u05D5\u05EA. \u05DC\u05E2\u05D5\u05DE\u05EA \u05D6\u05D0\u05EA \u05DB\u05D0\u05E9\u05E8 \u05D4\u05DB\u05DE\u05D5\u05D9\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D5\u05EA \u05D4\u05D3\u05D1\u05E8 \u05DE\u05D9\u05D9\u05E7\u05E8 \u05D0\u05EA \u05D4\u05D4\u05D3\u05E4\u05E1\u05D4 \u05DE\u05E9\u05D5\u05DD \u05E9\u05E2\u05DC\u05D5\u05EA \u05D4\u05DB\u05E0\u05EA \u05D4\u05D2\u05DC\u05D5\u05E4\u05D4 \u05D4\u05D9\u05D0 \u05D9\u05E7\u05E8\u05D4 \u05D5\u05DE\u05EA\u05D7\u05DC\u05E7\u05EA \u05E2\u05DC \u05DB\u05DE\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D4\u05D3\u05E4\u05E1\u05D5\u05EA.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "span_pink",
    href: "https://www.youtube.com/watch?v=RSpsWewtxXw",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "\u05DC\u05E1\u05E8\u05D8\u05D5\u05DF \u05D1\u05E0\u05D5\u05E9\u05D0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "dashicons:video-alt3",
    "data-inline": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 140
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setDetails(0),
    className: "close-details-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "feather:x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 77
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    hidden: details !== 4,
    className: "cube-purple_d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "span_purple_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 63
    }
  }, "\u05E4\u05DC\u05E7\u05E1", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 103
    }
  })), "\u05D1\u05E1\u05D5\u05D2 \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D6\u05D4 \u05D0\u05E0\u05D5 \u05D7\u05D5\u05EA\u05DB\u05D9\u05DD \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E9\u05DC \u05D4\u05D2\u05E8\u05E4\u05D9\u05E7\u05D4 \u05D5\u05D0\u05D5\u05EA\u05D4 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D8\u05D1\u05D9\u05E2\u05D9\u05DD \u05D1\u05D7\u05D5\u05DD \u05E2\u05DC \u05D2\u05D1\u05D9 \u05D4\u05D7\u05D5\u05DC\u05E6\u05D4. \u05D4\u05D9\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D4\u05D2\u05D5\u05D3\u05DC\u05D9\u05DD \u05E9\u05DC \u05E6\u05D5\u05E8\u05EA \u05D4\u05D3\u05E4\u05E1\u05D4 \u05D6\u05D5 \u05D4\u05DD \u05D4\u05D0\u05D9\u05DB\u05D5\u05EA \u05E9\u05DC \u05D4\u05D4\u05D3\u05E4\u05E1\u05D4 \u05D5\u05D4\u05E2\u05DE\u05D9\u05D3\u05D5\u05EA \u05E9\u05DC \u05D4\u05D4\u05D3\u05E4\u05E1. \u05D4\u05E4\u05DC\u05E7\u05E1 \u05DE\u05D9\u05D9\u05E6\u05E8 \u05DE\u05E8\u05D0\u05D4 \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9 \u05D5\u05D9\u05E4\u05D4 \u05E9\u05DC\u05D0 \u05E0\u05D4\u05E8\u05E1 \u05E2\u05DD \u05D4\u05D6\u05DE\u05DF \u05D5\u05D4\u05DB\u05D1\u05D9\u05E1\u05D5\u05EA \u05D5\u05E9\u05D5\u05DE\u05E8 \u05E2\u05DC \u05D4\u05E6\u05D1\u05E2 \u05D5\u05D4\u05DE\u05E8\u05D0\u05D4 \u05E9\u05DC\u05D5 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D6\u05DE\u05DF \u05E8\u05D1. \u05DC\u05E2\u05D5\u05DE\u05EA \u05D6\u05D0\u05EA \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D5\u05D0 \u05D1\u05E8\u05D5\u05D1\u05D5 \u05D9\u05D3\u05E0\u05D9, \u05D4\u05D4\u05D3\u05E4\u05E1\u05D9\u05DD \u05D4\u05DD \u05D1\u05E6\u05D1\u05E2 \u05D0\u05D7\u05D3 (\u05D0\u05D5 \u05E9\u05D9\u05DC\u05D5\u05D1 \u05E9\u05DC \u05DE\u05E1\u05E4\u05E8 \u05E4\u05DC\u05E7\u05E1\u05D9\u05DD \u05D1\u05E6\u05D1\u05E2\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD) \u05D5\u05DC\u05D0 \u05DB\u05DC \u05D2\u05E8\u05E4\u05D9\u05E7\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05D5\u05D3\u05E4\u05E1\u05EA- \u05D2\u05E8\u05E4\u05D9\u05E7\u05D4 \u05E2\u05D3\u05D9\u05E0\u05D4 \u05D1\u05E2\u05DC\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05EA\u05D4\u05D9\u05D4 \u05E7\u05E9\u05D4 \u05DC\u05D9\u05D9\u05E9\u05D5\u05DD, \u05D5\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05DE\u05EA\u05D0\u05D9\u05DD \u05D1\u05E2\u05D9\u05E7\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA \u05E9\u05E0\u05D3\u05E8\u05E9\u05EA \u05D1\u05D4\u05DF \u05E8\u05DE\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 614
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 620
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "span_purple",
    href: "https://www.youtube.com/watch?v=lUEBtKSGVI4",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\u05DC\u05E1\u05E8\u05D8\u05D5\u05DF \u05D1\u05E0\u05D5\u05E9\u05D0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "dashicons:video-alt3",
    "data-inline": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 142
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setDetails(0),
    className: "close-details-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "feather:x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 77
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    hidden: details !== 5,
    className: "cube-blue_d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "span_blue_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 61
    }
  }, "\u05E8\u05E7\u05DE\u05D4 \u05DE\u05DE\u05D5\u05D7\u05E9\u05D1\u05EA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 107
    }
  })), "\u05D9\u05E9 \u05DC\u05E0\u05D5 \u05DE\u05DB\u05D5\u05E0\u05EA \u05E8\u05E7\u05DE\u05D4 \u05E2\u05DD 16 \u05E8\u05D0\u05E9\u05D9\u05DD \u05E9\u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05E6\u05E2 \u05DE\u05E1\u05E4\u05E8 \u05E8\u05D1 \u05E9\u05DC \u05E8\u05E7\u05DE\u05D5\u05EA \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E9\u05DC \u05E6\u05D1\u05E2\u05D9\u05DD \u05D5\u05D7\u05D5\u05D8\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA\u05DB\u05DD. \u05DB\u05D0\u05E9\u05E8 \u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05E8\u05E7\u05D5\u05DD \u05DC\u05D5\u05D2\u05D5 \u05D0\u05D5 \u05E1\u05DC\u05D5\u05D2\u05DF \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05E7\u05D1\u05DC \u05DE\u05DB\u05DD \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D5\u05DC\u05D1\u05E6\u05E2 \u05EA\u05DB\u05E0\u05D5\u05EA \u05E9\u05D4\u05D5\u05D0 \u05DC\u05DE\u05E2\u05E9\u05D4 \u05D4\u05DC\u05D9\u05DA \u05E9\u05DC \u05D4\u05DE\u05E8\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D2\u05E8\u05E4\u05D9 \u05DC\u05E7\u05D5\u05D1\u05E5 \u05E9\u05D1\u05D5 \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05E8\u05D2\u05DE\u05D9\u05DD \u05D0\u05EA \u05D4\u05D2\u05E8\u05E4\u05D9\u05E7\u05D4 \u05DC\u05E7\u05D5\u05D1\u05E5 \u05E9\u05DC \u05E8\u05E7\u05DE\u05EA \u05D7\u05D5\u05D8\u05D9\u05DD \u05D5\u05D0\u05D6 \u05DE\u05DB\u05D5\u05E0\u05EA \u05D4\u05E8\u05E7\u05DE\u05D4 \u05D9\u05D5\u05D3\u05E2\u05EA \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05E8\u05E7\u05DE\u05D4 \u05E9\u05DC \u05D4\u05DC\u05D5\u05D2\u05D5 \u05E9\u05DC\u05DB\u05DD \u05E2\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8 \u05E9\u05D1\u05D7\u05E8\u05EA\u05DD. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D1\u05E6\u05E2 \u05E8\u05E7\u05DE\u05D4 \u05E2\u05DC \u05DE\u05D1\u05D7\u05E8 \u05E8\u05D7\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E9\u05DC \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DB\u05D2\u05D5\u05DF \u05DB\u05D5\u05D1\u05E2\u05D9\u05DD, \u05D7\u05D5\u05DC\u05E6\u05D5\u05EA, \u05EA\u05D9\u05E7\u05D9 \u05D2\u05D1 \u05E9\u05D5\u05E0\u05D9\u05DD, \u05DE\u05D5\u05E6\u05E8\u05D9 \u05D8\u05E7\u05E1\u05D8\u05D9\u05DC, \u05DE\u05D2\u05D1\u05D5\u05EA \u05D5\u05E2\u05D5\u05D3 \u05DE\u05D2\u05D5\u05D5\u05DF \u05E9\u05DC \u05D9\u05E9\u05D5\u05DE\u05D9\u05DD. \u05D0\u05E0\u05D5 \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA\u05DB\u05DD \u05D5\u05DE\u05EA\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05D6\u05DE\u05E0\u05D9\u05DD \u05D5\u05D4\u05DE\u05D5\u05D8\u05D5 \u05E9\u05DC\u05E0\u05D5 \u05D4\u05D5\u05D0:\"\u05D4\u05D0\u05D5\u05DE\u05E0\u05D5\u05EA \u05E9\u05D1\u05D0\u05D9\u05DB\u05D5\u05EA\".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 87
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 93
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "span_blue",
    href: "https://www.youtube.com/watch?v=-wzg5eXeawk",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\u05DC\u05E1\u05E8\u05D8\u05D5\u05DF \u05D1\u05E0\u05D5\u05E9\u05D0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "dashicons:video-alt3",
    "data-inline": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 140
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setDetails(0),
    className: "close-details-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    "data-icon": "feather:x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 77
    }
  })))));
}

/***/ }),

/***/ "./src/components/Home/home.css":
/*!**************************************!*\
  !*** ./src/components/Home/home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Home/home.js":
/*!*************************************!*\
  !*** ./src/components/Home/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_logoPic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Image/logoPic.png */ "./src/Image/logoPic.png");
/* harmony import */ var _Image_logoPic_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_logoPic_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_logowhite_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Image/logowhite.png */ "./src/Image/logowhite.png");
/* harmony import */ var _Image_logowhite_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Image_logowhite_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Contact_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contact/Contact */ "./src/components/Contact/Contact.js");
/* harmony import */ var _Details_Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Details/Details */ "./src/components/Details/Details.js");
/* harmony import */ var _Categories_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Categories/Categories */ "./src/components/Categories/Categories.js");
/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../About/About */ "./src/components/About/About.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.css */ "./src/components/Home/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/Home/home.js";












class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.galleryItems = [];
    this.responsive = {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    };

    this.renderSlideInfo = _ref => {
      let {
        item,
        itemsCount
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 12
        }
      }, item, "\\", itemsCount);
    };

    this.renderDotsItem = _ref2 => {
      let {
        isActive
      } = _ref2;
      return isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logoSlider",
        src: _Image_logoPic_png__WEBPACK_IMPORTED_MODULE_1___default.a,
        alt: "LogoPic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 20
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logoSlider",
        src: _Image_logowhite_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "LogoPic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 85
        }
      });
    };

    this.renderPrevButton = _ref3 => {
      let {
        isDisabled
      } = _ref3;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '20px',
          opacity: isDisabled ? '0.5' : 1
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 12
        }
      }, "<");
    };

    this.renderNextButton = _ref4 => {
      let {
        isDisabled
      } = _ref4;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '20px',
          opacity: isDisabled ? '0.5' : 1
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 12
        }
      }, ">");
    };

    this.renderPlayPauseButton = _ref5 => {
      let {
        isPlaying
      } = _ref5;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "play-slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 12
        }
      }, isPlaying ? 'עצור' : 'המשך');
    };

    this.Carousel = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_alice_carousel__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mouseTracking: true,
      items: this.galleryItems,
      autoPlayControls: true,
      autoPlay: true,
      disableSlideInfo: false,
      autoPlayDirection: "ltr",
      infinite: true,
      renderSlideInfo: this.renderSlideInfo,
      renderDotsItem: this.renderDotsItem,
      renderPrevButton: this.renderPrevButton,
      renderNextButton: this.renderNextButton,
      renderPlayPauseButton: this.renderPlayPauseButton,
      autoPlayInterval: 1300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }
    });

    this.state = {
      currentIndex: 1,
      photoList: [],
      galleryItems: []
    };
    this.Carousel = this.Carousel.bind(this);
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_config_config__WEBPACK_IMPORTED_MODULE_8___default.a.getServerPath() + 'photo/all').then(res => {
      if (res.data.status === 400) {
        console.log('error');
        return;
      }

      this.setState({
        photoList: res.data.photoList
      }, () => {
        // console.log(this.state.photoList)
        this.state.photoList.sort((a, b) => a.positon - b.position).forEach((item, index) => {
          console.log(item.url);
          this.galleryItems.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "gallery-image",
            href: item.url,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 6
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "gallery-image",
            src: item.src,
            alt: "gallery",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 51
            }
          })));
          this.setState({
            galleryItems: this.state.galleryItems
          }); // console.log(this.state.galleryItems)
        });
      });
    }).catch(() => {
      console.log('send');
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gallery",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, console.log(this.galleryItems), this.galleryItems.length !== 0 ? this.Carousel() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "hr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_About_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "hr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Details_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "hr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setCategory: this.props.setCategory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "hr",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./src/components/Navbar/navbar.css":
/*!******************************************!*\
  !*** ./src/components/Navbar/navbar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.css */ "./src/components/Navbar/navbar.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hamburger-react */ "./node_modules/hamburger-react/dist-esm/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar1_Navbar1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navbar1/Navbar1 */ "./src/components/Navbar1/Navbar1.js");
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/Navbar/navbar.js";
 // import Logo from '../../Image/opiumLogo3.png'





function Navbar(props) {
  const [menuStatus, setMenuStatus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [openMenu, setOpenMenu] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [imgLogo, setImgLogo] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let dataURL = _config_config__WEBPACK_IMPORTED_MODULE_3___default.a.getWordpressPath() + "pages/4944"; //home-page 

    fetch(dataURL).then(res => res.json()).then(res => {
      var imgId = res.acf.logo_nav;
      let getImgURL = _config_config__WEBPACK_IMPORTED_MODULE_3___default.a.getWordpressPath() + "media/" + imgId; //image gallarey 

      fetch(getImgURL).then(res => res.json()).then(res => {
        setImgLogo(res.source_url);
        console.log(res);
      });
      console.log(res.acf.logo_nav);
    });
  }, []);

  const getMenuOptions = () => {
    return [{
      name: 'מוצרים',
      link: '/Products/All/all',
      internal: true
    }, {
      name: 'קטלוג ',
      link: '/http://www.giftlogo.co.il/',
      internal: false
    }, {
      name: 'עצב בעצמך',
      link: '/Design/',
      internal: true
    }, {
      name: 'צור קשר',
      link: '/Contact',
      internal: true
    }, {
      name: 'סל קניות',
      link: '/Cart',
      internal: true
    }, props.orderSize !== 0 && {
      name: 'ההזמנות שלי',
      link: '/Order',
      internal: true
    }];
  };

  const closeMenu = () => {
    setMenuStatus(3);
    setOpenMenu(false);
    setTimeout(() => setMenuStatus(0), 200);
  };

  const onOpenMenu = () => {
    if (!openMenu) {
      setMenuStatus(1);
      setTimeout(() => setMenuStatus(2), 200);
    } else {
      closeMenu();
    }

    setOpenMenu(!openMenu);
  };

  const getMenu = () => {
    if (menuStatus === 0) {
      return null;
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar1_Navbar1__WEBPACK_IMPORTED_MODULE_4__["default"], {
        options: getMenuOptions(),
        menuStatus: menuStatus,
        onClose: closeMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 14
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-root container-fluid",
    hidden: props.hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, getMenu(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu row  align-items-center ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Hamburger-nav",
    className: "col-auto ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(hamburger_react__WEBPACK_IMPORTED_MODULE_2__["Squash"], {
    color: "black",
    rounded: true,
    direction: "left",
    toggled: openMenu,
    toggle: onOpenMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1 pt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: imgLogo,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-item1 col-8 pr-5  align-self-start ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/Products/All/all",
    className: window.location.pathname.includes('/Products') ? 'background-anim-dot' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 127
    }
  }, " \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.giftlogo.co.il/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 91
    }
  }, " \u05E7\u05D8\u05DC\u05D5\u05D2 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/Design/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 31
    }
  }, " \u05E2\u05E6\u05D1 \u05D1\u05E2\u05E6\u05DE\u05DA ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/Contact",
    className: window.location.pathname === '/Contact' ? 'background-anim-dot' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 112
    }
  }, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-nav col-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    hidden: props.orderSize === 0,
    id: window.location.pathname === '/Order' ? 'background-cart' : 'order',
    href: "/Order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    id: "shopCart-icon",
    "data-icon": "icon-park-outline:transaction-order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 132
    }
  }), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dot-nav dot-order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 234
    }
  }, props.orderSize), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "myCart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "\u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E9\u05DC\u05D9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: window.location.pathname === '/Cart' ? 'background-cart' : 'shoping',
    href: "/Cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "iconify",
    id: "shopCart-icon",
    "data-icon": "ph:shopping-cart-fill",
    "data-inline": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 101
    }
  }), "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dot-nav dot-shoping",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 213
    }
  }, props.cartSize), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "myCart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "\u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E9\u05DC\u05D9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/swqwlb.hrzlyh",
    rel: "noreferrer",
    target: "_blank",
    className: "facebook-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-facebook-f",
    style: {
      fontSize: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 121
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/opium_print/",
    rel: "noreferrer",
    target: "_blank",
    className: "insta-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-instagram",
    style: {
      fontSize: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 119
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dda180@gmail.com",
    rel: "noreferrer",
    target: "_blank",
    className: "email-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope",
    style: {
      fontSize: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 147
    }
  })))));
}

/***/ }),

/***/ "./src/components/Navbar1/Navbar.css":
/*!*******************************************!*\
  !*** ./src/components/Navbar1/Navbar.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Navbar1/Navbar1.js":
/*!*******************************************!*\
  !*** ./src/components/Navbar1/Navbar1.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.css */ "./src/components/Navbar1/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_generalUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/generalUtils */ "./src/common/generalUtils.js");
/* harmony import */ var _common_generalUtils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_generalUtils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Image/opiumLogo3.png */ "./src/Image/opiumLogo3.png");
/* harmony import */ var _Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/Navbar1/Navbar1.js";





class Navbar1 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: 'menu-wrapper-nav',
      className: 'menu-wrapper-nav ' + this.getClassNameWithSuffix('menu-wrapper-nav'),
      onClick: e => this.onBackGroundClick(e.target.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'menu-white-nav ' + _common_generalUtils__WEBPACK_IMPORTED_MODULE_2___default.a.getLangClass(this.getClassNameWithSuffix('menu-white-nav'), 1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: 'menu-logo',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 53
      }
    })), this.getMenuItems()));
  }

  onBackGroundClick(targetId) {
    if (targetId === 'menu-wrapper-id') {
      this.props.onClose();
    }
  }

  getClassNameWithSuffix(className) {
    if (this.props.menuStatus === 1) {
      return className + '-opening';
    }

    if (this.props.menuStatus === 3) {
      return className + '-closing';
    }
  }

  getMenuItems() {
    return this.props.options.map((item, key) => this.getMenuItem(item, key));
  }

  getMenuItem(item, key) {
    if (item.link !== null) {
      if (item.internal) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: item.link,
          key: 'menu-item-' + item.name,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 22
          }
        }, this.getItemDiv(item));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: item.link,
          key: 'menu-item-' + item.name,
          target: '_blank',
          rel: "noopener noreferrer",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }
        }, this.getItemDiv(item));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: 'menu-item-' + item.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, this.getItemDiv(item));
  }

  getItemDiv(item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'menu-item',
      onClick: () => this.onItemClick(item),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, item.name);
  }

  onItemClick(item) {
    if (item.onClick != null) {
      item.onClick();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar1);

/***/ }),

/***/ "./src/components/NotFound/NotFound.css":
/*!**********************************************!*\
  !*** ./src/components/NotFound/NotFound.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/NotFound/NotFound.js":
/*!*********************************************!*\
  !*** ./src/components/NotFound/NotFound.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.css */ "./src/components/NotFound/NotFound.css");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NotFound_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/NotFound/NotFound.js";


function NotFound(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NotFound",
    style: {
      height: window.innerHeight * 0.5 + 'px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "NotFound-p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "\u05D4\u05D3\u05E3 \u05E9\u05D7\u05D9\u05E4\u05E9\u05EA \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "NotFound-a",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "\u05DC\u05DE\u05E2\u05D1\u05E8 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D9"));
}

/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Image/opiumLogo3.png */ "./src/Image/opiumLogo3.png");
/* harmony import */ var _Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/components/footer/footer.js";



class footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      feedback: null
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer",
      hidden: this.props.hide,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _Image_opiumLogo3_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.facebook.com/swqwlb.hrzlyh",
      rel: "noreferrer",
      target: "_blank",
      className: "facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-facebook-f",
      style: {
        fontSize: '24px',
        color: 'black'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 118
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.instagram.com/opium_print/",
      rel: "noreferrer",
      target: "_blank",
      className: "insta",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-instagram",
      style: {
        fontSize: '24px',
        color: 'black'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 117
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dda180@gmail.com",
      rel: "noreferrer",
      target: "_blank",
      className: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope",
      style: {
        fontSize: '24px',
        color: 'black'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 143
      }
    }))));
  }

}

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const serverPaths = 'http://127.0.0.1:8081/';
const serverPaths = 'http://danielle.local:8081/';

function getServerPath() {
  // return 'https://opium-print.herokuapp.com/';
  return serverPaths;
}

function getWordpressPath() {
  const pathLocal = "http://localhost:10003/wp-json/wp/v2/";
  const path = "https://www.opiumstore.co.il/wp-json/wp/v2/";
  return path;
}

module.exports = {
  getServerPath: getServerPath,
  getWordpressPath: getWordpressPath
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/index.js";



 // import * as serviceWorker from './serviceWorker';

 // import 'react-slideshow-image/dist/styles.css'

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
/*#__PURE__*/
// <React.StrictMode>
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Local Sites/opium/app/public/wp-content/themes/barebones/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map