import React, {useState } from 'react'
import { assests } from '../../assets/assests' 
import { addFood } from '../../service/FoodService'; 
import { toast } from 'react-toastify';

const AddFood = () => {
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"",
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
  }

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    if(!image){
      toast.error("Please select an image");
      return;
    }

    try{
      const success = await addFood(data,image);
      console.log("success is "+ success);
      if(success){
        toast.success("Food added sucessfully");
      }
      setData({name:"",description:"",price:"",category:""});
      setImage(null)
    }catch(err){
      toast.error("error in adding food");
      console.log(err)
      setData({name:"",description:"",price:"",category:""});
      setImage(null)
    }
  }
 
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Add Food</h3>
                        <form id="registrationForm" onSubmit={onSubmitHandler}>
                            {/* <!-- Personal Information -- */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Food Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    name='name'
                                    onChange={onChangeHandler}
                                    value={data.name}
                                    placeholder="Enter your full name" 
                                    required 
                                />
                                <div className="form-text">Please enter the food name.</div>
                            </div> 
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="bio" 
                                    rows="3" 
                                    name='description'
                                    onChange={onChangeHandler}
                                    value={data.description}
                                    placeholder="Tell about the food" 
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label"><img src={image?URL.createObjectURL(image):assests.upload} width={180}></img></label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="image" 
                                    name='image'
                                    onChange={(e)=>setImage(e.target.files[0])}
                                    accept="image/*" 
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select 
                                    className="form-control" 
                                    id="category" 
                                    name='category'
                                    onChange={onChangeHandler}
                                    value={data.category}
                                    required
                                >
                                    <option value="">Select food category</option>
                                    <option value="biryani">Biryani</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="burger">Burger</option>
                                    <option value="cake">Cake</option>
                                    <option value="salad">Salad</option>
                                    <option value="ice-cream">Ice cream</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="price" 
                                    name='price'
                                    onChange={onChangeHandler}
                                    value={data.price}
                                    placeholder="Enter the food price in integer" 
                                    required 
                                />
                            </div>
                            {/* <!-- Submit Button --> */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Save</button>
                                <div id="formFeedback" className="mt-3"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddFood;
