<script setup lang="ts">
import {graphql} from "@octokit/graphql";
import axios from "axios";

type Pin = {
  name: string,
  stars: number,
  forks: number
}

const pinned = ref<Pin[]>([])

onMounted(async () => {
  pinned.value = (await axios.get("https://pinned.berrysauce.me/get/Mon4ik")).data
})
</script>

<template>
  <div class="header-box">
    <div class="name">
      <h1>idkncc</h1>
    </div>


    <div class="pins">
      <PinCard
          v-for="pin in pinned"

          :name="pin.name"
          :stars="pin.stars"
          :forks="pin.forks"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/scss/colors";
@import "assets/scss/values";

.header-box {
  display: flex;
  flex-direction: column;

  width: 75%;
  height: 80%;
  padding: 4 * $p;
  border-radius: 1.5rem;

  border: 1px solid $stone-950;
  background: $stone-800;

  .name {
    flex-grow: 1;
    display: flex;
    align-items: center;

    h1 {
      font-weight: 600;

      font-size: 10vh;
      text-align: center;
      vertical-align: middle;
      width: 100%;
      margin: 0;

      @media screen and (min-width: $lg) {
        font-size: 20vh;
      }
    }
  }

  .pins {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 5rem);
    gap: 2 * $p;
  }

  @media screen and (max-width: $xs) {
    .pin-card:nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media screen and (min-width: $xs) {
    .pins {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 5rem);
      gap: 2 * $p;
    }
  }

  @media screen and (min-width: $sm) {
    .pins {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(2, 6rem);
      gap: 2 * $p;
    }
  }

  @media screen and (min-width: $lg) {
    .pins {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 8rem 8rem;
      gap: 2 * $p;
    }
  }
}


</style>