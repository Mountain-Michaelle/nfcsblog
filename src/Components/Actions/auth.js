import { LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    USER_LOADED_SUCCESS, 
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
} from "./types";

import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000';

export const checkAuthenticated = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
             }

        const body = JSON.stringify({token: localStorage.getItem('access')});
        try{
            const res = await axios.post(`${BASE_URL}/auth/jwt/verify/`, body, config)
            if(res.data.code !== "token_not_valid"){
                dispatch({
                    type: AUTHENTICATED_SUCCESS,
                })
            }
        } catch(err){
            dispatch({
                type: AUTHENTICATED_FAIL,
            })
        }
        }else{
        dispatch({
            type: AUTHENTICATED_FAIL, 
        })
        }
    }

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        }
        try{
            const res = await axios.get(`${BASE_URL}/auth/users/me/`, config)

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })

        } catch(error) {
            dispatch({
                type: USER_LOADED_FAIL
            })
    }
} 
else{
    dispatch({
        type: USER_LOADED_FAIL
    });
  }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({email, password});

    try{
        const res = await axios.post(`${BASE_URL}/auth/jwt/create/`, body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(load_user());
    }catch(error){
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
            }
            }
        const body = JSON.stringify({email})
        
        try{
            await axios.post(`${process.env.API_ENDPOINT_BASE_URL}/auth/users/reset_password/`, body, config)
            dispatch({
                type: PASSWORD_RESET_SUCCESS
            })
        }catch(error){
            dispatch({
                type: PASSWORD_RESET_CONFIRM_FAIL
            }) 
        }
}


export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {

    const headers = {
        'Content-Type': 'application/json',
    }
    const body = JSON.stringify({uid, token, new_password, re_new_password})


    try{
        await axios.post(`${process.env.API_ENDPOINT_BASE_URL}/auth/users/reset_password_confirm/`, body, headers)
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        })
    }
    catch(error) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        })
    }
}