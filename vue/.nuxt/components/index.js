export const AgathaFon = () => import('../../components/AgathaFon.vue' /* webpackChunkName: "components/agatha-fon" */).then(c => wrapFunctional(c.default || c))
export const AgathaText = () => import('../../components/AgathaText.vue' /* webpackChunkName: "components/agatha-text" */).then(c => wrapFunctional(c.default || c))
export const Contact = () => import('../../components/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const Kinesis = () => import('../../components/Kinesis.vue' /* webpackChunkName: "components/kinesis" */).then(c => wrapFunctional(c.default || c))
export const Kinesis2 = () => import('../../components/Kinesis2.vue' /* webpackChunkName: "components/kinesis2" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Projects = () => import('../../components/Projects.vue' /* webpackChunkName: "components/projects" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
