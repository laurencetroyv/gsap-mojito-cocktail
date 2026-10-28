import gsap from "gsap"

export function useGsap(callback: (context: gsap.Context) => void, scope?: Element | string | object) {
  let context: gsap.Context | undefined

  onMounted(() => {
    if (context) {
      context = gsap.context(() => callback(context!), scope)
    }
  })

  onUnmounted(() => {
    context?.revert()
  })
}
