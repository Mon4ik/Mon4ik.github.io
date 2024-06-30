<script setup lang="ts">
import {ref} from "vue";

const projects = ref([
  {
    name: "yandex-homekit",
    description: "Adds Yandex Home to Homekit",
    link: "https://github.com/Mon4ik/yandex-homekit",
  },
  {
    name: "pubtrust-chat",
    description: "Chat based of Signatures and works on MQTT",
    link: "https://github.com/Mon4ik/pubtrust-chat",
  },
])
</script>

<template>
  <main class="main-content">
    <section class="main-section area-title">
      <h1 class="text-red title-idkncc">idkncc</h1>
      <p>fullstack, software developer</p>
    </section>

    <section class="main-section area-langs">
      <img src="~/assets/logos/rust.svg" width="96" height="96">
      <img src="~/assets/logos/typescript.svg" width="96" height="96">
    </section>

    <section class="area-projects overflow-scroll">
      <ProjectCard
          v-for="project in projects"
          :name="project.name"
          :description="project.description"
          :link="project.link"
      />
    </section>
  </main>
</template>
<style scoped lang="scss">
.title-idkncc {
  font-weight: 900;
  font-size: clamp(8rem, 15vw, 16rem) !important;
}

$horizontal-layout-breakpoint: 960px;

.main-content {
  @apply w-screen h-screen p-2;
  @apply overscroll-none overflow-hidden;
  @apply gap-1;

  @media screen and (min-width: $horizontal-layout-breakpoint) {
    display: grid;
    grid-template-areas:
            "a a"
            "b c";
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr;
  }

  @media screen and (max-width: $horizontal-layout-breakpoint) {
    @apply flex flex-col gap-1;
  }


  .main-section {
    @apply w-full p-10;
    @apply rounded-3xl border border-gray;
  }

  .area-title {
    grid-area: a;
  }

  .area-langs {
    grid-area: b;

    @apply flex gap-2;

    @media screen and (min-width: $horizontal-layout-breakpoint) {
      @apply flex-col;
    }
  }

  .area-projects {
    grid-area: c;

    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2;
  }
}


.disable-select {
  @apply select-none cursor-default;
}
</style>
