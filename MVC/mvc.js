//Model
var modal = { data: "This is data"};

//View
var view =  { display : function () { 
    console.log ("////////////////////////////");
    console.log ( modal.data);
    console.log ("////////////////////////////");
    }
};

//Controller
var controller = ( function () {
    view.display();
})();