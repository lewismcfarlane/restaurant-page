"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["module1"],{

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tab1: () => (/* binding */ tab1),
/* harmony export */   tab2: () => (/* binding */ tab2),
/* harmony export */   tab3: () => (/* binding */ tab3)
/* harmony export */ });
function tab1() {
  console.log('I get called from module1.js! tab1');

  const content = document.getElementById('content');
  content.innerHTML = '';

  const p = document.createElement('p');
  p.classList.add('center');
  p.textContent = 'hey'

  content.appendChild(p);

}

function tab2() {
  console.log('tab2');

  const content = document.getElementById('content');
  content.innerHTML = '';

  const p = document.createElement('p');
  p.textContent = 'hi'

  content.appendChild(p);
}

function tab3() {
  console.log('tab3');
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/module1.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlMS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGUxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0YWIxKCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gbW9kdWxlMS5qcyEgdGFiMScpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnaGV5J1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYjIoKSB7XG4gIGNvbnNvbGUubG9nKCd0YWIyJyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9ICdoaSdcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFiMygpIHtcbiAgY29uc29sZS5sb2coJ3RhYjMnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==