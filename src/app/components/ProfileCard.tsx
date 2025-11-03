import { Mail, Phone, MapPin, Briefcase, Star } from "lucide-react";

type UserProps = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  occupation: string;
  company: string;
  department: string;
  salary: number;
  joinDate: string;
  lastLogin: string;
  isActive: boolean;
  skills: string[];
  avatar?: string;
};

type Props = {
  userData: UserProps;
};

export default function ProfileCard({ userData }: Props) {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col items-center">
        <img
          src={
            userData.avatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt={userData.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 shadow-md"
        />

        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {userData.name}
        </h2>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Briefcase size={16} className="text-indigo-500" />
          {userData.occupation} @ {userData.company}
        </p>

        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <MapPin size={14} className="text-pink-500" />
          {userData.city}, {userData.state}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Age: {userData.age} | Gender: {userData.gender}
        </p>

        <p
          className={`mt-2 text-xs font-semibold ${
            userData.isActive ? "text-green-600" : "text-red-500"
          }`}
        >
          {userData.isActive ? "Active" : "Inactive"}
        </p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {userData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="mt-5 flex gap-3">
          <a
            href={`mailto:${userData.email}`}
            className="flex items-center gap-2 text-sm text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg transition"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href={`tel:${userData.phone}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
          >
            <Phone size={16} /> Call
          </a>
        </div>

        {/* Join Info */}
        <p className="text-xs text-gray-400 mt-3">
          Joined on: {new Date(userData.joinDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
