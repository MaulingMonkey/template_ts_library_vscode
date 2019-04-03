import '../global'

describe("Using global hello_world", function () {
    it('should equal \"hello, world!\"', function () {
        expect(mmk.example.hello_world()).toEqual("hello, world!")
    });
});
