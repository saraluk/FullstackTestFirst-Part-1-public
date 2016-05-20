function createCalculator() {

    calc = {
    	val:0,
        value: function() { return this.val },
    	add: function(v2) { this.val = this.val + v2 },
    	subtract: function(v2) { this.val = this.val - v2 }
		};
	return calc;
}