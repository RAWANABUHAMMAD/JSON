/////////1//////////////
const person = {
    name:"ahmad" ,
    age: 25,
    email: "ahmed@example.com"
  };
  const json= JSON.stringify(person);
  console.log(json);

  const parse = JSON.parse(json);
console.log(parse);


/////////2//////////////
function properties(jsonObject) {
    const propertyArray = Object.keys(jsonObject);
    return propertyArray.length;
  }
  
  let person1 = {
    name: "rawan",
    age: 35,
    email: "rawan@example.com",
  };
  
  console.log(properties(person1));

  /////////3//////////////
  let books = {
    library: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationDate: "1925",
      },
      { title: "1984", 
      author: "George Orwell",
       publicationDate: "1949" },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationDate: "1960",
      },
    ],
  };
  function receive(obj) {
    return obj.library.map(library => library.title);
  }
  console.log(receive(books));


  /////////4//////////////


  function Average(jsonObject, Name) {
    const array = jsonObject.data;
    const total = array.reduce((sum, item) => sum + item[Name], 0);
    return total / array.length;
  }
  const students = {
    data: [
      { name: "Ali", grade: 75 },
      { name: "Sara", grade: 80 },
      { name: "Ahmed", grade: 88 },
      { name: "Laila", grade: 92 },
    ],
  };
  console.log(Average(students, "grade"));


   /////////5//////////////
   function sortByProperty(jsonObject, propertyName) {
    const array = jsonObject.data;
    return array.sort((a, b) => b[propertyName] - a[propertyName]);
  }

  const student = {
    data: [
      { name: "mohamd", grade: 85 },
      { name: "khaled", grade: 90 },
      { name: "Ahmed", grade: 78 },
      { name: "Laila", grade: 92 },
    ],
  };

  console.log(sortByProperty(student, "grade"));


/////////6//////////////
  const cities = {
    data: [
      { name: "Tokyo", population: 37400068, country: "Japan" },
      { name: "Shanghai", population: 26317104, country: "China" },
      { name: "Delhi", population: 29399141, country: "India" },
      { name: "São Paulo", population: 21846507, country: "Brazil" },
      { name: "Cairo", population: 20076002, country: "Egypt" },
    ],
  };
  function getCitiesByPopulation(jsonObject) {
    return jsonObject.data
      .sort((a, b) => b.population - a.population)
      .map((city) => city.name);
  }
  console.log(getCitiesByPopulation(cities))




/////////8//////////////
let fatchData = fetch( "https://api.github.com/users/RAWANABUHAMMAD/repos");
    fatchData 
      .then((Response) => {
        if (!Response.ok) {
          throw "Failed to fatch data;";
        }
        return Response.json();
      })
      .then((data) => {
        let reponame = data.map((repo) => repo.name);
        console.log(reponame);
      });














