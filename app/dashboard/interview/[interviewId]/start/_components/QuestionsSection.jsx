import { Lightbulb } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestions,activeQuestionsIndex}) {
  return mockInterviewQuestions&&(
    <div className='p-5 border rounded-lg my-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {mockInterviewQuestions && mockInterviewQuestions.map((question, index) => (
                <h2 className={`p-2 bg-secondary rounded-full
                text-xs md:text-sm text-center cursor-pointer
                ${activeQuestionsIndex==index&&'bg-black text-white'}`}>Question #{index+1}</h2>
            ))}

        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestions[activeQuestionsIndex]?.question}</h2>
        <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
            <h2 className='flex gap-2 items-center text-blue-800'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm text-black my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionsSection