import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import '../App.css';

function ChatPage() {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-secondary-800 app-container">
      <header className="border-b w-full py-3 px-4 bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center app-title">
          <div className="flex items-center mb-1">
            <div className="relative">
              <svg className="w-5 h-5 text-cqupt-blue-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cqupt-blue-500 rounded-full animate-pulse-slow"></span>
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-gradient">重邮 AI 助手</span>
            </h1>
          </div>
          <div className="app-subtitle text-xs">
            <span className="text-cqupt-blue font-medium">重庆邮电大学</span> · <span className="text-cqupt-green">学习规划与职业发展</span>
          </div>
        </div>
      </header>
      
      {showInfo && (
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm animate-slide-down">
          <div className="max-w-4xl mx-auto py-2 px-4">
            <div className="flex justify-between items-center">
              <p className="text-xs text-secondary-600">AI助手可以帮助您解答学习和校园生活相关的问题</p>
              <button 
                onClick={() => setShowInfo(false)}
                className="flex items-center text-secondary-500 hover:text-secondary-700"
                aria-label="关闭"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
      
      <main className="max-w-4xl mx-auto py-4 sm:px-6 lg:px-8">
        <ChatInterface />
      </main>
      
      <footer className="border-t border-gray-200 py-2 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-secondary-500">
          <p>© {new Date().getFullYear()} 重庆邮电大学 - 学习规划与职业发展助手</p>
        </div>
      </footer>
    </div>
  );
}

export default ChatPage; 