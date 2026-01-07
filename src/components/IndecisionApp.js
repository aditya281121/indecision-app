import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

// pull the state out of constructor
//convert all 4 event handlers to class properties (arrow function)
//delete the constructor entirely
//start with class properties and end with method

export default class IndecisionApp extends React.Component {
     
     state = {
        options: [],
        selectedOption: undefined
     };

      handleDeleteOptions = () =>{
        this.setState(() => ( {options: []}));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleDeleteOption = (optionToRemove) => {
         this.setState((prevState) => ({
             options: prevState.options.filter((option) => optionToRemove !== option)
         }));
    };
    

 
    handlePick = () =>{
         const randomNum = Math.floor(Math.random() * this.state.options.length);
        //console.log(randomNum);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleAddOption = (option) => {

        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exist';
        }

        this.setState((prevState) => ({
             options: prevState.options.concat(option)
        }));

    //    this.setState((prevState) => {
    //       return {
    //         options: prevState.options.concat(option)
    //       };
    //    });
    }


    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // this.state= {
    //     // options: props.options
    //     options: []
    // };
    // }

    componentDidMount(){
        try {
        console.log('fetching data!')
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(() => ({options}));
        }
    } catch (e){
        //Do nothing at all
    }
}

    componentDidUpdate(prevProps, prevState){
        console.log('saving data!')
        if (prevState.options.length !== this.state.options.length);
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options', json);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }

    render(){ 

       
        const subtitle = "Put your life in the hands of a computer";


        return (<div>
            <Header  subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}/>
            <Options options={this.state.options}
             handleDeleteOptions={this.handleDeleteOptions}
             handleDeleteOption={this.handleDeleteOption}
            /> 
            <AddOption
              handleAddOption={this.handleAddOption}
            />

            <OptionModal selectedOption={this.state.selectedOption} 
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
            
        </div>);
    }

}