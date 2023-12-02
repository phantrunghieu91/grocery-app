import Layout from '../../components/Layout';
import GroceryForm from '../../features/grocery/GroceryForm';
import GroceryList from '../../features/grocery/GroceryList';

const Home = () => {
  return (
    <Layout>
      <div id='home' className={`container px-4 h-full flex flex-col overflow-hidden`}>
        <h1 className='text-3xl font-bold text-center mb-8'>Grocery App</h1>
        <GroceryForm />
        <GroceryList />
      </div>
    </Layout>
  );
};

export default Home;
