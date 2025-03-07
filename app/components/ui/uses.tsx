import { NavbarDemo } from "../navbar"

export default function Use(){

    return <>
    <NavbarDemo/>
          <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4 relative">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-gray-800 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Centered Content */}
      <div className="relative bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to our website</h1>
        <ul className="text-gray-700 text-left space-y-2">
        <li>🌐 Visit our website.</li>
        <li>🖱️ Click on &quot;Enter Username&quot;.</li>
        <li>⌨️ Type your GitHub username in the input field.</li>
        <li>🔍 Press the &quot;Submit&quot; button.</li>
        <li>📄 Your public GitHub information will be displayed in a simple format.</li>
        </ul>
      </div>
    </div>
    </>
}