// src/styles/helpers/vars.scssのbreakpointsと合わせること
const mq: { [key: string]: string } = {
  tablet: `@media (min-width: 600px)`,
  desktop: `@media (min-width: 1024px)`,
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("Media Query", () => {
    expect(mq.tablet).toBe("@media (min-width: 600px)");
    expect(mq.desktop).toBe("@media (min-width: 1024px)");
  });
}

export { mq };
