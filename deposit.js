


  function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]         = React.useState(0);
    const [balance, setBalance]         = React.useState(100);
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleDeposit(){
      console.log(deposit);
      if (!validate(deposit,     'deposit'))     return;
      ctx.users.push({deposit,balance:Number(balance)+ Number(deposit)});
      //ctx.users.push({deposit,balance});
      setShow(false);
     // console.log(ctx);
     // console.log(ctx.users);
     console.log(balance);
     console.log(deposit);
     console.log(ctx.users.balance);
    
      
    }    
  
    function clearForm(){
      setDeposit('');

      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={show ? (  
                <>
                
                 <br/>
                 <h3 >Balance ${Number(balance)+ Number(deposit)} <br/>
                     </h3>
                     
    <br/>
                Deposit Amount<br/>
                <input type="input" className="form-control" id="name" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(Number(e.currentTarget.value))} /><br/>
                <br/>
                <button type="Deposit" className="btn btn-light" onClick={handleDeposit}>Deposit </button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="Deposit" className="btn btn-light" onClick={clearForm}>Add another Deposit</button>
                </>
              )}
      />
    )
  }
 