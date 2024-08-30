import { ChangeEvent, RefObject, useState } from "react";

export const NameForm:React.FC<{submitRef:RefObject<HTMLButtonElement>}> = ({submitRef})=>{
  const [error, setError] = useState<string>()

  function validate(e:ChangeEvent<HTMLInputElement>){
    if(!submitRef.current) return;
    const submitButton = submitRef.current

    if(e.target.value === ""){
      setError("入力必須の項目です")
      submitButton.disabled = true
      return;
    }

    if(e.target.value.length > 10){
      setError("最大10文字まで入力可能です")
      submitButton.disabled = true
      return;
    }

    if(error !== ""){
      setError("")
      submitButton.disabled = false
      return;
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