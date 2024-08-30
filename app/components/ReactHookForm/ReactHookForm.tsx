"use client"

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} className="border border-black"/>
        {/* include validation with requinred or other standard HTML validation rules */}
      </div>
      <div>
        <input {...register("exampleRequired", { required: true })} className="border border-black"/>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <div>This field is required</div>}
      </div>
      <button type="submit" className="border border-black">送信</button>
    </form>
  )
}