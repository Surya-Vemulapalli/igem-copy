import React from "react"


export default function Component4 () {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative h-40 w-64">
                {/* Vertical part of L */}
                <div className="absolute left-0 top-0 bg-green-800 w-40 h-20 rounded-tl-lg rounded-tr-lg text-white text-sm">Lorem </div>
                {/* Horizontal part of L */}
                <div className="absolute left-0 bottom-0 bg-green-800 w-full h-20 rounded-bl-lg rounded-tr-lg rounded-br-lg text-white text-sm">Ipsum</div>
                {/* Image block right next to the vertical part */}
                <div className="absolute left-40 top-0 w-24 h-20 bg-gray-200 flex items-center justify-center rounded-lg shadow">
                    {/* Replace with <img src="your-image.jpg" alt="desc" className="w-full h-full object-cover rounded-lg" /> */}
                    Image
                </div>
            </div>
        </div>
    )
}