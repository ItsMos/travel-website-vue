<template>
  <div class="image-cards">
    <h3>Popular</h3>
    <div class="cards">
      <a href="#">
        <figure class="card" :style="{ backgroundImage: `url(${bg})` }">
          <figcaption>
            Eiffel Tower<span>, Paris, France</span>
          </figcaption>
        </figure>
      </a>
      <a href="#">
        <figure class="card" :style="{ backgroundImage: `url(${bg2})` }">
          <figcaption>
            Bromo<span>, Jawa Timur</span>
          </figcaption>
        </figure>
      </a>
      <a href="#">
        <figure class="card" :style="{ backgroundImage: `url(${bg3})` }">
          <figcaption>
            Spray Lakes Reservoir<span>, Canada</span>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
</template>

<script setup>
import bg from '@/assets/img/bg.jpg'
import bg2 from '@/assets/img/bg2.jpg'
import bg3 from '@/assets/img/bg3.jpg'
</script>
