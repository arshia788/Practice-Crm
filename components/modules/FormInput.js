
function FormInput({ name, lable, type, changeHandler, value }) {

    return (
        <div className="flex flex-col">
            <label className="text-zinc-200 mb-3"
                htmlFor={name}
            >{lable}</label>

            <input name={name} type={type}
                id={name}
                onChange={changeHandler} value={value}
                className="rounded p-1
                 bg-zinc-300 outline-none border-none mb-4"
            />
        </div>
    )
}

export default FormInput