/**
 * @fileoverview A utility for creating simple ESLint rules.
 */

/**
 * Creates an ESLint rule that warns when certain esquery selectors are found.
 * @param {Object} config An object whose keys are esquery selectors of nodes
 *      to match and whose values are messages to display when nodes matching
 *      those queries are found.
 * @returns {Object} An ESLint rule. 
 */
export function rule(config) {

    if (typeof config !== "object" || config === null) {
        throw new TypeError("rule() requires an object argument.");
    }

    return {
        meta: {},
        create(context) {
            const ruleConfig = {};

            Object.keys(config).forEach(key => {
                ruleConfig[key] = node => {
                    context.report({
                        node,
                        message: config[key]
                    });
                };
            });

            return ruleConfig;
        }
    };
}
