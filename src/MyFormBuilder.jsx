import React, { useState } from "react";
import {
  ReactFormBuilder,
  ReactFormGenerator,
  ElementStore,
} from "react-form-builder2";
import { Items } from "./toolbar";
import * as variables from "./variables";
import {ToastContainer,toast} from 'react-toastify'
function MyFormBuilder({setPreview}) {
  return (
    <div className="Builder">
      <div className='header'>
        <h4>Form Builder</h4>
        <button
          className='btn'
          onClick={(e) => {
            e.preventDefault();
            let array = ElementStore.state.data;
            if (array.length == 0 || array.length < 0) {
              return toast.warning("Click   Here After completing All Drag And Drop");
            }
            setPreview(true);
          }}
        >
          Preview
        </button>
      </div>
      <div className='builder'>
        <ReactFormBuilder
          url='path/to/GET/initial.json'
          customToolbarItems={Items}
          saveUrl='path/to/POST/built/form.json'
          onChange={()=>{
            console.log("changed");
          }}
          variables={variables}
          saveAlways={true}
          
          
        />

        
        <ToastContainer />
      </div>
    </div>
  );
}

export default MyFormBuilder;

{
  /* <ReactFormGenerator
        editMode={true}
        form_method='POST'
        variables={variables}
        actionName='Save Form'
        submitButton={
          <button button type='submit' className='submit-btn'>
            {" "}
            Submit{" "}
          </button>
        }
        task_id={12} // Used to submit a hidden variable with the id to the form from the database
        // Answer data, only used if loading a pre-existing form with values.
        authenticity_token={""} // If using Rails and need an auth token to submit form // Question data
        back_name='Back'
        answer_data={{}}
        action_name='Save'
        form_action='/'
        data={[]}
      /> */
}
