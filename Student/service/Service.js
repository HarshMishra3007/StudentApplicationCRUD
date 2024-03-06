import axios from "axios"
//For getting all Students
export const getStudents=async ()=>{
  const url = 'http://localhost:5039/CRUDMinimalAPI/Students';
  const response=await axios.get(url, { method: 'GET'});
  if(response.status ===200){
    const data=await response.data;
    return data;
  }
  else{
    throw  new Error('Could not retrieve students');
  }
  };
//For deleting a Student
  export const  deletePost=async(id)=> {
    const url = `http://localhost:5039/CRUDMinimalAPI/DeleteEmployee/${id}`;
    const response=await axios.delete(url,{method:'DELETE'});
    window.location.reload(false);
  }
//For Creating a New Student
export const createPost=async(postToCreate)=>{
 const url = 'http://localhost:5039/CRUDMinimalAPI/AddStudent';
 const response= await axios.post(url,postToCreate);
if(response.status===201){
  alert(`Student successfully created.`);
}
else{
  throw  new Error('Could not add New Student.');
}
};
//For getting student by id
export const getStudentById= async (id)=>{
  const url = `http://localhost:5039/CRUDMinimalAPI/StudentByID?Id=${id}`;
  const response=await axios.get(url);
 if(response.status ===200){
  const data=await response.data;
  return data;
}
else{
  throw  new Error('Could not retrieve student from ID');
}
}

//For updating a student with a particular id
export const UpdateStudent=async(id,postToUpdate)=>{
const url = `http://localhost:5039/CRUDMinimalAPI/UpdateEmployee/${id}`; 
const response= await axios.put(url,postToUpdate);
if(response.status===200){
  alert("Student successfully got created");

}
else{
  throw new Error('Could not able to update the student');
}
};





  