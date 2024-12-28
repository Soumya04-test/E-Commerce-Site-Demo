import { FaIndianRupeeSign } from "react-icons/fa6";

const Productcard = ({  imgsrc, title, description,disPrice, orgPrice}) => {
  return (
    <div className="container mx-auto">
        <div className="w-auto h-auto rounded flex flex-col items-center p-2">
          <img
            src={imgsrc}
            alt="Iphone Image"
            className="w-auto rounded"
          />
          <h1 className="text-2xl font-bold mt-2 uppercase">{title}</h1>
          <p className="text-zinc-600">{description}</p>
          <p className="text-lg flex flex-row my-4">
            Discounted Price:
            <span className="flex flex-row items-center">
              <FaIndianRupeeSign />
              {disPrice}
            </span>
          </p>
          <p className="text-xs flex flex-row">
            Original Price:
            <span className="flex flex-row items-center line-through">
              <FaIndianRupeeSign />
              {orgPrice}
            </span>
          </p>
          <div className="flex flex-row gap-12 mt-7">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded">
              Add to Cart
            </button>
            <button className="bg-orange-600 text-white px-3 py-1 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
  )
}

export default Productcard 