import React, { Component } from 'react'
import { View } from 'react-native'
import profilePic from 'assets/profilePic.png'
import {
  ProfileAvatar, ScrollContainer, Group,
  Details, Tube, Switch, IncrementalInput, TouchableButton, WhiteLabel,
  Select,
} from 'components'
export class OrderTube extends Component {
  static navigationOptions = {
    title: 'طلب اسطوانة غاز',
    headerRight: (
      <ProfileAvatar
        size="small"
        source={profilePic}
        style={{
          containerStyle: {
            paddingRight: 10,
            height: '50%',
          },
        }}
        rounded
        title="MT"
        activeOpacity={0.7}

      />),
    headerTitleStyle: {
      fontFamily: 'HelveticaNeueW23forSKY-Bd',
      fontWeight: '200',
    },
  };

  state = {
    selectedTube: 1,
    tubes: [
      {
        id: 1,
        size: 48,
      },
      {
        id: 2,
        size: 36,
      },
      {
        id: 3,
        size: 24,
      },
      {
        id: 4,
        size: 12,
      },
      {
        id: 5,
        size: 5,
      },
      {
        id: 6,
        size: 0,
      },
    ],
  }


  selectTube = (id) => {
    this.setState({
      selectedTube: id,
    })
  }

  render() {
    const { tubes, selectedTube } = this.state
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
            height: '100%',
          }
          }
        >
          <Group>
            <Details
              text="إختر وزن إسطوانة الغاز المناسب لك"
              style={{
                color: '#99a9bf',
                textAlign: 'left',
              }}
            />
            <Group
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >

              {tubes.map(tube => (
                <Tube
                  style={{
                    image: {
                      height: 60,
                      width: 47,
                      marginLeft: 15,
                      marginTop: 5,
                    },
                  }}
                  onPress={this.selectTube}
                  selected={selectedTube}
                  {...tube}
                >
                </Tube>
              ))}
            </Group>
          </Group>
          <Group>
            <Details
              text="اختر نوع الطلب"
              style={{
                color: '#99a9bf',
                textAlign: 'left',
              }}
            />
            <Group
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                alignItems: 'center',

              }}
            >
              <Switch options={['عادي', 'مستعجل']} />

              <Switch options={['جديد', 'إعادة تعبئة']} />
            </Group>
          </Group>
          <Group>
            <Details
              text="اختر الكمية"
              style={{
                color: '#99a9bf',
                textAlign: 'left',
              }}
            />
            <IncrementalInput />
          </Group>
          <Group>
            <Details
              text="اختر العنوان"
              style={{
                color: '#99a9bf',
                textAlign: 'left',
              }}
            />
            <Select />
          </Group>
          <Group
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}
          >
            <WhiteLabel
              title="السعر : 45 شيكل"
              style={{
                borderRadius: 5,
                width: '40%',
                marginLeft: 10,
              }}
            />
            <TouchableButton
              title="إضغط هنا للطلب"
              style={{
                buttonStyle: {
                  height: 50,
                },
                containerStyle: {
                  borderRadius: 5,
                  width: '40%',
                },
                titleStyle: {
                  fontFamily: 'HelveticaNeueW23forSKY-Bd',
                  fontSize: 12,
                },
              }}
            />
          </Group>

        </ScrollContainer>
      </View>
    )
  }
}

export default OrderTube
