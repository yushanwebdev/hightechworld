import React, { Component } from "react";
import styled from "styled-components";

class Contact extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    alert("Submission Successful");
  };

  render() {
    return (
      <ContactUs>
        <div className="container">
          <h2>Contact Us</h2>
          <form
            className="row"
            name="contact"
            method="POST"
            action="/contact/"
            data-netlify="true"
          >
            <div className="col-md-6 form-item">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Type your name here"
              />
            </div>
            <div className="col-md-6 form-item">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Type your email here"
              />
            </div>
            <div className="col-md-6 form-item">
              <label htmlFor="phone" className="form-label">
                Telephone No
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Type your phone no here"
              />
            </div>
            <div className="col-md-6 form-item">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Type your message here"
                rows="4"
              ></textarea>
            </div>
            <div className="text-end">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </ContactUs>
    );
  }
}

export default Contact;

const ContactUs = styled.div`
  background-color: #f9f9f9;
  padding: 40px 0;

  .form-item {
    margin-bottom: 25px;

    input {
      height: 32px;
    }

    input,
    textarea {
      font-size: 12px;
    }
  }

  .text-end {
    .btn-primary {
      padding: 6px 21px;
      font-size: 14px;
    }
  }

  @media (min-width: 1366px) {
    h2 {
      margin-bottom: 30px;
    }
  }
`;
