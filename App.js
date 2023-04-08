import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Table = () => {
  const renderRow = (rowIndex) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {renderCell(rowIndex, 1)}
        {renderCell(rowIndex, 2)}
        {renderCell(rowIndex, 3)}
      </View>
    );
  };

  const renderCell = (rowIndex, colIndex) => {
    return (
      <View key={colIndex} style={styles.cell}>
        <Button title={`+`} /> 
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderRow(1)}
      {renderRow(2)}
      {renderRow(3)}
      {renderRow(4)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    marginLeft: 10,
  },
});

export default Table;