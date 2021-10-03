import { useState } from 'react';

import './form.scss';

function Form(props) {
    const [method, setmethod] = useState('get');
    const [url, seturl] = useState('');
    const [body, setbody] = useState('');
    const [ShowBody, setShowBody] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            method: method,
            url: url,
            body: body,
        };
        props.handleApiCall(formData);
    }

    function handleMethod(e) {
        setmethod(e.target.id);

        e.target.id === 'post' || e.target.id === 'put'
            ? setShowBody(true)
            : setShowBody(false);
    }

    function handleUrl(e) {
        seturl(e.target.value);
        // console.log(url);
    }

    function handleBody(e) {
        setbody(e.target.value);
        // console.log(body);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        onChange={(e) => handleUrl(e)}
                        data-testid="urlInput"
                        placeholder="URL"
                        name="url"
                        type="text"
                    />
                    <button data-testid="mybtn" type="submit">
                        GO!
                    </button>
                    <br />
                    {ShowBody && (
                        <>
                            <textarea
                                onChange={(e) => handleBody(e)}
                                placeholder="body"
                                name="body"
                                rows="4"
                                cols="50"
                            ></textarea>
                            <br />
                        </>
                    )}
                </label>

                <label className="methods">
                    <span
                        onClick={(e) => handleMethod(e)}
                        className={method === 'get' ? 'active' : ''}
                        id="get"
                        data-testid="methodInput"
                    >
                        GET
                    </span>
                    <span
                        onClick={(e) => handleMethod(e)}
                        className={method === 'post' ? 'active' : ''}
                        id="post"
                    >
                        POST
                    </span>
                    <span
                        onClick={(e) => handleMethod(e)}
                        className={method === 'put' ? 'active' : ''}
                        id="put"
                    >
                        PUT
                    </span>
                    <span
                        onClick={(e) => handleMethod(e)}
                        className={method === 'delete' ? 'active' : ''}
                        id="delete"
                    >
                        DELETE
                    </span>
                </label>
            </form>
        </div>
    );
}

export default Form;