const transformUser = (data) => {
  return {
     username: data.username,
     email: data.email,
  }
}
  
 export {
    transformUser,
 }
