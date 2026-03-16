import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >

      <div className="bg-white rounded-xl shadow-lg flex items-center px-8 border border-gray-100" 
           style={{ width: '1250px', height: '175px' }}>
   
        <div className="flex flex-col items-center justify-center space-y-2 mr-12">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500 p-1">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Jose" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-bold text-gray-800 text-lg">Jose</span>
        </div>

        <div className="flex flex-1 items-center justify-between">
  
          <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
            ""Experience the world's finest decor. If you're ready to transform your space into a masterpiece, message me here."."
          </p>

      
          <a 
            href="/Pages/ChatPage" 
            className="ml-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-black transition-colors shadow-md"
          >
            Message Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default page