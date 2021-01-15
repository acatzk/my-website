<template>
  <div>
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import('@/components/TheNavBar')
    }
  }
</script>