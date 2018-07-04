var CrossplatformAES = require("nativescript-crossplatformAES").CrossplatformAES;
var crossplatformAES = new CrossplatformAES();

describe("greet function", function() {
    it("exists", function() {
        expect(crossplatformAES.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(crossplatformAES.greet()).toEqual("Hello, NS");
    });
});