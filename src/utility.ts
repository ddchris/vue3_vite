export function getPosition(dom: Ref<HTMLElement[] | null>): DOMRect | undefined {
  const position = dom.value?.[0].getBoundingClientRect()
  return position
}
