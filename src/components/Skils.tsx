import { View, Text } from "react-native";
import React from "react";
import { Ttile } from "@/components/Ttile";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export default function Skils() {
   return (
      <View className="w-full">
         <Ttile>Skills</Ttile>

         <View className="flex-row w-full flex-wrap gap-3">
            {SKILLS.map((skill) => (
               <Badge key={skill.name} label={skill.name} icon={skill.icon} />
            ))}
         </View>
      </View>
   );
}
