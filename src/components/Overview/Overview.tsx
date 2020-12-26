import React from "react";
import { Text, View, Button } from "react-native";
import getRealm from "../../realm/index";

function Overview() {
  async function addProduct() {
    const product = {
      name: "andré",
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create("Product", product);
    });
  }

  return (
    <View>
      <Text>oi</Text>
      <Button title="Add product" onPress={() => addProduct()} />
    </View>
  );
}

export default Overview;
