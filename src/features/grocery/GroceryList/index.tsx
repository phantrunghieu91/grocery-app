import { useAppSelector } from '../../../hooks';
import GroceryItem from '../GroceryItem';
import { selectGroceryList } from '../grocerySlice';

interface GroceryListProps {}
const GroceryList: React.FC<GroceryListProps> = ({}) => {
  const groceryList = useAppSelector(selectGroceryList);
  if (groceryList.length === 0) return <h2>There is no grocery item in cart!</h2>;
  return (
    <div className='mt-4 h-full overflow-hidden flex flex-col'>
      <h2 className='font-bold text-2xl'>Grocery List</h2>
      <div className='h-full overflow-auto'>
        {groceryList.map(item => (
          <GroceryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
