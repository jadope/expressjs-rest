var personSchema = { 
    person_id : String,
    person_name: String,
    type_person: String
  }
  
  function getPersonSchema(){
    return personSchema;
  }

  module.exports={
      getPersonSchema : getPersonSchema
  }