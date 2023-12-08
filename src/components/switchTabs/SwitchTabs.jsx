import React, { useState } from 'react'
import './SwitchTabs.scss'

function SwitchTabs({ data, onTabChang }) {
    const [selectedTab, SetselectedTab] = useState('tabItem')
    const [left, SetLeft] = useState(0)

    const activeTab = (tab, index) => {
          SetLeft(index * 100)
          setTimeout(() => {
            SetselectedTab(index)
          }, 300);
          onTabChang(tab,index)

    }
    return (
        <div className="test">

        <div className='switchingTabs' >
            <div className="tabItems">
                {
                    data.map((tab, index) => (
                        <span className={`tabItem  ${selectedTab === index ? "active" : ""} `} key={index} onClick={()=> activeTab(tab,index)}>
                            {tab}

                        </span>
                    ))
                }
                <div className="movingBG" style={{left}}></div>
            </div>
        </div>
                            </div>
    )
}

export default SwitchTabs