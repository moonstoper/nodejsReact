const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((emails) => emails.trim())
    .filter((emails) => !regex.test(emails));

  if (invalidEmails.length) {
    const error = "these emails are invalid" + invalidEmails;
    return error;
  }
  return;
};
