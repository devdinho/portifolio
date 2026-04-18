import Lenis from 'lenis'
import Tempus from '@studio-freight/tempus'

export const lenis = new Lenis({
  duration: 1.2,
})

Tempus.add((time: number) => {
  lenis.raf(time)
})
