<template>
  <div id="app" class="min-h-screen flex flex-col items-center bg-[#f6f8d9] p-4">
    <header class="w-full flex justify-between items-center mb-6">
      <h1 class="text-lg font-bold text-yellow-800">Traffic Accident Simulation System</h1>
      <button class="text-gray-500">☰</button>
    </header>
    <main class="flex-1 w-full flex flex-col items-center space-y-4">
      <!-- 第一个方格区块 -->
      <section class="bg-[#ede6d8] p-6 rounded-md text-center shadow-md w-full max-w-sm">
        <p class="text-lg font-semibold text-yellow-800">交通易肇事路口模擬系統</p>
        <p class="mt-2">....<br>....</p>
      </section>
      <!-- 第二个方格区块 -->
      <section class="bg-[#ede6d8] p-6 rounded-md text-center shadow-md w-full max-w-sm">
        <p class="text-lg font-semibold text-yellow-800">各縣市易肇事路口排行榜</p>
        <ul class="mt-2 text-sm list-decimal list-inside">
          <li v-for="(location, index) in accidentLocations" :key="index">
            {{ location.location }} - {{ location.accidents }} 次事故
          </li>
        </ul>
      </section>
    </main>
    <footer class="w-full mt-6 flex justify-center">
      <button class="w-full max-w-sm bg-yellow-600 text-white py-3 rounded-md shadow-lg text-lg font-bold transition-transform transform hover:scale-105 hover:bg-yellow-700">
        GET START
      </button>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'App',
  methods: {
    goToNextPage() {
      this.$router.push('/next-page'); // 使用 Vue Router 的 push 方法跳转页面
    }
  },
  data() {
    return {
      accidentLocations: []
    };
  },
  created() {
    fetch('/accident_locations.json')
      .then(response => response.json())
      .then(data => {
        this.accidentLocations = data;
      })
      .catch(error => {
        console.error('Error loading accident locations data:', error);
      });
  }
  
}
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 0 auto;
  border: 5px solid black;
  background-color: #f6f8d9;
  padding: 20px;
}

button {
  cursor: pointer;
}

@media (max-width: 768px) {
  #app {
    max-width: 100%;
    border: none;
    padding: 10px;
  }
}
</style>