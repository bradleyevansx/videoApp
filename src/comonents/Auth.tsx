import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Auth = ({ children }: Props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) return <p>...loading</p>;

  return <>{children}</>;
};

export default Auth;
