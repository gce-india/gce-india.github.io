#!/usr/bin/env zx

const BUILD_DIR = path.join(__dirname, 'build') + path.sep;

if (!fs.existsSync(BUILD_DIR))
	await $`vite build`;

await $`vite preview --port 8080`;