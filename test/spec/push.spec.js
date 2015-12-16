'use strict';

var fs = require('fs');
var should = require('should');
var testsuite = require('../testsuite');

module.exports = function(hg) {

    it('should push the repository', function(done) {
        var opt = {cwd: './test/' + testsuite.repositoryName + '/'};
        var dest = 'branchtest';
        hg.push(dest, opt, function(err) {
            should(err).not.exists;
            done();
        });
    });
};
