/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = [
    {
        id: 1,
        imagePath: "img/img_maldives.jpg",
        description: "Maison sur pilotis aux Maldives",
        done: false,
        link: "https://www.dreamingofmaldives.com/blog-des-maldives/les-plus-belles-villas-sur-pilotis-que-nous-ayons-vu-aux-maldives-notre-selection-en-photos/",
        coordinates: {
            lat: -0.681786,
            lng: 73.191414
        }
    },
    {
        id: 2,
        imagePath: "img/img_kenya.jpg",
        description: "Faire un Safari au Kenya",
        done: false,
        link: "http://www.kenya-guide.com/choix-safari-kenya",
        coordinates: {
            lat: -0.52483,
            lng: 36.664008
        }

    },
    {
        id: 3,
        imagePath: "img/img_paris.jpg",
        description: "Monter sur la Tour Eiffel",
        done: true,
        link: "http://www.toureiffel.paris/",
        coordinates: {
            lat: 48.858227,
            lng: 2.294559
        }
    },
];



/***/ }),

/***/ "./src/dream.js":
/*!**********************!*\
  !*** ./src/dream.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildDreams": () => (/* binding */ buildDreams)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");


const dreamsContainer = document.querySelector('#dreams-container');

function buildDreams() {
    while (dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    _data_js__WEBPACK_IMPORTED_MODULE_0__.data.forEach(buildOneDream);
    addDreamListeners();
}

function buildOneDream(dream) {
    const dreamElement = document.createElement('div');
    dreamElement.innerHTML =
    `<div class="card text-center" id="${dream.id}">
        <h4 class="card-header font-weight-bold">${dream.description}</h4>
        <img class="card-img-top" src="${dream.imagePath}" alt="">
        <div class="card-body">
            <a href="#" class="button-action btn btn-${dream.done ? "secondary" : "danger"} btn-block font-weight-bold">${dream.done ? "Je veux le refaire" : "Je me lance !"}</a>
        </div>
        <div class="card-footer text-right">
            <a href="https://www.google.com/maps/@${dream.coordinates.lat},${dream.coordinates.lng},861m/data=!3m1!1e3" target="_blank" class="btn btn-outline-secondary btn-sm">Visiter</a>
            <a href="${dream.link}" target="_blank" class="button-info btn btn-outline-dark btn-sm">Plus d'infos</a>
        </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);
}

function addDreamListeners() {
    document.querySelectorAll('.button-action').forEach(item => {
        item.addEventListener('click', event => {
            const id = item.parentElement.parentElement.getAttribute("id");
            let dream = _data_js__WEBPACK_IMPORTED_MODULE_0__.data.filter(item => item.id === parseInt(id))[0];
            console.log(dream, id);
            dream.done = !dream.done;
            buildDreams();
        });
    });
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dream.js */ "./src/dream.js");


(0,_dream_js__WEBPACK_IMPORTED_MODULE_0__.buildDreams)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map