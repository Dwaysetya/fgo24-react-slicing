export const getDisplayName = (email) => {
  if (!email) return "";
  return email.split("@")[0];
};
