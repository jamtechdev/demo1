import axios from "axios";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

function First(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    function onSubmit(data){
        
        axios.post("http://localhost:5000/divya",data)
        .then((response)=>{
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(response)
            navigate("/second")
        })
        .catch((error)=>{
            toast.error("Failed :" + error.message)
        })
        
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <Form >
      

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type Here</Form.Label>
        <Form.Control type="text" placeholder="text"  {...register("name",{required:true})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"  {...register("check",{required:true})}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}  >
        Submit
      </Button>
    </Form>
                    
                </div>
                <div className="col-sm-4"></div>

            </div>

        </div>

    )
}
export default First;