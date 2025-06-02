export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function getFirstWord(msg: unknown): void {
    // 这里使用了 String 来避免程序报错
    console.log(String(msg).split(' ')[0])
  }

  getFirstWord('Hello World')

  getFirstWord(123)

  return { count, doubleCount, increment }
})
