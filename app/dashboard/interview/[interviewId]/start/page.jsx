"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAnsSection from './_components/RecordAnsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {
    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
    const [activeQuestionsIndex, setActiveQuestionsIndex] = useState(0);

    useEffect(() => {
        params.then(unwrappedParams => {
            console.log(unwrappedParams.interviewId);
            GetInterviewDetails(unwrappedParams.interviewId);
        });
    }, [params]);

    const GetInterviewDetails = async (id) => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, id))

        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        setMockInterviewQuestions(jsonMockResp);
        setInterviewData(result[0]);
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <QuestionsSection
                    mockInterviewQuestions={mockInterviewQuestions}
                    activeQuestionsIndex={activeQuestionsIndex}
                />
                <RecordAnsSection
                    mockInterviewQuestions={mockInterviewQuestions}
                    activeQuestionsIndex={activeQuestionsIndex}
                    interviewData={interviewData}
                />

            </div>
            <div className='flex justify-end gap-6'>
                {activeQuestionsIndex > 0&& 
                <Button onClick={()=>setActiveQuestionsIndex(activeQuestionsIndex-1)}>Previous Question</Button>}
                {activeQuestionsIndex != mockInterviewQuestions?.length - 1&& 
                <Button onClick={()=>setActiveQuestionsIndex(activeQuestionsIndex+1)}>Next Question</Button>}
                {activeQuestionsIndex == mockInterviewQuestions?.length - 1&& 
                <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
                <Button>End Interview</Button>
                </Link>}
            </div>
        </div>
    )
}

export default StartInterview