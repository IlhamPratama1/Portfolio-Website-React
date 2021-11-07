const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const backVariants = {
  exit: { y: -100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export const backVariants2 = {
  exit: { x: -100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { ...transition } }
};

export const fade = {
  exit: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.75, ...transition }}
}