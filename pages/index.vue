<template>
  <div >
    <section class="bg-gradient-to-r from-blue-500 to-cyan-300">
      <div class="container mx-auto max-w-6xl">
        <div class="py-9 px-6 flex flex-col md:flex-row-reverse md:items-center md:justify-around">
          <div class="flex-shrink-0 py-6">
            <img class="w-full sm:w-96 transform transition hover:-rotate-12 ease-in-out duration-500" src="@/assets/svgs/snow-globe.svg" alt="image">
          </div>
          <div class="max-w-lg md:max-w-xl py-6">
            <h1 class="font-bold text-white text-xl leading-relaxed xs:text-2xl">I'm Joshua Galit a Web Designer Freak!</h1>
            <p class="pt-6 text-sm text-white leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus inventore dicta dolorum consectetur quis ullam quo, blanditiis corrupti possimus dolore, pariatur impedit esse facere maiores quia sed deserunt! Optio, nostrum.</p>
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
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Snow~hat'
    }
  }
</script>