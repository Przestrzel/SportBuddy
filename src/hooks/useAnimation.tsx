import { AnimationProps } from "framer-motion";

interface Props {
  mode?: "slow" | "normal" | "fast";
}

function useAnimation({ mode = "normal" }: Props) {
  const duration = {
    slow: 0.8,
    normal: 0.5,
    fast: 0.2,
  }[mode];

  const initial: AnimationProps["initial"] = {
    opacity: 0,
    scale: 0.9,
  };

  const animate: AnimationProps["animate"] = {
    opacity: 1,
    scale: 1,
  };

  const transition: AnimationProps["transition"] = {
    duration,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return {
    initial,
    animate,
    transition,
  };
}

export default useAnimation;
