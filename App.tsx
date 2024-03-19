import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { Profile } from "./src/app/Profile";

export default function App() {
   return (
      <>
         <Profile />
         <StatusBar style="light" />
      </>
   );
}
