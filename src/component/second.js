import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    
    borderColor: "red",
  };
function Second(){
    const[data,setData]=useState([])
    let [loading, setLoading] = useState(false)
    let [color, setColor] = useState("#ffffff");
    useEffect(()=>{
        setLoading(true);
        axios.get("http://localhost:5000/divya")
        .then((response)=>{
            setData(response.data)
           setLoading(false);
        })
    },[])
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          
        </tr>
      </thead>
      
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <tbody>
        {
            data.map((item,i)=>{
                return(
                    
        <tr key={i}>
        <td>{item.name}</td>
       
      </tr>

                )
            })
        }
       
      </tbody>
    </Table>
                
                </div>
                <div className="col-sm-4"></div>

            </div>

        </div>

    )
}
export default Second;