import axios from 'axios'
import { useCallback, useState } from 'react'

export interface UserDataProps {
  bio: string
  name: string
  login: string
  company: string
  html_url: string
  followers: number
  avatar_url: string
}

export interface IssueDataProps {
  body: string
  title: string
  number: number
  created_at: string
}

interface IssueProps {
  incomplete_results: boolean
  items: IssueDataProps[]
  total_count: number
}

export function useFetch() {
  const baseURL = 'https://api.github.com'

  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps)
  const [issueData, setIssueData] = useState<IssueProps>({} as IssueProps)

  const getUseData = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}/users/joalissongomes1994`)
      const { data } = response

      setUserData(data)

      return true
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getIssues = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseURL}/search/issues?q=%20repo:joalissongomes1994/github-blog`,
      )
      const { data } = response

      data && setIssueData(data)

      return true
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { getUseData, getIssues, userData, issueData }
}
