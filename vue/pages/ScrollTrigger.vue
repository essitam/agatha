<template lang="html">
<div>
      <div class="logo">
        <Kinesis/>
      </div>

      <!-- <div class="co box"> -->
      <iframe class= "co" width="560" height="315" src="https://www.youtube.com/embed/hy-it5HswJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <!-- </div> -->
      <div class="a box">
        he

      </div>
      <div class="b box">

      </div>
      <div class="a box">
          <img src="~/assets/smpte.png" alt="">
      </div>
      <div class="b box">

      </div>    <div class="a box">
            a
          </div>
          <div class="b box">

          </div>    <div class="a box">
                a
              </div>
              <div class="b box">

              </div>

</div>
</template>

<script>
export default {
  mounted() {
   this.$gsap.to('.co', {
      scrollTrigger: {
        trigger: '.co',
        // start: "top top" // when the top of the trigger hits the top of the viewport
        // end: "+=500",
         end: "+=500",
          scrub: 1,
      },
       top: 0,
       left:0,
       width: '100vw',
       height: '100vh',
       duration: 2,
       markers: true,
       backgroundColor: 'black'
      })
   }

}
</script>

<style lang="css" scoped>
  .box{
    width: 100px;
    height: 100px;
    /* margin: 500px; */
  }
  .logo{

  }
  .a{
    background-color: blue;
  }
  .b{
    background-color: orange;
  }
  .c{
      background-color: yellow;
    }
    .co{
      background-color: green;
      width: 100px;
      height: 100px;
      position: relative;
      top: calc(50vh - 100px);
      left: calc(50vw - 100px);
    }
</style>
