import axios from 'axios'
import { useCallback, useState } from 'react'

export interface IUserData {
  avatar_url: string
  html_url: string
  bio: string
  company: string
  created_at: string
  email: string | null
  followers: number
  followers_url: string
  following: number
  following_url: string
  id: number
  login: string
  name: string
  public_repos: string
  repos_url: string
  type: string
  updated_at: string
}

export function useFetch() {
  const baseURL = 'https://api.github.com'

  const [userData, setUserData] = useState<IUserData>({} as IUserData)

  const getUseData = useCallback(async (username: string) => {
    try {
      const response = await axios.get(`${baseURL}/users/${username}`)
      const { data } = response

      setUserData(data)

      return true
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { getUseData, userData }
}
