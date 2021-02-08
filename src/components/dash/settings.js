import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import AccountInfo from './account-info'
const panes = [
  { menuItem: 'اطلاعات کاربری', render: () => <Tab.Pane><AccountInfo /></Tab.Pane> },
  { menuItem: 'احراز هویت', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class VertfySettings extends Component {
  state = { activeIndex: 0 }

  handleRangeChange = (e) => this.setState({ activeIndex: e.target.value })
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <div>مراحل ثبت نام: {activeIndex}</div>
        <input
          type='range'
          max='2'
          value={activeIndex}
          onChange={this.handleRangeChange}
        />
        <Tab
          panes={panes}
          activeIndex={activeIndex}
          onTabChange={this.handleTabChange}
        />
      </div>
    )
  }
}

export default VertfySettings
