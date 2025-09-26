import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDark(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update DOM
    document.documentElement.classList.toggle('dark', newTheme);
    
    // Save preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={toggleDarkMode}
      variant="outline"
      size="icon"
      className="relative w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-background transition-all duration-300 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon */}
      <Sun 
        className={`h-5 w-5 text-primary absolute transition-all duration-300 transform ${
          isDark 
            ? 'rotate-90 scale-0 opacity-0' 
            : 'rotate-0 scale-100 opacity-100'
        }`} 
      />
      
      {/* Moon Icon */}
      <Moon 
        className={`h-5 w-5 text-primary absolute transition-all duration-300 transform ${
          isDark 
            ? 'rotate-0 scale-100 opacity-100' 
            : '-rotate-90 scale-0 opacity-0'
        }`} 
      />
    </Button>
  );
};

export default DarkModeToggle;