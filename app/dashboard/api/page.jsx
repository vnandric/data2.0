async function getData() {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  return comments.json();
}

export default async function Api() {
  const data = await getData();
  return (
    <>
      <div>
        {data.map((comments) => (
          <div key={comments.id}>
            <p className="text-white">{comments.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
