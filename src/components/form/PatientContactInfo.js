import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class PatientContactInfo extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    const { values, inputChange } = this.props;

    return(
      <div className="form-container" title="Patient Registration" style={{display: "center"}}>
      <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>
{/*begin personal information*/}
        <h3>Personal Information</h3>
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          {/* FirstName */}
          <label htmlfor="firstName">First Name: </label>
          <input type="text" className="form-control" name="firstName" onChange={inputChange('firstName')} value={values.firstName} required />
          <br />
          {/* LastName */}
          <label htmlfor="lastName">Last Name: </label>
          <input type="text" className="form-control" name="lastName" onChange={inputChange('lastName')} value={values.lastName} required />
          <br />
          {/* dob */}
          <label htmlfor="dob">Date of Birth: </label>
          <input type="date" className="form-control" name="dob" onChange={inputChange("dob")} value={values.dob} placeholder="mm/dd/yyyy" required />
          {/* Marital Status */}
          <form onChange={inputChange("marital")} value={values.marital} required>
            <p>Marital Status:</p>
            <input type="radio" id="single" name="marital" value="single" />
            <label for="single">Single</label>
            <input type="radio" id="married" name="marital" value="married" />
            <label for="married">Married</label>
            <input type="radio" id="widowed" name="marital" value="widowed" />
            <label for="widowed">Widowed</label>
            <input type="radio" id="separated" name="marital" value="separated" />
            <label for="separated">Separated</label>
            <input type="radio" id="divorced" name="marital" value="divorced" />
            <label for="divorced">Divorced</label>
          </form>
        </div>
        <br />
{/*End Personal Information*/}
{/*Begin Contact Information*/}
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
        {/* phone */}
          <label htmlfor="phone">Phone Number: </label>
          <input type="tel" className="form-control" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={inputChange("phone")} value={values.phone} required />
          <br />
          {/* E-email */}
          <label htmlfor="email">E-Mail: </label>
          <input type="email" className="form-control" name="email" onChange={inputChange("email")} value={values.email} palceholder="info@bellchirostl.com" required />
          <br/>
          <div className="form-group">
            <h3>Contact Information</h3>
            {/* Address */}
            Address:<br/>
            <label htmlfor="address">Street:</label>
            <input type="text" className="form-control" name="address" onChange={inputChange("address")} value={values.address} required />
            <br/>
            {/* City */}
            <label htmlfor="city">City: </label>
            <input type="text" className="form-control" name="city" onChange={inputChange("city")} value={values.city} required />
            <br/>
            {/* State */}
            <label htmlfor="state">State: </label>
            <input type="text" className="form-control" name="state" onChange={inputChange("state")} value={values.state} maxLength="2" required />
            <br/>
          {/* Zip */}
            <label htmlfor="zip">Zip Code: </label>
            <input type="text" className="form-control" name="zip" onChange={inputChange("zip")} value={values.zip} maxLength="5" pattern="[0-9]{5}" required />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </div>
    )
  }
}

export default PatientContactInfo;
