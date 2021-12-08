/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function SecondStep({ formData, setFormData }) {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    required
                />
            </div>
        </div>
    );
}

export default SecondStep;
