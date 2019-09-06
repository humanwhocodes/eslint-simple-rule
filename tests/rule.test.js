/**
 * @fileoverview Tests for the rule function.
 */
/*global describe, it*/

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

import { rule } from "../src/rule.js";
import { assert } from "chai";
import { RuleTester } from "eslint";

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------

describe("rule", () => {

    const ruleTester = new RuleTester({
        parserOptions: {
            ecmaVersion: 2019
        }
    });

    describe("rule()", () => {

        it("should throw an error when the argument is missing", () => {            
            assert.throws(() => {
                rule();
            }, /rule\(\) requires an object argument/);
        });

        it("should throw an error when the argument is null", () => {
            assert.throws(() => {
                rule(null);
            }, /rule\(\) requires an object argument/);
        });

        it("should throw an error when the argument is a string", () => {
            assert.throws(() => {
                rule("null");
            }, /rule\(\) requires an object argument/);
        });

        it("should warn when a matching node is found", () => {

            ruleTester.run("test-rule", rule({
                "Literal[raw=\"null\"]": "Do not use null",
                "VariableDeclaration[kind=var]": "Use either 'let' or 'const' instead of 'var'."
            }), {
                valid: [ "let x = undefined", "let = 'null'" ],
                invalid: [
                    {
                        code: "null",
                        errors: [
                            {
                                message: "Do not use null"
                            }
                        ]
                    },
                    {
                        code: "var x = 5;",
                        errors: [
                            {
                                message: "Use either 'let' or 'const' instead of 'var'."
                            }
                        ]
                    }
                ]
            });
        });

    });

});
