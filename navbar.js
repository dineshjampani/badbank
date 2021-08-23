
  function NavBar(){
    return(
      <>
      
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="#" title="The home page involves the introduction to the home page, it is the main landing point of this application">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/" title="This is the create account page that creates accounts for the Bank. It involves name,email,etc">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/" title="The Deposit page has a card that lets users input the amount they want to deposit. It also allows them to submit, which shows the total.">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/" title="Withdrawal page showcases the user to enter an amount to withdraw. It allows them to submit to see the balance">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/" title="The all data page shows all the data that has been entered onto the page, It is a way to see if the application is correctly working">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }