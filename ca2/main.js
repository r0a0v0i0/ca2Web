var fs = require("fs");

fs.writeFile('file1.txt', 'this is text from file 1', function(err) {  // file1
   if (err) {
      return console.error(err);
   } 
   console.log("file1 successfully");

fs.writeFile('file2.txt', 'this is text from file 2', function(err) {  //file2
   if (err) {
      return console.error(err);
   } 
   console.log("file1 successfully");



fs.appendFile('file1.txt','file2.txt', function(err) {      // appending file2 with file1
   if (err) {
      return console.error(err);
   }
   console.log("done");


  
   fs.readFile('file1.txt', function (err, data) {   // reading file data
      if (err) {
         return console.error(err);
      }
      console.log(data.toString());
         });
      });
   });
 }); 
