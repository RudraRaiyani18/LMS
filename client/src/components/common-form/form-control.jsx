

const FormControls = ({formControls = [] , formData , setFormData}) => {

    const renderComponentByType = (control) => {
        switch(control.type) {
            case 'input':   
                return (
                    <input 
                        type={control.type} 
                        name={control.name}
                        placeholder={control.placeholder}

                        value={formData[control.name] || ''}
                        onChange={(e) => setFormData({...formData, [control.name]: e.target.value})}
                        className="border p-2 rounded w-full"   
                    />
                );
            // Add more component types as needed
            default:
                return null;
        }
    }


    return(
        <div className="flex flex-col gap-4">
            {
                formControls.map((controlItem)=>{
                    return (
                        <div key={controlItem.name} className="flex flex-col gap-2">
                            {controlItem.label && <label className="font-medium">{controlItem.label}</label>}
                            {renderComponentByType(controlItem)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FormControls;