// import react ,{ createContext ,useContext ,  useState} from "react";
// import { courseLandingInitialFormData } from "@/config";

// const AdminContext = createContext(null);

// // export const useAdminContext = () => {
// //   const context = useContext(AdminContext);
// //   if (!context) {
// //     throw new Error("useAdminContext must be used within AdminProvider");
// //   }
// //   return context;
// // };

// export default function AdminProvider({children}){

//     const [ courseLandingFormData , setCourseLandingFormData] = useState(courseLandingInitialFormData);

//     return(
//         <AdminContext.Provider
//             value={{
//                 courseLandingFormData,
//                 setCourseLandingFormData
//             }}>
//             { children}
//         </AdminContext.Provider>
//     )
// }

import React, { createContext, useContext, useState } from "react";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";

// ❌ Remove 'export' – make it a local variable
const AdminContext = createContext(null);

// ✅ Uncomment and export the custom hook
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within AdminProvider");
  }
  return context;
};

export default function AdminProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] = useState(courseLandingInitialFormData);
  
  const [ courseCurriculumFormData , setCourseCurriculumFormData] = useState(courseCurriculumInitialFormData)

  return (
    <AdminContext.Provider
      value={{
        courseCurriculumFormData , 
        setCourseCurriculumFormData,
        courseLandingFormData,
        setCourseLandingFormData,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}