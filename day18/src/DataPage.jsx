import { useFetchData } from './hooks/useFetchData';
import Navbar from './components/Navbar';
const DataPage = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchData();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-white p-6">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">📃 Posts from JSONPlaceholder</h2>

        <button
          onClick={() => refetch()}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          🔄 Refetch
        </button>

        {isLoading && <p className="text-gray-500">Loading posts...</p>}
        {isError && <p className="text-red-600">Error fetching posts. Please try again.</p>}

        <ul className="space-y-6">
          {data?.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-xl text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataPage;
