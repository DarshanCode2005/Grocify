import React from 'react'
import { StyleSheet, Text, type TextProps } from 'react-native'

type TextType = 'default' | 'title' | 'link'

interface ThemedTextProps extends TextProps {
  type?: TextType
}

export function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  return (
    <Text
      style={[
        styles.default,
        type === 'title' && styles.title,
        type === 'link' && styles.link,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#11181C',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#11181C',
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
})
