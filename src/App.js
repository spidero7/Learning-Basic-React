const Pet = (props) => { // props we give information from parent component to child component
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('h3', {}, props.animal),
        React.createElement('h3', {}, props.breed),
    ])
}

const App = () => { // component
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", { id: "brand"}, "Adopt Me!"),
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
        React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
        React.createElement(Pet, { name: "Sudo", animal: "Dog", breed: "Wheaten Terrier" }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root')); // using function to render our React application