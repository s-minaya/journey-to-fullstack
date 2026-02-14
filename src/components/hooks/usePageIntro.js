import { useEffect, useState } from "react";

export function usePageIntro({
  loaderTime = 3000,
  contentDelay = 4500,
  skipLoader = false,
} = {}) {
  const [loading, setLoading] = useState(!skipLoader);
  const [backgroundVisible, setBackgroundVisible] = useState(skipLoader);
  const [contentVisible, setContentVisible] = useState(skipLoader);

  useEffect(() => {
    if (skipLoader) {
      // Si se salta el loader, todo es visible inmediatamente
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      setBackgroundVisible(true);
      setContentVisible(true);
      return;
    }

    const loaderTimer = setTimeout(() => {
      setLoading(false);
      setBackgroundVisible(true);
    }, loaderTime);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, contentDelay);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, [loaderTime, contentDelay, skipLoader]);

  return {
    loading,
    backgroundVisible,
    contentVisible,
  };
}
