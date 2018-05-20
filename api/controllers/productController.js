var shopHome = require ('../models/productModel');

function getProducts (res){
    shopHome.find (function (err, products){
        if (err) {
            res.status (500).json (err);
        }else {
            res.json (products);
        }
    });
}

module.exports = function (app) {
    app.get ('/api/products', function (req,res){
        getProducts (res);
    });

    app.get ('/api/product/:id', function (req, res){
        shopHome.findById ({_id: req.params.id}, function (err, product){
            if (err) {
                throw err;
            }else {
                res.json (product);
            }
        });
    });

    app.post ('/api/product', function(req, res){
        var product = {
            name: req.body.name,
            image1: req.body.image1,
            image2: req.body.image2,
            image3: req.body.image3,
            image4: req.body.image4,
            image5: req.body.image5,
            summary: req.body.summary,
            description: req.body.description,
            inStock: req.body.inStock,
            price: req.body.price,
            rank: req.body.rank
        };
        shopHome.create (product , function (err, product){
            if (err){
                throw err;
            }else {
                getProducts (res);
            }
        });
    });

    app.put ('/api/product', function (req,res){
        if (!req.body._id){
            return res.status(500).send ('ID is required');
        }else {
            shopHome.update({
                _id: req.body._id
            }, {
                name: req.body.name,
                image1: req.body.image1,
                image2: req.body.image2,
                image3: req.body.image3,
                image4: req.body.image4,
                image5: req.body.image5,
                summary: req.body.summary,
                description: req.body.description,
                inStock: req.body.inStock,
                price: req.body.price,                
                rank: req.body.rank
            }, function (err, product){
                if (err) {
                    return res.status(500).json(err);
                }else {
                    getProducts (res);
                }
            }
        )
        }
    });

    app.delete ('/api/product/:id', function (req, res){
        shopHome.remove ({
            _id: req.params.id
        }, function (err, product){
            if (err){
                return res.status (500).json (err);
            }else {
                getProducts (res);
            }
        })
    });

}