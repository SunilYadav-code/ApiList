import React, {component} from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      itmes:[],
      isLoaded:false,
    }
   }
   componentDidMount(){
     fetch('https://reqres.in/api/users?page=2  ')
     .then(res=>res.json())
     .then(json=>{
       this.setState({
         isLoaded:true,
         itmes:json,
       })
     });
   }

  render(){
    var{isLoaded,itmes}=this.state;
    if(!isLoaded){
      return<div>Loading...</div>
    }
    else{
  return (
    <div className="App">
      <ul>
        {itmes.map(itmes=>(
         <li key={itmes.id}>
            Email:{itmes.email}| Name: {itmes.first_name}| Last:{itmes.last_name} | Avater:{itmes.avatar}
         </li>
        ))};
      </ul>
    </div>
  );
    }
}
}
export default App;
