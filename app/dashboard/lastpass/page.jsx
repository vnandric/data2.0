import { getLastpass } from "@/app/api/data";

export default async function LastPassPage() {
    const data = await getLastpass();

    const number = data.total;
  return (
    <div className="text-white">
      <p>Total licences: {number}</p>
    </div>
  );
}
