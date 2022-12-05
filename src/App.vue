<template>
  <header class='wrap'>
    <nav>
      <div id='logo'>
        <a href='.'>
          <img src='./assets/img/t.png' alt='T logo'>
        </a>
      </div>

      <div :class="{active: menuOpen}" class="nav-links">
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>Destinations</a>
      </div>

      <div class='search' @mouseover.once="toggleSearch" ref="searchEl">
        <input type='text' :class="{active: searchOpen}">
        <button>
          <i class='fa-solid fa-magnifying-glass'></i>
        </button>
      </div> 

      <div class='dropdown'>
        <a href='#'>
          <img class='avatar' src='./assets/img/user.png' alt='user profile picture'>
        </a>
        <div class='dropdown-list'>
          <a href='#'>Profile</a>
          <a href='#'>Settings</a>
          <a href='#'>Logout</a>
        </div>
      </div>

      <button @click="(menuOpen = !menuOpen)" :class="{active: menuOpen}" class="nav-toggle" v-click-outside="() => (menuOpen = false)">
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>
  </header>

  <main class='wrap'>
    <Carousel />
    <ImageSlider />

    <div class="social">
      <a href="#">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  </main>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import { ref } from 'vue'

const searchOpen = ref(false)
const searchEl = ref(null)
const toggleSearch = (ev) => {
  if (searchEl.value.contains(ev.target)) {
    searchOpen.value = true
    searchEl.value.querySelector('input').focus()
  }
}

const menuOpen = ref(false)
</script>
