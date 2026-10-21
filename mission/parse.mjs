import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";

/**
 * @param {string} msg
 */
function error(msg) {
	console.error(msg);
	process.exit(1);
}

const search = /** @type {string[]} */ (process.argv)
	.slice(2)
	.map(a => a.trim());

if (search.length === 0) {
	error(
		`Add search term(s) as param!

		Note:
		- We fail hard on error!
		- Don't allow backticks as quote char!
		- Don't allow spaces around equal separator!

		©EV1L C0RP`.replace(/\t/g, ""),
	);
}

if (search.some(a => a.length === 0)) {
	error("Search value without content!");
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const envFile = path.join(__dirname, "my-env");

const content = loadEnvFile(envFile);

const env = new Map();

content
	.replace(/(\r\n)|\r/g, "\n")
	.split("\n")
	.forEach((line, index) => {
		line = line.trim().replace(/^export /, "");

		if (line.length === 0 || line.startsWith("#")) {
			return;
		}

		index++;

		const firstEqual = line.indexOf("=");

		// no = at all
		// a space before =
		// a space after =
		if (
			firstEqual < 0 ||
			line[firstEqual - 1]?.match(/\s/) ||
			line[firstEqual + 1]?.match(/\s/)
		) {
			error("Couldn't parse line: " + index);
		}

		const key = line.slice(0, firstEqual);

		if (key.length === 0 || key.match(/\s/)) {
			error("Couldn't parse line: " + index);
		}

		let value = line.slice(firstEqual + 1);
		value = processValue(value, index);

		env.set(key, value);
	});

search.forEach(key => {
	if (env.has(key)) {
		console.log(`${key}: "${env.get(key)}"`);
	} else {
		console.warn(`Undefined: ${key}`);
	}
});

/**
 * @param {string} value
 * @param {number} lineIndex
 */
function processValue(value, lineIndex) {
	/** @type {"none" | "done" | "\"" | "'"} */
	let inQuoteWith = "none";
	let inComment = false;
	let out = "";

	for (let i = 0; i < value.length; i++) {
		const char = value[i];
		const isQuote = char.match(/^"|'/);

		if (isQuote && i === 0) {
			// @ts-ignore
			inQuoteWith = isQuote[0];
			continue;
		}

		if (isQuote && isQuote[0] === inQuoteWith) {
			inQuoteWith = "done";

			// content after quote end -> set any quote char to error below
			for (let k = i + 1; k < value.length; k++) {
				if (value[k] === "#") {
					break;
				}

				if (value[k].match(/\s/)) {
					continue;
				}

				inQuoteWith = "'";
				break;
			}

			break;
		}

		if (char === "#" && value[i - 1]?.match(/\s/)) {
			inComment = inQuoteWith === "none";
		}

		if (!inComment) {
			out += char;
		}
	}

	if (inQuoteWith !== "none" && inQuoteWith !== "done") {
		error("Couldn't parse line: " + lineIndex);
	}

	return inQuoteWith === "done" ? out : out.trim();
}

/**
 * @param {string} path
 * @returns {string}
 */
function loadEnvFile(path) {
	let stat;
	try {
		stat = fs.lstatSync(path);
	} catch {
		error("No env file to read!");
	}

	if (stat && stat.isSymbolicLink()) {
		console.log("Decrypt key: 29e62793-9287-43ee-8779-1916977763b3");
		process.exit(0);
	}

	try {
		return fs.readFileSync(path) + "";
	} catch {
		error("Irregular env file!");
	}

	return "";
}
