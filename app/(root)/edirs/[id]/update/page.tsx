import EdirForm from "@/components/shared/EdirForm";
import { getEdirById } from "@/lib/actions/edir.actions";
import { auth } from "@clerk/nextjs";

type UpdateEdirProps = {
  params: { id: string };
};

const UpdateEdir = async ({ params: { id } }: UpdateEdirProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const edir = await getEdirById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md-py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Edir
        </h3>
      </section>
      <div className="wrapper my-8">
        <EdirForm 
          type="Update" 
          edir={edir} 
          edirId={edir._id} 
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEdir;