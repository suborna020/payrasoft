/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const { name } = event.target;
        const { value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'https://619c762368ebaa001753c8a5.mockapi.io/casConsulting/users';

        try {
            await axios({
                method: 'post',
                url,
                data: inputs,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className="shadow rounded p-4 mt-5" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={inputs.name || ''}
                                onChange={handleChange}
                                // required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={inputs.email || ''}
                                onChange={handleChange}
                                // required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={inputs.password || ''}
                                onChange={handleChange}
                                // required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
