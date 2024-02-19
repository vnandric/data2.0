import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Submit from "./submit";
import InputComponent from "./input";

import styles from "../users.module.css";

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
    <>
      <div className={styles.main_create}>
        <h2 className="text-white">Create New User</h2>
        <form action={addUser}>
          <InputComponent />
          <Submit />
        </form>
      </div>
    </>
  );
}
