import RadioGroup from "@/components/forms/RadioGroup";
import TextField from "@/components/forms/TextField";
import { useForm } from "react-hook-form";

export default function Add() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-80 mx-auto mt-4">
      <h1 className="text-3xl mb-5">New habit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          name="name"
          required={true}
          register={register}
        />
        <RadioGroup
          name="priority"
          options={[
            { value: "high", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" },
          ]}
          register={register}
          label="Priority"
        />
        <RadioGroup
          name="frequency"
          options={[
            { value: 7, label: "Every day" },
            { value: 1, label: "Once per week" },
            { value: 2, label: "Twice per week" },
            { value: 3, label: "Three times per week" },
            { value: 4, label: "Four times per week" },
            { value: 5, label: "Five times per week" },
            { value: 6, label: "Six times per week" },
          ]}
          register={register}
          label="Regularity"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
