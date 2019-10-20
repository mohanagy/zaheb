import React, { Component } from 'react'
import {
  Group, ScrollContainer, CurvedHeader, RequestDetailsCard, SplashButton,
} from 'components'
import { Dimensions } from 'react-native'

import seats from '../../assets/purchase_image.png'

const screen = Dimensions.get('screen')

class RequestDetails extends Component {
  render() {
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <CurvedHeader type="image" source={seats} />
          <RequestDetailsCard
            style={{ marginBottom: 50 }}
            requestName="Back seats"
            requestDate="19/8/2018 7:22 AM"
            startingDate="19/9/2018"
            ofToHour="6:00 PM-3:00 PM"
            location="Gaza"
            orderStatus="Canceled"
            driverName="Said Sayeed"
            supplierName="Marwan Jameel"
          />
          <Group style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <SplashButton
              title="Cancel Request"
              style={{
                buttonStyle: {
                  backgroundColor: '#1E1E1E',
                  paddingHorizontal: 15,
                  borderRadius: 99 ** 9,
                  width: 180,
                },
              }}
            />
            <SplashButton
              title="Request Done"
              style={{
                buttonStyle: {
                  backgroundColor: '#707070',
                  paddingHorizontal: 15,
                  borderRadius: 99 ** 9,
                  width: 180,
                },
              }}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

RequestDetails.propTypes = {

}

export default RequestDetails
