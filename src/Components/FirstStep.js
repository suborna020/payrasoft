/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function FirstStep({ formData, setFormData }) {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    required
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
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    required
                />
            </div>
        </div>
    );
}

export default FirstStep;
