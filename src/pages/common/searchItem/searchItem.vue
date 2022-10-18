<template>
  <div>
    <div class="search-item">
      <div class="title"><slot name="title"></slot></div>
      <div class="content" :class="{ fl: isFlex }">
        <div class="item">
          <slot name="content"></slot>
        </div>
        <div class="item">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "searchItem",
  props: {
    isFlex: {
      type: Boolean,
      default: false,
    },
  },
  emits: [],
  setup(props, context) {
    const data = reactive({}); //里面写所有的响应式数据，像vue2中的data一样

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
