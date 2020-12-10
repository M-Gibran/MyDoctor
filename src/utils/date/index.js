export const getChatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}.${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

export const getChatYear = (date) => {
  const years = date.getFullYear();
  const months = date.getMonth() + 1;
  const dates = date.getDate();

  return `${years}-${months}-${dates}`;
};
