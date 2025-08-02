import  { useState } from 'react';

const MacCodeBlock = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full py-[10%] sm:py-0 lg:w-1/2 flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
      data-aos="fade-left"
      data-aos-delay="600"
    >
      <div 
        className={`
          relative w-full max-w-md transform transition-all duration-500 ease-out
          ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effect */}
        <div className={`
          absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          rounded-2xl blur-lg opacity-20 transition-opacity duration-500
          ${isHovered ? 'opacity-40' : 'opacity-20'}
        `}></div>
        
        {/* Main Container */}
        <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {/* Window Header */}
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 px-4 py-3 border-b border-gray-600/30">
            <div className="flex items-center justify-between">
              {/* Traffic Lights */}
              <div className="flex space-x-2">
                <div className="group cursor-pointer">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm group-hover:bg-red-400 transition-colors duration-200 relative">
                    <div className="absolute inset-0 bg-red-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm group-hover:bg-yellow-400 transition-colors duration-200 relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm group-hover:bg-green-400 transition-colors duration-200 relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                  </div>
                </div>
              </div>
              
              {/* Window Title */}
              <div className="text-gray-400 text-xs font-medium">
                builder.js
              </div>
              
              {/* Window Controls */}
              <div className="w-16"></div>
            </div>
          </div>
          
          {/* Code Content */}
          <div className="p-6 font-mono text-sm leading-relaxed bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="space-y-1">
              {/* Line 1 */}
              <div className="flex">
                <span className="text-gray-500 w-6 text-right mr-4 select-none">1</span>
                <span className="text-purple-400 font-semibold">function</span>
                <span className="text-white mx-1">build</span>
                <span className="text-yellow-300">()</span>
                <span className="text-white mx-1">{`{`}</span>
              </div>
              
              {/* Line 2 */}
              <div className="flex">
                <span className="text-gray-500 w-6 text-right mr-4 select-none">2</span>
                <span className="text-white ml-4">return</span>
                <span className="text-green-400 ml-2">'clean + scalable + creative'</span>
                <span className="text-white">;</span>
              </div>
              
              {/* Line 3 */}
              <div className="flex">
                <span className="text-gray-500 w-6 text-right mr-4 select-none">3</span>
                <span className="text-white">{`}`}</span>
              </div>
              
              {/* Line 4 - Empty */}
              <div className="flex">
                <span className="text-gray-500 w-6 text-right mr-4 select-none">4</span>
              </div>
              
              {/* Line 5 */}
              <div className="flex">
                <span className="text-gray-500 w-6 text-right mr-4 select-none">5</span>
                <span className="text-blue-400">console</span>
                <span className="text-white">.</span>
                <span className="text-yellow-300">log</span>
                <span className="text-white">(</span>
                <span className="text-blue-400">build</span>
                <span className="text-white">()</span>
                <span className="text-white">);</span>
              </div>
            </div>
            
            {/* Cursor */}
            <div className="flex mt-2">
              <span className="text-gray-500 w-6 text-right mr-4 select-none">6</span>
              <div className="w-2 h-5 bg-green-400 animate-pulse opacity-75"></div>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="bg-gray-800/60 px-4 py-2 border-t border-gray-600/30">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  JavaScript
                </span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>Ln 6, Col 1</span>
                <span>Spaces: 2</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-2xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MacCodeBlock;