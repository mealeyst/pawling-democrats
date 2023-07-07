"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getColor = (theme, colorPath)=>(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theme.colors, colorPath)
;
const color = (colorPath)=>({ theme  })=>getColor(theme, colorPath)
;


/***/ }),

/***/ 2946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ rem)
/* harmony export */ });
const rem = (...values)=>({ theme  })=>values.map((n)=>n === "auto" ? n : `${n / theme.baseFontSize}rem`
        ).join(" ")
;


/***/ }),

/***/ 9267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ spacing)
/* harmony export */ });
/* harmony import */ var _rem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2946);

const spacing = (...values)=>({ theme  })=>{
        const result = values.map((value)=>(0,_rem__WEBPACK_IMPORTED_MODULE_0__/* .rem */ .h)(theme.baseFontSize * (value * 0.25))({
                theme
            })
        ).join(" ");
        return result;
    }
;


/***/ }),

/***/ 9457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./components/theme/color.ts
var color = __webpack_require__(8601);
// EXTERNAL MODULE: ./components/theme/spacing.ts
var spacing = __webpack_require__(9267);
;// CONCATENATED MODULE: ./components/theme/Theme.tsx





const minWidthQuery = (minWidth)=>`@media (min-width: ${minWidth}px)`
;
const THEME = {
    baseFontSize: 16,
    breakpoints: {
        sm: minWidthQuery(480),
        md: minWidthQuery(768),
        lg: minWidthQuery(1024),
        xl: minWidthQuery(1200)
    },
    colors: {
        primary: {
            "50": "hsl(218, 47%, 34%)",
            "100": "hsl(218, 53%, 29%)",
            "200": "hsl(219, 59%, 24%)",
            "300": "hsl(219, 66%, 20%)",
            "400": "hsl(218, 74%, 15%)"
        },
        secondary: {
            "50": "rgba(0, 255, 255, 1)",
            "100": "rgba(0, 227, 255, 1)",
            "200": "rgba(0, 198, 255, 1)",
            "300": "rgba(0, 170, 255, 1)",
            "400": "rgba(0, 142, 255, 1)",
            "500": "rgba(0, 113, 255, 1)",
            "600": "rgba(0, 85, 255, 1)",
            "700": "rgba(0, 57, 255, 1)",
            "800": "rgba(0, 28, 255, 1)",
            "900": "rgba(0, 0, 255, 1)"
        },
        black: {
            "50": "hsl(240, 1%, 23%)",
            "100": "hsl(0, 0%, 21%)",
            "200": "hsl(220, 3%, 17%)",
            "300": "hsl(240, 5%, 15%)",
            "400": "hsl(228, 8%, 12%)"
        },
        grey: {
            "50": "hsl(240, 0%, 53%)",
            "100": "hsl(240, 0%, 47%)",
            "200": "hsl(230, 3%, 40%)",
            "300": "hsl(233, 5%, 33%)",
            "400": "hsl(235, 9%, 26%)"
        },
        white: {
            "50": "hsl(216, 33%, 97%)",
            "100": "hsl(220, 21%, 95%)",
            "200": "hsl(220, 24%, 90%)",
            "300": "hsl(220, 24%, 85%)",
            "400": "hsl(218, 22%, 80%)"
        }
    },
    fonts: {
        robotoSlab: "'Roboto Slab', serif"
    },
    shadow: {
        "shadow-sm": "0 1px 2px 0 hsl(218, 74%, 15%)",
        shadow: "0 1px 3px 0 hsl(218, 74%, 15%), 0 1px 2px -1px hsl(218, 74%, 15%)",
        "shadow-md": "0 4px 6px -1px hsl(218, 74%, 15%), 0 2px 4px -2px hsl(218, 74%, 15%)",
        "shadow-lg": "0 10px 15px -3px hsl(218, 74%, 15%), 0 4px 6px -4px hsl(218, 74%, 15%)",
        "shadow-xl": "0 20px 25px -5px hsl(218, 74%, 15%), 0 8px 10px -6px hsl(218, 74%, 15%)",
        "shadow-2xl": "0 25px 50px -12px hsl(218, 74%, 15%)",
        "shadow-inner": "inset 0 2px 4px 0 hsl(218, 74%, 15%)",
        "shadow-none": "0 0 #0000"
    },
    spacing: [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        14,
        16,
        20,
        24,
        28,
        32,
        36,
        40,
        44,
        48,
        52,
        56,
        60,
        64,
        72,
        80,
        96, 
    ]
};
const GlobalStyles = external_styled_components_.createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
    height: 100vh;
  }
  body {
    min-height: 100vh;
    margin: 0;
    overscroll-behavior: none;
    display: grid;
    grid-template-rows: 1fr auto;
  }
  hr {
    width: 100%;
    background-color: ${(0,color/* color */.$)("grey.50")};
    height: 1px;
    border: none;
  }
  ${THEME.spacing.map((space)=>external_styled_components_.css`
        .mt-${space} {
          margin-top: ${(0,spacing/* spacing */.W)(space)};
        }
        .ml-${space} {
          margin-left: ${(0,spacing/* spacing */.W)(space)};
        }
        .mr-${space} {
          margin-right: ${(0,spacing/* spacing */.W)(space)};
        }
        .mb-${space} {
          margin-bottom: ${(0,spacing/* spacing */.W)(space)};
        }
        .pt-${space} {
          padding-top: ${(0,spacing/* spacing */.W)(space)};
        }
        .pl-${space} {
          padding-left: ${(0,spacing/* spacing */.W)(space)};
        }
        .pr-${space} {
          padding-right: ${(0,spacing/* spacing */.W)(space)};
        }
        .pb-${space} {
          padding-bottom: ${(0,spacing/* spacing */.W)(space)};
        }
      `
)}
`;
const BlueTheme = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: THEME,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles, {}),
            children
        ]
    })
;

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlueTheme, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
MyApp.getInitialProps = async (context)=>{
    const ctx = await app["default"].getInitialProps(context);
    const initialProps = {
        ...ctx,
        preview: "CONTENTFUL_PREVIEW_ACCESS_TOKEN" in process.env
    };
    return initialProps;
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544], () => (__webpack_exec__(9457)));
module.exports = __webpack_exports__;

})();