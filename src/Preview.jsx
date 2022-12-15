import React, { useRef, useEffect } from "react";
import { ReactFormGenerator, ElementStore } from "react-form-builder2";
import * as variables from "./variables";
import { IoIosRedo, IoIosUndo } from "react-icons/io";
import { useState } from "react";
function Preview({ preview }) {
  const PreviewRef = useRef();
  const [output, setOutput] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [currentLength, setCurrent] = useState(0);
  const UndoRedo = (Temp, setArray) => {
    const Array = [];
    Temp.map((temp, index) => {
      if (index < currentLength) {
        Array.push(temp);
      }
    });
    setArray(Array);
  };

  const [Data, setData] = useState([]);
  useEffect(() => {
    if (preview === true) {
      PreviewRef.current.scrollIntoView();
    }
  }, [preview]);
  useEffect(() => {
    setData(ElementStore.state.data);
    setTempData(ElementStore.state.data);
    setCurrent(ElementStore.state.data.length);
  }, []);
  useEffect(() => {
    if (currentLength > 0) {
      UndoRedo(tempData, setData);
    }
  }, [currentLength]);

  return (
    <div className='preview' ref={PreviewRef}>
      <div className='header'>
        <h4>Preview Form</h4>
        <div className='icons'>
          {currentLength > 0 && (
            <IoIosUndo
              className='icon'
              onClick={(e) => {
                e.preventDefault();
                setCurrent(currentLength - 1);
              }}
            />
          )}
          {currentLength < tempData.length && (
            <IoIosRedo
              className='icon'
              onClick={(e) => {
                e.preventDefault();
                setCurrent(currentLength + 1);
              }}
            />
          )}
        </div>
      </div>
      <div className='preview-form '>
        <div className='form-generator'>
          <h4>Your Form</h4>
          <div className=''>
            <ReactFormGenerator
              editMode={true}
              form_method='POST'
              variables={variables}
              actionName='Save Form'
              submitButton={
                <button
                  button
                  type='submit'
                  className='submit-btn'
                  onClick={(e) => {
                    e.preventDefault();
                    setOutput(true);
                  }}
                >
                  {" "}
                  OutPut
                </button>
              }
              task_id={12} // Used to submit a hidden variable with the id to the form from the database
              // Answer data, only used if loading a pre-existing form with values.
              authenticity_token={""} // If using Rails and need an auth token to submit form // Question data
              back_name='Back'
              answer_data={{}}
              action_name='Save'
              form_action='/'
              data={Data && Data}
            />
          </div>
        </div>
        <div className='output'>
          <p className='text '>
            <small>
              {output == true && Data.length > 0
                ? JSON.stringify(Data)
                : "Out Put Will Appear Here"}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
