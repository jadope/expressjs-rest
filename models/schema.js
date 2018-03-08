var personSchema = {
    person_id: { _id: true, autoIndex: true },
    person_name: String,
    type_person: String,
    person_age: Number,
    person_cellphone: Number,
    person_address: String,
    registration: date.now()   
  }
  
  function getPersonSchema(){
    return personSchema;
  }

  module.exports={
      getPersonSchema : getPersonSchema
  }