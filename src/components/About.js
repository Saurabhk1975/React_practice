import ClassUser from "./ClassUser";
import User from "./User";
import React from "react";
// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent constructor ");
//   }
//   componentDidMount() {
//     console.log("parent Mount ");
//   }
//   render() {
//     console.log("parent Render ");
//     return (
//       <div>
//         <h1>About Page</h1>
//         <User />
//         <ClassUser name={1} Add={"first, M.P."} Source={"Class Component"} />
//       </div>
//     );
//   }
// }

const About = () => {
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold mb-6 text-lg">About Page</h1>
      <User />
      <div className="my-6">
        <ClassUser Add={"Bhopal, M.P."} Source={"Class Component"} />
      </div>
    </div>
  );
};
export default About;
