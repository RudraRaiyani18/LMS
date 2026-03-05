import FormControls from '@/components/common-form/FormControl.jsx';
import { Card , CardHeader , CardTitle , CardContent } from '@/components/ui/card.jsx';
import  {  useContext } from 'react'
import { courseLandingPageFormControls } from '@/config';
import { useAdminContext } from '@/context/adminContext/AdminContext.jsx';

const CourseLanding = () => {

    const { courseLandingFormData, setCourseLandingFormData} = useAdminContext();
  return (
  <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>

      <CardContent>
        <FormControls formControls={courseLandingPageFormControls} formData={courseLandingFormData} setFormData={setCourseLandingFormData}/>
      </CardContent>
    </Card>
  )
}

export default CourseLanding
