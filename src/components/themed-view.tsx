import React from 'react'
import { StyleSheet, View, type ViewProps } from 'react-native'

interface ThemedViewProps extends ViewProps {}

export function ThemedView({ style, ...rest }: ThemedViewProps) {
  return <View style={[styles.container, style]} {...rest} />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
