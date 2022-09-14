import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb'

function Top() {
    return ( 

            <div className='fixBox'>
                <div className='topWrap'>
                    <div className='topContainer'>
                        <img 
                            src="/images/angma.png" alt="logo" />
                    </div>
                    <Header as="h1">강동협</Header>
                </div>
                
                <Gnb />
            </div>
     );
}

export default Top; 