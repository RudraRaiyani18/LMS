import Button from '../ui/button.jsx';

const CommonForm = ({handleSubmit ,buttonText}) =>{
    return(
        <form onSubmit={handleSubmit}>
            {/* render form controls here config/index.jsx */}
            <Button type="submit">{buttonText || "Submit"}</Button>
        </form>
    )
}
export default CommonForm;