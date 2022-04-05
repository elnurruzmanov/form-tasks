import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    checkName: false,
  };

  emailValidate = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = (e) => {
    if (e.target.email) {
      alert("👌congratulations");
    } else if (e.target.checkName) {
      alert("congratulations");
    } else if (e.target.checkName === false) {
      alert("please");
    } else {
      alert("Please accept our rulescd");
    }
  };

  render() {
    const { email, checkName } = this.state;

    return (
      <div className="new-info">
        <div className="container">
          <div className="new-card text-center">
            <div className="card-info">
              <h1 className="info">Contact Us</h1>
            </div>
            <div className="card-forms">
              <form>
                <div>
                  <label className="card-email border-none" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="email"
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.emailValidate}
                  />
                </div>
                <div>
                  <label htmlFor="newCheck">Terms & Conditions</label>
                  <input
                    type="checkbox"
                    name="checkName"
                    id="checkName"
                    value={checkName}
                    className="check"
                    onChange={this.emailValidate}
                  />
                </div>
              </form>
              <button onClick={this.validate} className="m-3 btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
