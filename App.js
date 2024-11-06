const heading = React.createElement(
    "div",
    { id: "heading" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "hello from react!"),
      React.createElement("h2", {id:"heading"}, "hello h2 from react!"),
    ])
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);