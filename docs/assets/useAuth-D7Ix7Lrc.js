import{a as r,i as a}from"./index-BTO9WOgn.js";import{a6 as c,a as u}from"./index-qsnhLMlq.js";const n=c("auth",()=>{const e=u(!1);return{isLoggedIn:e,setIsLoggedIn:t=>{e.value=t}}}),i=async({username:e,password:o})=>{const{setIsLoggedIn:t}=n(),s=await r("login",{username:e,password:o});if(s!=null&&s.success)return a.defaults.headers.common={Authorization:`Bearer ${s.data.token}`},sessionStorage.setItem("accessToken",s.data.token),t(!0),s},g=()=>{const{setIsLoggedIn:e}=n();delete a.defaults.headers.common.Authorization,sessionStorage.removeItem("accessToken"),e(!1)},I=()=>({login:i,logout:g});export{n as a,I as u};