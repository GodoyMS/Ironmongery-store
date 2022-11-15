
module.exports={
    entry:'./src/app/index.js',
    output:{
        path:__dirname + '/src/public',
        filename:'bundle.js',
        publicPath: '/'
        
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
              },
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude: /node_modules/                              
                
            },
            {
				test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "src/public/assets"
					}
				}
			}

            
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
      }
};