import * as example from '..';

describe("Using modular hello_world wildcard import", function () {
    it('should equal \"hello, world!\"', function () {
        expect(example.hello_world()).toEqual("hello, world!");
    });
});
