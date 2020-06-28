import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Comonent { 
    state = { 
        firstName: '', 
        lastName: '' 
    }

    // handleFirstNameChange = () => { 
    //     this.setState({
    //         firstName: event.target.value 
    //     })
    // }

    // handleLastNameChange = () =>  {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleChange = (event) => { 
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    render() { 
        return (
            <>
            <Form 
                formData={this.state}
                // handleFirstNameChange={this.handleFirstNameChange}
                // handleLastNameChange={this.handleLastNameChange}
                handleChange={this.handleChange}
            /> 
            <DisplayData formData={this.state}/>
            </>
        )
    }
}

export default ParentComponent;