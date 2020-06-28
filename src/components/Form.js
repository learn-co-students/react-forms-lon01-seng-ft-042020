import React from 'react';

class Form extends React.Component {

    render() { 
      return (
        <> 
        <form> 
          <input type="text" name="firstName"
          onChange={event => this.props.handleFirstNameChange(event)}
          value={this.props.formData.firstName}
          /> 
          <input type="text" name="lastName"
          onChange={event => this.props.handleLastNameChange(event)}
          value={this.props.formData.lastName}
          />
        </form>
        </>
      )
    }
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData = []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = (event) => { 
  //   event.preventDefault();
  //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => { 
  //   return this.state.submittedData.map (data => { 
  //       return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
  //   })
  // }

  // render() {
  //   return (
  //     <>
  //     <form onSubmit={event => this.handleSubmit(event)}>
  //       <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  //       <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
  //       <input type="submit" /> 
  //     </form>
  //     {this.listOfSubmissions()}
  //     </>
  //   )
  // }

}

export default Form;