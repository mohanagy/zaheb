import React from 'react'
import PropTypes from 'prop-types'
import { Group, DetailsLabel, ColorFullButton } from 'components'
const ClientInfoCard = ({ clientName, phoneNumber }) => (
  <Group
    style={{
      elevation: 2,
      marginHorizontal: 24,
      marginVertical: 12,
      backgroundColor: '#ffffff',
      padding: 10,
    }}
  >
    <Group>
      <DetailsLabel
        label="إسم الزبون"
        value={clientName}
      />
      <DetailsLabel
        label="رقم الجوال"
        value={phoneNumber}
      />
    </Group>
    <ColorFullButton
      icon="phone"
      title="إتصل بمقدم الطلب"
      color="#13ce66"
    />
  </Group>
)

ClientInfoCard.propTypes = {
  clientName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
}
export default ClientInfoCard
