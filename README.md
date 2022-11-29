# React -> React State
- state is a tool imported from react library 
    1. when declaring state we declare our variables inside of our component's scope {}
    2. use array destructuring to access pieces of the imported state tools (hooks)
    3. stateful component is a component that monitors its own state rather than exclusively receiveing data through props 

## Example Syntax: 
    
    ```js
    const stateTools = useState(10)  stateTools => [state, dispatcher]
    


     react hook (useState) -> listening for changes to certain value
     useState() -> inside of the component is invoked calling the function (initial value for our variable)
     [initial value, dispatcher] 
     dispatcher(newValue) => react takes the new value and updates the state variable
     then immediate triggers a rerender of the component
     console.log(stateTools[0])
    ```