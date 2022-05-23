<template lang="html">

</template>

<script>

export default {
  mounted() {
  this.animateOnScroll()
},

methods: {
  animateOnScroll() {
    this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

    this.$gsap.to('.box', {
      x: 500,
      ease: 'Power1.easeInOut',
      scrollTrigger: {
        trigger: '.content',
        pin: true,
        end: 'bottom',
        scrub: true
      }
    })
  }
}
}
</script>

<style lang="css" scoped>
</style>
