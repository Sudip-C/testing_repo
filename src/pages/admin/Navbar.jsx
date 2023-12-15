import React from 'react'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminProfile } from '../../components/admin/AdminProfile'
export const Navbar = () => {
    return (
        <div className=' ml-64 border-4 p-4 top-0'>
            <div class="flex flex-row justify-between">
                <div class="basis-3/5  ">
                    <AdminSearchBar />
                </div>
                <div class="w-'auto border-2 mr-2 ">
                    <div className=''>   
                    <AdminProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}
