#!/usr/bin/env node

if (process.stdin.isTTY) {
	if (process.argv[2]) {
		console.dir(JSON.parse(process.argv[2]), {depth: null, colors: true});
	}
} else {
	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function(data) {
		switch (typeof data) {
			case "string":
				console.dir(JSON.parse(data), {depth: null, colors: true});
				break;
			case "object":
				console.dir(data, {depth: null, colors: true});
				break;
			default:
				throw new Error("only support json format");
		}
	});
}



