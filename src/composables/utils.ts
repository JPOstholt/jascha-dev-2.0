import type { MaybeElement, MaybeElementRef } from '@vueuse/core'

/*
export const random = (max: number, min: number) => {
  Math.floor(Math.random() * (max - min + 1) + min)
}
*/
export const useOnVisibilityChanged = (target: MaybeElementRef<MaybeElement>, callback: (visible: boolean) => void): void => {
  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    callback(isIntersecting)
  })
}
