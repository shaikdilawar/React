const heading = React.createElement("h1", {id:"name" ,xyz : "abc"}, "Welcome To React!");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
