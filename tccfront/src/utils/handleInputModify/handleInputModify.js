import { FormatCoins } from "../../utils/FormatCoins/FormatCoins.js";
import { RegexPassword } from "../RegexPassword/RegexPassword.js";

export const handleInputModify = (e, step, setForm, form, setImagePreview,setFormErrors) => {
  const { name, value, files } = e.target;

  if (name === "trailImage") {
    if (files?.length) {
      setForm(prev => ({ ...prev, trailImage: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setForm(prev => ({ ...prev, trailImage: "" }));
      setImagePreview(null);
    }
    return;
  }

if (name === "trailPassword") {
 
    setFormErrors(prev => ({ ...prev, trailPassword: RegexPassword(value) }));
    
 
}


  if (name === "trailPoints") {
    const onlyNums  = value.replace(/\D/g, "") || "0";  
    if(onlyNums.length>6)return  
    const formatted = FormatCoins(onlyNums);
    setForm(prev => ({ ...prev, trailPoints: formatted }));
    return;
  }
    if (name === "trailVacancy") {
    const onlyNums  = value.replace(/\D/g, "") || "0";  
    const numInt = parseInt(onlyNums)
    if(numInt>45)return
    if(onlyNums.length>2)return  
    const formatted = FormatCoins(onlyNums);
    setForm(prev => ({ ...prev, trailVacancy: formatted }));
    return;
  }
  

  if (name === "activityPoints") {

    const onlyNums  = value.replace(/\D/g, "") || "0";
    const formatted = FormatCoins(onlyNums);

    setForm(prev => {
      const activities = prev.activities.map((act, idx) =>
        idx === step - 1
          ? { ...act, activityPoints: formatted }
          : act
      );
      return { ...prev, activities };
    });
    return;
  }

  if (name === "trailVacancy") {
    if (value.length > 2) return;
    setForm(prev => ({ ...prev, trailVacancy: value }));
    return;
  }

  if (name === "trailName") {
    if (value.length > 20) return;
    setForm(prev => ({ ...prev, trailName: value }));
    return;
  }
    if (name === "trailDescription") {
    if (value.length > 200) return;
    setForm(prev => ({ ...prev, trailDescription: value }));
    return;
  }

  if (step === 0) {
    setForm(prev => ({ ...prev, [name]: value }));
    return;
  }

  setForm(prev => {
    const activities = [...prev.activities];
    activities[step - 1] = { ...activities[step - 1], [name]: value };
    return { ...prev, activities };
  });





};
