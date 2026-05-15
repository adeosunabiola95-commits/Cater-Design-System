/** Image imports in manager.ts are bundled as data URLs by Storybook’s manager esbuild pipeline. */
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
