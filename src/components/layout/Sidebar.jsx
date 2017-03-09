import React, {Component} from 'react'
import {withRouter} from 'react-router'

import AdsPanel from '../sidebar/AdsPanel'
import CommunityPanel from '../sidebar/CommunityPanel'

class Sidebar extends Component {

    render() {
        return (
            <div id="sidebarInner">
                <AdsPanel />
                <CommunityPanel />
            </div>
        )
    }
}

export default withRouter(Sidebar)