/**
 * Created by lakshmi on 04/06/18.
 */
import React from 'react';
import '../../Components/Home/style.css';

export default class SideBar extends React.Component {

    render() {

        let Tabs = this.props.tabs.map((tabName, index) =>{
            let menutabName = this.props.tabName ? this.props.tabName.toLowerCase() : '';
            return <li key={index} onClick={()=>this.props.changeTab(tabName)} className={menutabName === tabName? 'active':null}>{tabName.toUpperCase()}</li>
        });

        return (
            <div className="left-sidebar">
                <h3 className="title">{this.props.title}</h3>
                <ul className="nav-list">
                    {Tabs}
                </ul>
            </div>
        );
    }
}