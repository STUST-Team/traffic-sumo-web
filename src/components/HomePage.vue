<template>
  <div id="home" class="min-h-screen flex flex-col lg:flex-row items-center lg:items-start bg-gray-100 p-4 lg:p-8">
    <!-- 手機版部分 -->
    <header class="w-full flex justify-between items-center mb-6 lg:hidden">
      <h1 class="text-lg lg:text-3xl font-bold text-black text-center flex-grow">Traffic Accident Simulation System</h1>
      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu for Mobile -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-[#f7fafcd2] shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform lg:hidden" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <button class="absolute top-4 right-4 text-gray-500 mb-4" @click="toggleMenu">✖</button>
      <ul class="space-y-4 flex flex-col">
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/">首頁</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/next-page">縣市</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/introduce-page">介紹</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/references-page">參考</router-link></li>
      </ul>
    </div>
    
    <div class="lg:hidden"><AccidentList /></div>

    <section class="mt-8 lg:hidden">
      <button @click="$router.push('/next-page')" class="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">GET START</button>
    </section>

    <!-- 電腦版部分 -->
    <main class="hidden lg:flex flex-1 w-full flex-row justify-center items-start">
      <!-- 左側區塊 -->
      <div class="w-1/2 bg-gray-300 p-6 rounded-md shadow-md mr-4">
        <h1 class="text-3xl font-bold mb-4 text-left">Traffic Accident Simulation System</h1>
        <div class="bg-gray-100 p-4 rounded-md mb-6">
          <p class="text-lg">交通易肇事路口模擬系統</p>
          <p>......</p>
          <p>.....</p>
          <p>......</p>
        </div>
        <button @click="$router.push('/next-page')" class="bg-gray-800 text-white px-6 py-3 rounded-full w-full">GET START</button>
      </div>

      <!-- 右側區塊 -->
      <div class="w-1/2 bg-gray-300 p-6 rounded-md shadow-md">
        <AccidentList />
      </div>
    </main>
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
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
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

/* 電腦版覆蓋樣式 */
@media (min-width: 1024px) {
  #home {
    flex-direction: row;
    justify-content: space-between;
  }

  header {
    display: none;
  }

  .lg\:flex {
    display: flex !important;
  }
}
</style>
