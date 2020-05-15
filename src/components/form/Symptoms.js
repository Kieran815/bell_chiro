import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Symptoms extends Component {

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
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>
          <h3>Symptoms:</h3>
          <form onChange={inputChange('ailments')} style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="ailments" />
            <textarea id="ailments" rows="4" cols="50" />
          </form>
          </div>
          <div>
            <h3>Additional Comments:</h3>
            <form onChange={inputChange('comments')} style={{display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="comments">Anything else you think we should know?</label>
              <textarea id="comments" rows="4" cols="25" />
            </form>
          </div>
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

export default Symptoms;
