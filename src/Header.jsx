import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="py-2 bg-gray-200">
      <nav>
        <a href="#">Home</a> | <a href="#">New Job</a> | <a href="./Signup">Signup</a> | <a href="./Login">Login</a> |{" "}
        <a href="./LogoutLink">Logout</a>
      </nav>
      <Signup />
      <Login />
      <LogoutLink />
    </header>
  );
}
