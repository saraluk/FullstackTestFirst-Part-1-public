function RPNCalculator() {
	this.stack = [];
}

RPNCalculator.prototype.push = function(val) {
	this.stack.push(val);
}

RPNCalculator.prototype.plus = function() {
	if (this.stack.length < 2) {
		throw "rpnCalculator is empty";
	};
	result = this.stack.pop() + this.stack.pop();
	this.stack.push(result);
}
RPNCalculator.prototype.minus = function() {
	if (this.stack.length < 2) {
		throw "rpnCalculator is empty";
	};
	second = this.stack.pop();
	result = this.stack.pop() - second;
	this.stack.push(result);
}
RPNCalculator.prototype.times = function() {
	if (this.stack.length < 2) {
		throw "rpnCalculator is empty";
	};
	result = this.stack.pop() * this.stack.pop();
	this.stack.push(result);
}
RPNCalculator.prototype.divide = function() {
	if (this.stack.length < 2) {
		throw "rpnCalculator is empty";
	};
	second = this.stack.pop();
	result = this.stack.pop() / second;
	this.stack.push(result);
}
RPNCalculator.prototype.value = function() {
	if (this.stack.length < 1) {
		throw "rpnCalculator is empty";
	};
	return this.stack[this.stack.length - 1];
}
