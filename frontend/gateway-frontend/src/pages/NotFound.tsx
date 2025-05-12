


export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#0f111a] text-white">
            <div className="bg-[#1a1c26] p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">404 - Not Found</h1>
                <p className="mb-4">The page you are looking for does not exist.</p>
                <a href="/login" className="text-blue-500 hover:underline">
                    Go to Login
                </a>
            </div>
        </div>
    );
}