export function InputBox({name, placeholder,onChange}) {
    return <div class="mx-5 w-4/5">
      <div className="text-sm font-medium text-left py-2">
        {name}
      </div>
      <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" onChange={onChange}/>
    </div>
}