export const openNewTab = (url: string) => {
  const newTab = window.open(url, "_blank", "noopenner, noreferrer");
  newTab?.focus();
};
