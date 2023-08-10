const organizeAPIResult = (data, message) => {
   return {
     status: "success",
     message,
     data,
   }
}

export {
    organizeAPIResult,
}