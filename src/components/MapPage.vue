<template>
  <div id="home" class="min-h-screen flex flex-col items-center bg-[#f6f8d9] p-4" style="width: 360px; height: 640px; position: relative;">
    <header class="w-full flex justify-between items-center mb-6">
      <h1 class="text-lg font-bold text-yellow-800 text-center flex-grow">Traffic Accident Simulation System</h1>
      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-white shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <button class="absolute top-4 right-4 text-gray-500 mb-4" @click="toggleMenu">✖</button>
      <ul class="space-y-4">
        <li class="bg-yellow-600 text-white py-2 px-4 rounded-lg"><router-link to="/simulate">模擬交通</router-link></li>
        <li class="bg-yellow-600 text-white py-2 px-4 rounded-lg"><router-link to="/analysis">交通分析</router-link></li>
        <li class="bg-yellow-600 text-white py-2 px-4 rounded-lg"><router-link to="/introduction">介紹</router-link></li>
        <li class="bg-yellow-600 text-white py-2 px-4 rounded-lg"><router-link to="/references">參考</router-link></li>
      </ul>
    </div>

    <main class="flex-1 w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-2xl font-semibold text-yellow-800 text-center mb-8">Map Page</h1>
      <!-- Map content goes here -->
    </main>
    <section class="mt-8">
      <button @click="$router.push('/next-page')" class="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4">返回NextPage</button>
    </section>
  </div>

  
</template>

<script>
export default {
  name: 'MapPage'
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
</style>