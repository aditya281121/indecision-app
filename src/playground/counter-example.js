 let count = 0;
    const someid = "myidhere"

    const addOne = () => {
        count++
        console.log("addOne", count);
        renderCounterApp();
    }
    const minusOne = () => {
        //subtract 1 from count - rerender
        count--
        console.log("minusOne");
        renderCounterApp();
    }
    const reset = () => {
        //set count to 0 - a rerender
        count = 0;
        console.log("reset");
        renderCounterApp();
    }

    // const templateThree = (<div>
    //     <h1>Count : {count}</h1>
    //     <button id={someid} className="button">+1</button>
    // </div>)
     const templateThree = (<div>
         <h1>Count : {count}</h1>
         <button onClick={addOne}>+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>reset</button>
     </div>)

     // Challenge 
     // Make button "-1" - setup minusOne function and register - log "minusOne"
     // Make reset button "reset" - setup reset function - log "reset"

   
     const renderCounterApp = () => { //React Data binding concept
        const templateThree = (<div>
         <h1>Count : {count}</h1> 
         <button onClick={addOne}>+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>reset</button>
     </div>); //Virtual DOM Algorithm   

     ReactDOM.render(templateThree, appRoot); //React Re-rendering
     }


const appRoot = document.getElementById("app");
renderCounterApp();