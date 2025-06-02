<script setup lang="ts">
import { useLotteryStore } from '@/stores/lottery'

import { getPosition } from '@/utility'
const boxes: Ref<HTMLElement[] | null>[] = []

for (let i = 1; i <= 5; i++) {
  boxes.push(useTemplateRef<HTMLElement>(`box${i}`) as Ref<HTMLElement[] | null>)
}
console.log('boxes', boxes)

function resetPositionData() {
  const { setBoxPosition } = useLotteryStore()
  for (let i = 0; i <= 4; i++) {
    const position = getPosition(boxes[i]) as DOMRect
    setBoxPosition(position, 'box' + i)
  }
}
const { boxPosition } = useLotteryStore()

setTimeout(() => {
  console.log('boxPosition', boxPosition)
}, 1000)
const area = ['BP', 'T', 'PP', 'B', 'P']

area.push('Da')
area.push('Da1')
area.push('Da2')
area.push('PPP')
area.push('Da3')
area.push('QQS')

onMounted(() => {
  resetPositionData()
})
</script>

<template>
  <div class="flex flex-wrap w-full bg-[linear-gradient(to_top,#a18cd1_0%,#fbc2eb_100%)]">
    <div
      v-for="(item, index) in area"
      :key="index"
      class="cell hover:bg-pink-900 flex justify-center items-center h-30"
      :class="index < 3 ? 'w-1/3' : 'w-1/2'"
      :ref="`box${index + 1}`"
    >
      <span class="inline-block">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped>
.cell {
  outline: 1px solid #36333c;
}
</style>
