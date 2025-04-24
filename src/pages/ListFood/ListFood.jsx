import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { deleteFood, getFood } from '../../service/FoodService';

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const data = await getFood();
      setList(data);
    } catch (err) {
      toast.error("Error while reading food");
    }
  };

  const removeFood = async (id) => {
    try {
      const success = await deleteFood(id);
      if (success) {
        toast.success("Food removed");
        await fetchList();
      }
    } catch (err) {
      toast.error("Error while removing the food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h4 className="mb-3">Food List</h4>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Order No.</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>&#8377;{item.price}</td>
                <td className="text-danger">
                  <i className="bi bi-x-circle-fill" onClick={() => removeFood(item.id)} style={{ cursor: 'pointer' }}></i>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListFood;
