<template>
  <RouterView />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { isMobile } from "@/utils/index";
import { useRouter } from "vue-router";

const { replace } = useRouter();
onMounted(() => {
  let isM = isMobile();
  if (isM) {
    replace("/m_index");
  } else {
    replace("/");
  }
});
</script>
