<template>
  <div id="home" class="min-h-screen flex flex-col items-center bg-[#f6f8d9] p-4" style="width: 360px; height: 640px; position: relative;">
    <header class="w-full flex justify-between items-center mb-6">
      <h1 class="text-lg font-bold text-yellow-800 text-center flex-grow">Traffic Accident Simulation System</h1>
      <button class="text-gray-500" style="position: absolute; right: 10px;">☰</button>
    </header>
    <main class="flex-1 w-full flex flex-col items-center">
      <AccidentList />
    </main>
    <section class="mt-8">
      <button @click="$router.push('/next-page')" class="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4">GET START</button>
    </section>
  </div>
</template>

<script>
import AccidentList from './AccidentList.vue';

export default {
  name: 'HomePage',
  components: {
    AccidentList
  }
}
</script>

<style scoped>
button.text-gray-500 {
  position: absolute;
  right: 10px;
  top: 10px;
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