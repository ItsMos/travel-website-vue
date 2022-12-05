<template>
  <div class="carousel">
    <div class="timeline">
      <button
        v-for="(slide, n) in slides"
        :class="{active: n == currentSlide}"
        @click="manuallySwitchSlide(n)"
      >
      </button>
    </div>

    <div class="slider">
      <div
        v-for="(slide, n) in slides"
        :key="n"
        class="slide animate__animated"
        :class="slideClass(n)"
      >
        <h1>{{slide.title}}</h1>
        <p>{{slide.text}}</p>
        <a :href="slide.buttonLink" class="btn">{{slide.buttonText}} <i class="fa-solid fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const currentSlide = ref(0)
const previousSlide = ref(0)
const time = 5000

const slideClass = computed(() => {
  return (n) => {
    const isReverse = currentSlide.value < previousSlide.value

    function fadeOutUp() {
      return previousSlide.value !== currentSlide.value && // prevent fadeout on initial state (page load)
      (!isReverse && n == previousSlide.value)
    }

    function fadeInUp() {
      return !isReverse && currentSlide.value == n
    }

    function fadeInDown() {
      return isReverse && n == currentSlide.value
    }

    function fadeOutDown() {
      return isReverse && n == previousSlide.value
    }

    return {
      currentSlide: currentSlide.value == n,
      'animate__fadeInUp': fadeInUp(),
      'animate__fadeOutUp': fadeOutUp(),
      'animate__fadeInDown': fadeInDown(),
      'animate__fadeOutDown': fadeOutDown()
    }
  }
})

function manuallySwitchSlide(to) {
  if (to == currentSlide.value) return
  previousSlide.value = currentSlide.value
  currentSlide.value = to
  resetInterval()
}

let interval
function resetInterval() {
  if (interval) clearInterval(interval)
  interval = setInterval(() => {
    previousSlide.value = currentSlide.value
    if (currentSlide.value < slides.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, time)
}
resetInterval()

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

<style lang="scss" scoped>
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

</style>