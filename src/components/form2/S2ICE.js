import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const S2ICE = props => {
  const { state, action } = useStateMachine(updateAction);

  const { handleSubmit, errors, register } = useForm({
    defaultValues: {}
  });

  const { push } = useHistory();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between"}}>
        <div>
          <h3>Personal Information</h3>
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            label="First Name"
            placeholder="First Name"
            ref={register({ required: true})}
          />
          <br/>
          {errors.firstName && <span className="formError">*Enter First Name</span>}
          <br/>
          <label htmlFor="lastName">Last Name: </label>
          <input
            name="lastName"
            placeholder="Last Name"
            ref={register({ required: true})}
          />
          <br/>
          {errors.lastName && <span className="formError">*Enter Last Name</span>}
          <br/>
          <label htmlFor="dob">Date of Birth: </label>
          <input
            name="dob"
            type="date"
            ref={register({ required: true })}
          />
          <br/>
          {errors.dob && <span className="formError">*Select Date of Birth</span>}
          <br/>
          <label htmlFor="marital">Marital Status:</label>
          <select
            name="marital"
            type="select"
            ref={register({ required: true })}
          >
            <option value="" hidden>Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
          </select>
          <br/>
          {errors.marital && <span className="formError">*Select Marital Status</span>}
        </div>

        <div>
          <h3>Contact Information</h3>
          <label htmlFor="firstName">Phone Number: </label>
          <input
            name="phone"
            type="tel"
            placeholder="555-555-5555"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            ref={register({ required: true})}
          />
          <br/>
          {errors.phone && <span className="formError">*Enter Phone Number</span>}
          <br/>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            name="email"
            placeholder="info@bellchirostl.com"
            ref={register({ required: true })}
          />
          <br/>
          {errors.email && <span className="formError">*Enter E-Mail</span>}
        </div>
        <div>
          <h3>Address</h3>
          <label htmlFor="address">Street:</label>
          <input
            name="address"
            placeholder="Street Address"
            ref={register({ required: true })}
          />
          <br/>
          {errors.address && <span className="formError">*Enter Street Address</span>}
          <br/>
          <label htmlFor="city">City:</label>
          <input
            name="city"
            placeholder="City"
            ref={register({ required: true })}
          />
          <br/>
          {errors.city && <span className="formError">*Enter City/Township</span>}
          <br/>
          <label htmlFor="state">State:</label>
          <input
            name="state"
            placeholder="State"
            ref={register({ required: true })}
          />
          <br/>
          {errors.state && <span className="formError">*Enter State</span>}
          <br/>
          <label htmlFor="zip">Zip Code: </label>
          <input
            name="zip"
            placeholder="Zip Code"
            ref={register({ required: true })}
          />
          <br/>
          {errors.zip && <span className="formError">*Enter Zip Code</span>}
          {/* End of Line */}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}
