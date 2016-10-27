/*var ExtractTextPlugin=require("extract-text-webpack-plugin");
*/
/*var JasmineWebpackPlugin = require('jasmine-webpack-plugin');*/

module.exports={
	entry:'./spec/unittest.js',
	output:{
		filename:'./bundle.js'
	},
	devServer:{
		contentBase:'./'
	}/*,
	module:{
		loaders:[
		{
			test:/\.(js|jsx)$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets:['es2015']
			}
		}
		
	]
},
 plugins: [new JasmineWebpackPlugin()]*/

};
