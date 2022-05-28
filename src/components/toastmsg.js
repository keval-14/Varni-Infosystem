import React from "react";
import {Button, button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';

const btnHandle=() =>
  {
      toast.success("done", {
          position: "top-center",

      });

  

    return(
    
     <div>
      <ToastContainer/>
        <h1>
          Simple application
         </h1>
        <Button color="warning" onClick={btnHandle}>Hello</Button>

    </div>
  );

};