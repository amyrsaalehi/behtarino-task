import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import useUISafe from "src/helpers/useUISafe";

export default function SwapTheme() {
  const mounted = useUISafe();
  const initialTheme = useRef();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    initialTheme.current = theme;
  }, []);

  const changeSwap = (e) => {
    const checked = e.target.checked;
    let t = "light";
    if (checked) t = theme === "light" ? "dark" : "light";
    else t = theme === "light" ? "dark" : "light";
    setTheme(t);
  };

  if (!mounted) return null;

  return (
    <label className="swap swap-rotate px-2 btn btn-ghost btn-circle">
      <input type="checkbox" onChange={changeSwap} />
      {initialTheme.current === "light" ? (
        <>
          <BsSun className={`swap-off fill-current w-5 h-5`} />
          <BsMoon className={`swap-on fill-current w-5 h-5`} />
        </>
      ) : (
        <>
          <BsMoon className={`swap-off fill-current w-5 h-5`} />
          <BsSun className={`swap-on fill-current w-5 h-5`} />
        </>
      )}
    </label>
  );
}
