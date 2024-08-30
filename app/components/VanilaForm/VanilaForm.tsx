"use client"

import { ChangeEvent, useRef, useState } from "react";

export default function VanilaForms(){
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
      <form method="POST" onSubmit={e => {e.preventDefault();console.log(e.target)}}>
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
        <div>
          <p>メールアドレス</p>
          <input type="email" name="email" className="border border-black" required/>
        </div>
        <div>
          <p>電話番号(ハイフンなし)</p>
          <input type="number" name="phone" className="border border-black"/>
        </div>
        <div>
          <p>お問い合わせ内容</p>
          <textarea name="text" className="border border-black" required></textarea>
        </div>
        <button type="submit" className="border border-black">送信</button>
      </form>
    </div>
  )
}