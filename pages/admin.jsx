import axios, { Axios } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Admin() {
    const router = useRouter();
    function checkLogin() {
        axios.get("/api/isLogin").then((res) => {
          if (res.status === 200 && res.data.name) {
            //로그인
           
          } else {
            //로그인 안됨
            router.push("/login");
          }
        });
      }
    useEffect(()=>{
        checkLogin();
    },[])
    return ( 

        <>
            <h1>admin</h1>
        </>
     );
}

export default Admin;