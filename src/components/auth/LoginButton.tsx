import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="max-w-[350px] mt-2 bg-white border-2 text-black hover:bg-white" onClick={() => loginWithRedirect()}>Continue with Google</Button>;
};

export default LoginButton;