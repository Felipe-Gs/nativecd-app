import { View, Text } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export default function User() {
   return (
      <View className="items-center ">
         <Avatar className="w-32 h-32 border-4 border-gray-600">
            <AvatarImage source={{ uri: "https://github.com/Felipe-Gs.png" }} />
            <AvatarFallback>Felipe gomes</AvatarFallback>
         </Avatar>
         <Text className="color-white font-bold text-2xl mt-4">
            Felipe Gomes
         </Text>
         <Text className="text-gray-400 text-lg">@Felipe-Gs</Text>
      </View>
   );
}
