import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { multiselect } from '../styling';

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
    <View style={multiselect.container}>
      <MultiSelect
        style={multiselect.dropdown}
        placeholderStyle={multiselect.placeholderStyle}
        selectedTextStyle={multiselect.selectedTextStyle}
        itemTextStyle={multiselect.itemTextStyle}
        inputSearchStyle={multiselect.inputSearchStyle}
        iconStyle={multiselect.iconStyle}
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
            <FontAwesome6 name="filter" size={22} color="black" style={multiselect.icon} />
        )}
        selectedStyle={multiselect.selectedStyle}
      />
    </View>
  );
};

export default MultiSelectComponent;