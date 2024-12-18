```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using the return value of setInterval
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    // Missing cleanup function to clear the interval
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```