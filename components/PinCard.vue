<script setup lang="ts">
const props = defineProps<{
  name: string,
  stars: number,
  forks: number
}>()
</script>

<template>
  <a class="pin-card" :href="`https://github.com/Mon4ik/${props.name}`">
    <h2>
      <svg class="repository-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
      </svg>

      {{props.name}}
    </h2>

    <div class="stats">
      <p class="stat-row">
        <svg class="star-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path
              d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
        </svg>

        <span>{{props.stars}}</span>
      </p>

      <p class="stat-row">
        <svg class="fork-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
                d="M5 6a3 3 0 1 1 4 2.83V10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8.83a3.001 3.001 0 1 1 2 0V10a3 3 0 0 1-3 3h-1v2.17a3.001 3.001 0 1 1-2 0V13h-1a3 3 0 0 1-3-3V8.83A3.001 3.001 0 0 1 5 6Z"
                clip-rule="evenodd"/>
        </svg>

        <span>{{props.forks}}</span>
      </p>
    </div>
  </a>
</template>

<style scoped lang="scss">
@import "assets/scss/colors";
@import "assets/scss/values";

.pin-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: $stone-900;
  border: 1px solid $stone-950;
  border-radius: 28px - 4 * $p;

  color: $stone-050;
  text-decoration: none;

  padding: 3 * $p;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  h2 {
    font-size: .9em;

    .repository-icon {
      width: 1rem;
      height: 1rem;
      vertical-align: middle;
    }
  }

  .stats {
    display: flex;
    gap: 2 * $p;
    font-weight: lighter;

    align-items: center;


    .stat-row {
      font-size: .9em;
      font-weight: 500;

      .star-icon, .fork-icon {
        width: 1.2em;
        height: 1.2em;
        vertical-align: text-top;
      }
    }
  }

  @media screen and (min-width: $sm) {
    h2 {
      font-size: 1em;

      .repository-icon {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .stats .stat-row {
      font-size: 1em;

      .star-icon, .fork-icon {
        width: 1.2em;
        height: 1.2em;
      }
    }
  }

  @media screen and (min-width: $lg) {
    h2 {
      font-size: 1.2em;

      .repository-icon {
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    .stats {
      .stat-row {
        font-size: 1.1em;

        .star-icon, .fork-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}

.pin-card:hover {
  background: $stone-800;
  border: 1px solid $stone-900;
  transform: scale(1.025, 1.025);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
</style>