


export default function TwoFactorAuth() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#0f111a] text-white">
        <div className="bg-[#1a1c26] p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4">Two-Factor Authentication</h1>
            <p className="mb-4">Please enter the code sent to your email.</p>
            <form>
            <div className="mb-4">
                <label
                className="block text-sm font-medium mb-2"
                htmlFor="code"
                >
                Code
                </label>
                <input
                type="text"
                id="code"
                className="w-full p-2 bg-[#2a2d38] border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
                Verify
            </button>
            </form>
        </div>
        </div>
    );
}