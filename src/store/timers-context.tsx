import { createContext,useContext,useReducer,type ReactNode } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext(){
    const timersCtx = useContext(TimersContext);
    if(timersCtx === null){
        throw new Error('Something went wrong in TimersContext')
    }

    return timersCtx;
}

type TimersContextProviderProps = {
    children: ReactNode
}

type StartTimersAction = {
    type: 'START_TIMER'
}

type StopTimersAction = {
    type: 'STOP_TIMER'
}

type AddTimersAction = {
    type: 'ADD_TIMER' ;
    payload: Timer;
}

type Action = StartTimersAction | StopTimersAction | AddTimersAction;

function timersReducer(state: TimersState, action: Action): TimersState{


    switch(action.type){
        case 'ADD_TIMER':
            return {...state, timers: [...state.timers, {name: action.payload.name, duration: action.payload.duration }]}
        case 'START_TIMER':
            return {...state, isRunning: true}
        case 'STOP_TIMER':
            return {...state, isRunning: false}
        default:
            return state
    }
}



export function TimersContextProvider({children}: TimersContextProviderProps){

    const [ timersState, dispatch ] =useReducer( timersReducer, initialState );

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData){
            dispatch({type: "ADD_TIMER", payload: timerData})
        },
        startTimer(){
            dispatch({type: 'START_TIMER'})
        },
        stopTimer(){
            dispatch({type: 'STOP_TIMER'})
        },
    };

    return(
       <TimersContext.Provider value={ctx}>
        {children}
       </TimersContext.Provider>
    )
}   