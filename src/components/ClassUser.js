import React from "react";

class ClassUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child construtor" + this.props.name);
  }
  componentDidMount() {
    console.log("child Mount" + this.props.name);
  }
  render() {
    console.log("child Render" + this.props.name);
    const { Add, Source, name } = this.props;
    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button
          className="bg-gray-500 text-white rounded-lg p-2 mx-2"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          COUNT++
        </button>
        <h1 className="font-bold">Name : Saurabh Kumar {name}</h1>
        <h2>Add : {Add}</h2>
        <h3>Position : Software Engineer</h3>
        <h4>Source : {Source}</h4>
      </div>
    );
  }
}
export default ClassUser;
