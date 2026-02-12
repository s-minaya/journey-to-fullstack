import { useEffect, useState } from "react";

export function usePageIntro({ loaderTime = 3000, contentDelay = 4500 } = {}) {
  const [loading, setLoading] = useState(true);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
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
  }, [loaderTime, contentDelay]);

  return {
    loading,
    backgroundVisible,
    contentVisible,
  };
}
