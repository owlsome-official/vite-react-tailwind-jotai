import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";

import {
  isAuthenticatedAtom,
  userFullnameAtom,
  userInfoAtom,
} from "@/utils/store/atoms";
import Input from "components/ui/Input";
import { Label } from "components/ui/Label";
import { OverlayLoading } from "react-loading-randomizable";
import { cn, delay } from "utils/index";
import FlipWords from "../ui/FlipWords";

const SignIn = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const userFullname = useAtomValue(userFullnameAtom);
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", e);
    setLoading(true);
    await delay(1000);
    setUserInfo({
      firstName: "John",
      lastName: "Doe",
      token: "MTIzNDU2",
      email: email,
    });
    setLoading(false);
  };

  if (isAuthenticated) {
    return (
      <div className="mx-auto w-full max-w-md rounded-[22px] bg-white p-4 shadow-lg ring-2 md:p-8">
        <div className="text-2xl font-bold">
          Welcome back, <FlipWords words={[userFullname]} duration={1000} />.
        </div>
        <div className="text-xl">
          (<FlipWords words={[userInfo.email ?? ""]} duration={1000} />)
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-md rounded-[22px] bg-white p-4 shadow-lg ring-2 md:p-8">
      <OverlayLoading active={loading} />
      <h2 className="text-xl font-bold text-neutral-800">Sign In</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi neque
        delectus quae sunt deserunt incidunt aperiam ad accusantium accusamus,
        explicabo velit nobis atque, similique, deleniti praesentium cum a
        dolorum! Consequatur!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="my@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:bg-gray-300 disabled:bg-none [&_span]:disabled:hidden"
          type="submit"
          disabled={loading}
        >
          Sign In &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default SignIn;
