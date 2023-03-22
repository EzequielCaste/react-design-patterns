export const RegularList = ({ 
  items, 
  resouceName, 
  itemComponent: ItemComponent 
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i}
          {...{ [resouceName]: item }}
          />
      ))}
    </>
  )
}