import React, { Component } from "react";
import "../../assets/css/login.css";
import Logo from "../../assets/images/fleet-fox.png";


const CryptoJS = require("crypto-js");
const passphrase = `${process.env.REACT_APP_ENCRYPT_KEY}`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      errorMessage: "",
    };
  }

  //The Function Below To encrypt Text
  encryptWithAES(text) {
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // submitHandler = async (e) => {
  //   try {
  //     e.preventDefault();

  //     await instance
  //       .post(LOGIN_URL, {
  //         userid: this.state.user.trim(),
  //         password: this.state.pass,
  //       })
  //       .then((response) => {
  //         console.log("response", response);
  //         console.log("response", response.data['BODY'].token);
  //         //Bearer Token Getting
  //         var bearerToken = response.data["BODY"].token;
  //         var superuser = response.data["BODY"].superuser;

  //         var encryptText = this.encryptWithAES(bearerToken); //Encrypting Token

  //         // set local storage
  //         localStorage.setItem("_token", encryptText);
  //         localStorage.setItem("_user", superuser);

  //         if (response.status === 200) {
  //           try {
  //             window.location.href = "/"; 
  //           } catch (e) {
  //             alert(e);
  //           }
  //         }
  //       }) 
  //       .catch((error) => {
  //         console.log(error); 
  //         var statusErrorCode = error.response.status;
  //         if (statusErrorCode === 400) {
  //           this.setState({
  //             errorMessage: error.response.data['ERR'],
  //           });
  //         } else {
  //           alert("Something went wrong");
  //         }
  //       });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

componentDidUpdate() {
  console.log("componentDidMount" , this.state.user , this.state.pass);
}

  render() {
    const { errorMessage, user, pass } = this.state;
    return (
      <section className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>
          <form method="post" onSubmit={this.submitHandler}>
          <img class="logo_name" src={Logo} style={{"width": "90%"}} />
            <h2 className="text-center">
              <strong>Admin Login</strong>
            </h2>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="user"
                onChange={this.changeHandler}
                value={user}
                id="user"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="pass"
                id="pass"
                onChange={this.changeHandler}
                value={pass}
                placeholder="Password"
                required
              />
            </div>
            <p>{errorMessage}</p>
            <div className="mb-3">
              <button className="btn btn-primary d-block w-100" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
