import Child from "./Child";

const List = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((items) => (
          <Child a={items} key={items}></Child>
        ))}
      </ul>
    </>
  );
};

export default List;
