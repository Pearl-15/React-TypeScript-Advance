import { useEffect, useState, useRef, useContext, createContext } from 'react';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context';
import Container from './UI/Container';



export default function Timer({name, duration}: TimerProps) {

  const interval = useRef<number | null>(null);

  const [remainingTime, setRemainingTime ] = useState(duration * 1000); // convert duration to ms that's why *1000

  const {isRunning} = useTimersContext();

 if (remainingTime <= 0 && interval.current){
  clearInterval(interval.current);
 }

  useEffect(() => {

    let timer: any;

    if(isRunning){
      timer = setInterval(function(){
        setRemainingTime(prevTime =>{

          if(prevTime <= 0){
            return prevTime
          }
           return (prevTime - 50);
        });
      }, 50); // every 50s then update the interval
      interval.current = timer;
    }else if(interval.current){
      clearInterval(interval.current);
    }
    

   return () => {
    clearInterval(timer)
   }

  },[isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // output with 2 decimal places

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000 } value={remainingTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
