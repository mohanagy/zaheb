import React, { Component } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Dimensions, TouchableOpacity } from 'react-native'

import { Group } from 'components'

const screen = Dimensions.get('screen')

const EmptyContent = () => <Group />

class Tabs extends Component {
  state = { activeTab: this.props.defaultActiveTab }

  onTabChange = (nextTab,handleChatIcon,workShopProfile) => {
    this.setState((state) => ({ ...state, activeTab: nextTab }))
    handleChatIcon(workShopProfile.id,workShopProfile.name,workShopProfile.image)
  }

  render() {
    const { options, tabsWrapperStyle,workShopProfile } = this.props
    const { activeTab } = this.state
    const { activeContent: ContentComponent = EmptyContent } = options.find(({ key }) => key === activeTab)

    return (
      <Group>
        <Group style={{ ...styles.tabsWrapperStyle, ...tabsWrapperStyle }}>
          {
            options && options.map(({ icon, key,handleChatIcon }) => (
              <TouchableOpacity onPress={() => this.onTabChange(key,handleChatIcon,workShopProfile)}>
                <Group
                  style={{ ...styles.tabIconStyle, ...(activeTab === key ? styles.activeTabIconStyle : {}) }}
                >
                  <FontAwesome5 style={styles.iconStyle} name={icon} size={20} />
                </Group>
              </TouchableOpacity>
            ))
          }
        </Group>
        <Group style={styles.tabContentStyle}>
          <ContentComponent workShopProfile={workShopProfile} />
        </Group>
      </Group>
    )
  }
}

Tabs.propTypes = {
}

const styles = {
  iconStyle: {
    color: '#FFF',
  },
  tabIconStyle: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 99 ** 9,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabIconStyle: {
    backgroundColor: '#BE1522',
  },
  tabsWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0.1 * screen.width,
    marginVertical: 15,
  },
  tabContentStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
}

export default Tabs
