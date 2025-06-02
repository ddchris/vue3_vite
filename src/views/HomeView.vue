<script setup lang="ts">
import { useCounterStore } from './../stores/counter'
const { increment } = useCounterStore()
const { count, doubleCount } = storeToRefs(useCounterStore())

// const emit = defineEmits<{
//   change: [id: number]
// }>()

// const emit = defineEmits<{
//   (e: 'change', id: number): void
// }>()

interface User {
  userData: string[]
}

const props = defineProps<User>()

console.log('props:', props)
// const props = defineProps({
//   userData: [],
// })

// const props = defineProps({
//   userData: [],
// })
const emit = defineEmits(['change'])

emit('change', 2)
</script>

<template>
  <main>
    count:{{ count }}
    <br />
    doubleCount: {{ doubleCount }}
    <br />
    <button @click="increment()">increment</button>
    <TheWelcome />
  </main>
</template>
