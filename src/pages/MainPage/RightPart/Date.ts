const date = new Date();

const months = [
  "січеня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червея",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

export const getHour = () => {
  return date.getHours();
};

export const getMinute = () => {
  return date.getMinutes().toString().padStart(2, "0");
};

export const getDay = () => {
  return date.getDate().toString().padStart(2, "0");
};

export const getMonth = () => {
  return months[date.getMonth()];
};

export const getYear = () => {
  return date.getFullYear();
};
