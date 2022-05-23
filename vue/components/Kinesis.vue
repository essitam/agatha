<template>
  <div class="padding">
    <kinesis-container event="scroll" class="parent">
      <kinesis-element
        class="child"
        type="depth_inv"
        :strength="200"
      >
      <Logo/>
    </kinesis-element>
    </kinesis-container>
  </div>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  components: {
    KinesisContainer,
    KinesisElement
  }
}
</script>
<style scoped>
.padding {
  padding: 50vh 0;
}
.parent {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.child {
  width: 200px;
  height: 200px;
  /* background-color: red; */
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 100px);
}
</style>
