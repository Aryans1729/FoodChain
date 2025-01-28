// const heading = React.createElement("h1", {id: "heading"}, "Ram Ram React");

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "Ram Ram React"),
                React.createElement("h2", {}, "Namaste React"),
            ]
        ),
        React.createElement(
            "div",
            { id: "child-2" },
            [
                React.createElement("h1", {}, "Ram Ram React"),
                React.createElement("h2", {}, "Namaste React"),
            ]
        ),
    ]
);
 

console.log(parent) //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)





/**
 * 
 * 
 * <div id = parent>
 *   <div id = child
 *       <h1>Ram Ram React<h1>
 *       <h2> Namaste React<h2>
 * 
 *   <div id = child-2>
 *       <h1> Ram ram React</h1>
 *        <h2> Namaste React </h2>
 */