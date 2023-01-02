<template>
  <Carouseel v-slot="{ slideClass }" time="5000" timeline>
    <div
      v-for="(slide, n) in slides"
      :key="n"
      :class="slideClass(n)"
    >
      <h1>{{slide.title}}</h1>
      <p>{{slide.text}}</p>
      <a :href="slide.buttonLink" class="btn">{{slide.buttonText}} <i class="fa-solid fa-chevron-right"></i></a>
    </div>
  </Carouseel>
</template>

<script setup>
import { reactive } from 'vue'
import Carouseel from './Carouseel.vue'

const slides = reactive([
  {
    title: 'Paris',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab temporibus illo eveniet excepturi officia, omnis laboriosam, perspiciatis culpa facere.',
    buttonText: 'Explore',
    buttonLink: '#'
  },
  {
    title: 'Indonesia',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab temporibus illo eveniet excepturi officia, omnis laboriosam, perspiciatis culpa facere.',
    buttonText: 'Explore',
    buttonLink: '#'
  },
  {
    title: 'Canada',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab temporibus illo eveniet excepturi officia, omnis laboriosam, perspiciatis culpa facere.',
    buttonText: 'Explore',
    buttonLink: '#'
  }

])
</script>

<!-- <style lang="scss">
  .slider {
    position: relative;
    &, & > .slide {width: 100%}
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      transition: all .3s;

      &.currentSlide {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style> -->
