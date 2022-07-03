import './App.css';

function App() {
  return (
    <div className='main'>
      <div className="fb_caption">
        <h1 id='fb'>facebook</h1>
        <p id='caption'>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className='form'>
        <form onSubmit={login()}>
          <input type="text" name="email" id='email' placeholder="Email address or phone number" /><br />
          <input type="password" name="password" id='password' placeholder='Password' /><br />
          <button className='LogIn'>Log In</button><br />
          <a href='www.fb.com'>Forgot Password?</a><br />
          <button className='Newaccount'>Create New Account</button><br />
          <p><b>Create a Page</b> for a celebrity, brand or business</p>
        </form>
      </div>
    </div >
  );
  function login() {
    console.log(document.getElementById('email'))
    console.log(document.getElementById('password'))
  }
}
export default App;
