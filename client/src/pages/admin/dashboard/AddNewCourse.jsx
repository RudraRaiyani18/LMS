import React from 'react'
import { Button } from "@/components/ui/button.jsx";
import { Card ,CardContent } from "@/components/ui/card.jsx";
import { Tabs , TabsList , TabsTrigger} from "@/components/ui/tabs.jsx";
import { TabsContent } from '@radix-ui/react-tabs';
import CourseCurriculum from '@/components/admin/courses/add-new-course/CourseCurriculum.jsx';
import CourseLanding from '@/components/admin/courses/add-new-course/CourseLanding.jsx';
import CourseSetting from '@/components/admin/courses/add-new-course/CourseSetting.jsx';


const AddNewCoursePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
        <Button className="text-sm tracking-wide font-bold px-8">SUBMIT</Button>
      </div>

      <Card>
        <CardContent>
            <div className='container mx-auto p-4'>
                <Tabs defaultValue='curriculum' className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                        <TabsTrigger value="course-landing-page">Course Landing Page</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>

                    <TabsContent value="curriculum">
                        <CourseCurriculum />
                    </TabsContent>
                        
                    <TabsContent value="course-landing-page">
                          <CourseLanding />
                    </TabsContent>

                    <TabsContent value="settings">
                          <CourseSetting />
                    </TabsContent>
                </Tabs>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddNewCoursePage
