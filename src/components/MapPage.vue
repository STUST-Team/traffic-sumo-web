<template>
  <div id="map-page" class="min-h-screen flex flex-col items-center bg-gray-100 p-4">
    <header class="w-full flex justify-between items-center mb-6">

      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-[#f7fafcd2] shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <button class="absolute top-4 right-4 text-gray-500 mb-4" @click="toggleMenu">✖</button>
      <ul class="space-y-4 flex flex-col">
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/">首頁</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/map">數據查詢</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg w-auto"><router-link to="/introduce-page">介紹</router-link></li>
      </ul>
    </div>

    <!-- Title Section -->
    <main class="flex-1 w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-2xl font-semibold text-black text-center mb-8">Map Page</h1>
      
      <!-- Selection Menu -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-black mb-4">數據查詢</h2>
        <div class="flex flex-col space-y-4">
          <div>
            <label for="category" class="block text-lg font-medium text-gray-700">數據類別</label>
            <select id="category" v-model="selectedCategory" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
          <div>
            <label for="year" class="block text-lg font-medium text-gray-700">年份</label>
            <select id="year" v-model="selectedYear" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
          <div>
            <label for="month" class="block text-lg font-medium text-gray-700">月份</label>
            <select id="month" v-model="selectedMonth" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="">總計</option>
              <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
            </select>
          </div>
          <div>
            <label for="city" class="block text-lg font-medium text-gray-700">縣市</label>
            <select id="city" v-model="selectedCity" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
            </select>
          </div>
          <button @click="searchData" class="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">搜索</button>
        </div>
      </div>

      <!-- Display Data -->
      <div v-if="result !== null" class="mt-8">
        <h3 class="text-xl font-semibold text-black">結果</h3>
        <p class="text-lg">{{ result }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import trafficData from '../assets/data/traffic_data.json';

export default {
  name: 'MapPage',
  data() {
    return {
      menuVisible: false,
      selectedCategory: '',
      selectedYear: '',
      selectedMonth: '',
      selectedCity: '',
      result: null,
      categories: [
        "事故件數(件)",
        "死亡人數(人)",
        "受傷人數(人)", 
        "每十萬輛機動車輛事故率(件/十萬輛)", 
        "每十萬輛機動車輛死亡率(人/十萬輛)", 
        "每十萬輛機動車輛受傷率(人/十萬輛)", 
        "每十萬人事故率(件/十萬人)", 
        "每十萬人死亡率(人/十萬人)", 
        "每十萬人受傷率(人/十萬人)"
      ],
      years: Array.from({ length: 17 }, (_, i) => `${97 + i}年`),
      months: Array.from({ length: 12 }, (_, i) => `${i + 1}月`),
      cities: ["新北市", "臺北市", "桃園市", "臺中市", "臺南市", "高雄市", "宜蘭縣", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "臺東縣", "花蓮縣", "澎湖縣", "基隆市", "新竹市", "嘉義市", "金門縣", "連江縣", "國 道", "其 他"]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    searchData() {
      const category = this.selectedCategory;
      const year = this.selectedYear;
      const month = this.selectedMonth ? ` ${this.selectedMonth}` : '';
      const city = this.selectedCity;

      const time = `${year}${month}`;
      const categoryData = trafficData.find(cat => cat.category === category).data;
      const timeData = categoryData.find(data => data.time === time);

      if (timeData) {
        const areaData = timeData.area.find(area => area.id === city);
        this.result = areaData ? areaData.data : '無數據';
      } else {
        this.result = '無數據';
      }
    }
  }
}
</script>

<style scoped>
html, body, #app, #map-page {
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
</style>