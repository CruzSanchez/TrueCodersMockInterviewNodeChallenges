const generateSequence = require("../scripts/challenges");

const { default: expect } = require("expect");

test("Should_GenerateSequence", () => {
    expect(generateSequence(2)).toBe([1, 2]);
    });