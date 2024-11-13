import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('https://6530e6096c756603295f481c.mockapi.io/blogs')

  return ( 
    <div className="home">  
    {error && <div>{error}</div>}
      {isPending && <div>Loading your experience!...</div>}
      {blogs && <BlogList blogs={blogs} title="Trending Topics" />}
    </div>
  );
}
 
export default Home;
