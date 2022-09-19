
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ItemList from '../src/component/itemList'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default function Home({data}) {


  return (
    <div>
      <Head>
        <title>nextjs 연습</title>
        <meta name='description' content='코딩 앙마 nextjs 강의'></meta>
      </Head>


        <>
          <Header as="h3" style={{paddingTop:40}}>베스트 상품</Header>
          <Divider />
          <ItemList data={data.slice(0,9)}/>

          <Header as="h3" style={{paddingTop:40}}>신상품</Header>
          <Divider />
          <ItemList data={data.slice(9)}/>
        </>
    
    </div>
  )
}

export async function getStaticProps(){
 
  const apiUrl =  process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props:{
      data:data,
      name : process.env.name,
    }
  }
}