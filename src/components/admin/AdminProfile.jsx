import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5"
export const AdminProfile = () => {
    return (
        <div className=' items-end' >
            <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center gap-4">
                    <RxAvatar className="text-4xl" />
                </div>
            </div>
        </div>
    )
}
