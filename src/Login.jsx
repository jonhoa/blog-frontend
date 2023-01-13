
export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action ="http://localhost:3000/sessions.json" method="POST">
        <p>Email <input type="text" name ="email"></input></p>
        <p>Password <input type="password" name ="password"></input></p>
        <button type ="submit">Login</button>
      </form>
    </div>
  )
 }
