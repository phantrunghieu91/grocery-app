import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { GroceryItem, selectCount } from '../grocerySlice';
import { add, update } from '../grocerySlice';
import * as yup from 'yup';
import { useState } from 'react';
import Button from '../../../components/utilities/Button';

interface GroceryFormValues {
  groceryName: string;
  quantity: number;
}

const GroceryForm: React.FC<{}> = () => {
  const [type, setType] = useState<string>('add');
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const initialValues: GroceryFormValues = {
    groceryName: '',
    quantity: 1,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object().shape({
        groceryName: yup.string().min(2, 'Must have at least 2 chars').required('Required'),
        quantity: yup.number(),
      })}
      onSubmit={(values: GroceryFormValues, { setSubmitting }: FormikHelpers<GroceryFormValues>) => {
        const newItem: GroceryItem = {
          id: count + 1,
          name: values.groceryName,
          quantity: values.quantity,
        };
        setSubmitting(false);
        dispatch(add(newItem));
      }}>
      <Form className='grid grid-cols-12 gap-x-2 gap-y-6 mt-4 border p-6 relative rounded-md'>
        <h3 className='dark:bg-black bg-white px-2 col-span-12 text-xl font-semibold absolute -top-[10%] left-8 capitalize'>{type === 'add' ? `Add new grocery item` : `Edit`}</h3>
        <div className='form-group col-span-8 flex flex-col gap-y-2'>
          <label htmlFor='groceryName' className='text-sm font-semibold italic'>
            Name
          </label>
          <Field id='groceryName' className='px-2 py-2 text-slate-700' name='groceryName' placeholder='Enter grocery name' />
        </div>
        <div className='form-group col-span-4 flex flex-col gap-y-2'>
          <label htmlFor='quantity' className='text-sm font-semibold italic'>
            Quantity
          </label>
          <Field className='px-2 py-2 text-slate-700' type='number' id='quantity' name='quantity' value='1' />
        </div>
        <div className='flex flex-nowrap justify-center col-span-12 gap-x-2'>
          <Button className='basis-full' type='submit'>
            {type}
          </Button>
          <Button className='basis-full' type='reset'>
            Reset
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default GroceryForm;
