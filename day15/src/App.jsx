import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">LaunchDarkly</h1>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to LaunchDarkly</h2>
        <p className="text-gray-700 mt-4">
          This is a simple responsive layout built using Tailwind CSS in a React project.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center text-sm p-4">
        &copy; 2025 LaunchDarkly. All rights reserved.
      </footer>
    </div>
  );
}



