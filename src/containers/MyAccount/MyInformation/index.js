import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import {
  ScrollContainer, Group,
  Details, Header, LabelWithText, LabelWithIcon, ColorFullButton,
} from 'components'
export class MyInformation extends Component {
  static navigationOptions = {
    title: 'حسابي',
    header: ({ state }) => (<Header goBack={state.params.goBack} />),
    tabBarLabel: 'بياناتي',
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
          }
          }
        >
          <Group
            style={{
              marginLeft: 10,
            }}
          >
            <LabelWithText
              label="الإسم"
              value="مصطفى محمد"
              style={{
                marginHorizontal: 10,
              }}
            />
            <LabelWithText
              label="جوال"
              value="0598287410"
              style={{
                marginHorizontal: 10,
              }}
            />
            <LabelWithText
              label="كلمة المرور"
              value="**********"
              style={{
                marginHorizontal: 10,
              }}
            />
          </Group>
          <Group>
            <Details
              text="العناوين"
              style={{
                color: '#99a9bf',
                textAlign: 'left',
              }}
            />
            <Group
              style={{
                marginLeft: 10,
              }}
            >
              <LabelWithIcon
                label="المنزل"
                type="edit"
                style={{
                  marginHorizontal: 10,
                }}
              />
              <LabelWithIcon
                label="العمل"
                type="edit"
                style={{
                  marginHorizontal: 10,
                }}
              />
              <LabelWithIcon
                label="إضافة عنوان جديد"
                type="add"
                style={{
                  marginHorizontal: 10,
                }}
              />
            </Group>
          </Group>
          <Group>
            <Details
              text="المزيد"
              style={{
                color: '#99a9bf',
                textAlign: 'left',
              }}
            />
            <Group
              style={{
                marginLeft: 10,
              }}
            >
              <Group
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}
              >

                <ColorFullButton
                  title="إرسال شكوى"
                  icon="envelope"
                  width="50%"
                  color="#F7BB3B"
                />
                <ColorFullButton
                  title="دعوة الأصدقاء"
                  width="50%"
                  icon="users"
                  color="#279EF9"
                />
              </Group>
              <ColorFullButton
                title="إتصل بنا الأن"
                color="#62CF68"
                icon="phone"

              />
            </Group>
          </Group>
        </ScrollContainer>
      </View>
    )
  }
}
MyInformation.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default MyInformation
