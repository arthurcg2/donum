import React,{Component} from 'react';

import '../../../styles/Forms/inputTypeStandard.css';

export default class InputStandard extends Component{
    render(){
        if(this.props.authorization === true){
            return(
                <input
                    placeholder={this.props.placeholder}
                    min={this.props.minimunvalue}
                    type={this.props.type}
                    required
                />
            )
        } else {
            return(
                <input
                    placeholder={this.props.placeholder}
                    min={this.props.minimunvalue}
                    type={this.props.type}
                />
            )
        }
    }
}