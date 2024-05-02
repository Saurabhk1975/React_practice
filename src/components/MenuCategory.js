import ItemOfMenu from "./ItemOfMenu";

export const MenuCategory = ({ data, showAccordian, setAccordian }) => {
  const handelClick = () => {
    setAccordian(!showAccordian);
  };
  return (
    <div>
      {/* Header of Accordians */}
      <div
        className="w-6/12 m-auto mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer  "
        onClick={handelClick}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showAccordian && <ItemOfMenu items={data.itemCards} />}
      </div>
    </div>
  );
};
