export const useLotteryStore = defineStore('lottery', () => {
  const boxPosition = reactive({}) as any
  function setBoxPosition(position: DOMRect, key: string) {
    boxPosition[key] = position
    console.log('boxPositionS', boxPosition)
  }
  return { boxPosition, setBoxPosition }
})
