const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"],
            },
            {
                test :  /\.(png|jpg|gif)$/i,
                use : ["file-loader"],
                type: 'javascript/auto'
                // type: 'asset/resource',
            }
        ]
    },
    mode : "development",
}