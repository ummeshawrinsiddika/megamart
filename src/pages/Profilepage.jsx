import React from "react";
import { useNavigate } from "react-router";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaVenusMars,
  FaBirthdayCake,
  FaShieldAlt,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <section className="py-10 min-h-screen bg-secondary">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-brand rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=ffffff&color=008ECC&size=128&bold=true`}
            alt={user.firstName}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-white">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-white/80 mt-1">@{user.username}</p>
            <span className="inline-block mt-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full capitalize">
              {user.role}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-brand" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-semibold text-primary">{user.email}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <FaPhone className="text-brand" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="text-sm font-semibold text-primary">{user.phone}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <FaVenusMars className="text-brand" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Gender</p>
              <p className="text-sm font-semibold text-primary capitalize">
                {user.gender}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <FaBirthdayCake className="text-brand" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Age</p>
              <p className="text-sm font-semibold text-primary">
                {user.age} years
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <FaUser className="text-brand" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Username</p>
              <p className="text-sm font-semibold text-primary">
                @{user.username}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <FaShieldAlt className="text-brand" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Role</p>
              <p className="text-sm font-semibold text-primary capitalize">
                {user.role}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition text-lg"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
