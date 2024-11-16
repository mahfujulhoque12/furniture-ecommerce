"use client"
import { SignUp } from '@clerk/nextjs'
import { useEffect, useState } from 'react';

export default function Page() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="bg-black flex justify-center items-center">
            {isClient && <SignUp />}
        </div>
    );
}
