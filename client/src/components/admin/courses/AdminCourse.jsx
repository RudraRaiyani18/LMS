import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card , CardHeader, CardTitle ,CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Table, TableCaption , TableHeader , TableRow, TableHead, TableBody , TableCell} from '@/components/ui/table.jsx';
import { Edit, Delete } from 'lucide-react';
function AdminCourse() {

  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
        <Button onClick={() => navigate("/admin/new-course")} className="p-6">Create New Course</Button>
      </CardHeader>

      <CardContent>
        <div className='overflow-x-auto'>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Course Name</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Actions</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>React JS full course</TableCell>
                {/* <TableCell>INV001</TableCell> */}
                {/* <TableCell>Paid</TableCell> */}
                <TableCell>100</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <Button variat="ghost" size="sm" >
                    <Edit className="h-6 w-6"/>
                  </Button>
                  <Button variat="ghost" size="sm" >
                    <Delete className="h-6 w-6"/>
                  </Button> 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminCourse
