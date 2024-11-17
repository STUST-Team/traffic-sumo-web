<template>
  <div id="next-page" class="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4" style="width: 360px; height: 640px; position: relative;">
    <!-- Navbar -->
    <header class="w-full flex justify-between items-center mb-6">
      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-white shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <button class="absolute top-4 right-4 text-gray-500 mb-4" @click="toggleMenu">✖</button>
      <ul class="space-y-4">
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/">首頁</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/next-page">縣市</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/introduce-page">介紹</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/references">參考</router-link></li>
      </ul>
    </div>

    <!-- Title Section -->
    <main class="flex-1 w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-2xl font-semibold text-black text-center mb-8">Traffic Accident Simulation System</h1>

      <!-- Accident List Section -->
      <section class="space-y-4 w-full max-w-xs">
        <!-- Northern Region -->
        <h2 class="text-xl font-semibold text-black">北部</h2>
        <div class="overflow-x-auto">
          <ul class="flex space-x-2">
            <li><router-link to="/map" class="btn">臺北市</router-link></li>
            <li><router-link to="/map" class="btn">新北市</router-link></li>
            <li><router-link to="/map" class="btn">基隆市</router-link></li>
            <li><router-link to="/map" class="btn">新竹市</router-link></li>
            <li><router-link to="/map" class="btn">桃園市</router-link></li>
            <li><router-link to="/map" class="btn">新竹縣</router-link></li>
            <li><router-link to="/map" class="btn">宜蘭縣</router-link></li>
          </ul>
        </div>

        <!-- Central Region -->
        <h2 class="text-xl font-semibold text-black">中部</h2>
        <div class="overflow-x-auto">
          <ul class="flex space-x-2">
            <li><router-link to="/map" class="btn">臺中市</router-link></li>
            <li><router-link to="/map" class="btn">苗栗縣</router-link></li>
            <li><router-link to="/map" class="btn">彰化縣</router-link></li>
            <li><router-link to="/map" class="btn">南投縣</router-link></li>
            <li><router-link to="/map" class="btn">雲林縣</router-link></li>
          </ul>
        </div>

        <!-- Southern Region -->
        <h2 class="text-xl font-semibold text-black">南部</h2>
        <div class="overflow-x-auto">
          <ul class="flex space-x-2">
            <li><router-link to="/map" class="btn">高雄市</router-link></li>
            <li><router-link to="/map" class="btn">臺南市</router-link></li>
            <li><router-link to="/map" class="btn">嘉義市</router-link></li>
            <li><router-link to="/map" class="btn">嘉義縣</router-link></li>
            <li><router-link to="/map" class="btn">屏東縣</router-link></li>
          </ul>
        </div>

        <!-- Eastern Region -->
        <h2 class="text-xl font-semibold text-black">東部</h2>
        <div class="overflow-x-auto">
          <ul class="flex space-x-2">
            <li><router-link to="/map" class="btn">花蓮縣</router-link></li>
            <li><router-link to="/map" class="btn">臺東縣</router-link></li>
          </ul>
        </div>

        <!-- Islands -->
        <h2 class="text-xl font-semibold text-black">離島</h2>
        <div class="overflow-x-auto">
          <ul class="flex space-x-2">
            <li><router-link to="/map" class="btn">澎湖縣</router-link></li>
            <li><router-link to="/map" class="btn">金門縣</router-link></li>
            <li><router-link to="/map" class="btn">連江縣</router-link></li>
          </ul>
        </div>
      </section>

      <!-- Back to HomePage Button -->
      <section class="mt-8">
        <button @click="$router.push('/')" class="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">返回首頁</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
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
button.text-gray-500 {
  position: absolute;
  right: 10px;
}

.menu {
  transition: transform 0.3s ease-in-out;
}

li {
  list-style: none;
}

li a {
  display: block;
  width: 100%;
  height: 100%;
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

.btn {
  background-color: #2d3748; /* 深灰色 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
}

.text-base {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .text-base {
    font-size: 0.875rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .text-base {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .text-base {
    font-size: 1.25rem;
  }
}
</style>