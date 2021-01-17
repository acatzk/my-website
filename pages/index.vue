<template>
  <div>
    <section class="bg-gradient-to-r from-blue-500 to-cyan-300">
      <div class="container mx-auto max-w-6xl">
        <div class="py-9 px-6 flex flex-col md:flex-row-reverse items-center md:justify-around">
          <div class="flex-shrink-0 py-3 sm:py-6">
            <img class="h-72 w-72 rounded-full shadow-xl border ring-4 ring-white transform transition hover:-rotate-6 ease-in-out duration-500 object-cover" src="@/assets/images/avatar.png" alt="image">
          </div>
          <div class="max-w-lg md:max-w-xl py-6">
            <h1 class="uppercase font-semibold text-center sm:text-left tracking-tight text-white text-3xl  md:text-5xl lg:text-6xl">
              Joshua <span class="font-normal tracking-wide bg-gradient-to-b from-cyan-100 to-blue-100 bg-clip-text text-transparent">Galit</span>
            </h1>
            <p class="pt-6 text-sm sm:text-base text-white leading-relaxed">I am 21-year old dedicated and enthusiastic web developer trying to make the world look a bit better. I loved rebuilding existing social websites and addict in single page app and playin' guitar.</p>
            <div class="space-x-0 xs:space-x-2">
              <a href="#" class="inline-block bg-white mt-5 px-9 py-2 text-blue-400 rounded-full font-bold uppercase text-sm tracking-wide transform transition hover:scale-105 ease-in-out duration-300">
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
    <section class="bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-8 gap-14 py-9 px-6">
          <div class="lg:col-span-5">
            <div class="overflow-hidden border border-gray-200 border-opacity-75 rounded-md shadow">
              <div class="flex items-center justify-between w-full p-3 bg-gray-100">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-red-300 border border-red-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-300 border border-yellow-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-300 border border-green-400 rounded-full"></div>
                </div>
              </div>
              <pre class="w-full p-5 overflow-auto font-mono leading-5 text-gray-700 break-all whitespace-pre-wrap bg-white select-text">
                <div class="flex items-baseline space-x-4 leading-relaxed" v-for="(w, i) in whoami" :key="i">
                  <span class="text-sm leading-relaxed text-gray-400 select-none">{{ w.id }}</span>
                  <span class="text-gray-400">{{ w.title }}</span>
                  <span class="text-gray-700">{{ w.text }}</span>
                </div>
              </pre>
            </div>
            </div>
            <div class="items-center justify-center hidden col-span-2 lg:flex">
              <h3 class="text-2xl leading-normal text-blue-900 uppercase">
                <span>Who I am</span>
                <div class="w-12 h-1 bg-blue-900 bg-opacity-75">
              </div>
            </h3>
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
    },
    data () {
      return {
        whoami: [
          {
            id: 1,
            title: '// Personal information'
          },
          {
            id: 2,
            text: 'const name = "Joshua Galit";'
          },
          {
            id: 3,
            text: 'const location = "Bato, Leyte";'
          },
          {
            id: 4,
            text: ''
          },
          {
            id: 5,
            title: '// Hobbies'
          },
          {
            id: 6,
            text: 'const hobbies = ['
          },
          {
            id: 7,
            text: ' "Food",'
          },
          {
            id: 8,
            text: ' "Writing useless comments in code"'
          },
          {
            id: 9,
            text: '];'
          }
        ]
      }
    }
  }
</script>