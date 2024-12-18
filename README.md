# React setInterval Memory Leak

This repository demonstrates a common bug in React components that use `setInterval` without proper cleanup in the `useEffect` hook.  This leads to a memory leak because the interval continues to run even after the component unmounts.

The `bug.js` file shows the incorrect implementation. The `bugSolution.js` file provides the corrected version.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the count incrementing.  Unmount the component (e.g., navigate away from the page) and then try again. You may not see a drastic memory effect, however the setInterval will continue running in the background consuming memory.

## Solution

The solution involves using the return value of `setInterval` in the `useEffect` cleanup function to clear the interval when the component unmounts.