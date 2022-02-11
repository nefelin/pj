#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = './package.json';

if (!fs.existsSync(filePath)) {
    console.error('Error: package.json not found at filePath: ', path.join(process.cwd(), filePath))
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

			for (let key of keys) {
				console.log(`${key}: `, parsed[key])
			}

			break;
	} 

} catch (e) {
    console.error(e);
    process.exit(1);
}

