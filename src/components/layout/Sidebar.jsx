import React, {Component} from 'react'

import AdsPanel from '../sidebar/AdsPanel'
import CommunityPanel from '../sidebar/CommunityPanel'

export default class Sidebar extends Component {

    render() {
        return (
            <div id="sidebarInner">
                <AdsPanel />
                <CommunityPanel />
            </div>
        )
    }
}