import {useState} from 'react'

// state is a tool imported from react library 
    // when declaring state we declare our variables inside of our component's scope {}
    // use array destructuring to access pieces of the imported state tools (hooks)
    // stateful component is a component that monitors its own state rather than exclusively receiveing data through props 

    // Example Syntax: 
    // const stateTools = useState(10) // stateTools => [state, dispatcher]
    
    // react hook (useState) -> listening for changes to certain value
    // useState() -> inside of the component is invoked calling the function (initial value for our variable)
    // [initial value, dispatcher] 
    // dispatcher(newValue) => react takes the new value and updates the state variable
    // then immediate triggers a rerender of the component
    // console.log(stateTools[0])



function Counter(props) {

    
    let [counter,setCounter] = useState(10) 
    const [history, setHistory] = useState([counter])
    const [background, setBackground] = useState("even")
    // counter === useState[0]
    // setCounter === useState[1]

    // array destructuring to assign values in an array to variables, based on their positions
    // counter+=66 // -> a direct mutation of our value 
    // setCounter(counter + 1) -> when you call your set function (dispatcher) -> it will update state with the provided value, and then rerender the component
    // when a component is rendered -> Counter -> Counter()
    console.log('I am rendering a counter')
    
    // Objective: 
    // write a "handle decrement" function handler 
    function handleDecrement (e){
        const newNumber = counter - 1
        if(newNumber >=0 ){
            setCounter(newNumber) 
            newNumber %2 == 0 ? setBackground("even") : setBackground("odd")
            setHistory([...history, newNumber])
        } 

    }
    // - prevents the number from going below zero
    // - when handler is called it will try to decrement counter by 1 (setCounter)
    
    function handleIncrement (e){
        // console.log(e)
        const newNumber = counter + 1

        if(newNumber > 20){
            setCounter(10)
            setBackground("even")
            setHistory([...history, 10])
        } else {
            setCounter(newNumber)
            newNumber %2 == 0 ? setBackground("even") : setBackground("odd")
            setHistory([...history, newNumber])
            // when passing array data to state, we want to create a new array, spread our old values (elements) in their current position, add / mutate the copy before setting state.

            // whatever value you pass to your set function(setCounter) =-> overrides + updates counter 
        }
        
        // setCounter Dispatcher triggers reacts update behaviors
    }

    return (
        <div className={ "Counter "+ background }>
            <h3>Counter</h3>
            <h4>History: {`[ ${history.join(", ")}]`}</h4>
            <p>Current Value: <span className="display-number">{counter}</span></p>
            <section>
                <button onClick={ handleDecrement }>-</button>
                <button onClick={ handleIncrement } >+</button>
            </section>
        </div>
    )
}

export default Counter
export function Example() {
    console.log("This is a named export")
}