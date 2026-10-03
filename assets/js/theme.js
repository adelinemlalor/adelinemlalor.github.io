(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const storageKey = "adeline-portfolio-theme";
  const savedTheme = window.localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    button?.setAttribute("aria-pressed", String(theme === "dark"));
  };

  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  button?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  });
})();