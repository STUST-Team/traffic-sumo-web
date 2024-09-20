<template>
  <div id="next-page" class="min-h-screen flex flex-col items-center justify-start bg-[#f6f8d9] p-4" style="width: 360px; height: 640px;">
    <!-- Navbar -->
    <header class="w-full flex justify-between items-center mb-6">
      <button class="text-gray-500 ml-auto">☰</button>
    </header>

    <!-- Title Section -->
    <main class="flex-1 w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-2xl font-semibold text-yellow-800 text-center mb-8">Traffic Accident Simulation System</h1>

      <!-- List Section -->
      <section class="space-y-4 w-full max-w-xs">
        <!-- Northern Region -->
        <h2 class="text-xl font-semibold text-yellow-800">北部</h2>
        <ul>
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">臺北市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">新北市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">基隆市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">新竹市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">桃園市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">新竹縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">宜蘭縣</router-link>
        </ul>

        <!-- Central Region -->
        <h2 class="text-xl font-semibold text-yellow-800">中部</h2>
        <ul>
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">臺中市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">苗栗縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">彰化縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">南投縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">雲林縣</router-link>
        </ul>

        <!-- Southern Region -->
        <h2 class="text-xl font-semibold text-yellow-800">南部</h2>
        <ul>
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">高雄市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">臺南市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">嘉義市</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">嘉義縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">屏東縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">澎湖縣</router-link>
        </ul>

        <!-- Eastern Region -->
        <h2 class="text-xl font-semibold text-yellow-800">東部</h2>
        <ul>
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">花蓮縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">臺東縣</router-link>
        </ul>

        <!-- Islands -->
        <h2 class="text-xl font-semibold text-yellow-800">離島</h2>
        <ul>
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">澎湖縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">金門縣</router-link> 
          <router-link to="/map-page" class="bg-[#f0db8c] text-white py-2 px-4 rounded-lg">連江縣</router-link>
        </ul>
      </section>

      <!-- Back to HomePage Button -->
      <section class="mt-8">
        <button @click="$router.push('/')" class="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4">返回首頁</button>
        <button @click="$router.push('/map-page')" class="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4">GET START</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'NextPage'
}
</script>

<style scoped>
button.text-gray-500 {
  position: absolute;
  right: 0;
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