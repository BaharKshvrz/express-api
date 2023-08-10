const transformModel = (data) => {
  return {
     id: data._id,
     name: data.name,
     description: data.description,
     makeId: data.makeId,
  }
}

const transformModels = (list) => {
    let listData = [];
    if (list) {
        for(let data of list) {
            listData.push(transformModel(data));
        }
    }
    return listData;
 }

 export {
    transformModel,
    transformModels,
 }
