import React from 'react';
import './style.css';

import Page from '../../HOC/Page';
// import SideBar from '../../UI/SideBar/SideBar';

// import {
//     TabNames,
//     ManagerNamesURL,
//     SupplyDataURL,
//     DataTypes,
//     UpdateDataURL,
//     AM_ID_FOR_REMOVAL,
// } from '../../Constants';

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <Page>
                <div className="container">
                        <h1>This is first react project with docker-compose</h1>
                </div>
            </Page>
        ); 
    }
}