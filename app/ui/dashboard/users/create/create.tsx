import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default function CreateUser() {
  const addUser = async (formData: FormData) => {
    "use server";

    await prisma.user.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
      },
    });

    revalidatePath("/dashboard/user1");
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form action={addUser}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="Content" />
        <button>Create Post</button>
      </form>
    </div>
  );
}
