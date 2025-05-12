import Button from "../components/form/Button";
import Input from "../components/form/Input";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0f111a] text-white">
      <div className="bg-[#1a1c26] p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form>
          <Input label="Username" id="username"></Input>
          <Input label="Email" id="email" type="email"></Input>
          <Input label="Password" id="password" type="password"></Input>
          <Input label="Confirm Password" id="confirmPassword" type="password"></Input>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}
