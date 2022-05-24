import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4311edd7 = () => interopDefault(import('../pages/Basic.vue' /* webpackChunkName: "pages/Basic" */))
const _64d4f1a5 = () => interopDefault(import('../pages/logo_bounce.vue' /* webpackChunkName: "pages/logo_bounce" */))
const _4e89db30 = () => interopDefault(import('../pages/ScrollTrig.vue' /* webpackChunkName: "pages/ScrollTrig" */))
const _46796854 = () => interopDefault(import('../pages/ScrollTrigger.vue' /* webpackChunkName: "pages/ScrollTrigger" */))
const _00c5309b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Basic",
    component: _4311edd7,
    name: "Basic"
  }, {
    path: "/logo_bounce",
    component: _64d4f1a5,
    name: "logo_bounce"
  }, {
    path: "/ScrollTrig",
    component: _4e89db30,
    name: "ScrollTrig"
  }, {
    path: "/ScrollTrigger",
    component: _46796854,
    name: "ScrollTrigger"
  }, {
    path: "/",
    component: _00c5309b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
