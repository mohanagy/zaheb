import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

import {
  Group, CurvedHeader, FavoriteCard, ScrollContainer,
} from 'components'
import redHeart from '../../assets/red_heart.png'

const screen = Dimensions.get('screen')

class Favorites extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home Store',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
      color: '#ffffff',
    },
    headerStyle: {
      backgroundColor: '#1E1E1E',
    },
    headerRight: (
      <FontAwesome5
        name="bell"
        size={18}
        onPress={() => navigation.navigate('Notifications')}
        solid
        style={{
          marginRight: 10,
          color: '#ffffff',

        }}
      />),
    headerLeft: (
      <FontAwesome5
        name="stream"
        size={18}
        onPress={() => navigation.toggleDrawer()}
        solid
        style={{
          marginLeft: 10,
          color: '#ffffff',

        }}
      />),
  });

    componentDidMount =async () => {
      const { actions:{ getMyFavorites } } = this.props
      await getMyFavorites()
    }

    handlePress =async () => {
      const { navigation:{ navigate } } = this.props
      navigate('Products')
    }

    render() {
      const { storeData:{ favorites } } = this.props
      return (
        <ScrollContainer
          contentContainerStyle={{
            marginBottom: 0,
            paddingBottom: 0,
            justifyContent: 'flex-start',
          }}
        >
          <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
            <CurvedHeader type="image" source={redHeart} style={{ marginBottom: 100 }} />
            {favorites.map(({ id ,product }) => <FavoriteCard key={id} product={product} onPress={this.handlePress} />)}
          </Group>
        </ScrollContainer>
      )
    }
}

Favorites.propTypes = {}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  common: state.common,
  userData:state.userData,
})

Favorites.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites)
