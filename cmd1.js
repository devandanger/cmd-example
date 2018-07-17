const program = require('commander');
const { addContact, getContact } = require('./logic');

program
   .version('0.0.1')
   .description("CMD Example 1");

program
   .command('addContact <firstname> <lastname> <phone> <email>')
   .alias('a')
   .description('Add a contact')
   .action((firstname, lastname, phone, email) => {
     addContact({firstname, lastname, phone, email});
   });

program
   .command('getContact <name>')
   .alias('r')
   .description('Get contact')
   .action(name => getContact(name));

program.parse(process.argv);
