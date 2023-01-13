import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users.json",params).then(response =>{
      console.log(response.data);
      event.target.reset();
    })
      .catch(error => {
        console.log("in the catch");
        console.log(error.response.data.errors);
      });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        name: <input name="name" type="input"></input><br/>
        email: <input name="email" type="input"></input><br/>
        password: <input name="password" type="password"></input>
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
}
