'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isM4a = require('./index');

function check(filename) {
	return isM4a(readChunk.sync(filename, 0, 8));
}

it("should detect m4a from Buffer", function () {
	assert(check('fixture.m4a'));
	assert(!check('fixture.nm4a'));
});
