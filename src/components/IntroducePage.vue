<template>
  <div id="introduce-page" class="min-h-screen flex flex-col items-center bg-gray-100 p-4">
    <header class="w-full flex justify-between items-center mb-6">
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

    <!-- Title Section -->
    <main class="flex-1 w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-2xl font-semibold text-black text-center mb-8">Introduce Page</h1>
      <!-- Introduce content goes here -->
      <div class="text-left space-y-4 max-w-2xl">
        <p class="text-lg leading-relaxed">1. 交通違規模擬展示系統：開發基於網頁的交通違規模擬展示系統，通過動畫展示多種常見交通違規行為。每項違規行為的動畫演示將配合相應交通法規解釋和處罰條例，幫助使用者直觀了解違規行為的風險與法律後果。使用 Vue.js 和 Tailwind CSS構建交互式和美觀的界面。</p>
        <p class="text-lg leading-relaxed">2. 交通事故數據視覺化分析平台：基於整合的交通數據，使用 D3.js 開發數據視覺化平台。展示各種交通事故的地點、次數、原因等，幫助使用者理解事故規律和趨勢。</p>
        <p class="text-lg leading-relaxed">3. Deck.gl 與 Mapbox 交通模擬系統：使用 Deck.gl 和 Mapbox創建真實地圖數據的交通模擬地圖。運行網絡檔案後生成隨機車流模擬，並分析模擬結果，將分析後數據存至MongoDB以供前端系統調用。</p>
        <p class="text-lg leading-relaxed">4. 交通安全教育與數據支持：提供豐富的數據支持，幫助制定更科學的交通決策。通過模擬和數據分析發掘交通違規與事故成因，提出針對性的預防措施。</p>
        <p class="text-lg leading-relaxed">5. 民眾交通安全意識提升：通過模擬和數據分析提升使用者對交通安全的關注。提供實際案例和數據，幫助民眾理解交通違規與事故的嚴重性，進而自覺遵守交通規則。</p>
      </div>
    </main>
    <section class="mt-8">
      <button @click="$router.push('/next-page')" class="bg-gray-800 text-white px-4 py-2 rounded-full mt-4">返回NextPage</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IntroducePage',
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
}
</script>

<style scoped>
html, body, #app, #introduce-page {
  height: 100%;
  margin: 0;
  background-color: #f7fafc; /* 淺灰色 */
  font-family: 'Arial', sans-serif; /* 字體 */
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

.text-lg {
  font-size: 1.125rem; /* 大字體 */
}

.leading-relaxed {
  line-height: 1.75; /* 行高 */
}

.max-w-2xl {
  max-width: 42rem; /* 最大寬度 */
}
</style>