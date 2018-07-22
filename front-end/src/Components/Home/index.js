import React from 'react';
import './style.css';

import Page from '../../HOC/Page';
import ClickButton from '../../UI/Button';
// import ElmLoader from '../../UI/Loader/ElmLoader';
import Loader from '../../UI/Loader/Loader';
import Overlay from "../../UI/Loader/Overlay";
// import Overlay from '../../UI/Loader/Overlay';

export default class Home extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            sStyleClass: 'red',
            display: 'block'
        };

        setTimeout(() => {
            this.setState({display:"none"});
        },2000)

    }

    /** Change button color **/
    changeColor(className){
        this.setState({sStyleClass: className});
    }

    endLoader(){

        if(this.state.sStyleClass === 'red'){
            this.setState({display: 'none'})
        }
    }


    render() {

        /** Calling button component <ClickButton> for creating 4 kind of button with different properties **/
        let RedButton = <ClickButton title='Red' sClass='danger' changeTextColor={this.changeColor.bind(this,'red')} />
        let GreenButton = <ClickButton title='Green' sClass='success' changeTextColor={this.changeColor.bind(this,'green')}/>
        let BlueButton = <ClickButton title='Blue' sClass='primary' changeTextColor={this.changeColor.bind(this,'blue')}/>
        let OrangeButton = <ClickButton title='Orange' sClass='warning' changeTextColor={this.changeColor.bind(this,'orange')}/>


        return (
            /** Common Page wraper **/

            <Page wraperClass="container">
            {/*<Page wraperClass="container" style={{"background-color":"green"}}>*/}

                {/*<Page wraperClass="container" style={{"background-color":"red"}}>*/}

                    {/*<Page wraperClass="col-sm-6 col-md-6" style={{"background-color":"white"}}>*/}
                        {/*hello buddy*/}
                    {/*</Page>*/}
                    {/*<Page wraperClass="col-sm-6 col-md-6" style={{"background-color": "blue"}}>*/}
                        {/*<Page wrapperClass="col-sm-12 col-md-8" style={{"padding": "20px"}}>*/}
                                {/*cool hun mai*/}
                        {/*</Page>*/}
                    {/*</Page>*/}

                {/*</Page>*/}

                {/*My button work*/}
                <Overlay hide={this.state.display} hideOverlay={this.endLoader.bind(this)}>

                    <Loader/>
                </Overlay>

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