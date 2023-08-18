import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function loaders() {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader = {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options:{
                        modules:{
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'

                        }

                    }
                }

            ],
    }
    return [
        typescriptLoader,
        cssLoader

    ]
}