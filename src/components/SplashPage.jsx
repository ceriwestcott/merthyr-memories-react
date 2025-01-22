import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, BookOpen, MapPin } from 'lucide-react';

function SplashPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-screen">
                {/* Hero Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://uploads.counterfire.org/uploads/2016/06/dowlais_ironworks_lg.jpg"
                        alt="Merthyr Tydfil Panorama"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl text-white">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Merthyr Memories
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                Discover the heart and soul of Wales' historic iron capital through
                                the stories, photos, and memories of its people.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/locations"
                                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    Explore Areas
                                </Link>
                                <Link to="/stories"
                                    className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    Read Stories
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Historical Context Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            A Town Built on Iron and Community
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-700">
                            Once the world's largest iron-producing town, Merthyr Tydfil's story is one of
                            industrial innovation, cultural resilience, and community spirit.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">1750s</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Industrial Revolution</h3>
                            <p className="text-gray-600">The birth of the iron works that would transform Merthyr into an industrial powerhouse.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">1831</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Merthyr Rising</h3>
                            <p className="text-gray-600">A pivotal moment in working-class history, as workers united to demand better conditions.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">Today</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Cultural Heritage</h3>
                            <p className="text-gray-600">A vibrant community celebrating its rich history while building a dynamic future.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Sections */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src="https://www.visitmerthyr.co.uk/media/rrplkgx3/image.png?width=600&height=350&v=1da95a363299b90"
                                alt="Historic Merthyr"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">Photo Gallery</h3>
                                <p className="text-gray-600 mb-6">
                                    Journey through time with our collection of historic and contemporary
                                    photographs showcasing Merthyr's transformation.
                                </p>
                                <Link to="/gallery"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    <Camera className="w-5 h-5 mr-2" />
                                    Browse Gallery
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src="/api/placeholder/800/400"
                                alt="Community Stories"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">Community Stories</h3>
                                <p className="text-gray-600 mb-6">
                                    Discover personal accounts and memories from residents past and present,
                                    weaving together the fabric of our community.
                                </p>
                                <Link to="/stories"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    Read Stories
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;