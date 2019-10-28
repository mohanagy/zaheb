import React, { Component } from 'react'
import {
  Group, ScrollContainer,Title ,Details,SplashButton,Logo,
} from 'components'
import { Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect  } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'

class ProductOptions extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Product Options',
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

}

render() {
  x
  return (
    <Group
      style={{
        height:'100%',
        backgroundColor:'white',
      }}
    >
      <ScrollContainer
        style={{ backgroundColor:'red' }}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          flex:1,
        }}
      >

        <Group style={{ flexDirection: 'row',backgroundColor:'white',justifyContent: 'center'  }}>
          <Logo
            source={null}
          />
          <Group>
            <Title style={{ color:'black' }} text="Lexlies" />
            <Details style={{ color:'black' }} text="2019/202" />
            <Details style={{ color:'black' }} text="By Ahmed" />
            <Group style={{ flexDirection:'row',alignItems:'center',justifyContent: 'center' }}>
              <Title text="$50" style={{ color:'black' }} />
              <FontAwesome5 name="heart" size={20} />
            </Group>
          </Group>
        </Group>
        <Group style={{ justifyContent:'flex-start' ,alignItems:'flex-start' }}>
          <Title style={{ color:'black' }} text="Description" />
          <Details style={{ color:'black' }} text="lkasfklsaklf" />
        </Group>
        <Group>

        </Group>
        <Group
          style={{
            justifyContent: 'space-around',alignItems: 'center' ,backgroundColor:'white',flex:1,
          }}
        >
          <SplashButton title="Place Order" />
        </Group>


      </ScrollContainer>
    </Group>
  )
}
}


const styles = {
  text: {
    color: '#1E1E1E',
    marginHorizontal: 0,
  },
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  common: state.common,
  userData:state.userData,
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductOptions)
