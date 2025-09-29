import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const ThemeToggle = ({
  setActiveNavBtn,
}: {
  setActiveNavBtn: Dispatch<SetStateAction<string>>;
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button 
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        setActiveNavBtn("");
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
