"use client";

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-500">Login</h2>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium">Email:</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email" 
          required 
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-medium">Password:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password" 
          required 
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
        Login
      </button>
    </form>
  );
}
