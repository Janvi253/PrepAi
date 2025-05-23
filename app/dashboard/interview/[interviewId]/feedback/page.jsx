"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { use, useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from '@/components/ui/button'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, [])

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  }
  return (
    <div className='p-10'>
      {feedbackList?.length == 0 ?
        <h2 className='font-bold text-xl text-gray-500'>No interview Feedback Record Found</h2>
        :
        <>
          <h2 className='text-3xl font-bold text-green-700'>Congratulations!</h2>
          <h2 className='font-bold text-2xl'> Here is your interview feedback</h2>
          <h2 className='text-blue-600 text-lg my-3'>Your Overall Interview rating: <strong>7/10</strong></h2>
          <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
          {feedbackList && feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                {item.question} <ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-blue-500 p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm'><strong>Your Answer: </strong>{item.userAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                  <h2 className='p-2 border rounded-lg bg-gray-100 text-sm'><strong>Feedback:: </strong>{item.feedback}</h2>


                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>}
      <Button onClick={() => router.replace('/dashboard')} className='mt-3'>Go Home</Button>

    </div>
  )
}

export default Feedback