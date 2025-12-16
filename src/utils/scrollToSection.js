export const scrollToSection = (
  id,
  setIsManualScroll,
  duration = 500
) => {
  if (setIsManualScroll) setIsManualScroll(true);

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  if (setIsManualScroll) {
    setTimeout(() => {
      setIsManualScroll(false);
    }, duration);
  }
};
