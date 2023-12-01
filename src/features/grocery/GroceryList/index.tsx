import { useAppDispatch, useAppSelector } from '../../../hooks';
import GroceryItem from '../GroceryItem';
import { selectGroceryList } from '../grocerySlice';

interface GroceryListProps {}
const GroceryList: React.FC<GroceryListProps> = ({}) => {
  const dispatch = useAppDispatch();
  const groceryList = useAppSelector(selectGroceryList);
  if (groceryList.length === 0) return <h2>There is no grocery item in cart!</h2>;
  return (
    <div>
      <h2>Grocery List</h2>
      {groceryList.map(item => (
        <GroceryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default GroceryList;
