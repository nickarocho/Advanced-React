const Query = {
    dogs(parent, args, ctx, info) { //shorthand for dogs: function () {...}
        global.dogs = global.dogs || [];
        return global.dogs
    }
};

module.exports = Query;
