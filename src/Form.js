import React from "react";
import "./App.css";

/* Import Components */
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      User: {
        weight: "",
        gender: "",
        time: ""
      },
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
      genderOptions: ["Male", "Female"],
      godziny:[]
    };
    this.handleWeight = this.handleWeight.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleBigBeer = this.handleBigBeer.bind(this);
    this.handleSmallBeer = this.handleSmallBeer.bind(this);
    this.handleChampagne = this.handleChampagne.bind(this);
    this.handleVodka = this.handleVodka.bind(this);
    this.handleWine = this.handleWine.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInput(e) {
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

  handleWeight(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        weight: value
      }
    });
  }

  handleBigBeer(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Big_Beer: {
        ...this.state.Big_Beer,
        amount: value
      }
    });
  }

  handleSmallBeer(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Small_Beer: {
        ...this.state.Small_Beer,
        amount: value
      }
    });
  }

  handleVodka(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Vodka: {
        ...this.state.Vodka,
        amount: value
      }
    });
  }

  handleChampagne(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Champagne: {
        ...this.state.Champagne,
        amount: value
      }
    });
  }

  handleWine(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      Wine: {
        ...this.state.Wine,
        amount: value
      }
    });
  }

  handleTime(e) {
    let value = e.target.value;
    this.setState({
      ...this.state,
      User: {
        ...this.state.User,
        time: value
      }
    });
  }
  calculator(e) {
    e.preventDefault();
     
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { weight, gender, time } = this.state.User;
    const liczba = this.state.Big_Beer.amount * this.state.Big_Beer.gramsOfAlcohol
    const liczba2 = this.state.Small_Beer.amount * this.state.Small_Beer.gramsOfAlcohol
    const liczba3 = this.state.Wine.amount * this.state.Wine.gramsOfAlcohol
    const liczba4 = this.state.Champagne.amount * this.state.Champagne.gramsOfAlcohol
    const liczba5 = this.state.Vodka.amount * this.state.Vodka.gramsOfAlcohol
    const alkohol = liczba + liczba2 + liczba3 + liczba4 + liczba5

    var wynik = 0;
    if (gender === "Male") {
      for(let i=0;;i++){
        if(wynik < 0){
          console.log("trzezwy")
          break
        } else {
        wynik = (((0.806 *(((alkohol)-(i*10))/10) * 1.2)/(0.58 * weight)-(0.015*time))*10);
        
        this.state.godziny.push(wynik)
        }
      }
    } else {
      console.log(((0.806 *(alkohol/10) * 1.2)/(0.49 * weight)-(0.017*time))*10)
    }
  }
  handleClearForm(e) {
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
    return (
      <div className="calculator">
        <form className="container-fluid">
          <Input
            inputType={"number"}
            name={"Weight"}
            title={"Weight"}
            placeholder={"Enter your weight"}
            value={this.state.User.weight}
            handleChange={this.handleWeight}
          />
          <Select
            title={"Gender"}
            name={"gender"}
            placeholder={"Select Gender"}
            options={this.state.genderOptions}
            value={this.state.User.gender}
            handleChange={this.handleInput}
          />
          <Input
            inputType={"number"}
            name={"time"}
            title={"Time"}
            placeholder={"drinking time in hours"}
            value={this.state.User.time}
            handleChange={this.handleTime}
          />
          <Input
            inputType={"number"}
            name={this.state.Big_Beer.title}
            title={this.state.Big_Beer.title}
            placeholder={"Enter your amount"}
            value={this.state.Big_Beer.amount}
            handleChange={this.handleBigBeer}
          />
          <Input
            inputType={"number"}
            name={this.state.Small_Beer.title}
            title={this.state.Small_Beer.title}
            placeholder={"Enter your amount"}
            value={this.state.Small_Beer.amount}
            handleChange={this.handleSmallBeer}
          />
          <Input
            inputType={"number"}
            name={this.state.Vodka.title}
            title={this.state.Vodka.title}
            placeholder={"Enter your amount"}
            value={this.state.Vodka.amount}
            handleChange={this.handleVodka}
          />
          <Input
            inputType={"number"}
            name={this.state.Wine.title}
            title={this.state.Wine.title}
            placeholder={"Enter your amount"}
            value={this.state.Wine.amount}
            handleChange={this.handleWine}
          />
          <Input
            inputType={"number"}
            name={this.state.Champagne.title}
            title={this.state.Champagne.title}
            placeholder={"Enter your amount"}
            value={this.state.Champagne.amount}
            handleChange={this.handleChampagne}
          />
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
          />{" "}
        </form>
        <ul>
          {this.state.godziny.map((value,index)=>{
           return <li key={index}>Po {index} godzinach picia twoj pozom stezenia alkoholu we krwi wynosi {value}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Form;