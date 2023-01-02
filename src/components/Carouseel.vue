<template>
  <div class="carousel">
    <div class="timeline" v-if="timeline">
      <button
        v-for="(slide, n) in slides"
        :class="{active: n == currentSlide}"
        @click="manuallySwitchSlide(n)"
      >
      </button>
    </div>

    <div class="slider" ref="slider">
      <slot :slideClass="slideClass"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue'

const emit = defineEmits(['slideChange'])
const props = defineProps({
  time: {
    type: Number,
    default: 5000
  },
  timeline: Boolean
})

const slider = ref()
const slides = reactive([])

onMounted(() => {
  slides.push(...slider.value.children)
  resetInterval()
})

const currentSlide = ref(0)
const previousSlide = ref(0)

const slideClass = computed(() => {
  return (n) => {
    const isReverse = currentSlide.value < previousSlide.value

    const fadeOutUp = () => {
      return previousSlide.value !== currentSlide.value && // prevent fadeout on initial state (page load)
      (!isReverse && n == previousSlide.value)
    }
    const fadeInUp = () => !isReverse && currentSlide.value == n
    const fadeInDown = () => isReverse && n == currentSlide.value
    const fadeOutDown = () => isReverse && n == previousSlide.value

    return {
      currentSlide: currentSlide.value == n,
      'slide animate__animated': true,
      'animate__fadeInUp': fadeInUp(),
      'animate__fadeOutUp': fadeOutUp(),
      'animate__fadeInDown': fadeInDown(),
      'animate__fadeOutDown': fadeOutDown()
    }
  }
})

function manuallySwitchSlide(to) {
  if (to == currentSlide.value) return
  emit('slideChange', to)
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
    emit('slideChange', currentSlide.value)
  }, props.time)
}

</script>

<style>
  .slider {
    position: relative;
  }
  .slider, .slider > .slide {width: 100%}
  .slider > .slide {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: all .3s;
  }
  .slider > .slide.currentSlide {
    opacity: 1;
    visibility: visible;
  }
</style>
