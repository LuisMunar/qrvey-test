import Localbase from 'localbase'

const db = new Localbase('db')

export const getDataLDB = (collection) => {
  return new Promise(resolve => {
    db.collection(collection).get()
      .then(result => resolve(result))
  })
}

export const setDataLDB = (collection, params) => {
  db.collection(collection).add(params)
}

export const deleteDataLDB = (collection, paramIdDelete) => {
  db.collection(collection).doc(paramIdDelete).delete()
}