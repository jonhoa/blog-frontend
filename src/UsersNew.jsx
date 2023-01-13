

export function UsersNew() {
  return (
    <div id="users-new">
      <h1>Sign Up</h1>
      <form action ="http://localhost:3000/users.json" method ="POST">
        name: <input name="name" type="input"></input><br/>
        email: <input name="email" type="input"></input><br/>
        password: <input name="password" type="password"></input>
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
}
