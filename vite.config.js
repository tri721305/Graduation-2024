import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs/promises";
import dotenv from "dotenv";
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "./src") },
        { find: "page", replacement: path.resolve(__dirname, "./src/page") },
      ],
    },
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       modifyVars: {
    //         "primary-color": "#f3941e",
    //       },
    //       javascriptEnabled: true,
    //     },
    //   },
    // },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
    publicDir: "public",
    build: {
      target: ["es2020"],
      minify: false,
      outDir: path.join(__dirname, "dist"),
      assetsInlineLimit: 2048,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  });
};
