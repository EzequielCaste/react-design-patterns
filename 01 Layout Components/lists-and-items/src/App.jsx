import {RegularList} from './RegularList'
import {SmallPersonListItem} from './people/SmallPersonListItem'
import {LargePersonListItem} from './people/LargePersonListOItem'

const people = [
  {
    name: 'John Doe',
    age: 34,
    hairColor: 'brown',
    hobbies: ['swimming', 'video games'],
  },
  {
    name: 'Jane Doe',
    age: 38,
    hairColor: 'blonde',
    hobbies: ['musicswimming', 'cooking'],
  },
  {
    name: 'River Slate',
    age: 42,
    hairColor: 'black',
    hobbies: ['reading', 'hunting'],
  },
]

const products = [
  {
    name: 'Smart TV',
    price: '$400',
    description: 'Huge LCD screen a great deal',
    rating: 4.5,
  },
  {
    name: 'Mobile phone',
    price: '$500',
    description: 'Phone with mp3 and calculator',
    rating: 5,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'Just like the pros use',
    rating: 4.2,
  },
]

function App() {
  return (
    <>
      <RegularList
        items={people}
        resouceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resouceName="person"
        itemComponent={LargePersonListItem} />
    </>
  )
}

export default App
