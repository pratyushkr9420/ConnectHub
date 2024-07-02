import React, { FC, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "../graphql/mutations";
import { Button, View } from "react-native";
import CustomInput from "./CustomInput";
import { Todo } from "../API";

const client = generateClient();

type AddTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const AddTask: FC<AddTodoProps> = ({ setTodos }) => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const newTodo = await client.graphql({
      query: createTodo,
      variables: {
        input: {
          name,
        },
      },
    });
    setName("");
    setTodos(prevTodos => [...prevTodos, newTodo.data.createTodo]);
    console.log("Todo created!");
  };

  return (
    <View style={{ flexDirection: "row", maxWidth: 350, alignItems: "center" }}>
      <CustomInput label="Create todo" onChangeText={setName} value={name} />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

export default AddTask;
