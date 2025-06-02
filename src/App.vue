<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const userData = ['Brown', 'Emily']

function change(id: number) {
  console.log('change:', id)
}
function update(name: string) {
  console.log('update:', name)
}
import * as VirtualScroller from 'vue3-virtual-scroller'
console.log(VirtualScroller)
import { RecycleScroller, DynamicScroller, DynamicScrollerItem } from 'vue3-virtual-scroller'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'
const items = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` }))
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper w-full text-blue-50 font-bold overflow-auto">
      <HelloWorld msg="You did it!" />
      123
      <DynamicScroller class="scroller" :items="items" :item-size="20">
        <template #default="{ item }">
          <div class="user">
            {{ item.name }}
          </div>
        </template>
      </DynamicScroller>
      <!-- <div v-for="(item, i) in items" :key="i">
        <div>
          {{ item.name }}
        </div>
      </div> -->

      <div class="w-full flex justify-between items-center">
        <button
          class="text-emerald-500 text-3xl flex-[0_0_auto] w-sm p-2 bg-blue-300 rounded-sm border-4 border-solid border-black shadow-2xl"
        >
          Brown
        </button>
        <button
          class="text-emerald-500 text-3xl flex-[0_1_auto] w-sm p-2 bg-blue-300 rounded-sm border-4 border-solid border-black shadow-sm"
        >
          Emily
        </button>
        <button
          class="basis-0 text-emerald-500 text-3xl flex-[0_1_auto] w-sm p-2 bg-blue-300 rounded-sm border-4 border-solid border-black shadow-sm"
        >
          Jack
        </button>
      </div>

      <nav>
        <router-link to="/about" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">About Us</button>
        </router-link>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/lottery">Lottery</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :userData="userData" @change="change" @update="update" />
</template>

<style lang="css" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-divider-dark-3);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
