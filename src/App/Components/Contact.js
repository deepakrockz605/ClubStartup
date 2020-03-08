import React from "react";
import "../CSS/Contact.scss";

function Contact() {
  return (
    <section id="contact">
      <div className="">
        <h3 className="section--header text-center">Contact US</h3>
        <div className="contactRow" id="parent">
          <div className="col-md-6">
          <iframe
           src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaY32Qm3KWTkRuOnKfoIVZws&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY"
           height='320px'
           width='100%'
           frameBorder = '0'
           border = '0'
           />

            
          </div>

          <div className="col-sm-6">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="nm"
                  placeholder="Name"
                  required={true}
                  
                />
              </div>

              <div className="form-group form_left">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="em"
                  placeholder="Email"
                  required=""
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  maxLength={10}
                  placeholder="Mobile No."
                  required=""
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control textarea-contact"
                  rows="5"
                  id="comment"
                  name="FB"
                  placeholder="Type Your Message/Feedback here..."
                  required=""
                ></textarea>
                <button className="btn btn-default btn-send">
                  <span className="glyphicon glyphicon-send"></span> Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
