import React, { useState } from 'react';
import UserProfiles from "../components/UserProfile";
import '../style/AccountNav.css';
export default function AccountNav() {
    const [activeTab, setActiveTab] = useState('transaction');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="account-nav-container">
                <div className="account-nav relative">
                    <ul role="tablist">
                        <li className={activeTab === 'transaction' ? 'active' : 'inactive'}>
                            <a href="#transaction" onClick={() => handleTabClick('transaction')}>
                                Transaction
                            </a>
                            <div className="indicator"></div>
                        </li>
                        <li className={activeTab === 'profile' ? 'active' : 'inactive'}>
                            <a href="#profile" onClick={() => handleTabClick('profile')}>
                                Profile
                            </a>
                        </li>
                        <li className={activeTab === 'notification' ? 'active' : 'inactive'}>
                            <a href="#notification" onClick={() => handleTabClick('notification')}>
                                Notification
                            </a>
                        </li>
                        <li className={activeTab === 'reward' ? 'active' : 'inactive'}>
                            <a href="#reward" onClick={() => handleTabClick('reward')}>
                                Gift
                            </a>
                        </li>
                        <li className={activeTab === 'policy' ? 'active' : 'inactive'}>
                            <a href="#policy" onClick={() => handleTabClick('policy')}>
                                Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {activeTab === 'profile' && <UserProfiles />}
        </div>
    );
}
