<template>
  <div>
    <nav class="bg-gray-800 text-white py-3">
      <ul class="flex justify-center space-x-4">
        <li><router-link to="/" class="hover:underline">首頁</router-link></li>
        <li><router-link to="/map" class="hover:underline">數據查詢</router-link></li>
        <li><router-link to="/introduce-page" class="hover:underline">介紹</router-link></li>
        <li><router-link to="/chart-page" class="hover:underline">圖表分析</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  background-color: #f7fafc; /* 淺灰色 */
}
</style>