import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export function ThemedView({ style, ...props }: ViewProps) {
  return <View style={[styles.default, style]} {...props} />;
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
