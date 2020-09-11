import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

interface DefaultValues {
  name: string;
  email: string;
  username: string;
  password: string;
  bio: string;
  games: Array<string>;
  platforms: Array<string>;

  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  setBio: (value: string) => void;
  setGames: Dispatch<SetStateAction<never[]>>;
  setPlatforms: Dispatch<SetStateAction<never[]>>;
}

export const SignupContext = createContext<DefaultValues | undefined>(void 0);

const SignupProvider: React.FC<ReactNode> = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio]=  useState("");
  const [games, setGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  return (
    <SignupContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        bio,
        setBio,
        games,
        setGames,
        platforms,
        setPlatforms, 
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
export default SignupProvider;

export function useSignup() {
  const context = useContext(SignupContext);

    if(typeof context === undefined){
        throw new Error("useSignup context must be used within an SignupContext")
    }

    return context;
 
}
