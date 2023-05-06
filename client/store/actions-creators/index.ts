import * as ListActionCreators from '../actions-creators/list'
import * as UserActionCreators from '../actions-creators/user'


export default {
    ...ListActionCreators,
    ...UserActionCreators
}