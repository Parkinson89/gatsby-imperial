import { useEffect, useRef } from "react";

export const useComponentDidUpdate = (callback, deps) => {
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      callback();
    }
  }, [...deps]);
};
