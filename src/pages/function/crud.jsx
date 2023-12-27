import axios from "axios";

export const getAllUserData = () => {
    axios.get('https://shome-back-end.vercel.app/getUserAccounts')
    .then((userAccounts) => {
        return userAccounts.data;
    }).catch(err => console.log(err));
}


export const getUserAccount = async (data) => {
    try {
      const userAccounts = await axios.get('https://shome-back-end.vercel.app/getUserAccounts');
      
      const email = userAccounts.data.find((account) => account.email === data);
      const fullName = userAccounts.data.find((account) => account.fullName === data);
      const username = userAccounts.data.find((account) => account.username === data);
  
      let result = null;
      if (email || username || fullName) {
        result = {
          email,
          fullName,
          username
        };
      }
  
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch user account information');
    }
  };


export const createUserAccounts = (data) => {
    axios.post('https://shome-back-end.vercel.app/createUserAccount', data)
    .then((userAccounts) => {
        console.log(userAccounts);
    }).catch(err => console.log(err));
}