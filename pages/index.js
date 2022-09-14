import axios, { Axios } from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ItemList from '../src/component/itemList'
import styles from '../styles/Home.module.css'

export default function Home() {
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  const [data, setData] = useState([]);
  function getData(){
    axios.get(API_URL)
    .then(res=>{
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      <Head>
        <title>nextjs 연습</title>
      </Head>

      <Header as="h3" style={{paddingTop:40}}>베스트 상품</Header>
      <Divider />
      <ItemList data={data.slice(0,9)}/>

      <Header as="h3" style={{paddingTop:40}}>신상품</Header>
      <Divider />
      <ItemList data={data.slice(9)}/>
    
    </div>
  )
}
