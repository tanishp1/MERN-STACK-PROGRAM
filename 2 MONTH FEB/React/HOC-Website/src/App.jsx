import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCard from './component/DetailsCard';

function App() {

  return (
    <>

      <div className="container">
        <div className="row my-2">
          <div className="col-md-3">
            <DetailsCard CardTitle="HOC" CardDescription="Karad" test="ss"/>
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Pune" CardDescription="India" test="ss"/>
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Satara" CardDescription="Maharashtra" test="ss"/>
          </div>
          <div className="col-md-3">
            <DetailsCard CardTitle="Kolhapur" CardDescription="Maharashtra" test="ss"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
