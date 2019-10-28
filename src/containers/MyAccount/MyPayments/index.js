import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  ScrollContainer, Group,
  Details, Switch, IncrementalInput, TouchableButton, ColorFullLabel,
  Select, Header, OrderDetailsLabel,
} from 'components'
export class MyPayments extends Component {
  static navigationOptions = {
    header: ({ state }) => (<Header goBack={state.params.goBack} />),
    tabBarLabel: 'المدفوعات',
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'HelveticaNeueW23forSKY-Reg',
      },
    },


  };

  componentDidMount() {
    const { navigation: { setParams, goBack } } = this.props
    setParams({ backButton: goBack })
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#F9FAFC',
          flex: 1,
        }}
      >
        <ScrollContainer
          contentContainerStyle={{
            marginLeft: 10,
            justifyContent: 'space-around',
          }}
        >
          <ColorFullLabel
            label="يوجد عليك ديون بقيمة"
            value="50 شيكل"
            color="#F75859"
            style={{
              containerStyle: {
                marginHorizontal: 10,
                justifyContent: 'flex-start',
                width: '90%',

              },
              titleStyle: {
                fontFamily: 'HelveticaNeueW23forSKY-Reg',
                fontSize: 12,

              },
            }}
          />
          <Group>
            <Group
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 15,
              }}
            >
              <Details
                text="تاريخ الطلب"
                style={{
                  color: '#99a9bf',
                  textAlign: 'right',
                }}
              />
              <Group
                style={{
                  flexDirection: 'row',
                }}
              >
                <Details
                  text="السعر"
                  style={{
                    color: '#99a9bf',
                    textAlign: 'right',
                  }}
                />
                <Details
                  text="المدفوع"
                  style={{
                    color: '#99a9bf',
                    textAlign: 'right',
                  }}
                />
                <Details
                  text="الباقي"
                  style={{
                    color: '#99a9bf',
                    textAlign: 'right',
                  }}
                />
              </Group>

            </Group>
            <OrderDetailsLabel
              date="21-مارس-2019"
              price={25}
              paid={0}
              remains={25}
            />
            <OrderDetailsLabel
              date="18-مارس-2019"
              price={50}
              paid={35}
              remains={15}
            />
            <OrderDetailsLabel
              date="10-مارس-2019"
              price={64}
              paid={64}
              remains={0}
            />
            <OrderDetailsLabel
              date="8-مارس-2019"
              price={25}
              paid={25}
              remains={0}
            />
            <OrderDetailsLabel
              date="4-مارس-2019"
              price={50}
              paid={50}
              remains={0}
            />
            <OrderDetailsLabel
              date="1-مارس-2019"
              price={64}
              paid={50}
              remains={14}
            />
            <OrderDetailsLabel
              date="1-مارس-2019"
              price={64}
              paid={40}
              remains={24}
            />
            <OrderDetailsLabel
              date="1-مارس-2019"
              price={50}
              paid={0}
              remains={50}
            />
            <OrderDetailsLabel
              date="1-مارس-2019"
              price={50}
              paid={40}
              remains={10}
            />

          </Group>

        </ScrollContainer>
      </View>
    )
  }
}
MyPayments.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default MyPayments
