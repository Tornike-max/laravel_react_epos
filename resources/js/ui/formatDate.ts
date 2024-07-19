export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = ("0" + date.getDate()).slice(-2);

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};
