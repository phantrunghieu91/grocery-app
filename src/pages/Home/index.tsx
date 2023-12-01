import Layout from '../../components/Layout';
import GroceryForm from '../../features/grocery/GroceryForm';

const Home = () => {
  return (
    <Layout>
      <div className={`container px-4`}>
        <h1 className='text-3xl font-bold text-center'>Grocery App</h1>
        <GroceryForm />
      </div>
    </Layout>
  );
};

export default Home;
