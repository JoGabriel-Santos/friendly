import * as Location from "expo-location";

export const getLocation = async () => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {

            console.error("Permission to access location was denied");
            return;
        }

        const location = await Location.getCurrentPositionAsync({});

        const { latitude, longitude } = location.coords;

        const countryInfo = await Location.reverseGeocodeAsync({ latitude, longitude });
        const country = countryInfo[0]?.country || "Country not found";

        return { latitude, longitude, country };

    } catch (error) {

        console.error("Error getting location", error);
        throw error;
    }
};