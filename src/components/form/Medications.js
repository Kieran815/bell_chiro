import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Medications extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    const { inputChange } = this.props;

    return(
      <div className="form-container" title="Patient Registration" style={{display: "center"}}>
      <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>
        <h3>Basic Medical Information</h3>
  {/*begin Conditions Radio Buttons*/}
        <h3>Medications:</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <form onChange={inputChange('takingMeds')}>
            <p>Currently Taking Medication?:</p>
              <input type="radio" id="Yes" name="takingMeds" value="Yes" />
              <label htmlFor="Yes">Yes</label><br/>
              <input type="radio" id="No" name="takingMeds" value="No" checked />
              <label htmlFor="No">No</label><br/>
          </form>
          <form onChange={inputChange('perscriptions')} style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="perscriptions">Current Perscriptions:</label>
          <textarea id="perscriptions" rows="4" cols="50" />
          </form>
        </div>
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.back}
          >
            Back
          </Button>
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

export default Medications;
