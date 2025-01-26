import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const data = [
    { label: 'CIS3401', value: '1' },
    { label: 'COP4600', value: '2' },
    { label: 'COP3530', value: '3' },
    { label: 'COT3100', value: '4' },
    { label: 'COP3502', value: '5' },
];

const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Course"
        searchPlaceholder="Search..."
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
            <FontAwesome6 name="filter" size={22} color="black" style={styles.icon} />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
    dropdown: {
        height: 50, width: 200,
        backgroundColor: 'transparent',
        borderColor: 'black', borderWidth: '1',
        padding: 10
    },

    placeholderStyle: {
        fontSize: 12,
    },
    selectedTextStyle: {
        fontSize: 12,
    },
    itemTextStyle:{
        fontSize: 12,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 30,
        fontSize: 12,
    },
    icon: {
        marginRight: 10,
    },
    selectedStyle: {
        borderRadius: 12,
    },
});