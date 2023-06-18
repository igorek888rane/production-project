import {FC, useState} from 'react';

import styles from  './Counter.module.scss'
interface CounterProps {

}

export const Counter: FC<CounterProps> = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
           <h1>{count}</h1>
            <button className={styles.btn} onClick={()=>setCount((count)=>count+1)}>increment</button>
        </div>
    );
};

