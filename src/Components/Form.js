/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const FormTitles = ['First Step', 'Second Step', 'Click Submit'];

    const PageDisplay = () => {
        if (page === 0) {
            return <FirstStep formData={formData} setFormData={setFormData} />;
        }
        if (page === 1) {
            return <SecondStep formData={formData} setFormData={setFormData} />;
        }
        return <ThirdStep formData={formData} setFormData={setFormData} />;
    };

    return (
        <form className="shadow rounded p-4">
            <h4 className="mx-auto text-center text-info">{FormTitles[page]}</h4>
            <div className="progress my-3">
                <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{
                        width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%',
                    }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
            {PageDisplay()}

            <div className="flex my-4">
                <button
                    type="button"
                    className="btn btn-primary"
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Previous
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                        // submit activity
                        if (page === FormTitles.length - 1) {
                            alert(JSON.stringify(formData));
                            setFormData({
                                name: '',
                                email: '',
                                password: '',
                            });
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                    {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
                </button>
            </div>
        </form>
    );
}

export default Form;
