console.log("App is running");


//JSX - JavaScript XML

// if statements
//ternary operators
//logical operators

//only render the subtitle (and p tag) if subtitle exist - logical AND operator
//render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onFormSubmit = (e) => { //This function can be get to know from React DOM events website
    e.preventDefault();
    console.log("form submitted")
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
}
    renderApp();
}


//    const user = {
//     name: "Aditya Chauhan",
//     age: 23,
//     location: "Philadelphia"
   
//    }

//     function getLocation(location){
//         if(location){
//              return <p>Location: {location}</p>
//         }
// }
    
//     const userName="Aditya Chauhan";
//     const useAge=23;
//     const userLocation="Philadelphia";
//     const templateTwo = (<div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//       {getLocation(user.location)}

//     </div>)

    //Create a templateTwo var JSX expression
    //div 
    //h1 -> Aditya Chauhan
    // p -> Age: 23
    // p -> Location: Philadelphia
    // Render templateTwo instead of template

    const numbers = [55,101,1000];

    const onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length);
        //console.log(randomNum);
        const option = app.options[randomNum];
        alert(option);
    }

    const renderApp = () => {

    const template = (<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>  {app.subtitle} </p>}
   <p> {app.options.length > 0 ?  "Here are your options" :  "No options" }</p>
  
   {/* <p> {app.options.length}</p> */}
   <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
   <button onClick={removeAll}> Remove All</button>
   {
     //[<p key="1">a</p> , <p key="2">b</p> , <p key="3">c</p>]
    //  numbers.map((number) => {
    //     return <p key={number}>Number: {number}</p>;
    //  })
   }
    <ol>
        {/* map over app.options getting back an array of lis (set key and text) */
        app.options.map((options) => <li key={options}> {options}</li>)
    }
    
    </ol>
    
    <form onSubmit={onFormSubmit}>
       <input type="text" name="option"/>
       <button>Add option </button>
           </form>
 </div>);

        ReactDOM.render(template, appRoot);
    }

    


const appRoot = document.getElementById("app");
renderApp();

 //Challenge - 1. Create render function that renders the new jsx
 //Call it right away
 //Call it after options array addded to 
 // 2. create "Remove All" button above list
 // on click - wipe the array -> rerender

