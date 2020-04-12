import React from "react";
import "./App.css";

/* Import Views */
import StepOne from './View/StepOne'
import StepTwo from './View/StepOne'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, 

      // Step 1 
      User: {
        weight: "",
        gender: "",
        time: ""
      },

      genderOptions: [Male, Female],
      godziny: [],

      // Step 2 

      Big_Beer: {
        title: "Big Beer", amount: 0, milliliters: 500, gramsOfAlcohol: 20
      },
      Small_Beer: {
        title: "Small Beer", amount: 0, milliliters: 350, gramsOfAlcohol: 15
      },
      Wine: {
        title: "Wine", amount: 0, milliliters: 250, gramsOfAlcohol: 25
      },
      Champagne: {
        title: "Champagne", amount: 0, milliliters: 125, gramsOfAlcohol: 12
      },
      Vodka: {
        title: "vodka", amount: 0, milliliters: 50, gramsOfAlcohol: 18
      },
      
    };
  }

  showStep = () => {
    const {step} = this.state;
    if(step === 1)
      return (<StepOne weight={this.state.User.weight}
      handleWeight={this.handleWeight}
      genderOptions={this.state.genderOptions}
      gender={this.state.User.gender}
      handleInput={this.handleInput}
      time={this.state.User.time}
      handleTime={this.handleTime}
      nextStep={this.nextStep}
      />);
      if(step === 2)
      return (<StepTwo Big_Beer_title={this.state.Big_Beer.title}
        Big_Beer_amount={this.state.Big_Beer.amount}
        handleBigBeer={this.handleBigBeer}
        Small_Beer_title={this.state.Small_Beer.title}
        Small_Beer_amount={this.state.Small_Beer.amount}
        handleSmallBeer={this.handleSmallBeer}
        Vodka_title={this.state.Vodka.title}
        Vodka_amount={this.state.Vodka.amount}
        handleVodka={this.handleVodka}
        Wine_title={this.state.Wine.title}
        Wine_amount={this.state.Wine.amount}
        handleWine={this.handleWine}
        Champagne_title={this.state.Champagne.title}
        Champagne_amount={this.state.Champagne.amount}
        handleFormSubmit={this.handleFormSubmit}
        handleClearForm={this.handleClearForm}
      />); 
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      ...this.state,
      step:step+1
    });
  }

  previousStep = (e) => {
    e.preventDefault();
    const {step} = this.state;
    this.setState({
      step:step-1
    })
  }


  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        [name]: value
      }
    });
  }

  handleWeight = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        weight: value
      }
    });
  }

  handleBigBeer = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Big_Beer: {
        ...this.state.Big_Beer,
        amount: value
      }
    });
  }

  handleSmallBeer = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Small_Beer: {
        ...this.state.Small_Beer,
        amount: value
      }
    });
  }

  handleVodka = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Vodka: {
        ...this.state.Vodka,
        amount: value
      }
    });
  }

  handleChampagne = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Champagne: {
        ...this.state.Champagne,
        amount: value
      }
    });
  }

  handleWine = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Wine: {
        ...this.state.Wine,
        amount: value
      }
    });
  }

  handleTime = e => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        time: value
      }
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { weight, gender, time } = this.state.User;
    const liczba = this.state.Big_Beer.amount * this.state.Big_Beer.gramsOfAlcohol
    const liczba2 = this.state.Small_Beer.amount * this.state.Small_Beer.gramsOfAlcohol
    const liczba3 = this.state.Wine.amount * this.state.Wine.gramsOfAlcohol
    const liczba4 = this.state.Champagne.amount * this.state.Champagne.gramsOfAlcohol
    const liczba5 = this.state.Vodka.amount * this.state.Vodka.gramsOfAlcohol
    const alkohol = liczba + liczba2 + liczba3 + liczba4 + liczba5

    var wyniki = []
    var wynik = 0
    if (gender === "Male") {
      for (let i = 0; wynik >= 0; i++) {
        if (wynik < 0) {
          break
        } else {
          wynik = (((0.806 * (((alkohol) - (i * 10)) / 10) * 1.2) / (0.58 * weight) - (0.015 * time)) * 10);
          if (wynik > 0) {
            wyniki.push(wynik.toFixed(2))
          }
        }
        this.setState({
          godziny: wyniki
        });
      }
    } else {
      for (let i = 0; wynik >= 0; i++) {
      if (wynik < 0) {
        break
      } else {
        wynik = (((0.806 * (((alkohol) - (i * 10)) / 10) * 1.2) / (0.49 * weight) - (0.017 * time)) * 10);
        if (wynik > 0) {
          wyniki.push(wynik.toFixed(2))
        }
      }
      this.setState({
        godziny: wyniki
      });
    }
    }
  }
  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      User: {
        weight: "",
        gender: "",
        time: ""
      },
      products: [
        { id: "1", title: "Big Beer", amount: "", milliliters: 500 },
        { id: "2", title: "Small Beer", amount: "", milliliters: 350 },
        { id: "3", title: "Wine", amount: "", milliliters: 175 },
        { id: "4", title: "Champagne", amount: "", milliliters: 120 },
        { id: "5", title: "vodka", amount: "", milliliters: 50 }
      ]
    });
  }

  render() {
    const {step} = this.state;
    return (
      <div className="calculator">
        <h2>Step {step} of 3.</h2>
        <form className="container-fluid">
          {this.showStep()}
        </form> 
        <ul>
          
        </ul>
      </div>
    );
  }
}

export default Form;