"use client"

import { ChangeEvent, useState } from "react";

type FormState = {
  value:string,
  error?:string
}

export default function VanilaForms(){
  const [name, setName] = useState<FormState>()

  function chageNameState(e:ChangeEvent<HTMLInputElement>){
    const newName:FormState = {value: e.target.value}

    if(newName.value.length > 10){
      newName.error = "最大10文字まで入力可能です"
      setName(newName)
      return;
    }

    if(newName.value === ""){
      newName.error = "入力必須の項目です"
      setName(newName)
      return;
    }

    setName(newName)
  }

  return(
    <div>
      <form method="POST" onSubmit={e => {e.preventDefault();console.log(e.target)}}>
        <div>
          <p>名前</p>
          <input 
            type="text" name="name" required
            onChange={chageNameState}
            className="border border-black" 
          />
          {name?.error && 
            <div className="text-red-600 text-sm">{name.error}</div>
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