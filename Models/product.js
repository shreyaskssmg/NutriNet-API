const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    gtin : {
        type : String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image_url : {
        type : String,
        required: true
    },
    net_weight : {
        type : Number,
        default : 0
    },
    net_weight_unit  : {
        type : String,
        default : "g",
    },
    category : {
        type : String,
        enum : {
            values : ["Fruits & vegetables","Grains & cereals","Meat & poultry","Fish & seafood","Dairy products","Nuts & seeds","Legumes","Fats & oils","Beverages","Snacks & sweets"],
        },
    },
    nutritional_information : {
        per : {
            type : Number,
            default : 0
        },
        energy : {
            type : Number,
            default : 0
        },
        protein : {
            type : Number,
            default : 0
        },
        carbohydrates : {
            type : Number,
            default : 0
        },
        total_fat : {
            type : Number,
            default : 0
        },
        trans_fat : {
            type : Number,
            default : 0
        },
        saturated_fat : {
            type : Number,
            default : 0
        },
        total_sugar : {
            type : Number,
            default : 0
        },
        added_sugar : {
            type : Number,
            default : 0
        },
        cholesterol : {
            type : Number,
            default : 0
        },
        sodium : {
            type : Number,
            default : 0
        },
        per_unit : {
            type : String,
            default : "g"
        },
        energy_unit : {
            type : String,
            default : "kcal"
        },
        protein_unit : {
            type : String,
            default : "g"
        },
        carbohydrates_unit : {
            type : String,
            default : "g"
        },
        total_fat_unit : {
            type : String,
            default : "g"
        },
        trans_fat_unit : {
            type : String,
            default : "g"
        },
        saturated_fat_unit : {
            type : String,
            default : "g"
        },
        total_sugar_unit : {
            type : String,
            default : "g"
        },
        added_sugar_unit : {
            type : String,
            default : "g"
        },
        cholesterol_unit : {
            type : String,
            default : "mg"
        },
        sodium_unit : {
            type : String,
            default : "mg"
        },

    },
    ingredients : {
        type : Array,
        of : String,
    },
    allergens : {
        type : Array,
        of : String,
    },
    manufactured_by : {
        type : Array,
        of : Map
    },
    marketed_by : {
        type : Array,
        of : Map
    },
    brand : {
        type : Array,
        of : Map,
    },
    description : {
        type : String,
        required: true
    },

    created_at : {
        type : Date,
        default : Date.now()


    }
})

module.exports =  mongoose.model("Product",productSchema)