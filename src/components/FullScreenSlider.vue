<template>
<div id="background">
  <div
    v-for="(_, i) in images"
    :style="{backgroundImage: `url(${images[i]})`}"
  ></div>
</div>
</template>

<script setup>
import bg from '@/assets/img/bg.jpg'
import bg2 from '@/assets/img/bg2.jpg'
import bg3 from '@/assets/img/bg3.jpg'

import { reactive, computed } from 'vue'

const props = defineProps({
  currentSlide: {
    type: Number,
    default: 0
  }
})

const images = reactive([bg, bg2, bg3])
const cssTop = computed(() => (props.currentSlide * -100) + '%')
</script>

<style lang="scss" scoped>
#background {
  width: 100vw;
  height: 100vh;
  z-index: -2;
  position: absolute;
  top: v-bind(cssTop);
  filter: brightness(70%);
  transition: top .3s;

  & > div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 0 100%;
  }
}
</style>
