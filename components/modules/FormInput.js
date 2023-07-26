
function FormInput({ name, lable, type, onChange, value }) {

    return (
        <div className="flex flex-col">
            <label className="text-green-500 mb-3"
                htmlFor={name}
            >{lable}</label>

            <input name={name} type={type}
                id={name}
                onChange={onChange} value={value}
                className="rounded p-1
                 bg-zinc-300 outline-none border-none mb-4"
            />
        </div>
    )
}

export default FormInput