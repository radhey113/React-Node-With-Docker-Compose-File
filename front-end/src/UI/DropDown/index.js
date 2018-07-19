

import React from 'react';
import './style.css';
import { DropdownButton, FormGroup, Col, MenuItem } from 'react-bootstrap';

export default class DropDownList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : this.props.title ? this.props.title : '',
            managerData: ''
        };

    }

    async changeItem(manager){
        await this.setState({
            name : manager.name,
            managerData : manager
        });
        this.props.getSelectedManager(manager);
    }

    render() {
        return (
            <FormGroup controlId="formHorizontalEmail" className="formGroup">
                <Col sm={6} className="DropDownCol">
                    <DropdownButton
                        title={this.state.name}
                        id="dropdown-no-caret"
                    >
                        {
                            this.props.managerNames ?
                                this.props.managerNames.map((manager, key) => {
                                    return (
                                        <MenuItem id={key} key={key} eventKey={key} onClick={()=> this.changeItem(manager)}>{manager.name}</MenuItem>
                                    );
                                }) :
                                ''
                        }
                    </DropdownButton>
                </Col>
            </FormGroup>
        )
    }

    // return (
    //     <select className="manager-select" >
    //         <option value='null'>{props.title}</option>
    //         {
    //             props.managerNames ?
    //             props.managerNames.map((manager,key)=>{
    //                 return (
    //                     <option key={key} value={manager.id}>{manager.name}</option>
    //                 );
    //             }):
    //                 ''
    //         }
    //     </select>
    // )
};

