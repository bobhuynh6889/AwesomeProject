import * as ActionTypes from './types';

// COUNT
export const increaseCountAction = (number1, number2) => ({
    type: ActionTypes.INCREASE_COUNT,
    number1: number1,
    number2: number2,
});

export const decreaseCountAction = (number1) => ({
    type: ActionTypes.DECREASE_COUNT,
    number1: number1,
    
});