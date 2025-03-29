import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../Redux/Data/nameSlice';
import { setEmail } from '../Redux/Data/emailSlice';
import Navbar from './Navbar';

const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.id);
  const userName = useSelector((state) => state.name);
  const userEmail = useSelector((state) => state.email);

  const [name, setLocalName] = useState(userName || '');
  const [email, setLocalEmail] = useState(userEmail || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setLocalName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setLocalEmail(e.target.value);
  };

  const handleSave = () => {
    setLoading(true);

    // Simulate API call to update profile
    setTimeout(() => {
      // Update Redux with new values
      dispatch(setName(name));
      dispatch(setEmail(email));
      
      setIsEditing(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Profile
              </h1>

              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={loading}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 flex items-center ${
                      loading 
                        ? 'bg-purple-700/50 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </>
                    ) : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                  <div className="bg-gray-800 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                    {userName && (
                      <span className="text-3xl font-bold text-white">{userName?.charAt(0)?.toUpperCase()}</span>
                    )}
                  </div>
                </div>
                {isEditing && (
                  <button className="text-sm text-purple-400 hover:text-purple-300">
                    Change Photo
                  </button>
                )}
              </div>
              
              {/* User Info */}
              <div className="bg-gray-800/70 rounded-lg border border-gray-700 p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  ) : (
                    <p className="text-lg">{userName || 'Not set'}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  ) : (
                    <p className="text-lg">{userEmail || 'Not set'}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    User ID
                  </label>
                  <p className="font-mono text-sm text-gray-400">{userId || '0000'}</p>
                  <p className="text-xs text-gray-500 mt-1">This cannot be changed</p>
                </div>
              </div>
              
              {/* Account Actions */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">Account Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button className="px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors duration-300 text-left">
                    Change Password
                  </button>
                  <button className="px-4 py-3 bg-red-900/30 hover:bg-red-900/50 border border-red-800 rounded-lg transition-colors duration-300 text-left text-red-200">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 