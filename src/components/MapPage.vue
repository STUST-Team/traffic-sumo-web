<template>
    <div id="map-page" class="min-h-screen flex flex-col items-center justify-start bg-[#f6f8d9] p-4" style="width: 360px; height: 640px;">
      <header class="w-full flex justify-between items-center mb-6">
        <button class="text-gray-500 ml-auto">☰</button>
      </header>
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