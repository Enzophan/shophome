var shopHome = require ('../models/productModel');

module.exports = function (app) {
    app.get ("/api/setupProduct", function (req,res){
        var seedProducts = [
            {
                name: "Product 1",
                image1: "",
                image2: "",
                image3: "",
                image4: "",
                image5: "",
                summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
                description: "",
                inStock: true,
                rank: "1"
            },
            {
                name: "Product 2",
                image1: "",
                image2: "",
                image3: "",
                image4: "",
                image5: "",
                summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
                description: "",
                inStock: true,
                rank: "1"
            },
            {
                name: "Product 3",
                image1: "",
                image2: "",
                image3: "",
                image4: "",
                image5: "",
                summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
                description: "",
                inStock: true,
                rank: "1"
            }
        ];
        shopHome.create (seedProducts, function (err, results){
            res.send (results);
        });
    });
}