export const formatDateObject = (dateObject) => {
  let options = {
    timeStyle: "short",
  };

  const formatDate = new Intl.DateTimeFormat("pt-BR", options);
  return formatDate.format(dateObject);
};
