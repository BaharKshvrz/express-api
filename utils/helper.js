const organizeAPIResult = (data, message, pagination) => {
   return {
     status: "success",
     message,
     data,
     pagination
   } 
}

export {
    organizeAPIResult,
}