import React from "react";
import { View, Text, TouchableHighlight, StyleSheet, Platform} from "react-native";

import theme from "../../../utils/theme.js";
import sources from "../../../utils/sources.js";

import Icon from "../Icon.jsx";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function DatePicker(props) {

    const { placeHolder, onSelectChange, timeMode, style, reference, dateValue, setDateValue } = props;
    
    // Date Picker
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [ value, setValue ] = React.useState();

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
        // IMPLEMENTAR: Cambiar forma degenerar el formato...
        if (timeMode) {
            var dateValue = ((date.getHours()) < 9 ? "0" + (date.getHours()) : (date.getHours())) + ":" + ((date.getMinutes()) < 9 ? "0" + (date.getMinutes()) : (date.getMinutes()));
        } else {
            var dateValue = date.getFullYear() + "-" + ((date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
        }
      if (setDateValue) setDateValue(dateValue);
      hideDatePicker();
    };

    React.useEffect(() => {
        if (reference) reference.getDate = () => {
            return value
        }; 
    }, [])

    return (
        <View style={style}>
            <TouchableHighlight 
                style={styles.main}
                onPress={() => setDatePickerVisibility(true)}
                underlayColor={"rgba(200, 200, 200, 0.25)"}>
                    <>
                        <Text numberOfLines={1} style={[styles.text]}>
                            {dateValue ? dateValue : "-"}
                        </Text>

                        <Icon
                            icon={timeMode ? sources.icons.clock : sources.icons.calendar }
                            small /> 
                    </>        
            </TouchableHighlight>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={ timeMode ? "time": "date" }
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
        backgroundColor: theme.colors.light,
        borderColor: theme.colors.darkLight,
        borderWidth: 2,
        //height: 32,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 15,
    },
    textContainer: {
        
    },
    text: {
        flex: 1,
        width: "100%",
        marginRight: 5,
    },

});