import React, { Component } from 'react'
import {
  Group, ScrollContainer,Title ,Details,SplashButton,
} from 'components'
import { Image,ActivityIndicator } from 'react-native'
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
  const { actions:{ getProductByProductId },storeData :{ selectedProductId  } } = this.props
  await getProductByProductId(selectedProductId)
}

handlePressButton =async () => {
  const { navigation:{ navigate } } = this.props
  navigate('PaymentInformation')
}

render() {
  const { storeData:{ isFetching,product } } = this.props

  if (isFetching) { return (
    <Group
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" />
    </Group>
  ) }
  return (
    <Group
      style={{
        height:'100%',
      }}
    >
      <ScrollContainer
        contentContainerStyle={{
          justifyContent: 'flex-start',
          flex:1,
        }}
      >

        <Group
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems:'flex-start',
            marginTop: 31,
            padding:0,
            border: 0,
            marginLeft:30,

          }}
        >

          <Image
            source={{ uri:product.image }}
            style={{
              height: 143,
              width:170,
              borderWidth: 0,
              marginRight:15,
            }}
          />
          <Group
            style={{
              alignItems:'flex-start',
            }}
          >
            <Title style={{ color:'black',marginLeft:0  }} text={product.name} />
            <Details style={{ color:'black',marginLeft:0 }} text={product.number} />
            <Details style={{ color:'black' ,marginLeft:0 }} text={`By ${product.user.name}`} />
            <Group
              style={{
                flexDirection:'row',
                alignItems:'center',
                textAlign:'left',
                justifyContent:'flex-end',
                marginLeft:0,
              }}
            >
              <Details
                style={{
                  color:'black',
                  marginLeft:0,
                  backgroundColor:'#B0ABAB',
                  paddingHorizontal:13,
                  paddingTop:  1,
                  paddingBottom: 2,
                  borderRadius: 50,
                  fontSize:15,
                }}
                text={`$${product.cost}`}
              />

              <FontAwesome5 solid color="#B0ABAB" name="heart" size={20} />
            </Group>
          </Group>
        </Group>
        <Group
          style={{
            justifyContent:'flex-start' ,alignItems:'flex-start',marginLeft:10 ,marginTop:20,
          }}
        >
          <Title style={{ color:'black',fontSize: 19 }} text="Description" />
          <Details style={{ color:'black' ,textAlign:'justify' }} text={product.description} />
        </Group>
        <Group>

        </Group>
        <Group
          style={{
            justifyContent: 'space-around',alignItems: 'center' ,backgroundColor:'white',flex:1,
          }}
        >
          <SplashButton
            title="Place Order"
            onPress={() => this.handlePressButton()}
            style={{
              buttonStyle: {
                width: 150,
                backgroundColor: '#1E1E1E',
                borderRadius: 99 * 9,
              },
              containerStyle: {
                marginTop: 30,
                alignSelf: 'center',
              },
            }}
          />

        </Group>


      </ScrollContainer>
    </Group>
  )
}
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductOptions)
