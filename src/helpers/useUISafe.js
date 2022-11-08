import { useState, useEffect } from "react";

export default function useUISafe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  return mounted;
}