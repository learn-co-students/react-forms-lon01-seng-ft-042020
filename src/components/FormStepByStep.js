Form elements include < input >, <textarea>, <select>

  -For <input>, <textarea>, and <option>, we use value, as we have seen.

-For <input type="checkbox"> and <input type="radio">, we use checked

    // CONTROLLER COMPONENTS (check for value or defaultValue.
    If the component has a value prop, it is controlled (the state of the component is being controlled by React).)

    1. define state

state = {
        firstName: "John",
        lastName: "Henry",
}

2. render form with input and name and value and updating state via Form

render() {
  return (
    <form>
        <input type="text" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
  )
}


3.invoke anonymous function that accepts event as its argument

handleFirstNameChange = event => {
        this.setState({
          firstName: event.target.value
        })
      }

handleLastNameChange = event => {
        this.setState({
          lastName: event.target.value
        })
      }

4. Submit the form
  - add onSubmit to form
    - call anonymous function to handle submit

render() {
  return (
    <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />
        <input
          type="text"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
      </form>
  )
}

handleSubmit = event => {
        event.preventDefault()
  //putting together the current form data using the values stored in state.
  let formData = {firstName: this.state.firstName, lastName: this.state.lastName }
  // sending the data
  this.sendFormDataSomewhere(formData)
}

//UNCONTROLLER COMPONENTS
- parent Component for form (form as a child)
- ParentComponent can maintain all the functions while Form just handles the display of JSX:

handleSubmit = event => {
        event.preventDefault()
  const firstName = event.target.children[0].value
  const lastName = event.target.children[1].value
  this.sendFormDataSomewhere({firstName, lastName})
}

handleSubmit = event => {
        event.preventDefault()
  this.sendFormDataSomewhere(this.state)
}


// src/components/ParentComponent
import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
        state = {
          firstName: "",
          lastName: "",
        }

        handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }      

        // handleFirstNameChange = event => {
        //       this.setState({
        //         firstName: event.target.value
        //       })
        //     }

        // handleLastNameChange = event => {
        //       this.setState({
        //         lastName: event.target.value
        //       })
        //     }

        render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        // handleFirstNameChange={this.handleFirstNameChange}
        // handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}

export default ParentComponent;



// src/components/Form
import React from 'react';

class Form extends React.Component {
        render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;


import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent'

ReactDOM.render(
  <div>
        <ParentComponent />
      </div>,
  document.getElementById('root')
);


//addidng sibling for form to store data

// src/components/DisplayData
import React from 'react';

class DisplayData extends React.Component {
        render() {
    return (
      <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
      </div>
    )
  }
}
 
export default DisplayData