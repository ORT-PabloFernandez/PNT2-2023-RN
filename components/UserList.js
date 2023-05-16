import { View, FlatList, Text } from "react-native";
import User from "./User";

const UserList = (props) => {
  return (
    <FlatList
      data={props.items}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => (
        <User
          image={item.Picture}
          name={item["Display name"]}
          title={item.Title}
        />
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
