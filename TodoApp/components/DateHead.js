import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#7986cb" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#7986cb',
  },
  block: {
    padding: 16,
    backgroundColor: '#7986cb',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
