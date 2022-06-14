"use strict"

const exchangeMachine = require("./exchange-machine")

describe("Exchange machine test suite", function(){
    it("Given an amount, the machine returns the right combination of exchange", function(){
        expect(exchangeMachine(1000)).toEqual({"500": 2, "200": 0, "100": 0})
        expect(exchangeMachine(1300)).toEqual({"500": 2, "200": 1, "100": 1})
        expect(exchangeMachine(50)).toBeNull()
    })
})