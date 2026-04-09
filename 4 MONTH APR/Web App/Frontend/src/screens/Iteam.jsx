import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import "./.././style.css"
import { useState } from 'react';
import { useEffect } from 'react';

function Iteam() {

  const [iteamName, setIteamName] = useState();
  const [description, setDescription] = useState();
  const [purchsePrice, setPurchasePrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [iteamData, setData] = useState();

  async function SubmitForm(e) {
    try {
      e.preventDefault();
      const data = {

        name: iteamName,
        description: description,
        purchasePrice: purchsePrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        unit: unit
        
      } 
      console.log(data, "Form submitted");
      const apiResponse = await axios.post(`${import.meta.env.VITE_API_KEY_BACKEND}/create-iteam`, data)
        .then(console.log("yes")).catch((error) => console.log(error))

      console.log(apiResponse);
      
      getAllIteamData();

      toast.success("Form submitted", {

        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });

    } catch (error) {
      console.log(error)
    }
  }

  const getAllIteamData = async () => {
    try {

      const apiResponse = await fetch(`${import.meta.env.VITE_API_KEY_BACKEND}/get-all-iteam`)
      const responseData = await apiResponse.json()
      
      setData(responseData.data);
      console.log(responseData)

    } catch (error) {
      console.log(error)
    }
  } 
  useEffect(() => {
    // calling getalliteamdata to load all iteam when the page first load 
    getAllIteamData();
  }, []);

  console.log(iteamData, "iteam data ===>")

  const [show, setShow] = useState(false);
  const [id, setId] = useState()

  const handleClose = () => setShow(false);

  const OpenDeleteModal = (_id) => {
    try {
      setShow(true);
      setId(_id)

      console.log(_id,"_id===>")
      console.log("call deleted function")
    }catch {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    try {
      console.log(id,"_id===>")
     
      const apiResponse = await axios.delete(`${import.meta.env.VITE_API_KEY_BACKEND}/delete-iteam/${id}` )

      setShow(false)
      console.log(apiResponse)
      getAllIteamData();

    }catch(error) {
      console.log(error)
    }
  }

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1 className='text-danger text-center my-5'><b>Manage Iteam</b> </h1>

      <div className='container'>

        <div className='row'>
          <div className='col-md-6'>
            <h3 className='border text-center'>Create Iteam</h3>
            <Form className='my-5'>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Iteam Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Iteam Name"
                    onChange={() => setIteamName(event.target.value)} value={iteamName} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placholer="Enter description" onChange={(event) => setDescription(event.target.value)} value={description} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Purchase Price" value={purchsePrice} onChange={(event) => setPurchasePrice(event.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Selling Price" value={sellingPrice} onChange={(event) => setSellingPrice(event.target.value)} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="Number" placholder="Enter Quantity" onChange={(event) => setQuantity(event.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit" value={unit}
                    onChange={(event) => setUnit(event.target.value)}>

                    <option>Choose Unit</option>
                    <option>piecs</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>gm</option>
                    <option>ltr</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <div className='text-center'>
                <Button variant="primary"
                  type="submit"
                  className='w-50'
                  onClick={SubmitForm}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
          <div className='col-md-6'>
            <h3 className='border text-center'>Get Iteam</h3>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Iteam Name</th>
                  <th>Description</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {iteamData && iteamData.map((each, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{each.name}</td>
                      <td>{each.description}</td>
                      <td>{each.purchasePrice}</td>
                      <td>{each.sellingPrice}</td>
                      <td>{each.quantity}</td>
                      <td>{each.unit}</td>
                      <td className='d-flex'>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger mx-2'
                        
                         onClick={ () => OpenDeleteModal(each._id)}
                        >
                          Delete
                          </button>
                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confimation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this iteam</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleDelete}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Iteam