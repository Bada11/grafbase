"use client";

import React, { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import Button from "./Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <>
        {Object.values(providers).map((provider: Provider, i) => (
          <Button
            key={i}
            handleClick={() => signIn(provider?.id)}
            title="Sign in"
            styles=""
          />
        ))}
      </>
    );
  }
};

export default AuthProviders;
