const path =require('path');

const webpackconfig={
    entry:'./src/js/test.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        port:8088
    }
}

module.exports = webpackconfig;

