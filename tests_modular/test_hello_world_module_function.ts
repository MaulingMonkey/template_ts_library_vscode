import {hello_world} from '..'

describe("Using modular hello_world single import", function () {
    it('should equal \"hello, world!\"', function () {
        expect(hello_world()).toEqual("hello, world!");
    });
});
