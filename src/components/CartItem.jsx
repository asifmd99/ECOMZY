
// import {FcDeleteDatabase} from "react-icons/fc"
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({item, itemIndex}) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   }

//   return (
//     <div>

//       <div>

//         <div>
//           <img src={item.image} />
//         </div>
//         <div>
//           <h1>{item.title}</h1>
//           <h1>{item.description}</h1>
//           <div>
//             <p>{item.price}</p>
//             <div
//             onClick={removeFromCart}>
//               <FcDeleteDatabase/>
//             </div>
//           </div>

//         </div>


//       </div>

//     </div>
//   );
// };

// export default CartItem;
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };
  return (
    <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-[3px] border-slate-500  ">
      <div className="flex md:flex-row flex-col w-full p-3 gap-5 items-center">
        <div className="sm:w-[30%] w-[60%]">
          <img src={item.image} className="object-cover" />
        </div>
        <div className="sm:w-[70%] w-[100%] self-start space-y-5 ml-5">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}>
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
