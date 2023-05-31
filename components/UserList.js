import { View, FlatList, Text, Button } from "react-native";
import User from "./User";

const UserList = (props) => {
  return (
    <FlatList
      data={props.items}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => (
        <View>
          <User
            image={item.Picture}
            name={item["Display name"]}
            title={item.Title}
          />
          <Button
            title="Details"
            onPress={() =>
              props.navigation.navigate("UserDetailsScreen", { item })
            }
          />
        </View>
      )}
    />
  );
};

export default UserList;

{
  /* <View>
      {props.items.map((user) => (
        <User
          image={user.Picture}
          name={user["Display name"]}
          title={user.Title}
        />
      ))}
    </View> */
}
