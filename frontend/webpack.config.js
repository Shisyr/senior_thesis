const path = require('path');
const isProduction = typeof NODE_ENV !== 'undefined';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: './src/index.tsx',
        mode,
        devtool,
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        compilerOptions: {
                            'sourceMap': !isProduction
                        }
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    exclude: [
                        /node_modules/
                    ],
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]'
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
                    ]
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.min.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];
