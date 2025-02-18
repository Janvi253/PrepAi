"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';

function StartInterview({params}) {
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
            .where(eq (MockInterview.mockId, id))

        const jsonMockResp=JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        setMockInterviewQuestions(jsonMockResp);
        setInterviewData(result[0]);
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <QuestionsSection 
                mockInterviewQuestions={mockInterviewQuestions}
                activeQuestionsIndex={activeQuestionsIndex}
                />

            </div>
        </div>
    )
}

export default StartInterview