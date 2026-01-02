class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 12
        };
    }

    handleAddOne(){
    //     this.state.count = this.state.count + 1;
    //    console.log(this.state);

    this.setState((prevState) => {
        return {
            count: prevState.count + 1
        };
    });
}
    handleMinusOne(){
         this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
         });
        //Call this.setState decrement the count by 1
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });

        // this.setState(prevState => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });

        // this.setState({
        //      count: 0
        // });
        // this.setState(() => {
        //     count: this.state.count + 1;
        // });
    }

    render(){
        return (<div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>)
    }
}

//Create three methods: handleAddOne, handleMinusOne, handleReset
//Use console.log to print method name
//Wire up onClick & binds in the constructor



ReactDOM.render(<Counter />, document.getElementById("app"));


//  let count = 0;
//     const someid = "myidhere"

//     const addOne = () => {
//         count++
//         console.log("addOne", count);
//         renderCounterApp();
//     }
//     const minusOne = () => {
//         //subtract 1 from count - rerender
//         count--
//         console.log("minusOne");
//         renderCounterApp();
//     }
//     const reset = () => {
//         //set count to 0 - a rerender
//         count = 0;
//         console.log("reset");
//         renderCounterApp();
//     }

//     // const templateThree = (<div>
//     //     <h1>Count : {count}</h1>
//     //     <button id={someid} className="button">+1</button>
//     // </div>)
//      const templateThree = (<div>
//          <h1>Count : {count}</h1>
//          <button onClick={addOne}>+1</button>
//          <button onClick={minusOne}>-1</button>
//          <button onClick={reset}>reset</button>
//      </div>)

//      // Challenge 
//      // Make button "-1" - setup minusOne function and register - log "minusOne"
//      // Make reset button "reset" - setup reset function - log "reset"

   
//      const renderCounterApp = () => { //React Data binding concept
//         const templateThree = (<div>
//          <h1>Count : {count}</h1> 
//          <button onClick={addOne}>+1</button>
//          <button onClick={minusOne}>-1</button>
//          <button onClick={reset}>reset</button>
//      </div>); //Virtual DOM Algorithm   

//      ReactDOM.render(templateThree, appRoot); //React Re-rendering
//      }


// const appRoot = document.getElementById("app");
// renderCounterApp();