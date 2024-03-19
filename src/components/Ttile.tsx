import { View, Text, TextProps } from "react-native";
import React from "react";

export function Ttile(props: TextProps) {
   return (
      <Text
         className="text-white font-bold text-xl mt-6 mb-2"
         {...props}
      ></Text>
   );
}
