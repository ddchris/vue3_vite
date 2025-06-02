<script setup lang="ts">
import { useLotteryStore } from '@/stores/lottery'
// onMounted(() => {
//   const { boxPosition } = storeToRefs(useLotteryStore())
//   const { setBoxPosition } = useLotteryStore()
// })

const chips = ref([
  {
    id: 1,
    value: 10,
    bg: 'bg-[#ca5636]',
    isChoose: false,
  },
  {
    id: 2,
    value: 20,
    bg: 'bg-[#fda085]',
    isChoose: false,
  },
  {
    id: 3,
    value: 100,
    bg: 'bg-[#96e6a1]',
    isChoose: false,
  },
  {
    id: 4,
    value: 200,
    bg: 'bg-[#59bbf3]',
    isChoose: false,
  },
  {
    id: 5,
    value: 300,
    bg: 'bg-[#d47fe6]',
    isChoose: false,
  },
])
interface Chip {
  id: number
  value: number
  bg: string
  isChoose: boolean
}
let nowChip: Chip = {
  id: 0,
  value: 0,
  bg: '',
  isChoose: false,
}

const chooseChip = (chip: Chip): void => {
  nowChip.isChoose = false
  chip.isChoose = true
  nowChip = chip
}
</script>

<template>
  <div class="flex justify-around items-center bg-emerald-900 w-full h-30">
    <div
      v-for="chip in chips"
      class="flex justify-center items-center rounded-[50%] size-[65px] border-2 border-solid border-gray-600 text-sm text-gray-700 transition-transform duration-500"
      :class="`${chip.bg} ${chip.isChoose ? 'translate-y-[-1rem]' : ''}`"
      :key="chip.id"
      @click="chooseChip(chip)"
    >
      <span class="inline-block">{{ chip.value }}</span>
    </div>
  </div>
</template>

<style scoped></style>
