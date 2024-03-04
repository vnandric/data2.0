async function getData() {
  const comments = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=rotterdam&appid=166d09df8dc6a230d98f71e46472077c"
  );
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
