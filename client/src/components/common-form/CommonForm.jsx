import {  Button } from '../ui/button.jsx';
import FormControls from './FormControl.jsx';

const CommonForm = ({handleSubmit ,buttonText , formControls = [] , formData , setFormData}) =>{
    return(
        <form onSubmit={handleSubmit}>
            {/* render form controls here config/index.jsx */}
            <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
            <Button type="submit">{buttonText || "Submit"}</Button>
        </form>
    )
}
export default CommonForm;