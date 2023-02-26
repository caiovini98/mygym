export const toISOFormat = (dateTimeString: string) => {
  const [DD, MM, YYYY] = dateTimeString.split('/');

  return `${YYYY}-${MM}-${DD}T00:00`;
};
