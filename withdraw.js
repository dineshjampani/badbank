


  function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]         = React.useState(0);
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
  
    function handleWithdraw(){
      console.log(withdraw);
      if (!validate(withdraw,     'withdraw'))     return;
      ctx.users.push({withdraw,balance:Number(balance)- Number(withdraw)});
      //ctx.users.push({withdraw,balance});
      setShow(false);
     // console.log(ctx);
     // console.log(ctx.users);
     console.log(balance);
     console.log(withdraw);
     console.log(ctx.users.balance);
    
      
    }    
  
    function clearForm(){
      setWithdraw('');

      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="withdraw"
        status={status}
        body={show ? (  
                <>
                
                 <br/>
                 <h3 >Balance ${Number(balance)- Number(withdraw)} <br/>
                     </h3>
                     
    <br/>
                withdraw Amount<br/>
                <input type="input" className="form-control" id="name" placeholder="withdraw Amount" value={withdraw} onChange={e => setWithdraw(Number(e.currentTarget.value))} /><br/>
                <br/>
                <button type="withdraw" className="btn btn-light" onClick={handleWithdraw}>withdraw </button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="withdraw" className="btn btn-light" onClick={clearForm}>Add another withdraw</button>
                </>
              )}
      />
    )
  }
 