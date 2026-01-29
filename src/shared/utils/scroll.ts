export const scrollToForm = (prop: string) => {
  document.getElementById(`${prop}`)?.scrollIntoView({
    behavior: "smooth",
  });
};
