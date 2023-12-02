import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { GroceryItemType, selectCount, selectFormAction, selectUpdatingItem } from '../grocerySlice';
import { add, update, resetFormAction } from '../grocerySlice';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import Button from '../../../components/utilities/Button';

interface GroceryFormValues {
  groceryName: string;
  quantity: number;
}

const GroceryForm: React.FC<{}> = () => {
  const formAction = useAppSelector(selectFormAction);
  const count = useAppSelector(selectCount);
  const updatingItem = useAppSelector(selectUpdatingItem);
  const dispatch = useAppDispatch();
  const [initialValues, setInitialValues] = useState<GroceryFormValues>({
    groceryName: '',
    quantity: 1,
  });
  useEffect(() => {
    if (updatingItem)
      setInitialValues({
        groceryName: updatingItem.name,
        quantity: updatingItem.quantity,
      });
  }, [updatingItem]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object().shape({
        groceryName: yup.string().min(2, 'Must have at least 2 chars').required('Required'),
        quantity: yup.number().moreThan(0, 'Must more than 0'),
      })}
      enableReinitialize={true}
      onSubmit={(values: GroceryFormValues, { setSubmitting, resetForm }: FormikHelpers<GroceryFormValues>) => {
        switch (formAction) {
          case 'edit':
            dispatch(
              update({
                id: updatingItem ? updatingItem.id : 0,
                name: values.groceryName,
                quantity: values.quantity,
              })
            );
            break;
          case 'add':
          default:
            const newItem: GroceryItemType = {
              id: count + 1,
              name: values.groceryName,
              quantity: values.quantity,
            };
            dispatch(add(newItem));
        }
        setInitialValues({
          groceryName: '',
          quantity: 1,
        });
        dispatch(resetFormAction());
        resetForm();
        setSubmitting(false);
      }}>
      {({ handleSubmit, errors, resetForm }) => (
        <Form className='grid grid-cols-12 gap-x-2 gap-y-6 mt-4 border p-6 relative rounded-md max-w-3xl mx-auto' onSubmit={handleSubmit}>
          <h3 className='dark:bg-black bg-white px-2 col-span-12 text-xl font-semibold absolute -top-[10%] left-8 capitalize'>
            {formAction === 'add' ? `Add new grocery item` : `Edit "${updatingItem?.name}"`}
          </h3>
          <div className='form-group col-span-8 flex flex-col gap-y-2'>
            <label htmlFor='groceryName' className='text-sm font-semibold italic'>
              Name
            </label>
            <Field id='groceryName' className={`px-2 py-2 text-slate-700 ${errors.groceryName && 'outline outline-2 outline-red-600'}`} name='groceryName' placeholder='Enter grocery name' />
            {errors.groceryName && <span className='text-red-500'>{errors.groceryName}</span>}
          </div>
          <div className='form-group col-span-4 flex flex-col gap-y-2'>
            <label htmlFor='quantity' className='text-sm font-semibold italic'>
              Quantity
            </label>
            <Field className={`px-2 py-2 text-slate-700 ${errors.quantity && 'outline outline-2 outline-red-600'} `} type='number' id='quantity' name='quantity' />
            {errors.quantity && <span className='text-red-500'>{errors.quantity}</span>}
          </div>
          <div className='flex flex-nowrap justify-center col-span-12 gap-x-2'>
            <Button className='basis-full' type='submit'>
              {formAction}
            </Button>
            <Button
              className='basis-full'
              type='reset'
              handleClick={() => {
                resetForm();
                if (formAction === 'edit') dispatch(resetFormAction());
              }}>
              Reset
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GroceryForm;
