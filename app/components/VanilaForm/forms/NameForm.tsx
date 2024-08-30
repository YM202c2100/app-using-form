import { ChangeEvent, useRef, useState } from "react";

export const NameForm = ()=>{
  const [error, setError] = useState<string>()
  const nameRef = useRef<HTMLInputElement>(null)

  function validate(e:ChangeEvent<HTMLInputElement>){
    if(!nameRef.current) return;

    if(nameRef.current.value === ""){
      setError("入力必須の項目です")
      return;
    }

    if(nameRef.current.value.length > 10){
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
        ref={nameRef}
        onChange={validate}
        className="border border-black" 
      />
      {error && 
        <div className="text-red-600 text-sm">{error}</div>
      }
    </div>
  )
}