import React from 'react';
// Import the file
import SignupForm from "./SignupForm"

const Signup: React.FC = () => {
  // And use it after the h2 tag
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
export default Signup;