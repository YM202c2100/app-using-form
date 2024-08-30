import { ChangeEvent, useState } from "react";

export const NameForm = ()=>{
  const [error, setError] = useState<string>()

  function validate(e:ChangeEvent<HTMLInputElement>){
    if(e.target.value === ""){
      setError("入力必須の項目です")
      return;
    }

    if(e.target.value.length > 10){
      setError("最大10文字まで入力可能です")
      return;
    }

    if(error !== ""){
      setError("")
    }
  }

  return(
    <div>
      <p>名前</p>
      <input 
        type="text" name="name" required
        onChange={validate}
        className="border border-black" 
      />
      {error && 
        <div className="text-red-600 text-sm">{error}</div>
      }
    </div>
  )
}