//Visibility Toggle - render, constructor, handleToggleVisibility
//visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        }); 
    }


    render() { 
    return (<div>
     <h1>Visibility Toggle</h1>
     <button  onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
      {this.state.visibility && <div>
          <p> You can see the details</p> </div>}
      </div>);
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));

// const toggleVisibility = () => {
//     Visibility = !Visibility;
//     renderApp();
// }

// let Visibility = false;
// const renderApp = () => {
//     const template = (<div>
//     <h1>Visibility Toggle</h1>
//     <button  onClick={toggleVisibility}>{Visibility ? "Hide details" : "Show details"}</button>
//      {Visibility && <div>
//          <p> You can see the details</p> </div>}
//      </div>)
      
//      ReactDOM.render(template, appRoot);
// } 



// const appRoot = document.getElementById("app");
// renderApp();