import { Tooltype } from "../types/type";

const ToolsDetails = ({ product }: { product: Tooltype }) => {
  return (
    <div className="flex flex-col w-1/2 items-center gap-3  my-6 mx-auto">
      <h3
        className={`${product.bgColor} text-4xl capitalize text-white p-4 rounded-xl`}
      >
        {product.name}
      </h3>
      <p className="text-xl">This product is coming soon</p>
    </div>
  );
};

export default ToolsDetails;
