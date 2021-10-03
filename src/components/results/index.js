import JSONPretty from 'react-json-pretty';
import './results.scss';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
    return (
        <>
            <section className="results">
                <div data-testid="results">
                    {props.data ? (
                        <>
                            <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
                            {/* "count : "
            <JSONPretty id="json-pretty" data={props.data.count}></JSONPretty>
            "headers : "
            <JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty>
            "results : "
            <JSONPretty id="json-pretty" data={props.data.results}></JSONPretty>  */}
                        </>
                    ) : null}
                </div>
                {!props.data && (
                    <div data-testid="loading" className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Results;











// import React from 'react';
// import './results.scss';
// import JSONPretty from 'react-json-pretty';
// import 'react-json-pretty/themes/monikai.css';

// function Results (props){
//   console.log('resultData',props.data);

//   return (
//     <section data-testid="result"  >
//       { props.data &&
//        <JSONPretty data ={props.data} ></JSONPretty>
//       }



//     </section>
//   );

// }

// export default Results;