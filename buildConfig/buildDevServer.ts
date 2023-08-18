import type {Configuration as DevSererConfiguration} from 'webpack-dev-server'

export function buildDevServer(): DevSererConfiguration {
    return {
        port: 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}