import React, { useState } from 'react';
import { View } from 'react-native';
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
        placeholderStyle={multiselect.placeholder}
        selectedTextStyle={multiselect.selectedText}
        itemTextStyle={multiselect.itemText}
        inputSearchStyle={multiselect.inputSearch}
        iconStyle={multiselect.icon}
        containerStyle={multiselect.list}
        maxHeight={200}
        iconColor='white'
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Course"
        searchPlaceholder="Search..."
        alwaysRenderSelectedItem
        maxSelect={3}
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
            <FontAwesome6 name="filter" size={22} color="white" style={multiselect.icon} />
        )}
        selectedStyle={multiselect.selected}
      />
    </View>
  );
};

export default MultiSelectComponent;