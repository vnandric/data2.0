import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function UserDelete({ userId }: { userId: number }) {
  const deleteUser = async () => {
    "use server";

    try {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <button onClick={deleteUser}>Delete</button>
      </div>
    </>
  );
}
