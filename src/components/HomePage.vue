<template>
  <div id="home" class="min-h-screen flex flex-col items-center bg-gray-100 p-4">
    <header class="w-full flex justify-between items-center mb-6">
      <h1 class="text-lg lg:text-3xl font-bold text-black text-center flex-grow">Traffic Accident Simulation System</h1>
      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-[#f7fafcd2] shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <button class="absolute top-4 right-4 text-gray-500 mb-4" @click="toggleMenu">✖</button>
      <ul class="space-y-4 flex flex-col">
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/">首頁</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/next-page">縣市</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/introduce-page">介紹</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/references-page">參考</router-link></li>
      </ul>
    </div>

    <main class="flex-1 w-full flex flex-col items-center">
      <AccidentList />
    </main>
    <section class="mt-8">
      <button @click="$router.push('/next-page')" class="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">GET START</button>
    </section>
  </div>
</template>

<script>
import AccidentList from './AccidentList.vue';

export default {
  name: 'HomePage',
  components: {
    AccidentList
  },
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
}
</script>

<style scoped>
html, body, #app, #home {
  height: 100%;
  margin: 0;
  background-color: #f7fafc; /* 淺灰色 */
}

button.text-gray-500 {
  position: absolute;
  right: 10px;
}

.menu {
  transition: transform 0.3s ease-in-out;
}

li {
  list-style: none;
  width: auto; /* 固定寬度 */
}

li a {
  display: block;
  text-align: center;
}

.bg-gray-800 {
  background-color: #2d3748; /* 深灰色 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
}
</style>