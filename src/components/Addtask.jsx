import React ,{useContext} from 'react'
import UserContext from '../context/UserContext';

function Addtask() {
  const {Inputdata , setInputdata} = useContext(UserContext);
  const {dataArray,setdataArray,toedit,settoedit} = useContext(UserContext);
  const edit = (currentItem , currentIndex)=>{
    settoedit(currentIndex);
    setInputdata(currentItem.todo);
  }
  const deletee = (indexToDelete) => {
    setdataArray((prevDataArray) => {
      const newDataArray = prevDataArray.filter((item, index) => index !== indexToDelete);
      return newDataArray;
    });
    setInputdata("");
  };
  

  
    return (

    <div>{dataArray.map((item , index)=>{
      return <div>{item.todo}
                  <button onClick={()=>edit(item,index)}>Edit</button>
                  <button onClick={()=>deletee(index)}>Delete</button>
      </div>
    })}</div>
    // <div></div>
  )
}

export default Addtask