import { NavigationActions, StackActions } from 'react-navigation'

export const navigate = (dispatch) => (screen, params) => dispatch(StackActions
  .reset({ index: 0, actions: [NavigationActions.navigate({ routeName: screen, params })] }))
