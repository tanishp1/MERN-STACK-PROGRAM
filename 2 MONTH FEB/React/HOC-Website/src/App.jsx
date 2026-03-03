import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCard from './component/DetailsCard';
import CardTitle from 'react-bootstrap/esm/CardTitle';

function App() {

// variable
const name ="HOC"

let age = 30;
console.log(name, "name ===>");

console.log(age, "---");

//string
const b = ["apple", "test", "pune", 2252];

// Object
const data = {
  name: "test",
  city: "pune",
};

//if else
  const fullName = "HOC"
if(fullName == "HOC"){
  console.log(true)
}else{
  console.log(false)
}
  //function
  function addNumber () {
    
    console.log("Click");
  }
  
  const cardData = [
    {
      CardTitle: "test 1",
      CardDescription: "test Description 1",
    },

    {
      CardTitle: "test 2",
      CardDescription: "test Description 2",
    },

    {
      CardTitle: "test 3",
      CardDescription: "test Description 3",
    },

    {
      CardTitle: "test 4",
      CardDescription: "test Description 4",
    },

    {
      CardTitle: "test 5",
      CardDescription: "test Description 5",
    },

    {
      CardTitle: "test 6",
      CardDescription: "test Description 6",
    },
  ];

  console.log(cardData, "-----")

  return (
    <>
    <button className='btn btn-primary' onClick={addNumber} >Click</button>
      <div className="container">
        <div className="row my-2">
           {cardData.map((each) => (

          <div className="col-md-3">
              
              <DetailsCard CardTitle={each.CardTitle} CardDescription={each.CardDescription} />
            
          </div>

           ))}

        </div>
      </div>
    </>
  );
}

export default App;
