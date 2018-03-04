let path = require('path'),
    webpack =require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
let ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH,'dist'),
    APP_APTH = path.resolve(ROOT_PATH,'src');

    module.exports = {
        entry:{
            app:path.resolve(APP_APTH,'index.jsx')
        },
        output:{
            path:BUILD_PATH,
            filename:'bundle.js'
        },
        devServer:{
            historyApiFallback: true,
            hot: true,
            inline: false,
            progress: true
        },
        resolve:{
            extensions:['.js','.jsx']
        },
        module:{
            loaders:[
                {
                    test:/\.jsx?$/,
                    loaders:['babel-loader'],
                    include:APP_APTH
                },{
                    test:/\.scss$/,
                    loaders:['style-loader','css-loader','sass-loader']
                }
            ],
            // preLoaders:[
            //     {
            //         test:
            //     }
            // ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'Flyer-UI React 版'
            })
        ]
    }