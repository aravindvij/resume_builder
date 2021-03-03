import React, { Component } from 'react';

import axios from 'axios';
import { saveAs } from 'file-saver';

class Extras extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.submitted();
    this.props.nextStep();
    const data = this.props.values;

    axios
      .post('/create-pdf', data)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'Resume.pdf');
      });

    e.target.reset();
  };

  render() {
    return (
      <div className='card animated fadeInLeft'>
        <div className='card-body'>
          <h3 className='card-title'>Generate Resume</h3>
          <hr />
        </div>
        <form onSubmit={this.formSubmit}>
          <div className='container text-center'>
            <button type='button' className='btn btn-info' onClick={this.back}>
              <i className='fas fa-angle-left mr-1'></i>Back
            </button>
            <button type='submit' className='btn btn-info'>
              Download PDF<i className='fas fa-download ml-1'></i>
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Extras;
