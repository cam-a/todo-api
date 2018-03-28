const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5abaebf5dfec9295148d867311';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '5aa940cf8d5586cd6d711e06';

User.findById(id).then((user) => {
  if (!user) {
    console.log('Id not found');
  }
  console.log('User by id', todo);
}).catch((e) => console.log(e));
