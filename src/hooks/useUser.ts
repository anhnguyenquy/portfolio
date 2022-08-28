import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'src/lib'

export const useUser = () => {
  const [user] = useAuthState(auth)
  return user
}