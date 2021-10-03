import { React, useState, useEffect, useReducer } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';







//initial state
const initialState = {
  requests: [],
}

//reducer function 
function historyReducer(state = initialState, action) {
  console.log("action......", action)
  console.log("state =", state)
  const { type, payload } = action;
  switch (type) {
    case 'addSearch':
      const requests = [...state.requests, payload];
      console.log('requests', requests);

      return { requests };
    default:
      return state;
  }
}

//addsearch action 
function addSearch(requestParams, data) {
  return {
    type: 'addSearch',
    payload: {
      url: requestParams.url,
      method: requestParams.method,
      result: data,
    },
  };
}



function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [requestParams, setrequestParams] = useState({});

  async function callApi(requestParams) {
    setrequestParams(requestParams);
  }

  useEffect(() => {
    (async function () {
      try {
        const raw = await fetch(requestParams.url);
        const data = await raw.json();
        setdata(null);
        setloading(true);
        setTimeout(() => {
          setloading(false);
          setdata(data);
        }, 800);
        dispatch(addSearch(requestParams, data));
      } catch (e) {
        setdata(null);
      }
    })()
  }, [requestParams]);

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div className="request">
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
      </div>
      <History handleApiCall={callApi} history={state.requests} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;