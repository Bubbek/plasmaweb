import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3000/api/test/'

export function getPublicContent() {
  return axios.get(API_URL + 'all')
}

export function getUserBoard() {
  return axios.get(API_URL + 'user', {headers: authHeader()})
}

export function getModeratorBoard() {
  return axios.get(API_URL + 'mod', {headers: authHeader()})
}

export function getAdminBoard() {
  return axios.get(API_URL + 'admin', {headers: authHeader()})
}
