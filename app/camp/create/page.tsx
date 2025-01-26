import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createLanmarkAction } from "@/actions/actions";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/ProvinceInput";

const CreateLandmark = async () => {
  return (
    <section>
      <h1 className="text-2xl mb-8 font-semibold capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createLanmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              type="text"
              label="Landmark name"
              placeholder="landmark name"
            />

            <CategoryInput />
          </div>
          <TextAreaInput name="Description" labelText="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FormInput
            name="price"
            type="text"
            label="Price"
            placeholder="price"
          />
          <ProvinceInput name="Province"/>
          </div>
          <SubmitButton size="lg" text="create landmark" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateLandmark;
