import Button from "../components/form/Button";
import Input from "../components/form/Input";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0f111a] text-white">
      <div className="bg-[#1a1c26] p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <Input label="Username" id="username"></Input>
          <Input label="Password" id="password" type="password"></Input>
          <Button type="submit">Login</Button>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-400"
                >
                    Remember me
                </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
                </a>
                </div>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
