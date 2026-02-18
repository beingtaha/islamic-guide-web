import { fetchKarachiPrayerTimes } from "./fetchPrayerTimes";

// Default times (will be updated with live data)
export let prayerTimes = [
  {
    id: 1,
    name: "Fajr",
    nameUrdu: "فجر",
    time: "5:48 AM", // Will be updated
    icon: "🌅",
  },
  {
    id: 2,
    name: "Sunrise",
    nameUrdu: "طلوع آفتاب",
    time: "7:05 AM", // Will be updated
    icon: "☀️",
  },
  {
    id: 3,
    name: "Dhuhr",
    nameUrdu: "ظہر",
    time: "12:46 PM", // Will be updated
    icon: "☀️",
  },
  {
    id: 4,
    name: "Asr",
    nameUrdu: "عصر",
    time: "4:50 PM", // Will be updated
    icon: "⛅",
  },
  {
    id: 5,
    name: "Maghrib",
    nameUrdu: "مغرب",
    time: "6:27 PM", // Updated
    icon: "🌇",
  },
  {
    id: 6,
    name: "Isha",
    nameUrdu: "عشاء",
    time: "7:44 PM", // Updated
    icon: "🌙",
  },
];

// Function to update times from live API
export const updatePrayerTimes = async () => {
  try {
    const liveTimes = await fetchKarachiPrayerTimes();

    prayerTimes = prayerTimes.map((prayer) => {
      switch (prayer.name) {
        case "Fajr":
          return { ...prayer, time: liveTimes.fajr };
        case "Sunrise":
          return { ...prayer, time: liveTimes.sunrise };
        case "Dhuhr":
          return { ...prayer, time: liveTimes.dhuhr };
        case "Asr":
          return { ...prayer, time: liveTimes.asr };
        case "Maghrib":
          return { ...prayer, time: liveTimes.maghrib };
        case "Isha":
          return { ...prayer, time: liveTimes.isha };
        default:
          return prayer;
      }
    });

    return prayerTimes;
  } catch (error) {
    console.error("Error updating prayer times:", error);
    return prayerTimes;
  }
};
