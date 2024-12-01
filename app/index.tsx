import React from 'react';
import { TaskList } from './tasks/TaskList';
import { View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <TaskList />
      <Button title="Add Task" onPress={() => router.push('/tasks/TaskForm')} />
    </View>
  );
}
