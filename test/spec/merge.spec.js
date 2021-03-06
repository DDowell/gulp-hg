'use strict';

const fs = require('fs');
const should = require('should');
const testsuite = require('../testsuite');

module.exports = function(hg) {
    it('should merge branches', function(done) {
        var opt = {cwd: testsuite.repoTestFolders[0]};
        hg.merge(testsuite.TEST_BRANCH, opt, function(err) {
            should(err).be.eql(null);
            done();
        });
    });
};
