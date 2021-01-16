<template>
  <div class="bg-gray-100">
    <section class="bg-gradient-to-r from-blue-500 to-cyan-300">
      <div class="container mx-auto max-w-6xl">
        <div class="pt-9 px-6 block md:flex md:items-center md:justify-around">
          <div class="max-w-lg md:max-w-xl">
            <h1 class="font-bold text-white text-xl leading-relaxed xs:text-2xl">NuxtJS for better website performance</h1>
            <p class="pt-6 text-sm text-white leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus inventore dicta dolorum consectetur quis ullam quo, blanditiis corrupti possimus dolore, pariatur impedit esse facere maiores quia sed deserunt! Optio, nostrum.</p>
            <div class="space-x-0 xs:space-x-2">
              <a href="#" class="inline-block bg-white mt-5 px-8 py-2 text-blue-500 rounded-full font-bold uppercase text-sm tracking-wide transform transition hover:scale-105 ease-in-out duration-300">
                Try for Free
              </a>
              <a href="#" class="inline-block border-2 border-white mt-5 px-8 py-2 text-white rounded-full font-bold uppercase text-sm tracking-wide transform transition hover:scale-105 ease-in-out duration-300">
                Get Started
              </a>
            </div>
          </div>
          <div class="flex-shrink-0 py-8">
            <img class="w-full sm:w-96" src="@/assets/svgs/snow-globe.svg" alt="image">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    head: {
      title: 'Snow~hat'
    }
  }
</script>