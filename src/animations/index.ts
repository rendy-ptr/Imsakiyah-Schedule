export const CreateAnimation = (direction: string, duration: number) => {
  const x = direction === 'right' ? 50 : direction === 'left' ? -50 : 0
  const y = direction === 'up' ? 50 : direction === 'down' ? -50 : 0

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeInOut',
      },
    },
  }
}

export const staggerContainer = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
})

export const toggleAnimation = (direction: 'in' | 'out') => ({
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: direction === 'in' ? -90 : 90,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: direction === 'in' ? 90 : -90,
  },
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
})
