const data = [
  {
    id: 1,
    date: "24/08",
    likes: 23,
    comments: 2,
    shares: 4,
    saves: 12,
  },
  {
    id: 2,
    date: "25/08",
    likes: 30,
    comments: 5,
    shares: 8,
    saves: 15,
  },
];

export function PostRow() {
  return (
    <div>
      {data.map((post) => {
        return (
          <div key={post.id} className="mt-2 flex col gap-2">
            <div className="w-3/5 bg-gray-200 px-6 py-2">
              <p>1</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2">
              <p>24/08</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>23</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>2</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>4</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>12</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostRow;
