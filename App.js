import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const fullText = 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      setIndex((prev) => {
        if (prev === fullText.length - 1) {
          setIsPaused(true);
          setTimeout(() => {
            setDisplayedText('');
            setIndex(0);
            setIsPaused(false);
          }, 2000);
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [index, isPaused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'monospace',
  },
});

export default App;
