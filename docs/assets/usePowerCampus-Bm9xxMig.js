import{b as e,f as a,n}from"./index-DS0tCtaK.js";import{u as r}from"./loading-ChgcP15q.js";import{j as u}from"./index-CKWStKq1.js";const o=u(),c=async()=>{const{setLoading:s}=r();s(!0);const t=await e("getPowerCampusContent");s(!1),t!=null&&t.success&&(o.value=t.data)},m=async s=>{const t=await a("savePowerCampusContent",{content:s});return t!=null&&t.success&&n(t==null?void 0:t.message),t},i=()=>({powerCampusContent:o,getPowerCampusContent:c,savePowerCampusContent:m});export{i as u};