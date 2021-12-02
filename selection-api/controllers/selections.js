const { createSelections } = require('../../selection/src/services/selections')
const Selection = require('../models/selection')

function index(req, res){
    Selection.find({}, function(err, selections){
        res.json(selections)
    })
}

function create(req, res){
    console.log("createSelections")
    const selection = new Selection(req.body)
    selection.save(function(err){
        if(err){
            throw err
        }
        res.json(selection)
    })
}

async function update(req, res) {
    const newUpdate = await Selection.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        cuisines: req.body.cuisines,
        address: req.body.address,
        review: req.body.review,
        description: req.body.description
    });
    newUpdate.save();
    console.log(newUpdate);
    res.json(newUpdate)
}

//delete 
async function deleteOne(req, res) {
    let deleteOneSelection =  await Selection.findByIdAndDelete(req.params.id);
    res.json(deleteOneSelection)
}

  //delete not sure 
//   async function delete(req, res) {
//     let selection = await Selection.findById(req.params.id);
//     selection.myreview.id(req.params.id).remove();
//     await selection.save();

//     res.json(selection);
// }

 
//   //delete the review
//   async function deleteReview(req, res) {
//     let book = await Book.findById(req.params.bookid);
//     book.myreview.id(req.params.otherid).remove();
//     await book.save();
  
//     res.redirect(`/books/${req.params.bookid}`);
//   }

module.exports = {
    index,
    create,
    update,
    deleteOne
}