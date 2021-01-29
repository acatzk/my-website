<template>
  <footer class="py-8 px-6 border-t border-gray-100">
    <div class="container mx-auto max-w-6xl flex flex-col space-y-3">
      <div class="flex items-center justify-between flex-wrap">
        <ul class="flex items-center justify-start space-x-4">
          <li v-for="(link, i) in links" :key="i">
            <a :href="link.to" target="_blank" class="focus:outline-none text-gray-300">
              <span v-html="link.icon"></span>
            </a>
          </li>
        </ul>
        <div class="relative">
          <button class="border w-full flex items-center space-x-3 rounded-md py-1 px-2 focus:outline-none" 
                  :class="[toggle ? 'shadow-inner' : 'shadown-none']"
                  @click.prevent="toggle = !toggle">
            <span>
              <svg v-if="mode === 'Light'" class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
              <svg v-else class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
            </span>
            <span class="text-sm text-gray-600 tracking-wider">{{ mode }}</span>
            <span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style="color: currentcolor;"><path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517"></path></svg>
            </span>
          </button>
          <div class="absolute inset-x-0 bg-white" :class="[toggle ? 'block' : 'hidden']">
            <!-- <button @click="toggle = !toggle" class="w-full cursor-default h-screen fixed inset-0 bg-gray-200 bg-opacity-40 focus:outline-none"></button> -->
            <div>
              <ul class="text-center text-sm text-gray-500 border border-gray-300 rounded-b overflow-hidden">
                <li class="py-1 cursor-pointer tracking-wider hover:bg-cyan-400 hover:text-white transition ease-in-out duration-150" @click="mode = 'Dark'">Dark</li>
                <li class="py-1 cursor-pointer tracking-wider hover:bg-cyan-400 hover:text-white transition ease-in-out duration-150" @click="mode = 'Light'">Light</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        toggle: false,
        mode: 'Light',
        links: [
          {
            icon: '<svg class="w-6 h-6 fill-current transition ease-in-out duration-150 hover:text-blue-facebook" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path></svg>',
            to: 'https://www.facebook.com/acatzk'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current transition ease-in-out duration-150 hover:text-gray-github" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>',
            to: 'https://github.com/acatzk'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current transition ease-in-out duration-150 hover:text-skyblue-twitter" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>',
            to: 'https://twitter.com/angryboy_19'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current transition ease-in-out duration-150 hover:text-orange-stackoverflow" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow icon</title><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"></path></svg>',
            to: 'https://stackoverflow.com/users/14108225/joshua-galit'
          },
          {
            icon: '<svg class="w-6 h-6 fill-current transition ease-in-out duration-150 hover:text-blue-linkedin" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>',
            to: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/'
          }
        ]
      }
    }
  }
</script>