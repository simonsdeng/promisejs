promise.js
==========
A bare bones implementation of Promises made for learning purposes.

## Example Usage
```javascript
new Promise(function (success) {
	setTimeout(function () {
		success("Hello");
	}, 1000);
}).then(function (msg) {
	console.log(msg);
	return new Promise(function (success) {
		setTimeout(function () {
			success("Promises!");
		}, 1000);
	});
}).then(function (msg) {
	console.log(msg);
});
```
