import "./styling/Signup.scss";

export default function Signup() {
  return (
    <div className="auth-page">
      <div className="glass-card">
        <h2>Sign Up</h2>
        <p>Join VahanSeva today</p>
 
        <form>
          <div className="field-row">
            <div className="field">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button className="btn-primary">Sign Up</button>
        </form>

        <span className="switch">
          Already have an account? <a href="#">Login</a>
        </span>
      </div>
    </div>
  );
}
