const config = {
    "*.{cjs,mjs,js,ts,jsx,tsx}": (stagedFiles) => [
        `deno lint ${stagedFiles.join(" ")}`,
        `deno fmt ${stagedFiles.join(" ")}`,
    ],
    "*.{css,md,mdx,json}": (stagedFiles) => [`deno fmt ${stagedFiles.join(" ")}`],
};
export default config;