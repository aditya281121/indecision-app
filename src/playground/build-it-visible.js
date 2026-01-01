console.log("Hello World");

const toggleVisibility = () => {
    Visibility = !Visibility;
    renderApp();
}

let Visibility = false;
const renderApp = () => {
    const template = (<div>
    <h1>Visibility Toggle</h1>
    <button  onClick={toggleVisibility}>{Visibility ? "Hide details" : "Show details"}</button>
     {Visibility && <div>
         <p> You can see the details</p> </div>}
     </div>)
      
     ReactDOM.render(template, appRoot);
} 



const appRoot = document.getElementById("app");
renderApp();