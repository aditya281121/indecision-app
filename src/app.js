//React component is a es6 class
const obj = {
    name: 'Vikram',
    getName(){
        return this.name;
    }
}
const getName = obj.getName.bind({name: 'Andrew'});
console.log(obj.getName());


class IndecisionApp extends React.Component {
    render(){ 

        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options =['Things one', 'Thing two', 'Thing four'];


        return (<div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <Options options={options}/> 
            <AddOption/>
        </div>);
    }
}

class Header extends React.Component {
    render(){
        return (<div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>);
}
}

class Action extends React.Component {
    handlePick(){
        alert("handlePick");
    }
    render(){
        return (<div>
            <button onClick={this.handlePick}> What should i do?</button>
        </div>);
    }
}

//Setup option prop for Options component
//Render the length of the array
//Options -> Options component here
//Render new p tag for each option (set text, set key)
//Add Remove All button
//Setup handleRemoveAll -> alert some message
//setup onCLick to fire the method
class Options extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
        //alert("handleRemoveAll");
    }
    render(){
        return (<div>
            <button onClick={this.handleRemoveAll.bind(this)}> Remove all</button>
            {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
            
        </div>);
    }
}

//Option Component here
class Option extends React.Component {
    render(){
        return (<div>
          Option: {this.props.optionText}
        </div>)
    }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, alert


//Add options component here
class AddOption extends React.Component {

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
         alert(option);
        }
       
    }

    render(){
        return (<div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>)
    }
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));