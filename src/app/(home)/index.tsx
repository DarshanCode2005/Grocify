import { useAuth, useClerk, useUser } from '@clerk/expo'
import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const { isSignedIn } = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      {!isSignedIn ? (
        <>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </>
      ) : (
        <>
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
          <Pressable style={styles.button} onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sign out</Text>
          </Pressable>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})