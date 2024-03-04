async function getData() {
  const comments = await fetch(process.env.OPENWEATHER_URL);
  return comments.json();
}

export default async function Api() {
  const data = await getData();
  return (
    <>
      <div className="text-white">{JSON.stringify(data)}</div>
    </>
  );
}
