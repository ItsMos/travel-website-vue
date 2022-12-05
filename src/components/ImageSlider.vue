<template>
  <div class="image-slider">
    <h3>Popular</h3>
    <div class="slides">
      <figure class="active slide" :style="{backgroundImage: `url(${bg})`}">
        <figcaption>
          Eiffel Tower, Paris, France
        </figcaption>
      </figure>
      <figure class="slide" :style="{backgroundImage: `url(${bg2})`}">
        <figcaption>
          Bromo, Jawa Timur
        </figcaption>
      </figure>
      <figure class="slide" :style="{backgroundImage: `url(${bg3})`}">
        <figcaption>
          Spray Lakes Reservoir, Canada
        </figcaption>
      </figure>
    </div>
    <div class="controls">
      <button><i class="fa-solid fa-circle-chevron-left"></i></button>
      <button><i class="fa-solid fa-circle-chevron-right"></i></button>
    </div>
  </div>
</template>

<script setup>
import bg from '@/assets/img/bg.jpg'
import bg2 from '@/assets/img/bg2.jpg'
import bg3 from '@/assets/img/bg3.jpg'
</script>
