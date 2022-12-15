import "./App.css";
import { ElementStore } from "react-form-builder2";
import "bootstrap-slider/dist/bootstrap-slider";
import MyFormBuilder from "./MyFormBuilder";
import {Routes,Route} from 'react-router-dom'
import Preview from './Preview'
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
function App() {
  useEffect(()=>{
     toast.warning("Change The Whole Text After completing All Drag and Drop Form",{
      closeOnClick:true,
      theme:"dark"
     })
  },[])
  //const [data,setData]=useState([])
  const [preview,setPreview]=useState(false)
  return (
    <div className='App'>
     
     <MyFormBuilder setPreview={setPreview}  />
     {
      preview && <Preview preview={preview} />
     }
      <ToastContainer />
    </div>
  );
}

export default App;

{
  /* <ReactFormBuilder
        editMode={true}
          url = '/formdata'
          //toolbarItems={Items}
          customToolbarItems={Items}
          saveUrl ='/formdata/save'
          variables={variables}
          saveAlways={true}
        />

        <ReactFormGenerator
          form_method='POST'
          variables={variables}
          actionName="Save Form"
          submitButton = {
              <button button type = "submit"
              className = "submit-btn"> Submit </button>}
          task_id={12} // Used to submit a hidden variable with the id to the form from the database
          // Answer data, only used if loading a pre-existing form with values.
          authenticity_token={""} // If using Rails and need an auth token to submit form.
          data={[]} // Question data
          back_name = "Back"
          answer_data = {
            {}
          }
          action_name = "Save"
          form_action = "/"
          onSubmit={()=>alert("submited")}
        /> */
}
