import { useCallback, useState } from 'react'
import { api } from '../lib/api'

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

export interface IssueDetailsProps extends IssueDataProps {
  user: { login?: string }
  html_url: string
  comments: number
}

interface IssueProps {
  incomplete_results: boolean
  items: IssueDataProps[]
  total_count: number
}

export function useFetch() {
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps)
  const [issueData, setIssueData] = useState<IssueProps>({} as IssueProps)
  const [issueDetails, setIssueDetails] = useState<IssueDetailsProps>(
    {} as IssueDetailsProps,
  )

  const getUseData = useCallback(async () => {
    try {
      const response = await api.get(`/users/joalissongomes1994`)
      const { data } = response

      setUserData(data)

      return true
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getIssues = useCallback(async (issueName: string) => {
    try {
      const response = await api.get(
        `/search/issues?q=${issueName}%20repo:joalissongomes1994/github-blog`,
      )
      const { data } = response

      data && setIssueData(data)

      return true
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getIssue = useCallback(async (issueNumber: string = '') => {
    try {
      const response = await api.get(
        `/repos/joalissongomes1994/github-blog/issues/${issueNumber}`,
      )
      const { data } = response

      data && setIssueDetails(data)

      return true
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { getUseData, getIssues, getIssue, userData, issueData, issueDetails }
}
