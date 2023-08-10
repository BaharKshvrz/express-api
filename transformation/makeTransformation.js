const transformMake = (data) => {
  return {
     id: data._id,
     name: data.name,
     description: data.description,
  }
}

const transformMakes = (list) => {
    let listData = [];
    if (list) {
        for(let data of list) {
            listData.push(transformMake(data));
        }
    }
    return listData;
 }

 export {
    transformMake,
    transformMakes,
 }
