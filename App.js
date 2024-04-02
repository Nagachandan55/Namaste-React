const heading = React.createElement(
    "div",
     {id : "parent"},
     [React.createElement("div",{id : "child"},
     [React.createElement("h1",{id:"heading1"},"h1 tag"),
     React.createElement("h2",{id :"heading2"},"h2 tag")]),
    
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"h1"},"h1 tag"),
        React.createElement("h2",{id:"h2"},"h2 tag")]
    )]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);