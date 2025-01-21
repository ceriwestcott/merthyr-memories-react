import React from 'react'

function SplashPage() {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="w-full lg:w-1/2">
                    <div class="rounded-lg shadow-xl bg-gray-700 w-full h-64 lg:h-96 flex items-center justify-center">
                        <span class="text-gray-300 text-2xl">Image Placeholder</span>
                    </div>
                </div>

                <div class="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Discover Merthyr Tydfil</h1>
                    <p class="py-6 text-lg">
                        Explore the rich history of Merthyr Tydfil through photos, stories, and memories shared by its people.
                        Journey into the past and uncover the soul of this historic town in South Wales.
                    </p>
                    <div class="flex flex-col lg:flex-row gap-4">
                        <a href="#gallery" class="btn btn-primary w-full lg:w-auto">View Gallery</a>
                        <a href="#stories" class="btn btn-outline w-full lg:w-auto">Read Stories</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashPage