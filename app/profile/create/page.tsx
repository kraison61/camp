
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/actions";



const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl mb-8 font-semibold capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction} >
          <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FormInput
            name="firstName"
            type="text"
            label="firstname"
            placeholder="Please insert your firstname"
          />
          <FormInput
            name="lastName"
            type="text"
            label="lastname"
            placeholder="Please insert your lastname"
          />
          <FormInput
            name="userName"
            type="text"
            label="username"
            placeholder="Please insert your username"
          />
          </div>
          <SubmitButton size='lg' text="submit"/>
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
