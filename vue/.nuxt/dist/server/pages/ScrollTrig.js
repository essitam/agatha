exports.ids = [11];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ScrollTrig.vue?vue&type=template&id=1c566b51&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ScrollTrig.vue?vue&type=template&id=1c566b51&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ScrollTrig.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var ScrollTrigvue_type_script_lang_js_ = ({
  mounted() {
    this.animateOnScroll();
  },

  methods: {
    animateOnScroll() {
      this.$gsap.to(window, {
        duration: 2,
        scrollTo: 1000
      });
      this.$gsap.to('.box', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/ScrollTrig.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ScrollTrigvue_type_script_lang_js_ = (ScrollTrigvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ScrollTrig.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ScrollTrigvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c566b51",
  "bb1eb3a2"
  
)

/* harmony default export */ var ScrollTrig = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ScrollTrig.js.map