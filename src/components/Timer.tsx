import { useEffect, useState, useRef } from 'react';
import { type Timer as TimerProps } from '../store/timers-context';
import Container from './UI/Container';



export default function Timer({name, duration}: TimerProps) {

  const interval = useRef<number | null>(null);

  const [remainingTime, setRemainingTime ] = useState(duration * 1000); // convert duration to ms that's why *1000

 if (remainingTime <= 0 && interval.current){
  clearInterval(interval.current);
 }

  useEffect(() => {
    const timer = setInterval(function(){
      setRemainingTime(prevTime => prevTime - 50);
    }, 50); // every 50s then update the interval

    interval.current = timer;

   return () => {
    clearInterval(timer)
   }

  },[]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // output with 2 decimal places

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000 } value={remainingTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
