<script setup lang="ts">
const props = defineProps<{
  image: string
  url: string
  title: string
}>()
</script>

<template>
  <div class="portfolio-card">
    <img :src="props.image" :alt="props.title" class="aspect-square">

    <div class="portfolio-card-header">
      <h2 class="text-xl md:text-[2vw]">{{ props.title }}</h2>
      <NuxtLink :href="props.url">
        <button class="btn w-full">visit</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-card {
  @apply bg-concrete-200 p-4 h-fit;
  @apply flex flex-col gap-5;

  .portfolio-card-header {
    @apply flex-grow;
  }
}
</style>