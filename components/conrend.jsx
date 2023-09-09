const ConditionalRendering = (props) => {
    const veciBroj = <p>je veci od 5</p>
    const manjiBroj = <p>je manji od 5</p>
    const provjera = props.number > 5 ? veciBroj : manjiBroj;
    
    return (
      <>
      <h1>Conditional Rendering {props.number}</h1>
      
      {props.number && provjera}
      </>
      
    )
  }
  export default ConditionalRendering