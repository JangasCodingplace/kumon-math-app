import React, { useRef, useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { Canvas, CanvasRef } from '@benjeau/react-native-draw';
import { GeneratedSimpleCalcTask } from '../Kumon/GenericTask';

interface HandWritingComponentProps {
  taskGenerator: typeof GeneratedSimpleCalcTask
}

export default ({taskGenerator}: HandWritingComponentProps) => {
  const canvasRef = useRef<CanvasRef>(null);
  const windowDimensions = useWindowDimensions();
  const canvasHeight = Math.max(windowDimensions.height - 300, 0); // 200 ist ein Beispielwert

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>{taskGenerator.generate().show()}</Text>
      <Canvas
        ref={canvasRef}
        height={canvasHeight}
      />
      <Button title="Undo" onPress={handleUndo} />
      <Button title="Clear" onPress={handleClear} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Hintergrundfarbe nach Wunsch
  },
  scrollView: {
    marginHorizontal: 0,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  canvas: {
    flex: 1,
    // Weitere Stile nach Bedarf
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
