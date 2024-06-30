<script setup lang="ts">
const props = defineProps<{
  name: string
  description: string
  link: string
}>()
</script>

<template>
  <div class="project h-[50vh]">
    <div class="project-info">
      <h2 class="project-name">{{ props.name }}</h2>
      <p class="project-desc">{{ props.description }}</p>
    </div>
    <div class="project-see">
      <NuxtLink :to="props.link" class="w-full h-full">
        <button class="btn project-see-btn">See</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project {
  @apply w-full p-5;
  @apply rounded-3xl border border-gray;

  @apply flex flex-col gap-2;

  .project-info {
    @apply flex-grow;

    .project-name {
      @apply text-3xl;
    }

    .project-desc {
      @apply text-2xl italic;
    }
  }

  .project-see {
    @apply h-16 w-full;

    .project-see-btn {
      @apply w-full h-full;
      @apply bg-red text-white font-semibold;
    }
  }
}
</style>