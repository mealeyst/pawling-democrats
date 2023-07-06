"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8194);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(888);
/* harmony import */ var _components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2556);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6174);
/* harmony import */ var _components_theme_Body__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6660);
/* harmony import */ var _graphql_get_page_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(901);
/* harmony import */ var _graphql_get_page_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_graphql_get_page_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_get_site_navigation_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9081);
/* harmony import */ var _graphql_get_site_navigation_graphql__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_get_site_navigation_graphql__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3832);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navigation__WEBPACK_IMPORTED_MODULE_5__]);
_components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Page({ desktopMarginTop , page , navigation  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (!router.isFallback && !page) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {
                statusCode: 404
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__/* .Page */ .T, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__/* .Navigation */ .W, {
                navigation: navigation
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_theme_Body__WEBPACK_IMPORTED_MODULE_8__/* .Body */ .u, {
                desktopMarginTop: desktopMarginTop,
                children: page?.body && (0,_components_Nodes__WEBPACK_IMPORTED_MODULE_3__/* .documentToReactComponents */ .h)(page.body.json, page.body?.links)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__/* .Footer */ .$, {})
        ]
    });
};
async function getStaticProps({ preview =false  }) {
    const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_11__/* .initializeApollo */ ["in"])();
    const page = (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__/* .extractPage */ .$F)(await apolloClient.query({
        query: (_graphql_get_page_graphql__WEBPACK_IMPORTED_MODULE_9___default()),
        variables: {
            slug: "home",
            preview
        }
    }));
    const navigation = (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__/* .extractNavigationLinks */ .DN)(await apolloClient.query({
        query: (_graphql_get_site_navigation_graphql__WEBPACK_IMPORTED_MODULE_10___default()),
        variables: {
            preview
        }
    }));
    return {
        props: {
            page,
            navigation
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4394:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 8706:
/***/ ((module) => {

module.exports = require("@contentful/rich-text-react-renderer");

/***/ }),

/***/ 413:
/***/ ((module) => {

module.exports = require("@contentful/rich-text-types");

/***/ }),

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 1832:
/***/ ((module) => {

module.exports = import("@react-hook/window-scroll");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,144], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();