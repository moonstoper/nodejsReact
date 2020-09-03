const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) =>{
    const invalidEmails = emails.split(",")
    .map(emails => emails.trim())
    .filter(emails=> regex.test(emails) === false)

    if(invalidEmails.lenght)
    {return `These emails are invalid ${invalidEmails}`;}
};