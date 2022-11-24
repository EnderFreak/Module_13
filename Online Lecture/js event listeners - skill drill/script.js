d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectName").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedName = dropdownMenu.value;
  //var selectedName = dropdownMenu.text;

  //console.log(dropdownMenuID);
  console.log(selectedName);
  //console.log(d3.selectAll("#menu").node().id)
};