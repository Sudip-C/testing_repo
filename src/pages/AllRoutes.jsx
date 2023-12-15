import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './admin/Navbar'
import { Sidebar } from './admin/Sidebar'
import HomePage from './user/HomePage'
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/dashboard' element={
                <div>
                    <Navbar />
                    <div className="flex">
                        <Sidebar />
                        <main className="p-4  ml-64 flex-grow">
                            <h2 className="text-2xl font-semibold mb-4">Welcome to the Admin Panel</h2>
                        </main>
                    </div>
                </div>
            }
             />
        </Routes>
    )
}

