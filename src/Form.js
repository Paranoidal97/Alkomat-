import React from "react";
import "./App.css";

import Alcohol from './components/Alcohol';
/* Import Views */
import StepOne from './View/StepOne'
import StepTwo from './View/StepTwo'
import StepThree from './View/StepThree'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,

      // Step 1 
      User: {
        weight: 0,
        gender: "",
        time: 0,
        godziny:[],
        Big_Beer:0,
        Small_Beer:0,
        Wine:0,
        Champagne:0,
        Vodka:0,
      },

      // Errors

      Errors: {
        weight: "",
        gender:"",
        time:""
      }

    };
  }

  showStep = () => {
    const { step } = this.state;
    if (step === 1)
      return (<StepOne weight={this.state.User.weight}
        handleInput={this.handleInput}
        gender={this.state.User.gender}
        time={this.state.User.time}
        nextStep={this.nextStep}
        weighterror={this.state.Errors.weight}
        gendererror={this.state.Errors.gender}
        timeerror={this.state.Errors.time}
      />);
    if (step === 2)
    return (<StepTwo 
      Big_Beer={this.state.User.Big_Beer}
      Small_Beer={this.state.User.Small_Beer}
      Wine={this.state.User.Wine}
      Champagne={this.state.User.Champagne}
      Vodka={this.state.User.Vodka}
      handleInput={this.handleInput}
      handleFormSubmit={this.handleFormSubmit}
      handleClearForm={this.handleClearForm}
    />);
    if (step === 3)
      return (<StepThree 
        maping={this.state.User.godziny}
      />);
     
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step + 1
    });
  }

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step - 1
    });
  }


  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    let errors = this.state.Errors;

    switch(name){
      case'weight':
        errors.weight = value <= 0 ? 'enter number' : '';
        break;
        case'gender':
        errors.gender = this.state.gender="" ? 'enter number' : '';
        break;
        case'time':
        errors.time = value <= 0 ? 'enter number' : '';
        break;
    }

    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        [name]: value
      }
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { weight, gender, time, Big_Beer, Small_Beer, Wine, Champagne, Vodka } = this.state.User;
    const liczba = Big_Beer * Alcohol[0].gramsOfAlcohol
    const liczba2 = Small_Beer * Alcohol[1].gramsOfAlcohol
    const liczba3 = Wine * Alcohol[2].gramsOfAlcohol
    const liczba4 = Champagne * Alcohol[3].gramsOfAlcohol
    const liczba5 = Vodka * Alcohol[4].gramsOfAlcohol
    const alkohol = liczba + liczba2 + liczba3 + liczba4 + liczba5

    let godzinyy = this.state.User.godziny
    var wynik = 0
    if (gender === "Male") {
      for (let i = 0; wynik >= 0; i++) {
        if (wynik < 0) {
          console.log(godzinyy)
        } else {
          wynik = (((0.806 * (((alkohol) - (i * 10)) / 10) * 1.2) / (0.58 * weight) - (0.015 * time)) * 10);
          if (wynik > 0) {
            godzinyy.push(wynik.toFixed(2))
          }
        }
      }
    } else {
      for (let i = 0; wynik >= 0; i++) {
        if (wynik < 0) { 
          console.log(godzinyy)
        } else {
          wynik = (((0.806 * (((alkohol) - (i * 10)) / 10) * 1.2) / (0.49 * weight) - (0.017 * time)) * 10);
          if (wynik > 0) {
            godzinyy.push(wynik.toFixed(2))
          }
        }
        
      }
    }
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        godziny: godzinyy
      }
    });
    this.nextStep()
  }
  
  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      step: 1,

      // Step 1 
      User: {
        weight: 0,
        gender: "",
        time: 0,
        godziny:[],
        Big_Beer:0,
        Small_Beer:0,
        Wine:0,
        Champagne:0,
        Vodka:0,
      },

      // Errors

      Errors: {
        weight: "",
        gender:"",
        time:""
      }

    });
  }
  
  render() {
    const { step } = this.state;
    return (
      <div >
        <h2>Step {step} of 3.</h2>
        <form >
          {this.showStep()}
        </form>
      </div>
    );
  }
}

export default Form;