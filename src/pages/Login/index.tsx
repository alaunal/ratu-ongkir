import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";

import { GoogleLogo } from "@phosphor-icons/react";

import { useGoogleLogin, TokenResponse } from "@react-oauth/google";

import { useAuth } from "@/contexts";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin, user } = useAuth();

  const from = location.state?.from?.pathname || "/";

  // Function to check if user is signed in using cookies
  const checkUserSession = () => {
    if (user) {
      toast("Welcome back!", { description: "You are still signed in." });
      navigate(from, { replace: true });
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        signin(response.data, () => navigate(from, { replace: true }));
      } catch (error) {
        toast("Error Profile", {
          description: `Error fetching user info: ${error}`,
        });
      }
    },
    onError: () => {
      toast("Error!", {
        description: `Login Failed`,
      });
    },
  });

  React.useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md flex flex-col justify-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <img
            src="/logo.png"
            alt="Ratu Ongkir"
            className="inline-block w-auto h-14"
          />
          <h1 className="font-extrabold text-3xl text-slate-800">
            Ratu<span className="font-normal text-2xl">-Ongkir</span>
          </h1>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold text-slate-800">
              Sign in to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button
                type="button"
                onClick={() => handleGoogleLogin()}
                className="flex items-center justify-center gap-2"
              >
                <GoogleLogo size={20} weight="bold" />
                Sign in with Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center text-xs text-gray-500">
            Powered code by{" "}
            <a
              href="https://github.com/alaunal"
              target="_blank"
              className="text-slate-900 font-semibold ml-1"
            >
              Alaunal
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
