<template>
  <div id="chart-page" class="min-h-screen flex flex-col items-center bg-gray-100 p-4">
    <!-- Navbar -->
    <header class="w-full flex justify-between items-center mb-6">
      <button class="text-gray-500" style="position: absolute; right: 10px;" @click="toggleMenu">☰</button>
    </header>

    <!-- Menu -->
    <div v-if="menuVisible" class="absolute top-0 right-0 bg-[#f7fafcd2] shadow-lg w-1/2 h-full z-50 p-4 transition-transform transform" :class="{'translate-x-0': menuVisible, 'translate-x-full': !menuVisible}">
      <button class="absolute top-4 right-4 text-gray-500 mb-4" @click="toggleMenu">✖</button>
      <ul class="space-y-4">
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/">首頁</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/next-page">縣市</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/introduce-page">介紹</router-link></li>
        <li class="bg-gray-800 text-white py-2 px-4 rounded-lg"><router-link to="/references-page">參考</router-link></li>
      </ul>
    </div>

    <!-- Title Section -->
    <main class="flex-1 w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-2xl font-semibold text-black text-center mb-8">交通事故數據分析</h1>
      
      <!-- 總覽數據 -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div v-for="(stat, index) in stats" :key="index" class="bg-white rounded-lg shadow-md p-4 text-center">
          <h2 class="text-lg font-semibold text-gray-700">{{ stat.label }}</h2>
          <p class="text-3xl font-bold text-blue-600">{{ stat.value }}</p>
        </div>
      </section>

      <!-- 時間趨勢 -->
      <section class="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">每日事故趨勢</h2>
        <canvas id="daily-trend-chart"></canvas>
      </section>

      <section class="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">每小時事故數分佈</h2>
        <canvas id="hourly-trend-chart"></canvas>
      </section>

      <!-- 事故類別分析 -->
      <section class="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">事故類別分析</h2>
        <canvas id="accident-category-chart"></canvas>
      </section>
    </main>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
  name: 'ChartPage',
  data() {
    return {
      menuVisible: false,
      stats: [
        { label: "今年事故數", value: "35,214" },
        { label: "本月事故數", value: "35,214" },
        { label: "每日最高事故數", value: "1,676" },
        { label: "主要事故類別", value: "A2" },
      ],
      analysisData: {
        daily: {
          labels: [],
          data: [],
        },
        hourly: {
          labels: [],
          data: [],
        },
        category: {
          labels: [],
          data: [],
        },
      },
    };
  },
  methods: {
    parseData(rawData) {
      // 每日事故數
      this.analysisData.daily.labels = Object.keys(rawData["每日事故數"]);
      this.analysisData.daily.data = Object.values(rawData["每日事故數"]);

      // 每小時事故數
      this.analysisData.hourly.labels = Object.keys(rawData["每小時事故數"]);
      this.analysisData.hourly.data = Object.values(rawData["每小時事故數"]);

      // 事故類別
      this.analysisData.category.labels = Object.keys(rawData["事故類別"]);
      this.analysisData.category.data = Object.values(rawData["事故類別"]);
    },
    renderDailyTrendChart() {
      const ctx = document.getElementById("daily-trend-chart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.analysisData.daily.labels,
          datasets: [
            {
              label: "每日事故數",
              data: this.analysisData.daily.data,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
    renderHourlyTrendChart() {
      const ctx = document.getElementById("hourly-trend-chart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.analysisData.hourly.labels,
          datasets: [
            {
              label: "每小時事故數",
              data: this.analysisData.hourly.data,
              backgroundColor: "rgb(54, 162, 235)",
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
    renderAccidentCategoryChart() {
      const ctx = document.getElementById("accident-category-chart").getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: this.analysisData.category.labels,
          datasets: [
            {
              data: this.analysisData.category.data,
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
  },
  async mounted() {
    // 加載數據
    const response = await fetch("/data/analysis_results.json"); // 確保這是 JSON 文件的正確路徑
    const rawData = await response.json();
    this.parseData(rawData);

    // 渲染圖表
    this.renderDailyTrendChart();
    this.renderHourlyTrendChart();
    this.renderAccidentCategoryChart();
  },
};
</script>

<style scoped>
html, body, #app, #chart-page {
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