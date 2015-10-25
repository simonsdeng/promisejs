function Promise(func) {
	var that = this;
	func(function () { if (that.success) that.success.apply(this, arguments); });
}

Promise.prototype.then = function (success) {
	var that = this;
	return new Promise(function (nextSuccess) {
		that.success = function () {
			if (success) {
				var next = success.apply(this, arguments);
				if (next && next.then) next.then(nextSuccess);
				else nextSuccess(next);
			} else {
				nextSuccess.apply(this, arguments);
			}
		};
	});
};
