<template>
  <div>
    <button @click="show = !show">测试动画</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    let show = ref(false);
    return {
      show,
    };
  },
});
</script>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
