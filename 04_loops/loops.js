function repeat(str, number) {
	var part = "";
	for (var i = 0; i < number; i++) {
		part +=  str;
	}
	return part;
};

function sum(list) {
	var total = 0;
	for (var i = 0; i < list.length; i++) {
		total += list[i];	}
	return total;
};

function gridGenerator(num) {
	var part = "";
	for (var i = 1; i <= num; i++) {
		for (var j = 1; j <= num; j ++) {
			if (((i+j) % 2) == 0) {
				// Select # or space by parity of i+j
				part += "#";
			} else {
				part += " ";
			}
		}
		part += "\n";
	}
	return part;
};

function join(list, sep) {
	var part = "";
	// Initialize to empty because we want n-1 separators
	prepend = "";
	for (var i = 0; i < list.length; i++) {
		part += prepend + list[i];
		// If a separator was provided, use it for the next prepend.
		// Note that this executes too many times, but WTH.
		if (typeof(sep) != "undefined") {
			prepend = sep;
		}
	}
	return part;
}

function paramify(obj) {
	var keyList = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			keyList.push(key);
		}
	}
	keyList.sort();

	var part = "";
	var prepend = "";
	for (var key in keyList) {
		part += prepend + keyList[key] + "=" + obj[keyList[key]];
		prepend = "&";
	}
	return part;

}


