"use client"

export default function VanilaForms(){
  return(
    <div>
      <form onSubmit={e => {e.preventDefault();console.log(e.target)}}>
        <div>
          <p>名前</p>
          <input type="text" name="name" className="border border-black" required/>
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