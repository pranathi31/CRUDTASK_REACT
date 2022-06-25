import './App.css';
//import {Routes,Route} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { tabledelete, tableget } from './store/Actions/data.action';
import { useEffect } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const dispatch = useDispatch();
    const init = async () => {
        await dispatch(tableget())
    }

    const deletedata = async (id)=>{
     let res = await dispatch(tabledelete(id))
      init()
      console.log(res)
      toast.success("deleted successfully!");
    }
    const data = useSelector(state => state.dataReducer.tabledata);

    const handleadd=()=>{
     toast.success("added successfully!");
    }

    useEffect(()=>{
   init()
},[])
  return (
    <div className="App" style={Container}>
       <ToastContainer />
     <TableContainer component={Paper} style={table}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><b>S.No</b></TableCell>
            <TableCell><b>userId</b></TableCell>
            <TableCell ><b>title</b></TableCell>
            <TableCell ><b>body</b></TableCell>
            <TableCell ><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item,index)=>{return(
             <TableRow  key={index}
             >
              <TableCell component="th" scope="row">
                {index+1}
               </TableCell>
               <TableCell>
                {item?.userId}
               </TableCell>
               <TableCell>{item?.title}</TableCell>
               <TableCell >{item?.body}</TableCell>
               <TableCell  >
                <div style={buttons}>
               <Button variant="outlined">Edit</Button> &nbsp;&nbsp;
               <Button variant="outlined" color="error" onClick={()=>deletedata(item?.id)}>Delete</Button>
               </div>
                </TableCell>

             </TableRow>
          )})}
           
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <Button variant="contained" onClick={()=>handleadd()}>Add</Button>
    </div>
  );
}

export default App;

const Container={
  marginLeft:'300px',marginRight:'300px',marginTop:'100px'
}
const table={
  border:'1px solid black',
  height:'500px',
  overflowY:'auto'
}
const buttons={
  display:'flex'
}