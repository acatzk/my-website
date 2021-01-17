<template>
  <div>
    <section class="bg-gradient-to-r from-blue-500 to-cyan-300">
      <div class="container mx-auto max-w-6xl">
        <div class="py-9 px-6 flex flex-col md:flex-row-reverse items-center md:justify-around">
          <div class="flex-shrink-0 py-3 sm:py-6">
            <img class="w-56 sm:w-auto rounded-full shadow-xl border ring-4 ring-white transform transition hover:-rotate-6 ease-in-out duration-500 object-cover" src="https://avatars3.githubusercontent.com/u/38458781?s=460&u=8fc4b0725bdcdd4624fc99ac4fb4ac64ee8768cc&v=4" alt="image">
          </div>
          <div class="max-w-lg md:max-w-xl py-6">
            <h1 class="uppercase font-semibold tracking-tight text-white text-3xl  md:text-5xl lg:text-6xl">
              Joshua <span class="font-normal tracking-wide bg-gradient-to-b from-cyan-100 to-blue-100 bg-clip-text text-transparent">Galit</span>
            </h1>
            <p class="pt-6 text-sm sm:text-base text-white leading-loose">I am 21-year old dedicated and enthusiastic web developer trying to make the world look a bit better. I loved rebuilding existing social websites and addict in single page app and playin' guitar.</p>
            <div class="space-x-0 xs:space-x-2">
              <a href="#" class="inline-block bg-white mt-5 px-8 py-2 text-blue-500 rounded-full font-bold uppercase text-sm tracking-wide transform transition hover:scale-105 ease-in-out duration-300">
                Read more
              </a>
              <a href="#" class="inline-block border-2 border-white mt-5 px-8 py-2 text-white rounded-full font-bold uppercase text-sm tracking-wide transform transition hover:scale-105 ease-in-out duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100">
      <div class="container mx-auto max-w-6xl min-h-screen">
        <div class="py-16 text-center">
          <h2 class="bg-lightBlue-100 inline-block px-6 py-2 font-primary font-bold uppercase text-sm rounded-full">Features</h2>
          <h3 class="mt-3 bg-gradient-to-b from-cyan-300 to-blue-500 bg-clip-text text-transparent text-xl font-bold">Amazing Features</h3>
        </div>
        <div class="lg:grid lg:grid-cols-3 lg:gap-5 px-6 flex flex-col items-center">

          <div class="space-y-6">
            <div class="flex justify-between space-x-4 mr-4">
              <div class="max-w-lg">
                <h4 class="text-2xl font-bold">User Friendly</h4>
                <p class="pt-3 text-gray-500 leading-loose text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore a at asperiores, natus alias.</p>
              </div>
              <div class="bg-gradient-to-r from-blue-500 to-cyan-300 h-16 w-16 rounded-full flex-shrink-0"></div>
            </div>
            <div class="flex justify-between  space-x-4 mr-4">
              <div class="max-w-lg">
                <h4 class="text-2xl font-bold">Super Speed</h4>
                <p class="pt-3 text-gray-500 leading-loose text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore a at asperiores, natus alias.</p>
              </div>
              <div class="bg-gradient-to-r from-blue-500 to-cyan-300 h-16 w-16 rounded-full flex-shrink-0"></div>
            </div>
            <div class="flex justify-between  space-x-4 mr-4">
              <div class="max-w-lg">
                <h4 class="text-2xl font-bold">24/7 Support</h4>
                <p class="pt-3 text-gray-500 leading-loose text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore a at asperiores, natus alias.</p>
              </div>
              <div class="bg-gradient-to-r from-blue-500 to-cyan-300 h-16 w-16 rounded-full flex-shrink-0"></div>
            </div>
          </div>

          <div class="flex-shrink-0 py-8">
            <img class="h-80" src="@/assets/svgs/snow-globe.svg" alt="image">
          </div>

          <div class="space-y-6">
            <div class="flex justify-between space-x-4 mr-4 text-right">
              <div class="bg-gradient-to-r from-blue-500 to-cyan-300 h-16 w-16 rounded-full flex-shrink-0"></div>
              <div class="max-w-lg">
                <h4 class="text-2xl font-bold">Secure</h4>
                <p class="pt-3 text-gray-500 leading-loose text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore a at asperiores, natus alias.</p>
              </div>
            </div>
            <div class="flex justify-between  space-x-4 mr-4 text-right">
              <div class="bg-gradient-to-r from-blue-500 to-cyan-300 h-16 w-16 rounded-full flex-shrink-0"></div>
              <div class="max-w-lg">
                <h4 class="text-2xl font-bold">Awesome Rating</h4>
                <p class="pt-3 text-gray-500 leading-loose text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore a at asperiores, natus alias.</p>
              </div>
            </div>
            <div class="flex justify-between  space-x-4 mr-4 text-right">
              <div class="bg-gradient-to-r from-blue-500 to-cyan-300 h-16 w-16 rounded-full flex-shrink-0"></div>
              <div class="max-w-lg">
                <h4 class="text-2xl font-bold">Award Winning</h4>
                <p class="pt-3 text-gray-500 leading-loose text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor labore a at asperiores, natus alias.</p>
              </div>>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Snow~hat'
    }
  }
</script>