import React, { Component } from 'react'
import { ScrollContainer, ProductCard, Group } from 'components'
import { ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'
import I18n from '../../utilites/i18n'

class Products extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('products'),
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
      />
    ),
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
      />
    ),
  });

  state = {
    search: '',
    filteredProductsState: [],
  };

  componentDidMount = async () => {
    const {
      actions: { getProductsByFilters },
      storeData: { productsFilter },
    } = this.props
    await getProductsByFilters(productsFilter)
  };

  handleSelectProduct = async (id) => {
    const {
      actions: { selectProduct },
      navigation: { navigate },
    } = this.props
    await selectProduct(id)
    navigate('ProductOptions')
  };

  handleAddToFavorite = async (id) => {
    const {
      actions: { addToFavorite, getProductsByFilters },
      storeData: { productsFilter },
    } = this.props
    await addToFavorite(id)
    await getProductsByFilters(productsFilter)
  };

  handleSearch = (text) => {
    const {
      storeData: { filteredProducts },
    } = this.props

    this.setState({
      search: text,
    })
    if (!text) {
      this.setState({
        filteredProductsState: filteredProducts,
      })
    }
    const filtered = filteredProducts.filter((product) =>
      product.name.includes(text)
    )
    this.setState({
      filteredProductsState: filtered,
    })
  };

  render() {
    const {
      storeData: { filteredProducts, isFetching },
    } = this.props

    const {filteredProductsState,search} = this.state
    const data = filteredProductsState.length || search ? filteredProductsState : filteredProducts

    if (isFetching) {
      return (
        <Group
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}>
        <Input
          placeholder="Search" onChangeText={this.handleSearch}
          containerStyle={{
            marginVertical:20,

          }}
        />

        {data.map(({ id, ...purchase }) => (
          <ProductCard
            handleAddToFavorite={() => this.handleAddToFavorite(id)}
            key={id}
            {...purchase}
            onPress={() => this.handleSelectProduct(id)}
          />
        ))}
      </ScrollContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions, ...usersActions }, dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

Products.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
