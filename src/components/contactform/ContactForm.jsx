import React from "react";
import "./contactform.css";
export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   })

//   const onFormUpdate = (category, value) => {
//    setFormData(prevData => ({
//      ...prevData,
//      [category]: value
//    }));
// }

//  const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formData),
//     });
  
//     let result = await response.json();
//     setFormData(formData);
//     if (result.code === 200) {
//       console.log('success');
//     } else {
//       console.log('error');
//     }
//   };
  
  return (
    <div className="form">
      <form /*onSubmit={handleSubmit}*/>
        <label> Your Name</label>
        <input type="text" /* value={formData.name} onChange={(e) => onFormUpdate('name', e.target.value)} required */ />
        <label>Email</label>
        <input type="email" /* value={formData.email} onChange={(e) => onFormUpdate('email', e.target.value)} required */ />
        <label>Subject</label>
        <input type="text" /* value={formData.subject} onChange={(e) => onFormUpdate('subject', e.target.value)} required */ />
        <label>Drop a note</label>
        <textarea
          rows="6"
          placeholder="type your text here"
          /* value={formData.message} */
          type="text"
          /* required */
          /* onChange={(e) => onFormUpdate('message', e.target.value)} */
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
