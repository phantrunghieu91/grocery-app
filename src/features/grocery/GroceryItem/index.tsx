import Button from '../../../components/utilities/Button';
import { CiEdit } from 'react-icons/ci';
import { FaRegTrashCan } from 'react-icons/fa6';
import { GroceryItemType, remove, prepareUpdate } from '../grocerySlice';
import { useAppDispatch } from '../../../hooks';

interface GroceryItemProps {
  item: GroceryItemType;
}

const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='mt-4 flex flex-wrap flex-row gap-x-2'>
      <p className='basis-auto grow text-justify'>
        {item.name} - {item.quantity}
      </p>
      <Button
        bgColor='bg-teal-600 hover:bg-teal-500'
        handleClick={() => {
          dispatch(prepareUpdate(item.id));
        }}>
        <CiEdit />
      </Button>
      <Button
        bgColor='bg-red-600 hover:bg-red-500'
        handleClick={() => {
          dispatch(remove(item.id));
        }}>
        <FaRegTrashCan />
      </Button>
    </div>
  );
};

export default GroceryItem;
