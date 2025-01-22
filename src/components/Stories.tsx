import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
// Add this interface near the top of the file
interface Story {
  id: number;
  title: string;
  content: string;
}

const StoryCard = ({ story }: { story: Story }) => {
  return (
    <div className="group perspective h-96" style={{ perspective: "2000px" }}>
      <div className="relative w-full h-full rounded-xl transition-all duration-500 transform-gpu group-hover:rotate-y-180 preserve-3d">
        {/* Front of the card */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-xl p-6 backface-hidden">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
              <div className="w-16 h-1 bg-white rounded-full mb-4"></div>
            </div>
            <div className="text-sm opacity-80">Click to read more</div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-xl p-6 transform rotate-y-180 backface-hidden overflow-hidden">
          <div className="h-full flex flex-col">
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              {story.title}
            </h4>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
            <p className="text-gray-600 text-sm leading-relaxed overflow-y-auto flex-grow">
              {story.content}
            </p>
            <div className="pt-4 mt-auto border-t border-gray-100">
              <Link
                to={`/story/${story.id}`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Read Full Story
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingCard = () => (
  <div className="h-96 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
    <div className="h-full flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
    </div>
  </div>
);

const ErrorCard = ({ onRetry }: { onRetry: () => void }) => (
  <div className="col-span-full h-64 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center p-6">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Unable to load stories
      </h3>
      <p className="text-red-600 mb-4">
        There was an error fetching the stories. Please try again.
      </p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Retry
      </button>
    </div>
  </div>
);

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStories = () => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/stories")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch stories");
        return response.json();
      })
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(6)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorCard onRetry={fetchStories} />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Stories</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the rich history and memorable moments of our community
          through these collected stories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
