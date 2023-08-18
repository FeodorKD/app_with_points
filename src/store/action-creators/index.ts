import * as pointsActionCreators from './points'
import * as onePointActionCreators from './onePointActions'

export default {
    ...onePointActionCreators,
    ...pointsActionCreators
}