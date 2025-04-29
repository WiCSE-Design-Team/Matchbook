import React, { useState } from 'react';
import { View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { CISEcourses } from './Courses';
import { multiselect } from '../styling';

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
        data={CISEcourses}
        labelField="courseCode"
        valueField="courseCode"
        placeholder="Select Course"
        searchPlaceholder="Search..."
        alwaysRenderSelectedItem
        maxSelect={4}
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