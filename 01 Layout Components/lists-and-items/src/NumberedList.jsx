export const NumberedList = ({ 
  items, 
  resouceName, 
  itemComponent: ItemComponent 
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
        <h3>{i + 1}</h3>
        <ItemComponent key={i}
          {...{ [resouceName]: item }}
          />
        </>
      ))}
    </>
  )
}