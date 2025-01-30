import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { authContext } from "@/libs/store/auth-context";

function SignIn() {
const { googleLoginHandler }= useContext(authContext);

  return (
    <main className="container max-w 2.l px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center">Welcome</h1>

      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
        <div className="h-52">
          <img
            src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="object-cover w-full h-full"
          ></img>
        </div>
        <div className="px-4 py-4">
          <h3 className="text-2xl text-center">Please sign in to continue</h3>
            <button onClick={googleLoginHandler} className="flex self-start gap-2 p-4 mx-auto mt-6 text-white bg-gray-700 rounded-lg">
                <FcGoogle className="text-2xl"/>Google
            </button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
