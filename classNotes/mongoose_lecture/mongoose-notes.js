const moongoose = require('./players-mongoose-model.js');

//players-mongoose-model.js this is the schema 
class Players{
  constructor() { }
  
  get(_id) {
    if (_id) {//Vinicio - if the id is defined 
      return mongooseModel.findOne({_id});
      //return moongooseModel.findOne({_id: _id});
    }
    //Find all?
    return mongooseModel.find({}); 
  }
  
  create(record) {
    //this is an object that contains all the data 
    const newRecord = new mongooseModel(record);
    return newRecord.save();
    //will fail if data is wrong shape/wrong place
  }
  
  update(_id, record){
    return mongooseModel.findByIdAndUpdate(_id, new )
  }
  
  delete(_id) {
    
  }
  
}


const playerSchema = mongoose.Schema({
  name: {type: String, required: true},
  position: {
    type: String, 
    required: true, 
    uppercase: true, 
    enum: ['P', 'C', '18', '2B', 'LF', 'CF']
  },
  throws: {
    type: String, 
    required: true,
    uppercase: true,
    enum: ['R', 'L']
  },
  bats: {
    type: String, 
    required: true, 
  },
});

//these are hooks to create connections in db
players.post('findOne', function(document){
  console.log('after findOne')
  console.log({document}); //console.logs the value of the document 
});

players.post('init', function(){
  console.log('after init')
});

players.post('save', function(){
  cosole.log('after saving a player')
});
//end hooks

//what's the difference between a schema and a model?
//a schema represents what you want in a model  you use a schema to test what is in the model 
//schema is rules, model is data manipulation 

module.exports = mongoose.model(name: 'players', playerSchema);


//find something by name in db

getByName (name) {
  if (name) {
    //
    return mongooseModel.findONe({name});
  }
  return Promise.rejection(new Error('-----Invalid Name-----'));
}

//index.js is the file where this is located - pulls 'player' up by name instead of id (if id is unknown for any reason)
// players.getByName('John')
// .then(console.log)
// .catch(console.log);


//save a player and then read a player - making sure that player is the same one saved
//tests should be as independent as they can be 

//mongoose model holds almost all of your functionality 
//1. go to mongoose schema
//2. return 


