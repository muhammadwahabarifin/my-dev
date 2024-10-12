import { useMediaQuery } from "./use-media-query";

export const useResponsive = () => {
  const isDekstop = useMediaQuery("(min-width: 768px)");

  return {
    isDekstop,
  };
};
