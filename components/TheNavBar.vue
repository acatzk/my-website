<template>
  <header class="bg-gray-900 sticky top-0 md:bg-gradient-to-r from-blue-500 to-cyan-300 z-10">
    <div class="flex items-center justify-between px-6 container mx-auto max-w-6xl">
      <div class="flex-shrink-0 py-3">
        <img class="h-5 lg:h-6" src="https://nuxtjs.org/logos/nuxtjs-typo.svg" alt="logo">
      </div>
      <nav>
        <button class="block focus:outline-none rounded focus:ring-2 ring-teal-600 md:hidden">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
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
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        setLink: 'About',
        links: [
          {
            title: 'About',
            to: '/'
          },
          {
            title: 'Portfolio',
            to: '/portfolio'
          },
          {
            title: 'Blogs',
            to: '/blogs'
          },
          {
            title: 'Contact',
            to: '/contact'
          }
        ]
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