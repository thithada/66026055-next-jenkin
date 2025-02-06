'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Modern Website
          </motion.h1>
          <p className="text-gray-600 text-lg">
            66026055 Thithada
          </p>
        </section>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 space-x-4">
          {['about', 'services', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="text-indigo-600 text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-semibold mb-4">เริ่มต้นใช้งานง่าย</h2>
            <p className="text-gray-600 leading-relaxed">
              ออกแบบมาเพื่อให้ผู้ใช้สามารถเริ่มต้นได้อย่างรวดเร็ว 
              พร้อมฟีเจอร์ที่ครบครัน
            </p>
          </motion.div>

          <motion.div 
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="text-indigo-600 text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-semibold mb-4">นวัตกรรมใหม่</h2>
            <p className="text-gray-600 leading-relaxed">
              พัฒนาด้วยเทคโนโลยีล่าสุด เพื่อประสิทธิภาพสูงสุด
              ในการใช้งาน
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            เริ่มต้นใช้งานเลย
          </button>
        </motion.div>
      </motion.div>
    </main>
  )
}
