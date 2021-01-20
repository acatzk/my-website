<template>
  <div class="font-primary text-gray-900">
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import('@/components/TheNavBar'),
      TheFooter: () => import('@/components/TheFooter')
    }
  }
</script>