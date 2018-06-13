export const userName = username => ({
  type: 'USER_NAME',
  username
})
export const addUser = (username,usercheck) => ({
  type: 'ADD_USER',
  username,
  usercheck
})
