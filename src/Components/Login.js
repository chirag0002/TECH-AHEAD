import React,{useState} from 'react'
import "../Styling/Login.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./Header"
import Footer from "./Footer"
import twitter from "../Images/twitter.png"
import github from "../Images/github1.png"
import facebook from "../Images/facebook.png"
import google from "../Images/google.png"
import  authentication  from "../firebase-config"
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";

const Login = () => {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
    })
  }



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    return (
      <div className="container_body">
        <Header />
          <div className="Login">
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label className="username">Username or Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input_1"
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label className="pass">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input_2"
                />
              </Form.Group>
              <Button className="login_btn" block size="lg" type="submit" disabled={!validateForm()}>
                Login
              </Button>
          </Form>
          <Button onClick={signInWithGoogle} className="google"><img className="logos" src={google} alt="" srcset="" />Log In with Google</Button>
          <Button onClick={signInWithTwitter} className="twitter"><img className="logos" src={twitter} alt="" srcset="" /> Log In with Twitter</Button>
          <Button onClick={signInWithGithub} className="github"><img className="logos" src={github} alt="" srcset="" />Log In with GitHub</Button>
          <Button onClick={signInWithFacebook} className="facebook"><img className="logos" src={facebook} alt="" srcset="" />Log In with Facebook</Button>
          </div>
          <br /><br /><br /><br />
        <Footer />
        </div>
    );
  }


export default Login