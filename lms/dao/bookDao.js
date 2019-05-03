var db = require('./db');

exports.getAllBooks = function(cb){
    db.query('select * from librarytest.tbl_book', function(err, result) {
        cb(err, result);
      });
};

exports.addBook = function(book, cb){
    db.beginTransaction(function(err){
        if(err) cb(err, null);
    
        db.query('insert into lms.book(title, author) values(?,?)', [book.title, book.author], function(err, res){
          if(err){
            db.rollback(function(err, res){
              cb(err, res);
            });
          } 
          db.commit(function(err, res){
            cb(err, res);
          });
        });
      });
};

exports.removeBook = function(bookId, cb){
    db.beginTransaction(function(err){
        if(err) cb(err, null);
    
        db.query('delete from librarytest.tbl_book where bookid = ?', [bookId], function(err, res){
          if(err){
            db.rollback(function(err, res){
              cb(err, res);
            });
          } 
          db.commit(function(err, res){
            cb(err, res);
          });
        });
      });
}