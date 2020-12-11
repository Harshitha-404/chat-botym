const express = require('express');


function createRouter(db) {
    const router = express.Router();
    router.get('/event',function (req,res,next){
     db.query(
         'SELECT * FROM bot',
         (error,results) => {
             if(error) {
                 console.log(error);
                 res.status(500).json({status: 'error'});
             }else{
                 res.status(200).json(results);
                 console.log(results)

             }
         }
     );
        });

            router.get('/details/:id',function (req,res,next){
             db.query(
                 'SELECT * FROM details WHERE id=?',
                 [req.params.id],
                 (error,results) => {
                     if(error) {
                         console.log(error);
                         res.status(500).json({status: 'error'});
                     }else{
                         res.status(200).json(results);
                         console.log(results)
        
                     }
                 }
             );
                });
                router.get('/event/:id',function (req,res,next){
                        db.query(
                            'SELECT * FROM bot WHERE id=?',
                            [req.params.id],
                            (error,results) => {
                                if(error) {
                                    console.log(error);
                                    res.status(500).json({status: 'error'});
                                }else{
                                    res.status(200).json(results);
                                    console.log(results)
                   
                                }
                            }
                        );
                           });


                           router.get('/menu/:id',function (req,res,next){
                            db.query(
                                'SELECT * FROM menu WHERE id=?',
                                [req.params.id],
                                (error,results) => {
                                    if(error) {
                                        console.log(error);
                                        res.status(500).json({status: 'error'});
                                    }else{
                                        res.status(200).json(results);
                                        console.log(results)
                       
                                    }
                                }
                            );
                               });


                               
                router.post('/details',function (req,res,next){
                    db.query(
                        'INSERT INTO details(name,address,phonenumber,id) VALUES(?,?,?,?)',
                        [req.body.name,req.body.address,req.body.phonenumber,req.body.id],
                        (error,results) => {
                            if(error) {
                                console.log(error);
                                res.status(500).json({status: 'error'});
                            }else{
                                res.status(200).json(results);
                                console.log(results)
               
                            }
                        }
                    );
                       });

       

        return router;
}

module.exports = createRouter;