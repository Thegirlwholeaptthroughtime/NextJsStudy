import React from 'react';
import Link from 'next/link'
import { Grid, List } from 'semantic-ui-react';
import styles from './ItemList.module.css'

function ItemList({data}) {
    console.log(data)
    return ( 
        <>
              <Grid columns={3}>
                  <Grid.Row>
                    {data.map((item)=>(
                       
                            <Grid.Column key={item.id}>
                                <Link href="detail/[id]" as={`/detail/${item.id}`}>
                                <a>
                                <div className={styles.wrap}>
                                    <img src={item.image_link} alt={item.name} className={styles.img_item} />
                                    <strong className={styles.txt_item}>{item.name}</strong>
                                    <span className={styles.txt_info}>{item.category} {item.product_type}</span>
                                    <strong className={styles.txt_price}>${item.price}</strong>
                                </div>
                                </a>
                                </Link>
                            </Grid.Column>
                     
                    
                    ))}
                      
                  </Grid.Row>
              </Grid>
            
        </>
     );
}

export default ItemList;