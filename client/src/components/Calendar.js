import React, { useEffect, useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { months } from "../utils/months";

const Calendar = ({ handleSavingData }) => {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState("2001/01/01");
    const [userBirthday, setUserBirthday] = useState({});

    const handleChangeBirthday = (date) => {
        const [year, month, day] = date.split("/").map(str => parseInt(str, 10));

        const birthdate = new Date(Date.UTC(year, month - 1, day));
        const today = new Date();

        let age = Math.floor((today - birthdate) / (365.25 * 24 * 60 * 60 * 1000));
        if (isNaN(age) || age < 0) {
            age = 0;
        }

        const ordinals = ['th', 'st', 'nd', 'rd'];
        const ordinal = ordinals[(day % 100 > 10 && day % 100 < 14) ? 0 : Math.min(day % 10, 3)];

        setUserBirthday({ year, month, day, ordinal, age });
        handleSavingData("birthday", { year, month, day, ordinal, age });
    }

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    useEffect(() => {
        handleChangeBirthday(selectedDate);
    }, [selectedDate]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewCalendar}>
                <View>
                    <Text style={styles.selectDateText}>Select your date of birth</Text>
                    <TouchableOpacity
                        style={styles.inputButton}
                        onPress={handleOnPressStartDate}
                    >
                        <Text style={styles.inputButtonText}>
                            {months[userBirthday.month - 1] + " " + userBirthday.day + userBirthday.ordinal + " (" + userBirthday.age + " yo)"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={openStartDatePicker}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            minimumDate={"1950/01/01"}
                            mode="calendar"
                            onSelectedChange={(date) => setSelectedDate(date)}
                            options={{
                                backgroundColor: "#080516",
                                mainColor: "#FFF",
                                selectedTextColor: "#7c46fa",
                                textDefaultColor: "#FFF",
                                textHeaderColor: "#FFF",
                                textSecondaryColor: "#FFF",
                            }}
                        />

                        <TouchableOpacity onPress={handleOnPressStartDate}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    viewCalendar: {
        paddingHorizontal: 20,
        width: "100%",
    },
    selectDateText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        marginBottom: 10,
    },
    inputButton: {
        borderColor: "#333",
        borderRadius: 5,
        borderWidth: 1,
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,
    },
    inputButtonText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
    },
    centeredView: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        alignItems: "center",
        backgroundColor: "#080516",
        borderRadius: 20,
        justifyContent: "center",
        margin: 20,
        padding: 35,
        width: "90%",
    },
    closeButton: {
        color: "#FFFFFF",
        fontFamily: "nunito-regular",
        fontSize: 18,
        paddingTop: 20,
    }
});

export default Calendar;