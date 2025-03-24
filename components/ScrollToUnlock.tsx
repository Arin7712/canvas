'use client'
import React, { useState } from 'react';
import ScrollLock from 'react-scrolllock';

const ScrollToUnlock = () => {
  const [scrollUnlocked, setScrollUnlocked] = useState(false);

  const handleScroll = (e:any) => {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
      setScrollUnlocked(true);
    }
  };

  return (
    <div className="h-screen">
      <ScrollLock disabled={scrollUnlocked} />
      {!scrollUnlocked && (
        <div
          className="h-screen overflow-y-auto bg-gray-800 text-white p-10"
          onScroll={handleScroll}
        >
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <h1 className="text-3xl font-bold">Read Before You Scroll</h1>
            <p>Scroll through this text before continuing to the website.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>More placeholder text to make you scroll.</p>
            <p>Keep scrolling...</p>
            <p>You're almost there!</p>
            <p>Congratulations! You can now scroll the website.</p>
          </div>
        </div>
      )}

      {scrollUnlocked && (
        <div className="h-[200vh] bg-white p-10">
          <h1 className="text-3xl font-bold">Welcome to the Website</h1>
          <p>Now you can scroll freely!</p>
        </div>
      )}
    </div>
  );
};

export default ScrollToUnlock;
