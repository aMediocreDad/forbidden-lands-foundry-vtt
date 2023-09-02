import { context } from "esbuild";
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { args } from "./tools/args-parser.js";
import templatePathsPromise from "./tools/get-template-paths.js";

const templatePaths = await templatePathsPromise;

const development = Object.hasOwn(args, "development");

if (existsSync("./forbidden-lands.js")) await rm("./forbidden-lands.js");

const ctx = await context({
	bundle: true,
	entryPoints: ["./src/forbidden-lands.ts"],
	outdir: "./",
	format: "esm",
	logLevel: "info",
	sourcemap: development ? "inline" : false,
	ignoreAnnotations: development,
	minifyWhitespace: true,
	minifySyntax: true,
	drop: development ? [] : ["console", "debugger"],
	define: {
		GLOBALPATHS: JSON.stringify(templatePaths),
	},
});

ctx.rebuild();

if (development) ctx.watch();
else ctx.dispose();
