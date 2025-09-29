import ToolsDetails from "../components/toolsDetails";
import Tools from "../data/tools";

const toolDetails = async ({
  params,
}: {
  params: Promise<{ tool: string }>;
}) => {
  const { tool } = await params;
  
  const product = Tools.filter((item) => item.id === Number(tool));
  return (
    <div>
      <ToolsDetails product={product[0]} />
    </div>
  );
};

export default toolDetails;
// const result = users.filter((user) => user.name === "Blessing");
// console.log(result);
