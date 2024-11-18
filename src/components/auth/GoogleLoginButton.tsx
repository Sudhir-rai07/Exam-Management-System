// import { AuthUser } from '@/Types/types';
// import { useAuthStore } from '@/zustand/store';
// import { GoogleLogin } from '@react-oauth/google';
// import {jwtDecode} from 'jwt-decode';
// import toast from 'react-hot-toast';


// const GoogleLoginButton: React.FC = () => {
//   const setUser = useAuthStore((state) => state.setUser);

//   const handleSuccess = (response: any) => {
//     const decoded: AuthUser = jwtDecode(response.credential); // Decode JWT
//     console.log('Decoded User Info:', decoded);
//     setUser(decoded); // Save user data in Zustand
//     window.location.href = window.location.origin
//     toast.success("Logged in")
//   };

//   const handleError = () => {
//     console.log('Login Failed');
//   };

//   return (
    
//   );
// };

// export default GoogleLoginButton;
