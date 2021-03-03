import React, { Component } from 'react';

class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='card animated fadeInLeft'>
        <div className='card-body'>
          <h3 className='card-title'>Personal Info</h3>
          <hr />
        </div>
        <form onSubmit={this.continue}>
          <div className='row col-lg-10 mx-auto'>
            <div className='col-lg-4 text-left'>
              <label>Name*</label>
              <input
                type='text'
                name='name'
                className='form-control'
                onChange={handleChange}
                defaultValue={values.status === 1 ? '' : values.name}
                required
              />
            </div>
            <div className='col-lg-4 text-left'>
              <label>Email*</label>
              <input
                type='email'
                name='email'
                className='form-control'
                onChange={handleChange}
                defaultValue={values.status === 1 ? '' : values.email}
                required
              />
            </div>
            <div className='col-lg-4 text-left'>
              <label>Mobile*</label>
              <input
                type='text'
                name='phone'
                className='form-control'
                onChange={handleChange}
                defaultValue={values.status === 1 ? '' : values.phone}
                required
              />
            </div>
          </div>
          <br />
          <div className='row col-lg-10 mx-auto'>
            <div className='col-lg-12 text-left'>
              <label>
                Skills*
              </label>
              <input
                type='text'
                name='skills'
                className='form-control'
                defaultValue={values.status === 1 ? '' : values.skills}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className='container text-center'>
            <button type='submit' className='btn btn-info'>
              Next
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
