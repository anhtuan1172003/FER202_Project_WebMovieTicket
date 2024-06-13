import React, { useState } from 'react';
import '../style/UserProfile.css';
export default function UserProfiles() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [addressLine, setAddressLine] = useState('');
    const [email, setEmail] = useState('');

    const handleSaveProfile = () => {
        console.log('Saving profile...');
    };

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img
                            className="rounded-circle mt-5"
                            width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            alt="Profile"
                        />
                        <span className="font-weight-bold">shockwave8456</span>
                        <span className="text-black-50">shockwave@gmail.com</span>
                    </div>
                </div>

                <div className="col-md-6 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label className="labels">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter..."
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="labels">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter..."
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="UserName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="PhoneNumber"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Address Line</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address line"
                                    value={addressLine}
                                    onChange={(e) => setAddressLine(e.target.value)}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <button className="btn btn-primary profile-button" type="button" onClick={handleSaveProfile}>
                                Save Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
