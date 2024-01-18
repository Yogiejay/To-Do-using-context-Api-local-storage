import React, { useContext } from 'react';
// import Addtask from './Addtask';
import UserContext from '../context/UserContext';


function Header() {
  const {Inputdata , setInputdata} = useContext(UserContext);
  const {dataArray , setdataArray} = useContext(UserContext);
  const {toedit,settoedit} = useContext(UserContext);
  const addtask = ()=>{   
      if (toedit !== null){
          /*const newArray = */dataArray.forEach((item ,index)=>{
              if(index === toedit){
                item.todo = Inputdata;
              }

          });
          // setdataArray([...newArray]);
          setdataArray(dataArray);
          // setdataArray(newArray);
          settoedit(null);
          setInputdata("");
        }
      // if (toedit !== null) {
      //   const newArray = dataArray.map((item, index) =>
      //     index === toedit ? { ...item, todo: Inputdata } : item
      //   );
    
      //   setdataArray(newArray);
      //   settoedit(null);
      // }
      else{
        const data = {
          id : Date.now(),
          todo : Inputdata
        };
      // setdataArray([...data]);
      setdataArray([...dataArray, data]);
      setInputdata("");
      }
    

    return (
      <div>Here is the data : {Inputdata}</div>
    )
  }
  return (
    <div>
      <input type="text" placeholder='Enter todo' value={Inputdata} onChange={(e)=>{setInputdata(e.target.value)}}/>
      <button onClick={addtask}>Submit</button>
      {/* <div>{dataArray.map((item)=>{
        return (<div>{item.todo}</div>)
      })}</div> */}
      {/* <p>Here is what you are typing : {Inputdata} </p> */}
    </div>
  )
}

export default Header