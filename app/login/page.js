// app/login/page.js
"use client";

import { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignUpForm';

export default function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    window.history.back(); // Go back to the previous page
  };

  const renderForm = () => {
    return activeTab === 'login' ? <LoginForm /> : <SignUpForm />;
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === 'login' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === 'signup' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>
        {renderForm()}
      </Modal>
    </>
  );
}
