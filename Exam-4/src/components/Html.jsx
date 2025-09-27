import { data } from '../data'
import { useState } from 'react'

export default function Html(){
    const [userAnswer, setUserAnswer] = useState('');

    // ვერ მოვასწარი და ეს ლოგიკა დავწერე, ცუდია მაგრამ მუშაობს

    return (
        <div className='flex justify-center items-center pt-[50px] gap-[100px]'>
            <p>{data.quizzes[0].questions[0].question}</p>
            <div className='flex justify-center items-start flex-col gap-[20px]'>
                {data.quizzes[0].questions[0].options.map((el, i) => (
                    <button onClick={() => setUserAnswer(data.quizzes[0].questions[0].options[i])} key={i} className='border px-[20px] py-[5px] w-[300px] rounded-[12px] cursor-pointer'>{el}</button>
                ))}
            </div>
            <p>{userAnswer === data.quizzes[0].questions[0].answer ? 'Correct!' : 'Wrong'}</p>
        </div>
    )
}