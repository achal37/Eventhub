"use client";

export default function SignUpForm() {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-orange-500">Sign Up</h2>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium">Email:</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email" 
          required 
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-medium">Password:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password" 
          required 
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirm-password" className="mb-1 text-sm font-medium">Confirm Password:</label>
        <input 
          type="password" 
          id="confirm-password" 
          placeholder="Confirm your password" 
          required 
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
        Sign Up
      </button>
    </form>
  );
}
