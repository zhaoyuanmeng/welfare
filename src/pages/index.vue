<template>
  <div>
    <div ref="el" class="elem">
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <transition
        class="test"
        :duration="1000"
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp"
      >
        <div v-if="show">
          <div>12313</div>
          <div>asda</div>
        </div>
      </transition>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>{{ displayX }}</div>
      <div>{{ displayY }}</div>
      <div>11111</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import { useScroll } from "@vueuse/core";

import { ref, computed } from "vue";
let isShow = ref(false);
const flag = ref(0);
const el = ref<HTMLElement | null>(null);
const { x, y } = useScroll(el);
const displayX = computed({
  get() {
    return x.value.toFixed(1);
  },
  set(val) {
    // 这里面可以加个
    x.value = parseFloat(val);
  },
});

const show = computed(() => {
  return y.value > 100 ? true : false;
});

const displayY = computed({
  get() {
    return y.value.toFixed(1);
  },
  set(val) {
    y.value = parseFloat(val);
  },
});
</script>

<style>
.back {
  width: 100px;
  height: 100px;
  background: rgb(17, 15, 15);
  background-color: aqua;
}
.elem {
  width: 100%;
  height: 300px;
  overflow: scroll;
}
.test {
  background-color: blue;
  position: relative;
  top: 50%;
}
</style>
