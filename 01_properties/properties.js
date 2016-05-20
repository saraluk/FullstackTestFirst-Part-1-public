function setPropertiesOnObjLiteral(obj){
    obj.x=7;
	obj.y=8;
	obj.onePlus = function(value) {
		return value + 1;
	};
};

function setPropertiesOnArrayObj(obj) {
	obj.hello = function() {
		return "Hello!"
	};
	obj.full="stack";
	obj.push(5);
	obj.twoTimes = function(inp) {
		return inp * 2;
	};
};

function setPropertiesOnFunctionObj(obj) {
	obj.year=2015;
	obj.divideByTwo = function(num) {
		return num / 2;
	};
	obj.prototype.helloWorld = function() {
		return "Hello World";
	};

};