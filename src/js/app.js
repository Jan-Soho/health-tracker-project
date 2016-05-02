// collection for the main view
var mainAlimentList = new MainListItems();

// Collection for the side view
var sideAlimentList = new SideListItems();

// View for side bar
var sideAllItems = new AllSideListItems({model: sideAlimentList});
// add a listener to the input text search bar that declenche ze viouzems

// View for main div
var mainAllItems = new AllMainListItems({model: mainAlimentList});