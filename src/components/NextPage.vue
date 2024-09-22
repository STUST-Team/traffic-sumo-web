<template>
  <div id="home" class="min-h-screen flex flex-col items-center bg-[#f6f8d9] p-4" style="width: 360px; height: 640px; position: relative;">
    <header class="w-full flex justify-between items-center mb-6">
      <h1 class="text-lg font-bold text-yellow-800 text-center flex-grow">Traffic Accident Simulation System</h1>
      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-white shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <ul class="space-y-4">
        <li><router-link to="/simulate">模擬交通</router-link></li>
        <li><router-link to="/analysis">交通分析</router-link></li>
        <li><router-link to="/introduction">介紹</router-link></li>
        <li><router-link to="/references">參考</router-link></li>
      </ul>
    </div>

    <!-- Title Section -->
    <main class="flex-1 w-full flex flex-col items-center">

      <!-- Accident List Section -->
      <section class="space-y-4 w-full max-w-xs">
        <!-- Northern Region -->
        <h2 class="text-xl font-semibold text-yellow-800">北部</h2>
        <ul>
          <router-link to="/map">臺北市</router-link> 
          <router-link to="/map">新北市</router-link> 
          <router-link to="/map">基隆市</router-link> 
          <router-link to="/map">新竹市</router-link> 
          <router-link to="/map">桃園市</router-link> 
          <router-link to="/map">新竹縣</router-link> 
          <router-link to="/map">宜蘭縣</router-link>
        </ul>

        <!-- Central Region -->
        <h2 class="text-xl font-semibold text-yellow-800">中部</h2>
        <ul>
          <router-link to="/map">臺中市</router-link> 
          <router-link to="/map">苗栗縣</router-link> 
          <router-link to="/map">彰化縣</router-link> 
          <router-link to="/map">南投縣</router-link> 
          <router-link to="/map">雲林縣</router-link>
        </ul>

        <!-- Southern Region -->
        <h2 class="text-xl font-semibold text-yellow-800">南部</h2>
        <ul>
          <router-link to="/map">高雄市</router-link> 
          <router-link to="/map">臺南市</router-link> 
          <router-link to="/map">嘉義市</router-link> 
          <router-link to="/map">嘉義縣</router-link> 
          <router-link to="/map">屏東縣</router-link> 
        </ul>

        <!-- Eastern Region -->
        <h2 class="text-xl font-semibold text-yellow-800">東部</h2>
        <ul>
          <router-link to="/map">花蓮縣</router-link> 
          <router-link to="/map">臺東縣</router-link>
        </ul>

        <!-- Islands -->
        <h2 class="text-xl font-semibold text-yellow-800">離島</h2>
        <ul>
          <router-link to="/map">澎湖縣</router-link> 
          <router-link to="/map">金門縣</router-link> 
          <router-link to="/map">連江縣</router-link>
        </ul>
      </section>

      <!-- Back to HomePage Button -->
      <section class="mt-8">
        <button @click="$router.push('/')" class="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4">返回首頁</button>
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

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button.bg-yellow-600 {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  transition: transform 0.3s ease-in-out;
}
</style>