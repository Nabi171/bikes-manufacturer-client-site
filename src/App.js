import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import PurChase from './Components/PurChase/PurChase';
import Dashboard from './Components/Dassboard/Dassboard';
import MyProfile from './Components/MyProfile/MyProfile';
import Review from './Components/Review/Review';
import AddReview from './Components/AddReview/AddReview';
import AllReviews from './Components/AllReviews/AllReviews';
import Myorder from './Components/Myorder/Myorder';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Updateprofile from './Components/MyProfile/Updateprofile';
import NotFound from './Components/Notfound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import AddProduct from './Components/Addproduct/AddProduct';
import Allproduct from './Components/AllProduct/Allproduct';
import Portfolio from './Components/Portfolio/Portfolio';
import Users from './Components/Users/Users';
import Payment from './Components/Payment/Payment';
import ManageProducts from './Components/ManageProducts/ManageProducts';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />



        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="myOrder" element={<Myorder />} />
          <Route path="addreviews" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="updatedProfile" element={<Updateprofile />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="allProduct" element={<Allproduct />} />
          <Route path="users" element={<Users />} />
          <Route path="allreviews" element={<AllReviews />} />
          <Route path="manageProducts" element={<ManageProducts />} />

        </Route>




        <Route path="payment/:id" element={<Payment></Payment>}></Route>


        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/review" element={<Review />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/register" element={<Register />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <PurChase></PurChase>
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
