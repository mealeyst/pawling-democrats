"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 1895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getAllPagesWithSlug)
/* harmony export */ });
/* unused harmony export getPage */
const PAGE_GRAPHQL_FIELDS = `
slug
title
body {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;
async function fetchGraphQL(query, preview = false) {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            query
        })
    }).then((response)=>{
        return response.json();
    });
}
function extractPage(fetchResponse) {
    var ref, ref1, ref2;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref1 = ref.pageCollection) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.items) === null || ref2 === void 0 ? void 0 : ref2[0];
}
function extractPageEntries(fetchResponse) {
    var ref, ref3;
    return fetchResponse === null || fetchResponse === void 0 ? void 0 : (ref = fetchResponse.data) === null || ref === void 0 ? void 0 : (ref3 = ref.pageCollection) === null || ref3 === void 0 ? void 0 : ref3.items;
}
async function getAllPagesWithSlug() {
    const entries = await fetchGraphQL(`query {
      pageCollection(where: { slug_exists: true }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`);
    return extractPageEntries(entries);
}
async function getPage(slug, preview) {
    const entry = await fetchGraphQL(`query {
      pageCollection(where: { slug: "${slug}" }, preview: false, limit: 1) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`, preview);
    return {
        page: extractPage(entry)
    };
}


/***/ }),

/***/ 8011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body),
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3032);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1895);
/* harmony import */ var _lib_Contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4615);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_theme_spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9267);
/* harmony import */ var _components_theme_mediaQueies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8265);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(888);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navigation__WEBPACK_IMPORTED_MODULE_8__]);
_components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Body = styled_components__WEBPACK_IMPORTED_MODULE_6___default().section.withConfig({
    componentId: "sc-6803744b-0"
})`
  margin-left: auto;
  margin-right: auto;
  padding: ${(0,_components_theme_spacing__WEBPACK_IMPORTED_MODULE_10__/* .spacing */ .W)(0, 4)};
  margin-top: ${(0,_components_theme_spacing__WEBPACK_IMPORTED_MODULE_10__/* .spacing */ .W)(24)};
  max-width: 1440px;
  ${(0,_components_theme_mediaQueies__WEBPACK_IMPORTED_MODULE_7__/* .query */ .I)("md")} {
    ${({ desktopMarginTop =true  })=>desktopMarginTop ? styled_components__WEBPACK_IMPORTED_MODULE_6__.css`
            margin-top: ${(0,_components_theme_spacing__WEBPACK_IMPORTED_MODULE_10__/* .spacing */ .W)(35)};
          ` : styled_components__WEBPACK_IMPORTED_MODULE_6__.css`
            margin-top: 0;
          `
}
  }
`;
function Page({ page , navigation  }) {
    var ref, ref1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (!router.isFallback && !page) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {
                statusCode: 404
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__/* .Navigation */ .W, {
                navigation: navigation
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                children: (page === null || page === void 0 ? void 0 : (ref = page.fields) === null || ref === void 0 ? void 0 : ref.body) && (0,_components_Nodes__WEBPACK_IMPORTED_MODULE_3__/* .documentToReactComponents */ .h)(page === null || page === void 0 ? void 0 : (ref1 = page.fields) === null || ref1 === void 0 ? void 0 : ref1.body)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__/* .Footer */ .$, {})
        ]
    });
};
async function getStaticProps({ params , preview =false  }) {
    var ref, ref2;
    const navigationData = await (0,_lib_Contentful__WEBPACK_IMPORTED_MODULE_5__/* .getEntry */ .e9)("1GjjrJGYkHlgrGltIHjrcU", {});
    const pageData = await (0,_lib_Contentful__WEBPACK_IMPORTED_MODULE_5__/* .getEntries */ .Cg)({
        content_type: "page",
        "fields.slug": params.slug === "pawling-democrats" ? "home" : params.slug,
        include: 10
    });
    const desktopMarginTop = !(((ref2 = (ref = pageData[0].fields.body) === null || ref === void 0 ? void 0 : ref.content[0]) === null || ref2 === void 0 ? void 0 : ref2.data.target.sys.contentType.sys.id) === "hero");
    return {
        props: {
            preview,
            navigation: navigationData,
            page: pageData[0] ?? null,
            desktopMarginTop
        }
    };
}
async function getStaticPaths() {
    const allPages = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_11__/* .getAllPagesWithSlug */ .p)();
    return {
        paths: (allPages === null || allPages === void 0 ? void 0 : allPages.map(({ slug  })=>`/${slug}`
        )) ?? [],
        fallback: true
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 7225:
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,764], () => (__webpack_exec__(8011)));
module.exports = __webpack_exports__;

})();