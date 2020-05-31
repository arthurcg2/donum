import React,{Component} from 'react';
import Input from '../../atoms/InputStandart';
import ButtonStandart from '../../atoms/ButtonStandart';

export default class formStandard extends Component {
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <Input
                    placeholder='Username'
                    authorization={true}
                />
                <Input
                    placeholder='Email'
                    type='email'
                    authorization={true}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    minimunvalue={6}
                    authorization={true}
                />
                 <Input
                    placeholder='Confirm password'
                    type='password'
                    minimunvalue={6}
                    authorization={true}
                />
                <button type='submit'>
                    <ButtonStandart
                        title='Continue'
                    />
                </button>
            </form>
        )
    }
}