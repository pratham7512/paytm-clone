export const Button=({value, onClick})=>{
    return <button onClick={onClick} class="mt-5 px-16 py-1 rounded-lg bg-black text-center text-white hover:bg-green-500">
        {value}
    </button>
}