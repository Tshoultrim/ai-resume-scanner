import apiClient from '../config/axios'

// Team Services
export const getTeams = async () => {
  try {
    const response = await apiClient.get('/teams')
    return response.data
  } catch (error) {
    console.error('Error fetching teams:', error)
    throw error
  }
}

export const getTeamById = async (id) => {
  try {
    const response = await apiClient.get(`/teams/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching team:', error)
    throw error
  }
}

export const createTeam = async (teamData) => {
  try {
    const response = await apiClient.post('/teams', teamData)
    return response.data
  } catch (error) {
    console.error('Error creating team:', error)
    throw error
  }
}

export const updateTeam = async (id, teamData) => {
  try {
    const response = await apiClient.put(`/teams/${id}`, teamData)
    return response.data
  } catch (error) {
    console.error('Error updating team:', error)
    throw error
  }
}

export const deleteTeam = async (id) => {
  try {
    const response = await apiClient.delete(`/teams/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting team:', error)
    throw error
  }
}

// Member Services
export const getMembers = async () => {
  try {
    const response = await apiClient.get('/members')
    return response.data
  } catch (error) {
    console.error('Error fetching members:', error)
    throw error
  }
}

export const getMemberById = async (id) => {
  try {
    const response = await apiClient.get(`/members/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching member:', error)
    throw error
  }
}

export const createMember = async (memberData) => {
  try {
    const response = await apiClient.post('/members', memberData)
    return response.data
  } catch (error) {
    console.error('Error creating member:', error)
    throw error
  }
}

export const updateMember = async (id, memberData) => {
  try {
    const response = await apiClient.put(`/members/${id}`, memberData)
    return response.data
  } catch (error) {
    console.error('Error updating member:', error)
    throw error
  }
}

export const deleteMember = async (id) => {
  try {
    const response = await apiClient.delete(`/members/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting member:', error)
    throw error
  }
}
