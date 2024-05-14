<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  url: string
}>()
</script>

<template>
  <div class="library-card">
    <h1 class="card-title">{{ props.title }}</h1>
    <p class="flex-grow card-description">{{ props.description }}</p>

    <NuxtLink :href="props.url">
      <button class="btn w-full">use it</button>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.library-card {
  @apply bg-concrete-200 text-3xl h-56 p-4;
  @apply flex flex-col gap-2;

  .card-title {
    font-family: "ArchitecturalMedExp", sans-serif;
  }

  .card-description {
    font-family: "ArchitecturalLight", sans-serif;
  }
}
</style>