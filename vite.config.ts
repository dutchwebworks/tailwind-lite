import { defineConfig } from "vite";
import isWsl from "is-wsl";
import fg from "fast-glob";
import { InputOption } from "rollup";

/* Only change these 2 values
----------------------------------- */

const scssDir = "./src/scss";
const outPutDir = "./dist";

/* -------------------------------- */

const rootSCSSEntries: InputOption = fg.sync([`${scssDir}/*.scss`]).reduce(
	(entryArr, entry) =>
		new Object({
			[entry.split("/").pop() ?? ""]: entry,
			...entryArr,
		}),
	{},
);

const inputOptions = {
	// example: './src/example.ts',
	...rootSCSSEntries,
} as InputOption;

export default defineConfig(({ command, mode }) => {
	return {
		plugins: [],
		server: {
			watch: {
				usePolling: isWsl,
			},
		},
		// Set to empty to avoid warnings in yarn dev
		optimizeDeps: {
			include: [],
		},
		build: {
			minify: false,
			rollupOptions: {
				input: inputOptions,
				output: {
					entryFileNames: "[name].ts",
					assetFileNames: ({ name }) => {
						if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
							return "img/[name][extname]";
						}

						if (/\.(css|scss)$/.test(name ?? "")) {
							return "css/[name][extname]";
						}

						if (/\.(vue|js|ts|ce.vue)$/.test(name ?? "")) {
							return "js/[name][extname]";
						}

						// default value
						// ref: https://rollupjs.org/guide/en/#outputassetfilenames
						return "builds/[name][extname]";
					},
					dir: outPutDir,
				},
			},
		},
	};
});
