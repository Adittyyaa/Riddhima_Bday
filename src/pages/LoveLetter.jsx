import React, { useState } from 'react'
import './SimpleLoveLetter.css'

const LoveLetter = () => {
    const [openEnvelope, setOpenEnvelope] = useState(false);
    const [showLetter, setShowLetter] = useState(false);

    // Single personalized letter content
    const letterContent = {
        greeting: "My Dearest Riddhima,",
        message: `Happy Birthday to the most incredible person in my life! 🎉

From the moment we met, something in my life shifted—like the universe quietly guiding me toward someone meant for me. You brought warmth into the parts of me I didn't even know were cold, and you expanded my days with a dimension I can only call my own.

Every notification from you feels like a heartbeat whispering, "I'm here, and I love you." Our messages might travel through wires, but every word you send lands straight in my heart.

On your birthday, I just want you to know this: I want you with me in every chapter, every storm, every sunshine, every tomorrow. No matter what comes, I'll be on your side—always. I'll choose you, protect you, stand with you, and love you in ways that remind you you're never alone.

You're not just another year older today… you're the reason my life feels softer, brighter, and endlessly worth living.

Happy Birthday, beautiful! 💕`,
        signature: "With all my love,\nAditya"
    };

    const handleEnvelopeClick = () => {
        setOpenEnvelope(true);
        setTimeout(() => {
            setShowLetter(true);
        }, 800);
    };

    const handleCloseLetter = () => {
        setShowLetter(false);
        setTimeout(() => {
            setOpenEnvelope(false);
        }, 500);
    };

    return (
        <main className='munna bg-gradient-to-br from-pink-100 to-red-100 min-h-screen w-full overflow-hidden relative flex items-center justify-center'>
            {/* Background Hearts */}
            <div className="munna heart-container absolute top-[10%] left-[10%] opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="munna heartBeating w-[100px] h-[100px]">
                    <path d="M471.7 73.6c-54.5-46.4-136-38.3-186.4 15.8L256 120.6l-29.3-31.2C176.3 35.3 94.8 27.2 40.3 73.6-18 125.4-13.3 221 43 273.7l187.3 177.6a24 24 0 0032.4 0L469 273.7c56.3-52.8 61-148.3 2.7-200.1z" fill="#ff6b9d" />
                </svg>
            </div>
            <div className="munna heart-container absolute bottom-[10%] right-[10%] opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="munna heartBeating w-[120px] h-[120px]">
                    <path d="M471.7 73.6c-54.5-46.4-136-38.3-186.4 15.8L256 120.6l-29.3-31.2C176.3 35.3 94.8 27.2 40.3 73.6-18 125.4-13.3 221 43 273.7l187.3 177.6a24 24 0 0032.4 0L469 273.7c56.3-52.8 61-148.3 2.7-200.1z" fill="#ff6b9d" />
                </svg>
            </div>

            {/* Main Content */}
            <section className="munna letter-section z-10 w-full max-w-4xl mx-auto px-4">
                {/* Envelope */}
                <div className={`envelope-simple ${openEnvelope ? "opened" : ""}`}>
                    {!openEnvelope && (
                        <div className="envelope-front" onClick={handleEnvelopeClick}>
                            <div className="envelope-content">
                                <h2 className="envelope-title text-2xl md:text-3xl font-dancing text-red-800 mb-2">
                                    Envelope Of Love
                                </h2>
                                <h3 className="envelope-recipient text-xl md:text-2xl font-dancing text-red-600">
                                    Dear Riddhima
                                </h3>
                                <button className="open-btn mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
                                    💌 Open Letter
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Letter */}
                {showLetter && (
                    <div className="letter-paper">
                        <div className="letter-content">
                            <button 
                                className="close-btn absolute top-4 right-4 text-2xl text-red-500 hover:text-red-700"
                                onClick={handleCloseLetter}
                            >
                                ×
                            </button>
                            
                            <div className="letter-header text-center mb-6">
                                <h1 className="text-3xl md:text-4xl font-dancing text-red-700 mb-2">
                                    {letterContent.greeting}
                                </h1>
                            </div>
                            
                            <div className="letter-body">
                                <div className="letter-message text-gray-800 leading-relaxed whitespace-pre-line mb-6">
                                    {letterContent.message}
                                </div>
                                
                                <div className="letter-signature text-right">
                                    <p className="text-lg font-dancing text-red-600 whitespace-pre-line">
                                        {letterContent.signature}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Floating Hearts Animation */}
            <div className="munna floating-hearts">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className={`floating-heart heart-${i}`}>
                        💖
                    </div>
                ))}
            </div>
        </main>
    )
}

export default LoveLetter