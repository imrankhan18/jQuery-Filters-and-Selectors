$(document).ready(function () {
  var products = [
    {
      id: "100",
      name: "iPhone 4S",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "101",
      name: "Moto X",
      brand: "Motorola",
      os: "Android",
    },
    {
      id: "102",
      name: "iPhone 6",
      brand: "Apple",
      os: "iOS",
    },
    {
      id: "103",
      name: "Samsung Galaxy S",
      brand: "Samsung",
      os: "Android",
    },
    {
      id: "104",
      name: "Google Nexus",
      brand: "ASUS",
      os: "Android",
    },
    {
      id: "105",
      name: "Surface",
      brand: "Microsoft",
      os: "Windows",
    },
  ];

  var html = "";
  var brand = "All";
  var os = "All";
  var searchInput = "";

  html += `<table><select name="brand" id="brand">
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Motorola">Motorola</option>
        <option value="Samsung">Samsung</option>
        <option value="ASUS">ASUS</option>
        <option value="Microsoft">Microsoft</option>
        </select>
         <select name="os" id="os">
        <option value="All">All</option>
        <option value="iOS">iOS</option>
        <option value="Android">Android</option>
        <option value="Windows">Windows</option>
      </select></table>
      <div id="disp"></div><br>
      <div id="search"><label for="search"><input id="input" placeholder="search by Id"><input type="button" id="button" value="search"></label></div>`;

  $("#content").html(html);

  function displayAll() {
    var html1 = "";
    if (searchInput == "") {
      for (let i = 0; i < products.length; i++) {
        html1 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        if (searchInput == products[i].id || searchInput == products[i].name)
          html1 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    }
    $("#disp").html(html1);
  }

  displayAll();

  $("#content").on("click", "#brand", function () {
    brand = $(this).val();
    console.log(brand);
    display();
  });

  $("#content").on("click", "#os", function () {
    os = $(this).val();
    console.log(os);
    display();
  });

  $("#content").on("click", "a#x", function () {
    var id = $(this).data("pid");
    var index = "";
    console.log("hide==" + id);
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        index = i;

        //products[i].x="1";
        //console.log("changed x =="+products[i].x);
      }
    }
    products.splice(index, 1);
    display();
  });

  function display() {
    console.log(brand + "==" + os);
    if (brand == "All" && os == "All") displayAll();
    else if (brand == "All") displayOs();
    else if (os == "All") displayBrand();
    else displayBoth();
  }

  function displayOs() {
    console.log("display  os");
    var html2 = "";
    if (searchInput == "") {
      for (let i = 0; i < products.length; i++) {
        if (os == products[i].os)
          html2 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        if (
          os == products[i].os &&
          (searchInput == products[i].id || searchInput == products[i].name)
        )
          html2 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    }
    $("#disp").html(html2);
  }

  function displayBrand() {
    console.log("displaybrand");
    var html3 = "";
    if (searchInput == "") {
      for (let i = 0; i < products.length; i++) {
        if (brand == products[i].brand)
          html3 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        if (
          brand == products[i].brand &&
          (searchInput == products[i].id || searchInput == products[i].name)
        )
          html3 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    }
    $("#disp").html(html3);
  }
  function displayBoth() {
    console.log("displayboth");
    var html4 = "";
    if (searchInput == "") {
      for (let i = 0; i < products.length; i++) {
        if (os == products[i].os && brand == products[i].brand)
          html4 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        if (
          os == products[i].os &&
          brand == products[i].brand &&
          (searchInput == products[i].id || searchInput == products[i].name)
        )
          html4 += `<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>DEL</td></tr></table>`;
      }
    }
    $("#disp").html(html4);
  }

  $("#content").on("click", "#button", function () {
    searchInput = $("#input").val();
    display();
    searchInput = "";
    var search = "";
    search += `<label for="search"><input id="input" placeholder="search by Id"><input type="button" id="button" value="search"></label>`;
    $("#search").html(search);
    console.log(searchInput);
  });
});
