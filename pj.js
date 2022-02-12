#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = './package.json';
const RED_COLOR = '\x1b[31m';
const GREEN_COLOR = '\x1b[32m'
const WHITE_COLOR = '\x1b[37m'
const CLEAR_COLOR = '\x1b[0m'

if (!fs.existsSync(filePath)) {
    console.error(`Error: No package.json in current directory (${path.join(process.cwd(), filePath)})`)
    process.exit(1);
}

try {
	const term = process.argv[2]

	const data = fs.readFileSync(filePath);
	const parsed = JSON.parse(data);
	const allKeys = Object.keys(parsed);
	
	switch (term) {
		case undefined:
			console.log('package.json fields:');
			console.log(allKeys);
			break;

		case '-a':
			console.log(parsed);
			break;

		default:
			const keys = allKeys.filter(key => key.startsWith(term))

			if (keys.length) {
				for (let key of keys) {
					console.log(`${key}: `, parsed[key])
				}
			} else {
				console.log(`No package.json field begins with ${RED_COLOR}'${term}'${CLEAR_COLOR}`)
				console.log(allKeys)
			}

			break;
	} 

} catch (e) {
    console.error(e);
    process.exit(1);
}

