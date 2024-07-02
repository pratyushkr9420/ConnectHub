import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, View } from "react-native";
import { generateClient } from "aws-amplify/api";
import { listTodos } from "../graphql/queries";
import { deleteTodo } from "../graphql/mutations";
import { Todo } from "../API";
import CustomText from "./CustomText";
import AddTodo from "./AddTask";
import { ThemedView } from "../../themes/theme";

const client = generateClient();

const ListTasks = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchToDos = async () => {
    const todos = await client.graphql({ query: listTodos });
    setTodos(todos.data.listTodos.items);
  };
  const handleDelete = async (id: string) => {
    await client.graphql({
      query: deleteTodo,
      variables: {
        input: {
          id,
        },
      },
    });
    setTodos(prev => prev.filter(todo => todo.id !== id));
    console.log("Todo deleted!");
  };
  useEffect(() => {
    fetchToDos();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <AddTodo setTodos={setTodos} />
        <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
          <CustomText type="title">Todos</CustomText>
          {todos.map(todo => (
            <View
              key={todo.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText type="body">{todo.name}</CustomText>
              <Button title="X" color="red" onPress={() => handleDelete(todo.id)} />
            </View>
          ))}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ListTasks;
