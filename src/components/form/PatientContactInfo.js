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
      <div className="form-container" title="Patient Registration">
      <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>
{/*begin personal information*/}
        <h3>Personal Information</h3>
        <div className="form-group" style={{ display: "flex", flexDirection: "column", size: "50" }}>
          {/* FirstName */}
          <label htmlFor="firstName">First Name: </label>
          <input type="text" className="form-control" name="firstName" onChange={inputChange('firstName')} value={values.firstName} />
          {/* LastName */}
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" className="form-control" name="lastName" onChange={inputChange('lastName')} value={values.lastName} />
          {/* dob */}
          <label htmlFor="dob">Date of Birth: </label>
          <input type="date" className="form-control" name="dob" onChange={inputChange("dob")} value={values.dob} placeholder="mm/dd/yyyy" />
          {/* Marital Status */}
          <form onChange={inputChange("marital")} value={values.marital}>
            <p>Marital Status:</p>
            <input type="radio" id="single" name="marital" value="single" checked />
            <label htmlFor="single">Single</label>
            <input type="radio" id="married" name="marital" value="married" />
            <label htmlFor="married">Married</label>
            <input type="radio" id="widowed" name="marital" value="widowed" />
            <label htmlFor="widowed">Widowed</label>
            <input type="radio" id="separated" name="marital" value="separated" />
            <label htmlFor="separated">Separated</label>
            <input type="radio" id="divorced" name="marital" value="divorced" />
            <label htmlFor="divorced">Divorced</label>
          </form>
        </div>
        <br />
{/*End Personal Information*/}
{/*Begin Contact Information*/}
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <div className="form-group">
            <h3>Contact Information</h3>
            {/* phone */}
              <label htmlFor="phone">Phone Number: </label>
              <input type="tel" className="form-control" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={inputChange("phone")} value={values.phone} required />
              {/* E-email */}
              <label htmlFor="email">E-Mail: </label>
              <input type="email" className="form-control" name="email" onChange={inputChange("email")} value={values.email} palceholder="info@bellchirostl.com" required />
              <br/>
            {/* Address */}
            Address:<br/>
            <label htmlFor="address">Street:</label>
            <input type="text" className="form-control" name="address" onChange={inputChange("address")} value={values.address} required />
            <br/>
            {/* City */}
            <label htmlFor="city">City: </label>
            <input type="text" className="form-control" name="city" onChange={inputChange("city")} value={values.city} required />
            <br/>
            {/* State */}
            <label htmlFor="state">State: </label>
            <input type="text" className="form-control" name="state" onChange={inputChange("state")} value={values.state} maxLength="2" required />
            <br/>
          {/* Zip */}
            <label htmlFor="zip">Zip Code: </label>
            <input type="text" className="form-control" name="zip" onChange={inputChange("zip")} value={values.zip} maxLength="5" pattern="[0-9]{5}" required />
          </div>
        </div>
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: "center" }}>
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
