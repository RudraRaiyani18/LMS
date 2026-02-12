import react , { useState , useContext } from "react";
import AdminCourse from "@/components/admin/courses/AdminCourse.jsx";
import AdminDashboard from "@/components/admin/dashboard/AdminDash.jsx";
import { Button } from "@/components/ui/button.jsx";
import { BarChart, Book, LogOut } from "lucide-react";
import { Tabs , TabsContent } from "@/components/ui/tabs.jsx";
import { AuthContext } from "@/context/authContext/AuthContext.jsx";

const AdminPage= () =>{

  const [ activeTab , setActiveTab ] = useState('dashboard');
  const { resetCredentials } = useContext(AuthContext);
  const menuItems = [
    {icon : BarChart , label : 'Dashboard' , value : 'dashboard' , component : <AdminDashboard/> },
    {icon : Book , label : "Courses" , value : "courses" , component : <AdminCourse/> },
    { icon :LogOut , label : "logout" , value : "logout" , component : null}

  ];

  const handleLogOut = () =>{
    resetCredentials();
    sessionStorage.clear();
  }

  return (
  <div className="flex h-full min-h-screen bg-gray-700">
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Instructor View</h1>
        <nav>
          {
            menuItems.map((item) =>{
              return (
              <Button 
                key={item.value} 
                  onClick={ () =>{ if(item.value === "logout"){
                    handleLogOut();
                  }else{
                    setActiveTab(item.value);
                  }
              }}
                className="w-full justify-start mb-2" variant="ghost"
                >
                  <item.icon className="mr-2 h-4 w-4"/>
                  {item.label}
                </Button>
              )
            })
          }
        </nav>
      </div>
    </aside>

    <main className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">Dashboard </h1>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {
                menuItems.map((item) =>{
                  return(
                  <TabsContent value={item.value} key={item.value}>
                    { item.component !== null ? item.component : null}
                  </TabsContent>)
                })
              }
            </Tabs>
       </div>
    </main>
  </div>
)
}

export default AdminPage;