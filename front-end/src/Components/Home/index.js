import React from 'react';
import './style.css';

import Page from '../../HOC/Page';
import ClickButton from '../../UI/Button';
// import ElmLoader from '../../UI/Loader/ElmLoader';
import Loader from '../../UI/Loader/Loader';
import Overlay from "../../UI/Loader/Overlay";
// import Overlay from '../../UI/Loader/Overlay';

export default class Home extends React.Component {

    color = [];

    constructor(props){

        super(props);
        this.state = {
            sStyleClass: 'red',
            display: 'block',
            color: 'white',
        };

        this.color = [
            'red',
            'green',
            'yellow',
            'brown',
            'blue',
            'lightblue'
        ]

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

    replaceColor(index){
        let color = prompt("Please enter your favourate color:", "lightblue");
        this.color[index] = color;
    }


    render() {

        /** Calling button component <ClickButton> for creating 4 kind of button with different properties **/
        let RedButton = <ClickButton title='Red' sClass='danger' changeTextColor={this.changeColor.bind(this,'red')} />
        let GreenButton = <ClickButton title='Green' sClass='success' changeTextColor={this.changeColor.bind(this,'green')}/>
        let BlueButton = <ClickButton title='Blue' sClass='primary' changeTextColor={this.changeColor.bind(this,'blue')}/>
        let OrangeButton = <ClickButton title='Orange' sClass='warning' changeTextColor={this.changeColor.bind(this,'orange')}/>

        let elementRender = this.color.map((color, index) => {
            let classForChild = "size";
            if(index % 2 == 0){
                classForChild += " top";
            }
            console.log(classForChild);
            return (
                <Page key={index} wraperClass="col-sm-2 col-md-2 minHeightWidth center-block animated rubberBand" >
                    <div className={classForChild} style={{"background-color":color}} onClick={this.changeColor.bind(this,color)}>

                    </div>
                    {/* <button onclick={this.replaceColor(index)} >Replace {color} color</button>{color} */}
                </Page>
            )
        
        });    

        return (
            /** Common Page wraper **/

            <Page wraperClass="container">
            {/*<Page wraperClass="container" style={{"background-color":"green"}}>*/}

                <Page wraperClass="row">
                    {elementRender}
                </Page>

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