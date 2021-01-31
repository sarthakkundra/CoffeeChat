import React from "react";
import { useNavigate } from "@reach/router";
import { useAuth } from "../context/authentication/AuthContext";

const DefaultLoadingFallback = () => {
  return <p>Loading...</p>;
};

export interface withAuthRedirectProps {
  WrappedComponent: any;
  LoadingComponent?: any;
  expectedAuth: boolean;
  location: string;
}

export default function withAuthRedirect({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location,
}: withAuthRedirectProps) {
  const WithAuthRedirectWrapper = (props: any) => {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useAuth();
    if (isLoading) {
      return <LoadingComponent />;
    }
    if (typeof window !== "undefined" && expectedAuth !== isAuthenticated) {
      navigate(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };
  return WithAuthRedirectWrapper;
}
