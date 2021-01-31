<template>
  <div class="relative bg-gradient-to-r from-blue-500 to-cyan-300">
    <div class="flex justify-between items-center container mx-auto max-w-6xl px-6">
      <nuxt-link to="/" class="flex items-center space-x-2 pt-4 md:pt-1">
        <img class="h-8 w-8 border-2 border-white object-cover rounded-full" src="~/assets/images/avatar.png" alt="avatar">
        <span class="text-white">Joshua Galit</span>
      </nuxt-link>
      <div>
        <button @click.prevent="toggle = !toggle" class="text-white block md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div class="hidden md:block">
          <ul class="flex items-center pt-4 space-x-6 lg:space-x-8">
            <li v-for="(link, i) in links" :key="i" 
                :class="`${link.title === setLink ? 'border-white' : 'border-transparent'} pb-3 border-b-2`">
              <button class="focus:outline-none" @click.prevent="setLink = link.title">
                <nuxt-link  :to="link.to" class="text-white font-semibold tracking-wide text-sm lg:text-base" 
                          :class="`${link.title !== setLink ? 'nav-link' : undefined}`">
                {{ link.title }}
              </nuxt-link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="absolute top-0 inset-x-0 p-2 z-50" v-show="toggle">
      <div class="shadow-lg rounded-lg">
        <div class="bg-white shadow-xs rounded-lg pt-5 pb-8 px-5 space-y-7">
          <div class="flex justify-between items-center">
            <nuxt-link to="/" class="flex items-center space-x-2">
              <img class="h-8 w-8 object-cover rounded-full" src="~/assets/images/avatar.png" alt="avatar">
              <span>Joshua Galit</span>
            </nuxt-link>
            <div>
              <button class="text-gray-400 rounded focus:outline-none hover:bg-gray-50 focus:bg-gray-100 focus:text-gray-500 transition ease-in-out duration-150" @click.prevent="toggle = !toggle">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>
          <div>
            <nav class="space-y-7">
              <ul v-for="(link, i) in links" :key="i">
                <li>
                  <nuxt-link :to="link.to" class="flex items-center space-x-4">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-cyan-300 text-white">
                      <span v-html="link.icon"></span>
                    </div>
                    <span class="font-medium text-gray-900">
                      {{ link.title }}
                    </span>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        toggle: false,
        setLink: 'About',
        links: [
          {
            title: 'About',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            to: '/'
          },
          {
            title: 'Portfolio',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
            to: '/portfolio'
          },
          {
            title: 'Blog',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>',
            to: '/blog'
          },
          {
            title: 'Contact',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg>',
            to: '/contact'
          }
        ]
      }
    },
    computed: {
      hello (){
        return this.links.fiter()
      }
    }
  }
</script>

<style scoped>
  .nav-link {
    position: relative;
  }
  .nav-link::before, .current::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.9rem;
    background-color: white;
    width: 100%;
    height: 2px;
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: left;
            transform-origin: left;
    -webkit-transition: -webkit-transform 650ms;
    transition: -webkit-transform 650ms;
    transition: transform 650ms;
    transition: transform 650ms, -webkit-transform 650ms;
  }
  .current::before {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
  .nav-link:hover::before {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
  }
</style>