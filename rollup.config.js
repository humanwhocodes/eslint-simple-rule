import minify from "rollup-plugin-babel-minify";

export default [
    {
        input: "src/rule.js",
        output: [
            {
                file: "dist/rule.cjs.js",
                format: "cjs"
            },
            {
                file: "dist/rule.js",
                format: "esm"
            }
        ]
    },
    {
        input: "src/rule.js",
        plugins: [minify({
            comments: false
        })],
        output: {
            file: "dist/rule.min.js",
            format: "esm"
        }
    }    
];
