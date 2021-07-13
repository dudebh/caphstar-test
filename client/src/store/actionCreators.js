import { SET_SOSIALMEDIA, SET_SOSIALMEDIABYID, SET_DOCUMENT } from './actionTypes'
import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/aplikasi'

export function setSosialMedia(input){
    return {
        type: SET_SOSIALMEDIA,
        payload:  input
    }
}

export function setSosialMediaById(input){
    return {
        type: SET_SOSIALMEDIABYID,
        payload:  input
    }
}

export function setDocument(input){
    return {
        type: SET_DOCUMENT,
        payload:  input
    }
}

export function fetchSosialMedia(){
    return (dispatch, getState) => {
        axios({
            url: baseUrl,
            method: 'get'
        })
        .then(({data}) => {
            console.log(data);
            dispatch(setSosialMedia(data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export function addSosialMedia(payload){
    return (dispatch, getState) => {
        return axios({
            url: baseUrl,
            method: 'post',
            data: payload
        })
    }
}

export function editSosialMedia(id, payload){
    return (dispatch, getState) => {
        return axios({
            url: baseUrl+`/${id}`,
            method: 'put',
            data: payload
        })
    }
}

export function deleteSosialMedia(id){
    return (dispatch, getState) => {
        axios({
            url: baseUrl+`/${id}`,
            method: 'delete'
        })
        .then(({data}) => {
            dispatch(fetchSosialMedia())
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export function fetchSosialMediaById(id){
    return (dispatch, getState) => {
        axios({
            url: baseUrl+`/${id}`,
            method: 'get'
        })
        .then(({data}) => {
            dispatch(setSosialMediaById(data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}