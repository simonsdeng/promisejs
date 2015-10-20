function Promise(func) {
	var that = this;
	func(function () { if (that.success) that.success.apply(that, arguments); });
}

Promise.prototype.then = function (success) {
	var that = this;
	return new Promise(function (nextSuccess) {
		that.success = function () {
			var next = success.apply(that, arguments);
			if (next) next.then(nextSuccess);
		};
	});
};
