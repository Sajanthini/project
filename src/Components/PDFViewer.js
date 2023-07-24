import React, { Component } from 'react'
export class PDFViewer extends Component {
  render() {

    return (
      <div>
        <h1 style={{ textAlign: 'center', padding: '60px', margin: '60px', backgroundColor: 'lightblue' }}>Announcement</h1>
        <div class='container'>
          <div class='row'>
            <div class="col-md-4 image-container">
              <a href={require('../Report/AnnualReport.pdf')} target='_blank'>
                <figure>
                <img src="AR.jpg" alt="Logo" class='float-start' height={200} width={400} />
                <figcaption class='caption'>Annual Report<br></br><mark>Download here</mark></figcaption>
                </figure>
              </a>
            </div>
            <div class="col-md-7 image-container">
              <a href={require('../Report/AnnualReport.pdf')} target='_blank'>
                <img src="AR2.jpg" alt="Logo" class='float-end' height={200} width={400} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PDFViewer;