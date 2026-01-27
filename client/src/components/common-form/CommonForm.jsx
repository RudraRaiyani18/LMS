import {  Button } from '../ui/button.jsx';
import FormControls from './FormControl.jsx';

const CommonForm = ({handleSubmit ,buttonText , formControls = [] , formData , setFormData , isButtonDisable= false}) =>{
    return(
        <form onSubmit={handleSubmit}>
            {/* render form controls here config/index.jsx */}
            <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
            <Button disabled={isButtonDisable} type="submit" className="mt-5 w-full">{buttonText || "Submit"}</Button>
        </form>
    )
}
export default CommonForm;