import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
// import Modal from "react-native-modal";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  //   const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleForgotPassword = () => {
    navigation.navigate("LupaPassword");
  };

  const handleSignIn = () => {
    const url = "https://mongo-ngaos.vercel.app/login";
    const userData = { email, password };

    try {
      axios
        .post(url, userData)
        .then((response) => {
          if (response.status === 201) {
            navigation.navigate("Home");
          } else {
            // Handle other status codes if needed
          }
        })
        .catch((error) => {
          console.error("Login error:", error.message);
        });
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  };

  const handleModalClose = () => {
    // navigation.navigate("Home");
  };

  return (
    <View className="mx-auto my-10">
      <Image source={require("../assets/login.png")} />
      <Text className="mt-6 text-[20px] font-semibold">Welcome Back 🖐️</Text>
      <Text className="mt-3">
        Today is a new day. It's your day. You shape it.
      </Text>
      <Text>Sign in to start managing your projects.</Text>
      {/* form input */}
      <View className="mt-5">
        <Text className="font-semibold mb-2">Email</Text>
        <TextInput
          className="border rounded-lg p-2 border-slate-300"
          placeholder="mata@gmail.com"
          onChangeText={(text) => setEmail(text)}
        />
        <Text className="font-semibold my-2">Password</Text>
        <TextInput
          className="border rounded-lg p-2 border-slate-300"
          placeholder="At least 8 characters"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {/* Teks "Lupa Password" yang dapat di klik */}
        <View className="flex justify-end flex-row">
          <Text className="text-blue-800 mt-2" onPress={handleForgotPassword}>
            Lupa Password
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleSignIn}
          className="bg-blue-950 h-12 rounded-xl flex justify-center mt-3"
        >
          <Text className="text-white text-center font-semibold">Sign In</Text>
        </TouchableOpacity>
        {/* <Modal isVisible={isSuccessModalVisible}>
          <View>
            <Text>Login Success!</Text>
            <TouchableOpacity onPress={handleModalClose}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal> */}
      </View>
    </View>
  );
}
