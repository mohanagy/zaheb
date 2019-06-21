import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import {
  Group, ScrollContainer, OrderDetailsBox, Maps, ClientInfoCard, DetailsLabel, ColorFullButton, SuccessfulOrderCard,
} from 'components'
import details from './details'


export default class CurrentOrderDetails extends Component {
    static navigationOptions = ({ navigation }) => {
      const { getParam } = navigation
      const { orderNumber } = getParam('order')
      return ({
        title: orderNumber,
        headerTitleStyle: {
          fontFamily: 'HelveticaNeueW23forSKY-Bd',
          fontWeight: '200',
        },
      })
    }

    state={

    }

    render() {
      const { navigation: { getParam } } = this.props
      const {
        orderNumber, stage, client: { clientName, phoneNumber }, price,
      } = getParam('order')
      return (
        <Group
          style={{
            backgroundColor: '#F9FAFC',
            flex: 1,

          }}
        >
          <ScrollContainer
            contentContainerStyle={{
              justifyContent: 'space-around',
            }
            }
          >
            <OrderDetailsBox
              stage={stage}
              details={details[orderNumber]}
              orderNumber={orderNumber}


            />
            <Maps
              options={{
                minZoomLevel: 4,
                initialRegion: {
                  latitude: 31.524465,
                  longitude: 34.442884,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                },
              }}
              style={
                {
                  container: {
                    height: '20%',
                    paddingVertical: 150,
                    marginBottom: 10,
                    borderRadius: 10,
                    marginHorizontal: 24,
                    justifyContent: 'center',

                  },
                  map: {
                    ...StyleSheet.absoluteFillObject,
                  },
                }
              }
            />
            <ClientInfoCard
              clientName={clientName}
              phoneNumber={phoneNumber}
            />

            {stage !== 4 ? (
              <Group
                style={{
                  flexDirection: 'row',
                  margin: 24,
                  justifyContent: 'space-between',
                }}
              >
                <DetailsLabel
                  label="السعر"
                  value={price}
                  textStyle={{
                    fontSize: 18,
                  }}
                />
                <ColorFullButton
                title={stage === 1 ? 'قبول الطلب' : stage === 2 ? 'توصيل الطلب':stage === 3 ? 'توصيل الطلب':'تم التوصيل'}//eslint-disable-line
                  titleStyle={{
                    color: '#ffffff',
                  }}
                  buttonStyle={{
                    justifyContent: 'center',
                  }}
                  containerStyle={{
                    width: 'auto',
                  }}
                  color={stage === 1 ? '#ff4949' : stage === 2 ? '#f7ba2a' : stage === 3 ? '#20a0ff' : '#ff4949'}//eslint-disable-line
                />

              </Group>
            )
              : (
                <Group>
                  <SuccessfulOrderCard
                    price={price}
                  />

                  <Group
                    style={{
                      margin: 24,
                    }}
                  >
                    <Group
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text
                        style={{
                          color: '#99a9bf',
                          fontFamily: 'HelveticaNeueW23forSKY-Bd',
                          alignSelf: 'center',
                          width: 80,
                        }}
                      >
                        السعر
                      </Text>
                      <ColorFullButton
                        title={price.replace('شيكل', '')}
                        titleStyle={{
                          color: '#233142',
                        }}
                        color="#ffffff"
                        containerStyle={{
                          width: '40%',
                        }}
                        buttonStyle={{
                          justifyContent: 'center',
                        }}
                      />
                      <ColorFullButton
                        title="تم الدفع"
                        titleStyle={{
                          color: '#ffffff',
                        }}
                        containerStyle={{
                          width: '40%',
                        }}
                        buttonStyle={{
                          justifyContent: 'center',
                        }}
                        color="#13ce66"
                      />


                    </Group>
                  </Group>

                  <Group
                    style={{
                      marginHorizontal: 24,
                      marginVertical: 12,
                    }}
                  >
                    <Group
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text
                        style={{
                          color: '#99a9bf',
                          fontFamily: 'HelveticaNeueW23forSKY-Bd',
                          alignSelf: 'center',
                          width: 80,
                        }}
                      >
                        رصيد سابق
                      </Text>
                      <ColorFullButton
                        title="0"
                        titleStyle={{
                          color: '#233142',
                        }}
                        color="#ffffff"
                        containerStyle={{
                          width: '40%',
                        }}
                        buttonStyle={{
                          justifyContent: 'center',
                        }}
                      />
                      <ColorFullButton
                        title="تم الدفع"
                        titleStyle={{
                          color: '#ffffff',
                        }}
                        containerStyle={{
                          width: '40%',
                        }}
                        buttonStyle={{
                          justifyContent: 'center',
                        }}
                        color="#13ce66"
                      />


                    </Group>
                  </Group>
                </Group>
              )
            }
          </ScrollContainer>
        </Group>
      )
    }
}


CurrentOrderDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
}
