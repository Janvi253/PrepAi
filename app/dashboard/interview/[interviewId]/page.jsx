"use client"
import { MockInterview } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm';
import Webcam from 'react-webcam';
import { WebcamIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Interview({params}) {
    const[interviewData,setInterviewData]=useState();
    const[webcamEnabled, setWebcamEnabled] = useState(false);
    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails();
    }, [])
    /**
     * used to get interview details by mockId/interview id
     */

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        setInterviewData(result[0]);
    }

  return (
    <div className='my-10 flex justify-center flex-col items-center'>   
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
        <div>
            {webcamEnabled? <Webcam
            onUserMedia={()=>setWebcamEnabled(true)}
            onUserMediaError={()=>setWebcamEnabled(false)}
            style={{
                height:300,
                width:300    
            }}
            />
            :
            <>
            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
            <Button onClick={()=>setWebcamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
        }
        </div>
    </div>

  )
}

export default Interview