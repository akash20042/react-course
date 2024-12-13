// const  heading = React.createElement("h1", { id: "heading"} , " hello react bhai test");
const  heading = React.createElement("div", { id: "parent"}, [
 React.createElement("div", { id: "child"} , [ 
    React.createElement("h1", {} , " ia ma h1 tag " ) ,
    React.createElement("h2", {} , " ia ma h1 tag " )
]),

    React.createElement("div", { id: "child"} ,  
    React.createElement("h1", {} , " ia ma h1 tag " )
 )]
);





 console.log(heading)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)