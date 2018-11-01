const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口
    entry:{
        //可以有多个入口，也可以有一个入口，如果一个就默认从这一个入口开始分析
         'main.js':'./src/main.js'
    },
    //出口
    output:{
        path:path.resolve('./dist'),//相对路径转绝对路径 node的API
        filename:'build.js'//有单引号的是可以随意变换的，没有单引号是固定的
    },
    //声明模块,包含各个loader，加载器
    module:{
        loaders:[//webpack后面版本叫做rules
            {test:/\.css$/,loader:'style-loader!css-loader'}, //css加载器，先解析css 文件再创建style标签插入页面中
            {test:/\.(png|jpg|jpeg|gif|svg)$/,loader:'url-loader?limit=130000'},//文件加载器，limit的值小于原图片大小会自动生成一张bsae64的文件图片
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'}, //less加载器
            {test:/\.js$/,loader:'babel-loader',exclude: /(node_modules|bower_components)/,
                    options:{
                        presets:['env'],//处理关键字
                        plugins:['transform-runtime'] //处理函数
                    }
            }, //js加载器，处理es6/7/8语法.使用babel-core@6版本的最好是使用babel-loader@7版本，不然会出现不兼容的现象，exclude排除node_modules里面的js文件
            {test:/\.vue$/,loader:'vue-loader'},//处理vue文件
        ]
    },
    plugins:[
        //插件的执行顺序与元素的索引有关
        new HtmlWebpackPlugin({
            template:"./src/index.html",//参照物
        })
    ],
    watch:true,
}