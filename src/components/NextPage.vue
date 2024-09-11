<template>
    <div id="next-page" class="min-h-screen flex flex-col items-center justify-center bg-[#f6f8d9] p-4">
      <header class="w-full flex justify-between items-center mb-6">
        <h1 class="text-lg font-bold text-yellow-800 text-center flex-grow">Next Page</h1>
        <button class="text-gray-500 ml-auto">☰</button>
      </header>
      <main class="flex-1 w-full flex flex-col items-center justify-center">
        <section class="bg-[#ede6d8] p-6 rounded-md text-center shadow-md w-full max-w-sm">
          <p class="text-lg font-semibold text-yellow-800 text-center">歡迎來到下一頁</p>
          <p class="mt-2">這是下一頁的內容。</p>
        </section>
      </main>
      <button @click="$router.push('/')" class="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4">返回首頁</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NextPage'
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
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