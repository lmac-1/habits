import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import RadioGroup from "@/components/forms/RadioGroup";
import TextField from "@/components/forms/TextField";
import { useRouter } from "next/router";

export default function Add() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      await axios.post("/api/habits", {
        ...data,
      });
      router.push("/");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("Sorry, an error has occurred");
    }
  };
  return (
    <div className="w-80 mx-auto mt-6">
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
        <Button disabled={loading} type="submit">
          {!loading ? "Submit" : "Loading..."}
        </Button>
        <div className="mt-4 text-orange-700">{error}</div>
      </form>
    </div>
  );
}
