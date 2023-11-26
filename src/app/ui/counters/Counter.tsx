'use client'
import React from 'react';
import { Button, Stack, Flex } from '@mantine/core'
import { useAppSelector, useAppDispatch } from '@/app/lib/redux/hooks';
import { RootState } from '@/app/lib/redux/store';
import { increment, decrement } from '@/app/lib/redux/slices/counterSlice';
type Props = {

}

const Counter = (props:Props) => {
    const counterValue = useAppSelector((state:RootState) => state.counter.value )
    const dispatch = useAppDispatch();
    return (
        <div className='flex flex-col align-center'>
            <div>counter : {counterValue}</div>
            <Flex direction='row' gap='5' >
                <Button onClick={() => dispatch(increment())}>บวก</Button>
                <Button onClick={() => dispatch(decrement())}>ลบ</Button>
            </Flex>
        </div>
    )
};

export default Counter