import React from 'react';
import './style.css';

import Page from '../../HOC/Page';
import ClickButton from '../../UI/Button';
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
            sStyleClass: 'red'
        };

    }

    /** Change button color **/
    changeColor(className){
        this.setState({sStyleClass: className});
    }


    render() {

        /** Calling button component <ClickButton> for creating 4 kind of button with different properties **/
        let RedButton = <ClickButton title='Red' sClass='danger' changeTextColor={this.changeColor.bind(this,'red')} />
        let GreenButton = <ClickButton title='Green' sClass='success' changeTextColor={this.changeColor.bind(this,'green')}/>
        let BlueButton = <ClickButton title='Blue' sClass='primary' changeTextColor={this.changeColor.bind(this,'blue')}/>
        let OrangeButton = <ClickButton title='Orange' sClass='warning' changeTextColor={this.changeColor.bind(this,'orange')}/>


        return (
            /** Common Page wraper **/
            <Page>
                <div className={'row center-block'}>
                    <div className="container">
                            <h1 className={this.state.sStyleClass} >React With docker-compose </h1>
                    </div>
                    <div className="container">
                        {RedButton}
                        {GreenButton}
                        {BlueButton}
                        {OrangeButton}
                    </div>
                </div>
            </Page>

        ); 
    }
}