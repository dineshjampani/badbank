function Balance(){
  const ctx = React.useContext(UserContext);
  return (
    <h1>All Data<br/>
      {JSON.stringify(ctx.balance)}
    </h1>
  );
  }