const express = require('express')
const product = require('../Models/product')
const router = express.Router()
const Product = require("../Models/product")


router.get("/", async (req,res) => {
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})


router.get("/:gtin", getProduct, (req,res) => {
    res.json(res.product)
})


router.post("/",async (req,res) => {
    const product = new Product({
        gtin : req.body.gtin,
        title : req.body.title,
        image_url : req.body.image_url,
        net_weight : req.body.net_weight,
        net_weight_unit : req.body.net_weight_unit,
        category : req.body.category,
        nutritional_information : req.body.nutritional_information,
        per : req.body.per,
        energy : req.body.energy   ,
        protein : req.body.protein   ,
        carbohydrates: req.body.carbohydrates   ,
        total_fat: req.body.total_fat   ,
        trans_fat: req.body.trans_fat   ,
        saturated_fat: req.body.saturated_fat  ,
        total_sugar: req.body.total_sugar   ,
        added_sugar: req.body.added_sugar   ,
        cholesterol: req.body.cholesterol   ,
        sodium: req.body.sodium   ,
        per_unit: req.body.per_unit   ,
        energy_unit: req.body.energy_unit   ,
        protein_unit: req.body.protein_unit   ,
        carbohydrates_unit: req.body.carbohydrates_unit   ,
        total_fat_unit: req.body.total_fat_unit   ,
        trans_fat_unit: req.body.trans_fat_unit   ,
        saturated_fat_unit: req.body.saturated_fat_unit   ,
        total_sugar_unit: req.body.total_sugar_unit   ,
        added_sugar_unit: req.body.added_sugar_unit   ,
        cholesterol_unit: req.body.cholesterol_unit   ,
        sodium_unit: req.body.sodium_unit   ,
        ingredients: req.body.ingredients   ,
        allergens: req.body.allergens   ,
        manufactured_by: req.body.manufactured_by   ,
        marketed_by: req.body.marketed_by   ,
        brand: req.body.brand   ,
        description: req.body.description   ,

    })

    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.patch("/:gtin", getProduct, async(req,res) => {
    if(req.body.gtin != null){
        res.product.gtin = req.body.gtin
    }
    if(req.body.title != null){
        res.product.title = req.body.title
    }
    if(req.body.image_url != null){
        res.product.image_url = req.body.image_url
    }
    if(req.body.net_weight != null){
        res.product.net_weight = req.body.net_weight
    }
    if(req.body.net_weight_unit != null){
        res.product.net_weight_unit = req.body.net_weight_unit
    }
    if(req.body.category != null){
        res.product.category = req.body.category
    }
    if(req.body.per != null){
        res.product.per = req.body.per
    }
    if(req.body.energy != null){
        res.product.energy = req.body.energy
    }
    if(req.body.protein != null){
        res.product.protein = req.body.protein
    }
    if(req.body.carbohydrates != null){
        res.product.carbohydrates = req.body.carbohydrates
    }
    if(req.body.total_fat != null){
        res.product.total_fat = req.body.total_fat
    }
    if(req.body.trans_fat != null){
        res.product.trans_fat = req.body.trans_fat
    }
    if(req.body.saturated_fat != null){
        res.product.saturated_fat = req.body.saturated_fat
    }
    if(req.body.total_sugar != null){
        res.product.total_sugar = req.body.total_sugar
    }
    if(req.body.added_sugar != null){
        res.product.added_sugar = req.body.added_sugar
    }
    if(req.body.cholesterol != null){
        res.product.cholesterol = req.body.cholesterol
    }
    if(req.body.sodium != null){
        res.product.sodium = req.body.sodium
    }
    if(req.body.per_unit != null){
        res.product.per_unit = req.body.per_unit
    }
    if(req.body.energy_unit != null){
        res.product.energy_unit = req.body.energy_unit
    }
    if(req.body.protein_unit != null){
        res.product.protein_unit = req.body.protein_unit
    }
    if(req.body.carbohydrates_unit != null){
        res.product.carbohydrates_unit = req.body.carbohydrates_unit
    }
    if(req.body.total_fat_unit != null){
        res.product.total_fat_unit = req.body.total_fat_unit
    }
    if(req.body.trans_fat_unit != null){
        res.product.trans_fat_unit = req.body.trans_fat_unit
    }
    if(req.body.saturated_fat_unit != null){
        res.product.saturated_fat_unit = req.body.saturated_fat_unit
    }
    if(req.body.total_sugar_unit != null){
        res.product.total_sugar_unit = req.body.total_sugar_unit
    }
    if(req.body.added_sugar_unit != null){
        res.product.added_sugar_unit = req.body.added_sugar_unit
    }
    if(req.body.cholesterol_unit != null){
        res.product.cholesterol_unit = req.body.cholesterol_unit
    }
    if(req.body.sodium_unit != null){
        res.product.sodium_unit = req.body.sodium_unit
    }
    if(req.body.ingredients != null){
        res.product.ingredients = req.body.ingredients
    }
    
    if(req.body.allergens != null){
        res.product.allergens = req.body.allergens
    }
    if(req.body.manufactured_by != null){
        res.product.manufactured_by = req.body.manufactured_by
    }
    if(req.body.marketed_by != null){
        res.product.marketed_by = req.body.marketed_by
    }
    if(req.body.brand != null){
        res.product.brand = req.body.brand
    }
    if(req.body.description != null){
        res.product.description = req.body.description
    }
    if(req.body.created_at != null){
        res.product.created_at = req.body.created_at
    }

    try{
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)

    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


router.delete("/:gtin", getProduct, async(req, res) => {
    try {
      await res.product.deleteOne()
      res.json({ message: "Deleted Product" })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  
  
  
  
async function getProduct(req, res, next) {
    let product
    try {
      product = await Product.findOne({ gtin: req.params.gtin })
      if (!product) {
        return res.status(404).json({ message: "Cannot find product" })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  
    res.product = product
    next()
  }
  

  
  

module.exports = router;