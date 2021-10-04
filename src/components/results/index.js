import JSONPretty from 'react-json-pretty';
import './results.scss';

import 'react-json-pretty/themes/monikai.css';

function Results(props) {
    return (
        <>
            <section className="results">
                <div data-testid="results">
                    {props.data ? (
                        <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
                    ) : null}
                </div>
                <div data-testid="loading">
                    {props.loading && (
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Results;