import react ,{ use, useContext ,useState } from 'react';
import { courseCurriculumInitialFormData } from '@/config';
import { useAdminContext } from '@/context/adminContext/AdminContext.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button.jsx';
 
const CourseCurriculum = () => {
  // add custom hook to get and set form data for course curriculum
  const { courseCurriculum = [] , setCourseCurriculum} = useContext(useAdminContext);
  
  return(<Card>
      <CardHeader>
        <CardTitle>Course Curriculum</CardTitle>
      </CardHeader>

      <CardContent>
        <Button>Add Lecture</Button>

        <div className="mt-4 space-y-4">
          {
            courseCurriculum?.map((cItem , index) =>{
              return(
                <div className="border p-5 rounded-md" key={index}>
                  <div className='flex gap-5'>
                    <h3 className='font-semibold '>Lecture {index + 1}</h3>
                    {mediaUploadProgress ? (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}

        {/* new change */}
          <div className="flex items-center space-x-2">
                  <Switch
                    onCheckedChange={(value) =>
                      handleFreePreviewChange(value, index)
                    }
                    checked={courseCurriculumFormData[index]?.freePreview}
                    id={`freePreview-${index + 1}`}
                  />
                  <Label htmlFor={`freePreview-${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
                    
                  </div>
                </div>
              )
              }  
            )
          }
        </div>
      </CardContent>
    </Card>
  )

}

export default CourseCurriculum;
